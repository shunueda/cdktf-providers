// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertingChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#id AlertingChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures the name of the alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#name AlertingChannel#name}
  */
  readonly name: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#email AlertingChannel#email}
  */
  readonly email?: AlertingChannelEmail;
  /**
  * google_chat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#google_chat AlertingChannel#google_chat}
  */
  readonly googleChat?: AlertingChannelGoogleChat;
  /**
  * office_365 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#office_365 AlertingChannel#office_365}
  */
  readonly office365?: AlertingChannelOffice365;
  /**
  * ops_genie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#ops_genie AlertingChannel#ops_genie}
  */
  readonly opsGenie?: AlertingChannelOpsGenie;
  /**
  * pager_duty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#pager_duty AlertingChannel#pager_duty}
  */
  readonly pagerDuty?: AlertingChannelPagerDuty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#slack AlertingChannel#slack}
  */
  readonly slack?: AlertingChannelSlack;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#splunk AlertingChannel#splunk}
  */
  readonly splunk?: AlertingChannelSplunk;
  /**
  * victor_ops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#victor_ops AlertingChannel#victor_ops}
  */
  readonly victorOps?: AlertingChannelVictorOps;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#webhook AlertingChannel#webhook}
  */
  readonly webhook?: AlertingChannelWebhook;
}
export interface AlertingChannelEmail {
  /**
  * The list of emails of the Email alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#emails AlertingChannel#emails}
  */
  readonly emails: string[];
}

export function alertingChannelEmailToTerraform(struct?: AlertingChannelEmailOutputReference | AlertingChannelEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
  }
}


export function alertingChannelEmailToHclTerraform(struct?: AlertingChannelEmailOutputReference | AlertingChannelEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emails = value.emails;
    }
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }
}
export interface AlertingChannelGoogleChat {
  /**
  * The webhook URL of the Google Chat alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#webhook_url AlertingChannel#webhook_url}
  */
  readonly webhookUrl: string;
}

export function alertingChannelGoogleChatToTerraform(struct?: AlertingChannelGoogleChatOutputReference | AlertingChannelGoogleChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function alertingChannelGoogleChatToHclTerraform(struct?: AlertingChannelGoogleChatOutputReference | AlertingChannelGoogleChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelGoogleChatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelGoogleChat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelGoogleChat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}
export interface AlertingChannelOffice365 {
  /**
  * The webhook URL of the Office 365 alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#webhook_url AlertingChannel#webhook_url}
  */
  readonly webhookUrl: string;
}

export function alertingChannelOffice365ToTerraform(struct?: AlertingChannelOffice365OutputReference | AlertingChannelOffice365): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function alertingChannelOffice365ToHclTerraform(struct?: AlertingChannelOffice365OutputReference | AlertingChannelOffice365): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelOffice365OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelOffice365 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelOffice365 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}
export interface AlertingChannelOpsGenie {
  /**
  * The OpsGenie API Key of the OpsGenie alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#api_key AlertingChannel#api_key}
  */
  readonly apiKey: string;
  /**
  * The OpsGenie region (EU, US) of the OpsGenie alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#region AlertingChannel#region}
  */
  readonly region: string;
  /**
  * The OpsGenie tags of the OpsGenie alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#tags AlertingChannel#tags}
  */
  readonly tags: string[];
}

export function alertingChannelOpsGenieToTerraform(struct?: AlertingChannelOpsGenieOutputReference | AlertingChannelOpsGenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function alertingChannelOpsGenieToHclTerraform(struct?: AlertingChannelOpsGenieOutputReference | AlertingChannelOpsGenie): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelOpsGenieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelOpsGenie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelOpsGenie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._region = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._region = value.region;
      this._tags = value.tags;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface AlertingChannelPagerDuty {
  /**
  * The Service Integration Key of the PagerDuty alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#service_integration_key AlertingChannel#service_integration_key}
  */
  readonly serviceIntegrationKey: string;
}

export function alertingChannelPagerDutyToTerraform(struct?: AlertingChannelPagerDutyOutputReference | AlertingChannelPagerDuty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_integration_key: cdktf.stringToTerraform(struct!.serviceIntegrationKey),
  }
}


export function alertingChannelPagerDutyToHclTerraform(struct?: AlertingChannelPagerDutyOutputReference | AlertingChannelPagerDuty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_integration_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceIntegrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelPagerDutyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceIntegrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIntegrationKey = this._serviceIntegrationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelPagerDuty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceIntegrationKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceIntegrationKey = value.serviceIntegrationKey;
    }
  }

  // service_integration_key - computed: false, optional: false, required: true
  private _serviceIntegrationKey?: string; 
  public get serviceIntegrationKey() {
    return this.getStringAttribute('service_integration_key');
  }
  public set serviceIntegrationKey(value: string) {
    this._serviceIntegrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationKeyInput() {
    return this._serviceIntegrationKey;
  }
}
export interface AlertingChannelSlack {
  /**
  * The Slack channel of the Slack alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#channel AlertingChannel#channel}
  */
  readonly channel?: string;
  /**
  * The icon URL of the Slack alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#icon_url AlertingChannel#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * The webhook URL of the Slack alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#webhook_url AlertingChannel#webhook_url}
  */
  readonly webhookUrl: string;
}

export function alertingChannelSlackToTerraform(struct?: AlertingChannelSlackOutputReference | AlertingChannelSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    icon_url: cdktf.stringToTerraform(struct!.iconUrl),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function alertingChannelSlackToHclTerraform(struct?: AlertingChannelSlackOutputReference | AlertingChannelSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_url: {
      value: cdktf.stringToHclTerraform(struct!.iconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._iconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUrl = this._iconUrl;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._iconUrl = undefined;
      this._webhookUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._iconUrl = value.iconUrl;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}
export interface AlertingChannelSplunk {
  /**
  * The token of the Splunk alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#token AlertingChannel#token}
  */
  readonly token: string;
  /**
  * The URL of the Splunk alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#url AlertingChannel#url}
  */
  readonly url: string;
}

export function alertingChannelSplunkToTerraform(struct?: AlertingChannelSplunkOutputReference | AlertingChannelSplunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertingChannelSplunkToHclTerraform(struct?: AlertingChannelSplunkOutputReference | AlertingChannelSplunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
      this._url = value.url;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
}
export interface AlertingChannelVictorOps {
  /**
  * The API Key of the VictorOps alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#api_key AlertingChannel#api_key}
  */
  readonly apiKey: string;
  /**
  * The Routing Key of the VictorOps alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#routing_key AlertingChannel#routing_key}
  */
  readonly routingKey: string;
}

export function alertingChannelVictorOpsToTerraform(struct?: AlertingChannelVictorOpsOutputReference | AlertingChannelVictorOps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
  }
}


export function alertingChannelVictorOpsToHclTerraform(struct?: AlertingChannelVictorOpsOutputReference | AlertingChannelVictorOps): any {
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
    routing_key: {
      value: cdktf.stringToHclTerraform(struct!.routingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelVictorOpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelVictorOps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelVictorOps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._routingKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._routingKey = value.routingKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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
}
export interface AlertingChannelWebhook {
  /**
  * The optional map of HTTP headers of the Webhook alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#http_headers AlertingChannel#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * The list of webhook urls of the Webhook alerting channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#webhook_urls AlertingChannel#webhook_urls}
  */
  readonly webhookUrls: string[];
}

export function alertingChannelWebhookToTerraform(struct?: AlertingChannelWebhookOutputReference | AlertingChannelWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    webhook_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webhookUrls),
  }
}


export function alertingChannelWebhookToHclTerraform(struct?: AlertingChannelWebhookOutputReference | AlertingChannelWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    webhook_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webhookUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertingChannelWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertingChannelWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._webhookUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrls = this._webhookUrls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingChannelWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpHeaders = undefined;
      this._webhookUrls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpHeaders = value.httpHeaders;
      this._webhookUrls = value.webhookUrls;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // webhook_urls - computed: false, optional: false, required: true
  private _webhookUrls?: string[]; 
  public get webhookUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('webhook_urls'));
  }
  public set webhookUrls(value: string[]) {
    this._webhookUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlsInput() {
    return this._webhookUrls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel instana_alerting_channel}
*/
export class AlertingChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_alerting_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertingChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertingChannel to import
  * @param importFromId The id of the existing AlertingChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertingChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_alerting_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_channel instana_alerting_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertingChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AlertingChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_alerting_channel',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
    this._email.internalValue = config.email;
    this._googleChat.internalValue = config.googleChat;
    this._office365.internalValue = config.office365;
    this._opsGenie.internalValue = config.opsGenie;
    this._pagerDuty.internalValue = config.pagerDuty;
    this._slack.internalValue = config.slack;
    this._splunk.internalValue = config.splunk;
    this._victorOps.internalValue = config.victorOps;
    this._webhook.internalValue = config.webhook;
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

  // email - computed: false, optional: true, required: false
  private _email = new AlertingChannelEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: AlertingChannelEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // google_chat - computed: false, optional: true, required: false
  private _googleChat = new AlertingChannelGoogleChatOutputReference(this, "google_chat");
  public get googleChat() {
    return this._googleChat;
  }
  public putGoogleChat(value: AlertingChannelGoogleChat) {
    this._googleChat.internalValue = value;
  }
  public resetGoogleChat() {
    this._googleChat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleChatInput() {
    return this._googleChat.internalValue;
  }

  // office_365 - computed: false, optional: true, required: false
  private _office365 = new AlertingChannelOffice365OutputReference(this, "office_365");
  public get office365() {
    return this._office365;
  }
  public putOffice365(value: AlertingChannelOffice365) {
    this._office365.internalValue = value;
  }
  public resetOffice365() {
    this._office365.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365Input() {
    return this._office365.internalValue;
  }

  // ops_genie - computed: false, optional: true, required: false
  private _opsGenie = new AlertingChannelOpsGenieOutputReference(this, "ops_genie");
  public get opsGenie() {
    return this._opsGenie;
  }
  public putOpsGenie(value: AlertingChannelOpsGenie) {
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
  private _pagerDuty = new AlertingChannelPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }
  public putPagerDuty(value: AlertingChannelPagerDuty) {
    this._pagerDuty.internalValue = value;
  }
  public resetPagerDuty() {
    this._pagerDuty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyInput() {
    return this._pagerDuty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AlertingChannelSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AlertingChannelSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new AlertingChannelSplunkOutputReference(this, "splunk");
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: AlertingChannelSplunk) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // victor_ops - computed: false, optional: true, required: false
  private _victorOps = new AlertingChannelVictorOpsOutputReference(this, "victor_ops");
  public get victorOps() {
    return this._victorOps;
  }
  public putVictorOps(value: AlertingChannelVictorOps) {
    this._victorOps.internalValue = value;
  }
  public resetVictorOps() {
    this._victorOps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsInput() {
    return this._victorOps.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertingChannelWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertingChannelWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      email: alertingChannelEmailToTerraform(this._email.internalValue),
      google_chat: alertingChannelGoogleChatToTerraform(this._googleChat.internalValue),
      office_365: alertingChannelOffice365ToTerraform(this._office365.internalValue),
      ops_genie: alertingChannelOpsGenieToTerraform(this._opsGenie.internalValue),
      pager_duty: alertingChannelPagerDutyToTerraform(this._pagerDuty.internalValue),
      slack: alertingChannelSlackToTerraform(this._slack.internalValue),
      splunk: alertingChannelSplunkToTerraform(this._splunk.internalValue),
      victor_ops: alertingChannelVictorOpsToTerraform(this._victorOps.internalValue),
      webhook: alertingChannelWebhookToTerraform(this._webhook.internalValue),
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
      email: {
        value: alertingChannelEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelEmailList",
      },
      google_chat: {
        value: alertingChannelGoogleChatToHclTerraform(this._googleChat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelGoogleChatList",
      },
      office_365: {
        value: alertingChannelOffice365ToHclTerraform(this._office365.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelOffice365List",
      },
      ops_genie: {
        value: alertingChannelOpsGenieToHclTerraform(this._opsGenie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelOpsGenieList",
      },
      pager_duty: {
        value: alertingChannelPagerDutyToHclTerraform(this._pagerDuty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelPagerDutyList",
      },
      slack: {
        value: alertingChannelSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelSlackList",
      },
      splunk: {
        value: alertingChannelSplunkToHclTerraform(this._splunk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelSplunkList",
      },
      victor_ops: {
        value: alertingChannelVictorOpsToHclTerraform(this._victorOps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelVictorOpsList",
      },
      webhook: {
        value: alertingChannelWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertingChannelWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
