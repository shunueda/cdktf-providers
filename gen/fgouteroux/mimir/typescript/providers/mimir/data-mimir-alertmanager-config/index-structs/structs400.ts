import * as cdktf from 'cdktf';
import { DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigList,
DataMimirAlertmanagerConfigReceiverDiscordConfigsList,
DataMimirAlertmanagerConfigReceiverEmailConfigsList,
DataMimirAlertmanagerConfigReceiverMsteamsConfigsList,
DataMimirAlertmanagerConfigReceiverOpsgenieConfigsList,
DataMimirAlertmanagerConfigReceiverPagerdutyConfigsList,
DataMimirAlertmanagerConfigReceiverPushoverConfigsList,
DataMimirAlertmanagerConfigReceiverSlackConfigsList,
DataMimirAlertmanagerConfigReceiverSnsConfigsList,
DataMimirAlertmanagerConfigReceiverTelegramConfigsList,
DataMimirAlertmanagerConfigReceiverVictoropsConfigsList,
DataMimirAlertmanagerConfigReceiverWebexConfigsList,
DataMimirAlertmanagerConfigReceiverWebhookConfigsList } from './structs0'
export interface DataMimirAlertmanagerConfigReceiverWechatConfigs {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // api_secret - computed: true, optional: false, required: false
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // corp_id - computed: true, optional: false, required: false
  public get corpId() {
    return this.getStringAttribute('corp_id');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // to_party - computed: true, optional: false, required: false
  public get toParty() {
    return this.getStringAttribute('to_party');
  }

  // to_tag - computed: true, optional: false, required: false
  public get toTag() {
    return this.getStringAttribute('to_tag');
  }

  // to_user - computed: true, optional: false, required: false
  public get toUser() {
    return this.getStringAttribute('to_user');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiver {
}

export function dataMimirAlertmanagerConfigReceiverToTerraform(struct?: DataMimirAlertmanagerConfigReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discord_configs - computed: true, optional: false, required: false
  private _discordConfigs = new DataMimirAlertmanagerConfigReceiverDiscordConfigsList(this, "discord_configs", false);
  public get discordConfigs() {
    return this._discordConfigs;
  }

  // email_configs - computed: true, optional: false, required: false
  private _emailConfigs = new DataMimirAlertmanagerConfigReceiverEmailConfigsList(this, "email_configs", false);
  public get emailConfigs() {
    return this._emailConfigs;
  }

  // msteams_configs - computed: true, optional: false, required: false
  private _msteamsConfigs = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsList(this, "msteams_configs", false);
  public get msteamsConfigs() {
    return this._msteamsConfigs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opsgenie_configs - computed: true, optional: false, required: false
  private _opsgenieConfigs = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsList(this, "opsgenie_configs", false);
  public get opsgenieConfigs() {
    return this._opsgenieConfigs;
  }

  // pagerduty_configs - computed: true, optional: false, required: false
  private _pagerdutyConfigs = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsList(this, "pagerduty_configs", false);
  public get pagerdutyConfigs() {
    return this._pagerdutyConfigs;
  }

  // pushover_configs - computed: true, optional: false, required: false
  private _pushoverConfigs = new DataMimirAlertmanagerConfigReceiverPushoverConfigsList(this, "pushover_configs", false);
  public get pushoverConfigs() {
    return this._pushoverConfigs;
  }

  // slack_configs - computed: true, optional: false, required: false
  private _slackConfigs = new DataMimirAlertmanagerConfigReceiverSlackConfigsList(this, "slack_configs", false);
  public get slackConfigs() {
    return this._slackConfigs;
  }

  // sns_configs - computed: true, optional: false, required: false
  private _snsConfigs = new DataMimirAlertmanagerConfigReceiverSnsConfigsList(this, "sns_configs", false);
  public get snsConfigs() {
    return this._snsConfigs;
  }

  // telegram_configs - computed: true, optional: false, required: false
  private _telegramConfigs = new DataMimirAlertmanagerConfigReceiverTelegramConfigsList(this, "telegram_configs", false);
  public get telegramConfigs() {
    return this._telegramConfigs;
  }

  // victorops_configs - computed: true, optional: false, required: false
  private _victoropsConfigs = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsList(this, "victorops_configs", false);
  public get victoropsConfigs() {
    return this._victoropsConfigs;
  }

  // webex_configs - computed: true, optional: false, required: false
  private _webexConfigs = new DataMimirAlertmanagerConfigReceiverWebexConfigsList(this, "webex_configs", false);
  public get webexConfigs() {
    return this._webexConfigs;
  }

  // webhook_configs - computed: true, optional: false, required: false
  private _webhookConfigs = new DataMimirAlertmanagerConfigReceiverWebhookConfigsList(this, "webhook_configs", false);
  public get webhookConfigs() {
    return this._webhookConfigs;
  }

  // wechat_configs - computed: true, optional: false, required: false
  private _wechatConfigs = new DataMimirAlertmanagerConfigReceiverWechatConfigsList(this, "wechat_configs", false);
  public get wechatConfigs() {
    return this._wechatConfigs;
  }
}

export class DataMimirAlertmanagerConfigReceiverList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRoute {
}

export function dataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteToTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteToHclTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_time_intervals - computed: true, optional: false, required: false
  public get activeTimeIntervals() {
    return this.getListAttribute('active_time_intervals');
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getBooleanAttribute('continue');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_interval - computed: true, optional: false, required: false
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }

  // group_wait - computed: true, optional: false, required: false
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }

  // matchers - computed: true, optional: false, required: false
  public get matchers() {
    return this.getListAttribute('matchers');
  }

  // mute_time_intervals - computed: true, optional: false, required: false
  public get muteTimeIntervals() {
    return this.getListAttribute('mute_time_intervals');
  }

  // receiver - computed: true, optional: false, required: false
  public get receiver() {
    return this.getStringAttribute('receiver');
  }

  // repeat_interval - computed: true, optional: false, required: false
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
}

export class DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteOutputReference {
    return new DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigRouteChildRouteChildRoute {
}

export function dataMimirAlertmanagerConfigRouteChildRouteChildRouteToTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigRouteChildRouteChildRouteToHclTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigRouteChildRouteChildRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigRouteChildRouteChildRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigRouteChildRouteChildRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_time_intervals - computed: true, optional: false, required: false
  public get activeTimeIntervals() {
    return this.getListAttribute('active_time_intervals');
  }

  // child_route - computed: true, optional: false, required: false
  private _childRoute = new DataMimirAlertmanagerConfigRouteChildRouteChildRouteChildRouteList(this, "child_route", false);
  public get childRoute() {
    return this._childRoute;
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getBooleanAttribute('continue');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_interval - computed: true, optional: false, required: false
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }

  // group_wait - computed: true, optional: false, required: false
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }

  // matchers - computed: true, optional: false, required: false
  public get matchers() {
    return this.getListAttribute('matchers');
  }

  // mute_time_intervals - computed: true, optional: false, required: false
  public get muteTimeIntervals() {
    return this.getListAttribute('mute_time_intervals');
  }

  // receiver - computed: true, optional: false, required: false
  public get receiver() {
    return this.getStringAttribute('receiver');
  }

  // repeat_interval - computed: true, optional: false, required: false
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
}

export class DataMimirAlertmanagerConfigRouteChildRouteChildRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigRouteChildRouteChildRouteOutputReference {
    return new DataMimirAlertmanagerConfigRouteChildRouteChildRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigRouteChildRoute {
}

export function dataMimirAlertmanagerConfigRouteChildRouteToTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigRouteChildRouteToHclTerraform(struct?: DataMimirAlertmanagerConfigRouteChildRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigRouteChildRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigRouteChildRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigRouteChildRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_time_intervals - computed: true, optional: false, required: false
  public get activeTimeIntervals() {
    return this.getListAttribute('active_time_intervals');
  }

  // child_route - computed: true, optional: false, required: false
  private _childRoute = new DataMimirAlertmanagerConfigRouteChildRouteChildRouteList(this, "child_route", false);
  public get childRoute() {
    return this._childRoute;
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getBooleanAttribute('continue');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_interval - computed: true, optional: false, required: false
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }

  // group_wait - computed: true, optional: false, required: false
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }

  // matchers - computed: true, optional: false, required: false
  public get matchers() {
    return this.getListAttribute('matchers');
  }

  // mute_time_intervals - computed: true, optional: false, required: false
  public get muteTimeIntervals() {
    return this.getListAttribute('mute_time_intervals');
  }

  // receiver - computed: true, optional: false, required: false
  public get receiver() {
    return this.getStringAttribute('receiver');
  }

  // repeat_interval - computed: true, optional: false, required: false
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
}

export class DataMimirAlertmanagerConfigRouteChildRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigRouteChildRouteOutputReference {
    return new DataMimirAlertmanagerConfigRouteChildRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigRoute {
}

export function dataMimirAlertmanagerConfigRouteToTerraform(struct?: DataMimirAlertmanagerConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigRouteToHclTerraform(struct?: DataMimirAlertmanagerConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_route - computed: true, optional: false, required: false
  private _childRoute = new DataMimirAlertmanagerConfigRouteChildRouteList(this, "child_route", false);
  public get childRoute() {
    return this._childRoute;
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_interval - computed: true, optional: false, required: false
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }

  // group_wait - computed: true, optional: false, required: false
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }

  // receiver - computed: true, optional: false, required: false
  public get receiver() {
    return this.getStringAttribute('receiver');
  }

  // repeat_interval - computed: true, optional: false, required: false
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
}

export class DataMimirAlertmanagerConfigRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigRouteOutputReference {
    return new DataMimirAlertmanagerConfigRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonth {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getNumberAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonths {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getNumberAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimes {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_minute - computed: true, optional: false, required: false
  public get endMinute() {
    return this.getNumberAttribute('end_minute');
  }

  // start_minute - computed: true, optional: false, required: false
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdays {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getNumberAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYears {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYears): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYears): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYears | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYears | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getNumberAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeIntervalTimeIntervals {
}

export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsToTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalTimeIntervalsToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeIntervalTimeIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeIntervalTimeIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeIntervalTimeIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_of_month - computed: true, optional: false, required: false
  private _daysOfMonth = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsDaysOfMonthList(this, "days_of_month", false);
  public get daysOfMonth() {
    return this._daysOfMonth;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // months - computed: true, optional: false, required: false
  private _months = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }

  // times - computed: true, optional: false, required: false
  private _times = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsTimesList(this, "times", false);
  public get times() {
    return this._times;
  }

  // weekdays - computed: true, optional: false, required: false
  private _weekdays = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsWeekdaysList(this, "weekdays", false);
  public get weekdays() {
    return this._weekdays;
  }

  // years - computed: true, optional: false, required: false
  private _years = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsYearsList(this, "years", false);
  public get years() {
    return this._years;
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigTimeInterval {
}

export function dataMimirAlertmanagerConfigTimeIntervalToTerraform(struct?: DataMimirAlertmanagerConfigTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigTimeIntervalToHclTerraform(struct?: DataMimirAlertmanagerConfigTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_intervals - computed: true, optional: false, required: false
  private _timeIntervals = new DataMimirAlertmanagerConfigTimeIntervalTimeIntervalsList(this, "time_intervals", false);
  public get timeIntervals() {
    return this._timeIntervals;
  }
}

export class DataMimirAlertmanagerConfigTimeIntervalList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigTimeIntervalOutputReference {
    return new DataMimirAlertmanagerConfigTimeIntervalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
