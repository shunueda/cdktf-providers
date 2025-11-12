// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientConnectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether clients will be allowed to request search operations that cannot be efficiently processed using the set of indexes defined in the corresponding backend. Note that even if this is false, some clients may be able to request unindexed searches if the allow-unindexed-searches-with-control property has a value of true and the necessary conditions are satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allow_unindexed_searches ClientConnectionPolicy#allow_unindexed_searches}
  */
  readonly allowUnindexedSearches?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether clients will be allowed to request search operations that cannot be efficiently processed using the set of indexes defined in the corresponding backend, as long as the search request also includes the permit unindexed search request control and the requester has the unindexed-search-with-control privilege (or that privilege is disabled in the global configuration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allow_unindexed_searches_with_control ClientConnectionPolicy#allow_unindexed_searches_with_control}
  */
  readonly allowUnindexedSearchesWithControl?: boolean | cdktf.IResolvable;
  /**
  * Specifies the types of authentication that clients associated with this Client Connection Policy will be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_auth_type ClientConnectionPolicy#allowed_auth_type}
  */
  readonly allowedAuthType?: string[];
  /**
  * Specifies the OIDs of the extended operations that clients associated with this Client Connection Policy will be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_extended_operation ClientConnectionPolicy#allowed_extended_operation}
  */
  readonly allowedExtendedOperation?: string[];
  /**
  * Specifies the types of filter components that may be included in search requests from clients associated with this Client Connection Policy which have a non-baseObject scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_filter_type ClientConnectionPolicy#allowed_filter_type}
  */
  readonly allowedFilterType?: string[];
  /**
  * Specifies the types of operations that clients associated with this Client Connection Policy will be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_operation ClientConnectionPolicy#allowed_operation}
  */
  readonly allowedOperation?: string[];
  /**
  * Specifies the OIDs of the controls that clients associated with this Client Connection Policy will be allowed to include in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_request_control ClientConnectionPolicy#allowed_request_control}
  */
  readonly allowedRequestControl?: string[];
  /**
  * Specifies the names of the SASL mechanisms that clients associated with this Client Connection Policy will be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#allowed_sasl_mechanism ClientConnectionPolicy#allowed_sasl_mechanism}
  */
  readonly allowedSaslMechanism?: string[];
  /**
  * Specifies a set of connection criteria that must match the associated client connection for it to be associated with this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#connection_criteria ClientConnectionPolicy#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * Specifies the behavior that the Directory Server should exhibit if a client connection attempts to exceed a rate defined in the maximum-connection-operation-rate property. If the configured behavior is one that will reject requested operations, then that behavior will persist until the end of the corresponding interval. The server will resume allowing that client to perform operations when that interval expires, as long as no other operation rate limits have been exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#connection_operation_rate_exceeded_behavior ClientConnectionPolicy#connection_operation_rate_exceeded_behavior}
  */
  readonly connectionOperationRateExceededBehavior?: string;
  /**
  * Specifies the OIDs of the extended operations that clients associated with this Client Connection Policy will not be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#denied_extended_operation ClientConnectionPolicy#denied_extended_operation}
  */
  readonly deniedExtendedOperation?: string[];
  /**
  * Specifies the OIDs of the controls that clients associated with this Client Connection Policy will not be allowed to include in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#denied_request_control ClientConnectionPolicy#denied_request_control}
  */
  readonly deniedRequestControl?: string[];
  /**
  * Specifies the names of the SASL mechanisms that clients associated with this Client Connection Policy will not be allowed to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#denied_sasl_mechanism ClientConnectionPolicy#denied_sasl_mechanism}
  */
  readonly deniedSaslMechanism?: string[];
  /**
  * A description for this Client Connection Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#description ClientConnectionPolicy#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Client Connection Policy is enabled for use in the server. If a Client Connection Policy is disabled, then no new client connections will be associated with it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#enabled ClientConnectionPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the order in which Client Connection Policy definitions will be evaluated. A Client Connection Policy with a lower index will be evaluated before one with a higher index, and the first Client Connection Policy evaluated which may apply to a client connection will be used for that connection. Each Client Connection Policy must be assigned a unique evaluation order index value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#evaluation_order_index ClientConnectionPolicy#evaluation_order_index}
  */
  readonly evaluationOrderIndex: number;
  /**
  * Specifies the set of global sensitive attribute definitions that should not apply to this client connection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#exclude_global_sensitive_attribute ClientConnectionPolicy#exclude_global_sensitive_attribute}
  */
  readonly excludeGlobalSensitiveAttribute?: string[];
  /**
  * Specifies the set of backend base DNs for which subtree views should be excluded from this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#excluded_backend_base_dn ClientConnectionPolicy#excluded_backend_base_dn}
  */
  readonly excludedBackendBaseDn?: string[];
  /**
  * Specifies the set of backend base DNs for which subtree views should be included in this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#included_backend_base_dn ClientConnectionPolicy#included_backend_base_dn}
  */
  readonly includedBackendBaseDn?: string[];
  /**
  * Specifies the maximum number of client connections which may be associated with this Client Connection Policy at any given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_concurrent_connections ClientConnectionPolicy#maximum_concurrent_connections}
  */
  readonly maximumConcurrentConnections?: number;
  /**
  * Specifies the maximum length of time that the server should wait for an outstanding operation to complete before rejecting a new request received when the maximum number of outstanding operations are already in progress on that connection. If an existing outstanding operation on the connection completes before this time, then the operation will be processed. Otherwise, the operation will be rejected with a "busy" result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_concurrent_operation_wait_time_before_rejecting ClientConnectionPolicy#maximum_concurrent_operation_wait_time_before_rejecting}
  */
  readonly maximumConcurrentOperationWaitTimeBeforeRejecting?: string;
  /**
  * Specifies the maximum number of concurrent operations that can be in progress for any connection. This can help prevent a single client connection from monopolizing server processing resources by sending a large number of concurrent asynchronous requests. A value of zero indicates that no limit will be placed on the number of concurrent requests for a single client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_concurrent_operations_per_connection ClientConnectionPolicy#maximum_concurrent_operations_per_connection}
  */
  readonly maximumConcurrentOperationsPerConnection?: number;
  /**
  * Specifies the behavior that the Directory Server should exhibit if a client attempts to invoke more concurrent operations on a single connection than allowed by the maximum-concurrent-operations-per-connection property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_concurrent_operations_per_connection_exceeded_behavior ClientConnectionPolicy#maximum_concurrent_operations_per_connection_exceeded_behavior}
  */
  readonly maximumConcurrentOperationsPerConnectionExceededBehavior?: string;
  /**
  * Specifies the maximum length of time that a connection associated with this Client Connection Policy may be established. Any connection which is associated with this Client Connection Policy and has been established for longer than this period of time may be terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_connection_duration ClientConnectionPolicy#maximum_connection_duration}
  */
  readonly maximumConnectionDuration?: string;
  /**
  * Specifies the maximum rate at which a client associated with this Client Connection Policy may issue requests to the Directory Server. If any client attempts to request operations at a rate higher than this limit, then the server will exhibit the behavior described in the connection-operation-rate-exceeded-behavior property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_connection_operation_rate ClientConnectionPolicy#maximum_connection_operation_rate}
  */
  readonly maximumConnectionOperationRate?: string[];
  /**
  * Specifies the maximum length of time that a connection associated with this Client Connection Policy may remain established after the completion of the last operation processed on that connection. Any new operation requested on the connection will reset this timer. Any connection associated with this Client Connection Policy which has been idle for longer than this length of time may be terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_idle_connection_duration ClientConnectionPolicy#maximum_idle_connection_duration}
  */
  readonly maximumIdleConnectionDuration?: string;
  /**
  * Specifies the maximum number of entries that may be joined with any single search result entry for a search request performed by a client associated with this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_ldap_join_size_limit ClientConnectionPolicy#maximum_ldap_join_size_limit}
  */
  readonly maximumLdapJoinSizeLimit?: number;
  /**
  * Specifies the maximum number of operations that may be requested by any client connection associated with this Client Connection Policy. If an attempt is made to process more than this number of operations on a client connection, then that connection will be terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_operation_count_per_connection ClientConnectionPolicy#maximum_operation_count_per_connection}
  */
  readonly maximumOperationCountPerConnection?: number;
  /**
  * Specifies the maximum rate at which all clients associated with this Client Connection Policy, as a collective set, may issue requests to the Directory Server. If this limit is exceeded, then the server will exhibit the behavior described in the policy-operation-rate-exceeded-behavior property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_policy_operation_rate ClientConnectionPolicy#maximum_policy_operation_rate}
  */
  readonly maximumPolicyOperationRate?: string[];
  /**
  * Specifies the maximum number of entries that may be examined by a backend in the course of processing a search requested by clients associated with this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_search_lookthrough_limit ClientConnectionPolicy#maximum_search_lookthrough_limit}
  */
  readonly maximumSearchLookthroughLimit?: number;
  /**
  * Specifies the maximum number of entries that may be returned for a search performed by a client associated with this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_search_size_limit ClientConnectionPolicy#maximum_search_size_limit}
  */
  readonly maximumSearchSizeLimit?: number;
  /**
  * Specifies the maximum length of time that the server should spend processing search operations requested by clients associated with this Client Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_search_time_limit ClientConnectionPolicy#maximum_search_time_limit}
  */
  readonly maximumSearchTimeLimit?: string;
  /**
  * Specifies the maximum number of entries that the server will attempt to sort without the benefit of a VLV index. A value of zero indicates that no limit should be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#maximum_sort_size_limit_without_vlv_index ClientConnectionPolicy#maximum_sort_size_limit_without_vlv_index}
  */
  readonly maximumSortSizeLimitWithoutVlvIndex?: number;
  /**
  * Specifies the minimum number of consecutive bytes that must be present in any subInitial, subAny, or subFinal element of a substring filter component (i.e., the minimum number of consecutive bytes between wildcard characters in a substring filter). Any attempt to use a substring search with an element containing fewer than this number of bytes will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#minimum_substring_length ClientConnectionPolicy#minimum_substring_length}
  */
  readonly minimumSubstringLength?: number;
  /**
  * Specifies a name which uniquely identifies this Client Connection Policy in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#policy_id ClientConnectionPolicy#policy_id}
  */
  readonly policyId: string;
  /**
  * Specifies the behavior that the Directory Server should exhibit if a client connection attempts to exceed a rate defined in the maximum-policy-operation-rate property. If the configured behavior is one that will reject requested operations, then that behavior will persist until the end of the corresponding interval. The server will resume allowing clients associated with this Client Connection Policy to perform operations when that interval expires, as long as no other operation rate limits have been exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#policy_operation_rate_exceeded_behavior ClientConnectionPolicy#policy_operation_rate_exceeded_behavior}
  */
  readonly policyOperationRateExceededBehavior?: string;
  /**
  * Specifies a request criteria object that must not match any requests submitted by clients associated with this Client Connection Policy. If a client submits a request that satisfies this request criteria object, then that request will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#prohibited_operation_request_criteria ClientConnectionPolicy#prohibited_operation_request_criteria}
  */
  readonly prohibitedOperationRequestCriteria?: string;
  /**
  * Specifies a request criteria object that will be required to match all requests submitted by clients associated with this Client Connection Policy. If a client submits a request that does not satisfy this request criteria object, then that request will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#required_operation_request_criteria ClientConnectionPolicy#required_operation_request_criteria}
  */
  readonly requiredOperationRequestCriteria?: string;
  /**
  * Specifies the result code map that should be used for clients associated with this Client Connection Policy. If a value is defined for this property, then it will override any result code map referenced in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#result_code_map ClientConnectionPolicy#result_code_map}
  */
  readonly resultCodeMap?: string;
  /**
  * Provides the ability to indicate that some attributes should be considered sensitive and additional protection should be in place when interacting with those attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#sensitive_attribute ClientConnectionPolicy#sensitive_attribute}
  */
  readonly sensitiveAttribute?: string[];
  /**
  * Indicates whether any client connection for which this Client Connection Policy is selected should be terminated. This makes it possible to define fine-grained criteria for clients that should not be allowed to connect to this Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#terminate_connection ClientConnectionPolicy#terminate_connection}
  */
  readonly terminateConnection?: boolean | cdktf.IResolvable;
  /**
  * The type of Client Connection Policy resource. Options are ['client-connection-policy']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#type ClientConnectionPolicy#type}
  */
  readonly type?: string;
}
export interface ClientConnectionPolicyRequiredActions {
}

export function clientConnectionPolicyRequiredActionsToTerraform(struct?: ClientConnectionPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clientConnectionPolicyRequiredActionsToHclTerraform(struct?: ClientConnectionPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClientConnectionPolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClientConnectionPolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientConnectionPolicyRequiredActions | undefined) {
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

export class ClientConnectionPolicyRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ClientConnectionPolicyRequiredActionsOutputReference {
    return new ClientConnectionPolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy pingdirectory_client_connection_policy}
*/
export class ClientConnectionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_client_connection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClientConnectionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClientConnectionPolicy to import
  * @param importFromId The id of the existing ClientConnectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClientConnectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_client_connection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/client_connection_policy pingdirectory_client_connection_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientConnectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ClientConnectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_client_connection_policy',
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
    this._allowUnindexedSearches = config.allowUnindexedSearches;
    this._allowUnindexedSearchesWithControl = config.allowUnindexedSearchesWithControl;
    this._allowedAuthType = config.allowedAuthType;
    this._allowedExtendedOperation = config.allowedExtendedOperation;
    this._allowedFilterType = config.allowedFilterType;
    this._allowedOperation = config.allowedOperation;
    this._allowedRequestControl = config.allowedRequestControl;
    this._allowedSaslMechanism = config.allowedSaslMechanism;
    this._connectionCriteria = config.connectionCriteria;
    this._connectionOperationRateExceededBehavior = config.connectionOperationRateExceededBehavior;
    this._deniedExtendedOperation = config.deniedExtendedOperation;
    this._deniedRequestControl = config.deniedRequestControl;
    this._deniedSaslMechanism = config.deniedSaslMechanism;
    this._description = config.description;
    this._enabled = config.enabled;
    this._evaluationOrderIndex = config.evaluationOrderIndex;
    this._excludeGlobalSensitiveAttribute = config.excludeGlobalSensitiveAttribute;
    this._excludedBackendBaseDn = config.excludedBackendBaseDn;
    this._includedBackendBaseDn = config.includedBackendBaseDn;
    this._maximumConcurrentConnections = config.maximumConcurrentConnections;
    this._maximumConcurrentOperationWaitTimeBeforeRejecting = config.maximumConcurrentOperationWaitTimeBeforeRejecting;
    this._maximumConcurrentOperationsPerConnection = config.maximumConcurrentOperationsPerConnection;
    this._maximumConcurrentOperationsPerConnectionExceededBehavior = config.maximumConcurrentOperationsPerConnectionExceededBehavior;
    this._maximumConnectionDuration = config.maximumConnectionDuration;
    this._maximumConnectionOperationRate = config.maximumConnectionOperationRate;
    this._maximumIdleConnectionDuration = config.maximumIdleConnectionDuration;
    this._maximumLdapJoinSizeLimit = config.maximumLdapJoinSizeLimit;
    this._maximumOperationCountPerConnection = config.maximumOperationCountPerConnection;
    this._maximumPolicyOperationRate = config.maximumPolicyOperationRate;
    this._maximumSearchLookthroughLimit = config.maximumSearchLookthroughLimit;
    this._maximumSearchSizeLimit = config.maximumSearchSizeLimit;
    this._maximumSearchTimeLimit = config.maximumSearchTimeLimit;
    this._maximumSortSizeLimitWithoutVlvIndex = config.maximumSortSizeLimitWithoutVlvIndex;
    this._minimumSubstringLength = config.minimumSubstringLength;
    this._policyId = config.policyId;
    this._policyOperationRateExceededBehavior = config.policyOperationRateExceededBehavior;
    this._prohibitedOperationRequestCriteria = config.prohibitedOperationRequestCriteria;
    this._requiredOperationRequestCriteria = config.requiredOperationRequestCriteria;
    this._resultCodeMap = config.resultCodeMap;
    this._sensitiveAttribute = config.sensitiveAttribute;
    this._terminateConnection = config.terminateConnection;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unindexed_searches - computed: true, optional: true, required: false
  private _allowUnindexedSearches?: boolean | cdktf.IResolvable; 
  public get allowUnindexedSearches() {
    return this.getBooleanAttribute('allow_unindexed_searches');
  }
  public set allowUnindexedSearches(value: boolean | cdktf.IResolvable) {
    this._allowUnindexedSearches = value;
  }
  public resetAllowUnindexedSearches() {
    this._allowUnindexedSearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnindexedSearchesInput() {
    return this._allowUnindexedSearches;
  }

  // allow_unindexed_searches_with_control - computed: true, optional: true, required: false
  private _allowUnindexedSearchesWithControl?: boolean | cdktf.IResolvable; 
  public get allowUnindexedSearchesWithControl() {
    return this.getBooleanAttribute('allow_unindexed_searches_with_control');
  }
  public set allowUnindexedSearchesWithControl(value: boolean | cdktf.IResolvable) {
    this._allowUnindexedSearchesWithControl = value;
  }
  public resetAllowUnindexedSearchesWithControl() {
    this._allowUnindexedSearchesWithControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnindexedSearchesWithControlInput() {
    return this._allowUnindexedSearchesWithControl;
  }

  // allowed_auth_type - computed: true, optional: true, required: false
  private _allowedAuthType?: string[]; 
  public get allowedAuthType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_auth_type'));
  }
  public set allowedAuthType(value: string[]) {
    this._allowedAuthType = value;
  }
  public resetAllowedAuthType() {
    this._allowedAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthTypeInput() {
    return this._allowedAuthType;
  }

  // allowed_extended_operation - computed: true, optional: true, required: false
  private _allowedExtendedOperation?: string[]; 
  public get allowedExtendedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_extended_operation'));
  }
  public set allowedExtendedOperation(value: string[]) {
    this._allowedExtendedOperation = value;
  }
  public resetAllowedExtendedOperation() {
    this._allowedExtendedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtendedOperationInput() {
    return this._allowedExtendedOperation;
  }

  // allowed_filter_type - computed: true, optional: true, required: false
  private _allowedFilterType?: string[]; 
  public get allowedFilterType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_filter_type'));
  }
  public set allowedFilterType(value: string[]) {
    this._allowedFilterType = value;
  }
  public resetAllowedFilterType() {
    this._allowedFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFilterTypeInput() {
    return this._allowedFilterType;
  }

  // allowed_operation - computed: true, optional: true, required: false
  private _allowedOperation?: string[]; 
  public get allowedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operation'));
  }
  public set allowedOperation(value: string[]) {
    this._allowedOperation = value;
  }
  public resetAllowedOperation() {
    this._allowedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationInput() {
    return this._allowedOperation;
  }

  // allowed_request_control - computed: true, optional: true, required: false
  private _allowedRequestControl?: string[]; 
  public get allowedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_control'));
  }
  public set allowedRequestControl(value: string[]) {
    this._allowedRequestControl = value;
  }
  public resetAllowedRequestControl() {
    this._allowedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestControlInput() {
    return this._allowedRequestControl;
  }

  // allowed_sasl_mechanism - computed: true, optional: true, required: false
  private _allowedSaslMechanism?: string[]; 
  public get allowedSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_sasl_mechanism'));
  }
  public set allowedSaslMechanism(value: string[]) {
    this._allowedSaslMechanism = value;
  }
  public resetAllowedSaslMechanism() {
    this._allowedSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSaslMechanismInput() {
    return this._allowedSaslMechanism;
  }

  // connection_criteria - computed: false, optional: true, required: false
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

  // connection_operation_rate_exceeded_behavior - computed: true, optional: true, required: false
  private _connectionOperationRateExceededBehavior?: string; 
  public get connectionOperationRateExceededBehavior() {
    return this.getStringAttribute('connection_operation_rate_exceeded_behavior');
  }
  public set connectionOperationRateExceededBehavior(value: string) {
    this._connectionOperationRateExceededBehavior = value;
  }
  public resetConnectionOperationRateExceededBehavior() {
    this._connectionOperationRateExceededBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOperationRateExceededBehaviorInput() {
    return this._connectionOperationRateExceededBehavior;
  }

  // denied_extended_operation - computed: true, optional: true, required: false
  private _deniedExtendedOperation?: string[]; 
  public get deniedExtendedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_extended_operation'));
  }
  public set deniedExtendedOperation(value: string[]) {
    this._deniedExtendedOperation = value;
  }
  public resetDeniedExtendedOperation() {
    this._deniedExtendedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedExtendedOperationInput() {
    return this._deniedExtendedOperation;
  }

  // denied_request_control - computed: true, optional: true, required: false
  private _deniedRequestControl?: string[]; 
  public get deniedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_request_control'));
  }
  public set deniedRequestControl(value: string[]) {
    this._deniedRequestControl = value;
  }
  public resetDeniedRequestControl() {
    this._deniedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRequestControlInput() {
    return this._deniedRequestControl;
  }

  // denied_sasl_mechanism - computed: true, optional: true, required: false
  private _deniedSaslMechanism?: string[]; 
  public get deniedSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_sasl_mechanism'));
  }
  public set deniedSaslMechanism(value: string[]) {
    this._deniedSaslMechanism = value;
  }
  public resetDeniedSaslMechanism() {
    this._deniedSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedSaslMechanismInput() {
    return this._deniedSaslMechanism;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // evaluation_order_index - computed: false, optional: false, required: true
  private _evaluationOrderIndex?: number; 
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }
  public set evaluationOrderIndex(value: number) {
    this._evaluationOrderIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderIndexInput() {
    return this._evaluationOrderIndex;
  }

  // exclude_global_sensitive_attribute - computed: true, optional: true, required: false
  private _excludeGlobalSensitiveAttribute?: string[]; 
  public get excludeGlobalSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_global_sensitive_attribute'));
  }
  public set excludeGlobalSensitiveAttribute(value: string[]) {
    this._excludeGlobalSensitiveAttribute = value;
  }
  public resetExcludeGlobalSensitiveAttribute() {
    this._excludeGlobalSensitiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGlobalSensitiveAttributeInput() {
    return this._excludeGlobalSensitiveAttribute;
  }

  // excluded_backend_base_dn - computed: true, optional: true, required: false
  private _excludedBackendBaseDn?: string[]; 
  public get excludedBackendBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_backend_base_dn'));
  }
  public set excludedBackendBaseDn(value: string[]) {
    this._excludedBackendBaseDn = value;
  }
  public resetExcludedBackendBaseDn() {
    this._excludedBackendBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedBackendBaseDnInput() {
    return this._excludedBackendBaseDn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_backend_base_dn - computed: true, optional: true, required: false
  private _includedBackendBaseDn?: string[]; 
  public get includedBackendBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_backend_base_dn'));
  }
  public set includedBackendBaseDn(value: string[]) {
    this._includedBackendBaseDn = value;
  }
  public resetIncludedBackendBaseDn() {
    this._includedBackendBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedBackendBaseDnInput() {
    return this._includedBackendBaseDn;
  }

  // maximum_concurrent_connections - computed: true, optional: true, required: false
  private _maximumConcurrentConnections?: number; 
  public get maximumConcurrentConnections() {
    return this.getNumberAttribute('maximum_concurrent_connections');
  }
  public set maximumConcurrentConnections(value: number) {
    this._maximumConcurrentConnections = value;
  }
  public resetMaximumConcurrentConnections() {
    this._maximumConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentConnectionsInput() {
    return this._maximumConcurrentConnections;
  }

  // maximum_concurrent_operation_wait_time_before_rejecting - computed: true, optional: true, required: false
  private _maximumConcurrentOperationWaitTimeBeforeRejecting?: string; 
  public get maximumConcurrentOperationWaitTimeBeforeRejecting() {
    return this.getStringAttribute('maximum_concurrent_operation_wait_time_before_rejecting');
  }
  public set maximumConcurrentOperationWaitTimeBeforeRejecting(value: string) {
    this._maximumConcurrentOperationWaitTimeBeforeRejecting = value;
  }
  public resetMaximumConcurrentOperationWaitTimeBeforeRejecting() {
    this._maximumConcurrentOperationWaitTimeBeforeRejecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentOperationWaitTimeBeforeRejectingInput() {
    return this._maximumConcurrentOperationWaitTimeBeforeRejecting;
  }

  // maximum_concurrent_operations_per_connection - computed: true, optional: true, required: false
  private _maximumConcurrentOperationsPerConnection?: number; 
  public get maximumConcurrentOperationsPerConnection() {
    return this.getNumberAttribute('maximum_concurrent_operations_per_connection');
  }
  public set maximumConcurrentOperationsPerConnection(value: number) {
    this._maximumConcurrentOperationsPerConnection = value;
  }
  public resetMaximumConcurrentOperationsPerConnection() {
    this._maximumConcurrentOperationsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentOperationsPerConnectionInput() {
    return this._maximumConcurrentOperationsPerConnection;
  }

  // maximum_concurrent_operations_per_connection_exceeded_behavior - computed: true, optional: true, required: false
  private _maximumConcurrentOperationsPerConnectionExceededBehavior?: string; 
  public get maximumConcurrentOperationsPerConnectionExceededBehavior() {
    return this.getStringAttribute('maximum_concurrent_operations_per_connection_exceeded_behavior');
  }
  public set maximumConcurrentOperationsPerConnectionExceededBehavior(value: string) {
    this._maximumConcurrentOperationsPerConnectionExceededBehavior = value;
  }
  public resetMaximumConcurrentOperationsPerConnectionExceededBehavior() {
    this._maximumConcurrentOperationsPerConnectionExceededBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentOperationsPerConnectionExceededBehaviorInput() {
    return this._maximumConcurrentOperationsPerConnectionExceededBehavior;
  }

  // maximum_connection_duration - computed: true, optional: true, required: false
  private _maximumConnectionDuration?: string; 
  public get maximumConnectionDuration() {
    return this.getStringAttribute('maximum_connection_duration');
  }
  public set maximumConnectionDuration(value: string) {
    this._maximumConnectionDuration = value;
  }
  public resetMaximumConnectionDuration() {
    this._maximumConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConnectionDurationInput() {
    return this._maximumConnectionDuration;
  }

  // maximum_connection_operation_rate - computed: true, optional: true, required: false
  private _maximumConnectionOperationRate?: string[]; 
  public get maximumConnectionOperationRate() {
    return cdktf.Fn.tolist(this.getListAttribute('maximum_connection_operation_rate'));
  }
  public set maximumConnectionOperationRate(value: string[]) {
    this._maximumConnectionOperationRate = value;
  }
  public resetMaximumConnectionOperationRate() {
    this._maximumConnectionOperationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConnectionOperationRateInput() {
    return this._maximumConnectionOperationRate;
  }

  // maximum_idle_connection_duration - computed: true, optional: true, required: false
  private _maximumIdleConnectionDuration?: string; 
  public get maximumIdleConnectionDuration() {
    return this.getStringAttribute('maximum_idle_connection_duration');
  }
  public set maximumIdleConnectionDuration(value: string) {
    this._maximumIdleConnectionDuration = value;
  }
  public resetMaximumIdleConnectionDuration() {
    this._maximumIdleConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumIdleConnectionDurationInput() {
    return this._maximumIdleConnectionDuration;
  }

  // maximum_ldap_join_size_limit - computed: true, optional: true, required: false
  private _maximumLdapJoinSizeLimit?: number; 
  public get maximumLdapJoinSizeLimit() {
    return this.getNumberAttribute('maximum_ldap_join_size_limit');
  }
  public set maximumLdapJoinSizeLimit(value: number) {
    this._maximumLdapJoinSizeLimit = value;
  }
  public resetMaximumLdapJoinSizeLimit() {
    this._maximumLdapJoinSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLdapJoinSizeLimitInput() {
    return this._maximumLdapJoinSizeLimit;
  }

  // maximum_operation_count_per_connection - computed: true, optional: true, required: false
  private _maximumOperationCountPerConnection?: number; 
  public get maximumOperationCountPerConnection() {
    return this.getNumberAttribute('maximum_operation_count_per_connection');
  }
  public set maximumOperationCountPerConnection(value: number) {
    this._maximumOperationCountPerConnection = value;
  }
  public resetMaximumOperationCountPerConnection() {
    this._maximumOperationCountPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumOperationCountPerConnectionInput() {
    return this._maximumOperationCountPerConnection;
  }

  // maximum_policy_operation_rate - computed: true, optional: true, required: false
  private _maximumPolicyOperationRate?: string[]; 
  public get maximumPolicyOperationRate() {
    return cdktf.Fn.tolist(this.getListAttribute('maximum_policy_operation_rate'));
  }
  public set maximumPolicyOperationRate(value: string[]) {
    this._maximumPolicyOperationRate = value;
  }
  public resetMaximumPolicyOperationRate() {
    this._maximumPolicyOperationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPolicyOperationRateInput() {
    return this._maximumPolicyOperationRate;
  }

  // maximum_search_lookthrough_limit - computed: true, optional: true, required: false
  private _maximumSearchLookthroughLimit?: number; 
  public get maximumSearchLookthroughLimit() {
    return this.getNumberAttribute('maximum_search_lookthrough_limit');
  }
  public set maximumSearchLookthroughLimit(value: number) {
    this._maximumSearchLookthroughLimit = value;
  }
  public resetMaximumSearchLookthroughLimit() {
    this._maximumSearchLookthroughLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSearchLookthroughLimitInput() {
    return this._maximumSearchLookthroughLimit;
  }

  // maximum_search_size_limit - computed: true, optional: true, required: false
  private _maximumSearchSizeLimit?: number; 
  public get maximumSearchSizeLimit() {
    return this.getNumberAttribute('maximum_search_size_limit');
  }
  public set maximumSearchSizeLimit(value: number) {
    this._maximumSearchSizeLimit = value;
  }
  public resetMaximumSearchSizeLimit() {
    this._maximumSearchSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSearchSizeLimitInput() {
    return this._maximumSearchSizeLimit;
  }

  // maximum_search_time_limit - computed: true, optional: true, required: false
  private _maximumSearchTimeLimit?: string; 
  public get maximumSearchTimeLimit() {
    return this.getStringAttribute('maximum_search_time_limit');
  }
  public set maximumSearchTimeLimit(value: string) {
    this._maximumSearchTimeLimit = value;
  }
  public resetMaximumSearchTimeLimit() {
    this._maximumSearchTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSearchTimeLimitInput() {
    return this._maximumSearchTimeLimit;
  }

  // maximum_sort_size_limit_without_vlv_index - computed: true, optional: true, required: false
  private _maximumSortSizeLimitWithoutVlvIndex?: number; 
  public get maximumSortSizeLimitWithoutVlvIndex() {
    return this.getNumberAttribute('maximum_sort_size_limit_without_vlv_index');
  }
  public set maximumSortSizeLimitWithoutVlvIndex(value: number) {
    this._maximumSortSizeLimitWithoutVlvIndex = value;
  }
  public resetMaximumSortSizeLimitWithoutVlvIndex() {
    this._maximumSortSizeLimitWithoutVlvIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSortSizeLimitWithoutVlvIndexInput() {
    return this._maximumSortSizeLimitWithoutVlvIndex;
  }

  // minimum_substring_length - computed: true, optional: true, required: false
  private _minimumSubstringLength?: number; 
  public get minimumSubstringLength() {
    return this.getNumberAttribute('minimum_substring_length');
  }
  public set minimumSubstringLength(value: number) {
    this._minimumSubstringLength = value;
  }
  public resetMinimumSubstringLength() {
    this._minimumSubstringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSubstringLengthInput() {
    return this._minimumSubstringLength;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_operation_rate_exceeded_behavior - computed: true, optional: true, required: false
  private _policyOperationRateExceededBehavior?: string; 
  public get policyOperationRateExceededBehavior() {
    return this.getStringAttribute('policy_operation_rate_exceeded_behavior');
  }
  public set policyOperationRateExceededBehavior(value: string) {
    this._policyOperationRateExceededBehavior = value;
  }
  public resetPolicyOperationRateExceededBehavior() {
    this._policyOperationRateExceededBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOperationRateExceededBehaviorInput() {
    return this._policyOperationRateExceededBehavior;
  }

  // prohibited_operation_request_criteria - computed: false, optional: true, required: false
  private _prohibitedOperationRequestCriteria?: string; 
  public get prohibitedOperationRequestCriteria() {
    return this.getStringAttribute('prohibited_operation_request_criteria');
  }
  public set prohibitedOperationRequestCriteria(value: string) {
    this._prohibitedOperationRequestCriteria = value;
  }
  public resetProhibitedOperationRequestCriteria() {
    this._prohibitedOperationRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitedOperationRequestCriteriaInput() {
    return this._prohibitedOperationRequestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ClientConnectionPolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // required_operation_request_criteria - computed: false, optional: true, required: false
  private _requiredOperationRequestCriteria?: string; 
  public get requiredOperationRequestCriteria() {
    return this.getStringAttribute('required_operation_request_criteria');
  }
  public set requiredOperationRequestCriteria(value: string) {
    this._requiredOperationRequestCriteria = value;
  }
  public resetRequiredOperationRequestCriteria() {
    this._requiredOperationRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredOperationRequestCriteriaInput() {
    return this._requiredOperationRequestCriteria;
  }

  // result_code_map - computed: false, optional: true, required: false
  private _resultCodeMap?: string; 
  public get resultCodeMap() {
    return this.getStringAttribute('result_code_map');
  }
  public set resultCodeMap(value: string) {
    this._resultCodeMap = value;
  }
  public resetResultCodeMap() {
    this._resultCodeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCodeMapInput() {
    return this._resultCodeMap;
  }

  // sensitive_attribute - computed: true, optional: true, required: false
  private _sensitiveAttribute?: string[]; 
  public get sensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitive_attribute'));
  }
  public set sensitiveAttribute(value: string[]) {
    this._sensitiveAttribute = value;
  }
  public resetSensitiveAttribute() {
    this._sensitiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveAttributeInput() {
    return this._sensitiveAttribute;
  }

  // terminate_connection - computed: true, optional: true, required: false
  private _terminateConnection?: boolean | cdktf.IResolvable; 
  public get terminateConnection() {
    return this.getBooleanAttribute('terminate_connection');
  }
  public set terminateConnection(value: boolean | cdktf.IResolvable) {
    this._terminateConnection = value;
  }
  public resetTerminateConnection() {
    this._terminateConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateConnectionInput() {
    return this._terminateConnection;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unindexed_searches: cdktf.booleanToTerraform(this._allowUnindexedSearches),
      allow_unindexed_searches_with_control: cdktf.booleanToTerraform(this._allowUnindexedSearchesWithControl),
      allowed_auth_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthType),
      allowed_extended_operation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedExtendedOperation),
      allowed_filter_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedFilterType),
      allowed_operation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOperation),
      allowed_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRequestControl),
      allowed_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSaslMechanism),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      connection_operation_rate_exceeded_behavior: cdktf.stringToTerraform(this._connectionOperationRateExceededBehavior),
      denied_extended_operation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deniedExtendedOperation),
      denied_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deniedRequestControl),
      denied_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deniedSaslMechanism),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_order_index: cdktf.numberToTerraform(this._evaluationOrderIndex),
      exclude_global_sensitive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeGlobalSensitiveAttribute),
      excluded_backend_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedBackendBaseDn),
      included_backend_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedBackendBaseDn),
      maximum_concurrent_connections: cdktf.numberToTerraform(this._maximumConcurrentConnections),
      maximum_concurrent_operation_wait_time_before_rejecting: cdktf.stringToTerraform(this._maximumConcurrentOperationWaitTimeBeforeRejecting),
      maximum_concurrent_operations_per_connection: cdktf.numberToTerraform(this._maximumConcurrentOperationsPerConnection),
      maximum_concurrent_operations_per_connection_exceeded_behavior: cdktf.stringToTerraform(this._maximumConcurrentOperationsPerConnectionExceededBehavior),
      maximum_connection_duration: cdktf.stringToTerraform(this._maximumConnectionDuration),
      maximum_connection_operation_rate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maximumConnectionOperationRate),
      maximum_idle_connection_duration: cdktf.stringToTerraform(this._maximumIdleConnectionDuration),
      maximum_ldap_join_size_limit: cdktf.numberToTerraform(this._maximumLdapJoinSizeLimit),
      maximum_operation_count_per_connection: cdktf.numberToTerraform(this._maximumOperationCountPerConnection),
      maximum_policy_operation_rate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maximumPolicyOperationRate),
      maximum_search_lookthrough_limit: cdktf.numberToTerraform(this._maximumSearchLookthroughLimit),
      maximum_search_size_limit: cdktf.numberToTerraform(this._maximumSearchSizeLimit),
      maximum_search_time_limit: cdktf.stringToTerraform(this._maximumSearchTimeLimit),
      maximum_sort_size_limit_without_vlv_index: cdktf.numberToTerraform(this._maximumSortSizeLimitWithoutVlvIndex),
      minimum_substring_length: cdktf.numberToTerraform(this._minimumSubstringLength),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policy_operation_rate_exceeded_behavior: cdktf.stringToTerraform(this._policyOperationRateExceededBehavior),
      prohibited_operation_request_criteria: cdktf.stringToTerraform(this._prohibitedOperationRequestCriteria),
      required_operation_request_criteria: cdktf.stringToTerraform(this._requiredOperationRequestCriteria),
      result_code_map: cdktf.stringToTerraform(this._resultCodeMap),
      sensitive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveAttribute),
      terminate_connection: cdktf.booleanToTerraform(this._terminateConnection),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unindexed_searches: {
        value: cdktf.booleanToHclTerraform(this._allowUnindexedSearches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unindexed_searches_with_control: {
        value: cdktf.booleanToHclTerraform(this._allowUnindexedSearchesWithControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_auth_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_extended_operation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedExtendedOperation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_filter_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedFilterType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_operation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOperation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSaslMechanism),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_operation_rate_exceeded_behavior: {
        value: cdktf.stringToHclTerraform(this._connectionOperationRateExceededBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denied_extended_operation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deniedExtendedOperation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      denied_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deniedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      denied_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deniedSaslMechanism),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._evaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_global_sensitive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeGlobalSensitiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_backend_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedBackendBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_backend_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedBackendBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maximum_concurrent_connections: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_operation_wait_time_before_rejecting: {
        value: cdktf.stringToHclTerraform(this._maximumConcurrentOperationWaitTimeBeforeRejecting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_concurrent_operations_per_connection: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentOperationsPerConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_concurrent_operations_per_connection_exceeded_behavior: {
        value: cdktf.stringToHclTerraform(this._maximumConcurrentOperationsPerConnectionExceededBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_connection_duration: {
        value: cdktf.stringToHclTerraform(this._maximumConnectionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_connection_operation_rate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maximumConnectionOperationRate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maximum_idle_connection_duration: {
        value: cdktf.stringToHclTerraform(this._maximumIdleConnectionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_ldap_join_size_limit: {
        value: cdktf.numberToHclTerraform(this._maximumLdapJoinSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_operation_count_per_connection: {
        value: cdktf.numberToHclTerraform(this._maximumOperationCountPerConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_policy_operation_rate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maximumPolicyOperationRate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maximum_search_lookthrough_limit: {
        value: cdktf.numberToHclTerraform(this._maximumSearchLookthroughLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_search_size_limit: {
        value: cdktf.numberToHclTerraform(this._maximumSearchSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_search_time_limit: {
        value: cdktf.stringToHclTerraform(this._maximumSearchTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_sort_size_limit_without_vlv_index: {
        value: cdktf.numberToHclTerraform(this._maximumSortSizeLimitWithoutVlvIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_substring_length: {
        value: cdktf.numberToHclTerraform(this._minimumSubstringLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_operation_rate_exceeded_behavior: {
        value: cdktf.stringToHclTerraform(this._policyOperationRateExceededBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prohibited_operation_request_criteria: {
        value: cdktf.stringToHclTerraform(this._prohibitedOperationRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required_operation_request_criteria: {
        value: cdktf.stringToHclTerraform(this._requiredOperationRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_code_map: {
        value: cdktf.stringToHclTerraform(this._resultCodeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      terminate_connection: {
        value: cdktf.booleanToHclTerraform(this._terminateConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
