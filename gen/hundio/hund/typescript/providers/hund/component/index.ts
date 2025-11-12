// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this Component, potentially with markdown formatting, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#description Component#description}
  */
  readonly description?: string;
  /**
  * A description of this Component, potentially with markdown formatting, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#description_translations Component#description_translations}
  */
  readonly descriptionTranslations?: { [key: string]: string };
  /**
  * Exclude this Component's uptime percentage from being factored into the global percent uptime calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#exclude_from_global_history Component#exclude_from_global_history}
  */
  readonly excludeFromGlobalHistory?: boolean | cdktf.IResolvable;
  /**
  * Exclude this Component from appearing in the global history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#exclude_from_global_uptime Component#exclude_from_global_uptime}
  */
  readonly excludeFromGlobalUptime?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Group that this Component belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#group Component#group}
  */
  readonly group: string;
  /**
  * The name of this Component, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#name Component#name}
  */
  readonly name?: string;
  /**
  * The name of this Component, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#name_translations Component#name_translations}
  */
  readonly nameTranslations?: { [key: string]: string };
  /**
  * The Watchdog that supplies the current status for this Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#watchdog Component#watchdog}
  */
  readonly watchdog: ComponentWatchdog;
}
export interface ComponentWatchdogServiceDns {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_degraded_threshold Component#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_outage_threshold Component#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#frequency Component#frequency}
  */
  readonly frequency?: number;
  /**
  * An optional list of nameservers to make DNS queries with. This field is
  * ignored by SOA queries since they use the nameservers yielded by querying NS
  * on the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#nameservers Component#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_regions_failed_threshold Component#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The type of DNS record to query for on the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#record_type Component#record_type}
  */
  readonly recordType: string;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#regions Component#regions}
  */
  readonly regions: string[];
  /**
  * Whether `all` of the assertions in `responses_must_contain` must match the DNS response,
  * or rather just `any` of them (i.e. at least one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_containment Component#response_containment}
  */
  readonly responseContainment?: string;
  /**
  * A set of assertions to make against the records yielded by the query. The
  * format of these assertions is *similar* to DNS record syntax, but is
  * slightly simplified and allows for only asserting parts of a record's RDATA,
  * rather than the entire thing. The check will fail depending on the value of
  * `response_containment`.
  * 
  *   This field is ignored by the SOA check, as it does not use assertions to
  * determine the validity of SOA records. Instead, we ensure that every
  * nameserver reported by querying NS on the target reports the same SOA serial.
  * If your target's nameservers report conflicting SOA serials, we consider the
  * check failed.
  * 
  *   **Example Assertions (for MX record type):**
  * ```json
  * [
  *   "10 mail.example.com",
  *   "spool.example.com",
  *   "mail2.example.com"
  * ]
  * ```
  * 
  *   Note above how we can assert both the priority and domain (*without* the
  * terminating period required by canonical DNS) of an MX record, or instead
  * simply the domain.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#responses_must_contain Component#responses_must_contain}
  */
  readonly responsesMustContain?: string[];
  /**
  * The domain/IP address that will be queried. IP addresses do not need to be
  * converted to the `z.y.x.w.in-addr.arpa` format, as this will be done
  * automatically; however, both formats are accepted.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#target Component#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#timeout Component#timeout}
  */
  readonly timeout?: number;
}

export function componentWatchdogServiceDnsToTerraform(struct?: ComponentWatchdogServiceDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_containment: cdktf.stringToTerraform(struct!.responseContainment),
    responses_must_contain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responsesMustContain),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function componentWatchdogServiceDnsToHclTerraform(struct?: ComponentWatchdogServiceDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_containment: {
      value: cdktf.stringToHclTerraform(struct!.responseContainment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responses_must_contain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responsesMustContain),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseContainment !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContainment = this._responseContainment;
    }
    if (this._responsesMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsesMustContain = this._responsesMustContain;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._nameservers = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._recordType = undefined;
      this._regions = undefined;
      this._responseContainment = undefined;
      this._responsesMustContain = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._nameservers = value.nameservers;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._recordType = value.recordType;
      this._regions = value.regions;
      this._responseContainment = value.responseContainment;
      this._responsesMustContain = value.responsesMustContain;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: false, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
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

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_containment - computed: false, optional: true, required: false
  private _responseContainment?: string; 
  public get responseContainment() {
    return this.getStringAttribute('response_containment');
  }
  public set responseContainment(value: string) {
    this._responseContainment = value;
  }
  public resetResponseContainment() {
    this._responseContainment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContainmentInput() {
    return this._responseContainment;
  }

  // responses_must_contain - computed: false, optional: true, required: false
  private _responsesMustContain?: string[]; 
  public get responsesMustContain() {
    return cdktf.Fn.tolist(this.getListAttribute('responses_must_contain'));
  }
  public set responsesMustContain(value: string[]) {
    this._responsesMustContain = value;
  }
  public resetResponsesMustContain() {
    this._responsesMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesMustContainInput() {
    return this._responsesMustContain;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ComponentWatchdogServiceHttp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_degraded_threshold Component#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_outage_threshold Component#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * Follow any HTTP redirects given by the requested target. Please note that this check will only follow up to 9 redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#follow_redirects Component#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#frequency Component#frequency}
  */
  readonly frequency?: number;
  /**
  * A list of additional HTTP headers to send to the target. The following list of
  * header names are reserved and cannot be set by a check:
  * 
  * ```
  * Accept-Charset
  * Accept-Encoding
  * Authentication
  * Connection
  * Content-Length
  * Date
  * Host
  * Keep-Alive
  * Origin
  * Proxy-.*
  * Sec-.*
  * Referer
  * TE
  * Trailer
  * Transfer-Encoding
  * User-Agent
  * Via
  * ```
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#headers Component#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * An optional HTTP Basic Authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#password Component#password}
  */
  readonly password?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_regions_failed_threshold Component#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#regions Component#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by
  * `response_body_must_contain_mode`):
  * 
  *   `exact`: If the requested page does not contain this exact (case-sensitive)
  * string, then the check will fail.
  * 
  *   `regex`: If the requested page does not match against the given regex, then
  * the check will fail. [Click here](https://hund.io/help/documentation/regular-expressions) for
  * more information on the use and supported syntax of Hund regexes.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_body_must_contain Component#response_body_must_contain}
  */
  readonly responseBodyMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_body_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_body_must_contain_mode Component#response_body_must_contain_mode}
  */
  readonly responseBodyMustContainMode?: string;
  /**
  * If the requested page does not return this response code, then the check will
  * fail.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_code_must_be Component#response_code_must_be}
  */
  readonly responseCodeMustBe?: number;
  /**
  * Require the target's TLS certificate to be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#ssl_verify_peer Component#ssl_verify_peer}
  */
  readonly sslVerifyPeer?: boolean | cdktf.IResolvable;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#target Component#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#timeout Component#timeout}
  */
  readonly timeout?: number;
  /**
  * An optional HTTP Basic Authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#username Component#username}
  */
  readonly username?: string;
}

export function componentWatchdogServiceHttpToTerraform(struct?: ComponentWatchdogServiceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    password: cdktf.stringToTerraform(struct!.password),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_body_must_contain: cdktf.stringToTerraform(struct!.responseBodyMustContain),
    response_body_must_contain_mode: cdktf.stringToTerraform(struct!.responseBodyMustContainMode),
    response_code_must_be: cdktf.numberToTerraform(struct!.responseCodeMustBe),
    ssl_verify_peer: cdktf.booleanToTerraform(struct!.sslVerifyPeer),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function componentWatchdogServiceHttpToHclTerraform(struct?: ComponentWatchdogServiceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_body_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code_must_be: {
      value: cdktf.numberToHclTerraform(struct!.responseCodeMustBe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_verify_peer: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerifyPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseBodyMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyMustContain = this._responseBodyMustContain;
    }
    if (this._responseBodyMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyMustContainMode = this._responseBodyMustContainMode;
    }
    if (this._responseCodeMustBe !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeMustBe = this._responseCodeMustBe;
    }
    if (this._sslVerifyPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerifyPeer = this._sslVerifyPeer;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._followRedirects = undefined;
      this._frequency = undefined;
      this._headers = undefined;
      this._password = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._regions = undefined;
      this._responseBodyMustContain = undefined;
      this._responseBodyMustContainMode = undefined;
      this._responseCodeMustBe = undefined;
      this._sslVerifyPeer = undefined;
      this._target = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._followRedirects = value.followRedirects;
      this._frequency = value.frequency;
      this._headers = value.headers;
      this._password = value.password;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._regions = value.regions;
      this._responseBodyMustContain = value.responseBodyMustContain;
      this._responseBodyMustContainMode = value.responseBodyMustContainMode;
      this._responseCodeMustBe = value.responseCodeMustBe;
      this._sslVerifyPeer = value.sslVerifyPeer;
      this._target = value.target;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // consecutive_check_degraded_threshold - computed: false, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // follow_redirects - computed: true, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_body_must_contain - computed: false, optional: true, required: false
  private _responseBodyMustContain?: string; 
  public get responseBodyMustContain() {
    return this.getStringAttribute('response_body_must_contain');
  }
  public set responseBodyMustContain(value: string) {
    this._responseBodyMustContain = value;
  }
  public resetResponseBodyMustContain() {
    this._responseBodyMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyMustContainInput() {
    return this._responseBodyMustContain;
  }

  // response_body_must_contain_mode - computed: true, optional: true, required: false
  private _responseBodyMustContainMode?: string; 
  public get responseBodyMustContainMode() {
    return this.getStringAttribute('response_body_must_contain_mode');
  }
  public set responseBodyMustContainMode(value: string) {
    this._responseBodyMustContainMode = value;
  }
  public resetResponseBodyMustContainMode() {
    this._responseBodyMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyMustContainModeInput() {
    return this._responseBodyMustContainMode;
  }

  // response_code_must_be - computed: false, optional: true, required: false
  private _responseCodeMustBe?: number; 
  public get responseCodeMustBe() {
    return this.getNumberAttribute('response_code_must_be');
  }
  public set responseCodeMustBe(value: number) {
    this._responseCodeMustBe = value;
  }
  public resetResponseCodeMustBe() {
    this._responseCodeMustBe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeMustBeInput() {
    return this._responseCodeMustBe;
  }

  // ssl_verify_peer - computed: true, optional: true, required: false
  private _sslVerifyPeer?: boolean | cdktf.IResolvable; 
  public get sslVerifyPeer() {
    return this.getBooleanAttribute('ssl_verify_peer');
  }
  public set sslVerifyPeer(value: boolean | cdktf.IResolvable) {
    this._sslVerifyPeer = value;
  }
  public resetSslVerifyPeer() {
    this._sslVerifyPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyPeerInput() {
    return this._sslVerifyPeer;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ComponentWatchdogServiceIcmp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_degraded_threshold Component#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_outage_threshold Component#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#frequency Component#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when pinging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#ip_version Component#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of addresses at the given target that must fail for a region to be counted as failed. This option only matters when there are multiple IP addresses behind the target when the target is a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_failed_threshold Component#percentage_failed_threshold}
  */
  readonly percentageFailedThreshold?: number;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_regions_failed_threshold Component#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#regions Component#regions}
  */
  readonly regions: string[];
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#target Component#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#timeout Component#timeout}
  */
  readonly timeout?: number;
}

export function componentWatchdogServiceIcmpToTerraform(struct?: ComponentWatchdogServiceIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_failed_threshold: cdktf.numberToTerraform(struct!.percentageFailedThreshold),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function componentWatchdogServiceIcmpToHclTerraform(struct?: ComponentWatchdogServiceIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageFailedThreshold = this._percentageFailedThreshold;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageFailedThreshold = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._regions = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageFailedThreshold = value.percentageFailedThreshold;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._regions = value.regions;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: false, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_failed_threshold - computed: true, optional: true, required: false
  private _percentageFailedThreshold?: number; 
  public get percentageFailedThreshold() {
    return this.getNumberAttribute('percentage_failed_threshold');
  }
  public set percentageFailedThreshold(value: number) {
    this._percentageFailedThreshold = value;
  }
  public resetPercentageFailedThreshold() {
    this._percentageFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageFailedThresholdInput() {
    return this._percentageFailedThreshold;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ComponentWatchdogServiceManual {
  /**
  * An integer denoting operational state (1 => operational, 0 => degraded, -1 => outage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#state Component#state}
  */
  readonly state?: number;
}

export function componentWatchdogServiceManualToTerraform(struct?: ComponentWatchdogServiceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.numberToTerraform(struct!.state),
  }
}


export function componentWatchdogServiceManualToHclTerraform(struct?: ComponentWatchdogServiceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.numberToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface ComponentWatchdogServicePingdom {
  /**
  * The Pingdom API v3 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#api_token Component#api_token}
  */
  readonly apiToken: string;
  /**
  * The ID of the check to pull status from on Pingdom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#check_id Component#check_id}
  */
  readonly checkId: string;
  /**
  * The type of the Pingdom check. `check` denotes a normal Pingdom uptime check, and `transactional` denotes a Pingdom TMS check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#check_type Component#check_type}
  */
  readonly checkType?: string;
  /**
  * When true, triggers Watchdog outage when Pingdom reports a yet unconfirmed outage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#unconfirmed_is_down Component#unconfirmed_is_down}
  */
  readonly unconfirmedIsDown?: boolean | cdktf.IResolvable;
}

export function componentWatchdogServicePingdomToTerraform(struct?: ComponentWatchdogServicePingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    unconfirmed_is_down: cdktf.booleanToTerraform(struct!.unconfirmedIsDown),
  }
}


export function componentWatchdogServicePingdomToHclTerraform(struct?: ComponentWatchdogServicePingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unconfirmed_is_down: {
      value: cdktf.booleanToHclTerraform(struct!.unconfirmedIsDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServicePingdomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServicePingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._unconfirmedIsDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unconfirmedIsDown = this._unconfirmedIsDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServicePingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._unconfirmedIsDown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._unconfirmedIsDown = value.unconfirmedIsDown;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: true, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // unconfirmed_is_down - computed: true, optional: true, required: false
  private _unconfirmedIsDown?: boolean | cdktf.IResolvable; 
  public get unconfirmedIsDown() {
    return this.getBooleanAttribute('unconfirmed_is_down');
  }
  public set unconfirmedIsDown(value: boolean | cdktf.IResolvable) {
    this._unconfirmedIsDown = value;
  }
  public resetUnconfirmedIsDown() {
    this._unconfirmedIsDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unconfirmedIsDownInput() {
    return this._unconfirmedIsDown;
  }
}
export interface ComponentWatchdogServiceTcp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_degraded_threshold Component#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_outage_threshold Component#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#frequency Component#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when calling the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#ip_version Component#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_regions_failed_threshold Component#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The port at the target to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#port Component#port}
  */
  readonly port: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#regions Component#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by `response_must_contain_mode`):
  * 
  *   `exact`: Text that the response from the target must contain exactly
  * (case-sensitive). In exact match mode, this field supports
  * [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *   `regex`: A regex that the response from the target must match against.
  * [Click here](https://hund.io/help/documentation/regular-expressions) for more information on
  * the use and supported syntax of Hund regexes.
  * 
  *   If you send data and expect the target to reply, you must populate this field.
  * Leaving this field blank will prevent the check from receiving data from the
  * target unless forced to wait for an initial response.
  * 
  *   The "response" from the target that this text is asserted against will be the
  * response from the target *after* sending data. If data is not sent to the
  * target, this text is asserted against the *initial* response.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_must_contain Component#response_must_contain}
  */
  readonly responseMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_must_contain_mode Component#response_must_contain_mode}
  */
  readonly responseMustContainMode?: string;
  /**
  * Optional data to send to the target after connecting. If this field is left
  * blank, nothing is sent to the target after connecting. This field supports [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#send_data Component#send_data}
  */
  readonly sendData?: string;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#target Component#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#timeout Component#timeout}
  */
  readonly timeout?: number;
  /**
  * Whether or not to wait for an initial response from the target before sending
  * data or closing the connection.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#wait_for_initial_response Component#wait_for_initial_response}
  */
  readonly waitForInitialResponse?: boolean | cdktf.IResolvable;
}

export function componentWatchdogServiceTcpToTerraform(struct?: ComponentWatchdogServiceTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    port: cdktf.numberToTerraform(struct!.port),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_must_contain: cdktf.stringToTerraform(struct!.responseMustContain),
    response_must_contain_mode: cdktf.stringToTerraform(struct!.responseMustContainMode),
    send_data: cdktf.stringToTerraform(struct!.sendData),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for_initial_response: cdktf.booleanToTerraform(struct!.waitForInitialResponse),
  }
}


export function componentWatchdogServiceTcpToHclTerraform(struct?: ComponentWatchdogServiceTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_data: {
      value: cdktf.stringToHclTerraform(struct!.sendData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_initial_response: {
      value: cdktf.booleanToHclTerraform(struct!.waitForInitialResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContain = this._responseMustContain;
    }
    if (this._responseMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContainMode = this._responseMustContainMode;
    }
    if (this._sendData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendData = this._sendData;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitForInitialResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForInitialResponse = this._waitForInitialResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._port = undefined;
      this._regions = undefined;
      this._responseMustContain = undefined;
      this._responseMustContainMode = undefined;
      this._sendData = undefined;
      this._target = undefined;
      this._timeout = undefined;
      this._waitForInitialResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._port = value.port;
      this._regions = value.regions;
      this._responseMustContain = value.responseMustContain;
      this._responseMustContainMode = value.responseMustContainMode;
      this._sendData = value.sendData;
      this._target = value.target;
      this._timeout = value.timeout;
      this._waitForInitialResponse = value.waitForInitialResponse;
    }
  }

  // consecutive_check_degraded_threshold - computed: false, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_must_contain - computed: false, optional: true, required: false
  private _responseMustContain?: string; 
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }
  public set responseMustContain(value: string) {
    this._responseMustContain = value;
  }
  public resetResponseMustContain() {
    this._responseMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainInput() {
    return this._responseMustContain;
  }

  // response_must_contain_mode - computed: true, optional: true, required: false
  private _responseMustContainMode?: string; 
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }
  public set responseMustContainMode(value: string) {
    this._responseMustContainMode = value;
  }
  public resetResponseMustContainMode() {
    this._responseMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainModeInput() {
    return this._responseMustContainMode;
  }

  // send_data - computed: false, optional: true, required: false
  private _sendData?: string; 
  public get sendData() {
    return this.getStringAttribute('send_data');
  }
  public set sendData(value: string) {
    this._sendData = value;
  }
  public resetSendData() {
    this._sendData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDataInput() {
    return this._sendData;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for_initial_response - computed: false, optional: true, required: false
  private _waitForInitialResponse?: boolean | cdktf.IResolvable; 
  public get waitForInitialResponse() {
    return this.getBooleanAttribute('wait_for_initial_response');
  }
  public set waitForInitialResponse(value: boolean | cdktf.IResolvable) {
    this._waitForInitialResponse = value;
  }
  public resetWaitForInitialResponse() {
    this._waitForInitialResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInitialResponseInput() {
    return this._waitForInitialResponse;
  }
}
export interface ComponentWatchdogServiceUdp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_degraded_threshold Component#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_check_outage_threshold Component#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#frequency Component#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when calling the target.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#ip_version Component#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#percentage_regions_failed_threshold Component#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The port at the target to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#port Component#port}
  */
  readonly port: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#regions Component#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by `response_must_contain_mode`):
  * 
  *   `exact`: Text that the response from the target must contain exactly
  * (case-sensitive). In exact match mode, this field supports
  * [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *   `regex`: A regex that the response from the target must match against.
  * [Click here](https://hund.io/help/documentation/regular-expressions) for more information on
  * the use and supported syntax of Hund regexes.
  * 
  *   Leaving this field blank will still cause the check to wait for a response
  * from the target after sending data, though no assertions will be made about
  * the payload of the response.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_must_contain Component#response_must_contain}
  */
  readonly responseMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#response_must_contain_mode Component#response_must_contain_mode}
  */
  readonly responseMustContainMode?: string;
  /**
  * Data to send to the target after connecting. Unlike in `tcp`, this
  * field is required. This field supports [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#send_data Component#send_data}
  */
  readonly sendData: string;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#target Component#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#timeout Component#timeout}
  */
  readonly timeout?: number;
}

export function componentWatchdogServiceUdpToTerraform(struct?: ComponentWatchdogServiceUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    port: cdktf.numberToTerraform(struct!.port),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_must_contain: cdktf.stringToTerraform(struct!.responseMustContain),
    response_must_contain_mode: cdktf.stringToTerraform(struct!.responseMustContainMode),
    send_data: cdktf.stringToTerraform(struct!.sendData),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function componentWatchdogServiceUdpToHclTerraform(struct?: ComponentWatchdogServiceUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_data: {
      value: cdktf.stringToHclTerraform(struct!.sendData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContain = this._responseMustContain;
    }
    if (this._responseMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContainMode = this._responseMustContainMode;
    }
    if (this._sendData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendData = this._sendData;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._port = undefined;
      this._regions = undefined;
      this._responseMustContain = undefined;
      this._responseMustContainMode = undefined;
      this._sendData = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._port = value.port;
      this._regions = value.regions;
      this._responseMustContain = value.responseMustContain;
      this._responseMustContainMode = value.responseMustContainMode;
      this._sendData = value.sendData;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: false, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_must_contain - computed: false, optional: true, required: false
  private _responseMustContain?: string; 
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }
  public set responseMustContain(value: string) {
    this._responseMustContain = value;
  }
  public resetResponseMustContain() {
    this._responseMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainInput() {
    return this._responseMustContain;
  }

  // response_must_contain_mode - computed: true, optional: true, required: false
  private _responseMustContainMode?: string; 
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }
  public set responseMustContainMode(value: string) {
    this._responseMustContainMode = value;
  }
  public resetResponseMustContainMode() {
    this._responseMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainModeInput() {
    return this._responseMustContainMode;
  }

  // send_data - computed: false, optional: false, required: true
  private _sendData?: string; 
  public get sendData() {
    return this.getStringAttribute('send_data');
  }
  public set sendData(value: string) {
    this._sendData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDataInput() {
    return this._sendData;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ComponentWatchdogServiceUpdown {
  /**
  * An Updown.io monitor API key. This API key can be read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#monitor_api_key Component#monitor_api_key}
  */
  readonly monitorApiKey: string;
  /**
  * An Updown.io monitor token to retrieve status from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#monitor_token Component#monitor_token}
  */
  readonly monitorToken: string;
}

export function componentWatchdogServiceUpdownToTerraform(struct?: ComponentWatchdogServiceUpdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_api_key: cdktf.stringToTerraform(struct!.monitorApiKey),
    monitor_token: cdktf.stringToTerraform(struct!.monitorToken),
  }
}


export function componentWatchdogServiceUpdownToHclTerraform(struct?: ComponentWatchdogServiceUpdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_api_key: {
      value: cdktf.stringToHclTerraform(struct!.monitorApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_token: {
      value: cdktf.stringToHclTerraform(struct!.monitorToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceUpdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceUpdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorApiKey = this._monitorApiKey;
    }
    if (this._monitorToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorToken = this._monitorToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceUpdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorApiKey = undefined;
      this._monitorToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorApiKey = value.monitorApiKey;
      this._monitorToken = value.monitorToken;
    }
  }

  // monitor_api_key - computed: false, optional: false, required: true
  private _monitorApiKey?: string; 
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }
  public set monitorApiKey(value: string) {
    this._monitorApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorApiKeyInput() {
    return this._monitorApiKey;
  }

  // monitor_token - computed: false, optional: false, required: true
  private _monitorToken?: string; 
  public get monitorToken() {
    return this.getStringAttribute('monitor_token');
  }
  public set monitorToken(value: string) {
    this._monitorToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTokenInput() {
    return this._monitorToken;
  }
}
export interface ComponentWatchdogServiceUptimerobot {
  /**
  * An Uptime Robot monitor API key to retrieve status from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#monitor_api_key Component#monitor_api_key}
  */
  readonly monitorApiKey: string;
  /**
  * When true, triggers Watchdog outage when UptimeRobot reports a yet unconfirmed outage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#unconfirmed_is_down Component#unconfirmed_is_down}
  */
  readonly unconfirmedIsDown?: boolean | cdktf.IResolvable;
}

export function componentWatchdogServiceUptimerobotToTerraform(struct?: ComponentWatchdogServiceUptimerobot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_api_key: cdktf.stringToTerraform(struct!.monitorApiKey),
    unconfirmed_is_down: cdktf.booleanToTerraform(struct!.unconfirmedIsDown),
  }
}


export function componentWatchdogServiceUptimerobotToHclTerraform(struct?: ComponentWatchdogServiceUptimerobot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_api_key: {
      value: cdktf.stringToHclTerraform(struct!.monitorApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unconfirmed_is_down: {
      value: cdktf.booleanToHclTerraform(struct!.unconfirmedIsDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceUptimerobotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceUptimerobot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorApiKey = this._monitorApiKey;
    }
    if (this._unconfirmedIsDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unconfirmedIsDown = this._unconfirmedIsDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceUptimerobot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorApiKey = undefined;
      this._unconfirmedIsDown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorApiKey = value.monitorApiKey;
      this._unconfirmedIsDown = value.unconfirmedIsDown;
    }
  }

  // monitor_api_key - computed: false, optional: false, required: true
  private _monitorApiKey?: string; 
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }
  public set monitorApiKey(value: string) {
    this._monitorApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorApiKeyInput() {
    return this._monitorApiKey;
  }

  // unconfirmed_is_down - computed: true, optional: true, required: false
  private _unconfirmedIsDown?: boolean | cdktf.IResolvable; 
  public get unconfirmedIsDown() {
    return this.getBooleanAttribute('unconfirmed_is_down');
  }
  public set unconfirmedIsDown(value: boolean | cdktf.IResolvable) {
    this._unconfirmedIsDown = value;
  }
  public resetUnconfirmedIsDown() {
    this._unconfirmedIsDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unconfirmedIsDownInput() {
    return this._unconfirmedIsDown;
  }
}
export interface ComponentWatchdogServiceWebhook {
  /**
  * This property is only required when `deadman: true`. This property configures how many checks (i.e. the number of times `reporting_interval` elapses) must fail (i.e. no status reported to the webhook) before triggering the "Dead Man's Switch." For example, if `deadman: true` and `reporting_interval: 60`, then a setting of `consecutive_checks: 5` would cause the Watchdog to wait for 5 consecutive minutes to receive a webhook call before triggering outage. Since the count is consecutive, it is reset whenever a new webhook call comes through to the Watchdog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#consecutive_checks Component#consecutive_checks}
  */
  readonly consecutiveChecks?: number;
  /**
  * When true, turns on a "Dead Man's Switch" for the Watchdog, according to the configuration set by `reporting_interval` and `consecutive_checks`. The Watchdog will trigger an "outage" state if the webhook does not receive a call after the configured number of consecutive checks (according to the reporting interval). This switch can be useful when a lack of webhook reporting from the specific component should be taken to mean that the component itself is down.,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#deadman Component#deadman}
  */
  readonly deadman?: boolean | cdktf.IResolvable;
  /**
  * This property is only required when `deadman: true`. This property configures how often (in seconds) that you expect to POST status to the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#reporting_interval Component#reporting_interval}
  */
  readonly reportingInterval?: number;
  /**
  * The key to use for this webhook, expected in request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#webhook_key Component#webhook_key}
  */
  readonly webhookKey?: string;
}

export function componentWatchdogServiceWebhookToTerraform(struct?: ComponentWatchdogServiceWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_checks: cdktf.numberToTerraform(struct!.consecutiveChecks),
    deadman: cdktf.booleanToTerraform(struct!.deadman),
    reporting_interval: cdktf.numberToTerraform(struct!.reportingInterval),
    webhook_key: cdktf.stringToTerraform(struct!.webhookKey),
  }
}


export function componentWatchdogServiceWebhookToHclTerraform(struct?: ComponentWatchdogServiceWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_checks: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deadman: {
      value: cdktf.booleanToHclTerraform(struct!.deadman),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reporting_interval: {
      value: cdktf.numberToHclTerraform(struct!.reportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webhook_key: {
      value: cdktf.stringToHclTerraform(struct!.webhookKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogServiceWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveChecks = this._consecutiveChecks;
    }
    if (this._deadman !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadman = this._deadman;
    }
    if (this._reportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingInterval = this._reportingInterval;
    }
    if (this._webhookKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookKey = this._webhookKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogServiceWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveChecks = undefined;
      this._deadman = undefined;
      this._reportingInterval = undefined;
      this._webhookKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveChecks = value.consecutiveChecks;
      this._deadman = value.deadman;
      this._reportingInterval = value.reportingInterval;
      this._webhookKey = value.webhookKey;
    }
  }

  // consecutive_checks - computed: false, optional: true, required: false
  private _consecutiveChecks?: number; 
  public get consecutiveChecks() {
    return this.getNumberAttribute('consecutive_checks');
  }
  public set consecutiveChecks(value: number) {
    this._consecutiveChecks = value;
  }
  public resetConsecutiveChecks() {
    this._consecutiveChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveChecksInput() {
    return this._consecutiveChecks;
  }

  // deadman - computed: true, optional: true, required: false
  private _deadman?: boolean | cdktf.IResolvable; 
  public get deadman() {
    return this.getBooleanAttribute('deadman');
  }
  public set deadman(value: boolean | cdktf.IResolvable) {
    this._deadman = value;
  }
  public resetDeadman() {
    this._deadman = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadmanInput() {
    return this._deadman;
  }

  // reporting_interval - computed: false, optional: true, required: false
  private _reportingInterval?: number; 
  public get reportingInterval() {
    return this.getNumberAttribute('reporting_interval');
  }
  public set reportingInterval(value: number) {
    this._reportingInterval = value;
  }
  public resetReportingInterval() {
    this._reportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingIntervalInput() {
    return this._reportingInterval;
  }

  // webhook_key - computed: true, optional: true, required: false
  private _webhookKey?: string; 
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }
  public set webhookKey(value: string) {
    this._webhookKey = value;
  }
  public resetWebhookKey() {
    this._webhookKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookKeyInput() {
    return this._webhookKey;
  }
}
export interface ComponentWatchdogService {
  /**
  * A Hund Native Monitoring DNS Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#dns Component#dns}
  */
  readonly dns?: ComponentWatchdogServiceDns;
  /**
  * A Hund Native Monitoring HTTP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#http Component#http}
  */
  readonly http?: ComponentWatchdogServiceHttp;
  /**
  * A Hund Native Monitoring ICMP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#icmp Component#icmp}
  */
  readonly icmp?: ComponentWatchdogServiceIcmp;
  /**
  * A manually updated Watchdog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#manual Component#manual}
  */
  readonly manual?: ComponentWatchdogServiceManual;
  /**
  * A [pingdom](https://www.pingdom.com) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#pingdom Component#pingdom}
  */
  readonly pingdom?: ComponentWatchdogServicePingdom;
  /**
  * A Hund Native Monitoring TCP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#tcp Component#tcp}
  */
  readonly tcp?: ComponentWatchdogServiceTcp;
  /**
  * A Hund Native Monitoring UDP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#udp Component#udp}
  */
  readonly udp?: ComponentWatchdogServiceUdp;
  /**
  * An [Updown.io](https://updown.io) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#updown Component#updown}
  */
  readonly updown?: ComponentWatchdogServiceUpdown;
  /**
  * An [Uptime Robot](https://uptimerobot.com) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#uptimerobot Component#uptimerobot}
  */
  readonly uptimerobot?: ComponentWatchdogServiceUptimerobot;
  /**
  * A [webhook](https://hund.io/help/integrations/webhooks) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#webhook Component#webhook}
  */
  readonly webhook?: ComponentWatchdogServiceWebhook;
}

export function componentWatchdogServiceToTerraform(struct?: ComponentWatchdogService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: componentWatchdogServiceDnsToTerraform(struct!.dns),
    http: componentWatchdogServiceHttpToTerraform(struct!.http),
    icmp: componentWatchdogServiceIcmpToTerraform(struct!.icmp),
    manual: componentWatchdogServiceManualToTerraform(struct!.manual),
    pingdom: componentWatchdogServicePingdomToTerraform(struct!.pingdom),
    tcp: componentWatchdogServiceTcpToTerraform(struct!.tcp),
    udp: componentWatchdogServiceUdpToTerraform(struct!.udp),
    updown: componentWatchdogServiceUpdownToTerraform(struct!.updown),
    uptimerobot: componentWatchdogServiceUptimerobotToTerraform(struct!.uptimerobot),
    webhook: componentWatchdogServiceWebhookToTerraform(struct!.webhook),
  }
}


export function componentWatchdogServiceToHclTerraform(struct?: ComponentWatchdogService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: componentWatchdogServiceDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceDns",
    },
    http: {
      value: componentWatchdogServiceHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceHttp",
    },
    icmp: {
      value: componentWatchdogServiceIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceIcmp",
    },
    manual: {
      value: componentWatchdogServiceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceManual",
    },
    pingdom: {
      value: componentWatchdogServicePingdomToHclTerraform(struct!.pingdom),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServicePingdom",
    },
    tcp: {
      value: componentWatchdogServiceTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceTcp",
    },
    udp: {
      value: componentWatchdogServiceUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceUdp",
    },
    updown: {
      value: componentWatchdogServiceUpdownToHclTerraform(struct!.updown),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceUpdown",
    },
    uptimerobot: {
      value: componentWatchdogServiceUptimerobotToHclTerraform(struct!.uptimerobot),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceUptimerobot",
    },
    webhook: {
      value: componentWatchdogServiceWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogServiceWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdogService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    if (this._updown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updown = this._updown?.internalValue;
    }
    if (this._uptimerobot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptimerobot = this._uptimerobot?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdogService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._manual.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
      this._updown.internalValue = undefined;
      this._uptimerobot.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._icmp.internalValue = value.icmp;
      this._manual.internalValue = value.manual;
      this._pingdom.internalValue = value.pingdom;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
      this._updown.internalValue = value.updown;
      this._uptimerobot.internalValue = value.uptimerobot;
      this._webhook.internalValue = value.webhook;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ComponentWatchdogServiceDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ComponentWatchdogServiceDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ComponentWatchdogServiceHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ComponentWatchdogServiceHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new ComponentWatchdogServiceIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: ComponentWatchdogServiceIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new ComponentWatchdogServiceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: ComponentWatchdogServiceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new ComponentWatchdogServicePingdomOutputReference(this, "pingdom");
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: ComponentWatchdogServicePingdom) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new ComponentWatchdogServiceTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: ComponentWatchdogServiceTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new ComponentWatchdogServiceUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: ComponentWatchdogServiceUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }

  // updown - computed: false, optional: true, required: false
  private _updown = new ComponentWatchdogServiceUpdownOutputReference(this, "updown");
  public get updown() {
    return this._updown;
  }
  public putUpdown(value: ComponentWatchdogServiceUpdown) {
    this._updown.internalValue = value;
  }
  public resetUpdown() {
    this._updown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updownInput() {
    return this._updown.internalValue;
  }

  // uptimerobot - computed: false, optional: true, required: false
  private _uptimerobot = new ComponentWatchdogServiceUptimerobotOutputReference(this, "uptimerobot");
  public get uptimerobot() {
    return this._uptimerobot;
  }
  public putUptimerobot(value: ComponentWatchdogServiceUptimerobot) {
    this._uptimerobot.internalValue = value;
  }
  public resetUptimerobot() {
    this._uptimerobot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimerobotInput() {
    return this._uptimerobot.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new ComponentWatchdogServiceWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: ComponentWatchdogServiceWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface ComponentWatchdog {
  /**
  * When true, this Watchdog will run every 30 seconds, instead of the standard 1 minute.
  * 
  * -> You are billed extra for each high frequency Watchdog. Please see our [pricing page](https://hund.io/pricing) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#high_frequency Component#high_frequency}
  */
  readonly highFrequency?: boolean | cdktf.IResolvable;
  /**
  * The service configuration for this Watchdog, which describes how the Watchdog determines current status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#service Component#service}
  */
  readonly service: ComponentWatchdogService;
}

export function componentWatchdogToTerraform(struct?: ComponentWatchdog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_frequency: cdktf.booleanToTerraform(struct!.highFrequency),
    service: componentWatchdogServiceToTerraform(struct!.service),
  }
}


export function componentWatchdogToHclTerraform(struct?: ComponentWatchdog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_frequency: {
      value: cdktf.booleanToHclTerraform(struct!.highFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: componentWatchdogServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "ComponentWatchdogService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentWatchdogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentWatchdog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.highFrequency = this._highFrequency;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentWatchdog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highFrequency = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highFrequency = value.highFrequency;
      this._service.internalValue = value.service;
    }
  }

  // high_frequency - computed: true, optional: true, required: false
  private _highFrequency?: boolean | cdktf.IResolvable; 
  public get highFrequency() {
    return this.getBooleanAttribute('high_frequency');
  }
  public set highFrequency(value: boolean | cdktf.IResolvable) {
    this._highFrequency = value;
  }
  public resetHighFrequency() {
    this._highFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highFrequencyInput() {
    return this._highFrequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_status - computed: true, optional: false, required: false
  public get latestStatus() {
    return this.getStringAttribute('latest_status');
  }

  // service - computed: false, optional: false, required: true
  private _service = new ComponentWatchdogServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: ComponentWatchdogService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component hund_component}
*/
export class Component extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Component resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Component to import
  * @param importFromId The id of the existing Component that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Component to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/component hund_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_component',
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
    this._description = config.description;
    this._descriptionTranslations = config.descriptionTranslations;
    this._excludeFromGlobalHistory = config.excludeFromGlobalHistory;
    this._excludeFromGlobalUptime = config.excludeFromGlobalUptime;
    this._group = config.group;
    this._name = config.name;
    this._nameTranslations = config.nameTranslations;
    this._watchdog.internalValue = config.watchdog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // description_translations - computed: true, optional: true, required: false
  private _descriptionTranslations?: { [key: string]: string }; 
  public get descriptionTranslations() {
    return this.getStringMapAttribute('description_translations');
  }
  public set descriptionTranslations(value: { [key: string]: string }) {
    this._descriptionTranslations = value;
  }
  public resetDescriptionTranslations() {
    this._descriptionTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionTranslationsInput() {
    return this._descriptionTranslations;
  }

  // exclude_from_global_history - computed: true, optional: true, required: false
  private _excludeFromGlobalHistory?: boolean | cdktf.IResolvable; 
  public get excludeFromGlobalHistory() {
    return this.getBooleanAttribute('exclude_from_global_history');
  }
  public set excludeFromGlobalHistory(value: boolean | cdktf.IResolvable) {
    this._excludeFromGlobalHistory = value;
  }
  public resetExcludeFromGlobalHistory() {
    this._excludeFromGlobalHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromGlobalHistoryInput() {
    return this._excludeFromGlobalHistory;
  }

  // exclude_from_global_uptime - computed: true, optional: true, required: false
  private _excludeFromGlobalUptime?: boolean | cdktf.IResolvable; 
  public get excludeFromGlobalUptime() {
    return this.getBooleanAttribute('exclude_from_global_uptime');
  }
  public set excludeFromGlobalUptime(value: boolean | cdktf.IResolvable) {
    this._excludeFromGlobalUptime = value;
  }
  public resetExcludeFromGlobalUptime() {
    this._excludeFromGlobalUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromGlobalUptimeInput() {
    return this._excludeFromGlobalUptime;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_event_at - computed: true, optional: false, required: false
  public get lastEventAt() {
    return this.getStringAttribute('last_event_at');
  }

  // name - computed: true, optional: true, required: false
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

  // name_translations - computed: true, optional: true, required: false
  private _nameTranslations?: { [key: string]: string }; 
  public get nameTranslations() {
    return this.getStringMapAttribute('name_translations');
  }
  public set nameTranslations(value: { [key: string]: string }) {
    this._nameTranslations = value;
  }
  public resetNameTranslations() {
    this._nameTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTranslationsInput() {
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

  // watchdog - computed: false, optional: false, required: true
  private _watchdog = new ComponentWatchdogOutputReference(this, "watchdog");
  public get watchdog() {
    return this._watchdog;
  }
  public putWatchdog(value: ComponentWatchdog) {
    this._watchdog.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogInput() {
    return this._watchdog.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      description_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._descriptionTranslations),
      exclude_from_global_history: cdktf.booleanToTerraform(this._excludeFromGlobalHistory),
      exclude_from_global_uptime: cdktf.booleanToTerraform(this._excludeFromGlobalUptime),
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
      name_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._nameTranslations),
      watchdog: componentWatchdogToTerraform(this._watchdog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._descriptionTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      exclude_from_global_history: {
        value: cdktf.booleanToHclTerraform(this._excludeFromGlobalHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_from_global_uptime: {
        value: cdktf.booleanToHclTerraform(this._excludeFromGlobalUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      name_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nameTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      watchdog: {
        value: componentWatchdogToHclTerraform(this._watchdog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComponentWatchdog",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
