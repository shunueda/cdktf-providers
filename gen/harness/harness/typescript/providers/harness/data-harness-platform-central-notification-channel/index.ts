// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformCentralNotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier associated with this notification channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#account DataHarnessPlatformCentralNotificationChannel#account}
  */
  readonly account?: string;
  /**
  * Timestamp when the notification channel was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#created DataHarnessPlatformCentralNotificationChannel#created}
  */
  readonly created?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#id DataHarnessPlatformCentralNotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the notification channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#identifier DataHarnessPlatformCentralNotificationChannel#identifier}
  */
  readonly identifier: string;
  /**
  * Timestamp when the notification channel was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#last_modified DataHarnessPlatformCentralNotificationChannel#last_modified}
  */
  readonly lastModified?: number;
  /**
  * Name of the notification channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#name DataHarnessPlatformCentralNotificationChannel#name}
  */
  readonly name?: string;
  /**
  * Type of notification channel. One of: EMAIL, SLACK, PAGERDUTY, MSTeams, WEBHOOK, DATADOG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#notification_channel_type DataHarnessPlatformCentralNotificationChannel#notification_channel_type}
  */
  readonly notificationChannelType?: string;
  /**
  * Identifier of the organization the notification channel is scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#org DataHarnessPlatformCentralNotificationChannel#org}
  */
  readonly org?: string;
  /**
  * Identifier of the project the notification channel is scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#project DataHarnessPlatformCentralNotificationChannel#project}
  */
  readonly project?: string;
  /**
  * Status of the notification channel. Possible values are ENABLED or DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#status DataHarnessPlatformCentralNotificationChannel#status}
  */
  readonly status?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#channel DataHarnessPlatformCentralNotificationChannel#channel}
  */
  readonly channel?: DataHarnessPlatformCentralNotificationChannelChannel[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformCentralNotificationChannelChannelHeaders {
  /**
  * Header key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#key DataHarnessPlatformCentralNotificationChannel#key}
  */
  readonly key: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#value DataHarnessPlatformCentralNotificationChannel#value}
  */
  readonly value: string;
}

export function dataHarnessPlatformCentralNotificationChannelChannelHeadersToTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataHarnessPlatformCentralNotificationChannelChannelHeadersToHclTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataHarnessPlatformCentralNotificationChannelChannelHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHarnessPlatformCentralNotificationChannelChannelHeadersList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformCentralNotificationChannelChannelHeadersOutputReference {
    return new DataHarnessPlatformCentralNotificationChannelChannelHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformCentralNotificationChannelChannelUserGroups {
  /**
  * Identifier of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#identifier DataHarnessPlatformCentralNotificationChannel#identifier}
  */
  readonly identifier?: string;
}

export function dataHarnessPlatformCentralNotificationChannelChannelUserGroupsToTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function dataHarnessPlatformCentralNotificationChannelChannelUserGroupsToHclTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformCentralNotificationChannelChannelUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class DataHarnessPlatformCentralNotificationChannelChannelUserGroupsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformCentralNotificationChannelChannelUserGroupsOutputReference {
    return new DataHarnessPlatformCentralNotificationChannelChannelUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformCentralNotificationChannelChannel {
  /**
  * API key for the webhook or integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#api_key DataHarnessPlatformCentralNotificationChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * List of Datadog webhook URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#datadog_urls DataHarnessPlatformCentralNotificationChannel#datadog_urls}
  */
  readonly datadogUrls?: string[];
  /**
  * List of delegate selectors to use for sending notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#delegate_selectors DataHarnessPlatformCentralNotificationChannel#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * List of email addresses to notify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#email_ids DataHarnessPlatformCentralNotificationChannel#email_ids}
  */
  readonly emailIds?: string[];
  /**
  * Whether to execute the notification logic on delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#execute_on_delegate DataHarnessPlatformCentralNotificationChannel#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * List of Microsoft Teams integration keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#ms_team_keys DataHarnessPlatformCentralNotificationChannel#ms_team_keys}
  */
  readonly msTeamKeys?: string[];
  /**
  * List of PagerDuty integration keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#pager_duty_integration_keys DataHarnessPlatformCentralNotificationChannel#pager_duty_integration_keys}
  */
  readonly pagerDutyIntegrationKeys?: string[];
  /**
  * List of Slack webhook URLs to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#slack_webhook_urls DataHarnessPlatformCentralNotificationChannel#slack_webhook_urls}
  */
  readonly slackWebhookUrls?: string[];
  /**
  * List of generic webhook URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#webhook_urls DataHarnessPlatformCentralNotificationChannel#webhook_urls}
  */
  readonly webhookUrls?: string[];
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#headers DataHarnessPlatformCentralNotificationChannel#headers}
  */
  readonly headers?: DataHarnessPlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#user_groups DataHarnessPlatformCentralNotificationChannel#user_groups}
  */
  readonly userGroups?: DataHarnessPlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable;
}

export function dataHarnessPlatformCentralNotificationChannelChannelToTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    datadog_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datadogUrls),
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailIds),
    execute_on_delegate: cdktf.booleanToTerraform(struct!.executeOnDelegate),
    ms_team_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.msTeamKeys),
    pager_duty_integration_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pagerDutyIntegrationKeys),
    slack_webhook_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slackWebhookUrls),
    webhook_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webhookUrls),
    headers: cdktf.listMapper(dataHarnessPlatformCentralNotificationChannelChannelHeadersToTerraform, true)(struct!.headers),
    user_groups: cdktf.listMapper(dataHarnessPlatformCentralNotificationChannelChannelUserGroupsToTerraform, true)(struct!.userGroups),
  }
}


export function dataHarnessPlatformCentralNotificationChannelChannelToHclTerraform(struct?: DataHarnessPlatformCentralNotificationChannelChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datadogUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    execute_on_delegate: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnDelegate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ms_team_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.msTeamKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pager_duty_integration_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pagerDutyIntegrationKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    slack_webhook_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slackWebhookUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    webhook_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webhookUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.listMapperHcl(dataHarnessPlatformCentralNotificationChannelChannelHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformCentralNotificationChannelChannelHeadersList",
    },
    user_groups: {
      value: cdktf.listMapperHcl(dataHarnessPlatformCentralNotificationChannelChannelUserGroupsToHclTerraform, true)(struct!.userGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformCentralNotificationChannelChannelUserGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformCentralNotificationChannelChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformCentralNotificationChannelChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._datadogUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogUrls = this._datadogUrls;
    }
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._emailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailIds = this._emailIds;
    }
    if (this._executeOnDelegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnDelegate = this._executeOnDelegate;
    }
    if (this._msTeamKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.msTeamKeys = this._msTeamKeys;
    }
    if (this._pagerDutyIntegrationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDutyIntegrationKeys = this._pagerDutyIntegrationKeys;
    }
    if (this._slackWebhookUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackWebhookUrls = this._slackWebhookUrls;
    }
    if (this._webhookUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrls = this._webhookUrls;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._userGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformCentralNotificationChannelChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._datadogUrls = undefined;
      this._delegateSelectors = undefined;
      this._emailIds = undefined;
      this._executeOnDelegate = undefined;
      this._msTeamKeys = undefined;
      this._pagerDutyIntegrationKeys = undefined;
      this._slackWebhookUrls = undefined;
      this._webhookUrls = undefined;
      this._headers.internalValue = undefined;
      this._userGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._datadogUrls = value.datadogUrls;
      this._delegateSelectors = value.delegateSelectors;
      this._emailIds = value.emailIds;
      this._executeOnDelegate = value.executeOnDelegate;
      this._msTeamKeys = value.msTeamKeys;
      this._pagerDutyIntegrationKeys = value.pagerDutyIntegrationKeys;
      this._slackWebhookUrls = value.slackWebhookUrls;
      this._webhookUrls = value.webhookUrls;
      this._headers.internalValue = value.headers;
      this._userGroups.internalValue = value.userGroups;
    }
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

  // datadog_urls - computed: false, optional: true, required: false
  private _datadogUrls?: string[]; 
  public get datadogUrls() {
    return this.getListAttribute('datadog_urls');
  }
  public set datadogUrls(value: string[]) {
    this._datadogUrls = value;
  }
  public resetDatadogUrls() {
    this._datadogUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogUrlsInput() {
    return this._datadogUrls;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return this.getListAttribute('delegate_selectors');
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // email_ids - computed: false, optional: true, required: false
  private _emailIds?: string[]; 
  public get emailIds() {
    return this.getListAttribute('email_ids');
  }
  public set emailIds(value: string[]) {
    this._emailIds = value;
  }
  public resetEmailIds() {
    this._emailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdsInput() {
    return this._emailIds;
  }

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
  }

  // ms_team_keys - computed: false, optional: true, required: false
  private _msTeamKeys?: string[]; 
  public get msTeamKeys() {
    return this.getListAttribute('ms_team_keys');
  }
  public set msTeamKeys(value: string[]) {
    this._msTeamKeys = value;
  }
  public resetMsTeamKeys() {
    this._msTeamKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTeamKeysInput() {
    return this._msTeamKeys;
  }

  // pager_duty_integration_keys - computed: false, optional: true, required: false
  private _pagerDutyIntegrationKeys?: string[]; 
  public get pagerDutyIntegrationKeys() {
    return this.getListAttribute('pager_duty_integration_keys');
  }
  public set pagerDutyIntegrationKeys(value: string[]) {
    this._pagerDutyIntegrationKeys = value;
  }
  public resetPagerDutyIntegrationKeys() {
    this._pagerDutyIntegrationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyIntegrationKeysInput() {
    return this._pagerDutyIntegrationKeys;
  }

  // slack_webhook_urls - computed: false, optional: true, required: false
  private _slackWebhookUrls?: string[]; 
  public get slackWebhookUrls() {
    return this.getListAttribute('slack_webhook_urls');
  }
  public set slackWebhookUrls(value: string[]) {
    this._slackWebhookUrls = value;
  }
  public resetSlackWebhookUrls() {
    this._slackWebhookUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackWebhookUrlsInput() {
    return this._slackWebhookUrls;
  }

  // webhook_urls - computed: false, optional: true, required: false
  private _webhookUrls?: string[]; 
  public get webhookUrls() {
    return this.getListAttribute('webhook_urls');
  }
  public set webhookUrls(value: string[]) {
    this._webhookUrls = value;
  }
  public resetWebhookUrls() {
    this._webhookUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlsInput() {
    return this._webhookUrls;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataHarnessPlatformCentralNotificationChannelChannelHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataHarnessPlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new DataHarnessPlatformCentralNotificationChannelChannelUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: DataHarnessPlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }
}

export class DataHarnessPlatformCentralNotificationChannelChannelList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformCentralNotificationChannelChannel[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformCentralNotificationChannelChannelOutputReference {
    return new DataHarnessPlatformCentralNotificationChannelChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel harness_platform_central_notification_channel}
*/
export class DataHarnessPlatformCentralNotificationChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_central_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformCentralNotificationChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformCentralNotificationChannel to import
  * @param importFromId The id of the existing DataHarnessPlatformCentralNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformCentralNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_central_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_central_notification_channel harness_platform_central_notification_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformCentralNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformCentralNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_central_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._created = config.created;
    this._id = config.id;
    this._identifier = config.identifier;
    this._lastModified = config.lastModified;
    this._name = config.name;
    this._notificationChannelType = config.notificationChannelType;
    this._org = config.org;
    this._project = config.project;
    this._status = config.status;
    this._channel.internalValue = config.channel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // created - computed: false, optional: true, required: false
  private _created?: number; 
  public get created() {
    return this.getNumberAttribute('created');
  }
  public set created(value: number) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: number; 
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
  public set lastModified(value: number) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
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

  // notification_channel_type - computed: false, optional: true, required: false
  private _notificationChannelType?: string; 
  public get notificationChannelType() {
    return this.getStringAttribute('notification_channel_type');
  }
  public set notificationChannelType(value: string) {
    this._notificationChannelType = value;
  }
  public resetNotificationChannelType() {
    this._notificationChannelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelTypeInput() {
    return this._notificationChannelType;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // status - computed: false, optional: true, required: false
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

  // channel - computed: false, optional: true, required: false
  private _channel = new DataHarnessPlatformCentralNotificationChannelChannelList(this, "channel", false);
  public get channel() {
    return this._channel;
  }
  public putChannel(value: DataHarnessPlatformCentralNotificationChannelChannel[] | cdktf.IResolvable) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      created: cdktf.numberToTerraform(this._created),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      last_modified: cdktf.numberToTerraform(this._lastModified),
      name: cdktf.stringToTerraform(this._name),
      notification_channel_type: cdktf.stringToTerraform(this._notificationChannelType),
      org: cdktf.stringToTerraform(this._org),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      channel: cdktf.listMapper(dataHarnessPlatformCentralNotificationChannelChannelToTerraform, true)(this._channel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created: {
        value: cdktf.numberToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified: {
        value: cdktf.numberToHclTerraform(this._lastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_channel_type: {
        value: cdktf.stringToHclTerraform(this._notificationChannelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.listMapperHcl(dataHarnessPlatformCentralNotificationChannelChannelToHclTerraform, true)(this._channel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformCentralNotificationChannelChannelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
