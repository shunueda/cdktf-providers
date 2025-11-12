// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResultCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the DN of a group in which authorization users must exist for operations included in this Simple Result Criteria. If any group DNs are provided, then the authorization user must be a member of all of those groups. The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#all_included_authz_user_group_dn ResultCriteria#all_included_authz_user_group_dn}
  */
  readonly allIncludedAuthzUserGroupDn?: string[];
  /**
  * Specifies the OID of a control that must be present in the response to the client for operations included in this Simple Result Criteria. If any control OIDs are provided, then the response must contain all of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#all_included_response_control ResultCriteria#all_included_response_control}
  */
  readonly allIncludedResponseControl?: string[];
  /**
  * Specifies a result criteria object that must match the associated operation result in order to match the aggregate result criteria. If one or more all-included result criteria objects are provided, then an operation result must match all of them in order to match the aggregate result criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#all_included_result_criteria ResultCriteria#all_included_result_criteria}
  */
  readonly allIncludedResultCriteria?: string[];
  /**
  * Specifies the DN of a group in which authorization users may exist for operations included in this Simple Result Criteria. If any group DNs are provided, then the authorization user must be a member of at least one of those groups. The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#any_included_authz_user_group_dn ResultCriteria#any_included_authz_user_group_dn}
  */
  readonly anyIncludedAuthzUserGroupDn?: string[];
  /**
  * Specifies the OID of a control that may be present in the response to the client for operations included in this Simple Result Criteria. If any control OIDs are provided, then the response must contain at least one of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#any_included_response_control ResultCriteria#any_included_response_control}
  */
  readonly anyIncludedResponseControl?: string[];
  /**
  * Specifies a result criteria object that may match the associated operation result in order to match the aggregate result criteria. If one or more any-included result criteria objects are provided, then an operation result must match at least one of them in order to match the aggregate result criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#any_included_result_criteria ResultCriteria#any_included_result_criteria}
  */
  readonly anyIncludedResultCriteria?: string[];
  /**
  * Indicates whether this Replication Assurance Result Criteria should match operations based on whether the assurance requirements were altered by a control included in the request from the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#assurance_behavior_altered_by_control ResultCriteria#assurance_behavior_altered_by_control}
  */
  readonly assuranceBehaviorAlteredByControl?: string;
  /**
  * Indicates whether this Replication Assurance Result Criteria should match operations based on whether the assurance requirements have been satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#assurance_satisfied ResultCriteria#assurance_satisfied}
  */
  readonly assuranceSatisfied?: string;
  /**
  * The criteria to use when performing matching based on the assurance timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#assurance_timeout_criteria ResultCriteria#assurance_timeout_criteria}
  */
  readonly assuranceTimeoutCriteria?: string;
  /**
  * The value to use for performing matching based on the assurance timeout. This will be ignored if the assurance-timeout-criteria is "any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#assurance_timeout_value ResultCriteria#assurance_timeout_value}
  */
  readonly assuranceTimeoutValue?: string;
  /**
  * A description for this Result Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#description ResultCriteria#description}
  */
  readonly description?: string;
  /**
  * Specifies a base DN below which authorization user entries may exist for operations excluded from this Simple Result Criteria. The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#excluded_authz_user_base_dn ResultCriteria#excluded_authz_user_base_dn}
  */
  readonly excludedAuthzUserBaseDn?: string[];
  /**
  * A set of base DNs for authenticated users that will not be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#excluded_user_base_dn ResultCriteria#excluded_user_base_dn}
  */
  readonly excludedUserBaseDn?: string[];
  /**
  * A set of filters that may be used to identify entries for authenticated users that will not be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#excluded_user_filter ResultCriteria#excluded_user_filter}
  */
  readonly excludedUserFilter?: string[];
  /**
  * The DNs of the groups whose members will not be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#excluded_user_group_dn ResultCriteria#excluded_user_group_dn}
  */
  readonly excludedUserGroupDn?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Result Criteria. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#extension_argument ResultCriteria#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#extension_class ResultCriteria#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Indicates whether this criteria will be permitted to match bind operations that resulted in anonymous authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#include_anonymous_binds ResultCriteria#include_anonymous_binds}
  */
  readonly includeAnonymousBinds?: boolean | cdktf.IResolvable;
  /**
  * Specifies a base DN below which authorization user entries may exist for operations included in this Simple Result Criteria. The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#included_authz_user_base_dn ResultCriteria#included_authz_user_base_dn}
  */
  readonly includedAuthzUserBaseDn?: string[];
  /**
  * A set of base DNs for authenticated users that will be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#included_user_base_dn ResultCriteria#included_user_base_dn}
  */
  readonly includedUserBaseDn?: string[];
  /**
  * A set of filters that may be used to identify entries for authenticated users that will be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#included_user_filter ResultCriteria#included_user_filter}
  */
  readonly includedUserFilter?: string[];
  /**
  * The DNs of the groups whose members will be permitted to match this criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#included_user_group_dn ResultCriteria#included_user_group_dn}
  */
  readonly includedUserGroupDn?: string[];
  /**
  * The local assurance level values that will be allowed to match this Replication Assurance Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#local_assurance_level ResultCriteria#local_assurance_level}
  */
  readonly localAssuranceLevel?: string[];
  /**
  * Indicates whether operations in which one or more privileges were missing should be included in this Simple Result Criteria. If no value is provided, then whether there were any missing privileges will not be considered when determining whether an operation matches this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#missing_any_privilege ResultCriteria#missing_any_privilege}
  */
  readonly missingAnyPrivilege?: string;
  /**
  * Specifies the name of a privilege that must have been missing during the processing for operations included in this Simple Result Criteria. If any privilege names are provided, then the associated operation must have been missing at least one of those privileges. If no privilege names were provided, then the set of privileges missing will not be considered when determining whether an operation should be included in this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#missing_privilege ResultCriteria#missing_privilege}
  */
  readonly missingPrivilege?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#name ResultCriteria#name}
  */
  readonly name: string;
  /**
  * Specifies the DN of a group in which authorization users must not exist for operations included in this Simple Result Criteria. If any group DNs are provided, then the authorization user must not be a member any of those groups. The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#none_included_authz_user_group_dn ResultCriteria#none_included_authz_user_group_dn}
  */
  readonly noneIncludedAuthzUserGroupDn?: string[];
  /**
  * Specifies the OID of a control that must not be present in the response to the client for operations included in this Simple Result Criteria. If any control OIDs are provided, then the response must not contain any of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#none_included_response_control ResultCriteria#none_included_response_control}
  */
  readonly noneIncludedResponseControl?: string[];
  /**
  * Specifies a result criteria object that must not match the associated operation result in order to match the aggregate result criteria. If one or more none-included result criteria objects are provided, then an operation result must not match any of them in order to match the aggregate result criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#none_included_result_criteria ResultCriteria#none_included_result_criteria}
  */
  readonly noneIncludedResultCriteria?: string[];
  /**
  * Specifies the DN of a group in which authorization users should not exist for operations included in this Simple Result Criteria. If any group DNs are provided, then the authorization user must not be a member of at least one of those groups (that is, the user may be a member of zero or more of those groups, but not of all of them). The authorization user could be the currently authenticated user on the connection (the user that performed the Bind operation), or different if proxied authorization was used to request that the operation be performed under the authorization of another user (as is the case for operations that come through a Directory Proxy Server). This property will be ignored for operations where no authentication or authorization has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#not_all_included_authz_user_group_dn ResultCriteria#not_all_included_authz_user_group_dn}
  */
  readonly notAllIncludedAuthzUserGroupDn?: string[];
  /**
  * Specifies the OID of a control that should not be present in the response to the client for operations included in this Simple Result Criteria. If any control OIDs are provided, then the response must not contain at least one of those controls (that is, the response may contain zero or more of those controls, but not all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#not_all_included_response_control ResultCriteria#not_all_included_response_control}
  */
  readonly notAllIncludedResponseControl?: string[];
  /**
  * Specifies a result criteria object that should not match the associated operation result in order to match the aggregate result criteria. If one or more not-all-included result criteria objects are provided, then an operation result must not match all of them (that is, it may match zero or more of them, but it must not match all of them) in order to match the aggregate result criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#not_all_included_result_criteria ResultCriteria#not_all_included_result_criteria}
  */
  readonly notAllIncludedResultCriteria?: string[];
  /**
  * Indicates whether the time required to process the operation should be taken into consideration when determining whether to include the operation in this Simple Result Criteria. If the processing time should be taken into account, then the "processing-time-value" property should contain the boundary value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#processing_time_criteria ResultCriteria#processing_time_criteria}
  */
  readonly processingTimeCriteria?: string;
  /**
  * Specifies the boundary value to use for the operation processing time when determining whether to include that operation in this Simple Result Criteria. This will be ignored if the "processing-time-criteria" property has a value of "any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#processing_time_value ResultCriteria#processing_time_value}
  */
  readonly processingTimeValue?: string;
  /**
  * Indicates whether the time the operation was required to wait on the work queue should be taken into consideration when determining whether to include the operation in this Simple Result Criteria. If the queue time should be taken into account, then the "queue-time-value" property should contain the boundary value. This property should only be given a value other than "any" if the work queue has been configured to monitor the time operations have spent on the work queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#queue_time_criteria ResultCriteria#queue_time_criteria}
  */
  readonly queueTimeCriteria?: string;
  /**
  * Specifies the boundary value to use for the time an operation spent on the work queue when determining whether to include that operation in this Simple Result Criteria. This will be ignored if the "queue-time-criteria" property has a value of "any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#queue_time_value ResultCriteria#queue_time_value}
  */
  readonly queueTimeValue?: string;
  /**
  * Indicates whether operation results which include one or more referral URLs should be included in this Simple Result Criteria. If no value is provided, then whether an operation includes any referral URLs will not be considered when determining whether it matches this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#referral_returned ResultCriteria#referral_returned}
  */
  readonly referralReturned?: string;
  /**
  * The local assurance level values that will be allowed to match this Replication Assurance Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#remote_assurance_level ResultCriteria#remote_assurance_level}
  */
  readonly remoteAssuranceLevel?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `successful-bind`: Specifies a request criteria object that must match the associated request for operations included in this Successful Bind Result Criteria.
  *   - `simple`: Specifies a request criteria object that must match the associated request for operations included in this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#request_criteria ResultCriteria#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * Indicates whether this Replication Assurance Result Criteria should match operations based on whether the response to the client was delayed by assurance processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#response_delayed_by_assurance ResultCriteria#response_delayed_by_assurance}
  */
  readonly responseDelayedByAssurance?: string;
  /**
  * Specifies which operation result codes are allowed for operations included in this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#result_code_criteria ResultCriteria#result_code_criteria}
  */
  readonly resultCodeCriteria?: string;
  /**
  * Specifies the operation result code values for results included in this Simple Result Criteria. This will only be taken into account if the "result-code-criteria" property has a value of "selected-result-codes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#result_code_value ResultCriteria#result_code_value}
  */
  readonly resultCodeValue?: string[];
  /**
  * Indicates whether the use of a retired password for authentication should be considered when determining whether a bind operation should be included in this Simple Result Criteria. This will be ignored for all operations other than bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#retired_password_used_for_bind ResultCriteria#retired_password_used_for_bind}
  */
  readonly retiredPasswordUsedForBind?: string;
  /**
  * Specifies the target number of entries returned for use when determining whether a search operation should be included in this Simple Result Criteria. This will be ignored for all operations other than search, and it will be ignored for search operations if the "search-entry-criteria" property has a value of "any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#search_entry_returned_count ResultCriteria#search_entry_returned_count}
  */
  readonly searchEntryReturnedCount?: number;
  /**
  * Indicates whether the number of entries returned should be considered when determining whether a search operation should be included in this Simple Result Criteria. This will be ignored for all operations other than search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#search_entry_returned_criteria ResultCriteria#search_entry_returned_criteria}
  */
  readonly searchEntryReturnedCriteria?: string;
  /**
  * Indicates whether a search operation should be matched by this Simple Result Criteria based on whether it is considered indexed by the server. This will be ignored for all operations other than search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#search_indexed_criteria ResultCriteria#search_indexed_criteria}
  */
  readonly searchIndexedCriteria?: string;
  /**
  * Specifies the target number of references returned for use when determining whether a search operation should be included in this Simple Result Criteria. This will be ignored for all operations other than search, and it will be ignored for search operations if the "search-reference-criteria" property has a value of "any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#search_reference_returned_count ResultCriteria#search_reference_returned_count}
  */
  readonly searchReferenceReturnedCount?: number;
  /**
  * Indicates whether the number of references returned should be considered when determining whether a search operation should be included in this Simple Result Criteria. This will be ignored for all operations other than search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#search_reference_returned_criteria ResultCriteria#search_reference_returned_criteria}
  */
  readonly searchReferenceReturnedCriteria?: string;
  /**
  * The type of Result Criteria resource. Options are ['successful-bind', 'simple', 'aggregate', 'replication-assurance', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#type ResultCriteria#type}
  */
  readonly type: string;
  /**
  * Indicates whether operation results in which the associated operation used an authorization identity that is different from the authentication identity (e.g., as the result of using a proxied authorization control) should be included in this Simple Result Criteria. If no value is provided, then whether an operation used an alternate authorization identity will not be considered when determining whether it matches this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#used_alternate_authzid ResultCriteria#used_alternate_authzid}
  */
  readonly usedAlternateAuthzid?: string;
  /**
  * Indicates whether operations in which one or more privileges were used should be included in this Simple Result Criteria. If no value is provided, then whether an operation used any privileges will not be considered when determining whether it matches this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#used_any_privilege ResultCriteria#used_any_privilege}
  */
  readonly usedAnyPrivilege?: string;
  /**
  * Specifies the name of a privilege that must have been used during the processing for operations included in this Simple Result Criteria. If any privilege names are provided, then the associated operation must have used at least one of those privileges. If no privilege names were provided, then the set of privileges used will not be considered when determining whether an operation should be included in this Simple Result Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#used_privilege ResultCriteria#used_privilege}
  */
  readonly usedPrivilege?: string[];
}
export interface ResultCriteriaRequiredActions {
}

export function resultCriteriaRequiredActionsToTerraform(struct?: ResultCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resultCriteriaRequiredActionsToHclTerraform(struct?: ResultCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResultCriteriaRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResultCriteriaRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResultCriteriaRequiredActions | undefined) {
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

export class ResultCriteriaRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ResultCriteriaRequiredActionsOutputReference {
    return new ResultCriteriaRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria pingdirectory_result_criteria}
*/
export class ResultCriteria extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_result_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResultCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResultCriteria to import
  * @param importFromId The id of the existing ResultCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResultCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_result_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/result_criteria pingdirectory_result_criteria} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResultCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: ResultCriteriaConfig) {
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
    this._allIncludedAuthzUserGroupDn = config.allIncludedAuthzUserGroupDn;
    this._allIncludedResponseControl = config.allIncludedResponseControl;
    this._allIncludedResultCriteria = config.allIncludedResultCriteria;
    this._anyIncludedAuthzUserGroupDn = config.anyIncludedAuthzUserGroupDn;
    this._anyIncludedResponseControl = config.anyIncludedResponseControl;
    this._anyIncludedResultCriteria = config.anyIncludedResultCriteria;
    this._assuranceBehaviorAlteredByControl = config.assuranceBehaviorAlteredByControl;
    this._assuranceSatisfied = config.assuranceSatisfied;
    this._assuranceTimeoutCriteria = config.assuranceTimeoutCriteria;
    this._assuranceTimeoutValue = config.assuranceTimeoutValue;
    this._description = config.description;
    this._excludedAuthzUserBaseDn = config.excludedAuthzUserBaseDn;
    this._excludedUserBaseDn = config.excludedUserBaseDn;
    this._excludedUserFilter = config.excludedUserFilter;
    this._excludedUserGroupDn = config.excludedUserGroupDn;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._includeAnonymousBinds = config.includeAnonymousBinds;
    this._includedAuthzUserBaseDn = config.includedAuthzUserBaseDn;
    this._includedUserBaseDn = config.includedUserBaseDn;
    this._includedUserFilter = config.includedUserFilter;
    this._includedUserGroupDn = config.includedUserGroupDn;
    this._localAssuranceLevel = config.localAssuranceLevel;
    this._missingAnyPrivilege = config.missingAnyPrivilege;
    this._missingPrivilege = config.missingPrivilege;
    this._name = config.name;
    this._noneIncludedAuthzUserGroupDn = config.noneIncludedAuthzUserGroupDn;
    this._noneIncludedResponseControl = config.noneIncludedResponseControl;
    this._noneIncludedResultCriteria = config.noneIncludedResultCriteria;
    this._notAllIncludedAuthzUserGroupDn = config.notAllIncludedAuthzUserGroupDn;
    this._notAllIncludedResponseControl = config.notAllIncludedResponseControl;
    this._notAllIncludedResultCriteria = config.notAllIncludedResultCriteria;
    this._processingTimeCriteria = config.processingTimeCriteria;
    this._processingTimeValue = config.processingTimeValue;
    this._queueTimeCriteria = config.queueTimeCriteria;
    this._queueTimeValue = config.queueTimeValue;
    this._referralReturned = config.referralReturned;
    this._remoteAssuranceLevel = config.remoteAssuranceLevel;
    this._requestCriteria = config.requestCriteria;
    this._responseDelayedByAssurance = config.responseDelayedByAssurance;
    this._resultCodeCriteria = config.resultCodeCriteria;
    this._resultCodeValue = config.resultCodeValue;
    this._retiredPasswordUsedForBind = config.retiredPasswordUsedForBind;
    this._searchEntryReturnedCount = config.searchEntryReturnedCount;
    this._searchEntryReturnedCriteria = config.searchEntryReturnedCriteria;
    this._searchIndexedCriteria = config.searchIndexedCriteria;
    this._searchReferenceReturnedCount = config.searchReferenceReturnedCount;
    this._searchReferenceReturnedCriteria = config.searchReferenceReturnedCriteria;
    this._type = config.type;
    this._usedAlternateAuthzid = config.usedAlternateAuthzid;
    this._usedAnyPrivilege = config.usedAnyPrivilege;
    this._usedPrivilege = config.usedPrivilege;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_authz_user_group_dn - computed: true, optional: true, required: false
  private _allIncludedAuthzUserGroupDn?: string[]; 
  public get allIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_authz_user_group_dn'));
  }
  public set allIncludedAuthzUserGroupDn(value: string[]) {
    this._allIncludedAuthzUserGroupDn = value;
  }
  public resetAllIncludedAuthzUserGroupDn() {
    this._allIncludedAuthzUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedAuthzUserGroupDnInput() {
    return this._allIncludedAuthzUserGroupDn;
  }

  // all_included_response_control - computed: true, optional: true, required: false
  private _allIncludedResponseControl?: string[]; 
  public get allIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_response_control'));
  }
  public set allIncludedResponseControl(value: string[]) {
    this._allIncludedResponseControl = value;
  }
  public resetAllIncludedResponseControl() {
    this._allIncludedResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedResponseControlInput() {
    return this._allIncludedResponseControl;
  }

  // all_included_result_criteria - computed: true, optional: true, required: false
  private _allIncludedResultCriteria?: string[]; 
  public get allIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_result_criteria'));
  }
  public set allIncludedResultCriteria(value: string[]) {
    this._allIncludedResultCriteria = value;
  }
  public resetAllIncludedResultCriteria() {
    this._allIncludedResultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedResultCriteriaInput() {
    return this._allIncludedResultCriteria;
  }

  // any_included_authz_user_group_dn - computed: true, optional: true, required: false
  private _anyIncludedAuthzUserGroupDn?: string[]; 
  public get anyIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_authz_user_group_dn'));
  }
  public set anyIncludedAuthzUserGroupDn(value: string[]) {
    this._anyIncludedAuthzUserGroupDn = value;
  }
  public resetAnyIncludedAuthzUserGroupDn() {
    this._anyIncludedAuthzUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedAuthzUserGroupDnInput() {
    return this._anyIncludedAuthzUserGroupDn;
  }

  // any_included_response_control - computed: true, optional: true, required: false
  private _anyIncludedResponseControl?: string[]; 
  public get anyIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_response_control'));
  }
  public set anyIncludedResponseControl(value: string[]) {
    this._anyIncludedResponseControl = value;
  }
  public resetAnyIncludedResponseControl() {
    this._anyIncludedResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedResponseControlInput() {
    return this._anyIncludedResponseControl;
  }

  // any_included_result_criteria - computed: true, optional: true, required: false
  private _anyIncludedResultCriteria?: string[]; 
  public get anyIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_result_criteria'));
  }
  public set anyIncludedResultCriteria(value: string[]) {
    this._anyIncludedResultCriteria = value;
  }
  public resetAnyIncludedResultCriteria() {
    this._anyIncludedResultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedResultCriteriaInput() {
    return this._anyIncludedResultCriteria;
  }

  // assurance_behavior_altered_by_control - computed: true, optional: true, required: false
  private _assuranceBehaviorAlteredByControl?: string; 
  public get assuranceBehaviorAlteredByControl() {
    return this.getStringAttribute('assurance_behavior_altered_by_control');
  }
  public set assuranceBehaviorAlteredByControl(value: string) {
    this._assuranceBehaviorAlteredByControl = value;
  }
  public resetAssuranceBehaviorAlteredByControl() {
    this._assuranceBehaviorAlteredByControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceBehaviorAlteredByControlInput() {
    return this._assuranceBehaviorAlteredByControl;
  }

  // assurance_satisfied - computed: true, optional: true, required: false
  private _assuranceSatisfied?: string; 
  public get assuranceSatisfied() {
    return this.getStringAttribute('assurance_satisfied');
  }
  public set assuranceSatisfied(value: string) {
    this._assuranceSatisfied = value;
  }
  public resetAssuranceSatisfied() {
    this._assuranceSatisfied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceSatisfiedInput() {
    return this._assuranceSatisfied;
  }

  // assurance_timeout_criteria - computed: true, optional: true, required: false
  private _assuranceTimeoutCriteria?: string; 
  public get assuranceTimeoutCriteria() {
    return this.getStringAttribute('assurance_timeout_criteria');
  }
  public set assuranceTimeoutCriteria(value: string) {
    this._assuranceTimeoutCriteria = value;
  }
  public resetAssuranceTimeoutCriteria() {
    this._assuranceTimeoutCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceTimeoutCriteriaInput() {
    return this._assuranceTimeoutCriteria;
  }

  // assurance_timeout_value - computed: true, optional: true, required: false
  private _assuranceTimeoutValue?: string; 
  public get assuranceTimeoutValue() {
    return this.getStringAttribute('assurance_timeout_value');
  }
  public set assuranceTimeoutValue(value: string) {
    this._assuranceTimeoutValue = value;
  }
  public resetAssuranceTimeoutValue() {
    this._assuranceTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceTimeoutValueInput() {
    return this._assuranceTimeoutValue;
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

  // excluded_authz_user_base_dn - computed: true, optional: true, required: false
  private _excludedAuthzUserBaseDn?: string[]; 
  public get excludedAuthzUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_authz_user_base_dn'));
  }
  public set excludedAuthzUserBaseDn(value: string[]) {
    this._excludedAuthzUserBaseDn = value;
  }
  public resetExcludedAuthzUserBaseDn() {
    this._excludedAuthzUserBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAuthzUserBaseDnInput() {
    return this._excludedAuthzUserBaseDn;
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

  // excluded_user_filter - computed: true, optional: true, required: false
  private _excludedUserFilter?: string[]; 
  public get excludedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_filter'));
  }
  public set excludedUserFilter(value: string[]) {
    this._excludedUserFilter = value;
  }
  public resetExcludedUserFilter() {
    this._excludedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUserFilterInput() {
    return this._excludedUserFilter;
  }

  // excluded_user_group_dn - computed: true, optional: true, required: false
  private _excludedUserGroupDn?: string[]; 
  public get excludedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_user_group_dn'));
  }
  public set excludedUserGroupDn(value: string[]) {
    this._excludedUserGroupDn = value;
  }
  public resetExcludedUserGroupDn() {
    this._excludedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUserGroupDnInput() {
    return this._excludedUserGroupDn;
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

  // extension_class - computed: false, optional: true, required: false
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

  // include_anonymous_binds - computed: true, optional: true, required: false
  private _includeAnonymousBinds?: boolean | cdktf.IResolvable; 
  public get includeAnonymousBinds() {
    return this.getBooleanAttribute('include_anonymous_binds');
  }
  public set includeAnonymousBinds(value: boolean | cdktf.IResolvable) {
    this._includeAnonymousBinds = value;
  }
  public resetIncludeAnonymousBinds() {
    this._includeAnonymousBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAnonymousBindsInput() {
    return this._includeAnonymousBinds;
  }

  // included_authz_user_base_dn - computed: true, optional: true, required: false
  private _includedAuthzUserBaseDn?: string[]; 
  public get includedAuthzUserBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_authz_user_base_dn'));
  }
  public set includedAuthzUserBaseDn(value: string[]) {
    this._includedAuthzUserBaseDn = value;
  }
  public resetIncludedAuthzUserBaseDn() {
    this._includedAuthzUserBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedAuthzUserBaseDnInput() {
    return this._includedAuthzUserBaseDn;
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

  // included_user_filter - computed: true, optional: true, required: false
  private _includedUserFilter?: string[]; 
  public get includedUserFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_filter'));
  }
  public set includedUserFilter(value: string[]) {
    this._includedUserFilter = value;
  }
  public resetIncludedUserFilter() {
    this._includedUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserFilterInput() {
    return this._includedUserFilter;
  }

  // included_user_group_dn - computed: true, optional: true, required: false
  private _includedUserGroupDn?: string[]; 
  public get includedUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_user_group_dn'));
  }
  public set includedUserGroupDn(value: string[]) {
    this._includedUserGroupDn = value;
  }
  public resetIncludedUserGroupDn() {
    this._includedUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUserGroupDnInput() {
    return this._includedUserGroupDn;
  }

  // local_assurance_level - computed: true, optional: true, required: false
  private _localAssuranceLevel?: string[]; 
  public get localAssuranceLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('local_assurance_level'));
  }
  public set localAssuranceLevel(value: string[]) {
    this._localAssuranceLevel = value;
  }
  public resetLocalAssuranceLevel() {
    this._localAssuranceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAssuranceLevelInput() {
    return this._localAssuranceLevel;
  }

  // missing_any_privilege - computed: true, optional: true, required: false
  private _missingAnyPrivilege?: string; 
  public get missingAnyPrivilege() {
    return this.getStringAttribute('missing_any_privilege');
  }
  public set missingAnyPrivilege(value: string) {
    this._missingAnyPrivilege = value;
  }
  public resetMissingAnyPrivilege() {
    this._missingAnyPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingAnyPrivilegeInput() {
    return this._missingAnyPrivilege;
  }

  // missing_privilege - computed: true, optional: true, required: false
  private _missingPrivilege?: string[]; 
  public get missingPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('missing_privilege'));
  }
  public set missingPrivilege(value: string[]) {
    this._missingPrivilege = value;
  }
  public resetMissingPrivilege() {
    this._missingPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingPrivilegeInput() {
    return this._missingPrivilege;
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

  // none_included_authz_user_group_dn - computed: true, optional: true, required: false
  private _noneIncludedAuthzUserGroupDn?: string[]; 
  public get noneIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_authz_user_group_dn'));
  }
  public set noneIncludedAuthzUserGroupDn(value: string[]) {
    this._noneIncludedAuthzUserGroupDn = value;
  }
  public resetNoneIncludedAuthzUserGroupDn() {
    this._noneIncludedAuthzUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedAuthzUserGroupDnInput() {
    return this._noneIncludedAuthzUserGroupDn;
  }

  // none_included_response_control - computed: true, optional: true, required: false
  private _noneIncludedResponseControl?: string[]; 
  public get noneIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_response_control'));
  }
  public set noneIncludedResponseControl(value: string[]) {
    this._noneIncludedResponseControl = value;
  }
  public resetNoneIncludedResponseControl() {
    this._noneIncludedResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedResponseControlInput() {
    return this._noneIncludedResponseControl;
  }

  // none_included_result_criteria - computed: true, optional: true, required: false
  private _noneIncludedResultCriteria?: string[]; 
  public get noneIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_result_criteria'));
  }
  public set noneIncludedResultCriteria(value: string[]) {
    this._noneIncludedResultCriteria = value;
  }
  public resetNoneIncludedResultCriteria() {
    this._noneIncludedResultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedResultCriteriaInput() {
    return this._noneIncludedResultCriteria;
  }

  // not_all_included_authz_user_group_dn - computed: true, optional: true, required: false
  private _notAllIncludedAuthzUserGroupDn?: string[]; 
  public get notAllIncludedAuthzUserGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_authz_user_group_dn'));
  }
  public set notAllIncludedAuthzUserGroupDn(value: string[]) {
    this._notAllIncludedAuthzUserGroupDn = value;
  }
  public resetNotAllIncludedAuthzUserGroupDn() {
    this._notAllIncludedAuthzUserGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedAuthzUserGroupDnInput() {
    return this._notAllIncludedAuthzUserGroupDn;
  }

  // not_all_included_response_control - computed: true, optional: true, required: false
  private _notAllIncludedResponseControl?: string[]; 
  public get notAllIncludedResponseControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_response_control'));
  }
  public set notAllIncludedResponseControl(value: string[]) {
    this._notAllIncludedResponseControl = value;
  }
  public resetNotAllIncludedResponseControl() {
    this._notAllIncludedResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedResponseControlInput() {
    return this._notAllIncludedResponseControl;
  }

  // not_all_included_result_criteria - computed: true, optional: true, required: false
  private _notAllIncludedResultCriteria?: string[]; 
  public get notAllIncludedResultCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_result_criteria'));
  }
  public set notAllIncludedResultCriteria(value: string[]) {
    this._notAllIncludedResultCriteria = value;
  }
  public resetNotAllIncludedResultCriteria() {
    this._notAllIncludedResultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedResultCriteriaInput() {
    return this._notAllIncludedResultCriteria;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // processing_time_criteria - computed: true, optional: true, required: false
  private _processingTimeCriteria?: string; 
  public get processingTimeCriteria() {
    return this.getStringAttribute('processing_time_criteria');
  }
  public set processingTimeCriteria(value: string) {
    this._processingTimeCriteria = value;
  }
  public resetProcessingTimeCriteria() {
    this._processingTimeCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingTimeCriteriaInput() {
    return this._processingTimeCriteria;
  }

  // processing_time_value - computed: true, optional: true, required: false
  private _processingTimeValue?: string; 
  public get processingTimeValue() {
    return this.getStringAttribute('processing_time_value');
  }
  public set processingTimeValue(value: string) {
    this._processingTimeValue = value;
  }
  public resetProcessingTimeValue() {
    this._processingTimeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingTimeValueInput() {
    return this._processingTimeValue;
  }

  // queue_time_criteria - computed: true, optional: true, required: false
  private _queueTimeCriteria?: string; 
  public get queueTimeCriteria() {
    return this.getStringAttribute('queue_time_criteria');
  }
  public set queueTimeCriteria(value: string) {
    this._queueTimeCriteria = value;
  }
  public resetQueueTimeCriteria() {
    this._queueTimeCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTimeCriteriaInput() {
    return this._queueTimeCriteria;
  }

  // queue_time_value - computed: true, optional: true, required: false
  private _queueTimeValue?: string; 
  public get queueTimeValue() {
    return this.getStringAttribute('queue_time_value');
  }
  public set queueTimeValue(value: string) {
    this._queueTimeValue = value;
  }
  public resetQueueTimeValue() {
    this._queueTimeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTimeValueInput() {
    return this._queueTimeValue;
  }

  // referral_returned - computed: true, optional: true, required: false
  private _referralReturned?: string; 
  public get referralReturned() {
    return this.getStringAttribute('referral_returned');
  }
  public set referralReturned(value: string) {
    this._referralReturned = value;
  }
  public resetReferralReturned() {
    this._referralReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referralReturnedInput() {
    return this._referralReturned;
  }

  // remote_assurance_level - computed: true, optional: true, required: false
  private _remoteAssuranceLevel?: string[]; 
  public get remoteAssuranceLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_assurance_level'));
  }
  public set remoteAssuranceLevel(value: string[]) {
    this._remoteAssuranceLevel = value;
  }
  public resetRemoteAssuranceLevel() {
    this._remoteAssuranceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAssuranceLevelInput() {
    return this._remoteAssuranceLevel;
  }

  // request_criteria - computed: false, optional: true, required: false
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
  private _requiredActions = new ResultCriteriaRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // response_delayed_by_assurance - computed: true, optional: true, required: false
  private _responseDelayedByAssurance?: string; 
  public get responseDelayedByAssurance() {
    return this.getStringAttribute('response_delayed_by_assurance');
  }
  public set responseDelayedByAssurance(value: string) {
    this._responseDelayedByAssurance = value;
  }
  public resetResponseDelayedByAssurance() {
    this._responseDelayedByAssurance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDelayedByAssuranceInput() {
    return this._responseDelayedByAssurance;
  }

  // result_code_criteria - computed: true, optional: true, required: false
  private _resultCodeCriteria?: string; 
  public get resultCodeCriteria() {
    return this.getStringAttribute('result_code_criteria');
  }
  public set resultCodeCriteria(value: string) {
    this._resultCodeCriteria = value;
  }
  public resetResultCodeCriteria() {
    this._resultCodeCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCodeCriteriaInput() {
    return this._resultCodeCriteria;
  }

  // result_code_value - computed: true, optional: true, required: false
  private _resultCodeValue?: string[]; 
  public get resultCodeValue() {
    return cdktf.Fn.tolist(this.getListAttribute('result_code_value'));
  }
  public set resultCodeValue(value: string[]) {
    this._resultCodeValue = value;
  }
  public resetResultCodeValue() {
    this._resultCodeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCodeValueInput() {
    return this._resultCodeValue;
  }

  // retired_password_used_for_bind - computed: true, optional: true, required: false
  private _retiredPasswordUsedForBind?: string; 
  public get retiredPasswordUsedForBind() {
    return this.getStringAttribute('retired_password_used_for_bind');
  }
  public set retiredPasswordUsedForBind(value: string) {
    this._retiredPasswordUsedForBind = value;
  }
  public resetRetiredPasswordUsedForBind() {
    this._retiredPasswordUsedForBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiredPasswordUsedForBindInput() {
    return this._retiredPasswordUsedForBind;
  }

  // search_entry_returned_count - computed: true, optional: true, required: false
  private _searchEntryReturnedCount?: number; 
  public get searchEntryReturnedCount() {
    return this.getNumberAttribute('search_entry_returned_count');
  }
  public set searchEntryReturnedCount(value: number) {
    this._searchEntryReturnedCount = value;
  }
  public resetSearchEntryReturnedCount() {
    this._searchEntryReturnedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEntryReturnedCountInput() {
    return this._searchEntryReturnedCount;
  }

  // search_entry_returned_criteria - computed: true, optional: true, required: false
  private _searchEntryReturnedCriteria?: string; 
  public get searchEntryReturnedCriteria() {
    return this.getStringAttribute('search_entry_returned_criteria');
  }
  public set searchEntryReturnedCriteria(value: string) {
    this._searchEntryReturnedCriteria = value;
  }
  public resetSearchEntryReturnedCriteria() {
    this._searchEntryReturnedCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEntryReturnedCriteriaInput() {
    return this._searchEntryReturnedCriteria;
  }

  // search_indexed_criteria - computed: true, optional: true, required: false
  private _searchIndexedCriteria?: string; 
  public get searchIndexedCriteria() {
    return this.getStringAttribute('search_indexed_criteria');
  }
  public set searchIndexedCriteria(value: string) {
    this._searchIndexedCriteria = value;
  }
  public resetSearchIndexedCriteria() {
    this._searchIndexedCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIndexedCriteriaInput() {
    return this._searchIndexedCriteria;
  }

  // search_reference_returned_count - computed: true, optional: true, required: false
  private _searchReferenceReturnedCount?: number; 
  public get searchReferenceReturnedCount() {
    return this.getNumberAttribute('search_reference_returned_count');
  }
  public set searchReferenceReturnedCount(value: number) {
    this._searchReferenceReturnedCount = value;
  }
  public resetSearchReferenceReturnedCount() {
    this._searchReferenceReturnedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchReferenceReturnedCountInput() {
    return this._searchReferenceReturnedCount;
  }

  // search_reference_returned_criteria - computed: true, optional: true, required: false
  private _searchReferenceReturnedCriteria?: string; 
  public get searchReferenceReturnedCriteria() {
    return this.getStringAttribute('search_reference_returned_criteria');
  }
  public set searchReferenceReturnedCriteria(value: string) {
    this._searchReferenceReturnedCriteria = value;
  }
  public resetSearchReferenceReturnedCriteria() {
    this._searchReferenceReturnedCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchReferenceReturnedCriteriaInput() {
    return this._searchReferenceReturnedCriteria;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // used_alternate_authzid - computed: true, optional: true, required: false
  private _usedAlternateAuthzid?: string; 
  public get usedAlternateAuthzid() {
    return this.getStringAttribute('used_alternate_authzid');
  }
  public set usedAlternateAuthzid(value: string) {
    this._usedAlternateAuthzid = value;
  }
  public resetUsedAlternateAuthzid() {
    this._usedAlternateAuthzid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedAlternateAuthzidInput() {
    return this._usedAlternateAuthzid;
  }

  // used_any_privilege - computed: true, optional: true, required: false
  private _usedAnyPrivilege?: string; 
  public get usedAnyPrivilege() {
    return this.getStringAttribute('used_any_privilege');
  }
  public set usedAnyPrivilege(value: string) {
    this._usedAnyPrivilege = value;
  }
  public resetUsedAnyPrivilege() {
    this._usedAnyPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedAnyPrivilegeInput() {
    return this._usedAnyPrivilege;
  }

  // used_privilege - computed: true, optional: true, required: false
  private _usedPrivilege?: string[]; 
  public get usedPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('used_privilege'));
  }
  public set usedPrivilege(value: string[]) {
    this._usedPrivilege = value;
  }
  public resetUsedPrivilege() {
    this._usedPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedPrivilegeInput() {
    return this._usedPrivilege;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_included_authz_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedAuthzUserGroupDn),
      all_included_response_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedResponseControl),
      all_included_result_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedResultCriteria),
      any_included_authz_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedAuthzUserGroupDn),
      any_included_response_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedResponseControl),
      any_included_result_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedResultCriteria),
      assurance_behavior_altered_by_control: cdktf.stringToTerraform(this._assuranceBehaviorAlteredByControl),
      assurance_satisfied: cdktf.stringToTerraform(this._assuranceSatisfied),
      assurance_timeout_criteria: cdktf.stringToTerraform(this._assuranceTimeoutCriteria),
      assurance_timeout_value: cdktf.stringToTerraform(this._assuranceTimeoutValue),
      description: cdktf.stringToTerraform(this._description),
      excluded_authz_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedAuthzUserBaseDn),
      excluded_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUserBaseDn),
      excluded_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUserFilter),
      excluded_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUserGroupDn),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      include_anonymous_binds: cdktf.booleanToTerraform(this._includeAnonymousBinds),
      included_authz_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedAuthzUserBaseDn),
      included_user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUserBaseDn),
      included_user_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUserFilter),
      included_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUserGroupDn),
      local_assurance_level: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localAssuranceLevel),
      missing_any_privilege: cdktf.stringToTerraform(this._missingAnyPrivilege),
      missing_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._missingPrivilege),
      name: cdktf.stringToTerraform(this._name),
      none_included_authz_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedAuthzUserGroupDn),
      none_included_response_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedResponseControl),
      none_included_result_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedResultCriteria),
      not_all_included_authz_user_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedAuthzUserGroupDn),
      not_all_included_response_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedResponseControl),
      not_all_included_result_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedResultCriteria),
      processing_time_criteria: cdktf.stringToTerraform(this._processingTimeCriteria),
      processing_time_value: cdktf.stringToTerraform(this._processingTimeValue),
      queue_time_criteria: cdktf.stringToTerraform(this._queueTimeCriteria),
      queue_time_value: cdktf.stringToTerraform(this._queueTimeValue),
      referral_returned: cdktf.stringToTerraform(this._referralReturned),
      remote_assurance_level: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteAssuranceLevel),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      response_delayed_by_assurance: cdktf.stringToTerraform(this._responseDelayedByAssurance),
      result_code_criteria: cdktf.stringToTerraform(this._resultCodeCriteria),
      result_code_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resultCodeValue),
      retired_password_used_for_bind: cdktf.stringToTerraform(this._retiredPasswordUsedForBind),
      search_entry_returned_count: cdktf.numberToTerraform(this._searchEntryReturnedCount),
      search_entry_returned_criteria: cdktf.stringToTerraform(this._searchEntryReturnedCriteria),
      search_indexed_criteria: cdktf.stringToTerraform(this._searchIndexedCriteria),
      search_reference_returned_count: cdktf.numberToTerraform(this._searchReferenceReturnedCount),
      search_reference_returned_criteria: cdktf.stringToTerraform(this._searchReferenceReturnedCriteria),
      type: cdktf.stringToTerraform(this._type),
      used_alternate_authzid: cdktf.stringToTerraform(this._usedAlternateAuthzid),
      used_any_privilege: cdktf.stringToTerraform(this._usedAnyPrivilege),
      used_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usedPrivilege),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_authz_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedAuthzUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_response_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedResponseControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_result_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedResultCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_authz_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedAuthzUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_response_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedResponseControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_result_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedResultCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      assurance_behavior_altered_by_control: {
        value: cdktf.stringToHclTerraform(this._assuranceBehaviorAlteredByControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assurance_satisfied: {
        value: cdktf.stringToHclTerraform(this._assuranceSatisfied),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assurance_timeout_criteria: {
        value: cdktf.stringToHclTerraform(this._assuranceTimeoutCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assurance_timeout_value: {
        value: cdktf.stringToHclTerraform(this._assuranceTimeoutValue),
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
      excluded_authz_user_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedAuthzUserBaseDn),
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
      excluded_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedUserGroupDn),
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
      include_anonymous_binds: {
        value: cdktf.booleanToHclTerraform(this._includeAnonymousBinds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      included_authz_user_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedAuthzUserBaseDn),
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
      included_user_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedUserFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_assurance_level: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localAssuranceLevel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      missing_any_privilege: {
        value: cdktf.stringToHclTerraform(this._missingAnyPrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missing_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._missingPrivilege),
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
      none_included_authz_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedAuthzUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_response_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedResponseControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_result_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedResultCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_authz_user_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedAuthzUserGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_response_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedResponseControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_result_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedResultCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      processing_time_criteria: {
        value: cdktf.stringToHclTerraform(this._processingTimeCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processing_time_value: {
        value: cdktf.stringToHclTerraform(this._processingTimeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_time_criteria: {
        value: cdktf.stringToHclTerraform(this._queueTimeCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_time_value: {
        value: cdktf.stringToHclTerraform(this._queueTimeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referral_returned: {
        value: cdktf.stringToHclTerraform(this._referralReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_assurance_level: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteAssuranceLevel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_delayed_by_assurance: {
        value: cdktf.stringToHclTerraform(this._responseDelayedByAssurance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_code_criteria: {
        value: cdktf.stringToHclTerraform(this._resultCodeCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_code_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resultCodeValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retired_password_used_for_bind: {
        value: cdktf.stringToHclTerraform(this._retiredPasswordUsedForBind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_entry_returned_count: {
        value: cdktf.numberToHclTerraform(this._searchEntryReturnedCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_entry_returned_criteria: {
        value: cdktf.stringToHclTerraform(this._searchEntryReturnedCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_indexed_criteria: {
        value: cdktf.stringToHclTerraform(this._searchIndexedCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_reference_returned_count: {
        value: cdktf.numberToHclTerraform(this._searchReferenceReturnedCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_reference_returned_criteria: {
        value: cdktf.stringToHclTerraform(this._searchReferenceReturnedCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_alternate_authzid: {
        value: cdktf.stringToHclTerraform(this._usedAlternateAuthzid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_any_privilege: {
        value: cdktf.stringToHclTerraform(this._usedAnyPrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usedPrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
