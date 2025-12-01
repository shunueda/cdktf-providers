// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AscmUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#cellphone_number AscmUser#cellphone_number}
  */
  readonly cellphoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#display_name AscmUser#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#email AscmUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#id AscmUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#login_name AscmUser#login_name}
  */
  readonly loginName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#login_policy_id AscmUser#login_policy_id}
  */
  readonly loginPolicyId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#mobile_nation_code AscmUser#mobile_nation_code}
  */
  readonly mobileNationCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#organization_id AscmUser#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#role_ids AscmUser#role_ids}
  */
  readonly roleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#telephone_number AscmUser#telephone_number}
  */
  readonly telephoneNumber?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user alibabacloudstack_ascm_user}
*/
export class AscmUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AscmUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AscmUser to import
  * @param importFromId The id of the existing AscmUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AscmUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ascm_user alibabacloudstack_ascm_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AscmUserConfig
  */
  public constructor(scope: Construct, id: string, config: AscmUserConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_user',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cellphoneNumber = config.cellphoneNumber;
    this._displayName = config.displayName;
    this._email = config.email;
    this._id = config.id;
    this._loginName = config.loginName;
    this._loginPolicyId = config.loginPolicyId;
    this._mobileNationCode = config.mobileNationCode;
    this._organizationId = config.organizationId;
    this._roleIds = config.roleIds;
    this._telephoneNumber = config.telephoneNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cellphone_number - computed: false, optional: false, required: true
  private _cellphoneNumber?: string; 
  public get cellphoneNumber() {
    return this.getStringAttribute('cellphone_number');
  }
  public set cellphoneNumber(value: string) {
    this._cellphoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cellphoneNumberInput() {
    return this._cellphoneNumber;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // init_password - computed: true, optional: false, required: false
  public get initPassword() {
    return this.getStringAttribute('init_password');
  }

  // login_name - computed: false, optional: false, required: true
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // login_policy_id - computed: false, optional: false, required: true
  private _loginPolicyId?: number; 
  public get loginPolicyId() {
    return this.getNumberAttribute('login_policy_id');
  }
  public set loginPolicyId(value: number) {
    this._loginPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPolicyIdInput() {
    return this._loginPolicyId;
  }

  // mobile_nation_code - computed: false, optional: false, required: true
  private _mobileNationCode?: string; 
  public get mobileNationCode() {
    return this.getStringAttribute('mobile_nation_code');
  }
  public set mobileNationCode(value: string) {
    this._mobileNationCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNationCodeInput() {
    return this._mobileNationCode;
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // role_ids - computed: true, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // telephone_number - computed: false, optional: true, required: false
  private _telephoneNumber?: string; 
  public get telephoneNumber() {
    return this.getStringAttribute('telephone_number');
  }
  public set telephoneNumber(value: string) {
    this._telephoneNumber = value;
  }
  public resetTelephoneNumber() {
    this._telephoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneNumberInput() {
    return this._telephoneNumber;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // user_uid - computed: true, optional: false, required: false
  public get userUid() {
    return this.getStringAttribute('user_uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cellphone_number: cdktf.stringToTerraform(this._cellphoneNumber),
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      login_name: cdktf.stringToTerraform(this._loginName),
      login_policy_id: cdktf.numberToTerraform(this._loginPolicyId),
      mobile_nation_code: cdktf.stringToTerraform(this._mobileNationCode),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
      telephone_number: cdktf.stringToTerraform(this._telephoneNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cellphone_number: {
        value: cdktf.stringToHclTerraform(this._cellphoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_policy_id: {
        value: cdktf.numberToHclTerraform(this._loginPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mobile_nation_code: {
        value: cdktf.stringToHclTerraform(this._mobileNationCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      telephone_number: {
        value: cdktf.stringToHclTerraform(this._telephoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
