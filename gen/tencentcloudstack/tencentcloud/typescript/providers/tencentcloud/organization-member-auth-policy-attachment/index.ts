// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationMemberAuthPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment#id OrganizationMemberAuthPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization administrator sub-account Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment#org_sub_account_uin OrganizationMemberAuthPolicyAttachment#org_sub_account_uin}
  */
  readonly orgSubAccountUin: number;
  /**
  * Pilicy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment#policy_id OrganizationMemberAuthPolicyAttachment#policy_id}
  */
  readonly policyId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment tencentcloud_organization_member_auth_policy_attachment}
*/
export class OrganizationMemberAuthPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_member_auth_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationMemberAuthPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationMemberAuthPolicyAttachment to import
  * @param importFromId The id of the existing OrganizationMemberAuthPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationMemberAuthPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_member_auth_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_member_auth_policy_attachment tencentcloud_organization_member_auth_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationMemberAuthPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationMemberAuthPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_member_auth_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._orgSubAccountUin = config.orgSubAccountUin;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_type - computed: true, optional: false, required: false
  public get bindType() {
    return this.getNumberAttribute('bind_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // identity_id - computed: true, optional: false, required: false
  public get identityId() {
    return this.getNumberAttribute('identity_id');
  }

  // identity_role_alias_name - computed: true, optional: false, required: false
  public get identityRoleAliasName() {
    return this.getStringAttribute('identity_role_alias_name');
  }

  // identity_role_name - computed: true, optional: false, required: false
  public get identityRoleName() {
    return this.getStringAttribute('identity_role_name');
  }

  // member_name - computed: true, optional: false, required: false
  public get memberName() {
    return this.getStringAttribute('member_name');
  }

  // member_uin - computed: true, optional: false, required: false
  public get memberUin() {
    return this.getNumberAttribute('member_uin');
  }

  // org_sub_account_name - computed: true, optional: false, required: false
  public get orgSubAccountName() {
    return this.getStringAttribute('org_sub_account_name');
  }

  // org_sub_account_uin - computed: false, optional: false, required: true
  private _orgSubAccountUin?: number; 
  public get orgSubAccountUin() {
    return this.getNumberAttribute('org_sub_account_uin');
  }
  public set orgSubAccountUin(value: number) {
    this._orgSubAccountUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgSubAccountUinInput() {
    return this._orgSubAccountUin;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_sub_account_uin: cdktf.numberToTerraform(this._orgSubAccountUin),
      policy_id: cdktf.numberToTerraform(this._policyId),
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
      org_sub_account_uin: {
        value: cdktf.numberToHclTerraform(this._orgSubAccountUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
