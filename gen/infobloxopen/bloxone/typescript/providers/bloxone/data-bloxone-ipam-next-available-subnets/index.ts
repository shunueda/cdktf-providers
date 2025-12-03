// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamNextAvailableSubnetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cidr value of subnets to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets#cidr DataBloxoneIpamNextAvailableSubnets#cidr}
  */
  readonly cidr: number;
  /**
  * An application specific resource identity of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets#id DataBloxoneIpamNextAvailableSubnets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of subnets to generate. Default 1 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets#subnet_count DataBloxoneIpamNextAvailableSubnets#subnet_count}
  */
  readonly subnetCount?: number;
  /**
  * Key-value pairs to filter subnets by tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets#tag_filters DataBloxoneIpamNextAvailableSubnets#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets bloxone_ipam_next_available_subnets}
*/
export class DataBloxoneIpamNextAvailableSubnets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_next_available_subnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamNextAvailableSubnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamNextAvailableSubnets to import
  * @param importFromId The id of the existing DataBloxoneIpamNextAvailableSubnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamNextAvailableSubnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_next_available_subnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_subnets bloxone_ipam_next_available_subnets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamNextAvailableSubnetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamNextAvailableSubnetsConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_next_available_subnets',
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
    this._cidr = config.cidr;
    this._id = config.id;
    this._subnetCount = config.subnetCount;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subnet_count - computed: false, optional: true, required: false
  private _subnetCount?: number; 
  public get subnetCount() {
    return this.getNumberAttribute('subnet_count');
  }
  public set subnetCount(value: number) {
    this._subnetCount = value;
  }
  public resetSubnetCount() {
    this._subnetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCountInput() {
    return this._subnetCount;
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
      cidr: cdktf.numberToTerraform(this._cidr),
      id: cdktf.stringToTerraform(this._id),
      subnet_count: cdktf.numberToTerraform(this._subnetCount),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      subnet_count: {
        value: cdktf.numberToHclTerraform(this._subnetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
