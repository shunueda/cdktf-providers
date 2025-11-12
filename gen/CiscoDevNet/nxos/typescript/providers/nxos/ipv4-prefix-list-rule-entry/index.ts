// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4PrefixListRuleEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 Prefix List Rule Entry action.
  *   - Choices: `deny`, `permit`
  *   - Default value: `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#action Ipv4PrefixListRuleEntry#action}
  */
  readonly action?: string;
  /**
  * IPv4 Prefix List Rule Entry criteria.
  *   - Choices: `exact`, `inexact`
  *   - Default value: `exact`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#criteria Ipv4PrefixListRuleEntry#criteria}
  */
  readonly criteria?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#device Ipv4PrefixListRuleEntry#device}
  */
  readonly device?: string;
  /**
  * IPv4 Prefix List Rule Entry start range.
  *   - Range: `0`-`128`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#from_range Ipv4PrefixListRuleEntry#from_range}
  */
  readonly fromRange?: number;
  /**
  * IPv4 Prefix List Rule Entry order.
  *   - Range: `0`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#order Ipv4PrefixListRuleEntry#order}
  */
  readonly order: number;
  /**
  * IPv4 Prefix List Rule Entry prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#prefix Ipv4PrefixListRuleEntry#prefix}
  */
  readonly prefix?: string;
  /**
  * IPv4 Prefix List Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#rule_name Ipv4PrefixListRuleEntry#rule_name}
  */
  readonly ruleName: string;
  /**
  * IPv4 Prefix List Rule Entry end range.
  *   - Range: `0`-`128`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#to_range Ipv4PrefixListRuleEntry#to_range}
  */
  readonly toRange?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry nxos_ipv4_prefix_list_rule_entry}
*/
export class Ipv4PrefixListRuleEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ipv4_prefix_list_rule_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4PrefixListRuleEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4PrefixListRuleEntry to import
  * @param importFromId The id of the existing Ipv4PrefixListRuleEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4PrefixListRuleEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ipv4_prefix_list_rule_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ipv4_prefix_list_rule_entry nxos_ipv4_prefix_list_rule_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4PrefixListRuleEntryConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4PrefixListRuleEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ipv4_prefix_list_rule_entry',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._criteria = config.criteria;
    this._device = config.device;
    this._fromRange = config.fromRange;
    this._order = config.order;
    this._prefix = config.prefix;
    this._ruleName = config.ruleName;
    this._toRange = config.toRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // from_range - computed: true, optional: true, required: false
  private _fromRange?: number; 
  public get fromRange() {
    return this.getNumberAttribute('from_range');
  }
  public set fromRange(value: number) {
    this._fromRange = value;
  }
  public resetFromRange() {
    this._fromRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRangeInput() {
    return this._fromRange;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

  // to_range - computed: true, optional: true, required: false
  private _toRange?: number; 
  public get toRange() {
    return this.getNumberAttribute('to_range');
  }
  public set toRange(value: number) {
    this._toRange = value;
  }
  public resetToRange() {
    this._toRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRangeInput() {
    return this._toRange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      criteria: cdktf.stringToTerraform(this._criteria),
      device: cdktf.stringToTerraform(this._device),
      from_range: cdktf.numberToTerraform(this._fromRange),
      order: cdktf.numberToTerraform(this._order),
      prefix: cdktf.stringToTerraform(this._prefix),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      to_range: cdktf.numberToTerraform(this._toRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria: {
        value: cdktf.stringToHclTerraform(this._criteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_range: {
        value: cdktf.numberToHclTerraform(this._fromRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
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
      to_range: {
        value: cdktf.numberToHclTerraform(this._toRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
