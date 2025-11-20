// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the collection containing the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions#collection_name Partitions#collection_name}
  */
  readonly collectionName: string;
  /**
  * The connection address of the target Zilliz Cloud cluster.
  * You can obtain this value from the output of the `zillizcloud_cluster` resource, for example:
  * `zillizcloud_cluster.example.connect_address`
  * 
  * **Example:**
  * `https://in01-295cd02566647b7.aws-us-east-2.vectordb.zillizcloud.com:19534`
  * 
  * > **Note:** The address must include the protocol (e.g., `https://`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions#connect_address Partitions#connect_address}
  */
  readonly connectAddress: string;
  /**
  * The name of the database containing the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions#db_name Partitions#db_name}
  */
  readonly dbName: string;
  /**
  * The name of the partition. (Can be updated in-place)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions#partition_name Partitions#partition_name}
  */
  readonly partitionName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions zillizcloud_partitions}
*/
export class Partitions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_partitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Partitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Partitions to import
  * @param importFromId The id of the existing Partitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Partitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_partitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.24/docs/resources/partitions zillizcloud_partitions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionsConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionsConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_partitions',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.24',
        providerVersionConstraint: '0.6.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionName = config.collectionName;
    this._connectAddress = config.connectAddress;
    this._dbName = config.dbName;
    this._partitionName = config.partitionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_name - computed: false, optional: false, required: true
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // connect_address - computed: false, optional: false, required: true
  private _connectAddress?: string; 
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }
  public set connectAddress(value: string) {
    this._connectAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAddressInput() {
    return this._connectAddress;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // partition_name - computed: false, optional: false, required: true
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_name: cdktf.stringToTerraform(this._collectionName),
      connect_address: cdktf.stringToTerraform(this._connectAddress),
      db_name: cdktf.stringToTerraform(this._dbName),
      partition_name: cdktf.stringToTerraform(this._partitionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_name: {
        value: cdktf.stringToHclTerraform(this._collectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_address: {
        value: cdktf.stringToHclTerraform(this._connectAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
