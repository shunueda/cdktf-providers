// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication method, 0 - local, 1 - LDAP, 2 - OAuth. If not passed, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#auth_type DasbUser#auth_type}
  */
  readonly authType?: number;
  /**
  * Department ID, such as: 1.2.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#department_id DasbUser#department_id}
  */
  readonly departmentId?: string;
  /**
  * Email. Please provide at least one of `phone` or `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#email DasbUser#email}
  */
  readonly email?: string;
  /**
  * The set of user group IDs to which it belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#group_id_set DasbUser#group_id_set}
  */
  readonly groupIdSet?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#id DasbUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter it in the format of country area code|mobile phone number. For example: +86|***********, +852|xxxxxxxx. Please provide at least one of `phone` or `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#phone DasbUser#phone}
  */
  readonly phone?: string;
  /**
  * Real name, maximum length 20 characters, cannot contain blank characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#real_name DasbUser#real_name}
  */
  readonly realName: string;
  /**
  * Username, 3-20 characters, must start with an English letter and cannot contain characters other than `letters`, `numbers`, `.`, `_`, `-`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#user_name DasbUser#user_name}
  */
  readonly userName: string;
  /**
  * User effective time, such as: 2021-09-22T00:00:00+00:00If the effective and expiry time are not filled in, the user will be valid for a long time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#validate_from DasbUser#validate_from}
  */
  readonly validateFrom?: string;
  /**
  * Access time period limit, a string composed of 0 and 1, length 168 (7 * 24), representing the time period the user is allowed to access in a week. The Nth character in the string represents the Nth hour of the week, 0 - means access is not allowed, 1 - means access is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#validate_time DasbUser#validate_time}
  */
  readonly validateTime?: string;
  /**
  * User expiration time, such as: 2021-09-23T00:00:00+00:00If the effective and expiry time are not filled in, the user will be valid for a long time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#validate_to DasbUser#validate_to}
  */
  readonly validateTo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user tencentcloud_dasb_user}
*/
export class DasbUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbUser to import
  * @param importFromId The id of the existing DasbUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dasb_user tencentcloud_dasb_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbUserConfig
  */
  public constructor(scope: Construct, id: string, config: DasbUserConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_user',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._departmentId = config.departmentId;
    this._email = config.email;
    this._groupIdSet = config.groupIdSet;
    this._id = config.id;
    this._phone = config.phone;
    this._realName = config.realName;
    this._userName = config.userName;
    this._validateFrom = config.validateFrom;
    this._validateTime = config.validateTime;
    this._validateTo = config.validateTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: true, required: false
  private _authType?: number; 
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }
  public set authType(value: number) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // department_id - computed: false, optional: true, required: false
  private _departmentId?: string; 
  public get departmentId() {
    return this.getStringAttribute('department_id');
  }
  public set departmentId(value: string) {
    this._departmentId = value;
  }
  public resetDepartmentId() {
    this._departmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentIdInput() {
    return this._departmentId;
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

  // group_id_set - computed: true, optional: true, required: false
  private _groupIdSet?: number[]; 
  public get groupIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_id_set')));
  }
  public set groupIdSet(value: number[]) {
    this._groupIdSet = value;
  }
  public resetGroupIdSet() {
    this._groupIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdSetInput() {
    return this._groupIdSet;
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // real_name - computed: false, optional: false, required: true
  private _realName?: string; 
  public get realName() {
    return this.getStringAttribute('real_name');
  }
  public set realName(value: string) {
    this._realName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realNameInput() {
    return this._realName;
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

  // validate_from - computed: true, optional: true, required: false
  private _validateFrom?: string; 
  public get validateFrom() {
    return this.getStringAttribute('validate_from');
  }
  public set validateFrom(value: string) {
    this._validateFrom = value;
  }
  public resetValidateFrom() {
    this._validateFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateFromInput() {
    return this._validateFrom;
  }

  // validate_time - computed: false, optional: true, required: false
  private _validateTime?: string; 
  public get validateTime() {
    return this.getStringAttribute('validate_time');
  }
  public set validateTime(value: string) {
    this._validateTime = value;
  }
  public resetValidateTime() {
    this._validateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateTimeInput() {
    return this._validateTime;
  }

  // validate_to - computed: true, optional: true, required: false
  private _validateTo?: string; 
  public get validateTo() {
    return this.getStringAttribute('validate_to');
  }
  public set validateTo(value: string) {
    this._validateTo = value;
  }
  public resetValidateTo() {
    this._validateTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateToInput() {
    return this._validateTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.numberToTerraform(this._authType),
      department_id: cdktf.stringToTerraform(this._departmentId),
      email: cdktf.stringToTerraform(this._email),
      group_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIdSet),
      id: cdktf.stringToTerraform(this._id),
      phone: cdktf.stringToTerraform(this._phone),
      real_name: cdktf.stringToTerraform(this._realName),
      user_name: cdktf.stringToTerraform(this._userName),
      validate_from: cdktf.stringToTerraform(this._validateFrom),
      validate_time: cdktf.stringToTerraform(this._validateTime),
      validate_to: cdktf.stringToTerraform(this._validateTo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.numberToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      department_id: {
        value: cdktf.stringToHclTerraform(this._departmentId),
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
      group_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_name: {
        value: cdktf.stringToHclTerraform(this._realName),
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
      validate_from: {
        value: cdktf.stringToHclTerraform(this._validateFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_time: {
        value: cdktf.stringToHclTerraform(this._validateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_to: {
        value: cdktf.stringToHclTerraform(this._validateTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
