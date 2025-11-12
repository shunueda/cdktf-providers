// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/result_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryResultCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/result_criteria#name DataPingdirectoryResultCriteria#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/result_criteria pingdirectory_result_criteria}
*/
export class DataPingdirectoryResultCriteria extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_result_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryResultCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryResultCriteria to import
  * @param importFromId The id of the existing DataPingdirectoryResultCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/result_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryResultCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_result_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/result_criteria pingdirectory_result_criteria} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryResultCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryResultCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_result_criteria',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_authz_user_group_dn - computed: true, optional: false, required: false
  public get allIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_authz_user_group_dn'));
  }

  // all_included_response_control - computed: true, optional: false, required: false
  public get allIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_response_control'));
  }

  // all_included_result_criteria - computed: true, optional: false, required: false
  public get allIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_result_criteria'));
  }

  // any_included_authz_user_group_dn - computed: true, optional: false, required: false
  public get anyIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_authz_user_group_dn'));
  }

  // any_included_response_control - computed: true, optional: false, required: false
  public get anyIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_response_control'));
  }

  // any_included_result_criteria - computed: true, optional: false, required: false
  public get anyIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_result_criteria'));
  }

  // assurance_behavior_altered_by_control - computed: true, optional: false, required: false
  public get assuranceBehaviorAlteredByControl() {
    return this.getStringAttribute('assurance_behavior_altered_by_control');
  }

  // assurance_satisfied - computed: true, optional: false, required: false
  public get assuranceSatisfied() {
    return this.getStringAttribute('assurance_satisfied');
  }

  // assurance_timeout_criteria - computed: true, optional: false, required: false
  public get assuranceTimeoutCriteria() {
    return this.getStringAttribute('assurance_timeout_criteria');
  }

  // assurance_timeout_value - computed: true, optional: false, required: false
  public get assuranceTimeoutValue() {
    return this.getStringAttribute('assurance_timeout_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excluded_authz_user_base_dn - computed: true, optional: false, required: false
  public get excludedAuthzUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_authz_user_base_dn'));
  }

  // excluded_user_base_dn - computed: true, optional: false, required: false
  public get excludedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_base_dn'));
  }

  // excluded_user_filter - computed: true, optional: false, required: false
  public get excludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_filter'));
  }

  // excluded_user_group_dn - computed: true, optional: false, required: false
  public get excludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_group_dn'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_anonymous_binds - computed: true, optional: false, required: false
  public get includeAnonymousBinds() {
    return this.getBooleanAttribute('include_anonymous_binds');
  }

  // included_authz_user_base_dn - computed: true, optional: false, required: false
  public get includedAuthzUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_authz_user_base_dn'));
  }

  // included_user_base_dn - computed: true, optional: false, required: false
  public get includedUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_base_dn'));
  }

  // included_user_filter - computed: true, optional: false, required: false
  public get includedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_filter'));
  }

  // included_user_group_dn - computed: true, optional: false, required: false
  public get includedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_group_dn'));
  }

  // local_assurance_level - computed: true, optional: false, required: false
  public get localAssuranceLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('local_assurance_level'));
  }

  // missing_any_privilege - computed: true, optional: false, required: false
  public get missingAnyPrivilege() {
    return this.getStringAttribute('missing_any_privilege');
  }

  // missing_privilege - computed: true, optional: false, required: false
  public get missingPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('missing_privilege'));
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

  // none_included_authz_user_group_dn - computed: true, optional: false, required: false
  public get noneIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_authz_user_group_dn'));
  }

  // none_included_response_control - computed: true, optional: false, required: false
  public get noneIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_response_control'));
  }

  // none_included_result_criteria - computed: true, optional: false, required: false
  public get noneIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_result_criteria'));
  }

  // not_all_included_authz_user_group_dn - computed: true, optional: false, required: false
  public get notAllIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_authz_user_group_dn'));
  }

  // not_all_included_response_control - computed: true, optional: false, required: false
  public get notAllIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_response_control'));
  }

  // not_all_included_result_criteria - computed: true, optional: false, required: false
  public get notAllIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_result_criteria'));
  }

  // processing_time_criteria - computed: true, optional: false, required: false
  public get processingTimeCriteria() {
    return this.getStringAttribute('processing_time_criteria');
  }

  // processing_time_value - computed: true, optional: false, required: false
  public get processingTimeValue() {
    return this.getStringAttribute('processing_time_value');
  }

  // queue_time_criteria - computed: true, optional: false, required: false
  public get queueTimeCriteria() {
    return this.getStringAttribute('queue_time_criteria');
  }

  // queue_time_value - computed: true, optional: false, required: false
  public get queueTimeValue() {
    return this.getStringAttribute('queue_time_value');
  }

  // referral_returned - computed: true, optional: false, required: false
  public get referralReturned() {
    return this.getStringAttribute('referral_returned');
  }

  // remote_assurance_level - computed: true, optional: false, required: false
  public get remoteAssuranceLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_assurance_level'));
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // response_delayed_by_assurance - computed: true, optional: false, required: false
  public get responseDelayedByAssurance() {
    return this.getStringAttribute('response_delayed_by_assurance');
  }

  // result_code_criteria - computed: true, optional: false, required: false
  public get resultCodeCriteria() {
    return this.getStringAttribute('result_code_criteria');
  }

  // result_code_value - computed: true, optional: false, required: false
  public get resultCodeValue() {
    return cdktf.Fn.tolist(this.getListAttribute('result_code_value'));
  }

  // retired_password_used_for_bind - computed: true, optional: false, required: false
  public get retiredPasswordUsedForBind() {
    return this.getStringAttribute('retired_password_used_for_bind');
  }

  // search_entry_returned_count - computed: true, optional: false, required: false
  public get searchEntryReturnedCount() {
    return this.getNumberAttribute('search_entry_returned_count');
  }

  // search_entry_returned_criteria - computed: true, optional: false, required: false
  public get searchEntryReturnedCriteria() {
    return this.getStringAttribute('search_entry_returned_criteria');
  }

  // search_indexed_criteria - computed: true, optional: false, required: false
  public get searchIndexedCriteria() {
    return this.getStringAttribute('search_indexed_criteria');
  }

  // search_reference_returned_count - computed: true, optional: false, required: false
  public get searchReferenceReturnedCount() {
    return this.getNumberAttribute('search_reference_returned_count');
  }

  // search_reference_returned_criteria - computed: true, optional: false, required: false
  public get searchReferenceReturnedCriteria() {
    return this.getStringAttribute('search_reference_returned_criteria');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // used_alternate_authzid - computed: true, optional: false, required: false
  public get usedAlternateAuthzid() {
    return this.getStringAttribute('used_alternate_authzid');
  }

  // used_any_privilege - computed: true, optional: false, required: false
  public get usedAnyPrivilege() {
    return this.getStringAttribute('used_any_privilege');
  }

  // used_privilege - computed: true, optional: false, required: false
  public get usedPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('used_privilege'));
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
