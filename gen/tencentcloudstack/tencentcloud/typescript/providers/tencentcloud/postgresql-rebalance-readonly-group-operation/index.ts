// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlRebalanceReadonlyGroupOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation#id PostgresqlRebalanceReadonlyGroupOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * readonly Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation#read_only_group_id PostgresqlRebalanceReadonlyGroupOperation#read_only_group_id}
  */
  readonly readOnlyGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation tencentcloud_postgresql_rebalance_readonly_group_operation}
*/
export class PostgresqlRebalanceReadonlyGroupOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_rebalance_readonly_group_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlRebalanceReadonlyGroupOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlRebalanceReadonlyGroupOperation to import
  * @param importFromId The id of the existing PostgresqlRebalanceReadonlyGroupOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlRebalanceReadonlyGroupOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_rebalance_readonly_group_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_rebalance_readonly_group_operation tencentcloud_postgresql_rebalance_readonly_group_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlRebalanceReadonlyGroupOperationConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlRebalanceReadonlyGroupOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_rebalance_readonly_group_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._readOnlyGroupId = config.readOnlyGroupId;
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

  // read_only_group_id - computed: false, optional: false, required: true
  private _readOnlyGroupId?: string; 
  public get readOnlyGroupId() {
    return this.getStringAttribute('read_only_group_id');
  }
  public set readOnlyGroupId(value: string) {
    this._readOnlyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupIdInput() {
    return this._readOnlyGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      read_only_group_id: cdktf.stringToTerraform(this._readOnlyGroupId),
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
      read_only_group_id: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
