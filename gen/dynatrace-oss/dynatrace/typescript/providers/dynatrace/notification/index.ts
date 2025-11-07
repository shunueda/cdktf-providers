// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ansible_tower block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#ansible_tower Notification#ansible_tower}
  */
  readonly ansibleTower?: NotificationAnsibleTower;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#config Notification#config}
  */
  readonly config?: NotificationConfigA;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#email Notification#email}
  */
  readonly email?: NotificationEmail;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#jira Notification#jira}
  */
  readonly jira?: NotificationJira;
  /**
  * ops_genie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#ops_genie Notification#ops_genie}
  */
  readonly opsGenie?: NotificationOpsGenie;
  /**
  * pager_duty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#pager_duty Notification#pager_duty}
  */
  readonly pagerDuty?: NotificationPagerDuty;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#service_now Notification#service_now}
  */
  readonly serviceNow?: NotificationServiceNow;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#slack Notification#slack}
  */
  readonly slack?: NotificationSlack;
  /**
  * trello block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#trello Notification#trello}
  */
  readonly trello?: NotificationTrello;
  /**
  * victor_ops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#victor_ops Notification#victor_ops}
  */
  readonly victorOps?: NotificationVictorOps;
  /**
  * web_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#web_hook Notification#web_hook}
  */
  readonly webHook?: NotificationWebHook;
  /**
  * xmatters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#xmatters Notification#xmatters}
  */
  readonly xmatters?: NotificationXmatters;
}
export interface NotificationAnsibleTower {
  /**
  * Accept any, including self-signed and invalid, SSL certificate (`true`) or only trusted (`false`) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#accept_any_certificate Notification#accept_any_certificate}
  */
  readonly acceptAnyCertificate: boolean | cdktf.IResolvable;
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The custom message of the notification.   This message will be displayed in the extra variables **Message** field of your job template.  You can use the following placeholders:  * `{ImpactedEntities}`: Details about the entities impacted by the problem in form of a JSON array.  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#custom_message Notification#custom_message}
  */
  readonly customMessage: string;
  /**
  * The ID of the target Ansible Tower job template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#job_template_id Notification#job_template_id}
  */
  readonly jobTemplateId: number;
  /**
  * The URL of the target Ansible Tower job template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#job_template_url Notification#job_template_url}
  */
  readonly jobTemplateUrl: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The password for the Ansible Tower account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#password Notification#password}
  */
  readonly password?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The username of the Ansible Tower account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#username Notification#username}
  */
  readonly username: string;
}

export function notificationAnsibleTowerToTerraform(struct?: NotificationAnsibleTowerOutputReference | NotificationAnsibleTower): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    job_template_id: cdktf.numberToTerraform(struct!.jobTemplateId),
    job_template_url: cdktf.stringToTerraform(struct!.jobTemplateUrl),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationAnsibleTowerToHclTerraform(struct?: NotificationAnsibleTowerOutputReference | NotificationAnsibleTower): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_message: {
      value: cdktf.stringToHclTerraform(struct!.customMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_id: {
      value: cdktf.numberToHclTerraform(struct!.jobTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_template_url: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateUrl),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class NotificationAnsibleTowerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationAnsibleTower | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._jobTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateId = this._jobTemplateId;
    }
    if (this._jobTemplateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateUrl = this._jobTemplateUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationAnsibleTower | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._customMessage = undefined;
      this._jobTemplateId = undefined;
      this._jobTemplateUrl = undefined;
      this._name = undefined;
      this._password = undefined;
      this._unknowns = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._customMessage = value.customMessage;
      this._jobTemplateId = value.jobTemplateId;
      this._jobTemplateUrl = value.jobTemplateUrl;
      this._name = value.name;
      this._password = value.password;
      this._unknowns = value.unknowns;
      this._username = value.username;
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

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // custom_message - computed: false, optional: false, required: true
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // job_template_id - computed: false, optional: false, required: true
  private _jobTemplateId?: number; 
  public get jobTemplateId() {
    return this.getNumberAttribute('job_template_id');
  }
  public set jobTemplateId(value: number) {
    this._jobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateIdInput() {
    return this._jobTemplateId;
  }

  // job_template_url - computed: false, optional: false, required: true
  private _jobTemplateUrl?: string; 
  public get jobTemplateUrl() {
    return this.getStringAttribute('job_template_url');
  }
  public set jobTemplateUrl(value: string) {
    this._jobTemplateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateUrlInput() {
    return this._jobTemplateUrl;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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
export interface NotificationConfigA {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * Defines the actual set of fields depending on the value. See one of the following objects:  * `EMAIL` -> EmailNotificationConfig  * `PAGER_DUTY` -> PagerDutyNotificationConfig  * `WEBHOOK` -> WebHookNotificationConfig  * `SLACK` -> SlackNotificationConfig  * `HIPCHAT` -> HipChatNotificationConfig  * `VICTOROPS` -> VictorOpsNotificationConfig  * `SERVICE_NOW` -> ServiceNowNotificationConfig  * `XMATTERS` -> XMattersNotificationConfig  * `ANSIBLETOWER` -> AnsibleTowerNotificationConfig  * `OPS_GENIE` -> OpsGenieNotificationConfig  * `JIRA` -> JiraNotificationConfig  * `TRELLO` -> TrelloNotificationConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#type Notification#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationConfigAToTerraform(struct?: NotificationConfigAOutputReference | NotificationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationConfigAToHclTerraform(struct?: NotificationConfigAOutputReference | NotificationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._name = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._name = value.name;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationEmail {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The list of the email BCC-recipients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#bcc_receivers Notification#bcc_receivers}
  */
  readonly bccReceivers?: string[];
  /**
  * The template of the email notification.  You can use the following placeholders:  * `{ImpactedEntities}`: Details about the entities impacted by the problem in form of a JSON array.  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsHTML}`: All problem event details, including root cause, as an HTML-formatted string.  * `{ProblemDetailsJSON}`: All problem event details, including root cause, as a JSON object.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#body Notification#body}
  */
  readonly body: string;
  /**
  * The list of the email CC-recipients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#cc_receivers Notification#cc_receivers}
  */
  readonly ccReceivers?: string[];
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The list of the email recipients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#receivers Notification#receivers}
  */
  readonly receivers?: string[];
  /**
  * The subject of the email notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#subject Notification#subject}
  */
  readonly subject: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationEmailToTerraform(struct?: NotificationEmailOutputReference | NotificationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    bcc_receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bccReceivers),
    body: cdktf.stringToTerraform(struct!.body),
    cc_receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ccReceivers),
    name: cdktf.stringToTerraform(struct!.name),
    receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receivers),
    subject: cdktf.stringToTerraform(struct!.subject),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationEmailToHclTerraform(struct?: NotificationEmailOutputReference | NotificationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bcc_receivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bccReceivers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cc_receivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ccReceivers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receivers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._bccReceivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bccReceivers = this._bccReceivers;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._ccReceivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccReceivers = this._ccReceivers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._receivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivers = this._receivers;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._bccReceivers = undefined;
      this._body = undefined;
      this._ccReceivers = undefined;
      this._name = undefined;
      this._receivers = undefined;
      this._subject = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._bccReceivers = value.bccReceivers;
      this._body = value.body;
      this._ccReceivers = value.ccReceivers;
      this._name = value.name;
      this._receivers = value.receivers;
      this._subject = value.subject;
      this._unknowns = value.unknowns;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // bcc_receivers - computed: false, optional: true, required: false
  private _bccReceivers?: string[]; 
  public get bccReceivers() {
    return cdktf.Fn.tolist(this.getListAttribute('bcc_receivers'));
  }
  public set bccReceivers(value: string[]) {
    this._bccReceivers = value;
  }
  public resetBccReceivers() {
    this._bccReceivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccReceiversInput() {
    return this._bccReceivers;
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

  // cc_receivers - computed: false, optional: true, required: false
  private _ccReceivers?: string[]; 
  public get ccReceivers() {
    return cdktf.Fn.tolist(this.getListAttribute('cc_receivers'));
  }
  public set ccReceivers(value: string[]) {
    this._ccReceivers = value;
  }
  public resetCcReceivers() {
    this._ccReceivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccReceiversInput() {
    return this._ccReceivers;
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

  // receivers - computed: false, optional: true, required: false
  private _receivers?: string[]; 
  public get receivers() {
    return cdktf.Fn.tolist(this.getListAttribute('receivers'));
  }
  public set receivers(value: string[]) {
    this._receivers = value;
  }
  public resetReceivers() {
    this._receivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationJira {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The description of the Jira issue to be created by this notification.   You can use same placeholders as in issue summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#description Notification#description}
  */
  readonly description: string;
  /**
  * The type of the Jira issue to be created by this notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#issue_type Notification#issue_type}
  */
  readonly issueType: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The password for the Jira profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#password Notification#password}
  */
  readonly password?: string;
  /**
  * The project key of the Jira issue to be created by this notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#project_key Notification#project_key}
  */
  readonly projectKey: string;
  /**
  * The summary of the Jira issue to be created by this notification.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#summary Notification#summary}
  */
  readonly summary: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The URL of the Jira API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#url Notification#url}
  */
  readonly url: string;
  /**
  * The username of the Jira profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#username Notification#username}
  */
  readonly username: string;
}

export function notificationJiraToTerraform(struct?: NotificationJiraOutputReference | NotificationJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    description: cdktf.stringToTerraform(struct!.description),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    summary: cdktf.stringToTerraform(struct!.summary),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationJiraToHclTerraform(struct?: NotificationJiraOutputReference | NotificationJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class NotificationJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
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

  public set internalValue(value: NotificationJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._description = undefined;
      this._issueType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._projectKey = undefined;
      this._summary = undefined;
      this._unknowns = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._description = value.description;
      this._issueType = value.issueType;
      this._name = value.name;
      this._password = value.password;
      this._projectKey = value.projectKey;
      this._summary = value.summary;
      this._unknowns = value.unknowns;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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
export interface NotificationOpsGenie {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The API key to access OpsGenie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#api_key Notification#api_key}
  */
  readonly apiKey?: string;
  /**
  * The region domain of the OpsGenie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#domain Notification#domain}
  */
  readonly domain: string;
  /**
  * The content of the message.  You can use the following placeholders:  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#message Notification#message}
  */
  readonly message: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationOpsGenieToTerraform(struct?: NotificationOpsGenieOutputReference | NotificationOpsGenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    domain: cdktf.stringToTerraform(struct!.domain),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationOpsGenieToHclTerraform(struct?: NotificationOpsGenieOutputReference | NotificationOpsGenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationOpsGenieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationOpsGenie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationOpsGenie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._apiKey = undefined;
      this._domain = undefined;
      this._message = undefined;
      this._name = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._apiKey = value.apiKey;
      this._domain = value.domain;
      this._message = value.message;
      this._name = value.name;
      this._unknowns = value.unknowns;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationPagerDuty {
  /**
  * The name of the PagerDuty account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#account Notification#account}
  */
  readonly account: string;
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The API key to access PagerDuty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#service_api_key Notification#service_api_key}
  */
  readonly serviceApiKey?: string;
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#service_name Notification#service_name}
  */
  readonly serviceName: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationPagerDutyToTerraform(struct?: NotificationPagerDutyOutputReference | NotificationPagerDuty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    name: cdktf.stringToTerraform(struct!.name),
    service_api_key: cdktf.stringToTerraform(struct!.serviceApiKey),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationPagerDutyToHclTerraform(struct?: NotificationPagerDutyOutputReference | NotificationPagerDuty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
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
    service_api_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPagerDutyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceApiKey = this._serviceApiKey;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPagerDuty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._name = undefined;
      this._serviceApiKey = undefined;
      this._serviceName = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._name = value.name;
      this._serviceApiKey = value.serviceApiKey;
      this._serviceName = value.serviceName;
      this._unknowns = value.unknowns;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
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

  // service_api_key - computed: false, optional: true, required: false
  private _serviceApiKey?: string; 
  public get serviceApiKey() {
    return this.getStringAttribute('service_api_key');
  }
  public set serviceApiKey(value: string) {
    this._serviceApiKey = value;
  }
  public resetServiceApiKey() {
    this._serviceApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceApiKeyInput() {
    return this._serviceApiKey;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationServiceNow {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The ServiceNow instance identifier. It refers to the first part of your own ServiceNow URL.   This field is mutually exclusive with the **url** field. You can only use one of them
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#instance_name Notification#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The content of the ServiceNow description.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsHTML}`: All problem event details, including root cause, as an HTML-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#message Notification#message}
  */
  readonly message: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The username to the ServiceNow account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#password Notification#password}
  */
  readonly password?: string;
  /**
  * Send events into ServiceNow ITOM (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#send_events Notification#send_events}
  */
  readonly sendEvents: boolean | cdktf.IResolvable;
  /**
  * Send incidents into ServiceNow ITSM (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#send_incidents Notification#send_incidents}
  */
  readonly sendIncidents: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The URL of the on-premise ServiceNow installation.   This field is mutually exclusive with the **instanceName** field. You can only use one of them
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#url Notification#url}
  */
  readonly url?: string;
  /**
  * The username of the ServiceNow account.   Make sure that your user account has the `rest_service`, `web_request_admin`, and `x_dynat_ruxit.Integration` roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#username Notification#username}
  */
  readonly username: string;
}

export function notificationServiceNowToTerraform(struct?: NotificationServiceNowOutputReference | NotificationServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    send_events: cdktf.booleanToTerraform(struct!.sendEvents),
    send_incidents: cdktf.booleanToTerraform(struct!.sendIncidents),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationServiceNowToHclTerraform(struct?: NotificationServiceNowOutputReference | NotificationServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_events: {
      value: cdktf.booleanToHclTerraform(struct!.sendEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_incidents: {
      value: cdktf.booleanToHclTerraform(struct!.sendIncidents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class NotificationServiceNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sendEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEvents = this._sendEvents;
    }
    if (this._sendIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIncidents = this._sendIncidents;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
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

  public set internalValue(value: NotificationServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._instanceName = undefined;
      this._message = undefined;
      this._name = undefined;
      this._password = undefined;
      this._sendEvents = undefined;
      this._sendIncidents = undefined;
      this._unknowns = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._instanceName = value.instanceName;
      this._message = value.message;
      this._name = value.name;
      this._password = value.password;
      this._sendEvents = value.sendEvents;
      this._sendIncidents = value.sendIncidents;
      this._unknowns = value.unknowns;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // send_events - computed: false, optional: false, required: true
  private _sendEvents?: boolean | cdktf.IResolvable; 
  public get sendEvents() {
    return this.getBooleanAttribute('send_events');
  }
  public set sendEvents(value: boolean | cdktf.IResolvable) {
    this._sendEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEventsInput() {
    return this._sendEvents;
  }

  // send_incidents - computed: false, optional: false, required: true
  private _sendIncidents?: boolean | cdktf.IResolvable; 
  public get sendIncidents() {
    return this.getBooleanAttribute('send_incidents');
  }
  public set sendIncidents(value: boolean | cdktf.IResolvable) {
    this._sendIncidents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIncidentsInput() {
    return this._sendIncidents;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
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
export interface NotificationSlack {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The channel (for example, `#general`) or the user (for example, `@john.smith`) to send the message to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#channel Notification#channel}
  */
  readonly channel: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The content of the message.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#title Notification#title}
  */
  readonly title: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The URL of the Slack WebHook.  This is confidential information, therefore GET requests return this field with the `null` value, and it is optional for PUT requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#url Notification#url}
  */
  readonly url?: string;
}

export function notificationSlackToTerraform(struct?: NotificationSlackOutputReference | NotificationSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    channel: cdktf.stringToTerraform(struct!.channel),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function notificationSlackToHclTerraform(struct?: NotificationSlackOutputReference | NotificationSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._channel = undefined;
      this._name = undefined;
      this._title = undefined;
      this._unknowns = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._channel = value.channel;
      this._name = value.name;
      this._title = value.title;
      this._unknowns = value.unknowns;
      this._url = value.url;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NotificationTrello {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The application key for the Trello account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#application_key Notification#application_key}
  */
  readonly applicationKey: string;
  /**
  * The application token for the Trello account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#authorization_token Notification#authorization_token}
  */
  readonly authorizationToken?: string;
  /**
  * The Trello board to which the card should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#board_id Notification#board_id}
  */
  readonly boardId: string;
  /**
  * The description of the Trello card.   You can use same placeholders as in card text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#description Notification#description}
  */
  readonly description: string;
  /**
  * The Trello list to which the card should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#list_id Notification#list_id}
  */
  readonly listId: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The Trello list to which the card of the resolved problem should be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#resolved_list_id Notification#resolved_list_id}
  */
  readonly resolvedListId: string;
  /**
  * The text of the generated Trello card.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#text Notification#text}
  */
  readonly text: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationTrelloToTerraform(struct?: NotificationTrelloOutputReference | NotificationTrello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    authorization_token: cdktf.stringToTerraform(struct!.authorizationToken),
    board_id: cdktf.stringToTerraform(struct!.boardId),
    description: cdktf.stringToTerraform(struct!.description),
    list_id: cdktf.stringToTerraform(struct!.listId),
    name: cdktf.stringToTerraform(struct!.name),
    resolved_list_id: cdktf.stringToTerraform(struct!.resolvedListId),
    text: cdktf.stringToTerraform(struct!.text),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationTrelloToHclTerraform(struct?: NotificationTrelloOutputReference | NotificationTrello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_token: {
      value: cdktf.stringToHclTerraform(struct!.authorizationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    board_id: {
      value: cdktf.stringToHclTerraform(struct!.boardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_id: {
      value: cdktf.stringToHclTerraform(struct!.listId),
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
    resolved_list_id: {
      value: cdktf.stringToHclTerraform(struct!.resolvedListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTrelloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationTrello | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._authorizationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationToken = this._authorizationToken;
    }
    if (this._boardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boardId = this._boardId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._listId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listId = this._listId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolvedListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedListId = this._resolvedListId;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTrello | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._applicationKey = undefined;
      this._authorizationToken = undefined;
      this._boardId = undefined;
      this._description = undefined;
      this._listId = undefined;
      this._name = undefined;
      this._resolvedListId = undefined;
      this._text = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._applicationKey = value.applicationKey;
      this._authorizationToken = value.authorizationToken;
      this._boardId = value.boardId;
      this._description = value.description;
      this._listId = value.listId;
      this._name = value.name;
      this._resolvedListId = value.resolvedListId;
      this._text = value.text;
      this._unknowns = value.unknowns;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // authorization_token - computed: false, optional: true, required: false
  private _authorizationToken?: string; 
  public get authorizationToken() {
    return this.getStringAttribute('authorization_token');
  }
  public set authorizationToken(value: string) {
    this._authorizationToken = value;
  }
  public resetAuthorizationToken() {
    this._authorizationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTokenInput() {
    return this._authorizationToken;
  }

  // board_id - computed: false, optional: false, required: true
  private _boardId?: string; 
  public get boardId() {
    return this.getStringAttribute('board_id');
  }
  public set boardId(value: string) {
    this._boardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boardIdInput() {
    return this._boardId;
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

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
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

  // resolved_list_id - computed: false, optional: false, required: true
  private _resolvedListId?: string; 
  public get resolvedListId() {
    return this.getStringAttribute('resolved_list_id');
  }
  public set resolvedListId(value: string) {
    this._resolvedListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedListIdInput() {
    return this._resolvedListId;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationVictorOps {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The API key for the target VictorOps account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#api_key Notification#api_key}
  */
  readonly apiKey?: string;
  /**
  * The content of the message.  You can use the following placeholders:  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#message Notification#message}
  */
  readonly message: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The routing key, defining the group to be notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#routing_key Notification#routing_key}
  */
  readonly routingKey: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
}

export function notificationVictorOpsToTerraform(struct?: NotificationVictorOpsOutputReference | NotificationVictorOps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function notificationVictorOpsToHclTerraform(struct?: NotificationVictorOpsOutputReference | NotificationVictorOps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    routing_key: {
      value: cdktf.stringToHclTerraform(struct!.routingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationVictorOpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationVictorOps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationVictorOps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._apiKey = undefined;
      this._message = undefined;
      this._name = undefined;
      this._routingKey = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._apiKey = value.apiKey;
      this._message = value.message;
      this._name = value.name;
      this._routingKey = value.routingKey;
      this._unknowns = value.unknowns;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // routing_key - computed: false, optional: false, required: true
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface NotificationWebHookHeader {
  /**
  * The name of the HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The value of the HTTP header. May contain an empty value.   Required when creating a new notification.  For the **Authorization** header, GET requests return the `null` value.  If you want update a notification configuration with an **Authorization** header which you want to remain intact, set the **Authorization** header with the `null` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#value Notification#value}
  */
  readonly value?: string;
}

export function notificationWebHookHeaderToTerraform(struct?: NotificationWebHookHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationWebHookHeaderToHclTerraform(struct?: NotificationWebHookHeader | cdktf.IResolvable): any {
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

export class NotificationWebHookHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationWebHookHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationWebHookHeader | cdktf.IResolvable | undefined) {
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

export class NotificationWebHookHeaderList extends cdktf.ComplexList {
  public internalValue? : NotificationWebHookHeader[] | cdktf.IResolvable

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
  public get(index: number): NotificationWebHookHeaderOutputReference {
    return new NotificationWebHookHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationWebHook {
  /**
  * Accept any, including self-signed and invalid, SSL certificate (`true`) or only trusted (`false`) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#accept_any_certificate Notification#accept_any_certificate}
  */
  readonly acceptAnyCertificate: boolean | cdktf.IResolvable;
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * Call webhook if new events merge into existing problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#notify_event_merges Notification#notify_event_merges}
  */
  readonly notifyEventMerges?: boolean | cdktf.IResolvable;
  /**
  * The content of the notification message.  You can use the following placeholders:  * `{ImpactedEntities}`: Details about the entities impacted by the problem in form of a JSON array.  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsHTML}`: All problem event details, including root cause, as an HTML-formatted string.  * `{ProblemDetailsJSON}`: All problem event details, including root cause, as a JSON object.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#payload Notification#payload}
  */
  readonly payload: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The URL of the WebHook endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#url Notification#url}
  */
  readonly url: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#header Notification#header}
  */
  readonly header?: NotificationWebHookHeader[] | cdktf.IResolvable;
}

export function notificationWebHookToTerraform(struct?: NotificationWebHookOutputReference | NotificationWebHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    name: cdktf.stringToTerraform(struct!.name),
    notify_event_merges: cdktf.booleanToTerraform(struct!.notifyEventMerges),
    payload: cdktf.stringToTerraform(struct!.payload),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    url: cdktf.stringToTerraform(struct!.url),
    header: cdktf.listMapper(notificationWebHookHeaderToTerraform, true)(struct!.header),
  }
}


export function notificationWebHookToHclTerraform(struct?: NotificationWebHookOutputReference | NotificationWebHook): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
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
    notify_event_merges: {
      value: cdktf.booleanToHclTerraform(struct!.notifyEventMerges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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
    header: {
      value: cdktf.listMapperHcl(notificationWebHookHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationWebHookHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationWebHookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationWebHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyEventMerges !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEventMerges = this._notifyEventMerges;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationWebHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._name = undefined;
      this._notifyEventMerges = undefined;
      this._payload = undefined;
      this._unknowns = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._name = value.name;
      this._notifyEventMerges = value.notifyEventMerges;
      this._payload = value.payload;
      this._unknowns = value.unknowns;
      this._url = value.url;
      this._header.internalValue = value.header;
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

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
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

  // notify_event_merges - computed: false, optional: true, required: false
  private _notifyEventMerges?: boolean | cdktf.IResolvable; 
  public get notifyEventMerges() {
    return this.getBooleanAttribute('notify_event_merges');
  }
  public set notifyEventMerges(value: boolean | cdktf.IResolvable) {
    this._notifyEventMerges = value;
  }
  public resetNotifyEventMerges() {
    this._notifyEventMerges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEventMergesInput() {
    return this._notifyEventMerges;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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

  // header - computed: false, optional: true, required: false
  private _header = new NotificationWebHookHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: NotificationWebHookHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface NotificationXmattersHeader {
  /**
  * The name of the HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The value of the HTTP header. May contain an empty value.   Required when creating a new notification.  For the **Authorization** header, GET requests return the `null` value.  If you want update a notification configuration with an **Authorization** header which you want to remain intact, set the **Authorization** header with the `null` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#value Notification#value}
  */
  readonly value?: string;
}

export function notificationXmattersHeaderToTerraform(struct?: NotificationXmattersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationXmattersHeaderToHclTerraform(struct?: NotificationXmattersHeader | cdktf.IResolvable): any {
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

export class NotificationXmattersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationXmattersHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationXmattersHeader | cdktf.IResolvable | undefined) {
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

export class NotificationXmattersHeaderList extends cdktf.ComplexList {
  public internalValue? : NotificationXmattersHeader[] | cdktf.IResolvable

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
  public get(index: number): NotificationXmattersHeaderOutputReference {
    return new NotificationXmattersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationXmatters {
  /**
  * Accept any, including self-signed and invalid, SSL certificate (`true`) or only trusted (`false`) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#accept_any_certificate Notification#accept_any_certificate}
  */
  readonly acceptAnyCertificate: boolean | cdktf.IResolvable;
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#active Notification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#alerting_profile Notification#alerting_profile}
  */
  readonly alertingProfile: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * The content of the notification message.  You can use the following placeholders:  * `{ImpactedEntities}`: Details about the entities impacted by the problem in form of a JSON array.  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsHTML}`: All problem event details, including root cause, as an HTML-formatted string.  * `{ProblemDetailsJSON}`: All problem event details, including root cause, as a JSON object.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#payload Notification#payload}
  */
  readonly payload: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#unknowns Notification#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The URL of the xMatters WebHook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#url Notification#url}
  */
  readonly url: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#header Notification#header}
  */
  readonly header?: NotificationXmattersHeader[] | cdktf.IResolvable;
}

export function notificationXmattersToTerraform(struct?: NotificationXmattersOutputReference | NotificationXmatters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    active: cdktf.booleanToTerraform(struct!.active),
    alerting_profile: cdktf.stringToTerraform(struct!.alertingProfile),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.stringToTerraform(struct!.payload),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    url: cdktf.stringToTerraform(struct!.url),
    header: cdktf.listMapper(notificationXmattersHeaderToTerraform, true)(struct!.header),
  }
}


export function notificationXmattersToHclTerraform(struct?: NotificationXmattersOutputReference | NotificationXmatters): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_profile: {
      value: cdktf.stringToHclTerraform(struct!.alertingProfile),
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
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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
    header: {
      value: cdktf.listMapperHcl(notificationXmattersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationXmattersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationXmattersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationXmatters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alertingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingProfile = this._alertingProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationXmatters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._active = undefined;
      this._alertingProfile = undefined;
      this._name = undefined;
      this._payload = undefined;
      this._unknowns = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._active = value.active;
      this._alertingProfile = value.alertingProfile;
      this._name = value.name;
      this._payload = value.payload;
      this._unknowns = value.unknowns;
      this._url = value.url;
      this._header.internalValue = value.header;
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

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alerting_profile - computed: false, optional: false, required: true
  private _alertingProfile?: string; 
  public get alertingProfile() {
    return this.getStringAttribute('alerting_profile');
  }
  public set alertingProfile(value: string) {
    this._alertingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingProfileInput() {
    return this._alertingProfile;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
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

  // header - computed: false, optional: true, required: false
  private _header = new NotificationXmattersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: NotificationXmattersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification dynatrace_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/notification dynatrace_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_notification',
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
    this._id = config.id;
    this._ansibleTower.internalValue = config.ansibleTower;
    this._config.internalValue = config.config;
    this._email.internalValue = config.email;
    this._jira.internalValue = config.jira;
    this._opsGenie.internalValue = config.opsGenie;
    this._pagerDuty.internalValue = config.pagerDuty;
    this._serviceNow.internalValue = config.serviceNow;
    this._slack.internalValue = config.slack;
    this._trello.internalValue = config.trello;
    this._victorOps.internalValue = config.victorOps;
    this._webHook.internalValue = config.webHook;
    this._xmatters.internalValue = config.xmatters;
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

  // ansible_tower - computed: false, optional: true, required: false
  private _ansibleTower = new NotificationAnsibleTowerOutputReference(this, "ansible_tower");
  public get ansibleTower() {
    return this._ansibleTower;
  }
  public putAnsibleTower(value: NotificationAnsibleTower) {
    this._ansibleTower.internalValue = value;
  }
  public resetAnsibleTower() {
    this._ansibleTower.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansibleTowerInput() {
    return this._ansibleTower.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new NotificationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: NotificationConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new NotificationEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: NotificationEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new NotificationJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: NotificationJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // ops_genie - computed: false, optional: true, required: false
  private _opsGenie = new NotificationOpsGenieOutputReference(this, "ops_genie");
  public get opsGenie() {
    return this._opsGenie;
  }
  public putOpsGenie(value: NotificationOpsGenie) {
    this._opsGenie.internalValue = value;
  }
  public resetOpsGenie() {
    this._opsGenie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsGenieInput() {
    return this._opsGenie.internalValue;
  }

  // pager_duty - computed: false, optional: true, required: false
  private _pagerDuty = new NotificationPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }
  public putPagerDuty(value: NotificationPagerDuty) {
    this._pagerDuty.internalValue = value;
  }
  public resetPagerDuty() {
    this._pagerDuty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyInput() {
    return this._pagerDuty.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new NotificationServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: NotificationServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new NotificationSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: NotificationSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // trello - computed: false, optional: true, required: false
  private _trello = new NotificationTrelloOutputReference(this, "trello");
  public get trello() {
    return this._trello;
  }
  public putTrello(value: NotificationTrello) {
    this._trello.internalValue = value;
  }
  public resetTrello() {
    this._trello.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trelloInput() {
    return this._trello.internalValue;
  }

  // victor_ops - computed: false, optional: true, required: false
  private _victorOps = new NotificationVictorOpsOutputReference(this, "victor_ops");
  public get victorOps() {
    return this._victorOps;
  }
  public putVictorOps(value: NotificationVictorOps) {
    this._victorOps.internalValue = value;
  }
  public resetVictorOps() {
    this._victorOps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsInput() {
    return this._victorOps.internalValue;
  }

  // web_hook - computed: false, optional: true, required: false
  private _webHook = new NotificationWebHookOutputReference(this, "web_hook");
  public get webHook() {
    return this._webHook;
  }
  public putWebHook(value: NotificationWebHook) {
    this._webHook.internalValue = value;
  }
  public resetWebHook() {
    this._webHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHookInput() {
    return this._webHook.internalValue;
  }

  // xmatters - computed: false, optional: true, required: false
  private _xmatters = new NotificationXmattersOutputReference(this, "xmatters");
  public get xmatters() {
    return this._xmatters;
  }
  public putXmatters(value: NotificationXmatters) {
    this._xmatters.internalValue = value;
  }
  public resetXmatters() {
    this._xmatters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmattersInput() {
    return this._xmatters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ansible_tower: notificationAnsibleTowerToTerraform(this._ansibleTower.internalValue),
      config: notificationConfigAToTerraform(this._config.internalValue),
      email: notificationEmailToTerraform(this._email.internalValue),
      jira: notificationJiraToTerraform(this._jira.internalValue),
      ops_genie: notificationOpsGenieToTerraform(this._opsGenie.internalValue),
      pager_duty: notificationPagerDutyToTerraform(this._pagerDuty.internalValue),
      service_now: notificationServiceNowToTerraform(this._serviceNow.internalValue),
      slack: notificationSlackToTerraform(this._slack.internalValue),
      trello: notificationTrelloToTerraform(this._trello.internalValue),
      victor_ops: notificationVictorOpsToTerraform(this._victorOps.internalValue),
      web_hook: notificationWebHookToTerraform(this._webHook.internalValue),
      xmatters: notificationXmattersToTerraform(this._xmatters.internalValue),
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
      ansible_tower: {
        value: notificationAnsibleTowerToHclTerraform(this._ansibleTower.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationAnsibleTowerList",
      },
      config: {
        value: notificationConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationConfigAList",
      },
      email: {
        value: notificationEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationEmailList",
      },
      jira: {
        value: notificationJiraToHclTerraform(this._jira.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationJiraList",
      },
      ops_genie: {
        value: notificationOpsGenieToHclTerraform(this._opsGenie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationOpsGenieList",
      },
      pager_duty: {
        value: notificationPagerDutyToHclTerraform(this._pagerDuty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPagerDutyList",
      },
      service_now: {
        value: notificationServiceNowToHclTerraform(this._serviceNow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationServiceNowList",
      },
      slack: {
        value: notificationSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationSlackList",
      },
      trello: {
        value: notificationTrelloToHclTerraform(this._trello.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationTrelloList",
      },
      victor_ops: {
        value: notificationVictorOpsToHclTerraform(this._victorOps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationVictorOpsList",
      },
      web_hook: {
        value: notificationWebHookToHclTerraform(this._webHook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationWebHookList",
      },
      xmatters: {
        value: notificationXmattersToHclTerraform(this._xmatters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationXmattersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
