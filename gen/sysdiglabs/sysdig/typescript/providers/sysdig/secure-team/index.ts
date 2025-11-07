// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#all_zones SecureTeam#all_zones}
  */
  readonly allZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#can_use_agent_cli SecureTeam#can_use_agent_cli}
  */
  readonly canUseAgentCli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#can_use_rapid_response SecureTeam#can_use_rapid_response}
  */
  readonly canUseRapidResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#default_team SecureTeam#default_team}
  */
  readonly defaultTeam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#description SecureTeam#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#filter SecureTeam#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#id SecureTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#name SecureTeam#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#scope_by SecureTeam#scope_by}
  */
  readonly scopeBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#theme SecureTeam#theme}
  */
  readonly theme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#use_sysdig_capture SecureTeam#use_sysdig_capture}
  */
  readonly useSysdigCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#zone_ids SecureTeam#zone_ids}
  */
  readonly zoneIds?: number[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#timeouts SecureTeam#timeouts}
  */
  readonly timeouts?: SecureTeamTimeouts;
  /**
  * user_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#user_roles SecureTeam#user_roles}
  */
  readonly userRoles?: SecureTeamUserRoles[] | cdktf.IResolvable;
}
export interface SecureTeamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#create SecureTeam#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#delete SecureTeam#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#read SecureTeam#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#update SecureTeam#update}
  */
  readonly update?: string;
}

export function secureTeamTimeoutsToTerraform(struct?: SecureTeamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secureTeamTimeoutsToHclTerraform(struct?: SecureTeamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureTeamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureTeamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureTeamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface SecureTeamUserRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#email SecureTeam#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#role SecureTeam#role}
  */
  readonly role?: string;
}

export function secureTeamUserRolesToTerraform(struct?: SecureTeamUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function secureTeamUserRolesToHclTerraform(struct?: SecureTeamUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureTeamUserRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecureTeamUserRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureTeamUserRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._role = value.role;
    }
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SecureTeamUserRolesList extends cdktf.ComplexList {
  public internalValue? : SecureTeamUserRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecureTeamUserRolesOutputReference {
    return new SecureTeamUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team sysdig_secure_team}
*/
export class SecureTeam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureTeam to import
  * @param importFromId The id of the existing SecureTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_team sysdig_secure_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureTeamConfig
  */
  public constructor(scope: Construct, id: string, config: SecureTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_team',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allZones = config.allZones;
    this._canUseAgentCli = config.canUseAgentCli;
    this._canUseRapidResponse = config.canUseRapidResponse;
    this._defaultTeam = config.defaultTeam;
    this._description = config.description;
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._scopeBy = config.scopeBy;
    this._theme = config.theme;
    this._useSysdigCapture = config.useSysdigCapture;
    this._zoneIds = config.zoneIds;
    this._timeouts.internalValue = config.timeouts;
    this._userRoles.internalValue = config.userRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_zones - computed: false, optional: true, required: false
  private _allZones?: boolean | cdktf.IResolvable; 
  public get allZones() {
    return this.getBooleanAttribute('all_zones');
  }
  public set allZones(value: boolean | cdktf.IResolvable) {
    this._allZones = value;
  }
  public resetAllZones() {
    this._allZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allZonesInput() {
    return this._allZones;
  }

  // can_use_agent_cli - computed: false, optional: true, required: false
  private _canUseAgentCli?: boolean | cdktf.IResolvable; 
  public get canUseAgentCli() {
    return this.getBooleanAttribute('can_use_agent_cli');
  }
  public set canUseAgentCli(value: boolean | cdktf.IResolvable) {
    this._canUseAgentCli = value;
  }
  public resetCanUseAgentCli() {
    this._canUseAgentCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseAgentCliInput() {
    return this._canUseAgentCli;
  }

  // can_use_rapid_response - computed: false, optional: true, required: false
  private _canUseRapidResponse?: boolean | cdktf.IResolvable; 
  public get canUseRapidResponse() {
    return this.getBooleanAttribute('can_use_rapid_response');
  }
  public set canUseRapidResponse(value: boolean | cdktf.IResolvable) {
    this._canUseRapidResponse = value;
  }
  public resetCanUseRapidResponse() {
    this._canUseRapidResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseRapidResponseInput() {
    return this._canUseRapidResponse;
  }

  // default_team - computed: false, optional: true, required: false
  private _defaultTeam?: boolean | cdktf.IResolvable; 
  public get defaultTeam() {
    return this.getBooleanAttribute('default_team');
  }
  public set defaultTeam(value: boolean | cdktf.IResolvable) {
    this._defaultTeam = value;
  }
  public resetDefaultTeam() {
    this._defaultTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamInput() {
    return this._defaultTeam;
  }

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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // scope_by - computed: false, optional: true, required: false
  private _scopeBy?: string; 
  public get scopeBy() {
    return this.getStringAttribute('scope_by');
  }
  public set scopeBy(value: string) {
    this._scopeBy = value;
  }
  public resetScopeBy() {
    this._scopeBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeByInput() {
    return this._scopeBy;
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

  // use_sysdig_capture - computed: false, optional: true, required: false
  private _useSysdigCapture?: boolean | cdktf.IResolvable; 
  public get useSysdigCapture() {
    return this.getBooleanAttribute('use_sysdig_capture');
  }
  public set useSysdigCapture(value: boolean | cdktf.IResolvable) {
    this._useSysdigCapture = value;
  }
  public resetUseSysdigCapture() {
    this._useSysdigCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSysdigCaptureInput() {
    return this._useSysdigCapture;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // zone_ids - computed: false, optional: true, required: false
  private _zoneIds?: number[]; 
  public get zoneIds() {
    return this.getNumberListAttribute('zone_ids');
  }
  public set zoneIds(value: number[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureTeamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureTeamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_roles - computed: false, optional: true, required: false
  private _userRoles = new SecureTeamUserRolesList(this, "user_roles", true);
  public get userRoles() {
    return this._userRoles;
  }
  public putUserRoles(value: SecureTeamUserRoles[] | cdktf.IResolvable) {
    this._userRoles.internalValue = value;
  }
  public resetUserRoles() {
    this._userRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRolesInput() {
    return this._userRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_zones: cdktf.booleanToTerraform(this._allZones),
      can_use_agent_cli: cdktf.booleanToTerraform(this._canUseAgentCli),
      can_use_rapid_response: cdktf.booleanToTerraform(this._canUseRapidResponse),
      default_team: cdktf.booleanToTerraform(this._defaultTeam),
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope_by: cdktf.stringToTerraform(this._scopeBy),
      theme: cdktf.stringToTerraform(this._theme),
      use_sysdig_capture: cdktf.booleanToTerraform(this._useSysdigCapture),
      zone_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._zoneIds),
      timeouts: secureTeamTimeoutsToTerraform(this._timeouts.internalValue),
      user_roles: cdktf.listMapper(secureTeamUserRolesToTerraform, true)(this._userRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_zones: {
        value: cdktf.booleanToHclTerraform(this._allZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_agent_cli: {
        value: cdktf.booleanToHclTerraform(this._canUseAgentCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_rapid_response: {
        value: cdktf.booleanToHclTerraform(this._canUseRapidResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_team: {
        value: cdktf.booleanToHclTerraform(this._defaultTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_by: {
        value: cdktf.stringToHclTerraform(this._scopeBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sysdig_capture: {
        value: cdktf.booleanToHclTerraform(this._useSysdigCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      timeouts: {
        value: secureTeamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureTeamTimeouts",
      },
      user_roles: {
        value: cdktf.listMapperHcl(secureTeamUserRolesToHclTerraform, true)(this._userRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecureTeamUserRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
