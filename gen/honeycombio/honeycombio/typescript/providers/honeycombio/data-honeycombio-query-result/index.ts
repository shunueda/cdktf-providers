// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHoneycombioQueryResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dataset to query. If not specified, an Environment-wide query will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result#dataset DataHoneycombioQueryResult#dataset}
  */
  readonly dataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result#id DataHoneycombioQueryResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result#query_json DataHoneycombioQueryResult#query_json}
  */
  readonly queryJson: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result honeycombio_query_result}
*/
export class DataHoneycombioQueryResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_query_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHoneycombioQueryResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHoneycombioQueryResult to import
  * @param importFromId The id of the existing DataHoneycombioQueryResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHoneycombioQueryResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_query_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_result honeycombio_query_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHoneycombioQueryResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataHoneycombioQueryResultConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_query_result',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataset = config.dataset;
    this._id = config.id;
    this._queryJson = config.queryJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // graph_image_url - computed: true, optional: false, required: false
  public get graphImageUrl() {
    return this.getStringAttribute('graph_image_url');
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

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // query_json - computed: false, optional: false, required: true
  private _queryJson?: string; 
  public get queryJson() {
    return this.getStringAttribute('query_json');
  }
  public set queryJson(value: string) {
    this._queryJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryJsonInput() {
    return this._queryJson;
  }

  // query_url - computed: true, optional: false, required: false
  public get queryUrl() {
    return this.getStringAttribute('query_url');
  }

  // results - computed: true, optional: false, required: false
  private _results = new cdktf.StringMapList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: cdktf.stringToTerraform(this._dataset),
      id: cdktf.stringToTerraform(this._id),
      query_json: cdktf.stringToTerraform(this._queryJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
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
      query_json: {
        value: cdktf.stringToHclTerraform(this._queryJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
