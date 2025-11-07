// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsNetworkingNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#description DataVkcsNetworkingNetwork#description}
  */
  readonly description?: string;
  /**
  * The external routing facility of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#external DataVkcsNetworkingNetwork#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The ID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#id DataVkcsNetworkingNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CIDR of a subnet within the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#matching_subnet_cidr DataVkcsNetworkingNetwork#matching_subnet_cidr}
  */
  readonly matchingSubnetCidr?: string;
  /**
  * The name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#name DataVkcsNetworkingNetwork#name}
  */
  readonly name?: string;
  /**
  * The ID of the network. **Deprecated** This argument is deprecated, please, use the `id` attribute instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#network_id DataVkcsNetworkingNetwork#network_id}
  */
  readonly networkId?: string;
  /**
  * The region in which to obtain the Network client. A Network client is needed to retrieve networks ids. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#region DataVkcsNetworkingNetwork#region}
  */
  readonly region?: string;
  /**
  * SDN to use for this resource. Must be one of following: "neutron", "sprut". Default value is project's default SDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#sdn DataVkcsNetworkingNetwork#sdn}
  */
  readonly sdn?: string;
  /**
  * The status of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#status DataVkcsNetworkingNetwork#status}
  */
  readonly status?: string;
  /**
  * The list of network tags to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#tags DataVkcsNetworkingNetwork#tags}
  */
  readonly tags?: string[];
  /**
  * The owner of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#tenant_id DataVkcsNetworkingNetwork#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Specifies whether VKCS services access is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#vkcs_services_access DataVkcsNetworkingNetwork#vkcs_services_access}
  */
  readonly vkcsServicesAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network vkcs_networking_network}
*/
export class DataVkcsNetworkingNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_networking_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsNetworkingNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsNetworkingNetwork to import
  * @param importFromId The id of the existing DataVkcsNetworkingNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsNetworkingNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_networking_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/networking_network vkcs_networking_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsNetworkingNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsNetworkingNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_networking_network',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
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
    this._external = config.external;
    this._id = config.id;
    this._matchingSubnetCidr = config.matchingSubnetCidr;
    this._name = config.name;
    this._networkId = config.networkId;
    this._region = config.region;
    this._sdn = config.sdn;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._vkcsServicesAccess = config.vkcsServicesAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getStringAttribute('admin_state_up');
  }

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
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

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
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

  // matching_subnet_cidr - computed: false, optional: true, required: false
  private _matchingSubnetCidr?: string; 
  public get matchingSubnetCidr() {
    return this.getStringAttribute('matching_subnet_cidr');
  }
  public set matchingSubnetCidr(value: string) {
    this._matchingSubnetCidr = value;
  }
  public resetMatchingSubnetCidr() {
    this._matchingSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingSubnetCidrInput() {
    return this._matchingSubnetCidr;
  }

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // private_dns_domain - computed: true, optional: false, required: false
  public get privateDnsDomain() {
    return this.getStringAttribute('private_dns_domain');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdn - computed: false, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getStringAttribute('shared');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vkcs_services_access - computed: false, optional: true, required: false
  private _vkcsServicesAccess?: boolean | cdktf.IResolvable; 
  public get vkcsServicesAccess() {
    return this.getBooleanAttribute('vkcs_services_access');
  }
  public set vkcsServicesAccess(value: boolean | cdktf.IResolvable) {
    this._vkcsServicesAccess = value;
  }
  public resetVkcsServicesAccess() {
    this._vkcsServicesAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vkcsServicesAccessInput() {
    return this._vkcsServicesAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external: cdktf.booleanToTerraform(this._external),
      id: cdktf.stringToTerraform(this._id),
      matching_subnet_cidr: cdktf.stringToTerraform(this._matchingSubnetCidr),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      sdn: cdktf.stringToTerraform(this._sdn),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vkcs_services_access: cdktf.booleanToTerraform(this._vkcsServicesAccess),
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
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._matchingSubnetCidr),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn: {
        value: cdktf.stringToHclTerraform(this._sdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vkcs_services_access: {
        value: cdktf.booleanToHclTerraform(this._vkcsServicesAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
