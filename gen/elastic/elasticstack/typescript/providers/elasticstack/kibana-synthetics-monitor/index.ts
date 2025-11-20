// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSyntheticsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert configuration. Default: `{ status: { enabled: true }, tls: { enabled: true } }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#alert KibanaSyntheticsMonitor#alert}
  */
  readonly alert?: KibanaSyntheticsMonitorAlert;
  /**
  * Browser Monitor specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#browser KibanaSyntheticsMonitor#browser}
  */
  readonly browser?: KibanaSyntheticsMonitorBrowser;
  /**
  * Whether the monitor is enabled. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#enabled KibanaSyntheticsMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HTTP Monitor specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#http KibanaSyntheticsMonitor#http}
  */
  readonly http?: KibanaSyntheticsMonitorHttp;
  /**
  * ICMP Monitor specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#icmp KibanaSyntheticsMonitor#icmp}
  */
  readonly icmp?: KibanaSyntheticsMonitorIcmp;
  /**
  * Key-value pairs of labels to associate with the monitor. Labels can be used for filtering and grouping monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#labels KibanaSyntheticsMonitor#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Where to deploy the monitor. Monitors can be deployed in multiple locations so that you can detect differences in availability and response times across those locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#locations KibanaSyntheticsMonitor#locations}
  */
  readonly locations?: string[];
  /**
  * The monitor's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#name KibanaSyntheticsMonitor#name}
  */
  readonly name: string;
  /**
  * The data stream namespace. Note: if you change its value, kibana creates new datastream. A user needs permissions for new/old datastream in update case to be able to see full monitor history. The `namespace` field should be lowercase and not contain spaces. The namespace must not include any of the following characters: *, \, /, ?, ", <, >, |, whitespace, ,, #, :, or -. Default: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#namespace KibanaSyntheticsMonitor#namespace}
  */
  readonly namespace?: string;
  /**
  * Monitor parameters. Raw JSON object, use `jsonencode` function to represent JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#params KibanaSyntheticsMonitor#params}
  */
  readonly params?: string;
  /**
  * These Private Locations refer to locations hosted and managed by you, whereas locations are hosted by Elastic. You can specify a Private Location using the location's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#private_locations KibanaSyntheticsMonitor#private_locations}
  */
  readonly privateLocations?: string[];
  /**
  * Enable or disable retesting when a monitor fails. By default, monitors are automatically retested if the monitor goes from "up" to "down". If the result of the retest is also "down", an error will be created, and if configured, an alert sent. Then the monitor will resume running according to the defined schedule. Using retest_on_failure can reduce noise related to transient problems. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#retest_on_failure KibanaSyntheticsMonitor#retest_on_failure}
  */
  readonly retestOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The monitor's schedule in minutes. Supported values are 1, 3, 5, 10, 15, 30, 60, 120 and 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#schedule KibanaSyntheticsMonitor#schedule}
  */
  readonly schedule?: number;
  /**
  * The APM service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#service_name KibanaSyntheticsMonitor#service_name}
  */
  readonly serviceName?: string;
  /**
  * Kibana space. The space ID that is part of the Kibana URL when inside the space. Space IDs are limited to lowercase alphanumeric, underscore, and hyphen characters (a-z, 0-9, _, and -). You are cannot change the ID with the update operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#space_id KibanaSyntheticsMonitor#space_id}
  */
  readonly spaceId?: string;
  /**
  * An array of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#tags KibanaSyntheticsMonitor#tags}
  */
  readonly tags?: string[];
  /**
  * TCP Monitor specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#tcp KibanaSyntheticsMonitor#tcp}
  */
  readonly tcp?: KibanaSyntheticsMonitorTcp;
  /**
  * The monitor timeout in seconds, monitor will fail if it doesn't complete within this time. Default: `16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#timeout KibanaSyntheticsMonitor#timeout}
  */
  readonly timeout?: number;
}
export interface KibanaSyntheticsMonitorAlertStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#enabled KibanaSyntheticsMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kibanaSyntheticsMonitorAlertStatusToTerraform(struct?: KibanaSyntheticsMonitorAlertStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kibanaSyntheticsMonitorAlertStatusToHclTerraform(struct?: KibanaSyntheticsMonitorAlertStatus | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorAlertStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorAlertStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorAlertStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface KibanaSyntheticsMonitorAlertTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#enabled KibanaSyntheticsMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kibanaSyntheticsMonitorAlertTlsToTerraform(struct?: KibanaSyntheticsMonitorAlertTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kibanaSyntheticsMonitorAlertTlsToHclTerraform(struct?: KibanaSyntheticsMonitorAlertTls | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorAlertTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorAlertTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorAlertTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface KibanaSyntheticsMonitorAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#status KibanaSyntheticsMonitor#status}
  */
  readonly status?: KibanaSyntheticsMonitorAlertStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#tls KibanaSyntheticsMonitor#tls}
  */
  readonly tls?: KibanaSyntheticsMonitorAlertTls;
}

export function kibanaSyntheticsMonitorAlertToTerraform(struct?: KibanaSyntheticsMonitorAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: kibanaSyntheticsMonitorAlertStatusToTerraform(struct!.status),
    tls: kibanaSyntheticsMonitorAlertTlsToTerraform(struct!.tls),
  }
}


export function kibanaSyntheticsMonitorAlertToHclTerraform(struct?: KibanaSyntheticsMonitorAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: kibanaSyntheticsMonitorAlertStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaSyntheticsMonitorAlertStatus",
    },
    tls: {
      value: kibanaSyntheticsMonitorAlertTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaSyntheticsMonitorAlertTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status.internalValue = value.status;
      this._tls.internalValue = value.tls;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status = new KibanaSyntheticsMonitorAlertStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: KibanaSyntheticsMonitorAlertStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new KibanaSyntheticsMonitorAlertTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: KibanaSyntheticsMonitorAlertTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface KibanaSyntheticsMonitorBrowser {
  /**
  * Whether to ignore HTTPS errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ignore_https_errors KibanaSyntheticsMonitor#ignore_https_errors}
  */
  readonly ignoreHttpsErrors?: boolean | cdktf.IResolvable;
  /**
  * The inline script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#inline_script KibanaSyntheticsMonitor#inline_script}
  */
  readonly inlineScript: string;
  /**
  * Playwright options.. Raw JSON object, use `jsonencode` function to represent JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#playwright_options KibanaSyntheticsMonitor#playwright_options}
  */
  readonly playwrightOptions?: string;
  /**
  * Controls the behavior of the screenshots feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#screenshots KibanaSyntheticsMonitor#screenshots}
  */
  readonly screenshots?: string;
  /**
  * Synthetics agent CLI arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#synthetics_args KibanaSyntheticsMonitor#synthetics_args}
  */
  readonly syntheticsArgs?: string[];
}

export function kibanaSyntheticsMonitorBrowserToTerraform(struct?: KibanaSyntheticsMonitorBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_https_errors: cdktf.booleanToTerraform(struct!.ignoreHttpsErrors),
    inline_script: cdktf.stringToTerraform(struct!.inlineScript),
    playwright_options: cdktf.stringToTerraform(struct!.playwrightOptions),
    screenshots: cdktf.stringToTerraform(struct!.screenshots),
    synthetics_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syntheticsArgs),
  }
}


export function kibanaSyntheticsMonitorBrowserToHclTerraform(struct?: KibanaSyntheticsMonitorBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_https_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttpsErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inline_script: {
      value: cdktf.stringToHclTerraform(struct!.inlineScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    playwright_options: {
      value: cdktf.stringToHclTerraform(struct!.playwrightOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screenshots: {
      value: cdktf.stringToHclTerraform(struct!.screenshots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synthetics_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syntheticsArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorBrowserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorBrowser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreHttpsErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttpsErrors = this._ignoreHttpsErrors;
    }
    if (this._inlineScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineScript = this._inlineScript;
    }
    if (this._playwrightOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.playwrightOptions = this._playwrightOptions;
    }
    if (this._screenshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshots = this._screenshots;
    }
    if (this._syntheticsArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticsArgs = this._syntheticsArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorBrowser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreHttpsErrors = undefined;
      this._inlineScript = undefined;
      this._playwrightOptions = undefined;
      this._screenshots = undefined;
      this._syntheticsArgs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreHttpsErrors = value.ignoreHttpsErrors;
      this._inlineScript = value.inlineScript;
      this._playwrightOptions = value.playwrightOptions;
      this._screenshots = value.screenshots;
      this._syntheticsArgs = value.syntheticsArgs;
    }
  }

  // ignore_https_errors - computed: true, optional: true, required: false
  private _ignoreHttpsErrors?: boolean | cdktf.IResolvable; 
  public get ignoreHttpsErrors() {
    return this.getBooleanAttribute('ignore_https_errors');
  }
  public set ignoreHttpsErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreHttpsErrors = value;
  }
  public resetIgnoreHttpsErrors() {
    this._ignoreHttpsErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttpsErrorsInput() {
    return this._ignoreHttpsErrors;
  }

  // inline_script - computed: false, optional: false, required: true
  private _inlineScript?: string; 
  public get inlineScript() {
    return this.getStringAttribute('inline_script');
  }
  public set inlineScript(value: string) {
    this._inlineScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineScriptInput() {
    return this._inlineScript;
  }

  // playwright_options - computed: false, optional: true, required: false
  private _playwrightOptions?: string; 
  public get playwrightOptions() {
    return this.getStringAttribute('playwright_options');
  }
  public set playwrightOptions(value: string) {
    this._playwrightOptions = value;
  }
  public resetPlaywrightOptions() {
    this._playwrightOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playwrightOptionsInput() {
    return this._playwrightOptions;
  }

  // screenshots - computed: true, optional: true, required: false
  private _screenshots?: string; 
  public get screenshots() {
    return this.getStringAttribute('screenshots');
  }
  public set screenshots(value: string) {
    this._screenshots = value;
  }
  public resetScreenshots() {
    this._screenshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotsInput() {
    return this._screenshots;
  }

  // synthetics_args - computed: false, optional: true, required: false
  private _syntheticsArgs?: string[]; 
  public get syntheticsArgs() {
    return this.getListAttribute('synthetics_args');
  }
  public set syntheticsArgs(value: string[]) {
    this._syntheticsArgs = value;
  }
  public resetSyntheticsArgs() {
    this._syntheticsArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticsArgsInput() {
    return this._syntheticsArgs;
  }
}
export interface KibanaSyntheticsMonitorHttp {
  /**
  * The check request settings.. Raw JSON object, use `jsonencode` function to represent JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#check KibanaSyntheticsMonitor#check}
  */
  readonly check?: string;
  /**
  * Whether to ping using the ipv4 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ipv4 KibanaSyntheticsMonitor#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Whether to ping using the ipv6 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ipv6 KibanaSyntheticsMonitor#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of redirects to follow. Default: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#max_redirects KibanaSyntheticsMonitor#max_redirects}
  */
  readonly maxRedirects?: number;
  /**
  * The mode of the monitor. Can be "all" or "any". If you're using a DNS-load balancer and want to ping every IP address for the specified hostname, you should use all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#mode KibanaSyntheticsMonitor#mode}
  */
  readonly mode?: string;
  /**
  * The password for authenticating with the server. The credentials are passed with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#password KibanaSyntheticsMonitor#password}
  */
  readonly password?: string;
  /**
  * Additional headers to send to proxies during CONNECT requests.. Raw JSON object, use `jsonencode` function to represent JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#proxy_header KibanaSyntheticsMonitor#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The URL of the proxy to use for this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#proxy_url KibanaSyntheticsMonitor#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Controls the indexing of the HTTP response body contents to the `http.response.body.contents` field.. Raw JSON object, use `jsonencode` function to represent JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#response KibanaSyntheticsMonitor#response}
  */
  readonly response?: string;
  /**
  * Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_certificate KibanaSyntheticsMonitor#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * The list of root certificates for verifications is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_certificate_authorities KibanaSyntheticsMonitor#ssl_certificate_authorities}
  */
  readonly sslCertificateAuthorities?: string[];
  /**
  * Certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_key KibanaSyntheticsMonitor#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Key passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_key_passphrase KibanaSyntheticsMonitor#ssl_key_passphrase}
  */
  readonly sslKeyPassphrase?: string;
  /**
  * List of allowed SSL/TLS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_supported_protocols KibanaSyntheticsMonitor#ssl_supported_protocols}
  */
  readonly sslSupportedProtocols?: string[];
  /**
  * Controls the verification of server certificates. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_verification_mode KibanaSyntheticsMonitor#ssl_verification_mode}
  */
  readonly sslVerificationMode?: string;
  /**
  * URL to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#url KibanaSyntheticsMonitor#url}
  */
  readonly url: string;
  /**
  * The username for authenticating with the server. The credentials are passed with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#username KibanaSyntheticsMonitor#username}
  */
  readonly username?: string;
}

export function kibanaSyntheticsMonitorHttpToTerraform(struct?: KibanaSyntheticsMonitorHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.stringToTerraform(struct!.check),
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    max_redirects: cdktf.numberToTerraform(struct!.maxRedirects),
    mode: cdktf.stringToTerraform(struct!.mode),
    password: cdktf.stringToTerraform(struct!.password),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    response: cdktf.stringToTerraform(struct!.response),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
    ssl_certificate_authorities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslCertificateAuthorities),
    ssl_key: cdktf.stringToTerraform(struct!.sslKey),
    ssl_key_passphrase: cdktf.stringToTerraform(struct!.sslKeyPassphrase),
    ssl_supported_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslSupportedProtocols),
    ssl_verification_mode: cdktf.stringToTerraform(struct!.sslVerificationMode),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function kibanaSyntheticsMonitorHttpToHclTerraform(struct?: KibanaSyntheticsMonitorHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_redirects: {
      value: cdktf.numberToHclTerraform(struct!.maxRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate_authorities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslCertificateAuthorities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_key: {
      value: cdktf.stringToHclTerraform(struct!.sslKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_supported_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslSupportedProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_verification_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslVerificationMode),
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

export class KibanaSyntheticsMonitorHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._maxRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRedirects = this._maxRedirects;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    if (this._sslCertificateAuthorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateAuthorities = this._sslCertificateAuthorities;
    }
    if (this._sslKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKey = this._sslKey;
    }
    if (this._sslKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPassphrase = this._sslKeyPassphrase;
    }
    if (this._sslSupportedProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSupportedProtocols = this._sslSupportedProtocols;
    }
    if (this._sslVerificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerificationMode = this._sslVerificationMode;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._maxRedirects = undefined;
      this._mode = undefined;
      this._password = undefined;
      this._proxyHeader = undefined;
      this._proxyUrl = undefined;
      this._response = undefined;
      this._sslCertificate = undefined;
      this._sslCertificateAuthorities = undefined;
      this._sslKey = undefined;
      this._sslKeyPassphrase = undefined;
      this._sslSupportedProtocols = undefined;
      this._sslVerificationMode = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._maxRedirects = value.maxRedirects;
      this._mode = value.mode;
      this._password = value.password;
      this._proxyHeader = value.proxyHeader;
      this._proxyUrl = value.proxyUrl;
      this._response = value.response;
      this._sslCertificate = value.sslCertificate;
      this._sslCertificateAuthorities = value.sslCertificateAuthorities;
      this._sslKey = value.sslKey;
      this._sslKeyPassphrase = value.sslKeyPassphrase;
      this._sslSupportedProtocols = value.sslSupportedProtocols;
      this._sslVerificationMode = value.sslVerificationMode;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // max_redirects - computed: true, optional: true, required: false
  private _maxRedirects?: number; 
  public get maxRedirects() {
    return this.getNumberAttribute('max_redirects');
  }
  public set maxRedirects(value: number) {
    this._maxRedirects = value;
  }
  public resetMaxRedirects() {
    this._maxRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRedirectsInput() {
    return this._maxRedirects;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_certificate_authorities - computed: false, optional: true, required: false
  private _sslCertificateAuthorities?: string[]; 
  public get sslCertificateAuthorities() {
    return this.getListAttribute('ssl_certificate_authorities');
  }
  public set sslCertificateAuthorities(value: string[]) {
    this._sslCertificateAuthorities = value;
  }
  public resetSslCertificateAuthorities() {
    this._sslCertificateAuthorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateAuthoritiesInput() {
    return this._sslCertificateAuthorities;
  }

  // ssl_key - computed: true, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // ssl_key_passphrase - computed: true, optional: true, required: false
  private _sslKeyPassphrase?: string; 
  public get sslKeyPassphrase() {
    return this.getStringAttribute('ssl_key_passphrase');
  }
  public set sslKeyPassphrase(value: string) {
    this._sslKeyPassphrase = value;
  }
  public resetSslKeyPassphrase() {
    this._sslKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPassphraseInput() {
    return this._sslKeyPassphrase;
  }

  // ssl_supported_protocols - computed: true, optional: true, required: false
  private _sslSupportedProtocols?: string[]; 
  public get sslSupportedProtocols() {
    return this.getListAttribute('ssl_supported_protocols');
  }
  public set sslSupportedProtocols(value: string[]) {
    this._sslSupportedProtocols = value;
  }
  public resetSslSupportedProtocols() {
    this._sslSupportedProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSupportedProtocolsInput() {
    return this._sslSupportedProtocols;
  }

  // ssl_verification_mode - computed: true, optional: true, required: false
  private _sslVerificationMode?: string; 
  public get sslVerificationMode() {
    return this.getStringAttribute('ssl_verification_mode');
  }
  public set sslVerificationMode(value: string) {
    this._sslVerificationMode = value;
  }
  public resetSslVerificationMode() {
    this._sslVerificationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerificationModeInput() {
    return this._sslVerificationMode;
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
export interface KibanaSyntheticsMonitorIcmp {
  /**
  * Host to ping; it can be an IP address or a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#host KibanaSyntheticsMonitor#host}
  */
  readonly host: string;
  /**
  *  Wait time in seconds. Default: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#wait KibanaSyntheticsMonitor#wait}
  */
  readonly wait?: number;
}

export function kibanaSyntheticsMonitorIcmpToTerraform(struct?: KibanaSyntheticsMonitorIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function kibanaSyntheticsMonitorIcmpToHclTerraform(struct?: KibanaSyntheticsMonitorIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._wait = value.wait;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // wait - computed: true, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}
export interface KibanaSyntheticsMonitorTcp {
  /**
  * The expected answer. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#check_receive KibanaSyntheticsMonitor#check_receive}
  */
  readonly checkReceive?: string;
  /**
  * An optional payload string to send to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#check_send KibanaSyntheticsMonitor#check_send}
  */
  readonly checkSend?: string;
  /**
  * The host to monitor; it can be an IP address or a hostname. The host can include the port using a colon (e.g., "example.com:9200").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#host KibanaSyntheticsMonitor#host}
  */
  readonly host: string;
  /**
  * The URL of the SOCKS5 proxy to use when connecting to the server. The value must be a URL with a scheme of `socks5://`. If the SOCKS5 proxy server requires client authentication, then a username and password can be embedded in the URL. When using a proxy, hostnames are resolved on the proxy server instead of on the client. You can change this behavior by setting the `proxy_use_local_resolver` option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#proxy_url KibanaSyntheticsMonitor#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  *  A Boolean value that determines whether hostnames are resolved locally instead of being resolved on the proxy server. The default value is false, which means that name resolution occurs on the proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#proxy_use_local_resolver KibanaSyntheticsMonitor#proxy_use_local_resolver}
  */
  readonly proxyUseLocalResolver?: boolean | cdktf.IResolvable;
  /**
  * Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_certificate KibanaSyntheticsMonitor#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * The list of root certificates for verifications is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_certificate_authorities KibanaSyntheticsMonitor#ssl_certificate_authorities}
  */
  readonly sslCertificateAuthorities?: string[];
  /**
  * Certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_key KibanaSyntheticsMonitor#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Key passphrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_key_passphrase KibanaSyntheticsMonitor#ssl_key_passphrase}
  */
  readonly sslKeyPassphrase?: string;
  /**
  * List of allowed SSL/TLS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_supported_protocols KibanaSyntheticsMonitor#ssl_supported_protocols}
  */
  readonly sslSupportedProtocols?: string[];
  /**
  * Controls the verification of server certificates. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#ssl_verification_mode KibanaSyntheticsMonitor#ssl_verification_mode}
  */
  readonly sslVerificationMode?: string;
}

export function kibanaSyntheticsMonitorTcpToTerraform(struct?: KibanaSyntheticsMonitorTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_receive: cdktf.stringToTerraform(struct!.checkReceive),
    check_send: cdktf.stringToTerraform(struct!.checkSend),
    host: cdktf.stringToTerraform(struct!.host),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    proxy_use_local_resolver: cdktf.booleanToTerraform(struct!.proxyUseLocalResolver),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
    ssl_certificate_authorities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslCertificateAuthorities),
    ssl_key: cdktf.stringToTerraform(struct!.sslKey),
    ssl_key_passphrase: cdktf.stringToTerraform(struct!.sslKeyPassphrase),
    ssl_supported_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslSupportedProtocols),
    ssl_verification_mode: cdktf.stringToTerraform(struct!.sslVerificationMode),
  }
}


export function kibanaSyntheticsMonitorTcpToHclTerraform(struct?: KibanaSyntheticsMonitorTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_receive: {
      value: cdktf.stringToHclTerraform(struct!.checkReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_send: {
      value: cdktf.stringToHclTerraform(struct!.checkSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_use_local_resolver: {
      value: cdktf.booleanToHclTerraform(struct!.proxyUseLocalResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate_authorities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslCertificateAuthorities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_key: {
      value: cdktf.stringToHclTerraform(struct!.sslKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_supported_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslSupportedProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_verification_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslVerificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsMonitorTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsMonitorTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkReceive = this._checkReceive;
    }
    if (this._checkSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSend = this._checkSend;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._proxyUseLocalResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUseLocalResolver = this._proxyUseLocalResolver;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    if (this._sslCertificateAuthorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateAuthorities = this._sslCertificateAuthorities;
    }
    if (this._sslKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKey = this._sslKey;
    }
    if (this._sslKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPassphrase = this._sslKeyPassphrase;
    }
    if (this._sslSupportedProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSupportedProtocols = this._sslSupportedProtocols;
    }
    if (this._sslVerificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerificationMode = this._sslVerificationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsMonitorTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkReceive = undefined;
      this._checkSend = undefined;
      this._host = undefined;
      this._proxyUrl = undefined;
      this._proxyUseLocalResolver = undefined;
      this._sslCertificate = undefined;
      this._sslCertificateAuthorities = undefined;
      this._sslKey = undefined;
      this._sslKeyPassphrase = undefined;
      this._sslSupportedProtocols = undefined;
      this._sslVerificationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkReceive = value.checkReceive;
      this._checkSend = value.checkSend;
      this._host = value.host;
      this._proxyUrl = value.proxyUrl;
      this._proxyUseLocalResolver = value.proxyUseLocalResolver;
      this._sslCertificate = value.sslCertificate;
      this._sslCertificateAuthorities = value.sslCertificateAuthorities;
      this._sslKey = value.sslKey;
      this._sslKeyPassphrase = value.sslKeyPassphrase;
      this._sslSupportedProtocols = value.sslSupportedProtocols;
      this._sslVerificationMode = value.sslVerificationMode;
    }
  }

  // check_receive - computed: false, optional: true, required: false
  private _checkReceive?: string; 
  public get checkReceive() {
    return this.getStringAttribute('check_receive');
  }
  public set checkReceive(value: string) {
    this._checkReceive = value;
  }
  public resetCheckReceive() {
    this._checkReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkReceiveInput() {
    return this._checkReceive;
  }

  // check_send - computed: false, optional: true, required: false
  private _checkSend?: string; 
  public get checkSend() {
    return this.getStringAttribute('check_send');
  }
  public set checkSend(value: string) {
    this._checkSend = value;
  }
  public resetCheckSend() {
    this._checkSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSendInput() {
    return this._checkSend;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // proxy_use_local_resolver - computed: true, optional: true, required: false
  private _proxyUseLocalResolver?: boolean | cdktf.IResolvable; 
  public get proxyUseLocalResolver() {
    return this.getBooleanAttribute('proxy_use_local_resolver');
  }
  public set proxyUseLocalResolver(value: boolean | cdktf.IResolvable) {
    this._proxyUseLocalResolver = value;
  }
  public resetProxyUseLocalResolver() {
    this._proxyUseLocalResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUseLocalResolverInput() {
    return this._proxyUseLocalResolver;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_certificate_authorities - computed: false, optional: true, required: false
  private _sslCertificateAuthorities?: string[]; 
  public get sslCertificateAuthorities() {
    return this.getListAttribute('ssl_certificate_authorities');
  }
  public set sslCertificateAuthorities(value: string[]) {
    this._sslCertificateAuthorities = value;
  }
  public resetSslCertificateAuthorities() {
    this._sslCertificateAuthorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateAuthoritiesInput() {
    return this._sslCertificateAuthorities;
  }

  // ssl_key - computed: true, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // ssl_key_passphrase - computed: true, optional: true, required: false
  private _sslKeyPassphrase?: string; 
  public get sslKeyPassphrase() {
    return this.getStringAttribute('ssl_key_passphrase');
  }
  public set sslKeyPassphrase(value: string) {
    this._sslKeyPassphrase = value;
  }
  public resetSslKeyPassphrase() {
    this._sslKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPassphraseInput() {
    return this._sslKeyPassphrase;
  }

  // ssl_supported_protocols - computed: true, optional: true, required: false
  private _sslSupportedProtocols?: string[]; 
  public get sslSupportedProtocols() {
    return this.getListAttribute('ssl_supported_protocols');
  }
  public set sslSupportedProtocols(value: string[]) {
    this._sslSupportedProtocols = value;
  }
  public resetSslSupportedProtocols() {
    this._sslSupportedProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSupportedProtocolsInput() {
    return this._sslSupportedProtocols;
  }

  // ssl_verification_mode - computed: true, optional: true, required: false
  private _sslVerificationMode?: string; 
  public get sslVerificationMode() {
    return this.getStringAttribute('ssl_verification_mode');
  }
  public set sslVerificationMode(value: string) {
    this._sslVerificationMode = value;
  }
  public resetSslVerificationMode() {
    this._sslVerificationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerificationModeInput() {
    return this._sslVerificationMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor elasticstack_kibana_synthetics_monitor}
*/
export class KibanaSyntheticsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_synthetics_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSyntheticsMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSyntheticsMonitor to import
  * @param importFromId The id of the existing KibanaSyntheticsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSyntheticsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_synthetics_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/kibana_synthetics_monitor elasticstack_kibana_synthetics_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSyntheticsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSyntheticsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_synthetics_monitor',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert.internalValue = config.alert;
    this._browser.internalValue = config.browser;
    this._enabled = config.enabled;
    this._http.internalValue = config.http;
    this._icmp.internalValue = config.icmp;
    this._labels = config.labels;
    this._locations = config.locations;
    this._name = config.name;
    this._namespace = config.namespace;
    this._params = config.params;
    this._privateLocations = config.privateLocations;
    this._retestOnFailure = config.retestOnFailure;
    this._schedule = config.schedule;
    this._serviceName = config.serviceName;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._tcp.internalValue = config.tcp;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert - computed: true, optional: true, required: false
  private _alert = new KibanaSyntheticsMonitorAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: KibanaSyntheticsMonitorAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // browser - computed: false, optional: true, required: false
  private _browser = new KibanaSyntheticsMonitorBrowserOutputReference(this, "browser");
  public get browser() {
    return this._browser;
  }
  public putBrowser(value: KibanaSyntheticsMonitorBrowser) {
    this._browser.internalValue = value;
  }
  public resetBrowser() {
    this._browser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInput() {
    return this._browser.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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

  // http - computed: false, optional: true, required: false
  private _http = new KibanaSyntheticsMonitorHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: KibanaSyntheticsMonitorHttp) {
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
  private _icmp = new KibanaSyntheticsMonitorIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: KibanaSyntheticsMonitorIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // private_locations - computed: false, optional: true, required: false
  private _privateLocations?: string[]; 
  public get privateLocations() {
    return this.getListAttribute('private_locations');
  }
  public set privateLocations(value: string[]) {
    this._privateLocations = value;
  }
  public resetPrivateLocations() {
    this._privateLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLocationsInput() {
    return this._privateLocations;
  }

  // retest_on_failure - computed: false, optional: true, required: false
  private _retestOnFailure?: boolean | cdktf.IResolvable; 
  public get retestOnFailure() {
    return this.getBooleanAttribute('retest_on_failure');
  }
  public set retestOnFailure(value: boolean | cdktf.IResolvable) {
    this._retestOnFailure = value;
  }
  public resetRetestOnFailure() {
    this._retestOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retestOnFailureInput() {
    return this._retestOnFailure;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service_name - computed: true, optional: true, required: false
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new KibanaSyntheticsMonitorTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: KibanaSyntheticsMonitorTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert: kibanaSyntheticsMonitorAlertToTerraform(this._alert.internalValue),
      browser: kibanaSyntheticsMonitorBrowserToTerraform(this._browser.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      http: kibanaSyntheticsMonitorHttpToTerraform(this._http.internalValue),
      icmp: kibanaSyntheticsMonitorIcmpToTerraform(this._icmp.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      params: cdktf.stringToTerraform(this._params),
      private_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateLocations),
      retest_on_failure: cdktf.booleanToTerraform(this._retestOnFailure),
      schedule: cdktf.numberToTerraform(this._schedule),
      service_name: cdktf.stringToTerraform(this._serviceName),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tcp: kibanaSyntheticsMonitorTcpToTerraform(this._tcp.internalValue),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert: {
        value: kibanaSyntheticsMonitorAlertToHclTerraform(this._alert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsMonitorAlert",
      },
      browser: {
        value: kibanaSyntheticsMonitorBrowserToHclTerraform(this._browser.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsMonitorBrowser",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http: {
        value: kibanaSyntheticsMonitorHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsMonitorHttp",
      },
      icmp: {
        value: kibanaSyntheticsMonitorIcmpToHclTerraform(this._icmp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsMonitorIcmp",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retest_on_failure: {
        value: cdktf.booleanToHclTerraform(this._retestOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule: {
        value: cdktf.numberToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tcp: {
        value: kibanaSyntheticsMonitorTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsMonitorTcp",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
