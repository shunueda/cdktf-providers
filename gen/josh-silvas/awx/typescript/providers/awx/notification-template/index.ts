// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the notification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#description NotificationTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the notification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name: string;
  /**
  * The type of notification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#notification_type NotificationTemplate#notification_type}
  */
  readonly notificationType: string;
  /**
  * The organization ID to associate with the notification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#organization_id NotificationTemplate#organization_id}
  */
  readonly organizationId: string;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#messages NotificationTemplate#messages}
  */
  readonly messages?: NotificationTemplateMessages[] | cdktf.IResolvable;
  /**
  * notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#notification_configuration NotificationTemplate#notification_configuration}
  */
  readonly notificationConfiguration?: NotificationTemplateNotificationConfiguration[] | cdktf.IResolvable;
}
export interface NotificationTemplateMessages {
  /**
  * The message to send when the job starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#error NotificationTemplate#error}
  */
  readonly error?: { [key: string]: string };
  /**
  * The message to send when the job starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#started NotificationTemplate#started}
  */
  readonly started?: { [key: string]: string };
  /**
  * The message to send when the job starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#success NotificationTemplate#success}
  */
  readonly success?: { [key: string]: string };
}

export function notificationTemplateMessagesToTerraform(struct?: NotificationTemplateMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.error),
    started: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.started),
    success: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.success),
  }
}


export function notificationTemplateMessagesToHclTerraform(struct?: NotificationTemplateMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.error),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    started: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.started),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    success: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.success),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._started !== undefined) {
      hasAnyValues = true;
      internalValueResult.started = this._started;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._started = undefined;
      this._success = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._started = value.started;
      this._success = value.success;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: { [key: string]: string }; 
  public get error() {
    return this.getStringMapAttribute('error');
  }
  public set error(value: { [key: string]: string }) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // started - computed: false, optional: true, required: false
  private _started?: { [key: string]: string }; 
  public get started() {
    return this.getStringMapAttribute('started');
  }
  public set started(value: { [key: string]: string }) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // success - computed: false, optional: true, required: false
  private _success?: { [key: string]: string }; 
  public get success() {
    return this.getStringMapAttribute('success');
  }
  public set success(value: { [key: string]: string }) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }
}

export class NotificationTemplateMessagesList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateMessages[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateMessagesOutputReference {
    return new NotificationTemplateMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateNotificationConfiguration {
  /**
  * Twilio account SID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#account_sid NotificationTemplate#account_sid}
  */
  readonly accountSid?: string;
  /**
  * Twilio account token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#account_token NotificationTemplate#account_token}
  */
  readonly accountToken?: string;
  /**
  * The Slack channel(s) to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#channels NotificationTemplate#channels}
  */
  readonly channels?: string[];
  /**
  * PagerDuty client name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#client_name NotificationTemplate#client_name}
  */
  readonly clientName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#disable_ssl_verification NotificationTemplate#disable_ssl_verification}
  */
  readonly disableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Twilio from number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#from_number NotificationTemplate#from_number}
  */
  readonly fromNumber?: string;
  /**
  * Grafana API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#grafana_key NotificationTemplate#grafana_key}
  */
  readonly grafanaKey?: string;
  /**
  * Grafana URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#grafana_url NotificationTemplate#grafana_url}
  */
  readonly grafanaUrl?: string;
  /**
  * The headers to include in the webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#headers NotificationTemplate#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#hex_color NotificationTemplate#hex_color}
  */
  readonly hexColor?: string;
  /**
  * SMTP server hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#host NotificationTemplate#host}
  */
  readonly host?: string;
  /**
  * The HTTP method to use when sending the webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#http_method NotificationTemplate#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#mattermost_no_verify_ssl NotificationTemplate#mattermost_no_verify_ssl}
  */
  readonly mattermostNoVerifySsl?: boolean | cdktf.IResolvable;
  /**
  * The Mattermost URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#mattermost_url NotificationTemplate#mattermost_url}
  */
  readonly mattermostUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#nickname NotificationTemplate#nickname}
  */
  readonly nickname?: string;
  /**
  * HTTP or SMTP password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#password NotificationTemplate#password}
  */
  readonly password?: string;
  /**
  * SMTP or IRC server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#port NotificationTemplate#port}
  */
  readonly port?: number;
  /**
  * The email address(es) to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#recipients NotificationTemplate#recipients}
  */
  readonly recipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#rocketchat_no_verify_ssl NotificationTemplate#rocketchat_no_verify_ssl}
  */
  readonly rocketchatNoVerifySsl?: boolean | cdktf.IResolvable;
  /**
  * The RocketChat URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#rocketchat_url NotificationTemplate#rocketchat_url}
  */
  readonly rocketchatUrl?: string;
  /**
  * The email address to send notifications from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#sender NotificationTemplate#sender}
  */
  readonly sender?: string;
  /**
  * The IRC server hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#server NotificationTemplate#server}
  */
  readonly server?: string;
  /**
  * PagerDuty service key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#service_key NotificationTemplate#service_key}
  */
  readonly serviceKey?: string;
  /**
  * PagerDuty subdomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#subdomain NotificationTemplate#subdomain}
  */
  readonly subdomain?: string;
  /**
  * The IRC channel(s) to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#targets NotificationTemplate#targets}
  */
  readonly targets?: string[];
  /**
  * SMTP server timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#timeout NotificationTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Twilio to numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#to_numbers NotificationTemplate#to_numbers}
  */
  readonly toNumbers?: string[];
  /**
  * Slack or PagerDuty authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#token NotificationTemplate#token}
  */
  readonly token?: string;
  /**
  * The HTTP webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#url NotificationTemplate#url}
  */
  readonly url?: string;
  /**
  * Use SSL for IRC or SMTP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#use_ssl NotificationTemplate#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Use TLS for SMTP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#use_tls NotificationTemplate#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
  /**
  * HTTP or SMTP username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#username NotificationTemplate#username}
  */
  readonly username?: string;
}

export function notificationTemplateNotificationConfigurationToTerraform(struct?: NotificationTemplateNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_sid: cdktf.stringToTerraform(struct!.accountSid),
    account_token: cdktf.stringToTerraform(struct!.accountToken),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    client_name: cdktf.stringToTerraform(struct!.clientName),
    disable_ssl_verification: cdktf.booleanToTerraform(struct!.disableSslVerification),
    from_number: cdktf.stringToTerraform(struct!.fromNumber),
    grafana_key: cdktf.stringToTerraform(struct!.grafanaKey),
    grafana_url: cdktf.stringToTerraform(struct!.grafanaUrl),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    hex_color: cdktf.stringToTerraform(struct!.hexColor),
    host: cdktf.stringToTerraform(struct!.host),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    mattermost_no_verify_ssl: cdktf.booleanToTerraform(struct!.mattermostNoVerifySsl),
    mattermost_url: cdktf.stringToTerraform(struct!.mattermostUrl),
    nickname: cdktf.stringToTerraform(struct!.nickname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    rocketchat_no_verify_ssl: cdktf.booleanToTerraform(struct!.rocketchatNoVerifySsl),
    rocketchat_url: cdktf.stringToTerraform(struct!.rocketchatUrl),
    sender: cdktf.stringToTerraform(struct!.sender),
    server: cdktf.stringToTerraform(struct!.server),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    to_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toNumbers),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationTemplateNotificationConfigurationToHclTerraform(struct?: NotificationTemplateNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_sid: {
      value: cdktf.stringToHclTerraform(struct!.accountSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_token: {
      value: cdktf.stringToHclTerraform(struct!.accountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_name: {
      value: cdktf.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_ssl_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableSslVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_number: {
      value: cdktf.stringToHclTerraform(struct!.fromNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_key: {
      value: cdktf.stringToHclTerraform(struct!.grafanaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_url: {
      value: cdktf.stringToHclTerraform(struct!.grafanaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hex_color: {
      value: cdktf.stringToHclTerraform(struct!.hexColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mattermost_no_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.mattermostNoVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mattermost_url: {
      value: cdktf.stringToHclTerraform(struct!.mattermostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nickname: {
      value: cdktf.stringToHclTerraform(struct!.nickname),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rocketchat_no_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.rocketchatNoVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rocketchat_url: {
      value: cdktf.stringToHclTerraform(struct!.rocketchatUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender: {
      value: cdktf.stringToHclTerraform(struct!.sender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class NotificationTemplateNotificationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateNotificationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSid = this._accountSid;
    }
    if (this._accountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountToken = this._accountToken;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._disableSslVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSslVerification = this._disableSslVerification;
    }
    if (this._fromNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNumber = this._fromNumber;
    }
    if (this._grafanaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaKey = this._grafanaKey;
    }
    if (this._grafanaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaUrl = this._grafanaUrl;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hexColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexColor = this._hexColor;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._mattermostNoVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostNoVerifySsl = this._mattermostNoVerifySsl;
    }
    if (this._mattermostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostUrl = this._mattermostUrl;
    }
    if (this._nickname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickname = this._nickname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._rocketchatNoVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketchatNoVerifySsl = this._rocketchatNoVerifySsl;
    }
    if (this._rocketchatUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketchatUrl = this._rocketchatUrl;
    }
    if (this._sender !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._toNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNumbers = this._toNumbers;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateNotificationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountSid = undefined;
      this._accountToken = undefined;
      this._channels = undefined;
      this._clientName = undefined;
      this._disableSslVerification = undefined;
      this._fromNumber = undefined;
      this._grafanaKey = undefined;
      this._grafanaUrl = undefined;
      this._headers = undefined;
      this._hexColor = undefined;
      this._host = undefined;
      this._httpMethod = undefined;
      this._mattermostNoVerifySsl = undefined;
      this._mattermostUrl = undefined;
      this._nickname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._recipients = undefined;
      this._rocketchatNoVerifySsl = undefined;
      this._rocketchatUrl = undefined;
      this._sender = undefined;
      this._server = undefined;
      this._serviceKey = undefined;
      this._subdomain = undefined;
      this._targets = undefined;
      this._timeout = undefined;
      this._toNumbers = undefined;
      this._token = undefined;
      this._url = undefined;
      this._useSsl = undefined;
      this._useTls = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountSid = value.accountSid;
      this._accountToken = value.accountToken;
      this._channels = value.channels;
      this._clientName = value.clientName;
      this._disableSslVerification = value.disableSslVerification;
      this._fromNumber = value.fromNumber;
      this._grafanaKey = value.grafanaKey;
      this._grafanaUrl = value.grafanaUrl;
      this._headers = value.headers;
      this._hexColor = value.hexColor;
      this._host = value.host;
      this._httpMethod = value.httpMethod;
      this._mattermostNoVerifySsl = value.mattermostNoVerifySsl;
      this._mattermostUrl = value.mattermostUrl;
      this._nickname = value.nickname;
      this._password = value.password;
      this._port = value.port;
      this._recipients = value.recipients;
      this._rocketchatNoVerifySsl = value.rocketchatNoVerifySsl;
      this._rocketchatUrl = value.rocketchatUrl;
      this._sender = value.sender;
      this._server = value.server;
      this._serviceKey = value.serviceKey;
      this._subdomain = value.subdomain;
      this._targets = value.targets;
      this._timeout = value.timeout;
      this._toNumbers = value.toNumbers;
      this._token = value.token;
      this._url = value.url;
      this._useSsl = value.useSsl;
      this._useTls = value.useTls;
      this._username = value.username;
    }
  }

  // account_sid - computed: false, optional: true, required: false
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  public resetAccountSid() {
    this._accountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // account_token - computed: false, optional: true, required: false
  private _accountToken?: string; 
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }
  public set accountToken(value: string) {
    this._accountToken = value;
  }
  public resetAccountToken() {
    this._accountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTokenInput() {
    return this._accountToken;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // client_name - computed: false, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // disable_ssl_verification - computed: false, optional: true, required: false
  private _disableSslVerification?: boolean | cdktf.IResolvable; 
  public get disableSslVerification() {
    return this.getBooleanAttribute('disable_ssl_verification');
  }
  public set disableSslVerification(value: boolean | cdktf.IResolvable) {
    this._disableSslVerification = value;
  }
  public resetDisableSslVerification() {
    this._disableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslVerificationInput() {
    return this._disableSslVerification;
  }

  // from_number - computed: false, optional: true, required: false
  private _fromNumber?: string; 
  public get fromNumber() {
    return this.getStringAttribute('from_number');
  }
  public set fromNumber(value: string) {
    this._fromNumber = value;
  }
  public resetFromNumber() {
    this._fromNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNumberInput() {
    return this._fromNumber;
  }

  // grafana_key - computed: false, optional: true, required: false
  private _grafanaKey?: string; 
  public get grafanaKey() {
    return this.getStringAttribute('grafana_key');
  }
  public set grafanaKey(value: string) {
    this._grafanaKey = value;
  }
  public resetGrafanaKey() {
    this._grafanaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaKeyInput() {
    return this._grafanaKey;
  }

  // grafana_url - computed: false, optional: true, required: false
  private _grafanaUrl?: string; 
  public get grafanaUrl() {
    return this.getStringAttribute('grafana_url');
  }
  public set grafanaUrl(value: string) {
    this._grafanaUrl = value;
  }
  public resetGrafanaUrl() {
    this._grafanaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUrlInput() {
    return this._grafanaUrl;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hex_color - computed: false, optional: true, required: false
  private _hexColor?: string; 
  public get hexColor() {
    return this.getStringAttribute('hex_color');
  }
  public set hexColor(value: string) {
    this._hexColor = value;
  }
  public resetHexColor() {
    this._hexColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexColorInput() {
    return this._hexColor;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // mattermost_no_verify_ssl - computed: false, optional: true, required: false
  private _mattermostNoVerifySsl?: boolean | cdktf.IResolvable; 
  public get mattermostNoVerifySsl() {
    return this.getBooleanAttribute('mattermost_no_verify_ssl');
  }
  public set mattermostNoVerifySsl(value: boolean | cdktf.IResolvable) {
    this._mattermostNoVerifySsl = value;
  }
  public resetMattermostNoVerifySsl() {
    this._mattermostNoVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostNoVerifySslInput() {
    return this._mattermostNoVerifySsl;
  }

  // mattermost_url - computed: false, optional: true, required: false
  private _mattermostUrl?: string; 
  public get mattermostUrl() {
    return this.getStringAttribute('mattermost_url');
  }
  public set mattermostUrl(value: string) {
    this._mattermostUrl = value;
  }
  public resetMattermostUrl() {
    this._mattermostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostUrlInput() {
    return this._mattermostUrl;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // rocketchat_no_verify_ssl - computed: false, optional: true, required: false
  private _rocketchatNoVerifySsl?: boolean | cdktf.IResolvable; 
  public get rocketchatNoVerifySsl() {
    return this.getBooleanAttribute('rocketchat_no_verify_ssl');
  }
  public set rocketchatNoVerifySsl(value: boolean | cdktf.IResolvable) {
    this._rocketchatNoVerifySsl = value;
  }
  public resetRocketchatNoVerifySsl() {
    this._rocketchatNoVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketchatNoVerifySslInput() {
    return this._rocketchatNoVerifySsl;
  }

  // rocketchat_url - computed: false, optional: true, required: false
  private _rocketchatUrl?: string; 
  public get rocketchatUrl() {
    return this.getStringAttribute('rocketchat_url');
  }
  public set rocketchatUrl(value: string) {
    this._rocketchatUrl = value;
  }
  public resetRocketchatUrl() {
    this._rocketchatUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketchatUrlInput() {
    return this._rocketchatUrl;
  }

  // sender - computed: false, optional: true, required: false
  private _sender?: string; 
  public get sender() {
    return this.getStringAttribute('sender');
  }
  public set sender(value: string) {
    this._sender = value;
  }
  public resetSender() {
    this._sender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // to_numbers - computed: false, optional: true, required: false
  private _toNumbers?: string[]; 
  public get toNumbers() {
    return this.getListAttribute('to_numbers');
  }
  public set toNumbers(value: string[]) {
    this._toNumbers = value;
  }
  public resetToNumbers() {
    this._toNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNumbersInput() {
    return this._toNumbers;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class NotificationTemplateNotificationConfigurationList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateNotificationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateNotificationConfigurationOutputReference {
    return new NotificationTemplateNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template awx_notification_template}
*/
export class NotificationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_notification_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationTemplate to import
  * @param importFromId The id of the existing NotificationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_notification_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/notification_template awx_notification_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_notification_template',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._notificationType = config.notificationType;
    this._organizationId = config.organizationId;
    this._messages.internalValue = config.messages;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new NotificationTemplateMessagesList(this, "messages", true);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: NotificationTemplateMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration = new NotificationTemplateNotificationConfigurationList(this, "notification_configuration", true);
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: NotificationTemplateNotificationConfiguration[] | cdktf.IResolvable) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      messages: cdktf.listMapper(notificationTemplateMessagesToTerraform, true)(this._messages.internalValue),
      notification_configuration: cdktf.listMapper(notificationTemplateNotificationConfigurationToTerraform, true)(this._notificationConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages: {
        value: cdktf.listMapperHcl(notificationTemplateMessagesToHclTerraform, true)(this._messages.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationTemplateMessagesList",
      },
      notification_configuration: {
        value: cdktf.listMapperHcl(notificationTemplateNotificationConfigurationToHclTerraform, true)(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationTemplateNotificationConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
