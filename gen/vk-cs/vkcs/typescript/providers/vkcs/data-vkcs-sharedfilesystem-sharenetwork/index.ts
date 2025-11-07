// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsSharedfilesystemSharenetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description of the share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#description DataVkcsSharedfilesystemSharenetwork#description}
  */
  readonly description?: string;
  /**
  * The name of the share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#name DataVkcsSharedfilesystemSharenetwork#name}
  */
  readonly name?: string;
  /**
  * The neutron network UUID of the share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#neutron_net_id DataVkcsSharedfilesystemSharenetwork#neutron_net_id}
  */
  readonly neutronNetId?: string;
  /**
  * The neutron subnet UUID of the share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#neutron_subnet_id DataVkcsSharedfilesystemSharenetwork#neutron_subnet_id}
  */
  readonly neutronSubnetId?: string;
  /**
  * The region in which to obtain the Shared File System client. A Shared File System client is needed to read a share network. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#region DataVkcsSharedfilesystemSharenetwork#region}
  */
  readonly region?: string;
  /**
  * The security service IDs associated with the share network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#security_service_id DataVkcsSharedfilesystemSharenetwork#security_service_id}
  */
  readonly securityServiceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork vkcs_sharedfilesystem_sharenetwork}
*/
export class DataVkcsSharedfilesystemSharenetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_sharedfilesystem_sharenetwork";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsSharedfilesystemSharenetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsSharedfilesystemSharenetwork to import
  * @param importFromId The id of the existing DataVkcsSharedfilesystemSharenetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsSharedfilesystemSharenetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_sharedfilesystem_sharenetwork", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/sharedfilesystem_sharenetwork vkcs_sharedfilesystem_sharenetwork} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsSharedfilesystemSharenetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsSharedfilesystemSharenetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_sharedfilesystem_sharenetwork',
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
    this._name = config.name;
    this._neutronNetId = config.neutronNetId;
    this._neutronSubnetId = config.neutronSubnetId;
    this._region = config.region;
    this._securityServiceId = config.securityServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // description - computed: true, optional: true, required: false
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

  // neutron_net_id - computed: true, optional: true, required: false
  private _neutronNetId?: string; 
  public get neutronNetId() {
    return this.getStringAttribute('neutron_net_id');
  }
  public set neutronNetId(value: string) {
    this._neutronNetId = value;
  }
  public resetNeutronNetId() {
    this._neutronNetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronNetIdInput() {
    return this._neutronNetId;
  }

  // neutron_subnet_id - computed: true, optional: true, required: false
  private _neutronSubnetId?: string; 
  public get neutronSubnetId() {
    return this.getStringAttribute('neutron_subnet_id');
  }
  public set neutronSubnetId(value: string) {
    this._neutronSubnetId = value;
  }
  public resetNeutronSubnetId() {
    this._neutronSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronSubnetIdInput() {
    return this._neutronSubnetId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // security_service_id - computed: false, optional: true, required: false
  private _securityServiceId?: string; 
  public get securityServiceId() {
    return this.getStringAttribute('security_service_id');
  }
  public set securityServiceId(value: string) {
    this._securityServiceId = value;
  }
  public resetSecurityServiceId() {
    this._securityServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServiceIdInput() {
    return this._securityServiceId;
  }

  // security_service_ids - computed: true, optional: false, required: false
  public get securityServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_service_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      neutron_net_id: cdktf.stringToTerraform(this._neutronNetId),
      neutron_subnet_id: cdktf.stringToTerraform(this._neutronSubnetId),
      region: cdktf.stringToTerraform(this._region),
      security_service_id: cdktf.stringToTerraform(this._securityServiceId),
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
      neutron_net_id: {
        value: cdktf.stringToHclTerraform(this._neutronNetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neutron_subnet_id: {
        value: cdktf.stringToHclTerraform(this._neutronSubnetId),
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
      security_service_id: {
        value: cdktf.stringToHclTerraform(this._securityServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
