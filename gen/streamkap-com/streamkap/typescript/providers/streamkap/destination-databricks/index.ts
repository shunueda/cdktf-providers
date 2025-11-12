// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationDatabricksConfig extends cdktf.TerraformMetaArguments {
  /**
  * JDBC URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#connection_url DestinationDatabricks#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Catalog Name. Make sure to change this to the correct cataog name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#databricks_catalog DestinationDatabricks#databricks_catalog}
  */
  readonly databricksCatalog?: string;
  /**
  * Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#databricks_token DestinationDatabricks#databricks_token}
  */
  readonly databricksToken: string;
  /**
  * Specifies whether the connector processes DELETE or tombstone events and removes the corresponding row from the database (applies to `upsert` only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#hard_delete DestinationDatabricks#hard_delete}
  */
  readonly hardDelete?: boolean | cdktf.IResolvable;
  /**
  * `upsert` or `append` modes are available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#ingestion_mode DestinationDatabricks#ingestion_mode}
  */
  readonly ingestionMode?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#name DestinationDatabricks#name}
  */
  readonly name: string;
  /**
  * Partition tables or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#partition_mode DestinationDatabricks#partition_mode}
  */
  readonly partitionMode?: string;
  /**
  * Controls how schema evolution is handled by the sink connector. For pipelines with pre-created destination tables, set to `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#schema_evolution DestinationDatabricks#schema_evolution}
  */
  readonly schemaEvolution?: string;
  /**
  * Schema for the associated table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#table_name_prefix DestinationDatabricks#table_name_prefix}
  */
  readonly tableNamePrefix: string;
  /**
  * The maximum number of active task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#tasks_max DestinationDatabricks#tasks_max}
  */
  readonly tasksMax?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks streamkap_destination_databricks}
*/
export class DestinationDatabricks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationDatabricks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationDatabricks to import
  * @param importFromId The id of the existing DestinationDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationDatabricks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_databricks streamkap_destination_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_databricks',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.15',
        providerVersionConstraint: '2.1.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionUrl = config.connectionUrl;
    this._databricksCatalog = config.databricksCatalog;
    this._databricksToken = config.databricksToken;
    this._hardDelete = config.hardDelete;
    this._ingestionMode = config.ingestionMode;
    this._name = config.name;
    this._partitionMode = config.partitionMode;
    this._schemaEvolution = config.schemaEvolution;
    this._tableNamePrefix = config.tableNamePrefix;
    this._tasksMax = config.tasksMax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // databricks_catalog - computed: true, optional: true, required: false
  private _databricksCatalog?: string; 
  public get databricksCatalog() {
    return this.getStringAttribute('databricks_catalog');
  }
  public set databricksCatalog(value: string) {
    this._databricksCatalog = value;
  }
  public resetDatabricksCatalog() {
    this._databricksCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksCatalogInput() {
    return this._databricksCatalog;
  }

  // databricks_token - computed: false, optional: false, required: true
  private _databricksToken?: string; 
  public get databricksToken() {
    return this.getStringAttribute('databricks_token');
  }
  public set databricksToken(value: string) {
    this._databricksToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksTokenInput() {
    return this._databricksToken;
  }

  // hard_delete - computed: true, optional: true, required: false
  private _hardDelete?: boolean | cdktf.IResolvable; 
  public get hardDelete() {
    return this.getBooleanAttribute('hard_delete');
  }
  public set hardDelete(value: boolean | cdktf.IResolvable) {
    this._hardDelete = value;
  }
  public resetHardDelete() {
    this._hardDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDeleteInput() {
    return this._hardDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_mode - computed: true, optional: true, required: false
  private _ingestionMode?: string; 
  public get ingestionMode() {
    return this.getStringAttribute('ingestion_mode');
  }
  public set ingestionMode(value: string) {
    this._ingestionMode = value;
  }
  public resetIngestionMode() {
    this._ingestionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionModeInput() {
    return this._ingestionMode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition_mode - computed: true, optional: true, required: false
  private _partitionMode?: string; 
  public get partitionMode() {
    return this.getStringAttribute('partition_mode');
  }
  public set partitionMode(value: string) {
    this._partitionMode = value;
  }
  public resetPartitionMode() {
    this._partitionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionModeInput() {
    return this._partitionMode;
  }

  // schema_evolution - computed: true, optional: true, required: false
  private _schemaEvolution?: string; 
  public get schemaEvolution() {
    return this.getStringAttribute('schema_evolution');
  }
  public set schemaEvolution(value: string) {
    this._schemaEvolution = value;
  }
  public resetSchemaEvolution() {
    this._schemaEvolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEvolutionInput() {
    return this._schemaEvolution;
  }

  // table_name_prefix - computed: false, optional: false, required: true
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }

  // tasks_max - computed: true, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_url: cdktf.stringToTerraform(this._connectionUrl),
      databricks_catalog: cdktf.stringToTerraform(this._databricksCatalog),
      databricks_token: cdktf.stringToTerraform(this._databricksToken),
      hard_delete: cdktf.booleanToTerraform(this._hardDelete),
      ingestion_mode: cdktf.stringToTerraform(this._ingestionMode),
      name: cdktf.stringToTerraform(this._name),
      partition_mode: cdktf.stringToTerraform(this._partitionMode),
      schema_evolution: cdktf.stringToTerraform(this._schemaEvolution),
      table_name_prefix: cdktf.stringToTerraform(this._tableNamePrefix),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_url: {
        value: cdktf.stringToHclTerraform(this._connectionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_catalog: {
        value: cdktf.stringToHclTerraform(this._databricksCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_token: {
        value: cdktf.stringToHclTerraform(this._databricksToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hard_delete: {
        value: cdktf.booleanToHclTerraform(this._hardDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingestion_mode: {
        value: cdktf.stringToHclTerraform(this._ingestionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_mode: {
        value: cdktf.stringToHclTerraform(this._partitionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_evolution: {
        value: cdktf.stringToHclTerraform(this._schemaEvolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name_prefix: {
        value: cdktf.stringToHclTerraform(this._tableNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
