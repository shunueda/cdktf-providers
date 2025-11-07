// https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetaddrAddressMacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac#id DataNetaddrAddressMac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac#name DataNetaddrAddressMac#name}
  */
  readonly name: string;
  /**
  * Identifier of the address range the address is tied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac#range_id DataNetaddrAddressMac#range_id}
  */
  readonly rangeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac netaddr_address_mac}
*/
export class DataNetaddrAddressMac extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netaddr_address_mac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetaddrAddressMac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetaddrAddressMac to import
  * @param importFromId The id of the existing DataNetaddrAddressMac that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetaddrAddressMac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netaddr_address_mac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/address_mac netaddr_address_mac} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetaddrAddressMacConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetaddrAddressMacConfig) {
    super(scope, id, {
      terraformResourceType: 'netaddr_address_mac',
      terraformGeneratorMetadata: {
        providerName: 'netaddr',
        providerVersion: '0.5.1'
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
    this._rangeId = config.rangeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
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

  // range_id - computed: false, optional: false, required: true
  private _rangeId?: string; 
  public get rangeId() {
    return this.getStringAttribute('range_id');
  }
  public set rangeId(value: string) {
    this._rangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeIdInput() {
    return this._rangeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      range_id: cdktf.stringToTerraform(this._rangeId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_id: {
        value: cdktf.stringToHclTerraform(this._rangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
