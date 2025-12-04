// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate whether the CAM user can login to the web console or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#console_login CamUser#console_login}
  */
  readonly consoleLogin?: boolean | cdktf.IResolvable;
  /**
  * Country code of the phone number, for example: '86'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#country_code CamUser#country_code}
  */
  readonly countryCode?: string;
  /**
  * Email of the CAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#email CamUser#email}
  */
  readonly email?: string;
  /**
  * Indicate whether to force deletes the CAM user. If set false, the API secret key will be checked and failed when exists; otherwise the user will be deleted directly. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#force_delete CamUser#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#id CamUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the CAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#name CamUser#name}
  */
  readonly name: string;
  /**
  * Indicate whether the CAM user need to reset the password when first logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#need_reset_password CamUser#need_reset_password}
  */
  readonly needResetPassword?: boolean | cdktf.IResolvable;
  /**
  * The password of the CAM user. Password should be at least 8 characters and no more than 32 characters, includes uppercase letters, lowercase letters, numbers and special characters. Only required when `console_login` is true. If not set, a random password will be automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#password CamUser#password}
  */
  readonly password?: string;
  /**
  * Phone number of the CAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#phone_num CamUser#phone_num}
  */
  readonly phoneNum?: string;
  /**
  * Remark of the CAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#remark CamUser#remark}
  */
  readonly remark?: string;
  /**
  * A list of tags used to associate different resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#tags CamUser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Indicate whether to generate the API secret key or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#use_api CamUser#use_api}
  */
  readonly useApi?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user tencentcloud_cam_user}
*/
export class CamUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamUser to import
  * @param importFromId The id of the existing CamUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cam_user tencentcloud_cam_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamUserConfig
  */
  public constructor(scope: Construct, id: string, config: CamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_user',
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
    this._consoleLogin = config.consoleLogin;
    this._countryCode = config.countryCode;
    this._email = config.email;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._name = config.name;
    this._needResetPassword = config.needResetPassword;
    this._password = config.password;
    this._phoneNum = config.phoneNum;
    this._remark = config.remark;
    this._tags = config.tags;
    this._useApi = config.useApi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_login - computed: false, optional: true, required: false
  private _consoleLogin?: boolean | cdktf.IResolvable; 
  public get consoleLogin() {
    return this.getBooleanAttribute('console_login');
  }
  public set consoleLogin(value: boolean | cdktf.IResolvable) {
    this._consoleLogin = value;
  }
  public resetConsoleLogin() {
    this._consoleLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLoginInput() {
    return this._consoleLogin;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // need_reset_password - computed: false, optional: true, required: false
  private _needResetPassword?: boolean | cdktf.IResolvable; 
  public get needResetPassword() {
    return this.getBooleanAttribute('need_reset_password');
  }
  public set needResetPassword(value: boolean | cdktf.IResolvable) {
    this._needResetPassword = value;
  }
  public resetNeedResetPassword() {
    this._needResetPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needResetPasswordInput() {
    return this._needResetPassword;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // phone_num - computed: false, optional: true, required: false
  private _phoneNum?: string; 
  public get phoneNum() {
    return this.getStringAttribute('phone_num');
  }
  public set phoneNum(value: string) {
    this._phoneNum = value;
  }
  public resetPhoneNum() {
    this._phoneNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumInput() {
    return this._phoneNum;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getNumberAttribute('uin');
  }

  // use_api - computed: false, optional: true, required: false
  private _useApi?: boolean | cdktf.IResolvable; 
  public get useApi() {
    return this.getBooleanAttribute('use_api');
  }
  public set useApi(value: boolean | cdktf.IResolvable) {
    this._useApi = value;
  }
  public resetUseApi() {
    this._useApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useApiInput() {
    return this._useApi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_login: cdktf.booleanToTerraform(this._consoleLogin),
      country_code: cdktf.stringToTerraform(this._countryCode),
      email: cdktf.stringToTerraform(this._email),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      need_reset_password: cdktf.booleanToTerraform(this._needResetPassword),
      password: cdktf.stringToTerraform(this._password),
      phone_num: cdktf.stringToTerraform(this._phoneNum),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_api: cdktf.booleanToTerraform(this._useApi),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      console_login: {
        value: cdktf.booleanToHclTerraform(this._consoleLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_reset_password: {
        value: cdktf.booleanToHclTerraform(this._needResetPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_num: {
        value: cdktf.stringToHclTerraform(this._phoneNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_api: {
        value: cdktf.booleanToHclTerraform(this._useApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
