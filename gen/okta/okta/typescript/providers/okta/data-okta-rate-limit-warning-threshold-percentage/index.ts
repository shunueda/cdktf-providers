// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/rate_limit_warning_threshold_percentage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRateLimitWarningThresholdPercentageConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/rate_limit_warning_threshold_percentage okta_rate_limit_warning_threshold_percentage}
*/
export class DataOktaRateLimitWarningThresholdPercentage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limit_warning_threshold_percentage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaRateLimitWarningThresholdPercentage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaRateLimitWarningThresholdPercentage to import
  * @param importFromId The id of the existing DataOktaRateLimitWarningThresholdPercentage that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/rate_limit_warning_threshold_percentage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaRateLimitWarningThresholdPercentage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limit_warning_threshold_percentage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/rate_limit_warning_threshold_percentage okta_rate_limit_warning_threshold_percentage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRateLimitWarningThresholdPercentageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaRateLimitWarningThresholdPercentageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limit_warning_threshold_percentage',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // warning_threshold - computed: true, optional: false, required: false
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
