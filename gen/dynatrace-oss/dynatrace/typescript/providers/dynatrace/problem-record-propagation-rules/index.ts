// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProblemRecordPropagationRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules#enabled ProblemRecordPropagationRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules#id ProblemRecordPropagationRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Attribute key from the event that will be propagated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules#source_attribute_key ProblemRecordPropagationRules#source_attribute_key}
  */
  readonly sourceAttributeKey: string;
  /**
  * Attribute key under which the propagated event data will be stored on the problem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules#target_attribute_key ProblemRecordPropagationRules#target_attribute_key}
  */
  readonly targetAttributeKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules dynatrace_problem_record_propagation_rules}
*/
export class ProblemRecordPropagationRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_problem_record_propagation_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProblemRecordPropagationRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProblemRecordPropagationRules to import
  * @param importFromId The id of the existing ProblemRecordPropagationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProblemRecordPropagationRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_problem_record_propagation_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/problem_record_propagation_rules dynatrace_problem_record_propagation_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProblemRecordPropagationRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ProblemRecordPropagationRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_problem_record_propagation_rules',
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
    this._sourceAttributeKey = config.sourceAttributeKey;
    this._targetAttributeKey = config.targetAttributeKey;
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

  // source_attribute_key - computed: false, optional: false, required: true
  private _sourceAttributeKey?: string; 
  public get sourceAttributeKey() {
    return this.getStringAttribute('source_attribute_key');
  }
  public set sourceAttributeKey(value: string) {
    this._sourceAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAttributeKeyInput() {
    return this._sourceAttributeKey;
  }

  // target_attribute_key - computed: false, optional: false, required: true
  private _targetAttributeKey?: string; 
  public get targetAttributeKey() {
    return this.getStringAttribute('target_attribute_key');
  }
  public set targetAttributeKey(value: string) {
    this._targetAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributeKeyInput() {
    return this._targetAttributeKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      source_attribute_key: cdktf.stringToTerraform(this._sourceAttributeKey),
      target_attribute_key: cdktf.stringToTerraform(this._targetAttributeKey),
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
      source_attribute_key: {
        value: cdktf.stringToHclTerraform(this._sourceAttributeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_attribute_key: {
        value: cdktf.stringToHclTerraform(this._targetAttributeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
