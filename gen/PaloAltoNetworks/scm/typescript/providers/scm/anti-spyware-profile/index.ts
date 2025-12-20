// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiSpywareProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud inline analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#cloud_inline_analysis AntiSpywareProfile#cloud_inline_analysis}
  */
  readonly cloudInlineAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#description AntiSpywareProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#device AntiSpywareProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#folder AntiSpywareProfile#folder}
  */
  readonly folder?: string;
  /**
  * Inline exception edl url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#inline_exception_edl_url AntiSpywareProfile#inline_exception_edl_url}
  */
  readonly inlineExceptionEdlUrl?: string[];
  /**
  * Inline exception ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#inline_exception_ip_address AntiSpywareProfile#inline_exception_ip_address}
  */
  readonly inlineExceptionIpAddress?: string[];
  /**
  * Mica engine spyware enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#mica_engine_spyware_enabled AntiSpywareProfile#mica_engine_spyware_enabled}
  */
  readonly micaEngineSpywareEnabled?: AntiSpywareProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable;
  /**
  * The name of the anti-spyware profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#name AntiSpywareProfile#name}
  */
  readonly name: string;
  /**
  * Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#rules AntiSpywareProfile#rules}
  */
  readonly rules?: AntiSpywareProfileRules[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#snippet AntiSpywareProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Threat exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#threat_exception AntiSpywareProfile#threat_exception}
  */
  readonly threatException?: AntiSpywareProfileThreatException[] | cdktf.IResolvable;
}
export interface AntiSpywareProfileMicaEngineSpywareEnabled {
  /**
  * Inline policy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#inline_policy_action AntiSpywareProfile#inline_policy_action}
  */
  readonly inlinePolicyAction?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#name AntiSpywareProfile#name}
  */
  readonly name?: string;
}

export function antiSpywareProfileMicaEngineSpywareEnabledToTerraform(struct?: AntiSpywareProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_policy_action: cdktf.stringToTerraform(struct!.inlinePolicyAction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareProfileMicaEngineSpywareEnabledToHclTerraform(struct?: AntiSpywareProfileMicaEngineSpywareEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_policy_action: {
      value: cdktf.stringToHclTerraform(struct!.inlinePolicyAction),
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

export class AntiSpywareProfileMicaEngineSpywareEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePolicyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePolicyAction = this._inlinePolicyAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileMicaEngineSpywareEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePolicyAction = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePolicyAction = value.inlinePolicyAction;
      this._name = value.name;
    }
  }

  // inline_policy_action - computed: true, optional: true, required: false
  private _inlinePolicyAction?: string; 
  public get inlinePolicyAction() {
    return this.getStringAttribute('inline_policy_action');
  }
  public set inlinePolicyAction(value: string) {
    this._inlinePolicyAction = value;
  }
  public resetInlinePolicyAction() {
    this._inlinePolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyActionInput() {
    return this._inlinePolicyAction;
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
}

export class AntiSpywareProfileMicaEngineSpywareEnabledList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareProfileMicaEngineSpywareEnabledOutputReference {
    return new AntiSpywareProfileMicaEngineSpywareEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareProfileRulesActionAlert {
}

export function antiSpywareProfileRulesActionAlertToTerraform(struct?: AntiSpywareProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionAlertToHclTerraform(struct?: AntiSpywareProfileRulesActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionAlert | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesActionAllow {
}

export function antiSpywareProfileRulesActionAllowToTerraform(struct?: AntiSpywareProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionAllowToHclTerraform(struct?: AntiSpywareProfileRulesActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionAllow | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesActionBlockIp {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#duration AntiSpywareProfile#duration}
  */
  readonly duration?: number;
  /**
  * Track by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#track_by AntiSpywareProfile#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareProfileRulesActionBlockIpToTerraform(struct?: AntiSpywareProfileRulesActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareProfileRulesActionBlockIpToHclTerraform(struct?: AntiSpywareProfileRulesActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_by: {
      value: cdktf.stringToHclTerraform(struct!.trackBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileRulesActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionBlockIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionBlockIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._trackBy = value.trackBy;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // track_by - computed: false, optional: true, required: false
  private _trackBy?: string; 
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
  public set trackBy(value: string) {
    this._trackBy = value;
  }
  public resetTrackBy() {
    this._trackBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackByInput() {
    return this._trackBy;
  }
}
export interface AntiSpywareProfileRulesActionDrop {
}

export function antiSpywareProfileRulesActionDropToTerraform(struct?: AntiSpywareProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionDropToHclTerraform(struct?: AntiSpywareProfileRulesActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionDrop | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesActionResetBoth {
}

export function antiSpywareProfileRulesActionResetBothToTerraform(struct?: AntiSpywareProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionResetBothToHclTerraform(struct?: AntiSpywareProfileRulesActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionResetBoth | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesActionResetClient {
}

export function antiSpywareProfileRulesActionResetClientToTerraform(struct?: AntiSpywareProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionResetClientToHclTerraform(struct?: AntiSpywareProfileRulesActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionResetClient | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesActionResetServer {
}

export function antiSpywareProfileRulesActionResetServerToTerraform(struct?: AntiSpywareProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileRulesActionResetServerToHclTerraform(struct?: AntiSpywareProfileRulesActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileRulesActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesActionResetServer | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileRulesAction {
  /**
  * Alert
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#alert AntiSpywareProfile#alert}
  */
  readonly alert?: AntiSpywareProfileRulesActionAlert;
  /**
  * Allow
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#allow AntiSpywareProfile#allow}
  */
  readonly allow?: AntiSpywareProfileRulesActionAllow;
  /**
  * anti spyware profiles rules action block ip
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#block_ip AntiSpywareProfile#block_ip}
  */
  readonly blockIp?: AntiSpywareProfileRulesActionBlockIp;
  /**
  * Drop
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#drop AntiSpywareProfile#drop}
  */
  readonly drop?: AntiSpywareProfileRulesActionDrop;
  /**
  * Reset both
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_both AntiSpywareProfile#reset_both}
  */
  readonly resetBoth?: AntiSpywareProfileRulesActionResetBoth;
  /**
  * Reset client
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_client AntiSpywareProfile#reset_client}
  */
  readonly resetClient?: AntiSpywareProfileRulesActionResetClient;
  /**
  * Reset server
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_server AntiSpywareProfile#reset_server}
  */
  readonly resetServer?: AntiSpywareProfileRulesActionResetServer;
}

export function antiSpywareProfileRulesActionToTerraform(struct?: AntiSpywareProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareProfileRulesActionAlertToTerraform(struct!.alert),
    allow: antiSpywareProfileRulesActionAllowToTerraform(struct!.allow),
    block_ip: antiSpywareProfileRulesActionBlockIpToTerraform(struct!.blockIp),
    drop: antiSpywareProfileRulesActionDropToTerraform(struct!.drop),
    reset_both: antiSpywareProfileRulesActionResetBothToTerraform(struct!.resetBoth),
    reset_client: antiSpywareProfileRulesActionResetClientToTerraform(struct!.resetClient),
    reset_server: antiSpywareProfileRulesActionResetServerToTerraform(struct!.resetServer),
  }
}


export function antiSpywareProfileRulesActionToHclTerraform(struct?: AntiSpywareProfileRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareProfileRulesActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionAlert",
    },
    allow: {
      value: antiSpywareProfileRulesActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionAllow",
    },
    block_ip: {
      value: antiSpywareProfileRulesActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionBlockIp",
    },
    drop: {
      value: antiSpywareProfileRulesActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionDrop",
    },
    reset_both: {
      value: antiSpywareProfileRulesActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionResetBoth",
    },
    reset_client: {
      value: antiSpywareProfileRulesActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionResetClient",
    },
    reset_server: {
      value: antiSpywareProfileRulesActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._blockIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._resetBoth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBoth = this._resetBoth?.internalValue;
    }
    if (this._resetClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetClient = this._resetClient?.internalValue;
    }
    if (this._resetServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetServer = this._resetServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._blockIp.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._resetBoth.internalValue = undefined;
      this._resetClient.internalValue = undefined;
      this._resetServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._blockIp.internalValue = value.blockIp;
      this._drop.internalValue = value.drop;
      this._resetBoth.internalValue = value.resetBoth;
      this._resetClient.internalValue = value.resetClient;
      this._resetServer.internalValue = value.resetServer;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new AntiSpywareProfileRulesActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareProfileRulesActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new AntiSpywareProfileRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareProfileRulesActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp = new AntiSpywareProfileRulesActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: AntiSpywareProfileRulesActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new AntiSpywareProfileRulesActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: AntiSpywareProfileRulesActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: false, optional: true, required: false
  private _resetBoth = new AntiSpywareProfileRulesActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: AntiSpywareProfileRulesActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: false, optional: true, required: false
  private _resetClient = new AntiSpywareProfileRulesActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: AntiSpywareProfileRulesActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: false, optional: true, required: false
  private _resetServer = new AntiSpywareProfileRulesActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: AntiSpywareProfileRulesActionResetServer) {
    this._resetServer.internalValue = value;
  }
  public resetResetServer() {
    this._resetServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetServerInput() {
    return this._resetServer.internalValue;
  }
}
export interface AntiSpywareProfileRules {
  /**
  * anti spyware profiles rules default action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#action AntiSpywareProfile#action}
  */
  readonly action?: AntiSpywareProfileRulesAction;
  /**
  * Category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#category AntiSpywareProfile#category}
  */
  readonly category?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#name AntiSpywareProfile#name}
  */
  readonly name?: string;
  /**
  * Packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#packet_capture AntiSpywareProfile#packet_capture}
  */
  readonly packetCapture?: string;
  /**
  * Severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#severity AntiSpywareProfile#severity}
  */
  readonly severity?: string[];
  /**
  * Threat name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#threat_name AntiSpywareProfile#threat_name}
  */
  readonly threatName?: string;
}

export function antiSpywareProfileRulesToTerraform(struct?: AntiSpywareProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: antiSpywareProfileRulesActionToTerraform(struct!.action),
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    threat_name: cdktf.stringToTerraform(struct!.threatName),
  }
}


export function antiSpywareProfileRulesToHclTerraform(struct?: AntiSpywareProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: antiSpywareProfileRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileRulesAction",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threat_name: {
      value: cdktf.stringToHclTerraform(struct!.threatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareProfileRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._threatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatName = this._threatName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._packetCapture = undefined;
      this._severity = undefined;
      this._threatName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._category = value.category;
      this._name = value.name;
      this._packetCapture = value.packetCapture;
      this._severity = value.severity;
      this._threatName = value.threatName;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new AntiSpywareProfileRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AntiSpywareProfileRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threat_name - computed: true, optional: true, required: false
  private _threatName?: string; 
  public get threatName() {
    return this.getStringAttribute('threat_name');
  }
  public set threatName(value: string) {
    this._threatName = value;
  }
  public resetThreatName() {
    this._threatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatNameInput() {
    return this._threatName;
  }
}

export class AntiSpywareProfileRulesList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareProfileRules[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareProfileRulesOutputReference {
    return new AntiSpywareProfileRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareProfileThreatExceptionActionAlert {
}

export function antiSpywareProfileThreatExceptionActionAlertToTerraform(struct?: AntiSpywareProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionAlertToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionAlert | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionAllow {
}

export function antiSpywareProfileThreatExceptionActionAllowToTerraform(struct?: AntiSpywareProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionAllowToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionAllow | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionBlockIp {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#duration AntiSpywareProfile#duration}
  */
  readonly duration?: number;
  /**
  * Track by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#track_by AntiSpywareProfile#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareProfileThreatExceptionActionBlockIpToTerraform(struct?: AntiSpywareProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareProfileThreatExceptionActionBlockIpToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_by: {
      value: cdktf.stringToHclTerraform(struct!.trackBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileThreatExceptionActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionBlockIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._trackBy = value.trackBy;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // track_by - computed: false, optional: true, required: false
  private _trackBy?: string; 
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
  public set trackBy(value: string) {
    this._trackBy = value;
  }
  public resetTrackBy() {
    this._trackBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackByInput() {
    return this._trackBy;
  }
}
export interface AntiSpywareProfileThreatExceptionActionDefault {
}

export function antiSpywareProfileThreatExceptionActionDefaultToTerraform(struct?: AntiSpywareProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionDefaultToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionDefault | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionDrop {
}

export function antiSpywareProfileThreatExceptionActionDropToTerraform(struct?: AntiSpywareProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionDropToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionDrop | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionResetBoth {
}

export function antiSpywareProfileThreatExceptionActionResetBothToTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionResetBothToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionResetBoth | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionResetClient {
}

export function antiSpywareProfileThreatExceptionActionResetClientToTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionResetClientToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionResetClient | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionActionResetServer {
}

export function antiSpywareProfileThreatExceptionActionResetServerToTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareProfileThreatExceptionActionResetServerToHclTerraform(struct?: AntiSpywareProfileThreatExceptionActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareProfileThreatExceptionActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionActionResetServer | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareProfileThreatExceptionAction {
  /**
  * Alert
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#alert AntiSpywareProfile#alert}
  */
  readonly alert?: AntiSpywareProfileThreatExceptionActionAlert;
  /**
  * Allow
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#allow AntiSpywareProfile#allow}
  */
  readonly allow?: AntiSpywareProfileThreatExceptionActionAllow;
  /**
  * anti spyware profiles threat exception action block ip
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#block_ip AntiSpywareProfile#block_ip}
  */
  readonly blockIp?: AntiSpywareProfileThreatExceptionActionBlockIp;
  /**
  * Default
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#default AntiSpywareProfile#default}
  */
  readonly default?: AntiSpywareProfileThreatExceptionActionDefault;
  /**
  * Drop
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#drop AntiSpywareProfile#drop}
  */
  readonly drop?: AntiSpywareProfileThreatExceptionActionDrop;
  /**
  * Reset both
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_both AntiSpywareProfile#reset_both}
  */
  readonly resetBoth?: AntiSpywareProfileThreatExceptionActionResetBoth;
  /**
  * Reset client
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_client AntiSpywareProfile#reset_client}
  */
  readonly resetClient?: AntiSpywareProfileThreatExceptionActionResetClient;
  /**
  * Reset server
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `default`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#reset_server AntiSpywareProfile#reset_server}
  */
  readonly resetServer?: AntiSpywareProfileThreatExceptionActionResetServer;
}

export function antiSpywareProfileThreatExceptionActionToTerraform(struct?: AntiSpywareProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareProfileThreatExceptionActionAlertToTerraform(struct!.alert),
    allow: antiSpywareProfileThreatExceptionActionAllowToTerraform(struct!.allow),
    block_ip: antiSpywareProfileThreatExceptionActionBlockIpToTerraform(struct!.blockIp),
    default: antiSpywareProfileThreatExceptionActionDefaultToTerraform(struct!.default),
    drop: antiSpywareProfileThreatExceptionActionDropToTerraform(struct!.drop),
    reset_both: antiSpywareProfileThreatExceptionActionResetBothToTerraform(struct!.resetBoth),
    reset_client: antiSpywareProfileThreatExceptionActionResetClientToTerraform(struct!.resetClient),
    reset_server: antiSpywareProfileThreatExceptionActionResetServerToTerraform(struct!.resetServer),
  }
}


export function antiSpywareProfileThreatExceptionActionToHclTerraform(struct?: AntiSpywareProfileThreatExceptionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareProfileThreatExceptionActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionAlert",
    },
    allow: {
      value: antiSpywareProfileThreatExceptionActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionAllow",
    },
    block_ip: {
      value: antiSpywareProfileThreatExceptionActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionBlockIp",
    },
    default: {
      value: antiSpywareProfileThreatExceptionActionDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionDefault",
    },
    drop: {
      value: antiSpywareProfileThreatExceptionActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionDrop",
    },
    reset_both: {
      value: antiSpywareProfileThreatExceptionActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionResetBoth",
    },
    reset_client: {
      value: antiSpywareProfileThreatExceptionActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionResetClient",
    },
    reset_server: {
      value: antiSpywareProfileThreatExceptionActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileThreatExceptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareProfileThreatExceptionAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._blockIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._resetBoth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBoth = this._resetBoth?.internalValue;
    }
    if (this._resetClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetClient = this._resetClient?.internalValue;
    }
    if (this._resetServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetServer = this._resetServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatExceptionAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert.internalValue = undefined;
      this._allow.internalValue = undefined;
      this._blockIp.internalValue = undefined;
      this._default.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._resetBoth.internalValue = undefined;
      this._resetClient.internalValue = undefined;
      this._resetServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert.internalValue = value.alert;
      this._allow.internalValue = value.allow;
      this._blockIp.internalValue = value.blockIp;
      this._default.internalValue = value.default;
      this._drop.internalValue = value.drop;
      this._resetBoth.internalValue = value.resetBoth;
      this._resetClient.internalValue = value.resetClient;
      this._resetServer.internalValue = value.resetServer;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new AntiSpywareProfileThreatExceptionActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareProfileThreatExceptionActionAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new AntiSpywareProfileThreatExceptionActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareProfileThreatExceptionActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp = new AntiSpywareProfileThreatExceptionActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: AntiSpywareProfileThreatExceptionActionBlockIp) {
    this._blockIp.internalValue = value;
  }
  public resetBlockIp() {
    this._blockIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new AntiSpywareProfileThreatExceptionActionDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: AntiSpywareProfileThreatExceptionActionDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new AntiSpywareProfileThreatExceptionActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: AntiSpywareProfileThreatExceptionActionDrop) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // reset_both - computed: false, optional: true, required: false
  private _resetBoth = new AntiSpywareProfileThreatExceptionActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: AntiSpywareProfileThreatExceptionActionResetBoth) {
    this._resetBoth.internalValue = value;
  }
  public resetResetBoth() {
    this._resetBoth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBothInput() {
    return this._resetBoth.internalValue;
  }

  // reset_client - computed: false, optional: true, required: false
  private _resetClient = new AntiSpywareProfileThreatExceptionActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: AntiSpywareProfileThreatExceptionActionResetClient) {
    this._resetClient.internalValue = value;
  }
  public resetResetClient() {
    this._resetClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetClientInput() {
    return this._resetClient.internalValue;
  }

  // reset_server - computed: false, optional: true, required: false
  private _resetServer = new AntiSpywareProfileThreatExceptionActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: AntiSpywareProfileThreatExceptionActionResetServer) {
    this._resetServer.internalValue = value;
  }
  public resetResetServer() {
    this._resetServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetServerInput() {
    return this._resetServer.internalValue;
  }
}
export interface AntiSpywareProfileThreatExceptionExemptIp {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#name AntiSpywareProfile#name}
  */
  readonly name: string;
}

export function antiSpywareProfileThreatExceptionExemptIpToTerraform(struct?: AntiSpywareProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antiSpywareProfileThreatExceptionExemptIpToHclTerraform(struct?: AntiSpywareProfileThreatExceptionExemptIp | cdktf.IResolvable): any {
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

export class AntiSpywareProfileThreatExceptionExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntiSpywareProfileThreatExceptionExemptIp | cdktf.IResolvable | undefined) {
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

export class AntiSpywareProfileThreatExceptionExemptIpList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareProfileThreatExceptionExemptIp[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareProfileThreatExceptionExemptIpOutputReference {
    return new AntiSpywareProfileThreatExceptionExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareProfileThreatException {
  /**
  * anti spyware profiles threat exception default action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#action AntiSpywareProfile#action}
  */
  readonly action?: AntiSpywareProfileThreatExceptionAction;
  /**
  * Exempt ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#exempt_ip AntiSpywareProfile#exempt_ip}
  */
  readonly exemptIp?: AntiSpywareProfileThreatExceptionExemptIp[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#name AntiSpywareProfile#name}
  */
  readonly name?: string;
  /**
  * Notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#notes AntiSpywareProfile#notes}
  */
  readonly notes?: string;
  /**
  * Packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#packet_capture AntiSpywareProfile#packet_capture}
  */
  readonly packetCapture?: string;
}

export function antiSpywareProfileThreatExceptionToTerraform(struct?: AntiSpywareProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: antiSpywareProfileThreatExceptionActionToTerraform(struct!.action),
    exempt_ip: cdktf.listMapper(antiSpywareProfileThreatExceptionExemptIpToTerraform, false)(struct!.exemptIp),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
  }
}


export function antiSpywareProfileThreatExceptionToHclTerraform(struct?: AntiSpywareProfileThreatException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: antiSpywareProfileThreatExceptionActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareProfileThreatExceptionAction",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(antiSpywareProfileThreatExceptionExemptIpToHclTerraform, false)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareProfileThreatExceptionExemptIpList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareProfileThreatExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareProfileThreatException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._exemptIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptIp = this._exemptIp?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareProfileThreatException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._exemptIp.internalValue = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._packetCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._exemptIp.internalValue = value.exemptIp;
      this._name = value.name;
      this._notes = value.notes;
      this._packetCapture = value.packetCapture;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new AntiSpywareProfileThreatExceptionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AntiSpywareProfileThreatExceptionAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // exempt_ip - computed: false, optional: true, required: false
  private _exemptIp = new AntiSpywareProfileThreatExceptionExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: AntiSpywareProfileThreatExceptionExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }
}

export class AntiSpywareProfileThreatExceptionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareProfileThreatException[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareProfileThreatExceptionOutputReference {
    return new AntiSpywareProfileThreatExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile scm_anti_spyware_profile}
*/
export class AntiSpywareProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_anti_spyware_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiSpywareProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiSpywareProfile to import
  * @param importFromId The id of the existing AntiSpywareProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiSpywareProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_anti_spyware_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_profile scm_anti_spyware_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiSpywareProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AntiSpywareProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_anti_spyware_profile',
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
    this._cloudInlineAnalysis = config.cloudInlineAnalysis;
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._inlineExceptionEdlUrl = config.inlineExceptionEdlUrl;
    this._inlineExceptionIpAddress = config.inlineExceptionIpAddress;
    this._micaEngineSpywareEnabled.internalValue = config.micaEngineSpywareEnabled;
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._snippet = config.snippet;
    this._threatException.internalValue = config.threatException;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_inline_analysis - computed: true, optional: true, required: false
  private _cloudInlineAnalysis?: boolean | cdktf.IResolvable; 
  public get cloudInlineAnalysis() {
    return this.getBooleanAttribute('cloud_inline_analysis');
  }
  public set cloudInlineAnalysis(value: boolean | cdktf.IResolvable) {
    this._cloudInlineAnalysis = value;
  }
  public resetCloudInlineAnalysis() {
    this._cloudInlineAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInlineAnalysisInput() {
    return this._cloudInlineAnalysis;
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

  // inline_exception_edl_url - computed: false, optional: true, required: false
  private _inlineExceptionEdlUrl?: string[]; 
  public get inlineExceptionEdlUrl() {
    return this.getListAttribute('inline_exception_edl_url');
  }
  public set inlineExceptionEdlUrl(value: string[]) {
    this._inlineExceptionEdlUrl = value;
  }
  public resetInlineExceptionEdlUrl() {
    this._inlineExceptionEdlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineExceptionEdlUrlInput() {
    return this._inlineExceptionEdlUrl;
  }

  // inline_exception_ip_address - computed: false, optional: true, required: false
  private _inlineExceptionIpAddress?: string[]; 
  public get inlineExceptionIpAddress() {
    return this.getListAttribute('inline_exception_ip_address');
  }
  public set inlineExceptionIpAddress(value: string[]) {
    this._inlineExceptionIpAddress = value;
  }
  public resetInlineExceptionIpAddress() {
    this._inlineExceptionIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineExceptionIpAddressInput() {
    return this._inlineExceptionIpAddress;
  }

  // mica_engine_spyware_enabled - computed: false, optional: true, required: false
  private _micaEngineSpywareEnabled = new AntiSpywareProfileMicaEngineSpywareEnabledList(this, "mica_engine_spyware_enabled", false);
  public get micaEngineSpywareEnabled() {
    return this._micaEngineSpywareEnabled;
  }
  public putMicaEngineSpywareEnabled(value: AntiSpywareProfileMicaEngineSpywareEnabled[] | cdktf.IResolvable) {
    this._micaEngineSpywareEnabled.internalValue = value;
  }
  public resetMicaEngineSpywareEnabled() {
    this._micaEngineSpywareEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get micaEngineSpywareEnabledInput() {
    return this._micaEngineSpywareEnabled.internalValue;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new AntiSpywareProfileRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AntiSpywareProfileRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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

  // threat_exception - computed: false, optional: true, required: false
  private _threatException = new AntiSpywareProfileThreatExceptionList(this, "threat_exception", false);
  public get threatException() {
    return this._threatException;
  }
  public putThreatException(value: AntiSpywareProfileThreatException[] | cdktf.IResolvable) {
    this._threatException.internalValue = value;
  }
  public resetThreatException() {
    this._threatException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionInput() {
    return this._threatException.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_inline_analysis: cdktf.booleanToTerraform(this._cloudInlineAnalysis),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      inline_exception_edl_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionEdlUrl),
      inline_exception_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inlineExceptionIpAddress),
      mica_engine_spyware_enabled: cdktf.listMapper(antiSpywareProfileMicaEngineSpywareEnabledToTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(antiSpywareProfileRulesToTerraform, false)(this._rules.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      threat_exception: cdktf.listMapper(antiSpywareProfileThreatExceptionToTerraform, false)(this._threatException.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_inline_analysis: {
        value: cdktf.booleanToHclTerraform(this._cloudInlineAnalysis),
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
      inline_exception_edl_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inlineExceptionEdlUrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      inline_exception_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inlineExceptionIpAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mica_engine_spyware_enabled: {
        value: cdktf.listMapperHcl(antiSpywareProfileMicaEngineSpywareEnabledToHclTerraform, false)(this._micaEngineSpywareEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareProfileMicaEngineSpywareEnabledList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(antiSpywareProfileRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareProfileRulesList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_exception: {
        value: cdktf.listMapperHcl(antiSpywareProfileThreatExceptionToHclTerraform, false)(this._threatException.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiSpywareProfileThreatExceptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
