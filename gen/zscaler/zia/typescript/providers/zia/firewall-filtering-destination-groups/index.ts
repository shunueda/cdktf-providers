// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilteringDestinationGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination IP addresses within the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#addresses FirewallFilteringDestinationGroups#addresses}
  */
  readonly addresses?: string[];
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#countries FirewallFilteringDestinationGroups#countries}
  */
  readonly countries?: string[];
  /**
  * Additional information about the destination IP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#description FirewallFilteringDestinationGroups#description}
  */
  readonly description?: string;
  /**
  * List of URL categories for which rule must be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#ip_categories FirewallFilteringDestinationGroups#ip_categories}
  */
  readonly ipCategories?: string[];
  /**
  * Destination IP group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#name FirewallFilteringDestinationGroups#name}
  */
  readonly name: string;
  /**
  * Destination IP group type (i.e., the group can contain destination IP addresses or FQDNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#type FirewallFilteringDestinationGroups#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups zia_firewall_filtering_destination_groups}
*/
export class FirewallFilteringDestinationGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_destination_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilteringDestinationGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilteringDestinationGroups to import
  * @param importFromId The id of the existing FirewallFilteringDestinationGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilteringDestinationGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_destination_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/firewall_filtering_destination_groups zia_firewall_filtering_destination_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilteringDestinationGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilteringDestinationGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_filtering_destination_groups',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._countries = config.countries;
    this._description = config.description;
    this._ipCategories = config.ipCategories;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // countries - computed: true, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_categories - computed: false, optional: true, required: false
  private _ipCategories?: string[]; 
  public get ipCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_categories'));
  }
  public set ipCategories(value: string[]) {
    this._ipCategories = value;
  }
  public resetIpCategories() {
    this._ipCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCategoriesInput() {
    return this._ipCategories;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countries),
      description: cdktf.stringToTerraform(this._description),
      ip_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipCategories),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
