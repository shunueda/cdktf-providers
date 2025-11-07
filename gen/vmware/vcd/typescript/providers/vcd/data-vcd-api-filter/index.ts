// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdApiFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the API Filter that unequivocally identifies it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter#api_filter_id DataVcdApiFilter#api_filter_id}
  */
  readonly apiFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter#id DataVcdApiFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter vcd_api_filter}
*/
export class DataVcdApiFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_api_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdApiFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdApiFilter to import
  * @param importFromId The id of the existing DataVcdApiFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdApiFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_api_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/api_filter vcd_api_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdApiFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdApiFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_api_filter',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiFilterId = config.apiFilterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_filter_id - computed: false, optional: false, required: true
  private _apiFilterId?: string; 
  public get apiFilterId() {
    return this.getStringAttribute('api_filter_id');
  }
  public set apiFilterId(value: string) {
    this._apiFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiFilterIdInput() {
    return this._apiFilterId;
  }

  // external_endpoint_id - computed: true, optional: false, required: false
  public get externalEndpointId() {
    return this.getStringAttribute('external_endpoint_id');
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

  // url_matcher_pattern - computed: true, optional: false, required: false
  public get urlMatcherPattern() {
    return this.getStringAttribute('url_matcher_pattern');
  }

  // url_matcher_scope - computed: true, optional: false, required: false
  public get urlMatcherScope() {
    return this.getStringAttribute('url_matcher_scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_filter_id: cdktf.stringToTerraform(this._apiFilterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_filter_id: {
        value: cdktf.stringToHclTerraform(this._apiFilterId),
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
