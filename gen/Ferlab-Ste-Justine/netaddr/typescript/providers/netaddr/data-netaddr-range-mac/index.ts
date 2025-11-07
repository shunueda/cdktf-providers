// https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetaddrRangeMacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac#id DataNetaddrRangeMac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Etcd key prefix for address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac#key_prefix DataNetaddrRangeMac#key_prefix}
  */
  readonly keyPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac netaddr_range_mac}
*/
export class DataNetaddrRangeMac extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netaddr_range_mac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetaddrRangeMac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetaddrRangeMac to import
  * @param importFromId The id of the existing DataNetaddrRangeMac that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetaddrRangeMac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netaddr_range_mac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_mac netaddr_range_mac} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetaddrRangeMacConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetaddrRangeMacConfig) {
    super(scope, id, {
      terraformResourceType: 'netaddr_range_mac',
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
    this._keyPrefix = config.keyPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_address - computed: true, optional: false, required: false
  public get firstAddress() {
    return this.getStringAttribute('first_address');
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

  // key_prefix - computed: false, optional: false, required: true
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // last_address - computed: true, optional: false, required: false
  public get lastAddress() {
    return this.getStringAttribute('last_address');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_prefix: cdktf.stringToTerraform(this._keyPrefix),
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
      key_prefix: {
        value: cdktf.stringToHclTerraform(this._keyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
