// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMcsRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions#id DataMcsRegions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions#parent_region_id DataMcsRegions#parent_region_id}
  */
  readonly parentRegionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions mcs_regions}
*/
export class DataMcsRegions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs_regions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMcsRegions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMcsRegions to import
  * @param importFromId The id of the existing DataMcsRegions that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMcsRegions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs_regions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/regions mcs_regions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMcsRegionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMcsRegionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mcs_regions',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14'
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
    this._parentRegionId = config.parentRegionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // parent_region_id - computed: false, optional: true, required: false
  private _parentRegionId?: string; 
  public get parentRegionId() {
    return this.getStringAttribute('parent_region_id');
  }
  public set parentRegionId(value: string) {
    this._parentRegionId = value;
  }
  public resetParentRegionId() {
    this._parentRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRegionIdInput() {
    return this._parentRegionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent_region_id: cdktf.stringToTerraform(this._parentRegionId),
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
      parent_region_id: {
        value: cdktf.stringToHclTerraform(this._parentRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
