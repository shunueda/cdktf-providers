// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPassThroughAuthenticationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional SCIM filter that will be ANDed with the filter created to identify the account in the PingOne service that corresponds to the local entry. Only the "eq", "sw", "and", and "or" filter types may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#additional_user_mapping_scim_filter DefaultPassThroughAuthenticationHandler#additional_user_mapping_scim_filter}
  */
  readonly additionalUserMappingScimFilter?: string;
  /**
  * Specifies the API endpoint for the PingOne web service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#api_url DefaultPassThroughAuthenticationHandler#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Specifies the API endpoint for the PingOne authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#auth_url DefaultPassThroughAuthenticationHandler#auth_url}
  */
  readonly authUrl?: string;
  /**
  * A pattern to use to construct the bind DN for the simple bind request to send to the remote server. This may consist of a combination of static text and attribute values and other directives enclosed in curly braces.  For example, the value "cn={cn},ou=People,dc=example,dc=com" indicates that the remote bind DN should be constructed from the text "cn=" followed by the value of the local entry's cn attribute followed by the text "ou=People,dc=example,dc=com". If an attribute contains the value to use as the bind DN for pass-through authentication, then the pattern may simply be the name of that attribute in curly braces (e.g., if the seeAlso attribute contains the bind DN for the target user, then a bind DN pattern of "{seeAlso}" would be appropriate).  Note that a bind DN pattern can be used to construct a bind DN that is not actually a valid LDAP distinguished name. For example, if authentication is being passed through to a Microsoft Active Directory server, then a bind DN pattern could be used to construct a user principal name (UPN) as an alternative to a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#bind_dn_pattern DefaultPassThroughAuthenticationHandler#bind_dn_pattern}
  */
  readonly bindDnPattern?: string;
  /**
  * A reference to connection criteria that will be used to indicate which bind requests should be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#connection_criteria DefaultPassThroughAuthenticationHandler#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * The set of pass-through authentication failure types that should not result in an immediate failure, but should instead allow the aggregate handler to proceed with the next configured subordinate handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#continue_on_failure_type DefaultPassThroughAuthenticationHandler#continue_on_failure_type}
  */
  readonly continueOnFailureType?: string[];
  /**
  * A description for this Pass Through Authentication Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#description DefaultPassThroughAuthenticationHandler#description}
  */
  readonly description?: string;
  /**
  * Specifies one or more DN mappings that may be used to transform bind DNs before attempting to bind to the external servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#dn_map DefaultPassThroughAuthenticationHandler#dn_map}
  */
  readonly dnMap?: string[];
  /**
  * Specifies the PingOne Environment that will be associated with this PingOne Pass Through Authentication Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#environment_id DefaultPassThroughAuthenticationHandler#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The set of arguments used to customize the behavior for the Third Party Pass Through Authentication Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#extension_argument DefaultPassThroughAuthenticationHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Pass Through Authentication Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#extension_class DefaultPassThroughAuthenticationHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the PingOne service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#http_proxy_external_server DefaultPassThroughAuthenticationHandler#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * The base DNs for the local users whose authentication attempts may be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#included_local_entry_base_dn DefaultPassThroughAuthenticationHandler#included_local_entry_base_dn}
  */
  readonly includedLocalEntryBaseDn?: string[];
  /**
  * Specifies the initial number of connections to establish to each external server against which authentication may be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#initial_connections DefaultPassThroughAuthenticationHandler#initial_connections}
  */
  readonly initialConnections?: number;
  /**
  * Specifies the maximum number of connections to maintain to each external server against which authentication may be attempted. This value must be greater than or equal to the value for the initial-connections property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#max_connections DefaultPassThroughAuthenticationHandler#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum length of time to wait for a response from an external server in the same location as this Directory Server before considering it unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#maximum_allowed_local_response_time DefaultPassThroughAuthenticationHandler#maximum_allowed_local_response_time}
  */
  readonly maximumAllowedLocalResponseTime?: string;
  /**
  * The maximum length of time to wait for a response from an external server in a different location from this Directory Server before considering it unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#maximum_allowed_nonlocal_response_time DefaultPassThroughAuthenticationHandler#maximum_allowed_nonlocal_response_time}
  */
  readonly maximumAllowedNonlocalResponseTime?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#name DefaultPassThroughAuthenticationHandler#name}
  */
  readonly name: string;
  /**
  * Specifies the OAuth Client ID used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#oauth_client_id DefaultPassThroughAuthenticationHandler#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Specifies the OAuth Client Secret used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#oauth_client_secret DefaultPassThroughAuthenticationHandler#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Specifies a passphrase provider that can be used to obtain the OAuth Client Secret used to authenticate connections to the PingOne API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#oauth_client_secret_passphrase_provider DefaultPassThroughAuthenticationHandler#oauth_client_secret_passphrase_provider}
  */
  readonly oauthClientSecretPassphraseProvider?: string;
  /**
  * A reference to request criteria that will be used to indicate which bind requests should be passed through to the external authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#request_criteria DefaultPassThroughAuthenticationHandler#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * The base DN to use when searching for the user entry using a filter constructed from the pattern defined in the search-filter-pattern property. If no base DN is specified, the null DN will be used as the search base DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#search_base_dn DefaultPassThroughAuthenticationHandler#search_base_dn}
  */
  readonly searchBaseDn?: string;
  /**
  * A pattern to use to construct a filter to use when searching an external server for the entry of the user as whom to bind. For example, "(mail={uid:ldapFilterEscape}@example.com)" would construct a search filter to search for a user whose entry in the local server contains a uid attribute whose value appears before "@example.com" in the mail attribute in the external server. Note that the "ldapFilterEscape" modifier should almost always be used with attributes specified in the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#search_filter_pattern DefaultPassThroughAuthenticationHandler#search_filter_pattern}
  */
  readonly searchFilterPattern?: string;
  /**
  * Specifies the LDAP external server(s) to which authentication attempts should be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#server DefaultPassThroughAuthenticationHandler#server}
  */
  readonly server?: string[];
  /**
  * Specifies the manner in which external servers should be used for pass-through authentication attempts if multiple servers are defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#server_access_mode DefaultPassThroughAuthenticationHandler#server_access_mode}
  */
  readonly serverAccessMode?: string;
  /**
  * The set of subordinate pass-through authentication handlers that may be used to perform the authentication processing. Handlers will be invoked in order until one is found for which the bind operation matches the associated criteria and either succeeds or fails in a manner that should not be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#subordinate_pass_through_authentication_handler DefaultPassThroughAuthenticationHandler#subordinate_pass_through_authentication_handler}
  */
  readonly subordinatePassThroughAuthenticationHandler?: string[];
  /**
  * Indicates whether to take server locations into account when prioritizing the servers to use for pass-through authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#use_location DefaultPassThroughAuthenticationHandler#use_location}
  */
  readonly useLocation?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include the password policy request control (as defined in draft-behera-ldap-password-policy-10) in bind requests sent to the external server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#use_password_policy_control DefaultPassThroughAuthenticationHandler#use_password_policy_control}
  */
  readonly usePasswordPolicyControl?: boolean | cdktf.IResolvable;
  /**
  * The names of the attributes in the local user entry whose values must match the values of the corresponding fields in the PingOne service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#user_mapping_local_attribute DefaultPassThroughAuthenticationHandler#user_mapping_local_attribute}
  */
  readonly userMappingLocalAttribute?: string[];
  /**
  * The names of the fields in the PingOne service whose values must match the values of the corresponding attributes in the local user entry, as specified in the user-mapping-local-attribute property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#user_mapping_remote_json_field DefaultPassThroughAuthenticationHandler#user_mapping_remote_json_field}
  */
  readonly userMappingRemoteJsonField?: string[];
}
export interface DefaultPassThroughAuthenticationHandlerRequiredActions {
}

export function defaultPassThroughAuthenticationHandlerRequiredActionsToTerraform(struct?: DefaultPassThroughAuthenticationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultPassThroughAuthenticationHandlerRequiredActionsToHclTerraform(struct?: DefaultPassThroughAuthenticationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultPassThroughAuthenticationHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultPassThroughAuthenticationHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultPassThroughAuthenticationHandlerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultPassThroughAuthenticationHandlerRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultPassThroughAuthenticationHandlerRequiredActionsOutputReference {
    return new DefaultPassThroughAuthenticationHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler pingdirectory_default_pass_through_authentication_handler}
*/
export class DefaultPassThroughAuthenticationHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_pass_through_authentication_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPassThroughAuthenticationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPassThroughAuthenticationHandler to import
  * @param importFromId The id of the existing DefaultPassThroughAuthenticationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPassThroughAuthenticationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_pass_through_authentication_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_pass_through_authentication_handler pingdirectory_default_pass_through_authentication_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPassThroughAuthenticationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPassThroughAuthenticationHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_pass_through_authentication_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalUserMappingScimFilter = config.additionalUserMappingScimFilter;
    this._apiUrl = config.apiUrl;
    this._authUrl = config.authUrl;
    this._bindDnPattern = config.bindDnPattern;
    this._connectionCriteria = config.connectionCriteria;
    this._continueOnFailureType = config.continueOnFailureType;
    this._description = config.description;
    this._dnMap = config.dnMap;
    this._environmentId = config.environmentId;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._includedLocalEntryBaseDn = config.includedLocalEntryBaseDn;
    this._initialConnections = config.initialConnections;
    this._maxConnections = config.maxConnections;
    this._maximumAllowedLocalResponseTime = config.maximumAllowedLocalResponseTime;
    this._maximumAllowedNonlocalResponseTime = config.maximumAllowedNonlocalResponseTime;
    this._name = config.name;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthClientSecretPassphraseProvider = config.oauthClientSecretPassphraseProvider;
    this._requestCriteria = config.requestCriteria;
    this._searchBaseDn = config.searchBaseDn;
    this._searchFilterPattern = config.searchFilterPattern;
    this._server = config.server;
    this._serverAccessMode = config.serverAccessMode;
    this._subordinatePassThroughAuthenticationHandler = config.subordinatePassThroughAuthenticationHandler;
    this._useLocation = config.useLocation;
    this._usePasswordPolicyControl = config.usePasswordPolicyControl;
    this._userMappingLocalAttribute = config.userMappingLocalAttribute;
    this._userMappingRemoteJsonField = config.userMappingRemoteJsonField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_user_mapping_scim_filter - computed: true, optional: true, required: false
  private _additionalUserMappingScimFilter?: string; 
  public get additionalUserMappingScimFilter() {
    return this.getStringAttribute('additional_user_mapping_scim_filter');
  }
  public set additionalUserMappingScimFilter(value: string) {
    this._additionalUserMappingScimFilter = value;
  }
  public resetAdditionalUserMappingScimFilter() {
    this._additionalUserMappingScimFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserMappingScimFilterInput() {
    return this._additionalUserMappingScimFilter;
  }

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_url - computed: true, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // bind_dn_pattern - computed: true, optional: true, required: false
  private _bindDnPattern?: string; 
  public get bindDnPattern() {
    return this.getStringAttribute('bind_dn_pattern');
  }
  public set bindDnPattern(value: string) {
    this._bindDnPattern = value;
  }
  public resetBindDnPattern() {
    this._bindDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnPatternInput() {
    return this._bindDnPattern;
  }

  // connection_criteria - computed: true, optional: true, required: false
  private _connectionCriteria?: string; 
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }
  public set connectionCriteria(value: string) {
    this._connectionCriteria = value;
  }
  public resetConnectionCriteria() {
    this._connectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCriteriaInput() {
    return this._connectionCriteria;
  }

  // continue_on_failure_type - computed: true, optional: true, required: false
  private _continueOnFailureType?: string[]; 
  public get continueOnFailureType() {
    return cdktf.Fn.tolist(this.getListAttribute('continue_on_failure_type'));
  }
  public set continueOnFailureType(value: string[]) {
    this._continueOnFailureType = value;
  }
  public resetContinueOnFailureType() {
    this._continueOnFailureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnFailureTypeInput() {
    return this._continueOnFailureType;
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

  // dn_map - computed: true, optional: true, required: false
  private _dnMap?: string[]; 
  public get dnMap() {
    return cdktf.Fn.tolist(this.getListAttribute('dn_map'));
  }
  public set dnMap(value: string[]) {
    this._dnMap = value;
  }
  public resetDnMap() {
    this._dnMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnMapInput() {
    return this._dnMap;
  }

  // environment_id - computed: true, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // http_proxy_external_server - computed: true, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_local_entry_base_dn - computed: true, optional: true, required: false
  private _includedLocalEntryBaseDn?: string[]; 
  public get includedLocalEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_local_entry_base_dn'));
  }
  public set includedLocalEntryBaseDn(value: string[]) {
    this._includedLocalEntryBaseDn = value;
  }
  public resetIncludedLocalEntryBaseDn() {
    this._includedLocalEntryBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLocalEntryBaseDnInput() {
    return this._includedLocalEntryBaseDn;
  }

  // initial_connections - computed: true, optional: true, required: false
  private _initialConnections?: number; 
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }
  public set initialConnections(value: number) {
    this._initialConnections = value;
  }
  public resetInitialConnections() {
    this._initialConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConnectionsInput() {
    return this._initialConnections;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // maximum_allowed_local_response_time - computed: true, optional: true, required: false
  private _maximumAllowedLocalResponseTime?: string; 
  public get maximumAllowedLocalResponseTime() {
    return this.getStringAttribute('maximum_allowed_local_response_time');
  }
  public set maximumAllowedLocalResponseTime(value: string) {
    this._maximumAllowedLocalResponseTime = value;
  }
  public resetMaximumAllowedLocalResponseTime() {
    this._maximumAllowedLocalResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAllowedLocalResponseTimeInput() {
    return this._maximumAllowedLocalResponseTime;
  }

  // maximum_allowed_nonlocal_response_time - computed: true, optional: true, required: false
  private _maximumAllowedNonlocalResponseTime?: string; 
  public get maximumAllowedNonlocalResponseTime() {
    return this.getStringAttribute('maximum_allowed_nonlocal_response_time');
  }
  public set maximumAllowedNonlocalResponseTime(value: string) {
    this._maximumAllowedNonlocalResponseTime = value;
  }
  public resetMaximumAllowedNonlocalResponseTime() {
    this._maximumAllowedNonlocalResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAllowedNonlocalResponseTimeInput() {
    return this._maximumAllowedNonlocalResponseTime;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // oauth_client_id - computed: true, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: true, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_client_secret_passphrase_provider - computed: true, optional: true, required: false
  private _oauthClientSecretPassphraseProvider?: string; 
  public get oauthClientSecretPassphraseProvider() {
    return this.getStringAttribute('oauth_client_secret_passphrase_provider');
  }
  public set oauthClientSecretPassphraseProvider(value: string) {
    this._oauthClientSecretPassphraseProvider = value;
  }
  public resetOauthClientSecretPassphraseProvider() {
    this._oauthClientSecretPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretPassphraseProviderInput() {
    return this._oauthClientSecretPassphraseProvider;
  }

  // request_criteria - computed: true, optional: true, required: false
  private _requestCriteria?: string; 
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }
  public set requestCriteria(value: string) {
    this._requestCriteria = value;
  }
  public resetRequestCriteria() {
    this._requestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCriteriaInput() {
    return this._requestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultPassThroughAuthenticationHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // search_base_dn - computed: true, optional: true, required: false
  private _searchBaseDn?: string; 
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }
  public set searchBaseDn(value: string) {
    this._searchBaseDn = value;
  }
  public resetSearchBaseDn() {
    this._searchBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseDnInput() {
    return this._searchBaseDn;
  }

  // search_filter_pattern - computed: true, optional: true, required: false
  private _searchFilterPattern?: string; 
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }
  public set searchFilterPattern(value: string) {
    this._searchFilterPattern = value;
  }
  public resetSearchFilterPattern() {
    this._searchFilterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterPatternInput() {
    return this._searchFilterPattern;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_access_mode - computed: true, optional: true, required: false
  private _serverAccessMode?: string; 
  public get serverAccessMode() {
    return this.getStringAttribute('server_access_mode');
  }
  public set serverAccessMode(value: string) {
    this._serverAccessMode = value;
  }
  public resetServerAccessMode() {
    this._serverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAccessModeInput() {
    return this._serverAccessMode;
  }

  // subordinate_pass_through_authentication_handler - computed: true, optional: true, required: false
  private _subordinatePassThroughAuthenticationHandler?: string[]; 
  public get subordinatePassThroughAuthenticationHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('subordinate_pass_through_authentication_handler'));
  }
  public set subordinatePassThroughAuthenticationHandler(value: string[]) {
    this._subordinatePassThroughAuthenticationHandler = value;
  }
  public resetSubordinatePassThroughAuthenticationHandler() {
    this._subordinatePassThroughAuthenticationHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subordinatePassThroughAuthenticationHandlerInput() {
    return this._subordinatePassThroughAuthenticationHandler;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_location - computed: true, optional: true, required: false
  private _useLocation?: boolean | cdktf.IResolvable; 
  public get useLocation() {
    return this.getBooleanAttribute('use_location');
  }
  public set useLocation(value: boolean | cdktf.IResolvable) {
    this._useLocation = value;
  }
  public resetUseLocation() {
    this._useLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocationInput() {
    return this._useLocation;
  }

  // use_password_policy_control - computed: true, optional: true, required: false
  private _usePasswordPolicyControl?: boolean | cdktf.IResolvable; 
  public get usePasswordPolicyControl() {
    return this.getBooleanAttribute('use_password_policy_control');
  }
  public set usePasswordPolicyControl(value: boolean | cdktf.IResolvable) {
    this._usePasswordPolicyControl = value;
  }
  public resetUsePasswordPolicyControl() {
    this._usePasswordPolicyControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasswordPolicyControlInput() {
    return this._usePasswordPolicyControl;
  }

  // user_mapping_local_attribute - computed: true, optional: true, required: false
  private _userMappingLocalAttribute?: string[]; 
  public get userMappingLocalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_local_attribute'));
  }
  public set userMappingLocalAttribute(value: string[]) {
    this._userMappingLocalAttribute = value;
  }
  public resetUserMappingLocalAttribute() {
    this._userMappingLocalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingLocalAttributeInput() {
    return this._userMappingLocalAttribute;
  }

  // user_mapping_remote_json_field - computed: true, optional: true, required: false
  private _userMappingRemoteJsonField?: string[]; 
  public get userMappingRemoteJsonField() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_remote_json_field'));
  }
  public set userMappingRemoteJsonField(value: string[]) {
    this._userMappingRemoteJsonField = value;
  }
  public resetUserMappingRemoteJsonField() {
    this._userMappingRemoteJsonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingRemoteJsonFieldInput() {
    return this._userMappingRemoteJsonField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_user_mapping_scim_filter: cdktf.stringToTerraform(this._additionalUserMappingScimFilter),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      bind_dn_pattern: cdktf.stringToTerraform(this._bindDnPattern),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      continue_on_failure_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._continueOnFailureType),
      description: cdktf.stringToTerraform(this._description),
      dn_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnMap),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      included_local_entry_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedLocalEntryBaseDn),
      initial_connections: cdktf.numberToTerraform(this._initialConnections),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      maximum_allowed_local_response_time: cdktf.stringToTerraform(this._maximumAllowedLocalResponseTime),
      maximum_allowed_nonlocal_response_time: cdktf.stringToTerraform(this._maximumAllowedNonlocalResponseTime),
      name: cdktf.stringToTerraform(this._name),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_client_secret_passphrase_provider: cdktf.stringToTerraform(this._oauthClientSecretPassphraseProvider),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      search_base_dn: cdktf.stringToTerraform(this._searchBaseDn),
      search_filter_pattern: cdktf.stringToTerraform(this._searchFilterPattern),
      server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._server),
      server_access_mode: cdktf.stringToTerraform(this._serverAccessMode),
      subordinate_pass_through_authentication_handler: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subordinatePassThroughAuthenticationHandler),
      use_location: cdktf.booleanToTerraform(this._useLocation),
      use_password_policy_control: cdktf.booleanToTerraform(this._usePasswordPolicyControl),
      user_mapping_local_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userMappingLocalAttribute),
      user_mapping_remote_json_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userMappingRemoteJsonField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_user_mapping_scim_filter: {
        value: cdktf.stringToHclTerraform(this._additionalUserMappingScimFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._bindDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continue_on_failure_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._continueOnFailureType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_local_entry_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedLocalEntryBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      initial_connections: {
        value: cdktf.numberToHclTerraform(this._initialConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_allowed_local_response_time: {
        value: cdktf.stringToHclTerraform(this._maximumAllowedLocalResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_allowed_nonlocal_response_time: {
        value: cdktf.stringToHclTerraform(this._maximumAllowedNonlocalResponseTime),
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
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecretPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_base_dn: {
        value: cdktf.stringToHclTerraform(this._searchBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter_pattern: {
        value: cdktf.stringToHclTerraform(this._searchFilterPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._server),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_access_mode: {
        value: cdktf.stringToHclTerraform(this._serverAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subordinate_pass_through_authentication_handler: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subordinatePassThroughAuthenticationHandler),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_location: {
        value: cdktf.booleanToHclTerraform(this._useLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_password_policy_control: {
        value: cdktf.booleanToHclTerraform(this._usePasswordPolicyControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_mapping_local_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userMappingLocalAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_mapping_remote_json_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userMappingRemoteJsonField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
