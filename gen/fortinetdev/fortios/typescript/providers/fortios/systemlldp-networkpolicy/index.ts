// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemlldpNetworkpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#comment SystemlldpNetworkpolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#get_all_tables SystemlldpNetworkpolicy#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#id SystemlldpNetworkpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#name SystemlldpNetworkpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vdomparam SystemlldpNetworkpolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * guest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#guest SystemlldpNetworkpolicy#guest}
  */
  readonly guest?: SystemlldpNetworkpolicyGuest;
  /**
  * guest_voice_signaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#guest_voice_signaling SystemlldpNetworkpolicy#guest_voice_signaling}
  */
  readonly guestVoiceSignaling?: SystemlldpNetworkpolicyGuestVoiceSignaling;
  /**
  * softphone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#softphone SystemlldpNetworkpolicy#softphone}
  */
  readonly softphone?: SystemlldpNetworkpolicySoftphone;
  /**
  * streaming_video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#streaming_video SystemlldpNetworkpolicy#streaming_video}
  */
  readonly streamingVideo?: SystemlldpNetworkpolicyStreamingVideo;
  /**
  * video_conferencing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#video_conferencing SystemlldpNetworkpolicy#video_conferencing}
  */
  readonly videoConferencing?: SystemlldpNetworkpolicyVideoConferencing;
  /**
  * video_signaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#video_signaling SystemlldpNetworkpolicy#video_signaling}
  */
  readonly videoSignaling?: SystemlldpNetworkpolicyVideoSignaling;
  /**
  * voice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#voice SystemlldpNetworkpolicy#voice}
  */
  readonly voice?: SystemlldpNetworkpolicyVoice;
  /**
  * voice_signaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#voice_signaling SystemlldpNetworkpolicy#voice_signaling}
  */
  readonly voiceSignaling?: SystemlldpNetworkpolicyVoiceSignaling;
}
export interface SystemlldpNetworkpolicyGuest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyGuestToTerraform(struct?: SystemlldpNetworkpolicyGuestOutputReference | SystemlldpNetworkpolicyGuest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyGuestToHclTerraform(struct?: SystemlldpNetworkpolicyGuestOutputReference | SystemlldpNetworkpolicyGuest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyGuestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyGuest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyGuest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyGuestVoiceSignaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyGuestVoiceSignalingToTerraform(struct?: SystemlldpNetworkpolicyGuestVoiceSignalingOutputReference | SystemlldpNetworkpolicyGuestVoiceSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyGuestVoiceSignalingToHclTerraform(struct?: SystemlldpNetworkpolicyGuestVoiceSignalingOutputReference | SystemlldpNetworkpolicyGuestVoiceSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyGuestVoiceSignalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyGuestVoiceSignaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyGuestVoiceSignaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicySoftphone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicySoftphoneToTerraform(struct?: SystemlldpNetworkpolicySoftphoneOutputReference | SystemlldpNetworkpolicySoftphone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicySoftphoneToHclTerraform(struct?: SystemlldpNetworkpolicySoftphoneOutputReference | SystemlldpNetworkpolicySoftphone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicySoftphoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicySoftphone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicySoftphone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyStreamingVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyStreamingVideoToTerraform(struct?: SystemlldpNetworkpolicyStreamingVideoOutputReference | SystemlldpNetworkpolicyStreamingVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyStreamingVideoToHclTerraform(struct?: SystemlldpNetworkpolicyStreamingVideoOutputReference | SystemlldpNetworkpolicyStreamingVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyStreamingVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyStreamingVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyStreamingVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyVideoConferencing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyVideoConferencingToTerraform(struct?: SystemlldpNetworkpolicyVideoConferencingOutputReference | SystemlldpNetworkpolicyVideoConferencing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyVideoConferencingToHclTerraform(struct?: SystemlldpNetworkpolicyVideoConferencingOutputReference | SystemlldpNetworkpolicyVideoConferencing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyVideoConferencingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyVideoConferencing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyVideoConferencing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyVideoSignaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyVideoSignalingToTerraform(struct?: SystemlldpNetworkpolicyVideoSignalingOutputReference | SystemlldpNetworkpolicyVideoSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyVideoSignalingToHclTerraform(struct?: SystemlldpNetworkpolicyVideoSignalingOutputReference | SystemlldpNetworkpolicyVideoSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyVideoSignalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyVideoSignaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyVideoSignaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyVoice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyVoiceToTerraform(struct?: SystemlldpNetworkpolicyVoiceOutputReference | SystemlldpNetworkpolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyVoiceToHclTerraform(struct?: SystemlldpNetworkpolicyVoiceOutputReference | SystemlldpNetworkpolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface SystemlldpNetworkpolicyVoiceSignaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#dscp SystemlldpNetworkpolicy#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#priority SystemlldpNetworkpolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#status SystemlldpNetworkpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#tag SystemlldpNetworkpolicy#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#vlan SystemlldpNetworkpolicy#vlan}
  */
  readonly vlan?: number;
}

export function systemlldpNetworkpolicyVoiceSignalingToTerraform(struct?: SystemlldpNetworkpolicyVoiceSignalingOutputReference | SystemlldpNetworkpolicyVoiceSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function systemlldpNetworkpolicyVoiceSignalingToHclTerraform(struct?: SystemlldpNetworkpolicyVoiceSignalingOutputReference | SystemlldpNetworkpolicyVoiceSignaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlldpNetworkpolicyVoiceSignalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemlldpNetworkpolicyVoiceSignaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlldpNetworkpolicyVoiceSignaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscp = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._tag = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscp = value.dscp;
      this._priority = value.priority;
      this._status = value.status;
      this._tag = value.tag;
      this._vlan = value.vlan;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy fortios_systemlldp_networkpolicy}
*/
export class SystemlldpNetworkpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemlldp_networkpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemlldpNetworkpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemlldpNetworkpolicy to import
  * @param importFromId The id of the existing SystemlldpNetworkpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemlldpNetworkpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemlldp_networkpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemlldp_networkpolicy fortios_systemlldp_networkpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemlldpNetworkpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SystemlldpNetworkpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemlldp_networkpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._guest.internalValue = config.guest;
    this._guestVoiceSignaling.internalValue = config.guestVoiceSignaling;
    this._softphone.internalValue = config.softphone;
    this._streamingVideo.internalValue = config.streamingVideo;
    this._videoConferencing.internalValue = config.videoConferencing;
    this._videoSignaling.internalValue = config.videoSignaling;
    this._voice.internalValue = config.voice;
    this._voiceSignaling.internalValue = config.voiceSignaling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // guest - computed: false, optional: true, required: false
  private _guest = new SystemlldpNetworkpolicyGuestOutputReference(this, "guest");
  public get guest() {
    return this._guest;
  }
  public putGuest(value: SystemlldpNetworkpolicyGuest) {
    this._guest.internalValue = value;
  }
  public resetGuest() {
    this._guest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestInput() {
    return this._guest.internalValue;
  }

  // guest_voice_signaling - computed: false, optional: true, required: false
  private _guestVoiceSignaling = new SystemlldpNetworkpolicyGuestVoiceSignalingOutputReference(this, "guest_voice_signaling");
  public get guestVoiceSignaling() {
    return this._guestVoiceSignaling;
  }
  public putGuestVoiceSignaling(value: SystemlldpNetworkpolicyGuestVoiceSignaling) {
    this._guestVoiceSignaling.internalValue = value;
  }
  public resetGuestVoiceSignaling() {
    this._guestVoiceSignaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVoiceSignalingInput() {
    return this._guestVoiceSignaling.internalValue;
  }

  // softphone - computed: false, optional: true, required: false
  private _softphone = new SystemlldpNetworkpolicySoftphoneOutputReference(this, "softphone");
  public get softphone() {
    return this._softphone;
  }
  public putSoftphone(value: SystemlldpNetworkpolicySoftphone) {
    this._softphone.internalValue = value;
  }
  public resetSoftphone() {
    this._softphone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softphoneInput() {
    return this._softphone.internalValue;
  }

  // streaming_video - computed: false, optional: true, required: false
  private _streamingVideo = new SystemlldpNetworkpolicyStreamingVideoOutputReference(this, "streaming_video");
  public get streamingVideo() {
    return this._streamingVideo;
  }
  public putStreamingVideo(value: SystemlldpNetworkpolicyStreamingVideo) {
    this._streamingVideo.internalValue = value;
  }
  public resetStreamingVideo() {
    this._streamingVideo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingVideoInput() {
    return this._streamingVideo.internalValue;
  }

  // video_conferencing - computed: false, optional: true, required: false
  private _videoConferencing = new SystemlldpNetworkpolicyVideoConferencingOutputReference(this, "video_conferencing");
  public get videoConferencing() {
    return this._videoConferencing;
  }
  public putVideoConferencing(value: SystemlldpNetworkpolicyVideoConferencing) {
    this._videoConferencing.internalValue = value;
  }
  public resetVideoConferencing() {
    this._videoConferencing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoConferencingInput() {
    return this._videoConferencing.internalValue;
  }

  // video_signaling - computed: false, optional: true, required: false
  private _videoSignaling = new SystemlldpNetworkpolicyVideoSignalingOutputReference(this, "video_signaling");
  public get videoSignaling() {
    return this._videoSignaling;
  }
  public putVideoSignaling(value: SystemlldpNetworkpolicyVideoSignaling) {
    this._videoSignaling.internalValue = value;
  }
  public resetVideoSignaling() {
    this._videoSignaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSignalingInput() {
    return this._videoSignaling.internalValue;
  }

  // voice - computed: false, optional: true, required: false
  private _voice = new SystemlldpNetworkpolicyVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: SystemlldpNetworkpolicyVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }

  // voice_signaling - computed: false, optional: true, required: false
  private _voiceSignaling = new SystemlldpNetworkpolicyVoiceSignalingOutputReference(this, "voice_signaling");
  public get voiceSignaling() {
    return this._voiceSignaling;
  }
  public putVoiceSignaling(value: SystemlldpNetworkpolicyVoiceSignaling) {
    this._voiceSignaling.internalValue = value;
  }
  public resetVoiceSignaling() {
    this._voiceSignaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceSignalingInput() {
    return this._voiceSignaling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      guest: systemlldpNetworkpolicyGuestToTerraform(this._guest.internalValue),
      guest_voice_signaling: systemlldpNetworkpolicyGuestVoiceSignalingToTerraform(this._guestVoiceSignaling.internalValue),
      softphone: systemlldpNetworkpolicySoftphoneToTerraform(this._softphone.internalValue),
      streaming_video: systemlldpNetworkpolicyStreamingVideoToTerraform(this._streamingVideo.internalValue),
      video_conferencing: systemlldpNetworkpolicyVideoConferencingToTerraform(this._videoConferencing.internalValue),
      video_signaling: systemlldpNetworkpolicyVideoSignalingToTerraform(this._videoSignaling.internalValue),
      voice: systemlldpNetworkpolicyVoiceToTerraform(this._voice.internalValue),
      voice_signaling: systemlldpNetworkpolicyVoiceSignalingToTerraform(this._voiceSignaling.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest: {
        value: systemlldpNetworkpolicyGuestToHclTerraform(this._guest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyGuestList",
      },
      guest_voice_signaling: {
        value: systemlldpNetworkpolicyGuestVoiceSignalingToHclTerraform(this._guestVoiceSignaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyGuestVoiceSignalingList",
      },
      softphone: {
        value: systemlldpNetworkpolicySoftphoneToHclTerraform(this._softphone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicySoftphoneList",
      },
      streaming_video: {
        value: systemlldpNetworkpolicyStreamingVideoToHclTerraform(this._streamingVideo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyStreamingVideoList",
      },
      video_conferencing: {
        value: systemlldpNetworkpolicyVideoConferencingToHclTerraform(this._videoConferencing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyVideoConferencingList",
      },
      video_signaling: {
        value: systemlldpNetworkpolicyVideoSignalingToHclTerraform(this._videoSignaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyVideoSignalingList",
      },
      voice: {
        value: systemlldpNetworkpolicyVoiceToHclTerraform(this._voice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyVoiceList",
      },
      voice_signaling: {
        value: systemlldpNetworkpolicyVoiceSignalingToHclTerraform(this._voiceSignaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlldpNetworkpolicyVoiceSignalingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
