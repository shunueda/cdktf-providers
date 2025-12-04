// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlSecurityGroupConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID. Either this parameter or ReadOnlyGroupId must be passed in. If both parameters are passed in, ReadOnlyGroupId will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config#db_instance_id PostgresqlSecurityGroupConfig#db_instance_id}
  */
  readonly dbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config#id PostgresqlSecurityGroupConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * RO group ID. Either this parameter or DBInstanceId must be passed in. To query the security groups associated with the RO groups, only pass in ReadOnlyGroupId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config#read_only_group_id PostgresqlSecurityGroupConfig#read_only_group_id}
  */
  readonly readOnlyGroupId?: string;
  /**
  * Information of security groups in array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config#security_group_id_set PostgresqlSecurityGroupConfig#security_group_id_set}
  */
  readonly securityGroupIdSet: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config tencentcloud_postgresql_security_group_config}
*/
export class PostgresqlSecurityGroupConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_security_group_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlSecurityGroupConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlSecurityGroupConfig to import
  * @param importFromId The id of the existing PostgresqlSecurityGroupConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlSecurityGroupConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_security_group_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/postgresql_security_group_config tencentcloud_postgresql_security_group_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlSecurityGroupConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlSecurityGroupConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_security_group_config',
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
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._readOnlyGroupId = config.readOnlyGroupId;
    this._securityGroupIdSet = config.securityGroupIdSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: true, required: false
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  public resetDbInstanceId() {
    this._dbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // read_only_group_id - computed: false, optional: true, required: false
  private _readOnlyGroupId?: string; 
  public get readOnlyGroupId() {
    return this.getStringAttribute('read_only_group_id');
  }
  public set readOnlyGroupId(value: string) {
    this._readOnlyGroupId = value;
  }
  public resetReadOnlyGroupId() {
    this._readOnlyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupIdInput() {
    return this._readOnlyGroupId;
  }

  // security_group_id_set - computed: false, optional: false, required: true
  private _securityGroupIdSet?: string[]; 
  public get securityGroupIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_id_set'));
  }
  public set securityGroupIdSet(value: string[]) {
    this._securityGroupIdSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdSetInput() {
    return this._securityGroupIdSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      read_only_group_id: cdktf.stringToTerraform(this._readOnlyGroupId),
      security_group_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIdSet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      read_only_group_id: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
