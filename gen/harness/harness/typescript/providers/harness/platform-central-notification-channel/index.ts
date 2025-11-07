// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformCentralNotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#id PlatformCentralNotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#identifier PlatformCentralNotificationChannel#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#name PlatformCentralNotificationChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#notification_channel_type PlatformCentralNotificationChannel#notification_channel_type}
  */
  readonly notificationChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#org PlatformCentralNotificationChannel#org}
  */
  readonly org?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#project PlatformCentralNotificationChannel#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#status PlatformCentralNotificationChannel#status}
  */
  readonly status?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#channel PlatformCentralNotificationChannel#channel}
  */
  readonly channel: PlatformCentralNotificationChannelChannel;
}
export interface PlatformCentralNotificationChannelChannelHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#key PlatformCentralNotificationChannel#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#value PlatformCentralNotificationChannel#value}
  */
  readonly value: string;
}

export function platformCentralNotificationChannelChannelHeadersToTerraform(struct?: PlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformCentralNotificationChannelChannelHeadersToHclTerraform(struct?: PlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable): any {
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

export class PlatformCentralNotificationChannelChannelHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformCentralNotificationChannelChannelHeaders | cdktf.IResolvable | undefined) {
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

export class PlatformCentralNotificationChannelChannelHeadersList extends cdktf.ComplexList {
  public internalValue? : PlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable

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
  public get(index: number): PlatformCentralNotificationChannelChannelHeadersOutputReference {
    return new PlatformCentralNotificationChannelChannelHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformCentralNotificationChannelChannelUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#identifier PlatformCentralNotificationChannel#identifier}
  */
  readonly identifier: string;
}

export function platformCentralNotificationChannelChannelUserGroupsToTerraform(struct?: PlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function platformCentralNotificationChannelChannelUserGroupsToHclTerraform(struct?: PlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable): any {
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

export class PlatformCentralNotificationChannelChannelUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformCentralNotificationChannelChannelUserGroups | cdktf.IResolvable | undefined) {
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
}

export class PlatformCentralNotificationChannelChannelUserGroupsList extends cdktf.ComplexList {
  public internalValue? : PlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable

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
  public get(index: number): PlatformCentralNotificationChannelChannelUserGroupsOutputReference {
    return new PlatformCentralNotificationChannelChannelUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformCentralNotificationChannelChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#api_key PlatformCentralNotificationChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#datadog_urls PlatformCentralNotificationChannel#datadog_urls}
  */
  readonly datadogUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#delegate_selectors PlatformCentralNotificationChannel#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#email_ids PlatformCentralNotificationChannel#email_ids}
  */
  readonly emailIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#execute_on_delegate PlatformCentralNotificationChannel#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#ms_team_keys PlatformCentralNotificationChannel#ms_team_keys}
  */
  readonly msTeamKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#pager_duty_integration_keys PlatformCentralNotificationChannel#pager_duty_integration_keys}
  */
  readonly pagerDutyIntegrationKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#slack_webhook_urls PlatformCentralNotificationChannel#slack_webhook_urls}
  */
  readonly slackWebhookUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#webhook_urls PlatformCentralNotificationChannel#webhook_urls}
  */
  readonly webhookUrls?: string[];
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#headers PlatformCentralNotificationChannel#headers}
  */
  readonly headers?: PlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#user_groups PlatformCentralNotificationChannel#user_groups}
  */
  readonly userGroups?: PlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable;
}

export function platformCentralNotificationChannelChannelToTerraform(struct?: PlatformCentralNotificationChannelChannelOutputReference | PlatformCentralNotificationChannelChannel): any {
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
    headers: cdktf.listMapper(platformCentralNotificationChannelChannelHeadersToTerraform, true)(struct!.headers),
    user_groups: cdktf.listMapper(platformCentralNotificationChannelChannelUserGroupsToTerraform, true)(struct!.userGroups),
  }
}


export function platformCentralNotificationChannelChannelToHclTerraform(struct?: PlatformCentralNotificationChannelChannelOutputReference | PlatformCentralNotificationChannelChannel): any {
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
      value: cdktf.listMapperHcl(platformCentralNotificationChannelChannelHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformCentralNotificationChannelChannelHeadersList",
    },
    user_groups: {
      value: cdktf.listMapperHcl(platformCentralNotificationChannelChannelUserGroupsToHclTerraform, true)(struct!.userGroups),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformCentralNotificationChannelChannelUserGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformCentralNotificationChannelChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformCentralNotificationChannelChannel | undefined {
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

  public set internalValue(value: PlatformCentralNotificationChannelChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _headers = new PlatformCentralNotificationChannelChannelHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: PlatformCentralNotificationChannelChannelHeaders[] | cdktf.IResolvable) {
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
  private _userGroups = new PlatformCentralNotificationChannelChannelUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: PlatformCentralNotificationChannelChannelUserGroups[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel harness_platform_central_notification_channel}
*/
export class PlatformCentralNotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_central_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformCentralNotificationChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformCentralNotificationChannel to import
  * @param importFromId The id of the existing PlatformCentralNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformCentralNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_central_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_central_notification_channel harness_platform_central_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformCentralNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformCentralNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_central_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
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
    this._identifier = config.identifier;
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

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
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

  // notification_channel_type - computed: false, optional: false, required: true
  private _notificationChannelType?: string; 
  public get notificationChannelType() {
    return this.getStringAttribute('notification_channel_type');
  }
  public set notificationChannelType(value: string) {
    this._notificationChannelType = value;
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

  // channel - computed: false, optional: false, required: true
  private _channel = new PlatformCentralNotificationChannelChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }
  public putChannel(value: PlatformCentralNotificationChannelChannel) {
    this._channel.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      notification_channel_type: cdktf.stringToTerraform(this._notificationChannelType),
      org: cdktf.stringToTerraform(this._org),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      channel: platformCentralNotificationChannelChannelToTerraform(this._channel.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
        value: platformCentralNotificationChannelChannelToHclTerraform(this._channel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformCentralNotificationChannelChannelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
