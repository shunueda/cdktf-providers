// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosRouteMapRuleEntrySetRegularCommunityItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set Community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item#community DataNxosRouteMapRuleEntrySetRegularCommunityItem#community}
  */
  readonly community: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item#device DataNxosRouteMapRuleEntrySetRegularCommunityItem#device}
  */
  readonly device?: string;
  /**
  * Route-Map Rule Entry order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item#order DataNxosRouteMapRuleEntrySetRegularCommunityItem#order}
  */
  readonly order: number;
  /**
  * Route Map rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item#rule_name DataNxosRouteMapRuleEntrySetRegularCommunityItem#rule_name}
  */
  readonly ruleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item nxos_route_map_rule_entry_set_regular_community_item}
*/
export class DataNxosRouteMapRuleEntrySetRegularCommunityItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_route_map_rule_entry_set_regular_community_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosRouteMapRuleEntrySetRegularCommunityItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosRouteMapRuleEntrySetRegularCommunityItem to import
  * @param importFromId The id of the existing DataNxosRouteMapRuleEntrySetRegularCommunityItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosRouteMapRuleEntrySetRegularCommunityItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_route_map_rule_entry_set_regular_community_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/route_map_rule_entry_set_regular_community_item nxos_route_map_rule_entry_set_regular_community_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosRouteMapRuleEntrySetRegularCommunityItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosRouteMapRuleEntrySetRegularCommunityItemConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_route_map_rule_entry_set_regular_community_item',
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
    this._community = config.community;
    this._device = config.device;
    this._order = config.order;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      community: cdktf.stringToTerraform(this._community),
      device: cdktf.stringToTerraform(this._device),
      order: cdktf.numberToTerraform(this._order),
      rule_name: cdktf.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community: {
        value: cdktf.stringToHclTerraform(this._community),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
