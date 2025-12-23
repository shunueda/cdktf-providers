// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsNetworkingSecgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description the the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#description DataVkcsNetworkingSecgroup#description}
  */
  readonly description?: string;
  /**
  * The ID of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#id DataVkcsNetworkingSecgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#name DataVkcsNetworkingSecgroup#name}
  */
  readonly name?: string;
  /**
  * The region in which to obtain the Network client. A Network client is needed to retrieve security groups ids. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#region DataVkcsNetworkingSecgroup#region}
  */
  readonly region?: string;
  /**
  * SDN to use for this resource. Must be one of following: "neutron", "sprut". Default value is project's default SDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#sdn DataVkcsNetworkingSecgroup#sdn}
  */
  readonly sdn?: string;
  /**
  * The ID of the security group. **Deprecated** This argument is deprecated, please, use the `id` attribute instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#secgroup_id DataVkcsNetworkingSecgroup#secgroup_id}
  */
  readonly secgroupId?: string;
  /**
  * The list of security group tags to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#tags DataVkcsNetworkingSecgroup#tags}
  */
  readonly tags?: string[];
  /**
  * The owner of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#tenant_id DataVkcsNetworkingSecgroup#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup vkcs_networking_secgroup}
*/
export class DataVkcsNetworkingSecgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_networking_secgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsNetworkingSecgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsNetworkingSecgroup to import
  * @param importFromId The id of the existing DataVkcsNetworkingSecgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsNetworkingSecgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_networking_secgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/networking_secgroup vkcs_networking_secgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsNetworkingSecgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsNetworkingSecgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_networking_secgroup',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._sdn = config.sdn;
    this._secgroupId = config.secgroupId;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // secgroup_id - computed: true, optional: true, required: false
  private _secgroupId?: string; 
  public get secgroupId() {
    return this.getStringAttribute('secgroup_id');
  }
  public set secgroupId(value: string) {
    this._secgroupId = value;
  }
  public resetSecgroupId() {
    this._secgroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secgroupIdInput() {
    return this._secgroupId;
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

  // tenant_id - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      sdn: cdktf.stringToTerraform(this._sdn),
      secgroup_id: cdktf.stringToTerraform(this._secgroupId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      secgroup_id: {
        value: cdktf.stringToHclTerraform(this._secgroupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
