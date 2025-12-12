// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbClusterDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#character_set_name PolardbClusterDatabase#character_set_name}
  */
  readonly characterSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#db_cluster_id PolardbClusterDatabase#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#db_description PolardbClusterDatabase#db_description}
  */
  readonly dbDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#db_name PolardbClusterDatabase#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#id PolardbClusterDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database alibabacloudstack_polardb_cluster_database}
*/
export class PolardbClusterDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_cluster_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbClusterDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbClusterDatabase to import
  * @param importFromId The id of the existing PolardbClusterDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbClusterDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_cluster_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_cluster_database alibabacloudstack_polardb_cluster_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbClusterDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbClusterDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_cluster_database',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._characterSetName = config.characterSetName;
    this._dbClusterId = config.dbClusterId;
    this._dbDescription = config.dbDescription;
    this._dbName = config.dbName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set_name - computed: false, optional: false, required: true
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // db_description - computed: false, optional: true, required: false
  private _dbDescription?: string; 
  public get dbDescription() {
    return this.getStringAttribute('db_description');
  }
  public set dbDescription(value: string) {
    this._dbDescription = value;
  }
  public resetDbDescription() {
    this._dbDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDescriptionInput() {
    return this._dbDescription;
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

  // db_status - computed: true, optional: false, required: false
  public get dbStatus() {
    return this.getStringAttribute('db_status');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_description: cdktf.stringToTerraform(this._dbDescription),
      db_name: cdktf.stringToTerraform(this._dbName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set_name: {
        value: cdktf.stringToHclTerraform(this._characterSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_description: {
        value: cdktf.stringToHclTerraform(this._dbDescription),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
