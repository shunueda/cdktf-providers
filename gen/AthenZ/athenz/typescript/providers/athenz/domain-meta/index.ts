// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainMetaConfig extends cdktf.TerraformMetaArguments {
  /**
  * associated application id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#application_id DomainMeta#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#audit_ref DomainMeta#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * associated business service with domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#business_service DomainMeta#business_service}
  */
  readonly businessService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#contacts DomainMeta#contacts}
  */
  readonly contacts?: { [key: string]: string };
  /**
  * description for the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#description DomainMeta#description}
  */
  readonly description?: string;
  /**
  * name of the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#domain DomainMeta#domain}
  */
  readonly domain: string;
  /**
  * string specifying the environment this domain is used in (production, staging, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#environment DomainMeta#environment}
  */
  readonly environment?: string;
  /**
  * all groups in the domain roles will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#group_expiry_days DomainMeta#group_expiry_days}
  */
  readonly groupExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#id DomainMeta#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * purge role/group members with expiry date configured days in the past
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#member_purge_expiry_days DomainMeta#member_purge_expiry_days}
  */
  readonly memberPurgeExpiryDays?: number;
  /**
  * role certs issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#role_cert_expiry_mins DomainMeta#role_cert_expiry_mins}
  */
  readonly roleCertExpiryMins?: number;
  /**
  * service identity certs issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#service_cert_expiry_mins DomainMeta#service_cert_expiry_mins}
  */
  readonly serviceCertExpiryMins?: number;
  /**
  * all services in the domain roles will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#service_expiry_days DomainMeta#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * associated slack channel for notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#slack_channel DomainMeta#slack_channel}
  */
  readonly slackChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#tags DomainMeta#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * tokens issued for this domain will have specified max timeout in mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#token_expiry_mins DomainMeta#token_expiry_mins}
  */
  readonly tokenExpiryMins?: number;
  /**
  * membership filtered based on user authority configured attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#user_authority_filter DomainMeta#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * all user members in the domain will have specified max expiry days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#user_expiry_days DomainMeta#user_expiry_days}
  */
  readonly userExpiryDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta athenz_domain_meta}
*/
export class DomainMeta extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_domain_meta";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainMeta resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainMeta to import
  * @param importFromId The id of the existing DomainMeta that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainMeta to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_domain_meta", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/domain_meta athenz_domain_meta} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainMetaConfig
  */
  public constructor(scope: Construct, id: string, config: DomainMetaConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_domain_meta',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49',
        providerVersionConstraint: '1.0.49'
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
    this._auditRef = config.auditRef;
    this._businessService = config.businessService;
    this._contacts = config.contacts;
    this._description = config.description;
    this._domain = config.domain;
    this._environment = config.environment;
    this._groupExpiryDays = config.groupExpiryDays;
    this._id = config.id;
    this._memberPurgeExpiryDays = config.memberPurgeExpiryDays;
    this._roleCertExpiryMins = config.roleCertExpiryMins;
    this._serviceCertExpiryMins = config.serviceCertExpiryMins;
    this._serviceExpiryDays = config.serviceExpiryDays;
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

  // audit_ref - computed: false, optional: true, required: false
  private _auditRef?: string; 
  public get auditRef() {
    return this.getStringAttribute('audit_ref');
  }
  public set auditRef(value: string) {
    this._auditRef = value;
  }
  public resetAuditRef() {
    this._auditRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditRefInput() {
    return this._auditRef;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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
      audit_ref: cdktf.stringToTerraform(this._auditRef),
      business_service: cdktf.stringToTerraform(this._businessService),
      contacts: cdktf.hashMapper(cdktf.stringToTerraform)(this._contacts),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      environment: cdktf.stringToTerraform(this._environment),
      group_expiry_days: cdktf.numberToTerraform(this._groupExpiryDays),
      id: cdktf.stringToTerraform(this._id),
      member_purge_expiry_days: cdktf.numberToTerraform(this._memberPurgeExpiryDays),
      role_cert_expiry_mins: cdktf.numberToTerraform(this._roleCertExpiryMins),
      service_cert_expiry_mins: cdktf.numberToTerraform(this._serviceCertExpiryMins),
      service_expiry_days: cdktf.numberToTerraform(this._serviceExpiryDays),
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
      audit_ref: {
        value: cdktf.stringToHclTerraform(this._auditRef),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      group_expiry_days: {
        value: cdktf.numberToHclTerraform(this._groupExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      role_cert_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._roleCertExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
