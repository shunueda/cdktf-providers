// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/client_connection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryClientConnectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a name which uniquely identifies this Client Connection Policy in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/client_connection_policy#policy_id DataPingdirectoryClientConnectionPolicy#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/client_connection_policy pingdirectory_client_connection_policy}
*/
export class DataPingdirectoryClientConnectionPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_client_connection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryClientConnectionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryClientConnectionPolicy to import
  * @param importFromId The id of the existing DataPingdirectoryClientConnectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/client_connection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryClientConnectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_client_connection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/client_connection_policy pingdirectory_client_connection_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryClientConnectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryClientConnectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_client_connection_policy',
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
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unindexed_searches - computed: true, optional: false, required: false
  public get allowUnindexedSearches() {
    return this.getBooleanAttribute('allow_unindexed_searches');
  }

  // allow_unindexed_searches_with_control - computed: true, optional: false, required: false
  public get allowUnindexedSearchesWithControl() {
    return this.getBooleanAttribute('allow_unindexed_searches_with_control');
  }

  // allowed_auth_type - computed: true, optional: false, required: false
  public get allowedAuthType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_auth_type'));
  }

  // allowed_extended_operation - computed: true, optional: false, required: false
  public get allowedExtendedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_extended_operation'));
  }

  // allowed_filter_type - computed: true, optional: false, required: false
  public get allowedFilterType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_filter_type'));
  }

  // allowed_operation - computed: true, optional: false, required: false
  public get allowedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operation'));
  }

  // allowed_request_control - computed: true, optional: false, required: false
  public get allowedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_control'));
  }

  // allowed_sasl_mechanism - computed: true, optional: false, required: false
  public get allowedSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_sasl_mechanism'));
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // connection_operation_rate_exceeded_behavior - computed: true, optional: false, required: false
  public get connectionOperationRateExceededBehavior() {
    return this.getStringAttribute('connection_operation_rate_exceeded_behavior');
  }

  // denied_extended_operation - computed: true, optional: false, required: false
  public get deniedExtendedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_extended_operation'));
  }

  // denied_request_control - computed: true, optional: false, required: false
  public get deniedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_request_control'));
  }

  // denied_sasl_mechanism - computed: true, optional: false, required: false
  public get deniedSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_sasl_mechanism'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // evaluation_order_index - computed: true, optional: false, required: false
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }

  // exclude_global_sensitive_attribute - computed: true, optional: false, required: false
  public get excludeGlobalSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_global_sensitive_attribute'));
  }

  // excluded_backend_base_dn - computed: true, optional: false, required: false
  public get excludedBackendBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_backend_base_dn'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_backend_base_dn - computed: true, optional: false, required: false
  public get includedBackendBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_backend_base_dn'));
  }

  // maximum_concurrent_connections - computed: true, optional: false, required: false
  public get maximumConcurrentConnections() {
    return this.getNumberAttribute('maximum_concurrent_connections');
  }

  // maximum_concurrent_operation_wait_time_before_rejecting - computed: true, optional: false, required: false
  public get maximumConcurrentOperationWaitTimeBeforeRejecting() {
    return this.getStringAttribute('maximum_concurrent_operation_wait_time_before_rejecting');
  }

  // maximum_concurrent_operations_per_connection - computed: true, optional: false, required: false
  public get maximumConcurrentOperationsPerConnection() {
    return this.getNumberAttribute('maximum_concurrent_operations_per_connection');
  }

  // maximum_concurrent_operations_per_connection_exceeded_behavior - computed: true, optional: false, required: false
  public get maximumConcurrentOperationsPerConnectionExceededBehavior() {
    return this.getStringAttribute('maximum_concurrent_operations_per_connection_exceeded_behavior');
  }

  // maximum_connection_duration - computed: true, optional: false, required: false
  public get maximumConnectionDuration() {
    return this.getStringAttribute('maximum_connection_duration');
  }

  // maximum_connection_operation_rate - computed: true, optional: false, required: false
  public get maximumConnectionOperationRate() {
    return cdktf.Fn.tolist(this.getListAttribute('maximum_connection_operation_rate'));
  }

  // maximum_idle_connection_duration - computed: true, optional: false, required: false
  public get maximumIdleConnectionDuration() {
    return this.getStringAttribute('maximum_idle_connection_duration');
  }

  // maximum_ldap_join_size_limit - computed: true, optional: false, required: false
  public get maximumLdapJoinSizeLimit() {
    return this.getNumberAttribute('maximum_ldap_join_size_limit');
  }

  // maximum_operation_count_per_connection - computed: true, optional: false, required: false
  public get maximumOperationCountPerConnection() {
    return this.getNumberAttribute('maximum_operation_count_per_connection');
  }

  // maximum_policy_operation_rate - computed: true, optional: false, required: false
  public get maximumPolicyOperationRate() {
    return cdktf.Fn.tolist(this.getListAttribute('maximum_policy_operation_rate'));
  }

  // maximum_search_lookthrough_limit - computed: true, optional: false, required: false
  public get maximumSearchLookthroughLimit() {
    return this.getNumberAttribute('maximum_search_lookthrough_limit');
  }

  // maximum_search_size_limit - computed: true, optional: false, required: false
  public get maximumSearchSizeLimit() {
    return this.getNumberAttribute('maximum_search_size_limit');
  }

  // maximum_search_time_limit - computed: true, optional: false, required: false
  public get maximumSearchTimeLimit() {
    return this.getStringAttribute('maximum_search_time_limit');
  }

  // maximum_sort_size_limit_without_vlv_index - computed: true, optional: false, required: false
  public get maximumSortSizeLimitWithoutVlvIndex() {
    return this.getNumberAttribute('maximum_sort_size_limit_without_vlv_index');
  }

  // minimum_substring_length - computed: true, optional: false, required: false
  public get minimumSubstringLength() {
    return this.getNumberAttribute('minimum_substring_length');
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

  // policy_operation_rate_exceeded_behavior - computed: true, optional: false, required: false
  public get policyOperationRateExceededBehavior() {
    return this.getStringAttribute('policy_operation_rate_exceeded_behavior');
  }

  // prohibited_operation_request_criteria - computed: true, optional: false, required: false
  public get prohibitedOperationRequestCriteria() {
    return this.getStringAttribute('prohibited_operation_request_criteria');
  }

  // required_operation_request_criteria - computed: true, optional: false, required: false
  public get requiredOperationRequestCriteria() {
    return this.getStringAttribute('required_operation_request_criteria');
  }

  // result_code_map - computed: true, optional: false, required: false
  public get resultCodeMap() {
    return this.getStringAttribute('result_code_map');
  }

  // sensitive_attribute - computed: true, optional: false, required: false
  public get sensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitive_attribute'));
  }

  // terminate_connection - computed: true, optional: false, required: false
  public get terminateConnection() {
    return this.getBooleanAttribute('terminate_connection');
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
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
