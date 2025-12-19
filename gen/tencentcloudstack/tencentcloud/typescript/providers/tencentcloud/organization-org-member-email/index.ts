// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgMemberEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * International region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#country_code OrganizationOrgMemberEmail#country_code}
  */
  readonly countryCode: string;
  /**
  * Email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#email OrganizationOrgMemberEmail#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#id OrganizationOrgMemberEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#member_uin OrganizationOrgMemberEmail#member_uin}
  */
  readonly memberUin: number;
  /**
  * Phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#phone OrganizationOrgMemberEmail#phone}
  */
  readonly phone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email tencentcloud_organization_org_member_email}
*/
export class OrganizationOrgMemberEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_member_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgMemberEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgMemberEmail to import
  * @param importFromId The id of the existing OrganizationOrgMemberEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgMemberEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_member_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_org_member_email tencentcloud_organization_org_member_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgMemberEmailConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgMemberEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_member_email',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countryCode = config.countryCode;
    this._email = config.email;
    this._id = config.id;
    this._memberUin = config.memberUin;
    this._phone = config.phone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_time - computed: true, optional: false, required: false
  public get applyTime() {
    return this.getStringAttribute('apply_time');
  }

  // bind_id - computed: true, optional: false, required: false
  public get bindId() {
    return this.getNumberAttribute('bind_id');
  }

  // bind_status - computed: true, optional: false, required: false
  public get bindStatus() {
    return this.getStringAttribute('bind_status');
  }

  // bind_time - computed: true, optional: false, required: false
  public get bindTime() {
    return this.getStringAttribute('bind_time');
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // member_uin - computed: false, optional: false, required: true
  private _memberUin?: number; 
  public get memberUin() {
    return this.getNumberAttribute('member_uin');
  }
  public set memberUin(value: number) {
    this._memberUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinInput() {
    return this._memberUin;
  }

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // phone_bind - computed: true, optional: false, required: false
  public get phoneBind() {
    return this.getNumberAttribute('phone_bind');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      country_code: cdktf.stringToTerraform(this._countryCode),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      member_uin: cdktf.numberToTerraform(this._memberUin),
      phone: cdktf.stringToTerraform(this._phone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uin: {
        value: cdktf.numberToHclTerraform(this._memberUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
