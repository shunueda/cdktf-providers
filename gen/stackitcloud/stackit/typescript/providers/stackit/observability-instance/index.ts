// https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservabilityInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access control list for this instance. Each entry is an IP address range that is permitted to access, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#acl ObservabilityInstance#acl}
  */
  readonly acl?: string[];
  /**
  * Alert configuration for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#alert_config ObservabilityInstance#alert_config}
  */
  readonly alertConfig?: ObservabilityInstanceAlertConfig;
  /**
  * Specifies for how many days the logs are kept. Default is set to `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#logs_retention_days ObservabilityInstance#logs_retention_days}
  */
  readonly logsRetentionDays?: number;
  /**
  * Specifies for how many days the raw metrics are kept. Default is set to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#metrics_retention_days ObservabilityInstance#metrics_retention_days}
  */
  readonly metricsRetentionDays?: number;
  /**
  * Specifies for how many days the 1h downsampled metrics are kept. must be less than the value of the 5m downsampling retention. Default is set to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#metrics_retention_days_1h_downsampling ObservabilityInstance#metrics_retention_days_1h_downsampling}
  */
  readonly metricsRetentionDays1HDownsampling?: number;
  /**
  * Specifies for how many days the 5m downsampled metrics are kept. must be less than the value of the general retention. Default is set to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#metrics_retention_days_5m_downsampling ObservabilityInstance#metrics_retention_days_5m_downsampling}
  */
  readonly metricsRetentionDays5MDownsampling?: number;
  /**
  * The name of the Observability instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#name ObservabilityInstance#name}
  */
  readonly name: string;
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#parameters ObservabilityInstance#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Specifies the Observability plan. E.g. `Observability-Monitoring-Medium-EU01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#plan_name ObservabilityInstance#plan_name}
  */
  readonly planName: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#project_id ObservabilityInstance#project_id}
  */
  readonly projectId: string;
  /**
  * Specifies for how many days the traces are kept. Default is set to `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#traces_retention_days ObservabilityInstance#traces_retention_days}
  */
  readonly tracesRetentionDays?: number;
}
export interface ObservabilityInstanceAlertConfigGlobal {
  /**
  * The API key for OpsGenie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#opsgenie_api_key ObservabilityInstance#opsgenie_api_key}
  */
  readonly opsgenieApiKey?: string;
  /**
  * The host to send OpsGenie API requests to. Must be a valid URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#opsgenie_api_url ObservabilityInstance#opsgenie_api_url}
  */
  readonly opsgenieApiUrl?: string;
  /**
  * The default value used by alertmanager if the alert does not include EndsAt. After this time passes, it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#resolve_timeout ObservabilityInstance#resolve_timeout}
  */
  readonly resolveTimeout?: string;
  /**
  * SMTP authentication information. Must be a valid email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smtp_auth_identity ObservabilityInstance#smtp_auth_identity}
  */
  readonly smtpAuthIdentity?: string;
  /**
  * SMTP Auth using LOGIN and PLAIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smtp_auth_password ObservabilityInstance#smtp_auth_password}
  */
  readonly smtpAuthPassword?: string;
  /**
  * SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smtp_auth_username ObservabilityInstance#smtp_auth_username}
  */
  readonly smtpAuthUsername?: string;
  /**
  * The default SMTP From header field. Must be a valid email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smtp_from ObservabilityInstance#smtp_from}
  */
  readonly smtpFrom?: string;
  /**
  * The default SMTP smarthost used for sending emails, including port number in format `host:port` (eg. `smtp.example.com:587`). Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smtp_smart_host ObservabilityInstance#smtp_smart_host}
  */
  readonly smtpSmartHost?: string;
}

export function observabilityInstanceAlertConfigGlobalToTerraform(struct?: ObservabilityInstanceAlertConfigGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opsgenie_api_key: cdktf.stringToTerraform(struct!.opsgenieApiKey),
    opsgenie_api_url: cdktf.stringToTerraform(struct!.opsgenieApiUrl),
    resolve_timeout: cdktf.stringToTerraform(struct!.resolveTimeout),
    smtp_auth_identity: cdktf.stringToTerraform(struct!.smtpAuthIdentity),
    smtp_auth_password: cdktf.stringToTerraform(struct!.smtpAuthPassword),
    smtp_auth_username: cdktf.stringToTerraform(struct!.smtpAuthUsername),
    smtp_from: cdktf.stringToTerraform(struct!.smtpFrom),
    smtp_smart_host: cdktf.stringToTerraform(struct!.smtpSmartHost),
  }
}


export function observabilityInstanceAlertConfigGlobalToHclTerraform(struct?: ObservabilityInstanceAlertConfigGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opsgenie_api_key: {
      value: cdktf.stringToHclTerraform(struct!.opsgenieApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsgenie_api_url: {
      value: cdktf.stringToHclTerraform(struct!.opsgenieApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resolveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_identity: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.smtpAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_from: {
      value: cdktf.stringToHclTerraform(struct!.smtpFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_smart_host: {
      value: cdktf.stringToHclTerraform(struct!.smtpSmartHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityInstanceAlertConfigGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opsgenieApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsgenieApiKey = this._opsgenieApiKey;
    }
    if (this._opsgenieApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsgenieApiUrl = this._opsgenieApiUrl;
    }
    if (this._resolveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveTimeout = this._resolveTimeout;
    }
    if (this._smtpAuthIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthIdentity = this._smtpAuthIdentity;
    }
    if (this._smtpAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthPassword = this._smtpAuthPassword;
    }
    if (this._smtpAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpAuthUsername = this._smtpAuthUsername;
    }
    if (this._smtpFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpFrom = this._smtpFrom;
    }
    if (this._smtpSmartHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpSmartHost = this._smtpSmartHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opsgenieApiKey = undefined;
      this._opsgenieApiUrl = undefined;
      this._resolveTimeout = undefined;
      this._smtpAuthIdentity = undefined;
      this._smtpAuthPassword = undefined;
      this._smtpAuthUsername = undefined;
      this._smtpFrom = undefined;
      this._smtpSmartHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opsgenieApiKey = value.opsgenieApiKey;
      this._opsgenieApiUrl = value.opsgenieApiUrl;
      this._resolveTimeout = value.resolveTimeout;
      this._smtpAuthIdentity = value.smtpAuthIdentity;
      this._smtpAuthPassword = value.smtpAuthPassword;
      this._smtpAuthUsername = value.smtpAuthUsername;
      this._smtpFrom = value.smtpFrom;
      this._smtpSmartHost = value.smtpSmartHost;
    }
  }

  // opsgenie_api_key - computed: true, optional: true, required: false
  private _opsgenieApiKey?: string; 
  public get opsgenieApiKey() {
    return this.getStringAttribute('opsgenie_api_key');
  }
  public set opsgenieApiKey(value: string) {
    this._opsgenieApiKey = value;
  }
  public resetOpsgenieApiKey() {
    this._opsgenieApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieApiKeyInput() {
    return this._opsgenieApiKey;
  }

  // opsgenie_api_url - computed: true, optional: true, required: false
  private _opsgenieApiUrl?: string; 
  public get opsgenieApiUrl() {
    return this.getStringAttribute('opsgenie_api_url');
  }
  public set opsgenieApiUrl(value: string) {
    this._opsgenieApiUrl = value;
  }
  public resetOpsgenieApiUrl() {
    this._opsgenieApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieApiUrlInput() {
    return this._opsgenieApiUrl;
  }

  // resolve_timeout - computed: true, optional: true, required: false
  private _resolveTimeout?: string; 
  public get resolveTimeout() {
    return this.getStringAttribute('resolve_timeout');
  }
  public set resolveTimeout(value: string) {
    this._resolveTimeout = value;
  }
  public resetResolveTimeout() {
    this._resolveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveTimeoutInput() {
    return this._resolveTimeout;
  }

  // smtp_auth_identity - computed: true, optional: true, required: false
  private _smtpAuthIdentity?: string; 
  public get smtpAuthIdentity() {
    return this.getStringAttribute('smtp_auth_identity');
  }
  public set smtpAuthIdentity(value: string) {
    this._smtpAuthIdentity = value;
  }
  public resetSmtpAuthIdentity() {
    this._smtpAuthIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthIdentityInput() {
    return this._smtpAuthIdentity;
  }

  // smtp_auth_password - computed: true, optional: true, required: false
  private _smtpAuthPassword?: string; 
  public get smtpAuthPassword() {
    return this.getStringAttribute('smtp_auth_password');
  }
  public set smtpAuthPassword(value: string) {
    this._smtpAuthPassword = value;
  }
  public resetSmtpAuthPassword() {
    this._smtpAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthPasswordInput() {
    return this._smtpAuthPassword;
  }

  // smtp_auth_username - computed: true, optional: true, required: false
  private _smtpAuthUsername?: string; 
  public get smtpAuthUsername() {
    return this.getStringAttribute('smtp_auth_username');
  }
  public set smtpAuthUsername(value: string) {
    this._smtpAuthUsername = value;
  }
  public resetSmtpAuthUsername() {
    this._smtpAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthUsernameInput() {
    return this._smtpAuthUsername;
  }

  // smtp_from - computed: true, optional: true, required: false
  private _smtpFrom?: string; 
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }
  public set smtpFrom(value: string) {
    this._smtpFrom = value;
  }
  public resetSmtpFrom() {
    this._smtpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpFromInput() {
    return this._smtpFrom;
  }

  // smtp_smart_host - computed: true, optional: true, required: false
  private _smtpSmartHost?: string; 
  public get smtpSmartHost() {
    return this.getStringAttribute('smtp_smart_host');
  }
  public set smtpSmartHost(value: string) {
    this._smtpSmartHost = value;
  }
  public resetSmtpSmartHost() {
    this._smtpSmartHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpSmartHostInput() {
    return this._smtpSmartHost;
  }
}
export interface ObservabilityInstanceAlertConfigReceiversEmailConfigs {
  /**
  * SMTP authentication information. Must be a valid email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#auth_identity ObservabilityInstance#auth_identity}
  */
  readonly authIdentity?: string;
  /**
  * SMTP authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#auth_password ObservabilityInstance#auth_password}
  */
  readonly authPassword?: string;
  /**
  * SMTP authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#auth_username ObservabilityInstance#auth_username}
  */
  readonly authUsername?: string;
  /**
  * The sender email address. Must be a valid email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#from ObservabilityInstance#from}
  */
  readonly from?: string;
  /**
  * Whether to notify about resolved alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#send_resolved ObservabilityInstance#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * The SMTP host through which emails are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#smart_host ObservabilityInstance#smart_host}
  */
  readonly smartHost?: string;
  /**
  * The email address to send notifications to. Must be a valid email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#to ObservabilityInstance#to}
  */
  readonly to?: string;
}

export function observabilityInstanceAlertConfigReceiversEmailConfigsToTerraform(struct?: ObservabilityInstanceAlertConfigReceiversEmailConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_identity: cdktf.stringToTerraform(struct!.authIdentity),
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    from: cdktf.stringToTerraform(struct!.from),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    smart_host: cdktf.stringToTerraform(struct!.smartHost),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function observabilityInstanceAlertConfigReceiversEmailConfigsToHclTerraform(struct?: ObservabilityInstanceAlertConfigReceiversEmailConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_identity: {
      value: cdktf.stringToHclTerraform(struct!.authIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_resolved: {
      value: cdktf.booleanToHclTerraform(struct!.sendResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smart_host: {
      value: cdktf.stringToHclTerraform(struct!.smartHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityInstanceAlertConfigReceiversEmailConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.authIdentity = this._authIdentity;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._sendResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResolved = this._sendResolved;
    }
    if (this._smartHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartHost = this._smartHost;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigReceiversEmailConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authIdentity = undefined;
      this._authPassword = undefined;
      this._authUsername = undefined;
      this._from = undefined;
      this._sendResolved = undefined;
      this._smartHost = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authIdentity = value.authIdentity;
      this._authPassword = value.authPassword;
      this._authUsername = value.authUsername;
      this._from = value.from;
      this._sendResolved = value.sendResolved;
      this._smartHost = value.smartHost;
      this._to = value.to;
    }
  }

  // auth_identity - computed: false, optional: true, required: false
  private _authIdentity?: string; 
  public get authIdentity() {
    return this.getStringAttribute('auth_identity');
  }
  public set authIdentity(value: string) {
    this._authIdentity = value;
  }
  public resetAuthIdentity() {
    this._authIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authIdentityInput() {
    return this._authIdentity;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // smart_host - computed: false, optional: true, required: false
  private _smartHost?: string; 
  public get smartHost() {
    return this.getStringAttribute('smart_host');
  }
  public set smartHost(value: string) {
    this._smartHost = value;
  }
  public resetSmartHost() {
    this._smartHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartHostInput() {
    return this._smartHost;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ObservabilityInstanceAlertConfigReceiversEmailConfigsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityInstanceAlertConfigReceiversEmailConfigs[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference {
    return new ObservabilityInstanceAlertConfigReceiversEmailConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs {
  /**
  * The API key for OpsGenie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#api_key ObservabilityInstance#api_key}
  */
  readonly apiKey?: string;
  /**
  * The host to send OpsGenie API requests to. Must be a valid URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#api_url ObservabilityInstance#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Priority of the alert. Possible values are: `P1`, `P2`, `P3`, `P4`, `P5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#priority ObservabilityInstance#priority}
  */
  readonly priority?: string;
  /**
  * Whether to notify about resolved alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#send_resolved ObservabilityInstance#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of tags attached to the notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#tags ObservabilityInstance#tags}
  */
  readonly tags?: string;
}

export function observabilityInstanceAlertConfigReceiversOpsgenieConfigsToTerraform(struct?: ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    priority: cdktf.stringToTerraform(struct!.priority),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function observabilityInstanceAlertConfigReceiversOpsgenieConfigsToHclTerraform(struct?: ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | cdktf.IResolvable): any {
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
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
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
    send_resolved: {
      value: cdktf.booleanToHclTerraform(struct!.sendResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sendResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResolved = this._sendResolved;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiUrl = undefined;
      this._priority = undefined;
      this._sendResolved = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiUrl = value.apiUrl;
      this._priority = value.priority;
      this._sendResolved = value.sendResolved;
      this._tags = value.tags;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference {
    return new ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityInstanceAlertConfigReceiversWebhooksConfigs {
  /**
  * Google Chat webhooks require special handling, set this to true if the webhook is for Google Chat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#google_chat ObservabilityInstance#google_chat}
  */
  readonly googleChat?: boolean | cdktf.IResolvable;
  /**
  * Microsoft Teams webhooks require special handling, set this to true if the webhook is for Microsoft Teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#ms_teams ObservabilityInstance#ms_teams}
  */
  readonly msTeams?: boolean | cdktf.IResolvable;
  /**
  * Whether to notify about resolved alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#send_resolved ObservabilityInstance#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * The endpoint to send HTTP POST requests to. Must be a valid URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#url ObservabilityInstance#url}
  */
  readonly url?: string;
}

export function observabilityInstanceAlertConfigReceiversWebhooksConfigsToTerraform(struct?: ObservabilityInstanceAlertConfigReceiversWebhooksConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_chat: cdktf.booleanToTerraform(struct!.googleChat),
    ms_teams: cdktf.booleanToTerraform(struct!.msTeams),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function observabilityInstanceAlertConfigReceiversWebhooksConfigsToHclTerraform(struct?: ObservabilityInstanceAlertConfigReceiversWebhooksConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_chat: {
      value: cdktf.booleanToHclTerraform(struct!.googleChat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ms_teams: {
      value: cdktf.booleanToHclTerraform(struct!.msTeams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_resolved: {
      value: cdktf.booleanToHclTerraform(struct!.sendResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityInstanceAlertConfigReceiversWebhooksConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleChat !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleChat = this._googleChat;
    }
    if (this._msTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.msTeams = this._msTeams;
    }
    if (this._sendResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResolved = this._sendResolved;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigReceiversWebhooksConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleChat = undefined;
      this._msTeams = undefined;
      this._sendResolved = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleChat = value.googleChat;
      this._msTeams = value.msTeams;
      this._sendResolved = value.sendResolved;
      this._url = value.url;
    }
  }

  // google_chat - computed: true, optional: true, required: false
  private _googleChat?: boolean | cdktf.IResolvable; 
  public get googleChat() {
    return this.getBooleanAttribute('google_chat');
  }
  public set googleChat(value: boolean | cdktf.IResolvable) {
    this._googleChat = value;
  }
  public resetGoogleChat() {
    this._googleChat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleChatInput() {
    return this._googleChat;
  }

  // ms_teams - computed: true, optional: true, required: false
  private _msTeams?: boolean | cdktf.IResolvable; 
  public get msTeams() {
    return this.getBooleanAttribute('ms_teams');
  }
  public set msTeams(value: boolean | cdktf.IResolvable) {
    this._msTeams = value;
  }
  public resetMsTeams() {
    this._msTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTeamsInput() {
    return this._msTeams;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
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
}

export class ObservabilityInstanceAlertConfigReceiversWebhooksConfigsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityInstanceAlertConfigReceiversWebhooksConfigs[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference {
    return new ObservabilityInstanceAlertConfigReceiversWebhooksConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityInstanceAlertConfigReceivers {
  /**
  * List of email configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#email_configs ObservabilityInstance#email_configs}
  */
  readonly emailConfigs?: ObservabilityInstanceAlertConfigReceiversEmailConfigs[] | cdktf.IResolvable;
  /**
  * Name of the receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#name ObservabilityInstance#name}
  */
  readonly name: string;
  /**
  * List of OpsGenie configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#opsgenie_configs ObservabilityInstance#opsgenie_configs}
  */
  readonly opsgenieConfigs?: ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs[] | cdktf.IResolvable;
  /**
  * List of Webhooks configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#webhooks_configs ObservabilityInstance#webhooks_configs}
  */
  readonly webhooksConfigs?: ObservabilityInstanceAlertConfigReceiversWebhooksConfigs[] | cdktf.IResolvable;
}

export function observabilityInstanceAlertConfigReceiversToTerraform(struct?: ObservabilityInstanceAlertConfigReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_configs: cdktf.listMapper(observabilityInstanceAlertConfigReceiversEmailConfigsToTerraform, false)(struct!.emailConfigs),
    name: cdktf.stringToTerraform(struct!.name),
    opsgenie_configs: cdktf.listMapper(observabilityInstanceAlertConfigReceiversOpsgenieConfigsToTerraform, false)(struct!.opsgenieConfigs),
    webhooks_configs: cdktf.listMapper(observabilityInstanceAlertConfigReceiversWebhooksConfigsToTerraform, false)(struct!.webhooksConfigs),
  }
}


export function observabilityInstanceAlertConfigReceiversToHclTerraform(struct?: ObservabilityInstanceAlertConfigReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_configs: {
      value: cdktf.listMapperHcl(observabilityInstanceAlertConfigReceiversEmailConfigsToHclTerraform, false)(struct!.emailConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityInstanceAlertConfigReceiversEmailConfigsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsgenie_configs: {
      value: cdktf.listMapperHcl(observabilityInstanceAlertConfigReceiversOpsgenieConfigsToHclTerraform, false)(struct!.opsgenieConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsList",
    },
    webhooks_configs: {
      value: cdktf.listMapperHcl(observabilityInstanceAlertConfigReceiversWebhooksConfigsToHclTerraform, false)(struct!.webhooksConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityInstanceAlertConfigReceiversWebhooksConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityInstanceAlertConfigReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailConfigs = this._emailConfigs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opsgenieConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsgenieConfigs = this._opsgenieConfigs?.internalValue;
    }
    if (this._webhooksConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooksConfigs = this._webhooksConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailConfigs.internalValue = undefined;
      this._name = undefined;
      this._opsgenieConfigs.internalValue = undefined;
      this._webhooksConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailConfigs.internalValue = value.emailConfigs;
      this._name = value.name;
      this._opsgenieConfigs.internalValue = value.opsgenieConfigs;
      this._webhooksConfigs.internalValue = value.webhooksConfigs;
    }
  }

  // email_configs - computed: false, optional: true, required: false
  private _emailConfigs = new ObservabilityInstanceAlertConfigReceiversEmailConfigsList(this, "email_configs", false);
  public get emailConfigs() {
    return this._emailConfigs;
  }
  public putEmailConfigs(value: ObservabilityInstanceAlertConfigReceiversEmailConfigs[] | cdktf.IResolvable) {
    this._emailConfigs.internalValue = value;
  }
  public resetEmailConfigs() {
    this._emailConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigsInput() {
    return this._emailConfigs.internalValue;
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

  // opsgenie_configs - computed: false, optional: true, required: false
  private _opsgenieConfigs = new ObservabilityInstanceAlertConfigReceiversOpsgenieConfigsList(this, "opsgenie_configs", false);
  public get opsgenieConfigs() {
    return this._opsgenieConfigs;
  }
  public putOpsgenieConfigs(value: ObservabilityInstanceAlertConfigReceiversOpsgenieConfigs[] | cdktf.IResolvable) {
    this._opsgenieConfigs.internalValue = value;
  }
  public resetOpsgenieConfigs() {
    this._opsgenieConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieConfigsInput() {
    return this._opsgenieConfigs.internalValue;
  }

  // webhooks_configs - computed: false, optional: true, required: false
  private _webhooksConfigs = new ObservabilityInstanceAlertConfigReceiversWebhooksConfigsList(this, "webhooks_configs", false);
  public get webhooksConfigs() {
    return this._webhooksConfigs;
  }
  public putWebhooksConfigs(value: ObservabilityInstanceAlertConfigReceiversWebhooksConfigs[] | cdktf.IResolvable) {
    this._webhooksConfigs.internalValue = value;
  }
  public resetWebhooksConfigs() {
    this._webhooksConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksConfigsInput() {
    return this._webhooksConfigs.internalValue;
  }
}

export class ObservabilityInstanceAlertConfigReceiversList extends cdktf.ComplexList {
  public internalValue? : ObservabilityInstanceAlertConfigReceivers[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityInstanceAlertConfigReceiversOutputReference {
    return new ObservabilityInstanceAlertConfigReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityInstanceAlertConfigRouteRoutes {
  /**
  * Whether an alert should continue matching subsequent sibling nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#continue ObservabilityInstance#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * The labels by which incoming alerts are grouped together. For example, multiple alerts coming in for cluster=A and alertname=LatencyHigh would be batched into a single group. To aggregate by all possible labels use the special value '...' as the sole label name, for example: group_by: ['...']. This effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_by ObservabilityInstance#group_by}
  */
  readonly groupBy?: string[];
  /**
  * How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_interval ObservabilityInstance#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * How long to initially wait to send a notification for a group of alerts. Allows to wait for an inhibiting alert to arrive or collect more initial alerts for the same group. (Usually ~0s to few minutes.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_wait ObservabilityInstance#group_wait}
  */
  readonly groupWait?: string;
  /**
  * A set of equality matchers an alert has to fulfill to match the node. This field is deprecated and will be removed after 10th March 2026, use `matchers` in the `routes` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#match ObservabilityInstance#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * A set of regex-matchers an alert has to fulfill to match the node. This field is deprecated and will be removed after 10th March 2026, use `matchers` in the `routes` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#match_regex ObservabilityInstance#match_regex}
  */
  readonly matchRegex?: { [key: string]: string };
  /**
  * A list of matchers that an alert has to fulfill to match the node. A matcher is a string with a syntax inspired by PromQL and OpenMetrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#matchers ObservabilityInstance#matchers}
  */
  readonly matchers?: string[];
  /**
  * The name of the receiver to route the alerts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#receiver ObservabilityInstance#receiver}
  */
  readonly receiver: string;
  /**
  * How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#repeat_interval ObservabilityInstance#repeat_interval}
  */
  readonly repeatInterval?: string;
}

export function observabilityInstanceAlertConfigRouteRoutesToTerraform(struct?: ObservabilityInstanceAlertConfigRouteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue: cdktf.booleanToTerraform(struct!.continue),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    match_regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchRegex),
    matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchers),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
  }
}


export function observabilityInstanceAlertConfigRouteRoutesToHclTerraform(struct?: ObservabilityInstanceAlertConfigRouteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchRegex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    matchers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    receiver: {
      value: cdktf.stringToHclTerraform(struct!.receiver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigRouteRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityInstanceAlertConfigRouteRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._matchers !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchers = this._matchers;
    }
    if (this._receiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigRouteRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._match = undefined;
      this._matchRegex = undefined;
      this._matchers = undefined;
      this._receiver = undefined;
      this._repeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continue = value.continue;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._match = value.match;
      this._matchRegex = value.matchRegex;
      this._matchers = value.matchers;
      this._receiver = value.receiver;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_interval - computed: true, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: true, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: { [key: string]: string }; 
  public get matchRegex() {
    return this.getStringMapAttribute('match_regex');
  }
  public set matchRegex(value: { [key: string]: string }) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers?: string[]; 
  public get matchers() {
    return this.getListAttribute('matchers');
  }
  public set matchers(value: string[]) {
    this._matchers = value;
  }
  public resetMatchers() {
    this._matchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers;
  }

  // receiver - computed: false, optional: false, required: true
  private _receiver?: string; 
  public get receiver() {
    return this.getStringAttribute('receiver');
  }
  public set receiver(value: string) {
    this._receiver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver;
  }

  // repeat_interval - computed: true, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}

export class ObservabilityInstanceAlertConfigRouteRoutesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityInstanceAlertConfigRouteRoutes[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityInstanceAlertConfigRouteRoutesOutputReference {
    return new ObservabilityInstanceAlertConfigRouteRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityInstanceAlertConfigRoute {
  /**
  * The labels by which incoming alerts are grouped together. For example, multiple alerts coming in for cluster=A and alertname=LatencyHigh would be batched into a single group. To aggregate by all possible labels use the special value '...' as the sole label name, for example: group_by: ['...']. This effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_by ObservabilityInstance#group_by}
  */
  readonly groupBy?: string[];
  /**
  * How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_interval ObservabilityInstance#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * How long to initially wait to send a notification for a group of alerts. Allows to wait for an inhibiting alert to arrive or collect more initial alerts for the same group. (Usually ~0s to few minutes.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#group_wait ObservabilityInstance#group_wait}
  */
  readonly groupWait?: string;
  /**
  * The name of the receiver to route the alerts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#receiver ObservabilityInstance#receiver}
  */
  readonly receiver: string;
  /**
  * How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#repeat_interval ObservabilityInstance#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * List of child routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#routes ObservabilityInstance#routes}
  */
  readonly routes?: ObservabilityInstanceAlertConfigRouteRoutes[] | cdktf.IResolvable;
}

export function observabilityInstanceAlertConfigRouteToTerraform(struct?: ObservabilityInstanceAlertConfigRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    routes: cdktf.listMapper(observabilityInstanceAlertConfigRouteRoutesToTerraform, false)(struct!.routes),
  }
}


export function observabilityInstanceAlertConfigRouteToHclTerraform(struct?: ObservabilityInstanceAlertConfigRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver: {
      value: cdktf.stringToHclTerraform(struct!.receiver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(observabilityInstanceAlertConfigRouteRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityInstanceAlertConfigRouteRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityInstanceAlertConfigRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._receiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfigRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._receiver = undefined;
      this._repeatInterval = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._receiver = value.receiver;
      this._repeatInterval = value.repeatInterval;
      this._routes.internalValue = value.routes;
    }
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_interval - computed: true, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: true, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // receiver - computed: false, optional: false, required: true
  private _receiver?: string; 
  public get receiver() {
    return this.getStringAttribute('receiver');
  }
  public set receiver(value: string) {
    this._receiver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver;
  }

  // repeat_interval - computed: true, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ObservabilityInstanceAlertConfigRouteRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ObservabilityInstanceAlertConfigRouteRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface ObservabilityInstanceAlertConfig {
  /**
  * Global configuration for the alerts. If nothing passed the default argus config will be used. It is only possible to update the entire global part, not individual attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#global ObservabilityInstance#global}
  */
  readonly global?: ObservabilityInstanceAlertConfigGlobal;
  /**
  * List of alert receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#receivers ObservabilityInstance#receivers}
  */
  readonly receivers: ObservabilityInstanceAlertConfigReceivers[] | cdktf.IResolvable;
  /**
  * Route configuration for the alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#route ObservabilityInstance#route}
  */
  readonly route: ObservabilityInstanceAlertConfigRoute;
}

export function observabilityInstanceAlertConfigToTerraform(struct?: ObservabilityInstanceAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: observabilityInstanceAlertConfigGlobalToTerraform(struct!.global),
    receivers: cdktf.listMapper(observabilityInstanceAlertConfigReceiversToTerraform, false)(struct!.receivers),
    route: observabilityInstanceAlertConfigRouteToTerraform(struct!.route),
  }
}


export function observabilityInstanceAlertConfigToHclTerraform(struct?: ObservabilityInstanceAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: observabilityInstanceAlertConfigGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityInstanceAlertConfigGlobal",
    },
    receivers: {
      value: cdktf.listMapperHcl(observabilityInstanceAlertConfigReceiversToHclTerraform, false)(struct!.receivers),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityInstanceAlertConfigReceiversList",
    },
    route: {
      value: observabilityInstanceAlertConfigRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityInstanceAlertConfigRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityInstanceAlertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityInstanceAlertConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._receivers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivers = this._receivers?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityInstanceAlertConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._receivers.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._receivers.internalValue = value.receivers;
      this._route.internalValue = value.route;
    }
  }

  // global - computed: true, optional: true, required: false
  private _global = new ObservabilityInstanceAlertConfigGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ObservabilityInstanceAlertConfigGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // receivers - computed: false, optional: false, required: true
  private _receivers = new ObservabilityInstanceAlertConfigReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: ObservabilityInstanceAlertConfigReceivers[] | cdktf.IResolvable) {
    this._receivers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers.internalValue;
  }

  // route - computed: false, optional: false, required: true
  private _route = new ObservabilityInstanceAlertConfigRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: ObservabilityInstanceAlertConfigRoute) {
    this._route.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance stackit_observability_instance}
*/
export class ObservabilityInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_observability_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservabilityInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityInstance to import
  * @param importFromId The id of the existing ObservabilityInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_observability_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/observability_instance stackit_observability_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_observability_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.70.0',
        providerVersionConstraint: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._alertConfig.internalValue = config.alertConfig;
    this._logsRetentionDays = config.logsRetentionDays;
    this._metricsRetentionDays = config.metricsRetentionDays;
    this._metricsRetentionDays1HDownsampling = config.metricsRetentionDays1HDownsampling;
    this._metricsRetentionDays5MDownsampling = config.metricsRetentionDays5MDownsampling;
    this._name = config.name;
    this._parameters = config.parameters;
    this._planName = config.planName;
    this._projectId = config.projectId;
    this._tracesRetentionDays = config.tracesRetentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string[]; 
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // alert_config - computed: false, optional: true, required: false
  private _alertConfig = new ObservabilityInstanceAlertConfigOutputReference(this, "alert_config");
  public get alertConfig() {
    return this._alertConfig;
  }
  public putAlertConfig(value: ObservabilityInstanceAlertConfig) {
    this._alertConfig.internalValue = value;
  }
  public resetAlertConfig() {
    this._alertConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigInput() {
    return this._alertConfig.internalValue;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // logs_retention_days - computed: true, optional: true, required: false
  private _logsRetentionDays?: number; 
  public get logsRetentionDays() {
    return this.getNumberAttribute('logs_retention_days');
  }
  public set logsRetentionDays(value: number) {
    this._logsRetentionDays = value;
  }
  public resetLogsRetentionDays() {
    this._logsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsRetentionDaysInput() {
    return this._logsRetentionDays;
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // metrics_push_url - computed: true, optional: false, required: false
  public get metricsPushUrl() {
    return this.getStringAttribute('metrics_push_url');
  }

  // metrics_retention_days - computed: true, optional: true, required: false
  private _metricsRetentionDays?: number; 
  public get metricsRetentionDays() {
    return this.getNumberAttribute('metrics_retention_days');
  }
  public set metricsRetentionDays(value: number) {
    this._metricsRetentionDays = value;
  }
  public resetMetricsRetentionDays() {
    this._metricsRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRetentionDaysInput() {
    return this._metricsRetentionDays;
  }

  // metrics_retention_days_1h_downsampling - computed: true, optional: true, required: false
  private _metricsRetentionDays1HDownsampling?: number; 
  public get metricsRetentionDays1HDownsampling() {
    return this.getNumberAttribute('metrics_retention_days_1h_downsampling');
  }
  public set metricsRetentionDays1HDownsampling(value: number) {
    this._metricsRetentionDays1HDownsampling = value;
  }
  public resetMetricsRetentionDays1HDownsampling() {
    this._metricsRetentionDays1HDownsampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRetentionDays1HDownsamplingInput() {
    return this._metricsRetentionDays1HDownsampling;
  }

  // metrics_retention_days_5m_downsampling - computed: true, optional: true, required: false
  private _metricsRetentionDays5MDownsampling?: number; 
  public get metricsRetentionDays5MDownsampling() {
    return this.getNumberAttribute('metrics_retention_days_5m_downsampling');
  }
  public set metricsRetentionDays5MDownsampling(value: number) {
    this._metricsRetentionDays5MDownsampling = value;
  }
  public resetMetricsRetentionDays5MDownsampling() {
    this._metricsRetentionDays5MDownsampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRetentionDays5MDownsamplingInput() {
    return this._metricsRetentionDays5MDownsampling;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
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

  // otlp_traces_url - computed: true, optional: false, required: false
  public get otlpTracesUrl() {
    return this.getStringAttribute('otlp_traces_url');
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
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

  // traces_retention_days - computed: true, optional: true, required: false
  private _tracesRetentionDays?: number; 
  public get tracesRetentionDays() {
    return this.getNumberAttribute('traces_retention_days');
  }
  public set tracesRetentionDays(value: number) {
    this._tracesRetentionDays = value;
  }
  public resetTracesRetentionDays() {
    this._tracesRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesRetentionDaysInput() {
    return this._tracesRetentionDays;
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
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      alert_config: observabilityInstanceAlertConfigToTerraform(this._alertConfig.internalValue),
      logs_retention_days: cdktf.numberToTerraform(this._logsRetentionDays),
      metrics_retention_days: cdktf.numberToTerraform(this._metricsRetentionDays),
      metrics_retention_days_1h_downsampling: cdktf.numberToTerraform(this._metricsRetentionDays1HDownsampling),
      metrics_retention_days_5m_downsampling: cdktf.numberToTerraform(this._metricsRetentionDays5MDownsampling),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      plan_name: cdktf.stringToTerraform(this._planName),
      project_id: cdktf.stringToTerraform(this._projectId),
      traces_retention_days: cdktf.numberToTerraform(this._tracesRetentionDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_config: {
        value: observabilityInstanceAlertConfigToHclTerraform(this._alertConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityInstanceAlertConfig",
      },
      logs_retention_days: {
        value: cdktf.numberToHclTerraform(this._logsRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_retention_days: {
        value: cdktf.numberToHclTerraform(this._metricsRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_retention_days_1h_downsampling: {
        value: cdktf.numberToHclTerraform(this._metricsRetentionDays1HDownsampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_retention_days_5m_downsampling: {
        value: cdktf.numberToHclTerraform(this._metricsRetentionDays5MDownsampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
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
      traces_retention_days: {
        value: cdktf.numberToHclTerraform(this._tracesRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
