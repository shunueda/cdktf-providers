// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaFirewallFilteringNetworkApplicationGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups#id DataZiaFirewallFilteringNetworkApplicationGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups#name DataZiaFirewallFilteringNetworkApplicationGroups#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups zia_firewall_filtering_network_application_groups}
*/
export class DataZiaFirewallFilteringNetworkApplicationGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_network_application_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaFirewallFilteringNetworkApplicationGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaFirewallFilteringNetworkApplicationGroups to import
  * @param importFromId The id of the existing DataZiaFirewallFilteringNetworkApplicationGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaFirewallFilteringNetworkApplicationGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_network_application_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/firewall_filtering_network_application_groups zia_firewall_filtering_network_application_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaFirewallFilteringNetworkApplicationGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaFirewallFilteringNetworkApplicationGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_filtering_network_application_groups',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_applications - computed: true, optional: false, required: false
  public get networkApplications() {
    return this.getListAttribute('network_applications');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
