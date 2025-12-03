// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamNextAvailableAddressBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of address blocks to generate. Default 1 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks#address_block_count DataBloxoneIpamNextAvailableAddressBlocks#address_block_count}
  */
  readonly addressBlockCount?: number;
  /**
  * The cidr value of address blocks to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks#cidr DataBloxoneIpamNextAvailableAddressBlocks#cidr}
  */
  readonly cidr: number;
  /**
  * An application specific resource identity of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks#id DataBloxoneIpamNextAvailableAddressBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key-value pairs to filter address blocks by tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks#tag_filters DataBloxoneIpamNextAvailableAddressBlocks#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks bloxone_ipam_next_available_address_blocks}
*/
export class DataBloxoneIpamNextAvailableAddressBlocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_next_available_address_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamNextAvailableAddressBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamNextAvailableAddressBlocks to import
  * @param importFromId The id of the existing DataBloxoneIpamNextAvailableAddressBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamNextAvailableAddressBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_next_available_address_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_address_blocks bloxone_ipam_next_available_address_blocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamNextAvailableAddressBlocksConfig
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamNextAvailableAddressBlocksConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_next_available_address_blocks',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressBlockCount = config.addressBlockCount;
    this._cidr = config.cidr;
    this._id = config.id;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_block_count - computed: false, optional: true, required: false
  private _addressBlockCount?: number; 
  public get addressBlockCount() {
    return this.getNumberAttribute('address_block_count');
  }
  public set addressBlockCount(value: number) {
    this._addressBlockCount = value;
  }
  public resetAddressBlockCount() {
    this._addressBlockCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBlockCountInput() {
    return this._addressBlockCount;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // results - computed: true, optional: false, required: false
  public get results() {
    return this.getListAttribute('results');
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_block_count: cdktf.numberToTerraform(this._addressBlockCount),
      cidr: cdktf.numberToTerraform(this._cidr),
      id: cdktf.stringToTerraform(this._id),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_block_count: {
        value: cdktf.numberToHclTerraform(this._addressBlockCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.numberToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
