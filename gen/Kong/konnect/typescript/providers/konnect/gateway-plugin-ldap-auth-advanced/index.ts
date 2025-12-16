// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginLdapAuthAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#config GatewayPluginLdapAuthAdvanced#config}
  */
  readonly config: GatewayPluginLdapAuthAdvancedConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#control_plane_id GatewayPluginLdapAuthAdvanced#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#created_at GatewayPluginLdapAuthAdvanced#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#enabled GatewayPluginLdapAuthAdvanced#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#id GatewayPluginLdapAuthAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#instance_name GatewayPluginLdapAuthAdvanced#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#ordering GatewayPluginLdapAuthAdvanced#ordering}
  */
  readonly ordering?: GatewayPluginLdapAuthAdvancedOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#partials GatewayPluginLdapAuthAdvanced#partials}
  */
  readonly partials?: GatewayPluginLdapAuthAdvancedPartials[] | cdktf.IResolvable;
  /**
  * A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support tcp and tls. Default: ["grpc","grpcs","http","https","ws","wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#protocols GatewayPluginLdapAuthAdvanced#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#route GatewayPluginLdapAuthAdvanced#route}
  */
  readonly route?: GatewayPluginLdapAuthAdvancedRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#service GatewayPluginLdapAuthAdvanced#service}
  */
  readonly service?: GatewayPluginLdapAuthAdvancedService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#tags GatewayPluginLdapAuthAdvanced#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#updated_at GatewayPluginLdapAuthAdvanced#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginLdapAuthAdvancedConfigA {
  /**
  * An optional string (consumer UUID or username) value to use as an “anonymous” consumer if authentication fails. If empty (default null), the request will fail with an authentication failure `4xx`. Note that this value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#anonymous GatewayPluginLdapAuthAdvanced#anonymous}
  */
  readonly anonymous?: string;
  /**
  * Attribute to be used to search the user; e.g., "cn".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#attribute GatewayPluginLdapAuthAdvanced#attribute}
  */
  readonly attribute: string;
  /**
  * Base DN as the starting point for the search; e.g., 'dc=example,dc=com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#base_dn GatewayPluginLdapAuthAdvanced#base_dn}
  */
  readonly baseDn: string;
  /**
  * The DN to bind to. Used to perform LDAP search of user. This `bind_dn` should have permissions to search for the user being authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#bind_dn GatewayPluginLdapAuthAdvanced#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Cache expiry time in seconds. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#cache_ttl GatewayPluginLdapAuthAdvanced#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Whether to authenticate consumers based on `username`, `custom_id`, or both. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#consumer_by GatewayPluginLdapAuthAdvanced#consumer_by}
  */
  readonly consumerBy?: string[];
  /**
  * Whether consumer mapping is optional. If `consumer_optional=true`, the plugin will not attempt to associate a consumer with the LDAP authenticated user. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#consumer_optional GatewayPluginLdapAuthAdvanced#consumer_optional}
  */
  readonly consumerOptional?: boolean | cdktf.IResolvable;
  /**
  * Sets a distinguished name (DN) for the entry where LDAP searches for groups begin. This field is case-insensitive.',dc=com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#group_base_dn GatewayPluginLdapAuthAdvanced#group_base_dn}
  */
  readonly groupBaseDn?: string;
  /**
  * Sets the attribute holding the members of the LDAP group. This field is case-sensitive. Default: "memberOf"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#group_member_attribute GatewayPluginLdapAuthAdvanced#group_member_attribute}
  */
  readonly groupMemberAttribute?: string;
  /**
  * Sets the attribute holding the name of a group, typically called `name` (in Active Directory) or `cn` (in OpenLDAP). This field is case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#group_name_attribute GatewayPluginLdapAuthAdvanced#group_name_attribute}
  */
  readonly groupNameAttribute?: string;
  /**
  * The groups required to be present in the LDAP search result for successful authorization. This config parameter works in both **AND** / **OR** cases. - When `["group1 group2"]` are in the same array indices, both `group1` AND `group2` need to be present in the LDAP search result. - When `["group1", "group2"]` are in different array indices, either `group1` OR `group2` need to be present in the LDAP search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#groups_required GatewayPluginLdapAuthAdvanced#groups_required}
  */
  readonly groupsRequired?: string[];
  /**
  * An optional string to use as part of the Authorization header. By default, a valid Authorization header looks like this: `Authorization: ldap base64(username:password)`. If `header_type` is set to "basic", then the Authorization header would be `Authorization: basic base64(username:password)`. Note that `header_type` can take any string, not just `'ldap'` and `'basic'`. Default: "ldap"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#header_type GatewayPluginLdapAuthAdvanced#header_type}
  */
  readonly headerType?: string;
  /**
  * An optional boolean value telling the plugin to hide the credential to the upstream server. It will be removed by Kong before proxying the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#hide_credentials GatewayPluginLdapAuthAdvanced#hide_credentials}
  */
  readonly hideCredentials?: boolean | cdktf.IResolvable;
  /**
  * An optional value in milliseconds that defines how long an idle connection to LDAP server will live before being closed. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#keepalive GatewayPluginLdapAuthAdvanced#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Host on which the LDAP server is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#ldap_host GatewayPluginLdapAuthAdvanced#ldap_host}
  */
  readonly ldapHost: string;
  /**
  * The password to the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#ldap_password GatewayPluginLdapAuthAdvanced#ldap_password}
  */
  readonly ldapPassword?: string;
  /**
  * TCP port where the LDAP server is listening. 389 is the default port for non-SSL LDAP and AD. 636 is the port required for SSL LDAP and AD. If `ldaps` is configured, you must use port 636. Default: 389
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#ldap_port GatewayPluginLdapAuthAdvanced#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * Set it to `true` to use `ldaps`, a secure protocol (that can be configured to TLS) to connect to the LDAP server. When `ldaps` is configured, you must use port 636. If the `ldap` setting is enabled, ensure the `start_tls` setting is disabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#ldaps GatewayPluginLdapAuthAdvanced#ldaps}
  */
  readonly ldaps?: boolean | cdktf.IResolvable;
  /**
  * Displays all the LDAP search results received from the LDAP server for debugging purposes. Not recommended to be enabled in a production environment. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#log_search_results GatewayPluginLdapAuthAdvanced#log_search_results}
  */
  readonly logSearchResults?: boolean | cdktf.IResolvable;
  /**
  * When authentication fails the plugin sends `WWW-Authenticate` header with `realm` attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#realm GatewayPluginLdapAuthAdvanced#realm}
  */
  readonly realm?: string;
  /**
  * Set it to `true` to issue StartTLS (Transport Layer Security) extended operation over `ldap` connection. If the `start_tls` setting is enabled, ensure the `ldaps` setting is disabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#start_tls GatewayPluginLdapAuthAdvanced#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * An optional timeout in milliseconds when waiting for connection with LDAP server. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#timeout GatewayPluginLdapAuthAdvanced#timeout}
  */
  readonly timeout?: number;
  /**
  * Set to `true` to authenticate LDAP server. The server certificate will be verified according to the CA certificates specified by the `lua_ssl_trusted_certificate` directive. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#verify_ldap_host GatewayPluginLdapAuthAdvanced#verify_ldap_host}
  */
  readonly verifyLdapHost?: boolean | cdktf.IResolvable;
}

export function gatewayPluginLdapAuthAdvancedConfigAToTerraform(struct?: GatewayPluginLdapAuthAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous: cdktf.stringToTerraform(struct!.anonymous),
    attribute: cdktf.stringToTerraform(struct!.attribute),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerBy),
    consumer_optional: cdktf.booleanToTerraform(struct!.consumerOptional),
    group_base_dn: cdktf.stringToTerraform(struct!.groupBaseDn),
    group_member_attribute: cdktf.stringToTerraform(struct!.groupMemberAttribute),
    group_name_attribute: cdktf.stringToTerraform(struct!.groupNameAttribute),
    groups_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupsRequired),
    header_type: cdktf.stringToTerraform(struct!.headerType),
    hide_credentials: cdktf.booleanToTerraform(struct!.hideCredentials),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    ldap_host: cdktf.stringToTerraform(struct!.ldapHost),
    ldap_password: cdktf.stringToTerraform(struct!.ldapPassword),
    ldap_port: cdktf.numberToTerraform(struct!.ldapPort),
    ldaps: cdktf.booleanToTerraform(struct!.ldaps),
    log_search_results: cdktf.booleanToTerraform(struct!.logSearchResults),
    realm: cdktf.stringToTerraform(struct!.realm),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    verify_ldap_host: cdktf.booleanToTerraform(struct!.verifyLdapHost),
  }
}


export function gatewayPluginLdapAuthAdvancedConfigAToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous: {
      value: cdktf.stringToHclTerraform(struct!.anonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consumer_optional: {
      value: cdktf.booleanToHclTerraform(struct!.consumerOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_base_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupBaseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_member_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupsRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_type: {
      value: cdktf.stringToHclTerraform(struct!.headerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.hideCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_host: {
      value: cdktf.stringToHclTerraform(struct!.ldapHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_password: {
      value: cdktf.stringToHclTerraform(struct!.ldapPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_port: {
      value: cdktf.numberToHclTerraform(struct!.ldapPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldaps: {
      value: cdktf.booleanToHclTerraform(struct!.ldaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_search_results: {
      value: cdktf.booleanToHclTerraform(struct!.logSearchResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_ldap_host: {
      value: cdktf.booleanToHclTerraform(struct!.verifyLdapHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._consumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerBy = this._consumerBy;
    }
    if (this._consumerOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerOptional = this._consumerOptional;
    }
    if (this._groupBaseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBaseDn = this._groupBaseDn;
    }
    if (this._groupMemberAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberAttribute = this._groupMemberAttribute;
    }
    if (this._groupNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameAttribute = this._groupNameAttribute;
    }
    if (this._groupsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsRequired = this._groupsRequired;
    }
    if (this._headerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerType = this._headerType;
    }
    if (this._hideCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideCredentials = this._hideCredentials;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._ldapHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapHost = this._ldapHost;
    }
    if (this._ldapPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPassword = this._ldapPassword;
    }
    if (this._ldapPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPort = this._ldapPort;
    }
    if (this._ldaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldaps = this._ldaps;
    }
    if (this._logSearchResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSearchResults = this._logSearchResults;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._verifyLdapHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyLdapHost = this._verifyLdapHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymous = undefined;
      this._attribute = undefined;
      this._baseDn = undefined;
      this._bindDn = undefined;
      this._cacheTtl = undefined;
      this._consumerBy = undefined;
      this._consumerOptional = undefined;
      this._groupBaseDn = undefined;
      this._groupMemberAttribute = undefined;
      this._groupNameAttribute = undefined;
      this._groupsRequired = undefined;
      this._headerType = undefined;
      this._hideCredentials = undefined;
      this._keepalive = undefined;
      this._ldapHost = undefined;
      this._ldapPassword = undefined;
      this._ldapPort = undefined;
      this._ldaps = undefined;
      this._logSearchResults = undefined;
      this._realm = undefined;
      this._startTls = undefined;
      this._timeout = undefined;
      this._verifyLdapHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymous = value.anonymous;
      this._attribute = value.attribute;
      this._baseDn = value.baseDn;
      this._bindDn = value.bindDn;
      this._cacheTtl = value.cacheTtl;
      this._consumerBy = value.consumerBy;
      this._consumerOptional = value.consumerOptional;
      this._groupBaseDn = value.groupBaseDn;
      this._groupMemberAttribute = value.groupMemberAttribute;
      this._groupNameAttribute = value.groupNameAttribute;
      this._groupsRequired = value.groupsRequired;
      this._headerType = value.headerType;
      this._hideCredentials = value.hideCredentials;
      this._keepalive = value.keepalive;
      this._ldapHost = value.ldapHost;
      this._ldapPassword = value.ldapPassword;
      this._ldapPort = value.ldapPort;
      this._ldaps = value.ldaps;
      this._logSearchResults = value.logSearchResults;
      this._realm = value.realm;
      this._startTls = value.startTls;
      this._timeout = value.timeout;
      this._verifyLdapHost = value.verifyLdapHost;
    }
  }

  // anonymous - computed: true, optional: true, required: false
  private _anonymous?: string; 
  public get anonymous() {
    return this.getStringAttribute('anonymous');
  }
  public set anonymous(value: string) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // consumer_by - computed: true, optional: true, required: false
  private _consumerBy?: string[]; 
  public get consumerBy() {
    return this.getListAttribute('consumer_by');
  }
  public set consumerBy(value: string[]) {
    this._consumerBy = value;
  }
  public resetConsumerBy() {
    this._consumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByInput() {
    return this._consumerBy;
  }

  // consumer_optional - computed: true, optional: true, required: false
  private _consumerOptional?: boolean | cdktf.IResolvable; 
  public get consumerOptional() {
    return this.getBooleanAttribute('consumer_optional');
  }
  public set consumerOptional(value: boolean | cdktf.IResolvable) {
    this._consumerOptional = value;
  }
  public resetConsumerOptional() {
    this._consumerOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerOptionalInput() {
    return this._consumerOptional;
  }

  // group_base_dn - computed: false, optional: true, required: false
  private _groupBaseDn?: string; 
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }
  public set groupBaseDn(value: string) {
    this._groupBaseDn = value;
  }
  public resetGroupBaseDn() {
    this._groupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseDnInput() {
    return this._groupBaseDn;
  }

  // group_member_attribute - computed: true, optional: true, required: false
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  public resetGroupMemberAttribute() {
    this._groupMemberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_name_attribute - computed: false, optional: true, required: false
  private _groupNameAttribute?: string; 
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }
  public set groupNameAttribute(value: string) {
    this._groupNameAttribute = value;
  }
  public resetGroupNameAttribute() {
    this._groupNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameAttributeInput() {
    return this._groupNameAttribute;
  }

  // groups_required - computed: false, optional: true, required: false
  private _groupsRequired?: string[]; 
  public get groupsRequired() {
    return this.getListAttribute('groups_required');
  }
  public set groupsRequired(value: string[]) {
    this._groupsRequired = value;
  }
  public resetGroupsRequired() {
    this._groupsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsRequiredInput() {
    return this._groupsRequired;
  }

  // header_type - computed: true, optional: true, required: false
  private _headerType?: string; 
  public get headerType() {
    return this.getStringAttribute('header_type');
  }
  public set headerType(value: string) {
    this._headerType = value;
  }
  public resetHeaderType() {
    this._headerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTypeInput() {
    return this._headerType;
  }

  // hide_credentials - computed: true, optional: true, required: false
  private _hideCredentials?: boolean | cdktf.IResolvable; 
  public get hideCredentials() {
    return this.getBooleanAttribute('hide_credentials');
  }
  public set hideCredentials(value: boolean | cdktf.IResolvable) {
    this._hideCredentials = value;
  }
  public resetHideCredentials() {
    this._hideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideCredentialsInput() {
    return this._hideCredentials;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // ldap_host - computed: false, optional: false, required: true
  private _ldapHost?: string; 
  public get ldapHost() {
    return this.getStringAttribute('ldap_host');
  }
  public set ldapHost(value: string) {
    this._ldapHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHostInput() {
    return this._ldapHost;
  }

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: string; 
  public get ldapPassword() {
    return this.getStringAttribute('ldap_password');
  }
  public set ldapPassword(value: string) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_port - computed: true, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldaps - computed: true, optional: true, required: false
  private _ldaps?: boolean | cdktf.IResolvable; 
  public get ldaps() {
    return this.getBooleanAttribute('ldaps');
  }
  public set ldaps(value: boolean | cdktf.IResolvable) {
    this._ldaps = value;
  }
  public resetLdaps() {
    this._ldaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsInput() {
    return this._ldaps;
  }

  // log_search_results - computed: true, optional: true, required: false
  private _logSearchResults?: boolean | cdktf.IResolvable; 
  public get logSearchResults() {
    return this.getBooleanAttribute('log_search_results');
  }
  public set logSearchResults(value: boolean | cdktf.IResolvable) {
    this._logSearchResults = value;
  }
  public resetLogSearchResults() {
    this._logSearchResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchResultsInput() {
    return this._logSearchResults;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // start_tls - computed: true, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // verify_ldap_host - computed: true, optional: true, required: false
  private _verifyLdapHost?: boolean | cdktf.IResolvable; 
  public get verifyLdapHost() {
    return this.getBooleanAttribute('verify_ldap_host');
  }
  public set verifyLdapHost(value: boolean | cdktf.IResolvable) {
    this._verifyLdapHost = value;
  }
  public resetVerifyLdapHost() {
    this._verifyLdapHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyLdapHostInput() {
    return this._verifyLdapHost;
  }
}
export interface GatewayPluginLdapAuthAdvancedOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#access GatewayPluginLdapAuthAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginLdapAuthAdvancedOrderingAfterToTerraform(struct?: GatewayPluginLdapAuthAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginLdapAuthAdvancedOrderingAfterToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginLdapAuthAdvancedOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#access GatewayPluginLdapAuthAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginLdapAuthAdvancedOrderingBeforeToTerraform(struct?: GatewayPluginLdapAuthAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginLdapAuthAdvancedOrderingBeforeToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginLdapAuthAdvancedOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#after GatewayPluginLdapAuthAdvanced#after}
  */
  readonly after?: GatewayPluginLdapAuthAdvancedOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#before GatewayPluginLdapAuthAdvanced#before}
  */
  readonly before?: GatewayPluginLdapAuthAdvancedOrderingBefore;
}

export function gatewayPluginLdapAuthAdvancedOrderingToTerraform(struct?: GatewayPluginLdapAuthAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginLdapAuthAdvancedOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginLdapAuthAdvancedOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginLdapAuthAdvancedOrderingToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginLdapAuthAdvancedOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginLdapAuthAdvancedOrderingAfter",
    },
    before: {
      value: gatewayPluginLdapAuthAdvancedOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginLdapAuthAdvancedOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginLdapAuthAdvancedOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginLdapAuthAdvancedOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginLdapAuthAdvancedOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginLdapAuthAdvancedOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginLdapAuthAdvancedPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#id GatewayPluginLdapAuthAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#name GatewayPluginLdapAuthAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#path GatewayPluginLdapAuthAdvanced#path}
  */
  readonly path?: string;
}

export function gatewayPluginLdapAuthAdvancedPartialsToTerraform(struct?: GatewayPluginLdapAuthAdvancedPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginLdapAuthAdvancedPartialsToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedPartialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GatewayPluginLdapAuthAdvancedPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginLdapAuthAdvancedPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginLdapAuthAdvancedPartialsOutputReference {
    return new GatewayPluginLdapAuthAdvancedPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginLdapAuthAdvancedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#id GatewayPluginLdapAuthAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginLdapAuthAdvancedRouteToTerraform(struct?: GatewayPluginLdapAuthAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginLdapAuthAdvancedRouteToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginLdapAuthAdvancedService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#id GatewayPluginLdapAuthAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginLdapAuthAdvancedServiceToTerraform(struct?: GatewayPluginLdapAuthAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginLdapAuthAdvancedServiceToHclTerraform(struct?: GatewayPluginLdapAuthAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginLdapAuthAdvancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginLdapAuthAdvancedService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginLdapAuthAdvancedService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced konnect_gateway_plugin_ldap_auth_advanced}
*/
export class GatewayPluginLdapAuthAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ldap_auth_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginLdapAuthAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginLdapAuthAdvanced to import
  * @param importFromId The id of the existing GatewayPluginLdapAuthAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginLdapAuthAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ldap_auth_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ldap_auth_advanced konnect_gateway_plugin_ldap_auth_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginLdapAuthAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginLdapAuthAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ldap_auth_advanced',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginLdapAuthAdvancedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginLdapAuthAdvancedConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginLdapAuthAdvancedOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginLdapAuthAdvancedOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginLdapAuthAdvancedPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginLdapAuthAdvancedPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginLdapAuthAdvancedRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginLdapAuthAdvancedRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginLdapAuthAdvancedServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginLdapAuthAdvancedService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginLdapAuthAdvancedConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginLdapAuthAdvancedOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginLdapAuthAdvancedPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginLdapAuthAdvancedRouteToTerraform(this._route.internalValue),
      service: gatewayPluginLdapAuthAdvancedServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginLdapAuthAdvancedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginLdapAuthAdvancedConfigA",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginLdapAuthAdvancedOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginLdapAuthAdvancedOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginLdapAuthAdvancedPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginLdapAuthAdvancedPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginLdapAuthAdvancedRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginLdapAuthAdvancedRoute",
      },
      service: {
        value: gatewayPluginLdapAuthAdvancedServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginLdapAuthAdvancedService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
