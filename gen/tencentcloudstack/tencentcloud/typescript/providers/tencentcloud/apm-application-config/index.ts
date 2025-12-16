// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmApplicationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether agent is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#agent_enable ApmApplicationConfig#agent_enable}
  */
  readonly agentEnable?: boolean | cdktf.IResolvable;
  /**
  * dashboard ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#dashboard_topic_id ApmApplicationConfig#dashboard_topic_id}
  */
  readonly dashboardTopicId?: string;
  /**
  * Specifies the CPU threshold for probe fusing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#disable_cpu_used ApmApplicationConfig#disable_cpu_used}
  */
  readonly disableCpuUsed?: number;
  /**
  * Specifies the memory threshold for probe fusing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#disable_memory_used ApmApplicationConfig#disable_memory_used}
  */
  readonly disableMemoryUsed?: number;
  /**
  * Whether to enable the dashboard configuration for applications. false: disabled (consistent with the business system configuration); true: enabled (application-level configuration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#enable_dashboard_config ApmApplicationConfig#enable_dashboard_config}
  */
  readonly enableDashboardConfig?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable application log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#enable_log_config ApmApplicationConfig#enable_log_config}
  */
  readonly enableLogConfig?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable application security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#enable_security_config ApmApplicationConfig#enable_security_config}
  */
  readonly enableSecurityConfig?: boolean | cdktf.IResolvable;
  /**
  * Whether thread profiling is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#enable_snapshot ApmApplicationConfig#enable_snapshot}
  */
  readonly enableSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Error code filtering, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#error_code_filter ApmApplicationConfig#error_code_filter}
  */
  readonly errorCodeFilter?: string;
  /**
  * Switch for enabling application diagnosis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#event_enable ApmApplicationConfig#event_enable}
  */
  readonly eventEnable?: boolean | cdktf.IResolvable;
  /**
  * Regex rules for exception filtering, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#exception_filter ApmApplicationConfig#exception_filter}
  */
  readonly exceptionFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#id ApmApplicationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * APIs to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#ignore_operation_name ApmApplicationConfig#ignore_operation_name}
  */
  readonly ignoreOperationName?: string;
  /**
  * Business system ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#instance_id ApmApplicationConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to enable the detection of deleting arbitrary files. (0 - disabled; 1: enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_delete_any_file_analysis ApmApplicationConfig#is_delete_any_file_analysis}
  */
  readonly isDeleteAnyFileAnalysis?: number;
  /**
  * Whether to enable deserialization detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_deserialization_analysis ApmApplicationConfig#is_deserialization_analysis}
  */
  readonly isDeserializationAnalysis?: number;
  /**
  * Whether to enable traversal detection of the directory. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_directory_traversal_analysis ApmApplicationConfig#is_directory_traversal_analysis}
  */
  readonly isDirectoryTraversalAnalysis?: number;
  /**
  * Whether to enable expression injection detection. (0 - disabled; 1 - enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_expression_injection_analysis ApmApplicationConfig#is_expression_injection_analysis}
  */
  readonly isExpressionInjectionAnalysis?: number;
  /**
  * Whether to enable the detection of the inclusion of arbitrary files. (0: disabled, 1: enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_include_any_file_analysis ApmApplicationConfig#is_include_any_file_analysis}
  */
  readonly isIncludeAnyFileAnalysis?: number;
  /**
  * Whether to enable detection of component vulnerability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_instrumentation_vulnerability_scan ApmApplicationConfig#is_instrumentation_vulnerability_scan}
  */
  readonly isInstrumentationVulnerabilityScan?: number;
  /**
  * Whether to enable JNDI injection detection. (0 - disabled; 1 - enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_jndi_injection_analysis ApmApplicationConfig#is_jndi_injection_analysis}
  */
  readonly isJndiInjectionAnalysis?: number;
  /**
  * Whether to enable JNI injection detection. (0 - disabled, 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_jni_injection_analysis ApmApplicationConfig#is_jni_injection_analysis}
  */
  readonly isJniInjectionAnalysis?: number;
  /**
  * Whether to enable detection of Java webshell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_memory_hijacking_analysis ApmApplicationConfig#is_memory_hijacking_analysis}
  */
  readonly isMemoryHijackingAnalysis?: number;
  /**
  * Whether to enable the detection of reading arbitrary files. (0 - disabled; 1 - enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_read_any_file_analysis ApmApplicationConfig#is_read_any_file_analysis}
  */
  readonly isReadAnyFileAnalysis?: number;
  /**
  * Whether to associate with Dashboard. 0: disabled; 1: enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_related_dashboard ApmApplicationConfig#is_related_dashboard}
  */
  readonly isRelatedDashboard?: number;
  /**
  * Log switch. 0: Off; 1: On.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_related_log ApmApplicationConfig#is_related_log}
  */
  readonly isRelatedLog?: number;
  /**
  * Whether remote command detection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_remote_command_execution_analysis ApmApplicationConfig#is_remote_command_execution_analysis}
  */
  readonly isRemoteCommandExecutionAnalysis?: number;
  /**
  * Whether to enable script engine injection detection. (0 - disabled; 1 - enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_script_engine_injection_analysis ApmApplicationConfig#is_script_engine_injection_analysis}
  */
  readonly isScriptEngineInjectionAnalysis?: number;
  /**
  * Whether to enable SQL injection analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_sql_injection_analysis ApmApplicationConfig#is_sql_injection_analysis}
  */
  readonly isSqlInjectionAnalysis?: number;
  /**
  * Whether to enable template engine injection detection. (0: disabled; 1: enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_template_engine_injection_analysis ApmApplicationConfig#is_template_engine_injection_analysis}
  */
  readonly isTemplateEngineInjectionAnalysis?: number;
  /**
  * Whether to enable the detection of uploading arbitrary files. (0 - disabled; 1 - enabled.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_upload_any_file_analysis ApmApplicationConfig#is_upload_any_file_analysis}
  */
  readonly isUploadAnyFileAnalysis?: number;
  /**
  * Whether to enable Webshell backdoor detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#is_webshell_backdoor_analysis ApmApplicationConfig#is_webshell_backdoor_analysis}
  */
  readonly isWebshellBackdoorAnalysis?: number;
  /**
  * CLS index type. (0 = full-text index; 1 = key-value index).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_index_type ApmApplicationConfig#log_index_type}
  */
  readonly logIndexType?: number;
  /**
  * Log region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_region ApmApplicationConfig#log_region}
  */
  readonly logRegion?: string;
  /**
  * CLS log set/ES cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_set ApmApplicationConfig#log_set}
  */
  readonly logSet?: string;
  /**
  * Log source: CLS or ES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_source ApmApplicationConfig#log_source}
  */
  readonly logSource?: string;
  /**
  * Log topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_topic_id ApmApplicationConfig#log_topic_id}
  */
  readonly logTopicId?: string;
  /**
  * Index key of traceId. It is valid when the CLS index type is key-value index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#log_trace_id_key ApmApplicationConfig#log_trace_id_key}
  */
  readonly logTraceIdKey?: string;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#service_name ApmApplicationConfig#service_name}
  */
  readonly serviceName: string;
  /**
  * Timeout threshold for thread profiling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#snapshot_timeout ApmApplicationConfig#snapshot_timeout}
  */
  readonly snapshotTimeout?: number;
  /**
  * Whether link compression is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#trace_squash ApmApplicationConfig#trace_squash}
  */
  readonly traceSquash?: boolean | cdktf.IResolvable;
  /**
  * Automatic convergence switch for APIs. 0: disabled | 1: enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_auto_convergence_enable ApmApplicationConfig#url_auto_convergence_enable}
  */
  readonly urlAutoConvergenceEnable?: boolean | cdktf.IResolvable;
  /**
  * Regex rules for URL convergence, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_convergence ApmApplicationConfig#url_convergence}
  */
  readonly urlConvergence?: string;
  /**
  * URL convergence switch. 0: Off; 1: On.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_convergence_switch ApmApplicationConfig#url_convergence_switch}
  */
  readonly urlConvergenceSwitch: number;
  /**
  * URL convergence threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_convergence_threshold ApmApplicationConfig#url_convergence_threshold}
  */
  readonly urlConvergenceThreshold?: number;
  /**
  * Regex rules for URL exclusion, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_exclude ApmApplicationConfig#url_exclude}
  */
  readonly urlExclude?: string;
  /**
  * Convergence threshold for URL long segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_long_segment_threshold ApmApplicationConfig#url_long_segment_threshold}
  */
  readonly urlLongSegmentThreshold?: number;
  /**
  * Convergence threshold for URL numerical segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#url_number_segment_threshold ApmApplicationConfig#url_number_segment_threshold}
  */
  readonly urlNumberSegmentThreshold?: number;
  /**
  * agent_operation_config_view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#agent_operation_config_view ApmApplicationConfig#agent_operation_config_view}
  */
  readonly agentOperationConfigView?: ApmApplicationConfigAgentOperationConfigView;
  /**
  * instrument_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#instrument_list ApmApplicationConfig#instrument_list}
  */
  readonly instrumentList?: ApmApplicationConfigInstrumentListStruct[] | cdktf.IResolvable;
}
export interface ApmApplicationConfigAgentOperationConfigView {
  /**
  * Effective when RetentionValid is false. It indicates blocklist configuration in API settings. The APIs specified in the configuration do not support collection.
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#ignore_operation ApmApplicationConfig#ignore_operation}
  */
  readonly ignoreOperation?: string;
  /**
  * Effective when RetentionValid is true. It indicates allowlist configuration in API settings. Only the APIs specified in the configuration support collection.
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#retention_operation ApmApplicationConfig#retention_operation}
  */
  readonly retentionOperation?: string;
  /**
  * Whether allowlist configuration is enabled for the current API.
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#retention_valid ApmApplicationConfig#retention_valid}
  */
  readonly retentionValid?: boolean | cdktf.IResolvable;
}

export function apmApplicationConfigAgentOperationConfigViewToTerraform(struct?: ApmApplicationConfigAgentOperationConfigViewOutputReference | ApmApplicationConfigAgentOperationConfigView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_operation: cdktf.stringToTerraform(struct!.ignoreOperation),
    retention_operation: cdktf.stringToTerraform(struct!.retentionOperation),
    retention_valid: cdktf.booleanToTerraform(struct!.retentionValid),
  }
}


export function apmApplicationConfigAgentOperationConfigViewToHclTerraform(struct?: ApmApplicationConfigAgentOperationConfigViewOutputReference | ApmApplicationConfigAgentOperationConfigView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_operation: {
      value: cdktf.stringToHclTerraform(struct!.ignoreOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_operation: {
      value: cdktf.stringToHclTerraform(struct!.retentionOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_valid: {
      value: cdktf.booleanToHclTerraform(struct!.retentionValid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmApplicationConfigAgentOperationConfigViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmApplicationConfigAgentOperationConfigView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreOperation = this._ignoreOperation;
    }
    if (this._retentionOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionOperation = this._retentionOperation;
    }
    if (this._retentionValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValid = this._retentionValid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmApplicationConfigAgentOperationConfigView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreOperation = undefined;
      this._retentionOperation = undefined;
      this._retentionValid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreOperation = value.ignoreOperation;
      this._retentionOperation = value.retentionOperation;
      this._retentionValid = value.retentionValid;
    }
  }

  // ignore_operation - computed: true, optional: true, required: false
  private _ignoreOperation?: string; 
  public get ignoreOperation() {
    return this.getStringAttribute('ignore_operation');
  }
  public set ignoreOperation(value: string) {
    this._ignoreOperation = value;
  }
  public resetIgnoreOperation() {
    this._ignoreOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOperationInput() {
    return this._ignoreOperation;
  }

  // retention_operation - computed: true, optional: true, required: false
  private _retentionOperation?: string; 
  public get retentionOperation() {
    return this.getStringAttribute('retention_operation');
  }
  public set retentionOperation(value: string) {
    this._retentionOperation = value;
  }
  public resetRetentionOperation() {
    this._retentionOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionOperationInput() {
    return this._retentionOperation;
  }

  // retention_valid - computed: true, optional: true, required: false
  private _retentionValid?: boolean | cdktf.IResolvable; 
  public get retentionValid() {
    return this.getBooleanAttribute('retention_valid');
  }
  public set retentionValid(value: boolean | cdktf.IResolvable) {
    this._retentionValid = value;
  }
  public resetRetentionValid() {
    this._retentionValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValidInput() {
    return this._retentionValid;
  }
}
export interface ApmApplicationConfigInstrumentListStruct {
  /**
  * Component switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#enable ApmApplicationConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Component name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#name ApmApplicationConfig#name}
  */
  readonly name?: string;
}

export function apmApplicationConfigInstrumentListStructToTerraform(struct?: ApmApplicationConfigInstrumentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apmApplicationConfigInstrumentListStructToHclTerraform(struct?: ApmApplicationConfigInstrumentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ApmApplicationConfigInstrumentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmApplicationConfigInstrumentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmApplicationConfigInstrumentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._name = value.name;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

export class ApmApplicationConfigInstrumentListStructList extends cdktf.ComplexList {
  public internalValue? : ApmApplicationConfigInstrumentListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApmApplicationConfigInstrumentListStructOutputReference {
    return new ApmApplicationConfigInstrumentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config tencentcloud_apm_application_config}
*/
export class ApmApplicationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_apm_application_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmApplicationConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmApplicationConfig to import
  * @param importFromId The id of the existing ApmApplicationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmApplicationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_apm_application_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/apm_application_config tencentcloud_apm_application_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmApplicationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApmApplicationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_apm_application_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentEnable = config.agentEnable;
    this._dashboardTopicId = config.dashboardTopicId;
    this._disableCpuUsed = config.disableCpuUsed;
    this._disableMemoryUsed = config.disableMemoryUsed;
    this._enableDashboardConfig = config.enableDashboardConfig;
    this._enableLogConfig = config.enableLogConfig;
    this._enableSecurityConfig = config.enableSecurityConfig;
    this._enableSnapshot = config.enableSnapshot;
    this._errorCodeFilter = config.errorCodeFilter;
    this._eventEnable = config.eventEnable;
    this._exceptionFilter = config.exceptionFilter;
    this._id = config.id;
    this._ignoreOperationName = config.ignoreOperationName;
    this._instanceId = config.instanceId;
    this._isDeleteAnyFileAnalysis = config.isDeleteAnyFileAnalysis;
    this._isDeserializationAnalysis = config.isDeserializationAnalysis;
    this._isDirectoryTraversalAnalysis = config.isDirectoryTraversalAnalysis;
    this._isExpressionInjectionAnalysis = config.isExpressionInjectionAnalysis;
    this._isIncludeAnyFileAnalysis = config.isIncludeAnyFileAnalysis;
    this._isInstrumentationVulnerabilityScan = config.isInstrumentationVulnerabilityScan;
    this._isJndiInjectionAnalysis = config.isJndiInjectionAnalysis;
    this._isJniInjectionAnalysis = config.isJniInjectionAnalysis;
    this._isMemoryHijackingAnalysis = config.isMemoryHijackingAnalysis;
    this._isReadAnyFileAnalysis = config.isReadAnyFileAnalysis;
    this._isRelatedDashboard = config.isRelatedDashboard;
    this._isRelatedLog = config.isRelatedLog;
    this._isRemoteCommandExecutionAnalysis = config.isRemoteCommandExecutionAnalysis;
    this._isScriptEngineInjectionAnalysis = config.isScriptEngineInjectionAnalysis;
    this._isSqlInjectionAnalysis = config.isSqlInjectionAnalysis;
    this._isTemplateEngineInjectionAnalysis = config.isTemplateEngineInjectionAnalysis;
    this._isUploadAnyFileAnalysis = config.isUploadAnyFileAnalysis;
    this._isWebshellBackdoorAnalysis = config.isWebshellBackdoorAnalysis;
    this._logIndexType = config.logIndexType;
    this._logRegion = config.logRegion;
    this._logSet = config.logSet;
    this._logSource = config.logSource;
    this._logTopicId = config.logTopicId;
    this._logTraceIdKey = config.logTraceIdKey;
    this._serviceName = config.serviceName;
    this._snapshotTimeout = config.snapshotTimeout;
    this._traceSquash = config.traceSquash;
    this._urlAutoConvergenceEnable = config.urlAutoConvergenceEnable;
    this._urlConvergence = config.urlConvergence;
    this._urlConvergenceSwitch = config.urlConvergenceSwitch;
    this._urlConvergenceThreshold = config.urlConvergenceThreshold;
    this._urlExclude = config.urlExclude;
    this._urlLongSegmentThreshold = config.urlLongSegmentThreshold;
    this._urlNumberSegmentThreshold = config.urlNumberSegmentThreshold;
    this._agentOperationConfigView.internalValue = config.agentOperationConfigView;
    this._instrumentList.internalValue = config.instrumentList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_enable - computed: true, optional: true, required: false
  private _agentEnable?: boolean | cdktf.IResolvable; 
  public get agentEnable() {
    return this.getBooleanAttribute('agent_enable');
  }
  public set agentEnable(value: boolean | cdktf.IResolvable) {
    this._agentEnable = value;
  }
  public resetAgentEnable() {
    this._agentEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEnableInput() {
    return this._agentEnable;
  }

  // dashboard_topic_id - computed: true, optional: true, required: false
  private _dashboardTopicId?: string; 
  public get dashboardTopicId() {
    return this.getStringAttribute('dashboard_topic_id');
  }
  public set dashboardTopicId(value: string) {
    this._dashboardTopicId = value;
  }
  public resetDashboardTopicId() {
    this._dashboardTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTopicIdInput() {
    return this._dashboardTopicId;
  }

  // disable_cpu_used - computed: true, optional: true, required: false
  private _disableCpuUsed?: number; 
  public get disableCpuUsed() {
    return this.getNumberAttribute('disable_cpu_used');
  }
  public set disableCpuUsed(value: number) {
    this._disableCpuUsed = value;
  }
  public resetDisableCpuUsed() {
    this._disableCpuUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCpuUsedInput() {
    return this._disableCpuUsed;
  }

  // disable_memory_used - computed: true, optional: true, required: false
  private _disableMemoryUsed?: number; 
  public get disableMemoryUsed() {
    return this.getNumberAttribute('disable_memory_used');
  }
  public set disableMemoryUsed(value: number) {
    this._disableMemoryUsed = value;
  }
  public resetDisableMemoryUsed() {
    this._disableMemoryUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMemoryUsedInput() {
    return this._disableMemoryUsed;
  }

  // enable_dashboard_config - computed: true, optional: true, required: false
  private _enableDashboardConfig?: boolean | cdktf.IResolvable; 
  public get enableDashboardConfig() {
    return this.getBooleanAttribute('enable_dashboard_config');
  }
  public set enableDashboardConfig(value: boolean | cdktf.IResolvable) {
    this._enableDashboardConfig = value;
  }
  public resetEnableDashboardConfig() {
    this._enableDashboardConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDashboardConfigInput() {
    return this._enableDashboardConfig;
  }

  // enable_log_config - computed: true, optional: true, required: false
  private _enableLogConfig?: boolean | cdktf.IResolvable; 
  public get enableLogConfig() {
    return this.getBooleanAttribute('enable_log_config');
  }
  public set enableLogConfig(value: boolean | cdktf.IResolvable) {
    this._enableLogConfig = value;
  }
  public resetEnableLogConfig() {
    this._enableLogConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogConfigInput() {
    return this._enableLogConfig;
  }

  // enable_security_config - computed: true, optional: true, required: false
  private _enableSecurityConfig?: boolean | cdktf.IResolvable; 
  public get enableSecurityConfig() {
    return this.getBooleanAttribute('enable_security_config');
  }
  public set enableSecurityConfig(value: boolean | cdktf.IResolvable) {
    this._enableSecurityConfig = value;
  }
  public resetEnableSecurityConfig() {
    this._enableSecurityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityConfigInput() {
    return this._enableSecurityConfig;
  }

  // enable_snapshot - computed: true, optional: true, required: false
  private _enableSnapshot?: boolean | cdktf.IResolvable; 
  public get enableSnapshot() {
    return this.getBooleanAttribute('enable_snapshot');
  }
  public set enableSnapshot(value: boolean | cdktf.IResolvable) {
    this._enableSnapshot = value;
  }
  public resetEnableSnapshot() {
    this._enableSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotInput() {
    return this._enableSnapshot;
  }

  // error_code_filter - computed: true, optional: true, required: false
  private _errorCodeFilter?: string; 
  public get errorCodeFilter() {
    return this.getStringAttribute('error_code_filter');
  }
  public set errorCodeFilter(value: string) {
    this._errorCodeFilter = value;
  }
  public resetErrorCodeFilter() {
    this._errorCodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeFilterInput() {
    return this._errorCodeFilter;
  }

  // event_enable - computed: true, optional: true, required: false
  private _eventEnable?: boolean | cdktf.IResolvable; 
  public get eventEnable() {
    return this.getBooleanAttribute('event_enable');
  }
  public set eventEnable(value: boolean | cdktf.IResolvable) {
    this._eventEnable = value;
  }
  public resetEventEnable() {
    this._eventEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEnableInput() {
    return this._eventEnable;
  }

  // exception_filter - computed: true, optional: true, required: false
  private _exceptionFilter?: string; 
  public get exceptionFilter() {
    return this.getStringAttribute('exception_filter');
  }
  public set exceptionFilter(value: string) {
    this._exceptionFilter = value;
  }
  public resetExceptionFilter() {
    this._exceptionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFilterInput() {
    return this._exceptionFilter;
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

  // ignore_operation_name - computed: true, optional: true, required: false
  private _ignoreOperationName?: string; 
  public get ignoreOperationName() {
    return this.getStringAttribute('ignore_operation_name');
  }
  public set ignoreOperationName(value: string) {
    this._ignoreOperationName = value;
  }
  public resetIgnoreOperationName() {
    this._ignoreOperationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOperationNameInput() {
    return this._ignoreOperationName;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_delete_any_file_analysis - computed: true, optional: true, required: false
  private _isDeleteAnyFileAnalysis?: number; 
  public get isDeleteAnyFileAnalysis() {
    return this.getNumberAttribute('is_delete_any_file_analysis');
  }
  public set isDeleteAnyFileAnalysis(value: number) {
    this._isDeleteAnyFileAnalysis = value;
  }
  public resetIsDeleteAnyFileAnalysis() {
    this._isDeleteAnyFileAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeleteAnyFileAnalysisInput() {
    return this._isDeleteAnyFileAnalysis;
  }

  // is_deserialization_analysis - computed: true, optional: true, required: false
  private _isDeserializationAnalysis?: number; 
  public get isDeserializationAnalysis() {
    return this.getNumberAttribute('is_deserialization_analysis');
  }
  public set isDeserializationAnalysis(value: number) {
    this._isDeserializationAnalysis = value;
  }
  public resetIsDeserializationAnalysis() {
    this._isDeserializationAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeserializationAnalysisInput() {
    return this._isDeserializationAnalysis;
  }

  // is_directory_traversal_analysis - computed: true, optional: true, required: false
  private _isDirectoryTraversalAnalysis?: number; 
  public get isDirectoryTraversalAnalysis() {
    return this.getNumberAttribute('is_directory_traversal_analysis');
  }
  public set isDirectoryTraversalAnalysis(value: number) {
    this._isDirectoryTraversalAnalysis = value;
  }
  public resetIsDirectoryTraversalAnalysis() {
    this._isDirectoryTraversalAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDirectoryTraversalAnalysisInput() {
    return this._isDirectoryTraversalAnalysis;
  }

  // is_expression_injection_analysis - computed: true, optional: true, required: false
  private _isExpressionInjectionAnalysis?: number; 
  public get isExpressionInjectionAnalysis() {
    return this.getNumberAttribute('is_expression_injection_analysis');
  }
  public set isExpressionInjectionAnalysis(value: number) {
    this._isExpressionInjectionAnalysis = value;
  }
  public resetIsExpressionInjectionAnalysis() {
    this._isExpressionInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExpressionInjectionAnalysisInput() {
    return this._isExpressionInjectionAnalysis;
  }

  // is_include_any_file_analysis - computed: true, optional: true, required: false
  private _isIncludeAnyFileAnalysis?: number; 
  public get isIncludeAnyFileAnalysis() {
    return this.getNumberAttribute('is_include_any_file_analysis');
  }
  public set isIncludeAnyFileAnalysis(value: number) {
    this._isIncludeAnyFileAnalysis = value;
  }
  public resetIsIncludeAnyFileAnalysis() {
    this._isIncludeAnyFileAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludeAnyFileAnalysisInput() {
    return this._isIncludeAnyFileAnalysis;
  }

  // is_instrumentation_vulnerability_scan - computed: true, optional: true, required: false
  private _isInstrumentationVulnerabilityScan?: number; 
  public get isInstrumentationVulnerabilityScan() {
    return this.getNumberAttribute('is_instrumentation_vulnerability_scan');
  }
  public set isInstrumentationVulnerabilityScan(value: number) {
    this._isInstrumentationVulnerabilityScan = value;
  }
  public resetIsInstrumentationVulnerabilityScan() {
    this._isInstrumentationVulnerabilityScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstrumentationVulnerabilityScanInput() {
    return this._isInstrumentationVulnerabilityScan;
  }

  // is_jndi_injection_analysis - computed: true, optional: true, required: false
  private _isJndiInjectionAnalysis?: number; 
  public get isJndiInjectionAnalysis() {
    return this.getNumberAttribute('is_jndi_injection_analysis');
  }
  public set isJndiInjectionAnalysis(value: number) {
    this._isJndiInjectionAnalysis = value;
  }
  public resetIsJndiInjectionAnalysis() {
    this._isJndiInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isJndiInjectionAnalysisInput() {
    return this._isJndiInjectionAnalysis;
  }

  // is_jni_injection_analysis - computed: true, optional: true, required: false
  private _isJniInjectionAnalysis?: number; 
  public get isJniInjectionAnalysis() {
    return this.getNumberAttribute('is_jni_injection_analysis');
  }
  public set isJniInjectionAnalysis(value: number) {
    this._isJniInjectionAnalysis = value;
  }
  public resetIsJniInjectionAnalysis() {
    this._isJniInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isJniInjectionAnalysisInput() {
    return this._isJniInjectionAnalysis;
  }

  // is_memory_hijacking_analysis - computed: true, optional: true, required: false
  private _isMemoryHijackingAnalysis?: number; 
  public get isMemoryHijackingAnalysis() {
    return this.getNumberAttribute('is_memory_hijacking_analysis');
  }
  public set isMemoryHijackingAnalysis(value: number) {
    this._isMemoryHijackingAnalysis = value;
  }
  public resetIsMemoryHijackingAnalysis() {
    this._isMemoryHijackingAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryHijackingAnalysisInput() {
    return this._isMemoryHijackingAnalysis;
  }

  // is_read_any_file_analysis - computed: true, optional: true, required: false
  private _isReadAnyFileAnalysis?: number; 
  public get isReadAnyFileAnalysis() {
    return this.getNumberAttribute('is_read_any_file_analysis');
  }
  public set isReadAnyFileAnalysis(value: number) {
    this._isReadAnyFileAnalysis = value;
  }
  public resetIsReadAnyFileAnalysis() {
    this._isReadAnyFileAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadAnyFileAnalysisInput() {
    return this._isReadAnyFileAnalysis;
  }

  // is_related_dashboard - computed: true, optional: true, required: false
  private _isRelatedDashboard?: number; 
  public get isRelatedDashboard() {
    return this.getNumberAttribute('is_related_dashboard');
  }
  public set isRelatedDashboard(value: number) {
    this._isRelatedDashboard = value;
  }
  public resetIsRelatedDashboard() {
    this._isRelatedDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRelatedDashboardInput() {
    return this._isRelatedDashboard;
  }

  // is_related_log - computed: true, optional: true, required: false
  private _isRelatedLog?: number; 
  public get isRelatedLog() {
    return this.getNumberAttribute('is_related_log');
  }
  public set isRelatedLog(value: number) {
    this._isRelatedLog = value;
  }
  public resetIsRelatedLog() {
    this._isRelatedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRelatedLogInput() {
    return this._isRelatedLog;
  }

  // is_remote_command_execution_analysis - computed: true, optional: true, required: false
  private _isRemoteCommandExecutionAnalysis?: number; 
  public get isRemoteCommandExecutionAnalysis() {
    return this.getNumberAttribute('is_remote_command_execution_analysis');
  }
  public set isRemoteCommandExecutionAnalysis(value: number) {
    this._isRemoteCommandExecutionAnalysis = value;
  }
  public resetIsRemoteCommandExecutionAnalysis() {
    this._isRemoteCommandExecutionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteCommandExecutionAnalysisInput() {
    return this._isRemoteCommandExecutionAnalysis;
  }

  // is_script_engine_injection_analysis - computed: true, optional: true, required: false
  private _isScriptEngineInjectionAnalysis?: number; 
  public get isScriptEngineInjectionAnalysis() {
    return this.getNumberAttribute('is_script_engine_injection_analysis');
  }
  public set isScriptEngineInjectionAnalysis(value: number) {
    this._isScriptEngineInjectionAnalysis = value;
  }
  public resetIsScriptEngineInjectionAnalysis() {
    this._isScriptEngineInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScriptEngineInjectionAnalysisInput() {
    return this._isScriptEngineInjectionAnalysis;
  }

  // is_sql_injection_analysis - computed: true, optional: true, required: false
  private _isSqlInjectionAnalysis?: number; 
  public get isSqlInjectionAnalysis() {
    return this.getNumberAttribute('is_sql_injection_analysis');
  }
  public set isSqlInjectionAnalysis(value: number) {
    this._isSqlInjectionAnalysis = value;
  }
  public resetIsSqlInjectionAnalysis() {
    this._isSqlInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSqlInjectionAnalysisInput() {
    return this._isSqlInjectionAnalysis;
  }

  // is_template_engine_injection_analysis - computed: true, optional: true, required: false
  private _isTemplateEngineInjectionAnalysis?: number; 
  public get isTemplateEngineInjectionAnalysis() {
    return this.getNumberAttribute('is_template_engine_injection_analysis');
  }
  public set isTemplateEngineInjectionAnalysis(value: number) {
    this._isTemplateEngineInjectionAnalysis = value;
  }
  public resetIsTemplateEngineInjectionAnalysis() {
    this._isTemplateEngineInjectionAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemplateEngineInjectionAnalysisInput() {
    return this._isTemplateEngineInjectionAnalysis;
  }

  // is_upload_any_file_analysis - computed: true, optional: true, required: false
  private _isUploadAnyFileAnalysis?: number; 
  public get isUploadAnyFileAnalysis() {
    return this.getNumberAttribute('is_upload_any_file_analysis');
  }
  public set isUploadAnyFileAnalysis(value: number) {
    this._isUploadAnyFileAnalysis = value;
  }
  public resetIsUploadAnyFileAnalysis() {
    this._isUploadAnyFileAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUploadAnyFileAnalysisInput() {
    return this._isUploadAnyFileAnalysis;
  }

  // is_webshell_backdoor_analysis - computed: true, optional: true, required: false
  private _isWebshellBackdoorAnalysis?: number; 
  public get isWebshellBackdoorAnalysis() {
    return this.getNumberAttribute('is_webshell_backdoor_analysis');
  }
  public set isWebshellBackdoorAnalysis(value: number) {
    this._isWebshellBackdoorAnalysis = value;
  }
  public resetIsWebshellBackdoorAnalysis() {
    this._isWebshellBackdoorAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebshellBackdoorAnalysisInput() {
    return this._isWebshellBackdoorAnalysis;
  }

  // log_index_type - computed: true, optional: true, required: false
  private _logIndexType?: number; 
  public get logIndexType() {
    return this.getNumberAttribute('log_index_type');
  }
  public set logIndexType(value: number) {
    this._logIndexType = value;
  }
  public resetLogIndexType() {
    this._logIndexType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIndexTypeInput() {
    return this._logIndexType;
  }

  // log_region - computed: true, optional: true, required: false
  private _logRegion?: string; 
  public get logRegion() {
    return this.getStringAttribute('log_region');
  }
  public set logRegion(value: string) {
    this._logRegion = value;
  }
  public resetLogRegion() {
    this._logRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRegionInput() {
    return this._logRegion;
  }

  // log_set - computed: true, optional: true, required: false
  private _logSet?: string; 
  public get logSet() {
    return this.getStringAttribute('log_set');
  }
  public set logSet(value: string) {
    this._logSet = value;
  }
  public resetLogSet() {
    this._logSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetInput() {
    return this._logSet;
  }

  // log_source - computed: true, optional: true, required: false
  private _logSource?: string; 
  public get logSource() {
    return this.getStringAttribute('log_source');
  }
  public set logSource(value: string) {
    this._logSource = value;
  }
  public resetLogSource() {
    this._logSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceInput() {
    return this._logSource;
  }

  // log_topic_id - computed: true, optional: true, required: false
  private _logTopicId?: string; 
  public get logTopicId() {
    return this.getStringAttribute('log_topic_id');
  }
  public set logTopicId(value: string) {
    this._logTopicId = value;
  }
  public resetLogTopicId() {
    this._logTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTopicIdInput() {
    return this._logTopicId;
  }

  // log_trace_id_key - computed: true, optional: true, required: false
  private _logTraceIdKey?: string; 
  public get logTraceIdKey() {
    return this.getStringAttribute('log_trace_id_key');
  }
  public set logTraceIdKey(value: string) {
    this._logTraceIdKey = value;
  }
  public resetLogTraceIdKey() {
    this._logTraceIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTraceIdKeyInput() {
    return this._logTraceIdKey;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // snapshot_timeout - computed: true, optional: true, required: false
  private _snapshotTimeout?: number; 
  public get snapshotTimeout() {
    return this.getNumberAttribute('snapshot_timeout');
  }
  public set snapshotTimeout(value: number) {
    this._snapshotTimeout = value;
  }
  public resetSnapshotTimeout() {
    this._snapshotTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTimeoutInput() {
    return this._snapshotTimeout;
  }

  // trace_squash - computed: true, optional: true, required: false
  private _traceSquash?: boolean | cdktf.IResolvable; 
  public get traceSquash() {
    return this.getBooleanAttribute('trace_squash');
  }
  public set traceSquash(value: boolean | cdktf.IResolvable) {
    this._traceSquash = value;
  }
  public resetTraceSquash() {
    this._traceSquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceSquashInput() {
    return this._traceSquash;
  }

  // url_auto_convergence_enable - computed: true, optional: true, required: false
  private _urlAutoConvergenceEnable?: boolean | cdktf.IResolvable; 
  public get urlAutoConvergenceEnable() {
    return this.getBooleanAttribute('url_auto_convergence_enable');
  }
  public set urlAutoConvergenceEnable(value: boolean | cdktf.IResolvable) {
    this._urlAutoConvergenceEnable = value;
  }
  public resetUrlAutoConvergenceEnable() {
    this._urlAutoConvergenceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAutoConvergenceEnableInput() {
    return this._urlAutoConvergenceEnable;
  }

  // url_convergence - computed: true, optional: true, required: false
  private _urlConvergence?: string; 
  public get urlConvergence() {
    return this.getStringAttribute('url_convergence');
  }
  public set urlConvergence(value: string) {
    this._urlConvergence = value;
  }
  public resetUrlConvergence() {
    this._urlConvergence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConvergenceInput() {
    return this._urlConvergence;
  }

  // url_convergence_switch - computed: false, optional: false, required: true
  private _urlConvergenceSwitch?: number; 
  public get urlConvergenceSwitch() {
    return this.getNumberAttribute('url_convergence_switch');
  }
  public set urlConvergenceSwitch(value: number) {
    this._urlConvergenceSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConvergenceSwitchInput() {
    return this._urlConvergenceSwitch;
  }

  // url_convergence_threshold - computed: true, optional: true, required: false
  private _urlConvergenceThreshold?: number; 
  public get urlConvergenceThreshold() {
    return this.getNumberAttribute('url_convergence_threshold');
  }
  public set urlConvergenceThreshold(value: number) {
    this._urlConvergenceThreshold = value;
  }
  public resetUrlConvergenceThreshold() {
    this._urlConvergenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConvergenceThresholdInput() {
    return this._urlConvergenceThreshold;
  }

  // url_exclude - computed: true, optional: true, required: false
  private _urlExclude?: string; 
  public get urlExclude() {
    return this.getStringAttribute('url_exclude');
  }
  public set urlExclude(value: string) {
    this._urlExclude = value;
  }
  public resetUrlExclude() {
    this._urlExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExcludeInput() {
    return this._urlExclude;
  }

  // url_long_segment_threshold - computed: true, optional: true, required: false
  private _urlLongSegmentThreshold?: number; 
  public get urlLongSegmentThreshold() {
    return this.getNumberAttribute('url_long_segment_threshold');
  }
  public set urlLongSegmentThreshold(value: number) {
    this._urlLongSegmentThreshold = value;
  }
  public resetUrlLongSegmentThreshold() {
    this._urlLongSegmentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLongSegmentThresholdInput() {
    return this._urlLongSegmentThreshold;
  }

  // url_number_segment_threshold - computed: true, optional: true, required: false
  private _urlNumberSegmentThreshold?: number; 
  public get urlNumberSegmentThreshold() {
    return this.getNumberAttribute('url_number_segment_threshold');
  }
  public set urlNumberSegmentThreshold(value: number) {
    this._urlNumberSegmentThreshold = value;
  }
  public resetUrlNumberSegmentThreshold() {
    this._urlNumberSegmentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlNumberSegmentThresholdInput() {
    return this._urlNumberSegmentThreshold;
  }

  // agent_operation_config_view - computed: false, optional: true, required: false
  private _agentOperationConfigView = new ApmApplicationConfigAgentOperationConfigViewOutputReference(this, "agent_operation_config_view");
  public get agentOperationConfigView() {
    return this._agentOperationConfigView;
  }
  public putAgentOperationConfigView(value: ApmApplicationConfigAgentOperationConfigView) {
    this._agentOperationConfigView.internalValue = value;
  }
  public resetAgentOperationConfigView() {
    this._agentOperationConfigView.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentOperationConfigViewInput() {
    return this._agentOperationConfigView.internalValue;
  }

  // instrument_list - computed: false, optional: true, required: false
  private _instrumentList = new ApmApplicationConfigInstrumentListStructList(this, "instrument_list", false);
  public get instrumentList() {
    return this._instrumentList;
  }
  public putInstrumentList(value: ApmApplicationConfigInstrumentListStruct[] | cdktf.IResolvable) {
    this._instrumentList.internalValue = value;
  }
  public resetInstrumentList() {
    this._instrumentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentListInput() {
    return this._instrumentList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_enable: cdktf.booleanToTerraform(this._agentEnable),
      dashboard_topic_id: cdktf.stringToTerraform(this._dashboardTopicId),
      disable_cpu_used: cdktf.numberToTerraform(this._disableCpuUsed),
      disable_memory_used: cdktf.numberToTerraform(this._disableMemoryUsed),
      enable_dashboard_config: cdktf.booleanToTerraform(this._enableDashboardConfig),
      enable_log_config: cdktf.booleanToTerraform(this._enableLogConfig),
      enable_security_config: cdktf.booleanToTerraform(this._enableSecurityConfig),
      enable_snapshot: cdktf.booleanToTerraform(this._enableSnapshot),
      error_code_filter: cdktf.stringToTerraform(this._errorCodeFilter),
      event_enable: cdktf.booleanToTerraform(this._eventEnable),
      exception_filter: cdktf.stringToTerraform(this._exceptionFilter),
      id: cdktf.stringToTerraform(this._id),
      ignore_operation_name: cdktf.stringToTerraform(this._ignoreOperationName),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_delete_any_file_analysis: cdktf.numberToTerraform(this._isDeleteAnyFileAnalysis),
      is_deserialization_analysis: cdktf.numberToTerraform(this._isDeserializationAnalysis),
      is_directory_traversal_analysis: cdktf.numberToTerraform(this._isDirectoryTraversalAnalysis),
      is_expression_injection_analysis: cdktf.numberToTerraform(this._isExpressionInjectionAnalysis),
      is_include_any_file_analysis: cdktf.numberToTerraform(this._isIncludeAnyFileAnalysis),
      is_instrumentation_vulnerability_scan: cdktf.numberToTerraform(this._isInstrumentationVulnerabilityScan),
      is_jndi_injection_analysis: cdktf.numberToTerraform(this._isJndiInjectionAnalysis),
      is_jni_injection_analysis: cdktf.numberToTerraform(this._isJniInjectionAnalysis),
      is_memory_hijacking_analysis: cdktf.numberToTerraform(this._isMemoryHijackingAnalysis),
      is_read_any_file_analysis: cdktf.numberToTerraform(this._isReadAnyFileAnalysis),
      is_related_dashboard: cdktf.numberToTerraform(this._isRelatedDashboard),
      is_related_log: cdktf.numberToTerraform(this._isRelatedLog),
      is_remote_command_execution_analysis: cdktf.numberToTerraform(this._isRemoteCommandExecutionAnalysis),
      is_script_engine_injection_analysis: cdktf.numberToTerraform(this._isScriptEngineInjectionAnalysis),
      is_sql_injection_analysis: cdktf.numberToTerraform(this._isSqlInjectionAnalysis),
      is_template_engine_injection_analysis: cdktf.numberToTerraform(this._isTemplateEngineInjectionAnalysis),
      is_upload_any_file_analysis: cdktf.numberToTerraform(this._isUploadAnyFileAnalysis),
      is_webshell_backdoor_analysis: cdktf.numberToTerraform(this._isWebshellBackdoorAnalysis),
      log_index_type: cdktf.numberToTerraform(this._logIndexType),
      log_region: cdktf.stringToTerraform(this._logRegion),
      log_set: cdktf.stringToTerraform(this._logSet),
      log_source: cdktf.stringToTerraform(this._logSource),
      log_topic_id: cdktf.stringToTerraform(this._logTopicId),
      log_trace_id_key: cdktf.stringToTerraform(this._logTraceIdKey),
      service_name: cdktf.stringToTerraform(this._serviceName),
      snapshot_timeout: cdktf.numberToTerraform(this._snapshotTimeout),
      trace_squash: cdktf.booleanToTerraform(this._traceSquash),
      url_auto_convergence_enable: cdktf.booleanToTerraform(this._urlAutoConvergenceEnable),
      url_convergence: cdktf.stringToTerraform(this._urlConvergence),
      url_convergence_switch: cdktf.numberToTerraform(this._urlConvergenceSwitch),
      url_convergence_threshold: cdktf.numberToTerraform(this._urlConvergenceThreshold),
      url_exclude: cdktf.stringToTerraform(this._urlExclude),
      url_long_segment_threshold: cdktf.numberToTerraform(this._urlLongSegmentThreshold),
      url_number_segment_threshold: cdktf.numberToTerraform(this._urlNumberSegmentThreshold),
      agent_operation_config_view: apmApplicationConfigAgentOperationConfigViewToTerraform(this._agentOperationConfigView.internalValue),
      instrument_list: cdktf.listMapper(apmApplicationConfigInstrumentListStructToTerraform, true)(this._instrumentList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_enable: {
        value: cdktf.booleanToHclTerraform(this._agentEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dashboard_topic_id: {
        value: cdktf.stringToHclTerraform(this._dashboardTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_cpu_used: {
        value: cdktf.numberToHclTerraform(this._disableCpuUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_memory_used: {
        value: cdktf.numberToHclTerraform(this._disableMemoryUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_dashboard_config: {
        value: cdktf.booleanToHclTerraform(this._enableDashboardConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_log_config: {
        value: cdktf.booleanToHclTerraform(this._enableLogConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_security_config: {
        value: cdktf.booleanToHclTerraform(this._enableSecurityConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_snapshot: {
        value: cdktf.booleanToHclTerraform(this._enableSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_code_filter: {
        value: cdktf.stringToHclTerraform(this._errorCodeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_enable: {
        value: cdktf.booleanToHclTerraform(this._eventEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exception_filter: {
        value: cdktf.stringToHclTerraform(this._exceptionFilter),
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
      ignore_operation_name: {
        value: cdktf.stringToHclTerraform(this._ignoreOperationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_delete_any_file_analysis: {
        value: cdktf.numberToHclTerraform(this._isDeleteAnyFileAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_deserialization_analysis: {
        value: cdktf.numberToHclTerraform(this._isDeserializationAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_directory_traversal_analysis: {
        value: cdktf.numberToHclTerraform(this._isDirectoryTraversalAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_expression_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isExpressionInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_include_any_file_analysis: {
        value: cdktf.numberToHclTerraform(this._isIncludeAnyFileAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_instrumentation_vulnerability_scan: {
        value: cdktf.numberToHclTerraform(this._isInstrumentationVulnerabilityScan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_jndi_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isJndiInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_jni_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isJniInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_memory_hijacking_analysis: {
        value: cdktf.numberToHclTerraform(this._isMemoryHijackingAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_read_any_file_analysis: {
        value: cdktf.numberToHclTerraform(this._isReadAnyFileAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_related_dashboard: {
        value: cdktf.numberToHclTerraform(this._isRelatedDashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_related_log: {
        value: cdktf.numberToHclTerraform(this._isRelatedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_remote_command_execution_analysis: {
        value: cdktf.numberToHclTerraform(this._isRemoteCommandExecutionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_script_engine_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isScriptEngineInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_sql_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isSqlInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_template_engine_injection_analysis: {
        value: cdktf.numberToHclTerraform(this._isTemplateEngineInjectionAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_upload_any_file_analysis: {
        value: cdktf.numberToHclTerraform(this._isUploadAnyFileAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_webshell_backdoor_analysis: {
        value: cdktf.numberToHclTerraform(this._isWebshellBackdoorAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_index_type: {
        value: cdktf.numberToHclTerraform(this._logIndexType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_region: {
        value: cdktf.stringToHclTerraform(this._logRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_set: {
        value: cdktf.stringToHclTerraform(this._logSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_source: {
        value: cdktf.stringToHclTerraform(this._logSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_topic_id: {
        value: cdktf.stringToHclTerraform(this._logTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_trace_id_key: {
        value: cdktf.stringToHclTerraform(this._logTraceIdKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_timeout: {
        value: cdktf.numberToHclTerraform(this._snapshotTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_squash: {
        value: cdktf.booleanToHclTerraform(this._traceSquash),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_auto_convergence_enable: {
        value: cdktf.booleanToHclTerraform(this._urlAutoConvergenceEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_convergence: {
        value: cdktf.stringToHclTerraform(this._urlConvergence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_convergence_switch: {
        value: cdktf.numberToHclTerraform(this._urlConvergenceSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_convergence_threshold: {
        value: cdktf.numberToHclTerraform(this._urlConvergenceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_exclude: {
        value: cdktf.stringToHclTerraform(this._urlExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_long_segment_threshold: {
        value: cdktf.numberToHclTerraform(this._urlLongSegmentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_number_segment_threshold: {
        value: cdktf.numberToHclTerraform(this._urlNumberSegmentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agent_operation_config_view: {
        value: apmApplicationConfigAgentOperationConfigViewToHclTerraform(this._agentOperationConfigView.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmApplicationConfigAgentOperationConfigViewList",
      },
      instrument_list: {
        value: cdktf.listMapperHcl(apmApplicationConfigInstrumentListStructToHclTerraform, true)(this._instrumentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmApplicationConfigInstrumentListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
