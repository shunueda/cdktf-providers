// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitObservabilityInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Observability instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance#instance_id DataStackitObservabilityInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance#project_id DataStackitObservabilityInstance#project_id}
  */
  readonly projectId: string;
}
export interface DataStackitObservabilityInstanceAlertConfigGlobal {
}

export function dataStackitObservabilityInstanceAlertConfigGlobalToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigGlobalToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // opsgenie_api_key - computed: true, optional: false, required: false
  public get opsgenieApiKey() {
    return this.getStringAttribute('opsgenie_api_key');
  }

  // opsgenie_api_url - computed: true, optional: false, required: false
  public get opsgenieApiUrl() {
    return this.getStringAttribute('opsgenie_api_url');
  }

  // resolve_timeout - computed: true, optional: false, required: false
  public get resolveTimeout() {
    return this.getStringAttribute('resolve_timeout');
  }

  // smtp_auth_identity - computed: true, optional: false, required: false
  public get smtpAuthIdentity() {
    return this.getStringAttribute('smtp_auth_identity');
  }

  // smtp_auth_password - computed: true, optional: false, required: false
  public get smtpAuthPassword() {
    return this.getStringAttribute('smtp_auth_password');
  }

  // smtp_auth_username - computed: true, optional: false, required: false
  public get smtpAuthUsername() {
    return this.getStringAttribute('smtp_auth_username');
  }

  // smtp_from - computed: true, optional: false, required: false
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }

  // smtp_smart_host - computed: true, optional: false, required: false
  public get smtpSmartHost() {
    return this.getStringAttribute('smtp_smart_host');
  }
}
export interface DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigs {
}

export function dataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_identity - computed: true, optional: false, required: false
  public get authIdentity() {
    return this.getStringAttribute('auth_identity');
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // smart_host - computed: true, optional: false, required: false
  public get smartHost() {
    return this.getStringAttribute('smart_host');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference {
    return new DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigs {
}

export function dataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }
}

export class DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference {
    return new DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigs {
}

export function dataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // google_chat - computed: true, optional: false, required: false
  public get googleChat() {
    return this.getBooleanAttribute('google_chat');
  }

  // ms_teams - computed: true, optional: false, required: false
  public get msTeams() {
    return this.getBooleanAttribute('ms_teams');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference {
    return new DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitObservabilityInstanceAlertConfigReceivers {
}

export function dataStackitObservabilityInstanceAlertConfigReceiversToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigReceiversToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigReceivers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigReceivers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_configs - computed: true, optional: false, required: false
  private _emailConfigs = new DataStackitObservabilityInstanceAlertConfigReceiversEmailConfigsList(this, "email_configs", false);
  public get emailConfigs() {
    return this._emailConfigs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opsgenie_configs - computed: true, optional: false, required: false
  private _opsgenieConfigs = new DataStackitObservabilityInstanceAlertConfigReceiversOpsgenieConfigsList(this, "opsgenie_configs", false);
  public get opsgenieConfigs() {
    return this._opsgenieConfigs;
  }

  // webhooks_configs - computed: true, optional: false, required: false
  private _webhooksConfigs = new DataStackitObservabilityInstanceAlertConfigReceiversWebhooksConfigsList(this, "webhooks_configs", false);
  public get webhooksConfigs() {
    return this._webhooksConfigs;
  }
}

export class DataStackitObservabilityInstanceAlertConfigReceiversList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitObservabilityInstanceAlertConfigReceiversOutputReference {
    return new DataStackitObservabilityInstanceAlertConfigReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitObservabilityInstanceAlertConfigRouteRoutes {
}

export function dataStackitObservabilityInstanceAlertConfigRouteRoutesToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigRouteRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigRouteRoutesToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigRouteRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigRouteRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigRouteRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigRouteRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // match - computed: true, optional: false, required: false
  private _match = new cdktf.StringMap(this, "match");
  public get match() {
    return this._match;
  }

  // match_regex - computed: true, optional: false, required: false
  private _matchRegex = new cdktf.StringMap(this, "match_regex");
  public get matchRegex() {
    return this._matchRegex;
  }

  // matchers - computed: true, optional: false, required: false
  public get matchers() {
    return this.getListAttribute('matchers');
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

export class DataStackitObservabilityInstanceAlertConfigRouteRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitObservabilityInstanceAlertConfigRouteRoutesOutputReference {
    return new DataStackitObservabilityInstanceAlertConfigRouteRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitObservabilityInstanceAlertConfigRoute {
}

export function dataStackitObservabilityInstanceAlertConfigRouteToTerraform(struct?: DataStackitObservabilityInstanceAlertConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigRouteToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitObservabilityInstanceAlertConfigRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfigRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // routes - computed: true, optional: false, required: false
  private _routes = new DataStackitObservabilityInstanceAlertConfigRouteRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
}
export interface DataStackitObservabilityInstanceAlertConfig {
}

export function dataStackitObservabilityInstanceAlertConfigToTerraform(struct?: DataStackitObservabilityInstanceAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitObservabilityInstanceAlertConfigToHclTerraform(struct?: DataStackitObservabilityInstanceAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitObservabilityInstanceAlertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitObservabilityInstanceAlertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitObservabilityInstanceAlertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataStackitObservabilityInstanceAlertConfigGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }

  // receivers - computed: true, optional: false, required: false
  private _receivers = new DataStackitObservabilityInstanceAlertConfigReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataStackitObservabilityInstanceAlertConfigRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance stackit_observability_instance}
*/
export class DataStackitObservabilityInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_observability_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitObservabilityInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitObservabilityInstance to import
  * @param importFromId The id of the existing DataStackitObservabilityInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitObservabilityInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_observability_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/observability_instance stackit_observability_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitObservabilityInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitObservabilityInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_observability_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }

  // alert_config - computed: true, optional: false, required: false
  private _alertConfig = new DataStackitObservabilityInstanceAlertConfigOutputReference(this, "alert_config");
  public get alertConfig() {
    return this._alertConfig;
  }

  // alerting_url - computed: true, optional: false, required: false
  public get alertingUrl() {
    return this.getStringAttribute('alerting_url');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // grafana_initial_admin_password - computed: true, optional: false, required: false
  public get grafanaInitialAdminPassword() {
    return this.getStringAttribute('grafana_initial_admin_password');
  }

  // grafana_initial_admin_user - computed: true, optional: false, required: false
  public get grafanaInitialAdminUser() {
    return this.getStringAttribute('grafana_initial_admin_user');
  }

  // grafana_public_read_access - computed: true, optional: false, required: false
  public get grafanaPublicReadAccess() {
    return this.getBooleanAttribute('grafana_public_read_access');
  }

  // grafana_url - computed: true, optional: false, required: false
  public get grafanaUrl() {
    return this.getStringAttribute('grafana_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_updatable - computed: true, optional: false, required: false
  public get isUpdatable() {
    return this.getBooleanAttribute('is_updatable');
  }

  // jaeger_traces_url - computed: true, optional: false, required: false
  public get jaegerTracesUrl() {
    return this.getStringAttribute('jaeger_traces_url');
  }

  // jaeger_ui_url - computed: true, optional: false, required: false
  public get jaegerUiUrl() {
    return this.getStringAttribute('jaeger_ui_url');
  }

  // logs_push_url - computed: true, optional: false, required: false
  public get logsPushUrl() {
    return this.getStringAttribute('logs_push_url');
  }

  // logs_retention_days - computed: true, optional: false, required: false
  public get logsRetentionDays() {
    return this.getNumberAttribute('logs_retention_days');
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // metrics_push_url - computed: true, optional: false, required: false
  public get metricsPushUrl() {
    return this.getStringAttribute('metrics_push_url');
  }

  // metrics_retention_days - computed: true, optional: false, required: false
  public get metricsRetentionDays() {
    return this.getNumberAttribute('metrics_retention_days');
  }

  // metrics_retention_days_1h_downsampling - computed: true, optional: false, required: false
  public get metricsRetentionDays1HDownsampling() {
    return this.getNumberAttribute('metrics_retention_days_1h_downsampling');
  }

  // metrics_retention_days_5m_downsampling - computed: true, optional: false, required: false
  public get metricsRetentionDays5MDownsampling() {
    return this.getNumberAttribute('metrics_retention_days_5m_downsampling');
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // otlp_traces_url - computed: true, optional: false, required: false
  public get otlpTracesUrl() {
    return this.getStringAttribute('otlp_traces_url');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // targets_url - computed: true, optional: false, required: false
  public get targetsUrl() {
    return this.getStringAttribute('targets_url');
  }

  // traces_retention_days - computed: true, optional: false, required: false
  public get tracesRetentionDays() {
    return this.getNumberAttribute('traces_retention_days');
  }

  // zipkin_spans_url - computed: true, optional: false, required: false
  public get zipkinSpansUrl() {
    return this.getStringAttribute('zipkin_spans_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
