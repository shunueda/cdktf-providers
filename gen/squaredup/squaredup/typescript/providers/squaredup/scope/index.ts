// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced query (Gremlin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#advanced_query Scope#advanced_query}
  */
  readonly advancedQuery?: string;
  /**
  * IDs of the data sources to filter the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#data_source_id Scope#data_source_id}
  */
  readonly dataSourceId?: string[];
  /**
  * Display name for the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#display_name Scope#display_name}
  */
  readonly displayName: string;
  /**
  * IDs of the nodes that scope will contain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#node_ids Scope#node_ids}
  */
  readonly nodeIds?: string[];
  /**
  * Type of the scope. Either 'dynamic' or 'fixed'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#scope_type Scope#scope_type}
  */
  readonly scopeType: string;
  /**
  * Search query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#search_query Scope#search_query}
  */
  readonly searchQuery?: string;
  /**
  * Node types to filter the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#types Scope#types}
  */
  readonly types?: string[];
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#workspace_id Scope#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope squaredup_scope}
*/
export class Scope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Scope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Scope to import
  * @param importFromId The id of the existing Scope that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Scope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/scope squaredup_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopeConfig
  */
  public constructor(scope: Construct, id: string, config: ScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_scope',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedQuery = config.advancedQuery;
    this._dataSourceId = config.dataSourceId;
    this._displayName = config.displayName;
    this._nodeIds = config.nodeIds;
    this._scopeType = config.scopeType;
    this._searchQuery = config.searchQuery;
    this._types = config.types;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_query - computed: false, optional: true, required: false
  private _advancedQuery?: string; 
  public get advancedQuery() {
    return this.getStringAttribute('advanced_query');
  }
  public set advancedQuery(value: string) {
    this._advancedQuery = value;
  }
  public resetAdvancedQuery() {
    this._advancedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedQueryInput() {
    return this._advancedQuery;
  }

  // data_source_id - computed: false, optional: true, required: false
  private _dataSourceId?: string[]; 
  public get dataSourceId() {
    return this.getListAttribute('data_source_id');
  }
  public set dataSourceId(value: string[]) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // node_ids - computed: false, optional: true, required: false
  private _nodeIds?: string[]; 
  public get nodeIds() {
    return this.getListAttribute('node_ids');
  }
  public set nodeIds(value: string[]) {
    this._nodeIds = value;
  }
  public resetNodeIds() {
    this._nodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdsInput() {
    return this._nodeIds;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // scope_type - computed: false, optional: false, required: true
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_query: cdktf.stringToTerraform(this._advancedQuery),
      data_source_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataSourceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      node_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeIds),
      scope_type: cdktf.stringToTerraform(this._scopeType),
      search_query: cdktf.stringToTerraform(this._searchQuery),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_query: {
        value: cdktf.stringToHclTerraform(this._advancedQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataSourceId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scope_type: {
        value: cdktf.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_query: {
        value: cdktf.stringToHclTerraform(this._searchQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
