// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#id DlcUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User alias, and its characters are less than 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#user_alias DlcUser#user_alias}
  */
  readonly userAlias?: string;
  /**
  * User description, which can make it easy to identify different users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#user_description DlcUser#user_description}
  */
  readonly userDescription?: string;
  /**
  * Sub-user UIN that needs to be granted permissions. It can be checked through the upper right corner of Tencent Cloud Console -> Account Information -> Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#user_id DlcUser#user_id}
  */
  readonly userId: string;
  /**
  * Types of users. ADMIN: administrators; COMMON: general users. When the type of user is administrator, the collections of permissions and bound working groups cannot be set. Administrators own all the permissions by default. If the parameter is not filled in, it will be COMMON by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#user_type DlcUser#user_type}
  */
  readonly userType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user tencentcloud_dlc_user}
*/
export class DlcUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcUser to import
  * @param importFromId The id of the existing DlcUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dlc_user tencentcloud_dlc_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcUserConfig
  */
  public constructor(scope: Construct, id: string, config: DlcUserConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_user',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._userAlias = config.userAlias;
    this._userDescription = config.userDescription;
    this._userId = config.userId;
    this._userType = config.userType;
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

  // user_alias - computed: false, optional: true, required: false
  private _userAlias?: string; 
  public get userAlias() {
    return this.getStringAttribute('user_alias');
  }
  public set userAlias(value: string) {
    this._userAlias = value;
  }
  public resetUserAlias() {
    this._userAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAliasInput() {
    return this._userAlias;
  }

  // user_description - computed: false, optional: true, required: false
  private _userDescription?: string; 
  public get userDescription() {
    return this.getStringAttribute('user_description');
  }
  public set userDescription(value: string) {
    this._userDescription = value;
  }
  public resetUserDescription() {
    this._userDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDescriptionInput() {
    return this._userDescription;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // work_group_ids - computed: true, optional: false, required: false
  public get workGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('work_group_ids')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_alias: cdktf.stringToTerraform(this._userAlias),
      user_description: cdktf.stringToTerraform(this._userDescription),
      user_id: cdktf.stringToTerraform(this._userId),
      user_type: cdktf.stringToTerraform(this._userType),
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
      user_alias: {
        value: cdktf.stringToHclTerraform(this._userAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_description: {
        value: cdktf.stringToHclTerraform(this._userDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
