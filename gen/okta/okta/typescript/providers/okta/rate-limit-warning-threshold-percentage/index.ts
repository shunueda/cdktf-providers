// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/rate_limit_warning_threshold_percentage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitWarningThresholdPercentageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The threshold value (percentage) of a rate limit that, when exceeded, triggers a warning notification. By default, this value is 90 for Workforce orgs and 60 for CIAM orgs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/rate_limit_warning_threshold_percentage#warning_threshold RateLimitWarningThresholdPercentage#warning_threshold}
  */
  readonly warningThreshold: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/rate_limit_warning_threshold_percentage okta_rate_limit_warning_threshold_percentage}
*/
export class RateLimitWarningThresholdPercentage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limit_warning_threshold_percentage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimitWarningThresholdPercentage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimitWarningThresholdPercentage to import
  * @param importFromId The id of the existing RateLimitWarningThresholdPercentage that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/rate_limit_warning_threshold_percentage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimitWarningThresholdPercentage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limit_warning_threshold_percentage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/rate_limit_warning_threshold_percentage okta_rate_limit_warning_threshold_percentage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitWarningThresholdPercentageConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitWarningThresholdPercentageConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limit_warning_threshold_percentage',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._warningThreshold = config.warningThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // warning_threshold - computed: false, optional: false, required: true
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      warning_threshold: cdktf.numberToTerraform(this._warningThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      warning_threshold: {
        value: cdktf.numberToHclTerraform(this._warningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
