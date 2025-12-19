// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#access_type PartitionAdmin#access_type}
  */
  readonly accessType?: string;
  /**
  * 'enable': Enable user; 'disable': Disable user;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#action PartitionAdmin#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#id PartitionAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Config user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#passwd_string PartitionAdmin#passwd_string}
  */
  readonly passwdString?: string;
  /**
  * 'partition-enable-disable': Set per-partition enable-disable privilege; 'partition-read': Set per-partition read privilege; 'partition-write': Set per-partition write privilege;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#privilege_partition PartitionAdmin#privilege_partition}
  */
  readonly privilegePartition?: string;
  /**
  * Set trusted network administrator can login in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#trusted_host PartitionAdmin#trusted_host}
  */
  readonly trustedHost?: number;
  /**
  * Trusted IP Address with network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#trusted_host_cidr PartitionAdmin#trusted_host_cidr}
  */
  readonly trustedHostCidr?: string;
  /**
  * Partition admin user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#user PartitionAdmin#user}
  */
  readonly user: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#user_tag PartitionAdmin#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#uuid PartitionAdmin#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin thunder_partition_admin}
*/
export class PartitionAdmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_partition_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PartitionAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PartitionAdmin to import
  * @param importFromId The id of the existing PartitionAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PartitionAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_partition_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/partition_admin thunder_partition_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionAdminConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionAdminConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_partition_admin',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._action = config.action;
    this._id = config.id;
    this._passwdString = config.passwdString;
    this._privilegePartition = config.privilegePartition;
    this._trustedHost = config.trustedHost;
    this._trustedHostCidr = config.trustedHostCidr;
    this._user = config.user;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // passwd_string - computed: false, optional: true, required: false
  private _passwdString?: string; 
  public get passwdString() {
    return this.getStringAttribute('passwd_string');
  }
  public set passwdString(value: string) {
    this._passwdString = value;
  }
  public resetPasswdString() {
    this._passwdString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdStringInput() {
    return this._passwdString;
  }

  // privilege_partition - computed: false, optional: true, required: false
  private _privilegePartition?: string; 
  public get privilegePartition() {
    return this.getStringAttribute('privilege_partition');
  }
  public set privilegePartition(value: string) {
    this._privilegePartition = value;
  }
  public resetPrivilegePartition() {
    this._privilegePartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegePartitionInput() {
    return this._privilegePartition;
  }

  // trusted_host - computed: false, optional: true, required: false
  private _trustedHost?: number; 
  public get trustedHost() {
    return this.getNumberAttribute('trusted_host');
  }
  public set trustedHost(value: number) {
    this._trustedHost = value;
  }
  public resetTrustedHost() {
    this._trustedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostInput() {
    return this._trustedHost;
  }

  // trusted_host_cidr - computed: false, optional: true, required: false
  private _trustedHostCidr?: string; 
  public get trustedHostCidr() {
    return this.getStringAttribute('trusted_host_cidr');
  }
  public set trustedHostCidr(value: string) {
    this._trustedHostCidr = value;
  }
  public resetTrustedHostCidr() {
    this._trustedHostCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostCidrInput() {
    return this._trustedHostCidr;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      passwd_string: cdktf.stringToTerraform(this._passwdString),
      privilege_partition: cdktf.stringToTerraform(this._privilegePartition),
      trusted_host: cdktf.numberToTerraform(this._trustedHost),
      trusted_host_cidr: cdktf.stringToTerraform(this._trustedHostCidr),
      user: cdktf.stringToTerraform(this._user),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      passwd_string: {
        value: cdktf.stringToHclTerraform(this._passwdString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_partition: {
        value: cdktf.stringToHclTerraform(this._privilegePartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_host: {
        value: cdktf.numberToHclTerraform(this._trustedHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_host_cidr: {
        value: cdktf.stringToHclTerraform(this._trustedHostCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
