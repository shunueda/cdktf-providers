// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomatedArchivalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the automated archival is enabled for this organization or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#enabled AutomatedArchivalSettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Grace period is an org level setting that applies to the newly created metrics. This allows customers to protect newly added metrics that users haven’t had the time to use in charts and detectors from being automatically archived The value here uses ISO 8061 duration format. Examples - 'P0D', 'P15D', 'P30D', 'P45D', 'P60D'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#grace_period AutomatedArchivalSettings#grace_period}
  */
  readonly gracePeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#id AutomatedArchivalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This tracks if a metric was unused in the past N number of days (N one of 30, 45, or 60). We’ll archive a metric if it wasn’t used in the lookback period. The value here uses ISO 8061 duration format. Examples - 'P30D', 'P45D', 'P60D'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#lookback_period AutomatedArchivalSettings#lookback_period}
  */
  readonly lookbackPeriod: string;
  /**
  * Org limit for the number of rulesets that can be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#ruleset_limit AutomatedArchivalSettings#ruleset_limit}
  */
  readonly rulesetLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings signalfx_automated_archival_settings}
*/
export class AutomatedArchivalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_automated_archival_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomatedArchivalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomatedArchivalSettings to import
  * @param importFromId The id of the existing AutomatedArchivalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomatedArchivalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_automated_archival_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/automated_archival_settings signalfx_automated_archival_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomatedArchivalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AutomatedArchivalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_automated_archival_settings',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._gracePeriod = config.gracePeriod;
    this._id = config.id;
    this._lookbackPeriod = config.lookbackPeriod;
    this._rulesetLimit = config.rulesetLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // grace_period - computed: false, optional: false, required: true
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // lookback_period - computed: false, optional: false, required: true
  private _lookbackPeriod?: string; 
  public get lookbackPeriod() {
    return this.getStringAttribute('lookback_period');
  }
  public set lookbackPeriod(value: string) {
    this._lookbackPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackPeriodInput() {
    return this._lookbackPeriod;
  }

  // ruleset_limit - computed: false, optional: true, required: false
  private _rulesetLimit?: number; 
  public get rulesetLimit() {
    return this.getNumberAttribute('ruleset_limit');
  }
  public set rulesetLimit(value: number) {
    this._rulesetLimit = value;
  }
  public resetRulesetLimit() {
    this._rulesetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetLimitInput() {
    return this._rulesetLimit;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      grace_period: cdktf.stringToTerraform(this._gracePeriod),
      id: cdktf.stringToTerraform(this._id),
      lookback_period: cdktf.stringToTerraform(this._lookbackPeriod),
      ruleset_limit: cdktf.numberToTerraform(this._rulesetLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace_period: {
        value: cdktf.stringToHclTerraform(this._gracePeriod),
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
      lookback_period: {
        value: cdktf.stringToHclTerraform(this._lookbackPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruleset_limit: {
        value: cdktf.numberToHclTerraform(this._rulesetLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
