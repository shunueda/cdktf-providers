// https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGraphqlQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query#id DataGraphqlQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the query is paginated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query#paginated DataGraphqlQuery#paginated}
  */
  readonly paginated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query#query DataGraphqlQuery#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query#query_variables DataGraphqlQuery#query_variables}
  */
  readonly queryVariables: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query graphql_query}
*/
export class DataGraphqlQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graphql_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGraphqlQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGraphqlQuery to import
  * @param importFromId The id of the existing DataGraphqlQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGraphqlQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graphql_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/data-sources/query graphql_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGraphqlQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGraphqlQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'graphql_query',
      terraformGeneratorMetadata: {
        providerName: 'graphql',
        providerVersion: '2.6.1',
        providerVersionConstraint: '2.6.1'
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
    this._paginated = config.paginated;
    this._query = config.query;
    this._queryVariables = config.queryVariables;
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

  // paginated - computed: false, optional: true, required: false
  private _paginated?: boolean | cdktf.IResolvable; 
  public get paginated() {
    return this.getBooleanAttribute('paginated');
  }
  public set paginated(value: boolean | cdktf.IResolvable) {
    this._paginated = value;
  }
  public resetPaginated() {
    this._paginated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginatedInput() {
    return this._paginated;
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

  // query_response - computed: true, optional: false, required: false
  public get queryResponse() {
    return this.getStringAttribute('query_response');
  }

  // query_variables - computed: false, optional: false, required: true
  private _queryVariables?: { [key: string]: string }; 
  public get queryVariables() {
    return this.getStringMapAttribute('query_variables');
  }
  public set queryVariables(value: { [key: string]: string }) {
    this._queryVariables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryVariablesInput() {
    return this._queryVariables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      paginated: cdktf.booleanToTerraform(this._paginated),
      query: cdktf.stringToTerraform(this._query),
      query_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._queryVariables),
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
      paginated: {
        value: cdktf.booleanToHclTerraform(this._paginated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._queryVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
