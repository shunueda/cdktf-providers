// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySystemResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the workflow to be used for approvals for an access request, which can be for an account, entitlements, role, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#access_add_workflow SecuritySystemResource#access_add_workflow}
  */
  readonly accessAddWorkflow?: string;
  /**
  * Specify the workflow to be used when access has to be revoked, which can be for an account, entitlement, or any other de-provisioning task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#access_remove_workflow SecuritySystemResource#access_remove_workflow}
  */
  readonly accessRemoveWorkflow?: string;
  /**
  * Workflow for adding a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#add_service_account_workflow SecuritySystemResource#add_service_account_workflow}
  */
  readonly addServiceAccountWorkflow?: string;
  /**
  * Specify true to enable automated provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#automated_provisioning SecuritySystemResource#automated_provisioning}
  */
  readonly automatedProvisioning?: string;
  /**
  * Query to filter the access and display of the endpoint to specific users. If you do not define a query, the endpoint is displayed for all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#connection_parameters SecuritySystemResource#connection_parameters}
  */
  readonly connectionParameters?: string;
  /**
  * Select the connection name for performing reconciliation of identity objects from third-party application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#connectionname SecuritySystemResource#connectionname}
  */
  readonly connectionname?: string;
  /**
  * Specify a user-friendly display name that is shown on the the user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#display_name SecuritySystemResource#display_name}
  */
  readonly displayName: string;
  /**
  * Contains JSON configuration for external risk connections and is applicable only for a few connections like SAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#external_risk_connection_json SecuritySystemResource#external_risk_connection_json}
  */
  readonly externalRiskConnectionJson?: string;
  /**
  * Firefighter ID Request Access Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#firefighterid_request_access_workflow SecuritySystemResource#firefighterid_request_access_workflow}
  */
  readonly firefighteridRequestAccessWorkflow?: string;
  /**
  * Firefighter ID Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#firefighterid_workflow SecuritySystemResource#firefighterid_workflow}
  */
  readonly firefighteridWorkflow?: string;
  /**
  * Security system for which you want to create an endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#hostname SecuritySystemResource#hostname}
  */
  readonly hostname?: string;
  /**
  * You can use this option used to filter out columns in SOD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#inherent_sod_report_fields SecuritySystemResource#inherent_sod_report_fields}
  */
  readonly inherentSodReportFields?: string[];
  /**
  * Use this flag to prevent users from raising duplicate requests for the same applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#instant_provision SecuritySystemResource#instant_provision}
  */
  readonly instantProvision?: string;
  /**
  * Use this setting to assign the password policy for the security system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#policy_rule SecuritySystemResource#policy_rule}
  */
  readonly policyRule?: string;
  /**
  * Use this setting to assign the password policy which will be used to set the service account passwords for the security system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#policy_rule_service_account SecuritySystemResource#policy_rule_service_account}
  */
  readonly policyRuleServiceAccount?: string;
  /**
  * Description for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#port SecuritySystemResource#port}
  */
  readonly port?: string;
  /**
  * Query to filter the access and display of the endpoint to specific users. If you do not define a query, the endpoint is displayed for all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#proposed_account_owners_workflow SecuritySystemResource#proposed_account_owners_workflow}
  */
  readonly proposedAccountOwnersWorkflow?: string;
  /**
  * Specify relevant comments for performing provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#provisioning_comments SecuritySystemResource#provisioning_comments}
  */
  readonly provisioningComments?: string;
  /**
  * You can use a separate connection to an endpoint where you are performing provisioning or deprovisioning. Based on your requirement, you can specify a separate connection where you want to perform provisioning and de-provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#provisioning_connection SecuritySystemResource#provisioning_connection}
  */
  readonly provisioningConnection?: string;
  /**
  * Specify the number of tries to be used for performing provisioning / de-provisioning to the third-party application. You can specify provisioningTries between 1 to 20 based on your requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#provisioning_tries SecuritySystemResource#provisioning_tries}
  */
  readonly provisioningTries?: string;
  /**
  * Specify true to import data from the endpoint associated to the security system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#recon_application SecuritySystemResource#recon_application}
  */
  readonly reconApplication?: string;
  /**
  * Workflow for removing a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#remove_service_account_workflow SecuritySystemResource#remove_service_account_workflow}
  */
  readonly removeServiceAccountWorkflow?: string;
  /**
  * Specify the Service Desk Connection used for integration with a ticketing system, which can be a disconnected system too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#service_desk_connection SecuritySystemResource#service_desk_connection}
  */
  readonly serviceDeskConnection?: string;
  /**
  * Name of the security system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#systemname SecuritySystemResource#systemname}
  */
  readonly systemname: string;
  /**
  * Specify true to enable the connectivity with any system over the open-source connectors such as REST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#use_open_connector SecuritySystemResource#use_open_connector}
  */
  readonly useOpenConnector?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource saviynt_security_system_resource}
*/
export class SecuritySystemResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_security_system_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySystemResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySystemResource to import
  * @param importFromId The id of the existing SecuritySystemResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySystemResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_security_system_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/security_system_resource saviynt_security_system_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySystemResourceConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritySystemResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_security_system_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAddWorkflow = config.accessAddWorkflow;
    this._accessRemoveWorkflow = config.accessRemoveWorkflow;
    this._addServiceAccountWorkflow = config.addServiceAccountWorkflow;
    this._automatedProvisioning = config.automatedProvisioning;
    this._connectionParameters = config.connectionParameters;
    this._connectionname = config.connectionname;
    this._displayName = config.displayName;
    this._externalRiskConnectionJson = config.externalRiskConnectionJson;
    this._firefighteridRequestAccessWorkflow = config.firefighteridRequestAccessWorkflow;
    this._firefighteridWorkflow = config.firefighteridWorkflow;
    this._hostname = config.hostname;
    this._inherentSodReportFields = config.inherentSodReportFields;
    this._instantProvision = config.instantProvision;
    this._policyRule = config.policyRule;
    this._policyRuleServiceAccount = config.policyRuleServiceAccount;
    this._port = config.port;
    this._proposedAccountOwnersWorkflow = config.proposedAccountOwnersWorkflow;
    this._provisioningComments = config.provisioningComments;
    this._provisioningConnection = config.provisioningConnection;
    this._provisioningTries = config.provisioningTries;
    this._reconApplication = config.reconApplication;
    this._removeServiceAccountWorkflow = config.removeServiceAccountWorkflow;
    this._serviceDeskConnection = config.serviceDeskConnection;
    this._systemname = config.systemname;
    this._useOpenConnector = config.useOpenConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_add_workflow - computed: true, optional: true, required: false
  private _accessAddWorkflow?: string; 
  public get accessAddWorkflow() {
    return this.getStringAttribute('access_add_workflow');
  }
  public set accessAddWorkflow(value: string) {
    this._accessAddWorkflow = value;
  }
  public resetAccessAddWorkflow() {
    this._accessAddWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAddWorkflowInput() {
    return this._accessAddWorkflow;
  }

  // access_remove_workflow - computed: true, optional: true, required: false
  private _accessRemoveWorkflow?: string; 
  public get accessRemoveWorkflow() {
    return this.getStringAttribute('access_remove_workflow');
  }
  public set accessRemoveWorkflow(value: string) {
    this._accessRemoveWorkflow = value;
  }
  public resetAccessRemoveWorkflow() {
    this._accessRemoveWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRemoveWorkflowInput() {
    return this._accessRemoveWorkflow;
  }

  // add_service_account_workflow - computed: true, optional: true, required: false
  private _addServiceAccountWorkflow?: string; 
  public get addServiceAccountWorkflow() {
    return this.getStringAttribute('add_service_account_workflow');
  }
  public set addServiceAccountWorkflow(value: string) {
    this._addServiceAccountWorkflow = value;
  }
  public resetAddServiceAccountWorkflow() {
    this._addServiceAccountWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addServiceAccountWorkflowInput() {
    return this._addServiceAccountWorkflow;
  }

  // automated_provisioning - computed: true, optional: true, required: false
  private _automatedProvisioning?: string; 
  public get automatedProvisioning() {
    return this.getStringAttribute('automated_provisioning');
  }
  public set automatedProvisioning(value: string) {
    this._automatedProvisioning = value;
  }
  public resetAutomatedProvisioning() {
    this._automatedProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedProvisioningInput() {
    return this._automatedProvisioning;
  }

  // connection_parameters - computed: true, optional: true, required: false
  private _connectionParameters?: string; 
  public get connectionParameters() {
    return this.getStringAttribute('connection_parameters');
  }
  public set connectionParameters(value: string) {
    this._connectionParameters = value;
  }
  public resetConnectionParameters() {
    this._connectionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionParametersInput() {
    return this._connectionParameters;
  }

  // connectionname - computed: true, optional: true, required: false
  private _connectionname?: string; 
  public get connectionname() {
    return this.getStringAttribute('connectionname');
  }
  public set connectionname(value: string) {
    this._connectionname = value;
  }
  public resetConnectionname() {
    this._connectionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionnameInput() {
    return this._connectionname;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // external_risk_connection_json - computed: true, optional: true, required: false
  private _externalRiskConnectionJson?: string; 
  public get externalRiskConnectionJson() {
    return this.getStringAttribute('external_risk_connection_json');
  }
  public set externalRiskConnectionJson(value: string) {
    this._externalRiskConnectionJson = value;
  }
  public resetExternalRiskConnectionJson() {
    this._externalRiskConnectionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRiskConnectionJsonInput() {
    return this._externalRiskConnectionJson;
  }

  // firefighterid_request_access_workflow - computed: true, optional: true, required: false
  private _firefighteridRequestAccessWorkflow?: string; 
  public get firefighteridRequestAccessWorkflow() {
    return this.getStringAttribute('firefighterid_request_access_workflow');
  }
  public set firefighteridRequestAccessWorkflow(value: string) {
    this._firefighteridRequestAccessWorkflow = value;
  }
  public resetFirefighteridRequestAccessWorkflow() {
    this._firefighteridRequestAccessWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firefighteridRequestAccessWorkflowInput() {
    return this._firefighteridRequestAccessWorkflow;
  }

  // firefighterid_workflow - computed: true, optional: true, required: false
  private _firefighteridWorkflow?: string; 
  public get firefighteridWorkflow() {
    return this.getStringAttribute('firefighterid_workflow');
  }
  public set firefighteridWorkflow(value: string) {
    this._firefighteridWorkflow = value;
  }
  public resetFirefighteridWorkflow() {
    this._firefighteridWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firefighteridWorkflowInput() {
    return this._firefighteridWorkflow;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherent_sod_report_fields - computed: true, optional: true, required: false
  private _inherentSodReportFields?: string[]; 
  public get inherentSodReportFields() {
    return cdktf.Fn.tolist(this.getListAttribute('inherent_sod_report_fields'));
  }
  public set inherentSodReportFields(value: string[]) {
    this._inherentSodReportFields = value;
  }
  public resetInherentSodReportFields() {
    this._inherentSodReportFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inherentSodReportFieldsInput() {
    return this._inherentSodReportFields;
  }

  // instant_provision - computed: true, optional: true, required: false
  private _instantProvision?: string; 
  public get instantProvision() {
    return this.getStringAttribute('instant_provision');
  }
  public set instantProvision(value: string) {
    this._instantProvision = value;
  }
  public resetInstantProvision() {
    this._instantProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantProvisionInput() {
    return this._instantProvision;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // policy_rule - computed: true, optional: true, required: false
  private _policyRule?: string; 
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }
  public set policyRule(value: string) {
    this._policyRule = value;
  }
  public resetPolicyRule() {
    this._policyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleInput() {
    return this._policyRule;
  }

  // policy_rule_service_account - computed: true, optional: true, required: false
  private _policyRuleServiceAccount?: string; 
  public get policyRuleServiceAccount() {
    return this.getStringAttribute('policy_rule_service_account');
  }
  public set policyRuleServiceAccount(value: string) {
    this._policyRuleServiceAccount = value;
  }
  public resetPolicyRuleServiceAccount() {
    this._policyRuleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleServiceAccountInput() {
    return this._policyRuleServiceAccount;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proposed_account_owners_workflow - computed: true, optional: true, required: false
  private _proposedAccountOwnersWorkflow?: string; 
  public get proposedAccountOwnersWorkflow() {
    return this.getStringAttribute('proposed_account_owners_workflow');
  }
  public set proposedAccountOwnersWorkflow(value: string) {
    this._proposedAccountOwnersWorkflow = value;
  }
  public resetProposedAccountOwnersWorkflow() {
    this._proposedAccountOwnersWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposedAccountOwnersWorkflowInput() {
    return this._proposedAccountOwnersWorkflow;
  }

  // provisioning_comments - computed: true, optional: true, required: false
  private _provisioningComments?: string; 
  public get provisioningComments() {
    return this.getStringAttribute('provisioning_comments');
  }
  public set provisioningComments(value: string) {
    this._provisioningComments = value;
  }
  public resetProvisioningComments() {
    this._provisioningComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningCommentsInput() {
    return this._provisioningComments;
  }

  // provisioning_connection - computed: true, optional: true, required: false
  private _provisioningConnection?: string; 
  public get provisioningConnection() {
    return this.getStringAttribute('provisioning_connection');
  }
  public set provisioningConnection(value: string) {
    this._provisioningConnection = value;
  }
  public resetProvisioningConnection() {
    this._provisioningConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningConnectionInput() {
    return this._provisioningConnection;
  }

  // provisioning_tries - computed: true, optional: true, required: false
  private _provisioningTries?: string; 
  public get provisioningTries() {
    return this.getStringAttribute('provisioning_tries');
  }
  public set provisioningTries(value: string) {
    this._provisioningTries = value;
  }
  public resetProvisioningTries() {
    this._provisioningTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTriesInput() {
    return this._provisioningTries;
  }

  // recon_application - computed: true, optional: true, required: false
  private _reconApplication?: string; 
  public get reconApplication() {
    return this.getStringAttribute('recon_application');
  }
  public set reconApplication(value: string) {
    this._reconApplication = value;
  }
  public resetReconApplication() {
    this._reconApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconApplicationInput() {
    return this._reconApplication;
  }

  // remove_service_account_workflow - computed: true, optional: true, required: false
  private _removeServiceAccountWorkflow?: string; 
  public get removeServiceAccountWorkflow() {
    return this.getStringAttribute('remove_service_account_workflow');
  }
  public set removeServiceAccountWorkflow(value: string) {
    this._removeServiceAccountWorkflow = value;
  }
  public resetRemoveServiceAccountWorkflow() {
    this._removeServiceAccountWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeServiceAccountWorkflowInput() {
    return this._removeServiceAccountWorkflow;
  }

  // service_desk_connection - computed: true, optional: true, required: false
  private _serviceDeskConnection?: string; 
  public get serviceDeskConnection() {
    return this.getStringAttribute('service_desk_connection');
  }
  public set serviceDeskConnection(value: string) {
    this._serviceDeskConnection = value;
  }
  public resetServiceDeskConnection() {
    this._serviceDeskConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDeskConnectionInput() {
    return this._serviceDeskConnection;
  }

  // systemname - computed: false, optional: false, required: true
  private _systemname?: string; 
  public get systemname() {
    return this.getStringAttribute('systemname');
  }
  public set systemname(value: string) {
    this._systemname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemnameInput() {
    return this._systemname;
  }

  // use_open_connector - computed: true, optional: true, required: false
  private _useOpenConnector?: boolean | cdktf.IResolvable; 
  public get useOpenConnector() {
    return this.getBooleanAttribute('use_open_connector');
  }
  public set useOpenConnector(value: boolean | cdktf.IResolvable) {
    this._useOpenConnector = value;
  }
  public resetUseOpenConnector() {
    this._useOpenConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOpenConnectorInput() {
    return this._useOpenConnector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_add_workflow: cdktf.stringToTerraform(this._accessAddWorkflow),
      access_remove_workflow: cdktf.stringToTerraform(this._accessRemoveWorkflow),
      add_service_account_workflow: cdktf.stringToTerraform(this._addServiceAccountWorkflow),
      automated_provisioning: cdktf.stringToTerraform(this._automatedProvisioning),
      connection_parameters: cdktf.stringToTerraform(this._connectionParameters),
      connectionname: cdktf.stringToTerraform(this._connectionname),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_risk_connection_json: cdktf.stringToTerraform(this._externalRiskConnectionJson),
      firefighterid_request_access_workflow: cdktf.stringToTerraform(this._firefighteridRequestAccessWorkflow),
      firefighterid_workflow: cdktf.stringToTerraform(this._firefighteridWorkflow),
      hostname: cdktf.stringToTerraform(this._hostname),
      inherent_sod_report_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inherentSodReportFields),
      instant_provision: cdktf.stringToTerraform(this._instantProvision),
      policy_rule: cdktf.stringToTerraform(this._policyRule),
      policy_rule_service_account: cdktf.stringToTerraform(this._policyRuleServiceAccount),
      port: cdktf.stringToTerraform(this._port),
      proposed_account_owners_workflow: cdktf.stringToTerraform(this._proposedAccountOwnersWorkflow),
      provisioning_comments: cdktf.stringToTerraform(this._provisioningComments),
      provisioning_connection: cdktf.stringToTerraform(this._provisioningConnection),
      provisioning_tries: cdktf.stringToTerraform(this._provisioningTries),
      recon_application: cdktf.stringToTerraform(this._reconApplication),
      remove_service_account_workflow: cdktf.stringToTerraform(this._removeServiceAccountWorkflow),
      service_desk_connection: cdktf.stringToTerraform(this._serviceDeskConnection),
      systemname: cdktf.stringToTerraform(this._systemname),
      use_open_connector: cdktf.booleanToTerraform(this._useOpenConnector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_add_workflow: {
        value: cdktf.stringToHclTerraform(this._accessAddWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_remove_workflow: {
        value: cdktf.stringToHclTerraform(this._accessRemoveWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_service_account_workflow: {
        value: cdktf.stringToHclTerraform(this._addServiceAccountWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_provisioning: {
        value: cdktf.stringToHclTerraform(this._automatedProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_parameters: {
        value: cdktf.stringToHclTerraform(this._connectionParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectionname: {
        value: cdktf.stringToHclTerraform(this._connectionname),
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
      external_risk_connection_json: {
        value: cdktf.stringToHclTerraform(this._externalRiskConnectionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firefighterid_request_access_workflow: {
        value: cdktf.stringToHclTerraform(this._firefighteridRequestAccessWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firefighterid_workflow: {
        value: cdktf.stringToHclTerraform(this._firefighteridWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherent_sod_report_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inherentSodReportFields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instant_provision: {
        value: cdktf.stringToHclTerraform(this._instantProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule: {
        value: cdktf.stringToHclTerraform(this._policyRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule_service_account: {
        value: cdktf.stringToHclTerraform(this._policyRuleServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposed_account_owners_workflow: {
        value: cdktf.stringToHclTerraform(this._proposedAccountOwnersWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_comments: {
        value: cdktf.stringToHclTerraform(this._provisioningComments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_connection: {
        value: cdktf.stringToHclTerraform(this._provisioningConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_tries: {
        value: cdktf.stringToHclTerraform(this._provisioningTries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recon_application: {
        value: cdktf.stringToHclTerraform(this._reconApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_service_account_workflow: {
        value: cdktf.stringToHclTerraform(this._removeServiceAccountWorkflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_desk_connection: {
        value: cdktf.stringToHclTerraform(this._serviceDeskConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      systemname: {
        value: cdktf.stringToHclTerraform(this._systemname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_open_connector: {
        value: cdktf.booleanToHclTerraform(this._useOpenConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
