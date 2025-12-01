// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#id AlertChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default `false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#send_degraded AlertChannel#send_degraded}
  */
  readonly sendDegraded?: boolean | cdktf.IResolvable;
  /**
  * (Default `true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#send_failure AlertChannel#send_failure}
  */
  readonly sendFailure?: boolean | cdktf.IResolvable;
  /**
  * (Default `true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#send_recovery AlertChannel#send_recovery}
  */
  readonly sendRecovery?: boolean | cdktf.IResolvable;
  /**
  * (Default `false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#ssl_expiry AlertChannel#ssl_expiry}
  */
  readonly sslExpiry?: boolean | cdktf.IResolvable;
  /**
  * Value must be between 1 and 30 (Default `30`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#ssl_expiry_threshold AlertChannel#ssl_expiry_threshold}
  */
  readonly sslExpiryThreshold?: number;
  /**
  * call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#call AlertChannel#call}
  */
  readonly call?: AlertChannelCall;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#email AlertChannel#email}
  */
  readonly email?: AlertChannelEmail;
  /**
  * opsgenie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#opsgenie AlertChannel#opsgenie}
  */
  readonly opsgenie?: AlertChannelOpsgenie;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#pagerduty AlertChannel#pagerduty}
  */
  readonly pagerduty?: AlertChannelPagerduty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#slack AlertChannel#slack}
  */
  readonly slack?: AlertChannelSlack;
  /**
  * sms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#sms AlertChannel#sms}
  */
  readonly sms?: AlertChannelSms;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#webhook AlertChannel#webhook}
  */
  readonly webhook?: AlertChannelWebhook;
}
export interface AlertChannelCall {
  /**
  * The name of this alert channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * The mobile number to receive the alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#number AlertChannel#number}
  */
  readonly number: string;
}

export function alertChannelCallToTerraform(struct?: AlertChannelCallOutputReference | AlertChannelCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.stringToTerraform(struct!.number),
  }
}


export function alertChannelCallToHclTerraform(struct?: AlertChannelCallOutputReference | AlertChannelCall): any {
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
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._number = value.number;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface AlertChannelEmail {
  /**
  * The email address of this email alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#address AlertChannel#address}
  */
  readonly address: string;
}

export function alertChannelEmailToTerraform(struct?: AlertChannelEmailOutputReference | AlertChannelEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function alertChannelEmailToHclTerraform(struct?: AlertChannelEmailOutputReference | AlertChannelEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface AlertChannelOpsgenie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#api_key AlertChannel#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#priority AlertChannel#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#region AlertChannel#region}
  */
  readonly region: string;
}

export function alertChannelOpsgenieToTerraform(struct?: AlertChannelOpsgenieOutputReference | AlertChannelOpsgenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function alertChannelOpsgenieToHclTerraform(struct?: AlertChannelOpsgenieOutputReference | AlertChannelOpsgenie): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelOpsgenieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelOpsgenie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelOpsgenie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._name = value.name;
      this._priority = value.priority;
      this._region = value.region;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
}
export interface AlertChannelPagerduty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#account AlertChannel#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#service_key AlertChannel#service_key}
  */
  readonly serviceKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#service_name AlertChannel#service_name}
  */
  readonly serviceName?: string;
}

export function alertChannelPagerdutyToTerraform(struct?: AlertChannelPagerdutyOutputReference | AlertChannelPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function alertChannelPagerdutyToHclTerraform(struct?: AlertChannelPagerdutyOutputReference | AlertChannelPagerduty): any {
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
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelPagerdutyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelPagerduty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelPagerduty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._serviceKey = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._serviceKey = value.serviceKey;
      this._serviceName = value.serviceName;
    }
  }

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

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface AlertChannelSlack {
  /**
  * The name of the alert's Slack channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#channel AlertChannel#channel}
  */
  readonly channel: string;
  /**
  * The Slack webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#url AlertChannel#url}
  */
  readonly url: string;
}

export function alertChannelSlackToTerraform(struct?: AlertChannelSlackOutputReference | AlertChannelSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertChannelSlackToHclTerraform(struct?: AlertChannelSlackOutputReference | AlertChannelSlack): any {
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

export class AlertChannelSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._url = value.url;
    }
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
export interface AlertChannelSms {
  /**
  * The name of this alert channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * The mobile number to receive the alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#number AlertChannel#number}
  */
  readonly number: string;
}

export function alertChannelSmsToTerraform(struct?: AlertChannelSmsOutputReference | AlertChannelSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.stringToTerraform(struct!.number),
  }
}


export function alertChannelSmsToHclTerraform(struct?: AlertChannelSmsOutputReference | AlertChannelSms): any {
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
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._number = value.number;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface AlertChannelWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#headers AlertChannel#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * (Default `POST`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#method AlertChannel#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#query_parameters AlertChannel#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#template AlertChannel#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#url AlertChannel#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#webhook_secret AlertChannel#webhook_secret}
  */
  readonly webhookSecret?: string;
  /**
  * Type of the webhook. Possible values are 'WEBHOOK_DISCORD', 'WEBHOOK_FIREHYDRANT', 'WEBHOOK_GITLAB_ALERT', 'WEBHOOK_SPIKESH', 'WEBHOOK_SPLUNK', 'WEBHOOK_MSTEAMS' and 'WEBHOOK_TELEGRAM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#webhook_type AlertChannel#webhook_type}
  */
  readonly webhookType?: string;
}

export function alertChannelWebhookToTerraform(struct?: AlertChannelWebhookOutputReference | AlertChannelWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    query_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParameters),
    template: cdktf.stringToTerraform(struct!.template),
    url: cdktf.stringToTerraform(struct!.url),
    webhook_secret: cdktf.stringToTerraform(struct!.webhookSecret),
    webhook_type: cdktf.stringToTerraform(struct!.webhookType),
  }
}


export function alertChannelWebhookToHclTerraform(struct?: AlertChannelWebhookOutputReference | AlertChannelWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    query_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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
    webhook_secret: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_type: {
      value: cdktf.stringToHclTerraform(struct!.webhookType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._webhookSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecret = this._webhookSecret;
    }
    if (this._webhookType !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookType = this._webhookType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._method = undefined;
      this._name = undefined;
      this._queryParameters = undefined;
      this._template = undefined;
      this._url = undefined;
      this._webhookSecret = undefined;
      this._webhookType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._method = value.method;
      this._name = value.name;
      this._queryParameters = value.queryParameters;
      this._template = value.template;
      this._url = value.url;
      this._webhookSecret = value.webhookSecret;
      this._webhookType = value.webhookType;
    }
  }

  // headers - computed: true, optional: true, required: false
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // query_parameters - computed: true, optional: true, required: false
  private _queryParameters?: { [key: string]: string }; 
  public get queryParameters() {
    return this.getStringMapAttribute('query_parameters');
  }
  public set queryParameters(value: { [key: string]: string }) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel checkly_alert_channel}
*/
export class AlertChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_alert_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannel to import
  * @param importFromId The id of the existing AlertChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_alert_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/alert_channel checkly_alert_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AlertChannelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkly_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._sendDegraded = config.sendDegraded;
    this._sendFailure = config.sendFailure;
    this._sendRecovery = config.sendRecovery;
    this._sslExpiry = config.sslExpiry;
    this._sslExpiryThreshold = config.sslExpiryThreshold;
    this._call.internalValue = config.call;
    this._email.internalValue = config.email;
    this._opsgenie.internalValue = config.opsgenie;
    this._pagerduty.internalValue = config.pagerduty;
    this._slack.internalValue = config.slack;
    this._sms.internalValue = config.sms;
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

  // send_degraded - computed: false, optional: true, required: false
  private _sendDegraded?: boolean | cdktf.IResolvable; 
  public get sendDegraded() {
    return this.getBooleanAttribute('send_degraded');
  }
  public set sendDegraded(value: boolean | cdktf.IResolvable) {
    this._sendDegraded = value;
  }
  public resetSendDegraded() {
    this._sendDegraded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDegradedInput() {
    return this._sendDegraded;
  }

  // send_failure - computed: false, optional: true, required: false
  private _sendFailure?: boolean | cdktf.IResolvable; 
  public get sendFailure() {
    return this.getBooleanAttribute('send_failure');
  }
  public set sendFailure(value: boolean | cdktf.IResolvable) {
    this._sendFailure = value;
  }
  public resetSendFailure() {
    this._sendFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendFailureInput() {
    return this._sendFailure;
  }

  // send_recovery - computed: false, optional: true, required: false
  private _sendRecovery?: boolean | cdktf.IResolvable; 
  public get sendRecovery() {
    return this.getBooleanAttribute('send_recovery');
  }
  public set sendRecovery(value: boolean | cdktf.IResolvable) {
    this._sendRecovery = value;
  }
  public resetSendRecovery() {
    this._sendRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRecoveryInput() {
    return this._sendRecovery;
  }

  // ssl_expiry - computed: false, optional: true, required: false
  private _sslExpiry?: boolean | cdktf.IResolvable; 
  public get sslExpiry() {
    return this.getBooleanAttribute('ssl_expiry');
  }
  public set sslExpiry(value: boolean | cdktf.IResolvable) {
    this._sslExpiry = value;
  }
  public resetSslExpiry() {
    this._sslExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExpiryInput() {
    return this._sslExpiry;
  }

  // ssl_expiry_threshold - computed: false, optional: true, required: false
  private _sslExpiryThreshold?: number; 
  public get sslExpiryThreshold() {
    return this.getNumberAttribute('ssl_expiry_threshold');
  }
  public set sslExpiryThreshold(value: number) {
    this._sslExpiryThreshold = value;
  }
  public resetSslExpiryThreshold() {
    this._sslExpiryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExpiryThresholdInput() {
    return this._sslExpiryThreshold;
  }

  // call - computed: false, optional: true, required: false
  private _call = new AlertChannelCallOutputReference(this, "call");
  public get call() {
    return this._call;
  }
  public putCall(value: AlertChannelCall) {
    this._call.internalValue = value;
  }
  public resetCall() {
    this._call.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new AlertChannelEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: AlertChannelEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // opsgenie - computed: false, optional: true, required: false
  private _opsgenie = new AlertChannelOpsgenieOutputReference(this, "opsgenie");
  public get opsgenie() {
    return this._opsgenie;
  }
  public putOpsgenie(value: AlertChannelOpsgenie) {
    this._opsgenie.internalValue = value;
  }
  public resetOpsgenie() {
    this._opsgenie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieInput() {
    return this._opsgenie.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new AlertChannelPagerdutyOutputReference(this, "pagerduty");
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: AlertChannelPagerduty) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AlertChannelSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AlertChannelSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // sms - computed: false, optional: true, required: false
  private _sms = new AlertChannelSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: AlertChannelSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertChannelWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertChannelWebhook) {
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
      send_degraded: cdktf.booleanToTerraform(this._sendDegraded),
      send_failure: cdktf.booleanToTerraform(this._sendFailure),
      send_recovery: cdktf.booleanToTerraform(this._sendRecovery),
      ssl_expiry: cdktf.booleanToTerraform(this._sslExpiry),
      ssl_expiry_threshold: cdktf.numberToTerraform(this._sslExpiryThreshold),
      call: alertChannelCallToTerraform(this._call.internalValue),
      email: alertChannelEmailToTerraform(this._email.internalValue),
      opsgenie: alertChannelOpsgenieToTerraform(this._opsgenie.internalValue),
      pagerduty: alertChannelPagerdutyToTerraform(this._pagerduty.internalValue),
      slack: alertChannelSlackToTerraform(this._slack.internalValue),
      sms: alertChannelSmsToTerraform(this._sms.internalValue),
      webhook: alertChannelWebhookToTerraform(this._webhook.internalValue),
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
      send_degraded: {
        value: cdktf.booleanToHclTerraform(this._sendDegraded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_failure: {
        value: cdktf.booleanToHclTerraform(this._sendFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_recovery: {
        value: cdktf.booleanToHclTerraform(this._sendRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_expiry: {
        value: cdktf.booleanToHclTerraform(this._sslExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_expiry_threshold: {
        value: cdktf.numberToHclTerraform(this._sslExpiryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      call: {
        value: alertChannelCallToHclTerraform(this._call.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelCallList",
      },
      email: {
        value: alertChannelEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelEmailList",
      },
      opsgenie: {
        value: alertChannelOpsgenieToHclTerraform(this._opsgenie.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelOpsgenieList",
      },
      pagerduty: {
        value: alertChannelPagerdutyToHclTerraform(this._pagerduty.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelPagerdutyList",
      },
      slack: {
        value: alertChannelSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelSlackList",
      },
      sms: {
        value: alertChannelSmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelSmsList",
      },
      webhook: {
        value: alertChannelWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertChannelWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
