// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapRuleEntryMatchRoutePrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list#device RouteMapRuleEntryMatchRoutePrefixList#device}
  */
  readonly device?: string;
  /**
  * Route-Map Rule Entry order.
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list#order RouteMapRuleEntryMatchRoutePrefixList#order}
  */
  readonly order: number;
  /**
  * DN of Prefix List. For example: `sys/rpm/pfxlistv4-[LIST1]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list#prefix_list_dn RouteMapRuleEntryMatchRoutePrefixList#prefix_list_dn}
  */
  readonly prefixListDn: string;
  /**
  * Route Map rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list#rule_name RouteMapRuleEntryMatchRoutePrefixList#rule_name}
  */
  readonly ruleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list nxos_route_map_rule_entry_match_route_prefix_list}
*/
export class RouteMapRuleEntryMatchRoutePrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_route_map_rule_entry_match_route_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMapRuleEntryMatchRoutePrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMapRuleEntryMatchRoutePrefixList to import
  * @param importFromId The id of the existing RouteMapRuleEntryMatchRoutePrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMapRuleEntryMatchRoutePrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_route_map_rule_entry_match_route_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_match_route_prefix_list nxos_route_map_rule_entry_match_route_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapRuleEntryMatchRoutePrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapRuleEntryMatchRoutePrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_route_map_rule_entry_match_route_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._order = config.order;
    this._prefixListDn = config.prefixListDn;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // prefix_list_dn - computed: false, optional: false, required: true
  private _prefixListDn?: string; 
  public get prefixListDn() {
    return this.getStringAttribute('prefix_list_dn');
  }
  public set prefixListDn(value: string) {
    this._prefixListDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDnInput() {
    return this._prefixListDn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      order: cdktf.numberToTerraform(this._order),
      prefix_list_dn: cdktf.stringToTerraform(this._prefixListDn),
      rule_name: cdktf.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_list_dn: {
        value: cdktf.stringToHclTerraform(this._prefixListDn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
