// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfigInstanceSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups#id SqlserverConfigInstanceSecurityGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups#instance_id SqlserverConfigInstanceSecurityGroups#instance_id}
  */
  readonly instanceId: string;
  /**
  * A list of security group IDs to modify, an array of one or more security group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups#security_group_id_set SqlserverConfigInstanceSecurityGroups#security_group_id_set}
  */
  readonly securityGroupIdSet: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups tencentcloud_sqlserver_config_instance_security_groups}
*/
export class SqlserverConfigInstanceSecurityGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_config_instance_security_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverConfigInstanceSecurityGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverConfigInstanceSecurityGroups to import
  * @param importFromId The id of the existing SqlserverConfigInstanceSecurityGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverConfigInstanceSecurityGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_config_instance_security_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_config_instance_security_groups tencentcloud_sqlserver_config_instance_security_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfigInstanceSecurityGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfigInstanceSecurityGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_config_instance_security_groups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._instanceId = config.instanceId;
    this._securityGroupIdSet = config.securityGroupIdSet;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      security_group_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIdSet),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
