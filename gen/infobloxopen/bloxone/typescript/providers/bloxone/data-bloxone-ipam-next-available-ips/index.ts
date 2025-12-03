// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamNextAvailableIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the IP addresses should belong to a contiguous block. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#contiguous DataBloxoneIpamNextAvailableIps#contiguous}
  */
  readonly contiguous?: boolean | cdktf.IResolvable;
  /**
  * An application specific resource identity of a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#id DataBloxoneIpamNextAvailableIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of IP addresses requested. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#ip_count DataBloxoneIpamNextAvailableIps#ip_count}
  */
  readonly ipCount?: number;
  /**
  * Resource type to search when using tag filters (address_block, subnet, or range)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#resource_type DataBloxoneIpamNextAvailableIps#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Map of tag key/value pairs to filter resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#tag_filters DataBloxoneIpamNextAvailableIps#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips bloxone_ipam_next_available_ips}
*/
export class DataBloxoneIpamNextAvailableIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_next_available_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamNextAvailableIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamNextAvailableIps to import
  * @param importFromId The id of the existing DataBloxoneIpamNextAvailableIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamNextAvailableIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_next_available_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_next_available_ips bloxone_ipam_next_available_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamNextAvailableIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamNextAvailableIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_next_available_ips',
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
    this._contiguous = config.contiguous;
    this._id = config.id;
    this._ipCount = config.ipCount;
    this._resourceType = config.resourceType;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contiguous - computed: false, optional: true, required: false
  private _contiguous?: boolean | cdktf.IResolvable; 
  public get contiguous() {
    return this.getBooleanAttribute('contiguous');
  }
  public set contiguous(value: boolean | cdktf.IResolvable) {
    this._contiguous = value;
  }
  public resetContiguous() {
    this._contiguous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contiguousInput() {
    return this._contiguous;
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

  // ip_count - computed: false, optional: true, required: false
  private _ipCount?: number; 
  public get ipCount() {
    return this.getNumberAttribute('ip_count');
  }
  public set ipCount(value: number) {
    this._ipCount = value;
  }
  public resetIpCount() {
    this._ipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountInput() {
    return this._ipCount;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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
      contiguous: cdktf.booleanToTerraform(this._contiguous),
      id: cdktf.stringToTerraform(this._id),
      ip_count: cdktf.numberToTerraform(this._ipCount),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contiguous: {
        value: cdktf.booleanToHclTerraform(this._contiguous),
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
      ip_count: {
        value: cdktf.numberToHclTerraform(this._ipCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
