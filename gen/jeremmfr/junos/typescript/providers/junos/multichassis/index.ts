// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultichassisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean entirely `multi-chassis` block when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis#clean_on_destroy Multichassis#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Consistency Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis#mc_lag_consistency_check Multichassis#mc_lag_consistency_check}
  */
  readonly mcLagConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Time after which local and remote config are compared (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis#mc_lag_consistency_check_comparison_delay_time Multichassis#mc_lag_consistency_check_comparison_delay_time}
  */
  readonly mcLagConsistencyCheckComparisonDelayTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis junos_multichassis}
*/
export class Multichassis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_multichassis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Multichassis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Multichassis to import
  * @param importFromId The id of the existing Multichassis that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Multichassis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_multichassis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis junos_multichassis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultichassisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MultichassisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_multichassis',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._mcLagConsistencyCheck = config.mcLagConsistencyCheck;
    this._mcLagConsistencyCheckComparisonDelayTime = config.mcLagConsistencyCheckComparisonDelayTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mc_lag_consistency_check - computed: true, optional: true, required: false
  private _mcLagConsistencyCheck?: boolean | cdktf.IResolvable; 
  public get mcLagConsistencyCheck() {
    return this.getBooleanAttribute('mc_lag_consistency_check');
  }
  public set mcLagConsistencyCheck(value: boolean | cdktf.IResolvable) {
    this._mcLagConsistencyCheck = value;
  }
  public resetMcLagConsistencyCheck() {
    this._mcLagConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcLagConsistencyCheckInput() {
    return this._mcLagConsistencyCheck;
  }

  // mc_lag_consistency_check_comparison_delay_time - computed: false, optional: true, required: false
  private _mcLagConsistencyCheckComparisonDelayTime?: number; 
  public get mcLagConsistencyCheckComparisonDelayTime() {
    return this.getNumberAttribute('mc_lag_consistency_check_comparison_delay_time');
  }
  public set mcLagConsistencyCheckComparisonDelayTime(value: number) {
    this._mcLagConsistencyCheckComparisonDelayTime = value;
  }
  public resetMcLagConsistencyCheckComparisonDelayTime() {
    this._mcLagConsistencyCheckComparisonDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcLagConsistencyCheckComparisonDelayTimeInput() {
    return this._mcLagConsistencyCheckComparisonDelayTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      mc_lag_consistency_check: cdktf.booleanToTerraform(this._mcLagConsistencyCheck),
      mc_lag_consistency_check_comparison_delay_time: cdktf.numberToTerraform(this._mcLagConsistencyCheckComparisonDelayTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mc_lag_consistency_check: {
        value: cdktf.booleanToHclTerraform(this._mcLagConsistencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mc_lag_consistency_check_comparison_delay_time: {
        value: cdktf.numberToHclTerraform(this._mcLagConsistencyCheckComparisonDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
