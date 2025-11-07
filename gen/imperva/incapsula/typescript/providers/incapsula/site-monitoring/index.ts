// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether or not an email will be sent upon server failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#alarm_on_dc_failover SiteMonitoring#alarm_on_dc_failover}
  */
  readonly alarmOnDcFailover?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not an email will be sent upon data center failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#alarm_on_server_failover SiteMonitoring#alarm_on_server_failover}
  */
  readonly alarmOnServerFailover?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not an email will be sent upon failover to a standby data center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#alarm_on_stands_by_failover SiteMonitoring#alarm_on_stands_by_failover}
  */
  readonly alarmOnStandsByFailover?: boolean | cdktf.IResolvable;
  /**
  * The expected string. If left empty, any response, except for the codes defined in the HTTP response error codes to be treated as Down parameter, will be considered successful. If the value is non-empty, then the defined value must appear within the response string for the response to be considered successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#expected_received_string SiteMonitoring#expected_received_string}
  */
  readonly expectedReceivedString?: string;
  /**
  * The minimum duration of failures above the threshold to consider server as down. 20-180 SECONDS or 1-2 MINUTES. Default: 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#failed_requests_duration SiteMonitoring#failed_requests_duration}
  */
  readonly failedRequestsDuration?: number;
  /**
  * Time unit. Possible values: SECONDS, MINUTES. Default: SECONDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#failed_requests_duration_units SiteMonitoring#failed_requests_duration_units}
  */
  readonly failedRequestsDurationUnits?: string;
  /**
  * The minimum number of of failed requests to be considered as failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#failed_requests_min_number SiteMonitoring#failed_requests_min_number}
  */
  readonly failedRequestsMinNumber?: number;
  /**
  * The percentage of failed requests to the origin server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#failed_requests_percentage SiteMonitoring#failed_requests_percentage}
  */
  readonly failedRequestsPercentage?: number;
  /**
  * The maximum time to wait for an HTTP response. 1-200 SECONDS or 1-2 MINUTES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#http_request_timeout SiteMonitoring#http_request_timeout}
  */
  readonly httpRequestTimeout?: number;
  /**
  * Time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#http_request_timeout_units SiteMonitoring#http_request_timeout_units}
  */
  readonly httpRequestTimeoutUnits?: string;
  /**
  * The HTTP response error codes or patterns that will be counted as request failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#http_response_error SiteMonitoring#http_response_error}
  */
  readonly httpResponseError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#id SiteMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL to use for monitoring your website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#monitoring_url SiteMonitoring#monitoring_url}
  */
  readonly monitoringUrl?: string;
  /**
  * Monitors required to report server / data center as down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#required_monitors SiteMonitoring#required_monitors}
  */
  readonly requiredMonitors?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#site_id SiteMonitoring#site_id}
  */
  readonly siteId: number;
  /**
  * Every time an origin server is tested to see whether it’s back up, the test will be retried this number of times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#up_check_retries SiteMonitoring#up_check_retries}
  */
  readonly upCheckRetries?: number;
  /**
  * After an origin server was identified as down, Imperva will periodically test it to see whether it has recovered, according to the frequency defined in this parameter. 10-120 SECONDS or 1-2 MINUTES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#up_checks_interval SiteMonitoring#up_checks_interval}
  */
  readonly upChecksInterval?: number;
  /**
  * Time unit. Default: SECONDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#up_checks_interval_units SiteMonitoring#up_checks_interval_units}
  */
  readonly upChecksIntervalUnits?: string;
  /**
  * If Imperva determines that an origin server is down according to failed request criteria, it will initiate another request to verify that the origin server is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#use_verification_for_down SiteMonitoring#use_verification_for_down}
  */
  readonly useVerificationForDown?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring incapsula_site_monitoring}
*/
export class SiteMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_site_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteMonitoring to import
  * @param importFromId The id of the existing SiteMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_site_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_monitoring incapsula_site_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: SiteMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_site_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmOnDcFailover = config.alarmOnDcFailover;
    this._alarmOnServerFailover = config.alarmOnServerFailover;
    this._alarmOnStandsByFailover = config.alarmOnStandsByFailover;
    this._expectedReceivedString = config.expectedReceivedString;
    this._failedRequestsDuration = config.failedRequestsDuration;
    this._failedRequestsDurationUnits = config.failedRequestsDurationUnits;
    this._failedRequestsMinNumber = config.failedRequestsMinNumber;
    this._failedRequestsPercentage = config.failedRequestsPercentage;
    this._httpRequestTimeout = config.httpRequestTimeout;
    this._httpRequestTimeoutUnits = config.httpRequestTimeoutUnits;
    this._httpResponseError = config.httpResponseError;
    this._id = config.id;
    this._monitoringUrl = config.monitoringUrl;
    this._requiredMonitors = config.requiredMonitors;
    this._siteId = config.siteId;
    this._upCheckRetries = config.upCheckRetries;
    this._upChecksInterval = config.upChecksInterval;
    this._upChecksIntervalUnits = config.upChecksIntervalUnits;
    this._useVerificationForDown = config.useVerificationForDown;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_on_dc_failover - computed: false, optional: true, required: false
  private _alarmOnDcFailover?: boolean | cdktf.IResolvable; 
  public get alarmOnDcFailover() {
    return this.getBooleanAttribute('alarm_on_dc_failover');
  }
  public set alarmOnDcFailover(value: boolean | cdktf.IResolvable) {
    this._alarmOnDcFailover = value;
  }
  public resetAlarmOnDcFailover() {
    this._alarmOnDcFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmOnDcFailoverInput() {
    return this._alarmOnDcFailover;
  }

  // alarm_on_server_failover - computed: false, optional: true, required: false
  private _alarmOnServerFailover?: boolean | cdktf.IResolvable; 
  public get alarmOnServerFailover() {
    return this.getBooleanAttribute('alarm_on_server_failover');
  }
  public set alarmOnServerFailover(value: boolean | cdktf.IResolvable) {
    this._alarmOnServerFailover = value;
  }
  public resetAlarmOnServerFailover() {
    this._alarmOnServerFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmOnServerFailoverInput() {
    return this._alarmOnServerFailover;
  }

  // alarm_on_stands_by_failover - computed: false, optional: true, required: false
  private _alarmOnStandsByFailover?: boolean | cdktf.IResolvable; 
  public get alarmOnStandsByFailover() {
    return this.getBooleanAttribute('alarm_on_stands_by_failover');
  }
  public set alarmOnStandsByFailover(value: boolean | cdktf.IResolvable) {
    this._alarmOnStandsByFailover = value;
  }
  public resetAlarmOnStandsByFailover() {
    this._alarmOnStandsByFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmOnStandsByFailoverInput() {
    return this._alarmOnStandsByFailover;
  }

  // expected_received_string - computed: false, optional: true, required: false
  private _expectedReceivedString?: string; 
  public get expectedReceivedString() {
    return this.getStringAttribute('expected_received_string');
  }
  public set expectedReceivedString(value: string) {
    this._expectedReceivedString = value;
  }
  public resetExpectedReceivedString() {
    this._expectedReceivedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedReceivedStringInput() {
    return this._expectedReceivedString;
  }

  // failed_requests_duration - computed: false, optional: true, required: false
  private _failedRequestsDuration?: number; 
  public get failedRequestsDuration() {
    return this.getNumberAttribute('failed_requests_duration');
  }
  public set failedRequestsDuration(value: number) {
    this._failedRequestsDuration = value;
  }
  public resetFailedRequestsDuration() {
    this._failedRequestsDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestsDurationInput() {
    return this._failedRequestsDuration;
  }

  // failed_requests_duration_units - computed: false, optional: true, required: false
  private _failedRequestsDurationUnits?: string; 
  public get failedRequestsDurationUnits() {
    return this.getStringAttribute('failed_requests_duration_units');
  }
  public set failedRequestsDurationUnits(value: string) {
    this._failedRequestsDurationUnits = value;
  }
  public resetFailedRequestsDurationUnits() {
    this._failedRequestsDurationUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestsDurationUnitsInput() {
    return this._failedRequestsDurationUnits;
  }

  // failed_requests_min_number - computed: false, optional: true, required: false
  private _failedRequestsMinNumber?: number; 
  public get failedRequestsMinNumber() {
    return this.getNumberAttribute('failed_requests_min_number');
  }
  public set failedRequestsMinNumber(value: number) {
    this._failedRequestsMinNumber = value;
  }
  public resetFailedRequestsMinNumber() {
    this._failedRequestsMinNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestsMinNumberInput() {
    return this._failedRequestsMinNumber;
  }

  // failed_requests_percentage - computed: false, optional: true, required: false
  private _failedRequestsPercentage?: number; 
  public get failedRequestsPercentage() {
    return this.getNumberAttribute('failed_requests_percentage');
  }
  public set failedRequestsPercentage(value: number) {
    this._failedRequestsPercentage = value;
  }
  public resetFailedRequestsPercentage() {
    this._failedRequestsPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestsPercentageInput() {
    return this._failedRequestsPercentage;
  }

  // http_request_timeout - computed: false, optional: true, required: false
  private _httpRequestTimeout?: number; 
  public get httpRequestTimeout() {
    return this.getNumberAttribute('http_request_timeout');
  }
  public set httpRequestTimeout(value: number) {
    this._httpRequestTimeout = value;
  }
  public resetHttpRequestTimeout() {
    this._httpRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestTimeoutInput() {
    return this._httpRequestTimeout;
  }

  // http_request_timeout_units - computed: false, optional: true, required: false
  private _httpRequestTimeoutUnits?: string; 
  public get httpRequestTimeoutUnits() {
    return this.getStringAttribute('http_request_timeout_units');
  }
  public set httpRequestTimeoutUnits(value: string) {
    this._httpRequestTimeoutUnits = value;
  }
  public resetHttpRequestTimeoutUnits() {
    this._httpRequestTimeoutUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestTimeoutUnitsInput() {
    return this._httpRequestTimeoutUnits;
  }

  // http_response_error - computed: false, optional: true, required: false
  private _httpResponseError?: string; 
  public get httpResponseError() {
    return this.getStringAttribute('http_response_error');
  }
  public set httpResponseError(value: string) {
    this._httpResponseError = value;
  }
  public resetHttpResponseError() {
    this._httpResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseErrorInput() {
    return this._httpResponseError;
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

  // monitoring_url - computed: false, optional: true, required: false
  private _monitoringUrl?: string; 
  public get monitoringUrl() {
    return this.getStringAttribute('monitoring_url');
  }
  public set monitoringUrl(value: string) {
    this._monitoringUrl = value;
  }
  public resetMonitoringUrl() {
    this._monitoringUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringUrlInput() {
    return this._monitoringUrl;
  }

  // required_monitors - computed: false, optional: true, required: false
  private _requiredMonitors?: string; 
  public get requiredMonitors() {
    return this.getStringAttribute('required_monitors');
  }
  public set requiredMonitors(value: string) {
    this._requiredMonitors = value;
  }
  public resetRequiredMonitors() {
    this._requiredMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMonitorsInput() {
    return this._requiredMonitors;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // up_check_retries - computed: false, optional: true, required: false
  private _upCheckRetries?: number; 
  public get upCheckRetries() {
    return this.getNumberAttribute('up_check_retries');
  }
  public set upCheckRetries(value: number) {
    this._upCheckRetries = value;
  }
  public resetUpCheckRetries() {
    this._upCheckRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upCheckRetriesInput() {
    return this._upCheckRetries;
  }

  // up_checks_interval - computed: false, optional: true, required: false
  private _upChecksInterval?: number; 
  public get upChecksInterval() {
    return this.getNumberAttribute('up_checks_interval');
  }
  public set upChecksInterval(value: number) {
    this._upChecksInterval = value;
  }
  public resetUpChecksInterval() {
    this._upChecksInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upChecksIntervalInput() {
    return this._upChecksInterval;
  }

  // up_checks_interval_units - computed: false, optional: true, required: false
  private _upChecksIntervalUnits?: string; 
  public get upChecksIntervalUnits() {
    return this.getStringAttribute('up_checks_interval_units');
  }
  public set upChecksIntervalUnits(value: string) {
    this._upChecksIntervalUnits = value;
  }
  public resetUpChecksIntervalUnits() {
    this._upChecksIntervalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upChecksIntervalUnitsInput() {
    return this._upChecksIntervalUnits;
  }

  // use_verification_for_down - computed: false, optional: true, required: false
  private _useVerificationForDown?: boolean | cdktf.IResolvable; 
  public get useVerificationForDown() {
    return this.getBooleanAttribute('use_verification_for_down');
  }
  public set useVerificationForDown(value: boolean | cdktf.IResolvable) {
    this._useVerificationForDown = value;
  }
  public resetUseVerificationForDown() {
    this._useVerificationForDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVerificationForDownInput() {
    return this._useVerificationForDown;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_on_dc_failover: cdktf.booleanToTerraform(this._alarmOnDcFailover),
      alarm_on_server_failover: cdktf.booleanToTerraform(this._alarmOnServerFailover),
      alarm_on_stands_by_failover: cdktf.booleanToTerraform(this._alarmOnStandsByFailover),
      expected_received_string: cdktf.stringToTerraform(this._expectedReceivedString),
      failed_requests_duration: cdktf.numberToTerraform(this._failedRequestsDuration),
      failed_requests_duration_units: cdktf.stringToTerraform(this._failedRequestsDurationUnits),
      failed_requests_min_number: cdktf.numberToTerraform(this._failedRequestsMinNumber),
      failed_requests_percentage: cdktf.numberToTerraform(this._failedRequestsPercentage),
      http_request_timeout: cdktf.numberToTerraform(this._httpRequestTimeout),
      http_request_timeout_units: cdktf.stringToTerraform(this._httpRequestTimeoutUnits),
      http_response_error: cdktf.stringToTerraform(this._httpResponseError),
      id: cdktf.stringToTerraform(this._id),
      monitoring_url: cdktf.stringToTerraform(this._monitoringUrl),
      required_monitors: cdktf.stringToTerraform(this._requiredMonitors),
      site_id: cdktf.numberToTerraform(this._siteId),
      up_check_retries: cdktf.numberToTerraform(this._upCheckRetries),
      up_checks_interval: cdktf.numberToTerraform(this._upChecksInterval),
      up_checks_interval_units: cdktf.stringToTerraform(this._upChecksIntervalUnits),
      use_verification_for_down: cdktf.booleanToTerraform(this._useVerificationForDown),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_on_dc_failover: {
        value: cdktf.booleanToHclTerraform(this._alarmOnDcFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_on_server_failover: {
        value: cdktf.booleanToHclTerraform(this._alarmOnServerFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_on_stands_by_failover: {
        value: cdktf.booleanToHclTerraform(this._alarmOnStandsByFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expected_received_string: {
        value: cdktf.stringToHclTerraform(this._expectedReceivedString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_requests_duration: {
        value: cdktf.numberToHclTerraform(this._failedRequestsDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_requests_duration_units: {
        value: cdktf.stringToHclTerraform(this._failedRequestsDurationUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_requests_min_number: {
        value: cdktf.numberToHclTerraform(this._failedRequestsMinNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_requests_percentage: {
        value: cdktf.numberToHclTerraform(this._failedRequestsPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_request_timeout: {
        value: cdktf.numberToHclTerraform(this._httpRequestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_request_timeout_units: {
        value: cdktf.stringToHclTerraform(this._httpRequestTimeoutUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_response_error: {
        value: cdktf.stringToHclTerraform(this._httpResponseError),
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
      monitoring_url: {
        value: cdktf.stringToHclTerraform(this._monitoringUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required_monitors: {
        value: cdktf.stringToHclTerraform(this._requiredMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_check_retries: {
        value: cdktf.numberToHclTerraform(this._upCheckRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_checks_interval: {
        value: cdktf.numberToHclTerraform(this._upChecksInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_checks_interval_units: {
        value: cdktf.stringToHclTerraform(this._upChecksIntervalUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_verification_for_down: {
        value: cdktf.booleanToHclTerraform(this._useVerificationForDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
