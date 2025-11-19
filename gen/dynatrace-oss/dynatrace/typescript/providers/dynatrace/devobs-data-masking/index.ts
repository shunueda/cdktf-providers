// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevobsDataMaskingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#enabled DevobsDataMasking#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#id DevobsDataMasking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#insert_after DevobsDataMasking#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#replacement_pattern DevobsDataMasking#replacement_pattern}
  */
  readonly replacementPattern?: string;
  /**
  * Possible Values: `SHA256`, `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#replacement_type DevobsDataMasking#replacement_type}
  */
  readonly replacementType: string;
  /**
  * Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#rule_name DevobsDataMasking#rule_name}
  */
  readonly ruleName: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#rule_regex DevobsDataMasking#rule_regex}
  */
  readonly ruleRegex?: string;
  /**
  * Possible Values: `REGEX`, `VAR_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#rule_type DevobsDataMasking#rule_type}
  */
  readonly ruleType: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#rule_var_name DevobsDataMasking#rule_var_name}
  */
  readonly ruleVarName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking dynatrace_devobs_data_masking}
*/
export class DevobsDataMasking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_devobs_data_masking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevobsDataMasking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevobsDataMasking to import
  * @param importFromId The id of the existing DevobsDataMasking that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevobsDataMasking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_devobs_data_masking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/devobs_data_masking dynatrace_devobs_data_masking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevobsDataMaskingConfig
  */
  public constructor(scope: Construct, id: string, config: DevobsDataMaskingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_devobs_data_masking',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._replacementPattern = config.replacementPattern;
    this._replacementType = config.replacementType;
    this._ruleName = config.ruleName;
    this._ruleRegex = config.ruleRegex;
    this._ruleType = config.ruleType;
    this._ruleVarName = config.ruleVarName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // replacement_pattern - computed: false, optional: true, required: false
  private _replacementPattern?: string; 
  public get replacementPattern() {
    return this.getStringAttribute('replacement_pattern');
  }
  public set replacementPattern(value: string) {
    this._replacementPattern = value;
  }
  public resetReplacementPattern() {
    this._replacementPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementPatternInput() {
    return this._replacementPattern;
  }

  // replacement_type - computed: false, optional: false, required: true
  private _replacementType?: string; 
  public get replacementType() {
    return this.getStringAttribute('replacement_type');
  }
  public set replacementType(value: string) {
    this._replacementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementTypeInput() {
    return this._replacementType;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_regex - computed: false, optional: true, required: false
  private _ruleRegex?: string; 
  public get ruleRegex() {
    return this.getStringAttribute('rule_regex');
  }
  public set ruleRegex(value: string) {
    this._ruleRegex = value;
  }
  public resetRuleRegex() {
    this._ruleRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleRegexInput() {
    return this._ruleRegex;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // rule_var_name - computed: false, optional: true, required: false
  private _ruleVarName?: string; 
  public get ruleVarName() {
    return this.getStringAttribute('rule_var_name');
  }
  public set ruleVarName(value: string) {
    this._ruleVarName = value;
  }
  public resetRuleVarName() {
    this._ruleVarName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVarNameInput() {
    return this._ruleVarName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      replacement_pattern: cdktf.stringToTerraform(this._replacementPattern),
      replacement_type: cdktf.stringToTerraform(this._replacementType),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_regex: cdktf.stringToTerraform(this._ruleRegex),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      rule_var_name: cdktf.stringToTerraform(this._ruleVarName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_pattern: {
        value: cdktf.stringToHclTerraform(this._replacementPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_type: {
        value: cdktf.stringToHclTerraform(this._replacementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_regex: {
        value: cdktf.stringToHclTerraform(this._ruleRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_var_name: {
        value: cdktf.stringToHclTerraform(this._ruleVarName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
