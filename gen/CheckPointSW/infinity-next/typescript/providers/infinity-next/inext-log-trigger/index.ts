// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextLogTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Log Access Control accepts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#access_control_allow_events InextLogTrigger#access_control_allow_events}
  */
  readonly accessControlAllowEvents?: boolean | cdktf.IResolvable;
  /**
  * Log Access Control drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#access_control_drop_events InextLogTrigger#access_control_drop_events}
  */
  readonly accessControlDropEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#cef_ip_address InextLogTrigger#cef_ip_address}
  */
  readonly cefIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#cef_port InextLogTrigger#cef_port}
  */
  readonly cefPort?: number;
  /**
  * CEF protocol: UDP or TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#cef_protocol InextLogTrigger#cef_protocol}
  */
  readonly cefProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#compliance_violations InextLogTrigger#compliance_violations}
  */
  readonly complianceViolations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#compliance_warnings InextLogTrigger#compliance_warnings}
  */
  readonly complianceWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#extend_logging InextLogTrigger#extend_logging}
  */
  readonly extendLogging?: boolean | cdktf.IResolvable;
  /**
  * Minimum severity of events that will trigger extended logging: High or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#extend_logging_min_severity InextLogTrigger#extend_logging_min_severity}
  */
  readonly extendLoggingMinSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#log_to_agent InextLogTrigger#log_to_agent}
  */
  readonly logToAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#log_to_cef InextLogTrigger#log_to_cef}
  */
  readonly logToCef?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#log_to_cloud InextLogTrigger#log_to_cloud}
  */
  readonly logToCloud?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#log_to_syslog InextLogTrigger#log_to_syslog}
  */
  readonly logToSyslog?: boolean | cdktf.IResolvable;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#name InextLogTrigger#name}
  */
  readonly name: string;
  /**
  * Add response body to log if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#response_body InextLogTrigger#response_body}
  */
  readonly responseBody?: boolean | cdktf.IResolvable;
  /**
  * Add response code to log if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#response_code InextLogTrigger#response_code}
  */
  readonly responseCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#syslog_ip_address InextLogTrigger#syslog_ip_address}
  */
  readonly syslogIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#syslog_port InextLogTrigger#syslog_port}
  */
  readonly syslogPort?: number;
  /**
  * Syslog protocol: UDP or TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#syslog_protocol InextLogTrigger#syslog_protocol}
  */
  readonly syslogProtocol?: string;
  /**
  * Log Threat Prevention Prevents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#threat_prevention_detect_events InextLogTrigger#threat_prevention_detect_events}
  */
  readonly threatPreventionDetectEvents?: boolean | cdktf.IResolvable;
  /**
  * Log Threat Prevention Detects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#threat_prevention_prevent_events InextLogTrigger#threat_prevention_prevent_events}
  */
  readonly threatPreventionPreventEvents?: boolean | cdktf.IResolvable;
  /**
  * The verbosity of the log: Standard, Minimal or Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#verbosity InextLogTrigger#verbosity}
  */
  readonly verbosity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#web_body InextLogTrigger#web_body}
  */
  readonly webBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#web_headers InextLogTrigger#web_headers}
  */
  readonly webHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#web_requests InextLogTrigger#web_requests}
  */
  readonly webRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#web_url_path InextLogTrigger#web_url_path}
  */
  readonly webUrlPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#web_url_query InextLogTrigger#web_url_query}
  */
  readonly webUrlQuery?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger inext_log_trigger}
*/
export class InextLogTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_log_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextLogTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextLogTrigger to import
  * @param importFromId The id of the existing InextLogTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextLogTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_log_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_log_trigger inext_log_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextLogTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: InextLogTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_log_trigger',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlAllowEvents = config.accessControlAllowEvents;
    this._accessControlDropEvents = config.accessControlDropEvents;
    this._cefIpAddress = config.cefIpAddress;
    this._cefPort = config.cefPort;
    this._cefProtocol = config.cefProtocol;
    this._complianceViolations = config.complianceViolations;
    this._complianceWarnings = config.complianceWarnings;
    this._extendLogging = config.extendLogging;
    this._extendLoggingMinSeverity = config.extendLoggingMinSeverity;
    this._logToAgent = config.logToAgent;
    this._logToCef = config.logToCef;
    this._logToCloud = config.logToCloud;
    this._logToSyslog = config.logToSyslog;
    this._name = config.name;
    this._responseBody = config.responseBody;
    this._responseCode = config.responseCode;
    this._syslogIpAddress = config.syslogIpAddress;
    this._syslogPort = config.syslogPort;
    this._syslogProtocol = config.syslogProtocol;
    this._threatPreventionDetectEvents = config.threatPreventionDetectEvents;
    this._threatPreventionPreventEvents = config.threatPreventionPreventEvents;
    this._verbosity = config.verbosity;
    this._webBody = config.webBody;
    this._webHeaders = config.webHeaders;
    this._webRequests = config.webRequests;
    this._webUrlPath = config.webUrlPath;
    this._webUrlQuery = config.webUrlQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_allow_events - computed: false, optional: true, required: false
  private _accessControlAllowEvents?: boolean | cdktf.IResolvable; 
  public get accessControlAllowEvents() {
    return this.getBooleanAttribute('access_control_allow_events');
  }
  public set accessControlAllowEvents(value: boolean | cdktf.IResolvable) {
    this._accessControlAllowEvents = value;
  }
  public resetAccessControlAllowEvents() {
    this._accessControlAllowEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowEventsInput() {
    return this._accessControlAllowEvents;
  }

  // access_control_drop_events - computed: false, optional: true, required: false
  private _accessControlDropEvents?: boolean | cdktf.IResolvable; 
  public get accessControlDropEvents() {
    return this.getBooleanAttribute('access_control_drop_events');
  }
  public set accessControlDropEvents(value: boolean | cdktf.IResolvable) {
    this._accessControlDropEvents = value;
  }
  public resetAccessControlDropEvents() {
    this._accessControlDropEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlDropEventsInput() {
    return this._accessControlDropEvents;
  }

  // cef_ip_address - computed: false, optional: true, required: false
  private _cefIpAddress?: string; 
  public get cefIpAddress() {
    return this.getStringAttribute('cef_ip_address');
  }
  public set cefIpAddress(value: string) {
    this._cefIpAddress = value;
  }
  public resetCefIpAddress() {
    this._cefIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefIpAddressInput() {
    return this._cefIpAddress;
  }

  // cef_port - computed: false, optional: true, required: false
  private _cefPort?: number; 
  public get cefPort() {
    return this.getNumberAttribute('cef_port');
  }
  public set cefPort(value: number) {
    this._cefPort = value;
  }
  public resetCefPort() {
    this._cefPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefPortInput() {
    return this._cefPort;
  }

  // cef_protocol - computed: false, optional: true, required: false
  private _cefProtocol?: string; 
  public get cefProtocol() {
    return this.getStringAttribute('cef_protocol');
  }
  public set cefProtocol(value: string) {
    this._cefProtocol = value;
  }
  public resetCefProtocol() {
    this._cefProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefProtocolInput() {
    return this._cefProtocol;
  }

  // compliance_violations - computed: false, optional: true, required: false
  private _complianceViolations?: boolean | cdktf.IResolvable; 
  public get complianceViolations() {
    return this.getBooleanAttribute('compliance_violations');
  }
  public set complianceViolations(value: boolean | cdktf.IResolvable) {
    this._complianceViolations = value;
  }
  public resetComplianceViolations() {
    this._complianceViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceViolationsInput() {
    return this._complianceViolations;
  }

  // compliance_warnings - computed: false, optional: true, required: false
  private _complianceWarnings?: boolean | cdktf.IResolvable; 
  public get complianceWarnings() {
    return this.getBooleanAttribute('compliance_warnings');
  }
  public set complianceWarnings(value: boolean | cdktf.IResolvable) {
    this._complianceWarnings = value;
  }
  public resetComplianceWarnings() {
    this._complianceWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceWarningsInput() {
    return this._complianceWarnings;
  }

  // extend_logging - computed: false, optional: true, required: false
  private _extendLogging?: boolean | cdktf.IResolvable; 
  public get extendLogging() {
    return this.getBooleanAttribute('extend_logging');
  }
  public set extendLogging(value: boolean | cdktf.IResolvable) {
    this._extendLogging = value;
  }
  public resetExtendLogging() {
    this._extendLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendLoggingInput() {
    return this._extendLogging;
  }

  // extend_logging_min_severity - computed: false, optional: true, required: false
  private _extendLoggingMinSeverity?: string; 
  public get extendLoggingMinSeverity() {
    return this.getStringAttribute('extend_logging_min_severity');
  }
  public set extendLoggingMinSeverity(value: string) {
    this._extendLoggingMinSeverity = value;
  }
  public resetExtendLoggingMinSeverity() {
    this._extendLoggingMinSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendLoggingMinSeverityInput() {
    return this._extendLoggingMinSeverity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_to_agent - computed: false, optional: true, required: false
  private _logToAgent?: boolean | cdktf.IResolvable; 
  public get logToAgent() {
    return this.getBooleanAttribute('log_to_agent');
  }
  public set logToAgent(value: boolean | cdktf.IResolvable) {
    this._logToAgent = value;
  }
  public resetLogToAgent() {
    this._logToAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToAgentInput() {
    return this._logToAgent;
  }

  // log_to_cef - computed: false, optional: true, required: false
  private _logToCef?: boolean | cdktf.IResolvable; 
  public get logToCef() {
    return this.getBooleanAttribute('log_to_cef');
  }
  public set logToCef(value: boolean | cdktf.IResolvable) {
    this._logToCef = value;
  }
  public resetLogToCef() {
    this._logToCef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToCefInput() {
    return this._logToCef;
  }

  // log_to_cloud - computed: false, optional: true, required: false
  private _logToCloud?: boolean | cdktf.IResolvable; 
  public get logToCloud() {
    return this.getBooleanAttribute('log_to_cloud');
  }
  public set logToCloud(value: boolean | cdktf.IResolvable) {
    this._logToCloud = value;
  }
  public resetLogToCloud() {
    this._logToCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToCloudInput() {
    return this._logToCloud;
  }

  // log_to_syslog - computed: false, optional: true, required: false
  private _logToSyslog?: boolean | cdktf.IResolvable; 
  public get logToSyslog() {
    return this.getBooleanAttribute('log_to_syslog');
  }
  public set logToSyslog(value: boolean | cdktf.IResolvable) {
    this._logToSyslog = value;
  }
  public resetLogToSyslog() {
    this._logToSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToSyslogInput() {
    return this._logToSyslog;
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

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: boolean | cdktf.IResolvable; 
  public get responseBody() {
    return this.getBooleanAttribute('response_body');
  }
  public set responseBody(value: boolean | cdktf.IResolvable) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: boolean | cdktf.IResolvable; 
  public get responseCode() {
    return this.getBooleanAttribute('response_code');
  }
  public set responseCode(value: boolean | cdktf.IResolvable) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // syslog_ip_address - computed: false, optional: true, required: false
  private _syslogIpAddress?: string; 
  public get syslogIpAddress() {
    return this.getStringAttribute('syslog_ip_address');
  }
  public set syslogIpAddress(value: string) {
    this._syslogIpAddress = value;
  }
  public resetSyslogIpAddress() {
    this._syslogIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogIpAddressInput() {
    return this._syslogIpAddress;
  }

  // syslog_port - computed: false, optional: true, required: false
  private _syslogPort?: number; 
  public get syslogPort() {
    return this.getNumberAttribute('syslog_port');
  }
  public set syslogPort(value: number) {
    this._syslogPort = value;
  }
  public resetSyslogPort() {
    this._syslogPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogPortInput() {
    return this._syslogPort;
  }

  // syslog_protocol - computed: false, optional: true, required: false
  private _syslogProtocol?: string; 
  public get syslogProtocol() {
    return this.getStringAttribute('syslog_protocol');
  }
  public set syslogProtocol(value: string) {
    this._syslogProtocol = value;
  }
  public resetSyslogProtocol() {
    this._syslogProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogProtocolInput() {
    return this._syslogProtocol;
  }

  // threat_prevention_detect_events - computed: false, optional: true, required: false
  private _threatPreventionDetectEvents?: boolean | cdktf.IResolvable; 
  public get threatPreventionDetectEvents() {
    return this.getBooleanAttribute('threat_prevention_detect_events');
  }
  public set threatPreventionDetectEvents(value: boolean | cdktf.IResolvable) {
    this._threatPreventionDetectEvents = value;
  }
  public resetThreatPreventionDetectEvents() {
    this._threatPreventionDetectEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionDetectEventsInput() {
    return this._threatPreventionDetectEvents;
  }

  // threat_prevention_prevent_events - computed: false, optional: true, required: false
  private _threatPreventionPreventEvents?: boolean | cdktf.IResolvable; 
  public get threatPreventionPreventEvents() {
    return this.getBooleanAttribute('threat_prevention_prevent_events');
  }
  public set threatPreventionPreventEvents(value: boolean | cdktf.IResolvable) {
    this._threatPreventionPreventEvents = value;
  }
  public resetThreatPreventionPreventEvents() {
    this._threatPreventionPreventEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionPreventEventsInput() {
    return this._threatPreventionPreventEvents;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: string; 
  public get verbosity() {
    return this.getStringAttribute('verbosity');
  }
  public set verbosity(value: string) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // web_body - computed: false, optional: true, required: false
  private _webBody?: boolean | cdktf.IResolvable; 
  public get webBody() {
    return this.getBooleanAttribute('web_body');
  }
  public set webBody(value: boolean | cdktf.IResolvable) {
    this._webBody = value;
  }
  public resetWebBody() {
    this._webBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBodyInput() {
    return this._webBody;
  }

  // web_headers - computed: false, optional: true, required: false
  private _webHeaders?: boolean | cdktf.IResolvable; 
  public get webHeaders() {
    return this.getBooleanAttribute('web_headers');
  }
  public set webHeaders(value: boolean | cdktf.IResolvable) {
    this._webHeaders = value;
  }
  public resetWebHeaders() {
    this._webHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHeadersInput() {
    return this._webHeaders;
  }

  // web_requests - computed: false, optional: true, required: false
  private _webRequests?: boolean | cdktf.IResolvable; 
  public get webRequests() {
    return this.getBooleanAttribute('web_requests');
  }
  public set webRequests(value: boolean | cdktf.IResolvable) {
    this._webRequests = value;
  }
  public resetWebRequests() {
    this._webRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRequestsInput() {
    return this._webRequests;
  }

  // web_url_path - computed: false, optional: true, required: false
  private _webUrlPath?: boolean | cdktf.IResolvable; 
  public get webUrlPath() {
    return this.getBooleanAttribute('web_url_path');
  }
  public set webUrlPath(value: boolean | cdktf.IResolvable) {
    this._webUrlPath = value;
  }
  public resetWebUrlPath() {
    this._webUrlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUrlPathInput() {
    return this._webUrlPath;
  }

  // web_url_query - computed: false, optional: true, required: false
  private _webUrlQuery?: boolean | cdktf.IResolvable; 
  public get webUrlQuery() {
    return this.getBooleanAttribute('web_url_query');
  }
  public set webUrlQuery(value: boolean | cdktf.IResolvable) {
    this._webUrlQuery = value;
  }
  public resetWebUrlQuery() {
    this._webUrlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUrlQueryInput() {
    return this._webUrlQuery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_allow_events: cdktf.booleanToTerraform(this._accessControlAllowEvents),
      access_control_drop_events: cdktf.booleanToTerraform(this._accessControlDropEvents),
      cef_ip_address: cdktf.stringToTerraform(this._cefIpAddress),
      cef_port: cdktf.numberToTerraform(this._cefPort),
      cef_protocol: cdktf.stringToTerraform(this._cefProtocol),
      compliance_violations: cdktf.booleanToTerraform(this._complianceViolations),
      compliance_warnings: cdktf.booleanToTerraform(this._complianceWarnings),
      extend_logging: cdktf.booleanToTerraform(this._extendLogging),
      extend_logging_min_severity: cdktf.stringToTerraform(this._extendLoggingMinSeverity),
      log_to_agent: cdktf.booleanToTerraform(this._logToAgent),
      log_to_cef: cdktf.booleanToTerraform(this._logToCef),
      log_to_cloud: cdktf.booleanToTerraform(this._logToCloud),
      log_to_syslog: cdktf.booleanToTerraform(this._logToSyslog),
      name: cdktf.stringToTerraform(this._name),
      response_body: cdktf.booleanToTerraform(this._responseBody),
      response_code: cdktf.booleanToTerraform(this._responseCode),
      syslog_ip_address: cdktf.stringToTerraform(this._syslogIpAddress),
      syslog_port: cdktf.numberToTerraform(this._syslogPort),
      syslog_protocol: cdktf.stringToTerraform(this._syslogProtocol),
      threat_prevention_detect_events: cdktf.booleanToTerraform(this._threatPreventionDetectEvents),
      threat_prevention_prevent_events: cdktf.booleanToTerraform(this._threatPreventionPreventEvents),
      verbosity: cdktf.stringToTerraform(this._verbosity),
      web_body: cdktf.booleanToTerraform(this._webBody),
      web_headers: cdktf.booleanToTerraform(this._webHeaders),
      web_requests: cdktf.booleanToTerraform(this._webRequests),
      web_url_path: cdktf.booleanToTerraform(this._webUrlPath),
      web_url_query: cdktf.booleanToTerraform(this._webUrlQuery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_allow_events: {
        value: cdktf.booleanToHclTerraform(this._accessControlAllowEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_control_drop_events: {
        value: cdktf.booleanToHclTerraform(this._accessControlDropEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cef_ip_address: {
        value: cdktf.stringToHclTerraform(this._cefIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cef_port: {
        value: cdktf.numberToHclTerraform(this._cefPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cef_protocol: {
        value: cdktf.stringToHclTerraform(this._cefProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_violations: {
        value: cdktf.booleanToHclTerraform(this._complianceViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compliance_warnings: {
        value: cdktf.booleanToHclTerraform(this._complianceWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extend_logging: {
        value: cdktf.booleanToHclTerraform(this._extendLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extend_logging_min_severity: {
        value: cdktf.stringToHclTerraform(this._extendLoggingMinSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_to_agent: {
        value: cdktf.booleanToHclTerraform(this._logToAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_to_cef: {
        value: cdktf.booleanToHclTerraform(this._logToCef),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_to_cloud: {
        value: cdktf.booleanToHclTerraform(this._logToCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_to_syslog: {
        value: cdktf.booleanToHclTerraform(this._logToSyslog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_body: {
        value: cdktf.booleanToHclTerraform(this._responseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_code: {
        value: cdktf.booleanToHclTerraform(this._responseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_ip_address: {
        value: cdktf.stringToHclTerraform(this._syslogIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_port: {
        value: cdktf.numberToHclTerraform(this._syslogPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_protocol: {
        value: cdktf.stringToHclTerraform(this._syslogProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_prevention_detect_events: {
        value: cdktf.booleanToHclTerraform(this._threatPreventionDetectEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threat_prevention_prevent_events: {
        value: cdktf.booleanToHclTerraform(this._threatPreventionPreventEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verbosity: {
        value: cdktf.stringToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_body: {
        value: cdktf.booleanToHclTerraform(this._webBody),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_headers: {
        value: cdktf.booleanToHclTerraform(this._webHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_requests: {
        value: cdktf.booleanToHclTerraform(this._webRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_url_path: {
        value: cdktf.booleanToHclTerraform(this._webUrlPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_url_query: {
        value: cdktf.booleanToHclTerraform(this._webUrlQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
