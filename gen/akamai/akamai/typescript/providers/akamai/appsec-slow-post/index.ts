// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecSlowPostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#config_id AppsecSlowPost#config_id}
  */
  readonly configId: number;
  /**
  * Maximum amount of time (in seconds) within which the first 8KB of the POST body must be received to avoid triggering the specified action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#duration_threshold_timeout AppsecSlowPost#duration_threshold_timeout}
  */
  readonly durationThresholdTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#id AppsecSlowPost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#security_policy_id AppsecSlowPost#security_policy_id}
  */
  readonly securityPolicyId: string;
  /**
  * Action to be taken when slow POST protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#slow_rate_action AppsecSlowPost#slow_rate_action}
  */
  readonly slowRateAction: string;
  /**
  * Amount of time (in seconds) that the server should allow a request before marking the request as being too slow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#slow_rate_threshold_period AppsecSlowPost#slow_rate_threshold_period}
  */
  readonly slowRateThresholdPeriod?: number;
  /**
  * Average rate (in bytes per second over the specified time period) allowed before the specified action is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#slow_rate_threshold_rate AppsecSlowPost#slow_rate_threshold_rate}
  */
  readonly slowRateThresholdRate?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post akamai_appsec_slow_post}
*/
export class AppsecSlowPost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_slow_post";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecSlowPost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecSlowPost to import
  * @param importFromId The id of the existing AppsecSlowPost that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecSlowPost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_slow_post", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_slow_post akamai_appsec_slow_post} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecSlowPostConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecSlowPostConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_slow_post',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._durationThresholdTimeout = config.durationThresholdTimeout;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
    this._slowRateAction = config.slowRateAction;
    this._slowRateThresholdPeriod = config.slowRateThresholdPeriod;
    this._slowRateThresholdRate = config.slowRateThresholdRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // duration_threshold_timeout - computed: false, optional: true, required: false
  private _durationThresholdTimeout?: number; 
  public get durationThresholdTimeout() {
    return this.getNumberAttribute('duration_threshold_timeout');
  }
  public set durationThresholdTimeout(value: number) {
    this._durationThresholdTimeout = value;
  }
  public resetDurationThresholdTimeout() {
    this._durationThresholdTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationThresholdTimeoutInput() {
    return this._durationThresholdTimeout;
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

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // slow_rate_action - computed: false, optional: false, required: true
  private _slowRateAction?: string; 
  public get slowRateAction() {
    return this.getStringAttribute('slow_rate_action');
  }
  public set slowRateAction(value: string) {
    this._slowRateAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRateActionInput() {
    return this._slowRateAction;
  }

  // slow_rate_threshold_period - computed: false, optional: true, required: false
  private _slowRateThresholdPeriod?: number; 
  public get slowRateThresholdPeriod() {
    return this.getNumberAttribute('slow_rate_threshold_period');
  }
  public set slowRateThresholdPeriod(value: number) {
    this._slowRateThresholdPeriod = value;
  }
  public resetSlowRateThresholdPeriod() {
    this._slowRateThresholdPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRateThresholdPeriodInput() {
    return this._slowRateThresholdPeriod;
  }

  // slow_rate_threshold_rate - computed: false, optional: true, required: false
  private _slowRateThresholdRate?: number; 
  public get slowRateThresholdRate() {
    return this.getNumberAttribute('slow_rate_threshold_rate');
  }
  public set slowRateThresholdRate(value: number) {
    this._slowRateThresholdRate = value;
  }
  public resetSlowRateThresholdRate() {
    this._slowRateThresholdRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRateThresholdRateInput() {
    return this._slowRateThresholdRate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      duration_threshold_timeout: cdktf.numberToTerraform(this._durationThresholdTimeout),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      slow_rate_action: cdktf.stringToTerraform(this._slowRateAction),
      slow_rate_threshold_period: cdktf.numberToTerraform(this._slowRateThresholdPeriod),
      slow_rate_threshold_rate: cdktf.numberToTerraform(this._slowRateThresholdRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration_threshold_timeout: {
        value: cdktf.numberToHclTerraform(this._durationThresholdTimeout),
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slow_rate_action: {
        value: cdktf.stringToHclTerraform(this._slowRateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slow_rate_threshold_period: {
        value: cdktf.numberToHclTerraform(this._slowRateThresholdPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slow_rate_threshold_rate: {
        value: cdktf.numberToHclTerraform(this._slowRateThresholdRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
