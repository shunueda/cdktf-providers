// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickBiUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#account_id QuickBiUser#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#account_name QuickBiUser#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#admin_user QuickBiUser#admin_user}
  */
  readonly adminUser: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#auth_admin_user QuickBiUser#auth_admin_user}
  */
  readonly authAdminUser: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#id QuickBiUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#nick_name QuickBiUser#nick_name}
  */
  readonly nickName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#user_type QuickBiUser#user_type}
  */
  readonly userType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user alibabacloudstack_quick_bi_user}
*/
export class QuickBiUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_quick_bi_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickBiUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickBiUser to import
  * @param importFromId The id of the existing QuickBiUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickBiUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_quick_bi_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/quick_bi_user alibabacloudstack_quick_bi_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickBiUserConfig
  */
  public constructor(scope: Construct, id: string, config: QuickBiUserConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_quick_bi_user',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._accountName = config.accountName;
    this._adminUser = config.adminUser;
    this._authAdminUser = config.authAdminUser;
    this._id = config.id;
    this._nickName = config.nickName;
    this._userType = config.userType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // admin_user - computed: false, optional: false, required: true
  private _adminUser?: boolean | cdktf.IResolvable; 
  public get adminUser() {
    return this.getBooleanAttribute('admin_user');
  }
  public set adminUser(value: boolean | cdktf.IResolvable) {
    this._adminUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserInput() {
    return this._adminUser;
  }

  // auth_admin_user - computed: false, optional: false, required: true
  private _authAdminUser?: boolean | cdktf.IResolvable; 
  public get authAdminUser() {
    return this.getBooleanAttribute('auth_admin_user');
  }
  public set authAdminUser(value: boolean | cdktf.IResolvable) {
    this._authAdminUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authAdminUserInput() {
    return this._authAdminUser;
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

  // nick_name - computed: false, optional: false, required: true
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_name: cdktf.stringToTerraform(this._accountName),
      admin_user: cdktf.booleanToTerraform(this._adminUser),
      auth_admin_user: cdktf.booleanToTerraform(this._authAdminUser),
      id: cdktf.stringToTerraform(this._id),
      nick_name: cdktf.stringToTerraform(this._nickName),
      user_type: cdktf.stringToTerraform(this._userType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user: {
        value: cdktf.booleanToHclTerraform(this._adminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_admin_user: {
        value: cdktf.booleanToHclTerraform(this._authAdminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nick_name: {
        value: cdktf.stringToHclTerraform(this._nickName),
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
