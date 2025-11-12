// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationClickhouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password to access the ClickHouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#connection_password DestinationClickhouse#connection_password}
  */
  readonly connectionPassword: string;
  /**
  * Username to access ClickHouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#connection_username DestinationClickhouse#connection_username}
  */
  readonly connectionUsername: string;
  /**
  * ClickHouse database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#database DestinationClickhouse#database}
  */
  readonly database?: string;
  /**
  * Specifies whether the connector processes DELETE or tombstone events and removes the corresponding row from the database (applies to `upsert` only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#hard_delete DestinationClickhouse#hard_delete}
  */
  readonly hardDelete?: boolean | cdktf.IResolvable;
  /**
  * ClickHouse Hostname Or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#hostname DestinationClickhouse#hostname}
  */
  readonly hostname: string;
  /**
  * Upsert or append modes are available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#ingestion_mode DestinationClickhouse#ingestion_mode}
  */
  readonly ingestionMode?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#name DestinationClickhouse#name}
  */
  readonly name: string;
  /**
  * ClickHouse Port. For example, 8443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#port DestinationClickhouse#port}
  */
  readonly port?: number;
  /**
  * Controls how schema evolution is handled by the sink connector. For pipelines with pre-created destination tables, set to `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#schema_evolution DestinationClickhouse#schema_evolution}
  */
  readonly schemaEvolution?: string;
  /**
  * Enable TLS for network connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#ssl DestinationClickhouse#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of active task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#tasks_max DestinationClickhouse#tasks_max}
  */
  readonly tasksMax?: number;
  /**
  * Per topic configuration in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#topics_config_map DestinationClickhouse#topics_config_map}
  */
  readonly topicsConfigMap?: { [key: string]: DestinationClickhouseTopicsConfigMap } | cdktf.IResolvable;
}
export interface DestinationClickhouseTopicsConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#delete_sql_execute DestinationClickhouse#delete_sql_execute}
  */
  readonly deleteSqlExecute?: string;
}

export function destinationClickhouseTopicsConfigMapToTerraform(struct?: DestinationClickhouseTopicsConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_sql_execute: cdktf.stringToTerraform(struct!.deleteSqlExecute),
  }
}


export function destinationClickhouseTopicsConfigMapToHclTerraform(struct?: DestinationClickhouseTopicsConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_sql_execute: {
      value: cdktf.stringToHclTerraform(struct!.deleteSqlExecute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationClickhouseTopicsConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DestinationClickhouseTopicsConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteSqlExecute !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteSqlExecute = this._deleteSqlExecute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationClickhouseTopicsConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteSqlExecute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteSqlExecute = value.deleteSqlExecute;
    }
  }

  // delete_sql_execute - computed: false, optional: true, required: false
  private _deleteSqlExecute?: string; 
  public get deleteSqlExecute() {
    return this.getStringAttribute('delete_sql_execute');
  }
  public set deleteSqlExecute(value: string) {
    this._deleteSqlExecute = value;
  }
  public resetDeleteSqlExecute() {
    this._deleteSqlExecute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSqlExecuteInput() {
    return this._deleteSqlExecute;
  }
}

export class DestinationClickhouseTopicsConfigMapMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DestinationClickhouseTopicsConfigMap } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DestinationClickhouseTopicsConfigMapOutputReference {
    return new DestinationClickhouseTopicsConfigMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse streamkap_destination_clickhouse}
*/
export class DestinationClickhouse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_clickhouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationClickhouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationClickhouse to import
  * @param importFromId The id of the existing DestinationClickhouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationClickhouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_clickhouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_clickhouse streamkap_destination_clickhouse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationClickhouseConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationClickhouseConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_clickhouse',
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
    this._connectionPassword = config.connectionPassword;
    this._connectionUsername = config.connectionUsername;
    this._database = config.database;
    this._hardDelete = config.hardDelete;
    this._hostname = config.hostname;
    this._ingestionMode = config.ingestionMode;
    this._name = config.name;
    this._port = config.port;
    this._schemaEvolution = config.schemaEvolution;
    this._ssl = config.ssl;
    this._tasksMax = config.tasksMax;
    this._topicsConfigMap.internalValue = config.topicsConfigMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_password - computed: false, optional: false, required: true
  private _connectionPassword?: string; 
  public get connectionPassword() {
    return this.getStringAttribute('connection_password');
  }
  public set connectionPassword(value: string) {
    this._connectionPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPasswordInput() {
    return this._connectionPassword;
  }

  // connection_username - computed: false, optional: false, required: true
  private _connectionUsername?: string; 
  public get connectionUsername() {
    return this.getStringAttribute('connection_username');
  }
  public set connectionUsername(value: string) {
    this._connectionUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUsernameInput() {
    return this._connectionUsername;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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

  // topics_config_map - computed: false, optional: true, required: false
  private _topicsConfigMap = new DestinationClickhouseTopicsConfigMapMap(this, "topics_config_map");
  public get topicsConfigMap() {
    return this._topicsConfigMap;
  }
  public putTopicsConfigMap(value: { [key: string]: DestinationClickhouseTopicsConfigMap } | cdktf.IResolvable) {
    this._topicsConfigMap.internalValue = value;
  }
  public resetTopicsConfigMap() {
    this._topicsConfigMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigMapInput() {
    return this._topicsConfigMap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_password: cdktf.stringToTerraform(this._connectionPassword),
      connection_username: cdktf.stringToTerraform(this._connectionUsername),
      database: cdktf.stringToTerraform(this._database),
      hard_delete: cdktf.booleanToTerraform(this._hardDelete),
      hostname: cdktf.stringToTerraform(this._hostname),
      ingestion_mode: cdktf.stringToTerraform(this._ingestionMode),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      schema_evolution: cdktf.stringToTerraform(this._schemaEvolution),
      ssl: cdktf.booleanToTerraform(this._ssl),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
      topics_config_map: cdktf.hashMapper(destinationClickhouseTopicsConfigMapToTerraform)(this._topicsConfigMap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_password: {
        value: cdktf.stringToHclTerraform(this._connectionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_username: {
        value: cdktf.stringToHclTerraform(this._connectionUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema_evolution: {
        value: cdktf.stringToHclTerraform(this._schemaEvolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topics_config_map: {
        value: cdktf.hashMapperHcl(destinationClickhouseTopicsConfigMapToHclTerraform)(this._topicsConfigMap.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DestinationClickhouseTopicsConfigMapMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
