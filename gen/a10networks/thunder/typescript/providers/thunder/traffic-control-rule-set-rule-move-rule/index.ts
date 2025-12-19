// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficControlRuleSetRuleMoveRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#id TrafficControlRuleSetRuleMoveRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'top': top; 'before': before; 'after': after; 'bottom': bottom;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#location TrafficControlRuleSetRuleMoveRuleA#location}
  */
  readonly location?: string;
  /**
  * Rule_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#rule_name TrafficControlRuleSetRuleMoveRuleA#rule_name}
  */
  readonly ruleName: string;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#rule_set_name TrafficControlRuleSetRuleMoveRuleA#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#target_rule TrafficControlRuleSetRuleMoveRuleA#target_rule}
  */
  readonly targetRule?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule thunder_traffic_control_rule_set_rule_move_rule}
*/
export class TrafficControlRuleSetRuleMoveRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_traffic_control_rule_set_rule_move_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficControlRuleSetRuleMoveRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficControlRuleSetRuleMoveRuleA to import
  * @param importFromId The id of the existing TrafficControlRuleSetRuleMoveRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficControlRuleSetRuleMoveRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_traffic_control_rule_set_rule_move_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/traffic_control_rule_set_rule_move_rule thunder_traffic_control_rule_set_rule_move_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficControlRuleSetRuleMoveRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficControlRuleSetRuleMoveRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_traffic_control_rule_set_rule_move_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._location = config.location;
    this._ruleName = config.ruleName;
    this._ruleSetName = config.ruleSetName;
    this._targetRule = config.targetRule;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      target_rule: cdktf.stringToTerraform(this._targetRule),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_rule: {
        value: cdktf.stringToHclTerraform(this._targetRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
