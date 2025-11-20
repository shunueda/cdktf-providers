// https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserLifecycleRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to take on inactive users (disable or delete)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#action UserLifecycleRule#action}
  */
  readonly action?: string;
  /**
  * User authentication method for which the rule will apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#authentication_method UserLifecycleRule#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Array of Group IDs to which the rule applies. If empty or not set, the rule applies to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#group_ids UserLifecycleRule#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * Number of days of inactivity before the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#inactivity_days UserLifecycleRule#inactivity_days}
  */
  readonly inactivityDays?: number;
  /**
  * If true, the rule will apply to folder admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#include_folder_admins UserLifecycleRule#include_folder_admins}
  */
  readonly includeFolderAdmins?: boolean | cdktf.IResolvable;
  /**
  * If true, the rule will apply to site admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#include_site_admins UserLifecycleRule#include_site_admins}
  */
  readonly includeSiteAdmins?: boolean | cdktf.IResolvable;
  /**
  * User Lifecycle Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#name UserLifecycleRule#name}
  */
  readonly name?: string;
  /**
  * If provided, only users belonging to Partners with this tag at the Partner level will be affected by the rule. Tags must only contain lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#partner_tag UserLifecycleRule#partner_tag}
  */
  readonly partnerTag?: string;
  /**
  * State of the users to apply the rule to (inactive or disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#user_state UserLifecycleRule#user_state}
  */
  readonly userState?: string;
  /**
  * If provided, only users with this tag will be affected by the rule. Tags must only contain lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#user_tag UserLifecycleRule#user_tag}
  */
  readonly userTag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule files_user_lifecycle_rule}
*/
export class UserLifecycleRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_user_lifecycle_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserLifecycleRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserLifecycleRule to import
  * @param importFromId The id of the existing UserLifecycleRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserLifecycleRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_user_lifecycle_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.391/docs/resources/user_lifecycle_rule files_user_lifecycle_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserLifecycleRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserLifecycleRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_user_lifecycle_rule',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.391',
        providerVersionConstraint: '0.1.391'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._authenticationMethod = config.authenticationMethod;
    this._groupIds = config.groupIds;
    this._inactivityDays = config.inactivityDays;
    this._includeFolderAdmins = config.includeFolderAdmins;
    this._includeSiteAdmins = config.includeSiteAdmins;
    this._name = config.name;
    this._partnerTag = config.partnerTag;
    this._userState = config.userState;
    this._userTag = config.userTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: number[]; 
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inactivity_days - computed: true, optional: true, required: false
  private _inactivityDays?: number; 
  public get inactivityDays() {
    return this.getNumberAttribute('inactivity_days');
  }
  public set inactivityDays(value: number) {
    this._inactivityDays = value;
  }
  public resetInactivityDays() {
    this._inactivityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityDaysInput() {
    return this._inactivityDays;
  }

  // include_folder_admins - computed: true, optional: true, required: false
  private _includeFolderAdmins?: boolean | cdktf.IResolvable; 
  public get includeFolderAdmins() {
    return this.getBooleanAttribute('include_folder_admins');
  }
  public set includeFolderAdmins(value: boolean | cdktf.IResolvable) {
    this._includeFolderAdmins = value;
  }
  public resetIncludeFolderAdmins() {
    this._includeFolderAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFolderAdminsInput() {
    return this._includeFolderAdmins;
  }

  // include_site_admins - computed: true, optional: true, required: false
  private _includeSiteAdmins?: boolean | cdktf.IResolvable; 
  public get includeSiteAdmins() {
    return this.getBooleanAttribute('include_site_admins');
  }
  public set includeSiteAdmins(value: boolean | cdktf.IResolvable) {
    this._includeSiteAdmins = value;
  }
  public resetIncludeSiteAdmins() {
    this._includeSiteAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSiteAdminsInput() {
    return this._includeSiteAdmins;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partner_tag - computed: true, optional: true, required: false
  private _partnerTag?: string; 
  public get partnerTag() {
    return this.getStringAttribute('partner_tag');
  }
  public set partnerTag(value: string) {
    this._partnerTag = value;
  }
  public resetPartnerTag() {
    this._partnerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerTagInput() {
    return this._partnerTag;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // user_state - computed: true, optional: true, required: false
  private _userState?: string; 
  public get userState() {
    return this.getStringAttribute('user_state');
  }
  public set userState(value: string) {
    this._userState = value;
  }
  public resetUserState() {
    this._userState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userStateInput() {
    return this._userState;
  }

  // user_tag - computed: true, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIds),
      inactivity_days: cdktf.numberToTerraform(this._inactivityDays),
      include_folder_admins: cdktf.booleanToTerraform(this._includeFolderAdmins),
      include_site_admins: cdktf.booleanToTerraform(this._includeSiteAdmins),
      name: cdktf.stringToTerraform(this._name),
      partner_tag: cdktf.stringToTerraform(this._partnerTag),
      user_state: cdktf.stringToTerraform(this._userState),
      user_tag: cdktf.stringToTerraform(this._userTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      inactivity_days: {
        value: cdktf.numberToHclTerraform(this._inactivityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_folder_admins: {
        value: cdktf.booleanToHclTerraform(this._includeFolderAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_site_admins: {
        value: cdktf.booleanToHclTerraform(this._includeSiteAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_tag: {
        value: cdktf.stringToHclTerraform(this._partnerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_state: {
        value: cdktf.stringToHclTerraform(this._userState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
