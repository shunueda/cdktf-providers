// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultConnectionCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a connection criteria object that must match the associated client connection in order to match the aggregate connection criteria. If one or more all-included connection criteria objects are provided, then a client connection must match all of them in order to match the aggregate connection criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#all_included_connection_criteria DefaultConnectionCriteria#all_included_connection_criteria}
  */
  readonly allIncludedConnectionCriteria?: string[];
  /**
  * Specifies a search filter that must match the entry of the authenticated user for clients included in this Simple Connection Criteria. If any filters are provided, then all of those filters must match the authenticated user entry. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#all_included_user_filter DefaultConnectionCriteria#all_included_user_filter}
  */
  readonly allIncludedUserFilter?: string[];
  /**
  * Specifies the DN of a group in which authenticated users must exist for clients included in this Simple Connection Criteria. If any group DNs are provided, then the authenticated user must be a member of all of those groups. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#all_included_user_group_dn DefaultConnectionCriteria#all_included_user_group_dn}
  */
  readonly allIncludedUserGroupDn?: string[];
  /**
  * Specifies the name of a privilege that must be held by the authenticated user for clients included in this Simple Connection Criteria. If any privilege names are provided, then the authenticated user must have all of those privileges. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#all_included_user_privilege DefaultConnectionCriteria#all_included_user_privilege}
  */
  readonly allIncludedUserPrivilege?: string[];
  /**
  * Specifies a connection criteria object that may match the associated client connection in order to match the aggregate connection criteria. If one or more any-included connection criteria objects are provided, then a client connection must match at least one of them in order to match the aggregate connection criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#any_included_connection_criteria DefaultConnectionCriteria#any_included_connection_criteria}
  */
  readonly anyIncludedConnectionCriteria?: string[];
  /**
  * Specifies a search filter that may match the entry of the authenticated user for clients included in this Simple Connection Criteria. If any filters are provided, then at least one of those filters must match the authenticated user entry. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#any_included_user_filter DefaultConnectionCriteria#any_included_user_filter}
  */
  readonly anyIncludedUserFilter?: string[];
  /**
  * Specifies the DN of a group in which authenticated users may exist for clients included in this Simple Connection Criteria. If any group DNs are provided, then the authenticated user must be a member of at least one of those groups. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#any_included_user_group_dn DefaultConnectionCriteria#any_included_user_group_dn}
  */
  readonly anyIncludedUserGroupDn?: string[];
  /**
  * Specifies the name of a privilege that may be held by the authenticated user for clients included in this Simple Connection Criteria. If any privilege names are provided, then the authenticated user must have at least one of those privileges. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#any_included_user_privilege DefaultConnectionCriteria#any_included_user_privilege}
  */
  readonly anyIncludedUserPrivilege?: string[];
  /**
  * Indicates whether this Simple Connection Criteria should require or allow clients that authenticated using a secure manner. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#authentication_security_level DefaultConnectionCriteria#authentication_security_level}
  */
  readonly authenticationSecurityLevel?: string;
  /**
  * Indicates whether this Simple Connection Criteria should require or allow clients using a secure communication channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#communication_security_level DefaultConnectionCriteria#communication_security_level}
  */
  readonly communicationSecurityLevel?: string;
  /**
  * A description for this Connection Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#description DefaultConnectionCriteria#description}
  */
  readonly description?: string;
  /**
  * Specifies an address mask that may be used to specify a set of clients that should be excluded from this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#excluded_client_address DefaultConnectionCriteria#excluded_client_address}
  */
  readonly excludedClientAddress?: string[];
  /**
  * Specifies a connection handler for clients that should be excluded from this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#excluded_connection_handler DefaultConnectionCriteria#excluded_connection_handler}
  */
  readonly excludedConnectionHandler?: string[];
  /**
  * Specifies the name of a communication protocol that should be used by clients excluded from this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#excluded_protocol DefaultConnectionCriteria#excluded_protocol}
  */
  readonly excludedProtocol?: string[];
  /**
  * Specifies a base DN below which authenticated user entries may exist for clients excluded from this Simple Connection Criteria. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#excluded_user_base_dn DefaultConnectionCriteria#excluded_user_base_dn}
  */
  readonly excludedUserBaseDn?: string[];
  /**
  * Specifies the name of a SASL mechanism that should be used by clients excluded from this Simple Connection Criteria. This will only be taken into account for client connections that have authenticated to the server using a SASL mechanism and will be ignored for unauthenticated client connections and for client connections that authenticated using some other method (e.g., those performing simple or internal authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#excluded_user_sasl_mechanism DefaultConnectionCriteria#excluded_user_sasl_mechanism}
  */
  readonly excludedUserSaslMechanism?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Connection Criteria. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#extension_argument DefaultConnectionCriteria#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#extension_class DefaultConnectionCriteria#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies an address mask that may be used to specify a set of clients that should be included in this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#included_client_address DefaultConnectionCriteria#included_client_address}
  */
  readonly includedClientAddress?: string[];
  /**
  * Specifies a connection handler for clients that should be included in this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#included_connection_handler DefaultConnectionCriteria#included_connection_handler}
  */
  readonly includedConnectionHandler?: string[];
  /**
  * Specifies the name of a communication protocol that should be used by clients included in this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#included_protocol DefaultConnectionCriteria#included_protocol}
  */
  readonly includedProtocol?: string[];
  /**
  * Specifies a base DN below which authenticated user entries may exist for clients included in this Simple Connection Criteria. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#included_user_base_dn DefaultConnectionCriteria#included_user_base_dn}
  */
  readonly includedUserBaseDn?: string[];
  /**
  * Specifies the name of a SASL mechanism that should be used by clients included in this Simple Connection Criteria. This will only be taken into account for client connections that have authenticated to the server using a SASL mechanism and will be ignored for unauthenticated client connections and for client connections that authenticated using some other method (e.g., those performing simple or internal authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#included_user_sasl_mechanism DefaultConnectionCriteria#included_user_sasl_mechanism}
  */
  readonly includedUserSaslMechanism?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#name DefaultConnectionCriteria#name}
  */
  readonly name: string;
  /**
  * Specifies a connection criteria object that must not match the associated client connection in order to match the aggregate connection criteria. If one or more none-included connection criteria objects are provided, then a client connection must not match any of them in order to match the aggregate connection criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#none_included_connection_criteria DefaultConnectionCriteria#none_included_connection_criteria}
  */
  readonly noneIncludedConnectionCriteria?: string[];
  /**
  * Specifies a search filter that must not match the entry of the authenticated user for clients included in this Simple Connection Criteria. If any filters are provided, then none of those filters may match the authenticated user entry. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#none_included_user_filter DefaultConnectionCriteria#none_included_user_filter}
  */
  readonly noneIncludedUserFilter?: string[];
  /**
  * Specifies the DN of a group in which authenticated users must not exist for clients included in this Simple Connection Criteria. If any group DNs are provided, then the authenticated user must not be a member any of those groups. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#none_included_user_group_dn DefaultConnectionCriteria#none_included_user_group_dn}
  */
  readonly noneIncludedUserGroupDn?: string[];
  /**
  * Specifies the name of a privilege that must not be held by the authenticated user for clients included in this Simple Connection Criteria. If any privilege names are provided, then the authenticated user must not have any of those privileges. This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#none_included_user_privilege DefaultConnectionCriteria#none_included_user_privilege}
  */
  readonly noneIncludedUserPrivilege?: string[];
  /**
  * Specifies a connection criteria object that should not match the associated client connection in order to match the aggregate connection criteria. If one or more not-all-included connection criteria objects are provided, then a client connection must not match all of them (that is, it may match zero or more of them, but it must not match all of them) in order to match the aggregate connection criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#not_all_included_connection_criteria DefaultConnectionCriteria#not_all_included_connection_criteria}
  */
  readonly notAllIncludedConnectionCriteria?: string[];
  /**
  * Specifies a search filter that should not match the entry of the authenticated user for clients included in this Simple Connection Criteria. If any filters are provided, then at least one of those filters must not match the authenticated user entry (that is, the user entry may match zero or more of those filters, but not all of them). This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#not_all_included_user_filter DefaultConnectionCriteria#not_all_included_user_filter}
  */
  readonly notAllIncludedUserFilter?: string[];
  /**
  * Specifies the DN of a group in which authenticated users should not exist for clients included in this Simple Connection Criteria. If any group DNs are provided, then the authenticated user must not be a member of at least one of those groups (that is, the user may be a member of zero or more of those groups, but not of all of them). This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections. Refer to the authz version of this property in Simple Result Criteria if operations are being proxied (performed using proxied authorization), and you need to match the originating user of the operation rather than the proxy user (the user the proxy authenticated as).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#not_all_included_user_group_dn DefaultConnectionCriteria#not_all_included_user_group_dn}
  */
  readonly notAllIncludedUserGroupDn?: string[];
  /**
  * Specifies the name of a privilege that should not be held by the authenticated user for clients included in this Simple Connection Criteria. If any privilege names are provided, then the authenticated user must not have at least one of those privileges (that is, the user may hold zero or more of those privileges, but not all of them). This will only be taken into account for client connections that have authenticated to the server and will be ignored for unauthenticated client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#not_all_included_user_privilege DefaultConnectionCriteria#not_all_included_user_privilege}
  */
  readonly notAllIncludedUserPrivilege?: string[];
  /**
  * Specifies the authentication types for client connections that may be included in this Simple Connection Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#user_auth_type DefaultConnectionCriteria#user_auth_type}
  */
  readonly userAuthType?: string[];
}
export interface DefaultConnectionCriteriaRequiredActions {
}

export function defaultConnectionCriteriaRequiredActionsToTerraform(struct?: DefaultConnectionCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultConnectionCriteriaRequiredActionsToHclTerraform(struct?: DefaultConnectionCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultConnectionCriteriaRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultConnectionCriteriaRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultConnectionCriteriaRequiredActions | undefined) {
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

export class DefaultConnectionCriteriaRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultConnectionCriteriaRequiredActionsOutputReference {
    return new DefaultConnectionCriteriaRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria pingdirectory_default_connection_criteria}
*/
export class DefaultConnectionCriteria extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_connection_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultConnectionCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultConnectionCriteria to import
  * @param importFromId The id of the existing DefaultConnectionCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultConnectionCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_connection_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_connection_criteria pingdirectory_default_connection_criteria} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultConnectionCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultConnectionCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_connection_criteria',
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
    this._allIncludedConnectionCriteria = config.allIncludedConnectionCriteria;
    this._allIncludedUserFilter = config.allIncludedUserFilter;
    this._allIncludedUserGroupDn = config.allIncludedUserGroupDn;
    this._allIncludedUserPrivilege = config.allIncludedUserPrivilege;
    this._anyIncludedConnectionCriteria = config.anyIncludedConnectionCriteria;
    this._anyIncludedUserFilter = config.anyIncludedUserFilter;
    this._anyIncludedUserGroupDn = config.anyIncludedUserGroupDn;
    this._anyIncludedUserPrivilege = config.anyIncludedUserPrivilege;
    this._authenticationSecurityLevel = config.authenticationSecurityLevel;
    this._communicationSecurityLevel = config.communicationSecurityLevel;
    this._description = config.description;
    this._excludedClientAddress = config.excludedClientAddress;
    this._excludedConnectionHandler = config.excludedConnectionHandler;
    this._excludedProtocol = config.excludedProtocol;
    this._excludedUserBaseDn = config.excludedUserBaseDn;
    this._excludedUserSaslMechanism = config.excludedUserSaslMechanism;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._includedClientAddress = config.includedClientAddress;
    this._includedConnectionHandler = config.includedConnectionHandler;
    this._includedProtocol = config.includedProtocol;
    this._includedUserBaseDn = config.includedUserBaseDn;
    this._includedUserSaslMechanism = config.includedUserSaslMechanism;
    this._name = config.name;
    this._noneIncludedConnectionCriteria = config.noneIncludedConnectionCriteria;
    this._noneIncludedUserFilter = config.noneIncludedUserFilter;
    this._noneIncludedUserGroupDn = config.noneIncludedUserGroupDn;
    this._noneIncludedUserPrivilege = config.noneIncludedUserPrivilege;
    this._notAllIncludedConnectionCriteria = config.notAllIncludedConnectionCriteria;
    this._notAllIncludedUserFilter = config.notAllIncludedUserFilter;
    this._notAllIncludedUserGroupDn = config.notAllIncludedUserGroupDn;
    this._notAllIncludedUserPrivilege = config.notAllIncludedUserPrivilege;
    this._userAuthType = config.userAuthType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_connection_criteria - computed: true, optional: true, required: false
  private _allIncludedConnectionCriteria?: string[]; 
  public get allIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_connection_criteria'));
  }
  public set allIncludedConnectionCriteria(value: string[]) {
    this._allIncludedConnectionCriteria = value;
  }
  public resetAllIncludedConnectionCriteria() {
    this._allIncludedConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedConnectionCriteriaInput() {
    return this._allIncludedConnectionCriteria;
  }

  // all_included_user_filter - computed: true, optional: true, required: false
  private _allIncludedUserFilter?: string[]; 
  public get allIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_filter'));
  }
  public set allIncludedUserFilter(value: string[]) {
    this._allIncludedUserFilter = value;
  }
  public resetAllIncludedUserFilter() {
    this._allIncludedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedUserFilterInput() {
    return this._allIncludedUserFilter;
  }

  // all_included_user_group_dn - computed: true, optional: true, required: false
  private _allIncludedUserGroupDn?: string[]; 
  public get allIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_group_dn'));
  }
  public set allIncludedUserGroupDn(value: string[]) {
    this._allIncludedUserGroupDn = value;
  }
  public resetAllIncludedUserGroupDn() {
    this._allIncludedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedUserGroupDnInput() {
    return this._allIncludedUserGroupDn;
  }

  // all_included_user_privilege - computed: true, optional: true, required: false
  private _allIncludedUserPrivilege?: string[]; 
  public get allIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_user_privilege'));
  }
  public set allIncludedUserPrivilege(value: string[]) {
    this._allIncludedUserPrivilege = value;
  }
  public resetAllIncludedUserPrivilege() {
    this._allIncludedUserPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedUserPrivilegeInput() {
    return this._allIncludedUserPrivilege;
  }

  // any_included_connection_criteria - computed: true, optional: true, required: false
  private _anyIncludedConnectionCriteria?: string[]; 
  public get anyIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_connection_criteria'));
  }
  public set anyIncludedConnectionCriteria(value: string[]) {
    this._anyIncludedConnectionCriteria = value;
  }
  public resetAnyIncludedConnectionCriteria() {
    this._anyIncludedConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedConnectionCriteriaInput() {
    return this._anyIncludedConnectionCriteria;
  }

  // any_included_user_filter - computed: true, optional: true, required: false
  private _anyIncludedUserFilter?: string[]; 
  public get anyIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_filter'));
  }
  public set anyIncludedUserFilter(value: string[]) {
    this._anyIncludedUserFilter = value;
  }
  public resetAnyIncludedUserFilter() {
    this._anyIncludedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedUserFilterInput() {
    return this._anyIncludedUserFilter;
  }

  // any_included_user_group_dn - computed: true, optional: true, required: false
  private _anyIncludedUserGroupDn?: string[]; 
  public get anyIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_group_dn'));
  }
  public set anyIncludedUserGroupDn(value: string[]) {
    this._anyIncludedUserGroupDn = value;
  }
  public resetAnyIncludedUserGroupDn() {
    this._anyIncludedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedUserGroupDnInput() {
    return this._anyIncludedUserGroupDn;
  }

  // any_included_user_privilege - computed: true, optional: true, required: false
  private _anyIncludedUserPrivilege?: string[]; 
  public get anyIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_user_privilege'));
  }
  public set anyIncludedUserPrivilege(value: string[]) {
    this._anyIncludedUserPrivilege = value;
  }
  public resetAnyIncludedUserPrivilege() {
    this._anyIncludedUserPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedUserPrivilegeInput() {
    return this._anyIncludedUserPrivilege;
  }

  // authentication_security_level - computed: true, optional: true, required: false
  private _authenticationSecurityLevel?: string; 
  public get authenticationSecurityLevel() {
    return this.getStringAttribute('authentication_security_level');
  }
  public set authenticationSecurityLevel(value: string) {
    this._authenticationSecurityLevel = value;
  }
  public resetAuthenticationSecurityLevel() {
    this._authenticationSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSecurityLevelInput() {
    return this._authenticationSecurityLevel;
  }

  // communication_security_level - computed: true, optional: true, required: false
  private _communicationSecurityLevel?: string; 
  public get communicationSecurityLevel() {
    return this.getStringAttribute('communication_security_level');
  }
  public set communicationSecurityLevel(value: string) {
    this._communicationSecurityLevel = value;
  }
  public resetCommunicationSecurityLevel() {
    this._communicationSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationSecurityLevelInput() {
    return this._communicationSecurityLevel;
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

  // excluded_client_address - computed: true, optional: true, required: false
  private _excludedClientAddress?: string[]; 
  public get excludedClientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_client_address'));
  }
  public set excludedClientAddress(value: string[]) {
    this._excludedClientAddress = value;
  }
  public resetExcludedClientAddress() {
    this._excludedClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedClientAddressInput() {
    return this._excludedClientAddress;
  }

  // excluded_connection_handler - computed: true, optional: true, required: false
  private _excludedConnectionHandler?: string[]; 
  public get excludedConnectionHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_connection_handler'));
  }
  public set excludedConnectionHandler(value: string[]) {
    this._excludedConnectionHandler = value;
  }
  public resetExcludedConnectionHandler() {
    this._excludedConnectionHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedConnectionHandlerInput() {
    return this._excludedConnectionHandler;
  }

  // excluded_protocol - computed: true, optional: true, required: false
  private _excludedProtocol?: string[]; 
  public get excludedProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_protocol'));
  }
  public set excludedProtocol(value: string[]) {
    this._excludedProtocol = value;
  }
  public resetExcludedProtocol() {
    this._excludedProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedProtocolInput() {
    return this._excludedProtocol;
  }

  // excluded_user_base_dn - computed: true, optional: true, required: false
  private _excludedUserBaseDn?: string[]; 
  public get excludedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_base_dn'));
  }
  public set excludedUserBaseDn(value: string[]) {
    this._excludedUserBaseDn = value;
  }
  public resetExcludedUserBaseDn() {
    this._excludedUserBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUserBaseDnInput() {
    return this._excludedUserBaseDn;
  }

  // excluded_user_sasl_mechanism - computed: true, optional: true, required: false
  private _excludedUserSaslMechanism?: string[]; 
  public get excludedUserSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_sasl_mechanism'));
  }
  public set excludedUserSaslMechanism(value: string[]) {
    this._excludedUserSaslMechanism = value;
  }
  public resetExcludedUserSaslMechanism() {
    this._excludedUserSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUserSaslMechanismInput() {
    return this._excludedUserSaslMechanism;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_client_address - computed: true, optional: true, required: false
  private _includedClientAddress?: string[]; 
  public get includedClientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('included_client_address'));
  }
  public set includedClientAddress(value: string[]) {
    this._includedClientAddress = value;
  }
  public resetIncludedClientAddress() {
    this._includedClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedClientAddressInput() {
    return this._includedClientAddress;
  }

  // included_connection_handler - computed: true, optional: true, required: false
  private _includedConnectionHandler?: string[]; 
  public get includedConnectionHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('included_connection_handler'));
  }
  public set includedConnectionHandler(value: string[]) {
    this._includedConnectionHandler = value;
  }
  public resetIncludedConnectionHandler() {
    this._includedConnectionHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedConnectionHandlerInput() {
    return this._includedConnectionHandler;
  }

  // included_protocol - computed: true, optional: true, required: false
  private _includedProtocol?: string[]; 
  public get includedProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('included_protocol'));
  }
  public set includedProtocol(value: string[]) {
    this._includedProtocol = value;
  }
  public resetIncludedProtocol() {
    this._includedProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProtocolInput() {
    return this._includedProtocol;
  }

  // included_user_base_dn - computed: true, optional: true, required: false
  private _includedUserBaseDn?: string[]; 
  public get includedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_base_dn'));
  }
  public set includedUserBaseDn(value: string[]) {
    this._includedUserBaseDn = value;
  }
  public resetIncludedUserBaseDn() {
    this._includedUserBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserBaseDnInput() {
    return this._includedUserBaseDn;
  }

  // included_user_sasl_mechanism - computed: true, optional: true, required: false
  private _includedUserSaslMechanism?: string[]; 
  public get includedUserSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_sasl_mechanism'));
  }
  public set includedUserSaslMechanism(value: string[]) {
    this._includedUserSaslMechanism = value;
  }
  public resetIncludedUserSaslMechanism() {
    this._includedUserSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserSaslMechanismInput() {
    return this._includedUserSaslMechanism;
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

  // none_included_connection_criteria - computed: true, optional: true, required: false
  private _noneIncludedConnectionCriteria?: string[]; 
  public get noneIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_connection_criteria'));
  }
  public set noneIncludedConnectionCriteria(value: string[]) {
    this._noneIncludedConnectionCriteria = value;
  }
  public resetNoneIncludedConnectionCriteria() {
    this._noneIncludedConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedConnectionCriteriaInput() {
    return this._noneIncludedConnectionCriteria;
  }

  // none_included_user_filter - computed: true, optional: true, required: false
  private _noneIncludedUserFilter?: string[]; 
  public get noneIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_filter'));
  }
  public set noneIncludedUserFilter(value: string[]) {
    this._noneIncludedUserFilter = value;
  }
  public resetNoneIncludedUserFilter() {
    this._noneIncludedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedUserFilterInput() {
    return this._noneIncludedUserFilter;
  }

  // none_included_user_group_dn - computed: true, optional: true, required: false
  private _noneIncludedUserGroupDn?: string[]; 
  public get noneIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_group_dn'));
  }
  public set noneIncludedUserGroupDn(value: string[]) {
    this._noneIncludedUserGroupDn = value;
  }
  public resetNoneIncludedUserGroupDn() {
    this._noneIncludedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedUserGroupDnInput() {
    return this._noneIncludedUserGroupDn;
  }

  // none_included_user_privilege - computed: true, optional: true, required: false
  private _noneIncludedUserPrivilege?: string[]; 
  public get noneIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_user_privilege'));
  }
  public set noneIncludedUserPrivilege(value: string[]) {
    this._noneIncludedUserPrivilege = value;
  }
  public resetNoneIncludedUserPrivilege() {
    this._noneIncludedUserPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedUserPrivilegeInput() {
    return this._noneIncludedUserPrivilege;
  }

  // not_all_included_connection_criteria - computed: true, optional: true, required: false
  private _notAllIncludedConnectionCriteria?: string[]; 
  public get notAllIncludedConnectionCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_connection_criteria'));
  }
  public set notAllIncludedConnectionCriteria(value: string[]) {
    this._notAllIncludedConnectionCriteria = value;
  }
  public resetNotAllIncludedConnectionCriteria() {
    this._notAllIncludedConnectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedConnectionCriteriaInput() {
    return this._notAllIncludedConnectionCriteria;
  }

  // not_all_included_user_filter - computed: true, optional: true, required: false
  private _notAllIncludedUserFilter?: string[]; 
  public get notAllIncludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_filter'));
  }
  public set notAllIncludedUserFilter(value: string[]) {
    this._notAllIncludedUserFilter = value;
  }
  public resetNotAllIncludedUserFilter() {
    this._notAllIncludedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedUserFilterInput() {
    return this._notAllIncludedUserFilter;
  }

  // not_all_included_user_group_dn - computed: true, optional: true, required: false
  private _notAllIncludedUserGroupDn?: string[]; 
  public get notAllIncludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_group_dn'));
  }
  public set notAllIncludedUserGroupDn(value: string[]) {
    this._notAllIncludedUserGroupDn = value;
  }
  public resetNotAllIncludedUserGroupDn() {
    this._notAllIncludedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedUserGroupDnInput() {
    return this._notAllIncludedUserGroupDn;
  }

  // not_all_included_user_privilege - computed: true, optional: true, required: false
  private _notAllIncludedUserPrivilege?: string[]; 
  public get notAllIncludedUserPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_user_privilege'));
  }
  public set notAllIncludedUserPrivilege(value: string[]) {
    this._notAllIncludedUserPrivilege = value;
  }
  public resetNotAllIncludedUserPrivilege() {
    this._notAllIncludedUserPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedUserPrivilegeInput() {
    return this._notAllIncludedUserPrivilege;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultConnectionCriteriaRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_auth_type - computed: true, optional: true, required: false
  private _userAuthType?: string[]; 
  public get userAuthType() {
    return cdktf.Fn.tolist(this.getListAttribute('user_auth_type'));
  }
  public set userAuthType(value: string[]) {
    this._userAuthType = value;
  }
  public resetUserAuthType() {
    this._userAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthTypeInput() {
    return this._userAuthType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_included_connection_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedConnectionCriteria),
      all_included_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedUserFilter),
      all_included_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedUserGroupDn),
      all_included_user_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedUserPrivilege),
      any_included_connection_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedConnectionCriteria),
      any_included_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedUserFilter),
      any_included_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedUserGroupDn),
      any_included_user_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedUserPrivilege),
      authentication_security_level: cdktf.stringToTerraform(this._authenticationSecurityLevel),
      communication_security_level: cdktf.stringToTerraform(this._communicationSecurityLevel),
      description: cdktf.stringToTerraform(this._description),
      excluded_client_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedClientAddress),
      excluded_connection_handler: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedConnectionHandler),
      excluded_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedProtocol),
      excluded_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUserBaseDn),
      excluded_user_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUserSaslMechanism),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      included_client_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedClientAddress),
      included_connection_handler: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedConnectionHandler),
      included_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedProtocol),
      included_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUserBaseDn),
      included_user_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUserSaslMechanism),
      name: cdktf.stringToTerraform(this._name),
      none_included_connection_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedConnectionCriteria),
      none_included_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedUserFilter),
      none_included_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedUserGroupDn),
      none_included_user_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedUserPrivilege),
      not_all_included_connection_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedConnectionCriteria),
      not_all_included_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedUserFilter),
      not_all_included_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedUserGroupDn),
      not_all_included_user_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedUserPrivilege),
      user_auth_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAuthType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_connection_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedConnectionCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_user_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedUserPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_connection_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedConnectionCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_user_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedUserPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_security_level: {
        value: cdktf.stringToHclTerraform(this._authenticationSecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_security_level: {
        value: cdktf.stringToHclTerraform(this._communicationSecurityLevel),
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
      excluded_client_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedClientAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_connection_handler: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedConnectionHandler),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_user_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedUserBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_user_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedUserSaslMechanism),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      included_client_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedClientAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_connection_handler: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedConnectionHandler),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_user_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedUserBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_user_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedUserSaslMechanism),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      none_included_connection_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedConnectionCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_user_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedUserPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_connection_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedConnectionCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_user_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedUserPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_auth_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAuthType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
