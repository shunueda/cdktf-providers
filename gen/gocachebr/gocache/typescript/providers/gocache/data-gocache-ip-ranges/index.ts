// https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGocacheIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges#id DataGocacheIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges#ipv4_cidr_blocks DataGocacheIpRanges#ipv4_cidr_blocks}
  */
  readonly ipv4CidrBlocks?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges gocache_ip_ranges}
*/
export class DataGocacheIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gocache_ip_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGocacheIpRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGocacheIpRanges to import
  * @param importFromId The id of the existing DataGocacheIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGocacheIpRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gocache_ip_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/data-sources/ip_ranges gocache_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGocacheIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGocacheIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gocache_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'gocache',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
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
    this._ipv4CidrBlocks = config.ipv4CidrBlocks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
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

  // ipv4_cidr_blocks - computed: false, optional: true, required: false
  private _ipv4CidrBlocks?: string[]; 
  public get ipv4CidrBlocks() {
    return this.getListAttribute('ipv4_cidr_blocks');
  }
  public set ipv4CidrBlocks(value: string[]) {
    this._ipv4CidrBlocks = value;
  }
  public resetIpv4CidrBlocks() {
    this._ipv4CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlocksInput() {
    return this._ipv4CidrBlocks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4CidrBlocks),
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
      ipv4_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
