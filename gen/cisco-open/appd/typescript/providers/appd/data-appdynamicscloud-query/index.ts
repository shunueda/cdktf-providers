// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAppdynamicscloudQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query#id DataAppdynamicscloudQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Query String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query#query DataAppdynamicscloudQuery#query}
  */
  readonly query: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query appdynamicscloud_query}
*/
export class DataAppdynamicscloudQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appdynamicscloud_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAppdynamicscloudQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAppdynamicscloudQuery to import
  * @param importFromId The id of the existing DataAppdynamicscloudQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAppdynamicscloudQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appdynamicscloud_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/data-sources/appdynamicscloud_query appdynamicscloud_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAppdynamicscloudQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAppdynamicscloudQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'appdynamicscloud_query',
      terraformGeneratorMetadata: {
        providerName: 'appd',
        providerVersion: '0.0.1'
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
    this._query = config.query;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      query: cdktf.stringToTerraform(this._query),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
