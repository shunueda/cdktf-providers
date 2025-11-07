// https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/data-sources/query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSqlQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The query to execute. The types in this query will be reflected in the typing of the `result` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/data-sources/query#query DataSqlQuery#query}
  */
  readonly query: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/data-sources/query sql_query}
*/
export class DataSqlQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sql_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSqlQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSqlQuery to import
  * @param importFromId The id of the existing DataSqlQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/data-sources/query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSqlQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sql_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/data-sources/query sql_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSqlQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataSqlQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'sql_query',
      terraformGeneratorMetadata: {
        providerName: 'sql',
        providerVersion: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // result - computed: true, optional: false, required: false
  private _result = new cdktf.AnyMapList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query: cdktf.stringToTerraform(this._query),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
