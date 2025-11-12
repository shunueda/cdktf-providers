// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHundMetricProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, returns only MetricProviders for which `default` is true (i.e. returns MetricProviders that are considered the "default" for their respective Watchdogs). When used in conjunction with the `watchdog` parameter, returns the *single* default MetricProvider of that Watchdog, if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers#default DataHundMetricProviders#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * ObjectId for a particular Watchdog to retrieve MetricProviders on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers#watchdog DataHundMetricProviders#watchdog}
  */
  readonly watchdog?: string;
}
export interface DataHundMetricProvidersMetricProvidersInstances {
}

export function dataHundMetricProvidersMetricProvidersInstancesToTerraform(struct?: DataHundMetricProvidersMetricProvidersInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersInstancesToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // definition_slug - computed: true, optional: false, required: false
  public get definitionSlug() {
    return this.getStringAttribute('definition_slug');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interpolation - computed: true, optional: false, required: false
  public get interpolation() {
    return this.getStringAttribute('interpolation');
  }

  // plot_type - computed: true, optional: false, required: false
  public get plotType() {
    return this.getStringAttribute('plot_type');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_translations - computed: true, optional: false, required: false
  private _titleTranslations = new cdktf.StringMap(this, "title_translations");
  public get titleTranslations() {
    return this._titleTranslations;
  }

  // top_level_enabled - computed: true, optional: false, required: false
  public get topLevelEnabled() {
    return this.getBooleanAttribute('top_level_enabled');
  }

  // x_title - computed: true, optional: false, required: false
  public get xTitle() {
    return this.getStringAttribute('x_title');
  }

  // x_title_translations - computed: true, optional: false, required: false
  private _xTitleTranslations = new cdktf.StringMap(this, "x_title_translations");
  public get xTitleTranslations() {
    return this._xTitleTranslations;
  }

  // x_type - computed: true, optional: false, required: false
  public get xType() {
    return this.getStringAttribute('x_type');
  }

  // y_supremum - computed: true, optional: false, required: false
  public get ySupremum() {
    return this.getNumberAttribute('y_supremum');
  }

  // y_title - computed: true, optional: false, required: false
  public get yTitle() {
    return this.getStringAttribute('y_title');
  }

  // y_title_translations - computed: true, optional: false, required: false
  private _yTitleTranslations = new cdktf.StringMap(this, "y_title_translations");
  public get yTitleTranslations() {
    return this._yTitleTranslations;
  }

  // y_type - computed: true, optional: false, required: false
  public get yType() {
    return this.getStringAttribute('y_type');
  }
}

export class DataHundMetricProvidersMetricProvidersInstancesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataHundMetricProvidersMetricProvidersInstancesOutputReference {
    return new DataHundMetricProvidersMetricProvidersInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceBuiltin {
}

export function dataHundMetricProvidersMetricProvidersServiceBuiltinToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceBuiltin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceBuiltinToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceBuiltin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceBuiltinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceBuiltin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceBuiltin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceDns {
}

export function dataHundMetricProvidersMetricProvidersServiceDnsToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceDnsToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }

  // consecutive_check_outage_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }

  // percentage_regions_failed_threshold - computed: true, optional: false, required: false
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // response_containment - computed: true, optional: false, required: false
  public get responseContainment() {
    return this.getStringAttribute('response_containment');
  }

  // responses_must_contain - computed: true, optional: false, required: false
  public get responsesMustContain() {
    return cdktf.Fn.tolist(this.getListAttribute('responses_must_contain'));
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceHttp {
}

export function dataHundMetricProvidersMetricProvidersServiceHttpToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceHttpToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }

  // consecutive_check_outage_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // percentage_regions_failed_threshold - computed: true, optional: false, required: false
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // response_body_must_contain - computed: true, optional: false, required: false
  public get responseBodyMustContain() {
    return this.getStringAttribute('response_body_must_contain');
  }

  // response_body_must_contain_mode - computed: true, optional: false, required: false
  public get responseBodyMustContainMode() {
    return this.getStringAttribute('response_body_must_contain_mode');
  }

  // response_code_must_be - computed: true, optional: false, required: false
  public get responseCodeMustBe() {
    return this.getNumberAttribute('response_code_must_be');
  }

  // ssl_verify_peer - computed: true, optional: false, required: false
  public get sslVerifyPeer() {
    return this.getBooleanAttribute('ssl_verify_peer');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceIcmp {
}

export function dataHundMetricProvidersMetricProvidersServiceIcmpToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceIcmpToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }

  // consecutive_check_outage_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // percentage_failed_threshold - computed: true, optional: false, required: false
  public get percentageFailedThreshold() {
    return this.getNumberAttribute('percentage_failed_threshold');
  }

  // percentage_regions_failed_threshold - computed: true, optional: false, required: false
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataHundMetricProvidersMetricProvidersServicePingdom {
}

export function dataHundMetricProvidersMetricProvidersServicePingdomToTerraform(struct?: DataHundMetricProvidersMetricProvidersServicePingdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServicePingdomToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServicePingdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServicePingdomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServicePingdom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServicePingdom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // check_id - computed: true, optional: false, required: false
  public get checkId() {
    return this.getStringAttribute('check_id');
  }

  // check_type - computed: true, optional: false, required: false
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceTcp {
}

export function dataHundMetricProvidersMetricProvidersServiceTcpToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceTcpToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }

  // consecutive_check_outage_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // percentage_regions_failed_threshold - computed: true, optional: false, required: false
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // response_must_contain - computed: true, optional: false, required: false
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }

  // response_must_contain_mode - computed: true, optional: false, required: false
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }

  // send_data - computed: true, optional: false, required: false
  public get sendData() {
    return this.getStringAttribute('send_data');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // wait_for_initial_response - computed: true, optional: false, required: false
  public get waitForInitialResponse() {
    return this.getBooleanAttribute('wait_for_initial_response');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceUdp {
}

export function dataHundMetricProvidersMetricProvidersServiceUdpToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceUdpToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }

  // consecutive_check_outage_threshold - computed: true, optional: false, required: false
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // percentage_regions_failed_threshold - computed: true, optional: false, required: false
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // response_must_contain - computed: true, optional: false, required: false
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }

  // response_must_contain_mode - computed: true, optional: false, required: false
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }

  // send_data - computed: true, optional: false, required: false
  public get sendData() {
    return this.getStringAttribute('send_data');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceUpdown {
}

export function dataHundMetricProvidersMetricProvidersServiceUpdownToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUpdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceUpdownToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUpdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceUpdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceUpdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceUpdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_api_key - computed: true, optional: false, required: false
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }

  // monitor_token - computed: true, optional: false, required: false
  public get monitorToken() {
    return this.getStringAttribute('monitor_token');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceUptimerobot {
}

export function dataHundMetricProvidersMetricProvidersServiceUptimerobotToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUptimerobot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceUptimerobotToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceUptimerobot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceUptimerobotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceUptimerobot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceUptimerobot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_api_key - computed: true, optional: false, required: false
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }
}
export interface DataHundMetricProvidersMetricProvidersServiceWebhook {
}

export function dataHundMetricProvidersMetricProvidersServiceWebhookToTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceWebhookToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersServiceWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersServiceWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersServiceWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // webhook_key - computed: true, optional: false, required: false
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }
}
export interface DataHundMetricProvidersMetricProvidersService {
}

export function dataHundMetricProvidersMetricProvidersServiceToTerraform(struct?: DataHundMetricProvidersMetricProvidersService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersServiceToHclTerraform(struct?: DataHundMetricProvidersMetricProvidersService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundMetricProvidersMetricProvidersService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProvidersService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // builtin - computed: true, optional: false, required: false
  private _builtin = new DataHundMetricProvidersMetricProvidersServiceBuiltinOutputReference(this, "builtin");
  public get builtin() {
    return this._builtin;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataHundMetricProvidersMetricProvidersServiceDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataHundMetricProvidersMetricProvidersServiceHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataHundMetricProvidersMetricProvidersServiceIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // pingdom - computed: true, optional: false, required: false
  private _pingdom = new DataHundMetricProvidersMetricProvidersServicePingdomOutputReference(this, "pingdom");
  public get pingdom() {
    return this._pingdom;
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataHundMetricProvidersMetricProvidersServiceTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataHundMetricProvidersMetricProvidersServiceUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }

  // updown - computed: true, optional: false, required: false
  private _updown = new DataHundMetricProvidersMetricProvidersServiceUpdownOutputReference(this, "updown");
  public get updown() {
    return this._updown;
  }

  // uptimerobot - computed: true, optional: false, required: false
  private _uptimerobot = new DataHundMetricProvidersMetricProvidersServiceUptimerobotOutputReference(this, "uptimerobot");
  public get uptimerobot() {
    return this._uptimerobot;
  }

  // webhook - computed: true, optional: false, required: false
  private _webhook = new DataHundMetricProvidersMetricProvidersServiceWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
}
export interface DataHundMetricProvidersMetricProviders {
}

export function dataHundMetricProvidersMetricProvidersToTerraform(struct?: DataHundMetricProvidersMetricProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundMetricProvidersMetricProvidersToHclTerraform(struct?: DataHundMetricProvidersMetricProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundMetricProvidersMetricProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHundMetricProvidersMetricProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundMetricProvidersMetricProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataHundMetricProvidersMetricProvidersInstancesMap(this, "instances");
  public get instances() {
    return this._instances;
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataHundMetricProvidersMetricProvidersServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }

  // watchdog - computed: true, optional: false, required: false
  public get watchdog() {
    return this.getStringAttribute('watchdog');
  }
}

export class DataHundMetricProvidersMetricProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataHundMetricProvidersMetricProvidersOutputReference {
    return new DataHundMetricProvidersMetricProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers hund_metric_providers}
*/
export class DataHundMetricProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_metric_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHundMetricProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHundMetricProviders to import
  * @param importFromId The id of the existing DataHundMetricProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHundMetricProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_metric_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/metric_providers hund_metric_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHundMetricProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHundMetricProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hund_metric_providers',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._watchdog = config.watchdog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // metric_providers - computed: true, optional: false, required: false
  private _metricProviders = new DataHundMetricProvidersMetricProvidersList(this, "metric_providers", false);
  public get metricProviders() {
    return this._metricProviders;
  }

  // watchdog - computed: false, optional: true, required: false
  private _watchdog?: string; 
  public get watchdog() {
    return this.getStringAttribute('watchdog');
  }
  public set watchdog(value: string) {
    this._watchdog = value;
  }
  public resetWatchdog() {
    this._watchdog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogInput() {
    return this._watchdog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      watchdog: cdktf.stringToTerraform(this._watchdog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      watchdog: {
        value: cdktf.stringToHclTerraform(this._watchdog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
