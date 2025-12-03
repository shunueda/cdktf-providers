// https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * An email address for the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#email Team#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignores team members that have been added to team by [Team Sync](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-team-sync/).
  * Team Sync can be provisioned using [grafana_team_external_group resource](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/team_external_group).
  *  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#ignore_externally_synced_members Team#ignore_externally_synced_members}
  */
  readonly ignoreExternallySyncedMembers?: boolean | cdktf.IResolvable;
  /**
  * A set of email addresses corresponding to users who should be given membership
  * to the team. Note: users specified here must already exist in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#members Team#members}
  */
  readonly members?: string[];
  /**
  * The display name for the Grafana team created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#org_id Team#org_id}
  */
  readonly orgId?: string;
  /**
  * preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#preferences Team#preferences}
  */
  readonly preferences?: TeamPreferences;
  /**
  * team_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#team_sync Team#team_sync}
  */
  readonly teamSync?: TeamTeamSync;
}
export interface TeamPreferences {
  /**
  * The UID of the dashboard to display when a team member logs in. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#home_dashboard_uid Team#home_dashboard_uid}
  */
  readonly homeDashboardUid?: string;
  /**
  * The default theme for this team. Available themes are `light`, `dark`, `system`, or an empty string for the default theme. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#theme Team#theme}
  */
  readonly theme?: string;
  /**
  * The default timezone for this team. Available values are `utc`, `browser`, or an empty string for the default. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#timezone Team#timezone}
  */
  readonly timezone?: string;
  /**
  * The default week start day for this team. Available values are `sunday`, `monday`, `saturday`, or an empty string for the default. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#week_start Team#week_start}
  */
  readonly weekStart?: string;
}

export function teamPreferencesToTerraform(struct?: TeamPreferencesOutputReference | TeamPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_dashboard_uid: cdktf.stringToTerraform(struct!.homeDashboardUid),
    theme: cdktf.stringToTerraform(struct!.theme),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    week_start: cdktf.stringToTerraform(struct!.weekStart),
  }
}


export function teamPreferencesToHclTerraform(struct?: TeamPreferencesOutputReference | TeamPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_dashboard_uid: {
      value: cdktf.stringToHclTerraform(struct!.homeDashboardUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    theme: {
      value: cdktf.stringToHclTerraform(struct!.theme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_start: {
      value: cdktf.stringToHclTerraform(struct!.weekStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeDashboardUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDashboardUid = this._homeDashboardUid;
    }
    if (this._theme !== undefined) {
      hasAnyValues = true;
      internalValueResult.theme = this._theme;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._weekStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekStart = this._weekStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homeDashboardUid = undefined;
      this._theme = undefined;
      this._timezone = undefined;
      this._weekStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._homeDashboardUid = value.homeDashboardUid;
      this._theme = value.theme;
      this._timezone = value.timezone;
      this._weekStart = value.weekStart;
    }
  }

  // home_dashboard_uid - computed: false, optional: true, required: false
  private _homeDashboardUid?: string; 
  public get homeDashboardUid() {
    return this.getStringAttribute('home_dashboard_uid');
  }
  public set homeDashboardUid(value: string) {
    this._homeDashboardUid = value;
  }
  public resetHomeDashboardUid() {
    this._homeDashboardUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDashboardUidInput() {
    return this._homeDashboardUid;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }
}
export interface TeamTeamSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#groups Team#groups}
  */
  readonly groups?: string[];
}

export function teamTeamSyncToTerraform(struct?: TeamTeamSyncOutputReference | TeamTeamSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
  }
}


export function teamTeamSyncToHclTerraform(struct?: TeamTeamSyncOutputReference | TeamTeamSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamTeamSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamTeamSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamTeamSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team grafana_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.21.0/docs/resources/team grafana_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_team',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.21.0',
        providerVersionConstraint: '4.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._ignoreExternallySyncedMembers = config.ignoreExternallySyncedMembers;
    this._members = config.members;
    this._name = config.name;
    this._orgId = config.orgId;
    this._preferences.internalValue = config.preferences;
    this._teamSync.internalValue = config.teamSync;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ignore_externally_synced_members - computed: false, optional: true, required: false
  private _ignoreExternallySyncedMembers?: boolean | cdktf.IResolvable; 
  public get ignoreExternallySyncedMembers() {
    return this.getBooleanAttribute('ignore_externally_synced_members');
  }
  public set ignoreExternallySyncedMembers(value: boolean | cdktf.IResolvable) {
    this._ignoreExternallySyncedMembers = value;
  }
  public resetIgnoreExternallySyncedMembers() {
    this._ignoreExternallySyncedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExternallySyncedMembersInput() {
    return this._ignoreExternallySyncedMembers;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }

  // team_uid - computed: true, optional: false, required: false
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new TeamPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: TeamPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }

  // team_sync - computed: false, optional: true, required: false
  private _teamSync = new TeamTeamSyncOutputReference(this, "team_sync");
  public get teamSync() {
    return this._teamSync;
  }
  public putTeamSync(value: TeamTeamSync) {
    this._teamSync.internalValue = value;
  }
  public resetTeamSync() {
    this._teamSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSyncInput() {
    return this._teamSync.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      ignore_externally_synced_members: cdktf.booleanToTerraform(this._ignoreExternallySyncedMembers),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      preferences: teamPreferencesToTerraform(this._preferences.internalValue),
      team_sync: teamTeamSyncToTerraform(this._teamSync.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ignore_externally_synced_members: {
        value: cdktf.booleanToHclTerraform(this._ignoreExternallySyncedMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferences: {
        value: teamPreferencesToHclTerraform(this._preferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamPreferencesList",
      },
      team_sync: {
        value: teamTeamSyncToHclTerraform(this._teamSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamTeamSyncList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
