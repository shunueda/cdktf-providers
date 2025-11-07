// https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf#id DataEquinixMetalVrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the VRF to lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf#vrf_id DataEquinixMetalVrf#vrf_id}
  */
  readonly vrfId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf equinix_metal_vrf}
*/
export class DataEquinixMetalVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalVrf to import
  * @param importFromId The id of the existing DataEquinixMetalVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/metal_vrf equinix_metal_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_vrf',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.8.0'
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
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges'));
  }

  // local_asn - computed: true, optional: false, required: false
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }

  // metro - computed: true, optional: false, required: false
  public get metro() {
    return this.getStringAttribute('metro');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // vrf_id - computed: false, optional: false, required: true
  private _vrfId?: string; 
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }
  public set vrfId(value: string) {
    this._vrfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vrf_id: cdktf.stringToTerraform(this._vrfId),
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
      vrf_id: {
        value: cdktf.stringToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
