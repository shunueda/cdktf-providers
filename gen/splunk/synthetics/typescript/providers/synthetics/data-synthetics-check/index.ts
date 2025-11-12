// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSyntheticsCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#created_at DataSyntheticsCheck#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#frequency DataSyntheticsCheck#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#id DataSyntheticsCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#muted DataSyntheticsCheck#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#paused DataSyntheticsCheck#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#response_time_monitor_milliseconds DataSyntheticsCheck#response_time_monitor_milliseconds}
  */
  readonly responseTimeMonitorMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#type DataSyntheticsCheck#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#updated_at DataSyntheticsCheck#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * browser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#browser DataSyntheticsCheck#browser}
  */
  readonly browser?: DataSyntheticsCheckBrowser[] | cdktf.IResolvable;
  /**
  * check_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#check_connection DataSyntheticsCheck#check_connection}
  */
  readonly checkConnection?: DataSyntheticsCheckCheckConnection[] | cdktf.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#cookies DataSyntheticsCheck#cookies}
  */
  readonly cookies?: DataSyntheticsCheckCookies[] | cdktf.IResolvable;
  /**
  * dns_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#dns_overrides DataSyntheticsCheck#dns_overrides}
  */
  readonly dnsOverrides?: DataSyntheticsCheckDnsOverrides[] | cdktf.IResolvable;
  /**
  * excluded_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#excluded_files DataSyntheticsCheck#excluded_files}
  */
  readonly excludedFiles?: DataSyntheticsCheckExcludedFiles[] | cdktf.IResolvable;
  /**
  * javascript_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#javascript_files DataSyntheticsCheck#javascript_files}
  */
  readonly javascriptFiles?: DataSyntheticsCheckJavascriptFiles[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#links DataSyntheticsCheck#links}
  */
  readonly links?: DataSyntheticsCheckLinks[] | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#steps DataSyntheticsCheck#steps}
  */
  readonly steps?: DataSyntheticsCheckSteps[] | cdktf.IResolvable;
  /**
  * threshold_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#threshold_monitors DataSyntheticsCheck#threshold_monitors}
  */
  readonly thresholdMonitors?: DataSyntheticsCheckThresholdMonitors[] | cdktf.IResolvable;
  /**
  * viewport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#viewport DataSyntheticsCheck#viewport}
  */
  readonly viewport?: DataSyntheticsCheckViewport[] | cdktf.IResolvable;
}
export interface DataSyntheticsCheckBlackoutPeriods {
}

export function dataSyntheticsCheckBlackoutPeriodsToTerraform(struct?: DataSyntheticsCheckBlackoutPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckBlackoutPeriodsToHclTerraform(struct?: DataSyntheticsCheckBlackoutPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckBlackoutPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckBlackoutPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckBlackoutPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // is_repeat - computed: true, optional: false, required: false
  public get isRepeat() {
    return this.getBooleanAttribute('is_repeat');
  }

  // monthly_repeat_type - computed: true, optional: false, required: false
  public get monthlyRepeatType() {
    return this.getStringAttribute('monthly_repeat_type');
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataSyntheticsCheckBlackoutPeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckBlackoutPeriodsOutputReference {
    return new DataSyntheticsCheckBlackoutPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckHttpRequestHeaders {
}

export function dataSyntheticsCheckHttpRequestHeadersToTerraform(struct?: DataSyntheticsCheckHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckHttpRequestHeadersToHclTerraform(struct?: DataSyntheticsCheckHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckHttpRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckHttpRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckHttpRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
}

export class DataSyntheticsCheckHttpRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckHttpRequestHeadersOutputReference {
    return new DataSyntheticsCheckHttpRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckIntegrations {
}

export function dataSyntheticsCheckIntegrationsToTerraform(struct?: DataSyntheticsCheckIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckIntegrationsToHclTerraform(struct?: DataSyntheticsCheckIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSyntheticsCheckIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckIntegrationsOutputReference {
    return new DataSyntheticsCheckIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckLocations {
}

export function dataSyntheticsCheckLocationsToTerraform(struct?: DataSyntheticsCheckLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckLocationsToHclTerraform(struct?: DataSyntheticsCheckLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // world_region - computed: true, optional: false, required: false
  public get worldRegion() {
    return this.getStringAttribute('world_region');
  }
}

export class DataSyntheticsCheckLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckLocationsOutputReference {
    return new DataSyntheticsCheckLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsEscalationsNotificationWindow {
}

export function dataSyntheticsCheckNotificationsEscalationsNotificationWindowToTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotificationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsEscalationsNotificationWindowToHclTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotificationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsEscalationsNotificationWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsEscalationsNotificationWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsEscalationsNotificationWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class DataSyntheticsCheckNotificationsEscalationsNotificationWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsEscalationsNotificationWindowOutputReference {
    return new DataSyntheticsCheckNotificationsEscalationsNotificationWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinks {
}

export function dataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksToTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksToHclTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self_html - computed: true, optional: false, required: false
  public get selfHtml() {
    return this.getStringAttribute('self_html');
  }
}

export class DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksOutputReference {
    return new DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsEscalationsNotifyWho {
}

export function dataSyntheticsCheckNotificationsEscalationsNotifyWhoToTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotifyWho): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsEscalationsNotifyWhoToHclTerraform(struct?: DataSyntheticsCheckNotificationsEscalationsNotifyWho): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsEscalationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsEscalationsNotifyWho | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsEscalationsNotifyWho | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_user_email - computed: true, optional: false, required: false
  public get customUserEmail() {
    return this.getStringAttribute('custom_user_email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataSyntheticsCheckNotificationsEscalationsNotifyWhoLinksList(this, "links", true);
  public get links() {
    return this._links;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSyntheticsCheckNotificationsEscalationsNotifyWhoList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsEscalationsNotifyWhoOutputReference {
    return new DataSyntheticsCheckNotificationsEscalationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsEscalations {
}

export function dataSyntheticsCheckNotificationsEscalationsToTerraform(struct?: DataSyntheticsCheckNotificationsEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsEscalationsToHclTerraform(struct?: DataSyntheticsCheckNotificationsEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsEscalationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsEscalations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsEscalations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_minutes - computed: true, optional: false, required: false
  public get afterMinutes() {
    return this.getNumberAttribute('after_minutes');
  }

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
  }

  // is_repeat - computed: true, optional: false, required: false
  public get isRepeat() {
    return this.getBooleanAttribute('is_repeat');
  }

  // notification_window - computed: true, optional: false, required: false
  private _notificationWindow = new DataSyntheticsCheckNotificationsEscalationsNotificationWindowList(this, "notification_window", true);
  public get notificationWindow() {
    return this._notificationWindow;
  }

  // notify_who - computed: true, optional: false, required: false
  private _notifyWho = new DataSyntheticsCheckNotificationsEscalationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
}

export class DataSyntheticsCheckNotificationsEscalationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsEscalationsOutputReference {
    return new DataSyntheticsCheckNotificationsEscalationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsNotificationWindows {
}

export function dataSyntheticsCheckNotificationsNotificationWindowsToTerraform(struct?: DataSyntheticsCheckNotificationsNotificationWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsNotificationWindowsToHclTerraform(struct?: DataSyntheticsCheckNotificationsNotificationWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsNotificationWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsNotificationWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsNotificationWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class DataSyntheticsCheckNotificationsNotificationWindowsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsNotificationWindowsOutputReference {
    return new DataSyntheticsCheckNotificationsNotificationWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsNotifyWhoLinks {
}

export function dataSyntheticsCheckNotificationsNotifyWhoLinksToTerraform(struct?: DataSyntheticsCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsNotifyWhoLinksToHclTerraform(struct?: DataSyntheticsCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsNotifyWhoLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self_html - computed: true, optional: false, required: false
  public get selfHtml() {
    return this.getStringAttribute('self_html');
  }
}

export class DataSyntheticsCheckNotificationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsNotifyWhoLinksOutputReference {
    return new DataSyntheticsCheckNotificationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotificationsNotifyWho {
}

export function dataSyntheticsCheckNotificationsNotifyWhoToTerraform(struct?: DataSyntheticsCheckNotificationsNotifyWho): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsNotifyWhoToHclTerraform(struct?: DataSyntheticsCheckNotificationsNotifyWho): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotificationsNotifyWho | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotificationsNotifyWho | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // custom_user_email - computed: true, optional: false, required: false
  public get customUserEmail() {
    return this.getStringAttribute('custom_user_email');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataSyntheticsCheckNotificationsNotifyWhoLinksList(this, "links", true);
  public get links() {
    return this._links;
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSyntheticsCheckNotificationsNotifyWhoList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsNotifyWhoOutputReference {
    return new DataSyntheticsCheckNotificationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckNotifications {
}

export function dataSyntheticsCheckNotificationsToTerraform(struct?: DataSyntheticsCheckNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckNotificationsToHclTerraform(struct?: DataSyntheticsCheckNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
  }

  // escalations - computed: true, optional: false, required: false
  private _escalations = new DataSyntheticsCheckNotificationsEscalationsList(this, "escalations", true);
  public get escalations() {
    return this._escalations;
  }

  // muted - computed: true, optional: false, required: false
  public get muted() {
    return this.getBooleanAttribute('muted');
  }

  // notification_windows - computed: true, optional: false, required: false
  private _notificationWindows = new DataSyntheticsCheckNotificationsNotificationWindowsList(this, "notification_windows", true);
  public get notificationWindows() {
    return this._notificationWindows;
  }

  // notify_after_failure_count - computed: true, optional: false, required: false
  public get notifyAfterFailureCount() {
    return this.getNumberAttribute('notify_after_failure_count');
  }

  // notify_on_location_failure - computed: true, optional: false, required: false
  public get notifyOnLocationFailure() {
    return this.getBooleanAttribute('notify_on_location_failure');
  }

  // notify_who - computed: true, optional: false, required: false
  private _notifyWho = new DataSyntheticsCheckNotificationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
}

export class DataSyntheticsCheckNotificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckNotificationsOutputReference {
    return new DataSyntheticsCheckNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckStatus {
}

export function dataSyntheticsCheckStatusToTerraform(struct?: DataSyntheticsCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckStatusToHclTerraform(struct?: DataSyntheticsCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_failure - computed: true, optional: false, required: false
  public get hasFailure() {
    return this.getBooleanAttribute('has_failure');
  }

  // has_location_failure - computed: true, optional: false, required: false
  public get hasLocationFailure() {
    return this.getBooleanAttribute('has_location_failure');
  }

  // last_alert_at - computed: true, optional: false, required: false
  public get lastAlertAt() {
    return this.getStringAttribute('last_alert_at');
  }

  // last_code - computed: true, optional: false, required: false
  public get lastCode() {
    return this.getNumberAttribute('last_code');
  }

  // last_failure_at - computed: true, optional: false, required: false
  public get lastFailureAt() {
    return this.getStringAttribute('last_failure_at');
  }

  // last_message - computed: true, optional: false, required: false
  public get lastMessage() {
    return this.getStringAttribute('last_message');
  }

  // last_response_time - computed: true, optional: false, required: false
  public get lastResponseTime() {
    return this.getNumberAttribute('last_response_time');
  }

  // last_run_at - computed: true, optional: false, required: false
  public get lastRunAt() {
    return this.getStringAttribute('last_run_at');
  }
}

export class DataSyntheticsCheckStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckStatusOutputReference {
    return new DataSyntheticsCheckStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckSuccessCriteria {
}

export function dataSyntheticsCheckSuccessCriteriaToTerraform(struct?: DataSyntheticsCheckSuccessCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckSuccessCriteriaToHclTerraform(struct?: DataSyntheticsCheckSuccessCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckSuccessCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckSuccessCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckSuccessCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // comparison_string - computed: true, optional: false, required: false
  public get comparisonString() {
    return this.getStringAttribute('comparison_string');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataSyntheticsCheckSuccessCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckSuccessCriteriaOutputReference {
    return new DataSyntheticsCheckSuccessCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckTags {
}

export function dataSyntheticsCheckTagsToTerraform(struct?: DataSyntheticsCheckTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsCheckTagsToHclTerraform(struct?: DataSyntheticsCheckTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsCheckTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSyntheticsCheckTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsCheckTagsOutputReference {
    return new DataSyntheticsCheckTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckBrowser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#type DataSyntheticsCheck#type}
  */
  readonly type?: string;
}

export function dataSyntheticsCheckBrowserToTerraform(struct?: DataSyntheticsCheckBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSyntheticsCheckBrowserToHclTerraform(struct?: DataSyntheticsCheckBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckBrowserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckBrowser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckBrowser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataSyntheticsCheckBrowserList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckBrowser[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckBrowserOutputReference {
    return new DataSyntheticsCheckBrowserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckCheckConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#download_bandwidth DataSyntheticsCheck#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#latency DataSyntheticsCheck#latency}
  */
  readonly latency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#packet_loss DataSyntheticsCheck#packet_loss}
  */
  readonly packetLoss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#upload_bandwidth DataSyntheticsCheck#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
}

export function dataSyntheticsCheckCheckConnectionToTerraform(struct?: DataSyntheticsCheckCheckConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_bandwidth: cdktf.numberToTerraform(struct!.downloadBandwidth),
    latency: cdktf.numberToTerraform(struct!.latency),
    packet_loss: cdktf.numberToTerraform(struct!.packetLoss),
    upload_bandwidth: cdktf.numberToTerraform(struct!.uploadBandwidth),
  }
}


export function dataSyntheticsCheckCheckConnectionToHclTerraform(struct?: DataSyntheticsCheckCheckConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.downloadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss: {
      value: cdktf.numberToHclTerraform(struct!.packetLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.uploadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckCheckConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckCheckConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadBandwidth = this._downloadBandwidth;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._packetLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLoss = this._packetLoss;
    }
    if (this._uploadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadBandwidth = this._uploadBandwidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckCheckConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadBandwidth = undefined;
      this._latency = undefined;
      this._packetLoss = undefined;
      this._uploadBandwidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadBandwidth = value.downloadBandwidth;
      this._latency = value.latency;
      this._packetLoss = value.packetLoss;
      this._uploadBandwidth = value.uploadBandwidth;
    }
  }

  // download_bandwidth - computed: true, optional: true, required: false
  private _downloadBandwidth?: number; 
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }
  public set downloadBandwidth(value: number) {
    this._downloadBandwidth = value;
  }
  public resetDownloadBandwidth() {
    this._downloadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadBandwidthInput() {
    return this._downloadBandwidth;
  }

  // latency - computed: true, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // packet_loss - computed: true, optional: true, required: false
  private _packetLoss?: number; 
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }
  public set packetLoss(value: number) {
    this._packetLoss = value;
  }
  public resetPacketLoss() {
    this._packetLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossInput() {
    return this._packetLoss;
  }

  // upload_bandwidth - computed: true, optional: true, required: false
  private _uploadBandwidth?: number; 
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
  public set uploadBandwidth(value: number) {
    this._uploadBandwidth = value;
  }
  public resetUploadBandwidth() {
    this._uploadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadBandwidthInput() {
    return this._uploadBandwidth;
  }
}

export class DataSyntheticsCheckCheckConnectionList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckCheckConnection[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckCheckConnectionOutputReference {
    return new DataSyntheticsCheckCheckConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#domain DataSyntheticsCheck#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#key DataSyntheticsCheck#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#path DataSyntheticsCheck#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#value DataSyntheticsCheck#value}
  */
  readonly value?: string;
}

export function dataSyntheticsCheckCookiesToTerraform(struct?: DataSyntheticsCheckCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSyntheticsCheckCookiesToHclTerraform(struct?: DataSyntheticsCheckCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataSyntheticsCheckCookiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._key = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._key = value.key;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataSyntheticsCheckCookiesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckCookies[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckCookiesOutputReference {
    return new DataSyntheticsCheckCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckDnsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#original_domain DataSyntheticsCheck#original_domain}
  */
  readonly originalDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#original_host DataSyntheticsCheck#original_host}
  */
  readonly originalHost?: string;
}

export function dataSyntheticsCheckDnsOverridesToTerraform(struct?: DataSyntheticsCheckDnsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original_domain: cdktf.stringToTerraform(struct!.originalDomain),
    original_host: cdktf.stringToTerraform(struct!.originalHost),
  }
}


export function dataSyntheticsCheckDnsOverridesToHclTerraform(struct?: DataSyntheticsCheckDnsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original_domain: {
      value: cdktf.stringToHclTerraform(struct!.originalDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_host: {
      value: cdktf.stringToHclTerraform(struct!.originalHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckDnsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckDnsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originalDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalDomain = this._originalDomain;
    }
    if (this._originalHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalHost = this._originalHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckDnsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originalDomain = undefined;
      this._originalHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originalDomain = value.originalDomain;
      this._originalHost = value.originalHost;
    }
  }

  // original_domain - computed: false, optional: true, required: false
  private _originalDomain?: string; 
  public get originalDomain() {
    return this.getStringAttribute('original_domain');
  }
  public set originalDomain(value: string) {
    this._originalDomain = value;
  }
  public resetOriginalDomain() {
    this._originalDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDomainInput() {
    return this._originalDomain;
  }

  // original_host - computed: false, optional: true, required: false
  private _originalHost?: string; 
  public get originalHost() {
    return this.getStringAttribute('original_host');
  }
  public set originalHost(value: string) {
    this._originalHost = value;
  }
  public resetOriginalHost() {
    this._originalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalHostInput() {
    return this._originalHost;
  }
}

export class DataSyntheticsCheckDnsOverridesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckDnsOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckDnsOverridesOutputReference {
    return new DataSyntheticsCheckDnsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckExcludedFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#exclusion_type DataSyntheticsCheck#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#pattern DataSyntheticsCheck#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#preset_name DataSyntheticsCheck#preset_name}
  */
  readonly presetName?: string;
}

export function dataSyntheticsCheckExcludedFilesToTerraform(struct?: DataSyntheticsCheckExcludedFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    preset_name: cdktf.stringToTerraform(struct!.presetName),
  }
}


export function dataSyntheticsCheckExcludedFilesToHclTerraform(struct?: DataSyntheticsCheckExcludedFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_type: {
      value: cdktf.stringToHclTerraform(struct!.exclusionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_name: {
      value: cdktf.stringToHclTerraform(struct!.presetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckExcludedFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckExcludedFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._presetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetName = this._presetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckExcludedFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._pattern = undefined;
      this._presetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._pattern = value.pattern;
      this._presetName = value.presetName;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // preset_name - computed: false, optional: true, required: false
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  public resetPresetName() {
    this._presetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }
}

export class DataSyntheticsCheckExcludedFilesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckExcludedFiles[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckExcludedFilesOutputReference {
    return new DataSyntheticsCheckExcludedFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckJavascriptFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#id DataSyntheticsCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#name DataSyntheticsCheck#name}
  */
  readonly name?: string;
}

export function dataSyntheticsCheckJavascriptFilesToTerraform(struct?: DataSyntheticsCheckJavascriptFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataSyntheticsCheckJavascriptFilesToHclTerraform(struct?: DataSyntheticsCheckJavascriptFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckJavascriptFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckJavascriptFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckJavascriptFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataSyntheticsCheckJavascriptFilesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckJavascriptFiles[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckJavascriptFilesOutputReference {
    return new DataSyntheticsCheckJavascriptFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#last_run DataSyntheticsCheck#last_run}
  */
  readonly lastRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#metrics DataSyntheticsCheck#metrics}
  */
  readonly metrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#self DataSyntheticsCheck#self}
  */
  readonly selfAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#self_html DataSyntheticsCheck#self_html}
  */
  readonly selfHtml?: string;
}

export function dataSyntheticsCheckLinksToTerraform(struct?: DataSyntheticsCheckLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_run: cdktf.stringToTerraform(struct!.lastRun),
    metrics: cdktf.stringToTerraform(struct!.metrics),
    self: cdktf.stringToTerraform(struct!.selfAttribute),
    self_html: cdktf.stringToTerraform(struct!.selfHtml),
  }
}


export function dataSyntheticsCheckLinksToHclTerraform(struct?: DataSyntheticsCheckLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_run: {
      value: cdktf.stringToHclTerraform(struct!.lastRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.stringToHclTerraform(struct!.metrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self: {
      value: cdktf.stringToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_html: {
      value: cdktf.stringToHclTerraform(struct!.selfHtml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRun = this._lastRun;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._selfHtml !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHtml = this._selfHtml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastRun = undefined;
      this._metrics = undefined;
      this._self = undefined;
      this._selfHtml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastRun = value.lastRun;
      this._metrics = value.metrics;
      this._self = value.selfAttribute;
      this._selfHtml = value.selfHtml;
    }
  }

  // last_run - computed: true, optional: true, required: false
  private _lastRun?: string; 
  public get lastRun() {
    return this.getStringAttribute('last_run');
  }
  public set lastRun(value: string) {
    this._lastRun = value;
  }
  public resetLastRun() {
    this._lastRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRunInput() {
    return this._lastRun;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string; 
  public get metrics() {
    return this.getStringAttribute('metrics');
  }
  public set metrics(value: string) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // self - computed: true, optional: true, required: false
  private _self?: string; 
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }
  public set selfAttribute(value: string) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
  }

  // self_html - computed: true, optional: true, required: false
  private _selfHtml?: string; 
  public get selfHtml() {
    return this.getStringAttribute('self_html');
  }
  public set selfHtml(value: string) {
    this._selfHtml = value;
  }
  public resetSelfHtml() {
    this._selfHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHtmlInput() {
    return this._selfHtml;
  }
}

export class DataSyntheticsCheckLinksList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckLinksOutputReference {
    return new DataSyntheticsCheckLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#how DataSyntheticsCheck#how}
  */
  readonly how?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#item_method DataSyntheticsCheck#item_method}
  */
  readonly itemMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#name DataSyntheticsCheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#position DataSyntheticsCheck#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#value DataSyntheticsCheck#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#variable_name DataSyntheticsCheck#variable_name}
  */
  readonly variableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#what DataSyntheticsCheck#what}
  */
  readonly what?: string;
}

export function dataSyntheticsCheckStepsToTerraform(struct?: DataSyntheticsCheckSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    how: cdktf.stringToTerraform(struct!.how),
    item_method: cdktf.stringToTerraform(struct!.itemMethod),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.numberToTerraform(struct!.position),
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    what: cdktf.stringToTerraform(struct!.what),
  }
}


export function dataSyntheticsCheckStepsToHclTerraform(struct?: DataSyntheticsCheckSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    how: {
      value: cdktf.stringToHclTerraform(struct!.how),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_method: {
      value: cdktf.stringToHclTerraform(struct!.itemMethod),
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
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    what: {
      value: cdktf.stringToHclTerraform(struct!.what),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._how !== undefined) {
      hasAnyValues = true;
      internalValueResult.how = this._how;
    }
    if (this._itemMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemMethod = this._itemMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._what !== undefined) {
      hasAnyValues = true;
      internalValueResult.what = this._what;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._how = undefined;
      this._itemMethod = undefined;
      this._name = undefined;
      this._position = undefined;
      this._value = undefined;
      this._variableName = undefined;
      this._what = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._how = value.how;
      this._itemMethod = value.itemMethod;
      this._name = value.name;
      this._position = value.position;
      this._value = value.value;
      this._variableName = value.variableName;
      this._what = value.what;
    }
  }

  // how - computed: false, optional: true, required: false
  private _how?: string; 
  public get how() {
    return this.getStringAttribute('how');
  }
  public set how(value: string) {
    this._how = value;
  }
  public resetHow() {
    this._how = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get howInput() {
    return this._how;
  }

  // item_method - computed: false, optional: true, required: false
  private _itemMethod?: string; 
  public get itemMethod() {
    return this.getStringAttribute('item_method');
  }
  public set itemMethod(value: string) {
    this._itemMethod = value;
  }
  public resetItemMethod() {
    this._itemMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemMethodInput() {
    return this._itemMethod;
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

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // what - computed: false, optional: true, required: false
  private _what?: string; 
  public get what() {
    return this.getStringAttribute('what');
  }
  public set what(value: string) {
    this._what = value;
  }
  public resetWhat() {
    this._what = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatInput() {
    return this._what;
  }
}

export class DataSyntheticsCheckStepsList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckSteps[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckStepsOutputReference {
    return new DataSyntheticsCheckStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckThresholdMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#comparison_type DataSyntheticsCheck#comparison_type}
  */
  readonly comparisonType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#matcher DataSyntheticsCheck#matcher}
  */
  readonly matcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#metric_name DataSyntheticsCheck#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#value DataSyntheticsCheck#value}
  */
  readonly value?: number;
}

export function dataSyntheticsCheckThresholdMonitorsToTerraform(struct?: DataSyntheticsCheckThresholdMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataSyntheticsCheckThresholdMonitorsToHclTerraform(struct?: DataSyntheticsCheckThresholdMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckThresholdMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckThresholdMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckThresholdMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonType = undefined;
      this._matcher = undefined;
      this._metricName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonType = value.comparisonType;
      this._matcher = value.matcher;
      this._metricName = value.metricName;
      this._value = value.value;
    }
  }

  // comparison_type - computed: false, optional: true, required: false
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  public resetComparisonType() {
    this._comparisonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class DataSyntheticsCheckThresholdMonitorsList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckThresholdMonitors[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckThresholdMonitorsOutputReference {
    return new DataSyntheticsCheckThresholdMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsCheckViewport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#height DataSyntheticsCheck#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#width DataSyntheticsCheck#width}
  */
  readonly width?: number;
}

export function dataSyntheticsCheckViewportToTerraform(struct?: DataSyntheticsCheckViewport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function dataSyntheticsCheckViewportToHclTerraform(struct?: DataSyntheticsCheckViewport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsCheckViewportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsCheckViewport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsCheckViewport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class DataSyntheticsCheckViewportList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsCheckViewport[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsCheckViewportOutputReference {
    return new DataSyntheticsCheckViewportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check synthetics_check}
*/
export class DataSyntheticsCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSyntheticsCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSyntheticsCheck to import
  * @param importFromId The id of the existing DataSyntheticsCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSyntheticsCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/data-sources/check synthetics_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSyntheticsCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataSyntheticsCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16',
        providerVersionConstraint: '2.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._frequency = config.frequency;
    this._id = config.id;
    this._muted = config.muted;
    this._paused = config.paused;
    this._responseTimeMonitorMilliseconds = config.responseTimeMonitorMilliseconds;
    this._type = config.type;
    this._updatedAt = config.updatedAt;
    this._browser.internalValue = config.browser;
    this._checkConnection.internalValue = config.checkConnection;
    this._cookies.internalValue = config.cookies;
    this._dnsOverrides.internalValue = config.dnsOverrides;
    this._excludedFiles.internalValue = config.excludedFiles;
    this._javascriptFiles.internalValue = config.javascriptFiles;
    this._links.internalValue = config.links;
    this._steps.internalValue = config.steps;
    this._thresholdMonitors.internalValue = config.thresholdMonitors;
    this._viewport.internalValue = config.viewport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_retry - computed: true, optional: false, required: false
  public get autoRetry() {
    return this.getBooleanAttribute('auto_retry');
  }

  // blackout_periods - computed: true, optional: false, required: false
  private _blackoutPeriods = new DataSyntheticsCheckBlackoutPeriodsList(this, "blackout_periods", true);
  public get blackoutPeriods() {
    return this._blackoutPeriods;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // http_request_headers - computed: true, optional: false, required: false
  private _httpRequestHeaders = new DataSyntheticsCheckHttpRequestHeadersList(this, "http_request_headers", false);
  public get httpRequestHeaders() {
    return this._httpRequestHeaders;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integrations - computed: true, optional: false, required: false
  private _integrations = new DataSyntheticsCheckIntegrationsList(this, "integrations", true);
  public get integrations() {
    return this._integrations;
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataSyntheticsCheckLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
  }

  // muted - computed: true, optional: true, required: false
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  public resetMuted() {
    this._muted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataSyntheticsCheckNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // response_time_monitor_milliseconds - computed: true, optional: true, required: false
  private _responseTimeMonitorMilliseconds?: number; 
  public get responseTimeMonitorMilliseconds() {
    return this.getNumberAttribute('response_time_monitor_milliseconds');
  }
  public set responseTimeMonitorMilliseconds(value: number) {
    this._responseTimeMonitorMilliseconds = value;
  }
  public resetResponseTimeMonitorMilliseconds() {
    this._responseTimeMonitorMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeMonitorMillisecondsInput() {
    return this._responseTimeMonitorMilliseconds;
  }

  // round_robin - computed: true, optional: false, required: false
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataSyntheticsCheckStatusList(this, "status", true);
  public get status() {
    return this._status;
  }

  // success_criteria - computed: true, optional: false, required: false
  private _successCriteria = new DataSyntheticsCheckSuccessCriteriaList(this, "success_criteria", true);
  public get successCriteria() {
    return this._successCriteria;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataSyntheticsCheckTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // browser - computed: false, optional: true, required: false
  private _browser = new DataSyntheticsCheckBrowserList(this, "browser", true);
  public get browser() {
    return this._browser;
  }
  public putBrowser(value: DataSyntheticsCheckBrowser[] | cdktf.IResolvable) {
    this._browser.internalValue = value;
  }
  public resetBrowser() {
    this._browser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInput() {
    return this._browser.internalValue;
  }

  // check_connection - computed: false, optional: true, required: false
  private _checkConnection = new DataSyntheticsCheckCheckConnectionList(this, "check_connection", true);
  public get checkConnection() {
    return this._checkConnection;
  }
  public putCheckConnection(value: DataSyntheticsCheckCheckConnection[] | cdktf.IResolvable) {
    this._checkConnection.internalValue = value;
  }
  public resetCheckConnection() {
    this._checkConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConnectionInput() {
    return this._checkConnection.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new DataSyntheticsCheckCookiesList(this, "cookies", true);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: DataSyntheticsCheckCookies[] | cdktf.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // dns_overrides - computed: false, optional: true, required: false
  private _dnsOverrides = new DataSyntheticsCheckDnsOverridesList(this, "dns_overrides", true);
  public get dnsOverrides() {
    return this._dnsOverrides;
  }
  public putDnsOverrides(value: DataSyntheticsCheckDnsOverrides[] | cdktf.IResolvable) {
    this._dnsOverrides.internalValue = value;
  }
  public resetDnsOverrides() {
    this._dnsOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverridesInput() {
    return this._dnsOverrides.internalValue;
  }

  // excluded_files - computed: false, optional: true, required: false
  private _excludedFiles = new DataSyntheticsCheckExcludedFilesList(this, "excluded_files", true);
  public get excludedFiles() {
    return this._excludedFiles;
  }
  public putExcludedFiles(value: DataSyntheticsCheckExcludedFiles[] | cdktf.IResolvable) {
    this._excludedFiles.internalValue = value;
  }
  public resetExcludedFiles() {
    this._excludedFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFilesInput() {
    return this._excludedFiles.internalValue;
  }

  // javascript_files - computed: false, optional: true, required: false
  private _javascriptFiles = new DataSyntheticsCheckJavascriptFilesList(this, "javascript_files", true);
  public get javascriptFiles() {
    return this._javascriptFiles;
  }
  public putJavascriptFiles(value: DataSyntheticsCheckJavascriptFiles[] | cdktf.IResolvable) {
    this._javascriptFiles.internalValue = value;
  }
  public resetJavascriptFiles() {
    this._javascriptFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptFilesInput() {
    return this._javascriptFiles.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataSyntheticsCheckLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSyntheticsCheckLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new DataSyntheticsCheckStepsList(this, "steps", true);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataSyntheticsCheckSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // threshold_monitors - computed: false, optional: true, required: false
  private _thresholdMonitors = new DataSyntheticsCheckThresholdMonitorsList(this, "threshold_monitors", true);
  public get thresholdMonitors() {
    return this._thresholdMonitors;
  }
  public putThresholdMonitors(value: DataSyntheticsCheckThresholdMonitors[] | cdktf.IResolvable) {
    this._thresholdMonitors.internalValue = value;
  }
  public resetThresholdMonitors() {
    this._thresholdMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMonitorsInput() {
    return this._thresholdMonitors.internalValue;
  }

  // viewport - computed: false, optional: true, required: false
  private _viewport = new DataSyntheticsCheckViewportList(this, "viewport", true);
  public get viewport() {
    return this._viewport;
  }
  public putViewport(value: DataSyntheticsCheckViewport[] | cdktf.IResolvable) {
    this._viewport.internalValue = value;
  }
  public resetViewport() {
    this._viewport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewportInput() {
    return this._viewport.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      frequency: cdktf.numberToTerraform(this._frequency),
      id: cdktf.numberToTerraform(this._id),
      muted: cdktf.booleanToTerraform(this._muted),
      paused: cdktf.booleanToTerraform(this._paused),
      response_time_monitor_milliseconds: cdktf.numberToTerraform(this._responseTimeMonitorMilliseconds),
      type: cdktf.stringToTerraform(this._type),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      browser: cdktf.listMapper(dataSyntheticsCheckBrowserToTerraform, true)(this._browser.internalValue),
      check_connection: cdktf.listMapper(dataSyntheticsCheckCheckConnectionToTerraform, true)(this._checkConnection.internalValue),
      cookies: cdktf.listMapper(dataSyntheticsCheckCookiesToTerraform, true)(this._cookies.internalValue),
      dns_overrides: cdktf.listMapper(dataSyntheticsCheckDnsOverridesToTerraform, true)(this._dnsOverrides.internalValue),
      excluded_files: cdktf.listMapper(dataSyntheticsCheckExcludedFilesToTerraform, true)(this._excludedFiles.internalValue),
      javascript_files: cdktf.listMapper(dataSyntheticsCheckJavascriptFilesToTerraform, true)(this._javascriptFiles.internalValue),
      links: cdktf.listMapper(dataSyntheticsCheckLinksToTerraform, true)(this._links.internalValue),
      steps: cdktf.listMapper(dataSyntheticsCheckStepsToTerraform, true)(this._steps.internalValue),
      threshold_monitors: cdktf.listMapper(dataSyntheticsCheckThresholdMonitorsToTerraform, true)(this._thresholdMonitors.internalValue),
      viewport: cdktf.listMapper(dataSyntheticsCheckViewportToTerraform, true)(this._viewport.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      muted: {
        value: cdktf.booleanToHclTerraform(this._muted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_time_monitor_milliseconds: {
        value: cdktf.numberToHclTerraform(this._responseTimeMonitorMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckBrowserToHclTerraform, true)(this._browser.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckBrowserList",
      },
      check_connection: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckCheckConnectionToHclTerraform, true)(this._checkConnection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckCheckConnectionList",
      },
      cookies: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckCookiesToHclTerraform, true)(this._cookies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckCookiesList",
      },
      dns_overrides: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckDnsOverridesToHclTerraform, true)(this._dnsOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckDnsOverridesList",
      },
      excluded_files: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckExcludedFilesToHclTerraform, true)(this._excludedFiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckExcludedFilesList",
      },
      javascript_files: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckJavascriptFilesToHclTerraform, true)(this._javascriptFiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckJavascriptFilesList",
      },
      links: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckLinksList",
      },
      steps: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckStepsList",
      },
      threshold_monitors: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckThresholdMonitorsToHclTerraform, true)(this._thresholdMonitors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckThresholdMonitorsList",
      },
      viewport: {
        value: cdktf.listMapperHcl(dataSyntheticsCheckViewportToHclTerraform, true)(this._viewport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsCheckViewportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
