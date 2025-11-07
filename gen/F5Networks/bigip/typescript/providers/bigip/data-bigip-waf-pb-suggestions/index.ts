// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipWafPbSuggestionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#id DataBigipWafPbSuggestions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum learning for suggestions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#minimum_learning_score DataBigipWafPbSuggestions#minimum_learning_score}
  */
  readonly minimumLearningScore: number;
  /**
  * Partition where the WAF policy is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#partition DataBigipWafPbSuggestions#partition}
  */
  readonly partition: string;
  /**
  * System generated id of the WAF policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#policy_id DataBigipWafPbSuggestions#policy_id}
  */
  readonly policyId?: string;
  /**
  * Name of the WAF policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#policy_name DataBigipWafPbSuggestions#policy_name}
  */
  readonly policyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions bigip_waf_pb_suggestions}
*/
export class DataBigipWafPbSuggestions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_waf_pb_suggestions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipWafPbSuggestions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipWafPbSuggestions to import
  * @param importFromId The id of the existing DataBigipWafPbSuggestions that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipWafPbSuggestions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_waf_pb_suggestions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_pb_suggestions bigip_waf_pb_suggestions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipWafPbSuggestionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipWafPbSuggestionsConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_waf_pb_suggestions',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._minimumLearningScore = config.minimumLearningScore;
    this._partition = config.partition;
    this._policyId = config.policyId;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // minimum_learning_score - computed: false, optional: false, required: true
  private _minimumLearningScore?: number; 
  public get minimumLearningScore() {
    return this.getNumberAttribute('minimum_learning_score');
  }
  public set minimumLearningScore(value: number) {
    this._minimumLearningScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLearningScoreInput() {
    return this._minimumLearningScore;
  }

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      minimum_learning_score: cdktf.numberToTerraform(this._minimumLearningScore),
      partition: cdktf.stringToTerraform(this._partition),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_learning_score: {
        value: cdktf.numberToHclTerraform(this._minimumLearningScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
