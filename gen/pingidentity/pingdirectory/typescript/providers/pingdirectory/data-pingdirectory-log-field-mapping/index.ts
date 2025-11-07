// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLogFieldMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_mapping#name DataPingdirectoryLogFieldMapping#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_mapping pingdirectory_log_field_mapping}
*/
export class DataPingdirectoryLogFieldMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_log_field_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLogFieldMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLogFieldMapping to import
  * @param importFromId The id of the existing DataPingdirectoryLogFieldMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLogFieldMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_log_field_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_mapping pingdirectory_log_field_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLogFieldMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLogFieldMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_log_field_mapping',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_field_additional_information - computed: true, optional: false, required: false
  public get logFieldAdditionalInformation() {
    return this.getStringAttribute('log_field_additional_information');
  }

  // log_field_alternate_authorization_dn - computed: true, optional: false, required: false
  public get logFieldAlternateAuthorizationDn() {
    return this.getStringAttribute('log_field_alternate_authorization_dn');
  }

  // log_field_authenticated_user_dn - computed: true, optional: false, required: false
  public get logFieldAuthenticatedUserDn() {
    return this.getStringAttribute('log_field_authenticated_user_dn');
  }

  // log_field_authentication_failure_id - computed: true, optional: false, required: false
  public get logFieldAuthenticationFailureId() {
    return this.getStringAttribute('log_field_authentication_failure_id');
  }

  // log_field_authentication_failure_reason - computed: true, optional: false, required: false
  public get logFieldAuthenticationFailureReason() {
    return this.getStringAttribute('log_field_authentication_failure_reason');
  }

  // log_field_authentication_type - computed: true, optional: false, required: false
  public get logFieldAuthenticationType() {
    return this.getStringAttribute('log_field_authentication_type');
  }

  // log_field_base_dn - computed: true, optional: false, required: false
  public get logFieldBaseDn() {
    return this.getStringAttribute('log_field_base_dn');
  }

  // log_field_bind_dn - computed: true, optional: false, required: false
  public get logFieldBindDn() {
    return this.getStringAttribute('log_field_bind_dn');
  }

  // log_field_category - computed: true, optional: false, required: false
  public get logFieldCategory() {
    return this.getStringAttribute('log_field_category');
  }

  // log_field_connection_id - computed: true, optional: false, required: false
  public get logFieldConnectionId() {
    return this.getStringAttribute('log_field_connection_id');
  }

  // log_field_delete_old_rdn - computed: true, optional: false, required: false
  public get logFieldDeleteOldRdn() {
    return this.getStringAttribute('log_field_delete_old_rdn');
  }

  // log_field_disconnect_reason - computed: true, optional: false, required: false
  public get logFieldDisconnectReason() {
    return this.getStringAttribute('log_field_disconnect_reason');
  }

  // log_field_entries_returned - computed: true, optional: false, required: false
  public get logFieldEntriesReturned() {
    return this.getStringAttribute('log_field_entries_returned');
  }

  // log_field_entry_dn - computed: true, optional: false, required: false
  public get logFieldEntryDn() {
    return this.getStringAttribute('log_field_entry_dn');
  }

  // log_field_filter - computed: true, optional: false, required: false
  public get logFieldFilter() {
    return this.getStringAttribute('log_field_filter');
  }

  // log_field_instance_name - computed: true, optional: false, required: false
  public get logFieldInstanceName() {
    return this.getStringAttribute('log_field_instance_name');
  }

  // log_field_intermediate_client_request - computed: true, optional: false, required: false
  public get logFieldIntermediateClientRequest() {
    return this.getStringAttribute('log_field_intermediate_client_request');
  }

  // log_field_intermediate_client_result - computed: true, optional: false, required: false
  public get logFieldIntermediateClientResult() {
    return this.getStringAttribute('log_field_intermediate_client_result');
  }

  // log_field_matched_dn - computed: true, optional: false, required: false
  public get logFieldMatchedDn() {
    return this.getStringAttribute('log_field_matched_dn');
  }

  // log_field_message - computed: true, optional: false, required: false
  public get logFieldMessage() {
    return this.getStringAttribute('log_field_message');
  }

  // log_field_message_id - computed: true, optional: false, required: false
  public get logFieldMessageId() {
    return this.getStringAttribute('log_field_message_id');
  }

  // log_field_message_id_to_abandon - computed: true, optional: false, required: false
  public get logFieldMessageIdToAbandon() {
    return this.getStringAttribute('log_field_message_id_to_abandon');
  }

  // log_field_message_type - computed: true, optional: false, required: false
  public get logFieldMessageType() {
    return this.getStringAttribute('log_field_message_type');
  }

  // log_field_new_rdn - computed: true, optional: false, required: false
  public get logFieldNewRdn() {
    return this.getStringAttribute('log_field_new_rdn');
  }

  // log_field_new_superior_dn - computed: true, optional: false, required: false
  public get logFieldNewSuperiorDn() {
    return this.getStringAttribute('log_field_new_superior_dn');
  }

  // log_field_operation_id - computed: true, optional: false, required: false
  public get logFieldOperationId() {
    return this.getStringAttribute('log_field_operation_id');
  }

  // log_field_operation_type - computed: true, optional: false, required: false
  public get logFieldOperationType() {
    return this.getStringAttribute('log_field_operation_type');
  }

  // log_field_origin - computed: true, optional: false, required: false
  public get logFieldOrigin() {
    return this.getStringAttribute('log_field_origin');
  }

  // log_field_processing_time - computed: true, optional: false, required: false
  public get logFieldProcessingTime() {
    return this.getStringAttribute('log_field_processing_time');
  }

  // log_field_product_name - computed: true, optional: false, required: false
  public get logFieldProductName() {
    return this.getStringAttribute('log_field_product_name');
  }

  // log_field_protocol_name - computed: true, optional: false, required: false
  public get logFieldProtocolName() {
    return this.getStringAttribute('log_field_protocol_name');
  }

  // log_field_protocol_version - computed: true, optional: false, required: false
  public get logFieldProtocolVersion() {
    return this.getStringAttribute('log_field_protocol_version');
  }

  // log_field_referral_urls - computed: true, optional: false, required: false
  public get logFieldReferralUrls() {
    return this.getStringAttribute('log_field_referral_urls');
  }

  // log_field_replication_change_id - computed: true, optional: false, required: false
  public get logFieldReplicationChangeId() {
    return this.getStringAttribute('log_field_replication_change_id');
  }

  // log_field_request_controls - computed: true, optional: false, required: false
  public get logFieldRequestControls() {
    return this.getStringAttribute('log_field_request_controls');
  }

  // log_field_request_oid - computed: true, optional: false, required: false
  public get logFieldRequestOid() {
    return this.getStringAttribute('log_field_request_oid');
  }

  // log_field_requested_attributes - computed: true, optional: false, required: false
  public get logFieldRequestedAttributes() {
    return this.getStringAttribute('log_field_requested_attributes');
  }

  // log_field_requester_dn - computed: true, optional: false, required: false
  public get logFieldRequesterDn() {
    return this.getStringAttribute('log_field_requester_dn');
  }

  // log_field_requester_ip_address - computed: true, optional: false, required: false
  public get logFieldRequesterIpAddress() {
    return this.getStringAttribute('log_field_requester_ip_address');
  }

  // log_field_response_controls - computed: true, optional: false, required: false
  public get logFieldResponseControls() {
    return this.getStringAttribute('log_field_response_controls');
  }

  // log_field_response_oid - computed: true, optional: false, required: false
  public get logFieldResponseOid() {
    return this.getStringAttribute('log_field_response_oid');
  }

  // log_field_result_code - computed: true, optional: false, required: false
  public get logFieldResultCode() {
    return this.getStringAttribute('log_field_result_code');
  }

  // log_field_sasl_mechanism_name - computed: true, optional: false, required: false
  public get logFieldSaslMechanismName() {
    return this.getStringAttribute('log_field_sasl_mechanism_name');
  }

  // log_field_scope - computed: true, optional: false, required: false
  public get logFieldScope() {
    return this.getStringAttribute('log_field_scope');
  }

  // log_field_severity - computed: true, optional: false, required: false
  public get logFieldSeverity() {
    return this.getStringAttribute('log_field_severity');
  }

  // log_field_source_address - computed: true, optional: false, required: false
  public get logFieldSourceAddress() {
    return this.getStringAttribute('log_field_source_address');
  }

  // log_field_startupid - computed: true, optional: false, required: false
  public get logFieldStartupid() {
    return this.getStringAttribute('log_field_startupid');
  }

  // log_field_target_address - computed: true, optional: false, required: false
  public get logFieldTargetAddress() {
    return this.getStringAttribute('log_field_target_address');
  }

  // log_field_target_attribute - computed: true, optional: false, required: false
  public get logFieldTargetAttribute() {
    return this.getStringAttribute('log_field_target_attribute');
  }

  // log_field_target_host - computed: true, optional: false, required: false
  public get logFieldTargetHost() {
    return this.getStringAttribute('log_field_target_host');
  }

  // log_field_target_port - computed: true, optional: false, required: false
  public get logFieldTargetPort() {
    return this.getStringAttribute('log_field_target_port');
  }

  // log_field_target_protocol - computed: true, optional: false, required: false
  public get logFieldTargetProtocol() {
    return this.getStringAttribute('log_field_target_protocol');
  }

  // log_field_timestamp - computed: true, optional: false, required: false
  public get logFieldTimestamp() {
    return this.getStringAttribute('log_field_timestamp');
  }

  // log_field_unindexed - computed: true, optional: false, required: false
  public get logFieldUnindexed() {
    return this.getStringAttribute('log_field_unindexed');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
