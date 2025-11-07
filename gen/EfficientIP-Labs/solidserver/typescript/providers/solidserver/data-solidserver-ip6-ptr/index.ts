// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolidserverIp6PtrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv6 address to convert into PTR domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr#address DataSolidserverIp6Ptr#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr#id DataSolidserverIp6Ptr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr solidserver_ip6_ptr}
*/
export class DataSolidserverIp6Ptr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_ip6_ptr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolidserverIp6Ptr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolidserverIp6Ptr to import
  * @param importFromId The id of the existing DataSolidserverIp6Ptr that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolidserverIp6Ptr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_ip6_ptr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/ip6_ptr solidserver_ip6_ptr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolidserverIp6PtrConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolidserverIp6PtrConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_ip6_ptr',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dname - computed: true, optional: false, required: false
  public get dname() {
    return this.getStringAttribute('dname');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
