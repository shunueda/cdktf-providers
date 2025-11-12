// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapRuleEntrySetRegularCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Option to add to an existing community.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#additive RouteMapRuleEntrySetRegularCommunity#additive}
  */
  readonly additive?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#device RouteMapRuleEntrySetRegularCommunity#device}
  */
  readonly device?: string;
  /**
  * Option to have no community attribute.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#no_community RouteMapRuleEntrySetRegularCommunity#no_community}
  */
  readonly noCommunity?: string;
  /**
  * Route-Map Rule Entry order.
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#order RouteMapRuleEntrySetRegularCommunity#order}
  */
  readonly order: number;
  /**
  * Route Map rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#rule_name RouteMapRuleEntrySetRegularCommunity#rule_name}
  */
  readonly ruleName: string;
  /**
  * Operation on the current community.
  *   - Choices: `none`, `append`, `replace`, `igp`, `pre-bestpath`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#set_criteria RouteMapRuleEntrySetRegularCommunity#set_criteria}
  */
  readonly setCriteria?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community nxos_route_map_rule_entry_set_regular_community}
*/
export class RouteMapRuleEntrySetRegularCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_route_map_rule_entry_set_regular_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMapRuleEntrySetRegularCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMapRuleEntrySetRegularCommunity to import
  * @param importFromId The id of the existing RouteMapRuleEntrySetRegularCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMapRuleEntrySetRegularCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_route_map_rule_entry_set_regular_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/route_map_rule_entry_set_regular_community nxos_route_map_rule_entry_set_regular_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapRuleEntrySetRegularCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapRuleEntrySetRegularCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_route_map_rule_entry_set_regular_community',
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
    this._additive = config.additive;
    this._device = config.device;
    this._noCommunity = config.noCommunity;
    this._order = config.order;
    this._ruleName = config.ruleName;
    this._setCriteria = config.setCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additive - computed: true, optional: true, required: false
  private _additive?: string; 
  public get additive() {
    return this.getStringAttribute('additive');
  }
  public set additive(value: string) {
    this._additive = value;
  }
  public resetAdditive() {
    this._additive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additiveInput() {
    return this._additive;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // no_community - computed: true, optional: true, required: false
  private _noCommunity?: string; 
  public get noCommunity() {
    return this.getStringAttribute('no_community');
  }
  public set noCommunity(value: string) {
    this._noCommunity = value;
  }
  public resetNoCommunity() {
    this._noCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCommunityInput() {
    return this._noCommunity;
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

  // set_criteria - computed: true, optional: true, required: false
  private _setCriteria?: string; 
  public get setCriteria() {
    return this.getStringAttribute('set_criteria');
  }
  public set setCriteria(value: string) {
    this._setCriteria = value;
  }
  public resetSetCriteria() {
    this._setCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCriteriaInput() {
    return this._setCriteria;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additive: cdktf.stringToTerraform(this._additive),
      device: cdktf.stringToTerraform(this._device),
      no_community: cdktf.stringToTerraform(this._noCommunity),
      order: cdktf.numberToTerraform(this._order),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      set_criteria: cdktf.stringToTerraform(this._setCriteria),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additive: {
        value: cdktf.stringToHclTerraform(this._additive),
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
      no_community: {
        value: cdktf.stringToHclTerraform(this._noCommunity),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_criteria: {
        value: cdktf.stringToHclTerraform(this._setCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
