// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeTargetDatabaseGroupGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member#id DataOciDataSafeTargetDatabaseGroupGroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member#target_database_group_id DataOciDataSafeTargetDatabaseGroupGroupMember#target_database_group_id}
  */
  readonly targetDatabaseGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member#target_database_id DataOciDataSafeTargetDatabaseGroupGroupMember#target_database_id}
  */
  readonly targetDatabaseId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member oci_data_safe_target_database_group_group_member}
*/
export class DataOciDataSafeTargetDatabaseGroupGroupMember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database_group_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseGroupGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeTargetDatabaseGroupGroupMember to import
  * @param importFromId The id of the existing DataOciDataSafeTargetDatabaseGroupGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeTargetDatabaseGroupGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database_group_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_group_group_member oci_data_safe_target_database_group_group_member} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeTargetDatabaseGroupGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeTargetDatabaseGroupGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database_group_group_member',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._targetDatabaseGroupId = config.targetDatabaseGroupId;
    this._targetDatabaseId = config.targetDatabaseId;
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

  // target_database_group_id - computed: false, optional: false, required: true
  private _targetDatabaseGroupId?: string; 
  public get targetDatabaseGroupId() {
    return this.getStringAttribute('target_database_group_id');
  }
  public set targetDatabaseGroupId(value: string) {
    this._targetDatabaseGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseGroupIdInput() {
    return this._targetDatabaseGroupId;
  }

  // target_database_id - computed: false, optional: true, required: false
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  public resetTargetDatabaseId() {
    this._targetDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // target_databases - computed: true, optional: false, required: false
  public get targetDatabases() {
    return this.getListAttribute('target_databases');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      target_database_group_id: cdktf.stringToTerraform(this._targetDatabaseGroupId),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
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
      target_database_group_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
