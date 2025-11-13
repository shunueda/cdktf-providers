// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaRiskScoreValuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values#exclude_unknown DataZpaRiskScoreValues#exclude_unknown}
  */
  readonly excludeUnknown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values#id DataZpaRiskScoreValues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values zpa_risk_score_values}
*/
export class DataZpaRiskScoreValues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_risk_score_values";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaRiskScoreValues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaRiskScoreValues to import
  * @param importFromId The id of the existing DataZpaRiskScoreValues that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaRiskScoreValues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_risk_score_values", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/risk_score_values zpa_risk_score_values} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaRiskScoreValuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaRiskScoreValuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_risk_score_values',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeUnknown = config.excludeUnknown;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_unknown - computed: false, optional: true, required: false
  private _excludeUnknown?: boolean | cdktf.IResolvable; 
  public get excludeUnknown() {
    return this.getBooleanAttribute('exclude_unknown');
  }
  public set excludeUnknown(value: boolean | cdktf.IResolvable) {
    this._excludeUnknown = value;
  }
  public resetExcludeUnknown() {
    this._excludeUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUnknownInput() {
    return this._excludeUnknown;
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_unknown: cdktf.booleanToTerraform(this._excludeUnknown),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_unknown: {
        value: cdktf.booleanToHclTerraform(this._excludeUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
