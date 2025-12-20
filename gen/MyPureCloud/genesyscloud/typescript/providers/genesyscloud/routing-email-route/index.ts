// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingEmailRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Control if multiple actions are allowed on this route. When true the disconnect has to be done manually. When false a conversation will be disconnected by the system after every action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#allow_multiple_actions RoutingEmailRoute#allow_multiple_actions}
  */
  readonly allowMultipleActions?: boolean | cdktf.IResolvable;
  /**
  * ID of the routing domain such as: 'example.com'. Changing the domain_id attribute will cause the email_route object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#domain_id RoutingEmailRoute#domain_id}
  */
  readonly domainId: string;
  /**
  * The flow to use for processing the email. This should not be set if a queue_id is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#flow_id RoutingEmailRoute#flow_id}
  */
  readonly flowId?: string;
  /**
  * The sender email to use for outgoing replies. This should not be set if reply_email_address is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#from_email RoutingEmailRoute#from_email}
  */
  readonly fromEmail?: string;
  /**
  * The sender name to use for outgoing replies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#from_name RoutingEmailRoute#from_name}
  */
  readonly fromName: string;
  /**
  * The configuration to indicate how the history of a conversation has to be included in a draft. Defaults to `Optional`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#history_inclusion RoutingEmailRoute#history_inclusion}
  */
  readonly historyInclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#id RoutingEmailRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The language to use for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#language_id RoutingEmailRoute#language_id}
  */
  readonly languageId?: string;
  /**
  * The search pattern that the mailbox name should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#pattern RoutingEmailRoute#pattern}
  */
  readonly pattern: string;
  /**
  * The priority to use for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#priority RoutingEmailRoute#priority}
  */
  readonly priority?: number;
  /**
  * The queue to route the emails to. This should not be set if a flow_id is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#queue_id RoutingEmailRoute#queue_id}
  */
  readonly queueId?: string;
  /**
  * The skills to use for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#skill_ids RoutingEmailRoute#skill_ids}
  */
  readonly skillIds?: string[];
  /**
  * The flow to use for processing inbound emails that have been marked as spam.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#spam_flow_id RoutingEmailRoute#spam_flow_id}
  */
  readonly spamFlowId?: string;
  /**
  * auto_bcc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#auto_bcc RoutingEmailRoute#auto_bcc}
  */
  readonly autoBcc?: RoutingEmailRouteAutoBcc[] | cdktf.IResolvable;
  /**
  * reply_email_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#reply_email_address RoutingEmailRoute#reply_email_address}
  */
  readonly replyEmailAddress?: RoutingEmailRouteReplyEmailAddress;
}
export interface RoutingEmailRouteAutoBcc {
  /**
  * Email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#email RoutingEmailRoute#email}
  */
  readonly email: string;
  /**
  * Name associated with the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#name RoutingEmailRoute#name}
  */
  readonly name?: string;
}

export function routingEmailRouteAutoBccToTerraform(struct?: RoutingEmailRouteAutoBcc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routingEmailRouteAutoBccToHclTerraform(struct?: RoutingEmailRouteAutoBcc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class RoutingEmailRouteAutoBccOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingEmailRouteAutoBcc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingEmailRouteAutoBcc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

export class RoutingEmailRouteAutoBccList extends cdktf.ComplexList {
  public internalValue? : RoutingEmailRouteAutoBcc[] | cdktf.IResolvable

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
  public get(index: number): RoutingEmailRouteAutoBccOutputReference {
    return new RoutingEmailRouteAutoBccOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingEmailRouteReplyEmailAddress {
  /**
  * Domain of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#domain_id RoutingEmailRoute#domain_id}
  */
  readonly domainId?: string;
  /**
  * ID of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#route_id RoutingEmailRoute#route_id}
  */
  readonly routeId?: string;
  /**
  * Use this route as the reply email address. If true you will use the route id for this resource as the reply and you
  * 							              can not set a route. If you set this value to false (or leave the attribute off) you must set a route id and matching domain. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#self_reference_route RoutingEmailRoute#self_reference_route}
  */
  readonly selfReferenceRoute?: boolean | cdktf.IResolvable;
}

export function routingEmailRouteReplyEmailAddressToTerraform(struct?: RoutingEmailRouteReplyEmailAddressOutputReference | RoutingEmailRouteReplyEmailAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    route_id: cdktf.stringToTerraform(struct!.routeId),
    self_reference_route: cdktf.booleanToTerraform(struct!.selfReferenceRoute),
  }
}


export function routingEmailRouteReplyEmailAddressToHclTerraform(struct?: RoutingEmailRouteReplyEmailAddressOutputReference | RoutingEmailRouteReplyEmailAddress): any {
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
    self_reference_route: {
      value: cdktf.booleanToHclTerraform(struct!.selfReferenceRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingEmailRouteReplyEmailAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingEmailRouteReplyEmailAddress | undefined {
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
    if (this._selfReferenceRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfReferenceRoute = this._selfReferenceRoute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingEmailRouteReplyEmailAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainId = undefined;
      this._routeId = undefined;
      this._selfReferenceRoute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainId = value.domainId;
      this._routeId = value.routeId;
      this._selfReferenceRoute = value.selfReferenceRoute;
    }
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // route_id - computed: false, optional: true, required: false
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  public resetRouteId() {
    this._routeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // self_reference_route - computed: false, optional: true, required: false
  private _selfReferenceRoute?: boolean | cdktf.IResolvable; 
  public get selfReferenceRoute() {
    return this.getBooleanAttribute('self_reference_route');
  }
  public set selfReferenceRoute(value: boolean | cdktf.IResolvable) {
    this._selfReferenceRoute = value;
  }
  public resetSelfReferenceRoute() {
    this._selfReferenceRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfReferenceRouteInput() {
    return this._selfReferenceRoute;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route genesyscloud_routing_email_route}
*/
export class RoutingEmailRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_email_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingEmailRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingEmailRoute to import
  * @param importFromId The id of the existing RoutingEmailRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingEmailRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_email_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_route genesyscloud_routing_email_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingEmailRouteConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingEmailRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_email_route',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMultipleActions = config.allowMultipleActions;
    this._domainId = config.domainId;
    this._flowId = config.flowId;
    this._fromEmail = config.fromEmail;
    this._fromName = config.fromName;
    this._historyInclusion = config.historyInclusion;
    this._id = config.id;
    this._languageId = config.languageId;
    this._pattern = config.pattern;
    this._priority = config.priority;
    this._queueId = config.queueId;
    this._skillIds = config.skillIds;
    this._spamFlowId = config.spamFlowId;
    this._autoBcc.internalValue = config.autoBcc;
    this._replyEmailAddress.internalValue = config.replyEmailAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_multiple_actions - computed: false, optional: true, required: false
  private _allowMultipleActions?: boolean | cdktf.IResolvable; 
  public get allowMultipleActions() {
    return this.getBooleanAttribute('allow_multiple_actions');
  }
  public set allowMultipleActions(value: boolean | cdktf.IResolvable) {
    this._allowMultipleActions = value;
  }
  public resetAllowMultipleActions() {
    this._allowMultipleActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleActionsInput() {
    return this._allowMultipleActions;
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

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // from_email - computed: false, optional: true, required: false
  private _fromEmail?: string; 
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }
  public set fromEmail(value: string) {
    this._fromEmail = value;
  }
  public resetFromEmail() {
    this._fromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailInput() {
    return this._fromEmail;
  }

  // from_name - computed: false, optional: false, required: true
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // history_inclusion - computed: false, optional: true, required: false
  private _historyInclusion?: string; 
  public get historyInclusion() {
    return this.getStringAttribute('history_inclusion');
  }
  public set historyInclusion(value: string) {
    this._historyInclusion = value;
  }
  public resetHistoryInclusion() {
    this._historyInclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInclusionInput() {
    return this._historyInclusion;
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

  // language_id - computed: false, optional: true, required: false
  private _languageId?: string; 
  public get languageId() {
    return this.getStringAttribute('language_id');
  }
  public set languageId(value: string) {
    this._languageId = value;
  }
  public resetLanguageId() {
    this._languageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdInput() {
    return this._languageId;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // priority - computed: false, optional: true, required: false
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

  // skill_ids - computed: false, optional: true, required: false
  private _skillIds?: string[]; 
  public get skillIds() {
    return cdktf.Fn.tolist(this.getListAttribute('skill_ids'));
  }
  public set skillIds(value: string[]) {
    this._skillIds = value;
  }
  public resetSkillIds() {
    this._skillIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillIdsInput() {
    return this._skillIds;
  }

  // spam_flow_id - computed: false, optional: true, required: false
  private _spamFlowId?: string; 
  public get spamFlowId() {
    return this.getStringAttribute('spam_flow_id');
  }
  public set spamFlowId(value: string) {
    this._spamFlowId = value;
  }
  public resetSpamFlowId() {
    this._spamFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamFlowIdInput() {
    return this._spamFlowId;
  }

  // auto_bcc - computed: false, optional: true, required: false
  private _autoBcc = new RoutingEmailRouteAutoBccList(this, "auto_bcc", true);
  public get autoBcc() {
    return this._autoBcc;
  }
  public putAutoBcc(value: RoutingEmailRouteAutoBcc[] | cdktf.IResolvable) {
    this._autoBcc.internalValue = value;
  }
  public resetAutoBcc() {
    this._autoBcc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBccInput() {
    return this._autoBcc.internalValue;
  }

  // reply_email_address - computed: false, optional: true, required: false
  private _replyEmailAddress = new RoutingEmailRouteReplyEmailAddressOutputReference(this, "reply_email_address");
  public get replyEmailAddress() {
    return this._replyEmailAddress;
  }
  public putReplyEmailAddress(value: RoutingEmailRouteReplyEmailAddress) {
    this._replyEmailAddress.internalValue = value;
  }
  public resetReplyEmailAddress() {
    this._replyEmailAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyEmailAddressInput() {
    return this._replyEmailAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_multiple_actions: cdktf.booleanToTerraform(this._allowMultipleActions),
      domain_id: cdktf.stringToTerraform(this._domainId),
      flow_id: cdktf.stringToTerraform(this._flowId),
      from_email: cdktf.stringToTerraform(this._fromEmail),
      from_name: cdktf.stringToTerraform(this._fromName),
      history_inclusion: cdktf.stringToTerraform(this._historyInclusion),
      id: cdktf.stringToTerraform(this._id),
      language_id: cdktf.stringToTerraform(this._languageId),
      pattern: cdktf.stringToTerraform(this._pattern),
      priority: cdktf.numberToTerraform(this._priority),
      queue_id: cdktf.stringToTerraform(this._queueId),
      skill_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skillIds),
      spam_flow_id: cdktf.stringToTerraform(this._spamFlowId),
      auto_bcc: cdktf.listMapper(routingEmailRouteAutoBccToTerraform, true)(this._autoBcc.internalValue),
      reply_email_address: routingEmailRouteReplyEmailAddressToTerraform(this._replyEmailAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_multiple_actions: {
        value: cdktf.booleanToHclTerraform(this._allowMultipleActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_email: {
        value: cdktf.stringToHclTerraform(this._fromEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_name: {
        value: cdktf.stringToHclTerraform(this._fromName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history_inclusion: {
        value: cdktf.stringToHclTerraform(this._historyInclusion),
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
      language_id: {
        value: cdktf.stringToHclTerraform(this._languageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skill_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skillIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spam_flow_id: {
        value: cdktf.stringToHclTerraform(this._spamFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_bcc: {
        value: cdktf.listMapperHcl(routingEmailRouteAutoBccToHclTerraform, true)(this._autoBcc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoutingEmailRouteAutoBccList",
      },
      reply_email_address: {
        value: routingEmailRouteReplyEmailAddressToHclTerraform(this._replyEmailAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingEmailRouteReplyEmailAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
