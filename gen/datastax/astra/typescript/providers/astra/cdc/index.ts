// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Astra database to create the keyspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#database_id Cdc#database_id}
  */
  readonly databaseId: string;
  /**
  * Astra database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#database_name Cdc#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#id Cdc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial keyspace name. For additional keyspaces, use the astra_keyspace resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#keyspace Cdc#keyspace}
  */
  readonly keyspace: string;
  /**
  * Name of the pulsar cluster to connect CDC.  If this is not set, Terraform will try to determine the pulsar cluster name based on the database cloud provider and region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#pulsar_cluster Cdc#pulsar_cluster}
  */
  readonly pulsarCluster?: string;
  /**
  * Astra database table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#table Cdc#table}
  */
  readonly table: string;
  /**
  * Streaming tenant name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#tenant_name Cdc#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Number of partitions in cdc topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#topic_partitions Cdc#topic_partitions}
  */
  readonly topicPartitions: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc astra_cdc}
*/
export class Cdc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_cdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cdc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cdc to import
  * @param importFromId The id of the existing Cdc that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cdc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_cdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/cdc astra_cdc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdcConfig
  */
  public constructor(scope: Construct, id: string, config: CdcConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_cdc',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._keyspace = config.keyspace;
    this._pulsarCluster = config.pulsarCluster;
    this._table = config.table;
    this._tenantName = config.tenantName;
    this._topicPartitions = config.topicPartitions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_status - computed: true, optional: false, required: false
  public get connectorStatus() {
    return this.getStringAttribute('connector_status');
  }

  // data_topic - computed: true, optional: false, required: false
  public get dataTopic() {
    return this.getStringAttribute('data_topic');
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

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // pulsar_cluster - computed: false, optional: true, required: false
  private _pulsarCluster?: string; 
  public get pulsarCluster() {
    return this.getStringAttribute('pulsar_cluster');
  }
  public set pulsarCluster(value: string) {
    this._pulsarCluster = value;
  }
  public resetPulsarCluster() {
    this._pulsarCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulsarClusterInput() {
    return this._pulsarCluster;
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

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // topic_partitions - computed: false, optional: false, required: true
  private _topicPartitions?: number; 
  public get topicPartitions() {
    return this.getNumberAttribute('topic_partitions');
  }
  public set topicPartitions(value: number) {
    this._topicPartitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPartitionsInput() {
    return this._topicPartitions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      keyspace: cdktf.stringToTerraform(this._keyspace),
      pulsar_cluster: cdktf.stringToTerraform(this._pulsarCluster),
      table: cdktf.stringToTerraform(this._table),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      topic_partitions: cdktf.numberToTerraform(this._topicPartitions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      pulsar_cluster: {
        value: cdktf.stringToHclTerraform(this._pulsarCluster),
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
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_partitions: {
        value: cdktf.numberToHclTerraform(this._topicPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
