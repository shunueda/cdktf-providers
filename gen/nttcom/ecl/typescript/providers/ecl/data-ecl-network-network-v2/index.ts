// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclNetworkNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#description DataEclNetworkNetworkV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#id DataEclNetworkNetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#matching_subnet_cidr DataEclNetworkNetworkV2#matching_subnet_cidr}
  */
  readonly matchingSubnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#name DataEclNetworkNetworkV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#network_id DataEclNetworkNetworkV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#plane DataEclNetworkNetworkV2#plane}
  */
  readonly plane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#region DataEclNetworkNetworkV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2 ecl_network_network_v2}
*/
export class DataEclNetworkNetworkV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_network_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclNetworkNetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclNetworkNetworkV2 to import
  * @param importFromId The id of the existing DataEclNetworkNetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclNetworkNetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_network_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_network_v2 ecl_network_network_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclNetworkNetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclNetworkNetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
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
    this._matchingSubnetCidr = config.matchingSubnetCidr;
    this._name = config.name;
    this._networkId = config.networkId;
    this._plane = config.plane;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
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

  // matching_subnet_cidr - computed: true, optional: true, required: false
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

  // plane - computed: true, optional: true, required: false
  private _plane?: string; 
  public get plane() {
    return this.getStringAttribute('plane');
  }
  public set plane(value: string) {
    this._plane = value;
  }
  public resetPlane() {
    this._plane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planeInput() {
    return this._plane;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      matching_subnet_cidr: cdktf.stringToTerraform(this._matchingSubnetCidr),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      plane: cdktf.stringToTerraform(this._plane),
      region: cdktf.stringToTerraform(this._region),
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
      plane: {
        value: cdktf.stringToHclTerraform(this._plane),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
