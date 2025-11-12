// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProdvanaReleaseChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Application this Release Channel belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#application DataProdvanaReleaseChannel#application}
  */
  readonly application: string;
  /**
  * Constant values for this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#constants DataProdvanaReleaseChannel#constants}
  */
  readonly constants?: DataProdvanaReleaseChannelConstants[] | cdktf.IResolvable;
  /**
  * Feature Coming Soon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#convergence_protections DataProdvanaReleaseChannel#convergence_protections}
  */
  readonly convergenceProtections?: DataProdvanaReleaseChannelConvergenceProtections[] | cdktf.IResolvable;
  /**
  * Disable all protections for this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#disable_all_protections DataProdvanaReleaseChannel#disable_all_protections}
  */
  readonly disableAllProtections?: boolean | cdktf.IResolvable;
  /**
  * Preconditions requiring manual approval before this release channel can be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#manual_approval_preconditions DataProdvanaReleaseChannel#manual_approval_preconditions}
  */
  readonly manualApprovalPreconditions?: DataProdvanaReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable;
  /**
  * Release Channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * Release Channel policy applied to all services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#policy DataProdvanaReleaseChannel#policy}
  */
  readonly policy?: DataProdvanaReleaseChannelPolicy;
  /**
  * Protections applied this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#protections DataProdvanaReleaseChannel#protections}
  */
  readonly protections?: DataProdvanaReleaseChannelProtections[] | cdktf.IResolvable;
  /**
  * Preconditions requiring other release channels to be stable before this release channel can be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#release_channel_stable_preconditions DataProdvanaReleaseChannel#release_channel_stable_preconditions}
  */
  readonly releaseChannelStablePreconditions?: DataProdvanaReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable;
  /**
  * Protections applied to service instances in this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#service_instance_protections DataProdvanaReleaseChannel#service_instance_protections}
  */
  readonly serviceInstanceProtections?: DataProdvanaReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable;
  /**
  * Preconditions requiring manual approval before this release channel can be deployed, shared across release channels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#shared_manual_approval_preconditions DataProdvanaReleaseChannel#shared_manual_approval_preconditions}
  */
  readonly sharedManualApprovalPreconditions?: DataProdvanaReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable;
}
export interface DataProdvanaReleaseChannelConstants {
  /**
  * name of the constant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * string value of the constant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#string_value DataProdvanaReleaseChannel#string_value}
  */
  readonly stringValue: string;
}

export function dataProdvanaReleaseChannelConstantsToTerraform(struct?: DataProdvanaReleaseChannelConstants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataProdvanaReleaseChannelConstantsToHclTerraform(struct?: DataProdvanaReleaseChannelConstants | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConstantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelConstants | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConstants | cdktf.IResolvable | undefined) {
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

export class DataProdvanaReleaseChannelConstantsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelConstants[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelConstantsOutputReference {
    return new DataProdvanaReleaseChannelConstantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelConvergenceProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsDeploymentToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelConvergenceProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsPostApprovalToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsPostApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsPostApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#check_duration DataProdvanaReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#delay_check_duration DataProdvanaReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable): any {
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


export function dataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelConvergenceProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsPreApprovalToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsPreApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsPreApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#key DataProdvanaReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#version DataProdvanaReleaseChannel#version}
  */
  readonly version: string;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelConvergenceProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#docker_image_tag_value DataProdvanaReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#int_value DataProdvanaReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#secret_value DataProdvanaReleaseChannel#secret_value}
  */
  readonly secretValue?: DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#string_value DataProdvanaReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsRefParametersToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: dataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsRefParametersToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable): any {
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
      value: dataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue",
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

export class DataProdvanaReleaseChannelConvergenceProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsRefParameters | cdktf.IResolvable | undefined) {
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
  private _secretValue = new DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: DataProdvanaReleaseChannelConvergenceProtectionsRefParametersSecretValue) {
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

export class DataProdvanaReleaseChannelConvergenceProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelConvergenceProtectionsRefParametersOutputReference {
    return new DataProdvanaReleaseChannelConvergenceProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelConvergenceProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#parameters DataProdvanaReleaseChannel#parameters}
  */
  readonly parameters?: DataProdvanaReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsRefToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataProdvanaReleaseChannelConvergenceProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsRefToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataProdvanaReleaseChannelConvergenceProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelConvergenceProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtectionsRef | cdktf.IResolvable | undefined) {
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
  private _parameters = new DataProdvanaReleaseChannelConvergenceProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataProdvanaReleaseChannelConvergenceProtectionsRefParameters[] | cdktf.IResolvable) {
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
export interface DataProdvanaReleaseChannelConvergenceProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#deployment DataProdvanaReleaseChannel#deployment}
  */
  readonly deployment?: DataProdvanaReleaseChannelConvergenceProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_approval DataProdvanaReleaseChannel#post_approval}
  */
  readonly postApproval?: DataProdvanaReleaseChannelConvergenceProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_deployment DataProdvanaReleaseChannel#post_deployment}
  */
  readonly postDeployment?: DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#pre_approval DataProdvanaReleaseChannel#pre_approval}
  */
  readonly preApproval?: DataProdvanaReleaseChannelConvergenceProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#ref DataProdvanaReleaseChannel#ref}
  */
  readonly ref: DataProdvanaReleaseChannelConvergenceProtectionsRef;
}

export function dataProdvanaReleaseChannelConvergenceProtectionsToTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataProdvanaReleaseChannelConvergenceProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: dataProdvanaReleaseChannelConvergenceProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: dataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: dataProdvanaReleaseChannelConvergenceProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: dataProdvanaReleaseChannelConvergenceProtectionsRefToTerraform(struct!.ref),
  }
}


export function dataProdvanaReleaseChannelConvergenceProtectionsToHclTerraform(struct?: DataProdvanaReleaseChannelConvergenceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataProdvanaReleaseChannelConvergenceProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: dataProdvanaReleaseChannelConvergenceProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsPostApproval",
    },
    post_deployment: {
      value: dataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment",
    },
    pre_approval: {
      value: dataProdvanaReleaseChannelConvergenceProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsPreApproval",
    },
    ref: {
      value: dataProdvanaReleaseChannelConvergenceProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelConvergenceProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelConvergenceProtections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelConvergenceProtections | cdktf.IResolvable | undefined) {
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
  private _deployment = new DataProdvanaReleaseChannelConvergenceProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataProdvanaReleaseChannelConvergenceProtectionsDeployment) {
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
  private _postApproval = new DataProdvanaReleaseChannelConvergenceProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: DataProdvanaReleaseChannelConvergenceProtectionsPostApproval) {
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
  private _postDeployment = new DataProdvanaReleaseChannelConvergenceProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: DataProdvanaReleaseChannelConvergenceProtectionsPostDeployment) {
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
  private _preApproval = new DataProdvanaReleaseChannelConvergenceProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: DataProdvanaReleaseChannelConvergenceProtectionsPreApproval) {
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
  private _ref = new DataProdvanaReleaseChannelConvergenceProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataProdvanaReleaseChannelConvergenceProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class DataProdvanaReleaseChannelConvergenceProtectionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelConvergenceProtections[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelConvergenceProtectionsOutputReference {
    return new DataProdvanaReleaseChannelConvergenceProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelManualApprovalPreconditions {
  /**
  * description of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#description DataProdvanaReleaseChannel#description}
  */
  readonly description?: string;
  /**
  * whether to require manual approval for every action, or just the first
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#every_action DataProdvanaReleaseChannel#every_action}
  */
  readonly everyAction?: boolean | cdktf.IResolvable;
  /**
  * name of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
}

export function dataProdvanaReleaseChannelManualApprovalPreconditionsToTerraform(struct?: DataProdvanaReleaseChannelManualApprovalPreconditions | cdktf.IResolvable): any {
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


export function dataProdvanaReleaseChannelManualApprovalPreconditionsToHclTerraform(struct?: DataProdvanaReleaseChannelManualApprovalPreconditions | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelManualApprovalPreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelManualApprovalPreconditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelManualApprovalPreconditions | cdktf.IResolvable | undefined) {
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

  // every_action - computed: false, optional: true, required: false
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
}

export class DataProdvanaReleaseChannelManualApprovalPreconditionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelManualApprovalPreconditionsOutputReference {
    return new DataProdvanaReleaseChannelManualApprovalPreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret {
  /**
  * Key of the secret in the data field of the secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#key DataProdvanaReleaseChannel#key}
  */
  readonly key?: string;
  /**
  * Name of the secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#secret_name DataProdvanaReleaseChannel#secret_name}
  */
  readonly secretName?: string;
}

export function dataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretToTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretToHclTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // secret_name - computed: true, optional: true, required: false
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
export interface DataProdvanaReleaseChannelPolicyDefaultEnvSecret {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#key DataProdvanaReleaseChannel#key}
  */
  readonly key?: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#version DataProdvanaReleaseChannel#version}
  */
  readonly version?: string;
}

export function dataProdvanaReleaseChannelPolicyDefaultEnvSecretToTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataProdvanaReleaseChannelPolicyDefaultEnvSecretToHclTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelPolicyDefaultEnvSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelPolicyDefaultEnvSecret | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
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
export interface DataProdvanaReleaseChannelPolicyDefaultEnv {
  /**
  * Reference to a secret value stored in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#kubernetes_secret DataProdvanaReleaseChannel#kubernetes_secret}
  */
  readonly kubernetesSecret?: DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret;
  /**
  * Reference to a secret value stored in Prodvana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#secret DataProdvanaReleaseChannel#secret}
  */
  readonly secret?: DataProdvanaReleaseChannelPolicyDefaultEnvSecret;
  /**
  * Non-sensitive environment variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#value DataProdvanaReleaseChannel#value}
  */
  readonly value?: string;
}

export function dataProdvanaReleaseChannelPolicyDefaultEnvToTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_secret: dataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretToTerraform(struct!.kubernetesSecret),
    secret: dataProdvanaReleaseChannelPolicyDefaultEnvSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataProdvanaReleaseChannelPolicyDefaultEnvToHclTerraform(struct?: DataProdvanaReleaseChannelPolicyDefaultEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_secret: {
      value: dataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretToHclTerraform(struct!.kubernetesSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret",
    },
    secret: {
      value: dataProdvanaReleaseChannelPolicyDefaultEnvSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelPolicyDefaultEnvSecret",
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

export class DataProdvanaReleaseChannelPolicyDefaultEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelPolicyDefaultEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelPolicyDefaultEnv | cdktf.IResolvable | undefined) {
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

  // kubernetes_secret - computed: true, optional: true, required: false
  private _kubernetesSecret = new DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecretOutputReference(this, "kubernetes_secret");
  public get kubernetesSecret() {
    return this._kubernetesSecret;
  }
  public putKubernetesSecret(value: DataProdvanaReleaseChannelPolicyDefaultEnvKubernetesSecret) {
    this._kubernetesSecret.internalValue = value;
  }
  public resetKubernetesSecret() {
    this._kubernetesSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretInput() {
    return this._kubernetesSecret.internalValue;
  }

  // secret - computed: true, optional: true, required: false
  private _secret = new DataProdvanaReleaseChannelPolicyDefaultEnvSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataProdvanaReleaseChannelPolicyDefaultEnvSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // value - computed: true, optional: true, required: false
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

export class DataProdvanaReleaseChannelPolicyDefaultEnvMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataProdvanaReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable

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
  public get(key: string): DataProdvanaReleaseChannelPolicyDefaultEnvOutputReference {
    return new DataProdvanaReleaseChannelPolicyDefaultEnvOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataProdvanaReleaseChannelPolicy {
  /**
  * default environment variables for services in this Release Channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#default_env DataProdvanaReleaseChannel#default_env}
  */
  readonly defaultEnv?: { [key: string]: DataProdvanaReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelPolicyToTerraform(struct?: DataProdvanaReleaseChannelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_env: cdktf.hashMapper(dataProdvanaReleaseChannelPolicyDefaultEnvToTerraform)(struct!.defaultEnv),
  }
}


export function dataProdvanaReleaseChannelPolicyToHclTerraform(struct?: DataProdvanaReleaseChannelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_env: {
      value: cdktf.hashMapperHcl(dataProdvanaReleaseChannelPolicyDefaultEnvToHclTerraform)(struct!.defaultEnv),
      isBlock: true,
      type: "map",
      storageClassType: "DataProdvanaReleaseChannelPolicyDefaultEnvMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelPolicy | cdktf.IResolvable | undefined) {
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

  // default_env - computed: true, optional: true, required: false
  private _defaultEnv = new DataProdvanaReleaseChannelPolicyDefaultEnvMap(this, "default_env");
  public get defaultEnv() {
    return this._defaultEnv;
  }
  public putDefaultEnv(value: { [key: string]: DataProdvanaReleaseChannelPolicyDefaultEnv } | cdktf.IResolvable) {
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
export interface DataProdvanaReleaseChannelProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelProtectionsDeploymentToTerraform(struct?: DataProdvanaReleaseChannelProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelProtectionsDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelProtectionsPostApprovalToTerraform(struct?: DataProdvanaReleaseChannelProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelProtectionsPostApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsPostApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsPostApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsPostApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#check_duration DataProdvanaReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#delay_check_duration DataProdvanaReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelProtectionsPostDeploymentToTerraform(struct?: DataProdvanaReleaseChannelProtectionsPostDeployment | cdktf.IResolvable): any {
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


export function dataProdvanaReleaseChannelProtectionsPostDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsPostDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsPostDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsPostDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelProtectionsPreApprovalToTerraform(struct?: DataProdvanaReleaseChannelProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelProtectionsPreApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsPreApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsPreApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsPreApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#key DataProdvanaReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#version DataProdvanaReleaseChannel#version}
  */
  readonly version: string;
}

export function dataProdvanaReleaseChannelProtectionsRefParametersSecretValueToTerraform(struct?: DataProdvanaReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataProdvanaReleaseChannelProtectionsRefParametersSecretValueToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#docker_image_tag_value DataProdvanaReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#int_value DataProdvanaReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#secret_value DataProdvanaReleaseChannel#secret_value}
  */
  readonly secretValue?: DataProdvanaReleaseChannelProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#string_value DataProdvanaReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function dataProdvanaReleaseChannelProtectionsRefParametersToTerraform(struct?: DataProdvanaReleaseChannelProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: dataProdvanaReleaseChannelProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataProdvanaReleaseChannelProtectionsRefParametersToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsRefParameters | cdktf.IResolvable): any {
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
      value: dataProdvanaReleaseChannelProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsRefParametersSecretValue",
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

export class DataProdvanaReleaseChannelProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelProtectionsRefParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsRefParameters | cdktf.IResolvable | undefined) {
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
  private _secretValue = new DataProdvanaReleaseChannelProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: DataProdvanaReleaseChannelProtectionsRefParametersSecretValue) {
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

export class DataProdvanaReleaseChannelProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelProtectionsRefParametersOutputReference {
    return new DataProdvanaReleaseChannelProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#parameters DataProdvanaReleaseChannel#parameters}
  */
  readonly parameters?: DataProdvanaReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelProtectionsRefToTerraform(struct?: DataProdvanaReleaseChannelProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataProdvanaReleaseChannelProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataProdvanaReleaseChannelProtectionsRefToHclTerraform(struct?: DataProdvanaReleaseChannelProtectionsRef | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataProdvanaReleaseChannelProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataProdvanaReleaseChannelProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelProtectionsRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtectionsRef | cdktf.IResolvable | undefined) {
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
  private _parameters = new DataProdvanaReleaseChannelProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataProdvanaReleaseChannelProtectionsRefParameters[] | cdktf.IResolvable) {
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
export interface DataProdvanaReleaseChannelProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#deployment DataProdvanaReleaseChannel#deployment}
  */
  readonly deployment?: DataProdvanaReleaseChannelProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_approval DataProdvanaReleaseChannel#post_approval}
  */
  readonly postApproval?: DataProdvanaReleaseChannelProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_deployment DataProdvanaReleaseChannel#post_deployment}
  */
  readonly postDeployment?: DataProdvanaReleaseChannelProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#pre_approval DataProdvanaReleaseChannel#pre_approval}
  */
  readonly preApproval?: DataProdvanaReleaseChannelProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#ref DataProdvanaReleaseChannel#ref}
  */
  readonly ref: DataProdvanaReleaseChannelProtectionsRef;
}

export function dataProdvanaReleaseChannelProtectionsToTerraform(struct?: DataProdvanaReleaseChannelProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataProdvanaReleaseChannelProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: dataProdvanaReleaseChannelProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: dataProdvanaReleaseChannelProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: dataProdvanaReleaseChannelProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: dataProdvanaReleaseChannelProtectionsRefToTerraform(struct!.ref),
  }
}


export function dataProdvanaReleaseChannelProtectionsToHclTerraform(struct?: DataProdvanaReleaseChannelProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataProdvanaReleaseChannelProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: dataProdvanaReleaseChannelProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsPostApproval",
    },
    post_deployment: {
      value: dataProdvanaReleaseChannelProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsPostDeployment",
    },
    pre_approval: {
      value: dataProdvanaReleaseChannelProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsPreApproval",
    },
    ref: {
      value: dataProdvanaReleaseChannelProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelProtections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelProtections | cdktf.IResolvable | undefined) {
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
  private _deployment = new DataProdvanaReleaseChannelProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataProdvanaReleaseChannelProtectionsDeployment) {
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
  private _postApproval = new DataProdvanaReleaseChannelProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: DataProdvanaReleaseChannelProtectionsPostApproval) {
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
  private _postDeployment = new DataProdvanaReleaseChannelProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: DataProdvanaReleaseChannelProtectionsPostDeployment) {
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
  private _preApproval = new DataProdvanaReleaseChannelProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: DataProdvanaReleaseChannelProtectionsPreApproval) {
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
  private _ref = new DataProdvanaReleaseChannelProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataProdvanaReleaseChannelProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class DataProdvanaReleaseChannelProtectionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelProtections[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelProtectionsOutputReference {
    return new DataProdvanaReleaseChannelProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelReleaseChannelStablePreconditions {
  /**
  * name of a release channel that must be in a stable deployment state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#release_channel DataProdvanaReleaseChannel#release_channel}
  */
  readonly releaseChannel: string;
}

export function dataProdvanaReleaseChannelReleaseChannelStablePreconditionsToTerraform(struct?: DataProdvanaReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release_channel: cdktf.stringToTerraform(struct!.releaseChannel),
  }
}


export function dataProdvanaReleaseChannelReleaseChannelStablePreconditionsToHclTerraform(struct?: DataProdvanaReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelReleaseChannelStablePreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelReleaseChannelStablePreconditions | cdktf.IResolvable | undefined) {
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

export class DataProdvanaReleaseChannelReleaseChannelStablePreconditionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelReleaseChannelStablePreconditionsOutputReference {
    return new DataProdvanaReleaseChannelReleaseChannelStablePreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelRuntimes {
  /**
  * ECS prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#ecs_prefix DataProdvanaReleaseChannel#ecs_prefix}
  */
  readonly ecsPrefix?: string;
  /**
  * Kubernetes namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#k8s_namespace DataProdvanaReleaseChannel#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * optional identifier for this runtime connection within this release channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * name of the a runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#runtime DataProdvanaReleaseChannel#runtime}
  */
  readonly runtime?: string;
  /**
  * type of the runtime connection, one of (AWS_ECS, EXTENSION, FLY, GOOGLE_CLOUD_RUN, LONG_LIVED_COMPUTE, PULUMI, TERRAFORM, UNKNOWN_CONNECTION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#type DataProdvanaReleaseChannel#type}
  */
  readonly type?: string;
}

export function dataProdvanaReleaseChannelRuntimesToTerraform(struct?: DataProdvanaReleaseChannelRuntimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ecs_prefix: cdktf.stringToTerraform(struct!.ecsPrefix),
    k8s_namespace: cdktf.stringToTerraform(struct!.k8SNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataProdvanaReleaseChannelRuntimesToHclTerraform(struct?: DataProdvanaReleaseChannelRuntimes): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelRuntimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelRuntimes | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProdvanaReleaseChannelRuntimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ecsPrefix = undefined;
      this._k8SNamespace = undefined;
      this._name = undefined;
      this._runtime = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ecsPrefix = value.ecsPrefix;
      this._k8SNamespace = value.k8SNamespace;
      this._name = value.name;
      this._runtime = value.runtime;
      this._type = value.type;
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

  // runtime - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataProdvanaReleaseChannelRuntimesList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelRuntimes[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelRuntimesOutputReference {
    return new DataProdvanaReleaseChannelRuntimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment {
  /**
  * whether to enable deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval {
  /**
  * whether to enable post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment {
  /**
  * how long to keep checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#check_duration DataProdvanaReleaseChannel#check_duration}
  */
  readonly checkDuration?: string;
  /**
  * delay between the deployment completing and when this protection starts checking. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#delay_check_duration DataProdvanaReleaseChannel#delay_check_duration}
  */
  readonly delayCheckDuration?: string;
  /**
  * whether to enable post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable): any {
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


export function dataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval {
  /**
  * whether to enable pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#enabled DataProdvanaReleaseChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue {
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#key DataProdvanaReleaseChannel#key}
  */
  readonly key: string;
  /**
  * Version of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#version DataProdvanaReleaseChannel#version}
  */
  readonly version: string;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue | cdktf.IResolvable | undefined) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters {
  /**
  * parameter docker image tag value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#docker_image_tag_value DataProdvanaReleaseChannel#docker_image_tag_value}
  */
  readonly dockerImageTagValue?: string;
  /**
  * parameter int value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#int_value DataProdvanaReleaseChannel#int_value}
  */
  readonly intValue?: number;
  /**
  * name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameter secret value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#secret_value DataProdvanaReleaseChannel#secret_value}
  */
  readonly secretValue?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue;
  /**
  * parameter string value, only one of (string_value, int_value, docker_image_tag_value, secret_value) can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#string_value DataProdvanaReleaseChannel#string_value}
  */
  readonly stringValue?: string;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_tag_value: cdktf.stringToTerraform(struct!.dockerImageTagValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueToTerraform(struct!.secretValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable): any {
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
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue",
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters | cdktf.IResolvable | undefined) {
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
  private _secretValue = new DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersSecretValue) {
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

export class DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersOutputReference {
    return new DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelServiceInstanceProtectionsRef {
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name: string;
  /**
  * parameters to pass to the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#parameters DataProdvanaReleaseChannel#parameters}
  */
  readonly parameters?: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsRefToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelServiceInstanceProtectionsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRef | cdktf.IResolvable | undefined) {
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
  private _parameters = new DataProdvanaReleaseChannelServiceInstanceProtectionsRefParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRefParameters[] | cdktf.IResolvable) {
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
export interface DataProdvanaReleaseChannelServiceInstanceProtections {
  /**
  * deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#deployment DataProdvanaReleaseChannel#deployment}
  */
  readonly deployment?: DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment;
  /**
  * name of the protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name?: string;
  /**
  * post-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_approval DataProdvanaReleaseChannel#post_approval}
  */
  readonly postApproval?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval;
  /**
  * post-deployment lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#post_deployment DataProdvanaReleaseChannel#post_deployment}
  */
  readonly postDeployment?: DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment;
  /**
  * pre-approval lifecycle options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#pre_approval DataProdvanaReleaseChannel#pre_approval}
  */
  readonly preApproval?: DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval;
  /**
  * reference to a protection stored in Prodvana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#ref DataProdvanaReleaseChannel#ref}
  */
  readonly ref: DataProdvanaReleaseChannelServiceInstanceProtectionsRef;
}

export function dataProdvanaReleaseChannelServiceInstanceProtectionsToTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentToTerraform(struct!.deployment),
    name: cdktf.stringToTerraform(struct!.name),
    post_approval: dataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalToTerraform(struct!.postApproval),
    post_deployment: dataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentToTerraform(struct!.postDeployment),
    pre_approval: dataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalToTerraform(struct!.preApproval),
    ref: dataProdvanaReleaseChannelServiceInstanceProtectionsRefToTerraform(struct!.ref),
  }
}


export function dataProdvanaReleaseChannelServiceInstanceProtectionsToHclTerraform(struct?: DataProdvanaReleaseChannelServiceInstanceProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_approval: {
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalToHclTerraform(struct!.postApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval",
    },
    post_deployment: {
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentToHclTerraform(struct!.postDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment",
    },
    pre_approval: {
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalToHclTerraform(struct!.preApproval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval",
    },
    ref: {
      value: dataProdvanaReleaseChannelServiceInstanceProtectionsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProdvanaReleaseChannelServiceInstanceProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelServiceInstanceProtections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelServiceInstanceProtections | cdktf.IResolvable | undefined) {
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
  private _deployment = new DataProdvanaReleaseChannelServiceInstanceProtectionsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataProdvanaReleaseChannelServiceInstanceProtectionsDeployment) {
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
  private _postApproval = new DataProdvanaReleaseChannelServiceInstanceProtectionsPostApprovalOutputReference(this, "post_approval");
  public get postApproval() {
    return this._postApproval;
  }
  public putPostApproval(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPostApproval) {
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
  private _postDeployment = new DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeploymentOutputReference(this, "post_deployment");
  public get postDeployment() {
    return this._postDeployment;
  }
  public putPostDeployment(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPostDeployment) {
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
  private _preApproval = new DataProdvanaReleaseChannelServiceInstanceProtectionsPreApprovalOutputReference(this, "pre_approval");
  public get preApproval() {
    return this._preApproval;
  }
  public putPreApproval(value: DataProdvanaReleaseChannelServiceInstanceProtectionsPreApproval) {
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
  private _ref = new DataProdvanaReleaseChannelServiceInstanceProtectionsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataProdvanaReleaseChannelServiceInstanceProtectionsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class DataProdvanaReleaseChannelServiceInstanceProtectionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelServiceInstanceProtectionsOutputReference {
    return new DataProdvanaReleaseChannelServiceInstanceProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProdvanaReleaseChannelSharedManualApprovalPreconditions {
  /**
  * name of the manual approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#name DataProdvanaReleaseChannel#name}
  */
  readonly name?: string;
}

export function dataProdvanaReleaseChannelSharedManualApprovalPreconditionsToTerraform(struct?: DataProdvanaReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataProdvanaReleaseChannelSharedManualApprovalPreconditionsToHclTerraform(struct?: DataProdvanaReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable): any {
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

export class DataProdvanaReleaseChannelSharedManualApprovalPreconditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProdvanaReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProdvanaReleaseChannelSharedManualApprovalPreconditions | cdktf.IResolvable | undefined) {
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

export class DataProdvanaReleaseChannelSharedManualApprovalPreconditionsList extends cdktf.ComplexList {
  public internalValue? : DataProdvanaReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable

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
  public get(index: number): DataProdvanaReleaseChannelSharedManualApprovalPreconditionsOutputReference {
    return new DataProdvanaReleaseChannelSharedManualApprovalPreconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel prodvana_release_channel}
*/
export class DataProdvanaReleaseChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_release_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProdvanaReleaseChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProdvanaReleaseChannel to import
  * @param importFromId The id of the existing DataProdvanaReleaseChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProdvanaReleaseChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_release_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/data-sources/release_channel prodvana_release_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProdvanaReleaseChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataProdvanaReleaseChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_release_channel',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25',
        providerVersionConstraint: '0.1.25'
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
  private _constants = new DataProdvanaReleaseChannelConstantsList(this, "constants", false);
  public get constants() {
    return this._constants;
  }
  public putConstants(value: DataProdvanaReleaseChannelConstants[] | cdktf.IResolvable) {
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
  private _convergenceProtections = new DataProdvanaReleaseChannelConvergenceProtectionsList(this, "convergence_protections", false);
  public get convergenceProtections() {
    return this._convergenceProtections;
  }
  public putConvergenceProtections(value: DataProdvanaReleaseChannelConvergenceProtections[] | cdktf.IResolvable) {
    this._convergenceProtections.internalValue = value;
  }
  public resetConvergenceProtections() {
    this._convergenceProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergenceProtectionsInput() {
    return this._convergenceProtections.internalValue;
  }

  // disable_all_protections - computed: false, optional: true, required: false
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
  private _manualApprovalPreconditions = new DataProdvanaReleaseChannelManualApprovalPreconditionsList(this, "manual_approval_preconditions", false);
  public get manualApprovalPreconditions() {
    return this._manualApprovalPreconditions;
  }
  public putManualApprovalPreconditions(value: DataProdvanaReleaseChannelManualApprovalPreconditions[] | cdktf.IResolvable) {
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

  // policy - computed: true, optional: true, required: false
  private _policy = new DataProdvanaReleaseChannelPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataProdvanaReleaseChannelPolicy) {
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
  private _protections = new DataProdvanaReleaseChannelProtectionsList(this, "protections", false);
  public get protections() {
    return this._protections;
  }
  public putProtections(value: DataProdvanaReleaseChannelProtections[] | cdktf.IResolvable) {
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
  private _releaseChannelStablePreconditions = new DataProdvanaReleaseChannelReleaseChannelStablePreconditionsList(this, "release_channel_stable_preconditions", false);
  public get releaseChannelStablePreconditions() {
    return this._releaseChannelStablePreconditions;
  }
  public putReleaseChannelStablePreconditions(value: DataProdvanaReleaseChannelReleaseChannelStablePreconditions[] | cdktf.IResolvable) {
    this._releaseChannelStablePreconditions.internalValue = value;
  }
  public resetReleaseChannelStablePreconditions() {
    this._releaseChannelStablePreconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelStablePreconditionsInput() {
    return this._releaseChannelStablePreconditions.internalValue;
  }

  // runtimes - computed: true, optional: false, required: false
  private _runtimes = new DataProdvanaReleaseChannelRuntimesList(this, "runtimes", false);
  public get runtimes() {
    return this._runtimes;
  }

  // service_instance_protections - computed: false, optional: true, required: false
  private _serviceInstanceProtections = new DataProdvanaReleaseChannelServiceInstanceProtectionsList(this, "service_instance_protections", false);
  public get serviceInstanceProtections() {
    return this._serviceInstanceProtections;
  }
  public putServiceInstanceProtections(value: DataProdvanaReleaseChannelServiceInstanceProtections[] | cdktf.IResolvable) {
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
  private _sharedManualApprovalPreconditions = new DataProdvanaReleaseChannelSharedManualApprovalPreconditionsList(this, "shared_manual_approval_preconditions", false);
  public get sharedManualApprovalPreconditions() {
    return this._sharedManualApprovalPreconditions;
  }
  public putSharedManualApprovalPreconditions(value: DataProdvanaReleaseChannelSharedManualApprovalPreconditions[] | cdktf.IResolvable) {
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
      constants: cdktf.listMapper(dataProdvanaReleaseChannelConstantsToTerraform, false)(this._constants.internalValue),
      convergence_protections: cdktf.listMapper(dataProdvanaReleaseChannelConvergenceProtectionsToTerraform, false)(this._convergenceProtections.internalValue),
      disable_all_protections: cdktf.booleanToTerraform(this._disableAllProtections),
      manual_approval_preconditions: cdktf.listMapper(dataProdvanaReleaseChannelManualApprovalPreconditionsToTerraform, false)(this._manualApprovalPreconditions.internalValue),
      name: cdktf.stringToTerraform(this._name),
      policy: dataProdvanaReleaseChannelPolicyToTerraform(this._policy.internalValue),
      protections: cdktf.listMapper(dataProdvanaReleaseChannelProtectionsToTerraform, false)(this._protections.internalValue),
      release_channel_stable_preconditions: cdktf.listMapper(dataProdvanaReleaseChannelReleaseChannelStablePreconditionsToTerraform, false)(this._releaseChannelStablePreconditions.internalValue),
      service_instance_protections: cdktf.listMapper(dataProdvanaReleaseChannelServiceInstanceProtectionsToTerraform, false)(this._serviceInstanceProtections.internalValue),
      shared_manual_approval_preconditions: cdktf.listMapper(dataProdvanaReleaseChannelSharedManualApprovalPreconditionsToTerraform, false)(this._sharedManualApprovalPreconditions.internalValue),
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
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelConstantsToHclTerraform, false)(this._constants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelConstantsList",
      },
      convergence_protections: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelConvergenceProtectionsToHclTerraform, false)(this._convergenceProtections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelConvergenceProtectionsList",
      },
      disable_all_protections: {
        value: cdktf.booleanToHclTerraform(this._disableAllProtections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manual_approval_preconditions: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelManualApprovalPreconditionsToHclTerraform, false)(this._manualApprovalPreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelManualApprovalPreconditionsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: dataProdvanaReleaseChannelPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProdvanaReleaseChannelPolicy",
      },
      protections: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelProtectionsToHclTerraform, false)(this._protections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelProtectionsList",
      },
      release_channel_stable_preconditions: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelReleaseChannelStablePreconditionsToHclTerraform, false)(this._releaseChannelStablePreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelReleaseChannelStablePreconditionsList",
      },
      service_instance_protections: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelServiceInstanceProtectionsToHclTerraform, false)(this._serviceInstanceProtections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelServiceInstanceProtectionsList",
      },
      shared_manual_approval_preconditions: {
        value: cdktf.listMapperHcl(dataProdvanaReleaseChannelSharedManualApprovalPreconditionsToHclTerraform, false)(this._sharedManualApprovalPreconditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProdvanaReleaseChannelSharedManualApprovalPreconditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
