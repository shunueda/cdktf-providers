// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncapRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule action. See the detailed descriptions in the API documentation. Possible values: `RULE_ACTION_REDIRECT`, `RULE_ACTION_SIMPLIFIED_REDIRECT`, `RULE_ACTION_REWRITE_URL`, `RULE_ACTION_REWRITE_HEADER`, `RULE_ACTION_REWRITE_COOKIE`, `RULE_ACTION_DELETE_HEADER`, `RULE_ACTION_DELETE_COOKIE`, `RULE_ACTION_RESPONSE_REWRITE_HEADER`, `RULE_ACTION_RESPONSE_DELETE_HEADER`, `RULE_ACTION_RESPONSE_REWRITE_RESPONSE_CODE`, `RULE_ACTION_FORWARD_TO_DC`, `RULE_ACTION_ALERT`, `RULE_ACTION_BLOCK`, `RULE_ACTION_BLOCK_USER`, `RULE_ACTION_BLOCK_IP`, `RULE_ACTION_RETRY`, `RULE_ACTION_INTRUSIVE_HTML`, `RULE_ACTION_CAPTCHA`, `RULE_ACTION_RATE`, `RULE_ACTION_CUSTOM_ERROR_RESPONSE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#action IncapRule#action}
  */
  readonly action: string;
  /**
  * Add cookie or header if it doesn't exist (Rewrite cookie rule only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#add_missing IncapRule#add_missing}
  */
  readonly addMissing?: boolean | cdktf.IResolvable;
  /**
  * Value of the fixed block duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#block_duration IncapRule#block_duration}
  */
  readonly blockDuration?: number;
  /**
  * The upper limit for the randomized block duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#block_duration_max IncapRule#block_duration_max}
  */
  readonly blockDurationMax?: number;
  /**
  * The lower limit for the randomized block duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#block_duration_min IncapRule#block_duration_min}
  */
  readonly blockDurationMin?: number;
  /**
  * Block duration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#block_duration_type IncapRule#block_duration_type}
  */
  readonly blockDurationType?: string;
  /**
  * Data center to forward request to. Applies only for `RULE_ACTION_FORWARD_TO_DC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#dc_id IncapRule#dc_id}
  */
  readonly dcId?: number;
  /**
  * Enable or disable rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#enabled IncapRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The response returned when the request matches the filter and is blocked. Applies only for `RULE_ACTION_CUSTOM_ERROR_RESPONSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#error_response_data IncapRule#error_response_data}
  */
  readonly errorResponseData?: string;
  /**
  * The format of the given error response in the error_response_data field. Applies only for `RULE_ACTION_CUSTOM_ERROR_RESPONSE`. Possible values: `json`, `xml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#error_response_format IncapRule#error_response_format}
  */
  readonly errorResponseFormat?: string;
  /**
  * The error that triggers the rule. `error.type.all` triggers the rule regardless of the error type. Applies only for `RULE_ACTION_CUSTOM_ERROR_RESPONSE`. Possible values: `error.type.all`, `error.type.connection_timeout`, `error.type.access_denied`, `error.type.parse_req_error`, `error.type.parse_resp_error`, `error.type.connection_failed`, `error.type.deny_and_retry`, `error.type.ssl_failed`, `error.type.deny_and_captcha`, `error.type.2fa_required`, `error.type.no_ssl_config`, `error.type.no_ipv6_config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#error_type IncapRule#error_type}
  */
  readonly errorType?: string;
  /**
  * The filter defines the conditions that trigger the rule action. For action `RULE_ACTION_SIMPLIFIED_REDIRECT` filter is not relevant. For other actions, if left empty, the rule is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#filter IncapRule#filter}
  */
  readonly filter?: string;
  /**
  * Pattern to rewrite. For `RULE_ACTION_REWRITE_URL` - Url to rewrite. For `RULE_ACTION_REWRITE_HEADER` and `RULE_ACTION_RESPONSE_REWRITE_HEADER` - Header value to rewrite. For `RULE_ACTION_REWRITE_COOKIE` - Cookie value to rewrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#from IncapRule#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#id IncapRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Delete multiple header occurrences. Applies only to rules using `RULE_ACTION_DELETE_HEADER` and `RULE_ACTION_RESPONSE_DELETE_HEADER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#multiple_deletions IncapRule#multiple_deletions}
  */
  readonly multipleDeletions?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#name IncapRule#name}
  */
  readonly name: string;
  /**
  * The action for the override rule. Possible values: Alert Only, Block Request, Block User, Block IP, Ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#override_waf_action IncapRule#override_waf_action}
  */
  readonly overrideWafAction?: string;
  /**
  * The setting to override. Possible values: SQL Injection, Remote File Inclusion, Cross Site Scripting, Illegal Resource Access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#override_waf_rule IncapRule#override_waf_rule}
  */
  readonly overrideWafRule?: string;
  /**
  * Context for port forwarding. "Use Port Value" or "Use Header Name". Applies only for `RULE_ACTION_FORWARD_TO_PORT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#port_forwarding_context IncapRule#port_forwarding_context}
  */
  readonly portForwardingContext?: string;
  /**
  * Port number or header name for port forwarding. Applies only for `RULE_ACTION_FORWARD_TO_PORT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#port_forwarding_value IncapRule#port_forwarding_value}
  */
  readonly portForwardingValue?: string;
  /**
  * The context of the rate counter. Possible values `IP` or `Session`. Applies only to rules using `RULE_ACTION_RATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#rate_context IncapRule#rate_context}
  */
  readonly rateContext?: string;
  /**
  * The interval in seconds of the rate counter. Possible values is a multiple of `10`; minimum `10` and maximum `300`. Applies only to rules using `RULE_ACTION_RATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#rate_interval IncapRule#rate_interval}
  */
  readonly rateInterval?: number;
  /**
  * For `RULE_ACTION_REDIRECT` or `RULE_ACTION_SIMPLIFIED_REDIRECT` rule's response code, valid values are `302`, `301`, `303`, `307`, `308`. For `RULE_ACTION_RESPONSE_REWRITE_RESPONSE_CODE` rule's response code, valid values are all 3-digits numbers. For `RULE_ACTION_CUSTOM_ERROR_RESPONSE`, valid values are `400`, `401`, `402`, `403`, `404`, `405`, `406`, `407`, `408`, `409`, `410`, `411`, `412`, `413`, `414`, `415`, `416`, `417`, `419`, `420`, `422`, `423`, `424`, `500`, `501`, `502`, `503`, `504`, `505`, `507`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#response_code IncapRule#response_code}
  */
  readonly responseCode?: number;
  /**
  * Rewrite cookie or header if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#rewrite_existing IncapRule#rewrite_existing}
  */
  readonly rewriteExisting?: boolean | cdktf.IResolvable;
  /**
  * Name of cookie or header to rewrite. Applies only for `RULE_ACTION_REWRITE_COOKIE`, `RULE_ACTION_REWRITE_HEADER` and `RULE_ACTION_RESPONSE_REWRITE_HEADER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#rewrite_name IncapRule#rewrite_name}
  */
  readonly rewriteName?: string;
  /**
  * Send an email notification whenever this rule is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#send_notifications IncapRule#send_notifications}
  */
  readonly sendNotifications?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#site_id IncapRule#site_id}
  */
  readonly siteId: string;
  /**
  * Pattern to change to. `RULE_ACTION_REWRITE_URL` - Url to change to. `RULE_ACTION_REWRITE_HEADER` and `RULE_ACTION_RESPONSE_REWRITE_HEADER` - Header value to change to. `RULE_ACTION_REWRITE_COOKIE` - Cookie value to change to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#to IncapRule#to}
  */
  readonly to?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule incapsula_incap_rule}
*/
export class IncapRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_incap_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncapRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncapRule to import
  * @param importFromId The id of the existing IncapRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncapRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_incap_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/incap_rule incapsula_incap_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncapRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IncapRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_incap_rule',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._addMissing = config.addMissing;
    this._blockDuration = config.blockDuration;
    this._blockDurationMax = config.blockDurationMax;
    this._blockDurationMin = config.blockDurationMin;
    this._blockDurationType = config.blockDurationType;
    this._dcId = config.dcId;
    this._enabled = config.enabled;
    this._errorResponseData = config.errorResponseData;
    this._errorResponseFormat = config.errorResponseFormat;
    this._errorType = config.errorType;
    this._filter = config.filter;
    this._from = config.from;
    this._id = config.id;
    this._multipleDeletions = config.multipleDeletions;
    this._name = config.name;
    this._overrideWafAction = config.overrideWafAction;
    this._overrideWafRule = config.overrideWafRule;
    this._portForwardingContext = config.portForwardingContext;
    this._portForwardingValue = config.portForwardingValue;
    this._rateContext = config.rateContext;
    this._rateInterval = config.rateInterval;
    this._responseCode = config.responseCode;
    this._rewriteExisting = config.rewriteExisting;
    this._rewriteName = config.rewriteName;
    this._sendNotifications = config.sendNotifications;
    this._siteId = config.siteId;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // add_missing - computed: false, optional: true, required: false
  private _addMissing?: boolean | cdktf.IResolvable; 
  public get addMissing() {
    return this.getBooleanAttribute('add_missing');
  }
  public set addMissing(value: boolean | cdktf.IResolvable) {
    this._addMissing = value;
  }
  public resetAddMissing() {
    this._addMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addMissingInput() {
    return this._addMissing;
  }

  // block_duration - computed: true, optional: true, required: false
  private _blockDuration?: number; 
  public get blockDuration() {
    return this.getNumberAttribute('block_duration');
  }
  public set blockDuration(value: number) {
    this._blockDuration = value;
  }
  public resetBlockDuration() {
    this._blockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationInput() {
    return this._blockDuration;
  }

  // block_duration_max - computed: true, optional: true, required: false
  private _blockDurationMax?: number; 
  public get blockDurationMax() {
    return this.getNumberAttribute('block_duration_max');
  }
  public set blockDurationMax(value: number) {
    this._blockDurationMax = value;
  }
  public resetBlockDurationMax() {
    this._blockDurationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMaxInput() {
    return this._blockDurationMax;
  }

  // block_duration_min - computed: true, optional: true, required: false
  private _blockDurationMin?: number; 
  public get blockDurationMin() {
    return this.getNumberAttribute('block_duration_min');
  }
  public set blockDurationMin(value: number) {
    this._blockDurationMin = value;
  }
  public resetBlockDurationMin() {
    this._blockDurationMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinInput() {
    return this._blockDurationMin;
  }

  // block_duration_type - computed: true, optional: true, required: false
  private _blockDurationType?: string; 
  public get blockDurationType() {
    return this.getStringAttribute('block_duration_type');
  }
  public set blockDurationType(value: string) {
    this._blockDurationType = value;
  }
  public resetBlockDurationType() {
    this._blockDurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationTypeInput() {
    return this._blockDurationType;
  }

  // dc_id - computed: false, optional: true, required: false
  private _dcId?: number; 
  public get dcId() {
    return this.getNumberAttribute('dc_id');
  }
  public set dcId(value: number) {
    this._dcId = value;
  }
  public resetDcId() {
    this._dcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // error_response_data - computed: false, optional: true, required: false
  private _errorResponseData?: string; 
  public get errorResponseData() {
    return this.getStringAttribute('error_response_data');
  }
  public set errorResponseData(value: string) {
    this._errorResponseData = value;
  }
  public resetErrorResponseData() {
    this._errorResponseData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseDataInput() {
    return this._errorResponseData;
  }

  // error_response_format - computed: false, optional: true, required: false
  private _errorResponseFormat?: string; 
  public get errorResponseFormat() {
    return this.getStringAttribute('error_response_format');
  }
  public set errorResponseFormat(value: string) {
    this._errorResponseFormat = value;
  }
  public resetErrorResponseFormat() {
    this._errorResponseFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseFormatInput() {
    return this._errorResponseFormat;
  }

  // error_type - computed: false, optional: true, required: false
  private _errorType?: string; 
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
  public set errorType(value: string) {
    this._errorType = value;
  }
  public resetErrorType() {
    this._errorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypeInput() {
    return this._errorType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // multiple_deletions - computed: false, optional: true, required: false
  private _multipleDeletions?: boolean | cdktf.IResolvable; 
  public get multipleDeletions() {
    return this.getBooleanAttribute('multiple_deletions');
  }
  public set multipleDeletions(value: boolean | cdktf.IResolvable) {
    this._multipleDeletions = value;
  }
  public resetMultipleDeletions() {
    this._multipleDeletions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleDeletionsInput() {
    return this._multipleDeletions;
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

  // override_waf_action - computed: false, optional: true, required: false
  private _overrideWafAction?: string; 
  public get overrideWafAction() {
    return this.getStringAttribute('override_waf_action');
  }
  public set overrideWafAction(value: string) {
    this._overrideWafAction = value;
  }
  public resetOverrideWafAction() {
    this._overrideWafAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWafActionInput() {
    return this._overrideWafAction;
  }

  // override_waf_rule - computed: false, optional: true, required: false
  private _overrideWafRule?: string; 
  public get overrideWafRule() {
    return this.getStringAttribute('override_waf_rule');
  }
  public set overrideWafRule(value: string) {
    this._overrideWafRule = value;
  }
  public resetOverrideWafRule() {
    this._overrideWafRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWafRuleInput() {
    return this._overrideWafRule;
  }

  // port_forwarding_context - computed: false, optional: true, required: false
  private _portForwardingContext?: string; 
  public get portForwardingContext() {
    return this.getStringAttribute('port_forwarding_context');
  }
  public set portForwardingContext(value: string) {
    this._portForwardingContext = value;
  }
  public resetPortForwardingContext() {
    this._portForwardingContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingContextInput() {
    return this._portForwardingContext;
  }

  // port_forwarding_value - computed: false, optional: true, required: false
  private _portForwardingValue?: string; 
  public get portForwardingValue() {
    return this.getStringAttribute('port_forwarding_value');
  }
  public set portForwardingValue(value: string) {
    this._portForwardingValue = value;
  }
  public resetPortForwardingValue() {
    this._portForwardingValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingValueInput() {
    return this._portForwardingValue;
  }

  // rate_context - computed: false, optional: true, required: false
  private _rateContext?: string; 
  public get rateContext() {
    return this.getStringAttribute('rate_context');
  }
  public set rateContext(value: string) {
    this._rateContext = value;
  }
  public resetRateContext() {
    this._rateContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateContextInput() {
    return this._rateContext;
  }

  // rate_interval - computed: false, optional: true, required: false
  private _rateInterval?: number; 
  public get rateInterval() {
    return this.getNumberAttribute('rate_interval');
  }
  public set rateInterval(value: number) {
    this._rateInterval = value;
  }
  public resetRateInterval() {
    this._rateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIntervalInput() {
    return this._rateInterval;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // rewrite_existing - computed: false, optional: true, required: false
  private _rewriteExisting?: boolean | cdktf.IResolvable; 
  public get rewriteExisting() {
    return this.getBooleanAttribute('rewrite_existing');
  }
  public set rewriteExisting(value: boolean | cdktf.IResolvable) {
    this._rewriteExisting = value;
  }
  public resetRewriteExisting() {
    this._rewriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteExistingInput() {
    return this._rewriteExisting;
  }

  // rewrite_name - computed: false, optional: true, required: false
  private _rewriteName?: string; 
  public get rewriteName() {
    return this.getStringAttribute('rewrite_name');
  }
  public set rewriteName(value: string) {
    this._rewriteName = value;
  }
  public resetRewriteName() {
    this._rewriteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteNameInput() {
    return this._rewriteName;
  }

  // send_notifications - computed: true, optional: true, required: false
  private _sendNotifications?: string; 
  public get sendNotifications() {
    return this.getStringAttribute('send_notifications');
  }
  public set sendNotifications(value: string) {
    this._sendNotifications = value;
  }
  public resetSendNotifications() {
    this._sendNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationsInput() {
    return this._sendNotifications;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      add_missing: cdktf.booleanToTerraform(this._addMissing),
      block_duration: cdktf.numberToTerraform(this._blockDuration),
      block_duration_max: cdktf.numberToTerraform(this._blockDurationMax),
      block_duration_min: cdktf.numberToTerraform(this._blockDurationMin),
      block_duration_type: cdktf.stringToTerraform(this._blockDurationType),
      dc_id: cdktf.numberToTerraform(this._dcId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      error_response_data: cdktf.stringToTerraform(this._errorResponseData),
      error_response_format: cdktf.stringToTerraform(this._errorResponseFormat),
      error_type: cdktf.stringToTerraform(this._errorType),
      filter: cdktf.stringToTerraform(this._filter),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      multiple_deletions: cdktf.booleanToTerraform(this._multipleDeletions),
      name: cdktf.stringToTerraform(this._name),
      override_waf_action: cdktf.stringToTerraform(this._overrideWafAction),
      override_waf_rule: cdktf.stringToTerraform(this._overrideWafRule),
      port_forwarding_context: cdktf.stringToTerraform(this._portForwardingContext),
      port_forwarding_value: cdktf.stringToTerraform(this._portForwardingValue),
      rate_context: cdktf.stringToTerraform(this._rateContext),
      rate_interval: cdktf.numberToTerraform(this._rateInterval),
      response_code: cdktf.numberToTerraform(this._responseCode),
      rewrite_existing: cdktf.booleanToTerraform(this._rewriteExisting),
      rewrite_name: cdktf.stringToTerraform(this._rewriteName),
      send_notifications: cdktf.stringToTerraform(this._sendNotifications),
      site_id: cdktf.stringToTerraform(this._siteId),
      to: cdktf.stringToTerraform(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_missing: {
        value: cdktf.booleanToHclTerraform(this._addMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_duration: {
        value: cdktf.numberToHclTerraform(this._blockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_duration_max: {
        value: cdktf.numberToHclTerraform(this._blockDurationMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_duration_min: {
        value: cdktf.numberToHclTerraform(this._blockDurationMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_duration_type: {
        value: cdktf.stringToHclTerraform(this._blockDurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_id: {
        value: cdktf.numberToHclTerraform(this._dcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_response_data: {
        value: cdktf.stringToHclTerraform(this._errorResponseData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_response_format: {
        value: cdktf.stringToHclTerraform(this._errorResponseFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_type: {
        value: cdktf.stringToHclTerraform(this._errorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      multiple_deletions: {
        value: cdktf.booleanToHclTerraform(this._multipleDeletions),
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
      override_waf_action: {
        value: cdktf.stringToHclTerraform(this._overrideWafAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_waf_rule: {
        value: cdktf.stringToHclTerraform(this._overrideWafRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_forwarding_context: {
        value: cdktf.stringToHclTerraform(this._portForwardingContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_forwarding_value: {
        value: cdktf.stringToHclTerraform(this._portForwardingValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_context: {
        value: cdktf.stringToHclTerraform(this._rateContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_interval: {
        value: cdktf.numberToHclTerraform(this._rateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_code: {
        value: cdktf.numberToHclTerraform(this._responseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rewrite_existing: {
        value: cdktf.booleanToHclTerraform(this._rewriteExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite_name: {
        value: cdktf.stringToHclTerraform(this._rewriteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_notifications: {
        value: cdktf.stringToHclTerraform(this._sendNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
