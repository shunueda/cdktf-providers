// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Application this Release Channel belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#application ReleaseChannel#application}
  */
  readonly application: string;
  /**
  * Constant values for this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#constants ReleaseChannel#constants}
  */
  readonly constants?: ReleaseChannelConstants[] | cdktf.IResolvable;
  /**
  * Feature Coming Soon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#convergence_protections ReleaseChannel#convergence_protections}
  */
  readonly convergenceProtections?: ReleaseChannelConvergenceProtections[] | cdktf.IResolvable;
  /**
  * Disable all protections for this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#disable_all_protections ReleaseChannel#disable_all_protections}
  */
  readonly disableAllProtections?: boolean | cdktf.IResolvable;
  /**
  * Preconditions requiring manual approval before this release channel can be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#manual_approval_preconditions ReleaseChannel#manual_approval_preconditions}
  */
  readonly manualApprovalPreconditions?: ReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable;
  /**
  * Release Channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * Release Channel policy applied to all services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#policy ReleaseChannel#policy}
  */
  readonly policy?: ReleaseChannelPolicy;
  /**
  * Protections applied this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#protections ReleaseChannel#protections}
  */
  readonly protections?: ReleaseChannelProtections[] | cdktf.IResolvable;
  /**
  * Preconditions requiring other release channels to be stable before this release channel can be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#release_channel_stable_preconditions ReleaseChannel#release_channel_stable_preconditions}
  */
  readonly releaseChannelStablePreconditions?: ReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable;
  /**
  * Release Channel policy applied to all services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#runtimes ReleaseChannel#runtimes}
  */
  readonly runtimes: ReleaseChannelRuntimes[] | cdktf.IResolvable;
  /**
  * Protections applied to service instances in this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#service_instance_protections ReleaseChannel#service_instance_protections}
  */
  readonly serviceInstanceProtections?: ReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable;
  /**
  * Preconditions requiring manual approval before this release channel can be deployed, shared across release channels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#shared_manual_approval_preconditions ReleaseChannel#shared_manual_approval_preconditions}
  */
  readonly sharedManualApprovalPreconditions?: ReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable;
}
export interface ReleaseChannelConstants {
  /**
  * name of the constant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * string value of the constant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#string_value ReleaseChannel#string_value}
  */
  readonly stringValue: string;
}

export function releaseChannelConstantsToTerraform(struct?: ReleaseChannelConstants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function releaseChannelConstantsToHclTerraform(struct?: ReleaseChannelConstants | cdktf.IResolvable): any {
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
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConstantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelConstants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConstants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stringValue = value.stringValue;
    }
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

  // string_value - computed: false, optional: false, required: true
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class ReleaseChannelConstantsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelConstants[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelConstantsOutputReference {
    return new ReleaseChannelConstantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelConvergenceProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelConvergenceProtectionsDeploymentToTerraform(struct?: ReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelConvergenceProtectionsDeploymentToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelConvergenceProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelConvergenceProtectionsPostApprovalToTerraform(struct?: ReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelConvergenceProtectionsPostApprovalToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelConvergenceProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#check_duration ReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#delay_check_duration ReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelConvergenceProtectionsPostDeploymentToTerraform(struct?: ReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_duration: cdktf.stringToTerraform(struct!.checkDuration),
    delay_check_duration: cdktf.stringToTerraform(struct!.delayCheckDuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelConvergenceProtectionsPostDeploymentToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_duration: {
      value: cdktf.stringToHclTerraform(struct!.checkDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_check_duration: {
      value: cdktf.stringToHclTerraform(struct!.delayCheckDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkDuration = this._checkDuration;
    }
    if (this._delayCheckDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayCheckDuration = this._delayCheckDuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkDuration = undefined;
      this._delayCheckDuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkDuration = value.checkDuration;
      this._delayCheckDuration = value.delayCheckDuration;
      this._enabled = value.enabled;
    }
  }

  // check_duration - computed: false, optional: true, required: false
  private _checkDuration?: string; 
  public get checkDuration() {
    return this.getStringAttribute('check_duration');
  }
  public set checkDuration(value: string) {
    this._checkDuration = value;
  }
  public resetCheckDuration() {
    this._checkDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDurationInput() {
    return this._checkDuration;
  }

  // delay_check_duration - computed: false, optional: true, required: false
  private _delayCheckDuration?: string; 
  public get delayCheckDuration() {
    return this.getStringAttribute('delay_check_duration');
  }
  public set delayCheckDuration(value: string) {
    this._delayCheckDuration = value;
  }
  public resetDelayCheckDuration() {
    this._delayCheckDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayCheckDurationInput() {
    return this._delayCheckDuration;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelConvergenceProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelConvergenceProtectionsPreApprovalToTerraform(struct?: ReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelConvergenceProtectionsPreApprovalToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelConvergenceProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#key ReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#version ReleaseChannel#version}
  */
  readonly version: string;
}

export function releaseChannelConvergenceProtectionsRefParametersSecretValueToTerraform(struct?: ReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function releaseChannelConvergenceProtectionsRefParametersSecretValueToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ReleaseChannelConvergenceProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#docker_image_tag_value ReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#int_value ReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#secret_value ReleaseChannel#secret_value}
  */
  readonly secretValue?: ReleaseChannelConvergenceProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#string_value ReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function releaseChannelConvergenceProtectionsRefParametersToTerraform(struct?: ReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: releaseChannelConvergenceProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function releaseChannelConvergenceProtectionsRefParametersToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.dockerImageTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: releaseChannelConvergenceProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsRefParametersSecretValue",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImageTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageTagValue = this._dockerImageTagValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = undefined;
      this._intValue = undefined;
      this._name = undefined;
      this._secretValue.internalValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = value.dockerImageTagValue;
      this._intValue = value.intValue;
      this._name = value.name;
      this._secretValue.internalValue = value.secretValue;
      this._stringValue = value.stringValue;
    }
  }

  // docker_image_tag_value - computed: false, optional: true, required: false
  private _dockerImageTagValue?: string; 
  public get dockerImageTagValue() {
    return this.getStringAttribute('docker_image_tag_value');
  }
  public set dockerImageTagValue(value: string) {
    this._dockerImageTagValue = value;
  }
  public resetDockerImageTagValue() {
    this._dockerImageTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageTagValueInput() {
    return this._dockerImageTagValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new ReleaseChannelConvergenceProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: ReleaseChannelConvergenceProtectionsRefParametersSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class ReleaseChannelConvergenceProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelConvergenceProtectionsRefParametersOutputReference {
    return new ReleaseChannelConvergenceProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelConvergenceProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#parameters ReleaseChannel#parameters}
  */
  readonly parameters?: ReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable;
}

export function releaseChannelConvergenceProtectionsRefToTerraform(struct?: ReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(releaseChannelConvergenceProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function releaseChannelConvergenceProtectionsRefToHclTerraform(struct?: ReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.listMapperHcl(releaseChannelConvergenceProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ReleaseChannelConvergenceProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ReleaseChannelConvergenceProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface ReleaseChannelConvergenceProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#deployment ReleaseChannel#deployment}
  */
  readonly deployment?: ReleaseChannelConvergenceProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_approval ReleaseChannel#post_approval}
  */
  readonly postApproval?: ReleaseChannelConvergenceProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_deployment ReleaseChannel#post_deployment}
  */
  readonly postDeployment?: ReleaseChannelConvergenceProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#pre_approval ReleaseChannel#pre_approval}
  */
  readonly preApproval?: ReleaseChannelConvergenceProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#ref ReleaseChannel#ref}
  */
  readonly ref: ReleaseChannelConvergenceProtectionsRef;
}

export function releaseChannelConvergenceProtectionsToTerraform(struct?: ReleaseChannelConvergenceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: releaseChannelConvergenceProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: releaseChannelConvergenceProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: releaseChannelConvergenceProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: releaseChannelConvergenceProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: releaseChannelConvergenceProtectionsRefToTerraform(struct!.ref),
  }
}


export function releaseChannelConvergenceProtectionsToHclTerraform(struct?: ReleaseChannelConvergenceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: releaseChannelConvergenceProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: releaseChannelConvergenceProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsPostApproval",
    },
    post_deployment: {
      value: releaseChannelConvergenceProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsPostDeployment",
    },
    pre_approval: {
      value: releaseChannelConvergenceProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsPreApproval",
    },
    ref: {
      value: releaseChannelConvergenceProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelConvergenceProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelConvergenceProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelConvergenceProtections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postApproval = this._postApproval?.internalValue;
    }
    if (this._postDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDeployment = this._postDeployment?.internalValue;
    }
    if (this._preApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preApproval = this._preApproval?.internalValue;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelConvergenceProtections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._name = undefined;
      this._postApproval.internalValue = undefined;
      this._postDeployment.internalValue = undefined;
      this._preApproval.internalValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._name = value.name;
      this._postApproval.internalValue = value.postApproval;
      this._postDeployment.internalValue = value.postDeployment;
      this._preApproval.internalValue = value.preApproval;
      this._ref.internalValue = value.ref;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new ReleaseChannelConvergenceProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: ReleaseChannelConvergenceProtectionsDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
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

  // post_approval - computed: false, optional: true, required: false
  private _postApproval = new ReleaseChannelConvergenceProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: ReleaseChannelConvergenceProtectionsPostApproval) {
    this._postApproval.internalValue = value;
  }
  public resetPostApproval() {
    this._postApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postApprovalInput() {
    return this._postApproval.internalValue;
  }

  // post_deployment - computed: false, optional: true, required: false
  private _postDeployment = new ReleaseChannelConvergenceProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: ReleaseChannelConvergenceProtectionsPostDeployment) {
    this._postDeployment.internalValue = value;
  }
  public resetPostDeployment() {
    this._postDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDeploymentInput() {
    return this._postDeployment.internalValue;
  }

  // pre_approval - computed: false, optional: true, required: false
  private _preApproval = new ReleaseChannelConvergenceProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: ReleaseChannelConvergenceProtectionsPreApproval) {
    this._preApproval.internalValue = value;
  }
  public resetPreApproval() {
    this._preApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preApprovalInput() {
    return this._preApproval.internalValue;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new ReleaseChannelConvergenceProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: ReleaseChannelConvergenceProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class ReleaseChannelConvergenceProtectionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelConvergenceProtections[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelConvergenceProtectionsOutputReference {
    return new ReleaseChannelConvergenceProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelManualApprovalPreconditions {
  /**
  * description of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#description ReleaseChannel#description}
  */
  readonly description?: string;
  /**
  * whether this approval is required for every convergence action, or just the first. This only works for runtime extensions and Terraform runners. Setting this field to true will not result in any approvals being requested for Kubernetes services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#every_action ReleaseChannel#every_action}
  */
  readonly everyAction?: boolean | cdktf.IResolvable;
  /**
  * name of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
}

export function releaseChannelManualApprovalPreconditionsToTerraform(struct?: ReleaseChannelManualApprovalPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    every_action: cdktf.booleanToTerraform(struct!.everyAction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function releaseChannelManualApprovalPreconditionsToHclTerraform(struct?: ReleaseChannelManualApprovalPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    every_action: {
      value: cdktf.booleanToHclTerraform(struct!.everyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ReleaseChannelManualApprovalPreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelManualApprovalPreconditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._everyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyAction = this._everyAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelManualApprovalPreconditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._everyAction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._everyAction = value.everyAction;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // every_action - computed: true, optional: true, required: false
  private _everyAction?: boolean | cdktf.IResolvable; 
  public get everyAction() {
    return this.getBooleanAttribute('every_action');
  }
  public set everyAction(value: boolean | cdktf.IResolvable) {
    this._everyAction = value;
  }
  public resetEveryAction() {
    this._everyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyActionInput() {
    return this._everyAction;
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
}

export class ReleaseChannelManualApprovalPreconditionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelManualApprovalPreconditionsOutputReference {
    return new ReleaseChannelManualApprovalPreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelPolicyDefaultEnvKubernetesSecret {
  /**
  * Key of the secret in the data field of the secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#key ReleaseChannel#key}
  */
  readonly key?: string;
  /**
  * Name of the secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#secret_name ReleaseChannel#secret_name}
  */
  readonly secretName?: string;
}

export function releaseChannelPolicyDefaultEnvKubernetesSecretToTerraform(struct?: ReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function releaseChannelPolicyDefaultEnvKubernetesSecretToHclTerraform(struct?: ReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelPolicyDefaultEnvKubernetesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ReleaseChannelPolicyDefaultEnvSecret {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#key ReleaseChannel#key}
  */
  readonly key?: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#version ReleaseChannel#version}
  */
  readonly version?: string;
}

export function releaseChannelPolicyDefaultEnvSecretToTerraform(struct?: ReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function releaseChannelPolicyDefaultEnvSecretToHclTerraform(struct?: ReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelPolicyDefaultEnvSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ReleaseChannelPolicyDefaultEnv {
  /**
  * Reference to a secret value stored in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#kubernetes_secret ReleaseChannel#kubernetes_secret}
  */
  readonly kubernetesSecret?: ReleaseChannelPolicyDefaultEnvKubernetesSecret;
  /**
  * Reference to a secret value stored in Prodvana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#secret ReleaseChannel#secret}
  */
  readonly secret?: ReleaseChannelPolicyDefaultEnvSecret;
  /**
  * Non-sensitive environment variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#value ReleaseChannel#value}
  */
  readonly value?: string;
}

export function releaseChannelPolicyDefaultEnvToTerraform(struct?: ReleaseChannelPolicyDefaultEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_secret: releaseChannelPolicyDefaultEnvKubernetesSecretToTerraform(struct!.kubernetesSecret),
    secret: releaseChannelPolicyDefaultEnvSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function releaseChannelPolicyDefaultEnvToHclTerraform(struct?: ReleaseChannelPolicyDefaultEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_secret: {
      value: releaseChannelPolicyDefaultEnvKubernetesSecretToHclTerraform(struct!.kubernetesSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelPolicyDefaultEnvKubernetesSecret",
    },
    secret: {
      value: releaseChannelPolicyDefaultEnvSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelPolicyDefaultEnvSecret",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelPolicyDefaultEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ReleaseChannelPolicyDefaultEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSecret = this._kubernetesSecret?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelPolicyDefaultEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetesSecret.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetesSecret.internalValue = value.kubernetesSecret;
      this._secret.internalValue = value.secret;
      this._value = value.value;
    }
  }

  // kubernetes_secret - computed: false, optional: true, required: false
  private _kubernetesSecret = new ReleaseChannelPolicyDefaultEnvKubernetesSecretOutputReference(this, "kubernetes_secret");
  public get kubernetesSecret() {
    return this._kubernetesSecret;
  }
  public putKubernetesSecret(value: ReleaseChannelPolicyDefaultEnvKubernetesSecret) {
    this._kubernetesSecret.internalValue = value;
  }
  public resetKubernetesSecret() {
    this._kubernetesSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretInput() {
    return this._kubernetesSecret.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ReleaseChannelPolicyDefaultEnvSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ReleaseChannelPolicyDefaultEnvSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class ReleaseChannelPolicyDefaultEnvMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ReleaseChannelPolicyDefaultEnvOutputReference {
    return new ReleaseChannelPolicyDefaultEnvOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ReleaseChannelPolicy {
  /**
  * default environment variables for services in this Release Channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#default_env ReleaseChannel#default_env}
  */
  readonly defaultEnv?: { [key: string]: ReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable;
}

export function releaseChannelPolicyToTerraform(struct?: ReleaseChannelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_env: cdktf.hashMapper(releaseChannelPolicyDefaultEnvToTerraform)(struct!.defaultEnv),
  }
}


export function releaseChannelPolicyToHclTerraform(struct?: ReleaseChannelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_env: {
      value: cdktf.hashMapperHcl(releaseChannelPolicyDefaultEnvToHclTerraform)(struct!.defaultEnv),
      isBlock: true,
      type: "map",
      storageClassType: "ReleaseChannelPolicyDefaultEnvMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEnv = this._defaultEnv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEnv.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEnv.internalValue = value.defaultEnv;
    }
  }

  // default_env - computed: false, optional: true, required: false
  private _defaultEnv = new ReleaseChannelPolicyDefaultEnvMap(this, "default_env");
  public get defaultEnv() {
    return this._defaultEnv;
  }
  public putDefaultEnv(value: { [key: string]: ReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable) {
    this._defaultEnv.internalValue = value;
  }
  public resetDefaultEnv() {
    this._defaultEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEnvInput() {
    return this._defaultEnv.internalValue;
  }
}
export interface ReleaseChannelProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelProtectionsDeploymentToTerraform(struct?: ReleaseChannelProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelProtectionsDeploymentToHclTerraform(struct?: ReleaseChannelProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelProtectionsPostApprovalToTerraform(struct?: ReleaseChannelProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelProtectionsPostApprovalToHclTerraform(struct?: ReleaseChannelProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsPostApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsPostApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#check_duration ReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#delay_check_duration ReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelProtectionsPostDeploymentToTerraform(struct?: ReleaseChannelProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_duration: cdktf.stringToTerraform(struct!.checkDuration),
    delay_check_duration: cdktf.stringToTerraform(struct!.delayCheckDuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelProtectionsPostDeploymentToHclTerraform(struct?: ReleaseChannelProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_duration: {
      value: cdktf.stringToHclTerraform(struct!.checkDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_check_duration: {
      value: cdktf.stringToHclTerraform(struct!.delayCheckDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsPostDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkDuration = this._checkDuration;
    }
    if (this._delayCheckDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayCheckDuration = this._delayCheckDuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsPostDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkDuration = undefined;
      this._delayCheckDuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkDuration = value.checkDuration;
      this._delayCheckDuration = value.delayCheckDuration;
      this._enabled = value.enabled;
    }
  }

  // check_duration - computed: false, optional: true, required: false
  private _checkDuration?: string; 
  public get checkDuration() {
    return this.getStringAttribute('check_duration');
  }
  public set checkDuration(value: string) {
    this._checkDuration = value;
  }
  public resetCheckDuration() {
    this._checkDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDurationInput() {
    return this._checkDuration;
  }

  // delay_check_duration - computed: false, optional: true, required: false
  private _delayCheckDuration?: string; 
  public get delayCheckDuration() {
    return this.getStringAttribute('delay_check_duration');
  }
  public set delayCheckDuration(value: string) {
    this._delayCheckDuration = value;
  }
  public resetDelayCheckDuration() {
    this._delayCheckDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayCheckDurationInput() {
    return this._delayCheckDuration;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelProtectionsPreApprovalToTerraform(struct?: ReleaseChannelProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelProtectionsPreApprovalToHclTerraform(struct?: ReleaseChannelProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsPreApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsPreApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#key ReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#version ReleaseChannel#version}
  */
  readonly version: string;
}

export function releaseChannelProtectionsRefParametersSecretValueToTerraform(struct?: ReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function releaseChannelProtectionsRefParametersSecretValueToHclTerraform(struct?: ReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ReleaseChannelProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#docker_image_tag_value ReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#int_value ReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#secret_value ReleaseChannel#secret_value}
  */
  readonly secretValue?: ReleaseChannelProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#string_value ReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function releaseChannelProtectionsRefParametersToTerraform(struct?: ReleaseChannelProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: releaseChannelProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function releaseChannelProtectionsRefParametersToHclTerraform(struct?: ReleaseChannelProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.dockerImageTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: releaseChannelProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsRefParametersSecretValue",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelProtectionsRefParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImageTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageTagValue = this._dockerImageTagValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsRefParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = undefined;
      this._intValue = undefined;
      this._name = undefined;
      this._secretValue.internalValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = value.dockerImageTagValue;
      this._intValue = value.intValue;
      this._name = value.name;
      this._secretValue.internalValue = value.secretValue;
      this._stringValue = value.stringValue;
    }
  }

  // docker_image_tag_value - computed: false, optional: true, required: false
  private _dockerImageTagValue?: string; 
  public get dockerImageTagValue() {
    return this.getStringAttribute('docker_image_tag_value');
  }
  public set dockerImageTagValue(value: string) {
    this._dockerImageTagValue = value;
  }
  public resetDockerImageTagValue() {
    this._dockerImageTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageTagValueInput() {
    return this._dockerImageTagValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new ReleaseChannelProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: ReleaseChannelProtectionsRefParametersSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class ReleaseChannelProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelProtectionsRefParametersOutputReference {
    return new ReleaseChannelProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#parameters ReleaseChannel#parameters}
  */
  readonly parameters?: ReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable;
}

export function releaseChannelProtectionsRefToTerraform(struct?: ReleaseChannelProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(releaseChannelProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function releaseChannelProtectionsRefToHclTerraform(struct?: ReleaseChannelProtectionsRef | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.listMapperHcl(releaseChannelProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ReleaseChannelProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelProtectionsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtectionsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ReleaseChannelProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface ReleaseChannelProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#deployment ReleaseChannel#deployment}
  */
  readonly deployment?: ReleaseChannelProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_approval ReleaseChannel#post_approval}
  */
  readonly postApproval?: ReleaseChannelProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_deployment ReleaseChannel#post_deployment}
  */
  readonly postDeployment?: ReleaseChannelProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#pre_approval ReleaseChannel#pre_approval}
  */
  readonly preApproval?: ReleaseChannelProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#ref ReleaseChannel#ref}
  */
  readonly ref: ReleaseChannelProtectionsRef;
}

export function releaseChannelProtectionsToTerraform(struct?: ReleaseChannelProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: releaseChannelProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: releaseChannelProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: releaseChannelProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: releaseChannelProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: releaseChannelProtectionsRefToTerraform(struct!.ref),
  }
}


export function releaseChannelProtectionsToHclTerraform(struct?: ReleaseChannelProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: releaseChannelProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: releaseChannelProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsPostApproval",
    },
    post_deployment: {
      value: releaseChannelProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsPostDeployment",
    },
    pre_approval: {
      value: releaseChannelProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsPreApproval",
    },
    ref: {
      value: releaseChannelProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelProtections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postApproval = this._postApproval?.internalValue;
    }
    if (this._postDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDeployment = this._postDeployment?.internalValue;
    }
    if (this._preApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preApproval = this._preApproval?.internalValue;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelProtections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._name = undefined;
      this._postApproval.internalValue = undefined;
      this._postDeployment.internalValue = undefined;
      this._preApproval.internalValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._name = value.name;
      this._postApproval.internalValue = value.postApproval;
      this._postDeployment.internalValue = value.postDeployment;
      this._preApproval.internalValue = value.preApproval;
      this._ref.internalValue = value.ref;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new ReleaseChannelProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: ReleaseChannelProtectionsDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
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

  // post_approval - computed: false, optional: true, required: false
  private _postApproval = new ReleaseChannelProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: ReleaseChannelProtectionsPostApproval) {
    this._postApproval.internalValue = value;
  }
  public resetPostApproval() {
    this._postApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postApprovalInput() {
    return this._postApproval.internalValue;
  }

  // post_deployment - computed: false, optional: true, required: false
  private _postDeployment = new ReleaseChannelProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: ReleaseChannelProtectionsPostDeployment) {
    this._postDeployment.internalValue = value;
  }
  public resetPostDeployment() {
    this._postDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDeploymentInput() {
    return this._postDeployment.internalValue;
  }

  // pre_approval - computed: false, optional: true, required: false
  private _preApproval = new ReleaseChannelProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: ReleaseChannelProtectionsPreApproval) {
    this._preApproval.internalValue = value;
  }
  public resetPreApproval() {
    this._preApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preApprovalInput() {
    return this._preApproval.internalValue;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new ReleaseChannelProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: ReleaseChannelProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class ReleaseChannelProtectionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelProtections[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelProtectionsOutputReference {
    return new ReleaseChannelProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelReleaseChannelStablePreconditions {
  /**
  * name of a release channel that must be in a stable deployment state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#release_channel ReleaseChannel#release_channel}
  */
  readonly releaseChannel: string;
}

export function releaseChannelReleaseChannelStablePreconditionsToTerraform(struct?: ReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release_channel: cdktf.stringToTerraform(struct!.releaseChannel),
  }
}


export function releaseChannelReleaseChannelStablePreconditionsToHclTerraform(struct?: ReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    release_channel: {
      value: cdktf.stringToHclTerraform(struct!.releaseChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelReleaseChannelStablePreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._releaseChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseChannel = this._releaseChannel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._releaseChannel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._releaseChannel = value.releaseChannel;
    }
  }

  // release_channel - computed: false, optional: false, required: true
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }
}

export class ReleaseChannelReleaseChannelStablePreconditionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelReleaseChannelStablePreconditionsOutputReference {
    return new ReleaseChannelReleaseChannelStablePreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelRuntimes {
  /**
  * Prefix used when naming ECS resources. Can only be set on an ECS Runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#ecs_prefix ReleaseChannel#ecs_prefix}
  */
  readonly ecsPrefix?: string;
  /**
  * Optionally set a custom namespace. If not set, Prodvana will create and manage the namespace. If set, the namespace *must* already exist and Prodvana will not try to create or delete it. Can only be set on a Kubernetes Runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#k8s_namespace ReleaseChannel#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * optional identifier for this runtime connection within this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * name of the a runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#runtime ReleaseChannel#runtime}
  */
  readonly runtime?: string;
}

export function releaseChannelRuntimesToTerraform(struct?: ReleaseChannelRuntimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ecs_prefix: cdktf.stringToTerraform(struct!.ecsPrefix),
    k8s_namespace: cdktf.stringToTerraform(struct!.k8SNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}


export function releaseChannelRuntimesToHclTerraform(struct?: ReleaseChannelRuntimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ecs_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ecsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_namespace: {
      value: cdktf.stringToHclTerraform(struct!.k8SNamespace),
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
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelRuntimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelRuntimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ecsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsPrefix = this._ecsPrefix;
    }
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelRuntimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ecsPrefix = undefined;
      this._k8SNamespace = undefined;
      this._name = undefined;
      this._runtime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ecsPrefix = value.ecsPrefix;
      this._k8SNamespace = value.k8SNamespace;
      this._name = value.name;
      this._runtime = value.runtime;
    }
  }

  // ecs_prefix - computed: true, optional: true, required: false
  private _ecsPrefix?: string; 
  public get ecsPrefix() {
    return this.getStringAttribute('ecs_prefix');
  }
  public set ecsPrefix(value: string) {
    this._ecsPrefix = value;
  }
  public resetEcsPrefix() {
    this._ecsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPrefixInput() {
    return this._ecsPrefix;
  }

  // k8s_namespace - computed: true, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
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

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ReleaseChannelRuntimesList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelRuntimes[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelRuntimesOutputReference {
    return new ReleaseChannelRuntimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelServiceInstanceProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelServiceInstanceProtectionsDeploymentToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelServiceInstanceProtectionsDeploymentToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelServiceInstanceProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelServiceInstanceProtectionsPostApprovalToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelServiceInstanceProtectionsPostApprovalToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelServiceInstanceProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#check_duration ReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#delay_check_duration ReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelServiceInstanceProtectionsPostDeploymentToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_duration: cdktf.stringToTerraform(struct!.checkDuration),
    delay_check_duration: cdktf.stringToTerraform(struct!.delayCheckDuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelServiceInstanceProtectionsPostDeploymentToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_duration: {
      value: cdktf.stringToHclTerraform(struct!.checkDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_check_duration: {
      value: cdktf.stringToHclTerraform(struct!.delayCheckDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkDuration = this._checkDuration;
    }
    if (this._delayCheckDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayCheckDuration = this._delayCheckDuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkDuration = undefined;
      this._delayCheckDuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkDuration = value.checkDuration;
      this._delayCheckDuration = value.delayCheckDuration;
      this._enabled = value.enabled;
    }
  }

  // check_duration - computed: false, optional: true, required: false
  private _checkDuration?: string; 
  public get checkDuration() {
    return this.getStringAttribute('check_duration');
  }
  public set checkDuration(value: string) {
    this._checkDuration = value;
  }
  public resetCheckDuration() {
    this._checkDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDurationInput() {
    return this._checkDuration;
  }

  // delay_check_duration - computed: false, optional: true, required: false
  private _delayCheckDuration?: string; 
  public get delayCheckDuration() {
    return this.getStringAttribute('delay_check_duration');
  }
  public set delayCheckDuration(value: string) {
    this._delayCheckDuration = value;
  }
  public resetDelayCheckDuration() {
    this._delayCheckDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayCheckDurationInput() {
    return this._delayCheckDuration;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelServiceInstanceProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#enabled ReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function releaseChannelServiceInstanceProtectionsPreApprovalToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function releaseChannelServiceInstanceProtectionsPreApprovalToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#key ReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#version ReleaseChannel#version}
  */
  readonly version: string;
}

export function releaseChannelServiceInstanceProtectionsRefParametersSecretValueToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function releaseChannelServiceInstanceProtectionsRefParametersSecretValueToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ReleaseChannelServiceInstanceProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#docker_image_tag_value ReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#int_value ReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#secret_value ReleaseChannel#secret_value}
  */
  readonly secretValue?: ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#string_value ReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function releaseChannelServiceInstanceProtectionsRefParametersToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: releaseChannelServiceInstanceProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function releaseChannelServiceInstanceProtectionsRefParametersToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.dockerImageTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: releaseChannelServiceInstanceProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImageTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageTagValue = this._dockerImageTagValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = undefined;
      this._intValue = undefined;
      this._name = undefined;
      this._secretValue.internalValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImageTagValue = value.dockerImageTagValue;
      this._intValue = value.intValue;
      this._name = value.name;
      this._secretValue.internalValue = value.secretValue;
      this._stringValue = value.stringValue;
    }
  }

  // docker_image_tag_value - computed: false, optional: true, required: false
  private _dockerImageTagValue?: string; 
  public get dockerImageTagValue() {
    return this.getStringAttribute('docker_image_tag_value');
  }
  public set dockerImageTagValue(value: string) {
    this._dockerImageTagValue = value;
  }
  public resetDockerImageTagValue() {
    this._dockerImageTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageTagValueInput() {
    return this._dockerImageTagValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new ReleaseChannelServiceInstanceProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: ReleaseChannelServiceInstanceProtectionsRefParametersSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class ReleaseChannelServiceInstanceProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelServiceInstanceProtectionsRefParametersOutputReference {
    return new ReleaseChannelServiceInstanceProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelServiceInstanceProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#parameters ReleaseChannel#parameters}
  */
  readonly parameters?: ReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable;
}

export function releaseChannelServiceInstanceProtectionsRefToTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(releaseChannelServiceInstanceProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function releaseChannelServiceInstanceProtectionsRefToHclTerraform(struct?: ReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.listMapperHcl(releaseChannelServiceInstanceProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ReleaseChannelServiceInstanceProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface ReleaseChannelServiceInstanceProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#deployment ReleaseChannel#deployment}
  */
  readonly deployment?: ReleaseChannelServiceInstanceProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_approval ReleaseChannel#post_approval}
  */
  readonly postApproval?: ReleaseChannelServiceInstanceProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#post_deployment ReleaseChannel#post_deployment}
  */
  readonly postDeployment?: ReleaseChannelServiceInstanceProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#pre_approval ReleaseChannel#pre_approval}
  */
  readonly preApproval?: ReleaseChannelServiceInstanceProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#ref ReleaseChannel#ref}
  */
  readonly ref: ReleaseChannelServiceInstanceProtectionsRef;
}

export function releaseChannelServiceInstanceProtectionsToTerraform(struct?: ReleaseChannelServiceInstanceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: releaseChannelServiceInstanceProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: releaseChannelServiceInstanceProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: releaseChannelServiceInstanceProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: releaseChannelServiceInstanceProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: releaseChannelServiceInstanceProtectionsRefToTerraform(struct!.ref),
  }
}


export function releaseChannelServiceInstanceProtectionsToHclTerraform(struct?: ReleaseChannelServiceInstanceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: releaseChannelServiceInstanceProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: releaseChannelServiceInstanceProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsPostApproval",
    },
    post_deployment: {
      value: releaseChannelServiceInstanceProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsPostDeployment",
    },
    pre_approval: {
      value: releaseChannelServiceInstanceProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsPreApproval",
    },
    ref: {
      value: releaseChannelServiceInstanceProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "ReleaseChannelServiceInstanceProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelServiceInstanceProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelServiceInstanceProtections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postApproval = this._postApproval?.internalValue;
    }
    if (this._postDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDeployment = this._postDeployment?.internalValue;
    }
    if (this._preApproval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preApproval = this._preApproval?.internalValue;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelServiceInstanceProtections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._name = undefined;
      this._postApproval.internalValue = undefined;
      this._postDeployment.internalValue = undefined;
      this._preApproval.internalValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._name = value.name;
      this._postApproval.internalValue = value.postApproval;
      this._postDeployment.internalValue = value.postDeployment;
      this._preApproval.internalValue = value.preApproval;
      this._ref.internalValue = value.ref;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new ReleaseChannelServiceInstanceProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: ReleaseChannelServiceInstanceProtectionsDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
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

  // post_approval - computed: false, optional: true, required: false
  private _postApproval = new ReleaseChannelServiceInstanceProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: ReleaseChannelServiceInstanceProtectionsPostApproval) {
    this._postApproval.internalValue = value;
  }
  public resetPostApproval() {
    this._postApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postApprovalInput() {
    return this._postApproval.internalValue;
  }

  // post_deployment - computed: false, optional: true, required: false
  private _postDeployment = new ReleaseChannelServiceInstanceProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: ReleaseChannelServiceInstanceProtectionsPostDeployment) {
    this._postDeployment.internalValue = value;
  }
  public resetPostDeployment() {
    this._postDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDeploymentInput() {
    return this._postDeployment.internalValue;
  }

  // pre_approval - computed: false, optional: true, required: false
  private _preApproval = new ReleaseChannelServiceInstanceProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: ReleaseChannelServiceInstanceProtectionsPreApproval) {
    this._preApproval.internalValue = value;
  }
  public resetPreApproval() {
    this._preApproval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preApprovalInput() {
    return this._preApproval.internalValue;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new ReleaseChannelServiceInstanceProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: ReleaseChannelServiceInstanceProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class ReleaseChannelServiceInstanceProtectionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelServiceInstanceProtectionsOutputReference {
    return new ReleaseChannelServiceInstanceProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseChannelSharedManualApprovalPreconditions {
  /**
  * name of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#name ReleaseChannel#name}
  */
  readonly name?: string;
}

export function releaseChannelSharedManualApprovalPreconditionsToTerraform(struct?: ReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function releaseChannelSharedManualApprovalPreconditionsToHclTerraform(struct?: ReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseChannelSharedManualApprovalPreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ReleaseChannelSharedManualApprovalPreconditionsList extends cdktf.ComplexList {
  public internalValue? : ReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable

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
  public get(index: number): ReleaseChannelSharedManualApprovalPreconditionsOutputReference {
    return new ReleaseChannelSharedManualApprovalPreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel prodvana_release_channel}
*/
export class ReleaseChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_release_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseChannel to import
  * @param importFromId The id of the existing ReleaseChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_release_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/release_channel prodvana_release_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_release_channel',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._constants.internalValue = config.constants;
    this._convergenceProtections.internalValue = config.convergenceProtections;
    this._disableAllProtections = config.disableAllProtections;
    this._manualApprovalPreconditions.internalValue = config.manualApprovalPreconditions;
    this._name = config.name;
    this._policy.internalValue = config.policy;
    this._protections.internalValue = config.protections;
    this._releaseChannelStablePreconditions.internalValue = config.releaseChannelStablePreconditions;
    this._runtimes.internalValue = config.runtimes;
    this._serviceInstanceProtections.internalValue = config.serviceInstanceProtections;
    this._sharedManualApprovalPreconditions.internalValue = config.sharedManualApprovalPreconditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // constants - computed: false, optional: true, required: false
  private _constants = new ReleaseChannelConstantsList(this, "constants", false);
  public get constants() {
    return this._constants;
  }
  public putConstants(value: ReleaseChannelConstants[] | cdktf.IResolvable) {
    this._constants.internalValue = value;
  }
  public resetConstants() {
    this._constants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantsInput() {
    return this._constants.internalValue;
  }

  // convergence_protections - computed: false, optional: true, required: false
  private _convergenceProtections = new ReleaseChannelConvergenceProtectionsList(this, "convergence_protections", false);
  public get convergenceProtections() {
    return this._convergenceProtections;
  }
  public putConvergenceProtections(value: ReleaseChannelConvergenceProtections[] | cdktf.IResolvable) {
    this._convergenceProtections.internalValue = value;
  }
  public resetConvergenceProtections() {
    this._convergenceProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergenceProtectionsInput() {
    return this._convergenceProtections.internalValue;
  }

  // disable_all_protections - computed: true, optional: true, required: false
  private _disableAllProtections?: boolean | cdktf.IResolvable; 
  public get disableAllProtections() {
    return this.getBooleanAttribute('disable_all_protections');
  }
  public set disableAllProtections(value: boolean | cdktf.IResolvable) {
    this._disableAllProtections = value;
  }
  public resetDisableAllProtections() {
    this._disableAllProtections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllProtectionsInput() {
    return this._disableAllProtections;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manual_approval_preconditions - computed: false, optional: true, required: false
  private _manualApprovalPreconditions = new ReleaseChannelManualApprovalPreconditionsList(this, "manual_approval_preconditions", false);
  public get manualApprovalPreconditions() {
    return this._manualApprovalPreconditions;
  }
  public putManualApprovalPreconditions(value: ReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable) {
    this._manualApprovalPreconditions.internalValue = value;
  }
  public resetManualApprovalPreconditions() {
    this._manualApprovalPreconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualApprovalPreconditionsInput() {
    return this._manualApprovalPreconditions.internalValue;
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

  // policy - computed: false, optional: true, required: false
  private _policy = new ReleaseChannelPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ReleaseChannelPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // protections - computed: false, optional: true, required: false
  private _protections = new ReleaseChannelProtectionsList(this, "protections", false);
  public get protections() {
    return this._protections;
  }
  public putProtections(value: ReleaseChannelProtections[] | cdktf.IResolvable) {
    this._protections.internalValue = value;
  }
  public resetProtections() {
    this._protections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionsInput() {
    return this._protections.internalValue;
  }

  // release_channel_stable_preconditions - computed: false, optional: true, required: false
  private _releaseChannelStablePreconditions = new ReleaseChannelReleaseChannelStablePreconditionsList(this, "release_channel_stable_preconditions", false);
  public get releaseChannelStablePreconditions() {
    return this._releaseChannelStablePreconditions;
  }
  public putReleaseChannelStablePreconditions(value: ReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable) {
    this._releaseChannelStablePreconditions.internalValue = value;
  }
  public resetReleaseChannelStablePreconditions() {
    this._releaseChannelStablePreconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelStablePreconditionsInput() {
    return this._releaseChannelStablePreconditions.internalValue;
  }

  // runtimes - computed: false, optional: false, required: true
  private _runtimes = new ReleaseChannelRuntimesList(this, "runtimes", false);
  public get runtimes() {
    return this._runtimes;
  }
  public putRuntimes(value: ReleaseChannelRuntimes[] | cdktf.IResolvable) {
    this._runtimes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimesInput() {
    return this._runtimes.internalValue;
  }

  // service_instance_protections - computed: false, optional: true, required: false
  private _serviceInstanceProtections = new ReleaseChannelServiceInstanceProtectionsList(this, "service_instance_protections", false);
  public get serviceInstanceProtections() {
    return this._serviceInstanceProtections;
  }
  public putServiceInstanceProtections(value: ReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable) {
    this._serviceInstanceProtections.internalValue = value;
  }
  public resetServiceInstanceProtections() {
    this._serviceInstanceProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceProtectionsInput() {
    return this._serviceInstanceProtections.internalValue;
  }

  // shared_manual_approval_preconditions - computed: false, optional: true, required: false
  private _sharedManualApprovalPreconditions = new ReleaseChannelSharedManualApprovalPreconditionsList(this, "shared_manual_approval_preconditions", false);
  public get sharedManualApprovalPreconditions() {
    return this._sharedManualApprovalPreconditions;
  }
  public putSharedManualApprovalPreconditions(value: ReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable) {
    this._sharedManualApprovalPreconditions.internalValue = value;
  }
  public resetSharedManualApprovalPreconditions() {
    this._sharedManualApprovalPreconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedManualApprovalPreconditionsInput() {
    return this._sharedManualApprovalPreconditions.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      constants: cdktf.listMapper(releaseChannelConstantsToTerraform, false)(this._constants.internalValue),
      convergence_protections: cdktf.listMapper(releaseChannelConvergenceProtectionsToTerraform, false)(this._convergenceProtections.internalValue),
      disable_all_protections: cdktf.booleanToTerraform(this._disableAllProtections),
      manual_approval_preconditions: cdktf.listMapper(releaseChannelManualApprovalPreconditionsToTerraform, false)(this._manualApprovalPreconditions.internalValue),
      name: cdktf.stringToTerraform(this._name),
      policy: releaseChannelPolicyToTerraform(this._policy.internalValue),
      protections: cdktf.listMapper(releaseChannelProtectionsToTerraform, false)(this._protections.internalValue),
      release_channel_stable_preconditions: cdktf.listMapper(releaseChannelReleaseChannelStablePreconditionsToTerraform, false)(this._releaseChannelStablePreconditions.internalValue),
      runtimes: cdktf.listMapper(releaseChannelRuntimesToTerraform, false)(this._runtimes.internalValue),
      service_instance_protections: cdktf.listMapper(releaseChannelServiceInstanceProtectionsToTerraform, false)(this._serviceInstanceProtections.internalValue),
      shared_manual_approval_preconditions: cdktf.listMapper(releaseChannelSharedManualApprovalPreconditionsToTerraform, false)(this._sharedManualApprovalPreconditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constants: {
        value: cdktf.listMapperHcl(releaseChannelConstantsToHclTerraform, false)(this._constants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelConstantsList",
      },
      convergence_protections: {
        value: cdktf.listMapperHcl(releaseChannelConvergenceProtectionsToHclTerraform, false)(this._convergenceProtections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelConvergenceProtectionsList",
      },
      disable_all_protections: {
        value: cdktf.booleanToHclTerraform(this._disableAllProtections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manual_approval_preconditions: {
        value: cdktf.listMapperHcl(releaseChannelManualApprovalPreconditionsToHclTerraform, false)(this._manualApprovalPreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelManualApprovalPreconditionsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: releaseChannelPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseChannelPolicy",
      },
      protections: {
        value: cdktf.listMapperHcl(releaseChannelProtectionsToHclTerraform, false)(this._protections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelProtectionsList",
      },
      release_channel_stable_preconditions: {
        value: cdktf.listMapperHcl(releaseChannelReleaseChannelStablePreconditionsToHclTerraform, false)(this._releaseChannelStablePreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelReleaseChannelStablePreconditionsList",
      },
      runtimes: {
        value: cdktf.listMapperHcl(releaseChannelRuntimesToHclTerraform, false)(this._runtimes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelRuntimesList",
      },
      service_instance_protections: {
        value: cdktf.listMapperHcl(releaseChannelServiceInstanceProtectionsToHclTerraform, false)(this._serviceInstanceProtections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelServiceInstanceProtectionsList",
      },
      shared_manual_approval_preconditions: {
        value: cdktf.listMapperHcl(releaseChannelSharedManualApprovalPreconditionsToHclTerraform, false)(this._sharedManualApprovalPreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseChannelSharedManualApprovalPreconditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
