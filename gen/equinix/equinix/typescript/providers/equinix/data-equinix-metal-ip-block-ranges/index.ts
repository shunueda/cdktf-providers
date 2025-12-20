// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalIpBlockRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Facility code filtering the IP blocks. Global IPv4 blocks will be listed anyway. If you omit this and metro, all the block from the project will be listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges#facility DataEquinixMetalIpBlockRanges#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges#id DataEquinixMetalIpBlockRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metro code filtering the IP blocks. Global IPv4 blocks will be listed anyway. If you omit this and facility, all the block from the project will be listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges#metro DataEquinixMetalIpBlockRanges#metro}
  */
  readonly metro?: string;
  /**
  * ID of the project from which to list the blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges#project_id DataEquinixMetalIpBlockRanges#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges equinix_metal_ip_block_ranges}
*/
export class DataEquinixMetalIpBlockRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_ip_block_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalIpBlockRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalIpBlockRanges to import
  * @param importFromId The id of the existing DataEquinixMetalIpBlockRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalIpBlockRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_ip_block_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_ip_block_ranges equinix_metal_ip_block_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalIpBlockRangesConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalIpBlockRangesConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_ip_block_ranges',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._facility = config.facility;
    this._id = config.id;
    this._metro = config.metro;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // global_ipv4 - computed: true, optional: false, required: false
  public get globalIpv4() {
    return this.getListAttribute('global_ipv4');
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

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // private_ipv4 - computed: true, optional: false, required: false
  public get privateIpv4() {
    return this.getListAttribute('private_ipv4');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_ipv4 - computed: true, optional: false, required: false
  public get publicIpv4() {
    return this.getListAttribute('public_ipv4');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      facility: cdktf.stringToTerraform(this._facility),
      id: cdktf.stringToTerraform(this._id),
      metro: cdktf.stringToTerraform(this._metro),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
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
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
