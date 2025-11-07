// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount of time the agent can stay in ACW. Only set when ACW is MANDATORY_TIMEOUT, MANDATORY_FORCED_TIMEOUT or AGENT_REQUESTED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#acw_timeout_ms RoutingQueue#acw_timeout_ms}
  */
  readonly acwTimeoutMs?: number;
  /**
  * This field controls how the UI prompts the agent for a wrapup (MANDATORY | OPTIONAL | MANDATORY_TIMEOUT | MANDATORY_FORCED_TIMEOUT | AGENT_REQUESTED). Defaults to `MANDATORY_TIMEOUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#acw_wrapup_prompt RoutingQueue#acw_wrapup_prompt}
  */
  readonly acwWrapupPrompt?: string;
  /**
  * Specifies whether the configured whisper should play for all ACD calls, or only for those which are auto-answered. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#auto_answer_only RoutingQueue#auto_answer_only}
  */
  readonly autoAnswerOnly?: boolean | cdktf.IResolvable;
  /**
  * The name to use for caller identification for outbound calls from this queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#calling_party_name RoutingQueue#calling_party_name}
  */
  readonly callingPartyName?: string;
  /**
  * The phone number to use for caller identification for outbound calls from this queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#calling_party_number RoutingQueue#calling_party_number}
  */
  readonly callingPartyNumber?: string;
  /**
  * The default script IDs for each communication type. Communication types: (CALL | CALLBACK | CHAT | COBROWSE | EMAIL | MESSAGE | SOCIAL_EXPRESSION | VIDEO | SCREENSHARE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#default_script_ids RoutingQueue#default_script_ids}
  */
  readonly defaultScriptIds?: { [key: string]: string };
  /**
  * Queue description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#description RoutingQueue#description}
  */
  readonly description?: string;
  /**
  * The division to which this queue will belong. If not set, the home division will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#division_id RoutingQueue#division_id}
  */
  readonly divisionId?: string;
  /**
  * The in-queue flow ID to use for email conversations waiting in queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#email_in_queue_flow_id RoutingQueue#email_in_queue_flow_id}
  */
  readonly emailInQueueFlowId?: string;
  /**
  * Indicates whether audio monitoring is enabled for this queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_audio_monitoring RoutingQueue#enable_audio_monitoring}
  */
  readonly enableAudioMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether manual assignment is enabled for this queue. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_manual_assignment RoutingQueue#enable_manual_assignment}
  */
  readonly enableManualAssignment?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether voice transcription is enabled for this queue. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_transcription RoutingQueue#enable_transcription}
  */
  readonly enableTranscription?: boolean | cdktf.IResolvable;
  /**
  * List of group ids assigned to the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#groups RoutingQueue#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#id RoutingQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, queue members will not be managed through Terraform state or API updates. This provides backwards compatibility for configurations where queue members are managed outside of Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#ignore_members RoutingQueue#ignore_members}
  */
  readonly ignoreMembers?: boolean | cdktf.IResolvable;
  /**
  * The Last Agent Routing Mode for the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#last_agent_routing_mode RoutingQueue#last_agent_routing_mode}
  */
  readonly lastAgentRoutingMode?: string;
  /**
  * The in-queue flow ID to use for message conversations waiting in queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#message_in_queue_flow_id RoutingQueue#message_in_queue_flow_id}
  */
  readonly messageInQueueFlowId?: string;
  /**
  * Queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#name RoutingQueue#name}
  */
  readonly name: string;
  /**
  * The audio to be played when calls on this queue are on hold. If not configured, the default on-hold music will play.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#on_hold_prompt_id RoutingQueue#on_hold_prompt_id}
  */
  readonly onHoldPromptId?: string;
  /**
  * The unique ID of the outbound messaging open messaging recipient for the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#outbound_messaging_open_messaging_recipient_id RoutingQueue#outbound_messaging_open_messaging_recipient_id}
  */
  readonly outboundMessagingOpenMessagingRecipientId?: string;
  /**
  * The unique ID of the outbound messaging SMS address for the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#outbound_messaging_sms_address_id RoutingQueue#outbound_messaging_sms_address_id}
  */
  readonly outboundMessagingSmsAddressId?: string;
  /**
  * The unique ID of the outbound messaging whatsapp recipient for the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#outbound_messaging_whatsapp_recipient_id RoutingQueue#outbound_messaging_whatsapp_recipient_id}
  */
  readonly outboundMessagingWhatsappRecipientId?: string;
  /**
  * The ID of an associated external queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#peer_id RoutingQueue#peer_id}
  */
  readonly peerId?: string;
  /**
  * The in-queue flow ID to use for call conversations waiting in queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#queue_flow_id RoutingQueue#queue_flow_id}
  */
  readonly queueFlowId?: string;
  /**
  * The Scoring Method for the queue. Defaults to TimestampAndPriority. Defaults to `TimestampAndPriority`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#scoring_method RoutingQueue#scoring_method}
  */
  readonly scoringMethod?: string;
  /**
  * The skill evaluation method to use when routing conversations (NONE | BEST | ALL). Defaults to `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#skill_evaluation_method RoutingQueue#skill_evaluation_method}
  */
  readonly skillEvaluationMethod?: string;
  /**
  * List of skill group ids assigned to the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#skill_groups RoutingQueue#skill_groups}
  */
  readonly skillGroups?: string[];
  /**
  * The id of an existing queue to copy the settings (does not include GPR settings) from when creating a new queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#source_queue_id RoutingQueue#source_queue_id}
  */
  readonly sourceQueueId?: string;
  /**
  * Indicates whether recording in-queue calls is suppressed for this queue. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#suppress_in_queue_call_recording RoutingQueue#suppress_in_queue_call_recording}
  */
  readonly suppressInQueueCallRecording?: boolean | cdktf.IResolvable;
  /**
  * List of ids assigned to the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#teams RoutingQueue#teams}
  */
  readonly teams?: string[];
  /**
  * The prompt ID used for whisper on the queue, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#whisper_prompt_id RoutingQueue#whisper_prompt_id}
  */
  readonly whisperPromptId?: string;
  /**
  * IDs of wrapup codes assigned to this queue. If not set, this resource will not manage wrapup codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#wrapup_codes RoutingQueue#wrapup_codes}
  */
  readonly wrapupCodes?: string[];
  /**
  * agent_owned_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#agent_owned_routing RoutingQueue#agent_owned_routing}
  */
  readonly agentOwnedRouting?: RoutingQueueAgentOwnedRouting;
  /**
  * bullseye_rings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#bullseye_rings RoutingQueue#bullseye_rings}
  */
  readonly bullseyeRings?: RoutingQueueBullseyeRings[] | cdktf.IResolvable;
  /**
  * canned_response_libraries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#canned_response_libraries RoutingQueue#canned_response_libraries}
  */
  readonly cannedResponseLibraries?: RoutingQueueCannedResponseLibraries;
  /**
  * conditional_group_activation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#conditional_group_activation RoutingQueue#conditional_group_activation}
  */
  readonly conditionalGroupActivation?: RoutingQueueConditionalGroupActivation;
  /**
  * conditional_group_routing_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#conditional_group_routing_rules RoutingQueue#conditional_group_routing_rules}
  */
  readonly conditionalGroupRoutingRules?: RoutingQueueConditionalGroupRoutingRules[] | cdktf.IResolvable;
  /**
  * direct_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#direct_routing RoutingQueue#direct_routing}
  */
  readonly directRouting?: RoutingQueueDirectRouting;
  /**
  * media_settings_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_settings_call RoutingQueue#media_settings_call}
  */
  readonly mediaSettingsCall?: RoutingQueueMediaSettingsCall;
  /**
  * media_settings_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_settings_callback RoutingQueue#media_settings_callback}
  */
  readonly mediaSettingsCallback?: RoutingQueueMediaSettingsCallback;
  /**
  * media_settings_chat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_settings_chat RoutingQueue#media_settings_chat}
  */
  readonly mediaSettingsChat?: RoutingQueueMediaSettingsChat;
  /**
  * media_settings_email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_settings_email RoutingQueue#media_settings_email}
  */
  readonly mediaSettingsEmail?: RoutingQueueMediaSettingsEmail;
  /**
  * media_settings_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_settings_message RoutingQueue#media_settings_message}
  */
  readonly mediaSettingsMessage?: RoutingQueueMediaSettingsMessage;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#members RoutingQueue#members}
  */
  readonly members?: RoutingQueueMembers[] | cdktf.IResolvable;
  /**
  * outbound_email_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#outbound_email_address RoutingQueue#outbound_email_address}
  */
  readonly outboundEmailAddress?: RoutingQueueOutboundEmailAddress;
  /**
  * routing_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#routing_rules RoutingQueue#routing_rules}
  */
  readonly routingRules?: RoutingQueueRoutingRules[] | cdktf.IResolvable;
}
export interface RoutingQueueAgentOwnedRouting {
  /**
  * Enable Agent Owned Callbacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_agent_owned_callbacks RoutingQueue#enable_agent_owned_callbacks}
  */
  readonly enableAgentOwnedCallbacks?: boolean | cdktf.IResolvable;
  /**
  * Max Owned Call Back Delay Hours >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#max_owned_callback_delay_hours RoutingQueue#max_owned_callback_delay_hours}
  */
  readonly maxOwnedCallbackDelayHours?: number;
  /**
  * Auto End Delay Seconds Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#max_owned_callback_hours RoutingQueue#max_owned_callback_hours}
  */
  readonly maxOwnedCallbackHours?: number;
}

export function routingQueueAgentOwnedRoutingToTerraform(struct?: RoutingQueueAgentOwnedRoutingOutputReference | RoutingQueueAgentOwnedRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_agent_owned_callbacks: cdktf.booleanToTerraform(struct!.enableAgentOwnedCallbacks),
    max_owned_callback_delay_hours: cdktf.numberToTerraform(struct!.maxOwnedCallbackDelayHours),
    max_owned_callback_hours: cdktf.numberToTerraform(struct!.maxOwnedCallbackHours),
  }
}


export function routingQueueAgentOwnedRoutingToHclTerraform(struct?: RoutingQueueAgentOwnedRoutingOutputReference | RoutingQueueAgentOwnedRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_agent_owned_callbacks: {
      value: cdktf.booleanToHclTerraform(struct!.enableAgentOwnedCallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_owned_callback_delay_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxOwnedCallbackDelayHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_owned_callback_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxOwnedCallbackHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueAgentOwnedRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueAgentOwnedRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAgentOwnedCallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAgentOwnedCallbacks = this._enableAgentOwnedCallbacks;
    }
    if (this._maxOwnedCallbackDelayHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOwnedCallbackDelayHours = this._maxOwnedCallbackDelayHours;
    }
    if (this._maxOwnedCallbackHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOwnedCallbackHours = this._maxOwnedCallbackHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueAgentOwnedRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAgentOwnedCallbacks = undefined;
      this._maxOwnedCallbackDelayHours = undefined;
      this._maxOwnedCallbackHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAgentOwnedCallbacks = value.enableAgentOwnedCallbacks;
      this._maxOwnedCallbackDelayHours = value.maxOwnedCallbackDelayHours;
      this._maxOwnedCallbackHours = value.maxOwnedCallbackHours;
    }
  }

  // enable_agent_owned_callbacks - computed: false, optional: true, required: false
  private _enableAgentOwnedCallbacks?: boolean | cdktf.IResolvable; 
  public get enableAgentOwnedCallbacks() {
    return this.getBooleanAttribute('enable_agent_owned_callbacks');
  }
  public set enableAgentOwnedCallbacks(value: boolean | cdktf.IResolvable) {
    this._enableAgentOwnedCallbacks = value;
  }
  public resetEnableAgentOwnedCallbacks() {
    this._enableAgentOwnedCallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAgentOwnedCallbacksInput() {
    return this._enableAgentOwnedCallbacks;
  }

  // max_owned_callback_delay_hours - computed: false, optional: true, required: false
  private _maxOwnedCallbackDelayHours?: number; 
  public get maxOwnedCallbackDelayHours() {
    return this.getNumberAttribute('max_owned_callback_delay_hours');
  }
  public set maxOwnedCallbackDelayHours(value: number) {
    this._maxOwnedCallbackDelayHours = value;
  }
  public resetMaxOwnedCallbackDelayHours() {
    this._maxOwnedCallbackDelayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOwnedCallbackDelayHoursInput() {
    return this._maxOwnedCallbackDelayHours;
  }

  // max_owned_callback_hours - computed: false, optional: true, required: false
  private _maxOwnedCallbackHours?: number; 
  public get maxOwnedCallbackHours() {
    return this.getNumberAttribute('max_owned_callback_hours');
  }
  public set maxOwnedCallbackHours(value: number) {
    this._maxOwnedCallbackHours = value;
  }
  public resetMaxOwnedCallbackHours() {
    this._maxOwnedCallbackHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOwnedCallbackHoursInput() {
    return this._maxOwnedCallbackHours;
  }
}
export interface RoutingQueueBullseyeRingsMemberGroups {
  /**
  * ID (GUID) for Group, SkillGroup, Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_id RoutingQueue#member_group_id}
  */
  readonly memberGroupId: string;
  /**
  * The type of the member group. Accepted values: TEAM, GROUP, SKILLGROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_type RoutingQueue#member_group_type}
  */
  readonly memberGroupType: string;
}

export function routingQueueBullseyeRingsMemberGroupsToTerraform(struct?: RoutingQueueBullseyeRingsMemberGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_group_id: cdktf.stringToTerraform(struct!.memberGroupId),
    member_group_type: cdktf.stringToTerraform(struct!.memberGroupType),
  }
}


export function routingQueueBullseyeRingsMemberGroupsToHclTerraform(struct?: RoutingQueueBullseyeRingsMemberGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_group_id: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_group_type: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueBullseyeRingsMemberGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueBullseyeRingsMemberGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupId = this._memberGroupId;
    }
    if (this._memberGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupType = this._memberGroupType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueBullseyeRingsMemberGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberGroupId = undefined;
      this._memberGroupType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberGroupId = value.memberGroupId;
      this._memberGroupType = value.memberGroupType;
    }
  }

  // member_group_id - computed: false, optional: false, required: true
  private _memberGroupId?: string; 
  public get memberGroupId() {
    return this.getStringAttribute('member_group_id');
  }
  public set memberGroupId(value: string) {
    this._memberGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdInput() {
    return this._memberGroupId;
  }

  // member_group_type - computed: false, optional: false, required: true
  private _memberGroupType?: string; 
  public get memberGroupType() {
    return this.getStringAttribute('member_group_type');
  }
  public set memberGroupType(value: string) {
    this._memberGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupTypeInput() {
    return this._memberGroupType;
  }
}

export class RoutingQueueBullseyeRingsMemberGroupsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueBullseyeRingsMemberGroups[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueBullseyeRingsMemberGroupsOutputReference {
    return new RoutingQueueBullseyeRingsMemberGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueBullseyeRings {
  /**
  * Seconds to wait in this ring before moving to the next.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#expansion_timeout_seconds RoutingQueue#expansion_timeout_seconds}
  */
  readonly expansionTimeoutSeconds: number;
  /**
  * Skill IDs to remove on ring exit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#skills_to_remove RoutingQueue#skills_to_remove}
  */
  readonly skillsToRemove?: string[];
  /**
  * member_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_groups RoutingQueue#member_groups}
  */
  readonly memberGroups?: RoutingQueueBullseyeRingsMemberGroups[] | cdktf.IResolvable;
}

export function routingQueueBullseyeRingsToTerraform(struct?: RoutingQueueBullseyeRings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expansion_timeout_seconds: cdktf.numberToTerraform(struct!.expansionTimeoutSeconds),
    skills_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skillsToRemove),
    member_groups: cdktf.listMapper(routingQueueBullseyeRingsMemberGroupsToTerraform, true)(struct!.memberGroups),
  }
}


export function routingQueueBullseyeRingsToHclTerraform(struct?: RoutingQueueBullseyeRings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expansion_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expansionTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skills_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skillsToRemove),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    member_groups: {
      value: cdktf.listMapperHcl(routingQueueBullseyeRingsMemberGroupsToHclTerraform, true)(struct!.memberGroups),
      isBlock: true,
      type: "set",
      storageClassType: "RoutingQueueBullseyeRingsMemberGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueBullseyeRingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueBullseyeRings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expansionTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expansionTimeoutSeconds = this._expansionTimeoutSeconds;
    }
    if (this._skillsToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillsToRemove = this._skillsToRemove;
    }
    if (this._memberGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroups = this._memberGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueBullseyeRings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expansionTimeoutSeconds = undefined;
      this._skillsToRemove = undefined;
      this._memberGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expansionTimeoutSeconds = value.expansionTimeoutSeconds;
      this._skillsToRemove = value.skillsToRemove;
      this._memberGroups.internalValue = value.memberGroups;
    }
  }

  // expansion_timeout_seconds - computed: false, optional: false, required: true
  private _expansionTimeoutSeconds?: number; 
  public get expansionTimeoutSeconds() {
    return this.getNumberAttribute('expansion_timeout_seconds');
  }
  public set expansionTimeoutSeconds(value: number) {
    this._expansionTimeoutSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expansionTimeoutSecondsInput() {
    return this._expansionTimeoutSeconds;
  }

  // skills_to_remove - computed: false, optional: true, required: false
  private _skillsToRemove?: string[]; 
  public get skillsToRemove() {
    return cdktf.Fn.tolist(this.getListAttribute('skills_to_remove'));
  }
  public set skillsToRemove(value: string[]) {
    this._skillsToRemove = value;
  }
  public resetSkillsToRemove() {
    this._skillsToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillsToRemoveInput() {
    return this._skillsToRemove;
  }

  // member_groups - computed: false, optional: true, required: false
  private _memberGroups = new RoutingQueueBullseyeRingsMemberGroupsList(this, "member_groups", true);
  public get memberGroups() {
    return this._memberGroups;
  }
  public putMemberGroups(value: RoutingQueueBullseyeRingsMemberGroups[] | cdktf.IResolvable) {
    this._memberGroups.internalValue = value;
  }
  public resetMemberGroups() {
    this._memberGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupsInput() {
    return this._memberGroups.internalValue;
  }
}

export class RoutingQueueBullseyeRingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueBullseyeRings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueBullseyeRingsOutputReference {
    return new RoutingQueueBullseyeRingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueCannedResponseLibraries {
  /**
  * Set of canned response library IDs associated with the queue. Populate this field only when the mode is set to SelectedOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#library_ids RoutingQueue#library_ids}
  */
  readonly libraryIds?: string[];
  /**
  * The association mode of canned response libraries to queue.Valid values: All, SelectedOnly, None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#mode RoutingQueue#mode}
  */
  readonly mode?: string;
}

export function routingQueueCannedResponseLibrariesToTerraform(struct?: RoutingQueueCannedResponseLibrariesOutputReference | RoutingQueueCannedResponseLibraries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    library_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libraryIds),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function routingQueueCannedResponseLibrariesToHclTerraform(struct?: RoutingQueueCannedResponseLibrariesOutputReference | RoutingQueueCannedResponseLibraries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    library_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libraryIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueCannedResponseLibrariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueCannedResponseLibraries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libraryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryIds = this._libraryIds;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueCannedResponseLibraries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libraryIds = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libraryIds = value.libraryIds;
      this._mode = value.mode;
    }
  }

  // library_ids - computed: false, optional: true, required: false
  private _libraryIds?: string[]; 
  public get libraryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('library_ids'));
  }
  public set libraryIds(value: string[]) {
    this._libraryIds = value;
  }
  public resetLibraryIds() {
    this._libraryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryIdsInput() {
    return this._libraryIds;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric {
  /**
  * The queue metric being evaluated.  Valid values: EstimatedWaitTime, ServiceLevel, IdleAgentCount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#metric RoutingQueue#metric}
  */
  readonly metric: string;
  /**
  * The queue being evaluated for this rule.  If null, the current queue will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#queue_id RoutingQueue#queue_id}
  */
  readonly queueId?: string;
}

export function routingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricToTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricOutputReference | RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
  }
}


export function routingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricToHclTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricOutputReference | RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._queueId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._queueId = value.queueId;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // queue_id - computed: true, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }
}
export interface RoutingQueueConditionalGroupActivationPilotRuleConditions {
  /**
  * The operator used to compare the actual value against the threshold value. Valid values: GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo, EqualTo, NotEqualTo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#operator RoutingQueue#operator}
  */
  readonly operator: string;
  /**
  * The threshold value, beyond which a rule evaluates as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#value RoutingQueue#value}
  */
  readonly value: number;
  /**
  * simple_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#simple_metric RoutingQueue#simple_metric}
  */
  readonly simpleMetric: RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric;
}

export function routingQueueConditionalGroupActivationPilotRuleConditionsToTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
    simple_metric: routingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricToTerraform(struct!.simpleMetric),
  }
}


export function routingQueueConditionalGroupActivationPilotRuleConditionsToHclTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    simple_metric: {
      value: routingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricToHclTerraform(struct!.simpleMetric),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationPilotRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupActivationPilotRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._simpleMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleMetric = this._simpleMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationPilotRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._simpleMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._simpleMetric.internalValue = value.simpleMetric;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // simple_metric - computed: false, optional: false, required: true
  private _simpleMetric = new RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetricOutputReference(this, "simple_metric");
  public get simpleMetric() {
    return this._simpleMetric;
  }
  public putSimpleMetric(value: RoutingQueueConditionalGroupActivationPilotRuleConditionsSimpleMetric) {
    this._simpleMetric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleMetricInput() {
    return this._simpleMetric.internalValue;
  }
}

export class RoutingQueueConditionalGroupActivationPilotRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupActivationPilotRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupActivationPilotRuleConditionsOutputReference {
    return new RoutingQueueConditionalGroupActivationPilotRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupActivationPilotRule {
  /**
  * A string expression that defines the relationships of conditions in this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#condition_expression RoutingQueue#condition_expression}
  */
  readonly conditionExpression: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#conditions RoutingQueue#conditions}
  */
  readonly conditions: RoutingQueueConditionalGroupActivationPilotRuleConditions[] | cdktf.IResolvable;
}

export function routingQueueConditionalGroupActivationPilotRuleToTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleOutputReference | RoutingQueueConditionalGroupActivationPilotRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
    conditions: cdktf.listMapper(routingQueueConditionalGroupActivationPilotRuleConditionsToTerraform, true)(struct!.conditions),
  }
}


export function routingQueueConditionalGroupActivationPilotRuleToHclTerraform(struct?: RoutingQueueConditionalGroupActivationPilotRuleOutputReference | RoutingQueueConditionalGroupActivationPilotRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_expression: {
      value: cdktf.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupActivationPilotRuleConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationPilotRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationPilotRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueConditionalGroupActivationPilotRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationPilotRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionExpression = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionExpression = value.conditionExpression;
      this._conditions.internalValue = value.conditions;
    }
  }

  // condition_expression - computed: false, optional: false, required: true
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new RoutingQueueConditionalGroupActivationPilotRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RoutingQueueConditionalGroupActivationPilotRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric {
  /**
  * The queue metric being evaluated.  Valid values: EstimatedWaitTime, ServiceLevel, IdleAgentCount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#metric RoutingQueue#metric}
  */
  readonly metric: string;
  /**
  * The queue being evaluated for this rule.  If null, the current queue will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#queue_id RoutingQueue#queue_id}
  */
  readonly queueId?: string;
}

export function routingQueueConditionalGroupActivationRulesConditionsSimpleMetricToTerraform(struct?: RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetricOutputReference | RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
  }
}


export function routingQueueConditionalGroupActivationRulesConditionsSimpleMetricToHclTerraform(struct?: RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetricOutputReference | RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._queueId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._queueId = value.queueId;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // queue_id - computed: true, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }
}
export interface RoutingQueueConditionalGroupActivationRulesConditions {
  /**
  * The operator used to compare the actual value against the threshold value. Valid values: GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo, EqualTo, NotEqualTo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#operator RoutingQueue#operator}
  */
  readonly operator: string;
  /**
  * The threshold value, beyond which a rule evaluates as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#value RoutingQueue#value}
  */
  readonly value: number;
  /**
  * simple_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#simple_metric RoutingQueue#simple_metric}
  */
  readonly simpleMetric: RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric;
}

export function routingQueueConditionalGroupActivationRulesConditionsToTerraform(struct?: RoutingQueueConditionalGroupActivationRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
    simple_metric: routingQueueConditionalGroupActivationRulesConditionsSimpleMetricToTerraform(struct!.simpleMetric),
  }
}


export function routingQueueConditionalGroupActivationRulesConditionsToHclTerraform(struct?: RoutingQueueConditionalGroupActivationRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    simple_metric: {
      value: routingQueueConditionalGroupActivationRulesConditionsSimpleMetricToHclTerraform(struct!.simpleMetric),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupActivationRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._simpleMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleMetric = this._simpleMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._simpleMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._simpleMetric.internalValue = value.simpleMetric;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // simple_metric - computed: false, optional: false, required: true
  private _simpleMetric = new RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetricOutputReference(this, "simple_metric");
  public get simpleMetric() {
    return this._simpleMetric;
  }
  public putSimpleMetric(value: RoutingQueueConditionalGroupActivationRulesConditionsSimpleMetric) {
    this._simpleMetric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleMetricInput() {
    return this._simpleMetric.internalValue;
  }
}

export class RoutingQueueConditionalGroupActivationRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupActivationRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupActivationRulesConditionsOutputReference {
    return new RoutingQueueConditionalGroupActivationRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupActivationRulesGroups {
  /**
  * ID (GUID) for Group, SkillGroup, Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_id RoutingQueue#member_group_id}
  */
  readonly memberGroupId: string;
  /**
  * The type of the member group. Accepted values: TEAM, GROUP, SKILLGROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_type RoutingQueue#member_group_type}
  */
  readonly memberGroupType: string;
}

export function routingQueueConditionalGroupActivationRulesGroupsToTerraform(struct?: RoutingQueueConditionalGroupActivationRulesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_group_id: cdktf.stringToTerraform(struct!.memberGroupId),
    member_group_type: cdktf.stringToTerraform(struct!.memberGroupType),
  }
}


export function routingQueueConditionalGroupActivationRulesGroupsToHclTerraform(struct?: RoutingQueueConditionalGroupActivationRulesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_group_id: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_group_type: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupActivationRulesGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupId = this._memberGroupId;
    }
    if (this._memberGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupType = this._memberGroupType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationRulesGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberGroupId = undefined;
      this._memberGroupType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberGroupId = value.memberGroupId;
      this._memberGroupType = value.memberGroupType;
    }
  }

  // member_group_id - computed: false, optional: false, required: true
  private _memberGroupId?: string; 
  public get memberGroupId() {
    return this.getStringAttribute('member_group_id');
  }
  public set memberGroupId(value: string) {
    this._memberGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdInput() {
    return this._memberGroupId;
  }

  // member_group_type - computed: false, optional: false, required: true
  private _memberGroupType?: string; 
  public get memberGroupType() {
    return this.getStringAttribute('member_group_type');
  }
  public set memberGroupType(value: string) {
    this._memberGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupTypeInput() {
    return this._memberGroupType;
  }
}

export class RoutingQueueConditionalGroupActivationRulesGroupsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupActivationRulesGroups[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupActivationRulesGroupsOutputReference {
    return new RoutingQueueConditionalGroupActivationRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupActivationRules {
  /**
  * A string expression that defines the relationships of conditions in this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#condition_expression RoutingQueue#condition_expression}
  */
  readonly conditionExpression: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#conditions RoutingQueue#conditions}
  */
  readonly conditions: RoutingQueueConditionalGroupActivationRulesConditions[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#groups RoutingQueue#groups}
  */
  readonly groups: RoutingQueueConditionalGroupActivationRulesGroups[] | cdktf.IResolvable;
}

export function routingQueueConditionalGroupActivationRulesToTerraform(struct?: RoutingQueueConditionalGroupActivationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
    conditions: cdktf.listMapper(routingQueueConditionalGroupActivationRulesConditionsToTerraform, true)(struct!.conditions),
    groups: cdktf.listMapper(routingQueueConditionalGroupActivationRulesGroupsToTerraform, true)(struct!.groups),
  }
}


export function routingQueueConditionalGroupActivationRulesToHclTerraform(struct?: RoutingQueueConditionalGroupActivationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_expression: {
      value: cdktf.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupActivationRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationRulesConditionsList",
    },
    groups: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupActivationRulesGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationRulesGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupActivationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionExpression = undefined;
      this._conditions.internalValue = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionExpression = value.conditionExpression;
      this._conditions.internalValue = value.conditions;
      this._groups.internalValue = value.groups;
    }
  }

  // condition_expression - computed: false, optional: false, required: true
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new RoutingQueueConditionalGroupActivationRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RoutingQueueConditionalGroupActivationRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new RoutingQueueConditionalGroupActivationRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: RoutingQueueConditionalGroupActivationRulesGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

export class RoutingQueueConditionalGroupActivationRulesList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupActivationRules[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupActivationRulesOutputReference {
    return new RoutingQueueConditionalGroupActivationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupActivation {
  /**
  * pilot_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#pilot_rule RoutingQueue#pilot_rule}
  */
  readonly pilotRule?: RoutingQueueConditionalGroupActivationPilotRule;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#rules RoutingQueue#rules}
  */
  readonly rules: RoutingQueueConditionalGroupActivationRules[] | cdktf.IResolvable;
}

export function routingQueueConditionalGroupActivationToTerraform(struct?: RoutingQueueConditionalGroupActivationOutputReference | RoutingQueueConditionalGroupActivation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pilot_rule: routingQueueConditionalGroupActivationPilotRuleToTerraform(struct!.pilotRule),
    rules: cdktf.listMapper(routingQueueConditionalGroupActivationRulesToTerraform, true)(struct!.rules),
  }
}


export function routingQueueConditionalGroupActivationToHclTerraform(struct?: RoutingQueueConditionalGroupActivationOutputReference | RoutingQueueConditionalGroupActivation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pilot_rule: {
      value: routingQueueConditionalGroupActivationPilotRuleToHclTerraform(struct!.pilotRule),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationPilotRuleList",
    },
    rules: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupActivationRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueConditionalGroupActivationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupActivationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueConditionalGroupActivation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pilotRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pilotRule = this._pilotRule?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupActivation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pilotRule.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pilotRule.internalValue = value.pilotRule;
      this._rules.internalValue = value.rules;
    }
  }

  // pilot_rule - computed: false, optional: true, required: false
  private _pilotRule = new RoutingQueueConditionalGroupActivationPilotRuleOutputReference(this, "pilot_rule");
  public get pilotRule() {
    return this._pilotRule;
  }
  public putPilotRule(value: RoutingQueueConditionalGroupActivationPilotRule) {
    this._pilotRule.internalValue = value;
  }
  public resetPilotRule() {
    this._pilotRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pilotRuleInput() {
    return this._pilotRule.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RoutingQueueConditionalGroupActivationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RoutingQueueConditionalGroupActivationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface RoutingQueueConditionalGroupRoutingRulesGroups {
  /**
  * ID (GUID) for Group, SkillGroup, Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_id RoutingQueue#member_group_id}
  */
  readonly memberGroupId: string;
  /**
  * The type of the member group. Accepted values: TEAM, GROUP, SKILLGROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#member_group_type RoutingQueue#member_group_type}
  */
  readonly memberGroupType: string;
}

export function routingQueueConditionalGroupRoutingRulesGroupsToTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_group_id: cdktf.stringToTerraform(struct!.memberGroupId),
    member_group_type: cdktf.stringToTerraform(struct!.memberGroupType),
  }
}


export function routingQueueConditionalGroupRoutingRulesGroupsToHclTerraform(struct?: RoutingQueueConditionalGroupRoutingRulesGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_group_id: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_group_type: {
      value: cdktf.stringToHclTerraform(struct!.memberGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupRoutingRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupRoutingRulesGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupId = this._memberGroupId;
    }
    if (this._memberGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberGroupType = this._memberGroupType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupRoutingRulesGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberGroupId = undefined;
      this._memberGroupType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberGroupId = value.memberGroupId;
      this._memberGroupType = value.memberGroupType;
    }
  }

  // member_group_id - computed: false, optional: false, required: true
  private _memberGroupId?: string; 
  public get memberGroupId() {
    return this.getStringAttribute('member_group_id');
  }
  public set memberGroupId(value: string) {
    this._memberGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdInput() {
    return this._memberGroupId;
  }

  // member_group_type - computed: false, optional: false, required: true
  private _memberGroupType?: string; 
  public get memberGroupType() {
    return this.getStringAttribute('member_group_type');
  }
  public set memberGroupType(value: string) {
    this._memberGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupTypeInput() {
    return this._memberGroupType;
  }
}

export class RoutingQueueConditionalGroupRoutingRulesGroupsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupRoutingRulesGroups[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupRoutingRulesGroupsOutputReference {
    return new RoutingQueueConditionalGroupRoutingRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueConditionalGroupRoutingRules {
  /**
  * The limit value, beyond which a rule evaluates as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#condition_value RoutingQueue#condition_value}
  */
  readonly conditionValue?: number;
  /**
  * The queue metric being evaluated. Valid values: EstimatedWaitTime, ServiceLevel Defaults to `EstimatedWaitTime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#metric RoutingQueue#metric}
  */
  readonly metric?: string;
  /**
  * The operator that compares the actual value against the condition value. Valid values: GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#operator RoutingQueue#operator}
  */
  readonly operator?: string;
  /**
  * The ID of the queue being evaluated for this rule. For rule 1, this is always be the current queue, so no queue id should be specified for the first rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#queue_id RoutingQueue#queue_id}
  */
  readonly queueId?: string;
  /**
  * The number of seconds to wait in this rule, if it evaluates as true, before evaluating the next rule. For the final rule, this is ignored, so need not be specified. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#wait_seconds RoutingQueue#wait_seconds}
  */
  readonly waitSeconds?: number;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#groups RoutingQueue#groups}
  */
  readonly groups: RoutingQueueConditionalGroupRoutingRulesGroups[] | cdktf.IResolvable;
}

export function routingQueueConditionalGroupRoutingRulesToTerraform(struct?: RoutingQueueConditionalGroupRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_value: cdktf.numberToTerraform(struct!.conditionValue),
    metric: cdktf.stringToTerraform(struct!.metric),
    operator: cdktf.stringToTerraform(struct!.operator),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    wait_seconds: cdktf.numberToTerraform(struct!.waitSeconds),
    groups: cdktf.listMapper(routingQueueConditionalGroupRoutingRulesGroupsToTerraform, true)(struct!.groups),
  }
}


export function routingQueueConditionalGroupRoutingRulesToHclTerraform(struct?: RoutingQueueConditionalGroupRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_value: {
      value: cdktf.numberToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groups: {
      value: cdktf.listMapperHcl(routingQueueConditionalGroupRoutingRulesGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "RoutingQueueConditionalGroupRoutingRulesGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueConditionalGroupRoutingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueConditionalGroupRoutingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._waitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitSeconds = this._waitSeconds;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueConditionalGroupRoutingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionValue = undefined;
      this._metric = undefined;
      this._operator = undefined;
      this._queueId = undefined;
      this._waitSeconds = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionValue = value.conditionValue;
      this._metric = value.metric;
      this._operator = value.operator;
      this._queueId = value.queueId;
      this._waitSeconds = value.waitSeconds;
      this._groups.internalValue = value.groups;
    }
  }

  // condition_value - computed: false, optional: true, required: false
  private _conditionValue?: number; 
  public get conditionValue() {
    return this.getNumberAttribute('condition_value');
  }
  public set conditionValue(value: number) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // queue_id - computed: false, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // wait_seconds - computed: false, optional: true, required: false
  private _waitSeconds?: number; 
  public get waitSeconds() {
    return this.getNumberAttribute('wait_seconds');
  }
  public set waitSeconds(value: number) {
    this._waitSeconds = value;
  }
  public resetWaitSeconds() {
    this._waitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSecondsInput() {
    return this._waitSeconds;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new RoutingQueueConditionalGroupRoutingRulesGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: RoutingQueueConditionalGroupRoutingRulesGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

export class RoutingQueueConditionalGroupRoutingRulesList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueConditionalGroupRoutingRules[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueConditionalGroupRoutingRulesOutputReference {
    return new RoutingQueueConditionalGroupRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueDirectRouting {
  /**
  * The queue default time a Direct Routing interaction will wait for an agent before it goes to configured backup. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#agent_wait_seconds RoutingQueue#agent_wait_seconds}
  */
  readonly agentWaitSeconds?: number;
  /**
  * Direct Routing default backup queue id (if none supplied this queue will be used as backup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#backup_queue_id RoutingQueue#backup_queue_id}
  */
  readonly backupQueueId?: string;
  /**
  * Boolean indicating if user Direct Routing addresses should be used outbound on behalf of queue in place of Queue address for calls. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#call_use_agent_address_outbound RoutingQueue#call_use_agent_address_outbound}
  */
  readonly callUseAgentAddressOutbound?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating if user Direct Routing addresses should be used outbound on behalf of queue in place of Queue address for emails. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#email_use_agent_address_outbound RoutingQueue#email_use_agent_address_outbound}
  */
  readonly emailUseAgentAddressOutbound?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating if user Direct Routing addresses should be used outbound on behalf of queue in place of Queue address for messages. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#message_use_agent_address_outbound RoutingQueue#message_use_agent_address_outbound}
  */
  readonly messageUseAgentAddressOutbound?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating if Direct Routing interactions should wait for the targeted agent by default. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#wait_for_agent RoutingQueue#wait_for_agent}
  */
  readonly waitForAgent?: boolean | cdktf.IResolvable;
}

export function routingQueueDirectRoutingToTerraform(struct?: RoutingQueueDirectRoutingOutputReference | RoutingQueueDirectRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_wait_seconds: cdktf.numberToTerraform(struct!.agentWaitSeconds),
    backup_queue_id: cdktf.stringToTerraform(struct!.backupQueueId),
    call_use_agent_address_outbound: cdktf.booleanToTerraform(struct!.callUseAgentAddressOutbound),
    email_use_agent_address_outbound: cdktf.booleanToTerraform(struct!.emailUseAgentAddressOutbound),
    message_use_agent_address_outbound: cdktf.booleanToTerraform(struct!.messageUseAgentAddressOutbound),
    wait_for_agent: cdktf.booleanToTerraform(struct!.waitForAgent),
  }
}


export function routingQueueDirectRoutingToHclTerraform(struct?: RoutingQueueDirectRoutingOutputReference | RoutingQueueDirectRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.agentWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.backupQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_use_agent_address_outbound: {
      value: cdktf.booleanToHclTerraform(struct!.callUseAgentAddressOutbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_use_agent_address_outbound: {
      value: cdktf.booleanToHclTerraform(struct!.emailUseAgentAddressOutbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_use_agent_address_outbound: {
      value: cdktf.booleanToHclTerraform(struct!.messageUseAgentAddressOutbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_agent: {
      value: cdktf.booleanToHclTerraform(struct!.waitForAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueDirectRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueDirectRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentWaitSeconds = this._agentWaitSeconds;
    }
    if (this._backupQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupQueueId = this._backupQueueId;
    }
    if (this._callUseAgentAddressOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.callUseAgentAddressOutbound = this._callUseAgentAddressOutbound;
    }
    if (this._emailUseAgentAddressOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailUseAgentAddressOutbound = this._emailUseAgentAddressOutbound;
    }
    if (this._messageUseAgentAddressOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageUseAgentAddressOutbound = this._messageUseAgentAddressOutbound;
    }
    if (this._waitForAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForAgent = this._waitForAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueDirectRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentWaitSeconds = undefined;
      this._backupQueueId = undefined;
      this._callUseAgentAddressOutbound = undefined;
      this._emailUseAgentAddressOutbound = undefined;
      this._messageUseAgentAddressOutbound = undefined;
      this._waitForAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentWaitSeconds = value.agentWaitSeconds;
      this._backupQueueId = value.backupQueueId;
      this._callUseAgentAddressOutbound = value.callUseAgentAddressOutbound;
      this._emailUseAgentAddressOutbound = value.emailUseAgentAddressOutbound;
      this._messageUseAgentAddressOutbound = value.messageUseAgentAddressOutbound;
      this._waitForAgent = value.waitForAgent;
    }
  }

  // agent_wait_seconds - computed: false, optional: true, required: false
  private _agentWaitSeconds?: number; 
  public get agentWaitSeconds() {
    return this.getNumberAttribute('agent_wait_seconds');
  }
  public set agentWaitSeconds(value: number) {
    this._agentWaitSeconds = value;
  }
  public resetAgentWaitSeconds() {
    this._agentWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentWaitSecondsInput() {
    return this._agentWaitSeconds;
  }

  // backup_queue_id - computed: true, optional: true, required: false
  private _backupQueueId?: string; 
  public get backupQueueId() {
    return this.getStringAttribute('backup_queue_id');
  }
  public set backupQueueId(value: string) {
    this._backupQueueId = value;
  }
  public resetBackupQueueId() {
    this._backupQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupQueueIdInput() {
    return this._backupQueueId;
  }

  // call_use_agent_address_outbound - computed: false, optional: true, required: false
  private _callUseAgentAddressOutbound?: boolean | cdktf.IResolvable; 
  public get callUseAgentAddressOutbound() {
    return this.getBooleanAttribute('call_use_agent_address_outbound');
  }
  public set callUseAgentAddressOutbound(value: boolean | cdktf.IResolvable) {
    this._callUseAgentAddressOutbound = value;
  }
  public resetCallUseAgentAddressOutbound() {
    this._callUseAgentAddressOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callUseAgentAddressOutboundInput() {
    return this._callUseAgentAddressOutbound;
  }

  // email_use_agent_address_outbound - computed: false, optional: true, required: false
  private _emailUseAgentAddressOutbound?: boolean | cdktf.IResolvable; 
  public get emailUseAgentAddressOutbound() {
    return this.getBooleanAttribute('email_use_agent_address_outbound');
  }
  public set emailUseAgentAddressOutbound(value: boolean | cdktf.IResolvable) {
    this._emailUseAgentAddressOutbound = value;
  }
  public resetEmailUseAgentAddressOutbound() {
    this._emailUseAgentAddressOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUseAgentAddressOutboundInput() {
    return this._emailUseAgentAddressOutbound;
  }

  // message_use_agent_address_outbound - computed: false, optional: true, required: false
  private _messageUseAgentAddressOutbound?: boolean | cdktf.IResolvable; 
  public get messageUseAgentAddressOutbound() {
    return this.getBooleanAttribute('message_use_agent_address_outbound');
  }
  public set messageUseAgentAddressOutbound(value: boolean | cdktf.IResolvable) {
    this._messageUseAgentAddressOutbound = value;
  }
  public resetMessageUseAgentAddressOutbound() {
    this._messageUseAgentAddressOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageUseAgentAddressOutboundInput() {
    return this._messageUseAgentAddressOutbound;
  }

  // wait_for_agent - computed: false, optional: true, required: false
  private _waitForAgent?: boolean | cdktf.IResolvable; 
  public get waitForAgent() {
    return this.getBooleanAttribute('wait_for_agent');
  }
  public set waitForAgent(value: boolean | cdktf.IResolvable) {
    this._waitForAgent = value;
  }
  public resetWaitForAgent() {
    this._waitForAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAgentInput() {
    return this._waitForAgent;
  }
}
export interface RoutingQueueMediaSettingsCallSubTypeSettings {
  /**
  * Indicates if auto-answer is enabled for the given media type or subtype (default is false). Subtype settings take precedence over media type settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer: boolean | cdktf.IResolvable;
  /**
  * The name of the social media company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_type RoutingQueue#media_type}
  */
  readonly mediaType: string;
}

export function routingQueueMediaSettingsCallSubTypeSettingsToTerraform(struct?: RoutingQueueMediaSettingsCallSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
  }
}


export function routingQueueMediaSettingsCallSubTypeSettingsToHclTerraform(struct?: RoutingQueueMediaSettingsCallSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsCallSubTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMediaSettingsCallSubTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsCallSubTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = undefined;
      this._mediaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._mediaType = value.mediaType;
    }
  }

  // enable_auto_answer - computed: false, optional: false, required: true
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }
}

export class RoutingQueueMediaSettingsCallSubTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMediaSettingsCallSubTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMediaSettingsCallSubTypeSettingsOutputReference {
    return new RoutingQueueMediaSettingsCallSubTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueMediaSettingsCall {
  /**
  * Alerting timeout in seconds. Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#alerting_timeout_sec RoutingQueue#alerting_timeout_sec}
  */
  readonly alertingTimeoutSec?: number;
  /**
  * Auto-Answer for digital channels(Email, Message) Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * Service Level target in milliseconds. Must be >= 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_duration_ms RoutingQueue#service_level_duration_ms}
  */
  readonly serviceLevelDurationMs?: number;
  /**
  * The desired Service Level. A float value between 0 and 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_percentage RoutingQueue#service_level_percentage}
  */
  readonly serviceLevelPercentage?: number;
  /**
  * sub_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#sub_type_settings RoutingQueue#sub_type_settings}
  */
  readonly subTypeSettings?: RoutingQueueMediaSettingsCallSubTypeSettings[] | cdktf.IResolvable;
}

export function routingQueueMediaSettingsCallToTerraform(struct?: RoutingQueueMediaSettingsCallOutputReference | RoutingQueueMediaSettingsCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting_timeout_sec: cdktf.numberToTerraform(struct!.alertingTimeoutSec),
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    service_level_duration_ms: cdktf.numberToTerraform(struct!.serviceLevelDurationMs),
    service_level_percentage: cdktf.numberToTerraform(struct!.serviceLevelPercentage),
    sub_type_settings: cdktf.listMapper(routingQueueMediaSettingsCallSubTypeSettingsToTerraform, true)(struct!.subTypeSettings),
  }
}


export function routingQueueMediaSettingsCallToHclTerraform(struct?: RoutingQueueMediaSettingsCallOutputReference | RoutingQueueMediaSettingsCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_level_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_percentage: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_type_settings: {
      value: cdktf.listMapperHcl(routingQueueMediaSettingsCallSubTypeSettingsToHclTerraform, true)(struct!.subTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueMediaSettingsCallSubTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueMediaSettingsCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingTimeoutSec = this._alertingTimeoutSec;
    }
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._serviceLevelDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelDurationMs = this._serviceLevelDurationMs;
    }
    if (this._serviceLevelPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelPercentage = this._serviceLevelPercentage;
    }
    if (this._subTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeSettings = this._subTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertingTimeoutSec = undefined;
      this._enableAutoAnswer = undefined;
      this._serviceLevelDurationMs = undefined;
      this._serviceLevelPercentage = undefined;
      this._subTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertingTimeoutSec = value.alertingTimeoutSec;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._serviceLevelDurationMs = value.serviceLevelDurationMs;
      this._serviceLevelPercentage = value.serviceLevelPercentage;
      this._subTypeSettings.internalValue = value.subTypeSettings;
    }
  }

  // alerting_timeout_sec - computed: false, optional: true, required: false
  private _alertingTimeoutSec?: number; 
  public get alertingTimeoutSec() {
    return this.getNumberAttribute('alerting_timeout_sec');
  }
  public set alertingTimeoutSec(value: number) {
    this._alertingTimeoutSec = value;
  }
  public resetAlertingTimeoutSec() {
    this._alertingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingTimeoutSecInput() {
    return this._alertingTimeoutSec;
  }

  // enable_auto_answer - computed: false, optional: true, required: false
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  public resetEnableAutoAnswer() {
    this._enableAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // service_level_duration_ms - computed: false, optional: true, required: false
  private _serviceLevelDurationMs?: number; 
  public get serviceLevelDurationMs() {
    return this.getNumberAttribute('service_level_duration_ms');
  }
  public set serviceLevelDurationMs(value: number) {
    this._serviceLevelDurationMs = value;
  }
  public resetServiceLevelDurationMs() {
    this._serviceLevelDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelDurationMsInput() {
    return this._serviceLevelDurationMs;
  }

  // service_level_percentage - computed: false, optional: true, required: false
  private _serviceLevelPercentage?: number; 
  public get serviceLevelPercentage() {
    return this.getNumberAttribute('service_level_percentage');
  }
  public set serviceLevelPercentage(value: number) {
    this._serviceLevelPercentage = value;
  }
  public resetServiceLevelPercentage() {
    this._serviceLevelPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelPercentageInput() {
    return this._serviceLevelPercentage;
  }

  // sub_type_settings - computed: false, optional: true, required: false
  private _subTypeSettings = new RoutingQueueMediaSettingsCallSubTypeSettingsList(this, "sub_type_settings", false);
  public get subTypeSettings() {
    return this._subTypeSettings;
  }
  public putSubTypeSettings(value: RoutingQueueMediaSettingsCallSubTypeSettings[] | cdktf.IResolvable) {
    this._subTypeSettings.internalValue = value;
  }
  public resetSubTypeSettings() {
    this._subTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeSettingsInput() {
    return this._subTypeSettings.internalValue;
  }
}
export interface RoutingQueueMediaSettingsCallbackSubTypeSettings {
  /**
  * Indicates if auto-answer is enabled for the given media type or subtype (default is false). Subtype settings take precedence over media type settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer: boolean | cdktf.IResolvable;
  /**
  * The name of the social media company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_type RoutingQueue#media_type}
  */
  readonly mediaType: string;
}

export function routingQueueMediaSettingsCallbackSubTypeSettingsToTerraform(struct?: RoutingQueueMediaSettingsCallbackSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
  }
}


export function routingQueueMediaSettingsCallbackSubTypeSettingsToHclTerraform(struct?: RoutingQueueMediaSettingsCallbackSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsCallbackSubTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMediaSettingsCallbackSubTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsCallbackSubTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = undefined;
      this._mediaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._mediaType = value.mediaType;
    }
  }

  // enable_auto_answer - computed: false, optional: false, required: true
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }
}

export class RoutingQueueMediaSettingsCallbackSubTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMediaSettingsCallbackSubTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMediaSettingsCallbackSubTypeSettingsOutputReference {
    return new RoutingQueueMediaSettingsCallbackSubTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueMediaSettingsCallback {
  /**
  * Alerting timeout in seconds. Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#alerting_timeout_sec RoutingQueue#alerting_timeout_sec}
  */
  readonly alertingTimeoutSec?: number;
  /**
  * The inbound flow to transfer to if an answering machine is detected during the outbound call of a customer first callback when answeringMachineReactionType is set to TransferToFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#answering_machine_flow_id RoutingQueue#answering_machine_flow_id}
  */
  readonly answeringMachineFlowId?: string;
  /**
  * The action to take if an answering machine is detected during the outbound call of a customer first callback. Valid values include: HangUp, TransferToQueue, TransferToFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#answering_machine_reaction_type RoutingQueue#answering_machine_reaction_type}
  */
  readonly answeringMachineReactionType?: string;
  /**
  * How long to play the alerting tone for an auto-answer interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#auto_answer_alert_tone_seconds RoutingQueue#auto_answer_alert_tone_seconds}
  */
  readonly autoAnswerAlertToneSeconds?: number;
  /**
  * Auto Dial Delay Seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#auto_dial_delay_seconds RoutingQueue#auto_dial_delay_seconds}
  */
  readonly autoDialDelaySeconds?: number;
  /**
  * Auto End Delay Seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#auto_end_delay_seconds RoutingQueue#auto_end_delay_seconds}
  */
  readonly autoEndDelaySeconds?: number;
  /**
  * Auto-Answer for digital channels(Email, Message) Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * Auto Dial and End Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_dial_and_end RoutingQueue#enable_auto_dial_and_end}
  */
  readonly enableAutoDialAndEnd?: boolean | cdktf.IResolvable;
  /**
  * The inbound flow to transfer to if a live voice is detected during the outbound call of a customer first callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#live_voice_flow_id RoutingQueue#live_voice_flow_id}
  */
  readonly liveVoiceFlowId?: string;
  /**
  * The action to take if a live voice is detected during the outbound call of a customer first callback. Valid values include: HangUp, TransferToQueue, TransferToFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#live_voice_reaction_type RoutingQueue#live_voice_reaction_type}
  */
  readonly liveVoiceReactionType?: string;
  /**
  * How long to play the alerting tone for a manual-answer interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#manual_answer_alert_tone_seconds RoutingQueue#manual_answer_alert_tone_seconds}
  */
  readonly manualAnswerAlertToneSeconds?: number;
  /**
  * The mode callbacks will use on this queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#mode RoutingQueue#mode}
  */
  readonly mode?: string;
  /**
  * Controls the maximum number of outbound calls at one time when mode is CustomerFirst.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#pacing_modifier RoutingQueue#pacing_modifier}
  */
  readonly pacingModifier?: number;
  /**
  * Service Level target in milliseconds. Must be >= 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_duration_ms RoutingQueue#service_level_duration_ms}
  */
  readonly serviceLevelDurationMs?: number;
  /**
  * The desired Service Level. A float value between 0 and 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_percentage RoutingQueue#service_level_percentage}
  */
  readonly serviceLevelPercentage?: number;
  /**
  * sub_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#sub_type_settings RoutingQueue#sub_type_settings}
  */
  readonly subTypeSettings?: RoutingQueueMediaSettingsCallbackSubTypeSettings[] | cdktf.IResolvable;
}

export function routingQueueMediaSettingsCallbackToTerraform(struct?: RoutingQueueMediaSettingsCallbackOutputReference | RoutingQueueMediaSettingsCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting_timeout_sec: cdktf.numberToTerraform(struct!.alertingTimeoutSec),
    answering_machine_flow_id: cdktf.stringToTerraform(struct!.answeringMachineFlowId),
    answering_machine_reaction_type: cdktf.stringToTerraform(struct!.answeringMachineReactionType),
    auto_answer_alert_tone_seconds: cdktf.numberToTerraform(struct!.autoAnswerAlertToneSeconds),
    auto_dial_delay_seconds: cdktf.numberToTerraform(struct!.autoDialDelaySeconds),
    auto_end_delay_seconds: cdktf.numberToTerraform(struct!.autoEndDelaySeconds),
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    enable_auto_dial_and_end: cdktf.booleanToTerraform(struct!.enableAutoDialAndEnd),
    live_voice_flow_id: cdktf.stringToTerraform(struct!.liveVoiceFlowId),
    live_voice_reaction_type: cdktf.stringToTerraform(struct!.liveVoiceReactionType),
    manual_answer_alert_tone_seconds: cdktf.numberToTerraform(struct!.manualAnswerAlertToneSeconds),
    mode: cdktf.stringToTerraform(struct!.mode),
    pacing_modifier: cdktf.numberToTerraform(struct!.pacingModifier),
    service_level_duration_ms: cdktf.numberToTerraform(struct!.serviceLevelDurationMs),
    service_level_percentage: cdktf.numberToTerraform(struct!.serviceLevelPercentage),
    sub_type_settings: cdktf.listMapper(routingQueueMediaSettingsCallbackSubTypeSettingsToTerraform, true)(struct!.subTypeSettings),
  }
}


export function routingQueueMediaSettingsCallbackToHclTerraform(struct?: RoutingQueueMediaSettingsCallbackOutputReference | RoutingQueueMediaSettingsCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    answering_machine_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.answeringMachineFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    answering_machine_reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.answeringMachineReactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_answer_alert_tone_seconds: {
      value: cdktf.numberToHclTerraform(struct!.autoAnswerAlertToneSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_dial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.autoDialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_end_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.autoEndDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auto_dial_and_end: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoDialAndEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    live_voice_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.liveVoiceFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    live_voice_reaction_type: {
      value: cdktf.stringToHclTerraform(struct!.liveVoiceReactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_answer_alert_tone_seconds: {
      value: cdktf.numberToHclTerraform(struct!.manualAnswerAlertToneSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pacing_modifier: {
      value: cdktf.numberToHclTerraform(struct!.pacingModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_percentage: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_type_settings: {
      value: cdktf.listMapperHcl(routingQueueMediaSettingsCallbackSubTypeSettingsToHclTerraform, true)(struct!.subTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueMediaSettingsCallbackSubTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueMediaSettingsCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingTimeoutSec = this._alertingTimeoutSec;
    }
    if (this._answeringMachineFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.answeringMachineFlowId = this._answeringMachineFlowId;
    }
    if (this._answeringMachineReactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.answeringMachineReactionType = this._answeringMachineReactionType;
    }
    if (this._autoAnswerAlertToneSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAnswerAlertToneSeconds = this._autoAnswerAlertToneSeconds;
    }
    if (this._autoDialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDialDelaySeconds = this._autoDialDelaySeconds;
    }
    if (this._autoEndDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEndDelaySeconds = this._autoEndDelaySeconds;
    }
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._enableAutoDialAndEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoDialAndEnd = this._enableAutoDialAndEnd;
    }
    if (this._liveVoiceFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveVoiceFlowId = this._liveVoiceFlowId;
    }
    if (this._liveVoiceReactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveVoiceReactionType = this._liveVoiceReactionType;
    }
    if (this._manualAnswerAlertToneSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAnswerAlertToneSeconds = this._manualAnswerAlertToneSeconds;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._pacingModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacingModifier = this._pacingModifier;
    }
    if (this._serviceLevelDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelDurationMs = this._serviceLevelDurationMs;
    }
    if (this._serviceLevelPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelPercentage = this._serviceLevelPercentage;
    }
    if (this._subTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeSettings = this._subTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertingTimeoutSec = undefined;
      this._answeringMachineFlowId = undefined;
      this._answeringMachineReactionType = undefined;
      this._autoAnswerAlertToneSeconds = undefined;
      this._autoDialDelaySeconds = undefined;
      this._autoEndDelaySeconds = undefined;
      this._enableAutoAnswer = undefined;
      this._enableAutoDialAndEnd = undefined;
      this._liveVoiceFlowId = undefined;
      this._liveVoiceReactionType = undefined;
      this._manualAnswerAlertToneSeconds = undefined;
      this._mode = undefined;
      this._pacingModifier = undefined;
      this._serviceLevelDurationMs = undefined;
      this._serviceLevelPercentage = undefined;
      this._subTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertingTimeoutSec = value.alertingTimeoutSec;
      this._answeringMachineFlowId = value.answeringMachineFlowId;
      this._answeringMachineReactionType = value.answeringMachineReactionType;
      this._autoAnswerAlertToneSeconds = value.autoAnswerAlertToneSeconds;
      this._autoDialDelaySeconds = value.autoDialDelaySeconds;
      this._autoEndDelaySeconds = value.autoEndDelaySeconds;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._enableAutoDialAndEnd = value.enableAutoDialAndEnd;
      this._liveVoiceFlowId = value.liveVoiceFlowId;
      this._liveVoiceReactionType = value.liveVoiceReactionType;
      this._manualAnswerAlertToneSeconds = value.manualAnswerAlertToneSeconds;
      this._mode = value.mode;
      this._pacingModifier = value.pacingModifier;
      this._serviceLevelDurationMs = value.serviceLevelDurationMs;
      this._serviceLevelPercentage = value.serviceLevelPercentage;
      this._subTypeSettings.internalValue = value.subTypeSettings;
    }
  }

  // alerting_timeout_sec - computed: false, optional: true, required: false
  private _alertingTimeoutSec?: number; 
  public get alertingTimeoutSec() {
    return this.getNumberAttribute('alerting_timeout_sec');
  }
  public set alertingTimeoutSec(value: number) {
    this._alertingTimeoutSec = value;
  }
  public resetAlertingTimeoutSec() {
    this._alertingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingTimeoutSecInput() {
    return this._alertingTimeoutSec;
  }

  // answering_machine_flow_id - computed: false, optional: true, required: false
  private _answeringMachineFlowId?: string; 
  public get answeringMachineFlowId() {
    return this.getStringAttribute('answering_machine_flow_id');
  }
  public set answeringMachineFlowId(value: string) {
    this._answeringMachineFlowId = value;
  }
  public resetAnsweringMachineFlowId() {
    this._answeringMachineFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answeringMachineFlowIdInput() {
    return this._answeringMachineFlowId;
  }

  // answering_machine_reaction_type - computed: false, optional: true, required: false
  private _answeringMachineReactionType?: string; 
  public get answeringMachineReactionType() {
    return this.getStringAttribute('answering_machine_reaction_type');
  }
  public set answeringMachineReactionType(value: string) {
    this._answeringMachineReactionType = value;
  }
  public resetAnsweringMachineReactionType() {
    this._answeringMachineReactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answeringMachineReactionTypeInput() {
    return this._answeringMachineReactionType;
  }

  // auto_answer_alert_tone_seconds - computed: false, optional: true, required: false
  private _autoAnswerAlertToneSeconds?: number; 
  public get autoAnswerAlertToneSeconds() {
    return this.getNumberAttribute('auto_answer_alert_tone_seconds');
  }
  public set autoAnswerAlertToneSeconds(value: number) {
    this._autoAnswerAlertToneSeconds = value;
  }
  public resetAutoAnswerAlertToneSeconds() {
    this._autoAnswerAlertToneSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAnswerAlertToneSecondsInput() {
    return this._autoAnswerAlertToneSeconds;
  }

  // auto_dial_delay_seconds - computed: false, optional: true, required: false
  private _autoDialDelaySeconds?: number; 
  public get autoDialDelaySeconds() {
    return this.getNumberAttribute('auto_dial_delay_seconds');
  }
  public set autoDialDelaySeconds(value: number) {
    this._autoDialDelaySeconds = value;
  }
  public resetAutoDialDelaySeconds() {
    this._autoDialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDialDelaySecondsInput() {
    return this._autoDialDelaySeconds;
  }

  // auto_end_delay_seconds - computed: false, optional: true, required: false
  private _autoEndDelaySeconds?: number; 
  public get autoEndDelaySeconds() {
    return this.getNumberAttribute('auto_end_delay_seconds');
  }
  public set autoEndDelaySeconds(value: number) {
    this._autoEndDelaySeconds = value;
  }
  public resetAutoEndDelaySeconds() {
    this._autoEndDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEndDelaySecondsInput() {
    return this._autoEndDelaySeconds;
  }

  // enable_auto_answer - computed: false, optional: true, required: false
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  public resetEnableAutoAnswer() {
    this._enableAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // enable_auto_dial_and_end - computed: false, optional: true, required: false
  private _enableAutoDialAndEnd?: boolean | cdktf.IResolvable; 
  public get enableAutoDialAndEnd() {
    return this.getBooleanAttribute('enable_auto_dial_and_end');
  }
  public set enableAutoDialAndEnd(value: boolean | cdktf.IResolvable) {
    this._enableAutoDialAndEnd = value;
  }
  public resetEnableAutoDialAndEnd() {
    this._enableAutoDialAndEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoDialAndEndInput() {
    return this._enableAutoDialAndEnd;
  }

  // live_voice_flow_id - computed: false, optional: true, required: false
  private _liveVoiceFlowId?: string; 
  public get liveVoiceFlowId() {
    return this.getStringAttribute('live_voice_flow_id');
  }
  public set liveVoiceFlowId(value: string) {
    this._liveVoiceFlowId = value;
  }
  public resetLiveVoiceFlowId() {
    this._liveVoiceFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveVoiceFlowIdInput() {
    return this._liveVoiceFlowId;
  }

  // live_voice_reaction_type - computed: false, optional: true, required: false
  private _liveVoiceReactionType?: string; 
  public get liveVoiceReactionType() {
    return this.getStringAttribute('live_voice_reaction_type');
  }
  public set liveVoiceReactionType(value: string) {
    this._liveVoiceReactionType = value;
  }
  public resetLiveVoiceReactionType() {
    this._liveVoiceReactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveVoiceReactionTypeInput() {
    return this._liveVoiceReactionType;
  }

  // manual_answer_alert_tone_seconds - computed: false, optional: true, required: false
  private _manualAnswerAlertToneSeconds?: number; 
  public get manualAnswerAlertToneSeconds() {
    return this.getNumberAttribute('manual_answer_alert_tone_seconds');
  }
  public set manualAnswerAlertToneSeconds(value: number) {
    this._manualAnswerAlertToneSeconds = value;
  }
  public resetManualAnswerAlertToneSeconds() {
    this._manualAnswerAlertToneSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAnswerAlertToneSecondsInput() {
    return this._manualAnswerAlertToneSeconds;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // pacing_modifier - computed: false, optional: true, required: false
  private _pacingModifier?: number; 
  public get pacingModifier() {
    return this.getNumberAttribute('pacing_modifier');
  }
  public set pacingModifier(value: number) {
    this._pacingModifier = value;
  }
  public resetPacingModifier() {
    this._pacingModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacingModifierInput() {
    return this._pacingModifier;
  }

  // service_level_duration_ms - computed: false, optional: true, required: false
  private _serviceLevelDurationMs?: number; 
  public get serviceLevelDurationMs() {
    return this.getNumberAttribute('service_level_duration_ms');
  }
  public set serviceLevelDurationMs(value: number) {
    this._serviceLevelDurationMs = value;
  }
  public resetServiceLevelDurationMs() {
    this._serviceLevelDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelDurationMsInput() {
    return this._serviceLevelDurationMs;
  }

  // service_level_percentage - computed: false, optional: true, required: false
  private _serviceLevelPercentage?: number; 
  public get serviceLevelPercentage() {
    return this.getNumberAttribute('service_level_percentage');
  }
  public set serviceLevelPercentage(value: number) {
    this._serviceLevelPercentage = value;
  }
  public resetServiceLevelPercentage() {
    this._serviceLevelPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelPercentageInput() {
    return this._serviceLevelPercentage;
  }

  // sub_type_settings - computed: false, optional: true, required: false
  private _subTypeSettings = new RoutingQueueMediaSettingsCallbackSubTypeSettingsList(this, "sub_type_settings", false);
  public get subTypeSettings() {
    return this._subTypeSettings;
  }
  public putSubTypeSettings(value: RoutingQueueMediaSettingsCallbackSubTypeSettings[] | cdktf.IResolvable) {
    this._subTypeSettings.internalValue = value;
  }
  public resetSubTypeSettings() {
    this._subTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeSettingsInput() {
    return this._subTypeSettings.internalValue;
  }
}
export interface RoutingQueueMediaSettingsChatSubTypeSettings {
  /**
  * Indicates if auto-answer is enabled for the given media type or subtype (default is false). Subtype settings take precedence over media type settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer: boolean | cdktf.IResolvable;
  /**
  * The name of the social media company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_type RoutingQueue#media_type}
  */
  readonly mediaType: string;
}

export function routingQueueMediaSettingsChatSubTypeSettingsToTerraform(struct?: RoutingQueueMediaSettingsChatSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
  }
}


export function routingQueueMediaSettingsChatSubTypeSettingsToHclTerraform(struct?: RoutingQueueMediaSettingsChatSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsChatSubTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMediaSettingsChatSubTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsChatSubTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = undefined;
      this._mediaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._mediaType = value.mediaType;
    }
  }

  // enable_auto_answer - computed: false, optional: false, required: true
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }
}

export class RoutingQueueMediaSettingsChatSubTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMediaSettingsChatSubTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMediaSettingsChatSubTypeSettingsOutputReference {
    return new RoutingQueueMediaSettingsChatSubTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueMediaSettingsChat {
  /**
  * Alerting timeout in seconds. Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#alerting_timeout_sec RoutingQueue#alerting_timeout_sec}
  */
  readonly alertingTimeoutSec?: number;
  /**
  * Auto-Answer for digital channels(Email, Message) Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * Service Level target in milliseconds. Must be >= 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_duration_ms RoutingQueue#service_level_duration_ms}
  */
  readonly serviceLevelDurationMs?: number;
  /**
  * The desired Service Level. A float value between 0 and 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_percentage RoutingQueue#service_level_percentage}
  */
  readonly serviceLevelPercentage?: number;
  /**
  * sub_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#sub_type_settings RoutingQueue#sub_type_settings}
  */
  readonly subTypeSettings?: RoutingQueueMediaSettingsChatSubTypeSettings[] | cdktf.IResolvable;
}

export function routingQueueMediaSettingsChatToTerraform(struct?: RoutingQueueMediaSettingsChatOutputReference | RoutingQueueMediaSettingsChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting_timeout_sec: cdktf.numberToTerraform(struct!.alertingTimeoutSec),
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    service_level_duration_ms: cdktf.numberToTerraform(struct!.serviceLevelDurationMs),
    service_level_percentage: cdktf.numberToTerraform(struct!.serviceLevelPercentage),
    sub_type_settings: cdktf.listMapper(routingQueueMediaSettingsChatSubTypeSettingsToTerraform, true)(struct!.subTypeSettings),
  }
}


export function routingQueueMediaSettingsChatToHclTerraform(struct?: RoutingQueueMediaSettingsChatOutputReference | RoutingQueueMediaSettingsChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_level_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_percentage: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_type_settings: {
      value: cdktf.listMapperHcl(routingQueueMediaSettingsChatSubTypeSettingsToHclTerraform, true)(struct!.subTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueMediaSettingsChatSubTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsChatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueMediaSettingsChat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingTimeoutSec = this._alertingTimeoutSec;
    }
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._serviceLevelDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelDurationMs = this._serviceLevelDurationMs;
    }
    if (this._serviceLevelPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelPercentage = this._serviceLevelPercentage;
    }
    if (this._subTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeSettings = this._subTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsChat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertingTimeoutSec = undefined;
      this._enableAutoAnswer = undefined;
      this._serviceLevelDurationMs = undefined;
      this._serviceLevelPercentage = undefined;
      this._subTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertingTimeoutSec = value.alertingTimeoutSec;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._serviceLevelDurationMs = value.serviceLevelDurationMs;
      this._serviceLevelPercentage = value.serviceLevelPercentage;
      this._subTypeSettings.internalValue = value.subTypeSettings;
    }
  }

  // alerting_timeout_sec - computed: false, optional: true, required: false
  private _alertingTimeoutSec?: number; 
  public get alertingTimeoutSec() {
    return this.getNumberAttribute('alerting_timeout_sec');
  }
  public set alertingTimeoutSec(value: number) {
    this._alertingTimeoutSec = value;
  }
  public resetAlertingTimeoutSec() {
    this._alertingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingTimeoutSecInput() {
    return this._alertingTimeoutSec;
  }

  // enable_auto_answer - computed: false, optional: true, required: false
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  public resetEnableAutoAnswer() {
    this._enableAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // service_level_duration_ms - computed: false, optional: true, required: false
  private _serviceLevelDurationMs?: number; 
  public get serviceLevelDurationMs() {
    return this.getNumberAttribute('service_level_duration_ms');
  }
  public set serviceLevelDurationMs(value: number) {
    this._serviceLevelDurationMs = value;
  }
  public resetServiceLevelDurationMs() {
    this._serviceLevelDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelDurationMsInput() {
    return this._serviceLevelDurationMs;
  }

  // service_level_percentage - computed: false, optional: true, required: false
  private _serviceLevelPercentage?: number; 
  public get serviceLevelPercentage() {
    return this.getNumberAttribute('service_level_percentage');
  }
  public set serviceLevelPercentage(value: number) {
    this._serviceLevelPercentage = value;
  }
  public resetServiceLevelPercentage() {
    this._serviceLevelPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelPercentageInput() {
    return this._serviceLevelPercentage;
  }

  // sub_type_settings - computed: false, optional: true, required: false
  private _subTypeSettings = new RoutingQueueMediaSettingsChatSubTypeSettingsList(this, "sub_type_settings", false);
  public get subTypeSettings() {
    return this._subTypeSettings;
  }
  public putSubTypeSettings(value: RoutingQueueMediaSettingsChatSubTypeSettings[] | cdktf.IResolvable) {
    this._subTypeSettings.internalValue = value;
  }
  public resetSubTypeSettings() {
    this._subTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeSettingsInput() {
    return this._subTypeSettings.internalValue;
  }
}
export interface RoutingQueueMediaSettingsEmailSubTypeSettings {
  /**
  * Indicates if auto-answer is enabled for the given media type or subtype (default is false). Subtype settings take precedence over media type settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer: boolean | cdktf.IResolvable;
  /**
  * The name of the social media company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_type RoutingQueue#media_type}
  */
  readonly mediaType: string;
}

export function routingQueueMediaSettingsEmailSubTypeSettingsToTerraform(struct?: RoutingQueueMediaSettingsEmailSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
  }
}


export function routingQueueMediaSettingsEmailSubTypeSettingsToHclTerraform(struct?: RoutingQueueMediaSettingsEmailSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsEmailSubTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMediaSettingsEmailSubTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsEmailSubTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = undefined;
      this._mediaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._mediaType = value.mediaType;
    }
  }

  // enable_auto_answer - computed: false, optional: false, required: true
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }
}

export class RoutingQueueMediaSettingsEmailSubTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMediaSettingsEmailSubTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMediaSettingsEmailSubTypeSettingsOutputReference {
    return new RoutingQueueMediaSettingsEmailSubTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueMediaSettingsEmail {
  /**
  * Alerting timeout in seconds. Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#alerting_timeout_sec RoutingQueue#alerting_timeout_sec}
  */
  readonly alertingTimeoutSec?: number;
  /**
  * Auto-Answer for digital channels(Email, Message) Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * Service Level target in milliseconds. Must be >= 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_duration_ms RoutingQueue#service_level_duration_ms}
  */
  readonly serviceLevelDurationMs?: number;
  /**
  * The desired Service Level. A float value between 0 and 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_percentage RoutingQueue#service_level_percentage}
  */
  readonly serviceLevelPercentage?: number;
  /**
  * sub_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#sub_type_settings RoutingQueue#sub_type_settings}
  */
  readonly subTypeSettings?: RoutingQueueMediaSettingsEmailSubTypeSettings[] | cdktf.IResolvable;
}

export function routingQueueMediaSettingsEmailToTerraform(struct?: RoutingQueueMediaSettingsEmailOutputReference | RoutingQueueMediaSettingsEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting_timeout_sec: cdktf.numberToTerraform(struct!.alertingTimeoutSec),
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    service_level_duration_ms: cdktf.numberToTerraform(struct!.serviceLevelDurationMs),
    service_level_percentage: cdktf.numberToTerraform(struct!.serviceLevelPercentage),
    sub_type_settings: cdktf.listMapper(routingQueueMediaSettingsEmailSubTypeSettingsToTerraform, true)(struct!.subTypeSettings),
  }
}


export function routingQueueMediaSettingsEmailToHclTerraform(struct?: RoutingQueueMediaSettingsEmailOutputReference | RoutingQueueMediaSettingsEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_level_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_percentage: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_type_settings: {
      value: cdktf.listMapperHcl(routingQueueMediaSettingsEmailSubTypeSettingsToHclTerraform, true)(struct!.subTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueMediaSettingsEmailSubTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueMediaSettingsEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingTimeoutSec = this._alertingTimeoutSec;
    }
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._serviceLevelDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelDurationMs = this._serviceLevelDurationMs;
    }
    if (this._serviceLevelPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelPercentage = this._serviceLevelPercentage;
    }
    if (this._subTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeSettings = this._subTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertingTimeoutSec = undefined;
      this._enableAutoAnswer = undefined;
      this._serviceLevelDurationMs = undefined;
      this._serviceLevelPercentage = undefined;
      this._subTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertingTimeoutSec = value.alertingTimeoutSec;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._serviceLevelDurationMs = value.serviceLevelDurationMs;
      this._serviceLevelPercentage = value.serviceLevelPercentage;
      this._subTypeSettings.internalValue = value.subTypeSettings;
    }
  }

  // alerting_timeout_sec - computed: false, optional: true, required: false
  private _alertingTimeoutSec?: number; 
  public get alertingTimeoutSec() {
    return this.getNumberAttribute('alerting_timeout_sec');
  }
  public set alertingTimeoutSec(value: number) {
    this._alertingTimeoutSec = value;
  }
  public resetAlertingTimeoutSec() {
    this._alertingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingTimeoutSecInput() {
    return this._alertingTimeoutSec;
  }

  // enable_auto_answer - computed: false, optional: true, required: false
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  public resetEnableAutoAnswer() {
    this._enableAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // service_level_duration_ms - computed: false, optional: true, required: false
  private _serviceLevelDurationMs?: number; 
  public get serviceLevelDurationMs() {
    return this.getNumberAttribute('service_level_duration_ms');
  }
  public set serviceLevelDurationMs(value: number) {
    this._serviceLevelDurationMs = value;
  }
  public resetServiceLevelDurationMs() {
    this._serviceLevelDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelDurationMsInput() {
    return this._serviceLevelDurationMs;
  }

  // service_level_percentage - computed: false, optional: true, required: false
  private _serviceLevelPercentage?: number; 
  public get serviceLevelPercentage() {
    return this.getNumberAttribute('service_level_percentage');
  }
  public set serviceLevelPercentage(value: number) {
    this._serviceLevelPercentage = value;
  }
  public resetServiceLevelPercentage() {
    this._serviceLevelPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelPercentageInput() {
    return this._serviceLevelPercentage;
  }

  // sub_type_settings - computed: false, optional: true, required: false
  private _subTypeSettings = new RoutingQueueMediaSettingsEmailSubTypeSettingsList(this, "sub_type_settings", false);
  public get subTypeSettings() {
    return this._subTypeSettings;
  }
  public putSubTypeSettings(value: RoutingQueueMediaSettingsEmailSubTypeSettings[] | cdktf.IResolvable) {
    this._subTypeSettings.internalValue = value;
  }
  public resetSubTypeSettings() {
    this._subTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeSettingsInput() {
    return this._subTypeSettings.internalValue;
  }
}
export interface RoutingQueueMediaSettingsMessageSubTypeSettings {
  /**
  * Indicates if auto-answer is enabled for the given media type or subtype (default is false). Subtype settings take precedence over media type settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer: boolean | cdktf.IResolvable;
  /**
  * The name of the social media company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#media_type RoutingQueue#media_type}
  */
  readonly mediaType: string;
}

export function routingQueueMediaSettingsMessageSubTypeSettingsToTerraform(struct?: RoutingQueueMediaSettingsMessageSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
  }
}


export function routingQueueMediaSettingsMessageSubTypeSettingsToHclTerraform(struct?: RoutingQueueMediaSettingsMessageSubTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsMessageSubTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMediaSettingsMessageSubTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsMessageSubTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = undefined;
      this._mediaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._mediaType = value.mediaType;
    }
  }

  // enable_auto_answer - computed: false, optional: false, required: true
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }
}

export class RoutingQueueMediaSettingsMessageSubTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMediaSettingsMessageSubTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMediaSettingsMessageSubTypeSettingsOutputReference {
    return new RoutingQueueMediaSettingsMessageSubTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueMediaSettingsMessage {
  /**
  * Alerting timeout in seconds. Must be >= 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#alerting_timeout_sec RoutingQueue#alerting_timeout_sec}
  */
  readonly alertingTimeoutSec?: number;
  /**
  * Auto-Answer for digital channels(Email, Message) Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#enable_auto_answer RoutingQueue#enable_auto_answer}
  */
  readonly enableAutoAnswer?: boolean | cdktf.IResolvable;
  /**
  * Service Level target in milliseconds. Must be >= 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_duration_ms RoutingQueue#service_level_duration_ms}
  */
  readonly serviceLevelDurationMs?: number;
  /**
  * The desired Service Level. A float value between 0 and 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#service_level_percentage RoutingQueue#service_level_percentage}
  */
  readonly serviceLevelPercentage?: number;
  /**
  * sub_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#sub_type_settings RoutingQueue#sub_type_settings}
  */
  readonly subTypeSettings?: RoutingQueueMediaSettingsMessageSubTypeSettings[] | cdktf.IResolvable;
}

export function routingQueueMediaSettingsMessageToTerraform(struct?: RoutingQueueMediaSettingsMessageOutputReference | RoutingQueueMediaSettingsMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerting_timeout_sec: cdktf.numberToTerraform(struct!.alertingTimeoutSec),
    enable_auto_answer: cdktf.booleanToTerraform(struct!.enableAutoAnswer),
    service_level_duration_ms: cdktf.numberToTerraform(struct!.serviceLevelDurationMs),
    service_level_percentage: cdktf.numberToTerraform(struct!.serviceLevelPercentage),
    sub_type_settings: cdktf.listMapper(routingQueueMediaSettingsMessageSubTypeSettingsToTerraform, true)(struct!.subTypeSettings),
  }
}


export function routingQueueMediaSettingsMessageToHclTerraform(struct?: RoutingQueueMediaSettingsMessageOutputReference | RoutingQueueMediaSettingsMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerting_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertingTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_level_duration_ms: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelDurationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_level_percentage: {
      value: cdktf.numberToHclTerraform(struct!.serviceLevelPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_type_settings: {
      value: cdktf.listMapperHcl(routingQueueMediaSettingsMessageSubTypeSettingsToHclTerraform, true)(struct!.subTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RoutingQueueMediaSettingsMessageSubTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMediaSettingsMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueMediaSettingsMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingTimeoutSec = this._alertingTimeoutSec;
    }
    if (this._enableAutoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoAnswer = this._enableAutoAnswer;
    }
    if (this._serviceLevelDurationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelDurationMs = this._serviceLevelDurationMs;
    }
    if (this._serviceLevelPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelPercentage = this._serviceLevelPercentage;
    }
    if (this._subTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTypeSettings = this._subTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMediaSettingsMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertingTimeoutSec = undefined;
      this._enableAutoAnswer = undefined;
      this._serviceLevelDurationMs = undefined;
      this._serviceLevelPercentage = undefined;
      this._subTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertingTimeoutSec = value.alertingTimeoutSec;
      this._enableAutoAnswer = value.enableAutoAnswer;
      this._serviceLevelDurationMs = value.serviceLevelDurationMs;
      this._serviceLevelPercentage = value.serviceLevelPercentage;
      this._subTypeSettings.internalValue = value.subTypeSettings;
    }
  }

  // alerting_timeout_sec - computed: false, optional: true, required: false
  private _alertingTimeoutSec?: number; 
  public get alertingTimeoutSec() {
    return this.getNumberAttribute('alerting_timeout_sec');
  }
  public set alertingTimeoutSec(value: number) {
    this._alertingTimeoutSec = value;
  }
  public resetAlertingTimeoutSec() {
    this._alertingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingTimeoutSecInput() {
    return this._alertingTimeoutSec;
  }

  // enable_auto_answer - computed: false, optional: true, required: false
  private _enableAutoAnswer?: boolean | cdktf.IResolvable; 
  public get enableAutoAnswer() {
    return this.getBooleanAttribute('enable_auto_answer');
  }
  public set enableAutoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableAutoAnswer = value;
  }
  public resetEnableAutoAnswer() {
    this._enableAutoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAnswerInput() {
    return this._enableAutoAnswer;
  }

  // service_level_duration_ms - computed: false, optional: true, required: false
  private _serviceLevelDurationMs?: number; 
  public get serviceLevelDurationMs() {
    return this.getNumberAttribute('service_level_duration_ms');
  }
  public set serviceLevelDurationMs(value: number) {
    this._serviceLevelDurationMs = value;
  }
  public resetServiceLevelDurationMs() {
    this._serviceLevelDurationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelDurationMsInput() {
    return this._serviceLevelDurationMs;
  }

  // service_level_percentage - computed: false, optional: true, required: false
  private _serviceLevelPercentage?: number; 
  public get serviceLevelPercentage() {
    return this.getNumberAttribute('service_level_percentage');
  }
  public set serviceLevelPercentage(value: number) {
    this._serviceLevelPercentage = value;
  }
  public resetServiceLevelPercentage() {
    this._serviceLevelPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelPercentageInput() {
    return this._serviceLevelPercentage;
  }

  // sub_type_settings - computed: false, optional: true, required: false
  private _subTypeSettings = new RoutingQueueMediaSettingsMessageSubTypeSettingsList(this, "sub_type_settings", false);
  public get subTypeSettings() {
    return this._subTypeSettings;
  }
  public putSubTypeSettings(value: RoutingQueueMediaSettingsMessageSubTypeSettings[] | cdktf.IResolvable) {
    this._subTypeSettings.internalValue = value;
  }
  public resetSubTypeSettings() {
    this._subTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeSettingsInput() {
    return this._subTypeSettings.internalValue;
  }
}
export interface RoutingQueueMembers {
  /**
  * Ring number between 1 and 6 for this user in the queue. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#ring_num RoutingQueue#ring_num}
  */
  readonly ringNum?: number;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#user_id RoutingQueue#user_id}
  */
  readonly userId: string;
}

export function routingQueueMembersToTerraform(struct?: RoutingQueueMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ring_num: cdktf.numberToTerraform(struct!.ringNum),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function routingQueueMembersToHclTerraform(struct?: RoutingQueueMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ring_num: {
      value: cdktf.numberToHclTerraform(struct!.ringNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ringNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringNum = this._ringNum;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ringNum = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ringNum = value.ringNum;
      this._userId = value.userId;
    }
  }

  // ring_num - computed: false, optional: true, required: false
  private _ringNum?: number; 
  public get ringNum() {
    return this.getNumberAttribute('ring_num');
  }
  public set ringNum(value: number) {
    this._ringNum = value;
  }
  public resetRingNum() {
    this._ringNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringNumInput() {
    return this._ringNum;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RoutingQueueMembersList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueMembers[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueMembersOutputReference {
    return new RoutingQueueMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingQueueOutboundEmailAddress {
  /**
  * Unique ID of the email domain. e.g. "test.example.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#domain_id RoutingQueue#domain_id}
  */
  readonly domainId: string;
  /**
  * Unique ID of the email route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#route_id RoutingQueue#route_id}
  */
  readonly routeId: string;
}

export function routingQueueOutboundEmailAddressToTerraform(struct?: RoutingQueueOutboundEmailAddressOutputReference | RoutingQueueOutboundEmailAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    route_id: cdktf.stringToTerraform(struct!.routeId),
  }
}


export function routingQueueOutboundEmailAddressToHclTerraform(struct?: RoutingQueueOutboundEmailAddressOutputReference | RoutingQueueOutboundEmailAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_id: {
      value: cdktf.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueOutboundEmailAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingQueueOutboundEmailAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueOutboundEmailAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainId = undefined;
      this._routeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainId = value.domainId;
      this._routeId = value.routeId;
    }
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }
}
export interface RoutingQueueRoutingRules {
  /**
  * Matching operator (MEETS_THRESHOLD | ANY). MEETS_THRESHOLD matches any agent with a score at or above the rule's threshold. ANY matches all specified agents, regardless of score. Defaults to `MEETS_THRESHOLD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#operator RoutingQueue#operator}
  */
  readonly operator?: string;
  /**
  * Threshold required for routing attempt (generally an agent score). Ignored for operator ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#threshold RoutingQueue#threshold}
  */
  readonly threshold?: number;
  /**
  * Seconds to wait in this rule before moving to the next. Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#wait_seconds RoutingQueue#wait_seconds}
  */
  readonly waitSeconds?: number;
}

export function routingQueueRoutingRulesToTerraform(struct?: RoutingQueueRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    wait_seconds: cdktf.numberToTerraform(struct!.waitSeconds),
  }
}


export function routingQueueRoutingRulesToHclTerraform(struct?: RoutingQueueRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingQueueRoutingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingQueueRoutingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._waitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitSeconds = this._waitSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingQueueRoutingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._threshold = undefined;
      this._waitSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._threshold = value.threshold;
      this._waitSeconds = value.waitSeconds;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // wait_seconds - computed: false, optional: true, required: false
  private _waitSeconds?: number; 
  public get waitSeconds() {
    return this.getNumberAttribute('wait_seconds');
  }
  public set waitSeconds(value: number) {
    this._waitSeconds = value;
  }
  public resetWaitSeconds() {
    this._waitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSecondsInput() {
    return this._waitSeconds;
  }
}

export class RoutingQueueRoutingRulesList extends cdktf.ComplexList {
  public internalValue? : RoutingQueueRoutingRules[] | cdktf.IResolvable

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
  public get(index: number): RoutingQueueRoutingRulesOutputReference {
    return new RoutingQueueRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue genesyscloud_routing_queue}
*/
export class RoutingQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingQueue to import
  * @param importFromId The id of the existing RoutingQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_queue genesyscloud_routing_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingQueueConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_queue',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acwTimeoutMs = config.acwTimeoutMs;
    this._acwWrapupPrompt = config.acwWrapupPrompt;
    this._autoAnswerOnly = config.autoAnswerOnly;
    this._callingPartyName = config.callingPartyName;
    this._callingPartyNumber = config.callingPartyNumber;
    this._defaultScriptIds = config.defaultScriptIds;
    this._description = config.description;
    this._divisionId = config.divisionId;
    this._emailInQueueFlowId = config.emailInQueueFlowId;
    this._enableAudioMonitoring = config.enableAudioMonitoring;
    this._enableManualAssignment = config.enableManualAssignment;
    this._enableTranscription = config.enableTranscription;
    this._groups = config.groups;
    this._id = config.id;
    this._ignoreMembers = config.ignoreMembers;
    this._lastAgentRoutingMode = config.lastAgentRoutingMode;
    this._messageInQueueFlowId = config.messageInQueueFlowId;
    this._name = config.name;
    this._onHoldPromptId = config.onHoldPromptId;
    this._outboundMessagingOpenMessagingRecipientId = config.outboundMessagingOpenMessagingRecipientId;
    this._outboundMessagingSmsAddressId = config.outboundMessagingSmsAddressId;
    this._outboundMessagingWhatsappRecipientId = config.outboundMessagingWhatsappRecipientId;
    this._peerId = config.peerId;
    this._queueFlowId = config.queueFlowId;
    this._scoringMethod = config.scoringMethod;
    this._skillEvaluationMethod = config.skillEvaluationMethod;
    this._skillGroups = config.skillGroups;
    this._sourceQueueId = config.sourceQueueId;
    this._suppressInQueueCallRecording = config.suppressInQueueCallRecording;
    this._teams = config.teams;
    this._whisperPromptId = config.whisperPromptId;
    this._wrapupCodes = config.wrapupCodes;
    this._agentOwnedRouting.internalValue = config.agentOwnedRouting;
    this._bullseyeRings.internalValue = config.bullseyeRings;
    this._cannedResponseLibraries.internalValue = config.cannedResponseLibraries;
    this._conditionalGroupActivation.internalValue = config.conditionalGroupActivation;
    this._conditionalGroupRoutingRules.internalValue = config.conditionalGroupRoutingRules;
    this._directRouting.internalValue = config.directRouting;
    this._mediaSettingsCall.internalValue = config.mediaSettingsCall;
    this._mediaSettingsCallback.internalValue = config.mediaSettingsCallback;
    this._mediaSettingsChat.internalValue = config.mediaSettingsChat;
    this._mediaSettingsEmail.internalValue = config.mediaSettingsEmail;
    this._mediaSettingsMessage.internalValue = config.mediaSettingsMessage;
    this._members.internalValue = config.members;
    this._outboundEmailAddress.internalValue = config.outboundEmailAddress;
    this._routingRules.internalValue = config.routingRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acw_timeout_ms - computed: true, optional: true, required: false
  private _acwTimeoutMs?: number; 
  public get acwTimeoutMs() {
    return this.getNumberAttribute('acw_timeout_ms');
  }
  public set acwTimeoutMs(value: number) {
    this._acwTimeoutMs = value;
  }
  public resetAcwTimeoutMs() {
    this._acwTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acwTimeoutMsInput() {
    return this._acwTimeoutMs;
  }

  // acw_wrapup_prompt - computed: false, optional: true, required: false
  private _acwWrapupPrompt?: string; 
  public get acwWrapupPrompt() {
    return this.getStringAttribute('acw_wrapup_prompt');
  }
  public set acwWrapupPrompt(value: string) {
    this._acwWrapupPrompt = value;
  }
  public resetAcwWrapupPrompt() {
    this._acwWrapupPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acwWrapupPromptInput() {
    return this._acwWrapupPrompt;
  }

  // auto_answer_only - computed: false, optional: true, required: false
  private _autoAnswerOnly?: boolean | cdktf.IResolvable; 
  public get autoAnswerOnly() {
    return this.getBooleanAttribute('auto_answer_only');
  }
  public set autoAnswerOnly(value: boolean | cdktf.IResolvable) {
    this._autoAnswerOnly = value;
  }
  public resetAutoAnswerOnly() {
    this._autoAnswerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAnswerOnlyInput() {
    return this._autoAnswerOnly;
  }

  // calling_party_name - computed: false, optional: true, required: false
  private _callingPartyName?: string; 
  public get callingPartyName() {
    return this.getStringAttribute('calling_party_name');
  }
  public set callingPartyName(value: string) {
    this._callingPartyName = value;
  }
  public resetCallingPartyName() {
    this._callingPartyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingPartyNameInput() {
    return this._callingPartyName;
  }

  // calling_party_number - computed: false, optional: true, required: false
  private _callingPartyNumber?: string; 
  public get callingPartyNumber() {
    return this.getStringAttribute('calling_party_number');
  }
  public set callingPartyNumber(value: string) {
    this._callingPartyNumber = value;
  }
  public resetCallingPartyNumber() {
    this._callingPartyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingPartyNumberInput() {
    return this._callingPartyNumber;
  }

  // default_script_ids - computed: false, optional: true, required: false
  private _defaultScriptIds?: { [key: string]: string }; 
  public get defaultScriptIds() {
    return this.getStringMapAttribute('default_script_ids');
  }
  public set defaultScriptIds(value: { [key: string]: string }) {
    this._defaultScriptIds = value;
  }
  public resetDefaultScriptIds() {
    this._defaultScriptIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScriptIdsInput() {
    return this._defaultScriptIds;
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

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // email_in_queue_flow_id - computed: false, optional: true, required: false
  private _emailInQueueFlowId?: string; 
  public get emailInQueueFlowId() {
    return this.getStringAttribute('email_in_queue_flow_id');
  }
  public set emailInQueueFlowId(value: string) {
    this._emailInQueueFlowId = value;
  }
  public resetEmailInQueueFlowId() {
    this._emailInQueueFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInQueueFlowIdInput() {
    return this._emailInQueueFlowId;
  }

  // enable_audio_monitoring - computed: false, optional: true, required: false
  private _enableAudioMonitoring?: boolean | cdktf.IResolvable; 
  public get enableAudioMonitoring() {
    return this.getBooleanAttribute('enable_audio_monitoring');
  }
  public set enableAudioMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableAudioMonitoring = value;
  }
  public resetEnableAudioMonitoring() {
    this._enableAudioMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAudioMonitoringInput() {
    return this._enableAudioMonitoring;
  }

  // enable_manual_assignment - computed: false, optional: true, required: false
  private _enableManualAssignment?: boolean | cdktf.IResolvable; 
  public get enableManualAssignment() {
    return this.getBooleanAttribute('enable_manual_assignment');
  }
  public set enableManualAssignment(value: boolean | cdktf.IResolvable) {
    this._enableManualAssignment = value;
  }
  public resetEnableManualAssignment() {
    this._enableManualAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManualAssignmentInput() {
    return this._enableManualAssignment;
  }

  // enable_transcription - computed: false, optional: true, required: false
  private _enableTranscription?: boolean | cdktf.IResolvable; 
  public get enableTranscription() {
    return this.getBooleanAttribute('enable_transcription');
  }
  public set enableTranscription(value: boolean | cdktf.IResolvable) {
    this._enableTranscription = value;
  }
  public resetEnableTranscription() {
    this._enableTranscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTranscriptionInput() {
    return this._enableTranscription;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // ignore_members - computed: false, optional: true, required: false
  private _ignoreMembers?: boolean | cdktf.IResolvable; 
  public get ignoreMembers() {
    return this.getBooleanAttribute('ignore_members');
  }
  public set ignoreMembers(value: boolean | cdktf.IResolvable) {
    this._ignoreMembers = value;
  }
  public resetIgnoreMembers() {
    this._ignoreMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMembersInput() {
    return this._ignoreMembers;
  }

  // last_agent_routing_mode - computed: true, optional: true, required: false
  private _lastAgentRoutingMode?: string; 
  public get lastAgentRoutingMode() {
    return this.getStringAttribute('last_agent_routing_mode');
  }
  public set lastAgentRoutingMode(value: string) {
    this._lastAgentRoutingMode = value;
  }
  public resetLastAgentRoutingMode() {
    this._lastAgentRoutingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAgentRoutingModeInput() {
    return this._lastAgentRoutingMode;
  }

  // message_in_queue_flow_id - computed: false, optional: true, required: false
  private _messageInQueueFlowId?: string; 
  public get messageInQueueFlowId() {
    return this.getStringAttribute('message_in_queue_flow_id');
  }
  public set messageInQueueFlowId(value: string) {
    this._messageInQueueFlowId = value;
  }
  public resetMessageInQueueFlowId() {
    this._messageInQueueFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInQueueFlowIdInput() {
    return this._messageInQueueFlowId;
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

  // on_hold_prompt_id - computed: false, optional: true, required: false
  private _onHoldPromptId?: string; 
  public get onHoldPromptId() {
    return this.getStringAttribute('on_hold_prompt_id');
  }
  public set onHoldPromptId(value: string) {
    this._onHoldPromptId = value;
  }
  public resetOnHoldPromptId() {
    this._onHoldPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHoldPromptIdInput() {
    return this._onHoldPromptId;
  }

  // outbound_messaging_open_messaging_recipient_id - computed: false, optional: true, required: false
  private _outboundMessagingOpenMessagingRecipientId?: string; 
  public get outboundMessagingOpenMessagingRecipientId() {
    return this.getStringAttribute('outbound_messaging_open_messaging_recipient_id');
  }
  public set outboundMessagingOpenMessagingRecipientId(value: string) {
    this._outboundMessagingOpenMessagingRecipientId = value;
  }
  public resetOutboundMessagingOpenMessagingRecipientId() {
    this._outboundMessagingOpenMessagingRecipientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMessagingOpenMessagingRecipientIdInput() {
    return this._outboundMessagingOpenMessagingRecipientId;
  }

  // outbound_messaging_sms_address_id - computed: false, optional: true, required: false
  private _outboundMessagingSmsAddressId?: string; 
  public get outboundMessagingSmsAddressId() {
    return this.getStringAttribute('outbound_messaging_sms_address_id');
  }
  public set outboundMessagingSmsAddressId(value: string) {
    this._outboundMessagingSmsAddressId = value;
  }
  public resetOutboundMessagingSmsAddressId() {
    this._outboundMessagingSmsAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMessagingSmsAddressIdInput() {
    return this._outboundMessagingSmsAddressId;
  }

  // outbound_messaging_whatsapp_recipient_id - computed: false, optional: true, required: false
  private _outboundMessagingWhatsappRecipientId?: string; 
  public get outboundMessagingWhatsappRecipientId() {
    return this.getStringAttribute('outbound_messaging_whatsapp_recipient_id');
  }
  public set outboundMessagingWhatsappRecipientId(value: string) {
    this._outboundMessagingWhatsappRecipientId = value;
  }
  public resetOutboundMessagingWhatsappRecipientId() {
    this._outboundMessagingWhatsappRecipientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMessagingWhatsappRecipientIdInput() {
    return this._outboundMessagingWhatsappRecipientId;
  }

  // peer_id - computed: false, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // queue_flow_id - computed: false, optional: true, required: false
  private _queueFlowId?: string; 
  public get queueFlowId() {
    return this.getStringAttribute('queue_flow_id');
  }
  public set queueFlowId(value: string) {
    this._queueFlowId = value;
  }
  public resetQueueFlowId() {
    this._queueFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueFlowIdInput() {
    return this._queueFlowId;
  }

  // scoring_method - computed: false, optional: true, required: false
  private _scoringMethod?: string; 
  public get scoringMethod() {
    return this.getStringAttribute('scoring_method');
  }
  public set scoringMethod(value: string) {
    this._scoringMethod = value;
  }
  public resetScoringMethod() {
    this._scoringMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoringMethodInput() {
    return this._scoringMethod;
  }

  // skill_evaluation_method - computed: false, optional: true, required: false
  private _skillEvaluationMethod?: string; 
  public get skillEvaluationMethod() {
    return this.getStringAttribute('skill_evaluation_method');
  }
  public set skillEvaluationMethod(value: string) {
    this._skillEvaluationMethod = value;
  }
  public resetSkillEvaluationMethod() {
    this._skillEvaluationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillEvaluationMethodInput() {
    return this._skillEvaluationMethod;
  }

  // skill_groups - computed: false, optional: true, required: false
  private _skillGroups?: string[]; 
  public get skillGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('skill_groups'));
  }
  public set skillGroups(value: string[]) {
    this._skillGroups = value;
  }
  public resetSkillGroups() {
    this._skillGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillGroupsInput() {
    return this._skillGroups;
  }

  // source_queue_id - computed: false, optional: true, required: false
  private _sourceQueueId?: string; 
  public get sourceQueueId() {
    return this.getStringAttribute('source_queue_id');
  }
  public set sourceQueueId(value: string) {
    this._sourceQueueId = value;
  }
  public resetSourceQueueId() {
    this._sourceQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceQueueIdInput() {
    return this._sourceQueueId;
  }

  // suppress_in_queue_call_recording - computed: false, optional: true, required: false
  private _suppressInQueueCallRecording?: boolean | cdktf.IResolvable; 
  public get suppressInQueueCallRecording() {
    return this.getBooleanAttribute('suppress_in_queue_call_recording');
  }
  public set suppressInQueueCallRecording(value: boolean | cdktf.IResolvable) {
    this._suppressInQueueCallRecording = value;
  }
  public resetSuppressInQueueCallRecording() {
    this._suppressInQueueCallRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInQueueCallRecordingInput() {
    return this._suppressInQueueCallRecording;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // whisper_prompt_id - computed: false, optional: true, required: false
  private _whisperPromptId?: string; 
  public get whisperPromptId() {
    return this.getStringAttribute('whisper_prompt_id');
  }
  public set whisperPromptId(value: string) {
    this._whisperPromptId = value;
  }
  public resetWhisperPromptId() {
    this._whisperPromptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whisperPromptIdInput() {
    return this._whisperPromptId;
  }

  // wrapup_codes - computed: true, optional: true, required: false
  private _wrapupCodes?: string[]; 
  public get wrapupCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('wrapup_codes'));
  }
  public set wrapupCodes(value: string[]) {
    this._wrapupCodes = value;
  }
  public resetWrapupCodes() {
    this._wrapupCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodesInput() {
    return this._wrapupCodes;
  }

  // agent_owned_routing - computed: false, optional: true, required: false
  private _agentOwnedRouting = new RoutingQueueAgentOwnedRoutingOutputReference(this, "agent_owned_routing");
  public get agentOwnedRouting() {
    return this._agentOwnedRouting;
  }
  public putAgentOwnedRouting(value: RoutingQueueAgentOwnedRouting) {
    this._agentOwnedRouting.internalValue = value;
  }
  public resetAgentOwnedRouting() {
    this._agentOwnedRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentOwnedRoutingInput() {
    return this._agentOwnedRouting.internalValue;
  }

  // bullseye_rings - computed: false, optional: true, required: false
  private _bullseyeRings = new RoutingQueueBullseyeRingsList(this, "bullseye_rings", false);
  public get bullseyeRings() {
    return this._bullseyeRings;
  }
  public putBullseyeRings(value: RoutingQueueBullseyeRings[] | cdktf.IResolvable) {
    this._bullseyeRings.internalValue = value;
  }
  public resetBullseyeRings() {
    this._bullseyeRings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bullseyeRingsInput() {
    return this._bullseyeRings.internalValue;
  }

  // canned_response_libraries - computed: false, optional: true, required: false
  private _cannedResponseLibraries = new RoutingQueueCannedResponseLibrariesOutputReference(this, "canned_response_libraries");
  public get cannedResponseLibraries() {
    return this._cannedResponseLibraries;
  }
  public putCannedResponseLibraries(value: RoutingQueueCannedResponseLibraries) {
    this._cannedResponseLibraries.internalValue = value;
  }
  public resetCannedResponseLibraries() {
    this._cannedResponseLibraries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedResponseLibrariesInput() {
    return this._cannedResponseLibraries.internalValue;
  }

  // conditional_group_activation - computed: false, optional: true, required: false
  private _conditionalGroupActivation = new RoutingQueueConditionalGroupActivationOutputReference(this, "conditional_group_activation");
  public get conditionalGroupActivation() {
    return this._conditionalGroupActivation;
  }
  public putConditionalGroupActivation(value: RoutingQueueConditionalGroupActivation) {
    this._conditionalGroupActivation.internalValue = value;
  }
  public resetConditionalGroupActivation() {
    this._conditionalGroupActivation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalGroupActivationInput() {
    return this._conditionalGroupActivation.internalValue;
  }

  // conditional_group_routing_rules - computed: false, optional: true, required: false
  private _conditionalGroupRoutingRules = new RoutingQueueConditionalGroupRoutingRulesList(this, "conditional_group_routing_rules", false);
  public get conditionalGroupRoutingRules() {
    return this._conditionalGroupRoutingRules;
  }
  public putConditionalGroupRoutingRules(value: RoutingQueueConditionalGroupRoutingRules[] | cdktf.IResolvable) {
    this._conditionalGroupRoutingRules.internalValue = value;
  }
  public resetConditionalGroupRoutingRules() {
    this._conditionalGroupRoutingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalGroupRoutingRulesInput() {
    return this._conditionalGroupRoutingRules.internalValue;
  }

  // direct_routing - computed: false, optional: true, required: false
  private _directRouting = new RoutingQueueDirectRoutingOutputReference(this, "direct_routing");
  public get directRouting() {
    return this._directRouting;
  }
  public putDirectRouting(value: RoutingQueueDirectRouting) {
    this._directRouting.internalValue = value;
  }
  public resetDirectRouting() {
    this._directRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRoutingInput() {
    return this._directRouting.internalValue;
  }

  // media_settings_call - computed: false, optional: true, required: false
  private _mediaSettingsCall = new RoutingQueueMediaSettingsCallOutputReference(this, "media_settings_call");
  public get mediaSettingsCall() {
    return this._mediaSettingsCall;
  }
  public putMediaSettingsCall(value: RoutingQueueMediaSettingsCall) {
    this._mediaSettingsCall.internalValue = value;
  }
  public resetMediaSettingsCall() {
    this._mediaSettingsCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSettingsCallInput() {
    return this._mediaSettingsCall.internalValue;
  }

  // media_settings_callback - computed: false, optional: true, required: false
  private _mediaSettingsCallback = new RoutingQueueMediaSettingsCallbackOutputReference(this, "media_settings_callback");
  public get mediaSettingsCallback() {
    return this._mediaSettingsCallback;
  }
  public putMediaSettingsCallback(value: RoutingQueueMediaSettingsCallback) {
    this._mediaSettingsCallback.internalValue = value;
  }
  public resetMediaSettingsCallback() {
    this._mediaSettingsCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSettingsCallbackInput() {
    return this._mediaSettingsCallback.internalValue;
  }

  // media_settings_chat - computed: false, optional: true, required: false
  private _mediaSettingsChat = new RoutingQueueMediaSettingsChatOutputReference(this, "media_settings_chat");
  public get mediaSettingsChat() {
    return this._mediaSettingsChat;
  }
  public putMediaSettingsChat(value: RoutingQueueMediaSettingsChat) {
    this._mediaSettingsChat.internalValue = value;
  }
  public resetMediaSettingsChat() {
    this._mediaSettingsChat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSettingsChatInput() {
    return this._mediaSettingsChat.internalValue;
  }

  // media_settings_email - computed: false, optional: true, required: false
  private _mediaSettingsEmail = new RoutingQueueMediaSettingsEmailOutputReference(this, "media_settings_email");
  public get mediaSettingsEmail() {
    return this._mediaSettingsEmail;
  }
  public putMediaSettingsEmail(value: RoutingQueueMediaSettingsEmail) {
    this._mediaSettingsEmail.internalValue = value;
  }
  public resetMediaSettingsEmail() {
    this._mediaSettingsEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSettingsEmailInput() {
    return this._mediaSettingsEmail.internalValue;
  }

  // media_settings_message - computed: false, optional: true, required: false
  private _mediaSettingsMessage = new RoutingQueueMediaSettingsMessageOutputReference(this, "media_settings_message");
  public get mediaSettingsMessage() {
    return this._mediaSettingsMessage;
  }
  public putMediaSettingsMessage(value: RoutingQueueMediaSettingsMessage) {
    this._mediaSettingsMessage.internalValue = value;
  }
  public resetMediaSettingsMessage() {
    this._mediaSettingsMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSettingsMessageInput() {
    return this._mediaSettingsMessage.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new RoutingQueueMembersList(this, "members", true);
  public get members() {
    return this._members;
  }
  public putMembers(value: RoutingQueueMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // outbound_email_address - computed: false, optional: true, required: false
  private _outboundEmailAddress = new RoutingQueueOutboundEmailAddressOutputReference(this, "outbound_email_address");
  public get outboundEmailAddress() {
    return this._outboundEmailAddress;
  }
  public putOutboundEmailAddress(value: RoutingQueueOutboundEmailAddress) {
    this._outboundEmailAddress.internalValue = value;
  }
  public resetOutboundEmailAddress() {
    this._outboundEmailAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundEmailAddressInput() {
    return this._outboundEmailAddress.internalValue;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules = new RoutingQueueRoutingRulesList(this, "routing_rules", false);
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: RoutingQueueRoutingRules[] | cdktf.IResolvable) {
    this._routingRules.internalValue = value;
  }
  public resetRoutingRules() {
    this._routingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acw_timeout_ms: cdktf.numberToTerraform(this._acwTimeoutMs),
      acw_wrapup_prompt: cdktf.stringToTerraform(this._acwWrapupPrompt),
      auto_answer_only: cdktf.booleanToTerraform(this._autoAnswerOnly),
      calling_party_name: cdktf.stringToTerraform(this._callingPartyName),
      calling_party_number: cdktf.stringToTerraform(this._callingPartyNumber),
      default_script_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultScriptIds),
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      email_in_queue_flow_id: cdktf.stringToTerraform(this._emailInQueueFlowId),
      enable_audio_monitoring: cdktf.booleanToTerraform(this._enableAudioMonitoring),
      enable_manual_assignment: cdktf.booleanToTerraform(this._enableManualAssignment),
      enable_transcription: cdktf.booleanToTerraform(this._enableTranscription),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      ignore_members: cdktf.booleanToTerraform(this._ignoreMembers),
      last_agent_routing_mode: cdktf.stringToTerraform(this._lastAgentRoutingMode),
      message_in_queue_flow_id: cdktf.stringToTerraform(this._messageInQueueFlowId),
      name: cdktf.stringToTerraform(this._name),
      on_hold_prompt_id: cdktf.stringToTerraform(this._onHoldPromptId),
      outbound_messaging_open_messaging_recipient_id: cdktf.stringToTerraform(this._outboundMessagingOpenMessagingRecipientId),
      outbound_messaging_sms_address_id: cdktf.stringToTerraform(this._outboundMessagingSmsAddressId),
      outbound_messaging_whatsapp_recipient_id: cdktf.stringToTerraform(this._outboundMessagingWhatsappRecipientId),
      peer_id: cdktf.stringToTerraform(this._peerId),
      queue_flow_id: cdktf.stringToTerraform(this._queueFlowId),
      scoring_method: cdktf.stringToTerraform(this._scoringMethod),
      skill_evaluation_method: cdktf.stringToTerraform(this._skillEvaluationMethod),
      skill_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skillGroups),
      source_queue_id: cdktf.stringToTerraform(this._sourceQueueId),
      suppress_in_queue_call_recording: cdktf.booleanToTerraform(this._suppressInQueueCallRecording),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      whisper_prompt_id: cdktf.stringToTerraform(this._whisperPromptId),
      wrapup_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wrapupCodes),
      agent_owned_routing: routingQueueAgentOwnedRoutingToTerraform(this._agentOwnedRouting.internalValue),
      bullseye_rings: cdktf.listMapper(routingQueueBullseyeRingsToTerraform, true)(this._bullseyeRings.internalValue),
      canned_response_libraries: routingQueueCannedResponseLibrariesToTerraform(this._cannedResponseLibraries.internalValue),
      conditional_group_activation: routingQueueConditionalGroupActivationToTerraform(this._conditionalGroupActivation.internalValue),
      conditional_group_routing_rules: cdktf.listMapper(routingQueueConditionalGroupRoutingRulesToTerraform, true)(this._conditionalGroupRoutingRules.internalValue),
      direct_routing: routingQueueDirectRoutingToTerraform(this._directRouting.internalValue),
      media_settings_call: routingQueueMediaSettingsCallToTerraform(this._mediaSettingsCall.internalValue),
      media_settings_callback: routingQueueMediaSettingsCallbackToTerraform(this._mediaSettingsCallback.internalValue),
      media_settings_chat: routingQueueMediaSettingsChatToTerraform(this._mediaSettingsChat.internalValue),
      media_settings_email: routingQueueMediaSettingsEmailToTerraform(this._mediaSettingsEmail.internalValue),
      media_settings_message: routingQueueMediaSettingsMessageToTerraform(this._mediaSettingsMessage.internalValue),
      members: cdktf.listMapper(routingQueueMembersToTerraform, true)(this._members.internalValue),
      outbound_email_address: routingQueueOutboundEmailAddressToTerraform(this._outboundEmailAddress.internalValue),
      routing_rules: cdktf.listMapper(routingQueueRoutingRulesToTerraform, true)(this._routingRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acw_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._acwTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acw_wrapup_prompt: {
        value: cdktf.stringToHclTerraform(this._acwWrapupPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_answer_only: {
        value: cdktf.booleanToHclTerraform(this._autoAnswerOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      calling_party_name: {
        value: cdktf.stringToHclTerraform(this._callingPartyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calling_party_number: {
        value: cdktf.stringToHclTerraform(this._callingPartyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_script_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultScriptIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_in_queue_flow_id: {
        value: cdktf.stringToHclTerraform(this._emailInQueueFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_audio_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enableAudioMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_manual_assignment: {
        value: cdktf.booleanToHclTerraform(this._enableManualAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_transcription: {
        value: cdktf.booleanToHclTerraform(this._enableTranscription),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_members: {
        value: cdktf.booleanToHclTerraform(this._ignoreMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_agent_routing_mode: {
        value: cdktf.stringToHclTerraform(this._lastAgentRoutingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_in_queue_flow_id: {
        value: cdktf.stringToHclTerraform(this._messageInQueueFlowId),
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
      on_hold_prompt_id: {
        value: cdktf.stringToHclTerraform(this._onHoldPromptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_messaging_open_messaging_recipient_id: {
        value: cdktf.stringToHclTerraform(this._outboundMessagingOpenMessagingRecipientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_messaging_sms_address_id: {
        value: cdktf.stringToHclTerraform(this._outboundMessagingSmsAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_messaging_whatsapp_recipient_id: {
        value: cdktf.stringToHclTerraform(this._outboundMessagingWhatsappRecipientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_id: {
        value: cdktf.stringToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_flow_id: {
        value: cdktf.stringToHclTerraform(this._queueFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scoring_method: {
        value: cdktf.stringToHclTerraform(this._scoringMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skill_evaluation_method: {
        value: cdktf.stringToHclTerraform(this._skillEvaluationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skill_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skillGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_queue_id: {
        value: cdktf.stringToHclTerraform(this._sourceQueueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_in_queue_call_recording: {
        value: cdktf.booleanToHclTerraform(this._suppressInQueueCallRecording),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      whisper_prompt_id: {
        value: cdktf.stringToHclTerraform(this._whisperPromptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrapup_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wrapupCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agent_owned_routing: {
        value: routingQueueAgentOwnedRoutingToHclTerraform(this._agentOwnedRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueAgentOwnedRoutingList",
      },
      bullseye_rings: {
        value: cdktf.listMapperHcl(routingQueueBullseyeRingsToHclTerraform, true)(this._bullseyeRings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueBullseyeRingsList",
      },
      canned_response_libraries: {
        value: routingQueueCannedResponseLibrariesToHclTerraform(this._cannedResponseLibraries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueCannedResponseLibrariesList",
      },
      conditional_group_activation: {
        value: routingQueueConditionalGroupActivationToHclTerraform(this._conditionalGroupActivation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueConditionalGroupActivationList",
      },
      conditional_group_routing_rules: {
        value: cdktf.listMapperHcl(routingQueueConditionalGroupRoutingRulesToHclTerraform, true)(this._conditionalGroupRoutingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueConditionalGroupRoutingRulesList",
      },
      direct_routing: {
        value: routingQueueDirectRoutingToHclTerraform(this._directRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueDirectRoutingList",
      },
      media_settings_call: {
        value: routingQueueMediaSettingsCallToHclTerraform(this._mediaSettingsCall.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueMediaSettingsCallList",
      },
      media_settings_callback: {
        value: routingQueueMediaSettingsCallbackToHclTerraform(this._mediaSettingsCallback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueMediaSettingsCallbackList",
      },
      media_settings_chat: {
        value: routingQueueMediaSettingsChatToHclTerraform(this._mediaSettingsChat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueMediaSettingsChatList",
      },
      media_settings_email: {
        value: routingQueueMediaSettingsEmailToHclTerraform(this._mediaSettingsEmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueMediaSettingsEmailList",
      },
      media_settings_message: {
        value: routingQueueMediaSettingsMessageToHclTerraform(this._mediaSettingsMessage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueMediaSettingsMessageList",
      },
      members: {
        value: cdktf.listMapperHcl(routingQueueMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoutingQueueMembersList",
      },
      outbound_email_address: {
        value: routingQueueOutboundEmailAddressToHclTerraform(this._outboundEmailAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueOutboundEmailAddressList",
      },
      routing_rules: {
        value: cdktf.listMapperHcl(routingQueueRoutingRulesToHclTerraform, true)(this._routingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingQueueRoutingRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
