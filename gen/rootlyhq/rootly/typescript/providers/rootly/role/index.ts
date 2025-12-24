// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value must be one of `create`, `read`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#alerts_permissions Role#alerts_permissions}
  */
  readonly alertsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#api_keys_permissions Role#api_keys_permissions}
  */
  readonly apiKeysPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#audits_permissions Role#audits_permissions}
  */
  readonly auditsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#billing_permissions Role#billing_permissions}
  */
  readonly billingPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#environments_permissions Role#environments_permissions}
  */
  readonly environmentsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#form_fields_permissions Role#form_fields_permissions}
  */
  readonly formFieldsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#functionalities_permissions Role#functionalities_permissions}
  */
  readonly functionalitiesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#groups_permissions Role#groups_permissions}
  */
  readonly groupsPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incident_causes_permissions Role#incident_causes_permissions}
  */
  readonly incidentCausesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incident_feedbacks_permissions Role#incident_feedbacks_permissions}
  */
  readonly incidentFeedbacksPermissions?: string[];
  /**
  * Associated incident permissions set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incident_permission_set_id Role#incident_permission_set_id}
  */
  readonly incidentPermissionSetId?: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incident_roles_permissions Role#incident_roles_permissions}
  */
  readonly incidentRolesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incident_types_permissions Role#incident_types_permissions}
  */
  readonly incidentTypesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#incidents_permissions Role#incidents_permissions}
  */
  readonly incidentsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#integrations_permissions Role#integrations_permissions}
  */
  readonly integrationsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#invitations_permissions Role#invitations_permissions}
  */
  readonly invitationsPermissions?: string[];
  /**
  * Whether the role can be deleted.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#is_deletable Role#is_deletable}
  */
  readonly isDeletable?: boolean | cdktf.IResolvable;
  /**
  * Whether the role can be edited.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#is_editable Role#is_editable}
  */
  readonly isEditable?: boolean | cdktf.IResolvable;
  /**
  * The role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#playbooks_permissions Role#playbooks_permissions}
  */
  readonly playbooksPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#private_incidents_permissions Role#private_incidents_permissions}
  */
  readonly privateIncidentsPermissions?: string[];
  /**
  * Value must be one of `create`, `update`, `read`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#pulses_permissions Role#pulses_permissions}
  */
  readonly pulsesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#retrospective_permissions Role#retrospective_permissions}
  */
  readonly retrospectivePermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#roles_permissions Role#roles_permissions}
  */
  readonly rolesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#secrets_permissions Role#secrets_permissions}
  */
  readonly secretsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#services_permissions Role#services_permissions}
  */
  readonly servicesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#severities_permissions Role#severities_permissions}
  */
  readonly severitiesPermissions?: string[];
  /**
  * The role slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#slug Role#slug}
  */
  readonly slug?: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#status_pages_permissions Role#status_pages_permissions}
  */
  readonly statusPagesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#webhooks_permissions Role#webhooks_permissions}
  */
  readonly webhooksPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#workflows_permissions Role#workflows_permissions}
  */
  readonly workflowsPermissions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role rootly_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/role rootly_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_role',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsPermissions = config.alertsPermissions;
    this._apiKeysPermissions = config.apiKeysPermissions;
    this._auditsPermissions = config.auditsPermissions;
    this._billingPermissions = config.billingPermissions;
    this._environmentsPermissions = config.environmentsPermissions;
    this._formFieldsPermissions = config.formFieldsPermissions;
    this._functionalitiesPermissions = config.functionalitiesPermissions;
    this._groupsPermissions = config.groupsPermissions;
    this._id = config.id;
    this._incidentCausesPermissions = config.incidentCausesPermissions;
    this._incidentFeedbacksPermissions = config.incidentFeedbacksPermissions;
    this._incidentPermissionSetId = config.incidentPermissionSetId;
    this._incidentRolesPermissions = config.incidentRolesPermissions;
    this._incidentTypesPermissions = config.incidentTypesPermissions;
    this._incidentsPermissions = config.incidentsPermissions;
    this._integrationsPermissions = config.integrationsPermissions;
    this._invitationsPermissions = config.invitationsPermissions;
    this._isDeletable = config.isDeletable;
    this._isEditable = config.isEditable;
    this._name = config.name;
    this._playbooksPermissions = config.playbooksPermissions;
    this._privateIncidentsPermissions = config.privateIncidentsPermissions;
    this._pulsesPermissions = config.pulsesPermissions;
    this._retrospectivePermissions = config.retrospectivePermissions;
    this._rolesPermissions = config.rolesPermissions;
    this._secretsPermissions = config.secretsPermissions;
    this._servicesPermissions = config.servicesPermissions;
    this._severitiesPermissions = config.severitiesPermissions;
    this._slug = config.slug;
    this._statusPagesPermissions = config.statusPagesPermissions;
    this._webhooksPermissions = config.webhooksPermissions;
    this._workflowsPermissions = config.workflowsPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_permissions - computed: true, optional: true, required: false
  private _alertsPermissions?: string[]; 
  public get alertsPermissions() {
    return this.getListAttribute('alerts_permissions');
  }
  public set alertsPermissions(value: string[]) {
    this._alertsPermissions = value;
  }
  public resetAlertsPermissions() {
    this._alertsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsPermissionsInput() {
    return this._alertsPermissions;
  }

  // api_keys_permissions - computed: true, optional: true, required: false
  private _apiKeysPermissions?: string[]; 
  public get apiKeysPermissions() {
    return this.getListAttribute('api_keys_permissions');
  }
  public set apiKeysPermissions(value: string[]) {
    this._apiKeysPermissions = value;
  }
  public resetApiKeysPermissions() {
    this._apiKeysPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysPermissionsInput() {
    return this._apiKeysPermissions;
  }

  // audits_permissions - computed: true, optional: true, required: false
  private _auditsPermissions?: string[]; 
  public get auditsPermissions() {
    return this.getListAttribute('audits_permissions');
  }
  public set auditsPermissions(value: string[]) {
    this._auditsPermissions = value;
  }
  public resetAuditsPermissions() {
    this._auditsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditsPermissionsInput() {
    return this._auditsPermissions;
  }

  // billing_permissions - computed: true, optional: true, required: false
  private _billingPermissions?: string[]; 
  public get billingPermissions() {
    return this.getListAttribute('billing_permissions');
  }
  public set billingPermissions(value: string[]) {
    this._billingPermissions = value;
  }
  public resetBillingPermissions() {
    this._billingPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPermissionsInput() {
    return this._billingPermissions;
  }

  // environments_permissions - computed: true, optional: true, required: false
  private _environmentsPermissions?: string[]; 
  public get environmentsPermissions() {
    return this.getListAttribute('environments_permissions');
  }
  public set environmentsPermissions(value: string[]) {
    this._environmentsPermissions = value;
  }
  public resetEnvironmentsPermissions() {
    this._environmentsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsPermissionsInput() {
    return this._environmentsPermissions;
  }

  // form_fields_permissions - computed: true, optional: true, required: false
  private _formFieldsPermissions?: string[]; 
  public get formFieldsPermissions() {
    return this.getListAttribute('form_fields_permissions');
  }
  public set formFieldsPermissions(value: string[]) {
    this._formFieldsPermissions = value;
  }
  public resetFormFieldsPermissions() {
    this._formFieldsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldsPermissionsInput() {
    return this._formFieldsPermissions;
  }

  // functionalities_permissions - computed: true, optional: true, required: false
  private _functionalitiesPermissions?: string[]; 
  public get functionalitiesPermissions() {
    return this.getListAttribute('functionalities_permissions');
  }
  public set functionalitiesPermissions(value: string[]) {
    this._functionalitiesPermissions = value;
  }
  public resetFunctionalitiesPermissions() {
    this._functionalitiesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalitiesPermissionsInput() {
    return this._functionalitiesPermissions;
  }

  // groups_permissions - computed: true, optional: true, required: false
  private _groupsPermissions?: string[]; 
  public get groupsPermissions() {
    return this.getListAttribute('groups_permissions');
  }
  public set groupsPermissions(value: string[]) {
    this._groupsPermissions = value;
  }
  public resetGroupsPermissions() {
    this._groupsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPermissionsInput() {
    return this._groupsPermissions;
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

  // incident_causes_permissions - computed: true, optional: true, required: false
  private _incidentCausesPermissions?: string[]; 
  public get incidentCausesPermissions() {
    return this.getListAttribute('incident_causes_permissions');
  }
  public set incidentCausesPermissions(value: string[]) {
    this._incidentCausesPermissions = value;
  }
  public resetIncidentCausesPermissions() {
    this._incidentCausesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCausesPermissionsInput() {
    return this._incidentCausesPermissions;
  }

  // incident_feedbacks_permissions - computed: true, optional: true, required: false
  private _incidentFeedbacksPermissions?: string[]; 
  public get incidentFeedbacksPermissions() {
    return this.getListAttribute('incident_feedbacks_permissions');
  }
  public set incidentFeedbacksPermissions(value: string[]) {
    this._incidentFeedbacksPermissions = value;
  }
  public resetIncidentFeedbacksPermissions() {
    this._incidentFeedbacksPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentFeedbacksPermissionsInput() {
    return this._incidentFeedbacksPermissions;
  }

  // incident_permission_set_id - computed: true, optional: true, required: false
  private _incidentPermissionSetId?: string; 
  public get incidentPermissionSetId() {
    return this.getStringAttribute('incident_permission_set_id');
  }
  public set incidentPermissionSetId(value: string) {
    this._incidentPermissionSetId = value;
  }
  public resetIncidentPermissionSetId() {
    this._incidentPermissionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPermissionSetIdInput() {
    return this._incidentPermissionSetId;
  }

  // incident_roles_permissions - computed: true, optional: true, required: false
  private _incidentRolesPermissions?: string[]; 
  public get incidentRolesPermissions() {
    return this.getListAttribute('incident_roles_permissions');
  }
  public set incidentRolesPermissions(value: string[]) {
    this._incidentRolesPermissions = value;
  }
  public resetIncidentRolesPermissions() {
    this._incidentRolesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRolesPermissionsInput() {
    return this._incidentRolesPermissions;
  }

  // incident_types_permissions - computed: true, optional: true, required: false
  private _incidentTypesPermissions?: string[]; 
  public get incidentTypesPermissions() {
    return this.getListAttribute('incident_types_permissions');
  }
  public set incidentTypesPermissions(value: string[]) {
    this._incidentTypesPermissions = value;
  }
  public resetIncidentTypesPermissions() {
    this._incidentTypesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypesPermissionsInput() {
    return this._incidentTypesPermissions;
  }

  // incidents_permissions - computed: true, optional: true, required: false
  private _incidentsPermissions?: string[]; 
  public get incidentsPermissions() {
    return this.getListAttribute('incidents_permissions');
  }
  public set incidentsPermissions(value: string[]) {
    this._incidentsPermissions = value;
  }
  public resetIncidentsPermissions() {
    this._incidentsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentsPermissionsInput() {
    return this._incidentsPermissions;
  }

  // integrations_permissions - computed: true, optional: true, required: false
  private _integrationsPermissions?: string[]; 
  public get integrationsPermissions() {
    return this.getListAttribute('integrations_permissions');
  }
  public set integrationsPermissions(value: string[]) {
    this._integrationsPermissions = value;
  }
  public resetIntegrationsPermissions() {
    this._integrationsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsPermissionsInput() {
    return this._integrationsPermissions;
  }

  // invitations_permissions - computed: true, optional: true, required: false
  private _invitationsPermissions?: string[]; 
  public get invitationsPermissions() {
    return this.getListAttribute('invitations_permissions');
  }
  public set invitationsPermissions(value: string[]) {
    this._invitationsPermissions = value;
  }
  public resetInvitationsPermissions() {
    this._invitationsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationsPermissionsInput() {
    return this._invitationsPermissions;
  }

  // is_deletable - computed: true, optional: true, required: false
  private _isDeletable?: boolean | cdktf.IResolvable; 
  public get isDeletable() {
    return this.getBooleanAttribute('is_deletable');
  }
  public set isDeletable(value: boolean | cdktf.IResolvable) {
    this._isDeletable = value;
  }
  public resetIsDeletable() {
    this._isDeletable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletableInput() {
    return this._isDeletable;
  }

  // is_editable - computed: true, optional: true, required: false
  private _isEditable?: boolean | cdktf.IResolvable; 
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }
  public set isEditable(value: boolean | cdktf.IResolvable) {
    this._isEditable = value;
  }
  public resetIsEditable() {
    this._isEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEditableInput() {
    return this._isEditable;
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

  // playbooks_permissions - computed: true, optional: true, required: false
  private _playbooksPermissions?: string[]; 
  public get playbooksPermissions() {
    return this.getListAttribute('playbooks_permissions');
  }
  public set playbooksPermissions(value: string[]) {
    this._playbooksPermissions = value;
  }
  public resetPlaybooksPermissions() {
    this._playbooksPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbooksPermissionsInput() {
    return this._playbooksPermissions;
  }

  // private_incidents_permissions - computed: true, optional: true, required: false
  private _privateIncidentsPermissions?: string[]; 
  public get privateIncidentsPermissions() {
    return this.getListAttribute('private_incidents_permissions');
  }
  public set privateIncidentsPermissions(value: string[]) {
    this._privateIncidentsPermissions = value;
  }
  public resetPrivateIncidentsPermissions() {
    this._privateIncidentsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIncidentsPermissionsInput() {
    return this._privateIncidentsPermissions;
  }

  // pulses_permissions - computed: true, optional: true, required: false
  private _pulsesPermissions?: string[]; 
  public get pulsesPermissions() {
    return this.getListAttribute('pulses_permissions');
  }
  public set pulsesPermissions(value: string[]) {
    this._pulsesPermissions = value;
  }
  public resetPulsesPermissions() {
    this._pulsesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulsesPermissionsInput() {
    return this._pulsesPermissions;
  }

  // retrospective_permissions - computed: true, optional: true, required: false
  private _retrospectivePermissions?: string[]; 
  public get retrospectivePermissions() {
    return this.getListAttribute('retrospective_permissions');
  }
  public set retrospectivePermissions(value: string[]) {
    this._retrospectivePermissions = value;
  }
  public resetRetrospectivePermissions() {
    this._retrospectivePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectivePermissionsInput() {
    return this._retrospectivePermissions;
  }

  // roles_permissions - computed: true, optional: true, required: false
  private _rolesPermissions?: string[]; 
  public get rolesPermissions() {
    return this.getListAttribute('roles_permissions');
  }
  public set rolesPermissions(value: string[]) {
    this._rolesPermissions = value;
  }
  public resetRolesPermissions() {
    this._rolesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesPermissionsInput() {
    return this._rolesPermissions;
  }

  // secrets_permissions - computed: true, optional: true, required: false
  private _secretsPermissions?: string[]; 
  public get secretsPermissions() {
    return this.getListAttribute('secrets_permissions');
  }
  public set secretsPermissions(value: string[]) {
    this._secretsPermissions = value;
  }
  public resetSecretsPermissions() {
    this._secretsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsPermissionsInput() {
    return this._secretsPermissions;
  }

  // services_permissions - computed: true, optional: true, required: false
  private _servicesPermissions?: string[]; 
  public get servicesPermissions() {
    return this.getListAttribute('services_permissions');
  }
  public set servicesPermissions(value: string[]) {
    this._servicesPermissions = value;
  }
  public resetServicesPermissions() {
    this._servicesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesPermissionsInput() {
    return this._servicesPermissions;
  }

  // severities_permissions - computed: true, optional: true, required: false
  private _severitiesPermissions?: string[]; 
  public get severitiesPermissions() {
    return this.getListAttribute('severities_permissions');
  }
  public set severitiesPermissions(value: string[]) {
    this._severitiesPermissions = value;
  }
  public resetSeveritiesPermissions() {
    this._severitiesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesPermissionsInput() {
    return this._severitiesPermissions;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // status_pages_permissions - computed: true, optional: true, required: false
  private _statusPagesPermissions?: string[]; 
  public get statusPagesPermissions() {
    return this.getListAttribute('status_pages_permissions');
  }
  public set statusPagesPermissions(value: string[]) {
    this._statusPagesPermissions = value;
  }
  public resetStatusPagesPermissions() {
    this._statusPagesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPagesPermissionsInput() {
    return this._statusPagesPermissions;
  }

  // webhooks_permissions - computed: true, optional: true, required: false
  private _webhooksPermissions?: string[]; 
  public get webhooksPermissions() {
    return this.getListAttribute('webhooks_permissions');
  }
  public set webhooksPermissions(value: string[]) {
    this._webhooksPermissions = value;
  }
  public resetWebhooksPermissions() {
    this._webhooksPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksPermissionsInput() {
    return this._webhooksPermissions;
  }

  // workflows_permissions - computed: true, optional: true, required: false
  private _workflowsPermissions?: string[]; 
  public get workflowsPermissions() {
    return this.getListAttribute('workflows_permissions');
  }
  public set workflowsPermissions(value: string[]) {
    this._workflowsPermissions = value;
  }
  public resetWorkflowsPermissions() {
    this._workflowsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsPermissionsInput() {
    return this._workflowsPermissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertsPermissions),
      api_keys_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiKeysPermissions),
      audits_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditsPermissions),
      billing_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingPermissions),
      environments_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentsPermissions),
      form_fields_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._formFieldsPermissions),
      functionalities_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionalitiesPermissions),
      groups_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsPermissions),
      id: cdktf.stringToTerraform(this._id),
      incident_causes_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentCausesPermissions),
      incident_feedbacks_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentFeedbacksPermissions),
      incident_permission_set_id: cdktf.stringToTerraform(this._incidentPermissionSetId),
      incident_roles_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentRolesPermissions),
      incident_types_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentTypesPermissions),
      incidents_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentsPermissions),
      integrations_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationsPermissions),
      invitations_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invitationsPermissions),
      is_deletable: cdktf.booleanToTerraform(this._isDeletable),
      is_editable: cdktf.booleanToTerraform(this._isEditable),
      name: cdktf.stringToTerraform(this._name),
      playbooks_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._playbooksPermissions),
      private_incidents_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIncidentsPermissions),
      pulses_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pulsesPermissions),
      retrospective_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retrospectivePermissions),
      roles_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rolesPermissions),
      secrets_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretsPermissions),
      services_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicesPermissions),
      severities_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severitiesPermissions),
      slug: cdktf.stringToTerraform(this._slug),
      status_pages_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusPagesPermissions),
      webhooks_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webhooksPermissions),
      workflows_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowsPermissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_keys_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiKeysPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audits_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      billing_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environments_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      form_fields_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._formFieldsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      functionalities_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionalitiesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      groups_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_causes_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentCausesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_feedbacks_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentFeedbacksPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_permission_set_id: {
        value: cdktf.stringToHclTerraform(this._incidentPermissionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_roles_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentRolesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_types_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentTypesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incidents_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      integrations_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      invitations_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invitationsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_deletable: {
        value: cdktf.booleanToHclTerraform(this._isDeletable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_editable: {
        value: cdktf.booleanToHclTerraform(this._isEditable),
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
      playbooks_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._playbooksPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_incidents_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIncidentsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pulses_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pulsesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retrospective_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retrospectivePermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roles_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rolesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secrets_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secretsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      services_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servicesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severities_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severitiesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_pages_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statusPagesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      webhooks_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webhooksPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflows_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflowsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
