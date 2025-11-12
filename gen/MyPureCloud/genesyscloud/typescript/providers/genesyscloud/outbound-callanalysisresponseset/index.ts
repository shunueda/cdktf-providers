// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundCallanalysisresponsesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable answering machine detection Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#amd_speech_distinguish_enabled OutboundCallanalysisresponseset#amd_speech_distinguish_enabled}
  */
  readonly amdSpeechDistinguishEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable answering machine beep detection Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#beep_detection_enabled OutboundCallanalysisresponseset#beep_detection_enabled}
  */
  readonly beepDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#id OutboundCallanalysisresponseset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Setting level of live speaker detection based on ringbacks. Valid values: Disabled, Low, Medium, High.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#live_speaker_detection_mode OutboundCallanalysisresponseset#live_speaker_detection_mode}
  */
  readonly liveSpeakerDetectionMode?: string;
  /**
  * The name of the Response Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name: string;
  /**
  * responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#responses OutboundCallanalysisresponseset#responses}
  */
  readonly responses?: OutboundCallanalysisresponsesetResponses;
}
export interface OutboundCallanalysisresponsesetResponsesCallableBusy {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableBusyToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableBusyOutputReference | OutboundCallanalysisresponsesetResponsesCallableBusy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableBusyToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableBusyOutputReference | OutboundCallanalysisresponsesetResponsesCallableBusy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableBusyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableBusy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableBusy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableDisconnect {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableDisconnectToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableDisconnectOutputReference | OutboundCallanalysisresponsesetResponsesCallableDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableDisconnectToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableDisconnectOutputReference | OutboundCallanalysisresponsesetResponsesCallableDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableDisconnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableDisconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableDisconnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableFax {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableFaxToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableFaxOutputReference | OutboundCallanalysisresponsesetResponsesCallableFax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableFaxToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableFaxOutputReference | OutboundCallanalysisresponsesetResponsesCallableFax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableFaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableFax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableFax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableLineconnected {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableLineconnectedToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableLineconnectedOutputReference | OutboundCallanalysisresponsesetResponsesCallableLineconnected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableLineconnectedToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableLineconnectedOutputReference | OutboundCallanalysisresponsesetResponsesCallableLineconnected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableLineconnectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableLineconnected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableLineconnected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableMachine {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableMachineToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableMachineOutputReference | OutboundCallanalysisresponsesetResponsesCallableMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableMachineToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableMachineOutputReference | OutboundCallanalysisresponsesetResponsesCallableMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableNoanswer {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableNoanswerToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableNoanswerOutputReference | OutboundCallanalysisresponsesetResponsesCallableNoanswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableNoanswerToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableNoanswerOutputReference | OutboundCallanalysisresponsesetResponsesCallableNoanswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableNoanswerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableNoanswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableNoanswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallablePerson {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallablePersonToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallablePersonOutputReference | OutboundCallanalysisresponsesetResponsesCallablePerson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallablePersonToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallablePersonOutputReference | OutboundCallanalysisresponsesetResponsesCallablePerson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallablePersonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallablePerson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallablePerson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesCallableSit {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesCallableSitToTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableSitOutputReference | OutboundCallanalysisresponsesetResponsesCallableSit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesCallableSitToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesCallableSitOutputReference | OutboundCallanalysisresponsesetResponsesCallableSit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesCallableSitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesCallableSit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesCallableSit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesUncallableNotfound {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesUncallableNotfoundToTerraform(struct?: OutboundCallanalysisresponsesetResponsesUncallableNotfoundOutputReference | OutboundCallanalysisresponsesetResponsesUncallableNotfound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesUncallableNotfoundToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesUncallableNotfoundOutputReference | OutboundCallanalysisresponsesetResponsesUncallableNotfound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesUncallableNotfoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesUncallableNotfound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesUncallableNotfound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponsesUncallableSit {
  /**
  * Parameter for this reaction. For transfer_flow, this would be the outbound flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#data OutboundCallanalysisresponseset#data}
  */
  readonly data?: string;
  /**
  * Name of the parameter for this reaction. For transfer_flow, this would be the outbound flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#name OutboundCallanalysisresponseset#name}
  */
  readonly name?: string;
  /**
  * The reaction to take for a given call analysis result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#reaction_type OutboundCallanalysisresponseset#reaction_type}
  */
  readonly reactionType: string;
}

export function outboundCallanalysisresponsesetResponsesUncallableSitToTerraform(struct?: OutboundCallanalysisresponsesetResponsesUncallableSitOutputReference | OutboundCallanalysisresponsesetResponsesUncallableSit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    reaction_type: cdktf.stringToTerraform(struct!.reactionType),
  }
}


export function outboundCallanalysisresponsesetResponsesUncallableSitToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesUncallableSitOutputReference | OutboundCallanalysisresponsesetResponsesUncallableSit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.reactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesUncallableSitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponsesUncallableSit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactionType = this._reactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponsesUncallableSit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._name = undefined;
      this._reactionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._name = value.name;
      this._reactionType = value.reactionType;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // reaction_type - computed: false, optional: false, required: true
  private _reactionType?: string; 
  public get reactionType() {
    return this.getStringAttribute('reaction_type');
  }
  public set reactionType(value: string) {
    this._reactionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reactionTypeInput() {
    return this._reactionType;
  }
}
export interface OutboundCallanalysisresponsesetResponses {
  /**
  * callable_busy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_busy OutboundCallanalysisresponseset#callable_busy}
  */
  readonly callableBusy?: OutboundCallanalysisresponsesetResponsesCallableBusy;
  /**
  * callable_disconnect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_disconnect OutboundCallanalysisresponseset#callable_disconnect}
  */
  readonly callableDisconnect?: OutboundCallanalysisresponsesetResponsesCallableDisconnect;
  /**
  * callable_fax block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_fax OutboundCallanalysisresponseset#callable_fax}
  */
  readonly callableFax?: OutboundCallanalysisresponsesetResponsesCallableFax;
  /**
  * callable_lineconnected block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_lineconnected OutboundCallanalysisresponseset#callable_lineconnected}
  */
  readonly callableLineconnected?: OutboundCallanalysisresponsesetResponsesCallableLineconnected;
  /**
  * callable_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_machine OutboundCallanalysisresponseset#callable_machine}
  */
  readonly callableMachine?: OutboundCallanalysisresponsesetResponsesCallableMachine;
  /**
  * callable_noanswer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_noanswer OutboundCallanalysisresponseset#callable_noanswer}
  */
  readonly callableNoanswer?: OutboundCallanalysisresponsesetResponsesCallableNoanswer;
  /**
  * callable_person block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_person OutboundCallanalysisresponseset#callable_person}
  */
  readonly callablePerson?: OutboundCallanalysisresponsesetResponsesCallablePerson;
  /**
  * callable_sit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#callable_sit OutboundCallanalysisresponseset#callable_sit}
  */
  readonly callableSit?: OutboundCallanalysisresponsesetResponsesCallableSit;
  /**
  * uncallable_notfound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#uncallable_notfound OutboundCallanalysisresponseset#uncallable_notfound}
  */
  readonly uncallableNotfound?: OutboundCallanalysisresponsesetResponsesUncallableNotfound;
  /**
  * uncallable_sit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#uncallable_sit OutboundCallanalysisresponseset#uncallable_sit}
  */
  readonly uncallableSit?: OutboundCallanalysisresponsesetResponsesUncallableSit;
}

export function outboundCallanalysisresponsesetResponsesToTerraform(struct?: OutboundCallanalysisresponsesetResponsesOutputReference | OutboundCallanalysisresponsesetResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callable_busy: outboundCallanalysisresponsesetResponsesCallableBusyToTerraform(struct!.callableBusy),
    callable_disconnect: outboundCallanalysisresponsesetResponsesCallableDisconnectToTerraform(struct!.callableDisconnect),
    callable_fax: outboundCallanalysisresponsesetResponsesCallableFaxToTerraform(struct!.callableFax),
    callable_lineconnected: outboundCallanalysisresponsesetResponsesCallableLineconnectedToTerraform(struct!.callableLineconnected),
    callable_machine: outboundCallanalysisresponsesetResponsesCallableMachineToTerraform(struct!.callableMachine),
    callable_noanswer: outboundCallanalysisresponsesetResponsesCallableNoanswerToTerraform(struct!.callableNoanswer),
    callable_person: outboundCallanalysisresponsesetResponsesCallablePersonToTerraform(struct!.callablePerson),
    callable_sit: outboundCallanalysisresponsesetResponsesCallableSitToTerraform(struct!.callableSit),
    uncallable_notfound: outboundCallanalysisresponsesetResponsesUncallableNotfoundToTerraform(struct!.uncallableNotfound),
    uncallable_sit: outboundCallanalysisresponsesetResponsesUncallableSitToTerraform(struct!.uncallableSit),
  }
}


export function outboundCallanalysisresponsesetResponsesToHclTerraform(struct?: OutboundCallanalysisresponsesetResponsesOutputReference | OutboundCallanalysisresponsesetResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callable_busy: {
      value: outboundCallanalysisresponsesetResponsesCallableBusyToHclTerraform(struct!.callableBusy),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableBusyList",
    },
    callable_disconnect: {
      value: outboundCallanalysisresponsesetResponsesCallableDisconnectToHclTerraform(struct!.callableDisconnect),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableDisconnectList",
    },
    callable_fax: {
      value: outboundCallanalysisresponsesetResponsesCallableFaxToHclTerraform(struct!.callableFax),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableFaxList",
    },
    callable_lineconnected: {
      value: outboundCallanalysisresponsesetResponsesCallableLineconnectedToHclTerraform(struct!.callableLineconnected),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableLineconnectedList",
    },
    callable_machine: {
      value: outboundCallanalysisresponsesetResponsesCallableMachineToHclTerraform(struct!.callableMachine),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableMachineList",
    },
    callable_noanswer: {
      value: outboundCallanalysisresponsesetResponsesCallableNoanswerToHclTerraform(struct!.callableNoanswer),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableNoanswerList",
    },
    callable_person: {
      value: outboundCallanalysisresponsesetResponsesCallablePersonToHclTerraform(struct!.callablePerson),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallablePersonList",
    },
    callable_sit: {
      value: outboundCallanalysisresponsesetResponsesCallableSitToHclTerraform(struct!.callableSit),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesCallableSitList",
    },
    uncallable_notfound: {
      value: outboundCallanalysisresponsesetResponsesUncallableNotfoundToHclTerraform(struct!.uncallableNotfound),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesUncallableNotfoundList",
    },
    uncallable_sit: {
      value: outboundCallanalysisresponsesetResponsesUncallableSitToHclTerraform(struct!.uncallableSit),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundCallanalysisresponsesetResponsesUncallableSitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundCallanalysisresponsesetResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundCallanalysisresponsesetResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callableBusy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableBusy = this._callableBusy?.internalValue;
    }
    if (this._callableDisconnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableDisconnect = this._callableDisconnect?.internalValue;
    }
    if (this._callableFax?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableFax = this._callableFax?.internalValue;
    }
    if (this._callableLineconnected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableLineconnected = this._callableLineconnected?.internalValue;
    }
    if (this._callableMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableMachine = this._callableMachine?.internalValue;
    }
    if (this._callableNoanswer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableNoanswer = this._callableNoanswer?.internalValue;
    }
    if (this._callablePerson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callablePerson = this._callablePerson?.internalValue;
    }
    if (this._callableSit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableSit = this._callableSit?.internalValue;
    }
    if (this._uncallableNotfound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncallableNotfound = this._uncallableNotfound?.internalValue;
    }
    if (this._uncallableSit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncallableSit = this._uncallableSit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundCallanalysisresponsesetResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callableBusy.internalValue = undefined;
      this._callableDisconnect.internalValue = undefined;
      this._callableFax.internalValue = undefined;
      this._callableLineconnected.internalValue = undefined;
      this._callableMachine.internalValue = undefined;
      this._callableNoanswer.internalValue = undefined;
      this._callablePerson.internalValue = undefined;
      this._callableSit.internalValue = undefined;
      this._uncallableNotfound.internalValue = undefined;
      this._uncallableSit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callableBusy.internalValue = value.callableBusy;
      this._callableDisconnect.internalValue = value.callableDisconnect;
      this._callableFax.internalValue = value.callableFax;
      this._callableLineconnected.internalValue = value.callableLineconnected;
      this._callableMachine.internalValue = value.callableMachine;
      this._callableNoanswer.internalValue = value.callableNoanswer;
      this._callablePerson.internalValue = value.callablePerson;
      this._callableSit.internalValue = value.callableSit;
      this._uncallableNotfound.internalValue = value.uncallableNotfound;
      this._uncallableSit.internalValue = value.uncallableSit;
    }
  }

  // callable_busy - computed: false, optional: true, required: false
  private _callableBusy = new OutboundCallanalysisresponsesetResponsesCallableBusyOutputReference(this, "callable_busy");
  public get callableBusy() {
    return this._callableBusy;
  }
  public putCallableBusy(value: OutboundCallanalysisresponsesetResponsesCallableBusy) {
    this._callableBusy.internalValue = value;
  }
  public resetCallableBusy() {
    this._callableBusy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableBusyInput() {
    return this._callableBusy.internalValue;
  }

  // callable_disconnect - computed: false, optional: true, required: false
  private _callableDisconnect = new OutboundCallanalysisresponsesetResponsesCallableDisconnectOutputReference(this, "callable_disconnect");
  public get callableDisconnect() {
    return this._callableDisconnect;
  }
  public putCallableDisconnect(value: OutboundCallanalysisresponsesetResponsesCallableDisconnect) {
    this._callableDisconnect.internalValue = value;
  }
  public resetCallableDisconnect() {
    this._callableDisconnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableDisconnectInput() {
    return this._callableDisconnect.internalValue;
  }

  // callable_fax - computed: false, optional: true, required: false
  private _callableFax = new OutboundCallanalysisresponsesetResponsesCallableFaxOutputReference(this, "callable_fax");
  public get callableFax() {
    return this._callableFax;
  }
  public putCallableFax(value: OutboundCallanalysisresponsesetResponsesCallableFax) {
    this._callableFax.internalValue = value;
  }
  public resetCallableFax() {
    this._callableFax.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableFaxInput() {
    return this._callableFax.internalValue;
  }

  // callable_lineconnected - computed: false, optional: true, required: false
  private _callableLineconnected = new OutboundCallanalysisresponsesetResponsesCallableLineconnectedOutputReference(this, "callable_lineconnected");
  public get callableLineconnected() {
    return this._callableLineconnected;
  }
  public putCallableLineconnected(value: OutboundCallanalysisresponsesetResponsesCallableLineconnected) {
    this._callableLineconnected.internalValue = value;
  }
  public resetCallableLineconnected() {
    this._callableLineconnected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableLineconnectedInput() {
    return this._callableLineconnected.internalValue;
  }

  // callable_machine - computed: false, optional: true, required: false
  private _callableMachine = new OutboundCallanalysisresponsesetResponsesCallableMachineOutputReference(this, "callable_machine");
  public get callableMachine() {
    return this._callableMachine;
  }
  public putCallableMachine(value: OutboundCallanalysisresponsesetResponsesCallableMachine) {
    this._callableMachine.internalValue = value;
  }
  public resetCallableMachine() {
    this._callableMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableMachineInput() {
    return this._callableMachine.internalValue;
  }

  // callable_noanswer - computed: false, optional: true, required: false
  private _callableNoanswer = new OutboundCallanalysisresponsesetResponsesCallableNoanswerOutputReference(this, "callable_noanswer");
  public get callableNoanswer() {
    return this._callableNoanswer;
  }
  public putCallableNoanswer(value: OutboundCallanalysisresponsesetResponsesCallableNoanswer) {
    this._callableNoanswer.internalValue = value;
  }
  public resetCallableNoanswer() {
    this._callableNoanswer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableNoanswerInput() {
    return this._callableNoanswer.internalValue;
  }

  // callable_person - computed: false, optional: true, required: false
  private _callablePerson = new OutboundCallanalysisresponsesetResponsesCallablePersonOutputReference(this, "callable_person");
  public get callablePerson() {
    return this._callablePerson;
  }
  public putCallablePerson(value: OutboundCallanalysisresponsesetResponsesCallablePerson) {
    this._callablePerson.internalValue = value;
  }
  public resetCallablePerson() {
    this._callablePerson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callablePersonInput() {
    return this._callablePerson.internalValue;
  }

  // callable_sit - computed: false, optional: true, required: false
  private _callableSit = new OutboundCallanalysisresponsesetResponsesCallableSitOutputReference(this, "callable_sit");
  public get callableSit() {
    return this._callableSit;
  }
  public putCallableSit(value: OutboundCallanalysisresponsesetResponsesCallableSit) {
    this._callableSit.internalValue = value;
  }
  public resetCallableSit() {
    this._callableSit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableSitInput() {
    return this._callableSit.internalValue;
  }

  // uncallable_notfound - computed: false, optional: true, required: false
  private _uncallableNotfound = new OutboundCallanalysisresponsesetResponsesUncallableNotfoundOutputReference(this, "uncallable_notfound");
  public get uncallableNotfound() {
    return this._uncallableNotfound;
  }
  public putUncallableNotfound(value: OutboundCallanalysisresponsesetResponsesUncallableNotfound) {
    this._uncallableNotfound.internalValue = value;
  }
  public resetUncallableNotfound() {
    this._uncallableNotfound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncallableNotfoundInput() {
    return this._uncallableNotfound.internalValue;
  }

  // uncallable_sit - computed: false, optional: true, required: false
  private _uncallableSit = new OutboundCallanalysisresponsesetResponsesUncallableSitOutputReference(this, "uncallable_sit");
  public get uncallableSit() {
    return this._uncallableSit;
  }
  public putUncallableSit(value: OutboundCallanalysisresponsesetResponsesUncallableSit) {
    this._uncallableSit.internalValue = value;
  }
  public resetUncallableSit() {
    this._uncallableSit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncallableSitInput() {
    return this._uncallableSit.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset genesyscloud_outbound_callanalysisresponseset}
*/
export class OutboundCallanalysisresponseset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_callanalysisresponseset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundCallanalysisresponseset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundCallanalysisresponseset to import
  * @param importFromId The id of the existing OutboundCallanalysisresponseset that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundCallanalysisresponseset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_callanalysisresponseset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_callanalysisresponseset genesyscloud_outbound_callanalysisresponseset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundCallanalysisresponsesetConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundCallanalysisresponsesetConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_callanalysisresponseset',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amdSpeechDistinguishEnabled = config.amdSpeechDistinguishEnabled;
    this._beepDetectionEnabled = config.beepDetectionEnabled;
    this._id = config.id;
    this._liveSpeakerDetectionMode = config.liveSpeakerDetectionMode;
    this._name = config.name;
    this._responses.internalValue = config.responses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amd_speech_distinguish_enabled - computed: false, optional: true, required: false
  private _amdSpeechDistinguishEnabled?: boolean | cdktf.IResolvable; 
  public get amdSpeechDistinguishEnabled() {
    return this.getBooleanAttribute('amd_speech_distinguish_enabled');
  }
  public set amdSpeechDistinguishEnabled(value: boolean | cdktf.IResolvable) {
    this._amdSpeechDistinguishEnabled = value;
  }
  public resetAmdSpeechDistinguishEnabled() {
    this._amdSpeechDistinguishEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amdSpeechDistinguishEnabledInput() {
    return this._amdSpeechDistinguishEnabled;
  }

  // beep_detection_enabled - computed: false, optional: true, required: false
  private _beepDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get beepDetectionEnabled() {
    return this.getBooleanAttribute('beep_detection_enabled');
  }
  public set beepDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._beepDetectionEnabled = value;
  }
  public resetBeepDetectionEnabled() {
    this._beepDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beepDetectionEnabledInput() {
    return this._beepDetectionEnabled;
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

  // live_speaker_detection_mode - computed: true, optional: true, required: false
  private _liveSpeakerDetectionMode?: string; 
  public get liveSpeakerDetectionMode() {
    return this.getStringAttribute('live_speaker_detection_mode');
  }
  public set liveSpeakerDetectionMode(value: string) {
    this._liveSpeakerDetectionMode = value;
  }
  public resetLiveSpeakerDetectionMode() {
    this._liveSpeakerDetectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSpeakerDetectionModeInput() {
    return this._liveSpeakerDetectionMode;
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

  // responses - computed: false, optional: true, required: false
  private _responses = new OutboundCallanalysisresponsesetResponsesOutputReference(this, "responses");
  public get responses() {
    return this._responses;
  }
  public putResponses(value: OutboundCallanalysisresponsesetResponses) {
    this._responses.internalValue = value;
  }
  public resetResponses() {
    this._responses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesInput() {
    return this._responses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amd_speech_distinguish_enabled: cdktf.booleanToTerraform(this._amdSpeechDistinguishEnabled),
      beep_detection_enabled: cdktf.booleanToTerraform(this._beepDetectionEnabled),
      id: cdktf.stringToTerraform(this._id),
      live_speaker_detection_mode: cdktf.stringToTerraform(this._liveSpeakerDetectionMode),
      name: cdktf.stringToTerraform(this._name),
      responses: outboundCallanalysisresponsesetResponsesToTerraform(this._responses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amd_speech_distinguish_enabled: {
        value: cdktf.booleanToHclTerraform(this._amdSpeechDistinguishEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      beep_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._beepDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      live_speaker_detection_mode: {
        value: cdktf.stringToHclTerraform(this._liveSpeakerDetectionMode),
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
      responses: {
        value: outboundCallanalysisresponsesetResponsesToHclTerraform(this._responses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundCallanalysisresponsesetResponsesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
