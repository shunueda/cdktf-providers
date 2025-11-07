// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAthenzAllDomainDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * associated application id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#application_id DataAthenzAllDomainDetails#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#aws_account_id DataAthenzAllDomainDetails#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#azure_client DataAthenzAllDomainDetails#azure_client}
  */
  readonly azureClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#azure_subscription DataAthenzAllDomainDetails#azure_subscription}
  */
  readonly azureSubscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#azure_tenant DataAthenzAllDomainDetails#azure_tenant}
  */
  readonly azureTenant?: string;
  /**
  * associated business service with domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#business_service DataAthenzAllDomainDetails#business_service}
  */
  readonly businessService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#contacts DataAthenzAllDomainDetails#contacts}
  */
  readonly contacts?: { [key: string]: string };
  /**
  * description for the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#description DataAthenzAllDomainDetails#description}
  */
  readonly description?: string;
  /**
  * string specifying the environment this domain is used in (production, staging, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#environment DataAthenzAllDomainDetails#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#gcp_project_id DataAthenzAllDomainDetails#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#gcp_project_number DataAthenzAllDomainDetails#gcp_project_number}
  */
  readonly gcpProjectNumber?: string;
  /**
  * all groups in the domain roles will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#group_expiry_days DataAthenzAllDomainDetails#group_expiry_days}
  */
  readonly groupExpiryDays?: number;
  /**
  * set of all groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#group_list DataAthenzAllDomainDetails#group_list}
  */
  readonly groupList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#id DataAthenzAllDomainDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * purge role/group members with expiry date configured days in the past
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#member_purge_expiry_days DataAthenzAllDomainDetails#member_purge_expiry_days}
  */
  readonly memberPurgeExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#name DataAthenzAllDomainDetails#name}
  */
  readonly name: string;
  /**
  * audit organization name for the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#org DataAthenzAllDomainDetails#org}
  */
  readonly org?: string;
  /**
  * set of all policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#policy_list DataAthenzAllDomainDetails#policy_list}
  */
  readonly policyList?: string[];
  /**
  * role certs issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#role_cert_expiry_mins DataAthenzAllDomainDetails#role_cert_expiry_mins}
  */
  readonly roleCertExpiryMins?: number;
  /**
  * set of all roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#role_list DataAthenzAllDomainDetails#role_list}
  */
  readonly roleList?: string[];
  /**
  * service identity certs issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#service_cert_expiry_mins DataAthenzAllDomainDetails#service_cert_expiry_mins}
  */
  readonly serviceCertExpiryMins?: number;
  /**
  * all services in the domain roles will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#service_expiry_days DataAthenzAllDomainDetails#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * set of all services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#service_list DataAthenzAllDomainDetails#service_list}
  */
  readonly serviceList?: string[];
  /**
  * associated slack channel for notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#slack_channel DataAthenzAllDomainDetails#slack_channel}
  */
  readonly slackChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#tags DataAthenzAllDomainDetails#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * tokens issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#token_expiry_mins DataAthenzAllDomainDetails#token_expiry_mins}
  */
  readonly tokenExpiryMins?: number;
  /**
  * membership filtered based on user authority configured attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#user_authority_filter DataAthenzAllDomainDetails#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * all user members in the domain will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#user_expiry_days DataAthenzAllDomainDetails#user_expiry_days}
  */
  readonly userExpiryDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details athenz_all_domain_details}
*/
export class DataAthenzAllDomainDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_all_domain_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAthenzAllDomainDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAthenzAllDomainDetails to import
  * @param importFromId The id of the existing DataAthenzAllDomainDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAthenzAllDomainDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_all_domain_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/all_domain_details athenz_all_domain_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAthenzAllDomainDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAthenzAllDomainDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_all_domain_details',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._awsAccountId = config.awsAccountId;
    this._azureClient = config.azureClient;
    this._azureSubscription = config.azureSubscription;
    this._azureTenant = config.azureTenant;
    this._businessService = config.businessService;
    this._contacts = config.contacts;
    this._description = config.description;
    this._environment = config.environment;
    this._gcpProjectId = config.gcpProjectId;
    this._gcpProjectNumber = config.gcpProjectNumber;
    this._groupExpiryDays = config.groupExpiryDays;
    this._groupList = config.groupList;
    this._id = config.id;
    this._memberPurgeExpiryDays = config.memberPurgeExpiryDays;
    this._name = config.name;
    this._org = config.org;
    this._policyList = config.policyList;
    this._roleCertExpiryMins = config.roleCertExpiryMins;
    this._roleList = config.roleList;
    this._serviceCertExpiryMins = config.serviceCertExpiryMins;
    this._serviceExpiryDays = config.serviceExpiryDays;
    this._serviceList = config.serviceList;
    this._slackChannel = config.slackChannel;
    this._tags = config.tags;
    this._tokenExpiryMins = config.tokenExpiryMins;
    this._userAuthorityFilter = config.userAuthorityFilter;
    this._userExpiryDays = config.userExpiryDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // azure_client - computed: false, optional: true, required: false
  private _azureClient?: string; 
  public get azureClient() {
    return this.getStringAttribute('azure_client');
  }
  public set azureClient(value: string) {
    this._azureClient = value;
  }
  public resetAzureClient() {
    this._azureClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientInput() {
    return this._azureClient;
  }

  // azure_subscription - computed: false, optional: true, required: false
  private _azureSubscription?: string; 
  public get azureSubscription() {
    return this.getStringAttribute('azure_subscription');
  }
  public set azureSubscription(value: string) {
    this._azureSubscription = value;
  }
  public resetAzureSubscription() {
    this._azureSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionInput() {
    return this._azureSubscription;
  }

  // azure_tenant - computed: false, optional: true, required: false
  private _azureTenant?: string; 
  public get azureTenant() {
    return this.getStringAttribute('azure_tenant');
  }
  public set azureTenant(value: string) {
    this._azureTenant = value;
  }
  public resetAzureTenant() {
    this._azureTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantInput() {
    return this._azureTenant;
  }

  // business_service - computed: false, optional: true, required: false
  private _businessService?: string; 
  public get businessService() {
    return this.getStringAttribute('business_service');
  }
  public set businessService(value: string) {
    this._businessService = value;
  }
  public resetBusinessService() {
    this._businessService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessServiceInput() {
    return this._businessService;
  }

  // contacts - computed: false, optional: true, required: false
  private _contacts?: { [key: string]: string }; 
  public get contacts() {
    return this.getStringMapAttribute('contacts');
  }
  public set contacts(value: { [key: string]: string }) {
    this._contacts = value;
  }
  public resetContacts() {
    this._contacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsInput() {
    return this._contacts;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // gcp_project_id - computed: false, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcp_project_number - computed: false, optional: true, required: false
  private _gcpProjectNumber?: string; 
  public get gcpProjectNumber() {
    return this.getStringAttribute('gcp_project_number');
  }
  public set gcpProjectNumber(value: string) {
    this._gcpProjectNumber = value;
  }
  public resetGcpProjectNumber() {
    this._gcpProjectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectNumberInput() {
    return this._gcpProjectNumber;
  }

  // group_expiry_days - computed: false, optional: true, required: false
  private _groupExpiryDays?: number; 
  public get groupExpiryDays() {
    return this.getNumberAttribute('group_expiry_days');
  }
  public set groupExpiryDays(value: number) {
    this._groupExpiryDays = value;
  }
  public resetGroupExpiryDays() {
    this._groupExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupExpiryDaysInput() {
    return this._groupExpiryDays;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList?: string[]; 
  public get groupList() {
    return cdktf.Fn.tolist(this.getListAttribute('group_list'));
  }
  public set groupList(value: string[]) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
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

  // member_purge_expiry_days - computed: false, optional: true, required: false
  private _memberPurgeExpiryDays?: number; 
  public get memberPurgeExpiryDays() {
    return this.getNumberAttribute('member_purge_expiry_days');
  }
  public set memberPurgeExpiryDays(value: number) {
    this._memberPurgeExpiryDays = value;
  }
  public resetMemberPurgeExpiryDays() {
    this._memberPurgeExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPurgeExpiryDaysInput() {
    return this._memberPurgeExpiryDays;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // policy_list - computed: false, optional: true, required: false
  private _policyList?: string[]; 
  public get policyList() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_list'));
  }
  public set policyList(value: string[]) {
    this._policyList = value;
  }
  public resetPolicyList() {
    this._policyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyListInput() {
    return this._policyList;
  }

  // role_cert_expiry_mins - computed: false, optional: true, required: false
  private _roleCertExpiryMins?: number; 
  public get roleCertExpiryMins() {
    return this.getNumberAttribute('role_cert_expiry_mins');
  }
  public set roleCertExpiryMins(value: number) {
    this._roleCertExpiryMins = value;
  }
  public resetRoleCertExpiryMins() {
    this._roleCertExpiryMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleCertExpiryMinsInput() {
    return this._roleCertExpiryMins;
  }

  // role_list - computed: false, optional: true, required: false
  private _roleList?: string[]; 
  public get roleList() {
    return cdktf.Fn.tolist(this.getListAttribute('role_list'));
  }
  public set roleList(value: string[]) {
    this._roleList = value;
  }
  public resetRoleList() {
    this._roleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleListInput() {
    return this._roleList;
  }

  // service_cert_expiry_mins - computed: false, optional: true, required: false
  private _serviceCertExpiryMins?: number; 
  public get serviceCertExpiryMins() {
    return this.getNumberAttribute('service_cert_expiry_mins');
  }
  public set serviceCertExpiryMins(value: number) {
    this._serviceCertExpiryMins = value;
  }
  public resetServiceCertExpiryMins() {
    this._serviceCertExpiryMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCertExpiryMinsInput() {
    return this._serviceCertExpiryMins;
  }

  // service_expiry_days - computed: false, optional: true, required: false
  private _serviceExpiryDays?: number; 
  public get serviceExpiryDays() {
    return this.getNumberAttribute('service_expiry_days');
  }
  public set serviceExpiryDays(value: number) {
    this._serviceExpiryDays = value;
  }
  public resetServiceExpiryDays() {
    this._serviceExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExpiryDaysInput() {
    return this._serviceExpiryDays;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList?: string[]; 
  public get serviceList() {
    return cdktf.Fn.tolist(this.getListAttribute('service_list'));
  }
  public set serviceList(value: string[]) {
    this._serviceList = value;
  }
  public resetServiceList() {
    this._serviceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList;
  }

  // slack_channel - computed: false, optional: true, required: false
  private _slackChannel?: string; 
  public get slackChannel() {
    return this.getStringAttribute('slack_channel');
  }
  public set slackChannel(value: string) {
    this._slackChannel = value;
  }
  public resetSlackChannel() {
    this._slackChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token_expiry_mins - computed: false, optional: true, required: false
  private _tokenExpiryMins?: number; 
  public get tokenExpiryMins() {
    return this.getNumberAttribute('token_expiry_mins');
  }
  public set tokenExpiryMins(value: number) {
    this._tokenExpiryMins = value;
  }
  public resetTokenExpiryMins() {
    this._tokenExpiryMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpiryMinsInput() {
    return this._tokenExpiryMins;
  }

  // user_authority_filter - computed: false, optional: true, required: false
  private _userAuthorityFilter?: string; 
  public get userAuthorityFilter() {
    return this.getStringAttribute('user_authority_filter');
  }
  public set userAuthorityFilter(value: string) {
    this._userAuthorityFilter = value;
  }
  public resetUserAuthorityFilter() {
    this._userAuthorityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorityFilterInput() {
    return this._userAuthorityFilter;
  }

  // user_expiry_days - computed: false, optional: true, required: false
  private _userExpiryDays?: number; 
  public get userExpiryDays() {
    return this.getNumberAttribute('user_expiry_days');
  }
  public set userExpiryDays(value: number) {
    this._userExpiryDays = value;
  }
  public resetUserExpiryDays() {
    this._userExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userExpiryDaysInput() {
    return this._userExpiryDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      azure_client: cdktf.stringToTerraform(this._azureClient),
      azure_subscription: cdktf.stringToTerraform(this._azureSubscription),
      azure_tenant: cdktf.stringToTerraform(this._azureTenant),
      business_service: cdktf.stringToTerraform(this._businessService),
      contacts: cdktf.hashMapper(cdktf.stringToTerraform)(this._contacts),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      gcp_project_number: cdktf.stringToTerraform(this._gcpProjectNumber),
      group_expiry_days: cdktf.numberToTerraform(this._groupExpiryDays),
      group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupList),
      id: cdktf.stringToTerraform(this._id),
      member_purge_expiry_days: cdktf.numberToTerraform(this._memberPurgeExpiryDays),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      policy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyList),
      role_cert_expiry_mins: cdktf.numberToTerraform(this._roleCertExpiryMins),
      role_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleList),
      service_cert_expiry_mins: cdktf.numberToTerraform(this._serviceCertExpiryMins),
      service_expiry_days: cdktf.numberToTerraform(this._serviceExpiryDays),
      service_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceList),
      slack_channel: cdktf.stringToTerraform(this._slackChannel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      token_expiry_mins: cdktf.numberToTerraform(this._tokenExpiryMins),
      user_authority_filter: cdktf.stringToTerraform(this._userAuthorityFilter),
      user_expiry_days: cdktf.numberToTerraform(this._userExpiryDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client: {
        value: cdktf.stringToHclTerraform(this._azureClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription: {
        value: cdktf.stringToHclTerraform(this._azureSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant: {
        value: cdktf.stringToHclTerraform(this._azureTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_service: {
        value: cdktf.stringToHclTerraform(this._businessService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contacts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._contacts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_number: {
        value: cdktf.stringToHclTerraform(this._gcpProjectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_expiry_days: {
        value: cdktf.numberToHclTerraform(this._groupExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_purge_expiry_days: {
        value: cdktf.numberToHclTerraform(this._memberPurgeExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_cert_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._roleCertExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_cert_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._serviceCertExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_expiry_days: {
        value: cdktf.numberToHclTerraform(this._serviceExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      slack_channel: {
        value: cdktf.stringToHclTerraform(this._slackChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      token_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._tokenExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_authority_filter: {
        value: cdktf.stringToHclTerraform(this._userAuthorityFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_expiry_days: {
        value: cdktf.numberToHclTerraform(this._userExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
