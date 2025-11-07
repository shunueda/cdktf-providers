// https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#channel Notification#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#config Notification#config}
  */
  readonly config?: NotificationConfigA[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#rule Notification#rule}
  */
  readonly rule: NotificationRule[] | cdktf.IResolvable;
}
export interface NotificationConfigA {
  /**
  * Channel (slack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#channel Notification#channel}
  */
  readonly channel?: string;
  /**
  * Environments (email daily summary only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#environments Notification#environments}
  */
  readonly environments?: string[];
  /**
  * Format (webhook)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#format Notification#format}
  */
  readonly format?: string;
  /**
  * Message template (slack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#message_template Notification#message_template}
  */
  readonly messageTemplate?: string;
  /**
  * Min item level (email daily summary only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#min_item_level Notification#min_item_level}
  */
  readonly minItemLevel?: string;
  /**
  * Send only if data (email daily summary only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#send_only_if_data Notification#send_only_if_data}
  */
  readonly sendOnlyIfData?: boolean | cdktf.IResolvable;
  /**
  * Service key (pagerduty)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#service_key Notification#service_key}
  */
  readonly serviceKey?: string;
  /**
  * Show message buttons (slack)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#show_message_buttons Notification#show_message_buttons}
  */
  readonly showMessageButtons?: boolean | cdktf.IResolvable;
  /**
  * Summary Time (email daily summary only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#summary_time Notification#summary_time}
  */
  readonly summaryTime?: number;
  /**
  * Teams (email)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#teams Notification#teams}
  */
  readonly teams?: string[];
  /**
  * URL (webhook)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#url Notification#url}
  */
  readonly url?: string;
  /**
  * Users (email)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#users Notification#users}
  */
  readonly users?: string[];
}

export function notificationConfigAToTerraform(struct?: NotificationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    format: cdktf.stringToTerraform(struct!.format),
    message_template: cdktf.stringToTerraform(struct!.messageTemplate),
    min_item_level: cdktf.stringToTerraform(struct!.minItemLevel),
    send_only_if_data: cdktf.booleanToTerraform(struct!.sendOnlyIfData),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    show_message_buttons: cdktf.booleanToTerraform(struct!.showMessageButtons),
    summary_time: cdktf.numberToTerraform(struct!.summaryTime),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    url: cdktf.stringToTerraform(struct!.url),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function notificationConfigAToHclTerraform(struct?: NotificationConfigA | cdktf.IResolvable): any {
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
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_template: {
      value: cdktf.stringToHclTerraform(struct!.messageTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_item_level: {
      value: cdktf.stringToHclTerraform(struct!.minItemLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_only_if_data: {
      value: cdktf.booleanToHclTerraform(struct!.sendOnlyIfData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_message_buttons: {
      value: cdktf.booleanToHclTerraform(struct!.showMessageButtons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summary_time: {
      value: cdktf.numberToHclTerraform(struct!.summaryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._messageTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTemplate = this._messageTemplate;
    }
    if (this._minItemLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItemLevel = this._minItemLevel;
    }
    if (this._sendOnlyIfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyIfData = this._sendOnlyIfData;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._showMessageButtons !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMessageButtons = this._showMessageButtons;
    }
    if (this._summaryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryTime = this._summaryTime;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._environments = undefined;
      this._format = undefined;
      this._messageTemplate = undefined;
      this._minItemLevel = undefined;
      this._sendOnlyIfData = undefined;
      this._serviceKey = undefined;
      this._showMessageButtons = undefined;
      this._summaryTime = undefined;
      this._teams = undefined;
      this._url = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._environments = value.environments;
      this._format = value.format;
      this._messageTemplate = value.messageTemplate;
      this._minItemLevel = value.minItemLevel;
      this._sendOnlyIfData = value.sendOnlyIfData;
      this._serviceKey = value.serviceKey;
      this._showMessageButtons = value.showMessageButtons;
      this._summaryTime = value.summaryTime;
      this._teams = value.teams;
      this._url = value.url;
      this._users = value.users;
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

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // message_template - computed: false, optional: true, required: false
  private _messageTemplate?: string; 
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }
  public set messageTemplate(value: string) {
    this._messageTemplate = value;
  }
  public resetMessageTemplate() {
    this._messageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTemplateInput() {
    return this._messageTemplate;
  }

  // min_item_level - computed: false, optional: true, required: false
  private _minItemLevel?: string; 
  public get minItemLevel() {
    return this.getStringAttribute('min_item_level');
  }
  public set minItemLevel(value: string) {
    this._minItemLevel = value;
  }
  public resetMinItemLevel() {
    this._minItemLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemLevelInput() {
    return this._minItemLevel;
  }

  // send_only_if_data - computed: false, optional: true, required: false
  private _sendOnlyIfData?: boolean | cdktf.IResolvable; 
  public get sendOnlyIfData() {
    return this.getBooleanAttribute('send_only_if_data');
  }
  public set sendOnlyIfData(value: boolean | cdktf.IResolvable) {
    this._sendOnlyIfData = value;
  }
  public resetSendOnlyIfData() {
    this._sendOnlyIfData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyIfDataInput() {
    return this._sendOnlyIfData;
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

  // show_message_buttons - computed: false, optional: true, required: false
  private _showMessageButtons?: boolean | cdktf.IResolvable; 
  public get showMessageButtons() {
    return this.getBooleanAttribute('show_message_buttons');
  }
  public set showMessageButtons(value: boolean | cdktf.IResolvable) {
    this._showMessageButtons = value;
  }
  public resetShowMessageButtons() {
    this._showMessageButtons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMessageButtonsInput() {
    return this._showMessageButtons;
  }

  // summary_time - computed: false, optional: true, required: false
  private _summaryTime?: number; 
  public get summaryTime() {
    return this.getNumberAttribute('summary_time');
  }
  public set summaryTime(value: number) {
    this._summaryTime = value;
  }
  public resetSummaryTime() {
    this._summaryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryTimeInput() {
    return this._summaryTime;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
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

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class NotificationConfigAList extends cdktf.ComplexList {
  public internalValue? : NotificationConfigA[] | cdktf.IResolvable

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
  public get(index: number): NotificationConfigAOutputReference {
    return new NotificationConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRuleFilters {
  /**
  * Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#count Notification#count}
  */
  readonly count?: number;
  /**
  * Operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#operation Notification#operation}
  */
  readonly operation?: string;
  /**
  * Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#path Notification#path}
  */
  readonly path?: string;
  /**
  * Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#period Notification#period}
  */
  readonly period?: number;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#type Notification#type}
  */
  readonly type: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#value Notification#value}
  */
  readonly value?: string;
}

export function notificationRuleFiltersToTerraform(struct?: NotificationRuleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    operation: cdktf.stringToTerraform(struct!.operation),
    path: cdktf.stringToTerraform(struct!.path),
    period: cdktf.numberToTerraform(struct!.period),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationRuleFiltersToHclTerraform(struct?: NotificationRuleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class NotificationRuleFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRuleFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRuleFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._operation = undefined;
      this._path = undefined;
      this._period = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._operation = value.operation;
      this._path = value.path;
      this._period = value.period;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

export class NotificationRuleFiltersList extends cdktf.ComplexList {
  public internalValue? : NotificationRuleFilters[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleFiltersOutputReference {
    return new NotificationRuleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRule {
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#enabled Notification#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#trigger Notification#trigger}
  */
  readonly trigger: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#filters Notification#filters}
  */
  readonly filters?: NotificationRuleFilters[] | cdktf.IResolvable;
}

export function notificationRuleToTerraform(struct?: NotificationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    filters: cdktf.listMapper(notificationRuleFiltersToTerraform, true)(struct!.filters),
  }
}


export function notificationRuleToHclTerraform(struct?: NotificationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trigger: {
      value: cdktf.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(notificationRuleFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationRuleFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._trigger = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._trigger = value.trigger;
      this._filters.internalValue = value.filters;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new NotificationRuleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: NotificationRuleFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class NotificationRuleList extends cdktf.ComplexList {
  public internalValue? : NotificationRule[] | cdktf.IResolvable

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
  public get(index: number): NotificationRuleOutputReference {
    return new NotificationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification rollbar_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rollbar_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rollbar_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/notification rollbar_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'rollbar_notification',
      terraformGeneratorMetadata: {
        providerName: 'rollbar',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._id = config.id;
    this._config.internalValue = config.config;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config - computed: false, optional: true, required: false
  private _config = new NotificationConfigAList(this, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: NotificationConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new NotificationRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: NotificationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel: cdktf.stringToTerraform(this._channel),
      id: cdktf.stringToTerraform(this._id),
      config: cdktf.listMapper(notificationConfigAToTerraform, true)(this._config.internalValue),
      rule: cdktf.listMapper(notificationRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
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
      config: {
        value: cdktf.listMapperHcl(notificationConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationConfigAList",
      },
      rule: {
        value: cdktf.listMapperHcl(notificationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
