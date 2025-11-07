// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptContentdeliverynetworkruleRulesMatchentriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#content_delivery_network_rule WanoptContentdeliverynetworkruleRulesMatchentries#content_delivery_network_rule}
  */
  readonly contentDeliveryNetworkRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#device_name WanoptContentdeliverynetworkruleRulesMatchentries#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#fosid WanoptContentdeliverynetworkruleRulesMatchentries#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#id WanoptContentdeliverynetworkruleRulesMatchentries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#pattern WanoptContentdeliverynetworkruleRulesMatchentries#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#rules WanoptContentdeliverynetworkruleRulesMatchentries#rules}
  */
  readonly rules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#target WanoptContentdeliverynetworkruleRulesMatchentries#target}
  */
  readonly target?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries fmgdevice_wanopt_contentdeliverynetworkrule_rules_matchentries}
*/
export class WanoptContentdeliverynetworkruleRulesMatchentries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wanopt_contentdeliverynetworkrule_rules_matchentries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptContentdeliverynetworkruleRulesMatchentries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptContentdeliverynetworkruleRulesMatchentries to import
  * @param importFromId The id of the existing WanoptContentdeliverynetworkruleRulesMatchentries that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptContentdeliverynetworkruleRulesMatchentries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wanopt_contentdeliverynetworkrule_rules_matchentries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_contentdeliverynetworkrule_rules_matchentries fmgdevice_wanopt_contentdeliverynetworkrule_rules_matchentries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptContentdeliverynetworkruleRulesMatchentriesConfig
  */
  public constructor(scope: Construct, id: string, config: WanoptContentdeliverynetworkruleRulesMatchentriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wanopt_contentdeliverynetworkrule_rules_matchentries',
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
    this._fosid = config.fosid;
    this._id = config.id;
    this._pattern = config.pattern;
    this._rules = config.rules;
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

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string[]; 
  public get pattern() {
    return cdktf.Fn.tolist(this.getListAttribute('pattern'));
  }
  public set pattern(value: string[]) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pattern),
      rules: cdktf.stringToTerraform(this._rules),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pattern),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
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
