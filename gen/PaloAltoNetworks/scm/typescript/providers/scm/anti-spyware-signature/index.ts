// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiSpywareSignatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bugtraq
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#bugtraq AntiSpywareSignature#bugtraq}
  */
  readonly bugtraq?: string[];
  /**
  * Comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#comment AntiSpywareSignature#comment}
  */
  readonly comment?: string;
  /**
  * Cve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#cve AntiSpywareSignature#cve}
  */
  readonly cve?: string[];
  /**
  * anti spyware signature default action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#default_action AntiSpywareSignature#default_action}
  */
  readonly defaultAction?: AntiSpywareSignatureDefaultAction;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#device AntiSpywareSignature#device}
  */
  readonly device?: string;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#direction AntiSpywareSignature#direction}
  */
  readonly direction?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#folder AntiSpywareSignature#folder}
  */
  readonly folder?: string;
  /**
  * Reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#reference AntiSpywareSignature#reference}
  */
  readonly reference?: string[];
  /**
  * Severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#severity AntiSpywareSignature#severity}
  */
  readonly severity?: string;
  /**
  * anti spyware signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#signature AntiSpywareSignature#signature}
  */
  readonly signature?: AntiSpywareSignatureSignature;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#snippet AntiSpywareSignature#snippet}
  */
  readonly snippet?: string;
  /**
  * threat id range <15000-18000> and <6900001-7000000>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#threat_id AntiSpywareSignature#threat_id}
  */
  readonly threatId: string;
  /**
  * Threatname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#threatname AntiSpywareSignature#threatname}
  */
  readonly threatname: string;
  /**
  * Vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#vendor AntiSpywareSignature#vendor}
  */
  readonly vendor?: string[];
}
export interface AntiSpywareSignatureDefaultActionAlert {
}

export function antiSpywareSignatureDefaultActionAlertToTerraform(struct?: AntiSpywareSignatureDefaultActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionAlertToHclTerraform(struct?: AntiSpywareSignatureDefaultActionAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionAlert | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionAllow {
}

export function antiSpywareSignatureDefaultActionAllowToTerraform(struct?: AntiSpywareSignatureDefaultActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionAllowToHclTerraform(struct?: AntiSpywareSignatureDefaultActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionAllow | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionBlockIp {
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#duration AntiSpywareSignature#duration}
  */
  readonly duration?: number;
  /**
  * Track by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#track_by AntiSpywareSignature#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareSignatureDefaultActionBlockIpToTerraform(struct?: AntiSpywareSignatureDefaultActionBlockIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareSignatureDefaultActionBlockIpToHclTerraform(struct?: AntiSpywareSignatureDefaultActionBlockIp | cdktf.IResolvable): any {
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

export class AntiSpywareSignatureDefaultActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionBlockIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntiSpywareSignatureDefaultActionBlockIp | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionDrop {
}

export function antiSpywareSignatureDefaultActionDropToTerraform(struct?: AntiSpywareSignatureDefaultActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionDropToHclTerraform(struct?: AntiSpywareSignatureDefaultActionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionDrop | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionResetBoth {
}

export function antiSpywareSignatureDefaultActionResetBothToTerraform(struct?: AntiSpywareSignatureDefaultActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionResetBothToHclTerraform(struct?: AntiSpywareSignatureDefaultActionResetBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionResetBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionResetBoth | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionResetClient {
}

export function antiSpywareSignatureDefaultActionResetClientToTerraform(struct?: AntiSpywareSignatureDefaultActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionResetClientToHclTerraform(struct?: AntiSpywareSignatureDefaultActionResetClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionResetClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionResetClient | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultActionResetServer {
}

export function antiSpywareSignatureDefaultActionResetServerToTerraform(struct?: AntiSpywareSignatureDefaultActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antiSpywareSignatureDefaultActionResetServerToHclTerraform(struct?: AntiSpywareSignatureDefaultActionResetServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntiSpywareSignatureDefaultActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultActionResetServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureDefaultActionResetServer | cdktf.IResolvable | undefined) {
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
export interface AntiSpywareSignatureDefaultAction {
  /**
  * Alert
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#alert AntiSpywareSignature#alert}
  */
  readonly alert?: AntiSpywareSignatureDefaultActionAlert;
  /**
  * Allow
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#allow AntiSpywareSignature#allow}
  */
  readonly allow?: AntiSpywareSignatureDefaultActionAllow;
  /**
  * anti spyware signature block ip
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#block_ip AntiSpywareSignature#block_ip}
  */
  readonly blockIp?: AntiSpywareSignatureDefaultActionBlockIp;
  /**
  * Drop
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#drop AntiSpywareSignature#drop}
  */
  readonly drop?: AntiSpywareSignatureDefaultActionDrop;
  /**
  * Reset both
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#reset_both AntiSpywareSignature#reset_both}
  */
  readonly resetBoth?: AntiSpywareSignatureDefaultActionResetBoth;
  /**
  * Reset client
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#reset_client AntiSpywareSignature#reset_client}
  */
  readonly resetClient?: AntiSpywareSignatureDefaultActionResetClient;
  /**
  * Reset server
  * > ℹ️ **Note:** You must specify exactly one of `alert`, `allow`, `block_ip`, `drop`, `reset_both`, `reset_client`, and `reset_server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#reset_server AntiSpywareSignature#reset_server}
  */
  readonly resetServer?: AntiSpywareSignatureDefaultActionResetServer;
}

export function antiSpywareSignatureDefaultActionToTerraform(struct?: AntiSpywareSignatureDefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: antiSpywareSignatureDefaultActionAlertToTerraform(struct!.alert),
    allow: antiSpywareSignatureDefaultActionAllowToTerraform(struct!.allow),
    block_ip: antiSpywareSignatureDefaultActionBlockIpToTerraform(struct!.blockIp),
    drop: antiSpywareSignatureDefaultActionDropToTerraform(struct!.drop),
    reset_both: antiSpywareSignatureDefaultActionResetBothToTerraform(struct!.resetBoth),
    reset_client: antiSpywareSignatureDefaultActionResetClientToTerraform(struct!.resetClient),
    reset_server: antiSpywareSignatureDefaultActionResetServerToTerraform(struct!.resetServer),
  }
}


export function antiSpywareSignatureDefaultActionToHclTerraform(struct?: AntiSpywareSignatureDefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: antiSpywareSignatureDefaultActionAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionAlert",
    },
    allow: {
      value: antiSpywareSignatureDefaultActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionAllow",
    },
    block_ip: {
      value: antiSpywareSignatureDefaultActionBlockIpToHclTerraform(struct!.blockIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionBlockIp",
    },
    drop: {
      value: antiSpywareSignatureDefaultActionDropToHclTerraform(struct!.drop),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionDrop",
    },
    reset_both: {
      value: antiSpywareSignatureDefaultActionResetBothToHclTerraform(struct!.resetBoth),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionResetBoth",
    },
    reset_client: {
      value: antiSpywareSignatureDefaultActionResetClientToHclTerraform(struct!.resetClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionResetClient",
    },
    reset_server: {
      value: antiSpywareSignatureDefaultActionResetServerToHclTerraform(struct!.resetServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureDefaultActionResetServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureDefaultAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntiSpywareSignatureDefaultAction | cdktf.IResolvable | undefined) {
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
  private _alert = new AntiSpywareSignatureDefaultActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: AntiSpywareSignatureDefaultActionAlert) {
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
  private _allow = new AntiSpywareSignatureDefaultActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: AntiSpywareSignatureDefaultActionAllow) {
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
  private _blockIp = new AntiSpywareSignatureDefaultActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }
  public putBlockIp(value: AntiSpywareSignatureDefaultActionBlockIp) {
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
  private _drop = new AntiSpywareSignatureDefaultActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }
  public putDrop(value: AntiSpywareSignatureDefaultActionDrop) {
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
  private _resetBoth = new AntiSpywareSignatureDefaultActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }
  public putResetBoth(value: AntiSpywareSignatureDefaultActionResetBoth) {
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
  private _resetClient = new AntiSpywareSignatureDefaultActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }
  public putResetClient(value: AntiSpywareSignatureDefaultActionResetClient) {
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
  private _resetServer = new AntiSpywareSignatureDefaultActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
  public putResetServer(value: AntiSpywareSignatureDefaultActionResetServer) {
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
export interface AntiSpywareSignatureSignatureCombinationAndConditionOrCondition {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Threat id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#threat_id AntiSpywareSignature#threat_id}
  */
  readonly threatId?: string;
}

export function antiSpywareSignatureSignatureCombinationAndConditionOrConditionToTerraform(struct?: AntiSpywareSignatureSignatureCombinationAndConditionOrCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    threat_id: cdktf.stringToTerraform(struct!.threatId),
  }
}


export function antiSpywareSignatureSignatureCombinationAndConditionOrConditionToHclTerraform(struct?: AntiSpywareSignatureSignatureCombinationAndConditionOrCondition | cdktf.IResolvable): any {
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
    threat_id: {
      value: cdktf.stringToHclTerraform(struct!.threatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureCombinationAndConditionOrCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatId = this._threatId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureCombinationAndConditionOrCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._threatId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._threatId = value.threatId;
    }
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

  // threat_id - computed: false, optional: true, required: false
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  public resetThreatId() {
    this._threatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }
}

export class AntiSpywareSignatureSignatureCombinationAndConditionOrConditionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureCombinationAndConditionOrCondition[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference {
    return new AntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureCombinationAndCondition {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Or condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#or_condition AntiSpywareSignature#or_condition}
  */
  readonly orCondition?: AntiSpywareSignatureSignatureCombinationAndConditionOrCondition[] | cdktf.IResolvable;
}

export function antiSpywareSignatureSignatureCombinationAndConditionToTerraform(struct?: AntiSpywareSignatureSignatureCombinationAndCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    or_condition: cdktf.listMapper(antiSpywareSignatureSignatureCombinationAndConditionOrConditionToTerraform, false)(struct!.orCondition),
  }
}


export function antiSpywareSignatureSignatureCombinationAndConditionToHclTerraform(struct?: AntiSpywareSignatureSignatureCombinationAndCondition | cdktf.IResolvable): any {
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
    or_condition: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureCombinationAndConditionOrConditionToHclTerraform, false)(struct!.orCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureCombinationAndConditionOrConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureCombinationAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureCombinationAndCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orCondition = this._orCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureCombinationAndCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._orCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._orCondition.internalValue = value.orCondition;
    }
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

  // or_condition - computed: false, optional: true, required: false
  private _orCondition = new AntiSpywareSignatureSignatureCombinationAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
  public putOrCondition(value: AntiSpywareSignatureSignatureCombinationAndConditionOrCondition[] | cdktf.IResolvable) {
    this._orCondition.internalValue = value;
  }
  public resetOrCondition() {
    this._orCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionInput() {
    return this._orCondition.internalValue;
  }
}

export class AntiSpywareSignatureSignatureCombinationAndConditionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureCombinationAndCondition[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureCombinationAndConditionOutputReference {
    return new AntiSpywareSignatureSignatureCombinationAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureCombinationTimeAttribute {
  /**
  * Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#interval AntiSpywareSignature#interval}
  */
  readonly interval?: number;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#threshold AntiSpywareSignature#threshold}
  */
  readonly threshold?: number;
  /**
  * Track by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#track_by AntiSpywareSignature#track_by}
  */
  readonly trackBy?: string;
}

export function antiSpywareSignatureSignatureCombinationTimeAttributeToTerraform(struct?: AntiSpywareSignatureSignatureCombinationTimeAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    track_by: cdktf.stringToTerraform(struct!.trackBy),
  }
}


export function antiSpywareSignatureSignatureCombinationTimeAttributeToHclTerraform(struct?: AntiSpywareSignatureSignatureCombinationTimeAttribute | cdktf.IResolvable): any {
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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

export class AntiSpywareSignatureSignatureCombinationTimeAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureCombinationTimeAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._trackBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackBy = this._trackBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureCombinationTimeAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._threshold = undefined;
      this._trackBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._threshold = value.threshold;
      this._trackBy = value.trackBy;
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
export interface AntiSpywareSignatureSignatureCombination {
  /**
  * And condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#and_condition AntiSpywareSignature#and_condition}
  */
  readonly andCondition?: AntiSpywareSignatureSignatureCombinationAndCondition[] | cdktf.IResolvable;
  /**
  * Order free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#order_free AntiSpywareSignature#order_free}
  */
  readonly orderFree?: boolean | cdktf.IResolvable;
  /**
  * anti spyware time attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#time_attribute AntiSpywareSignature#time_attribute}
  */
  readonly timeAttribute?: AntiSpywareSignatureSignatureCombinationTimeAttribute;
}

export function antiSpywareSignatureSignatureCombinationToTerraform(struct?: AntiSpywareSignatureSignatureCombination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_condition: cdktf.listMapper(antiSpywareSignatureSignatureCombinationAndConditionToTerraform, false)(struct!.andCondition),
    order_free: cdktf.booleanToTerraform(struct!.orderFree),
    time_attribute: antiSpywareSignatureSignatureCombinationTimeAttributeToTerraform(struct!.timeAttribute),
  }
}


export function antiSpywareSignatureSignatureCombinationToHclTerraform(struct?: AntiSpywareSignatureSignatureCombination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_condition: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureCombinationAndConditionToHclTerraform, false)(struct!.andCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureCombinationAndConditionList",
    },
    order_free: {
      value: cdktf.booleanToHclTerraform(struct!.orderFree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_attribute: {
      value: antiSpywareSignatureSignatureCombinationTimeAttributeToHclTerraform(struct!.timeAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureCombinationTimeAttribute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureCombinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureCombination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andCondition = this._andCondition?.internalValue;
    }
    if (this._orderFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderFree = this._orderFree;
    }
    if (this._timeAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAttribute = this._timeAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureCombination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = undefined;
      this._orderFree = undefined;
      this._timeAttribute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = value.andCondition;
      this._orderFree = value.orderFree;
      this._timeAttribute.internalValue = value.timeAttribute;
    }
  }

  // and_condition - computed: false, optional: true, required: false
  private _andCondition = new AntiSpywareSignatureSignatureCombinationAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }
  public putAndCondition(value: AntiSpywareSignatureSignatureCombinationAndCondition[] | cdktf.IResolvable) {
    this._andCondition.internalValue = value;
  }
  public resetAndCondition() {
    this._andCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionInput() {
    return this._andCondition.internalValue;
  }

  // order_free - computed: true, optional: true, required: false
  private _orderFree?: boolean | cdktf.IResolvable; 
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }
  public set orderFree(value: boolean | cdktf.IResolvable) {
    this._orderFree = value;
  }
  public resetOrderFree() {
    this._orderFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderFreeInput() {
    return this._orderFree;
  }

  // time_attribute - computed: false, optional: true, required: false
  private _timeAttribute = new AntiSpywareSignatureSignatureCombinationTimeAttributeOutputReference(this, "time_attribute");
  public get timeAttribute() {
    return this._timeAttribute;
  }
  public putTimeAttribute(value: AntiSpywareSignatureSignatureCombinationTimeAttribute) {
    this._timeAttribute.internalValue = value;
  }
  public resetTimeAttribute() {
    this._timeAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAttributeInput() {
    return this._timeAttribute.internalValue;
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: string;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | cdktf.IResolvable): any {
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#context AntiSpywareSignature#context}
  */
  readonly context?: string;
  /**
  * Negate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#negate AntiSpywareSignature#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#qualifier AntiSpywareSignature#qualifier}
  */
  readonly qualifier?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier[] | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: number;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    negate: cdktf.booleanToTerraform(struct!.negate),
    qualifier: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qualifier: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._negate = undefined;
      this._qualifier.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._negate = value.negate;
      this._qualifier.internalValue = value.qualifier;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: string;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#context AntiSpywareSignature#context}
  */
  readonly context?: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#qualifier AntiSpywareSignature#qualifier}
  */
  readonly qualifier?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: number;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._qualifier.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._qualifier.internalValue = value.qualifier;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: string;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#context AntiSpywareSignature#context}
  */
  readonly context?: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#qualifier AntiSpywareSignature#qualifier}
  */
  readonly qualifier?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: number;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._qualifier.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._qualifier.internalValue = value.qualifier;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#value AntiSpywareSignature#value}
  */
  readonly value?: string;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#context AntiSpywareSignature#context}
  */
  readonly context?: string;
  /**
  * Negate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#negate AntiSpywareSignature#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#pattern AntiSpywareSignature#pattern}
  */
  readonly pattern?: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#qualifier AntiSpywareSignature#qualifier}
  */
  readonly qualifier?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    negate: cdktf.booleanToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    qualifier: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToTerraform, false)(struct!.qualifier),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._qualifier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._qualifier.internalValue = value.qualifier;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator {
  /**
  * Equal to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#equal_to AntiSpywareSignature#equal_to}
  */
  readonly equalTo?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo;
  /**
  * Greater than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#greater_than AntiSpywareSignature#greater_than}
  */
  readonly greaterThan?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan;
  /**
  * Less than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#less_than AntiSpywareSignature#less_than}
  */
  readonly lessThan?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan;
  /**
  * Pattern match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#pattern_match AntiSpywareSignature#pattern_match}
  */
  readonly patternMatch?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal_to: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToTerraform(struct!.equalTo),
    greater_than: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToTerraform(struct!.greaterThan),
    less_than: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToTerraform(struct!.lessThan),
    pattern_match: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToTerraform(struct!.patternMatch),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal_to: {
      value: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToHclTerraform(struct!.equalTo),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo",
    },
    greater_than: {
      value: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct!.greaterThan),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan",
    },
    less_than: {
      value: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToHclTerraform(struct!.lessThan),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan",
    },
    pattern_match: {
      value: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct!.patternMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equalTo?.internalValue;
    }
    if (this._greaterThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan?.internalValue;
    }
    if (this._lessThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan?.internalValue;
    }
    if (this._patternMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternMatch = this._patternMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = undefined;
      this._greaterThan.internalValue = undefined;
      this._lessThan.internalValue = undefined;
      this._patternMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = value.equalTo;
      this._greaterThan.internalValue = value.greaterThan;
      this._lessThan.internalValue = value.lessThan;
      this._patternMatch.internalValue = value.patternMatch;
    }
  }

  // equal_to - computed: false, optional: true, required: false
  private _equalTo = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }
  public putEqualTo(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo) {
    this._equalTo.internalValue = value;
  }
  public resetEqualTo() {
    this._equalTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equalTo.internalValue;
  }

  // greater_than - computed: false, optional: true, required: false
  private _greaterThan = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }
  public putGreaterThan(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan) {
    this._greaterThan.internalValue = value;
  }
  public resetGreaterThan() {
    this._greaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan.internalValue;
  }

  // less_than - computed: false, optional: true, required: false
  private _lessThan = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }
  public putLessThan(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan) {
    this._lessThan.internalValue = value;
  }
  public resetLessThan() {
    this._lessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan.internalValue;
  }

  // pattern_match - computed: false, optional: true, required: false
  private _patternMatch = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
  public putPatternMatch(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch) {
    this._patternMatch.internalValue = value;
  }
  public resetPatternMatch() {
    this._patternMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternMatchInput() {
    return this._patternMatch.internalValue;
  }
}
export interface AntiSpywareSignatureSignatureStandardAndConditionOrCondition {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#operator AntiSpywareSignature#operator}
  */
  readonly operator?: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator;
}

export function antiSpywareSignatureSignatureStandardAndConditionOrConditionToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToTerraform(struct!.operator),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionOrConditionToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndConditionOrCondition | cdktf.IResolvable): any {
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
    operator: {
      value: antiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndConditionOrCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndConditionOrCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: AntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class AntiSpywareSignatureSignatureStandardAndConditionOrConditionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndConditionOrCondition[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandardAndCondition {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name?: string;
  /**
  * Or condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#or_condition AntiSpywareSignature#or_condition}
  */
  readonly orCondition?: AntiSpywareSignatureSignatureStandardAndConditionOrCondition[] | cdktf.IResolvable;
}

export function antiSpywareSignatureSignatureStandardAndConditionToTerraform(struct?: AntiSpywareSignatureSignatureStandardAndCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    or_condition: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionOrConditionToTerraform, false)(struct!.orCondition),
  }
}


export function antiSpywareSignatureSignatureStandardAndConditionToHclTerraform(struct?: AntiSpywareSignatureSignatureStandardAndCondition | cdktf.IResolvable): any {
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
    or_condition: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionOrConditionToHclTerraform, false)(struct!.orCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionOrConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandardAndCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orCondition = this._orCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandardAndCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._orCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._orCondition.internalValue = value.orCondition;
    }
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

  // or_condition - computed: false, optional: true, required: false
  private _orCondition = new AntiSpywareSignatureSignatureStandardAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
  public putOrCondition(value: AntiSpywareSignatureSignatureStandardAndConditionOrCondition[] | cdktf.IResolvable) {
    this._orCondition.internalValue = value;
  }
  public resetOrCondition() {
    this._orCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionInput() {
    return this._orCondition.internalValue;
  }
}

export class AntiSpywareSignatureSignatureStandardAndConditionList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandardAndCondition[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardAndConditionOutputReference {
    return new AntiSpywareSignatureSignatureStandardAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignatureStandard {
  /**
  * And condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#and_condition AntiSpywareSignature#and_condition}
  */
  readonly andCondition?: AntiSpywareSignatureSignatureStandardAndCondition[] | cdktf.IResolvable;
  /**
  * Comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#comment AntiSpywareSignature#comment}
  */
  readonly comment?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#name AntiSpywareSignature#name}
  */
  readonly name: string;
  /**
  * Order free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#order_free AntiSpywareSignature#order_free}
  */
  readonly orderFree?: boolean | cdktf.IResolvable;
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#scope AntiSpywareSignature#scope}
  */
  readonly scope?: string;
}

export function antiSpywareSignatureSignatureStandardToTerraform(struct?: AntiSpywareSignatureSignatureStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_condition: cdktf.listMapper(antiSpywareSignatureSignatureStandardAndConditionToTerraform, false)(struct!.andCondition),
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    order_free: cdktf.booleanToTerraform(struct!.orderFree),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function antiSpywareSignatureSignatureStandardToHclTerraform(struct?: AntiSpywareSignatureSignatureStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_condition: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardAndConditionToHclTerraform, false)(struct!.andCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardAndConditionList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    order_free: {
      value: cdktf.booleanToHclTerraform(struct!.orderFree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureStandardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiSpywareSignatureSignatureStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andCondition = this._andCondition?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderFree = this._orderFree;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignatureStandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._orderFree = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = value.andCondition;
      this._comment = value.comment;
      this._name = value.name;
      this._orderFree = value.orderFree;
      this._scope = value.scope;
    }
  }

  // and_condition - computed: false, optional: true, required: false
  private _andCondition = new AntiSpywareSignatureSignatureStandardAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }
  public putAndCondition(value: AntiSpywareSignatureSignatureStandardAndCondition[] | cdktf.IResolvable) {
    this._andCondition.internalValue = value;
  }
  public resetAndCondition() {
    this._andCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionInput() {
    return this._andCondition.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // order_free - computed: true, optional: true, required: false
  private _orderFree?: boolean | cdktf.IResolvable; 
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }
  public set orderFree(value: boolean | cdktf.IResolvable) {
    this._orderFree = value;
  }
  public resetOrderFree() {
    this._orderFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderFreeInput() {
    return this._orderFree;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class AntiSpywareSignatureSignatureStandardList extends cdktf.ComplexList {
  public internalValue? : AntiSpywareSignatureSignatureStandard[] | cdktf.IResolvable

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
  public get(index: number): AntiSpywareSignatureSignatureStandardOutputReference {
    return new AntiSpywareSignatureSignatureStandardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiSpywareSignatureSignature {
  /**
  * anti spyware signature combination
  * > ℹ️ **Note:** You must specify exactly one of `combination` and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#combination AntiSpywareSignature#combination}
  */
  readonly combination?: AntiSpywareSignatureSignatureCombination;
  /**
  * Standard
  * > ℹ️ **Note:** You must specify exactly one of `combination` and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#standard AntiSpywareSignature#standard}
  */
  readonly standard?: AntiSpywareSignatureSignatureStandard[] | cdktf.IResolvable;
}

export function antiSpywareSignatureSignatureToTerraform(struct?: AntiSpywareSignatureSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combination: antiSpywareSignatureSignatureCombinationToTerraform(struct!.combination),
    standard: cdktf.listMapper(antiSpywareSignatureSignatureStandardToTerraform, false)(struct!.standard),
  }
}


export function antiSpywareSignatureSignatureToHclTerraform(struct?: AntiSpywareSignatureSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combination: {
      value: antiSpywareSignatureSignatureCombinationToHclTerraform(struct!.combination),
      isBlock: true,
      type: "struct",
      storageClassType: "AntiSpywareSignatureSignatureCombination",
    },
    standard: {
      value: cdktf.listMapperHcl(antiSpywareSignatureSignatureStandardToHclTerraform, false)(struct!.standard),
      isBlock: true,
      type: "list",
      storageClassType: "AntiSpywareSignatureSignatureStandardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiSpywareSignatureSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiSpywareSignatureSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.combination = this._combination?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiSpywareSignatureSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combination.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combination.internalValue = value.combination;
      this._standard.internalValue = value.standard;
    }
  }

  // combination - computed: false, optional: true, required: false
  private _combination = new AntiSpywareSignatureSignatureCombinationOutputReference(this, "combination");
  public get combination() {
    return this._combination;
  }
  public putCombination(value: AntiSpywareSignatureSignatureCombination) {
    this._combination.internalValue = value;
  }
  public resetCombination() {
    this._combination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combinationInput() {
    return this._combination.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new AntiSpywareSignatureSignatureStandardList(this, "standard", false);
  public get standard() {
    return this._standard;
  }
  public putStandard(value: AntiSpywareSignatureSignatureStandard[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature scm_anti_spyware_signature}
*/
export class AntiSpywareSignature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_anti_spyware_signature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiSpywareSignature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiSpywareSignature to import
  * @param importFromId The id of the existing AntiSpywareSignature that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiSpywareSignature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_anti_spyware_signature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/anti_spyware_signature scm_anti_spyware_signature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiSpywareSignatureConfig
  */
  public constructor(scope: Construct, id: string, config: AntiSpywareSignatureConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_anti_spyware_signature',
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
    this._bugtraq = config.bugtraq;
    this._comment = config.comment;
    this._cve = config.cve;
    this._defaultAction.internalValue = config.defaultAction;
    this._device = config.device;
    this._direction = config.direction;
    this._folder = config.folder;
    this._reference = config.reference;
    this._severity = config.severity;
    this._signature.internalValue = config.signature;
    this._snippet = config.snippet;
    this._threatId = config.threatId;
    this._threatname = config.threatname;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bugtraq - computed: false, optional: true, required: false
  private _bugtraq?: string[]; 
  public get bugtraq() {
    return this.getListAttribute('bugtraq');
  }
  public set bugtraq(value: string[]) {
    this._bugtraq = value;
  }
  public resetBugtraq() {
    this._bugtraq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bugtraqInput() {
    return this._bugtraq;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cve - computed: false, optional: true, required: false
  private _cve?: string[]; 
  public get cve() {
    return this.getListAttribute('cve');
  }
  public set cve(value: string[]) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction = new AntiSpywareSignatureDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: AntiSpywareSignatureDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  public resetDefaultAction() {
    this._defaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // reference - computed: false, optional: true, required: false
  private _reference?: string[]; 
  public get reference() {
    return this.getListAttribute('reference');
  }
  public set reference(value: string[]) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new AntiSpywareSignatureSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: AntiSpywareSignatureSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
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

  // threat_id - computed: false, optional: false, required: true
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }

  // threatname - computed: false, optional: false, required: true
  private _threatname?: string; 
  public get threatname() {
    return this.getStringAttribute('threatname');
  }
  public set threatname(value: string) {
    this._threatname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatnameInput() {
    return this._threatname;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string[]; 
  public get vendor() {
    return this.getListAttribute('vendor');
  }
  public set vendor(value: string[]) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bugtraq: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bugtraq),
      comment: cdktf.stringToTerraform(this._comment),
      cve: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cve),
      default_action: antiSpywareSignatureDefaultActionToTerraform(this._defaultAction.internalValue),
      device: cdktf.stringToTerraform(this._device),
      direction: cdktf.stringToTerraform(this._direction),
      folder: cdktf.stringToTerraform(this._folder),
      reference: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reference),
      severity: cdktf.stringToTerraform(this._severity),
      signature: antiSpywareSignatureSignatureToTerraform(this._signature.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      threat_id: cdktf.stringToTerraform(this._threatId),
      threatname: cdktf.stringToTerraform(this._threatname),
      vendor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bugtraq: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bugtraq),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cve: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cve),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_action: {
        value: antiSpywareSignatureDefaultActionToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntiSpywareSignatureDefaultAction",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      reference: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reference),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: antiSpywareSignatureSignatureToHclTerraform(this._signature.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntiSpywareSignatureSignature",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_id: {
        value: cdktf.stringToHclTerraform(this._threatId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threatname: {
        value: cdktf.stringToHclTerraform(this._threatname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vendor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
