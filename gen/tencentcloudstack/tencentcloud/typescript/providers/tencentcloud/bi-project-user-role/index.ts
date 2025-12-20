// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiProjectUserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mobile area code(Note: This field may return null, indicating that no valid value can be obtained).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#area_code BiProjectUserRole#area_code}
  */
  readonly areaCode: string;
  /**
  * E-mail(Note: This field may return null, indicating that no valid value can be obtained).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#email BiProjectUserRole#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#id BiProjectUserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Phone number(Note: This field may return null, indicating that no valid value can be obtained).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#phone_number BiProjectUserRole#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#project_id BiProjectUserRole#project_id}
  */
  readonly projectId?: number;
  /**
  * Role id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#role_id_list BiProjectUserRole#role_id_list}
  */
  readonly roleIdList?: number[];
  /**
  * User id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#user_id BiProjectUserRole#user_id}
  */
  readonly userId: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#user_name BiProjectUserRole#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role tencentcloud_bi_project_user_role}
*/
export class BiProjectUserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_project_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiProjectUserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiProjectUserRole to import
  * @param importFromId The id of the existing BiProjectUserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiProjectUserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_project_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bi_project_user_role tencentcloud_bi_project_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiProjectUserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: BiProjectUserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_project_user_role',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaCode = config.areaCode;
    this._email = config.email;
    this._id = config.id;
    this._phoneNumber = config.phoneNumber;
    this._projectId = config.projectId;
    this._roleIdList = config.roleIdList;
    this._userId = config.userId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_code - computed: false, optional: false, required: true
  private _areaCode?: string; 
  public get areaCode() {
    return this.getStringAttribute('area_code');
  }
  public set areaCode(value: string) {
    this._areaCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCodeInput() {
    return this._areaCode;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // role_id_list - computed: false, optional: true, required: false
  private _roleIdList?: number[]; 
  public get roleIdList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('role_id_list')));
  }
  public set roleIdList(value: number[]) {
    this._roleIdList = value;
  }
  public resetRoleIdList() {
    this._roleIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdListInput() {
    return this._roleIdList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_code: cdktf.stringToTerraform(this._areaCode),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      project_id: cdktf.numberToTerraform(this._projectId),
      role_id_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roleIdList),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_code: {
        value: cdktf.stringToHclTerraform(this._areaCode),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_id_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roleIdList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
