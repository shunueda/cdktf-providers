// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdsiConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map EIC and AD attributes for account import (AD attributes must be in lower case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#account_attribute AdsiConnectionResource#account_attribute}
  */
  readonly accountAttribute?: string;
  /**
  * Rule to generate account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#accountnamerule AdsiConnectionResource#accountnamerule}
  */
  readonly accountnamerule?: string;
  /**
  * Configuration to Add nested group hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#addaccessentitlementjson AdsiConnectionResource#addaccessentitlementjson}
  */
  readonly addaccessentitlementjson?: string;
  /**
  * Configuration to ADD Access (cross domain/forest group membership) to an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#addaccessjson AdsiConnectionResource#addaccessjson}
  */
  readonly addaccessjson?: string;
  /**
  * Evaluate the uniqueness of an attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#checkforunique AdsiConnectionResource#checkforunique}
  */
  readonly checkforunique?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#connection_name AdsiConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * ADSI remote agent Connection URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#connection_url AdsiConnectionResource#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Specify the attributes values which will be used to Create the New Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#createaccountjson AdsiConnectionResource#createaccountjson}
  */
  readonly createaccountjson?: string;
  /**
  * Configuration to Create a Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#creategroupjson AdsiConnectionResource#creategroupjson}
  */
  readonly creategroupjson?: string;
  /**
  * Specify the Field Value which will be used to Create the New Service Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#createserviceaccountjson AdsiConnectionResource#createserviceaccountjson}
  */
  readonly createserviceaccountjson?: string;
  /**
  * Custom configuration JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#customconfigjson AdsiConnectionResource#customconfigjson}
  */
  readonly customconfigjson?: string;
  /**
  * Default SAV Role to be assigned to all the new users that gets imported via User Import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#default_user_role AdsiConnectionResource#default_user_role}
  */
  readonly defaultUserRole?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#defaultsavroles AdsiConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#description AdsiConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Specify the actions and attributes updates to be performed for disabling an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#disableaccountjson AdsiConnectionResource#disableaccountjson}
  */
  readonly disableaccountjson?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#email_template AdsiConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Specify the actions and attribute updates to be performed for enabling an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#enableaccountjson AdsiConnectionResource#enableaccountjson}
  */
  readonly enableaccountjson?: string;
  /**
  * Provide the configuration to create Child Endpoints and import associated accounts and entitlements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#endpoints_filter AdsiConnectionResource#endpoints_filter}
  */
  readonly endpointsFilter?: string;
  /**
  * Account attribute that contains group membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#entitlement_attribute AdsiConnectionResource#entitlement_attribute}
  */
  readonly entitlementAttribute?: string;
  /**
  * Forest List (Comma Separated) which we need to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#forestlist AdsiConnectionResource#forestlist}
  */
  readonly forestlist: string;
  /**
  * Map AD group attribute to EIC entitlement attribute for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#group_import_mapping AdsiConnectionResource#group_import_mapping}
  */
  readonly groupImportMapping?: string;
  /**
  * Group Search Filter to specify the starting point of the directory from where the groups needs to be imported. You can have multiple BaseDNs here separated by ###.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#group_search_base_dn AdsiConnectionResource#group_search_base_dn}
  */
  readonly groupSearchBaseDn?: string;
  /**
  * Specify if you want the connector to import all indirect or nested membership of an account or a group during access import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#import_nested_membership AdsiConnectionResource#import_nested_membership}
  */
  readonly importNestedMembership?: string;
  /**
  * Specify this parameter to transform the data during user import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#modifyuserdatajson AdsiConnectionResource#modifyuserdatajson}
  */
  readonly modifyuserdatajson?: string;
  /**
  * Object Filter is used to filter the objects that will be returned.This filter will be same for all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#objectfilter AdsiConnectionResource#objectfilter}
  */
  readonly objectfilter?: string;
  /**
  * Page size defines the number of objects to be returned from each AD operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#page_size AdsiConnectionResource#page_size}
  */
  readonly pageSize?: string;
  /**
  * JSON to specify Bootstrap Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#pam_config AdsiConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Service account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#password AdsiConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Service account password_wo (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#password_wo AdsiConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * ADSI remote agent Provisioning URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#provisioning_url AdsiConnectionResource#provisioning_url}
  */
  readonly provisioningUrl?: string;
  /**
  * Configuration to Remove nested group hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#removeaccessentitlementjson AdsiConnectionResource#removeaccessentitlementjson}
  */
  readonly removeaccessentitlementjson?: string;
  /**
  * Configuration to REMOVE Access (cross domain/forest group membership) to an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#removeaccessjson AdsiConnectionResource#removeaccessjson}
  */
  readonly removeaccessjson?: string;
  /**
  * Specify the actions to be performed for deleting an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#removeaccountjson AdsiConnectionResource#removeaccountjson}
  */
  readonly removeaccountjson?: string;
  /**
  * Configuration to Delete a Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#removegroupjson AdsiConnectionResource#removegroupjson}
  */
  readonly removegroupjson?: string;
  /**
  * Specify the actions to be performed while deleting a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#removeserviceaccountjson AdsiConnectionResource#removeserviceaccountjson}
  */
  readonly removeserviceaccountjson?: string;
  /**
  * Configuration to Reset and Change Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#resetandchangepasswrdjson AdsiConnectionResource#resetandchangepasswrdjson}
  */
  readonly resetandchangepasswrdjson?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#save_in_vault AdsiConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Account Search Filter to specify the starting point of the directory from where the accounts needs to be imported. You can have multiple BaseDNs here separated by ###.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#searchfilter AdsiConnectionResource#searchfilter}
  */
  readonly searchfilter?: string;
  /**
  * Account status and threshold related config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#status_threshold_config AdsiConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * JSON configuration to specify Users status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#statuskeyjson AdsiConnectionResource#statuskeyjson}
  */
  readonly statuskeyjson?: string;
  /**
  * Specify the attributes values which will be used to Update existing Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#updateaccountjson AdsiConnectionResource#updateaccountjson}
  */
  readonly updateaccountjson?: string;
  /**
  * Configuration to Update a Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#updategroupjson AdsiConnectionResource#updategroupjson}
  */
  readonly updategroupjson?: string;
  /**
  * Specify the Field Value which will be used to update the existing Service Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#updateserviceaccountjson AdsiConnectionResource#updateserviceaccountjson}
  */
  readonly updateserviceaccountjson?: string;
  /**
  * Specify the attribute Value which will be used to Update existing User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#updateuserjson AdsiConnectionResource#updateuserjson}
  */
  readonly updateuserjson?: string;
  /**
  * Primary/root domain URL list (comma Separated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#url AdsiConnectionResource#url}
  */
  readonly url: string;
  /**
  * Map EIC and AD attributes for user import (AD attributes must be in lower case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#user_attribute AdsiConnectionResource#user_attribute}
  */
  readonly userAttribute?: string;
  /**
  * Service account username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#username AdsiConnectionResource#username}
  */
  readonly username: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#vault_configuration AdsiConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#vault_connection AdsiConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#wo_version AdsiConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource saviynt_adsi_connection_resource}
*/
export class AdsiConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_adsi_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdsiConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdsiConnectionResource to import
  * @param importFromId The id of the existing AdsiConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdsiConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_adsi_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/adsi_connection_resource saviynt_adsi_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdsiConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: AdsiConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_adsi_connection_resource',
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
    this._accountAttribute = config.accountAttribute;
    this._accountnamerule = config.accountnamerule;
    this._addaccessentitlementjson = config.addaccessentitlementjson;
    this._addaccessjson = config.addaccessjson;
    this._checkforunique = config.checkforunique;
    this._connectionName = config.connectionName;
    this._connectionUrl = config.connectionUrl;
    this._createaccountjson = config.createaccountjson;
    this._creategroupjson = config.creategroupjson;
    this._createserviceaccountjson = config.createserviceaccountjson;
    this._customconfigjson = config.customconfigjson;
    this._defaultUserRole = config.defaultUserRole;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._disableaccountjson = config.disableaccountjson;
    this._emailTemplate = config.emailTemplate;
    this._enableaccountjson = config.enableaccountjson;
    this._endpointsFilter = config.endpointsFilter;
    this._entitlementAttribute = config.entitlementAttribute;
    this._forestlist = config.forestlist;
    this._groupImportMapping = config.groupImportMapping;
    this._groupSearchBaseDn = config.groupSearchBaseDn;
    this._importNestedMembership = config.importNestedMembership;
    this._modifyuserdatajson = config.modifyuserdatajson;
    this._objectfilter = config.objectfilter;
    this._pageSize = config.pageSize;
    this._pamConfig = config.pamConfig;
    this._password = config.password;
    this._passwordWo = config.passwordWo;
    this._provisioningUrl = config.provisioningUrl;
    this._removeaccessentitlementjson = config.removeaccessentitlementjson;
    this._removeaccessjson = config.removeaccessjson;
    this._removeaccountjson = config.removeaccountjson;
    this._removegroupjson = config.removegroupjson;
    this._removeserviceaccountjson = config.removeserviceaccountjson;
    this._resetandchangepasswrdjson = config.resetandchangepasswrdjson;
    this._saveInVault = config.saveInVault;
    this._searchfilter = config.searchfilter;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._statuskeyjson = config.statuskeyjson;
    this._updateaccountjson = config.updateaccountjson;
    this._updategroupjson = config.updategroupjson;
    this._updateserviceaccountjson = config.updateserviceaccountjson;
    this._updateuserjson = config.updateuserjson;
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

  // accountnamerule - computed: true, optional: true, required: false
  private _accountnamerule?: string; 
  public get accountnamerule() {
    return this.getStringAttribute('accountnamerule');
  }
  public set accountnamerule(value: string) {
    this._accountnamerule = value;
  }
  public resetAccountnamerule() {
    this._accountnamerule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountnameruleInput() {
    return this._accountnamerule;
  }

  // addaccessentitlementjson - computed: true, optional: true, required: false
  private _addaccessentitlementjson?: string; 
  public get addaccessentitlementjson() {
    return this.getStringAttribute('addaccessentitlementjson');
  }
  public set addaccessentitlementjson(value: string) {
    this._addaccessentitlementjson = value;
  }
  public resetAddaccessentitlementjson() {
    this._addaccessentitlementjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addaccessentitlementjsonInput() {
    return this._addaccessentitlementjson;
  }

  // addaccessjson - computed: true, optional: true, required: false
  private _addaccessjson?: string; 
  public get addaccessjson() {
    return this.getStringAttribute('addaccessjson');
  }
  public set addaccessjson(value: string) {
    this._addaccessjson = value;
  }
  public resetAddaccessjson() {
    this._addaccessjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addaccessjsonInput() {
    return this._addaccessjson;
  }

  // checkforunique - computed: true, optional: true, required: false
  private _checkforunique?: string; 
  public get checkforunique() {
    return this.getStringAttribute('checkforunique');
  }
  public set checkforunique(value: string) {
    this._checkforunique = value;
  }
  public resetCheckforunique() {
    this._checkforunique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkforuniqueInput() {
    return this._checkforunique;
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

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // createaccountjson - computed: true, optional: true, required: false
  private _createaccountjson?: string; 
  public get createaccountjson() {
    return this.getStringAttribute('createaccountjson');
  }
  public set createaccountjson(value: string) {
    this._createaccountjson = value;
  }
  public resetCreateaccountjson() {
    this._createaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createaccountjsonInput() {
    return this._createaccountjson;
  }

  // creategroupjson - computed: true, optional: true, required: false
  private _creategroupjson?: string; 
  public get creategroupjson() {
    return this.getStringAttribute('creategroupjson');
  }
  public set creategroupjson(value: string) {
    this._creategroupjson = value;
  }
  public resetCreategroupjson() {
    this._creategroupjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creategroupjsonInput() {
    return this._creategroupjson;
  }

  // createserviceaccountjson - computed: true, optional: true, required: false
  private _createserviceaccountjson?: string; 
  public get createserviceaccountjson() {
    return this.getStringAttribute('createserviceaccountjson');
  }
  public set createserviceaccountjson(value: string) {
    this._createserviceaccountjson = value;
  }
  public resetCreateserviceaccountjson() {
    this._createserviceaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createserviceaccountjsonInput() {
    return this._createserviceaccountjson;
  }

  // customconfigjson - computed: true, optional: true, required: false
  private _customconfigjson?: string; 
  public get customconfigjson() {
    return this.getStringAttribute('customconfigjson');
  }
  public set customconfigjson(value: string) {
    this._customconfigjson = value;
  }
  public resetCustomconfigjson() {
    this._customconfigjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customconfigjsonInput() {
    return this._customconfigjson;
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

  // disableaccountjson - computed: true, optional: true, required: false
  private _disableaccountjson?: string; 
  public get disableaccountjson() {
    return this.getStringAttribute('disableaccountjson');
  }
  public set disableaccountjson(value: string) {
    this._disableaccountjson = value;
  }
  public resetDisableaccountjson() {
    this._disableaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableaccountjsonInput() {
    return this._disableaccountjson;
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

  // enableaccountjson - computed: true, optional: true, required: false
  private _enableaccountjson?: string; 
  public get enableaccountjson() {
    return this.getStringAttribute('enableaccountjson');
  }
  public set enableaccountjson(value: string) {
    this._enableaccountjson = value;
  }
  public resetEnableaccountjson() {
    this._enableaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableaccountjsonInput() {
    return this._enableaccountjson;
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

  // forestlist - computed: false, optional: false, required: true
  private _forestlist?: string; 
  public get forestlist() {
    return this.getStringAttribute('forestlist');
  }
  public set forestlist(value: string) {
    this._forestlist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forestlistInput() {
    return this._forestlist;
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

  // import_nested_membership - computed: true, optional: true, required: false
  private _importNestedMembership?: string; 
  public get importNestedMembership() {
    return this.getStringAttribute('import_nested_membership');
  }
  public set importNestedMembership(value: string) {
    this._importNestedMembership = value;
  }
  public resetImportNestedMembership() {
    this._importNestedMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importNestedMembershipInput() {
    return this._importNestedMembership;
  }

  // modifyuserdatajson - computed: true, optional: true, required: false
  private _modifyuserdatajson?: string; 
  public get modifyuserdatajson() {
    return this.getStringAttribute('modifyuserdatajson');
  }
  public set modifyuserdatajson(value: string) {
    this._modifyuserdatajson = value;
  }
  public resetModifyuserdatajson() {
    this._modifyuserdatajson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyuserdatajsonInput() {
    return this._modifyuserdatajson;
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

  // provisioning_url - computed: true, optional: true, required: false
  private _provisioningUrl?: string; 
  public get provisioningUrl() {
    return this.getStringAttribute('provisioning_url');
  }
  public set provisioningUrl(value: string) {
    this._provisioningUrl = value;
  }
  public resetProvisioningUrl() {
    this._provisioningUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningUrlInput() {
    return this._provisioningUrl;
  }

  // removeaccessentitlementjson - computed: true, optional: true, required: false
  private _removeaccessentitlementjson?: string; 
  public get removeaccessentitlementjson() {
    return this.getStringAttribute('removeaccessentitlementjson');
  }
  public set removeaccessentitlementjson(value: string) {
    this._removeaccessentitlementjson = value;
  }
  public resetRemoveaccessentitlementjson() {
    this._removeaccessentitlementjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeaccessentitlementjsonInput() {
    return this._removeaccessentitlementjson;
  }

  // removeaccessjson - computed: true, optional: true, required: false
  private _removeaccessjson?: string; 
  public get removeaccessjson() {
    return this.getStringAttribute('removeaccessjson');
  }
  public set removeaccessjson(value: string) {
    this._removeaccessjson = value;
  }
  public resetRemoveaccessjson() {
    this._removeaccessjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeaccessjsonInput() {
    return this._removeaccessjson;
  }

  // removeaccountjson - computed: true, optional: true, required: false
  private _removeaccountjson?: string; 
  public get removeaccountjson() {
    return this.getStringAttribute('removeaccountjson');
  }
  public set removeaccountjson(value: string) {
    this._removeaccountjson = value;
  }
  public resetRemoveaccountjson() {
    this._removeaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeaccountjsonInput() {
    return this._removeaccountjson;
  }

  // removegroupjson - computed: true, optional: true, required: false
  private _removegroupjson?: string; 
  public get removegroupjson() {
    return this.getStringAttribute('removegroupjson');
  }
  public set removegroupjson(value: string) {
    this._removegroupjson = value;
  }
  public resetRemovegroupjson() {
    this._removegroupjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removegroupjsonInput() {
    return this._removegroupjson;
  }

  // removeserviceaccountjson - computed: true, optional: true, required: false
  private _removeserviceaccountjson?: string; 
  public get removeserviceaccountjson() {
    return this.getStringAttribute('removeserviceaccountjson');
  }
  public set removeserviceaccountjson(value: string) {
    this._removeserviceaccountjson = value;
  }
  public resetRemoveserviceaccountjson() {
    this._removeserviceaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeserviceaccountjsonInput() {
    return this._removeserviceaccountjson;
  }

  // resetandchangepasswrdjson - computed: true, optional: true, required: false
  private _resetandchangepasswrdjson?: string; 
  public get resetandchangepasswrdjson() {
    return this.getStringAttribute('resetandchangepasswrdjson');
  }
  public set resetandchangepasswrdjson(value: string) {
    this._resetandchangepasswrdjson = value;
  }
  public resetResetandchangepasswrdjson() {
    this._resetandchangepasswrdjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetandchangepasswrdjsonInput() {
    return this._resetandchangepasswrdjson;
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

  // statuskeyjson - computed: true, optional: true, required: false
  private _statuskeyjson?: string; 
  public get statuskeyjson() {
    return this.getStringAttribute('statuskeyjson');
  }
  public set statuskeyjson(value: string) {
    this._statuskeyjson = value;
  }
  public resetStatuskeyjson() {
    this._statuskeyjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statuskeyjsonInput() {
    return this._statuskeyjson;
  }

  // updateaccountjson - computed: true, optional: true, required: false
  private _updateaccountjson?: string; 
  public get updateaccountjson() {
    return this.getStringAttribute('updateaccountjson');
  }
  public set updateaccountjson(value: string) {
    this._updateaccountjson = value;
  }
  public resetUpdateaccountjson() {
    this._updateaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateaccountjsonInput() {
    return this._updateaccountjson;
  }

  // updategroupjson - computed: true, optional: true, required: false
  private _updategroupjson?: string; 
  public get updategroupjson() {
    return this.getStringAttribute('updategroupjson');
  }
  public set updategroupjson(value: string) {
    this._updategroupjson = value;
  }
  public resetUpdategroupjson() {
    this._updategroupjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updategroupjsonInput() {
    return this._updategroupjson;
  }

  // updateserviceaccountjson - computed: true, optional: true, required: false
  private _updateserviceaccountjson?: string; 
  public get updateserviceaccountjson() {
    return this.getStringAttribute('updateserviceaccountjson');
  }
  public set updateserviceaccountjson(value: string) {
    this._updateserviceaccountjson = value;
  }
  public resetUpdateserviceaccountjson() {
    this._updateserviceaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateserviceaccountjsonInput() {
    return this._updateserviceaccountjson;
  }

  // updateuserjson - computed: true, optional: true, required: false
  private _updateuserjson?: string; 
  public get updateuserjson() {
    return this.getStringAttribute('updateuserjson');
  }
  public set updateuserjson(value: string) {
    this._updateuserjson = value;
  }
  public resetUpdateuserjson() {
    this._updateuserjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateuserjsonInput() {
    return this._updateuserjson;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
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
      accountnamerule: cdktf.stringToTerraform(this._accountnamerule),
      addaccessentitlementjson: cdktf.stringToTerraform(this._addaccessentitlementjson),
      addaccessjson: cdktf.stringToTerraform(this._addaccessjson),
      checkforunique: cdktf.stringToTerraform(this._checkforunique),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_url: cdktf.stringToTerraform(this._connectionUrl),
      createaccountjson: cdktf.stringToTerraform(this._createaccountjson),
      creategroupjson: cdktf.stringToTerraform(this._creategroupjson),
      createserviceaccountjson: cdktf.stringToTerraform(this._createserviceaccountjson),
      customconfigjson: cdktf.stringToTerraform(this._customconfigjson),
      default_user_role: cdktf.stringToTerraform(this._defaultUserRole),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      disableaccountjson: cdktf.stringToTerraform(this._disableaccountjson),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enableaccountjson: cdktf.stringToTerraform(this._enableaccountjson),
      endpoints_filter: cdktf.stringToTerraform(this._endpointsFilter),
      entitlement_attribute: cdktf.stringToTerraform(this._entitlementAttribute),
      forestlist: cdktf.stringToTerraform(this._forestlist),
      group_import_mapping: cdktf.stringToTerraform(this._groupImportMapping),
      group_search_base_dn: cdktf.stringToTerraform(this._groupSearchBaseDn),
      import_nested_membership: cdktf.stringToTerraform(this._importNestedMembership),
      modifyuserdatajson: cdktf.stringToTerraform(this._modifyuserdatajson),
      objectfilter: cdktf.stringToTerraform(this._objectfilter),
      page_size: cdktf.stringToTerraform(this._pageSize),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      password: cdktf.stringToTerraform(this._password),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      provisioning_url: cdktf.stringToTerraform(this._provisioningUrl),
      removeaccessentitlementjson: cdktf.stringToTerraform(this._removeaccessentitlementjson),
      removeaccessjson: cdktf.stringToTerraform(this._removeaccessjson),
      removeaccountjson: cdktf.stringToTerraform(this._removeaccountjson),
      removegroupjson: cdktf.stringToTerraform(this._removegroupjson),
      removeserviceaccountjson: cdktf.stringToTerraform(this._removeserviceaccountjson),
      resetandchangepasswrdjson: cdktf.stringToTerraform(this._resetandchangepasswrdjson),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      searchfilter: cdktf.stringToTerraform(this._searchfilter),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      statuskeyjson: cdktf.stringToTerraform(this._statuskeyjson),
      updateaccountjson: cdktf.stringToTerraform(this._updateaccountjson),
      updategroupjson: cdktf.stringToTerraform(this._updategroupjson),
      updateserviceaccountjson: cdktf.stringToTerraform(this._updateserviceaccountjson),
      updateuserjson: cdktf.stringToTerraform(this._updateuserjson),
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
      accountnamerule: {
        value: cdktf.stringToHclTerraform(this._accountnamerule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addaccessentitlementjson: {
        value: cdktf.stringToHclTerraform(this._addaccessentitlementjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addaccessjson: {
        value: cdktf.stringToHclTerraform(this._addaccessjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkforunique: {
        value: cdktf.stringToHclTerraform(this._checkforunique),
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
      connection_url: {
        value: cdktf.stringToHclTerraform(this._connectionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      createaccountjson: {
        value: cdktf.stringToHclTerraform(this._createaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creategroupjson: {
        value: cdktf.stringToHclTerraform(this._creategroupjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      createserviceaccountjson: {
        value: cdktf.stringToHclTerraform(this._createserviceaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customconfigjson: {
        value: cdktf.stringToHclTerraform(this._customconfigjson),
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
      disableaccountjson: {
        value: cdktf.stringToHclTerraform(this._disableaccountjson),
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
      enableaccountjson: {
        value: cdktf.stringToHclTerraform(this._enableaccountjson),
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
      entitlement_attribute: {
        value: cdktf.stringToHclTerraform(this._entitlementAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forestlist: {
        value: cdktf.stringToHclTerraform(this._forestlist),
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
      import_nested_membership: {
        value: cdktf.stringToHclTerraform(this._importNestedMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modifyuserdatajson: {
        value: cdktf.stringToHclTerraform(this._modifyuserdatajson),
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
      password_wo: {
        value: cdktf.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_url: {
        value: cdktf.stringToHclTerraform(this._provisioningUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removeaccessentitlementjson: {
        value: cdktf.stringToHclTerraform(this._removeaccessentitlementjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removeaccessjson: {
        value: cdktf.stringToHclTerraform(this._removeaccessjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removeaccountjson: {
        value: cdktf.stringToHclTerraform(this._removeaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removegroupjson: {
        value: cdktf.stringToHclTerraform(this._removegroupjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removeserviceaccountjson: {
        value: cdktf.stringToHclTerraform(this._removeserviceaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resetandchangepasswrdjson: {
        value: cdktf.stringToHclTerraform(this._resetandchangepasswrdjson),
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
      status_threshold_config: {
        value: cdktf.stringToHclTerraform(this._statusThresholdConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuskeyjson: {
        value: cdktf.stringToHclTerraform(this._statuskeyjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updateaccountjson: {
        value: cdktf.stringToHclTerraform(this._updateaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updategroupjson: {
        value: cdktf.stringToHclTerraform(this._updategroupjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updateserviceaccountjson: {
        value: cdktf.stringToHclTerraform(this._updateserviceaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updateuserjson: {
        value: cdktf.stringToHclTerraform(this._updateuserjson),
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
