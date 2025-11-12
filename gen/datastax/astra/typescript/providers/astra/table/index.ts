// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clustering column(s), separated by :
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#clustering_columns Table#clustering_columns}
  */
  readonly clusteringColumns: string;
  /**
  * A list of table Definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#column_definitions Table#column_definitions}
  */
  readonly columnDefinitions: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Astra database to create the keyspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#database_id Table#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#id Table#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keyspace name can have up to 48 alpha-numeric characters and contain underscores; only letters are supported as the first character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#keyspace Table#keyspace}
  */
  readonly keyspace: string;
  /**
  * Partition key(s), separated by :
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#partition_keys Table#partition_keys}
  */
  readonly partitionKeys: string;
  /**
  * region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#region Table#region}
  */
  readonly region: string;
  /**
  * Table name can have up to 48 alpha-numeric characters and contain underscores; only letters are supported as the first character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#table Table#table}
  */
  readonly table: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table astra_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Table to import
  * @param importFromId The id of the existing Table that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Table to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/table astra_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_table',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18',
        providerVersionConstraint: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusteringColumns = config.clusteringColumns;
    this._columnDefinitions = config.columnDefinitions;
    this._databaseId = config.databaseId;
    this._id = config.id;
    this._keyspace = config.keyspace;
    this._partitionKeys = config.partitionKeys;
    this._region = config.region;
    this._table = config.table;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering_columns - computed: false, optional: false, required: true
  private _clusteringColumns?: string; 
  public get clusteringColumns() {
    return this.getStringAttribute('clustering_columns');
  }
  public set clusteringColumns(value: string) {
    this._clusteringColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringColumnsInput() {
    return this._clusteringColumns;
  }

  // column_definitions - computed: false, optional: false, required: true
  private _columnDefinitions?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get columnDefinitions() {
    return this.interpolationForAttribute('column_definitions');
  }
  public set columnDefinitions(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._columnDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDefinitionsInput() {
    return this._columnDefinitions;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // keyspace - computed: false, optional: false, required: true
  private _keyspace?: string; 
  public get keyspace() {
    return this.getStringAttribute('keyspace');
  }
  public set keyspace(value: string) {
    this._keyspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceInput() {
    return this._keyspace;
  }

  // partition_keys - computed: false, optional: false, required: true
  private _partitionKeys?: string; 
  public get partitionKeys() {
    return this.getStringAttribute('partition_keys');
  }
  public set partitionKeys(value: string) {
    this._partitionKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering_columns: cdktf.stringToTerraform(this._clusteringColumns),
      column_definitions: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._columnDefinitions),
      database_id: cdktf.stringToTerraform(this._databaseId),
      id: cdktf.stringToTerraform(this._id),
      keyspace: cdktf.stringToTerraform(this._keyspace),
      partition_keys: cdktf.stringToTerraform(this._partitionKeys),
      region: cdktf.stringToTerraform(this._region),
      table: cdktf.stringToTerraform(this._table),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clustering_columns: {
        value: cdktf.stringToHclTerraform(this._clusteringColumns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_definitions: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._columnDefinitions),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      keyspace: {
        value: cdktf.stringToHclTerraform(this._keyspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_keys: {
        value: cdktf.stringToHclTerraform(this._partitionKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
