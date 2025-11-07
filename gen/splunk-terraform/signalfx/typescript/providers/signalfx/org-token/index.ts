// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication scope, ex: INGEST, API, RUM ... (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#auth_scopes OrgToken#auth_scopes}
  */
  readonly authScopes?: string[];
  /**
  * Description of the token (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#description OrgToken#description}
  */
  readonly description?: string;
  /**
  * Flag that controls enabling the token. If set to `true`, the token is disabled, and you can't use it for authentication. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#disabled OrgToken#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#id OrgToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#name OrgToken#name}
  */
  readonly name: string;
  /**
  * List of strings specifying where notifications will be sent when an incident occurs. See https://developers.signalfx.com/v2/docs/detector-model#notifications-models for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#notifications OrgToken#notifications}
  */
  readonly notifications?: string[];
  /**
  * dpm_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#dpm_limits OrgToken#dpm_limits}
  */
  readonly dpmLimits?: OrgTokenDpmLimits;
  /**
  * host_or_usage_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#host_or_usage_limits OrgToken#host_or_usage_limits}
  */
  readonly hostOrUsageLimits?: OrgTokenHostOrUsageLimits;
}
export interface OrgTokenDpmLimits {
  /**
  * The datapoints per minute (dpm) limit for this token. If you exceed this limit, Splunk Observability Cloud sends out an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#dpm_limit OrgToken#dpm_limit}
  */
  readonly dpmLimit: number;
  /**
  * DPM level at which Splunk Observability Cloud sends the notification for this token. If you don't specify a notification, Splunk Observability Cloud sends the generic notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#dpm_notification_threshold OrgToken#dpm_notification_threshold}
  */
  readonly dpmNotificationThreshold?: number;
}

export function orgTokenDpmLimitsToTerraform(struct?: OrgTokenDpmLimitsOutputReference | OrgTokenDpmLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpm_limit: cdktf.numberToTerraform(struct!.dpmLimit),
    dpm_notification_threshold: cdktf.numberToTerraform(struct!.dpmNotificationThreshold),
  }
}


export function orgTokenDpmLimitsToHclTerraform(struct?: OrgTokenDpmLimitsOutputReference | OrgTokenDpmLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpm_limit: {
      value: cdktf.numberToHclTerraform(struct!.dpmLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpm_notification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.dpmNotificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgTokenDpmLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgTokenDpmLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpmLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpmLimit = this._dpmLimit;
    }
    if (this._dpmNotificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpmNotificationThreshold = this._dpmNotificationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgTokenDpmLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dpmLimit = undefined;
      this._dpmNotificationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dpmLimit = value.dpmLimit;
      this._dpmNotificationThreshold = value.dpmNotificationThreshold;
    }
  }

  // dpm_limit - computed: false, optional: false, required: true
  private _dpmLimit?: number; 
  public get dpmLimit() {
    return this.getNumberAttribute('dpm_limit');
  }
  public set dpmLimit(value: number) {
    this._dpmLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmLimitInput() {
    return this._dpmLimit;
  }

  // dpm_notification_threshold - computed: false, optional: true, required: false
  private _dpmNotificationThreshold?: number; 
  public get dpmNotificationThreshold() {
    return this.getNumberAttribute('dpm_notification_threshold');
  }
  public set dpmNotificationThreshold(value: number) {
    this._dpmNotificationThreshold = value;
  }
  public resetDpmNotificationThreshold() {
    this._dpmNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmNotificationThresholdInput() {
    return this._dpmNotificationThreshold;
  }
}
export interface OrgTokenHostOrUsageLimits {
  /**
  * Max number of containers that can use this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#container_limit OrgToken#container_limit}
  */
  readonly containerLimit?: number;
  /**
  * Notification threshold for containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#container_notification_threshold OrgToken#container_notification_threshold}
  */
  readonly containerNotificationThreshold?: number;
  /**
  * Max number of custom metrics that can be sent with this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#custom_metrics_limit OrgToken#custom_metrics_limit}
  */
  readonly customMetricsLimit?: number;
  /**
  * Notification threshold for custom metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#custom_metrics_notification_threshold OrgToken#custom_metrics_notification_threshold}
  */
  readonly customMetricsNotificationThreshold?: number;
  /**
  * Max number of high-res metrics that can be sent with this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#high_res_metrics_limit OrgToken#high_res_metrics_limit}
  */
  readonly highResMetricsLimit?: number;
  /**
  * Notification threshold for high-res metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#high_res_metrics_notification_threshold OrgToken#high_res_metrics_notification_threshold}
  */
  readonly highResMetricsNotificationThreshold?: number;
  /**
  * Max number of hosts that can use this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#host_limit OrgToken#host_limit}
  */
  readonly hostLimit?: number;
  /**
  * Notification threshold for hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#host_notification_threshold OrgToken#host_notification_threshold}
  */
  readonly hostNotificationThreshold?: number;
}

export function orgTokenHostOrUsageLimitsToTerraform(struct?: OrgTokenHostOrUsageLimitsOutputReference | OrgTokenHostOrUsageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_limit: cdktf.numberToTerraform(struct!.containerLimit),
    container_notification_threshold: cdktf.numberToTerraform(struct!.containerNotificationThreshold),
    custom_metrics_limit: cdktf.numberToTerraform(struct!.customMetricsLimit),
    custom_metrics_notification_threshold: cdktf.numberToTerraform(struct!.customMetricsNotificationThreshold),
    high_res_metrics_limit: cdktf.numberToTerraform(struct!.highResMetricsLimit),
    high_res_metrics_notification_threshold: cdktf.numberToTerraform(struct!.highResMetricsNotificationThreshold),
    host_limit: cdktf.numberToTerraform(struct!.hostLimit),
    host_notification_threshold: cdktf.numberToTerraform(struct!.hostNotificationThreshold),
  }
}


export function orgTokenHostOrUsageLimitsToHclTerraform(struct?: OrgTokenHostOrUsageLimitsOutputReference | OrgTokenHostOrUsageLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_limit: {
      value: cdktf.numberToHclTerraform(struct!.containerLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_notification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.containerNotificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_metrics_limit: {
      value: cdktf.numberToHclTerraform(struct!.customMetricsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_metrics_notification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.customMetricsNotificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_res_metrics_limit: {
      value: cdktf.numberToHclTerraform(struct!.highResMetricsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_res_metrics_notification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.highResMetricsNotificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_limit: {
      value: cdktf.numberToHclTerraform(struct!.hostLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_notification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.hostNotificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgTokenHostOrUsageLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgTokenHostOrUsageLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLimit = this._containerLimit;
    }
    if (this._containerNotificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNotificationThreshold = this._containerNotificationThreshold;
    }
    if (this._customMetricsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricsLimit = this._customMetricsLimit;
    }
    if (this._customMetricsNotificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricsNotificationThreshold = this._customMetricsNotificationThreshold;
    }
    if (this._highResMetricsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.highResMetricsLimit = this._highResMetricsLimit;
    }
    if (this._highResMetricsNotificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.highResMetricsNotificationThreshold = this._highResMetricsNotificationThreshold;
    }
    if (this._hostLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostLimit = this._hostLimit;
    }
    if (this._hostNotificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNotificationThreshold = this._hostNotificationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgTokenHostOrUsageLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerLimit = undefined;
      this._containerNotificationThreshold = undefined;
      this._customMetricsLimit = undefined;
      this._customMetricsNotificationThreshold = undefined;
      this._highResMetricsLimit = undefined;
      this._highResMetricsNotificationThreshold = undefined;
      this._hostLimit = undefined;
      this._hostNotificationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerLimit = value.containerLimit;
      this._containerNotificationThreshold = value.containerNotificationThreshold;
      this._customMetricsLimit = value.customMetricsLimit;
      this._customMetricsNotificationThreshold = value.customMetricsNotificationThreshold;
      this._highResMetricsLimit = value.highResMetricsLimit;
      this._highResMetricsNotificationThreshold = value.highResMetricsNotificationThreshold;
      this._hostLimit = value.hostLimit;
      this._hostNotificationThreshold = value.hostNotificationThreshold;
    }
  }

  // container_limit - computed: false, optional: true, required: false
  private _containerLimit?: number; 
  public get containerLimit() {
    return this.getNumberAttribute('container_limit');
  }
  public set containerLimit(value: number) {
    this._containerLimit = value;
  }
  public resetContainerLimit() {
    this._containerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLimitInput() {
    return this._containerLimit;
  }

  // container_notification_threshold - computed: false, optional: true, required: false
  private _containerNotificationThreshold?: number; 
  public get containerNotificationThreshold() {
    return this.getNumberAttribute('container_notification_threshold');
  }
  public set containerNotificationThreshold(value: number) {
    this._containerNotificationThreshold = value;
  }
  public resetContainerNotificationThreshold() {
    this._containerNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNotificationThresholdInput() {
    return this._containerNotificationThreshold;
  }

  // custom_metrics_limit - computed: false, optional: true, required: false
  private _customMetricsLimit?: number; 
  public get customMetricsLimit() {
    return this.getNumberAttribute('custom_metrics_limit');
  }
  public set customMetricsLimit(value: number) {
    this._customMetricsLimit = value;
  }
  public resetCustomMetricsLimit() {
    this._customMetricsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsLimitInput() {
    return this._customMetricsLimit;
  }

  // custom_metrics_notification_threshold - computed: false, optional: true, required: false
  private _customMetricsNotificationThreshold?: number; 
  public get customMetricsNotificationThreshold() {
    return this.getNumberAttribute('custom_metrics_notification_threshold');
  }
  public set customMetricsNotificationThreshold(value: number) {
    this._customMetricsNotificationThreshold = value;
  }
  public resetCustomMetricsNotificationThreshold() {
    this._customMetricsNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsNotificationThresholdInput() {
    return this._customMetricsNotificationThreshold;
  }

  // high_res_metrics_limit - computed: false, optional: true, required: false
  private _highResMetricsLimit?: number; 
  public get highResMetricsLimit() {
    return this.getNumberAttribute('high_res_metrics_limit');
  }
  public set highResMetricsLimit(value: number) {
    this._highResMetricsLimit = value;
  }
  public resetHighResMetricsLimit() {
    this._highResMetricsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highResMetricsLimitInput() {
    return this._highResMetricsLimit;
  }

  // high_res_metrics_notification_threshold - computed: false, optional: true, required: false
  private _highResMetricsNotificationThreshold?: number; 
  public get highResMetricsNotificationThreshold() {
    return this.getNumberAttribute('high_res_metrics_notification_threshold');
  }
  public set highResMetricsNotificationThreshold(value: number) {
    this._highResMetricsNotificationThreshold = value;
  }
  public resetHighResMetricsNotificationThreshold() {
    this._highResMetricsNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highResMetricsNotificationThresholdInput() {
    return this._highResMetricsNotificationThreshold;
  }

  // host_limit - computed: false, optional: true, required: false
  private _hostLimit?: number; 
  public get hostLimit() {
    return this.getNumberAttribute('host_limit');
  }
  public set hostLimit(value: number) {
    this._hostLimit = value;
  }
  public resetHostLimit() {
    this._hostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostLimitInput() {
    return this._hostLimit;
  }

  // host_notification_threshold - computed: false, optional: true, required: false
  private _hostNotificationThreshold?: number; 
  public get hostNotificationThreshold() {
    return this.getNumberAttribute('host_notification_threshold');
  }
  public set hostNotificationThreshold(value: number) {
    this._hostNotificationThreshold = value;
  }
  public resetHostNotificationThreshold() {
    this._hostNotificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNotificationThresholdInput() {
    return this._hostNotificationThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token signalfx_org_token}
*/
export class OrgToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_org_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgToken to import
  * @param importFromId The id of the existing OrgToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_org_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/org_token signalfx_org_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgTokenConfig
  */
  public constructor(scope: Construct, id: string, config: OrgTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_org_token',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authScopes = config.authScopes;
    this._description = config.description;
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._notifications = config.notifications;
    this._dpmLimits.internalValue = config.dpmLimits;
    this._hostOrUsageLimits.internalValue = config.hostOrUsageLimits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_scopes - computed: true, optional: true, required: false
  private _authScopes?: string[]; 
  public get authScopes() {
    return this.getListAttribute('auth_scopes');
  }
  public set authScopes(value: string[]) {
    this._authScopes = value;
  }
  public resetAuthScopes() {
    this._authScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authScopesInput() {
    return this._authScopes;
  }

  // description - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // dpm_limits - computed: false, optional: true, required: false
  private _dpmLimits = new OrgTokenDpmLimitsOutputReference(this, "dpm_limits");
  public get dpmLimits() {
    return this._dpmLimits;
  }
  public putDpmLimits(value: OrgTokenDpmLimits) {
    this._dpmLimits.internalValue = value;
  }
  public resetDpmLimits() {
    this._dpmLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmLimitsInput() {
    return this._dpmLimits.internalValue;
  }

  // host_or_usage_limits - computed: false, optional: true, required: false
  private _hostOrUsageLimits = new OrgTokenHostOrUsageLimitsOutputReference(this, "host_or_usage_limits");
  public get hostOrUsageLimits() {
    return this._hostOrUsageLimits;
  }
  public putHostOrUsageLimits(value: OrgTokenHostOrUsageLimits) {
    this._hostOrUsageLimits.internalValue = value;
  }
  public resetHostOrUsageLimits() {
    this._hostOrUsageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOrUsageLimitsInput() {
    return this._hostOrUsageLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authScopes),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifications),
      dpm_limits: orgTokenDpmLimitsToTerraform(this._dpmLimits.internalValue),
      host_or_usage_limits: orgTokenHostOrUsageLimitsToTerraform(this._hostOrUsageLimits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      notifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dpm_limits: {
        value: orgTokenDpmLimitsToHclTerraform(this._dpmLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgTokenDpmLimitsList",
      },
      host_or_usage_limits: {
        value: orgTokenHostOrUsageLimitsToHclTerraform(this._hostOrUsageLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgTokenHostOrUsageLimitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
