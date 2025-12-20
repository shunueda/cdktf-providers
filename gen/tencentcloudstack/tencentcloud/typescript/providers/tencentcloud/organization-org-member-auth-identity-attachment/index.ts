// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgMemberAuthIdentityAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment#id OrganizationOrgMemberAuthIdentityAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity Id list. Up to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment#identity_ids OrganizationOrgMemberAuthIdentityAttachment#identity_ids}
  */
  readonly identityIds: number[];
  /**
  * Member Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment#member_uin OrganizationOrgMemberAuthIdentityAttachment#member_uin}
  */
  readonly memberUin: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment tencentcloud_organization_org_member_auth_identity_attachment}
*/
export class OrganizationOrgMemberAuthIdentityAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_member_auth_identity_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgMemberAuthIdentityAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgMemberAuthIdentityAttachment to import
  * @param importFromId The id of the existing OrganizationOrgMemberAuthIdentityAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgMemberAuthIdentityAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_member_auth_identity_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/organization_org_member_auth_identity_attachment tencentcloud_organization_org_member_auth_identity_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgMemberAuthIdentityAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgMemberAuthIdentityAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_member_auth_identity_attachment',
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
    this._id = config.id;
    this._identityIds = config.identityIds;
    this._memberUin = config.memberUin;
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

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: number[]; 
  public get identityIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('identity_ids')));
  }
  public set identityIds(value: number[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identity_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._identityIds),
      member_uin: cdktf.numberToTerraform(this._memberUin),
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
      identity_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._identityIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      member_uin: {
        value: cdktf.numberToHclTerraform(this._memberUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
