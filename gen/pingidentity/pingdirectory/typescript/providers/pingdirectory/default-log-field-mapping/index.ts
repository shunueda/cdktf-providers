// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLogFieldMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Log Field Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#description DefaultLogFieldMapping#description}
  */
  readonly description?: string;
  /**
  * Additional information about the operation that was processed which was not returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_additional_information DefaultLogFieldMapping#log_field_additional_information}
  */
  readonly logFieldAdditionalInformation?: string;
  /**
  * The DN of the alternate authorization identity used when processing the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_alternate_authorization_dn DefaultLogFieldMapping#log_field_alternate_authorization_dn}
  */
  readonly logFieldAlternateAuthorizationDn?: string;
  /**
  * The DN of the user that authenticated to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_authenticated_user_dn DefaultLogFieldMapping#log_field_authenticated_user_dn}
  */
  readonly logFieldAuthenticatedUserDn?: string;
  /**
  * The numeric identifier for the authentication failure reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_authentication_failure_id DefaultLogFieldMapping#log_field_authentication_failure_id}
  */
  readonly logFieldAuthenticationFailureId?: string;
  /**
  * A message explaining the reason that the authentication attempt failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_authentication_failure_reason DefaultLogFieldMapping#log_field_authentication_failure_reason}
  */
  readonly logFieldAuthenticationFailureReason?: string;
  /**
  * The type of authentication requested by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_authentication_type DefaultLogFieldMapping#log_field_authentication_type}
  */
  readonly logFieldAuthenticationType?: string;
  /**
  * The base DN for a search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_base_dn DefaultLogFieldMapping#log_field_base_dn}
  */
  readonly logFieldBaseDn?: string;
  /**
  * The bind DN for a bind operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_bind_dn DefaultLogFieldMapping#log_field_bind_dn}
  */
  readonly logFieldBindDn?: string;
  /**
  * The category for the log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_category DefaultLogFieldMapping#log_field_category}
  */
  readonly logFieldCategory?: string;
  /**
  * The connection ID assigned to the client connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_connection_id DefaultLogFieldMapping#log_field_connection_id}
  */
  readonly logFieldConnectionId?: string;
  /**
  * Indicates whether the old RDN values should be removed from an entry while processing a modify DN operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_delete_old_rdn DefaultLogFieldMapping#log_field_delete_old_rdn}
  */
  readonly logFieldDeleteOldRdn?: string;
  /**
  * The reason that the client connection was closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_disconnect_reason DefaultLogFieldMapping#log_field_disconnect_reason}
  */
  readonly logFieldDisconnectReason?: string;
  /**
  * The number of search result entries returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_entries_returned DefaultLogFieldMapping#log_field_entries_returned}
  */
  readonly logFieldEntriesReturned?: string;
  /**
  * The DN of the entry targeted by the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_entry_dn DefaultLogFieldMapping#log_field_entry_dn}
  */
  readonly logFieldEntryDn?: string;
  /**
  * The filter from a search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_filter DefaultLogFieldMapping#log_field_filter}
  */
  readonly logFieldFilter?: string;
  /**
  * A name that uniquely identifies this Directory Server instance, which may be used to identify which instance was used to log the message if multiple server instances log to the same database table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_instance_name DefaultLogFieldMapping#log_field_instance_name}
  */
  readonly logFieldInstanceName?: string;
  /**
  * The contents of the intermediate client request control provided by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_intermediate_client_request DefaultLogFieldMapping#log_field_intermediate_client_request}
  */
  readonly logFieldIntermediateClientRequest?: string;
  /**
  * The contents of the intermediate client response control returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_intermediate_client_result DefaultLogFieldMapping#log_field_intermediate_client_result}
  */
  readonly logFieldIntermediateClientResult?: string;
  /**
  * The DN of the superior entry closest to the DN specified by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_matched_dn DefaultLogFieldMapping#log_field_matched_dn}
  */
  readonly logFieldMatchedDn?: string;
  /**
  * When the `type` attribute is set to:
  *   - `access`: The diagnostic message for the operation.
  *   - `error`: The text of the log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_message DefaultLogFieldMapping#log_field_message}
  */
  readonly logFieldMessage?: string;
  /**
  * When the `type` attribute is set to:
  *   - `access`: The message ID included in the client request.
  *   - `error`: The numeric value which uniquely identifies the type of message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_message_id DefaultLogFieldMapping#log_field_message_id}
  */
  readonly logFieldMessageId?: string;
  /**
  * The message ID of the operation to be abandoned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_message_id_to_abandon DefaultLogFieldMapping#log_field_message_id_to_abandon}
  */
  readonly logFieldMessageIdToAbandon?: string;
  /**
  * The type of log message. Message types may include "CONNECT", "DISCONNECT", "FORWARD", "RESULT", "ENTRY", or "REFERENCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_message_type DefaultLogFieldMapping#log_field_message_type}
  */
  readonly logFieldMessageType?: string;
  /**
  * The new RDN to use for a modify DN operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_new_rdn DefaultLogFieldMapping#log_field_new_rdn}
  */
  readonly logFieldNewRdn?: string;
  /**
  * The new superior DN from a modify DN operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_new_superior_dn DefaultLogFieldMapping#log_field_new_superior_dn}
  */
  readonly logFieldNewSuperiorDn?: string;
  /**
  * The operation ID for the operation processed by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_operation_id DefaultLogFieldMapping#log_field_operation_id}
  */
  readonly logFieldOperationId?: string;
  /**
  * The type of operation that was processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_operation_type DefaultLogFieldMapping#log_field_operation_type}
  */
  readonly logFieldOperationType?: string;
  /**
  * The origin for the operation. Values may include "replication" (if the operation was received via replication), "internal" (if it was an internal operation processed by a server component), or "external" (if it was a request from a client).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_origin DefaultLogFieldMapping#log_field_origin}
  */
  readonly logFieldOrigin?: string;
  /**
  * The length of time (in milliseconds with microsecond accuracy) required to process the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_processing_time DefaultLogFieldMapping#log_field_processing_time}
  */
  readonly logFieldProcessingTime?: string;
  /**
  * The name for this Directory Server product, which may be used to identify which product was used to log the message if multiple products log to the same database table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_product_name DefaultLogFieldMapping#log_field_product_name}
  */
  readonly logFieldProductName?: string;
  /**
  * The name of the protocol the client is using to communicate with the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_protocol_name DefaultLogFieldMapping#log_field_protocol_name}
  */
  readonly logFieldProtocolName?: string;
  /**
  * The protocol version used by the client when communicating with the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_protocol_version DefaultLogFieldMapping#log_field_protocol_version}
  */
  readonly logFieldProtocolVersion?: string;
  /**
  * The referral URLs returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_referral_urls DefaultLogFieldMapping#log_field_referral_urls}
  */
  readonly logFieldReferralUrls?: string;
  /**
  * The replication change ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_replication_change_id DefaultLogFieldMapping#log_field_replication_change_id}
  */
  readonly logFieldReplicationChangeId?: string;
  /**
  * The OIDs of the request controls returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_request_controls DefaultLogFieldMapping#log_field_request_controls}
  */
  readonly logFieldRequestControls?: string;
  /**
  * The OID of an extended request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_request_oid DefaultLogFieldMapping#log_field_request_oid}
  */
  readonly logFieldRequestOid?: string;
  /**
  * The set of requested attributes for the search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_requested_attributes DefaultLogFieldMapping#log_field_requested_attributes}
  */
  readonly logFieldRequestedAttributes?: string;
  /**
  * The DN of the user that requested the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_requester_dn DefaultLogFieldMapping#log_field_requester_dn}
  */
  readonly logFieldRequesterDn?: string;
  /**
  * The IP address of the client that requested the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_requester_ip_address DefaultLogFieldMapping#log_field_requester_ip_address}
  */
  readonly logFieldRequesterIpAddress?: string;
  /**
  * The OIDs of the response controls returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_response_controls DefaultLogFieldMapping#log_field_response_controls}
  */
  readonly logFieldResponseControls?: string;
  /**
  * The OID of an extended response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_response_oid DefaultLogFieldMapping#log_field_response_oid}
  */
  readonly logFieldResponseOid?: string;
  /**
  * The numeric result code for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_result_code DefaultLogFieldMapping#log_field_result_code}
  */
  readonly logFieldResultCode?: string;
  /**
  * The name of the SASL mechanism used to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_sasl_mechanism_name DefaultLogFieldMapping#log_field_sasl_mechanism_name}
  */
  readonly logFieldSaslMechanismName?: string;
  /**
  * The scope for the search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_scope DefaultLogFieldMapping#log_field_scope}
  */
  readonly logFieldScope?: string;
  /**
  * The severity for the log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_severity DefaultLogFieldMapping#log_field_severity}
  */
  readonly logFieldSeverity?: string;
  /**
  * The address of the client from which the connection was established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_source_address DefaultLogFieldMapping#log_field_source_address}
  */
  readonly logFieldSourceAddress?: string;
  /**
  * When the `type` attribute is set to:
  *   - `access`: The startup ID for the Directory Server. A different value will be generated each time the server is started, and it may be used to distinguish between operations with the same connection ID and operation ID across server restarts.
  *   - `error`: The startup ID for the Directory Server. A different value will be generated each time the server is started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_startupid DefaultLogFieldMapping#log_field_startupid}
  */
  readonly logFieldStartupid?: string;
  /**
  * The network address of the Directory Server to which the client connection has been established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_target_address DefaultLogFieldMapping#log_field_target_address}
  */
  readonly logFieldTargetAddress?: string;
  /**
  * The name of the attribute targeted by a compare operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_target_attribute DefaultLogFieldMapping#log_field_target_attribute}
  */
  readonly logFieldTargetAttribute?: string;
  /**
  * The address of the server to which the request has been forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_target_host DefaultLogFieldMapping#log_field_target_host}
  */
  readonly logFieldTargetHost?: string;
  /**
  * The network port of the Directory Server to which the client connection has been established, or of the backend server to which the request has been forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_target_port DefaultLogFieldMapping#log_field_target_port}
  */
  readonly logFieldTargetPort?: string;
  /**
  * The protocol used when forwarding the request to a backend server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_target_protocol DefaultLogFieldMapping#log_field_target_protocol}
  */
  readonly logFieldTargetProtocol?: string;
  /**
  * When the `type` attribute is set to:
  *   - `access`: The time that the operation was processed.
  *   - `error`: The time that the log message was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_timestamp DefaultLogFieldMapping#log_field_timestamp}
  */
  readonly logFieldTimestamp?: string;
  /**
  * Indicates whether the requested search operation was unindexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#log_field_unindexed DefaultLogFieldMapping#log_field_unindexed}
  */
  readonly logFieldUnindexed?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#name DefaultLogFieldMapping#name}
  */
  readonly name: string;
}
export interface DefaultLogFieldMappingRequiredActions {
}

export function defaultLogFieldMappingRequiredActionsToTerraform(struct?: DefaultLogFieldMappingRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultLogFieldMappingRequiredActionsToHclTerraform(struct?: DefaultLogFieldMappingRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultLogFieldMappingRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultLogFieldMappingRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLogFieldMappingRequiredActions | undefined) {
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

export class DefaultLogFieldMappingRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultLogFieldMappingRequiredActionsOutputReference {
    return new DefaultLogFieldMappingRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping pingdirectory_default_log_field_mapping}
*/
export class DefaultLogFieldMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_log_field_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLogFieldMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLogFieldMapping to import
  * @param importFromId The id of the existing DefaultLogFieldMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLogFieldMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_log_field_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_field_mapping pingdirectory_default_log_field_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLogFieldMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLogFieldMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_log_field_mapping',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._logFieldAdditionalInformation = config.logFieldAdditionalInformation;
    this._logFieldAlternateAuthorizationDn = config.logFieldAlternateAuthorizationDn;
    this._logFieldAuthenticatedUserDn = config.logFieldAuthenticatedUserDn;
    this._logFieldAuthenticationFailureId = config.logFieldAuthenticationFailureId;
    this._logFieldAuthenticationFailureReason = config.logFieldAuthenticationFailureReason;
    this._logFieldAuthenticationType = config.logFieldAuthenticationType;
    this._logFieldBaseDn = config.logFieldBaseDn;
    this._logFieldBindDn = config.logFieldBindDn;
    this._logFieldCategory = config.logFieldCategory;
    this._logFieldConnectionId = config.logFieldConnectionId;
    this._logFieldDeleteOldRdn = config.logFieldDeleteOldRdn;
    this._logFieldDisconnectReason = config.logFieldDisconnectReason;
    this._logFieldEntriesReturned = config.logFieldEntriesReturned;
    this._logFieldEntryDn = config.logFieldEntryDn;
    this._logFieldFilter = config.logFieldFilter;
    this._logFieldInstanceName = config.logFieldInstanceName;
    this._logFieldIntermediateClientRequest = config.logFieldIntermediateClientRequest;
    this._logFieldIntermediateClientResult = config.logFieldIntermediateClientResult;
    this._logFieldMatchedDn = config.logFieldMatchedDn;
    this._logFieldMessage = config.logFieldMessage;
    this._logFieldMessageId = config.logFieldMessageId;
    this._logFieldMessageIdToAbandon = config.logFieldMessageIdToAbandon;
    this._logFieldMessageType = config.logFieldMessageType;
    this._logFieldNewRdn = config.logFieldNewRdn;
    this._logFieldNewSuperiorDn = config.logFieldNewSuperiorDn;
    this._logFieldOperationId = config.logFieldOperationId;
    this._logFieldOperationType = config.logFieldOperationType;
    this._logFieldOrigin = config.logFieldOrigin;
    this._logFieldProcessingTime = config.logFieldProcessingTime;
    this._logFieldProductName = config.logFieldProductName;
    this._logFieldProtocolName = config.logFieldProtocolName;
    this._logFieldProtocolVersion = config.logFieldProtocolVersion;
    this._logFieldReferralUrls = config.logFieldReferralUrls;
    this._logFieldReplicationChangeId = config.logFieldReplicationChangeId;
    this._logFieldRequestControls = config.logFieldRequestControls;
    this._logFieldRequestOid = config.logFieldRequestOid;
    this._logFieldRequestedAttributes = config.logFieldRequestedAttributes;
    this._logFieldRequesterDn = config.logFieldRequesterDn;
    this._logFieldRequesterIpAddress = config.logFieldRequesterIpAddress;
    this._logFieldResponseControls = config.logFieldResponseControls;
    this._logFieldResponseOid = config.logFieldResponseOid;
    this._logFieldResultCode = config.logFieldResultCode;
    this._logFieldSaslMechanismName = config.logFieldSaslMechanismName;
    this._logFieldScope = config.logFieldScope;
    this._logFieldSeverity = config.logFieldSeverity;
    this._logFieldSourceAddress = config.logFieldSourceAddress;
    this._logFieldStartupid = config.logFieldStartupid;
    this._logFieldTargetAddress = config.logFieldTargetAddress;
    this._logFieldTargetAttribute = config.logFieldTargetAttribute;
    this._logFieldTargetHost = config.logFieldTargetHost;
    this._logFieldTargetPort = config.logFieldTargetPort;
    this._logFieldTargetProtocol = config.logFieldTargetProtocol;
    this._logFieldTimestamp = config.logFieldTimestamp;
    this._logFieldUnindexed = config.logFieldUnindexed;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_field_additional_information - computed: true, optional: true, required: false
  private _logFieldAdditionalInformation?: string; 
  public get logFieldAdditionalInformation() {
    return this.getStringAttribute('log_field_additional_information');
  }
  public set logFieldAdditionalInformation(value: string) {
    this._logFieldAdditionalInformation = value;
  }
  public resetLogFieldAdditionalInformation() {
    this._logFieldAdditionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAdditionalInformationInput() {
    return this._logFieldAdditionalInformation;
  }

  // log_field_alternate_authorization_dn - computed: true, optional: true, required: false
  private _logFieldAlternateAuthorizationDn?: string; 
  public get logFieldAlternateAuthorizationDn() {
    return this.getStringAttribute('log_field_alternate_authorization_dn');
  }
  public set logFieldAlternateAuthorizationDn(value: string) {
    this._logFieldAlternateAuthorizationDn = value;
  }
  public resetLogFieldAlternateAuthorizationDn() {
    this._logFieldAlternateAuthorizationDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAlternateAuthorizationDnInput() {
    return this._logFieldAlternateAuthorizationDn;
  }

  // log_field_authenticated_user_dn - computed: true, optional: true, required: false
  private _logFieldAuthenticatedUserDn?: string; 
  public get logFieldAuthenticatedUserDn() {
    return this.getStringAttribute('log_field_authenticated_user_dn');
  }
  public set logFieldAuthenticatedUserDn(value: string) {
    this._logFieldAuthenticatedUserDn = value;
  }
  public resetLogFieldAuthenticatedUserDn() {
    this._logFieldAuthenticatedUserDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAuthenticatedUserDnInput() {
    return this._logFieldAuthenticatedUserDn;
  }

  // log_field_authentication_failure_id - computed: true, optional: true, required: false
  private _logFieldAuthenticationFailureId?: string; 
  public get logFieldAuthenticationFailureId() {
    return this.getStringAttribute('log_field_authentication_failure_id');
  }
  public set logFieldAuthenticationFailureId(value: string) {
    this._logFieldAuthenticationFailureId = value;
  }
  public resetLogFieldAuthenticationFailureId() {
    this._logFieldAuthenticationFailureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAuthenticationFailureIdInput() {
    return this._logFieldAuthenticationFailureId;
  }

  // log_field_authentication_failure_reason - computed: true, optional: true, required: false
  private _logFieldAuthenticationFailureReason?: string; 
  public get logFieldAuthenticationFailureReason() {
    return this.getStringAttribute('log_field_authentication_failure_reason');
  }
  public set logFieldAuthenticationFailureReason(value: string) {
    this._logFieldAuthenticationFailureReason = value;
  }
  public resetLogFieldAuthenticationFailureReason() {
    this._logFieldAuthenticationFailureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAuthenticationFailureReasonInput() {
    return this._logFieldAuthenticationFailureReason;
  }

  // log_field_authentication_type - computed: true, optional: true, required: false
  private _logFieldAuthenticationType?: string; 
  public get logFieldAuthenticationType() {
    return this.getStringAttribute('log_field_authentication_type');
  }
  public set logFieldAuthenticationType(value: string) {
    this._logFieldAuthenticationType = value;
  }
  public resetLogFieldAuthenticationType() {
    this._logFieldAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldAuthenticationTypeInput() {
    return this._logFieldAuthenticationType;
  }

  // log_field_base_dn - computed: true, optional: true, required: false
  private _logFieldBaseDn?: string; 
  public get logFieldBaseDn() {
    return this.getStringAttribute('log_field_base_dn');
  }
  public set logFieldBaseDn(value: string) {
    this._logFieldBaseDn = value;
  }
  public resetLogFieldBaseDn() {
    this._logFieldBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldBaseDnInput() {
    return this._logFieldBaseDn;
  }

  // log_field_bind_dn - computed: true, optional: true, required: false
  private _logFieldBindDn?: string; 
  public get logFieldBindDn() {
    return this.getStringAttribute('log_field_bind_dn');
  }
  public set logFieldBindDn(value: string) {
    this._logFieldBindDn = value;
  }
  public resetLogFieldBindDn() {
    this._logFieldBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldBindDnInput() {
    return this._logFieldBindDn;
  }

  // log_field_category - computed: true, optional: true, required: false
  private _logFieldCategory?: string; 
  public get logFieldCategory() {
    return this.getStringAttribute('log_field_category');
  }
  public set logFieldCategory(value: string) {
    this._logFieldCategory = value;
  }
  public resetLogFieldCategory() {
    this._logFieldCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldCategoryInput() {
    return this._logFieldCategory;
  }

  // log_field_connection_id - computed: true, optional: true, required: false
  private _logFieldConnectionId?: string; 
  public get logFieldConnectionId() {
    return this.getStringAttribute('log_field_connection_id');
  }
  public set logFieldConnectionId(value: string) {
    this._logFieldConnectionId = value;
  }
  public resetLogFieldConnectionId() {
    this._logFieldConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldConnectionIdInput() {
    return this._logFieldConnectionId;
  }

  // log_field_delete_old_rdn - computed: true, optional: true, required: false
  private _logFieldDeleteOldRdn?: string; 
  public get logFieldDeleteOldRdn() {
    return this.getStringAttribute('log_field_delete_old_rdn');
  }
  public set logFieldDeleteOldRdn(value: string) {
    this._logFieldDeleteOldRdn = value;
  }
  public resetLogFieldDeleteOldRdn() {
    this._logFieldDeleteOldRdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldDeleteOldRdnInput() {
    return this._logFieldDeleteOldRdn;
  }

  // log_field_disconnect_reason - computed: true, optional: true, required: false
  private _logFieldDisconnectReason?: string; 
  public get logFieldDisconnectReason() {
    return this.getStringAttribute('log_field_disconnect_reason');
  }
  public set logFieldDisconnectReason(value: string) {
    this._logFieldDisconnectReason = value;
  }
  public resetLogFieldDisconnectReason() {
    this._logFieldDisconnectReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldDisconnectReasonInput() {
    return this._logFieldDisconnectReason;
  }

  // log_field_entries_returned - computed: true, optional: true, required: false
  private _logFieldEntriesReturned?: string; 
  public get logFieldEntriesReturned() {
    return this.getStringAttribute('log_field_entries_returned');
  }
  public set logFieldEntriesReturned(value: string) {
    this._logFieldEntriesReturned = value;
  }
  public resetLogFieldEntriesReturned() {
    this._logFieldEntriesReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldEntriesReturnedInput() {
    return this._logFieldEntriesReturned;
  }

  // log_field_entry_dn - computed: true, optional: true, required: false
  private _logFieldEntryDn?: string; 
  public get logFieldEntryDn() {
    return this.getStringAttribute('log_field_entry_dn');
  }
  public set logFieldEntryDn(value: string) {
    this._logFieldEntryDn = value;
  }
  public resetLogFieldEntryDn() {
    this._logFieldEntryDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldEntryDnInput() {
    return this._logFieldEntryDn;
  }

  // log_field_filter - computed: true, optional: true, required: false
  private _logFieldFilter?: string; 
  public get logFieldFilter() {
    return this.getStringAttribute('log_field_filter');
  }
  public set logFieldFilter(value: string) {
    this._logFieldFilter = value;
  }
  public resetLogFieldFilter() {
    this._logFieldFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldFilterInput() {
    return this._logFieldFilter;
  }

  // log_field_instance_name - computed: true, optional: true, required: false
  private _logFieldInstanceName?: string; 
  public get logFieldInstanceName() {
    return this.getStringAttribute('log_field_instance_name');
  }
  public set logFieldInstanceName(value: string) {
    this._logFieldInstanceName = value;
  }
  public resetLogFieldInstanceName() {
    this._logFieldInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldInstanceNameInput() {
    return this._logFieldInstanceName;
  }

  // log_field_intermediate_client_request - computed: true, optional: true, required: false
  private _logFieldIntermediateClientRequest?: string; 
  public get logFieldIntermediateClientRequest() {
    return this.getStringAttribute('log_field_intermediate_client_request');
  }
  public set logFieldIntermediateClientRequest(value: string) {
    this._logFieldIntermediateClientRequest = value;
  }
  public resetLogFieldIntermediateClientRequest() {
    this._logFieldIntermediateClientRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldIntermediateClientRequestInput() {
    return this._logFieldIntermediateClientRequest;
  }

  // log_field_intermediate_client_result - computed: true, optional: true, required: false
  private _logFieldIntermediateClientResult?: string; 
  public get logFieldIntermediateClientResult() {
    return this.getStringAttribute('log_field_intermediate_client_result');
  }
  public set logFieldIntermediateClientResult(value: string) {
    this._logFieldIntermediateClientResult = value;
  }
  public resetLogFieldIntermediateClientResult() {
    this._logFieldIntermediateClientResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldIntermediateClientResultInput() {
    return this._logFieldIntermediateClientResult;
  }

  // log_field_matched_dn - computed: true, optional: true, required: false
  private _logFieldMatchedDn?: string; 
  public get logFieldMatchedDn() {
    return this.getStringAttribute('log_field_matched_dn');
  }
  public set logFieldMatchedDn(value: string) {
    this._logFieldMatchedDn = value;
  }
  public resetLogFieldMatchedDn() {
    this._logFieldMatchedDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMatchedDnInput() {
    return this._logFieldMatchedDn;
  }

  // log_field_message - computed: true, optional: true, required: false
  private _logFieldMessage?: string; 
  public get logFieldMessage() {
    return this.getStringAttribute('log_field_message');
  }
  public set logFieldMessage(value: string) {
    this._logFieldMessage = value;
  }
  public resetLogFieldMessage() {
    this._logFieldMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMessageInput() {
    return this._logFieldMessage;
  }

  // log_field_message_id - computed: true, optional: true, required: false
  private _logFieldMessageId?: string; 
  public get logFieldMessageId() {
    return this.getStringAttribute('log_field_message_id');
  }
  public set logFieldMessageId(value: string) {
    this._logFieldMessageId = value;
  }
  public resetLogFieldMessageId() {
    this._logFieldMessageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMessageIdInput() {
    return this._logFieldMessageId;
  }

  // log_field_message_id_to_abandon - computed: true, optional: true, required: false
  private _logFieldMessageIdToAbandon?: string; 
  public get logFieldMessageIdToAbandon() {
    return this.getStringAttribute('log_field_message_id_to_abandon');
  }
  public set logFieldMessageIdToAbandon(value: string) {
    this._logFieldMessageIdToAbandon = value;
  }
  public resetLogFieldMessageIdToAbandon() {
    this._logFieldMessageIdToAbandon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMessageIdToAbandonInput() {
    return this._logFieldMessageIdToAbandon;
  }

  // log_field_message_type - computed: true, optional: true, required: false
  private _logFieldMessageType?: string; 
  public get logFieldMessageType() {
    return this.getStringAttribute('log_field_message_type');
  }
  public set logFieldMessageType(value: string) {
    this._logFieldMessageType = value;
  }
  public resetLogFieldMessageType() {
    this._logFieldMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMessageTypeInput() {
    return this._logFieldMessageType;
  }

  // log_field_new_rdn - computed: true, optional: true, required: false
  private _logFieldNewRdn?: string; 
  public get logFieldNewRdn() {
    return this.getStringAttribute('log_field_new_rdn');
  }
  public set logFieldNewRdn(value: string) {
    this._logFieldNewRdn = value;
  }
  public resetLogFieldNewRdn() {
    this._logFieldNewRdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldNewRdnInput() {
    return this._logFieldNewRdn;
  }

  // log_field_new_superior_dn - computed: true, optional: true, required: false
  private _logFieldNewSuperiorDn?: string; 
  public get logFieldNewSuperiorDn() {
    return this.getStringAttribute('log_field_new_superior_dn');
  }
  public set logFieldNewSuperiorDn(value: string) {
    this._logFieldNewSuperiorDn = value;
  }
  public resetLogFieldNewSuperiorDn() {
    this._logFieldNewSuperiorDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldNewSuperiorDnInput() {
    return this._logFieldNewSuperiorDn;
  }

  // log_field_operation_id - computed: true, optional: true, required: false
  private _logFieldOperationId?: string; 
  public get logFieldOperationId() {
    return this.getStringAttribute('log_field_operation_id');
  }
  public set logFieldOperationId(value: string) {
    this._logFieldOperationId = value;
  }
  public resetLogFieldOperationId() {
    this._logFieldOperationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldOperationIdInput() {
    return this._logFieldOperationId;
  }

  // log_field_operation_type - computed: true, optional: true, required: false
  private _logFieldOperationType?: string; 
  public get logFieldOperationType() {
    return this.getStringAttribute('log_field_operation_type');
  }
  public set logFieldOperationType(value: string) {
    this._logFieldOperationType = value;
  }
  public resetLogFieldOperationType() {
    this._logFieldOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldOperationTypeInput() {
    return this._logFieldOperationType;
  }

  // log_field_origin - computed: true, optional: true, required: false
  private _logFieldOrigin?: string; 
  public get logFieldOrigin() {
    return this.getStringAttribute('log_field_origin');
  }
  public set logFieldOrigin(value: string) {
    this._logFieldOrigin = value;
  }
  public resetLogFieldOrigin() {
    this._logFieldOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldOriginInput() {
    return this._logFieldOrigin;
  }

  // log_field_processing_time - computed: true, optional: true, required: false
  private _logFieldProcessingTime?: string; 
  public get logFieldProcessingTime() {
    return this.getStringAttribute('log_field_processing_time');
  }
  public set logFieldProcessingTime(value: string) {
    this._logFieldProcessingTime = value;
  }
  public resetLogFieldProcessingTime() {
    this._logFieldProcessingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldProcessingTimeInput() {
    return this._logFieldProcessingTime;
  }

  // log_field_product_name - computed: true, optional: true, required: false
  private _logFieldProductName?: string; 
  public get logFieldProductName() {
    return this.getStringAttribute('log_field_product_name');
  }
  public set logFieldProductName(value: string) {
    this._logFieldProductName = value;
  }
  public resetLogFieldProductName() {
    this._logFieldProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldProductNameInput() {
    return this._logFieldProductName;
  }

  // log_field_protocol_name - computed: true, optional: true, required: false
  private _logFieldProtocolName?: string; 
  public get logFieldProtocolName() {
    return this.getStringAttribute('log_field_protocol_name');
  }
  public set logFieldProtocolName(value: string) {
    this._logFieldProtocolName = value;
  }
  public resetLogFieldProtocolName() {
    this._logFieldProtocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldProtocolNameInput() {
    return this._logFieldProtocolName;
  }

  // log_field_protocol_version - computed: true, optional: true, required: false
  private _logFieldProtocolVersion?: string; 
  public get logFieldProtocolVersion() {
    return this.getStringAttribute('log_field_protocol_version');
  }
  public set logFieldProtocolVersion(value: string) {
    this._logFieldProtocolVersion = value;
  }
  public resetLogFieldProtocolVersion() {
    this._logFieldProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldProtocolVersionInput() {
    return this._logFieldProtocolVersion;
  }

  // log_field_referral_urls - computed: true, optional: true, required: false
  private _logFieldReferralUrls?: string; 
  public get logFieldReferralUrls() {
    return this.getStringAttribute('log_field_referral_urls');
  }
  public set logFieldReferralUrls(value: string) {
    this._logFieldReferralUrls = value;
  }
  public resetLogFieldReferralUrls() {
    this._logFieldReferralUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldReferralUrlsInput() {
    return this._logFieldReferralUrls;
  }

  // log_field_replication_change_id - computed: true, optional: true, required: false
  private _logFieldReplicationChangeId?: string; 
  public get logFieldReplicationChangeId() {
    return this.getStringAttribute('log_field_replication_change_id');
  }
  public set logFieldReplicationChangeId(value: string) {
    this._logFieldReplicationChangeId = value;
  }
  public resetLogFieldReplicationChangeId() {
    this._logFieldReplicationChangeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldReplicationChangeIdInput() {
    return this._logFieldReplicationChangeId;
  }

  // log_field_request_controls - computed: true, optional: true, required: false
  private _logFieldRequestControls?: string; 
  public get logFieldRequestControls() {
    return this.getStringAttribute('log_field_request_controls');
  }
  public set logFieldRequestControls(value: string) {
    this._logFieldRequestControls = value;
  }
  public resetLogFieldRequestControls() {
    this._logFieldRequestControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldRequestControlsInput() {
    return this._logFieldRequestControls;
  }

  // log_field_request_oid - computed: true, optional: true, required: false
  private _logFieldRequestOid?: string; 
  public get logFieldRequestOid() {
    return this.getStringAttribute('log_field_request_oid');
  }
  public set logFieldRequestOid(value: string) {
    this._logFieldRequestOid = value;
  }
  public resetLogFieldRequestOid() {
    this._logFieldRequestOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldRequestOidInput() {
    return this._logFieldRequestOid;
  }

  // log_field_requested_attributes - computed: true, optional: true, required: false
  private _logFieldRequestedAttributes?: string; 
  public get logFieldRequestedAttributes() {
    return this.getStringAttribute('log_field_requested_attributes');
  }
  public set logFieldRequestedAttributes(value: string) {
    this._logFieldRequestedAttributes = value;
  }
  public resetLogFieldRequestedAttributes() {
    this._logFieldRequestedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldRequestedAttributesInput() {
    return this._logFieldRequestedAttributes;
  }

  // log_field_requester_dn - computed: true, optional: true, required: false
  private _logFieldRequesterDn?: string; 
  public get logFieldRequesterDn() {
    return this.getStringAttribute('log_field_requester_dn');
  }
  public set logFieldRequesterDn(value: string) {
    this._logFieldRequesterDn = value;
  }
  public resetLogFieldRequesterDn() {
    this._logFieldRequesterDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldRequesterDnInput() {
    return this._logFieldRequesterDn;
  }

  // log_field_requester_ip_address - computed: true, optional: true, required: false
  private _logFieldRequesterIpAddress?: string; 
  public get logFieldRequesterIpAddress() {
    return this.getStringAttribute('log_field_requester_ip_address');
  }
  public set logFieldRequesterIpAddress(value: string) {
    this._logFieldRequesterIpAddress = value;
  }
  public resetLogFieldRequesterIpAddress() {
    this._logFieldRequesterIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldRequesterIpAddressInput() {
    return this._logFieldRequesterIpAddress;
  }

  // log_field_response_controls - computed: true, optional: true, required: false
  private _logFieldResponseControls?: string; 
  public get logFieldResponseControls() {
    return this.getStringAttribute('log_field_response_controls');
  }
  public set logFieldResponseControls(value: string) {
    this._logFieldResponseControls = value;
  }
  public resetLogFieldResponseControls() {
    this._logFieldResponseControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldResponseControlsInput() {
    return this._logFieldResponseControls;
  }

  // log_field_response_oid - computed: true, optional: true, required: false
  private _logFieldResponseOid?: string; 
  public get logFieldResponseOid() {
    return this.getStringAttribute('log_field_response_oid');
  }
  public set logFieldResponseOid(value: string) {
    this._logFieldResponseOid = value;
  }
  public resetLogFieldResponseOid() {
    this._logFieldResponseOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldResponseOidInput() {
    return this._logFieldResponseOid;
  }

  // log_field_result_code - computed: true, optional: true, required: false
  private _logFieldResultCode?: string; 
  public get logFieldResultCode() {
    return this.getStringAttribute('log_field_result_code');
  }
  public set logFieldResultCode(value: string) {
    this._logFieldResultCode = value;
  }
  public resetLogFieldResultCode() {
    this._logFieldResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldResultCodeInput() {
    return this._logFieldResultCode;
  }

  // log_field_sasl_mechanism_name - computed: true, optional: true, required: false
  private _logFieldSaslMechanismName?: string; 
  public get logFieldSaslMechanismName() {
    return this.getStringAttribute('log_field_sasl_mechanism_name');
  }
  public set logFieldSaslMechanismName(value: string) {
    this._logFieldSaslMechanismName = value;
  }
  public resetLogFieldSaslMechanismName() {
    this._logFieldSaslMechanismName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldSaslMechanismNameInput() {
    return this._logFieldSaslMechanismName;
  }

  // log_field_scope - computed: true, optional: true, required: false
  private _logFieldScope?: string; 
  public get logFieldScope() {
    return this.getStringAttribute('log_field_scope');
  }
  public set logFieldScope(value: string) {
    this._logFieldScope = value;
  }
  public resetLogFieldScope() {
    this._logFieldScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldScopeInput() {
    return this._logFieldScope;
  }

  // log_field_severity - computed: true, optional: true, required: false
  private _logFieldSeverity?: string; 
  public get logFieldSeverity() {
    return this.getStringAttribute('log_field_severity');
  }
  public set logFieldSeverity(value: string) {
    this._logFieldSeverity = value;
  }
  public resetLogFieldSeverity() {
    this._logFieldSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldSeverityInput() {
    return this._logFieldSeverity;
  }

  // log_field_source_address - computed: true, optional: true, required: false
  private _logFieldSourceAddress?: string; 
  public get logFieldSourceAddress() {
    return this.getStringAttribute('log_field_source_address');
  }
  public set logFieldSourceAddress(value: string) {
    this._logFieldSourceAddress = value;
  }
  public resetLogFieldSourceAddress() {
    this._logFieldSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldSourceAddressInput() {
    return this._logFieldSourceAddress;
  }

  // log_field_startupid - computed: true, optional: true, required: false
  private _logFieldStartupid?: string; 
  public get logFieldStartupid() {
    return this.getStringAttribute('log_field_startupid');
  }
  public set logFieldStartupid(value: string) {
    this._logFieldStartupid = value;
  }
  public resetLogFieldStartupid() {
    this._logFieldStartupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldStartupidInput() {
    return this._logFieldStartupid;
  }

  // log_field_target_address - computed: true, optional: true, required: false
  private _logFieldTargetAddress?: string; 
  public get logFieldTargetAddress() {
    return this.getStringAttribute('log_field_target_address');
  }
  public set logFieldTargetAddress(value: string) {
    this._logFieldTargetAddress = value;
  }
  public resetLogFieldTargetAddress() {
    this._logFieldTargetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTargetAddressInput() {
    return this._logFieldTargetAddress;
  }

  // log_field_target_attribute - computed: true, optional: true, required: false
  private _logFieldTargetAttribute?: string; 
  public get logFieldTargetAttribute() {
    return this.getStringAttribute('log_field_target_attribute');
  }
  public set logFieldTargetAttribute(value: string) {
    this._logFieldTargetAttribute = value;
  }
  public resetLogFieldTargetAttribute() {
    this._logFieldTargetAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTargetAttributeInput() {
    return this._logFieldTargetAttribute;
  }

  // log_field_target_host - computed: true, optional: true, required: false
  private _logFieldTargetHost?: string; 
  public get logFieldTargetHost() {
    return this.getStringAttribute('log_field_target_host');
  }
  public set logFieldTargetHost(value: string) {
    this._logFieldTargetHost = value;
  }
  public resetLogFieldTargetHost() {
    this._logFieldTargetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTargetHostInput() {
    return this._logFieldTargetHost;
  }

  // log_field_target_port - computed: true, optional: true, required: false
  private _logFieldTargetPort?: string; 
  public get logFieldTargetPort() {
    return this.getStringAttribute('log_field_target_port');
  }
  public set logFieldTargetPort(value: string) {
    this._logFieldTargetPort = value;
  }
  public resetLogFieldTargetPort() {
    this._logFieldTargetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTargetPortInput() {
    return this._logFieldTargetPort;
  }

  // log_field_target_protocol - computed: true, optional: true, required: false
  private _logFieldTargetProtocol?: string; 
  public get logFieldTargetProtocol() {
    return this.getStringAttribute('log_field_target_protocol');
  }
  public set logFieldTargetProtocol(value: string) {
    this._logFieldTargetProtocol = value;
  }
  public resetLogFieldTargetProtocol() {
    this._logFieldTargetProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTargetProtocolInput() {
    return this._logFieldTargetProtocol;
  }

  // log_field_timestamp - computed: true, optional: true, required: false
  private _logFieldTimestamp?: string; 
  public get logFieldTimestamp() {
    return this.getStringAttribute('log_field_timestamp');
  }
  public set logFieldTimestamp(value: string) {
    this._logFieldTimestamp = value;
  }
  public resetLogFieldTimestamp() {
    this._logFieldTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldTimestampInput() {
    return this._logFieldTimestamp;
  }

  // log_field_unindexed - computed: true, optional: true, required: false
  private _logFieldUnindexed?: string; 
  public get logFieldUnindexed() {
    return this.getStringAttribute('log_field_unindexed');
  }
  public set logFieldUnindexed(value: string) {
    this._logFieldUnindexed = value;
  }
  public resetLogFieldUnindexed() {
    this._logFieldUnindexed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldUnindexedInput() {
    return this._logFieldUnindexed;
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

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultLogFieldMappingRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      log_field_additional_information: cdktf.stringToTerraform(this._logFieldAdditionalInformation),
      log_field_alternate_authorization_dn: cdktf.stringToTerraform(this._logFieldAlternateAuthorizationDn),
      log_field_authenticated_user_dn: cdktf.stringToTerraform(this._logFieldAuthenticatedUserDn),
      log_field_authentication_failure_id: cdktf.stringToTerraform(this._logFieldAuthenticationFailureId),
      log_field_authentication_failure_reason: cdktf.stringToTerraform(this._logFieldAuthenticationFailureReason),
      log_field_authentication_type: cdktf.stringToTerraform(this._logFieldAuthenticationType),
      log_field_base_dn: cdktf.stringToTerraform(this._logFieldBaseDn),
      log_field_bind_dn: cdktf.stringToTerraform(this._logFieldBindDn),
      log_field_category: cdktf.stringToTerraform(this._logFieldCategory),
      log_field_connection_id: cdktf.stringToTerraform(this._logFieldConnectionId),
      log_field_delete_old_rdn: cdktf.stringToTerraform(this._logFieldDeleteOldRdn),
      log_field_disconnect_reason: cdktf.stringToTerraform(this._logFieldDisconnectReason),
      log_field_entries_returned: cdktf.stringToTerraform(this._logFieldEntriesReturned),
      log_field_entry_dn: cdktf.stringToTerraform(this._logFieldEntryDn),
      log_field_filter: cdktf.stringToTerraform(this._logFieldFilter),
      log_field_instance_name: cdktf.stringToTerraform(this._logFieldInstanceName),
      log_field_intermediate_client_request: cdktf.stringToTerraform(this._logFieldIntermediateClientRequest),
      log_field_intermediate_client_result: cdktf.stringToTerraform(this._logFieldIntermediateClientResult),
      log_field_matched_dn: cdktf.stringToTerraform(this._logFieldMatchedDn),
      log_field_message: cdktf.stringToTerraform(this._logFieldMessage),
      log_field_message_id: cdktf.stringToTerraform(this._logFieldMessageId),
      log_field_message_id_to_abandon: cdktf.stringToTerraform(this._logFieldMessageIdToAbandon),
      log_field_message_type: cdktf.stringToTerraform(this._logFieldMessageType),
      log_field_new_rdn: cdktf.stringToTerraform(this._logFieldNewRdn),
      log_field_new_superior_dn: cdktf.stringToTerraform(this._logFieldNewSuperiorDn),
      log_field_operation_id: cdktf.stringToTerraform(this._logFieldOperationId),
      log_field_operation_type: cdktf.stringToTerraform(this._logFieldOperationType),
      log_field_origin: cdktf.stringToTerraform(this._logFieldOrigin),
      log_field_processing_time: cdktf.stringToTerraform(this._logFieldProcessingTime),
      log_field_product_name: cdktf.stringToTerraform(this._logFieldProductName),
      log_field_protocol_name: cdktf.stringToTerraform(this._logFieldProtocolName),
      log_field_protocol_version: cdktf.stringToTerraform(this._logFieldProtocolVersion),
      log_field_referral_urls: cdktf.stringToTerraform(this._logFieldReferralUrls),
      log_field_replication_change_id: cdktf.stringToTerraform(this._logFieldReplicationChangeId),
      log_field_request_controls: cdktf.stringToTerraform(this._logFieldRequestControls),
      log_field_request_oid: cdktf.stringToTerraform(this._logFieldRequestOid),
      log_field_requested_attributes: cdktf.stringToTerraform(this._logFieldRequestedAttributes),
      log_field_requester_dn: cdktf.stringToTerraform(this._logFieldRequesterDn),
      log_field_requester_ip_address: cdktf.stringToTerraform(this._logFieldRequesterIpAddress),
      log_field_response_controls: cdktf.stringToTerraform(this._logFieldResponseControls),
      log_field_response_oid: cdktf.stringToTerraform(this._logFieldResponseOid),
      log_field_result_code: cdktf.stringToTerraform(this._logFieldResultCode),
      log_field_sasl_mechanism_name: cdktf.stringToTerraform(this._logFieldSaslMechanismName),
      log_field_scope: cdktf.stringToTerraform(this._logFieldScope),
      log_field_severity: cdktf.stringToTerraform(this._logFieldSeverity),
      log_field_source_address: cdktf.stringToTerraform(this._logFieldSourceAddress),
      log_field_startupid: cdktf.stringToTerraform(this._logFieldStartupid),
      log_field_target_address: cdktf.stringToTerraform(this._logFieldTargetAddress),
      log_field_target_attribute: cdktf.stringToTerraform(this._logFieldTargetAttribute),
      log_field_target_host: cdktf.stringToTerraform(this._logFieldTargetHost),
      log_field_target_port: cdktf.stringToTerraform(this._logFieldTargetPort),
      log_field_target_protocol: cdktf.stringToTerraform(this._logFieldTargetProtocol),
      log_field_timestamp: cdktf.stringToTerraform(this._logFieldTimestamp),
      log_field_unindexed: cdktf.stringToTerraform(this._logFieldUnindexed),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_additional_information: {
        value: cdktf.stringToHclTerraform(this._logFieldAdditionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_alternate_authorization_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldAlternateAuthorizationDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_authenticated_user_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldAuthenticatedUserDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_authentication_failure_id: {
        value: cdktf.stringToHclTerraform(this._logFieldAuthenticationFailureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_authentication_failure_reason: {
        value: cdktf.stringToHclTerraform(this._logFieldAuthenticationFailureReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_authentication_type: {
        value: cdktf.stringToHclTerraform(this._logFieldAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_base_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_bind_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldBindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_category: {
        value: cdktf.stringToHclTerraform(this._logFieldCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_connection_id: {
        value: cdktf.stringToHclTerraform(this._logFieldConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_delete_old_rdn: {
        value: cdktf.stringToHclTerraform(this._logFieldDeleteOldRdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_disconnect_reason: {
        value: cdktf.stringToHclTerraform(this._logFieldDisconnectReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_entries_returned: {
        value: cdktf.stringToHclTerraform(this._logFieldEntriesReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_entry_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldEntryDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_filter: {
        value: cdktf.stringToHclTerraform(this._logFieldFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_instance_name: {
        value: cdktf.stringToHclTerraform(this._logFieldInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_intermediate_client_request: {
        value: cdktf.stringToHclTerraform(this._logFieldIntermediateClientRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_intermediate_client_result: {
        value: cdktf.stringToHclTerraform(this._logFieldIntermediateClientResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_matched_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldMatchedDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_message: {
        value: cdktf.stringToHclTerraform(this._logFieldMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_message_id: {
        value: cdktf.stringToHclTerraform(this._logFieldMessageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_message_id_to_abandon: {
        value: cdktf.stringToHclTerraform(this._logFieldMessageIdToAbandon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_message_type: {
        value: cdktf.stringToHclTerraform(this._logFieldMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_new_rdn: {
        value: cdktf.stringToHclTerraform(this._logFieldNewRdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_new_superior_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldNewSuperiorDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_operation_id: {
        value: cdktf.stringToHclTerraform(this._logFieldOperationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_operation_type: {
        value: cdktf.stringToHclTerraform(this._logFieldOperationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_origin: {
        value: cdktf.stringToHclTerraform(this._logFieldOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_processing_time: {
        value: cdktf.stringToHclTerraform(this._logFieldProcessingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_product_name: {
        value: cdktf.stringToHclTerraform(this._logFieldProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_protocol_name: {
        value: cdktf.stringToHclTerraform(this._logFieldProtocolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_protocol_version: {
        value: cdktf.stringToHclTerraform(this._logFieldProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_referral_urls: {
        value: cdktf.stringToHclTerraform(this._logFieldReferralUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_replication_change_id: {
        value: cdktf.stringToHclTerraform(this._logFieldReplicationChangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_request_controls: {
        value: cdktf.stringToHclTerraform(this._logFieldRequestControls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_request_oid: {
        value: cdktf.stringToHclTerraform(this._logFieldRequestOid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_requested_attributes: {
        value: cdktf.stringToHclTerraform(this._logFieldRequestedAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_requester_dn: {
        value: cdktf.stringToHclTerraform(this._logFieldRequesterDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_requester_ip_address: {
        value: cdktf.stringToHclTerraform(this._logFieldRequesterIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_response_controls: {
        value: cdktf.stringToHclTerraform(this._logFieldResponseControls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_response_oid: {
        value: cdktf.stringToHclTerraform(this._logFieldResponseOid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_result_code: {
        value: cdktf.stringToHclTerraform(this._logFieldResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_sasl_mechanism_name: {
        value: cdktf.stringToHclTerraform(this._logFieldSaslMechanismName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_scope: {
        value: cdktf.stringToHclTerraform(this._logFieldScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_severity: {
        value: cdktf.stringToHclTerraform(this._logFieldSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_source_address: {
        value: cdktf.stringToHclTerraform(this._logFieldSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_startupid: {
        value: cdktf.stringToHclTerraform(this._logFieldStartupid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_target_address: {
        value: cdktf.stringToHclTerraform(this._logFieldTargetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_target_attribute: {
        value: cdktf.stringToHclTerraform(this._logFieldTargetAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_target_host: {
        value: cdktf.stringToHclTerraform(this._logFieldTargetHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_target_port: {
        value: cdktf.stringToHclTerraform(this._logFieldTargetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_target_protocol: {
        value: cdktf.stringToHclTerraform(this._logFieldTargetProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_timestamp: {
        value: cdktf.stringToHclTerraform(this._logFieldTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_unindexed: {
        value: cdktf.stringToHclTerraform(this._logFieldUnindexed),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
