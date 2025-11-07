// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelMachineUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users#id DataZitadelMachineUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users#org_id DataZitadelMachineUsers#org_id}
  */
  readonly orgId?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users#user_name DataZitadelMachineUsers#user_name}
  */
  readonly userName: string;
  /**
  * Method for querying machine users by username, supported values: TEXT_QUERY_METHOD_EQUALS, TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE, TEXT_QUERY_METHOD_STARTS_WITH, TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE, TEXT_QUERY_METHOD_CONTAINS, TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE, TEXT_QUERY_METHOD_ENDS_WITH, TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users#user_name_method DataZitadelMachineUsers#user_name_method}
  */
  readonly userNameMethod?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users zitadel_machine_users}
*/
export class DataZitadelMachineUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_machine_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelMachineUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelMachineUsers to import
  * @param importFromId The id of the existing DataZitadelMachineUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelMachineUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_machine_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/machine_users zitadel_machine_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelMachineUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelMachineUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_machine_users',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
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
    this._orgId = config.orgId;
    this._userName = config.userName;
    this._userNameMethod = config.userNameMethod;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_name_method - computed: false, optional: true, required: false
  private _userNameMethod?: string; 
  public get userNameMethod() {
    return this.getStringAttribute('user_name_method');
  }
  public set userNameMethod(value: string) {
    this._userNameMethod = value;
  }
  public resetUserNameMethod() {
    this._userNameMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameMethodInput() {
    return this._userNameMethod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      user_name: cdktf.stringToTerraform(this._userName),
      user_name_method: cdktf.stringToTerraform(this._userNameMethod),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_method: {
        value: cdktf.stringToHclTerraform(this._userNameMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
