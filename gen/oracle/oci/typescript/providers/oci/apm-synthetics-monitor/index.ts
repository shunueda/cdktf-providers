// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmSyntheticsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}
  */
  readonly batchIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}
  */
  readonly isIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}
  */
  readonly isRunNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}
  */
  readonly isRunOnce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}
  */
  readonly monitorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}
  */
  readonly repeatIntervalInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}
  */
  readonly schedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}
  */
  readonly scriptName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * availability_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}
  */
  readonly availabilityConfiguration?: ApmSyntheticsMonitorAvailabilityConfiguration;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}
  */
  readonly configuration?: ApmSyntheticsMonitorConfiguration;
  /**
  * maintenance_window_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}
  */
  readonly maintenanceWindowSchedule?: ApmSyntheticsMonitorMaintenanceWindowSchedule;
  /**
  * script_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}
  */
  readonly scriptParameters?: ApmSyntheticsMonitorScriptParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#timeouts ApmSyntheticsMonitor#timeouts}
  */
  readonly timeouts?: ApmSyntheticsMonitorTimeouts;
  /**
  * vantage_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}
  */
  readonly vantagePoints: ApmSyntheticsMonitorVantagePoints[] | cdktf.IResolvable;
}
export interface ApmSyntheticsMonitorAvailabilityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}
  */
  readonly maxAllowedFailuresPerInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}
  */
  readonly minAllowedRunsPerInterval?: number;
}

export function apmSyntheticsMonitorAvailabilityConfigurationToTerraform(struct?: ApmSyntheticsMonitorAvailabilityConfigurationOutputReference | ApmSyntheticsMonitorAvailabilityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_allowed_failures_per_interval: cdktf.numberToTerraform(struct!.maxAllowedFailuresPerInterval),
    min_allowed_runs_per_interval: cdktf.numberToTerraform(struct!.minAllowedRunsPerInterval),
  }
}


export function apmSyntheticsMonitorAvailabilityConfigurationToHclTerraform(struct?: ApmSyntheticsMonitorAvailabilityConfigurationOutputReference | ApmSyntheticsMonitorAvailabilityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_allowed_failures_per_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedFailuresPerInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_allowed_runs_per_interval: {
      value: cdktf.numberToHclTerraform(struct!.minAllowedRunsPerInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorAvailabilityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorAvailabilityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAllowedFailuresPerInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedFailuresPerInterval = this._maxAllowedFailuresPerInterval;
    }
    if (this._minAllowedRunsPerInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedRunsPerInterval = this._minAllowedRunsPerInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorAvailabilityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAllowedFailuresPerInterval = undefined;
      this._minAllowedRunsPerInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAllowedFailuresPerInterval = value.maxAllowedFailuresPerInterval;
      this._minAllowedRunsPerInterval = value.minAllowedRunsPerInterval;
    }
  }

  // max_allowed_failures_per_interval - computed: true, optional: true, required: false
  private _maxAllowedFailuresPerInterval?: number; 
  public get maxAllowedFailuresPerInterval() {
    return this.getNumberAttribute('max_allowed_failures_per_interval');
  }
  public set maxAllowedFailuresPerInterval(value: number) {
    this._maxAllowedFailuresPerInterval = value;
  }
  public resetMaxAllowedFailuresPerInterval() {
    this._maxAllowedFailuresPerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedFailuresPerIntervalInput() {
    return this._maxAllowedFailuresPerInterval;
  }

  // min_allowed_runs_per_interval - computed: true, optional: true, required: false
  private _minAllowedRunsPerInterval?: number; 
  public get minAllowedRunsPerInterval() {
    return this.getNumberAttribute('min_allowed_runs_per_interval');
  }
  public set minAllowedRunsPerInterval(value: number) {
    this._minAllowedRunsPerInterval = value;
  }
  public resetMinAllowedRunsPerInterval() {
    this._minAllowedRunsPerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedRunsPerIntervalInput() {
    return this._minAllowedRunsPerInterval;
  }
}
export interface ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}
  */
  readonly fileName?: string;
}

export function apmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateToTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function apmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._fileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._fileName = value.fileName;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}
  */
  readonly fileName?: string;
}

export function apmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyToTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function apmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._fileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._fileName = value.fileName;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface ApmSyntheticsMonitorConfigurationClientCertificateDetails {
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#client_certificate ApmSyntheticsMonitor#client_certificate}
  */
  readonly clientCertificate?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#private_key ApmSyntheticsMonitor#private_key}
  */
  readonly privateKey?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey;
}

export function apmSyntheticsMonitorConfigurationClientCertificateDetailsToTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: apmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateToTerraform(struct!.clientCertificate),
    private_key: apmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyToTerraform(struct!.privateKey),
  }
}


export function apmSyntheticsMonitorConfigurationClientCertificateDetailsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference | ApmSyntheticsMonitorConfigurationClientCertificateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: apmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList",
    },
    private_key: {
      value: apmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationClientCertificateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationClientCertificateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificate.internalValue = undefined;
      this._privateKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._privateKey.internalValue = value.privateKey;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey = new ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey) {
    this._privateKey.internalValue = value;
  }
  public resetPrivateKey() {
    this._privateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }
}
export interface ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}
  */
  readonly passwordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}
  */
  readonly vaultSecretId?: string;
}

export function apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordToTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference | ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    vault_secret_id: cdktf.stringToTerraform(struct!.vaultSecretId),
  }
}


export function apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference | ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._vaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretId = this._vaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordType = undefined;
      this._vaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordType = value.passwordType;
      this._vaultSecretId = value.vaultSecretId;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // password_type - computed: true, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // vault_secret_id - computed: true, optional: true, required: false
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  public resetVaultSecretId() {
    this._vaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }
}
export interface ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}
  */
  readonly password?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword;
}

export function apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsToTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordToTerraform(struct!.password),
  }
}


export function apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: true, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password = new ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface ApmSyntheticsMonitorConfigurationDatabaseWalletDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}
  */
  readonly databaseWallet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}
  */
  readonly serviceName?: string;
}

export function apmSyntheticsMonitorConfigurationDatabaseWalletDetailsToTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference | ApmSyntheticsMonitorConfigurationDatabaseWalletDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_wallet: cdktf.stringToTerraform(struct!.databaseWallet),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function apmSyntheticsMonitorConfigurationDatabaseWalletDetailsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference | ApmSyntheticsMonitorConfigurationDatabaseWalletDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_wallet: {
      value: cdktf.stringToHclTerraform(struct!.databaseWallet),
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

export class ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationDatabaseWalletDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseWallet !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseWallet = this._databaseWallet;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseWallet = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseWallet = value.databaseWallet;
      this._serviceName = value.serviceName;
    }
  }

  // database_wallet - computed: true, optional: true, required: false
  private _databaseWallet?: string; 
  public get databaseWallet() {
    return this.getStringAttribute('database_wallet');
  }
  public set databaseWallet(value: string) {
    this._databaseWallet = value;
  }
  public resetDatabaseWallet() {
    this._databaseWallet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseWalletInput() {
    return this._databaseWallet;
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
}
export interface ApmSyntheticsMonitorConfigurationDnsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}
  */
  readonly isOverrideDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}
  */
  readonly overrideDnsIp?: string;
}

export function apmSyntheticsMonitorConfigurationDnsConfigurationToTerraform(struct?: ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference | ApmSyntheticsMonitorConfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_override_dns: cdktf.booleanToTerraform(struct!.isOverrideDns),
    override_dns_ip: cdktf.stringToTerraform(struct!.overrideDnsIp),
  }
}


export function apmSyntheticsMonitorConfigurationDnsConfigurationToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference | ApmSyntheticsMonitorConfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_override_dns: {
      value: cdktf.booleanToHclTerraform(struct!.isOverrideDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_dns_ip: {
      value: cdktf.stringToHclTerraform(struct!.overrideDnsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationDnsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOverrideDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOverrideDns = this._isOverrideDns;
    }
    if (this._overrideDnsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDnsIp = this._overrideDnsIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationDnsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isOverrideDns = undefined;
      this._overrideDnsIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isOverrideDns = value.isOverrideDns;
      this._overrideDnsIp = value.overrideDnsIp;
    }
  }

  // is_override_dns - computed: true, optional: true, required: false
  private _isOverrideDns?: boolean | cdktf.IResolvable; 
  public get isOverrideDns() {
    return this.getBooleanAttribute('is_override_dns');
  }
  public set isOverrideDns(value: boolean | cdktf.IResolvable) {
    this._isOverrideDns = value;
  }
  public resetIsOverrideDns() {
    this._isOverrideDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideDnsInput() {
    return this._isOverrideDns;
  }

  // override_dns_ip - computed: true, optional: true, required: false
  private _overrideDnsIp?: string; 
  public get overrideDnsIp() {
    return this.getStringAttribute('override_dns_ip');
  }
  public set overrideDnsIp(value: string) {
    this._overrideDnsIp = value;
  }
  public resetOverrideDnsIp() {
    this._overrideDnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDnsIpInput() {
    return this._overrideDnsIp;
  }
}
export interface ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}
  */
  readonly passwordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}
  */
  readonly vaultSecretId?: string;
}

export function apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordToTerraform(struct?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference | ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    vault_secret_id: cdktf.stringToTerraform(struct!.vaultSecretId),
  }
}


export function apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference | ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._vaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretId = this._vaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordType = undefined;
      this._vaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordType = value.passwordType;
      this._vaultSecretId = value.vaultSecretId;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // password_type - computed: true, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // vault_secret_id - computed: true, optional: true, required: false
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  public resetVaultSecretId() {
    this._vaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }
}
export interface ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}
  */
  readonly password?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword;
}

export function apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsToTerraform(struct?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordToTerraform(struct!.password),
  }
}


export function apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: true, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password = new ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface ApmSyntheticsMonitorConfigurationNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}
  */
  readonly numberOfHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}
  */
  readonly probePerHop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}
  */
  readonly transmissionRate?: number;
}

export function apmSyntheticsMonitorConfigurationNetworkConfigurationToTerraform(struct?: ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference | ApmSyntheticsMonitorConfigurationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_hops: cdktf.numberToTerraform(struct!.numberOfHops),
    probe_mode: cdktf.stringToTerraform(struct!.probeMode),
    probe_per_hop: cdktf.numberToTerraform(struct!.probePerHop),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    transmission_rate: cdktf.numberToTerraform(struct!.transmissionRate),
  }
}


export function apmSyntheticsMonitorConfigurationNetworkConfigurationToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference | ApmSyntheticsMonitorConfigurationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_hops: {
      value: cdktf.numberToHclTerraform(struct!.numberOfHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_mode: {
      value: cdktf.stringToHclTerraform(struct!.probeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_per_hop: {
      value: cdktf.numberToHclTerraform(struct!.probePerHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmission_rate: {
      value: cdktf.numberToHclTerraform(struct!.transmissionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfHops = this._numberOfHops;
    }
    if (this._probeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMode = this._probeMode;
    }
    if (this._probePerHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePerHop = this._probePerHop;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._transmissionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionRate = this._transmissionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfHops = undefined;
      this._probeMode = undefined;
      this._probePerHop = undefined;
      this._protocol = undefined;
      this._transmissionRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfHops = value.numberOfHops;
      this._probeMode = value.probeMode;
      this._probePerHop = value.probePerHop;
      this._protocol = value.protocol;
      this._transmissionRate = value.transmissionRate;
    }
  }

  // number_of_hops - computed: true, optional: true, required: false
  private _numberOfHops?: number; 
  public get numberOfHops() {
    return this.getNumberAttribute('number_of_hops');
  }
  public set numberOfHops(value: number) {
    this._numberOfHops = value;
  }
  public resetNumberOfHops() {
    this._numberOfHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHopsInput() {
    return this._numberOfHops;
  }

  // probe_mode - computed: true, optional: true, required: false
  private _probeMode?: string; 
  public get probeMode() {
    return this.getStringAttribute('probe_mode');
  }
  public set probeMode(value: string) {
    this._probeMode = value;
  }
  public resetProbeMode() {
    this._probeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeModeInput() {
    return this._probeMode;
  }

  // probe_per_hop - computed: true, optional: true, required: false
  private _probePerHop?: number; 
  public get probePerHop() {
    return this.getNumberAttribute('probe_per_hop');
  }
  public set probePerHop(value: number) {
    this._probePerHop = value;
  }
  public resetProbePerHop() {
    this._probePerHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePerHopInput() {
    return this._probePerHop;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // transmission_rate - computed: true, optional: true, required: false
  private _transmissionRate?: number; 
  public get transmissionRate() {
    return this.getNumberAttribute('transmission_rate');
  }
  public set transmissionRate(value: number) {
    this._transmissionRate = value;
  }
  public resetTransmissionRate() {
    this._transmissionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionRateInput() {
    return this._transmissionRate;
  }
}
export interface ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}
  */
  readonly headerValue?: string;
}

export function apmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersToTerraform(struct?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function apmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference {
    return new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorConfigurationReqAuthenticationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}
  */
  readonly authRequestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}
  */
  readonly authRequestPostBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}
  */
  readonly authUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}
  */
  readonly authUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}
  */
  readonly oauthScheme?: string;
  /**
  * auth_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#auth_headers ApmSyntheticsMonitor#auth_headers}
  */
  readonly authHeaders?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[] | cdktf.IResolvable;
}

export function apmSyntheticsMonitorConfigurationReqAuthenticationDetailsToTerraform(struct?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationReqAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_request_method: cdktf.stringToTerraform(struct!.authRequestMethod),
    auth_request_post_body: cdktf.stringToTerraform(struct!.authRequestPostBody),
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    auth_user_name: cdktf.stringToTerraform(struct!.authUserName),
    auth_user_password: cdktf.stringToTerraform(struct!.authUserPassword),
    oauth_scheme: cdktf.stringToTerraform(struct!.oauthScheme),
    auth_headers: cdktf.listMapper(apmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersToTerraform, true)(struct!.authHeaders),
  }
}


export function apmSyntheticsMonitorConfigurationReqAuthenticationDetailsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference | ApmSyntheticsMonitorConfigurationReqAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_request_method: {
      value: cdktf.stringToHclTerraform(struct!.authRequestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_request_post_body: {
      value: cdktf.stringToHclTerraform(struct!.authRequestPostBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user_name: {
      value: cdktf.stringToHclTerraform(struct!.authUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user_password: {
      value: cdktf.stringToHclTerraform(struct!.authUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scheme: {
      value: cdktf.stringToHclTerraform(struct!.oauthScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_headers: {
      value: cdktf.listMapperHcl(apmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersToHclTerraform, true)(struct!.authHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfigurationReqAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authRequestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequestMethod = this._authRequestMethod;
    }
    if (this._authRequestPostBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequestPostBody = this._authRequestPostBody;
    }
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._authUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserName = this._authUserName;
    }
    if (this._authUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserPassword = this._authUserPassword;
    }
    if (this._oauthScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScheme = this._oauthScheme;
    }
    if (this._authHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHeaders = this._authHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authRequestMethod = undefined;
      this._authRequestPostBody = undefined;
      this._authToken = undefined;
      this._authUrl = undefined;
      this._authUserName = undefined;
      this._authUserPassword = undefined;
      this._oauthScheme = undefined;
      this._authHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authRequestMethod = value.authRequestMethod;
      this._authRequestPostBody = value.authRequestPostBody;
      this._authToken = value.authToken;
      this._authUrl = value.authUrl;
      this._authUserName = value.authUserName;
      this._authUserPassword = value.authUserPassword;
      this._oauthScheme = value.oauthScheme;
      this._authHeaders.internalValue = value.authHeaders;
    }
  }

  // auth_request_method - computed: true, optional: true, required: false
  private _authRequestMethod?: string; 
  public get authRequestMethod() {
    return this.getStringAttribute('auth_request_method');
  }
  public set authRequestMethod(value: string) {
    this._authRequestMethod = value;
  }
  public resetAuthRequestMethod() {
    this._authRequestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestMethodInput() {
    return this._authRequestMethod;
  }

  // auth_request_post_body - computed: true, optional: true, required: false
  private _authRequestPostBody?: string; 
  public get authRequestPostBody() {
    return this.getStringAttribute('auth_request_post_body');
  }
  public set authRequestPostBody(value: string) {
    this._authRequestPostBody = value;
  }
  public resetAuthRequestPostBody() {
    this._authRequestPostBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestPostBodyInput() {
    return this._authRequestPostBody;
  }

  // auth_token - computed: true, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_url - computed: true, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // auth_user_name - computed: true, optional: true, required: false
  private _authUserName?: string; 
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }
  public set authUserName(value: string) {
    this._authUserName = value;
  }
  public resetAuthUserName() {
    this._authUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserNameInput() {
    return this._authUserName;
  }

  // auth_user_password - computed: true, optional: true, required: false
  private _authUserPassword?: string; 
  public get authUserPassword() {
    return this.getStringAttribute('auth_user_password');
  }
  public set authUserPassword(value: string) {
    this._authUserPassword = value;
  }
  public resetAuthUserPassword() {
    this._authUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserPasswordInput() {
    return this._authUserPassword;
  }

  // oauth_scheme - computed: true, optional: true, required: false
  private _oauthScheme?: string; 
  public get oauthScheme() {
    return this.getStringAttribute('oauth_scheme');
  }
  public set oauthScheme(value: string) {
    this._oauthScheme = value;
  }
  public resetOauthScheme() {
    this._oauthScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthSchemeInput() {
    return this._oauthScheme;
  }

  // auth_headers - computed: false, optional: true, required: false
  private _authHeaders = new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(this, "auth_headers", false);
  public get authHeaders() {
    return this._authHeaders;
  }
  public putAuthHeaders(value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[] | cdktf.IResolvable) {
    this._authHeaders.internalValue = value;
  }
  public resetAuthHeaders() {
    this._authHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeadersInput() {
    return this._authHeaders.internalValue;
  }
}
export interface ApmSyntheticsMonitorConfigurationRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}
  */
  readonly headerValue?: string;
}

export function apmSyntheticsMonitorConfigurationRequestHeadersToTerraform(struct?: ApmSyntheticsMonitorConfigurationRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function apmSyntheticsMonitorConfigurationRequestHeadersToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorConfigurationRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ApmSyntheticsMonitorConfigurationRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorConfigurationRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference {
    return new ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorConfigurationRequestQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}
  */
  readonly paramName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}
  */
  readonly paramValue?: string;
}

export function apmSyntheticsMonitorConfigurationRequestQueryParamsToTerraform(struct?: ApmSyntheticsMonitorConfigurationRequestQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_name: cdktf.stringToTerraform(struct!.paramName),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function apmSyntheticsMonitorConfigurationRequestQueryParamsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationRequestQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorConfigurationRequestQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationRequestQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramName = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramName = value.paramName;
      this._paramValue = value.paramValue;
    }
  }

  // param_name - computed: true, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // param_value - computed: true, optional: true, required: false
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  public resetParamValue() {
    this._paramValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class ApmSyntheticsMonitorConfigurationRequestQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorConfigurationRequestQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference {
    return new ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorConfigurationVerifyTexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}
  */
  readonly text?: string;
}

export function apmSyntheticsMonitorConfigurationVerifyTextsToTerraform(struct?: ApmSyntheticsMonitorConfigurationVerifyTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function apmSyntheticsMonitorConfigurationVerifyTextsToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationVerifyTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorConfigurationVerifyTexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfigurationVerifyTexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class ApmSyntheticsMonitorConfigurationVerifyTextsList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorConfigurationVerifyTexts[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference {
    return new ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}
  */
  readonly databaseConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}
  */
  readonly databaseRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}
  */
  readonly downloadSizeLimitInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}
  */
  readonly ftpProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}
  */
  readonly ftpRequestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}
  */
  readonly isActiveMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}
  */
  readonly isCertificateValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}
  */
  readonly isDefaultSnapshotEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}
  */
  readonly isFailureRetried?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}
  */
  readonly isQueryRecursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}
  */
  readonly isRedirectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}
  */
  readonly nameServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}
  */
  readonly recordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}
  */
  readonly reqAuthenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}
  */
  readonly requestPostBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}
  */
  readonly uploadFileSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}
  */
  readonly verifyResponseCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}
  */
  readonly verifyResponseContent?: string;
  /**
  * client_certificate_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#client_certificate_details ApmSyntheticsMonitor#client_certificate_details}
  */
  readonly clientCertificateDetails?: ApmSyntheticsMonitorConfigurationClientCertificateDetails;
  /**
  * database_authentication_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_authentication_details ApmSyntheticsMonitor#database_authentication_details}
  */
  readonly databaseAuthenticationDetails?: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails;
  /**
  * database_wallet_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#database_wallet_details ApmSyntheticsMonitor#database_wallet_details}
  */
  readonly databaseWalletDetails?: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails;
  /**
  * dns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#dns_configuration ApmSyntheticsMonitor#dns_configuration}
  */
  readonly dnsConfiguration?: ApmSyntheticsMonitorConfigurationDnsConfiguration;
  /**
  * ftp_basic_authentication_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#ftp_basic_authentication_details ApmSyntheticsMonitor#ftp_basic_authentication_details}
  */
  readonly ftpBasicAuthenticationDetails?: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#network_configuration ApmSyntheticsMonitor#network_configuration}
  */
  readonly networkConfiguration?: ApmSyntheticsMonitorConfigurationNetworkConfiguration;
  /**
  * req_authentication_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#req_authentication_details ApmSyntheticsMonitor#req_authentication_details}
  */
  readonly reqAuthenticationDetails?: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#request_headers ApmSyntheticsMonitor#request_headers}
  */
  readonly requestHeaders?: ApmSyntheticsMonitorConfigurationRequestHeaders[] | cdktf.IResolvable;
  /**
  * request_query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#request_query_params ApmSyntheticsMonitor#request_query_params}
  */
  readonly requestQueryParams?: ApmSyntheticsMonitorConfigurationRequestQueryParams[] | cdktf.IResolvable;
  /**
  * verify_texts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#verify_texts ApmSyntheticsMonitor#verify_texts}
  */
  readonly verifyTexts?: ApmSyntheticsMonitorConfigurationVerifyTexts[] | cdktf.IResolvable;
}

export function apmSyntheticsMonitorConfigurationToTerraform(struct?: ApmSyntheticsMonitorConfigurationOutputReference | ApmSyntheticsMonitorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_type: cdktf.stringToTerraform(struct!.configType),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    database_connection_type: cdktf.stringToTerraform(struct!.databaseConnectionType),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    download_size_limit_in_bytes: cdktf.numberToTerraform(struct!.downloadSizeLimitInBytes),
    ftp_protocol: cdktf.stringToTerraform(struct!.ftpProtocol),
    ftp_request_type: cdktf.stringToTerraform(struct!.ftpRequestType),
    is_active_mode: cdktf.booleanToTerraform(struct!.isActiveMode),
    is_certificate_validation_enabled: cdktf.booleanToTerraform(struct!.isCertificateValidationEnabled),
    is_default_snapshot_enabled: cdktf.booleanToTerraform(struct!.isDefaultSnapshotEnabled),
    is_failure_retried: cdktf.booleanToTerraform(struct!.isFailureRetried),
    is_query_recursive: cdktf.booleanToTerraform(struct!.isQueryRecursive),
    is_redirection_enabled: cdktf.booleanToTerraform(struct!.isRedirectionEnabled),
    name_server: cdktf.stringToTerraform(struct!.nameServer),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    req_authentication_scheme: cdktf.stringToTerraform(struct!.reqAuthenticationScheme),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_post_body: cdktf.stringToTerraform(struct!.requestPostBody),
    upload_file_size_in_bytes: cdktf.numberToTerraform(struct!.uploadFileSizeInBytes),
    verify_response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifyResponseCodes),
    verify_response_content: cdktf.stringToTerraform(struct!.verifyResponseContent),
    client_certificate_details: apmSyntheticsMonitorConfigurationClientCertificateDetailsToTerraform(struct!.clientCertificateDetails),
    database_authentication_details: apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsToTerraform(struct!.databaseAuthenticationDetails),
    database_wallet_details: apmSyntheticsMonitorConfigurationDatabaseWalletDetailsToTerraform(struct!.databaseWalletDetails),
    dns_configuration: apmSyntheticsMonitorConfigurationDnsConfigurationToTerraform(struct!.dnsConfiguration),
    ftp_basic_authentication_details: apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsToTerraform(struct!.ftpBasicAuthenticationDetails),
    network_configuration: apmSyntheticsMonitorConfigurationNetworkConfigurationToTerraform(struct!.networkConfiguration),
    req_authentication_details: apmSyntheticsMonitorConfigurationReqAuthenticationDetailsToTerraform(struct!.reqAuthenticationDetails),
    request_headers: cdktf.listMapper(apmSyntheticsMonitorConfigurationRequestHeadersToTerraform, true)(struct!.requestHeaders),
    request_query_params: cdktf.listMapper(apmSyntheticsMonitorConfigurationRequestQueryParamsToTerraform, true)(struct!.requestQueryParams),
    verify_texts: cdktf.listMapper(apmSyntheticsMonitorConfigurationVerifyTextsToTerraform, true)(struct!.verifyTexts),
  }
}


export function apmSyntheticsMonitorConfigurationToHclTerraform(struct?: ApmSyntheticsMonitorConfigurationOutputReference | ApmSyntheticsMonitorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_size_limit_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.downloadSizeLimitInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftp_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ftpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_request_type: {
      value: cdktf.stringToHclTerraform(struct!.ftpRequestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active_mode: {
      value: cdktf.booleanToHclTerraform(struct!.isActiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_certificate_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCertificateValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_default_snapshot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDefaultSnapshotEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_failure_retried: {
      value: cdktf.booleanToHclTerraform(struct!.isFailureRetried),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_query_recursive: {
      value: cdktf.booleanToHclTerraform(struct!.isQueryRecursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_redirection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRedirectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_server: {
      value: cdktf.stringToHclTerraform(struct!.nameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    req_authentication_scheme: {
      value: cdktf.stringToHclTerraform(struct!.reqAuthenticationScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_post_body: {
      value: cdktf.stringToHclTerraform(struct!.requestPostBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_file_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.uploadFileSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_response_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifyResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_response_content: {
      value: cdktf.stringToHclTerraform(struct!.verifyResponseContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_details: {
      value: apmSyntheticsMonitorConfigurationClientCertificateDetailsToHclTerraform(struct!.clientCertificateDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationClientCertificateDetailsList",
    },
    database_authentication_details: {
      value: apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsToHclTerraform(struct!.databaseAuthenticationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList",
    },
    database_wallet_details: {
      value: apmSyntheticsMonitorConfigurationDatabaseWalletDetailsToHclTerraform(struct!.databaseWalletDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList",
    },
    dns_configuration: {
      value: apmSyntheticsMonitorConfigurationDnsConfigurationToHclTerraform(struct!.dnsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationDnsConfigurationList",
    },
    ftp_basic_authentication_details: {
      value: apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsToHclTerraform(struct!.ftpBasicAuthenticationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList",
    },
    network_configuration: {
      value: apmSyntheticsMonitorConfigurationNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationNetworkConfigurationList",
    },
    req_authentication_details: {
      value: apmSyntheticsMonitorConfigurationReqAuthenticationDetailsToHclTerraform(struct!.reqAuthenticationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList",
    },
    request_headers: {
      value: cdktf.listMapperHcl(apmSyntheticsMonitorConfigurationRequestHeadersToHclTerraform, true)(struct!.requestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationRequestHeadersList",
    },
    request_query_params: {
      value: cdktf.listMapperHcl(apmSyntheticsMonitorConfigurationRequestQueryParamsToHclTerraform, true)(struct!.requestQueryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationRequestQueryParamsList",
    },
    verify_texts: {
      value: cdktf.listMapperHcl(apmSyntheticsMonitorConfigurationVerifyTextsToHclTerraform, true)(struct!.verifyTexts),
      isBlock: true,
      type: "list",
      storageClassType: "ApmSyntheticsMonitorConfigurationVerifyTextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._databaseConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnectionType = this._databaseConnectionType;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._downloadSizeLimitInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadSizeLimitInBytes = this._downloadSizeLimitInBytes;
    }
    if (this._ftpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpProtocol = this._ftpProtocol;
    }
    if (this._ftpRequestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpRequestType = this._ftpRequestType;
    }
    if (this._isActiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActiveMode = this._isActiveMode;
    }
    if (this._isCertificateValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCertificateValidationEnabled = this._isCertificateValidationEnabled;
    }
    if (this._isDefaultSnapshotEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefaultSnapshotEnabled = this._isDefaultSnapshotEnabled;
    }
    if (this._isFailureRetried !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFailureRetried = this._isFailureRetried;
    }
    if (this._isQueryRecursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isQueryRecursive = this._isQueryRecursive;
    }
    if (this._isRedirectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRedirectionEnabled = this._isRedirectionEnabled;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._reqAuthenticationScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqAuthenticationScheme = this._reqAuthenticationScheme;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestPostBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPostBody = this._requestPostBody;
    }
    if (this._uploadFileSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadFileSizeInBytes = this._uploadFileSizeInBytes;
    }
    if (this._verifyResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyResponseCodes = this._verifyResponseCodes;
    }
    if (this._verifyResponseContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyResponseContent = this._verifyResponseContent;
    }
    if (this._clientCertificateDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateDetails = this._clientCertificateDetails?.internalValue;
    }
    if (this._databaseAuthenticationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAuthenticationDetails = this._databaseAuthenticationDetails?.internalValue;
    }
    if (this._databaseWalletDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseWalletDetails = this._databaseWalletDetails?.internalValue;
    }
    if (this._dnsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfiguration = this._dnsConfiguration?.internalValue;
    }
    if (this._ftpBasicAuthenticationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpBasicAuthenticationDetails = this._ftpBasicAuthenticationDetails?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._reqAuthenticationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqAuthenticationDetails = this._reqAuthenticationDetails?.internalValue;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._requestQueryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQueryParams = this._requestQueryParams?.internalValue;
    }
    if (this._verifyTexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTexts = this._verifyTexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configType = undefined;
      this._connectionString = undefined;
      this._databaseConnectionType = undefined;
      this._databaseRole = undefined;
      this._databaseType = undefined;
      this._downloadSizeLimitInBytes = undefined;
      this._ftpProtocol = undefined;
      this._ftpRequestType = undefined;
      this._isActiveMode = undefined;
      this._isCertificateValidationEnabled = undefined;
      this._isDefaultSnapshotEnabled = undefined;
      this._isFailureRetried = undefined;
      this._isQueryRecursive = undefined;
      this._isRedirectionEnabled = undefined;
      this._nameServer = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._recordType = undefined;
      this._reqAuthenticationScheme = undefined;
      this._requestMethod = undefined;
      this._requestPostBody = undefined;
      this._uploadFileSizeInBytes = undefined;
      this._verifyResponseCodes = undefined;
      this._verifyResponseContent = undefined;
      this._clientCertificateDetails.internalValue = undefined;
      this._databaseAuthenticationDetails.internalValue = undefined;
      this._databaseWalletDetails.internalValue = undefined;
      this._dnsConfiguration.internalValue = undefined;
      this._ftpBasicAuthenticationDetails.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._reqAuthenticationDetails.internalValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._requestQueryParams.internalValue = undefined;
      this._verifyTexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configType = value.configType;
      this._connectionString = value.connectionString;
      this._databaseConnectionType = value.databaseConnectionType;
      this._databaseRole = value.databaseRole;
      this._databaseType = value.databaseType;
      this._downloadSizeLimitInBytes = value.downloadSizeLimitInBytes;
      this._ftpProtocol = value.ftpProtocol;
      this._ftpRequestType = value.ftpRequestType;
      this._isActiveMode = value.isActiveMode;
      this._isCertificateValidationEnabled = value.isCertificateValidationEnabled;
      this._isDefaultSnapshotEnabled = value.isDefaultSnapshotEnabled;
      this._isFailureRetried = value.isFailureRetried;
      this._isQueryRecursive = value.isQueryRecursive;
      this._isRedirectionEnabled = value.isRedirectionEnabled;
      this._nameServer = value.nameServer;
      this._protocol = value.protocol;
      this._query = value.query;
      this._recordType = value.recordType;
      this._reqAuthenticationScheme = value.reqAuthenticationScheme;
      this._requestMethod = value.requestMethod;
      this._requestPostBody = value.requestPostBody;
      this._uploadFileSizeInBytes = value.uploadFileSizeInBytes;
      this._verifyResponseCodes = value.verifyResponseCodes;
      this._verifyResponseContent = value.verifyResponseContent;
      this._clientCertificateDetails.internalValue = value.clientCertificateDetails;
      this._databaseAuthenticationDetails.internalValue = value.databaseAuthenticationDetails;
      this._databaseWalletDetails.internalValue = value.databaseWalletDetails;
      this._dnsConfiguration.internalValue = value.dnsConfiguration;
      this._ftpBasicAuthenticationDetails.internalValue = value.ftpBasicAuthenticationDetails;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._reqAuthenticationDetails.internalValue = value.reqAuthenticationDetails;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._requestQueryParams.internalValue = value.requestQueryParams;
      this._verifyTexts.internalValue = value.verifyTexts;
    }
  }

  // config_type - computed: true, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // database_connection_type - computed: true, optional: true, required: false
  private _databaseConnectionType?: string; 
  public get databaseConnectionType() {
    return this.getStringAttribute('database_connection_type');
  }
  public set databaseConnectionType(value: string) {
    this._databaseConnectionType = value;
  }
  public resetDatabaseConnectionType() {
    this._databaseConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionTypeInput() {
    return this._databaseConnectionType;
  }

  // database_role - computed: true, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // download_size_limit_in_bytes - computed: true, optional: true, required: false
  private _downloadSizeLimitInBytes?: number; 
  public get downloadSizeLimitInBytes() {
    return this.getNumberAttribute('download_size_limit_in_bytes');
  }
  public set downloadSizeLimitInBytes(value: number) {
    this._downloadSizeLimitInBytes = value;
  }
  public resetDownloadSizeLimitInBytes() {
    this._downloadSizeLimitInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadSizeLimitInBytesInput() {
    return this._downloadSizeLimitInBytes;
  }

  // ftp_protocol - computed: true, optional: true, required: false
  private _ftpProtocol?: string; 
  public get ftpProtocol() {
    return this.getStringAttribute('ftp_protocol');
  }
  public set ftpProtocol(value: string) {
    this._ftpProtocol = value;
  }
  public resetFtpProtocol() {
    this._ftpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpProtocolInput() {
    return this._ftpProtocol;
  }

  // ftp_request_type - computed: true, optional: true, required: false
  private _ftpRequestType?: string; 
  public get ftpRequestType() {
    return this.getStringAttribute('ftp_request_type');
  }
  public set ftpRequestType(value: string) {
    this._ftpRequestType = value;
  }
  public resetFtpRequestType() {
    this._ftpRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpRequestTypeInput() {
    return this._ftpRequestType;
  }

  // is_active_mode - computed: true, optional: true, required: false
  private _isActiveMode?: boolean | cdktf.IResolvable; 
  public get isActiveMode() {
    return this.getBooleanAttribute('is_active_mode');
  }
  public set isActiveMode(value: boolean | cdktf.IResolvable) {
    this._isActiveMode = value;
  }
  public resetIsActiveMode() {
    this._isActiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveModeInput() {
    return this._isActiveMode;
  }

  // is_certificate_validation_enabled - computed: true, optional: true, required: false
  private _isCertificateValidationEnabled?: boolean | cdktf.IResolvable; 
  public get isCertificateValidationEnabled() {
    return this.getBooleanAttribute('is_certificate_validation_enabled');
  }
  public set isCertificateValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._isCertificateValidationEnabled = value;
  }
  public resetIsCertificateValidationEnabled() {
    this._isCertificateValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCertificateValidationEnabledInput() {
    return this._isCertificateValidationEnabled;
  }

  // is_default_snapshot_enabled - computed: true, optional: true, required: false
  private _isDefaultSnapshotEnabled?: boolean | cdktf.IResolvable; 
  public get isDefaultSnapshotEnabled() {
    return this.getBooleanAttribute('is_default_snapshot_enabled');
  }
  public set isDefaultSnapshotEnabled(value: boolean | cdktf.IResolvable) {
    this._isDefaultSnapshotEnabled = value;
  }
  public resetIsDefaultSnapshotEnabled() {
    this._isDefaultSnapshotEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultSnapshotEnabledInput() {
    return this._isDefaultSnapshotEnabled;
  }

  // is_failure_retried - computed: true, optional: true, required: false
  private _isFailureRetried?: boolean | cdktf.IResolvable; 
  public get isFailureRetried() {
    return this.getBooleanAttribute('is_failure_retried');
  }
  public set isFailureRetried(value: boolean | cdktf.IResolvable) {
    this._isFailureRetried = value;
  }
  public resetIsFailureRetried() {
    this._isFailureRetried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFailureRetriedInput() {
    return this._isFailureRetried;
  }

  // is_query_recursive - computed: true, optional: true, required: false
  private _isQueryRecursive?: boolean | cdktf.IResolvable; 
  public get isQueryRecursive() {
    return this.getBooleanAttribute('is_query_recursive');
  }
  public set isQueryRecursive(value: boolean | cdktf.IResolvable) {
    this._isQueryRecursive = value;
  }
  public resetIsQueryRecursive() {
    this._isQueryRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isQueryRecursiveInput() {
    return this._isQueryRecursive;
  }

  // is_redirection_enabled - computed: true, optional: true, required: false
  private _isRedirectionEnabled?: boolean | cdktf.IResolvable; 
  public get isRedirectionEnabled() {
    return this.getBooleanAttribute('is_redirection_enabled');
  }
  public set isRedirectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isRedirectionEnabled = value;
  }
  public resetIsRedirectionEnabled() {
    this._isRedirectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedirectionEnabledInput() {
    return this._isRedirectionEnabled;
  }

  // name_server - computed: true, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // record_type - computed: true, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // req_authentication_scheme - computed: true, optional: true, required: false
  private _reqAuthenticationScheme?: string; 
  public get reqAuthenticationScheme() {
    return this.getStringAttribute('req_authentication_scheme');
  }
  public set reqAuthenticationScheme(value: string) {
    this._reqAuthenticationScheme = value;
  }
  public resetReqAuthenticationScheme() {
    this._reqAuthenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqAuthenticationSchemeInput() {
    return this._reqAuthenticationScheme;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_post_body - computed: true, optional: true, required: false
  private _requestPostBody?: string; 
  public get requestPostBody() {
    return this.getStringAttribute('request_post_body');
  }
  public set requestPostBody(value: string) {
    this._requestPostBody = value;
  }
  public resetRequestPostBody() {
    this._requestPostBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPostBodyInput() {
    return this._requestPostBody;
  }

  // upload_file_size_in_bytes - computed: true, optional: true, required: false
  private _uploadFileSizeInBytes?: number; 
  public get uploadFileSizeInBytes() {
    return this.getNumberAttribute('upload_file_size_in_bytes');
  }
  public set uploadFileSizeInBytes(value: number) {
    this._uploadFileSizeInBytes = value;
  }
  public resetUploadFileSizeInBytes() {
    this._uploadFileSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFileSizeInBytesInput() {
    return this._uploadFileSizeInBytes;
  }

  // verify_response_codes - computed: true, optional: true, required: false
  private _verifyResponseCodes?: string[]; 
  public get verifyResponseCodes() {
    return this.getListAttribute('verify_response_codes');
  }
  public set verifyResponseCodes(value: string[]) {
    this._verifyResponseCodes = value;
  }
  public resetVerifyResponseCodes() {
    this._verifyResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyResponseCodesInput() {
    return this._verifyResponseCodes;
  }

  // verify_response_content - computed: true, optional: true, required: false
  private _verifyResponseContent?: string; 
  public get verifyResponseContent() {
    return this.getStringAttribute('verify_response_content');
  }
  public set verifyResponseContent(value: string) {
    this._verifyResponseContent = value;
  }
  public resetVerifyResponseContent() {
    this._verifyResponseContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyResponseContentInput() {
    return this._verifyResponseContent;
  }

  // client_certificate_details - computed: false, optional: true, required: false
  private _clientCertificateDetails = new ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(this, "client_certificate_details");
  public get clientCertificateDetails() {
    return this._clientCertificateDetails;
  }
  public putClientCertificateDetails(value: ApmSyntheticsMonitorConfigurationClientCertificateDetails) {
    this._clientCertificateDetails.internalValue = value;
  }
  public resetClientCertificateDetails() {
    this._clientCertificateDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateDetailsInput() {
    return this._clientCertificateDetails.internalValue;
  }

  // database_authentication_details - computed: false, optional: true, required: false
  private _databaseAuthenticationDetails = new ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(this, "database_authentication_details");
  public get databaseAuthenticationDetails() {
    return this._databaseAuthenticationDetails;
  }
  public putDatabaseAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails) {
    this._databaseAuthenticationDetails.internalValue = value;
  }
  public resetDatabaseAuthenticationDetails() {
    this._databaseAuthenticationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAuthenticationDetailsInput() {
    return this._databaseAuthenticationDetails.internalValue;
  }

  // database_wallet_details - computed: false, optional: true, required: false
  private _databaseWalletDetails = new ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(this, "database_wallet_details");
  public get databaseWalletDetails() {
    return this._databaseWalletDetails;
  }
  public putDatabaseWalletDetails(value: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails) {
    this._databaseWalletDetails.internalValue = value;
  }
  public resetDatabaseWalletDetails() {
    this._databaseWalletDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseWalletDetailsInput() {
    return this._databaseWalletDetails.internalValue;
  }

  // dns_configuration - computed: false, optional: true, required: false
  private _dnsConfiguration = new ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(this, "dns_configuration");
  public get dnsConfiguration() {
    return this._dnsConfiguration;
  }
  public putDnsConfiguration(value: ApmSyntheticsMonitorConfigurationDnsConfiguration) {
    this._dnsConfiguration.internalValue = value;
  }
  public resetDnsConfiguration() {
    this._dnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigurationInput() {
    return this._dnsConfiguration.internalValue;
  }

  // ftp_basic_authentication_details - computed: false, optional: true, required: false
  private _ftpBasicAuthenticationDetails = new ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(this, "ftp_basic_authentication_details");
  public get ftpBasicAuthenticationDetails() {
    return this._ftpBasicAuthenticationDetails;
  }
  public putFtpBasicAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails) {
    this._ftpBasicAuthenticationDetails.internalValue = value;
  }
  public resetFtpBasicAuthenticationDetails() {
    this._ftpBasicAuthenticationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpBasicAuthenticationDetailsInput() {
    return this._ftpBasicAuthenticationDetails.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: ApmSyntheticsMonitorConfigurationNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // req_authentication_details - computed: false, optional: true, required: false
  private _reqAuthenticationDetails = new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(this, "req_authentication_details");
  public get reqAuthenticationDetails() {
    return this._reqAuthenticationDetails;
  }
  public putReqAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails) {
    this._reqAuthenticationDetails.internalValue = value;
  }
  public resetReqAuthenticationDetails() {
    this._reqAuthenticationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqAuthenticationDetailsInput() {
    return this._reqAuthenticationDetails.internalValue;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new ApmSyntheticsMonitorConfigurationRequestHeadersList(this, "request_headers", false);
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: ApmSyntheticsMonitorConfigurationRequestHeaders[] | cdktf.IResolvable) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // request_query_params - computed: false, optional: true, required: false
  private _requestQueryParams = new ApmSyntheticsMonitorConfigurationRequestQueryParamsList(this, "request_query_params", false);
  public get requestQueryParams() {
    return this._requestQueryParams;
  }
  public putRequestQueryParams(value: ApmSyntheticsMonitorConfigurationRequestQueryParams[] | cdktf.IResolvable) {
    this._requestQueryParams.internalValue = value;
  }
  public resetRequestQueryParams() {
    this._requestQueryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryParamsInput() {
    return this._requestQueryParams.internalValue;
  }

  // verify_texts - computed: false, optional: true, required: false
  private _verifyTexts = new ApmSyntheticsMonitorConfigurationVerifyTextsList(this, "verify_texts", false);
  public get verifyTexts() {
    return this._verifyTexts;
  }
  public putVerifyTexts(value: ApmSyntheticsMonitorConfigurationVerifyTexts[] | cdktf.IResolvable) {
    this._verifyTexts.internalValue = value;
  }
  public resetVerifyTexts() {
    this._verifyTexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTextsInput() {
    return this._verifyTexts.internalValue;
  }
}
export interface ApmSyntheticsMonitorMaintenanceWindowSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}
  */
  readonly timeEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}
  */
  readonly timeStarted?: string;
}

export function apmSyntheticsMonitorMaintenanceWindowScheduleToTerraform(struct?: ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference | ApmSyntheticsMonitorMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_ended: cdktf.stringToTerraform(struct!.timeEnded),
    time_started: cdktf.stringToTerraform(struct!.timeStarted),
  }
}


export function apmSyntheticsMonitorMaintenanceWindowScheduleToHclTerraform(struct?: ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference | ApmSyntheticsMonitorMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_ended: {
      value: cdktf.stringToHclTerraform(struct!.timeEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_started: {
      value: cdktf.stringToHclTerraform(struct!.timeStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmSyntheticsMonitorMaintenanceWindowSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeEnded = this._timeEnded;
    }
    if (this._timeStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStarted = this._timeStarted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorMaintenanceWindowSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeEnded = undefined;
      this._timeStarted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeEnded = value.timeEnded;
      this._timeStarted = value.timeStarted;
    }
  }

  // time_ended - computed: true, optional: true, required: false
  private _timeEnded?: string; 
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }
  public set timeEnded(value: string) {
    this._timeEnded = value;
  }
  public resetTimeEnded() {
    this._timeEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndedInput() {
    return this._timeEnded;
  }

  // time_started - computed: true, optional: true, required: false
  private _timeStarted?: string; 
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
  public set timeStarted(value: string) {
    this._timeStarted = value;
  }
  public resetTimeStarted() {
    this._timeStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartedInput() {
    return this._timeStarted;
  }
}
export interface ApmSyntheticsMonitorScriptParametersMonitorScriptParameter {
}

export function apmSyntheticsMonitorScriptParametersMonitorScriptParameterToTerraform(struct?: ApmSyntheticsMonitorScriptParametersMonitorScriptParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmSyntheticsMonitorScriptParametersMonitorScriptParameterToHclTerraform(struct?: ApmSyntheticsMonitorScriptParametersMonitorScriptParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorScriptParametersMonitorScriptParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorScriptParametersMonitorScriptParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_name - computed: true, optional: false, required: false
  public get paramName() {
    return this.getStringAttribute('param_name');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList extends cdktf.ComplexList {

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
  public get(index: number): ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference {
    return new ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorScriptParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}
  */
  readonly paramName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}
  */
  readonly paramValue: string;
}

export function apmSyntheticsMonitorScriptParametersToTerraform(struct?: ApmSyntheticsMonitorScriptParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_name: cdktf.stringToTerraform(struct!.paramName),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function apmSyntheticsMonitorScriptParametersToHclTerraform(struct?: ApmSyntheticsMonitorScriptParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorScriptParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorScriptParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorScriptParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramName = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramName = value.paramName;
      this._paramValue = value.paramValue;
    }
  }

  // is_overwritten - computed: true, optional: false, required: false
  public get isOverwritten() {
    return this.getBooleanAttribute('is_overwritten');
  }

  // is_secret - computed: true, optional: false, required: false
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }

  // monitor_script_parameter - computed: true, optional: false, required: false
  private _monitorScriptParameter = new ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(this, "monitor_script_parameter", false);
  public get monitorScriptParameter() {
    return this._monitorScriptParameter;
  }

  // param_name - computed: false, optional: false, required: true
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class ApmSyntheticsMonitorScriptParametersList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorScriptParameters[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorScriptParametersOutputReference {
    return new ApmSyntheticsMonitorScriptParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}
  */
  readonly update?: string;
}

export function apmSyntheticsMonitorTimeoutsToTerraform(struct?: ApmSyntheticsMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apmSyntheticsMonitorTimeoutsToHclTerraform(struct?: ApmSyntheticsMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApmSyntheticsMonitorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ApmSyntheticsMonitorVantagePoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}
  */
  readonly name: string;
}

export function apmSyntheticsMonitorVantagePointsToTerraform(struct?: ApmSyntheticsMonitorVantagePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apmSyntheticsMonitorVantagePointsToHclTerraform(struct?: ApmSyntheticsMonitorVantagePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmSyntheticsMonitorVantagePointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsMonitorVantagePoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsMonitorVantagePoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // worker_list - computed: true, optional: false, required: false
  public get workerList() {
    return this.getListAttribute('worker_list');
  }
}

export class ApmSyntheticsMonitorVantagePointsList extends cdktf.ComplexList {
  public internalValue? : ApmSyntheticsMonitorVantagePoints[] | cdktf.IResolvable

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
  public get(index: number): ApmSyntheticsMonitorVantagePointsOutputReference {
    return new ApmSyntheticsMonitorVantagePointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor oci_apm_synthetics_monitor}
*/
export class ApmSyntheticsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmSyntheticsMonitor to import
  * @param importFromId The id of the existing ApmSyntheticsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmSyntheticsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apm_synthetics_monitor oci_apm_synthetics_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmSyntheticsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: ApmSyntheticsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_monitor',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._batchIntervalInSeconds = config.batchIntervalInSeconds;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isIpv6 = config.isIpv6;
    this._isRunNow = config.isRunNow;
    this._isRunOnce = config.isRunOnce;
    this._monitorType = config.monitorType;
    this._repeatIntervalInSeconds = config.repeatIntervalInSeconds;
    this._schedulingPolicy = config.schedulingPolicy;
    this._scriptId = config.scriptId;
    this._scriptName = config.scriptName;
    this._status = config.status;
    this._target = config.target;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._availabilityConfiguration.internalValue = config.availabilityConfiguration;
    this._configuration.internalValue = config.configuration;
    this._maintenanceWindowSchedule.internalValue = config.maintenanceWindowSchedule;
    this._scriptParameters.internalValue = config.scriptParameters;
    this._timeouts.internalValue = config.timeouts;
    this._vantagePoints.internalValue = config.vantagePoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // batch_interval_in_seconds - computed: true, optional: true, required: false
  private _batchIntervalInSeconds?: number; 
  public get batchIntervalInSeconds() {
    return this.getNumberAttribute('batch_interval_in_seconds');
  }
  public set batchIntervalInSeconds(value: number) {
    this._batchIntervalInSeconds = value;
  }
  public resetBatchIntervalInSeconds() {
    this._batchIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchIntervalInSecondsInput() {
    return this._batchIntervalInSeconds;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_ipv6 - computed: true, optional: true, required: false
  private _isIpv6?: boolean | cdktf.IResolvable; 
  public get isIpv6() {
    return this.getBooleanAttribute('is_ipv6');
  }
  public set isIpv6(value: boolean | cdktf.IResolvable) {
    this._isIpv6 = value;
  }
  public resetIsIpv6() {
    this._isIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6Input() {
    return this._isIpv6;
  }

  // is_run_now - computed: true, optional: true, required: false
  private _isRunNow?: boolean | cdktf.IResolvable; 
  public get isRunNow() {
    return this.getBooleanAttribute('is_run_now');
  }
  public set isRunNow(value: boolean | cdktf.IResolvable) {
    this._isRunNow = value;
  }
  public resetIsRunNow() {
    this._isRunNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRunNowInput() {
    return this._isRunNow;
  }

  // is_run_once - computed: true, optional: true, required: false
  private _isRunOnce?: boolean | cdktf.IResolvable; 
  public get isRunOnce() {
    return this.getBooleanAttribute('is_run_once');
  }
  public set isRunOnce(value: boolean | cdktf.IResolvable) {
    this._isRunOnce = value;
  }
  public resetIsRunOnce() {
    this._isRunOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRunOnceInput() {
    return this._isRunOnce;
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // repeat_interval_in_seconds - computed: false, optional: false, required: true
  private _repeatIntervalInSeconds?: number; 
  public get repeatIntervalInSeconds() {
    return this.getNumberAttribute('repeat_interval_in_seconds');
  }
  public set repeatIntervalInSeconds(value: number) {
    this._repeatIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInSecondsInput() {
    return this._repeatIntervalInSeconds;
  }

  // scheduling_policy - computed: true, optional: true, required: false
  private _schedulingPolicy?: string; 
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }
  public set schedulingPolicy(value: string) {
    this._schedulingPolicy = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy;
  }

  // script_id - computed: true, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // script_name - computed: true, optional: true, required: false
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  public resetScriptName() {
    this._scriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // vantage_point_count - computed: true, optional: false, required: false
  public get vantagePointCount() {
    return this.getNumberAttribute('vantage_point_count');
  }

  // availability_configuration - computed: false, optional: true, required: false
  private _availabilityConfiguration = new ApmSyntheticsMonitorAvailabilityConfigurationOutputReference(this, "availability_configuration");
  public get availabilityConfiguration() {
    return this._availabilityConfiguration;
  }
  public putAvailabilityConfiguration(value: ApmSyntheticsMonitorAvailabilityConfiguration) {
    this._availabilityConfiguration.internalValue = value;
  }
  public resetAvailabilityConfiguration() {
    this._availabilityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityConfigurationInput() {
    return this._availabilityConfiguration.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ApmSyntheticsMonitorConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ApmSyntheticsMonitorConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // maintenance_window_schedule - computed: false, optional: true, required: false
  private _maintenanceWindowSchedule = new ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(this, "maintenance_window_schedule");
  public get maintenanceWindowSchedule() {
    return this._maintenanceWindowSchedule;
  }
  public putMaintenanceWindowSchedule(value: ApmSyntheticsMonitorMaintenanceWindowSchedule) {
    this._maintenanceWindowSchedule.internalValue = value;
  }
  public resetMaintenanceWindowSchedule() {
    this._maintenanceWindowSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowScheduleInput() {
    return this._maintenanceWindowSchedule.internalValue;
  }

  // script_parameters - computed: false, optional: true, required: false
  private _scriptParameters = new ApmSyntheticsMonitorScriptParametersList(this, "script_parameters", false);
  public get scriptParameters() {
    return this._scriptParameters;
  }
  public putScriptParameters(value: ApmSyntheticsMonitorScriptParameters[] | cdktf.IResolvable) {
    this._scriptParameters.internalValue = value;
  }
  public resetScriptParameters() {
    this._scriptParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptParametersInput() {
    return this._scriptParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApmSyntheticsMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApmSyntheticsMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vantage_points - computed: false, optional: false, required: true
  private _vantagePoints = new ApmSyntheticsMonitorVantagePointsList(this, "vantage_points", false);
  public get vantagePoints() {
    return this._vantagePoints;
  }
  public putVantagePoints(value: ApmSyntheticsMonitorVantagePoints[] | cdktf.IResolvable) {
    this._vantagePoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vantagePointsInput() {
    return this._vantagePoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      batch_interval_in_seconds: cdktf.numberToTerraform(this._batchIntervalInSeconds),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_ipv6: cdktf.booleanToTerraform(this._isIpv6),
      is_run_now: cdktf.booleanToTerraform(this._isRunNow),
      is_run_once: cdktf.booleanToTerraform(this._isRunOnce),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      repeat_interval_in_seconds: cdktf.numberToTerraform(this._repeatIntervalInSeconds),
      scheduling_policy: cdktf.stringToTerraform(this._schedulingPolicy),
      script_id: cdktf.stringToTerraform(this._scriptId),
      script_name: cdktf.stringToTerraform(this._scriptName),
      status: cdktf.stringToTerraform(this._status),
      target: cdktf.stringToTerraform(this._target),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      availability_configuration: apmSyntheticsMonitorAvailabilityConfigurationToTerraform(this._availabilityConfiguration.internalValue),
      configuration: apmSyntheticsMonitorConfigurationToTerraform(this._configuration.internalValue),
      maintenance_window_schedule: apmSyntheticsMonitorMaintenanceWindowScheduleToTerraform(this._maintenanceWindowSchedule.internalValue),
      script_parameters: cdktf.listMapper(apmSyntheticsMonitorScriptParametersToTerraform, true)(this._scriptParameters.internalValue),
      timeouts: apmSyntheticsMonitorTimeoutsToTerraform(this._timeouts.internalValue),
      vantage_points: cdktf.listMapper(apmSyntheticsMonitorVantagePointsToTerraform, true)(this._vantagePoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._batchIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ipv6: {
        value: cdktf.booleanToHclTerraform(this._isIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_run_now: {
        value: cdktf.booleanToHclTerraform(this._isRunNow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_run_once: {
        value: cdktf.booleanToHclTerraform(this._isRunOnce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_type: {
        value: cdktf.stringToHclTerraform(this._monitorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._repeatIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduling_policy: {
        value: cdktf.stringToHclTerraform(this._schedulingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_configuration: {
        value: apmSyntheticsMonitorAvailabilityConfigurationToHclTerraform(this._availabilityConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmSyntheticsMonitorAvailabilityConfigurationList",
      },
      configuration: {
        value: apmSyntheticsMonitorConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmSyntheticsMonitorConfigurationList",
      },
      maintenance_window_schedule: {
        value: apmSyntheticsMonitorMaintenanceWindowScheduleToHclTerraform(this._maintenanceWindowSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmSyntheticsMonitorMaintenanceWindowScheduleList",
      },
      script_parameters: {
        value: cdktf.listMapperHcl(apmSyntheticsMonitorScriptParametersToHclTerraform, true)(this._scriptParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmSyntheticsMonitorScriptParametersList",
      },
      timeouts: {
        value: apmSyntheticsMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApmSyntheticsMonitorTimeouts",
      },
      vantage_points: {
        value: cdktf.listMapperHcl(apmSyntheticsMonitorVantagePointsToHclTerraform, true)(this._vantagePoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmSyntheticsMonitorVantagePointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
