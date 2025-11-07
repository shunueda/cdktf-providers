// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of the group's avatar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#avatar_url Group#avatar_url}
  */
  readonly avatarUrl?: string;
  /**
  * The display name of the group. Defaults to the group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#display_name Group#display_name}
  */
  readonly displayName?: string;
  /**
  * Members of the group, by ID. If `null`, members will not be added or removed by Terraform. To have a group resource with unmanaged members, but be able to read the members in Terraform, use `data.coderd_group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#members Group#members}
  */
  readonly members?: string[];
  /**
  * The unique name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * The organization ID that the group belongs to. Defaults to the provider default organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#organization_id Group#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The number of quota credits to allocate to each user in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#quota_allowance Group#quota_allowance}
  */
  readonly quotaAllowance?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group coderd_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/group coderd_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_group',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatarUrl = config.avatarUrl;
    this._displayName = config.displayName;
    this._members = config.members;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._quotaAllowance = config.quotaAllowance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: true, required: false
  private _avatarUrl?: string; 
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }
  public set avatarUrl(value: string) {
    this._avatarUrl = value;
  }
  public resetAvatarUrl() {
    this._avatarUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUrlInput() {
    return this._avatarUrl;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // quota_allowance - computed: true, optional: true, required: false
  private _quotaAllowance?: number; 
  public get quotaAllowance() {
    return this.getNumberAttribute('quota_allowance');
  }
  public set quotaAllowance(value: number) {
    this._quotaAllowance = value;
  }
  public resetQuotaAllowance() {
    this._quotaAllowance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaAllowanceInput() {
    return this._quotaAllowance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatar_url: cdktf.stringToTerraform(this._avatarUrl),
      display_name: cdktf.stringToTerraform(this._displayName),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      quota_allowance: cdktf.numberToTerraform(this._quotaAllowance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar_url: {
        value: cdktf.stringToHclTerraform(this._avatarUrl),
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
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      quota_allowance: {
        value: cdktf.numberToHclTerraform(this._quotaAllowance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
