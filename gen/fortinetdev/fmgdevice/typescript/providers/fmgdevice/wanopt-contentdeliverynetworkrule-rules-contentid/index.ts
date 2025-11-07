// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptContentdeliverynetworkruleRulesContentidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#content_delivery_network_rule WanoptContentdeliverynetworkruleRulesContentid#content_delivery_network_rule}
  */
  readonly contentDeliveryNetworkRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#device_name WanoptContentdeliverynetworkruleRulesContentid#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#end_direction WanoptContentdeliverynetworkruleRulesContentid#end_direction}
  */
  readonly endDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#end_skip WanoptContentdeliverynetworkruleRulesContentid#end_skip}
  */
  readonly endSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#end_str WanoptContentdeliverynetworkruleRulesContentid#end_str}
  */
  readonly endStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#id WanoptContentdeliverynetworkruleRulesContentid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#range_str WanoptContentdeliverynetworkruleRulesContentid#range_str}
  */
  readonly rangeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#rules WanoptContentdeliverynetworkruleRulesContentid#rules}
  */
  readonly rules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#start_direction WanoptContentdeliverynetworkruleRulesContentid#start_direction}
  */
  readonly startDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#start_skip WanoptContentdeliverynetworkruleRulesContentid#start_skip}
  */
  readonly startSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#start_str WanoptContentdeliverynetworkruleRulesContentid#start_str}
  */
  readonly startStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#target WanoptContentdeliverynetworkruleRulesContentid#target}
  */
  readonly target?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid fmgdevice_wanopt_contentdeliverynetworkrule_rules_contentid}
*/
export class WanoptContentdeliverynetworkruleRulesContentid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wanopt_contentdeliverynetworkrule_rules_contentid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptContentdeliverynetworkruleRulesContentid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptContentdeliverynetworkruleRulesContentid to import
  * @param importFromId The id of the existing WanoptContentdeliverynetworkruleRulesContentid that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptContentdeliverynetworkruleRulesContentid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wanopt_contentdeliverynetworkrule_rules_contentid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_contentid fmgdevice_wanopt_contentdeliverynetworkrule_rules_contentid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptContentdeliverynetworkruleRulesContentidConfig
  */
  public constructor(scope: Construct, id: string, config: WanoptContentdeliverynetworkruleRulesContentidConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wanopt_contentdeliverynetworkrule_rules_contentid',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentDeliveryNetworkRule = config.contentDeliveryNetworkRule;
    this._deviceName = config.deviceName;
    this._endDirection = config.endDirection;
    this._endSkip = config.endSkip;
    this._endStr = config.endStr;
    this._id = config.id;
    this._rangeStr = config.rangeStr;
    this._rules = config.rules;
    this._startDirection = config.startDirection;
    this._startSkip = config.startSkip;
    this._startStr = config.startStr;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_delivery_network_rule - computed: false, optional: false, required: true
  private _contentDeliveryNetworkRule?: string; 
  public get contentDeliveryNetworkRule() {
    return this.getStringAttribute('content_delivery_network_rule');
  }
  public set contentDeliveryNetworkRule(value: string) {
    this._contentDeliveryNetworkRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDeliveryNetworkRuleInput() {
    return this._contentDeliveryNetworkRule;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // end_direction - computed: true, optional: true, required: false
  private _endDirection?: string; 
  public get endDirection() {
    return this.getStringAttribute('end_direction');
  }
  public set endDirection(value: string) {
    this._endDirection = value;
  }
  public resetEndDirection() {
    this._endDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDirectionInput() {
    return this._endDirection;
  }

  // end_skip - computed: false, optional: true, required: false
  private _endSkip?: number; 
  public get endSkip() {
    return this.getNumberAttribute('end_skip');
  }
  public set endSkip(value: number) {
    this._endSkip = value;
  }
  public resetEndSkip() {
    this._endSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSkipInput() {
    return this._endSkip;
  }

  // end_str - computed: false, optional: true, required: false
  private _endStr?: string; 
  public get endStr() {
    return this.getStringAttribute('end_str');
  }
  public set endStr(value: string) {
    this._endStr = value;
  }
  public resetEndStr() {
    this._endStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endStrInput() {
    return this._endStr;
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

  // range_str - computed: false, optional: true, required: false
  private _rangeStr?: string; 
  public get rangeStr() {
    return this.getStringAttribute('range_str');
  }
  public set rangeStr(value: string) {
    this._rangeStr = value;
  }
  public resetRangeStr() {
    this._rangeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStrInput() {
    return this._rangeStr;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // start_direction - computed: true, optional: true, required: false
  private _startDirection?: string; 
  public get startDirection() {
    return this.getStringAttribute('start_direction');
  }
  public set startDirection(value: string) {
    this._startDirection = value;
  }
  public resetStartDirection() {
    this._startDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDirectionInput() {
    return this._startDirection;
  }

  // start_skip - computed: false, optional: true, required: false
  private _startSkip?: number; 
  public get startSkip() {
    return this.getNumberAttribute('start_skip');
  }
  public set startSkip(value: number) {
    this._startSkip = value;
  }
  public resetStartSkip() {
    this._startSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSkipInput() {
    return this._startSkip;
  }

  // start_str - computed: false, optional: true, required: false
  private _startStr?: string; 
  public get startStr() {
    return this.getStringAttribute('start_str');
  }
  public set startStr(value: string) {
    this._startStr = value;
  }
  public resetStartStr() {
    this._startStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStrInput() {
    return this._startStr;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_delivery_network_rule: cdktf.stringToTerraform(this._contentDeliveryNetworkRule),
      device_name: cdktf.stringToTerraform(this._deviceName),
      end_direction: cdktf.stringToTerraform(this._endDirection),
      end_skip: cdktf.numberToTerraform(this._endSkip),
      end_str: cdktf.stringToTerraform(this._endStr),
      id: cdktf.stringToTerraform(this._id),
      range_str: cdktf.stringToTerraform(this._rangeStr),
      rules: cdktf.stringToTerraform(this._rules),
      start_direction: cdktf.stringToTerraform(this._startDirection),
      start_skip: cdktf.numberToTerraform(this._startSkip),
      start_str: cdktf.stringToTerraform(this._startStr),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_delivery_network_rule: {
        value: cdktf.stringToHclTerraform(this._contentDeliveryNetworkRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_direction: {
        value: cdktf.stringToHclTerraform(this._endDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_skip: {
        value: cdktf.numberToHclTerraform(this._endSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_str: {
        value: cdktf.stringToHclTerraform(this._endStr),
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
      range_str: {
        value: cdktf.stringToHclTerraform(this._rangeStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_direction: {
        value: cdktf.stringToHclTerraform(this._startDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_skip: {
        value: cdktf.numberToHclTerraform(this._startSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_str: {
        value: cdktf.stringToHclTerraform(this._startStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
