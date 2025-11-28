// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mapping for LDAP user to EIC account attribute. Example: '["ACCOUNTID::objectGUID#Binary", "NAME::sAMAccountName#String", ...]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#account_attribute AdConnectionResource#account_attribute}
  */
  readonly accountAttribute?: string;
  /**
  * Rule to generate account name. Example: "uid=${task.accountName.toString().toLowerCase()},ou=People,dc=racf,dc=com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#account_name_rule AdConnectionResource#account_name_rule}
  */
  readonly accountNameRule?: string;
  /**
  * Advanced filter JSON configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#advance_filter_json AdConnectionResource#advance_filter_json}
  */
  readonly advanceFilterJson?: string;
  /**
  * Advanced search settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#advsearch AdConnectionResource#advsearch}
  */
  readonly advsearch?: string;
  /**
  * LDAP base DN. Example: "CN=Users,DC=Saviynt,DC=ABC,DC=Com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#base AdConnectionResource#base}
  */
  readonly base?: string;
  /**
  * Uniqueness validation rule JSON. Example: '{"sAMAccountName":"${task.accountName}"}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#check_for_unique AdConnectionResource#check_for_unique}
  */
  readonly checkForUnique?: string;
  /**
  * JSON for connection timeout configuration. Example: '{"connectionTimeoutConfig":{"connectionTimeout":10,"readTimeout":50,"retryWait":2,"retryCount":3}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#config_json AdConnectionResource#config_json}
  */
  readonly configJson?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#connection_name AdConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * JSON to create an account. Example: '{"cn":"${cn}","displayname":"${user.displayname}", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#create_account_json AdConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  * JSON for organization creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#create_org_json AdConnectionResource#create_org_json}
  */
  readonly createOrgJson?: string;
  /**
  * Mapping for group creation/updation (JSON string). Example: '{"cn":"${role?.customproperty27}","objectCategory":"CN=Group,CN=Schema,CN=Configuration,...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#create_update_mappings AdConnectionResource#create_update_mappings}
  */
  readonly createUpdateMappings?: string;
  /**
  * Domain controller locator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#dc_locator AdConnectionResource#dc_locator}
  */
  readonly dcLocator?: string;
  /**
  * Default SAV Role for imported users. Example: "ROLE_TASK_ADMIN"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#default_user_role AdConnectionResource#default_user_role}
  */
  readonly defaultUserRole?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#defaultsavroles AdConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#description AdConnectionResource#description}
  */
  readonly description?: string;
  /**
  * JSON to disable an account. Example: '{"userAccountControl":"546", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#disable_account_json AdConnectionResource#disable_account_json}
  */
  readonly disableAccountJson?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#email_template AdConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON configuration to enable account actions. Example: '{"USEDNFROMACCOUNT":"NO", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#enable_account_json AdConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * Enable group management. Example: "TRUE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#enable_group_management AdConnectionResource#enable_group_management}
  */
  readonly enableGroupManagement?: string;
  /**
  * Configuration for child endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#endpoints_filter AdConnectionResource#endpoints_filter}
  */
  readonly endpointsFilter?: string;
  /**
  * Enforce tree deletion flag. Example: "TRUE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#enforce_tree_deletion AdConnectionResource#enforce_tree_deletion}
  */
  readonly enforceTreeDeletion?: string;
  /**
  * Attribute used for entitlements. Example: "memberOf"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#entitlement_attribute AdConnectionResource#entitlement_attribute}
  */
  readonly entitlementAttribute?: string;
  /**
  * Simple filter string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#filter AdConnectionResource#filter}
  */
  readonly filter?: string;
  /**
  * JSON mapping for LDAP groups. Example: '{"entitlementTypeName":"memberOf", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#group_import_mapping AdConnectionResource#group_import_mapping}
  */
  readonly groupImportMapping?: string;
  /**
  * Base DN for group search. Example: "CN=Users,DC=Saviynt,DC=ABC,DC=Com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#group_search_base_dn AdConnectionResource#group_search_base_dn}
  */
  readonly groupSearchBaseDn?: string;
  /**
  * JSON import configuration. Example: '{"envproperties":{"com.sun.jndi.ldap.connect.timeout":"10000",...}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#import_json AdConnectionResource#import_json}
  */
  readonly importJson?: string;
  /**
  * Incremental import configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#incremental_config AdConnectionResource#incremental_config}
  */
  readonly incrementalConfig?: string;
  /**
  * Type of Endpoint - LDAP or AD. Default is 'AD'. Example: "AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#ldap_or_ad AdConnectionResource#ldap_or_ad}
  */
  readonly ldapOrAd?: string;
  /**
  * Maximum change number. Example: "4"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#max_changenumber AdConnectionResource#max_changenumber}
  */
  readonly maxChangenumber?: string;
  /**
  * JSON for inline user data transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#modify_user_data_json AdConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * LDAP object filter. Example: "(objectClass=inetorgperson)"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#objectfilter AdConnectionResource#objectfilter}
  */
  readonly objectfilter?: string;
  /**
  * Organization BASE for provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#org_base AdConnectionResource#org_base}
  */
  readonly orgBase?: string;
  /**
  * JSON for organization import configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#org_import_json AdConnectionResource#org_import_json}
  */
  readonly orgImportJson?: string;
  /**
  * Organization attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#organization_attribute AdConnectionResource#organization_attribute}
  */
  readonly organizationAttribute?: string;
  /**
  * LDAP page size. Example: "1000"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#page_size AdConnectionResource#page_size}
  */
  readonly pageSize?: string;
  /**
  * JSON for PAM bootstrap configuration. Example: '{"Connection":"AD",...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#pam_config AdConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Set the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password AdConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Maximum password length. Example: "12"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_max_length AdConnectionResource#password_max_length}
  */
  readonly passwordMaxLength?: string;
  /**
  * Minimum password length. Example: "8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_min_length AdConnectionResource#password_min_length}
  */
  readonly passwordMinLength?: string;
  /**
  * Number of capital letters required. Example: "2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_noofcapsalpha AdConnectionResource#password_noofcapsalpha}
  */
  readonly passwordNoofcapsalpha?: string;
  /**
  * Number of digits required. Example: "5"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_noofdigits AdConnectionResource#password_noofdigits}
  */
  readonly passwordNoofdigits?: string;
  /**
  * Number of special characters required. Example: "1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_noofsplchars AdConnectionResource#password_noofsplchars}
  */
  readonly passwordNoofsplchars?: string;
  /**
  * Set the password_wo (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#password_wo AdConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Flag for reading operational attributes. Example: "FALSE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#read_operational_attributes AdConnectionResource#read_operational_attributes}
  */
  readonly readOperationalAttributes?: string;
  /**
  * Action on account removal. Example: '{"removeAction":"DELETE"}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#remove_account_action AdConnectionResource#remove_account_action}
  */
  readonly removeAccountAction?: string;
  /**
  * JSON for reset/change password actions. Example: '{"RESET":{"pwdLastSet":"0","title":"password reset"},"CHANGE":{"pwdLastSet":"-1","title":"password changed"}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#reset_and_change_passwrd_json AdConnectionResource#reset_and_change_passwrd_json}
  */
  readonly resetAndChangePasswrdJson?: string;
  /**
  * JSON to reuse an account. Example: '{"ATTRIBUTESTOCHECK":{"userAccountControl":"514",...}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#reuse_account_json AdConnectionResource#reuse_account_json}
  */
  readonly reuseAccountJson?: string;
  /**
  * Reuse inactive account flag. Example: "TRUE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#reuse_inactive_account AdConnectionResource#reuse_inactive_account}
  */
  readonly reuseInactiveAccount?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#save_in_vault AdConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * LDAP search filter for users. Example: "OU=Users,DC=domainname,DC=com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#searchfilter AdConnectionResource#searchfilter}
  */
  readonly searchfilter?: string;
  /**
  * Option to set a random password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#set_random_password AdConnectionResource#set_random_password}
  */
  readonly setRandomPassword?: string;
  /**
  * Default page size setting. Example: "FALSE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#setdefaultpagesize AdConnectionResource#setdefaultpagesize}
  */
  readonly setdefaultpagesize?: string;
  /**
  * JSON for account status keys. Example: '{"STATUS_ACTIVE":["512","544"], ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#status_key_json AdConnectionResource#status_key_json}
  */
  readonly statusKeyJson?: string;
  /**
  * JSON configuration for status thresholds. Example: '{"statusAndThresholdConfig":{...}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#status_threshold_config AdConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * Flag for sending empty values. Example: "FALSE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#support_empty_string AdConnectionResource#support_empty_string}
  */
  readonly supportEmptyString?: string;
  /**
  * JSON to unlock accounts. Example: '{"lockoutTime":"0"}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#unlock_account_json AdConnectionResource#unlock_account_json}
  */
  readonly unlockAccountJson?: string;
  /**
  * JSON to update an account. Example: '{"uid":"${task.accountName.toString().toLowerCase()}", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#update_account_json AdConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  * JSON for organization update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#update_org_json AdConnectionResource#update_org_json}
  */
  readonly updateOrgJson?: string;
  /**
  * JSON to update a user. Example: '{"mail":"${user.email}", ...}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#update_user_json AdConnectionResource#update_user_json}
  */
  readonly updateUserJson?: string;
  /**
  * LDAP or target system URL. Example: "ldap://uscentral.com:8972/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#url AdConnectionResource#url}
  */
  readonly url?: string;
  /**
  * Mapping for LDAP user to EIC user attribute. Example: '["USERNAME::sAMAccountName#String", ...]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#user_attribute AdConnectionResource#user_attribute}
  */
  readonly userAttribute?: string;
  /**
  * System admin username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#username AdConnectionResource#username}
  */
  readonly username?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#vault_configuration AdConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#vault_connection AdConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#wo_version AdConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource saviynt_ad_connection_resource}
*/
export class AdConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_ad_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdConnectionResource to import
  * @param importFromId The id of the existing AdConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_ad_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ad_connection_resource saviynt_ad_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: AdConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_ad_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAttribute = config.accountAttribute;
    this._accountNameRule = config.accountNameRule;
    this._advanceFilterJson = config.advanceFilterJson;
    this._advsearch = config.advsearch;
    this._base = config.base;
    this._checkForUnique = config.checkForUnique;
    this._configJson = config.configJson;
    this._connectionName = config.connectionName;
    this._createAccountJson = config.createAccountJson;
    this._createOrgJson = config.createOrgJson;
    this._createUpdateMappings = config.createUpdateMappings;
    this._dcLocator = config.dcLocator;
    this._defaultUserRole = config.defaultUserRole;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._disableAccountJson = config.disableAccountJson;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._enableGroupManagement = config.enableGroupManagement;
    this._endpointsFilter = config.endpointsFilter;
    this._enforceTreeDeletion = config.enforceTreeDeletion;
    this._entitlementAttribute = config.entitlementAttribute;
    this._filter = config.filter;
    this._groupImportMapping = config.groupImportMapping;
    this._groupSearchBaseDn = config.groupSearchBaseDn;
    this._importJson = config.importJson;
    this._incrementalConfig = config.incrementalConfig;
    this._ldapOrAd = config.ldapOrAd;
    this._maxChangenumber = config.maxChangenumber;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._objectfilter = config.objectfilter;
    this._orgBase = config.orgBase;
    this._orgImportJson = config.orgImportJson;
    this._organizationAttribute = config.organizationAttribute;
    this._pageSize = config.pageSize;
    this._pamConfig = config.pamConfig;
    this._password = config.password;
    this._passwordMaxLength = config.passwordMaxLength;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordNoofcapsalpha = config.passwordNoofcapsalpha;
    this._passwordNoofdigits = config.passwordNoofdigits;
    this._passwordNoofsplchars = config.passwordNoofsplchars;
    this._passwordWo = config.passwordWo;
    this._readOperationalAttributes = config.readOperationalAttributes;
    this._removeAccountAction = config.removeAccountAction;
    this._resetAndChangePasswrdJson = config.resetAndChangePasswrdJson;
    this._reuseAccountJson = config.reuseAccountJson;
    this._reuseInactiveAccount = config.reuseInactiveAccount;
    this._saveInVault = config.saveInVault;
    this._searchfilter = config.searchfilter;
    this._setRandomPassword = config.setRandomPassword;
    this._setdefaultpagesize = config.setdefaultpagesize;
    this._statusKeyJson = config.statusKeyJson;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._supportEmptyString = config.supportEmptyString;
    this._unlockAccountJson = config.unlockAccountJson;
    this._updateAccountJson = config.updateAccountJson;
    this._updateOrgJson = config.updateOrgJson;
    this._updateUserJson = config.updateUserJson;
    this._url = config.url;
    this._userAttribute = config.userAttribute;
    this._username = config.username;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_attribute - computed: true, optional: true, required: false
  private _accountAttribute?: string; 
  public get accountAttribute() {
    return this.getStringAttribute('account_attribute');
  }
  public set accountAttribute(value: string) {
    this._accountAttribute = value;
  }
  public resetAccountAttribute() {
    this._accountAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAttributeInput() {
    return this._accountAttribute;
  }

  // account_name_rule - computed: true, optional: true, required: false
  private _accountNameRule?: string; 
  public get accountNameRule() {
    return this.getStringAttribute('account_name_rule');
  }
  public set accountNameRule(value: string) {
    this._accountNameRule = value;
  }
  public resetAccountNameRule() {
    this._accountNameRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameRuleInput() {
    return this._accountNameRule;
  }

  // advance_filter_json - computed: true, optional: true, required: false
  private _advanceFilterJson?: string; 
  public get advanceFilterJson() {
    return this.getStringAttribute('advance_filter_json');
  }
  public set advanceFilterJson(value: string) {
    this._advanceFilterJson = value;
  }
  public resetAdvanceFilterJson() {
    this._advanceFilterJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceFilterJsonInput() {
    return this._advanceFilterJson;
  }

  // advsearch - computed: true, optional: true, required: false
  private _advsearch?: string; 
  public get advsearch() {
    return this.getStringAttribute('advsearch');
  }
  public set advsearch(value: string) {
    this._advsearch = value;
  }
  public resetAdvsearch() {
    this._advsearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advsearchInput() {
    return this._advsearch;
  }

  // base - computed: true, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // check_for_unique - computed: true, optional: true, required: false
  private _checkForUnique?: string; 
  public get checkForUnique() {
    return this.getStringAttribute('check_for_unique');
  }
  public set checkForUnique(value: string) {
    this._checkForUnique = value;
  }
  public resetCheckForUnique() {
    this._checkForUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkForUniqueInput() {
    return this._checkForUnique;
  }

  // config_json - computed: true, optional: true, required: false
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  public resetConfigJson() {
    this._configJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // connection_key - computed: true, optional: false, required: false
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // create_account_json - computed: true, optional: true, required: false
  private _createAccountJson?: string; 
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }
  public set createAccountJson(value: string) {
    this._createAccountJson = value;
  }
  public resetCreateAccountJson() {
    this._createAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccountJsonInput() {
    return this._createAccountJson;
  }

  // create_org_json - computed: true, optional: true, required: false
  private _createOrgJson?: string; 
  public get createOrgJson() {
    return this.getStringAttribute('create_org_json');
  }
  public set createOrgJson(value: string) {
    this._createOrgJson = value;
  }
  public resetCreateOrgJson() {
    this._createOrgJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOrgJsonInput() {
    return this._createOrgJson;
  }

  // create_update_mappings - computed: true, optional: true, required: false
  private _createUpdateMappings?: string; 
  public get createUpdateMappings() {
    return this.getStringAttribute('create_update_mappings');
  }
  public set createUpdateMappings(value: string) {
    this._createUpdateMappings = value;
  }
  public resetCreateUpdateMappings() {
    this._createUpdateMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUpdateMappingsInput() {
    return this._createUpdateMappings;
  }

  // dc_locator - computed: true, optional: true, required: false
  private _dcLocator?: string; 
  public get dcLocator() {
    return this.getStringAttribute('dc_locator');
  }
  public set dcLocator(value: string) {
    this._dcLocator = value;
  }
  public resetDcLocator() {
    this._dcLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcLocatorInput() {
    return this._dcLocator;
  }

  // default_user_role - computed: true, optional: true, required: false
  private _defaultUserRole?: string; 
  public get defaultUserRole() {
    return this.getStringAttribute('default_user_role');
  }
  public set defaultUserRole(value: string) {
    this._defaultUserRole = value;
  }
  public resetDefaultUserRole() {
    this._defaultUserRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserRoleInput() {
    return this._defaultUserRole;
  }

  // defaultsavroles - computed: true, optional: true, required: false
  private _defaultsavroles?: string; 
  public get defaultsavroles() {
    return this.getStringAttribute('defaultsavroles');
  }
  public set defaultsavroles(value: string) {
    this._defaultsavroles = value;
  }
  public resetDefaultsavroles() {
    this._defaultsavroles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsavrolesInput() {
    return this._defaultsavroles;
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

  // disable_account_json - computed: true, optional: true, required: false
  private _disableAccountJson?: string; 
  public get disableAccountJson() {
    return this.getStringAttribute('disable_account_json');
  }
  public set disableAccountJson(value: string) {
    this._disableAccountJson = value;
  }
  public resetDisableAccountJson() {
    this._disableAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAccountJsonInput() {
    return this._disableAccountJson;
  }

  // email_template - computed: true, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // enable_account_json - computed: true, optional: true, required: false
  private _enableAccountJson?: string; 
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }
  public set enableAccountJson(value: string) {
    this._enableAccountJson = value;
  }
  public resetEnableAccountJson() {
    this._enableAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccountJsonInput() {
    return this._enableAccountJson;
  }

  // enable_group_management - computed: true, optional: true, required: false
  private _enableGroupManagement?: string; 
  public get enableGroupManagement() {
    return this.getStringAttribute('enable_group_management');
  }
  public set enableGroupManagement(value: string) {
    this._enableGroupManagement = value;
  }
  public resetEnableGroupManagement() {
    this._enableGroupManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGroupManagementInput() {
    return this._enableGroupManagement;
  }

  // endpoints_filter - computed: true, optional: true, required: false
  private _endpointsFilter?: string; 
  public get endpointsFilter() {
    return this.getStringAttribute('endpoints_filter');
  }
  public set endpointsFilter(value: string) {
    this._endpointsFilter = value;
  }
  public resetEndpointsFilter() {
    this._endpointsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsFilterInput() {
    return this._endpointsFilter;
  }

  // enforce_tree_deletion - computed: true, optional: true, required: false
  private _enforceTreeDeletion?: string; 
  public get enforceTreeDeletion() {
    return this.getStringAttribute('enforce_tree_deletion');
  }
  public set enforceTreeDeletion(value: string) {
    this._enforceTreeDeletion = value;
  }
  public resetEnforceTreeDeletion() {
    this._enforceTreeDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTreeDeletionInput() {
    return this._enforceTreeDeletion;
  }

  // entitlement_attribute - computed: true, optional: true, required: false
  private _entitlementAttribute?: string; 
  public get entitlementAttribute() {
    return this.getStringAttribute('entitlement_attribute');
  }
  public set entitlementAttribute(value: string) {
    this._entitlementAttribute = value;
  }
  public resetEntitlementAttribute() {
    this._entitlementAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementAttributeInput() {
    return this._entitlementAttribute;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // filter - computed: true, optional: true, required: false
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

  // group_import_mapping - computed: true, optional: true, required: false
  private _groupImportMapping?: string; 
  public get groupImportMapping() {
    return this.getStringAttribute('group_import_mapping');
  }
  public set groupImportMapping(value: string) {
    this._groupImportMapping = value;
  }
  public resetGroupImportMapping() {
    this._groupImportMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupImportMappingInput() {
    return this._groupImportMapping;
  }

  // group_search_base_dn - computed: true, optional: true, required: false
  private _groupSearchBaseDn?: string; 
  public get groupSearchBaseDn() {
    return this.getStringAttribute('group_search_base_dn');
  }
  public set groupSearchBaseDn(value: string) {
    this._groupSearchBaseDn = value;
  }
  public resetGroupSearchBaseDn() {
    this._groupSearchBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseDnInput() {
    return this._groupSearchBaseDn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_json - computed: true, optional: true, required: false
  private _importJson?: string; 
  public get importJson() {
    return this.getStringAttribute('import_json');
  }
  public set importJson(value: string) {
    this._importJson = value;
  }
  public resetImportJson() {
    this._importJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importJsonInput() {
    return this._importJson;
  }

  // incremental_config - computed: true, optional: true, required: false
  private _incrementalConfig?: string; 
  public get incrementalConfig() {
    return this.getStringAttribute('incremental_config');
  }
  public set incrementalConfig(value: string) {
    this._incrementalConfig = value;
  }
  public resetIncrementalConfig() {
    this._incrementalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalConfigInput() {
    return this._incrementalConfig;
  }

  // ldap_or_ad - computed: true, optional: true, required: false
  private _ldapOrAd?: string; 
  public get ldapOrAd() {
    return this.getStringAttribute('ldap_or_ad');
  }
  public set ldapOrAd(value: string) {
    this._ldapOrAd = value;
  }
  public resetLdapOrAd() {
    this._ldapOrAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapOrAdInput() {
    return this._ldapOrAd;
  }

  // max_changenumber - computed: true, optional: true, required: false
  private _maxChangenumber?: string; 
  public get maxChangenumber() {
    return this.getStringAttribute('max_changenumber');
  }
  public set maxChangenumber(value: string) {
    this._maxChangenumber = value;
  }
  public resetMaxChangenumber() {
    this._maxChangenumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChangenumberInput() {
    return this._maxChangenumber;
  }

  // modify_user_data_json - computed: true, optional: true, required: false
  private _modifyUserDataJson?: string; 
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }
  public set modifyUserDataJson(value: string) {
    this._modifyUserDataJson = value;
  }
  public resetModifyUserDataJson() {
    this._modifyUserDataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyUserDataJsonInput() {
    return this._modifyUserDataJson;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // objectfilter - computed: true, optional: true, required: false
  private _objectfilter?: string; 
  public get objectfilter() {
    return this.getStringAttribute('objectfilter');
  }
  public set objectfilter(value: string) {
    this._objectfilter = value;
  }
  public resetObjectfilter() {
    this._objectfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectfilterInput() {
    return this._objectfilter;
  }

  // org_base - computed: true, optional: true, required: false
  private _orgBase?: string; 
  public get orgBase() {
    return this.getStringAttribute('org_base');
  }
  public set orgBase(value: string) {
    this._orgBase = value;
  }
  public resetOrgBase() {
    this._orgBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgBaseInput() {
    return this._orgBase;
  }

  // org_import_json - computed: true, optional: true, required: false
  private _orgImportJson?: string; 
  public get orgImportJson() {
    return this.getStringAttribute('org_import_json');
  }
  public set orgImportJson(value: string) {
    this._orgImportJson = value;
  }
  public resetOrgImportJson() {
    this._orgImportJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgImportJsonInput() {
    return this._orgImportJson;
  }

  // organization_attribute - computed: true, optional: true, required: false
  private _organizationAttribute?: string; 
  public get organizationAttribute() {
    return this.getStringAttribute('organization_attribute');
  }
  public set organizationAttribute(value: string) {
    this._organizationAttribute = value;
  }
  public resetOrganizationAttribute() {
    this._organizationAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAttributeInput() {
    return this._organizationAttribute;
  }

  // page_size - computed: true, optional: true, required: false
  private _pageSize?: string; 
  public get pageSize() {
    return this.getStringAttribute('page_size');
  }
  public set pageSize(value: string) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // pam_config - computed: true, optional: true, required: false
  private _pamConfig?: string; 
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }
  public set pamConfig(value: string) {
    this._pamConfig = value;
  }
  public resetPamConfig() {
    this._pamConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamConfigInput() {
    return this._pamConfig;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_max_length - computed: true, optional: true, required: false
  private _passwordMaxLength?: string; 
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }
  public set passwordMaxLength(value: string) {
    this._passwordMaxLength = value;
  }
  public resetPasswordMaxLength() {
    this._passwordMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxLengthInput() {
    return this._passwordMaxLength;
  }

  // password_min_length - computed: true, optional: true, required: false
  private _passwordMinLength?: string; 
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }
  public set passwordMinLength(value: string) {
    this._passwordMinLength = value;
  }
  public resetPasswordMinLength() {
    this._passwordMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLengthInput() {
    return this._passwordMinLength;
  }

  // password_noofcapsalpha - computed: true, optional: true, required: false
  private _passwordNoofcapsalpha?: string; 
  public get passwordNoofcapsalpha() {
    return this.getStringAttribute('password_noofcapsalpha');
  }
  public set passwordNoofcapsalpha(value: string) {
    this._passwordNoofcapsalpha = value;
  }
  public resetPasswordNoofcapsalpha() {
    this._passwordNoofcapsalpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofcapsalphaInput() {
    return this._passwordNoofcapsalpha;
  }

  // password_noofdigits - computed: true, optional: true, required: false
  private _passwordNoofdigits?: string; 
  public get passwordNoofdigits() {
    return this.getStringAttribute('password_noofdigits');
  }
  public set passwordNoofdigits(value: string) {
    this._passwordNoofdigits = value;
  }
  public resetPasswordNoofdigits() {
    this._passwordNoofdigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofdigitsInput() {
    return this._passwordNoofdigits;
  }

  // password_noofsplchars - computed: true, optional: true, required: false
  private _passwordNoofsplchars?: string; 
  public get passwordNoofsplchars() {
    return this.getStringAttribute('password_noofsplchars');
  }
  public set passwordNoofsplchars(value: string) {
    this._passwordNoofsplchars = value;
  }
  public resetPasswordNoofsplchars() {
    this._passwordNoofsplchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofsplcharsInput() {
    return this._passwordNoofsplchars;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // read_operational_attributes - computed: true, optional: true, required: false
  private _readOperationalAttributes?: string; 
  public get readOperationalAttributes() {
    return this.getStringAttribute('read_operational_attributes');
  }
  public set readOperationalAttributes(value: string) {
    this._readOperationalAttributes = value;
  }
  public resetReadOperationalAttributes() {
    this._readOperationalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOperationalAttributesInput() {
    return this._readOperationalAttributes;
  }

  // remove_account_action - computed: true, optional: true, required: false
  private _removeAccountAction?: string; 
  public get removeAccountAction() {
    return this.getStringAttribute('remove_account_action');
  }
  public set removeAccountAction(value: string) {
    this._removeAccountAction = value;
  }
  public resetRemoveAccountAction() {
    this._removeAccountAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccountActionInput() {
    return this._removeAccountAction;
  }

  // reset_and_change_passwrd_json - computed: true, optional: true, required: false
  private _resetAndChangePasswrdJson?: string; 
  public get resetAndChangePasswrdJson() {
    return this.getStringAttribute('reset_and_change_passwrd_json');
  }
  public set resetAndChangePasswrdJson(value: string) {
    this._resetAndChangePasswrdJson = value;
  }
  public resetResetAndChangePasswrdJson() {
    this._resetAndChangePasswrdJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetAndChangePasswrdJsonInput() {
    return this._resetAndChangePasswrdJson;
  }

  // reuse_account_json - computed: true, optional: true, required: false
  private _reuseAccountJson?: string; 
  public get reuseAccountJson() {
    return this.getStringAttribute('reuse_account_json');
  }
  public set reuseAccountJson(value: string) {
    this._reuseAccountJson = value;
  }
  public resetReuseAccountJson() {
    this._reuseAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseAccountJsonInput() {
    return this._reuseAccountJson;
  }

  // reuse_inactive_account - computed: true, optional: true, required: false
  private _reuseInactiveAccount?: string; 
  public get reuseInactiveAccount() {
    return this.getStringAttribute('reuse_inactive_account');
  }
  public set reuseInactiveAccount(value: string) {
    this._reuseInactiveAccount = value;
  }
  public resetReuseInactiveAccount() {
    this._reuseInactiveAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseInactiveAccountInput() {
    return this._reuseInactiveAccount;
  }

  // save_in_vault - computed: false, optional: true, required: false
  private _saveInVault?: string; 
  public get saveInVault() {
    return this.getStringAttribute('save_in_vault');
  }
  public set saveInVault(value: string) {
    this._saveInVault = value;
  }
  public resetSaveInVault() {
    this._saveInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInVaultInput() {
    return this._saveInVault;
  }

  // searchfilter - computed: true, optional: true, required: false
  private _searchfilter?: string; 
  public get searchfilter() {
    return this.getStringAttribute('searchfilter');
  }
  public set searchfilter(value: string) {
    this._searchfilter = value;
  }
  public resetSearchfilter() {
    this._searchfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchfilterInput() {
    return this._searchfilter;
  }

  // set_random_password - computed: true, optional: true, required: false
  private _setRandomPassword?: string; 
  public get setRandomPassword() {
    return this.getStringAttribute('set_random_password');
  }
  public set setRandomPassword(value: string) {
    this._setRandomPassword = value;
  }
  public resetSetRandomPassword() {
    this._setRandomPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRandomPasswordInput() {
    return this._setRandomPassword;
  }

  // setdefaultpagesize - computed: true, optional: true, required: false
  private _setdefaultpagesize?: string; 
  public get setdefaultpagesize() {
    return this.getStringAttribute('setdefaultpagesize');
  }
  public set setdefaultpagesize(value: string) {
    this._setdefaultpagesize = value;
  }
  public resetSetdefaultpagesize() {
    this._setdefaultpagesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setdefaultpagesizeInput() {
    return this._setdefaultpagesize;
  }

  // status_key_json - computed: true, optional: true, required: false
  private _statusKeyJson?: string; 
  public get statusKeyJson() {
    return this.getStringAttribute('status_key_json');
  }
  public set statusKeyJson(value: string) {
    this._statusKeyJson = value;
  }
  public resetStatusKeyJson() {
    this._statusKeyJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusKeyJsonInput() {
    return this._statusKeyJson;
  }

  // status_threshold_config - computed: true, optional: true, required: false
  private _statusThresholdConfig?: string; 
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }
  public set statusThresholdConfig(value: string) {
    this._statusThresholdConfig = value;
  }
  public resetStatusThresholdConfig() {
    this._statusThresholdConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusThresholdConfigInput() {
    return this._statusThresholdConfig;
  }

  // support_empty_string - computed: true, optional: true, required: false
  private _supportEmptyString?: string; 
  public get supportEmptyString() {
    return this.getStringAttribute('support_empty_string');
  }
  public set supportEmptyString(value: string) {
    this._supportEmptyString = value;
  }
  public resetSupportEmptyString() {
    this._supportEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmptyStringInput() {
    return this._supportEmptyString;
  }

  // unlock_account_json - computed: true, optional: true, required: false
  private _unlockAccountJson?: string; 
  public get unlockAccountJson() {
    return this.getStringAttribute('unlock_account_json');
  }
  public set unlockAccountJson(value: string) {
    this._unlockAccountJson = value;
  }
  public resetUnlockAccountJson() {
    this._unlockAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAccountJsonInput() {
    return this._unlockAccountJson;
  }

  // update_account_json - computed: true, optional: true, required: false
  private _updateAccountJson?: string; 
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }
  public set updateAccountJson(value: string) {
    this._updateAccountJson = value;
  }
  public resetUpdateAccountJson() {
    this._updateAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAccountJsonInput() {
    return this._updateAccountJson;
  }

  // update_org_json - computed: true, optional: true, required: false
  private _updateOrgJson?: string; 
  public get updateOrgJson() {
    return this.getStringAttribute('update_org_json');
  }
  public set updateOrgJson(value: string) {
    this._updateOrgJson = value;
  }
  public resetUpdateOrgJson() {
    this._updateOrgJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOrgJsonInput() {
    return this._updateOrgJson;
  }

  // update_user_json - computed: true, optional: true, required: false
  private _updateUserJson?: string; 
  public get updateUserJson() {
    return this.getStringAttribute('update_user_json');
  }
  public set updateUserJson(value: string) {
    this._updateUserJson = value;
  }
  public resetUpdateUserJson() {
    this._updateUserJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserJsonInput() {
    return this._updateUserJson;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_attribute - computed: true, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vault_configuration - computed: false, optional: true, required: false
  private _vaultConfiguration?: string; 
  public get vaultConfiguration() {
    return this.getStringAttribute('vault_configuration');
  }
  public set vaultConfiguration(value: string) {
    this._vaultConfiguration = value;
  }
  public resetVaultConfiguration() {
    this._vaultConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConfigurationInput() {
    return this._vaultConfiguration;
  }

  // vault_connection - computed: false, optional: true, required: false
  private _vaultConnection?: string; 
  public get vaultConnection() {
    return this.getStringAttribute('vault_connection');
  }
  public set vaultConnection(value: string) {
    this._vaultConnection = value;
  }
  public resetVaultConnection() {
    this._vaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConnectionInput() {
    return this._vaultConnection;
  }

  // wo_version - computed: false, optional: true, required: false
  private _woVersion?: string; 
  public get woVersion() {
    return this.getStringAttribute('wo_version');
  }
  public set woVersion(value: string) {
    this._woVersion = value;
  }
  public resetWoVersion() {
    this._woVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get woVersionInput() {
    return this._woVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_attribute: cdktf.stringToTerraform(this._accountAttribute),
      account_name_rule: cdktf.stringToTerraform(this._accountNameRule),
      advance_filter_json: cdktf.stringToTerraform(this._advanceFilterJson),
      advsearch: cdktf.stringToTerraform(this._advsearch),
      base: cdktf.stringToTerraform(this._base),
      check_for_unique: cdktf.stringToTerraform(this._checkForUnique),
      config_json: cdktf.stringToTerraform(this._configJson),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      create_org_json: cdktf.stringToTerraform(this._createOrgJson),
      create_update_mappings: cdktf.stringToTerraform(this._createUpdateMappings),
      dc_locator: cdktf.stringToTerraform(this._dcLocator),
      default_user_role: cdktf.stringToTerraform(this._defaultUserRole),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      disable_account_json: cdktf.stringToTerraform(this._disableAccountJson),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      enable_group_management: cdktf.stringToTerraform(this._enableGroupManagement),
      endpoints_filter: cdktf.stringToTerraform(this._endpointsFilter),
      enforce_tree_deletion: cdktf.stringToTerraform(this._enforceTreeDeletion),
      entitlement_attribute: cdktf.stringToTerraform(this._entitlementAttribute),
      filter: cdktf.stringToTerraform(this._filter),
      group_import_mapping: cdktf.stringToTerraform(this._groupImportMapping),
      group_search_base_dn: cdktf.stringToTerraform(this._groupSearchBaseDn),
      import_json: cdktf.stringToTerraform(this._importJson),
      incremental_config: cdktf.stringToTerraform(this._incrementalConfig),
      ldap_or_ad: cdktf.stringToTerraform(this._ldapOrAd),
      max_changenumber: cdktf.stringToTerraform(this._maxChangenumber),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      objectfilter: cdktf.stringToTerraform(this._objectfilter),
      org_base: cdktf.stringToTerraform(this._orgBase),
      org_import_json: cdktf.stringToTerraform(this._orgImportJson),
      organization_attribute: cdktf.stringToTerraform(this._organizationAttribute),
      page_size: cdktf.stringToTerraform(this._pageSize),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      password: cdktf.stringToTerraform(this._password),
      password_max_length: cdktf.stringToTerraform(this._passwordMaxLength),
      password_min_length: cdktf.stringToTerraform(this._passwordMinLength),
      password_noofcapsalpha: cdktf.stringToTerraform(this._passwordNoofcapsalpha),
      password_noofdigits: cdktf.stringToTerraform(this._passwordNoofdigits),
      password_noofsplchars: cdktf.stringToTerraform(this._passwordNoofsplchars),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      read_operational_attributes: cdktf.stringToTerraform(this._readOperationalAttributes),
      remove_account_action: cdktf.stringToTerraform(this._removeAccountAction),
      reset_and_change_passwrd_json: cdktf.stringToTerraform(this._resetAndChangePasswrdJson),
      reuse_account_json: cdktf.stringToTerraform(this._reuseAccountJson),
      reuse_inactive_account: cdktf.stringToTerraform(this._reuseInactiveAccount),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      searchfilter: cdktf.stringToTerraform(this._searchfilter),
      set_random_password: cdktf.stringToTerraform(this._setRandomPassword),
      setdefaultpagesize: cdktf.stringToTerraform(this._setdefaultpagesize),
      status_key_json: cdktf.stringToTerraform(this._statusKeyJson),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      support_empty_string: cdktf.stringToTerraform(this._supportEmptyString),
      unlock_account_json: cdktf.stringToTerraform(this._unlockAccountJson),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      update_org_json: cdktf.stringToTerraform(this._updateOrgJson),
      update_user_json: cdktf.stringToTerraform(this._updateUserJson),
      url: cdktf.stringToTerraform(this._url),
      user_attribute: cdktf.stringToTerraform(this._userAttribute),
      username: cdktf.stringToTerraform(this._username),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_attribute: {
        value: cdktf.stringToHclTerraform(this._accountAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name_rule: {
        value: cdktf.stringToHclTerraform(this._accountNameRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advance_filter_json: {
        value: cdktf.stringToHclTerraform(this._advanceFilterJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advsearch: {
        value: cdktf.stringToHclTerraform(this._advsearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_for_unique: {
        value: cdktf.stringToHclTerraform(this._checkForUnique),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_account_json: {
        value: cdktf.stringToHclTerraform(this._createAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_org_json: {
        value: cdktf.stringToHclTerraform(this._createOrgJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_update_mappings: {
        value: cdktf.stringToHclTerraform(this._createUpdateMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_locator: {
        value: cdktf.stringToHclTerraform(this._dcLocator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_user_role: {
        value: cdktf.stringToHclTerraform(this._defaultUserRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultsavroles: {
        value: cdktf.stringToHclTerraform(this._defaultsavroles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_account_json: {
        value: cdktf.stringToHclTerraform(this._disableAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.stringToHclTerraform(this._emailTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_account_json: {
        value: cdktf.stringToHclTerraform(this._enableAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_group_management: {
        value: cdktf.stringToHclTerraform(this._enableGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints_filter: {
        value: cdktf.stringToHclTerraform(this._endpointsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_tree_deletion: {
        value: cdktf.stringToHclTerraform(this._enforceTreeDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_attribute: {
        value: cdktf.stringToHclTerraform(this._entitlementAttribute),
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
      group_import_mapping: {
        value: cdktf.stringToHclTerraform(this._groupImportMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_base_dn: {
        value: cdktf.stringToHclTerraform(this._groupSearchBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_json: {
        value: cdktf.stringToHclTerraform(this._importJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incremental_config: {
        value: cdktf.stringToHclTerraform(this._incrementalConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_or_ad: {
        value: cdktf.stringToHclTerraform(this._ldapOrAd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_changenumber: {
        value: cdktf.stringToHclTerraform(this._maxChangenumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_user_data_json: {
        value: cdktf.stringToHclTerraform(this._modifyUserDataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objectfilter: {
        value: cdktf.stringToHclTerraform(this._objectfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_base: {
        value: cdktf.stringToHclTerraform(this._orgBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_import_json: {
        value: cdktf.stringToHclTerraform(this._orgImportJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_attribute: {
        value: cdktf.stringToHclTerraform(this._organizationAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.stringToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pam_config: {
        value: cdktf.stringToHclTerraform(this._pamConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_max_length: {
        value: cdktf.stringToHclTerraform(this._passwordMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_min_length: {
        value: cdktf.stringToHclTerraform(this._passwordMinLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_noofcapsalpha: {
        value: cdktf.stringToHclTerraform(this._passwordNoofcapsalpha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_noofdigits: {
        value: cdktf.stringToHclTerraform(this._passwordNoofdigits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_noofsplchars: {
        value: cdktf.stringToHclTerraform(this._passwordNoofsplchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktf.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_operational_attributes: {
        value: cdktf.stringToHclTerraform(this._readOperationalAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_account_action: {
        value: cdktf.stringToHclTerraform(this._removeAccountAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_and_change_passwrd_json: {
        value: cdktf.stringToHclTerraform(this._resetAndChangePasswrdJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_account_json: {
        value: cdktf.stringToHclTerraform(this._reuseAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_inactive_account: {
        value: cdktf.stringToHclTerraform(this._reuseInactiveAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_in_vault: {
        value: cdktf.stringToHclTerraform(this._saveInVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      searchfilter: {
        value: cdktf.stringToHclTerraform(this._searchfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_random_password: {
        value: cdktf.stringToHclTerraform(this._setRandomPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setdefaultpagesize: {
        value: cdktf.stringToHclTerraform(this._setdefaultpagesize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_key_json: {
        value: cdktf.stringToHclTerraform(this._statusKeyJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_threshold_config: {
        value: cdktf.stringToHclTerraform(this._statusThresholdConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_empty_string: {
        value: cdktf.stringToHclTerraform(this._supportEmptyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unlock_account_json: {
        value: cdktf.stringToHclTerraform(this._unlockAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_account_json: {
        value: cdktf.stringToHclTerraform(this._updateAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_org_json: {
        value: cdktf.stringToHclTerraform(this._updateOrgJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user_json: {
        value: cdktf.stringToHclTerraform(this._updateUserJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_attribute: {
        value: cdktf.stringToHclTerraform(this._userAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_configuration: {
        value: cdktf.stringToHclTerraform(this._vaultConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_connection: {
        value: cdktf.stringToHclTerraform(this._vaultConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wo_version: {
        value: cdktf.stringToHclTerraform(this._woVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
