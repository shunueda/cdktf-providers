// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeEmailIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should an incident be acknowledged for all emails, those satisfying all acknowledged_rules, or those satisfying any of them. Valid values are unused, all, or any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#acknowledged_rule_type BetteruptimeEmailIntegration#acknowledged_rule_type}
  */
  readonly acknowledgedRuleType: string;
  /**
  * Whether to call when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#call BetteruptimeEmailIntegration#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Whether to send a critical push notification that ignores the mute switch and Do not Disturb mode when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#critical_alert BetteruptimeEmailIntegration#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Whether to send an email when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#email BetteruptimeEmailIntegration#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * The name of this Email integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * Set to true to pause monitoring - we won't notify you about downtime. Set to false to resume monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#paused BetteruptimeEmailIntegration#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * ID of the escalation policy associated with the email integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#policy_id BetteruptimeEmailIntegration#policy_id}
  */
  readonly policyId?: string;
  /**
  * Whether to send a push notification when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#push BetteruptimeEmailIntegration#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * How long the integration must be up to automatically mark an incident as resolved after being down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#recovery_period BetteruptimeEmailIntegration#recovery_period}
  */
  readonly recoveryPeriod?: number;
  /**
  * Should an incident be resolved for all emails, those satisfying all resolved_rules, or those satisfying any of them. Valid values are unused, all, or any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#resolved_rule_type BetteruptimeEmailIntegration#resolved_rule_type}
  */
  readonly resolvedRuleType: string;
  /**
  * Whether to send an SMS when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#sms BetteruptimeEmailIntegration#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Should an incident be started for all emails, those satisfying all started_rules, or those satisfying any of them. Valid values are unused, all, or any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#started_rule_type BetteruptimeEmailIntegration#started_rule_type}
  */
  readonly startedRuleType: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#team_name BetteruptimeEmailIntegration#team_name}
  */
  readonly teamName?: string;
  /**
  * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#team_wait BetteruptimeEmailIntegration#team_wait}
  */
  readonly teamWait?: number;
  /**
  * acknowledged_alert_id_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#acknowledged_alert_id_field BetteruptimeEmailIntegration#acknowledged_alert_id_field}
  */
  readonly acknowledgedAlertIdField?: BetteruptimeEmailIntegrationAcknowledgedAlertIdField;
  /**
  * acknowledged_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#acknowledged_rules BetteruptimeEmailIntegration#acknowledged_rules}
  */
  readonly acknowledgedRules?: BetteruptimeEmailIntegrationAcknowledgedRules[] | cdktf.IResolvable;
  /**
  * cause_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#cause_field BetteruptimeEmailIntegration#cause_field}
  */
  readonly causeField?: BetteruptimeEmailIntegrationCauseField;
  /**
  * other_acknowledged_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#other_acknowledged_fields BetteruptimeEmailIntegration#other_acknowledged_fields}
  */
  readonly otherAcknowledgedFields?: BetteruptimeEmailIntegrationOtherAcknowledgedFields[] | cdktf.IResolvable;
  /**
  * other_resolved_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#other_resolved_fields BetteruptimeEmailIntegration#other_resolved_fields}
  */
  readonly otherResolvedFields?: BetteruptimeEmailIntegrationOtherResolvedFields[] | cdktf.IResolvable;
  /**
  * other_started_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#other_started_fields BetteruptimeEmailIntegration#other_started_fields}
  */
  readonly otherStartedFields?: BetteruptimeEmailIntegrationOtherStartedFields[] | cdktf.IResolvable;
  /**
  * resolved_alert_id_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#resolved_alert_id_field BetteruptimeEmailIntegration#resolved_alert_id_field}
  */
  readonly resolvedAlertIdField?: BetteruptimeEmailIntegrationResolvedAlertIdField;
  /**
  * resolved_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#resolved_rules BetteruptimeEmailIntegration#resolved_rules}
  */
  readonly resolvedRules?: BetteruptimeEmailIntegrationResolvedRules[] | cdktf.IResolvable;
  /**
  * started_alert_id_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#started_alert_id_field BetteruptimeEmailIntegration#started_alert_id_field}
  */
  readonly startedAlertIdField?: BetteruptimeEmailIntegrationStartedAlertIdField;
  /**
  * started_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#started_rules BetteruptimeEmailIntegration#started_rules}
  */
  readonly startedRules?: BetteruptimeEmailIntegrationStartedRules[] | cdktf.IResolvable;
}
export interface BetteruptimeEmailIntegrationAcknowledgedAlertIdField {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationAcknowledgedAlertIdFieldToTerraform(struct?: BetteruptimeEmailIntegrationAcknowledgedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationAcknowledgedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationAcknowledgedAlertIdFieldToHclTerraform(struct?: BetteruptimeEmailIntegrationAcknowledgedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationAcknowledgedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationAcknowledgedAlertIdFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeEmailIntegrationAcknowledgedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationAcknowledgedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface BetteruptimeEmailIntegrationAcknowledgedRules {
  /**
  * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#rule_target BetteruptimeEmailIntegration#rule_target}
  */
  readonly ruleTarget?: string;
  /**
  * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationAcknowledgedRulesToTerraform(struct?: BetteruptimeEmailIntegrationAcknowledgedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    rule_target: cdktf.stringToTerraform(struct!.ruleTarget),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationAcknowledgedRulesToHclTerraform(struct?: BetteruptimeEmailIntegrationAcknowledgedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_target: {
      value: cdktf.stringToHclTerraform(struct!.ruleTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationAcknowledgedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationAcknowledgedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._ruleTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTarget = this._ruleTarget;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationAcknowledgedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._matchType = undefined;
      this._ruleTarget = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._matchType = value.matchType;
      this._ruleTarget = value.ruleTarget;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // rule_target - computed: true, optional: true, required: false
  private _ruleTarget?: string; 
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }
  public set ruleTarget(value: string) {
    this._ruleTarget = value;
  }
  public resetRuleTarget() {
    this._ruleTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTargetInput() {
    return this._ruleTarget;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationAcknowledgedRulesList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationAcknowledgedRules[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationAcknowledgedRulesOutputReference {
    return new BetteruptimeEmailIntegrationAcknowledgedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeEmailIntegrationCauseField {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationCauseFieldToTerraform(struct?: BetteruptimeEmailIntegrationCauseFieldOutputReference | BetteruptimeEmailIntegrationCauseField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationCauseFieldToHclTerraform(struct?: BetteruptimeEmailIntegrationCauseFieldOutputReference | BetteruptimeEmailIntegrationCauseField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationCauseFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeEmailIntegrationCauseField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationCauseField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface BetteruptimeEmailIntegrationOtherAcknowledgedFields {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationOtherAcknowledgedFieldsToTerraform(struct?: BetteruptimeEmailIntegrationOtherAcknowledgedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationOtherAcknowledgedFieldsToHclTerraform(struct?: BetteruptimeEmailIntegrationOtherAcknowledgedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationOtherAcknowledgedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationOtherAcknowledgedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationOtherAcknowledgedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationOtherAcknowledgedFieldsList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationOtherAcknowledgedFields[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationOtherAcknowledgedFieldsOutputReference {
    return new BetteruptimeEmailIntegrationOtherAcknowledgedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeEmailIntegrationOtherResolvedFields {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationOtherResolvedFieldsToTerraform(struct?: BetteruptimeEmailIntegrationOtherResolvedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationOtherResolvedFieldsToHclTerraform(struct?: BetteruptimeEmailIntegrationOtherResolvedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationOtherResolvedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationOtherResolvedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationOtherResolvedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationOtherResolvedFieldsList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationOtherResolvedFields[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationOtherResolvedFieldsOutputReference {
    return new BetteruptimeEmailIntegrationOtherResolvedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeEmailIntegrationOtherStartedFields {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationOtherStartedFieldsToTerraform(struct?: BetteruptimeEmailIntegrationOtherStartedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationOtherStartedFieldsToHclTerraform(struct?: BetteruptimeEmailIntegrationOtherStartedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationOtherStartedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationOtherStartedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationOtherStartedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationOtherStartedFieldsList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationOtherStartedFields[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationOtherStartedFieldsOutputReference {
    return new BetteruptimeEmailIntegrationOtherStartedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeEmailIntegrationResolvedAlertIdField {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationResolvedAlertIdFieldToTerraform(struct?: BetteruptimeEmailIntegrationResolvedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationResolvedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationResolvedAlertIdFieldToHclTerraform(struct?: BetteruptimeEmailIntegrationResolvedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationResolvedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationResolvedAlertIdFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeEmailIntegrationResolvedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationResolvedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface BetteruptimeEmailIntegrationResolvedRules {
  /**
  * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#rule_target BetteruptimeEmailIntegration#rule_target}
  */
  readonly ruleTarget?: string;
  /**
  * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationResolvedRulesToTerraform(struct?: BetteruptimeEmailIntegrationResolvedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    rule_target: cdktf.stringToTerraform(struct!.ruleTarget),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationResolvedRulesToHclTerraform(struct?: BetteruptimeEmailIntegrationResolvedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_target: {
      value: cdktf.stringToHclTerraform(struct!.ruleTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationResolvedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationResolvedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._ruleTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTarget = this._ruleTarget;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationResolvedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._matchType = undefined;
      this._ruleTarget = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._matchType = value.matchType;
      this._ruleTarget = value.ruleTarget;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // rule_target - computed: true, optional: true, required: false
  private _ruleTarget?: string; 
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }
  public set ruleTarget(value: string) {
    this._ruleTarget = value;
  }
  public resetRuleTarget() {
    this._ruleTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTargetInput() {
    return this._ruleTarget;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationResolvedRulesList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationResolvedRules[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationResolvedRulesOutputReference {
    return new BetteruptimeEmailIntegrationResolvedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeEmailIntegrationStartedAlertIdField {
  /**
  * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_after BetteruptimeEmailIntegration#content_after}
  */
  readonly contentAfter?: string;
  /**
  * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content_before BetteruptimeEmailIntegration#content_before}
  */
  readonly contentBefore?: string;
  /**
  * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#field_target BetteruptimeEmailIntegration#field_target}
  */
  readonly fieldTarget?: string;
  /**
  * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#name BetteruptimeEmailIntegration#name}
  */
  readonly name?: string;
  /**
  * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#special_type BetteruptimeEmailIntegration#special_type}
  */
  readonly specialType?: string;
  /**
  * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationStartedAlertIdFieldToTerraform(struct?: BetteruptimeEmailIntegrationStartedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationStartedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_after: cdktf.stringToTerraform(struct!.contentAfter),
    content_before: cdktf.stringToTerraform(struct!.contentBefore),
    field_target: cdktf.stringToTerraform(struct!.fieldTarget),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationStartedAlertIdFieldToHclTerraform(struct?: BetteruptimeEmailIntegrationStartedAlertIdFieldOutputReference | BetteruptimeEmailIntegrationStartedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_after: {
      value: cdktf.stringToHclTerraform(struct!.contentAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_before: {
      value: cdktf.stringToHclTerraform(struct!.contentBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_target: {
      value: cdktf.stringToHclTerraform(struct!.fieldTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationStartedAlertIdFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeEmailIntegrationStartedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAfter = this._contentAfter;
    }
    if (this._contentBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBefore = this._contentBefore;
    }
    if (this._fieldTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTarget = this._fieldTarget;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationStartedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentAfter = undefined;
      this._contentBefore = undefined;
      this._fieldTarget = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._specialType = undefined;
      this._targetField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentAfter = value.contentAfter;
      this._contentBefore = value.contentBefore;
      this._fieldTarget = value.fieldTarget;
      this._matchType = value.matchType;
      this._name = value.name;
      this._specialType = value.specialType;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_after - computed: true, optional: true, required: false
  private _contentAfter?: string; 
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }
  public set contentAfter(value: string) {
    this._contentAfter = value;
  }
  public resetContentAfter() {
    this._contentAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAfterInput() {
    return this._contentAfter;
  }

  // content_before - computed: true, optional: true, required: false
  private _contentBefore?: string; 
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }
  public set contentBefore(value: string) {
    this._contentBefore = value;
  }
  public resetContentBefore() {
    this._contentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBeforeInput() {
    return this._contentBefore;
  }

  // field_target - computed: true, optional: true, required: false
  private _fieldTarget?: string; 
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }
  public set fieldTarget(value: string) {
    this._fieldTarget = value;
  }
  public resetFieldTarget() {
    this._fieldTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTargetInput() {
    return this._fieldTarget;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // special_type - computed: true, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface BetteruptimeEmailIntegrationStartedRules {
  /**
  * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#content BetteruptimeEmailIntegration#content}
  */
  readonly content?: string;
  /**
  * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#match_type BetteruptimeEmailIntegration#match_type}
  */
  readonly matchType?: string;
  /**
  * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#rule_target BetteruptimeEmailIntegration#rule_target}
  */
  readonly ruleTarget?: string;
  /**
  * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#target_field BetteruptimeEmailIntegration#target_field}
  */
  readonly targetField?: string;
}

export function betteruptimeEmailIntegrationStartedRulesToTerraform(struct?: BetteruptimeEmailIntegrationStartedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    rule_target: cdktf.stringToTerraform(struct!.ruleTarget),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function betteruptimeEmailIntegrationStartedRulesToHclTerraform(struct?: BetteruptimeEmailIntegrationStartedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_target: {
      value: cdktf.stringToHclTerraform(struct!.ruleTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeEmailIntegrationStartedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeEmailIntegrationStartedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._ruleTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTarget = this._ruleTarget;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeEmailIntegrationStartedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._matchType = undefined;
      this._ruleTarget = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._matchType = value.matchType;
      this._ruleTarget = value.ruleTarget;
      this._targetField = value.targetField;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // rule_target - computed: true, optional: true, required: false
  private _ruleTarget?: string; 
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }
  public set ruleTarget(value: string) {
    this._ruleTarget = value;
  }
  public resetRuleTarget() {
    this._ruleTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTargetInput() {
    return this._ruleTarget;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class BetteruptimeEmailIntegrationStartedRulesList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeEmailIntegrationStartedRules[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeEmailIntegrationStartedRulesOutputReference {
    return new BetteruptimeEmailIntegrationStartedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration betteruptime_email_integration}
*/
export class BetteruptimeEmailIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_email_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeEmailIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeEmailIntegration to import
  * @param importFromId The id of the existing BetteruptimeEmailIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeEmailIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_email_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_email_integration betteruptime_email_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeEmailIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeEmailIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_email_integration',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acknowledgedRuleType = config.acknowledgedRuleType;
    this._call = config.call;
    this._criticalAlert = config.criticalAlert;
    this._email = config.email;
    this._name = config.name;
    this._paused = config.paused;
    this._policyId = config.policyId;
    this._push = config.push;
    this._recoveryPeriod = config.recoveryPeriod;
    this._resolvedRuleType = config.resolvedRuleType;
    this._sms = config.sms;
    this._startedRuleType = config.startedRuleType;
    this._teamName = config.teamName;
    this._teamWait = config.teamWait;
    this._acknowledgedAlertIdField.internalValue = config.acknowledgedAlertIdField;
    this._acknowledgedRules.internalValue = config.acknowledgedRules;
    this._causeField.internalValue = config.causeField;
    this._otherAcknowledgedFields.internalValue = config.otherAcknowledgedFields;
    this._otherResolvedFields.internalValue = config.otherResolvedFields;
    this._otherStartedFields.internalValue = config.otherStartedFields;
    this._resolvedAlertIdField.internalValue = config.resolvedAlertIdField;
    this._resolvedRules.internalValue = config.resolvedRules;
    this._startedAlertIdField.internalValue = config.startedAlertIdField;
    this._startedRules.internalValue = config.startedRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledged_rule_type - computed: false, optional: false, required: true
  private _acknowledgedRuleType?: string; 
  public get acknowledgedRuleType() {
    return this.getStringAttribute('acknowledged_rule_type');
  }
  public set acknowledgedRuleType(value: string) {
    this._acknowledgedRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedRuleTypeInput() {
    return this._acknowledgedRuleType;
  }

  // call - computed: true, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // critical_alert - computed: true, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // push - computed: true, optional: true, required: false
  private _push?: boolean | cdktf.IResolvable; 
  public get push() {
    return this.getBooleanAttribute('push');
  }
  public set push(value: boolean | cdktf.IResolvable) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // recovery_period - computed: true, optional: true, required: false
  private _recoveryPeriod?: number; 
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }
  public set recoveryPeriod(value: number) {
    this._recoveryPeriod = value;
  }
  public resetRecoveryPeriod() {
    this._recoveryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInput() {
    return this._recoveryPeriod;
  }

  // resolved_rule_type - computed: false, optional: false, required: true
  private _resolvedRuleType?: string; 
  public get resolvedRuleType() {
    return this.getStringAttribute('resolved_rule_type');
  }
  public set resolvedRuleType(value: string) {
    this._resolvedRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedRuleTypeInput() {
    return this._resolvedRuleType;
  }

  // sms - computed: true, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // started_rule_type - computed: false, optional: false, required: true
  private _startedRuleType?: string; 
  public get startedRuleType() {
    return this.getStringAttribute('started_rule_type');
  }
  public set startedRuleType(value: string) {
    this._startedRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startedRuleTypeInput() {
    return this._startedRuleType;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // team_wait - computed: true, optional: true, required: false
  private _teamWait?: number; 
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }
  public set teamWait(value: number) {
    this._teamWait = value;
  }
  public resetTeamWait() {
    this._teamWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamWaitInput() {
    return this._teamWait;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // acknowledged_alert_id_field - computed: false, optional: true, required: false
  private _acknowledgedAlertIdField = new BetteruptimeEmailIntegrationAcknowledgedAlertIdFieldOutputReference(this, "acknowledged_alert_id_field");
  public get acknowledgedAlertIdField() {
    return this._acknowledgedAlertIdField;
  }
  public putAcknowledgedAlertIdField(value: BetteruptimeEmailIntegrationAcknowledgedAlertIdField) {
    this._acknowledgedAlertIdField.internalValue = value;
  }
  public resetAcknowledgedAlertIdField() {
    this._acknowledgedAlertIdField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedAlertIdFieldInput() {
    return this._acknowledgedAlertIdField.internalValue;
  }

  // acknowledged_rules - computed: false, optional: true, required: false
  private _acknowledgedRules = new BetteruptimeEmailIntegrationAcknowledgedRulesList(this, "acknowledged_rules", false);
  public get acknowledgedRules() {
    return this._acknowledgedRules;
  }
  public putAcknowledgedRules(value: BetteruptimeEmailIntegrationAcknowledgedRules[] | cdktf.IResolvable) {
    this._acknowledgedRules.internalValue = value;
  }
  public resetAcknowledgedRules() {
    this._acknowledgedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedRulesInput() {
    return this._acknowledgedRules.internalValue;
  }

  // cause_field - computed: false, optional: true, required: false
  private _causeField = new BetteruptimeEmailIntegrationCauseFieldOutputReference(this, "cause_field");
  public get causeField() {
    return this._causeField;
  }
  public putCauseField(value: BetteruptimeEmailIntegrationCauseField) {
    this._causeField.internalValue = value;
  }
  public resetCauseField() {
    this._causeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeFieldInput() {
    return this._causeField.internalValue;
  }

  // other_acknowledged_fields - computed: false, optional: true, required: false
  private _otherAcknowledgedFields = new BetteruptimeEmailIntegrationOtherAcknowledgedFieldsList(this, "other_acknowledged_fields", false);
  public get otherAcknowledgedFields() {
    return this._otherAcknowledgedFields;
  }
  public putOtherAcknowledgedFields(value: BetteruptimeEmailIntegrationOtherAcknowledgedFields[] | cdktf.IResolvable) {
    this._otherAcknowledgedFields.internalValue = value;
  }
  public resetOtherAcknowledgedFields() {
    this._otherAcknowledgedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherAcknowledgedFieldsInput() {
    return this._otherAcknowledgedFields.internalValue;
  }

  // other_resolved_fields - computed: false, optional: true, required: false
  private _otherResolvedFields = new BetteruptimeEmailIntegrationOtherResolvedFieldsList(this, "other_resolved_fields", false);
  public get otherResolvedFields() {
    return this._otherResolvedFields;
  }
  public putOtherResolvedFields(value: BetteruptimeEmailIntegrationOtherResolvedFields[] | cdktf.IResolvable) {
    this._otherResolvedFields.internalValue = value;
  }
  public resetOtherResolvedFields() {
    this._otherResolvedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherResolvedFieldsInput() {
    return this._otherResolvedFields.internalValue;
  }

  // other_started_fields - computed: false, optional: true, required: false
  private _otherStartedFields = new BetteruptimeEmailIntegrationOtherStartedFieldsList(this, "other_started_fields", false);
  public get otherStartedFields() {
    return this._otherStartedFields;
  }
  public putOtherStartedFields(value: BetteruptimeEmailIntegrationOtherStartedFields[] | cdktf.IResolvable) {
    this._otherStartedFields.internalValue = value;
  }
  public resetOtherStartedFields() {
    this._otherStartedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherStartedFieldsInput() {
    return this._otherStartedFields.internalValue;
  }

  // resolved_alert_id_field - computed: false, optional: true, required: false
  private _resolvedAlertIdField = new BetteruptimeEmailIntegrationResolvedAlertIdFieldOutputReference(this, "resolved_alert_id_field");
  public get resolvedAlertIdField() {
    return this._resolvedAlertIdField;
  }
  public putResolvedAlertIdField(value: BetteruptimeEmailIntegrationResolvedAlertIdField) {
    this._resolvedAlertIdField.internalValue = value;
  }
  public resetResolvedAlertIdField() {
    this._resolvedAlertIdField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedAlertIdFieldInput() {
    return this._resolvedAlertIdField.internalValue;
  }

  // resolved_rules - computed: false, optional: true, required: false
  private _resolvedRules = new BetteruptimeEmailIntegrationResolvedRulesList(this, "resolved_rules", false);
  public get resolvedRules() {
    return this._resolvedRules;
  }
  public putResolvedRules(value: BetteruptimeEmailIntegrationResolvedRules[] | cdktf.IResolvable) {
    this._resolvedRules.internalValue = value;
  }
  public resetResolvedRules() {
    this._resolvedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedRulesInput() {
    return this._resolvedRules.internalValue;
  }

  // started_alert_id_field - computed: false, optional: true, required: false
  private _startedAlertIdField = new BetteruptimeEmailIntegrationStartedAlertIdFieldOutputReference(this, "started_alert_id_field");
  public get startedAlertIdField() {
    return this._startedAlertIdField;
  }
  public putStartedAlertIdField(value: BetteruptimeEmailIntegrationStartedAlertIdField) {
    this._startedAlertIdField.internalValue = value;
  }
  public resetStartedAlertIdField() {
    this._startedAlertIdField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAlertIdFieldInput() {
    return this._startedAlertIdField.internalValue;
  }

  // started_rules - computed: false, optional: true, required: false
  private _startedRules = new BetteruptimeEmailIntegrationStartedRulesList(this, "started_rules", false);
  public get startedRules() {
    return this._startedRules;
  }
  public putStartedRules(value: BetteruptimeEmailIntegrationStartedRules[] | cdktf.IResolvable) {
    this._startedRules.internalValue = value;
  }
  public resetStartedRules() {
    this._startedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedRulesInput() {
    return this._startedRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledged_rule_type: cdktf.stringToTerraform(this._acknowledgedRuleType),
      call: cdktf.booleanToTerraform(this._call),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      email: cdktf.booleanToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      policy_id: cdktf.stringToTerraform(this._policyId),
      push: cdktf.booleanToTerraform(this._push),
      recovery_period: cdktf.numberToTerraform(this._recoveryPeriod),
      resolved_rule_type: cdktf.stringToTerraform(this._resolvedRuleType),
      sms: cdktf.booleanToTerraform(this._sms),
      started_rule_type: cdktf.stringToTerraform(this._startedRuleType),
      team_name: cdktf.stringToTerraform(this._teamName),
      team_wait: cdktf.numberToTerraform(this._teamWait),
      acknowledged_alert_id_field: betteruptimeEmailIntegrationAcknowledgedAlertIdFieldToTerraform(this._acknowledgedAlertIdField.internalValue),
      acknowledged_rules: cdktf.listMapper(betteruptimeEmailIntegrationAcknowledgedRulesToTerraform, true)(this._acknowledgedRules.internalValue),
      cause_field: betteruptimeEmailIntegrationCauseFieldToTerraform(this._causeField.internalValue),
      other_acknowledged_fields: cdktf.listMapper(betteruptimeEmailIntegrationOtherAcknowledgedFieldsToTerraform, true)(this._otherAcknowledgedFields.internalValue),
      other_resolved_fields: cdktf.listMapper(betteruptimeEmailIntegrationOtherResolvedFieldsToTerraform, true)(this._otherResolvedFields.internalValue),
      other_started_fields: cdktf.listMapper(betteruptimeEmailIntegrationOtherStartedFieldsToTerraform, true)(this._otherStartedFields.internalValue),
      resolved_alert_id_field: betteruptimeEmailIntegrationResolvedAlertIdFieldToTerraform(this._resolvedAlertIdField.internalValue),
      resolved_rules: cdktf.listMapper(betteruptimeEmailIntegrationResolvedRulesToTerraform, true)(this._resolvedRules.internalValue),
      started_alert_id_field: betteruptimeEmailIntegrationStartedAlertIdFieldToTerraform(this._startedAlertIdField.internalValue),
      started_rules: cdktf.listMapper(betteruptimeEmailIntegrationStartedRulesToTerraform, true)(this._startedRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledged_rule_type: {
        value: cdktf.stringToHclTerraform(this._acknowledgedRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call: {
        value: cdktf.booleanToHclTerraform(this._call),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push: {
        value: cdktf.booleanToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_period: {
        value: cdktf.numberToHclTerraform(this._recoveryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolved_rule_type: {
        value: cdktf.stringToHclTerraform(this._resolvedRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms: {
        value: cdktf.booleanToHclTerraform(this._sms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      started_rule_type: {
        value: cdktf.stringToHclTerraform(this._startedRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_wait: {
        value: cdktf.numberToHclTerraform(this._teamWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acknowledged_alert_id_field: {
        value: betteruptimeEmailIntegrationAcknowledgedAlertIdFieldToHclTerraform(this._acknowledgedAlertIdField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationAcknowledgedAlertIdFieldList",
      },
      acknowledged_rules: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationAcknowledgedRulesToHclTerraform, true)(this._acknowledgedRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationAcknowledgedRulesList",
      },
      cause_field: {
        value: betteruptimeEmailIntegrationCauseFieldToHclTerraform(this._causeField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationCauseFieldList",
      },
      other_acknowledged_fields: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationOtherAcknowledgedFieldsToHclTerraform, true)(this._otherAcknowledgedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationOtherAcknowledgedFieldsList",
      },
      other_resolved_fields: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationOtherResolvedFieldsToHclTerraform, true)(this._otherResolvedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationOtherResolvedFieldsList",
      },
      other_started_fields: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationOtherStartedFieldsToHclTerraform, true)(this._otherStartedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationOtherStartedFieldsList",
      },
      resolved_alert_id_field: {
        value: betteruptimeEmailIntegrationResolvedAlertIdFieldToHclTerraform(this._resolvedAlertIdField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationResolvedAlertIdFieldList",
      },
      resolved_rules: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationResolvedRulesToHclTerraform, true)(this._resolvedRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationResolvedRulesList",
      },
      started_alert_id_field: {
        value: betteruptimeEmailIntegrationStartedAlertIdFieldToHclTerraform(this._startedAlertIdField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationStartedAlertIdFieldList",
      },
      started_rules: {
        value: cdktf.listMapperHcl(betteruptimeEmailIntegrationStartedRulesToHclTerraform, true)(this._startedRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeEmailIntegrationStartedRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
