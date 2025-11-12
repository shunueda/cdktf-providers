// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#id ConversationsMessagingSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The messaging Setting profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#name ConversationsMessagingSettings#name}
  */
  readonly name: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#content ConversationsMessagingSettings#content}
  */
  readonly content?: ConversationsMessagingSettingsContent;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#event ConversationsMessagingSettings#event}
  */
  readonly event?: ConversationsMessagingSettingsEvent;
}
export interface ConversationsMessagingSettingsContentStoryMention {
  /**
  * Valid values: Enabled, Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#inbound ConversationsMessagingSettings#inbound}
  */
  readonly inbound?: string;
}

export function conversationsMessagingSettingsContentStoryMentionToTerraform(struct?: ConversationsMessagingSettingsContentStoryMentionOutputReference | ConversationsMessagingSettingsContentStoryMention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
  }
}


export function conversationsMessagingSettingsContentStoryMentionToHclTerraform(struct?: ConversationsMessagingSettingsContentStoryMentionOutputReference | ConversationsMessagingSettingsContentStoryMention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsContentStoryMentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsContentStoryMention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsContentStoryMention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }
}
export interface ConversationsMessagingSettingsContentStoryReply {
  /**
  * Valid values: Enabled, Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#inbound ConversationsMessagingSettings#inbound}
  */
  readonly inbound?: string;
}

export function conversationsMessagingSettingsContentStoryReplyToTerraform(struct?: ConversationsMessagingSettingsContentStoryReplyOutputReference | ConversationsMessagingSettingsContentStoryReply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
  }
}


export function conversationsMessagingSettingsContentStoryReplyToHclTerraform(struct?: ConversationsMessagingSettingsContentStoryReplyOutputReference | ConversationsMessagingSettingsContentStoryReply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsContentStoryReplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsContentStoryReply | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsContentStoryReply | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }
}
export interface ConversationsMessagingSettingsContentStory {
  /**
  * mention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#mention ConversationsMessagingSettings#mention}
  */
  readonly mention?: ConversationsMessagingSettingsContentStoryMention;
  /**
  * reply block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#reply ConversationsMessagingSettings#reply}
  */
  readonly reply?: ConversationsMessagingSettingsContentStoryReply;
}

export function conversationsMessagingSettingsContentStoryToTerraform(struct?: ConversationsMessagingSettingsContentStoryOutputReference | ConversationsMessagingSettingsContentStory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mention: conversationsMessagingSettingsContentStoryMentionToTerraform(struct!.mention),
    reply: conversationsMessagingSettingsContentStoryReplyToTerraform(struct!.reply),
  }
}


export function conversationsMessagingSettingsContentStoryToHclTerraform(struct?: ConversationsMessagingSettingsContentStoryOutputReference | ConversationsMessagingSettingsContentStory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mention: {
      value: conversationsMessagingSettingsContentStoryMentionToHclTerraform(struct!.mention),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSettingsContentStoryMentionList",
    },
    reply: {
      value: conversationsMessagingSettingsContentStoryReplyToHclTerraform(struct!.reply),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSettingsContentStoryReplyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsContentStoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsContentStory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mention = this._mention?.internalValue;
    }
    if (this._reply?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply = this._reply?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsContentStory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mention.internalValue = undefined;
      this._reply.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mention.internalValue = value.mention;
      this._reply.internalValue = value.reply;
    }
  }

  // mention - computed: false, optional: true, required: false
  private _mention = new ConversationsMessagingSettingsContentStoryMentionOutputReference(this, "mention");
  public get mention() {
    return this._mention;
  }
  public putMention(value: ConversationsMessagingSettingsContentStoryMention) {
    this._mention.internalValue = value;
  }
  public resetMention() {
    this._mention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionInput() {
    return this._mention.internalValue;
  }

  // reply - computed: false, optional: true, required: false
  private _reply = new ConversationsMessagingSettingsContentStoryReplyOutputReference(this, "reply");
  public get reply() {
    return this._reply;
  }
  public putReply(value: ConversationsMessagingSettingsContentStoryReply) {
    this._reply.internalValue = value;
  }
  public resetReply() {
    this._reply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyInput() {
    return this._reply.internalValue;
  }
}
export interface ConversationsMessagingSettingsContent {
  /**
  * story block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#story ConversationsMessagingSettings#story}
  */
  readonly story?: ConversationsMessagingSettingsContentStory;
}

export function conversationsMessagingSettingsContentToTerraform(struct?: ConversationsMessagingSettingsContentOutputReference | ConversationsMessagingSettingsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    story: conversationsMessagingSettingsContentStoryToTerraform(struct!.story),
  }
}


export function conversationsMessagingSettingsContentToHclTerraform(struct?: ConversationsMessagingSettingsContentOutputReference | ConversationsMessagingSettingsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    story: {
      value: conversationsMessagingSettingsContentStoryToHclTerraform(struct!.story),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSettingsContentStoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._story?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.story = this._story?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._story.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._story.internalValue = value.story;
    }
  }

  // story - computed: false, optional: true, required: false
  private _story = new ConversationsMessagingSettingsContentStoryOutputReference(this, "story");
  public get story() {
    return this._story;
  }
  public putStory(value: ConversationsMessagingSettingsContentStory) {
    this._story.internalValue = value;
  }
  public resetStory() {
    this._story.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storyInput() {
    return this._story.internalValue;
  }
}
export interface ConversationsMessagingSettingsEventTypingOn {
  /**
  * Status for the Inbound Direction. Valid values: Enabled, Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#inbound ConversationsMessagingSettings#inbound}
  */
  readonly inbound?: string;
  /**
  * Status for the outbound Direction. Valid values: Enabled, Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#outbound ConversationsMessagingSettings#outbound}
  */
  readonly outbound?: string;
}

export function conversationsMessagingSettingsEventTypingOnToTerraform(struct?: ConversationsMessagingSettingsEventTypingOnOutputReference | ConversationsMessagingSettingsEventTypingOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.stringToTerraform(struct!.inbound),
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function conversationsMessagingSettingsEventTypingOnToHclTerraform(struct?: ConversationsMessagingSettingsEventTypingOnOutputReference | ConversationsMessagingSettingsEventTypingOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.stringToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsEventTypingOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsEventTypingOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsEventTypingOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
      this._outbound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface ConversationsMessagingSettingsEventTyping {
  /**
  * on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#on ConversationsMessagingSettings#on}
  */
  readonly on?: ConversationsMessagingSettingsEventTypingOn;
}

export function conversationsMessagingSettingsEventTypingToTerraform(struct?: ConversationsMessagingSettingsEventTypingOutputReference | ConversationsMessagingSettingsEventTyping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on: conversationsMessagingSettingsEventTypingOnToTerraform(struct!.on),
  }
}


export function conversationsMessagingSettingsEventTypingToHclTerraform(struct?: ConversationsMessagingSettingsEventTypingOutputReference | ConversationsMessagingSettingsEventTyping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on: {
      value: conversationsMessagingSettingsEventTypingOnToHclTerraform(struct!.on),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSettingsEventTypingOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsEventTypingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsEventTyping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._on?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsEventTyping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._on.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._on.internalValue = value.on;
    }
  }

  // on - computed: false, optional: true, required: false
  private _on = new ConversationsMessagingSettingsEventTypingOnOutputReference(this, "on");
  public get on() {
    return this._on;
  }
  public putOn(value: ConversationsMessagingSettingsEventTypingOn) {
    this._on.internalValue = value;
  }
  public resetOn() {
    this._on.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on.internalValue;
  }
}
export interface ConversationsMessagingSettingsEvent {
  /**
  * typing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#typing ConversationsMessagingSettings#typing}
  */
  readonly typing?: ConversationsMessagingSettingsEventTyping;
}

export function conversationsMessagingSettingsEventToTerraform(struct?: ConversationsMessagingSettingsEventOutputReference | ConversationsMessagingSettingsEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    typing: conversationsMessagingSettingsEventTypingToTerraform(struct!.typing),
  }
}


export function conversationsMessagingSettingsEventToHclTerraform(struct?: ConversationsMessagingSettingsEventOutputReference | ConversationsMessagingSettingsEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    typing: {
      value: conversationsMessagingSettingsEventTypingToHclTerraform(struct!.typing),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSettingsEventTypingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSettingsEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSettingsEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typing = this._typing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSettingsEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._typing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._typing.internalValue = value.typing;
    }
  }

  // typing - computed: false, optional: true, required: false
  private _typing = new ConversationsMessagingSettingsEventTypingOutputReference(this, "typing");
  public get typing() {
    return this._typing;
  }
  public putTyping(value: ConversationsMessagingSettingsEventTyping) {
    this._typing.internalValue = value;
  }
  public resetTyping() {
    this._typing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typingInput() {
    return this._typing.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings genesyscloud_conversations_messaging_settings}
*/
export class ConversationsMessagingSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingSettings to import
  * @param importFromId The id of the existing ConversationsMessagingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_settings genesyscloud_conversations_messaging_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_settings',
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
    this._id = config.id;
    this._name = config.name;
    this._content.internalValue = config.content;
    this._event.internalValue = config.event;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // content - computed: false, optional: true, required: false
  private _content = new ConversationsMessagingSettingsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: ConversationsMessagingSettingsContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new ConversationsMessagingSettingsEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: ConversationsMessagingSettingsEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      content: conversationsMessagingSettingsContentToTerraform(this._content.internalValue),
      event: conversationsMessagingSettingsEventToTerraform(this._event.internalValue),
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
      content: {
        value: conversationsMessagingSettingsContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingSettingsContentList",
      },
      event: {
        value: conversationsMessagingSettingsEventToHclTerraform(this._event.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingSettingsEventList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
