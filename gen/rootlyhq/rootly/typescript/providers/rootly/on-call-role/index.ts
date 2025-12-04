// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#alert_sources_permissions OnCallRole#alert_sources_permissions}
  */
  readonly alertSourcesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#alert_urgency_permissions OnCallRole#alert_urgency_permissions}
  */
  readonly alertUrgencyPermissions?: string[];
  /**
  * Value must be one of `create`, `update`, `read`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#alerts_permissions OnCallRole#alerts_permissions}
  */
  readonly alertsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#api_keys_permissions OnCallRole#api_keys_permissions}
  */
  readonly apiKeysPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#audits_permissions OnCallRole#audits_permissions}
  */
  readonly auditsPermissions?: string[];
  /**
  * Value must be one of `read`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#contacts_permissions OnCallRole#contacts_permissions}
  */
  readonly contactsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#escalation_policies_permissions OnCallRole#escalation_policies_permissions}
  */
  readonly escalationPoliciesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#groups_permissions OnCallRole#groups_permissions}
  */
  readonly groupsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#heartbeats_permissions OnCallRole#heartbeats_permissions}
  */
  readonly heartbeatsPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#id OnCallRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#integrations_permissions OnCallRole#integrations_permissions}
  */
  readonly integrationsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#invitations_permissions OnCallRole#invitations_permissions}
  */
  readonly invitationsPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#live_call_routing_permissions OnCallRole#live_call_routing_permissions}
  */
  readonly liveCallRoutingPermissions?: string[];
  /**
  * The role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#name OnCallRole#name}
  */
  readonly name: string;
  /**
  * Value must be one of `create`, `update`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#schedule_override_permissions OnCallRole#schedule_override_permissions}
  */
  readonly scheduleOverridePermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#schedules_permissions OnCallRole#schedules_permissions}
  */
  readonly schedulesPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#services_permissions OnCallRole#services_permissions}
  */
  readonly servicesPermissions?: string[];
  /**
  * The role slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#slug OnCallRole#slug}
  */
  readonly slug?: string;
  /**
  * The kind of role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#system_role OnCallRole#system_role}
  */
  readonly systemRole?: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#webhooks_permissions OnCallRole#webhooks_permissions}
  */
  readonly webhooksPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#workflows_permissions OnCallRole#workflows_permissions}
  */
  readonly workflowsPermissions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role rootly_on_call_role}
*/
export class OnCallRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_on_call_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallRole to import
  * @param importFromId The id of the existing OnCallRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_on_call_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/on_call_role rootly_on_call_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_on_call_role',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertSourcesPermissions = config.alertSourcesPermissions;
    this._alertUrgencyPermissions = config.alertUrgencyPermissions;
    this._alertsPermissions = config.alertsPermissions;
    this._apiKeysPermissions = config.apiKeysPermissions;
    this._auditsPermissions = config.auditsPermissions;
    this._contactsPermissions = config.contactsPermissions;
    this._escalationPoliciesPermissions = config.escalationPoliciesPermissions;
    this._groupsPermissions = config.groupsPermissions;
    this._heartbeatsPermissions = config.heartbeatsPermissions;
    this._id = config.id;
    this._integrationsPermissions = config.integrationsPermissions;
    this._invitationsPermissions = config.invitationsPermissions;
    this._liveCallRoutingPermissions = config.liveCallRoutingPermissions;
    this._name = config.name;
    this._scheduleOverridePermissions = config.scheduleOverridePermissions;
    this._schedulesPermissions = config.schedulesPermissions;
    this._servicesPermissions = config.servicesPermissions;
    this._slug = config.slug;
    this._systemRole = config.systemRole;
    this._webhooksPermissions = config.webhooksPermissions;
    this._workflowsPermissions = config.workflowsPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_sources_permissions - computed: true, optional: true, required: false
  private _alertSourcesPermissions?: string[]; 
  public get alertSourcesPermissions() {
    return this.getListAttribute('alert_sources_permissions');
  }
  public set alertSourcesPermissions(value: string[]) {
    this._alertSourcesPermissions = value;
  }
  public resetAlertSourcesPermissions() {
    this._alertSourcesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourcesPermissionsInput() {
    return this._alertSourcesPermissions;
  }

  // alert_urgency_permissions - computed: true, optional: true, required: false
  private _alertUrgencyPermissions?: string[]; 
  public get alertUrgencyPermissions() {
    return this.getListAttribute('alert_urgency_permissions');
  }
  public set alertUrgencyPermissions(value: string[]) {
    this._alertUrgencyPermissions = value;
  }
  public resetAlertUrgencyPermissions() {
    this._alertUrgencyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyPermissionsInput() {
    return this._alertUrgencyPermissions;
  }

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

  // contacts_permissions - computed: true, optional: true, required: false
  private _contactsPermissions?: string[]; 
  public get contactsPermissions() {
    return this.getListAttribute('contacts_permissions');
  }
  public set contactsPermissions(value: string[]) {
    this._contactsPermissions = value;
  }
  public resetContactsPermissions() {
    this._contactsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsPermissionsInput() {
    return this._contactsPermissions;
  }

  // escalation_policies_permissions - computed: true, optional: true, required: false
  private _escalationPoliciesPermissions?: string[]; 
  public get escalationPoliciesPermissions() {
    return this.getListAttribute('escalation_policies_permissions');
  }
  public set escalationPoliciesPermissions(value: string[]) {
    this._escalationPoliciesPermissions = value;
  }
  public resetEscalationPoliciesPermissions() {
    this._escalationPoliciesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPoliciesPermissionsInput() {
    return this._escalationPoliciesPermissions;
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

  // heartbeats_permissions - computed: true, optional: true, required: false
  private _heartbeatsPermissions?: string[]; 
  public get heartbeatsPermissions() {
    return this.getListAttribute('heartbeats_permissions');
  }
  public set heartbeatsPermissions(value: string[]) {
    this._heartbeatsPermissions = value;
  }
  public resetHeartbeatsPermissions() {
    this._heartbeatsPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatsPermissionsInput() {
    return this._heartbeatsPermissions;
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

  // live_call_routing_permissions - computed: true, optional: true, required: false
  private _liveCallRoutingPermissions?: string[]; 
  public get liveCallRoutingPermissions() {
    return this.getListAttribute('live_call_routing_permissions');
  }
  public set liveCallRoutingPermissions(value: string[]) {
    this._liveCallRoutingPermissions = value;
  }
  public resetLiveCallRoutingPermissions() {
    this._liveCallRoutingPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveCallRoutingPermissionsInput() {
    return this._liveCallRoutingPermissions;
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

  // schedule_override_permissions - computed: true, optional: true, required: false
  private _scheduleOverridePermissions?: string[]; 
  public get scheduleOverridePermissions() {
    return this.getListAttribute('schedule_override_permissions');
  }
  public set scheduleOverridePermissions(value: string[]) {
    this._scheduleOverridePermissions = value;
  }
  public resetScheduleOverridePermissions() {
    this._scheduleOverridePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOverridePermissionsInput() {
    return this._scheduleOverridePermissions;
  }

  // schedules_permissions - computed: true, optional: true, required: false
  private _schedulesPermissions?: string[]; 
  public get schedulesPermissions() {
    return this.getListAttribute('schedules_permissions');
  }
  public set schedulesPermissions(value: string[]) {
    this._schedulesPermissions = value;
  }
  public resetSchedulesPermissions() {
    this._schedulesPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesPermissionsInput() {
    return this._schedulesPermissions;
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

  // system_role - computed: false, optional: true, required: false
  private _systemRole?: string; 
  public get systemRole() {
    return this.getStringAttribute('system_role');
  }
  public set systemRole(value: string) {
    this._systemRole = value;
  }
  public resetSystemRole() {
    this._systemRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRoleInput() {
    return this._systemRole;
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
      alert_sources_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertSourcesPermissions),
      alert_urgency_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertUrgencyPermissions),
      alerts_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertsPermissions),
      api_keys_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiKeysPermissions),
      audits_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditsPermissions),
      contacts_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactsPermissions),
      escalation_policies_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._escalationPoliciesPermissions),
      groups_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsPermissions),
      heartbeats_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._heartbeatsPermissions),
      id: cdktf.stringToTerraform(this._id),
      integrations_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationsPermissions),
      invitations_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invitationsPermissions),
      live_call_routing_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._liveCallRoutingPermissions),
      name: cdktf.stringToTerraform(this._name),
      schedule_override_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduleOverridePermissions),
      schedules_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schedulesPermissions),
      services_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicesPermissions),
      slug: cdktf.stringToTerraform(this._slug),
      system_role: cdktf.stringToTerraform(this._systemRole),
      webhooks_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webhooksPermissions),
      workflows_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowsPermissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_sources_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertSourcesPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alert_urgency_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertUrgencyPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      contacts_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactsPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      escalation_policies_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._escalationPoliciesPermissions),
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
      heartbeats_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._heartbeatsPermissions),
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
      live_call_routing_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._liveCallRoutingPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_override_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduleOverridePermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schedules_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schedulesPermissions),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_role: {
        value: cdktf.stringToHclTerraform(this._systemRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
