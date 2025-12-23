// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgMemberPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Notes.The maximum length is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#description OrganizationOrgMemberPolicyAttachment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#id OrganizationOrgMemberPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization identity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#identity_id OrganizationOrgMemberPolicyAttachment#identity_id}
  */
  readonly identityId: number;
  /**
  * Member Uin list. Up to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#member_uins OrganizationOrgMemberPolicyAttachment#member_uins}
  */
  readonly memberUins: number[];
  /**
  * Policy name.The maximum length is 128 characters, supporting English letters, numbers, and symbols +=,.@_-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#policy_name OrganizationOrgMemberPolicyAttachment#policy_name}
  */
  readonly policyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment tencentcloud_organization_org_member_policy_attachment}
*/
export class OrganizationOrgMemberPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_member_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgMemberPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgMemberPolicyAttachment to import
  * @param importFromId The id of the existing OrganizationOrgMemberPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgMemberPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_member_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/organization_org_member_policy_attachment tencentcloud_organization_org_member_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgMemberPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgMemberPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_member_policy_attachment',
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
    this._description = config.description;
    this._id = config.id;
    this._identityId = config.identityId;
    this._memberUins = config.memberUins;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: number; 
  public get identityId() {
    return this.getNumberAttribute('identity_id');
  }
  public set identityId(value: number) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // member_uins - computed: false, optional: false, required: true
  private _memberUins?: number[]; 
  public get memberUins() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('member_uins')));
  }
  public set memberUins(value: number[]) {
    this._memberUins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinsInput() {
    return this._memberUins;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.numberToTerraform(this._identityId),
      member_uins: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberUins),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identity_id: {
        value: cdktf.numberToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_uins: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberUins),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
