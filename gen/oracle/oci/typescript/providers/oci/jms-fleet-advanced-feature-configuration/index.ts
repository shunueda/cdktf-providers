// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JmsFleetAdvancedFeatureConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_bucket_name JmsFleetAdvancedFeatureConfiguration#analytic_bucket_name}
  */
  readonly analyticBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_namespace JmsFleetAdvancedFeatureConfiguration#analytic_namespace}
  */
  readonly analyticNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#fleet_id JmsFleetAdvancedFeatureConfiguration#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#id JmsFleetAdvancedFeatureConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * advanced_usage_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#advanced_usage_tracking JmsFleetAdvancedFeatureConfiguration#advanced_usage_tracking}
  */
  readonly advancedUsageTracking?: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking;
  /**
  * crypto_event_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#crypto_event_analysis JmsFleetAdvancedFeatureConfiguration#crypto_event_analysis}
  */
  readonly cryptoEventAnalysis?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis;
  /**
  * java_migration_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#java_migration_analysis JmsFleetAdvancedFeatureConfiguration#java_migration_analysis}
  */
  readonly javaMigrationAnalysis?: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis;
  /**
  * jfr_recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#jfr_recording JmsFleetAdvancedFeatureConfiguration#jfr_recording}
  */
  readonly jfrRecording?: JmsFleetAdvancedFeatureConfigurationJfrRecording;
  /**
  * lcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#lcm JmsFleetAdvancedFeatureConfiguration#lcm}
  */
  readonly lcm?: JmsFleetAdvancedFeatureConfigurationLcm;
  /**
  * performance_tuning_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#performance_tuning_analysis JmsFleetAdvancedFeatureConfiguration#performance_tuning_analysis}
  */
  readonly performanceTuningAnalysis?: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#timeouts JmsFleetAdvancedFeatureConfiguration#timeouts}
  */
  readonly timeouts?: JmsFleetAdvancedFeatureConfigurationTimeouts;
}
export interface JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference | JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function jmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference | JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#log_group_id JmsFleetAdvancedFeatureConfiguration#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#log_id JmsFleetAdvancedFeatureConfiguration#log_id}
  */
  readonly logId: string;
}

export function jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference | JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference | JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * summarized_events_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#summarized_events_log JmsFleetAdvancedFeatureConfiguration#summarized_events_log}
  */
  readonly summarizedEventsLog?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog;
}

export function jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    summarized_events_log: jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogToTerraform(struct!.summarizedEventsLog),
  }
}


export function jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summarized_events_log: {
      value: jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogToHclTerraform(struct!.summarizedEventsLog),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._summarizedEventsLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedEventsLog = this._summarizedEventsLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._summarizedEventsLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._summarizedEventsLog.internalValue = value.summarizedEventsLog;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // summarized_events_log - computed: false, optional: true, required: false
  private _summarizedEventsLog = new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference(this, "summarized_events_log");
  public get summarizedEventsLog() {
    return this._summarizedEventsLog;
  }
  public putSummarizedEventsLog(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog) {
    this._summarizedEventsLog.internalValue = value;
  }
  public resetSummarizedEventsLog() {
    this._summarizedEventsLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedEventsLogInput() {
    return this._summarizedEventsLog.internalValue;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function jmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationJfrRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationJfrRecordingToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference | JmsFleetAdvancedFeatureConfigurationJfrRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function jmsFleetAdvancedFeatureConfigurationJfrRecordingToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference | JmsFleetAdvancedFeatureConfigurationJfrRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationJfrRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationJfrRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}
  */
  readonly name?: string;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_size: cdktf.numberToTerraform(struct!.keySize),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
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

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keySize = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keySize = value.keySize;
      this._name = value.name;
    }
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList extends cdktf.ComplexList {
  public internalValue? : JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[] | cdktf.IResolvable

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
  public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference {
    return new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}
  */
  readonly name?: string;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_size: cdktf.numberToTerraform(struct!.keySize),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
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

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keySize = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keySize = value.keySize;
      this._name = value.name;
    }
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList extends cdktf.ComplexList {
  public internalValue? : JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[] | cdktf.IResolvable

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
  public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference {
    return new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}
  */
  readonly name?: string;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_size: cdktf.numberToTerraform(struct!.keySize),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
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

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keySize = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keySize = value.keySize;
      this._name = value.name;
    }
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList extends cdktf.ComplexList {
  public internalValue? : JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[] | cdktf.IResolvable

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
  public get(index: number): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference {
    return new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings {
  /**
  * certpath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#certpath JmsFleetAdvancedFeatureConfiguration#certpath}
  */
  readonly certpath?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[] | cdktf.IResolvable;
  /**
  * jar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#jar JmsFleetAdvancedFeatureConfiguration#jar}
  */
  readonly jar?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[] | cdktf.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#tls JmsFleetAdvancedFeatureConfiguration#tls}
  */
  readonly tls?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[] | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certpath: cdktf.listMapper(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathToTerraform, true)(struct!.certpath),
    jar: cdktf.listMapper(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarToTerraform, true)(struct!.jar),
    tls: cdktf.listMapper(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsToTerraform, true)(struct!.tls),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certpath: {
      value: cdktf.listMapperHcl(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathToHclTerraform, true)(struct!.certpath),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList",
    },
    jar: {
      value: cdktf.listMapperHcl(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarToHclTerraform, true)(struct!.jar),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList",
    },
    tls: {
      value: cdktf.listMapperHcl(jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certpath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certpath = this._certpath?.internalValue;
    }
    if (this._jar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certpath.internalValue = undefined;
      this._jar.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certpath.internalValue = value.certpath;
      this._jar.internalValue = value.jar;
      this._tls.internalValue = value.tls;
    }
  }

  // certpath - computed: false, optional: true, required: false
  private _certpath = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList(this, "certpath", false);
  public get certpath() {
    return this._certpath;
  }
  public putCertpath(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath[] | cdktf.IResolvable) {
    this._certpath.internalValue = value;
  }
  public resetCertpath() {
    this._certpath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certpathInput() {
    return this._certpath.internalValue;
  }

  // jar - computed: false, optional: true, required: false
  private _jar = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList(this, "jar", false);
  public get jar() {
    return this._jar;
  }
  public putJar(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar[] | cdktf.IResolvable) {
    this._jar.internalValue = value;
  }
  public resetJar() {
    this._jar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls[] | cdktf.IResolvable) {
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
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_host JmsFleetAdvancedFeatureConfiguration#ftp_proxy_host}
  */
  readonly ftpProxyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_port JmsFleetAdvancedFeatureConfiguration#ftp_proxy_port}
  */
  readonly ftpProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_host JmsFleetAdvancedFeatureConfiguration#http_proxy_host}
  */
  readonly httpProxyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_port JmsFleetAdvancedFeatureConfiguration#http_proxy_port}
  */
  readonly httpProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_host JmsFleetAdvancedFeatureConfiguration#https_proxy_host}
  */
  readonly httpsProxyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_port JmsFleetAdvancedFeatureConfiguration#https_proxy_port}
  */
  readonly httpsProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_host JmsFleetAdvancedFeatureConfiguration#socks_proxy_host}
  */
  readonly socksProxyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_port JmsFleetAdvancedFeatureConfiguration#socks_proxy_port}
  */
  readonly socksProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#use_system_proxies JmsFleetAdvancedFeatureConfiguration#use_system_proxies}
  */
  readonly useSystemProxies?: boolean | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp_proxy_host: cdktf.stringToTerraform(struct!.ftpProxyHost),
    ftp_proxy_port: cdktf.numberToTerraform(struct!.ftpProxyPort),
    http_proxy_host: cdktf.stringToTerraform(struct!.httpProxyHost),
    http_proxy_port: cdktf.numberToTerraform(struct!.httpProxyPort),
    https_proxy_host: cdktf.stringToTerraform(struct!.httpsProxyHost),
    https_proxy_port: cdktf.numberToTerraform(struct!.httpsProxyPort),
    socks_proxy_host: cdktf.stringToTerraform(struct!.socksProxyHost),
    socks_proxy_port: cdktf.numberToTerraform(struct!.socksProxyPort),
    use_system_proxies: cdktf.booleanToTerraform(struct!.useSystemProxies),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.ftpProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.ftpProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socks_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.socksProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.socksProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_system_proxies: {
      value: cdktf.booleanToHclTerraform(struct!.useSystemProxies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftpProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpProxyHost = this._ftpProxyHost;
    }
    if (this._ftpProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpProxyPort = this._ftpProxyPort;
    }
    if (this._httpProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyHost = this._httpProxyHost;
    }
    if (this._httpProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyPort = this._httpProxyPort;
    }
    if (this._httpsProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyHost = this._httpsProxyHost;
    }
    if (this._httpsProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyPort = this._httpsProxyPort;
    }
    if (this._socksProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.socksProxyHost = this._socksProxyHost;
    }
    if (this._socksProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.socksProxyPort = this._socksProxyPort;
    }
    if (this._useSystemProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemProxies = this._useSystemProxies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftpProxyHost = undefined;
      this._ftpProxyPort = undefined;
      this._httpProxyHost = undefined;
      this._httpProxyPort = undefined;
      this._httpsProxyHost = undefined;
      this._httpsProxyPort = undefined;
      this._socksProxyHost = undefined;
      this._socksProxyPort = undefined;
      this._useSystemProxies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftpProxyHost = value.ftpProxyHost;
      this._ftpProxyPort = value.ftpProxyPort;
      this._httpProxyHost = value.httpProxyHost;
      this._httpProxyPort = value.httpProxyPort;
      this._httpsProxyHost = value.httpsProxyHost;
      this._httpsProxyPort = value.httpsProxyPort;
      this._socksProxyHost = value.socksProxyHost;
      this._socksProxyPort = value.socksProxyPort;
      this._useSystemProxies = value.useSystemProxies;
    }
  }

  // ftp_proxy_host - computed: true, optional: true, required: false
  private _ftpProxyHost?: string; 
  public get ftpProxyHost() {
    return this.getStringAttribute('ftp_proxy_host');
  }
  public set ftpProxyHost(value: string) {
    this._ftpProxyHost = value;
  }
  public resetFtpProxyHost() {
    this._ftpProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpProxyHostInput() {
    return this._ftpProxyHost;
  }

  // ftp_proxy_port - computed: true, optional: true, required: false
  private _ftpProxyPort?: number; 
  public get ftpProxyPort() {
    return this.getNumberAttribute('ftp_proxy_port');
  }
  public set ftpProxyPort(value: number) {
    this._ftpProxyPort = value;
  }
  public resetFtpProxyPort() {
    this._ftpProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpProxyPortInput() {
    return this._ftpProxyPort;
  }

  // http_proxy_host - computed: true, optional: true, required: false
  private _httpProxyHost?: string; 
  public get httpProxyHost() {
    return this.getStringAttribute('http_proxy_host');
  }
  public set httpProxyHost(value: string) {
    this._httpProxyHost = value;
  }
  public resetHttpProxyHost() {
    this._httpProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyHostInput() {
    return this._httpProxyHost;
  }

  // http_proxy_port - computed: true, optional: true, required: false
  private _httpProxyPort?: number; 
  public get httpProxyPort() {
    return this.getNumberAttribute('http_proxy_port');
  }
  public set httpProxyPort(value: number) {
    this._httpProxyPort = value;
  }
  public resetHttpProxyPort() {
    this._httpProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyPortInput() {
    return this._httpProxyPort;
  }

  // https_proxy_host - computed: true, optional: true, required: false
  private _httpsProxyHost?: string; 
  public get httpsProxyHost() {
    return this.getStringAttribute('https_proxy_host');
  }
  public set httpsProxyHost(value: string) {
    this._httpsProxyHost = value;
  }
  public resetHttpsProxyHost() {
    this._httpsProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyHostInput() {
    return this._httpsProxyHost;
  }

  // https_proxy_port - computed: true, optional: true, required: false
  private _httpsProxyPort?: number; 
  public get httpsProxyPort() {
    return this.getNumberAttribute('https_proxy_port');
  }
  public set httpsProxyPort(value: number) {
    this._httpsProxyPort = value;
  }
  public resetHttpsProxyPort() {
    this._httpsProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyPortInput() {
    return this._httpsProxyPort;
  }

  // socks_proxy_host - computed: true, optional: true, required: false
  private _socksProxyHost?: string; 
  public get socksProxyHost() {
    return this.getStringAttribute('socks_proxy_host');
  }
  public set socksProxyHost(value: string) {
    this._socksProxyHost = value;
  }
  public resetSocksProxyHost() {
    this._socksProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksProxyHostInput() {
    return this._socksProxyHost;
  }

  // socks_proxy_port - computed: true, optional: true, required: false
  private _socksProxyPort?: number; 
  public get socksProxyPort() {
    return this.getNumberAttribute('socks_proxy_port');
  }
  public set socksProxyPort(value: number) {
    this._socksProxyPort = value;
  }
  public resetSocksProxyPort() {
    this._socksProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksProxyPortInput() {
    return this._socksProxyPort;
  }

  // use_system_proxies - computed: true, optional: true, required: false
  private _useSystemProxies?: boolean | cdktf.IResolvable; 
  public get useSystemProxies() {
    return this.getBooleanAttribute('use_system_proxies');
  }
  public set useSystemProxies(value: boolean | cdktf.IResolvable) {
    this._useSystemProxies = value;
  }
  public resetUseSystemProxies() {
    this._useSystemProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemProxiesInput() {
    return this._useSystemProxies;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#add_logging_handler JmsFleetAdvancedFeatureConfiguration#add_logging_handler}
  */
  readonly addLoggingHandler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#disabled_tls_versions JmsFleetAdvancedFeatureConfiguration#disabled_tls_versions}
  */
  readonly disabledTlsVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#global_logging_level JmsFleetAdvancedFeatureConfiguration#global_logging_level}
  */
  readonly globalLoggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#should_replace_certificates_operating_system JmsFleetAdvancedFeatureConfiguration#should_replace_certificates_operating_system}
  */
  readonly shouldReplaceCertificatesOperatingSystem?: boolean | cdktf.IResolvable;
  /**
  * minimum_key_size_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#minimum_key_size_settings JmsFleetAdvancedFeatureConfiguration#minimum_key_size_settings}
  */
  readonly minimumKeySizeSettings?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings;
  /**
  * proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#proxies JmsFleetAdvancedFeatureConfiguration#proxies}
  */
  readonly proxies?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies;
}

export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_logging_handler: cdktf.booleanToTerraform(struct!.addLoggingHandler),
    disabled_tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledTlsVersions),
    global_logging_level: cdktf.stringToTerraform(struct!.globalLoggingLevel),
    should_replace_certificates_operating_system: cdktf.booleanToTerraform(struct!.shouldReplaceCertificatesOperatingSystem),
    minimum_key_size_settings: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsToTerraform(struct!.minimumKeySizeSettings),
    proxies: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesToTerraform(struct!.proxies),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference | JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_logging_handler: {
      value: cdktf.booleanToHclTerraform(struct!.addLoggingHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_tls_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledTlsVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_logging_level: {
      value: cdktf.stringToHclTerraform(struct!.globalLoggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_replace_certificates_operating_system: {
      value: cdktf.booleanToHclTerraform(struct!.shouldReplaceCertificatesOperatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_key_size_settings: {
      value: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsToHclTerraform(struct!.minimumKeySizeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList",
    },
    proxies: {
      value: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesToHclTerraform(struct!.proxies),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLoggingHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLoggingHandler = this._addLoggingHandler;
    }
    if (this._disabledTlsVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledTlsVersions = this._disabledTlsVersions;
    }
    if (this._globalLoggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalLoggingLevel = this._globalLoggingLevel;
    }
    if (this._shouldReplaceCertificatesOperatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldReplaceCertificatesOperatingSystem = this._shouldReplaceCertificatesOperatingSystem;
    }
    if (this._minimumKeySizeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumKeySizeSettings = this._minimumKeySizeSettings?.internalValue;
    }
    if (this._proxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxies = this._proxies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addLoggingHandler = undefined;
      this._disabledTlsVersions = undefined;
      this._globalLoggingLevel = undefined;
      this._shouldReplaceCertificatesOperatingSystem = undefined;
      this._minimumKeySizeSettings.internalValue = undefined;
      this._proxies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addLoggingHandler = value.addLoggingHandler;
      this._disabledTlsVersions = value.disabledTlsVersions;
      this._globalLoggingLevel = value.globalLoggingLevel;
      this._shouldReplaceCertificatesOperatingSystem = value.shouldReplaceCertificatesOperatingSystem;
      this._minimumKeySizeSettings.internalValue = value.minimumKeySizeSettings;
      this._proxies.internalValue = value.proxies;
    }
  }

  // add_logging_handler - computed: true, optional: true, required: false
  private _addLoggingHandler?: boolean | cdktf.IResolvable; 
  public get addLoggingHandler() {
    return this.getBooleanAttribute('add_logging_handler');
  }
  public set addLoggingHandler(value: boolean | cdktf.IResolvable) {
    this._addLoggingHandler = value;
  }
  public resetAddLoggingHandler() {
    this._addLoggingHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLoggingHandlerInput() {
    return this._addLoggingHandler;
  }

  // disabled_tls_versions - computed: true, optional: true, required: false
  private _disabledTlsVersions?: string[]; 
  public get disabledTlsVersions() {
    return this.getListAttribute('disabled_tls_versions');
  }
  public set disabledTlsVersions(value: string[]) {
    this._disabledTlsVersions = value;
  }
  public resetDisabledTlsVersions() {
    this._disabledTlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledTlsVersionsInput() {
    return this._disabledTlsVersions;
  }

  // global_logging_level - computed: true, optional: true, required: false
  private _globalLoggingLevel?: string; 
  public get globalLoggingLevel() {
    return this.getStringAttribute('global_logging_level');
  }
  public set globalLoggingLevel(value: string) {
    this._globalLoggingLevel = value;
  }
  public resetGlobalLoggingLevel() {
    this._globalLoggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalLoggingLevelInput() {
    return this._globalLoggingLevel;
  }

  // should_replace_certificates_operating_system - computed: true, optional: true, required: false
  private _shouldReplaceCertificatesOperatingSystem?: boolean | cdktf.IResolvable; 
  public get shouldReplaceCertificatesOperatingSystem() {
    return this.getBooleanAttribute('should_replace_certificates_operating_system');
  }
  public set shouldReplaceCertificatesOperatingSystem(value: boolean | cdktf.IResolvable) {
    this._shouldReplaceCertificatesOperatingSystem = value;
  }
  public resetShouldReplaceCertificatesOperatingSystem() {
    this._shouldReplaceCertificatesOperatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldReplaceCertificatesOperatingSystemInput() {
    return this._shouldReplaceCertificatesOperatingSystem;
  }

  // minimum_key_size_settings - computed: false, optional: true, required: false
  private _minimumKeySizeSettings = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference(this, "minimum_key_size_settings");
  public get minimumKeySizeSettings() {
    return this._minimumKeySizeSettings;
  }
  public putMinimumKeySizeSettings(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings) {
    this._minimumKeySizeSettings.internalValue = value;
  }
  public resetMinimumKeySizeSettings() {
    this._minimumKeySizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumKeySizeSettingsInput() {
    return this._minimumKeySizeSettings.internalValue;
  }

  // proxies - computed: false, optional: true, required: false
  private _proxies = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference(this, "proxies");
  public get proxies() {
    return this._proxies;
  }
  public putProxies(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies) {
    this._proxies.internalValue = value;
  }
  public resetProxies() {
    this._proxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies.internalValue;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationLcm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * post_installation_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#post_installation_actions JmsFleetAdvancedFeatureConfiguration#post_installation_actions}
  */
  readonly postInstallationActions?: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions;
}

export function jmsFleetAdvancedFeatureConfigurationLcmToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmOutputReference | JmsFleetAdvancedFeatureConfigurationLcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    post_installation_actions: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsToTerraform(struct!.postInstallationActions),
  }
}


export function jmsFleetAdvancedFeatureConfigurationLcmToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationLcmOutputReference | JmsFleetAdvancedFeatureConfigurationLcm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_installation_actions: {
      value: jmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsToHclTerraform(struct!.postInstallationActions),
      isBlock: true,
      type: "list",
      storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationLcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationLcm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._postInstallationActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postInstallationActions = this._postInstallationActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationLcm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._postInstallationActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._postInstallationActions.internalValue = value.postInstallationActions;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // post_installation_actions - computed: false, optional: true, required: false
  private _postInstallationActions = new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference(this, "post_installation_actions");
  public get postInstallationActions() {
    return this._postInstallationActions;
  }
  public putPostInstallationActions(value: JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions) {
    this._postInstallationActions.internalValue = value;
  }
  public resetPostInstallationActions() {
    this._postInstallationActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInstallationActionsInput() {
    return this._postInstallationActions.internalValue;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function jmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function jmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference | JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface JmsFleetAdvancedFeatureConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#create JmsFleetAdvancedFeatureConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#delete JmsFleetAdvancedFeatureConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#update JmsFleetAdvancedFeatureConfiguration#update}
  */
  readonly update?: string;
}

export function jmsFleetAdvancedFeatureConfigurationTimeoutsToTerraform(struct?: JmsFleetAdvancedFeatureConfigurationTimeouts | cdktf.IResolvable): any {
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


export function jmsFleetAdvancedFeatureConfigurationTimeoutsToHclTerraform(struct?: JmsFleetAdvancedFeatureConfigurationTimeouts | cdktf.IResolvable): any {
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

export class JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JmsFleetAdvancedFeatureConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JmsFleetAdvancedFeatureConfigurationTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration oci_jms_fleet_advanced_feature_configuration}
*/
export class JmsFleetAdvancedFeatureConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_advanced_feature_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JmsFleetAdvancedFeatureConfiguration to import
  * @param importFromId The id of the existing JmsFleetAdvancedFeatureConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JmsFleetAdvancedFeatureConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_advanced_feature_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/jms_fleet_advanced_feature_configuration oci_jms_fleet_advanced_feature_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JmsFleetAdvancedFeatureConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: JmsFleetAdvancedFeatureConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_advanced_feature_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticBucketName = config.analyticBucketName;
    this._analyticNamespace = config.analyticNamespace;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._advancedUsageTracking.internalValue = config.advancedUsageTracking;
    this._cryptoEventAnalysis.internalValue = config.cryptoEventAnalysis;
    this._javaMigrationAnalysis.internalValue = config.javaMigrationAnalysis;
    this._jfrRecording.internalValue = config.jfrRecording;
    this._lcm.internalValue = config.lcm;
    this._performanceTuningAnalysis.internalValue = config.performanceTuningAnalysis;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytic_bucket_name - computed: true, optional: true, required: false
  private _analyticBucketName?: string; 
  public get analyticBucketName() {
    return this.getStringAttribute('analytic_bucket_name');
  }
  public set analyticBucketName(value: string) {
    this._analyticBucketName = value;
  }
  public resetAnalyticBucketName() {
    this._analyticBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticBucketNameInput() {
    return this._analyticBucketName;
  }

  // analytic_namespace - computed: true, optional: true, required: false
  private _analyticNamespace?: string; 
  public get analyticNamespace() {
    return this.getStringAttribute('analytic_namespace');
  }
  public set analyticNamespace(value: string) {
    this._analyticNamespace = value;
  }
  public resetAnalyticNamespace() {
    this._analyticNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticNamespaceInput() {
    return this._analyticNamespace;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // advanced_usage_tracking - computed: false, optional: true, required: false
  private _advancedUsageTracking = new JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference(this, "advanced_usage_tracking");
  public get advancedUsageTracking() {
    return this._advancedUsageTracking;
  }
  public putAdvancedUsageTracking(value: JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking) {
    this._advancedUsageTracking.internalValue = value;
  }
  public resetAdvancedUsageTracking() {
    this._advancedUsageTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedUsageTrackingInput() {
    return this._advancedUsageTracking.internalValue;
  }

  // crypto_event_analysis - computed: false, optional: true, required: false
  private _cryptoEventAnalysis = new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference(this, "crypto_event_analysis");
  public get cryptoEventAnalysis() {
    return this._cryptoEventAnalysis;
  }
  public putCryptoEventAnalysis(value: JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis) {
    this._cryptoEventAnalysis.internalValue = value;
  }
  public resetCryptoEventAnalysis() {
    this._cryptoEventAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoEventAnalysisInput() {
    return this._cryptoEventAnalysis.internalValue;
  }

  // java_migration_analysis - computed: false, optional: true, required: false
  private _javaMigrationAnalysis = new JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference(this, "java_migration_analysis");
  public get javaMigrationAnalysis() {
    return this._javaMigrationAnalysis;
  }
  public putJavaMigrationAnalysis(value: JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis) {
    this._javaMigrationAnalysis.internalValue = value;
  }
  public resetJavaMigrationAnalysis() {
    this._javaMigrationAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMigrationAnalysisInput() {
    return this._javaMigrationAnalysis.internalValue;
  }

  // jfr_recording - computed: false, optional: true, required: false
  private _jfrRecording = new JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference(this, "jfr_recording");
  public get jfrRecording() {
    return this._jfrRecording;
  }
  public putJfrRecording(value: JmsFleetAdvancedFeatureConfigurationJfrRecording) {
    this._jfrRecording.internalValue = value;
  }
  public resetJfrRecording() {
    this._jfrRecording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfrRecordingInput() {
    return this._jfrRecording.internalValue;
  }

  // lcm - computed: false, optional: true, required: false
  private _lcm = new JmsFleetAdvancedFeatureConfigurationLcmOutputReference(this, "lcm");
  public get lcm() {
    return this._lcm;
  }
  public putLcm(value: JmsFleetAdvancedFeatureConfigurationLcm) {
    this._lcm.internalValue = value;
  }
  public resetLcm() {
    this._lcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcmInput() {
    return this._lcm.internalValue;
  }

  // performance_tuning_analysis - computed: false, optional: true, required: false
  private _performanceTuningAnalysis = new JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference(this, "performance_tuning_analysis");
  public get performanceTuningAnalysis() {
    return this._performanceTuningAnalysis;
  }
  public putPerformanceTuningAnalysis(value: JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis) {
    this._performanceTuningAnalysis.internalValue = value;
  }
  public resetPerformanceTuningAnalysis() {
    this._performanceTuningAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTuningAnalysisInput() {
    return this._performanceTuningAnalysis.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JmsFleetAdvancedFeatureConfigurationTimeouts) {
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
      analytic_bucket_name: cdktf.stringToTerraform(this._analyticBucketName),
      analytic_namespace: cdktf.stringToTerraform(this._analyticNamespace),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      advanced_usage_tracking: jmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingToTerraform(this._advancedUsageTracking.internalValue),
      crypto_event_analysis: jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisToTerraform(this._cryptoEventAnalysis.internalValue),
      java_migration_analysis: jmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisToTerraform(this._javaMigrationAnalysis.internalValue),
      jfr_recording: jmsFleetAdvancedFeatureConfigurationJfrRecordingToTerraform(this._jfrRecording.internalValue),
      lcm: jmsFleetAdvancedFeatureConfigurationLcmToTerraform(this._lcm.internalValue),
      performance_tuning_analysis: jmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisToTerraform(this._performanceTuningAnalysis.internalValue),
      timeouts: jmsFleetAdvancedFeatureConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytic_bucket_name: {
        value: cdktf.stringToHclTerraform(this._analyticBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytic_namespace: {
        value: cdktf.stringToHclTerraform(this._analyticNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_usage_tracking: {
        value: jmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingToHclTerraform(this._advancedUsageTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList",
      },
      crypto_event_analysis: {
        value: jmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisToHclTerraform(this._cryptoEventAnalysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList",
      },
      java_migration_analysis: {
        value: jmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisToHclTerraform(this._javaMigrationAnalysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList",
      },
      jfr_recording: {
        value: jmsFleetAdvancedFeatureConfigurationJfrRecordingToHclTerraform(this._jfrRecording.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationJfrRecordingList",
      },
      lcm: {
        value: jmsFleetAdvancedFeatureConfigurationLcmToHclTerraform(this._lcm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationLcmList",
      },
      performance_tuning_analysis: {
        value: jmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisToHclTerraform(this._performanceTuningAnalysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList",
      },
      timeouts: {
        value: jmsFleetAdvancedFeatureConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JmsFleetAdvancedFeatureConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
