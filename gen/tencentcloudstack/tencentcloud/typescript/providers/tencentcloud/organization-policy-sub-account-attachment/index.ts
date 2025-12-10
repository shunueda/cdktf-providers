// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPolicySubAccountAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment#id OrganizationPolicySubAccountAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization member uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment#member_uin OrganizationPolicySubAccountAttachment#member_uin}
  */
  readonly memberUin: number;
  /**
  * Organization administrator sub account uin list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment#org_sub_account_uin OrganizationPolicySubAccountAttachment#org_sub_account_uin}
  */
  readonly orgSubAccountUin: number;
  /**
  * Policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment#policy_id OrganizationPolicySubAccountAttachment#policy_id}
  */
  readonly policyId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment tencentcloud_organization_policy_sub_account_attachment}
*/
export class OrganizationPolicySubAccountAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_policy_sub_account_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPolicySubAccountAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPolicySubAccountAttachment to import
  * @param importFromId The id of the existing OrganizationPolicySubAccountAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPolicySubAccountAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_policy_sub_account_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_policy_sub_account_attachment tencentcloud_organization_policy_sub_account_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPolicySubAccountAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationPolicySubAccountAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_policy_sub_account_attachment',
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
    this._memberUin = config.memberUin;
    this._orgSubAccountUin = config.orgSubAccountUin;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member_uin: cdktf.numberToTerraform(this._memberUin),
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
      member_uin: {
        value: cdktf.numberToHclTerraform(this._memberUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
