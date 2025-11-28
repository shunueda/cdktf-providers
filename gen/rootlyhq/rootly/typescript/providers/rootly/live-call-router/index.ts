// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LiveCallRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is used in escalation paths to determine who to page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#alert_urgency_id LiveCallRouter#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * The caller greeting message of the live_call_router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#caller_greeting LiveCallRouter#caller_greeting}
  */
  readonly callerGreeting?: string;
  /**
  * The audio instructions callers will hear when they call this number, prompting them to select from available options to route their call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#calling_tree_prompt LiveCallRouter#calling_tree_prompt}
  */
  readonly callingTreePrompt?: string;
  /**
  * The country code of the live_call_router. Value must be one of `AU`, `CA`, `DE`, `NL`, `NZ`, `GB`, `US`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#country_code LiveCallRouter#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#enabled LiveCallRouter#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This overrides the delay (seconds) in escalation levels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#escalation_level_delay_in_seconds LiveCallRouter#escalation_level_delay_in_seconds}
  */
  readonly escalationLevelDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#escalation_policy_trigger_params LiveCallRouter#escalation_policy_trigger_params}
  */
  readonly escalationPolicyTriggerParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#id LiveCallRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of the live_call_router. Value must be one of `voicemail`, `live`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#kind LiveCallRouter#kind}
  */
  readonly kind?: string;
  /**
  * The name of the live_call_router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#name LiveCallRouter#name}
  */
  readonly name: string;
  /**
  * You can select a phone number using [generate_phone_number](#//api/v1/live_call_routers/generate_phone_number) API and pass that phone number here to register
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#phone_number LiveCallRouter#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * The phone type of the live_call_router. Value must be one of `local`, `toll_free`, `mobile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#phone_type LiveCallRouter#phone_type}
  */
  readonly phoneType?: string;
  /**
  * The delay (seconds) after which the caller in redirected to voicemail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#sent_to_voicemail_delay LiveCallRouter#sent_to_voicemail_delay}
  */
  readonly sentToVoicemailDelay?: number;
  /**
  * This overrides the delay (seconds) in escalation levels. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#should_auto_resolve_alert_on_call_end LiveCallRouter#should_auto_resolve_alert_on_call_end}
  */
  readonly shouldAutoResolveAlertOnCallEnd?: boolean | cdktf.IResolvable;
  /**
  * This prompts the caller to choose voicemail or connect live. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#should_redirect_to_voicemail_on_no_answer LiveCallRouter#should_redirect_to_voicemail_on_no_answer}
  */
  readonly shouldRedirectToVoicemailOnNoAnswer?: boolean | cdktf.IResolvable;
  /**
  * The voicemail greeting of the live_call_router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#voicemail_greeting LiveCallRouter#voicemail_greeting}
  */
  readonly voicemailGreeting?: string;
  /**
  * The waiting music URL of the live_call_router. Value must be one of `https://storage.rootly.com/twilio/voicemail/ClockworkWaltz.mp3`, `https://storage.rootly.com/twilio/voicemail/ith_brahms-116-4.mp3`, `https://storage.rootly.com/twilio/voicemail/Mellotroniac_-_Flight_Of_Young_Hearts_Flute.mp3`, `https://storage.rootly.com/twilio/voicemail/BusyStrings.mp3`, `https://storage.rootly.com/twilio/voicemail/oldDog_-_endless_goodbye_%28instr.%29.mp3`, `https://storage.rootly.com/twilio/voicemail/MARKOVICHAMP-Borghestral.mp3`, `https://storage.rootly.com/twilio/voicemail/ith_chopin-15-2.mp3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#waiting_music_url LiveCallRouter#waiting_music_url}
  */
  readonly waitingMusicUrl?: string;
  /**
  * paging_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#paging_targets LiveCallRouter#paging_targets}
  */
  readonly pagingTargets?: LiveCallRouterPagingTargets[] | cdktf.IResolvable;
}
export interface LiveCallRouterPagingTargets {
  /**
  * This is used in escalation paths to determine who to page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#alert_urgency_id LiveCallRouter#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * The ID of paging target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#id LiveCallRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the paging target. Value must be one of `service`, `team`, `escalation_policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#type LiveCallRouter#type}
  */
  readonly type?: string;
}

export function liveCallRouterPagingTargetsToTerraform(struct?: LiveCallRouterPagingTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_urgency_id: cdktf.stringToTerraform(struct!.alertUrgencyId),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function liveCallRouterPagingTargetsToHclTerraform(struct?: LiveCallRouterPagingTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_urgency_id: {
      value: cdktf.stringToHclTerraform(struct!.alertUrgencyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class LiveCallRouterPagingTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LiveCallRouterPagingTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertUrgencyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertUrgencyId = this._alertUrgencyId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LiveCallRouterPagingTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertUrgencyId = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertUrgencyId = value.alertUrgencyId;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
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

  // type - computed: false, optional: true, required: false
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

export class LiveCallRouterPagingTargetsList extends cdktf.ComplexList {
  public internalValue? : LiveCallRouterPagingTargets[] | cdktf.IResolvable

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
  public get(index: number): LiveCallRouterPagingTargetsOutputReference {
    return new LiveCallRouterPagingTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router rootly_live_call_router}
*/
export class LiveCallRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_live_call_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LiveCallRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LiveCallRouter to import
  * @param importFromId The id of the existing LiveCallRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LiveCallRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_live_call_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/live_call_router rootly_live_call_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LiveCallRouterConfig
  */
  public constructor(scope: Construct, id: string, config: LiveCallRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_live_call_router',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertUrgencyId = config.alertUrgencyId;
    this._callerGreeting = config.callerGreeting;
    this._callingTreePrompt = config.callingTreePrompt;
    this._countryCode = config.countryCode;
    this._enabled = config.enabled;
    this._escalationLevelDelayInSeconds = config.escalationLevelDelayInSeconds;
    this._escalationPolicyTriggerParams = config.escalationPolicyTriggerParams;
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._phoneNumber = config.phoneNumber;
    this._phoneType = config.phoneType;
    this._sentToVoicemailDelay = config.sentToVoicemailDelay;
    this._shouldAutoResolveAlertOnCallEnd = config.shouldAutoResolveAlertOnCallEnd;
    this._shouldRedirectToVoicemailOnNoAnswer = config.shouldRedirectToVoicemailOnNoAnswer;
    this._voicemailGreeting = config.voicemailGreeting;
    this._waitingMusicUrl = config.waitingMusicUrl;
    this._pagingTargets.internalValue = config.pagingTargets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
  }

  // caller_greeting - computed: true, optional: true, required: false
  private _callerGreeting?: string; 
  public get callerGreeting() {
    return this.getStringAttribute('caller_greeting');
  }
  public set callerGreeting(value: string) {
    this._callerGreeting = value;
  }
  public resetCallerGreeting() {
    this._callerGreeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerGreetingInput() {
    return this._callerGreeting;
  }

  // calling_tree_prompt - computed: true, optional: true, required: false
  private _callingTreePrompt?: string; 
  public get callingTreePrompt() {
    return this.getStringAttribute('calling_tree_prompt');
  }
  public set callingTreePrompt(value: string) {
    this._callingTreePrompt = value;
  }
  public resetCallingTreePrompt() {
    this._callingTreePrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingTreePromptInput() {
    return this._callingTreePrompt;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // enabled - computed: false, optional: true, required: false
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

  // escalation_level_delay_in_seconds - computed: true, optional: true, required: false
  private _escalationLevelDelayInSeconds?: number; 
  public get escalationLevelDelayInSeconds() {
    return this.getNumberAttribute('escalation_level_delay_in_seconds');
  }
  public set escalationLevelDelayInSeconds(value: number) {
    this._escalationLevelDelayInSeconds = value;
  }
  public resetEscalationLevelDelayInSeconds() {
    this._escalationLevelDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationLevelDelayInSecondsInput() {
    return this._escalationLevelDelayInSeconds;
  }

  // escalation_policy_trigger_params - computed: true, optional: true, required: false
  private _escalationPolicyTriggerParams?: { [key: string]: string }; 
  public get escalationPolicyTriggerParams() {
    return this.getStringMapAttribute('escalation_policy_trigger_params');
  }
  public set escalationPolicyTriggerParams(value: { [key: string]: string }) {
    this._escalationPolicyTriggerParams = value;
  }
  public resetEscalationPolicyTriggerParams() {
    this._escalationPolicyTriggerParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyTriggerParamsInput() {
    return this._escalationPolicyTriggerParams;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // phone_type - computed: false, optional: true, required: false
  private _phoneType?: string; 
  public get phoneType() {
    return this.getStringAttribute('phone_type');
  }
  public set phoneType(value: string) {
    this._phoneType = value;
  }
  public resetPhoneType() {
    this._phoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneTypeInput() {
    return this._phoneType;
  }

  // sent_to_voicemail_delay - computed: true, optional: true, required: false
  private _sentToVoicemailDelay?: number; 
  public get sentToVoicemailDelay() {
    return this.getNumberAttribute('sent_to_voicemail_delay');
  }
  public set sentToVoicemailDelay(value: number) {
    this._sentToVoicemailDelay = value;
  }
  public resetSentToVoicemailDelay() {
    this._sentToVoicemailDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentToVoicemailDelayInput() {
    return this._sentToVoicemailDelay;
  }

  // should_auto_resolve_alert_on_call_end - computed: true, optional: true, required: false
  private _shouldAutoResolveAlertOnCallEnd?: boolean | cdktf.IResolvable; 
  public get shouldAutoResolveAlertOnCallEnd() {
    return this.getBooleanAttribute('should_auto_resolve_alert_on_call_end');
  }
  public set shouldAutoResolveAlertOnCallEnd(value: boolean | cdktf.IResolvable) {
    this._shouldAutoResolveAlertOnCallEnd = value;
  }
  public resetShouldAutoResolveAlertOnCallEnd() {
    this._shouldAutoResolveAlertOnCallEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAutoResolveAlertOnCallEndInput() {
    return this._shouldAutoResolveAlertOnCallEnd;
  }

  // should_redirect_to_voicemail_on_no_answer - computed: true, optional: true, required: false
  private _shouldRedirectToVoicemailOnNoAnswer?: boolean | cdktf.IResolvable; 
  public get shouldRedirectToVoicemailOnNoAnswer() {
    return this.getBooleanAttribute('should_redirect_to_voicemail_on_no_answer');
  }
  public set shouldRedirectToVoicemailOnNoAnswer(value: boolean | cdktf.IResolvable) {
    this._shouldRedirectToVoicemailOnNoAnswer = value;
  }
  public resetShouldRedirectToVoicemailOnNoAnswer() {
    this._shouldRedirectToVoicemailOnNoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRedirectToVoicemailOnNoAnswerInput() {
    return this._shouldRedirectToVoicemailOnNoAnswer;
  }

  // voicemail_greeting - computed: true, optional: true, required: false
  private _voicemailGreeting?: string; 
  public get voicemailGreeting() {
    return this.getStringAttribute('voicemail_greeting');
  }
  public set voicemailGreeting(value: string) {
    this._voicemailGreeting = value;
  }
  public resetVoicemailGreeting() {
    this._voicemailGreeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicemailGreetingInput() {
    return this._voicemailGreeting;
  }

  // waiting_music_url - computed: false, optional: true, required: false
  private _waitingMusicUrl?: string; 
  public get waitingMusicUrl() {
    return this.getStringAttribute('waiting_music_url');
  }
  public set waitingMusicUrl(value: string) {
    this._waitingMusicUrl = value;
  }
  public resetWaitingMusicUrl() {
    this._waitingMusicUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingMusicUrlInput() {
    return this._waitingMusicUrl;
  }

  // paging_targets - computed: false, optional: true, required: false
  private _pagingTargets = new LiveCallRouterPagingTargetsList(this, "paging_targets", false);
  public get pagingTargets() {
    return this._pagingTargets;
  }
  public putPagingTargets(value: LiveCallRouterPagingTargets[] | cdktf.IResolvable) {
    this._pagingTargets.internalValue = value;
  }
  public resetPagingTargets() {
    this._pagingTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingTargetsInput() {
    return this._pagingTargets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_urgency_id: cdktf.stringToTerraform(this._alertUrgencyId),
      caller_greeting: cdktf.stringToTerraform(this._callerGreeting),
      calling_tree_prompt: cdktf.stringToTerraform(this._callingTreePrompt),
      country_code: cdktf.stringToTerraform(this._countryCode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      escalation_level_delay_in_seconds: cdktf.numberToTerraform(this._escalationLevelDelayInSeconds),
      escalation_policy_trigger_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._escalationPolicyTriggerParams),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      phone_type: cdktf.stringToTerraform(this._phoneType),
      sent_to_voicemail_delay: cdktf.numberToTerraform(this._sentToVoicemailDelay),
      should_auto_resolve_alert_on_call_end: cdktf.booleanToTerraform(this._shouldAutoResolveAlertOnCallEnd),
      should_redirect_to_voicemail_on_no_answer: cdktf.booleanToTerraform(this._shouldRedirectToVoicemailOnNoAnswer),
      voicemail_greeting: cdktf.stringToTerraform(this._voicemailGreeting),
      waiting_music_url: cdktf.stringToTerraform(this._waitingMusicUrl),
      paging_targets: cdktf.listMapper(liveCallRouterPagingTargetsToTerraform, true)(this._pagingTargets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_urgency_id: {
        value: cdktf.stringToHclTerraform(this._alertUrgencyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caller_greeting: {
        value: cdktf.stringToHclTerraform(this._callerGreeting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calling_tree_prompt: {
        value: cdktf.stringToHclTerraform(this._callingTreePrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalation_level_delay_in_seconds: {
        value: cdktf.numberToHclTerraform(this._escalationLevelDelayInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_policy_trigger_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._escalationPolicyTriggerParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_type: {
        value: cdktf.stringToHclTerraform(this._phoneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sent_to_voicemail_delay: {
        value: cdktf.numberToHclTerraform(this._sentToVoicemailDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      should_auto_resolve_alert_on_call_end: {
        value: cdktf.booleanToHclTerraform(this._shouldAutoResolveAlertOnCallEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_redirect_to_voicemail_on_no_answer: {
        value: cdktf.booleanToHclTerraform(this._shouldRedirectToVoicemailOnNoAnswer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      voicemail_greeting: {
        value: cdktf.stringToHclTerraform(this._voicemailGreeting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiting_music_url: {
        value: cdktf.stringToHclTerraform(this._waitingMusicUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paging_targets: {
        value: cdktf.listMapperHcl(liveCallRouterPagingTargetsToHclTerraform, true)(this._pagingTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LiveCallRouterPagingTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
