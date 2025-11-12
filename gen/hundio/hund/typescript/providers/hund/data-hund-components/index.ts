// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHundComponentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return the Components for the provided Group ObjectId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components#group DataHundComponents#group}
  */
  readonly group?: string;
  /**
  * Return the Components for the provided Issue ObjectId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components#issue DataHundComponents#issue}
  */
  readonly issue?: string;
}
export interface DataHundComponentsComponentsWatchdogServiceDns {
}

export function dataHundComponentsComponentsWatchdogServiceDnsToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceDnsToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceDns | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceHttp {
}

export function dataHundComponentsComponentsWatchdogServiceHttpToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceHttpToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceHttp | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceIcmp {
}

export function dataHundComponentsComponentsWatchdogServiceIcmpToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceIcmpToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceIcmp | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceManual {
}

export function dataHundComponentsComponentsWatchdogServiceManualToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceManualToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }
}
export interface DataHundComponentsComponentsWatchdogServicePingdom {
}

export function dataHundComponentsComponentsWatchdogServicePingdomToTerraform(struct?: DataHundComponentsComponentsWatchdogServicePingdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServicePingdomToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServicePingdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServicePingdomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServicePingdom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServicePingdom | undefined) {
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

  // unconfirmed_is_down - computed: true, optional: false, required: false
  public get unconfirmedIsDown() {
    return this.getBooleanAttribute('unconfirmed_is_down');
  }
}
export interface DataHundComponentsComponentsWatchdogServiceTcp {
}

export function dataHundComponentsComponentsWatchdogServiceTcpToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceTcpToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceTcp | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceUdp {
}

export function dataHundComponentsComponentsWatchdogServiceUdpToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceUdpToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceUdp | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceUpdown {
}

export function dataHundComponentsComponentsWatchdogServiceUpdownToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUpdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceUpdownToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUpdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceUpdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceUpdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceUpdown | undefined) {
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
export interface DataHundComponentsComponentsWatchdogServiceUptimerobot {
}

export function dataHundComponentsComponentsWatchdogServiceUptimerobotToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUptimerobot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceUptimerobotToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceUptimerobot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceUptimerobotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceUptimerobot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceUptimerobot | undefined) {
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

  // unconfirmed_is_down - computed: true, optional: false, required: false
  public get unconfirmedIsDown() {
    return this.getBooleanAttribute('unconfirmed_is_down');
  }
}
export interface DataHundComponentsComponentsWatchdogServiceWebhook {
}

export function dataHundComponentsComponentsWatchdogServiceWebhookToTerraform(struct?: DataHundComponentsComponentsWatchdogServiceWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceWebhookToHclTerraform(struct?: DataHundComponentsComponentsWatchdogServiceWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogServiceWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogServiceWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consecutive_checks - computed: true, optional: false, required: false
  public get consecutiveChecks() {
    return this.getNumberAttribute('consecutive_checks');
  }

  // deadman - computed: true, optional: false, required: false
  public get deadman() {
    return this.getBooleanAttribute('deadman');
  }

  // reporting_interval - computed: true, optional: false, required: false
  public get reportingInterval() {
    return this.getNumberAttribute('reporting_interval');
  }

  // webhook_key - computed: true, optional: false, required: false
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }
}
export interface DataHundComponentsComponentsWatchdogService {
}

export function dataHundComponentsComponentsWatchdogServiceToTerraform(struct?: DataHundComponentsComponentsWatchdogService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogServiceToHclTerraform(struct?: DataHundComponentsComponentsWatchdogService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdogService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdogService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataHundComponentsComponentsWatchdogServiceDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataHundComponentsComponentsWatchdogServiceHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }

  // icmp - computed: true, optional: false, required: false
  private _icmp = new DataHundComponentsComponentsWatchdogServiceIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataHundComponentsComponentsWatchdogServiceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }

  // pingdom - computed: true, optional: false, required: false
  private _pingdom = new DataHundComponentsComponentsWatchdogServicePingdomOutputReference(this, "pingdom");
  public get pingdom() {
    return this._pingdom;
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataHundComponentsComponentsWatchdogServiceTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataHundComponentsComponentsWatchdogServiceUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }

  // updown - computed: true, optional: false, required: false
  private _updown = new DataHundComponentsComponentsWatchdogServiceUpdownOutputReference(this, "updown");
  public get updown() {
    return this._updown;
  }

  // uptimerobot - computed: true, optional: false, required: false
  private _uptimerobot = new DataHundComponentsComponentsWatchdogServiceUptimerobotOutputReference(this, "uptimerobot");
  public get uptimerobot() {
    return this._uptimerobot;
  }

  // webhook - computed: true, optional: false, required: false
  private _webhook = new DataHundComponentsComponentsWatchdogServiceWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
}
export interface DataHundComponentsComponentsWatchdog {
}

export function dataHundComponentsComponentsWatchdogToTerraform(struct?: DataHundComponentsComponentsWatchdog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsWatchdogToHclTerraform(struct?: DataHundComponentsComponentsWatchdog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsWatchdogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundComponentsComponentsWatchdog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponentsWatchdog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_frequency - computed: true, optional: false, required: false
  public get highFrequency() {
    return this.getBooleanAttribute('high_frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_status - computed: true, optional: false, required: false
  public get latestStatus() {
    return this.getStringAttribute('latest_status');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataHundComponentsComponentsWatchdogServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
}
export interface DataHundComponentsComponents {
}

export function dataHundComponentsComponentsToTerraform(struct?: DataHundComponentsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundComponentsComponentsToHclTerraform(struct?: DataHundComponentsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundComponentsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHundComponentsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundComponentsComponents | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_html - computed: true, optional: false, required: false
  public get descriptionHtml() {
    return this.getStringAttribute('description_html');
  }

  // description_html_translations - computed: true, optional: false, required: false
  private _descriptionHtmlTranslations = new cdktf.StringMap(this, "description_html_translations");
  public get descriptionHtmlTranslations() {
    return this._descriptionHtmlTranslations;
  }

  // description_translations - computed: true, optional: false, required: false
  private _descriptionTranslations = new cdktf.StringMap(this, "description_translations");
  public get descriptionTranslations() {
    return this._descriptionTranslations;
  }

  // exclude_from_global_history - computed: true, optional: false, required: false
  public get excludeFromGlobalHistory() {
    return this.getBooleanAttribute('exclude_from_global_history');
  }

  // exclude_from_global_uptime - computed: true, optional: false, required: false
  public get excludeFromGlobalUptime() {
    return this.getBooleanAttribute('exclude_from_global_uptime');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_event_at - computed: true, optional: false, required: false
  public get lastEventAt() {
    return this.getStringAttribute('last_event_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_translations - computed: true, optional: false, required: false
  private _nameTranslations = new cdktf.StringMap(this, "name_translations");
  public get nameTranslations() {
    return this._nameTranslations;
  }

  // percent_uptime - computed: true, optional: false, required: false
  public get percentUptime() {
    return this.getNumberAttribute('percent_uptime');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // watchdog - computed: true, optional: false, required: false
  private _watchdog = new DataHundComponentsComponentsWatchdogOutputReference(this, "watchdog");
  public get watchdog() {
    return this._watchdog;
  }
}

export class DataHundComponentsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataHundComponentsComponentsOutputReference {
    return new DataHundComponentsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components hund_components}
*/
export class DataHundComponents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_components";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHundComponents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHundComponents to import
  * @param importFromId The id of the existing DataHundComponents that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHundComponents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_components", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/components hund_components} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHundComponentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHundComponentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hund_components',
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
    this._group = config.group;
    this._issue = config.issue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: true, optional: false, required: false
  private _components = new DataHundComponentsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // issue - computed: false, optional: true, required: false
  private _issue?: string; 
  public get issue() {
    return this.getStringAttribute('issue');
  }
  public set issue(value: string) {
    this._issue = value;
  }
  public resetIssue() {
    this._issue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueInput() {
    return this._issue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      issue: cdktf.stringToTerraform(this._issue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue: {
        value: cdktf.stringToHclTerraform(this._issue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
