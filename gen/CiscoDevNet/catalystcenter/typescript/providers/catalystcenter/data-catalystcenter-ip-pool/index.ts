// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterIpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/ip_pool#id DataCatalystcenterIpPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/ip_pool catalystcenter_ip_pool}
*/
export class DataCatalystcenterIpPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_ip_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterIpPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterIpPool to import
  * @param importFromId The id of the existing DataCatalystcenterIpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/ip_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterIpPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_ip_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/ip_pool catalystcenter_ip_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterIpPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterIpPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_ip_pool',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space_dhcp_servers - computed: true, optional: false, required: false
  public get addressSpaceDhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_dhcp_servers'));
  }

  // address_space_dns_servers - computed: true, optional: false, required: false
  public get addressSpaceDnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_dns_servers'));
  }

  // address_space_gateway - computed: true, optional: false, required: false
  public get addressSpaceGateway() {
    return this.getStringAttribute('address_space_gateway');
  }

  // address_space_prefix_length - computed: true, optional: false, required: false
  public get addressSpacePrefixLength() {
    return this.getNumberAttribute('address_space_prefix_length');
  }

  // address_space_subnet - computed: true, optional: false, required: false
  public get addressSpaceSubnet() {
    return this.getStringAttribute('address_space_subnet');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pool_type - computed: true, optional: false, required: false
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
