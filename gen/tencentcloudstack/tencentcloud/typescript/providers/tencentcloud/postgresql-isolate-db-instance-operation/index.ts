// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlIsolateDbInstanceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of resource IDs. Note that currently you cannot isolate multiple instances at the same time. Only one instance ID can be passed in here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation#db_instance_id_set PostgresqlIsolateDbInstanceOperation#db_instance_id_set}
  */
  readonly dbInstanceIdSet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation#id PostgresqlIsolateDbInstanceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation tencentcloud_postgresql_isolate_db_instance_operation}
*/
export class PostgresqlIsolateDbInstanceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_isolate_db_instance_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlIsolateDbInstanceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlIsolateDbInstanceOperation to import
  * @param importFromId The id of the existing PostgresqlIsolateDbInstanceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlIsolateDbInstanceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_isolate_db_instance_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/postgresql_isolate_db_instance_operation tencentcloud_postgresql_isolate_db_instance_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlIsolateDbInstanceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlIsolateDbInstanceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_isolate_db_instance_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceIdSet = config.dbInstanceIdSet;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id_set - computed: false, optional: false, required: true
  private _dbInstanceIdSet?: string[]; 
  public get dbInstanceIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('db_instance_id_set'));
  }
  public set dbInstanceIdSet(value: string[]) {
    this._dbInstanceIdSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdSetInput() {
    return this._dbInstanceIdSet;
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
      db_instance_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbInstanceIdSet),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbInstanceIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
