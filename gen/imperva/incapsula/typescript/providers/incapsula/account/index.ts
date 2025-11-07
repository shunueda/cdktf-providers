// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#account_name Account#account_name}
  */
  readonly accountName?: string;
  /**
  * Blocks Imperva from performing sensitive operations on your behalf. Options are `true`, `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#consent_required Account#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * Default data region of the account for newly created sites. Options are `APAC`, `EU`, `US` and `DEFAULT`. Defaults to `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#data_storage_region Account#data_storage_region}
  */
  readonly dataStorageRegion?: string;
  /**
  * Email address. For example: joe@example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#email Account#email}
  */
  readonly email: string;
  /**
  * Enable HTTP/2 for traffic between end-users (visitors) and Imperva for newly created SSL sites. Options are `true` and `false`. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#enable_http2_for_new_sites Account#enable_http2_for_new_sites}
  */
  readonly enableHttp2ForNewSites?: string;
  /**
  * Enable HTTP/2 support for traffic between Imperva and your origin server for newly created SSL sites. This option can only be 'true' once 'enable_http2_for_new_sites' is enabled for newly created sites. Options are `true` and `false`. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#enable_http2_to_origin_for_new_sites Account#enable_http2_to_origin_for_new_sites}
  */
  readonly enableHttp2ToOriginForNewSites?: string;
  /**
  * Base64 encoded template for an error page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#error_page_template Account#error_page_template}
  */
  readonly errorPageTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Duration of inactivity in minutes before timeout. Options are 15,30,60,90,120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#inactivity_timeout Account#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * The log level. Options are `full`, `security`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#log_level Account#log_level}
  */
  readonly logLevel?: string;
  /**
  * Available only for Enterprise Plan customers that purchased the Logs Integration SKU. Numeric identifier of the account that purchased the logs integration SKU and which collects the logs. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#logs_account_id Account#logs_account_id}
  */
  readonly logsAccountId?: number;
  /**
  * Add naked domain SAN to Incapsula SSL certificates for new www sites. Options are `true` and `false`. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#naked_domain_san_for_new_www_sites Account#naked_domain_san_for_new_www_sites}
  */
  readonly nakedDomainSanForNewWwwSites?: string;
  /**
  * The newly created account's parent id. If not specified, the invoking account will be assigned as the parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#parent_id Account#parent_id}
  */
  readonly parentId?: number;
  /**
  * An identifier of the plan to assign to the new account. For example, ent100 for the Enterprise 100 plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#plan_id Account#plan_id}
  */
  readonly planId?: string;
  /**
  * Customer specific identifier for this operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#ref_id Account#ref_id}
  */
  readonly refId?: string;
  /**
  * Allow sites in the account to support all TLS versions for connectivity between clients (visitors) and the Imperva service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#support_all_tls_versions Account#support_all_tls_versions}
  */
  readonly supportAllTlsVersions?: string;
  /**
  * The account owner's name. For example: John Doe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#user_name Account#user_name}
  */
  readonly userName?: string;
  /**
  * Add wildcard SAN to Incapsula SSL certificates for new sites. Options are `true`, `false` and `default`. Defaults to `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#wildcard_san_for_new_sites Account#wildcard_san_for_new_sites}
  */
  readonly wildcardSanForNewSites?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account incapsula_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account incapsula_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_account',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._consentRequired = config.consentRequired;
    this._dataStorageRegion = config.dataStorageRegion;
    this._email = config.email;
    this._enableHttp2ForNewSites = config.enableHttp2ForNewSites;
    this._enableHttp2ToOriginForNewSites = config.enableHttp2ToOriginForNewSites;
    this._errorPageTemplate = config.errorPageTemplate;
    this._id = config.id;
    this._inactivityTimeout = config.inactivityTimeout;
    this._logLevel = config.logLevel;
    this._logsAccountId = config.logsAccountId;
    this._nakedDomainSanForNewWwwSites = config.nakedDomainSanForNewWwwSites;
    this._parentId = config.parentId;
    this._planId = config.planId;
    this._refId = config.refId;
    this._supportAllTlsVersions = config.supportAllTlsVersions;
    this._userName = config.userName;
    this._wildcardSanForNewSites = config.wildcardSanForNewSites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // consent_required - computed: true, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // data_storage_region - computed: false, optional: true, required: false
  private _dataStorageRegion?: string; 
  public get dataStorageRegion() {
    return this.getStringAttribute('data_storage_region');
  }
  public set dataStorageRegion(value: string) {
    this._dataStorageRegion = value;
  }
  public resetDataStorageRegion() {
    this._dataStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageRegionInput() {
    return this._dataStorageRegion;
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

  // enable_http2_for_new_sites - computed: false, optional: true, required: false
  private _enableHttp2ForNewSites?: string; 
  public get enableHttp2ForNewSites() {
    return this.getStringAttribute('enable_http2_for_new_sites');
  }
  public set enableHttp2ForNewSites(value: string) {
    this._enableHttp2ForNewSites = value;
  }
  public resetEnableHttp2ForNewSites() {
    this._enableHttp2ForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2ForNewSitesInput() {
    return this._enableHttp2ForNewSites;
  }

  // enable_http2_to_origin_for_new_sites - computed: false, optional: true, required: false
  private _enableHttp2ToOriginForNewSites?: string; 
  public get enableHttp2ToOriginForNewSites() {
    return this.getStringAttribute('enable_http2_to_origin_for_new_sites');
  }
  public set enableHttp2ToOriginForNewSites(value: string) {
    this._enableHttp2ToOriginForNewSites = value;
  }
  public resetEnableHttp2ToOriginForNewSites() {
    this._enableHttp2ToOriginForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2ToOriginForNewSitesInput() {
    return this._enableHttp2ToOriginForNewSites;
  }

  // error_page_template - computed: false, optional: true, required: false
  private _errorPageTemplate?: string; 
  public get errorPageTemplate() {
    return this.getStringAttribute('error_page_template');
  }
  public set errorPageTemplate(value: string) {
    this._errorPageTemplate = value;
  }
  public resetErrorPageTemplate() {
    this._errorPageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageTemplateInput() {
    return this._errorPageTemplate;
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

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logs_account_id - computed: false, optional: true, required: false
  private _logsAccountId?: number; 
  public get logsAccountId() {
    return this.getNumberAttribute('logs_account_id');
  }
  public set logsAccountId(value: number) {
    this._logsAccountId = value;
  }
  public resetLogsAccountId() {
    this._logsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsAccountIdInput() {
    return this._logsAccountId;
  }

  // naked_domain_san_for_new_www_sites - computed: false, optional: true, required: false
  private _nakedDomainSanForNewWwwSites?: string; 
  public get nakedDomainSanForNewWwwSites() {
    return this.getStringAttribute('naked_domain_san_for_new_www_sites');
  }
  public set nakedDomainSanForNewWwwSites(value: string) {
    this._nakedDomainSanForNewWwwSites = value;
  }
  public resetNakedDomainSanForNewWwwSites() {
    this._nakedDomainSanForNewWwwSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nakedDomainSanForNewWwwSitesInput() {
    return this._nakedDomainSanForNewWwwSites;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // plan_id - computed: false, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
  }

  // ref_id - computed: false, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // support_all_tls_versions - computed: false, optional: true, required: false
  private _supportAllTlsVersions?: string; 
  public get supportAllTlsVersions() {
    return this.getStringAttribute('support_all_tls_versions');
  }
  public set supportAllTlsVersions(value: string) {
    this._supportAllTlsVersions = value;
  }
  public resetSupportAllTlsVersions() {
    this._supportAllTlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportAllTlsVersionsInput() {
    return this._supportAllTlsVersions;
  }

  // support_level - computed: true, optional: false, required: false
  public get supportLevel() {
    return this.getStringAttribute('support_level');
  }

  // trial_end_date - computed: true, optional: false, required: false
  public get trialEndDate() {
    return this.getStringAttribute('trial_end_date');
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wildcard_san_for_new_sites - computed: false, optional: true, required: false
  private _wildcardSanForNewSites?: string; 
  public get wildcardSanForNewSites() {
    return this.getStringAttribute('wildcard_san_for_new_sites');
  }
  public set wildcardSanForNewSites(value: string) {
    this._wildcardSanForNewSites = value;
  }
  public resetWildcardSanForNewSites() {
    this._wildcardSanForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardSanForNewSitesInput() {
    return this._wildcardSanForNewSites;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      consent_required: cdktf.booleanToTerraform(this._consentRequired),
      data_storage_region: cdktf.stringToTerraform(this._dataStorageRegion),
      email: cdktf.stringToTerraform(this._email),
      enable_http2_for_new_sites: cdktf.stringToTerraform(this._enableHttp2ForNewSites),
      enable_http2_to_origin_for_new_sites: cdktf.stringToTerraform(this._enableHttp2ToOriginForNewSites),
      error_page_template: cdktf.stringToTerraform(this._errorPageTemplate),
      id: cdktf.stringToTerraform(this._id),
      inactivity_timeout: cdktf.numberToTerraform(this._inactivityTimeout),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logs_account_id: cdktf.numberToTerraform(this._logsAccountId),
      naked_domain_san_for_new_www_sites: cdktf.stringToTerraform(this._nakedDomainSanForNewWwwSites),
      parent_id: cdktf.numberToTerraform(this._parentId),
      plan_id: cdktf.stringToTerraform(this._planId),
      ref_id: cdktf.stringToTerraform(this._refId),
      support_all_tls_versions: cdktf.stringToTerraform(this._supportAllTlsVersions),
      user_name: cdktf.stringToTerraform(this._userName),
      wildcard_san_for_new_sites: cdktf.stringToTerraform(this._wildcardSanForNewSites),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_required: {
        value: cdktf.booleanToHclTerraform(this._consentRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_storage_region: {
        value: cdktf.stringToHclTerraform(this._dataStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2_for_new_sites: {
        value: cdktf.stringToHclTerraform(this._enableHttp2ForNewSites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2_to_origin_for_new_sites: {
        value: cdktf.stringToHclTerraform(this._enableHttp2ToOriginForNewSites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_page_template: {
        value: cdktf.stringToHclTerraform(this._errorPageTemplate),
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
      inactivity_timeout: {
        value: cdktf.numberToHclTerraform(this._inactivityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_account_id: {
        value: cdktf.numberToHclTerraform(this._logsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naked_domain_san_for_new_www_sites: {
        value: cdktf.stringToHclTerraform(this._nakedDomainSanForNewWwwSites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_all_tls_versions: {
        value: cdktf.stringToHclTerraform(this._supportAllTlsVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_san_for_new_sites: {
        value: cdktf.stringToHclTerraform(this._wildcardSanForNewSites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
