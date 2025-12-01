// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExportTransportPackageResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of analytics v1 to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#analytics_v1 ExportTransportPackageResource#analytics_v1}
  */
  readonly analyticsV1?: string[];
  /**
  * List of analytics v2 to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#analytics_v2 ExportTransportPackageResource#analytics_v2}
  */
  readonly analyticsV2?: string[];
  /**
  * List of app onboarding configurations to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#app_onboarding ExportTransportPackageResource#app_onboarding}
  */
  readonly appOnboarding?: string[];
  /**
  * Business justification for the export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#business_justification ExportTransportPackageResource#business_justification}
  */
  readonly businessJustification?: string;
  /**
  * List of connections to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#connections ExportTransportPackageResource#connections}
  */
  readonly connections?: string[];
  /**
  * List of email templates to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#email_template ExportTransportPackageResource#email_template}
  */
  readonly emailTemplate?: string[];
  /**
  * Name of the environment (required if export_online is true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#environment_name ExportTransportPackageResource#environment_name}
  */
  readonly environmentName?: string;
  /**
  * Determines if package needs to be exported online (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#export_online ExportTransportPackageResource#export_online}
  */
  readonly exportOnline: string;
  /**
  * Version identifier for the export package. Change this value to trigger re-export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#export_package_version ExportTransportPackageResource#export_package_version}
  */
  readonly exportPackageVersion?: string;
  /**
  * Local path where export package will be generated (required if export_online is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#export_path ExportTransportPackageResource#export_path}
  */
  readonly exportPath: string;
  /**
  * List of global configurations to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#global_config ExportTransportPackageResource#global_config}
  */
  readonly globalConfig?: string[];
  /**
  * List of organizations to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#organizations ExportTransportPackageResource#organizations}
  */
  readonly organizations?: string[];
  /**
  * List of roles to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#roles ExportTransportPackageResource#roles}
  */
  readonly roles?: string[];
  /**
  * List of SAV roles to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#sav_roles ExportTransportPackageResource#sav_roles}
  */
  readonly savRoles?: string[];
  /**
  * List of scan rules to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#scan_rules ExportTransportPackageResource#scan_rules}
  */
  readonly scanRules?: string[];
  /**
  * List of security systems to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#security_systems ExportTransportPackageResource#security_systems}
  */
  readonly securitySystems?: string[];
  /**
  * Option to transport members for selected objects such as SAV role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#transport_members ExportTransportPackageResource#transport_members}
  */
  readonly transportMembers?: string;
  /**
  * Option to transport owners for selected objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#transport_owner ExportTransportPackageResource#transport_owner}
  */
  readonly transportOwner?: string;
  /**
  * Username of the user exporting the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#update_user ExportTransportPackageResource#update_user}
  */
  readonly updateUser?: string;
  /**
  * List of user groups to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#user_groups ExportTransportPackageResource#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * List of workflows to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#workflows ExportTransportPackageResource#workflows}
  */
  readonly workflows?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource saviynt_export_transport_package_resource}
*/
export class ExportTransportPackageResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_export_transport_package_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExportTransportPackageResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExportTransportPackageResource to import
  * @param importFromId The id of the existing ExportTransportPackageResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExportTransportPackageResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_export_transport_package_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/export_transport_package_resource saviynt_export_transport_package_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExportTransportPackageResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ExportTransportPackageResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_export_transport_package_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsV1 = config.analyticsV1;
    this._analyticsV2 = config.analyticsV2;
    this._appOnboarding = config.appOnboarding;
    this._businessJustification = config.businessJustification;
    this._connections = config.connections;
    this._emailTemplate = config.emailTemplate;
    this._environmentName = config.environmentName;
    this._exportOnline = config.exportOnline;
    this._exportPackageVersion = config.exportPackageVersion;
    this._exportPath = config.exportPath;
    this._globalConfig = config.globalConfig;
    this._organizations = config.organizations;
    this._roles = config.roles;
    this._savRoles = config.savRoles;
    this._scanRules = config.scanRules;
    this._securitySystems = config.securitySystems;
    this._transportMembers = config.transportMembers;
    this._transportOwner = config.transportOwner;
    this._updateUser = config.updateUser;
    this._userGroups = config.userGroups;
    this._workflows = config.workflows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_v1 - computed: false, optional: true, required: false
  private _analyticsV1?: string[]; 
  public get analyticsV1() {
    return this.getListAttribute('analytics_v1');
  }
  public set analyticsV1(value: string[]) {
    this._analyticsV1 = value;
  }
  public resetAnalyticsV1() {
    this._analyticsV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsV1Input() {
    return this._analyticsV1;
  }

  // analytics_v2 - computed: false, optional: true, required: false
  private _analyticsV2?: string[]; 
  public get analyticsV2() {
    return this.getListAttribute('analytics_v2');
  }
  public set analyticsV2(value: string[]) {
    this._analyticsV2 = value;
  }
  public resetAnalyticsV2() {
    this._analyticsV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsV2Input() {
    return this._analyticsV2;
  }

  // app_onboarding - computed: false, optional: true, required: false
  private _appOnboarding?: string[]; 
  public get appOnboarding() {
    return this.getListAttribute('app_onboarding');
  }
  public set appOnboarding(value: string[]) {
    this._appOnboarding = value;
  }
  public resetAppOnboarding() {
    this._appOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appOnboardingInput() {
    return this._appOnboarding;
  }

  // business_justification - computed: false, optional: true, required: false
  private _businessJustification?: string; 
  public get businessJustification() {
    return this.getStringAttribute('business_justification');
  }
  public set businessJustification(value: string) {
    this._businessJustification = value;
  }
  public resetBusinessJustification() {
    this._businessJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessJustificationInput() {
    return this._businessJustification;
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[]; 
  public get connections() {
    return this.getListAttribute('connections');
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // email_template - computed: false, optional: true, required: false
  private _emailTemplate?: string[]; 
  public get emailTemplate() {
    return this.getListAttribute('email_template');
  }
  public set emailTemplate(value: string[]) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // environment_name - computed: false, optional: true, required: false
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  public resetEnvironmentName() {
    this._environmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // export_online - computed: false, optional: false, required: true
  private _exportOnline?: string; 
  public get exportOnline() {
    return this.getStringAttribute('export_online');
  }
  public set exportOnline(value: string) {
    this._exportOnline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportOnlineInput() {
    return this._exportOnline;
  }

  // export_package_version - computed: false, optional: true, required: false
  private _exportPackageVersion?: string; 
  public get exportPackageVersion() {
    return this.getStringAttribute('export_package_version');
  }
  public set exportPackageVersion(value: string) {
    this._exportPackageVersion = value;
  }
  public resetExportPackageVersion() {
    this._exportPackageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPackageVersionInput() {
    return this._exportPackageVersion;
  }

  // export_path - computed: false, optional: false, required: true
  private _exportPath?: string; 
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // global_config - computed: false, optional: true, required: false
  private _globalConfig?: string[]; 
  public get globalConfig() {
    return this.getListAttribute('global_config');
  }
  public set globalConfig(value: string[]) {
    this._globalConfig = value;
  }
  public resetGlobalConfig() {
    this._globalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConfigInput() {
    return this._globalConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // msg_description - computed: true, optional: false, required: false
  public get msgDescription() {
    return this.getStringAttribute('msg_description');
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string[]; 
  public get organizations() {
    return this.getListAttribute('organizations');
  }
  public set organizations(value: string[]) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
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

  // sav_roles - computed: false, optional: true, required: false
  private _savRoles?: string[]; 
  public get savRoles() {
    return this.getListAttribute('sav_roles');
  }
  public set savRoles(value: string[]) {
    this._savRoles = value;
  }
  public resetSavRoles() {
    this._savRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savRolesInput() {
    return this._savRoles;
  }

  // scan_rules - computed: false, optional: true, required: false
  private _scanRules?: string[]; 
  public get scanRules() {
    return this.getListAttribute('scan_rules');
  }
  public set scanRules(value: string[]) {
    this._scanRules = value;
  }
  public resetScanRules() {
    this._scanRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanRulesInput() {
    return this._scanRules;
  }

  // security_systems - computed: false, optional: true, required: false
  private _securitySystems?: string[]; 
  public get securitySystems() {
    return this.getListAttribute('security_systems');
  }
  public set securitySystems(value: string[]) {
    this._securitySystems = value;
  }
  public resetSecuritySystems() {
    this._securitySystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemsInput() {
    return this._securitySystems;
  }

  // transport_members - computed: false, optional: true, required: false
  private _transportMembers?: string; 
  public get transportMembers() {
    return this.getStringAttribute('transport_members');
  }
  public set transportMembers(value: string) {
    this._transportMembers = value;
  }
  public resetTransportMembers() {
    this._transportMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportMembersInput() {
    return this._transportMembers;
  }

  // transport_owner - computed: false, optional: true, required: false
  private _transportOwner?: string; 
  public get transportOwner() {
    return this.getStringAttribute('transport_owner');
  }
  public set transportOwner(value: string) {
    this._transportOwner = value;
  }
  public resetTransportOwner() {
    this._transportOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOwnerInput() {
    return this._transportOwner;
  }

  // update_user - computed: false, optional: true, required: false
  private _updateUser?: string; 
  public get updateUser() {
    return this.getStringAttribute('update_user');
  }
  public set updateUser(value: string) {
    this._updateUser = value;
  }
  public resetUpdateUser() {
    this._updateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserInput() {
    return this._updateUser;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // workflows - computed: false, optional: true, required: false
  private _workflows?: string[]; 
  public get workflows() {
    return this.getListAttribute('workflows');
  }
  public set workflows(value: string[]) {
    this._workflows = value;
  }
  public resetWorkflows() {
    this._workflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsInput() {
    return this._workflows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_v1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._analyticsV1),
      analytics_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._analyticsV2),
      app_onboarding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appOnboarding),
      business_justification: cdktf.stringToTerraform(this._businessJustification),
      connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connections),
      email_template: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailTemplate),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      export_online: cdktf.stringToTerraform(this._exportOnline),
      export_package_version: cdktf.stringToTerraform(this._exportPackageVersion),
      export_path: cdktf.stringToTerraform(this._exportPath),
      global_config: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalConfig),
      organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizations),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      sav_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._savRoles),
      scan_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scanRules),
      security_systems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitySystems),
      transport_members: cdktf.stringToTerraform(this._transportMembers),
      transport_owner: cdktf.stringToTerraform(this._transportOwner),
      update_user: cdktf.stringToTerraform(this._updateUser),
      user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroups),
      workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflows),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_v1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._analyticsV1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      analytics_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._analyticsV2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_onboarding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appOnboarding),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      business_justification: {
        value: cdktf.stringToHclTerraform(this._businessJustification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email_template: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailTemplate),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_online: {
        value: cdktf.stringToHclTerraform(this._exportOnline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_package_version: {
        value: cdktf.stringToHclTerraform(this._exportPackageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_path: {
        value: cdktf.stringToHclTerraform(this._exportPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_config: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalConfig),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organizations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sav_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._savRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scan_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scanRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_systems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securitySystems),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transport_members: {
        value: cdktf.stringToHclTerraform(this._transportMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_owner: {
        value: cdktf.stringToHclTerraform(this._transportOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user: {
        value: cdktf.stringToHclTerraform(this._updateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
