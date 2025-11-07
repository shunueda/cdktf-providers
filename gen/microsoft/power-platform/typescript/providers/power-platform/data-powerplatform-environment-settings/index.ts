// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerplatformEnvironmentSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Audit and Logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#audit_and_logs DataPowerplatformEnvironmentSettings#audit_and_logs}
  */
  readonly auditAndLogs?: DataPowerplatformEnvironmentSettingsAuditAndLogs;
  /**
  * Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#email DataPowerplatformEnvironmentSettings#email}
  */
  readonly email?: DataPowerplatformEnvironmentSettingsEmail;
  /**
  * Unique environment id (guid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#environment_id DataPowerplatformEnvironmentSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#product DataPowerplatformEnvironmentSettings#product}
  */
  readonly product?: DataPowerplatformEnvironmentSettingsProduct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#timeouts DataPowerplatformEnvironmentSettings#timeouts}
  */
  readonly timeouts?: DataPowerplatformEnvironmentSettingsTimeouts;
}
export interface DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings {
  /**
  * Is audit enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#is_audit_enabled DataPowerplatformEnvironmentSettings#is_audit_enabled}
  */
  readonly isAuditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is read audit enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#is_read_audit_enabled DataPowerplatformEnvironmentSettings#is_read_audit_enabled}
  */
  readonly isReadAuditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is user access audit enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#is_user_access_audit_enabled DataPowerplatformEnvironmentSettings#is_user_access_audit_enabled}
  */
  readonly isUserAccessAuditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Retain these logs for. See [Start/stop auditing for an environment and set retention policy](https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#startstop-auditing-for-an-environment-and-set-retention-policy) You can set a retention period for how long audit logs are kept in an environment. Under Retain these logs for, choose the period of time you wish to retain the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#log_retention_period_in_days DataPowerplatformEnvironmentSettings#log_retention_period_in_days}
  */
  readonly logRetentionPeriodInDays?: number;
}

export function dataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsToTerraform(struct?: DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_audit_enabled: cdktf.booleanToTerraform(struct!.isAuditEnabled),
    is_read_audit_enabled: cdktf.booleanToTerraform(struct!.isReadAuditEnabled),
    is_user_access_audit_enabled: cdktf.booleanToTerraform(struct!.isUserAccessAuditEnabled),
    log_retention_period_in_days: cdktf.numberToTerraform(struct!.logRetentionPeriodInDays),
  }
}


export function dataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAuditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isReadAuditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_user_access_audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isUserAccessAuditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAuditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuditEnabled = this._isAuditEnabled;
    }
    if (this._isReadAuditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadAuditEnabled = this._isReadAuditEnabled;
    }
    if (this._isUserAccessAuditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUserAccessAuditEnabled = this._isUserAccessAuditEnabled;
    }
    if (this._logRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionPeriodInDays = this._logRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isAuditEnabled = undefined;
      this._isReadAuditEnabled = undefined;
      this._isUserAccessAuditEnabled = undefined;
      this._logRetentionPeriodInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isAuditEnabled = value.isAuditEnabled;
      this._isReadAuditEnabled = value.isReadAuditEnabled;
      this._isUserAccessAuditEnabled = value.isUserAccessAuditEnabled;
      this._logRetentionPeriodInDays = value.logRetentionPeriodInDays;
    }
  }

  // is_audit_enabled - computed: false, optional: true, required: false
  private _isAuditEnabled?: boolean | cdktf.IResolvable; 
  public get isAuditEnabled() {
    return this.getBooleanAttribute('is_audit_enabled');
  }
  public set isAuditEnabled(value: boolean | cdktf.IResolvable) {
    this._isAuditEnabled = value;
  }
  public resetIsAuditEnabled() {
    this._isAuditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuditEnabledInput() {
    return this._isAuditEnabled;
  }

  // is_read_audit_enabled - computed: false, optional: true, required: false
  private _isReadAuditEnabled?: boolean | cdktf.IResolvable; 
  public get isReadAuditEnabled() {
    return this.getBooleanAttribute('is_read_audit_enabled');
  }
  public set isReadAuditEnabled(value: boolean | cdktf.IResolvable) {
    this._isReadAuditEnabled = value;
  }
  public resetIsReadAuditEnabled() {
    this._isReadAuditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadAuditEnabledInput() {
    return this._isReadAuditEnabled;
  }

  // is_user_access_audit_enabled - computed: false, optional: true, required: false
  private _isUserAccessAuditEnabled?: boolean | cdktf.IResolvable; 
  public get isUserAccessAuditEnabled() {
    return this.getBooleanAttribute('is_user_access_audit_enabled');
  }
  public set isUserAccessAuditEnabled(value: boolean | cdktf.IResolvable) {
    this._isUserAccessAuditEnabled = value;
  }
  public resetIsUserAccessAuditEnabled() {
    this._isUserAccessAuditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUserAccessAuditEnabledInput() {
    return this._isUserAccessAuditEnabled;
  }

  // log_retention_period_in_days - computed: false, optional: true, required: false
  private _logRetentionPeriodInDays?: number; 
  public get logRetentionPeriodInDays() {
    return this.getNumberAttribute('log_retention_period_in_days');
  }
  public set logRetentionPeriodInDays(value: number) {
    this._logRetentionPeriodInDays = value;
  }
  public resetLogRetentionPeriodInDays() {
    this._logRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionPeriodInDaysInput() {
    return this._logRetentionPeriodInDays;
  }
}
export interface DataPowerplatformEnvironmentSettingsAuditAndLogs {
  /**
  * Audit Settings. See [Audit Settings Overview](https://learn.microsoft.com/power-platform/admin/system-settings-dialog-box-auditing-tab) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#audit_settings DataPowerplatformEnvironmentSettings#audit_settings}
  */
  readonly auditSettings?: DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings;
  /**
  * Plugin trace log setting. Available options: Off, Exception, All. See [Plugin Trace Log Settings Overview](https://learn.microsoft.com/power-apps/developer/data-platform/logging-tracing) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#plugin_trace_log_setting DataPowerplatformEnvironmentSettings#plugin_trace_log_setting}
  */
  readonly pluginTraceLogSetting?: string;
}

export function dataPowerplatformEnvironmentSettingsAuditAndLogsToTerraform(struct?: DataPowerplatformEnvironmentSettingsAuditAndLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_settings: dataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsToTerraform(struct!.auditSettings),
    plugin_trace_log_setting: cdktf.stringToTerraform(struct!.pluginTraceLogSetting),
  }
}


export function dataPowerplatformEnvironmentSettingsAuditAndLogsToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsAuditAndLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_settings: {
      value: dataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsToHclTerraform(struct!.auditSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings",
    },
    plugin_trace_log_setting: {
      value: cdktf.stringToHclTerraform(struct!.pluginTraceLogSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsAuditAndLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsAuditAndLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSettings = this._auditSettings?.internalValue;
    }
    if (this._pluginTraceLogSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginTraceLogSetting = this._pluginTraceLogSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsAuditAndLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditSettings.internalValue = undefined;
      this._pluginTraceLogSetting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditSettings.internalValue = value.auditSettings;
      this._pluginTraceLogSetting = value.pluginTraceLogSetting;
    }
  }

  // audit_settings - computed: false, optional: true, required: false
  private _auditSettings = new DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettingsOutputReference(this, "audit_settings");
  public get auditSettings() {
    return this._auditSettings;
  }
  public putAuditSettings(value: DataPowerplatformEnvironmentSettingsAuditAndLogsAuditSettings) {
    this._auditSettings.internalValue = value;
  }
  public resetAuditSettings() {
    this._auditSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSettingsInput() {
    return this._auditSettings.internalValue;
  }

  // plugin_trace_log_setting - computed: false, optional: true, required: false
  private _pluginTraceLogSetting?: string; 
  public get pluginTraceLogSetting() {
    return this.getStringAttribute('plugin_trace_log_setting');
  }
  public set pluginTraceLogSetting(value: string) {
    this._pluginTraceLogSetting = value;
  }
  public resetPluginTraceLogSetting() {
    this._pluginTraceLogSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTraceLogSettingInput() {
    return this._pluginTraceLogSetting;
  }
}
export interface DataPowerplatformEnvironmentSettingsEmailEmailSettings {
  /**
  * Maximum file size that can be uploaded to the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#max_upload_file_size_in_bytes DataPowerplatformEnvironmentSettings#max_upload_file_size_in_bytes}
  */
  readonly maxUploadFileSizeInBytes?: number;
}

export function dataPowerplatformEnvironmentSettingsEmailEmailSettingsToTerraform(struct?: DataPowerplatformEnvironmentSettingsEmailEmailSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_upload_file_size_in_bytes: cdktf.numberToTerraform(struct!.maxUploadFileSizeInBytes),
  }
}


export function dataPowerplatformEnvironmentSettingsEmailEmailSettingsToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsEmailEmailSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_upload_file_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxUploadFileSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsEmailEmailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsEmailEmailSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUploadFileSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUploadFileSizeInBytes = this._maxUploadFileSizeInBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsEmailEmailSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUploadFileSizeInBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUploadFileSizeInBytes = value.maxUploadFileSizeInBytes;
    }
  }

  // max_upload_file_size_in_bytes - computed: false, optional: true, required: false
  private _maxUploadFileSizeInBytes?: number; 
  public get maxUploadFileSizeInBytes() {
    return this.getNumberAttribute('max_upload_file_size_in_bytes');
  }
  public set maxUploadFileSizeInBytes(value: number) {
    this._maxUploadFileSizeInBytes = value;
  }
  public resetMaxUploadFileSizeInBytes() {
    this._maxUploadFileSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadFileSizeInBytesInput() {
    return this._maxUploadFileSizeInBytes;
  }
}
export interface DataPowerplatformEnvironmentSettingsEmail {
  /**
  * Email Settings. See [Email Settings Overview](https://learn.microsoft.com/power-platform/admin/settings-email) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#email_settings DataPowerplatformEnvironmentSettings#email_settings}
  */
  readonly emailSettings?: DataPowerplatformEnvironmentSettingsEmailEmailSettings;
}

export function dataPowerplatformEnvironmentSettingsEmailToTerraform(struct?: DataPowerplatformEnvironmentSettingsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_settings: dataPowerplatformEnvironmentSettingsEmailEmailSettingsToTerraform(struct!.emailSettings),
  }
}


export function dataPowerplatformEnvironmentSettingsEmailToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_settings: {
      value: dataPowerplatformEnvironmentSettingsEmailEmailSettingsToHclTerraform(struct!.emailSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerplatformEnvironmentSettingsEmailEmailSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSettings = this._emailSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailSettings.internalValue = value.emailSettings;
    }
  }

  // email_settings - computed: false, optional: true, required: false
  private _emailSettings = new DataPowerplatformEnvironmentSettingsEmailEmailSettingsOutputReference(this, "email_settings");
  public get emailSettings() {
    return this._emailSettings;
  }
  public putEmailSettings(value: DataPowerplatformEnvironmentSettingsEmailEmailSettings) {
    this._emailSettings.internalValue = value;
  }
  public resetEmailSettings() {
    this._emailSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSettingsInput() {
    return this._emailSettings.internalValue;
  }
}
export interface DataPowerplatformEnvironmentSettingsProductBehaviorSettings {
  /**
  * Show dashboard cards in expanded state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#show_dashboard_cards_in_expanded_state DataPowerplatformEnvironmentSettings#show_dashboard_cards_in_expanded_state}
  */
  readonly showDashboardCardsInExpandedState?: boolean | cdktf.IResolvable;
}

export function dataPowerplatformEnvironmentSettingsProductBehaviorSettingsToTerraform(struct?: DataPowerplatformEnvironmentSettingsProductBehaviorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_dashboard_cards_in_expanded_state: cdktf.booleanToTerraform(struct!.showDashboardCardsInExpandedState),
  }
}


export function dataPowerplatformEnvironmentSettingsProductBehaviorSettingsToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsProductBehaviorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_dashboard_cards_in_expanded_state: {
      value: cdktf.booleanToHclTerraform(struct!.showDashboardCardsInExpandedState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsProductBehaviorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsProductBehaviorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showDashboardCardsInExpandedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDashboardCardsInExpandedState = this._showDashboardCardsInExpandedState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsProductBehaviorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showDashboardCardsInExpandedState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showDashboardCardsInExpandedState = value.showDashboardCardsInExpandedState;
    }
  }

  // show_dashboard_cards_in_expanded_state - computed: false, optional: true, required: false
  private _showDashboardCardsInExpandedState?: boolean | cdktf.IResolvable; 
  public get showDashboardCardsInExpandedState() {
    return this.getBooleanAttribute('show_dashboard_cards_in_expanded_state');
  }
  public set showDashboardCardsInExpandedState(value: boolean | cdktf.IResolvable) {
    this._showDashboardCardsInExpandedState = value;
  }
  public resetShowDashboardCardsInExpandedState() {
    this._showDashboardCardsInExpandedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDashboardCardsInExpandedStateInput() {
    return this._showDashboardCardsInExpandedState;
  }
}
export interface DataPowerplatformEnvironmentSettingsProductFeatures {
  /**
  * Allows AI to generate automatic suggestions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#ai_form_fill_automatic_suggestions DataPowerplatformEnvironmentSettings#ai_form_fill_automatic_suggestions}
  */
  readonly aiFormFillAutomaticSuggestions?: string;
  /**
  * Allows AI to provide smart paste and file suggestions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#ai_form_fill_smart_paste_and_file_suggestions DataPowerplatformEnvironmentSettings#ai_form_fill_smart_paste_and_file_suggestions}
  */
  readonly aiFormFillSmartPasteAndFileSuggestions?: string;
  /**
  * Allows AI to provide a form fill toolbar with suggestions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#ai_form_fill_toolbar DataPowerplatformEnvironmentSettings#ai_form_fill_toolbar}
  */
  readonly aiFormFillToolbar?: string;
  /**
  * Allow AI to generate charts to visualize the data in a view. [Learn more](https://go.microsoft.com/fwlink/?linkid=2300297)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#allow_ai_to_generate_charts DataPowerplatformEnvironmentSettings#allow_ai_to_generate_charts}
  */
  readonly allowAiToGenerateCharts?: string;
  /**
  * Allow agent access owners and editors to see session transcripts from conversations interactions in their agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_access_to_session_transcripts_for_copilot_studio DataPowerplatformEnvironmentSettings#enable_access_to_session_transcripts_for_copilot_studio}
  */
  readonly enableAccessToSessionTranscriptsForCopilotStudio?: boolean | cdktf.IResolvable;
  /**
  * Allow users to analyze data using an AI-powered chat experience in [canvas](https://go.microsoft.com/fwlink/?linkid=2244583) and [model-driven apps](https://go.microsoft.com/fwlink/?linkid=2244584). [Learn more](https://go.microsoft.com/fwlink/?linkid=2247541) [Requires Copilot licensing](https://go.microsoft.com/fwlink/?linkid=2263413)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_ai_powered_chat DataPowerplatformEnvironmentSettings#enable_ai_powered_chat}
  */
  readonly enableAiPoweredChat?: string;
  /**
  * Enable the AI prompts feature in Power Platform and Copilot Studio. [Learn more](https://go.microsoft.com/fwlink/?linkid=2283738)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_ai_prompts DataPowerplatformEnvironmentSettings#enable_ai_prompts}
  */
  readonly enableAiPrompts?: boolean | cdktf.IResolvable;
  /**
  * Allow canvas editors to insert the Copilot answer component, which allows users to receive an AI-powered answer to a predefined data query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_copilot_answer_control DataPowerplatformEnvironmentSettings#enable_copilot_answer_control}
  */
  readonly enableCopilotAnswerControl?: boolean | cdktf.IResolvable;
  /**
  * Allow cross-geo sharing of aggregated analytics data if your tenant preferred data location for Viva Insights is different from the location of your Copilot Studio environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_copilot_studio_cross_geo_share_data_with_viva_insights DataPowerplatformEnvironmentSettings#enable_copilot_studio_cross_geo_share_data_with_viva_insights}
  */
  readonly enableCopilotStudioCrossGeoShareDataWithVivaInsights?: boolean | cdktf.IResolvable;
  /**
  * Allow Copilot Studio to share data with Viva Insights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_copilot_studio_share_data_with_viva_insights DataPowerplatformEnvironmentSettings#enable_copilot_studio_share_data_with_viva_insights}
  */
  readonly enableCopilotStudioShareDataWithVivaInsights?: boolean | cdktf.IResolvable;
  /**
  * Enable new AI-powered Copilot features for people who make apps. [Learn more](https://go.microsoft.com/fwlink/?linkid=2223555)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_powerapps_maker_bot DataPowerplatformEnvironmentSettings#enable_powerapps_maker_bot}
  */
  readonly enablePowerappsMakerBot?: boolean | cdktf.IResolvable;
  /**
  * Let people use AI models that are experimental or in preview to make agents, prompts, apps, flow and more in Copilot Studio. [Learn more](https://go.microsoft.com/fwlink/?linkid=2331400)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_preview_and_experimental_ai_models DataPowerplatformEnvironmentSettings#enable_preview_and_experimental_ai_models}
  */
  readonly enablePreviewAndExperimentalAiModels?: boolean | cdktf.IResolvable;
  /**
  * Allow conversation transcripts and their associated metadata to be saved in Dataverse (required for enhanced reporting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_transcript_recording_for_copilot_studio DataPowerplatformEnvironmentSettings#enable_transcript_recording_for_copilot_studio}
  */
  readonly enableTranscriptRecordingForCopilotStudio?: boolean | cdktf.IResolvable;
  /**
  * Find your data in model-driven app views with the help of Copilot. [Learn more](https://go.microsoft.com/fwlink/?linkid=2281374)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#natural_language_grid_and_view_search DataPowerplatformEnvironmentSettings#natural_language_grid_and_view_search}
  */
  readonly naturalLanguageGridAndViewSearch?: string;
  /**
  * Power Apps component framework for canvas apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#power_apps_component_framework_for_canvas_apps DataPowerplatformEnvironmentSettings#power_apps_component_framework_for_canvas_apps}
  */
  readonly powerAppsComponentFrameworkForCanvasApps?: boolean | cdktf.IResolvable;
}

export function dataPowerplatformEnvironmentSettingsProductFeaturesToTerraform(struct?: DataPowerplatformEnvironmentSettingsProductFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_form_fill_automatic_suggestions: cdktf.stringToTerraform(struct!.aiFormFillAutomaticSuggestions),
    ai_form_fill_smart_paste_and_file_suggestions: cdktf.stringToTerraform(struct!.aiFormFillSmartPasteAndFileSuggestions),
    ai_form_fill_toolbar: cdktf.stringToTerraform(struct!.aiFormFillToolbar),
    allow_ai_to_generate_charts: cdktf.stringToTerraform(struct!.allowAiToGenerateCharts),
    enable_access_to_session_transcripts_for_copilot_studio: cdktf.booleanToTerraform(struct!.enableAccessToSessionTranscriptsForCopilotStudio),
    enable_ai_powered_chat: cdktf.stringToTerraform(struct!.enableAiPoweredChat),
    enable_ai_prompts: cdktf.booleanToTerraform(struct!.enableAiPrompts),
    enable_copilot_answer_control: cdktf.booleanToTerraform(struct!.enableCopilotAnswerControl),
    enable_copilot_studio_cross_geo_share_data_with_viva_insights: cdktf.booleanToTerraform(struct!.enableCopilotStudioCrossGeoShareDataWithVivaInsights),
    enable_copilot_studio_share_data_with_viva_insights: cdktf.booleanToTerraform(struct!.enableCopilotStudioShareDataWithVivaInsights),
    enable_powerapps_maker_bot: cdktf.booleanToTerraform(struct!.enablePowerappsMakerBot),
    enable_preview_and_experimental_ai_models: cdktf.booleanToTerraform(struct!.enablePreviewAndExperimentalAiModels),
    enable_transcript_recording_for_copilot_studio: cdktf.booleanToTerraform(struct!.enableTranscriptRecordingForCopilotStudio),
    natural_language_grid_and_view_search: cdktf.stringToTerraform(struct!.naturalLanguageGridAndViewSearch),
    power_apps_component_framework_for_canvas_apps: cdktf.booleanToTerraform(struct!.powerAppsComponentFrameworkForCanvasApps),
  }
}


export function dataPowerplatformEnvironmentSettingsProductFeaturesToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsProductFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_form_fill_automatic_suggestions: {
      value: cdktf.stringToHclTerraform(struct!.aiFormFillAutomaticSuggestions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ai_form_fill_smart_paste_and_file_suggestions: {
      value: cdktf.stringToHclTerraform(struct!.aiFormFillSmartPasteAndFileSuggestions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ai_form_fill_toolbar: {
      value: cdktf.stringToHclTerraform(struct!.aiFormFillToolbar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_ai_to_generate_charts: {
      value: cdktf.stringToHclTerraform(struct!.allowAiToGenerateCharts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_access_to_session_transcripts_for_copilot_studio: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessToSessionTranscriptsForCopilotStudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ai_powered_chat: {
      value: cdktf.stringToHclTerraform(struct!.enableAiPoweredChat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ai_prompts: {
      value: cdktf.booleanToHclTerraform(struct!.enableAiPrompts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_copilot_answer_control: {
      value: cdktf.booleanToHclTerraform(struct!.enableCopilotAnswerControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_copilot_studio_cross_geo_share_data_with_viva_insights: {
      value: cdktf.booleanToHclTerraform(struct!.enableCopilotStudioCrossGeoShareDataWithVivaInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_copilot_studio_share_data_with_viva_insights: {
      value: cdktf.booleanToHclTerraform(struct!.enableCopilotStudioShareDataWithVivaInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_powerapps_maker_bot: {
      value: cdktf.booleanToHclTerraform(struct!.enablePowerappsMakerBot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_preview_and_experimental_ai_models: {
      value: cdktf.booleanToHclTerraform(struct!.enablePreviewAndExperimentalAiModels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_transcript_recording_for_copilot_studio: {
      value: cdktf.booleanToHclTerraform(struct!.enableTranscriptRecordingForCopilotStudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    natural_language_grid_and_view_search: {
      value: cdktf.stringToHclTerraform(struct!.naturalLanguageGridAndViewSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_apps_component_framework_for_canvas_apps: {
      value: cdktf.booleanToHclTerraform(struct!.powerAppsComponentFrameworkForCanvasApps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsProductFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsProductFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiFormFillAutomaticSuggestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiFormFillAutomaticSuggestions = this._aiFormFillAutomaticSuggestions;
    }
    if (this._aiFormFillSmartPasteAndFileSuggestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiFormFillSmartPasteAndFileSuggestions = this._aiFormFillSmartPasteAndFileSuggestions;
    }
    if (this._aiFormFillToolbar !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiFormFillToolbar = this._aiFormFillToolbar;
    }
    if (this._allowAiToGenerateCharts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAiToGenerateCharts = this._allowAiToGenerateCharts;
    }
    if (this._enableAccessToSessionTranscriptsForCopilotStudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessToSessionTranscriptsForCopilotStudio = this._enableAccessToSessionTranscriptsForCopilotStudio;
    }
    if (this._enableAiPoweredChat !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAiPoweredChat = this._enableAiPoweredChat;
    }
    if (this._enableAiPrompts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAiPrompts = this._enableAiPrompts;
    }
    if (this._enableCopilotAnswerControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCopilotAnswerControl = this._enableCopilotAnswerControl;
    }
    if (this._enableCopilotStudioCrossGeoShareDataWithVivaInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCopilotStudioCrossGeoShareDataWithVivaInsights = this._enableCopilotStudioCrossGeoShareDataWithVivaInsights;
    }
    if (this._enableCopilotStudioShareDataWithVivaInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCopilotStudioShareDataWithVivaInsights = this._enableCopilotStudioShareDataWithVivaInsights;
    }
    if (this._enablePowerappsMakerBot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePowerappsMakerBot = this._enablePowerappsMakerBot;
    }
    if (this._enablePreviewAndExperimentalAiModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePreviewAndExperimentalAiModels = this._enablePreviewAndExperimentalAiModels;
    }
    if (this._enableTranscriptRecordingForCopilotStudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTranscriptRecordingForCopilotStudio = this._enableTranscriptRecordingForCopilotStudio;
    }
    if (this._naturalLanguageGridAndViewSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageGridAndViewSearch = this._naturalLanguageGridAndViewSearch;
    }
    if (this._powerAppsComponentFrameworkForCanvasApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerAppsComponentFrameworkForCanvasApps = this._powerAppsComponentFrameworkForCanvasApps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsProductFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiFormFillAutomaticSuggestions = undefined;
      this._aiFormFillSmartPasteAndFileSuggestions = undefined;
      this._aiFormFillToolbar = undefined;
      this._allowAiToGenerateCharts = undefined;
      this._enableAccessToSessionTranscriptsForCopilotStudio = undefined;
      this._enableAiPoweredChat = undefined;
      this._enableAiPrompts = undefined;
      this._enableCopilotAnswerControl = undefined;
      this._enableCopilotStudioCrossGeoShareDataWithVivaInsights = undefined;
      this._enableCopilotStudioShareDataWithVivaInsights = undefined;
      this._enablePowerappsMakerBot = undefined;
      this._enablePreviewAndExperimentalAiModels = undefined;
      this._enableTranscriptRecordingForCopilotStudio = undefined;
      this._naturalLanguageGridAndViewSearch = undefined;
      this._powerAppsComponentFrameworkForCanvasApps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiFormFillAutomaticSuggestions = value.aiFormFillAutomaticSuggestions;
      this._aiFormFillSmartPasteAndFileSuggestions = value.aiFormFillSmartPasteAndFileSuggestions;
      this._aiFormFillToolbar = value.aiFormFillToolbar;
      this._allowAiToGenerateCharts = value.allowAiToGenerateCharts;
      this._enableAccessToSessionTranscriptsForCopilotStudio = value.enableAccessToSessionTranscriptsForCopilotStudio;
      this._enableAiPoweredChat = value.enableAiPoweredChat;
      this._enableAiPrompts = value.enableAiPrompts;
      this._enableCopilotAnswerControl = value.enableCopilotAnswerControl;
      this._enableCopilotStudioCrossGeoShareDataWithVivaInsights = value.enableCopilotStudioCrossGeoShareDataWithVivaInsights;
      this._enableCopilotStudioShareDataWithVivaInsights = value.enableCopilotStudioShareDataWithVivaInsights;
      this._enablePowerappsMakerBot = value.enablePowerappsMakerBot;
      this._enablePreviewAndExperimentalAiModels = value.enablePreviewAndExperimentalAiModels;
      this._enableTranscriptRecordingForCopilotStudio = value.enableTranscriptRecordingForCopilotStudio;
      this._naturalLanguageGridAndViewSearch = value.naturalLanguageGridAndViewSearch;
      this._powerAppsComponentFrameworkForCanvasApps = value.powerAppsComponentFrameworkForCanvasApps;
    }
  }

  // ai_form_fill_automatic_suggestions - computed: false, optional: true, required: false
  private _aiFormFillAutomaticSuggestions?: string; 
  public get aiFormFillAutomaticSuggestions() {
    return this.getStringAttribute('ai_form_fill_automatic_suggestions');
  }
  public set aiFormFillAutomaticSuggestions(value: string) {
    this._aiFormFillAutomaticSuggestions = value;
  }
  public resetAiFormFillAutomaticSuggestions() {
    this._aiFormFillAutomaticSuggestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFormFillAutomaticSuggestionsInput() {
    return this._aiFormFillAutomaticSuggestions;
  }

  // ai_form_fill_smart_paste_and_file_suggestions - computed: false, optional: true, required: false
  private _aiFormFillSmartPasteAndFileSuggestions?: string; 
  public get aiFormFillSmartPasteAndFileSuggestions() {
    return this.getStringAttribute('ai_form_fill_smart_paste_and_file_suggestions');
  }
  public set aiFormFillSmartPasteAndFileSuggestions(value: string) {
    this._aiFormFillSmartPasteAndFileSuggestions = value;
  }
  public resetAiFormFillSmartPasteAndFileSuggestions() {
    this._aiFormFillSmartPasteAndFileSuggestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFormFillSmartPasteAndFileSuggestionsInput() {
    return this._aiFormFillSmartPasteAndFileSuggestions;
  }

  // ai_form_fill_toolbar - computed: false, optional: true, required: false
  private _aiFormFillToolbar?: string; 
  public get aiFormFillToolbar() {
    return this.getStringAttribute('ai_form_fill_toolbar');
  }
  public set aiFormFillToolbar(value: string) {
    this._aiFormFillToolbar = value;
  }
  public resetAiFormFillToolbar() {
    this._aiFormFillToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFormFillToolbarInput() {
    return this._aiFormFillToolbar;
  }

  // allow_ai_to_generate_charts - computed: false, optional: true, required: false
  private _allowAiToGenerateCharts?: string; 
  public get allowAiToGenerateCharts() {
    return this.getStringAttribute('allow_ai_to_generate_charts');
  }
  public set allowAiToGenerateCharts(value: string) {
    this._allowAiToGenerateCharts = value;
  }
  public resetAllowAiToGenerateCharts() {
    this._allowAiToGenerateCharts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAiToGenerateChartsInput() {
    return this._allowAiToGenerateCharts;
  }

  // enable_access_to_session_transcripts_for_copilot_studio - computed: false, optional: true, required: false
  private _enableAccessToSessionTranscriptsForCopilotStudio?: boolean | cdktf.IResolvable; 
  public get enableAccessToSessionTranscriptsForCopilotStudio() {
    return this.getBooleanAttribute('enable_access_to_session_transcripts_for_copilot_studio');
  }
  public set enableAccessToSessionTranscriptsForCopilotStudio(value: boolean | cdktf.IResolvable) {
    this._enableAccessToSessionTranscriptsForCopilotStudio = value;
  }
  public resetEnableAccessToSessionTranscriptsForCopilotStudio() {
    this._enableAccessToSessionTranscriptsForCopilotStudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessToSessionTranscriptsForCopilotStudioInput() {
    return this._enableAccessToSessionTranscriptsForCopilotStudio;
  }

  // enable_ai_powered_chat - computed: false, optional: true, required: false
  private _enableAiPoweredChat?: string; 
  public get enableAiPoweredChat() {
    return this.getStringAttribute('enable_ai_powered_chat');
  }
  public set enableAiPoweredChat(value: string) {
    this._enableAiPoweredChat = value;
  }
  public resetEnableAiPoweredChat() {
    this._enableAiPoweredChat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAiPoweredChatInput() {
    return this._enableAiPoweredChat;
  }

  // enable_ai_prompts - computed: false, optional: true, required: false
  private _enableAiPrompts?: boolean | cdktf.IResolvable; 
  public get enableAiPrompts() {
    return this.getBooleanAttribute('enable_ai_prompts');
  }
  public set enableAiPrompts(value: boolean | cdktf.IResolvable) {
    this._enableAiPrompts = value;
  }
  public resetEnableAiPrompts() {
    this._enableAiPrompts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAiPromptsInput() {
    return this._enableAiPrompts;
  }

  // enable_copilot_answer_control - computed: false, optional: true, required: false
  private _enableCopilotAnswerControl?: boolean | cdktf.IResolvable; 
  public get enableCopilotAnswerControl() {
    return this.getBooleanAttribute('enable_copilot_answer_control');
  }
  public set enableCopilotAnswerControl(value: boolean | cdktf.IResolvable) {
    this._enableCopilotAnswerControl = value;
  }
  public resetEnableCopilotAnswerControl() {
    this._enableCopilotAnswerControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopilotAnswerControlInput() {
    return this._enableCopilotAnswerControl;
  }

  // enable_copilot_studio_cross_geo_share_data_with_viva_insights - computed: false, optional: true, required: false
  private _enableCopilotStudioCrossGeoShareDataWithVivaInsights?: boolean | cdktf.IResolvable; 
  public get enableCopilotStudioCrossGeoShareDataWithVivaInsights() {
    return this.getBooleanAttribute('enable_copilot_studio_cross_geo_share_data_with_viva_insights');
  }
  public set enableCopilotStudioCrossGeoShareDataWithVivaInsights(value: boolean | cdktf.IResolvable) {
    this._enableCopilotStudioCrossGeoShareDataWithVivaInsights = value;
  }
  public resetEnableCopilotStudioCrossGeoShareDataWithVivaInsights() {
    this._enableCopilotStudioCrossGeoShareDataWithVivaInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopilotStudioCrossGeoShareDataWithVivaInsightsInput() {
    return this._enableCopilotStudioCrossGeoShareDataWithVivaInsights;
  }

  // enable_copilot_studio_share_data_with_viva_insights - computed: false, optional: true, required: false
  private _enableCopilotStudioShareDataWithVivaInsights?: boolean | cdktf.IResolvable; 
  public get enableCopilotStudioShareDataWithVivaInsights() {
    return this.getBooleanAttribute('enable_copilot_studio_share_data_with_viva_insights');
  }
  public set enableCopilotStudioShareDataWithVivaInsights(value: boolean | cdktf.IResolvable) {
    this._enableCopilotStudioShareDataWithVivaInsights = value;
  }
  public resetEnableCopilotStudioShareDataWithVivaInsights() {
    this._enableCopilotStudioShareDataWithVivaInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopilotStudioShareDataWithVivaInsightsInput() {
    return this._enableCopilotStudioShareDataWithVivaInsights;
  }

  // enable_powerapps_maker_bot - computed: false, optional: true, required: false
  private _enablePowerappsMakerBot?: boolean | cdktf.IResolvable; 
  public get enablePowerappsMakerBot() {
    return this.getBooleanAttribute('enable_powerapps_maker_bot');
  }
  public set enablePowerappsMakerBot(value: boolean | cdktf.IResolvable) {
    this._enablePowerappsMakerBot = value;
  }
  public resetEnablePowerappsMakerBot() {
    this._enablePowerappsMakerBot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePowerappsMakerBotInput() {
    return this._enablePowerappsMakerBot;
  }

  // enable_preview_and_experimental_ai_models - computed: false, optional: true, required: false
  private _enablePreviewAndExperimentalAiModels?: boolean | cdktf.IResolvable; 
  public get enablePreviewAndExperimentalAiModels() {
    return this.getBooleanAttribute('enable_preview_and_experimental_ai_models');
  }
  public set enablePreviewAndExperimentalAiModels(value: boolean | cdktf.IResolvable) {
    this._enablePreviewAndExperimentalAiModels = value;
  }
  public resetEnablePreviewAndExperimentalAiModels() {
    this._enablePreviewAndExperimentalAiModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewAndExperimentalAiModelsInput() {
    return this._enablePreviewAndExperimentalAiModels;
  }

  // enable_transcript_recording_for_copilot_studio - computed: false, optional: true, required: false
  private _enableTranscriptRecordingForCopilotStudio?: boolean | cdktf.IResolvable; 
  public get enableTranscriptRecordingForCopilotStudio() {
    return this.getBooleanAttribute('enable_transcript_recording_for_copilot_studio');
  }
  public set enableTranscriptRecordingForCopilotStudio(value: boolean | cdktf.IResolvable) {
    this._enableTranscriptRecordingForCopilotStudio = value;
  }
  public resetEnableTranscriptRecordingForCopilotStudio() {
    this._enableTranscriptRecordingForCopilotStudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTranscriptRecordingForCopilotStudioInput() {
    return this._enableTranscriptRecordingForCopilotStudio;
  }

  // natural_language_grid_and_view_search - computed: false, optional: true, required: false
  private _naturalLanguageGridAndViewSearch?: string; 
  public get naturalLanguageGridAndViewSearch() {
    return this.getStringAttribute('natural_language_grid_and_view_search');
  }
  public set naturalLanguageGridAndViewSearch(value: string) {
    this._naturalLanguageGridAndViewSearch = value;
  }
  public resetNaturalLanguageGridAndViewSearch() {
    this._naturalLanguageGridAndViewSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageGridAndViewSearchInput() {
    return this._naturalLanguageGridAndViewSearch;
  }

  // power_apps_component_framework_for_canvas_apps - computed: false, optional: true, required: false
  private _powerAppsComponentFrameworkForCanvasApps?: boolean | cdktf.IResolvable; 
  public get powerAppsComponentFrameworkForCanvasApps() {
    return this.getBooleanAttribute('power_apps_component_framework_for_canvas_apps');
  }
  public set powerAppsComponentFrameworkForCanvasApps(value: boolean | cdktf.IResolvable) {
    this._powerAppsComponentFrameworkForCanvasApps = value;
  }
  public resetPowerAppsComponentFrameworkForCanvasApps() {
    this._powerAppsComponentFrameworkForCanvasApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerAppsComponentFrameworkForCanvasAppsInput() {
    return this._powerAppsComponentFrameworkForCanvasApps;
  }
}
export interface DataPowerplatformEnvironmentSettingsProductSecurity {
  /**
  * Allow application user access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#allow_application_user_access DataPowerplatformEnvironmentSettings#allow_application_user_access}
  */
  readonly allowApplicationUserAccess?: boolean | cdktf.IResolvable;
  /**
  * Allow Microsoft trusted service tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#allow_microsoft_trusted_service_tags DataPowerplatformEnvironmentSettings#allow_microsoft_trusted_service_tags}
  */
  readonly allowMicrosoftTrustedServiceTags?: boolean | cdktf.IResolvable;
  /**
  * Allowed IP range for firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#allowed_ip_range_for_firewall DataPowerplatformEnvironmentSettings#allowed_ip_range_for_firewall}
  */
  readonly allowedIpRangeForFirewall?: string[];
  /**
  * Allowed service tags for firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#allowed_service_tags_for_firewall DataPowerplatformEnvironmentSettings#allowed_service_tags_for_firewall}
  */
  readonly allowedServiceTagsForFirewall?: string[];
  /**
  * Enable IP based cookie binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_ip_based_cookie_binding DataPowerplatformEnvironmentSettings#enable_ip_based_cookie_binding}
  */
  readonly enableIpBasedCookieBinding?: boolean | cdktf.IResolvable;
  /**
  * Enable IP based firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_ip_based_firewall_rule DataPowerplatformEnvironmentSettings#enable_ip_based_firewall_rule}
  */
  readonly enableIpBasedFirewallRule?: boolean | cdktf.IResolvable;
  /**
  * Enable IP based firewall rule in audit mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#enable_ip_based_firewall_rule_in_audit_mode DataPowerplatformEnvironmentSettings#enable_ip_based_firewall_rule_in_audit_mode}
  */
  readonly enableIpBasedFirewallRuleInAuditMode?: boolean | cdktf.IResolvable;
  /**
  * Reverse proxy IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#reverse_proxy_ip_addresses DataPowerplatformEnvironmentSettings#reverse_proxy_ip_addresses}
  */
  readonly reverseProxyIpAddresses?: string[];
}

export function dataPowerplatformEnvironmentSettingsProductSecurityToTerraform(struct?: DataPowerplatformEnvironmentSettingsProductSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_application_user_access: cdktf.booleanToTerraform(struct!.allowApplicationUserAccess),
    allow_microsoft_trusted_service_tags: cdktf.booleanToTerraform(struct!.allowMicrosoftTrustedServiceTags),
    allowed_ip_range_for_firewall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpRangeForFirewall),
    allowed_service_tags_for_firewall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServiceTagsForFirewall),
    enable_ip_based_cookie_binding: cdktf.booleanToTerraform(struct!.enableIpBasedCookieBinding),
    enable_ip_based_firewall_rule: cdktf.booleanToTerraform(struct!.enableIpBasedFirewallRule),
    enable_ip_based_firewall_rule_in_audit_mode: cdktf.booleanToTerraform(struct!.enableIpBasedFirewallRuleInAuditMode),
    reverse_proxy_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseProxyIpAddresses),
  }
}


export function dataPowerplatformEnvironmentSettingsProductSecurityToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsProductSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_application_user_access: {
      value: cdktf.booleanToHclTerraform(struct!.allowApplicationUserAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_microsoft_trusted_service_tags: {
      value: cdktf.booleanToHclTerraform(struct!.allowMicrosoftTrustedServiceTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_ip_range_for_firewall: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpRangeForFirewall),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_service_tags_for_firewall: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServiceTagsForFirewall),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_ip_based_cookie_binding: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpBasedCookieBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_based_firewall_rule: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpBasedFirewallRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_based_firewall_rule_in_audit_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpBasedFirewallRuleInAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_proxy_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseProxyIpAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsProductSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsProductSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApplicationUserAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApplicationUserAccess = this._allowApplicationUserAccess;
    }
    if (this._allowMicrosoftTrustedServiceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMicrosoftTrustedServiceTags = this._allowMicrosoftTrustedServiceTags;
    }
    if (this._allowedIpRangeForFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpRangeForFirewall = this._allowedIpRangeForFirewall;
    }
    if (this._allowedServiceTagsForFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServiceTagsForFirewall = this._allowedServiceTagsForFirewall;
    }
    if (this._enableIpBasedCookieBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpBasedCookieBinding = this._enableIpBasedCookieBinding;
    }
    if (this._enableIpBasedFirewallRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpBasedFirewallRule = this._enableIpBasedFirewallRule;
    }
    if (this._enableIpBasedFirewallRuleInAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpBasedFirewallRuleInAuditMode = this._enableIpBasedFirewallRuleInAuditMode;
    }
    if (this._reverseProxyIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseProxyIpAddresses = this._reverseProxyIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsProductSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowApplicationUserAccess = undefined;
      this._allowMicrosoftTrustedServiceTags = undefined;
      this._allowedIpRangeForFirewall = undefined;
      this._allowedServiceTagsForFirewall = undefined;
      this._enableIpBasedCookieBinding = undefined;
      this._enableIpBasedFirewallRule = undefined;
      this._enableIpBasedFirewallRuleInAuditMode = undefined;
      this._reverseProxyIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowApplicationUserAccess = value.allowApplicationUserAccess;
      this._allowMicrosoftTrustedServiceTags = value.allowMicrosoftTrustedServiceTags;
      this._allowedIpRangeForFirewall = value.allowedIpRangeForFirewall;
      this._allowedServiceTagsForFirewall = value.allowedServiceTagsForFirewall;
      this._enableIpBasedCookieBinding = value.enableIpBasedCookieBinding;
      this._enableIpBasedFirewallRule = value.enableIpBasedFirewallRule;
      this._enableIpBasedFirewallRuleInAuditMode = value.enableIpBasedFirewallRuleInAuditMode;
      this._reverseProxyIpAddresses = value.reverseProxyIpAddresses;
    }
  }

  // allow_application_user_access - computed: false, optional: true, required: false
  private _allowApplicationUserAccess?: boolean | cdktf.IResolvable; 
  public get allowApplicationUserAccess() {
    return this.getBooleanAttribute('allow_application_user_access');
  }
  public set allowApplicationUserAccess(value: boolean | cdktf.IResolvable) {
    this._allowApplicationUserAccess = value;
  }
  public resetAllowApplicationUserAccess() {
    this._allowApplicationUserAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApplicationUserAccessInput() {
    return this._allowApplicationUserAccess;
  }

  // allow_microsoft_trusted_service_tags - computed: false, optional: true, required: false
  private _allowMicrosoftTrustedServiceTags?: boolean | cdktf.IResolvable; 
  public get allowMicrosoftTrustedServiceTags() {
    return this.getBooleanAttribute('allow_microsoft_trusted_service_tags');
  }
  public set allowMicrosoftTrustedServiceTags(value: boolean | cdktf.IResolvable) {
    this._allowMicrosoftTrustedServiceTags = value;
  }
  public resetAllowMicrosoftTrustedServiceTags() {
    this._allowMicrosoftTrustedServiceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMicrosoftTrustedServiceTagsInput() {
    return this._allowMicrosoftTrustedServiceTags;
  }

  // allowed_ip_range_for_firewall - computed: false, optional: true, required: false
  private _allowedIpRangeForFirewall?: string[]; 
  public get allowedIpRangeForFirewall() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_range_for_firewall'));
  }
  public set allowedIpRangeForFirewall(value: string[]) {
    this._allowedIpRangeForFirewall = value;
  }
  public resetAllowedIpRangeForFirewall() {
    this._allowedIpRangeForFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangeForFirewallInput() {
    return this._allowedIpRangeForFirewall;
  }

  // allowed_service_tags_for_firewall - computed: false, optional: true, required: false
  private _allowedServiceTagsForFirewall?: string[]; 
  public get allowedServiceTagsForFirewall() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_service_tags_for_firewall'));
  }
  public set allowedServiceTagsForFirewall(value: string[]) {
    this._allowedServiceTagsForFirewall = value;
  }
  public resetAllowedServiceTagsForFirewall() {
    this._allowedServiceTagsForFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServiceTagsForFirewallInput() {
    return this._allowedServiceTagsForFirewall;
  }

  // enable_ip_based_cookie_binding - computed: false, optional: true, required: false
  private _enableIpBasedCookieBinding?: boolean | cdktf.IResolvable; 
  public get enableIpBasedCookieBinding() {
    return this.getBooleanAttribute('enable_ip_based_cookie_binding');
  }
  public set enableIpBasedCookieBinding(value: boolean | cdktf.IResolvable) {
    this._enableIpBasedCookieBinding = value;
  }
  public resetEnableIpBasedCookieBinding() {
    this._enableIpBasedCookieBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpBasedCookieBindingInput() {
    return this._enableIpBasedCookieBinding;
  }

  // enable_ip_based_firewall_rule - computed: false, optional: true, required: false
  private _enableIpBasedFirewallRule?: boolean | cdktf.IResolvable; 
  public get enableIpBasedFirewallRule() {
    return this.getBooleanAttribute('enable_ip_based_firewall_rule');
  }
  public set enableIpBasedFirewallRule(value: boolean | cdktf.IResolvable) {
    this._enableIpBasedFirewallRule = value;
  }
  public resetEnableIpBasedFirewallRule() {
    this._enableIpBasedFirewallRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpBasedFirewallRuleInput() {
    return this._enableIpBasedFirewallRule;
  }

  // enable_ip_based_firewall_rule_in_audit_mode - computed: false, optional: true, required: false
  private _enableIpBasedFirewallRuleInAuditMode?: boolean | cdktf.IResolvable; 
  public get enableIpBasedFirewallRuleInAuditMode() {
    return this.getBooleanAttribute('enable_ip_based_firewall_rule_in_audit_mode');
  }
  public set enableIpBasedFirewallRuleInAuditMode(value: boolean | cdktf.IResolvable) {
    this._enableIpBasedFirewallRuleInAuditMode = value;
  }
  public resetEnableIpBasedFirewallRuleInAuditMode() {
    this._enableIpBasedFirewallRuleInAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpBasedFirewallRuleInAuditModeInput() {
    return this._enableIpBasedFirewallRuleInAuditMode;
  }

  // reverse_proxy_ip_addresses - computed: false, optional: true, required: false
  private _reverseProxyIpAddresses?: string[]; 
  public get reverseProxyIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('reverse_proxy_ip_addresses'));
  }
  public set reverseProxyIpAddresses(value: string[]) {
    this._reverseProxyIpAddresses = value;
  }
  public resetReverseProxyIpAddresses() {
    this._reverseProxyIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyIpAddressesInput() {
    return this._reverseProxyIpAddresses;
  }
}
export interface DataPowerplatformEnvironmentSettingsProduct {
  /**
  * Behavior Settings.See [Behavior Settings Overview](https://learn.microsoft.com/power-platform/admin/settings-behavior) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#behavior_settings DataPowerplatformEnvironmentSettings#behavior_settings}
  */
  readonly behaviorSettings?: DataPowerplatformEnvironmentSettingsProductBehaviorSettings;
  /**
  * Features. See [Features Overview](https://learn.microsoft.com/power-platform/admin/settings-features) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#features DataPowerplatformEnvironmentSettings#features}
  */
  readonly features?: DataPowerplatformEnvironmentSettingsProductFeatures;
  /**
  * Security. See [Security Overview](https://learn.microsoft.com/en-us/power-platform/admin/settings-privacy-security) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#security DataPowerplatformEnvironmentSettings#security}
  */
  readonly security?: DataPowerplatformEnvironmentSettingsProductSecurity;
}

export function dataPowerplatformEnvironmentSettingsProductToTerraform(struct?: DataPowerplatformEnvironmentSettingsProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior_settings: dataPowerplatformEnvironmentSettingsProductBehaviorSettingsToTerraform(struct!.behaviorSettings),
    features: dataPowerplatformEnvironmentSettingsProductFeaturesToTerraform(struct!.features),
    security: dataPowerplatformEnvironmentSettingsProductSecurityToTerraform(struct!.security),
  }
}


export function dataPowerplatformEnvironmentSettingsProductToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior_settings: {
      value: dataPowerplatformEnvironmentSettingsProductBehaviorSettingsToHclTerraform(struct!.behaviorSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerplatformEnvironmentSettingsProductBehaviorSettings",
    },
    features: {
      value: dataPowerplatformEnvironmentSettingsProductFeaturesToHclTerraform(struct!.features),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerplatformEnvironmentSettingsProductFeatures",
    },
    security: {
      value: dataPowerplatformEnvironmentSettingsProductSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPowerplatformEnvironmentSettingsProductSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformEnvironmentSettingsProductOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsProduct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behaviorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behaviorSettings = this._behaviorSettings?.internalValue;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsProduct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behaviorSettings.internalValue = undefined;
      this._features.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behaviorSettings.internalValue = value.behaviorSettings;
      this._features.internalValue = value.features;
      this._security.internalValue = value.security;
    }
  }

  // behavior_settings - computed: false, optional: true, required: false
  private _behaviorSettings = new DataPowerplatformEnvironmentSettingsProductBehaviorSettingsOutputReference(this, "behavior_settings");
  public get behaviorSettings() {
    return this._behaviorSettings;
  }
  public putBehaviorSettings(value: DataPowerplatformEnvironmentSettingsProductBehaviorSettings) {
    this._behaviorSettings.internalValue = value;
  }
  public resetBehaviorSettings() {
    this._behaviorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorSettingsInput() {
    return this._behaviorSettings.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DataPowerplatformEnvironmentSettingsProductFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: DataPowerplatformEnvironmentSettingsProductFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataPowerplatformEnvironmentSettingsProductSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataPowerplatformEnvironmentSettingsProductSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataPowerplatformEnvironmentSettingsTimeouts {
}

export function dataPowerplatformEnvironmentSettingsTimeoutsToTerraform(struct?: DataPowerplatformEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformEnvironmentSettingsTimeoutsToHclTerraform(struct?: DataPowerplatformEnvironmentSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformEnvironmentSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformEnvironmentSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings powerplatform_environment_settings}
*/
export class DataPowerplatformEnvironmentSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_environment_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerplatformEnvironmentSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerplatformEnvironmentSettings to import
  * @param importFromId The id of the existing DataPowerplatformEnvironmentSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerplatformEnvironmentSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_environment_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_environment_settings powerplatform_environment_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerplatformEnvironmentSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPowerplatformEnvironmentSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_environment_settings',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditAndLogs.internalValue = config.auditAndLogs;
    this._email.internalValue = config.email;
    this._environmentId = config.environmentId;
    this._product.internalValue = config.product;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_and_logs - computed: false, optional: true, required: false
  private _auditAndLogs = new DataPowerplatformEnvironmentSettingsAuditAndLogsOutputReference(this, "audit_and_logs");
  public get auditAndLogs() {
    return this._auditAndLogs;
  }
  public putAuditAndLogs(value: DataPowerplatformEnvironmentSettingsAuditAndLogs) {
    this._auditAndLogs.internalValue = value;
  }
  public resetAuditAndLogs() {
    this._auditAndLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAndLogsInput() {
    return this._auditAndLogs.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new DataPowerplatformEnvironmentSettingsEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: DataPowerplatformEnvironmentSettingsEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // product - computed: false, optional: true, required: false
  private _product = new DataPowerplatformEnvironmentSettingsProductOutputReference(this, "product");
  public get product() {
    return this._product;
  }
  public putProduct(value: DataPowerplatformEnvironmentSettingsProduct) {
    this._product.internalValue = value;
  }
  public resetProduct() {
    this._product.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowerplatformEnvironmentSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowerplatformEnvironmentSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_and_logs: dataPowerplatformEnvironmentSettingsAuditAndLogsToTerraform(this._auditAndLogs.internalValue),
      email: dataPowerplatformEnvironmentSettingsEmailToTerraform(this._email.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      product: dataPowerplatformEnvironmentSettingsProductToTerraform(this._product.internalValue),
      timeouts: dataPowerplatformEnvironmentSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_and_logs: {
        value: dataPowerplatformEnvironmentSettingsAuditAndLogsToHclTerraform(this._auditAndLogs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformEnvironmentSettingsAuditAndLogs",
      },
      email: {
        value: dataPowerplatformEnvironmentSettingsEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformEnvironmentSettingsEmail",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: dataPowerplatformEnvironmentSettingsProductToHclTerraform(this._product.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformEnvironmentSettingsProduct",
      },
      timeouts: {
        value: dataPowerplatformEnvironmentSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformEnvironmentSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
