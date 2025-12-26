// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of custom display tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#custom_show_tags ApmInstance#custom_show_tags}
  */
  readonly customShowTags?: string[];
  /**
  * Associated dashboard id, which takes effect after the associated dashboard is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#dashboard_topic_id ApmInstance#dashboard_topic_id}
  */
  readonly dashboardTopicId?: string;
  /**
  * Description Of Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#description ApmInstance#description}
  */
  readonly description?: string;
  /**
  * Error rate warning line. when the average error rate of the application exceeds this threshold, the system will give an abnormal note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#err_rate_threshold ApmInstance#err_rate_threshold}
  */
  readonly errRateThreshold?: number;
  /**
  * Error sampling switch (0: off, 1: on).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#error_sample ApmInstance#error_sample}
  */
  readonly errorSample?: number;
  /**
  * Whether it is free (0 = paid edition; 1 = tsf restricted free edition; 2 = free edition), default 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#free ApmInstance#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#id ApmInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to enable the detection of deleting arbitrary files. (0 - disabled; 1: enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_delete_any_file_analysis ApmInstance#is_delete_any_file_analysis}
  */
  readonly isDeleteAnyFileAnalysis?: number;
  /**
  * Whether to enable deserialization detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_deserialization_analysis ApmInstance#is_deserialization_analysis}
  */
  readonly isDeserializationAnalysis?: number;
  /**
  * Whether to enable traversal detection of the directory. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_directory_traversal_analysis ApmInstance#is_directory_traversal_analysis}
  */
  readonly isDirectoryTraversalAnalysis?: number;
  /**
  * Whether to enable expression injection detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_expression_injection_analysis ApmInstance#is_expression_injection_analysis}
  */
  readonly isExpressionInjectionAnalysis?: number;
  /**
  * Whether to enable the detection of the inclusion of arbitrary files. (0: disabled, 1: enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_include_any_file_analysis ApmInstance#is_include_any_file_analysis}
  */
  readonly isIncludeAnyFileAnalysis?: number;
  /**
  * Whether to enable component vulnerability detection (0 = no, 1 = yes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_instrumentation_vulnerability_scan ApmInstance#is_instrumentation_vulnerability_scan}
  */
  readonly isInstrumentationVulnerabilityScan?: number;
  /**
  * Whether to enable JNDI injection detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_jndi_injection_analysis ApmInstance#is_jndi_injection_analysis}
  */
  readonly isJndiInjectionAnalysis?: number;
  /**
  * Whether to enable JNI injection detection. (0 - disabled, 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_jni_injection_analysis ApmInstance#is_jni_injection_analysis}
  */
  readonly isJniInjectionAnalysis?: number;
  /**
  * Whether to enable detection of Java webshell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_memory_hijacking_analysis ApmInstance#is_memory_hijacking_analysis}
  */
  readonly isMemoryHijackingAnalysis?: number;
  /**
  * Whether to enable the detection of reading arbitrary files. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_read_any_file_analysis ApmInstance#is_read_any_file_analysis}
  */
  readonly isReadAnyFileAnalysis?: number;
  /**
  * Whether to associate the dashboard (0 = off, 1 = on).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_related_dashboard ApmInstance#is_related_dashboard}
  */
  readonly isRelatedDashboard?: number;
  /**
  * Log feature switch (0: off; 1: on).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_related_log ApmInstance#is_related_log}
  */
  readonly isRelatedLog?: number;
  /**
  * Whether to enable detection of the remote command attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_remote_command_execution_analysis ApmInstance#is_remote_command_execution_analysis}
  */
  readonly isRemoteCommandExecutionAnalysis?: number;
  /**
  * Whether to enable script engine injection detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_script_engine_injection_analysis ApmInstance#is_script_engine_injection_analysis}
  */
  readonly isScriptEngineInjectionAnalysis?: number;
  /**
  * SQL injection detection switch (0: off, 1: on).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_sql_injection_analysis ApmInstance#is_sql_injection_analysis}
  */
  readonly isSqlInjectionAnalysis?: number;
  /**
  * Whether to enable template engine injection detection. (0: disabled; 1: enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_template_engine_injection_analysis ApmInstance#is_template_engine_injection_analysis}
  */
  readonly isTemplateEngineInjectionAnalysis?: number;
  /**
  * Whether to enable the detection of uploading arbitrary files. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_upload_any_file_analysis ApmInstance#is_upload_any_file_analysis}
  */
  readonly isUploadAnyFileAnalysis?: number;
  /**
  * Whether to enable Webshell backdoor detection. (0 - disabled; 1 - enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#is_webshell_backdoor_analysis ApmInstance#is_webshell_backdoor_analysis}
  */
  readonly isWebshellBackdoorAnalysis?: number;
  /**
  * CLS index type. (0 = full-text index; 1 = key-value index).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_index_type ApmInstance#log_index_type}
  */
  readonly logIndexType?: number;
  /**
  * Log region, which takes effect after the log feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_region ApmInstance#log_region}
  */
  readonly logRegion?: string;
  /**
  * Logset, which takes effect only after the log feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_set ApmInstance#log_set}
  */
  readonly logSet?: string;
  /**
  * Log source, which takes effect only after the log feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_source ApmInstance#log_source}
  */
  readonly logSource?: string;
  /**
  * CLS log topic id, which takes effect after the log feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_topic_id ApmInstance#log_topic_id}
  */
  readonly logTopicId?: string;
  /**
  * Index key of traceId. It is valid when the CLS index type is key-value index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#log_trace_id_key ApmInstance#log_trace_id_key}
  */
  readonly logTraceIdKey?: string;
  /**
  * Name Of Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#name ApmInstance#name}
  */
  readonly name: string;
  /**
  * Billing switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#open_billing ApmInstance#open_billing}
  */
  readonly openBilling?: boolean | cdktf.IResolvable;
  /**
  * Modify the billing mode: `1` means prepaid, `0` means pay-as-you-go, the default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#pay_mode ApmInstance#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Response time warning line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#response_duration_warning_threshold ApmInstance#response_duration_warning_threshold}
  */
  readonly responseDurationWarningThreshold?: number;
  /**
  * Sampling rate (unit: %).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#sample_rate ApmInstance#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Sampling slow call saving threshold (unit: ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#slow_request_saved_threshold ApmInstance#slow_request_saved_threshold}
  */
  readonly slowRequestSavedThreshold?: number;
  /**
  * Quota Of Instance Reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#span_daily_counters ApmInstance#span_daily_counters}
  */
  readonly spanDailyCounters?: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#tags ApmInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Duration Of Trace Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#trace_duration ApmInstance#trace_duration}
  */
  readonly traceDuration?: number;
  /**
  * Convergence threshold for URL long segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#url_long_segment_threshold ApmInstance#url_long_segment_threshold}
  */
  readonly urlLongSegmentThreshold?: number;
  /**
  * Convergence threshold for URL numerical segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#url_number_segment_threshold ApmInstance#url_number_segment_threshold}
  */
  readonly urlNumberSegmentThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance tencentcloud_apm_instance}
*/
export class ApmInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_apm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmInstance to import
  * @param importFromId The id of the existing ApmInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_apm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/apm_instance tencentcloud_apm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApmInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_apm_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customShowTags = config.customShowTags;
    this._dashboardTopicId = config.dashboardTopicId;
    this._description = config.description;
    this._errRateThreshold = config.errRateThreshold;
    this._errorSample = config.errorSample;
    this._free = config.free;
    this._id = config.id;
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
    this._name = config.name;
    this._openBilling = config.openBilling;
    this._payMode = config.payMode;
    this._responseDurationWarningThreshold = config.responseDurationWarningThreshold;
    this._sampleRate = config.sampleRate;
    this._slowRequestSavedThreshold = config.slowRequestSavedThreshold;
    this._spanDailyCounters = config.spanDailyCounters;
    this._tags = config.tags;
    this._traceDuration = config.traceDuration;
    this._urlLongSegmentThreshold = config.urlLongSegmentThreshold;
    this._urlNumberSegmentThreshold = config.urlNumberSegmentThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_show_tags - computed: false, optional: true, required: false
  private _customShowTags?: string[]; 
  public get customShowTags() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_show_tags'));
  }
  public set customShowTags(value: string[]) {
    this._customShowTags = value;
  }
  public resetCustomShowTags() {
    this._customShowTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customShowTagsInput() {
    return this._customShowTags;
  }

  // dashboard_topic_id - computed: false, optional: true, required: false
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

  // err_rate_threshold - computed: true, optional: true, required: false
  private _errRateThreshold?: number; 
  public get errRateThreshold() {
    return this.getNumberAttribute('err_rate_threshold');
  }
  public set errRateThreshold(value: number) {
    this._errRateThreshold = value;
  }
  public resetErrRateThreshold() {
    this._errRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errRateThresholdInput() {
    return this._errRateThreshold;
  }

  // error_sample - computed: true, optional: true, required: false
  private _errorSample?: number; 
  public get errorSample() {
    return this.getNumberAttribute('error_sample');
  }
  public set errorSample(value: number) {
    this._errorSample = value;
  }
  public resetErrorSample() {
    this._errorSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorSampleInput() {
    return this._errorSample;
  }

  // free - computed: true, optional: true, required: false
  private _free?: number; 
  public get free() {
    return this.getNumberAttribute('free');
  }
  public set free(value: number) {
    this._free = value;
  }
  public resetFree() {
    this._free = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeInput() {
    return this._free;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // log_region - computed: false, optional: true, required: false
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

  // log_set - computed: false, optional: true, required: false
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

  // log_source - computed: false, optional: true, required: false
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

  // log_topic_id - computed: false, optional: true, required: false
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

  // log_trace_id_key - computed: false, optional: true, required: false
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

  // open_billing - computed: true, optional: true, required: false
  private _openBilling?: boolean | cdktf.IResolvable; 
  public get openBilling() {
    return this.getBooleanAttribute('open_billing');
  }
  public set openBilling(value: boolean | cdktf.IResolvable) {
    this._openBilling = value;
  }
  public resetOpenBilling() {
    this._openBilling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openBillingInput() {
    return this._openBilling;
  }

  // pay_mode - computed: true, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // public_collector_url - computed: true, optional: false, required: false
  public get publicCollectorUrl() {
    return this.getStringAttribute('public_collector_url');
  }

  // response_duration_warning_threshold - computed: true, optional: true, required: false
  private _responseDurationWarningThreshold?: number; 
  public get responseDurationWarningThreshold() {
    return this.getNumberAttribute('response_duration_warning_threshold');
  }
  public set responseDurationWarningThreshold(value: number) {
    this._responseDurationWarningThreshold = value;
  }
  public resetResponseDurationWarningThreshold() {
    this._responseDurationWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDurationWarningThresholdInput() {
    return this._responseDurationWarningThreshold;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // slow_request_saved_threshold - computed: true, optional: true, required: false
  private _slowRequestSavedThreshold?: number; 
  public get slowRequestSavedThreshold() {
    return this.getNumberAttribute('slow_request_saved_threshold');
  }
  public set slowRequestSavedThreshold(value: number) {
    this._slowRequestSavedThreshold = value;
  }
  public resetSlowRequestSavedThreshold() {
    this._slowRequestSavedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRequestSavedThresholdInput() {
    return this._slowRequestSavedThreshold;
  }

  // span_daily_counters - computed: true, optional: true, required: false
  private _spanDailyCounters?: number; 
  public get spanDailyCounters() {
    return this.getNumberAttribute('span_daily_counters');
  }
  public set spanDailyCounters(value: number) {
    this._spanDailyCounters = value;
  }
  public resetSpanDailyCounters() {
    this._spanDailyCounters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDailyCountersInput() {
    return this._spanDailyCounters;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // trace_duration - computed: true, optional: true, required: false
  private _traceDuration?: number; 
  public get traceDuration() {
    return this.getNumberAttribute('trace_duration');
  }
  public set traceDuration(value: number) {
    this._traceDuration = value;
  }
  public resetTraceDuration() {
    this._traceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceDurationInput() {
    return this._traceDuration;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_show_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customShowTags),
      dashboard_topic_id: cdktf.stringToTerraform(this._dashboardTopicId),
      description: cdktf.stringToTerraform(this._description),
      err_rate_threshold: cdktf.numberToTerraform(this._errRateThreshold),
      error_sample: cdktf.numberToTerraform(this._errorSample),
      free: cdktf.numberToTerraform(this._free),
      id: cdktf.stringToTerraform(this._id),
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
      name: cdktf.stringToTerraform(this._name),
      open_billing: cdktf.booleanToTerraform(this._openBilling),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      response_duration_warning_threshold: cdktf.numberToTerraform(this._responseDurationWarningThreshold),
      sample_rate: cdktf.numberToTerraform(this._sampleRate),
      slow_request_saved_threshold: cdktf.numberToTerraform(this._slowRequestSavedThreshold),
      span_daily_counters: cdktf.numberToTerraform(this._spanDailyCounters),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trace_duration: cdktf.numberToTerraform(this._traceDuration),
      url_long_segment_threshold: cdktf.numberToTerraform(this._urlLongSegmentThreshold),
      url_number_segment_threshold: cdktf.numberToTerraform(this._urlNumberSegmentThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_show_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customShowTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dashboard_topic_id: {
        value: cdktf.stringToHclTerraform(this._dashboardTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      err_rate_threshold: {
        value: cdktf.numberToHclTerraform(this._errRateThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_sample: {
        value: cdktf.numberToHclTerraform(this._errorSample),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      free: {
        value: cdktf.numberToHclTerraform(this._free),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_billing: {
        value: cdktf.booleanToHclTerraform(this._openBilling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_duration_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._responseDurationWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_rate: {
        value: cdktf.numberToHclTerraform(this._sampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slow_request_saved_threshold: {
        value: cdktf.numberToHclTerraform(this._slowRequestSavedThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      span_daily_counters: {
        value: cdktf.numberToHclTerraform(this._spanDailyCounters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trace_duration: {
        value: cdktf.numberToHclTerraform(this._traceDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
