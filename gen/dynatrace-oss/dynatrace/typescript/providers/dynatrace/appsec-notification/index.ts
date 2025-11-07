// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * For attack candidate alerts, select an [alerting profile](/ui/settings/builtin:appsec.notification-attack-alerting-profile) to control the delivery of security notifications related to this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#attack_candidate_based_alerting_profile AppsecNotification#attack_candidate_based_alerting_profile}
  */
  readonly attackCandidateBasedAlertingProfile?: string;
  /**
  * Display name of the security notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#display_name AppsecNotification#display_name}
  */
  readonly displayName: string;
  /**
  * Enable/Disable the security notification, enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#enabled AppsecNotification#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#id AppsecNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For security problem alerts, select an [alerting profile](/ui/settings/builtin:appsec.notification-alerting-profile) to control the delivery of security notifications related to this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#security_problem_based_alerting_profile AppsecNotification#security_problem_based_alerting_profile}
  */
  readonly securityProblemBasedAlertingProfile?: string;
  /**
  * Security alert type, possible Values: `ATTACK_CANDIDATE`, `SECURITY_PROBLEM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#trigger AppsecNotification#trigger}
  */
  readonly trigger: string;
  /**
  * Notification type, possible Values: `EMAIL`, `JIRA`, `WEBHOOK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#type AppsecNotification#type}
  */
  readonly type: string;
  /**
  * attack_candidate_based_email_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#attack_candidate_based_email_payload AppsecNotification#attack_candidate_based_email_payload}
  */
  readonly attackCandidateBasedEmailPayload?: AppsecNotificationAttackCandidateBasedEmailPayload;
  /**
  * attack_candidate_based_jira_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#attack_candidate_based_jira_payload AppsecNotification#attack_candidate_based_jira_payload}
  */
  readonly attackCandidateBasedJiraPayload?: AppsecNotificationAttackCandidateBasedJiraPayload;
  /**
  * attack_candidate_based_webhook_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#attack_candidate_based_webhook_payload AppsecNotification#attack_candidate_based_webhook_payload}
  */
  readonly attackCandidateBasedWebhookPayload?: AppsecNotificationAttackCandidateBasedWebhookPayload;
  /**
  * email_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#email_configuration AppsecNotification#email_configuration}
  */
  readonly emailConfiguration?: AppsecNotificationEmailConfiguration;
  /**
  * jira_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#jira_configuration AppsecNotification#jira_configuration}
  */
  readonly jiraConfiguration?: AppsecNotificationJiraConfiguration;
  /**
  * security_problem_based_email_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#security_problem_based_email_payload AppsecNotification#security_problem_based_email_payload}
  */
  readonly securityProblemBasedEmailPayload?: AppsecNotificationSecurityProblemBasedEmailPayload;
  /**
  * security_problem_based_jira_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#security_problem_based_jira_payload AppsecNotification#security_problem_based_jira_payload}
  */
  readonly securityProblemBasedJiraPayload?: AppsecNotificationSecurityProblemBasedJiraPayload;
  /**
  * security_problem_based_webhook_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#security_problem_based_webhook_payload AppsecNotification#security_problem_based_webhook_payload}
  */
  readonly securityProblemBasedWebhookPayload?: AppsecNotificationSecurityProblemBasedWebhookPayload;
  /**
  * webhook_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#webhook_configuration AppsecNotification#webhook_configuration}
  */
  readonly webhookConfiguration?: AppsecNotificationWebhookConfiguration;
}
export interface AppsecNotificationAttackCandidateBasedEmailPayload {
  /**
  * The template of the email notifications.  
  * In case a value of a security problem is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the body might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{AttackDisplayId}**: The unique identifier assigned by Dynatrace, for example: "A-1234".  
  * **{Title}**: Location of the attack, for example: "com.dynatrace.Class.method():120"  
  * **{Type}**: The type of attack, for example: "SQL Injection".  
  * **{AttackUrl}**: URL of the attack in Dynatrace.  
  * **{ProcessGroupId}**: Details about the process group attacked.  
  * **{EntryPoint}**: The entry point of the attack into the process, for example: "/login". Can be empty.  
  * **{Status}**: The status of the attack, for example: "Exploited"  
  * **{Timestamp}**: When the attack happened.  
  * **{VulnerabilityName}**: Name of the associated code-level vulnerability, for example: "InMemoryDatabaseCaller.getAccountInfo():51". Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#body AppsecNotification#body}
  */
  readonly body: string;
  /**
  * The subject of the email notifications.. Available placeholders:  
  * **{AttackDisplayId}**: The unique identifier assigned by Dynatrace, for example, "A-1234".  
  * **{Title}**: Location of the attack, for example: "com.dynatrace.Class.method():120"  
  * **{Type}**: The type of attack, for example: "SQL Injection".  
  * **{AttackUrl}**: URL of the attack in Dynatrace.  
  * **{ProcessGroupId}**: Details about the process group attacked.  
  * **{EntryPoint}**: The entry point of the attack into the process, for example: "/login". Can be empty.  
  * **{Status}**: The status of the attack, for example: "Exploited"  
  * **{Timestamp}**: When the attack happened.  
  * **{VulnerabilityName}**: Name of the associated code-level vulnerability, for example: "InMemoryDatabaseCaller.getAccountInfo():51". Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#subject AppsecNotification#subject}
  */
  readonly subject: string;
}

export function appsecNotificationAttackCandidateBasedEmailPayloadToTerraform(struct?: AppsecNotificationAttackCandidateBasedEmailPayloadOutputReference | AppsecNotificationAttackCandidateBasedEmailPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function appsecNotificationAttackCandidateBasedEmailPayloadToHclTerraform(struct?: AppsecNotificationAttackCandidateBasedEmailPayloadOutputReference | AppsecNotificationAttackCandidateBasedEmailPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationAttackCandidateBasedEmailPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationAttackCandidateBasedEmailPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationAttackCandidateBasedEmailPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._subject = value.subject;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface AppsecNotificationAttackCandidateBasedJiraPayload {
  /**
  * The description of the Jira issue to be created by this notification.  
  * In case a value of an attack is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the description might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{AttackDisplayId}**: The unique identifier assigned by Dynatrace, for example: "A-1234".  
  * **{Title}**: Location of the attack, for example: "com.dynatrace.Class.method():120"  
  * **{Type}**: The type of attack, for example: "SQL Injection".  
  * **{AttackUrl}**: URL of the attack in Dynatrace.  
  * **{ProcessGroupId}**: Details about the process group attacked.  
  * **{EntryPoint}**: The entry point of the attack into the process, for example: "/login". Can be empty.  
  * **{Status}**: The status of the attack, for example: "Exploited"  
  * **{Timestamp}**: When the attack happened.  
  * **{VulnerabilityName}**: Name of the associated code-level vulnerability, for example: "InMemoryDatabaseCaller.getAccountInfo():51". Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#description AppsecNotification#description}
  */
  readonly description: string;
  /**
  * The summary of the Jira issue to be created by this notification.. **Note:** The Jira summary field must contain less than 255 characters. Any content exceeding this limit after evaluating the placeholders will be discarded.  
  *   
  * Available placeholders:  
  * **{AttackDisplayId}**: The unique identifier assigned by Dynatrace, for example, "A-1234".  
  * **{Title}**: Location of the attack, for example: "com.dynatrace.Class.method():120"  
  * **{Type}**: The type of attack, for example: "SQL Injection".  
  * **{AttackUrl}**: URL of the attack in Dynatrace.  
  * **{ProcessGroupId}**: Details about the process group attacked.  
  * **{EntryPoint}**: The entry point of the attack into the process, for example: "/login". Can be empty.  
  * **{Status}**: The status of the attack, for example: "Exploited"  
  * **{Timestamp}**: When the attack happened.  
  * **{VulnerabilityName}**: Name of the associated code-level vulnerability, for example: "InMemoryDatabaseCaller.getAccountInfo():51". Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#summary AppsecNotification#summary}
  */
  readonly summary: string;
}

export function appsecNotificationAttackCandidateBasedJiraPayloadToTerraform(struct?: AppsecNotificationAttackCandidateBasedJiraPayloadOutputReference | AppsecNotificationAttackCandidateBasedJiraPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function appsecNotificationAttackCandidateBasedJiraPayloadToHclTerraform(struct?: AppsecNotificationAttackCandidateBasedJiraPayloadOutputReference | AppsecNotificationAttackCandidateBasedJiraPayload): any {
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
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationAttackCandidateBasedJiraPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationAttackCandidateBasedJiraPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationAttackCandidateBasedJiraPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._summary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._summary = value.summary;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}
export interface AppsecNotificationAttackCandidateBasedWebhookPayload {
  /**
  * This is the content your notification message will include when users view it.  
  * In case a value of an attack is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the custom payload might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{AttackDisplayId}**: The unique identifier assigned by Dynatrace, for example: "A-1234".  
  * **{Title}**: Location of the attack, for example: "com.dynatrace.Class.method():120"  
  * **{Type}**: The type of attack, for example: "SQL Injection".  
  * **{AttackUrl}**: URL of the attack in Dynatrace.  
  * **{ProcessGroupId}**: Details about the process group attacked.  
  * **{EntryPoint}**: The entry point of the attack into the process, for example: "/login". Can be empty.  
  * **{Status}**: The status of the attack, for example: "Exploited"  
  * **{Timestamp}**: When the attack happened.  
  * **{VulnerabilityName}**: Name of the associated code-level vulnerability, for example: "InMemoryDatabaseCaller.getAccountInfo():51". Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#payload AppsecNotification#payload}
  */
  readonly payload: string;
}

export function appsecNotificationAttackCandidateBasedWebhookPayloadToTerraform(struct?: AppsecNotificationAttackCandidateBasedWebhookPayloadOutputReference | AppsecNotificationAttackCandidateBasedWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function appsecNotificationAttackCandidateBasedWebhookPayloadToHclTerraform(struct?: AppsecNotificationAttackCandidateBasedWebhookPayloadOutputReference | AppsecNotificationAttackCandidateBasedWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationAttackCandidateBasedWebhookPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationAttackCandidateBasedWebhookPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationAttackCandidateBasedWebhookPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}
export interface AppsecNotificationEmailConfiguration {
  /**
  * BCC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#bcc_recipients AppsecNotification#bcc_recipients}
  */
  readonly bccRecipients?: string[];
  /**
  * CC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#cc_recipients AppsecNotification#cc_recipients}
  */
  readonly ccRecipients?: string[];
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#recipients AppsecNotification#recipients}
  */
  readonly recipients: string[];
}

export function appsecNotificationEmailConfigurationToTerraform(struct?: AppsecNotificationEmailConfigurationOutputReference | AppsecNotificationEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcc_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bccRecipients),
    cc_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ccRecipients),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
  }
}


export function appsecNotificationEmailConfigurationToHclTerraform(struct?: AppsecNotificationEmailConfigurationOutputReference | AppsecNotificationEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcc_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bccRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cc_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ccRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationEmailConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bccRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.bccRecipients = this._bccRecipients;
    }
    if (this._ccRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccRecipients = this._ccRecipients;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bccRecipients = undefined;
      this._ccRecipients = undefined;
      this._recipients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bccRecipients = value.bccRecipients;
      this._ccRecipients = value.ccRecipients;
      this._recipients = value.recipients;
    }
  }

  // bcc_recipients - computed: false, optional: true, required: false
  private _bccRecipients?: string[]; 
  public get bccRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('bcc_recipients'));
  }
  public set bccRecipients(value: string[]) {
    this._bccRecipients = value;
  }
  public resetBccRecipients() {
    this._bccRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccRecipientsInput() {
    return this._bccRecipients;
  }

  // cc_recipients - computed: false, optional: true, required: false
  private _ccRecipients?: string[]; 
  public get ccRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('cc_recipients'));
  }
  public set ccRecipients(value: string[]) {
    this._ccRecipients = value;
  }
  public resetCcRecipients() {
    this._ccRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccRecipientsInput() {
    return this._ccRecipients;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }
}
export interface AppsecNotificationJiraConfiguration {
  /**
  * The API token for the Jira profile. Using password authentication [was deprecated by Jira](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#api_token AppsecNotification#api_token}
  */
  readonly apiToken: string;
  /**
  * The type of the Jira issue to be created by this notification.
  * 
  * To find all available issue types or create your own, in Jira, go to Project settings > Issue types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#issue_type AppsecNotification#issue_type}
  */
  readonly issueType: string;
  /**
  * The project key of the Jira issue to be created by this notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#project_key AppsecNotification#project_key}
  */
  readonly projectKey: string;
  /**
  * The URL of the Jira API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#url AppsecNotification#url}
  */
  readonly url: string;
  /**
  * The username of the Jira profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#username AppsecNotification#username}
  */
  readonly username: string;
}

export function appsecNotificationJiraConfigurationToTerraform(struct?: AppsecNotificationJiraConfigurationOutputReference | AppsecNotificationJiraConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function appsecNotificationJiraConfigurationToHclTerraform(struct?: AppsecNotificationJiraConfigurationOutputReference | AppsecNotificationJiraConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationJiraConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationJiraConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationJiraConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._issueType = undefined;
      this._projectKey = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._issueType = value.issueType;
      this._projectKey = value.projectKey;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppsecNotificationSecurityProblemBasedEmailPayload {
  /**
  * The template of the email notifications.  
  * In case a value of a security problem is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the description might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{SecurityProblemId}**: The unique identifier assigned by Dynatrace, for example, "S-1234".  
  * **{Title}**: A short summary of the type of vulnerability that was found, for example, "Remote Code Execution".  
  * **{Description}**: A more detailed description of the vulnerability.  
  * **{CvssScore}**: CVSS score of the identified vulnerability, for example, "10.0". Can be empty. 
  * **{DavisSecurityScore}**: [Davis Security Score](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security/davis-security-score/) is an enhanced risk-calculation score based on the CVSS, for example, "10.0".  
  * **{Severity}**: The security problem severity, for example, "Critical" or "Medium".  
  * **{SecurityProblemUrl}**: URL of the security problem in Dynatrace.  
  * **{AffectedEntities}**: Details about the entities affected by the security problem in a json array.  
  * **{ManagementZones}**: Comma-separated list of all management zones affected by the vulnerability at the time of detection.  
  * **{Tags}**: Comma-separated list of tags that are defined for a vulnerability's affected entities. For example: "PROD, owner:John". Assign the tag's key in square brackets: **{Tags[key]}** to get all associated values. For example: "{Tags[owner]}" will be resolved as "John". Tags without an assigned value will be resolved as empty string.  
  * **{Exposed}**: Describes whether one or more affected process is exposed to the public Internet. Can be "true" or "false".  
  * **{DataAssetsReachable}**: Describes whether one or more affected process can reach data assets. Can be "true" or "false".  
  * **{ExploitAvailable}**: Describes whether there's an exploit available for the vulnerability. Can be "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#body AppsecNotification#body}
  */
  readonly body: string;
  /**
  * The subject of the email notifications.. Available placeholders:  
  * **{SecurityProblemId}**: The unique identifier assigned by Dynatrace, for example, "S-1234".  
  * **{Title}**: A short summary of the type of vulnerability that was found, for example, "Remote Code Execution".  
  * **{CvssScore}**: CVSS score of the identified vulnerability, for example, "10.0". Can be empty. 
  * **{DavisSecurityScore}**: [Davis Security Score](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security/davis-security-score/) is an enhanced risk-calculation score based on the CVSS, for example, "10.0".  
  * **{Severity}**: The security problem severity, for example, "Critical" or "Medium".  
  * **{SecurityProblemUrl}**: URL of the security problem in Dynatrace.  
  * **{Exposed}**: Describes whether one or more affected process is exposed to the public Internet. Can be "true" or "false".  
  * **{DataAssetsReachable}**: Describes whether one or more affected process can reach data assets. Can be "true" or "false".  
  * **{ExploitAvailable}**: Describes whether there's an exploit available for the vulnerability. Can be "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#subject AppsecNotification#subject}
  */
  readonly subject: string;
}

export function appsecNotificationSecurityProblemBasedEmailPayloadToTerraform(struct?: AppsecNotificationSecurityProblemBasedEmailPayloadOutputReference | AppsecNotificationSecurityProblemBasedEmailPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function appsecNotificationSecurityProblemBasedEmailPayloadToHclTerraform(struct?: AppsecNotificationSecurityProblemBasedEmailPayloadOutputReference | AppsecNotificationSecurityProblemBasedEmailPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationSecurityProblemBasedEmailPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationSecurityProblemBasedEmailPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationSecurityProblemBasedEmailPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._subject = value.subject;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface AppsecNotificationSecurityProblemBasedJiraPayload {
  /**
  * The description of the Jira issue to be created by this notification.  
  * In case a value of a security problem is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the description might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{SecurityProblemId}**: The unique identifier assigned by Dynatrace, for example, "S-1234".  
  * **{Title}**: A short summary of the type of vulnerability that was found, for example, "Remote Code Execution".  
  * **{Description}**: A more detailed description of the vulnerability.  
  * **{CvssScore}**: CVSS score of the identified vulnerability, for example, "10.0". Can be empty. 
  * **{DavisSecurityScore}**: [Davis Security Score](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security/davis-security-score/) is an enhanced risk-calculation score based on the CVSS, for example, "10.0".  
  * **{Severity}**: The security problem severity, for example, "Critical" or "Medium".  
  * **{SecurityProblemUrl}**: URL of the security problem in Dynatrace.  
  * **{AffectedEntities}**: Details about the entities affected by the security problem in a json array.  
  * **{ManagementZones}**: Comma-separated list of all management zones affected by the vulnerability at the time of detection.  
  * **{Tags}**: Comma-separated list of tags that are defined for a vulnerability's affected entities. For example: "PROD, owner:John". Assign the tag's key in square brackets: **{Tags[key]}** to get all associated values. For example: "{Tags[owner]}" will be resolved as "John". Tags without an assigned value will be resolved as empty string.  
  * **{Exposed}**: Describes whether one or more affected process is exposed to the public Internet. Can be "true" or "false".  
  * **{DataAssetsReachable}**: Describes whether one or more affected process can reach data assets. Can be "true" or "false".  
  * **{ExploitAvailable}**: Describes whether there's an exploit available for the vulnerability. Can be "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#description AppsecNotification#description}
  */
  readonly description: string;
  /**
  * The summary of the Jira issue to be created by this notification.. **Note:** The Jira summary field must contain less than 255 characters. Any content exceeding this limit after evaluating the placeholders will be discarded.  
  *   
  * Available placeholders:  
  * **{SecurityProblemId}**: The unique identifier assigned by Dynatrace, for example, "S-1234".  
  * **{Title}**: A short summary of the type of vulnerability that was found, for example, "Remote Code Execution".  
  * **{CvssScore}**: CVSS score of the identified vulnerability, for example, "10.0". Can be empty. 
  * **{DavisSecurityScore}**: [Davis Security Score](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security/davis-security-score/) is an enhanced risk-calculation score based on the CVSS, for example, "10.0".  
  * **{Severity}**: The security problem severity, for example, "Critical" or "Medium".  
  * **{SecurityProblemUrl}**: URL of the security problem in Dynatrace.  
  * **{Exposed}**: Describes whether one or more affected process is exposed to the public Internet. Can be "true" or "false".  
  * **{DataAssetsReachable}**: Describes whether one or more affected process can reach data assets. Can be "true" or "false".  
  * **{ExploitAvailable}**: Describes whether there's an exploit available for the vulnerability. Can be "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#summary AppsecNotification#summary}
  */
  readonly summary: string;
}

export function appsecNotificationSecurityProblemBasedJiraPayloadToTerraform(struct?: AppsecNotificationSecurityProblemBasedJiraPayloadOutputReference | AppsecNotificationSecurityProblemBasedJiraPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function appsecNotificationSecurityProblemBasedJiraPayloadToHclTerraform(struct?: AppsecNotificationSecurityProblemBasedJiraPayloadOutputReference | AppsecNotificationSecurityProblemBasedJiraPayload): any {
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
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationSecurityProblemBasedJiraPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationSecurityProblemBasedJiraPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationSecurityProblemBasedJiraPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._summary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._summary = value.summary;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}
export interface AppsecNotificationSecurityProblemBasedWebhookPayload {
  /**
  * This is the content your notification message will include when users view it.  
  * In case a value of a security problem is not set, the placeholder will be replaced by an empty string.. **Note:** Security notifications contain sensitive information. Excessive usage of placeholders in the custom payload might leak information to untrusted parties.  
  *   
  * Available placeholders:  
  * **{SecurityProblemId}**: The unique identifier assigned by Dynatrace, for example, "S-1234".  
  * **{Title}**: A short summary of the type of vulnerability that was found, for example, "Remote Code Execution".  
  * **{Description}**: A more detailed description of the vulnerability.  
  * **{CvssScore}**: CVSS score of the identified vulnerability, for example, "10.0". Can be empty. 
  * **{DavisSecurityScore}**: [Davis Security Score](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security/davis-security-score/) is an enhanced risk-calculation score based on the CVSS, for example, "10.0".  
  * **{Severity}**: The security problem severity, for example, "Critical" or "Medium".  
  * **{SecurityProblemUrl}**: URL of the security problem in Dynatrace.  
  * **{AffectedEntities}**: Details about the entities affected by the security problem in a json array.  
  * **{ManagementZones}**: Comma-separated list of all management zones affected by the vulnerability at the time of detection.  
  * **{Tags}**: Comma-separated list of tags that are defined for a vulnerability's affected entities. For example: "PROD, owner:John". Assign the tag's key in square brackets: **{Tags[key]}** to get all associated values. For example: "{Tags[owner]}" will be resolved as "John". Tags without an assigned value will be resolved as empty string.  
  * **{Exposed}**: Describes whether one or more affected process is exposed to the public Internet. Can be "true" or "false".  
  * **{DataAssetsReachable}**: Describes whether one or more affected process can reach data assets. Can be "true" or "false".  
  * **{ExploitAvailable}**: Describes whether there's an exploit available for the vulnerability. Can be "true" or "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#payload AppsecNotification#payload}
  */
  readonly payload: string;
}

export function appsecNotificationSecurityProblemBasedWebhookPayloadToTerraform(struct?: AppsecNotificationSecurityProblemBasedWebhookPayloadOutputReference | AppsecNotificationSecurityProblemBasedWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function appsecNotificationSecurityProblemBasedWebhookPayloadToHclTerraform(struct?: AppsecNotificationSecurityProblemBasedWebhookPayloadOutputReference | AppsecNotificationSecurityProblemBasedWebhookPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationSecurityProblemBasedWebhookPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationSecurityProblemBasedWebhookPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationSecurityProblemBasedWebhookPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}
export interface AppsecNotificationWebhookConfigurationHeadersHeader {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#name AppsecNotification#name}
  */
  readonly name: string;
  /**
  * Secret HTTP header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#secret AppsecNotification#secret}
  */
  readonly secret: boolean | cdktf.IResolvable;
  /**
  * The secret value of the HTTP header. May contain an empty value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#secret_value AppsecNotification#secret_value}
  */
  readonly secretValue?: string;
  /**
  * The value of the HTTP header. May contain an empty value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#value AppsecNotification#value}
  */
  readonly value?: string;
}

export function appsecNotificationWebhookConfigurationHeadersHeaderToTerraform(struct?: AppsecNotificationWebhookConfigurationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.booleanToTerraform(struct!.secret),
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsecNotificationWebhookConfigurationHeadersHeaderToHclTerraform(struct?: AppsecNotificationWebhookConfigurationHeadersHeader | cdktf.IResolvable): any {
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
    secret: {
      value: cdktf.booleanToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
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

export class AppsecNotificationWebhookConfigurationHeadersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecNotificationWebhookConfigurationHeadersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationWebhookConfigurationHeadersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secret = undefined;
      this._secretValue = undefined;
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
      this._secret = value.secret;
      this._secretValue = value.secretValue;
      this._value = value.value;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
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

export class AppsecNotificationWebhookConfigurationHeadersHeaderList extends cdktf.ComplexList {
  public internalValue? : AppsecNotificationWebhookConfigurationHeadersHeader[] | cdktf.IResolvable

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
  public get(index: number): AppsecNotificationWebhookConfigurationHeadersHeaderOutputReference {
    return new AppsecNotificationWebhookConfigurationHeadersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsecNotificationWebhookConfigurationHeaders {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#header AppsecNotification#header}
  */
  readonly header: AppsecNotificationWebhookConfigurationHeadersHeader[] | cdktf.IResolvable;
}

export function appsecNotificationWebhookConfigurationHeadersToTerraform(struct?: AppsecNotificationWebhookConfigurationHeadersOutputReference | AppsecNotificationWebhookConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.listMapper(appsecNotificationWebhookConfigurationHeadersHeaderToTerraform, true)(struct!.header),
  }
}


export function appsecNotificationWebhookConfigurationHeadersToHclTerraform(struct?: AppsecNotificationWebhookConfigurationHeadersOutputReference | AppsecNotificationWebhookConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.listMapperHcl(appsecNotificationWebhookConfigurationHeadersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "AppsecNotificationWebhookConfigurationHeadersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationWebhookConfigurationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationWebhookConfigurationHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationWebhookConfigurationHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header = new AppsecNotificationWebhookConfigurationHeadersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: AppsecNotificationWebhookConfigurationHeadersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface AppsecNotificationWebhookConfiguration {
  /**
  * Accept any SSL certificate (including self-signed and invalid certificates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#accept_any_certificate AppsecNotification#accept_any_certificate}
  */
  readonly acceptAnyCertificate: boolean | cdktf.IResolvable;
  /**
  * Webhook endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#url AppsecNotification#url}
  */
  readonly url: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#headers AppsecNotification#headers}
  */
  readonly headers?: AppsecNotificationWebhookConfigurationHeaders;
}

export function appsecNotificationWebhookConfigurationToTerraform(struct?: AppsecNotificationWebhookConfigurationOutputReference | AppsecNotificationWebhookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    url: cdktf.stringToTerraform(struct!.url),
    headers: appsecNotificationWebhookConfigurationHeadersToTerraform(struct!.headers),
  }
}


export function appsecNotificationWebhookConfigurationToHclTerraform(struct?: AppsecNotificationWebhookConfigurationOutputReference | AppsecNotificationWebhookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_any_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAnyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: appsecNotificationWebhookConfigurationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsecNotificationWebhookConfigurationHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecNotificationWebhookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecNotificationWebhookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecNotificationWebhookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._url = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._url = value.url;
      this._headers.internalValue = value.headers;
    }
  }

  // accept_any_certificate - computed: false, optional: false, required: true
  private _acceptAnyCertificate?: boolean | cdktf.IResolvable; 
  public get acceptAnyCertificate() {
    return this.getBooleanAttribute('accept_any_certificate');
  }
  public set acceptAnyCertificate(value: boolean | cdktf.IResolvable) {
    this._acceptAnyCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAnyCertificateInput() {
    return this._acceptAnyCertificate;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new AppsecNotificationWebhookConfigurationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: AppsecNotificationWebhookConfigurationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification dynatrace_appsec_notification}
*/
export class AppsecNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_appsec_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecNotification to import
  * @param importFromId The id of the existing AppsecNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_appsec_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/appsec_notification dynatrace_appsec_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_appsec_notification',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackCandidateBasedAlertingProfile = config.attackCandidateBasedAlertingProfile;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._securityProblemBasedAlertingProfile = config.securityProblemBasedAlertingProfile;
    this._trigger = config.trigger;
    this._type = config.type;
    this._attackCandidateBasedEmailPayload.internalValue = config.attackCandidateBasedEmailPayload;
    this._attackCandidateBasedJiraPayload.internalValue = config.attackCandidateBasedJiraPayload;
    this._attackCandidateBasedWebhookPayload.internalValue = config.attackCandidateBasedWebhookPayload;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._jiraConfiguration.internalValue = config.jiraConfiguration;
    this._securityProblemBasedEmailPayload.internalValue = config.securityProblemBasedEmailPayload;
    this._securityProblemBasedJiraPayload.internalValue = config.securityProblemBasedJiraPayload;
    this._securityProblemBasedWebhookPayload.internalValue = config.securityProblemBasedWebhookPayload;
    this._webhookConfiguration.internalValue = config.webhookConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_candidate_based_alerting_profile - computed: false, optional: true, required: false
  private _attackCandidateBasedAlertingProfile?: string; 
  public get attackCandidateBasedAlertingProfile() {
    return this.getStringAttribute('attack_candidate_based_alerting_profile');
  }
  public set attackCandidateBasedAlertingProfile(value: string) {
    this._attackCandidateBasedAlertingProfile = value;
  }
  public resetAttackCandidateBasedAlertingProfile() {
    this._attackCandidateBasedAlertingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackCandidateBasedAlertingProfileInput() {
    return this._attackCandidateBasedAlertingProfile;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // security_problem_based_alerting_profile - computed: false, optional: true, required: false
  private _securityProblemBasedAlertingProfile?: string; 
  public get securityProblemBasedAlertingProfile() {
    return this.getStringAttribute('security_problem_based_alerting_profile');
  }
  public set securityProblemBasedAlertingProfile(value: string) {
    this._securityProblemBasedAlertingProfile = value;
  }
  public resetSecurityProblemBasedAlertingProfile() {
    this._securityProblemBasedAlertingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProblemBasedAlertingProfileInput() {
    return this._securityProblemBasedAlertingProfile;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // attack_candidate_based_email_payload - computed: false, optional: true, required: false
  private _attackCandidateBasedEmailPayload = new AppsecNotificationAttackCandidateBasedEmailPayloadOutputReference(this, "attack_candidate_based_email_payload");
  public get attackCandidateBasedEmailPayload() {
    return this._attackCandidateBasedEmailPayload;
  }
  public putAttackCandidateBasedEmailPayload(value: AppsecNotificationAttackCandidateBasedEmailPayload) {
    this._attackCandidateBasedEmailPayload.internalValue = value;
  }
  public resetAttackCandidateBasedEmailPayload() {
    this._attackCandidateBasedEmailPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackCandidateBasedEmailPayloadInput() {
    return this._attackCandidateBasedEmailPayload.internalValue;
  }

  // attack_candidate_based_jira_payload - computed: false, optional: true, required: false
  private _attackCandidateBasedJiraPayload = new AppsecNotificationAttackCandidateBasedJiraPayloadOutputReference(this, "attack_candidate_based_jira_payload");
  public get attackCandidateBasedJiraPayload() {
    return this._attackCandidateBasedJiraPayload;
  }
  public putAttackCandidateBasedJiraPayload(value: AppsecNotificationAttackCandidateBasedJiraPayload) {
    this._attackCandidateBasedJiraPayload.internalValue = value;
  }
  public resetAttackCandidateBasedJiraPayload() {
    this._attackCandidateBasedJiraPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackCandidateBasedJiraPayloadInput() {
    return this._attackCandidateBasedJiraPayload.internalValue;
  }

  // attack_candidate_based_webhook_payload - computed: false, optional: true, required: false
  private _attackCandidateBasedWebhookPayload = new AppsecNotificationAttackCandidateBasedWebhookPayloadOutputReference(this, "attack_candidate_based_webhook_payload");
  public get attackCandidateBasedWebhookPayload() {
    return this._attackCandidateBasedWebhookPayload;
  }
  public putAttackCandidateBasedWebhookPayload(value: AppsecNotificationAttackCandidateBasedWebhookPayload) {
    this._attackCandidateBasedWebhookPayload.internalValue = value;
  }
  public resetAttackCandidateBasedWebhookPayload() {
    this._attackCandidateBasedWebhookPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackCandidateBasedWebhookPayloadInput() {
    return this._attackCandidateBasedWebhookPayload.internalValue;
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration = new AppsecNotificationEmailConfigurationOutputReference(this, "email_configuration");
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: AppsecNotificationEmailConfiguration) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // jira_configuration - computed: false, optional: true, required: false
  private _jiraConfiguration = new AppsecNotificationJiraConfigurationOutputReference(this, "jira_configuration");
  public get jiraConfiguration() {
    return this._jiraConfiguration;
  }
  public putJiraConfiguration(value: AppsecNotificationJiraConfiguration) {
    this._jiraConfiguration.internalValue = value;
  }
  public resetJiraConfiguration() {
    this._jiraConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConfigurationInput() {
    return this._jiraConfiguration.internalValue;
  }

  // security_problem_based_email_payload - computed: false, optional: true, required: false
  private _securityProblemBasedEmailPayload = new AppsecNotificationSecurityProblemBasedEmailPayloadOutputReference(this, "security_problem_based_email_payload");
  public get securityProblemBasedEmailPayload() {
    return this._securityProblemBasedEmailPayload;
  }
  public putSecurityProblemBasedEmailPayload(value: AppsecNotificationSecurityProblemBasedEmailPayload) {
    this._securityProblemBasedEmailPayload.internalValue = value;
  }
  public resetSecurityProblemBasedEmailPayload() {
    this._securityProblemBasedEmailPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProblemBasedEmailPayloadInput() {
    return this._securityProblemBasedEmailPayload.internalValue;
  }

  // security_problem_based_jira_payload - computed: false, optional: true, required: false
  private _securityProblemBasedJiraPayload = new AppsecNotificationSecurityProblemBasedJiraPayloadOutputReference(this, "security_problem_based_jira_payload");
  public get securityProblemBasedJiraPayload() {
    return this._securityProblemBasedJiraPayload;
  }
  public putSecurityProblemBasedJiraPayload(value: AppsecNotificationSecurityProblemBasedJiraPayload) {
    this._securityProblemBasedJiraPayload.internalValue = value;
  }
  public resetSecurityProblemBasedJiraPayload() {
    this._securityProblemBasedJiraPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProblemBasedJiraPayloadInput() {
    return this._securityProblemBasedJiraPayload.internalValue;
  }

  // security_problem_based_webhook_payload - computed: false, optional: true, required: false
  private _securityProblemBasedWebhookPayload = new AppsecNotificationSecurityProblemBasedWebhookPayloadOutputReference(this, "security_problem_based_webhook_payload");
  public get securityProblemBasedWebhookPayload() {
    return this._securityProblemBasedWebhookPayload;
  }
  public putSecurityProblemBasedWebhookPayload(value: AppsecNotificationSecurityProblemBasedWebhookPayload) {
    this._securityProblemBasedWebhookPayload.internalValue = value;
  }
  public resetSecurityProblemBasedWebhookPayload() {
    this._securityProblemBasedWebhookPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProblemBasedWebhookPayloadInput() {
    return this._securityProblemBasedWebhookPayload.internalValue;
  }

  // webhook_configuration - computed: false, optional: true, required: false
  private _webhookConfiguration = new AppsecNotificationWebhookConfigurationOutputReference(this, "webhook_configuration");
  public get webhookConfiguration() {
    return this._webhookConfiguration;
  }
  public putWebhookConfiguration(value: AppsecNotificationWebhookConfiguration) {
    this._webhookConfiguration.internalValue = value;
  }
  public resetWebhookConfiguration() {
    this._webhookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigurationInput() {
    return this._webhookConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_candidate_based_alerting_profile: cdktf.stringToTerraform(this._attackCandidateBasedAlertingProfile),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      security_problem_based_alerting_profile: cdktf.stringToTerraform(this._securityProblemBasedAlertingProfile),
      trigger: cdktf.stringToTerraform(this._trigger),
      type: cdktf.stringToTerraform(this._type),
      attack_candidate_based_email_payload: appsecNotificationAttackCandidateBasedEmailPayloadToTerraform(this._attackCandidateBasedEmailPayload.internalValue),
      attack_candidate_based_jira_payload: appsecNotificationAttackCandidateBasedJiraPayloadToTerraform(this._attackCandidateBasedJiraPayload.internalValue),
      attack_candidate_based_webhook_payload: appsecNotificationAttackCandidateBasedWebhookPayloadToTerraform(this._attackCandidateBasedWebhookPayload.internalValue),
      email_configuration: appsecNotificationEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
      jira_configuration: appsecNotificationJiraConfigurationToTerraform(this._jiraConfiguration.internalValue),
      security_problem_based_email_payload: appsecNotificationSecurityProblemBasedEmailPayloadToTerraform(this._securityProblemBasedEmailPayload.internalValue),
      security_problem_based_jira_payload: appsecNotificationSecurityProblemBasedJiraPayloadToTerraform(this._securityProblemBasedJiraPayload.internalValue),
      security_problem_based_webhook_payload: appsecNotificationSecurityProblemBasedWebhookPayloadToTerraform(this._securityProblemBasedWebhookPayload.internalValue),
      webhook_configuration: appsecNotificationWebhookConfigurationToTerraform(this._webhookConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_candidate_based_alerting_profile: {
        value: cdktf.stringToHclTerraform(this._attackCandidateBasedAlertingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_problem_based_alerting_profile: {
        value: cdktf.stringToHclTerraform(this._securityProblemBasedAlertingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_candidate_based_email_payload: {
        value: appsecNotificationAttackCandidateBasedEmailPayloadToHclTerraform(this._attackCandidateBasedEmailPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationAttackCandidateBasedEmailPayloadList",
      },
      attack_candidate_based_jira_payload: {
        value: appsecNotificationAttackCandidateBasedJiraPayloadToHclTerraform(this._attackCandidateBasedJiraPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationAttackCandidateBasedJiraPayloadList",
      },
      attack_candidate_based_webhook_payload: {
        value: appsecNotificationAttackCandidateBasedWebhookPayloadToHclTerraform(this._attackCandidateBasedWebhookPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationAttackCandidateBasedWebhookPayloadList",
      },
      email_configuration: {
        value: appsecNotificationEmailConfigurationToHclTerraform(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationEmailConfigurationList",
      },
      jira_configuration: {
        value: appsecNotificationJiraConfigurationToHclTerraform(this._jiraConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationJiraConfigurationList",
      },
      security_problem_based_email_payload: {
        value: appsecNotificationSecurityProblemBasedEmailPayloadToHclTerraform(this._securityProblemBasedEmailPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationSecurityProblemBasedEmailPayloadList",
      },
      security_problem_based_jira_payload: {
        value: appsecNotificationSecurityProblemBasedJiraPayloadToHclTerraform(this._securityProblemBasedJiraPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationSecurityProblemBasedJiraPayloadList",
      },
      security_problem_based_webhook_payload: {
        value: appsecNotificationSecurityProblemBasedWebhookPayloadToHclTerraform(this._securityProblemBasedWebhookPayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationSecurityProblemBasedWebhookPayloadList",
      },
      webhook_configuration: {
        value: appsecNotificationWebhookConfigurationToHclTerraform(this._webhookConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecNotificationWebhookConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
