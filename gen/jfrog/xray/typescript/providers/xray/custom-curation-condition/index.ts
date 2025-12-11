// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomCurationConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of the IDs of the supported condition templates returned by the list condition templates API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition#condition_template_id CustomCurationCondition#condition_template_id}
  */
  readonly conditionTemplateId: string;
  /**
  * The name of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition#name CustomCurationCondition#name}
  */
  readonly name: string;
  /**
  * JSON array of parameter values. Each parameter should be an object with param_id and value fields. All required parameters must be explicitly provided. For EPSS parameter, value should be an object with either 'percentile' (0-100, max 2 decimal digits) or 'score' (0.0-1.0) property. For SpecificVersions condition template: all three parameters (package_type, package_name, package_versions) must be specified. Supported package_versions format: object with operators like {"equals": ["1.0.0", "1.1.0"], "gte": ["2.0.0", "3.0.0"], "lte": ["4.0.0"], "ranges": [{"gte": "1.0.0", "lte": "2.0.0"}], "any": true}. The 'equals' creates one constraint with multiple values, while 'gte', 'lte', 'gt', 'lt' create separate constraints for each array value. Only 'equals' and 'any' can appear once. Example: '[{"param_id":"package_type","value":"Maven"},{"param_id":"package_name","value":"log4j-core"},{"param_id":"package_versions","value":{"any":true}}]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition#param_values CustomCurationCondition#param_values}
  */
  readonly paramValues: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition xray_custom_curation_condition}
*/
export class CustomCurationCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_custom_curation_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomCurationCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomCurationCondition to import
  * @param importFromId The id of the existing CustomCurationCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomCurationCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_custom_curation_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/custom_curation_condition xray_custom_curation_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomCurationConditionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomCurationConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_custom_curation_condition',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionTemplateId = config.conditionTemplateId;
    this._name = config.name;
    this._paramValues = config.paramValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_template_id - computed: false, optional: false, required: true
  private _conditionTemplateId?: string; 
  public get conditionTemplateId() {
    return this.getStringAttribute('condition_template_id');
  }
  public set conditionTemplateId(value: string) {
    this._conditionTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTemplateIdInput() {
    return this._conditionTemplateId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // param_values - computed: false, optional: false, required: true
  private _paramValues?: string; 
  public get paramValues() {
    return this.getStringAttribute('param_values');
  }
  public set paramValues(value: string) {
    this._paramValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValuesInput() {
    return this._paramValues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_template_id: cdktf.stringToTerraform(this._conditionTemplateId),
      name: cdktf.stringToTerraform(this._name),
      param_values: cdktf.stringToTerraform(this._paramValues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_template_id: {
        value: cdktf.stringToHclTerraform(this._conditionTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_values: {
        value: cdktf.stringToHclTerraform(this._paramValues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
