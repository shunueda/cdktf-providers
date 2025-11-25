// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilteringNetworkApplicationGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups#description FirewallFilteringNetworkApplicationGroups#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups#name FirewallFilteringNetworkApplicationGroups#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups#network_applications FirewallFilteringNetworkApplicationGroups#network_applications}
  */
  readonly networkApplications?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups zia_firewall_filtering_network_application_groups}
*/
export class FirewallFilteringNetworkApplicationGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_network_application_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilteringNetworkApplicationGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilteringNetworkApplicationGroups to import
  * @param importFromId The id of the existing FirewallFilteringNetworkApplicationGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilteringNetworkApplicationGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_network_application_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/firewall_filtering_network_application_groups zia_firewall_filtering_network_application_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilteringNetworkApplicationGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilteringNetworkApplicationGroupsConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._networkApplications = config.networkApplications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_applications - computed: false, optional: true, required: false
  private _networkApplications?: string[]; 
  public get networkApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('network_applications'));
  }
  public set networkApplications(value: string[]) {
    this._networkApplications = value;
  }
  public resetNetworkApplications() {
    this._networkApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkApplicationsInput() {
    return this._networkApplications;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkApplications),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
