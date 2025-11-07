// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Checks if only application centic page is needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#allow_application_only Mpsgroup#allow_application_only}
  */
  readonly allowApplicationOnly?: boolean | cdktf.IResolvable;
  /**
  * All Application names that are part of this group.This includes selected appnames as well as applications which are result of defined regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#application_names Mpsgroup#application_names}
  */
  readonly applicationNames?: string[];
  /**
  * Apply for all bound entities (TRUE|FALSE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#apply_all_bound_entities Mpsgroup#apply_all_bound_entities}
  */
  readonly applyAllBoundEntities?: boolean | cdktf.IResolvable;
  /**
  * Assign All Applications (YES|NO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#assign_all_apps Mpsgroup#assign_all_apps}
  */
  readonly assignAllApps?: boolean | cdktf.IResolvable;
  /**
  * Assign All Autoscale groups (YES|NO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#assign_all_autoscale_groups Mpsgroup#assign_all_autoscale_groups}
  */
  readonly assignAllAutoscaleGroups?: boolean | cdktf.IResolvable;
  /**
  * Assign All Instances (YES|NO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#assign_all_devices Mpsgroup#assign_all_devices}
  */
  readonly assignAllDevices?: boolean | cdktf.IResolvable;
  /**
  * Assign All Application from selected instances (YES|NO).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#assign_all_selected_device_apps Mpsgroup#assign_all_selected_device_apps}
  */
  readonly assignAllSelectedDeviceApps?: boolean | cdktf.IResolvable;
  /**
  * Autoscale groups belong to this groupp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#autoscale_groups_id Mpsgroup#autoscale_groups_id}
  */
  readonly autoscaleGroupsId?: string[];
  /**
  * Which bound entiy is selected VSERVER(0),SERVICE(1),SERVICEGROUP(2),SERVER(3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#bound_entity_selected Mpsgroup#bound_entity_selected}
  */
  readonly boundEntitySelected?: number;
  /**
  * Description of Group. Minimum length =  1 Maximum length =  1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#description Mpsgroup#description}
  */
  readonly description?: string;
  /**
  * Enables session timeout for group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#enable_session_timeout Mpsgroup#enable_session_timeout}
  */
  readonly enableSessionTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#id Mpsgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group Name. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#name Mpsgroup#name}
  */
  readonly name: string;
  /**
  * Permission for the group (admin/read-only). Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#permission Mpsgroup#permission}
  */
  readonly permission: string;
  /**
  * Role (admin|nonadmin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#role Mpsgroup#role}
  */
  readonly role?: string;
  /**
  * Roles assigned to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#roles Mpsgroup#roles}
  */
  readonly roles?: string[];
  /**
  * Select Individual Entity Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#select_individual_entity Mpsgroup#select_individual_entity}
  */
  readonly selectIndividualEntity?: boolean | cdktf.IResolvable;
  /**
  * Session timeout for the Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#session_timeout Mpsgroup#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Session timeout unit for the Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#session_timeout_unit Mpsgroup#session_timeout_unit}
  */
  readonly sessionTimeoutUnit?: string;
  /**
  * Stand alone instances belong to this groupp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#standalone_instances_id Mpsgroup#standalone_instances_id}
  */
  readonly standaloneInstancesId?: string[];
  /**
  * Id of the tenant. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#tenant_id Mpsgroup#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Users belong to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#users Mpsgroup#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup netscalersdx_mpsgroup}
*/
export class Mpsgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mpsgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mpsgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mpsgroup to import
  * @param importFromId The id of the existing Mpsgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mpsgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mpsgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsgroup netscalersdx_mpsgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsgroupConfig
  */
  public constructor(scope: Construct, id: string, config: MpsgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mpsgroup',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowApplicationOnly = config.allowApplicationOnly;
    this._applicationNames = config.applicationNames;
    this._applyAllBoundEntities = config.applyAllBoundEntities;
    this._assignAllApps = config.assignAllApps;
    this._assignAllAutoscaleGroups = config.assignAllAutoscaleGroups;
    this._assignAllDevices = config.assignAllDevices;
    this._assignAllSelectedDeviceApps = config.assignAllSelectedDeviceApps;
    this._autoscaleGroupsId = config.autoscaleGroupsId;
    this._boundEntitySelected = config.boundEntitySelected;
    this._description = config.description;
    this._enableSessionTimeout = config.enableSessionTimeout;
    this._id = config.id;
    this._name = config.name;
    this._permission = config.permission;
    this._role = config.role;
    this._roles = config.roles;
    this._selectIndividualEntity = config.selectIndividualEntity;
    this._sessionTimeout = config.sessionTimeout;
    this._sessionTimeoutUnit = config.sessionTimeoutUnit;
    this._standaloneInstancesId = config.standaloneInstancesId;
    this._tenantId = config.tenantId;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_application_only - computed: true, optional: true, required: false
  private _allowApplicationOnly?: boolean | cdktf.IResolvable; 
  public get allowApplicationOnly() {
    return this.getBooleanAttribute('allow_application_only');
  }
  public set allowApplicationOnly(value: boolean | cdktf.IResolvable) {
    this._allowApplicationOnly = value;
  }
  public resetAllowApplicationOnly() {
    this._allowApplicationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApplicationOnlyInput() {
    return this._allowApplicationOnly;
  }

  // application_names - computed: true, optional: true, required: false
  private _applicationNames?: string[]; 
  public get applicationNames() {
    return cdktf.Fn.tolist(this.getListAttribute('application_names'));
  }
  public set applicationNames(value: string[]) {
    this._applicationNames = value;
  }
  public resetApplicationNames() {
    this._applicationNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNamesInput() {
    return this._applicationNames;
  }

  // apply_all_bound_entities - computed: true, optional: true, required: false
  private _applyAllBoundEntities?: boolean | cdktf.IResolvable; 
  public get applyAllBoundEntities() {
    return this.getBooleanAttribute('apply_all_bound_entities');
  }
  public set applyAllBoundEntities(value: boolean | cdktf.IResolvable) {
    this._applyAllBoundEntities = value;
  }
  public resetApplyAllBoundEntities() {
    this._applyAllBoundEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAllBoundEntitiesInput() {
    return this._applyAllBoundEntities;
  }

  // assign_all_apps - computed: true, optional: true, required: false
  private _assignAllApps?: boolean | cdktf.IResolvable; 
  public get assignAllApps() {
    return this.getBooleanAttribute('assign_all_apps');
  }
  public set assignAllApps(value: boolean | cdktf.IResolvable) {
    this._assignAllApps = value;
  }
  public resetAssignAllApps() {
    this._assignAllApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAllAppsInput() {
    return this._assignAllApps;
  }

  // assign_all_autoscale_groups - computed: true, optional: true, required: false
  private _assignAllAutoscaleGroups?: boolean | cdktf.IResolvable; 
  public get assignAllAutoscaleGroups() {
    return this.getBooleanAttribute('assign_all_autoscale_groups');
  }
  public set assignAllAutoscaleGroups(value: boolean | cdktf.IResolvable) {
    this._assignAllAutoscaleGroups = value;
  }
  public resetAssignAllAutoscaleGroups() {
    this._assignAllAutoscaleGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAllAutoscaleGroupsInput() {
    return this._assignAllAutoscaleGroups;
  }

  // assign_all_devices - computed: true, optional: true, required: false
  private _assignAllDevices?: boolean | cdktf.IResolvable; 
  public get assignAllDevices() {
    return this.getBooleanAttribute('assign_all_devices');
  }
  public set assignAllDevices(value: boolean | cdktf.IResolvable) {
    this._assignAllDevices = value;
  }
  public resetAssignAllDevices() {
    this._assignAllDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAllDevicesInput() {
    return this._assignAllDevices;
  }

  // assign_all_selected_device_apps - computed: true, optional: true, required: false
  private _assignAllSelectedDeviceApps?: boolean | cdktf.IResolvable; 
  public get assignAllSelectedDeviceApps() {
    return this.getBooleanAttribute('assign_all_selected_device_apps');
  }
  public set assignAllSelectedDeviceApps(value: boolean | cdktf.IResolvable) {
    this._assignAllSelectedDeviceApps = value;
  }
  public resetAssignAllSelectedDeviceApps() {
    this._assignAllSelectedDeviceApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAllSelectedDeviceAppsInput() {
    return this._assignAllSelectedDeviceApps;
  }

  // autoscale_groups_id - computed: true, optional: true, required: false
  private _autoscaleGroupsId?: string[]; 
  public get autoscaleGroupsId() {
    return cdktf.Fn.tolist(this.getListAttribute('autoscale_groups_id'));
  }
  public set autoscaleGroupsId(value: string[]) {
    this._autoscaleGroupsId = value;
  }
  public resetAutoscaleGroupsId() {
    this._autoscaleGroupsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleGroupsIdInput() {
    return this._autoscaleGroupsId;
  }

  // bound_entity_selected - computed: true, optional: true, required: false
  private _boundEntitySelected?: number; 
  public get boundEntitySelected() {
    return this.getNumberAttribute('bound_entity_selected');
  }
  public set boundEntitySelected(value: number) {
    this._boundEntitySelected = value;
  }
  public resetBoundEntitySelected() {
    this._boundEntitySelected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundEntitySelectedInput() {
    return this._boundEntitySelected;
  }

  // description - computed: true, optional: true, required: false
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

  // enable_session_timeout - computed: true, optional: true, required: false
  private _enableSessionTimeout?: boolean | cdktf.IResolvable; 
  public get enableSessionTimeout() {
    return this.getBooleanAttribute('enable_session_timeout');
  }
  public set enableSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._enableSessionTimeout = value;
  }
  public resetEnableSessionTimeout() {
    this._enableSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTimeoutInput() {
    return this._enableSessionTimeout;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // role - computed: true, optional: true, required: false
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

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // select_individual_entity - computed: true, optional: true, required: false
  private _selectIndividualEntity?: boolean | cdktf.IResolvable; 
  public get selectIndividualEntity() {
    return this.getBooleanAttribute('select_individual_entity');
  }
  public set selectIndividualEntity(value: boolean | cdktf.IResolvable) {
    this._selectIndividualEntity = value;
  }
  public resetSelectIndividualEntity() {
    this._selectIndividualEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectIndividualEntityInput() {
    return this._selectIndividualEntity;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // session_timeout_unit - computed: true, optional: true, required: false
  private _sessionTimeoutUnit?: string; 
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }
  public set sessionTimeoutUnit(value: string) {
    this._sessionTimeoutUnit = value;
  }
  public resetSessionTimeoutUnit() {
    this._sessionTimeoutUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutUnitInput() {
    return this._sessionTimeoutUnit;
  }

  // standalone_instances_id - computed: true, optional: true, required: false
  private _standaloneInstancesId?: string[]; 
  public get standaloneInstancesId() {
    return cdktf.Fn.tolist(this.getListAttribute('standalone_instances_id'));
  }
  public set standaloneInstancesId(value: string[]) {
    this._standaloneInstancesId = value;
  }
  public resetStandaloneInstancesId() {
    this._standaloneInstancesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneInstancesIdInput() {
    return this._standaloneInstancesId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_application_only: cdktf.booleanToTerraform(this._allowApplicationOnly),
      application_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationNames),
      apply_all_bound_entities: cdktf.booleanToTerraform(this._applyAllBoundEntities),
      assign_all_apps: cdktf.booleanToTerraform(this._assignAllApps),
      assign_all_autoscale_groups: cdktf.booleanToTerraform(this._assignAllAutoscaleGroups),
      assign_all_devices: cdktf.booleanToTerraform(this._assignAllDevices),
      assign_all_selected_device_apps: cdktf.booleanToTerraform(this._assignAllSelectedDeviceApps),
      autoscale_groups_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoscaleGroupsId),
      bound_entity_selected: cdktf.numberToTerraform(this._boundEntitySelected),
      description: cdktf.stringToTerraform(this._description),
      enable_session_timeout: cdktf.booleanToTerraform(this._enableSessionTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permission: cdktf.stringToTerraform(this._permission),
      role: cdktf.stringToTerraform(this._role),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      select_individual_entity: cdktf.booleanToTerraform(this._selectIndividualEntity),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      session_timeout_unit: cdktf.stringToTerraform(this._sessionTimeoutUnit),
      standalone_instances_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._standaloneInstancesId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_application_only: {
        value: cdktf.booleanToHclTerraform(this._allowApplicationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apply_all_bound_entities: {
        value: cdktf.booleanToHclTerraform(this._applyAllBoundEntities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assign_all_apps: {
        value: cdktf.booleanToHclTerraform(this._assignAllApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assign_all_autoscale_groups: {
        value: cdktf.booleanToHclTerraform(this._assignAllAutoscaleGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assign_all_devices: {
        value: cdktf.booleanToHclTerraform(this._assignAllDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assign_all_selected_device_apps: {
        value: cdktf.booleanToHclTerraform(this._assignAllSelectedDeviceApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoscale_groups_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoscaleGroupsId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_entity_selected: {
        value: cdktf.numberToHclTerraform(this._boundEntitySelected),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_session_timeout: {
        value: cdktf.booleanToHclTerraform(this._enableSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      select_individual_entity: {
        value: cdktf.booleanToHclTerraform(this._selectIndividualEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout_unit: {
        value: cdktf.stringToHclTerraform(this._sessionTimeoutUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_instances_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._standaloneInstancesId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
