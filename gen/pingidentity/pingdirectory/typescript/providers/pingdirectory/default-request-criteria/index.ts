// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultRequestCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the OID of a control that must be present in the request from the client for operations included in this Simple Request Criteria. If any control OIDs are provided, then the request must contain all of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#all_included_request_control DefaultRequestCriteria#all_included_request_control}
  */
  readonly allIncludedRequestControl?: string[];
  /**
  * Specifies a request criteria object that must match the associated operation request in order to match the aggregate request criteria. If one or more all-included request criteria objects are provided, then an operation request must match all of them in order to match the aggregate request criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#all_included_request_criteria DefaultRequestCriteria#all_included_request_criteria}
  */
  readonly allIncludedRequestCriteria?: string[];
  /**
  * Specifies a search filter that must match the target entry for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any filters are provided, then the target entry must match all of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#all_included_target_entry_filter DefaultRequestCriteria#all_included_target_entry_filter}
  */
  readonly allIncludedTargetEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the target entry must be a member for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any group DNs are provided, then the target entry must be a member of all of those groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#all_included_target_entry_group_dn DefaultRequestCriteria#all_included_target_entry_group_dn}
  */
  readonly allIncludedTargetEntryGroupDn?: string[];
  /**
  * Specifies the OID of a control that may be present in the request from the client for operations included in this Simple Request Criteria. If any control OIDs are provided, then the request must contain at least one of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#any_included_request_control DefaultRequestCriteria#any_included_request_control}
  */
  readonly anyIncludedRequestControl?: string[];
  /**
  * Specifies a request criteria object that may match the associated operation request in order to the this aggregate request criteria. If one or more any-included request criteria objects are provided, then an operation request must match at least one of them in order to match the aggregate request criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#any_included_request_criteria DefaultRequestCriteria#any_included_request_criteria}
  */
  readonly anyIncludedRequestCriteria?: string[];
  /**
  * Specifies a search filter that may match the target entry for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any filters are provided, then the target entry must match at least one of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#any_included_target_entry_filter DefaultRequestCriteria#any_included_target_entry_filter}
  */
  readonly anyIncludedTargetEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the target entry may be a member for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any group DNs are provided, then the target entry must be a member of at least one of those groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#any_included_target_entry_group_dn DefaultRequestCriteria#any_included_target_entry_group_dn}
  */
  readonly anyIncludedTargetEntryGroupDn?: string[];
  /**
  * Specifies a connection criteria object that must match the associated client connection for operations included in this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#connection_criteria DefaultRequestCriteria#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * A description for this Request Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#description DefaultRequestCriteria#description}
  */
  readonly description?: string;
  /**
  * Specifies an application name for requests excluded from this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#excluded_application_name DefaultRequestCriteria#excluded_application_name}
  */
  readonly excludedApplicationName?: string[];
  /**
  * Specifies the request OID for extended requests excluded from this Simple Request Criteria. This will only be taken into account for extended requests and will be ignored for all other types of requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#excluded_extended_operation_oid DefaultRequestCriteria#excluded_extended_operation_oid}
  */
  readonly excludedExtendedOperationOid?: string[];
  /**
  * Specifies the name or OID of an attribute type which must not be targeted by requests included in this Simple Request Criteria. This will only be taken into account for add, compare, modify, modify DN, and search operations. It will be ignored for abandon, bind, delete, extended, and unbind operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#excluded_target_attribute DefaultRequestCriteria#excluded_target_attribute}
  */
  readonly excludedTargetAttribute?: string[];
  /**
  * Specifies a base DN below which targeted entries may not exist for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#excluded_target_entry_dn DefaultRequestCriteria#excluded_target_entry_dn}
  */
  readonly excludedTargetEntryDn?: string[];
  /**
  * Specifies the name of a SASL mechanism for bind requests excluded from this Simple Request Criteria. This will only be taken into account for SASL bind operations and will be ignored for other types of operations and for bind operations that do not use SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#excluded_target_sasl_mechanism DefaultRequestCriteria#excluded_target_sasl_mechanism}
  */
  readonly excludedTargetSaslMechanism?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Request Criteria. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#extension_argument DefaultRequestCriteria#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#extension_class DefaultRequestCriteria#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies an application name for requests included in this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_application_name DefaultRequestCriteria#included_application_name}
  */
  readonly includedApplicationName?: string[];
  /**
  * Specifies the request OID for extended requests included in this Simple Request Criteria. This will only be taken into account for extended requests and will be ignored for all other types of requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_extended_operation_oid DefaultRequestCriteria#included_extended_operation_oid}
  */
  readonly includedExtendedOperationOid?: string[];
  /**
  * Specifies the search scope values included in this Simple Request Criteria. This will only be taken into account for search requests and will be ignored for all other types of requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_search_scope DefaultRequestCriteria#included_search_scope}
  */
  readonly includedSearchScope?: string[];
  /**
  * Specifies the name or OID of an attribute type which must be targeted by requests included in this Simple Request Criteria. This will only be taken into account for add, compare, modify, modify DN, and search operations. It will be ignored for abandon, bind, delete, extended, and unbind operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_target_attribute DefaultRequestCriteria#included_target_attribute}
  */
  readonly includedTargetAttribute?: string[];
  /**
  * Specifies a base DN below which targeted entries may exist for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_target_entry_dn DefaultRequestCriteria#included_target_entry_dn}
  */
  readonly includedTargetEntryDn?: string[];
  /**
  * Specifies the name of a SASL mechanism for bind requests included in this Simple Request Criteria. This will only be taken into account for SASL bind operations and will be ignored for other types of operations and for bind operations that do not use SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#included_target_sasl_mechanism DefaultRequestCriteria#included_target_sasl_mechanism}
  */
  readonly includedTargetSaslMechanism?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#name DefaultRequestCriteria#name}
  */
  readonly name: string;
  /**
  * Specifies the OID of a control that must not be present in the request from the client for operations included in this Simple Request Criteria. If any control OIDs are provided, then the request must not contain any of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#none_included_request_control DefaultRequestCriteria#none_included_request_control}
  */
  readonly noneIncludedRequestControl?: string[];
  /**
  * Specifies a request criteria object that must not match the associated operation request in order to match the aggregate request criteria. If one or more none-included request criteria objects are provided, then an operation request must not match any of them in order to match the aggregate request criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#none_included_request_criteria DefaultRequestCriteria#none_included_request_criteria}
  */
  readonly noneIncludedRequestCriteria?: string[];
  /**
  * Specifies a search filter that must not match the target entry for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any filters are provided, then the target entry must not match any of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#none_included_target_entry_filter DefaultRequestCriteria#none_included_target_entry_filter}
  */
  readonly noneIncludedTargetEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the target entry must not be a member for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any group DNs are provided, then the target entry must not be a member of any of those groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#none_included_target_entry_group_dn DefaultRequestCriteria#none_included_target_entry_group_dn}
  */
  readonly noneIncludedTargetEntryGroupDn?: string[];
  /**
  * Specifies the OID of a control that should not be present in the request from the client for operations included in this Simple Request Criteria. If any control OIDs are provided, then the request must not contain at least one of those controls (that is, the request may contain zero or more of those controls, but not all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#not_all_included_request_control DefaultRequestCriteria#not_all_included_request_control}
  */
  readonly notAllIncludedRequestControl?: string[];
  /**
  * Specifies a request criteria object that should not match the associated operation request in order to match the aggregate request criteria. If one or more not-all-included request criteria objects are provided, then an operation request must not match all of them (that is, it may match zero or more of them, but it must not match all of them) in order to match the aggregate request criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#not_all_included_request_criteria DefaultRequestCriteria#not_all_included_request_criteria}
  */
  readonly notAllIncludedRequestCriteria?: string[];
  /**
  * Specifies a search filter that should not match the target entry for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any filters are provided, then the target entry must not match at least one of those filters (that is, the request may match zero or more of those filters, but not of all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#not_all_included_target_entry_filter DefaultRequestCriteria#not_all_included_target_entry_filter}
  */
  readonly notAllIncludedTargetEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the target entry should not be a member for requests included in this Simple Request Criteria. This will only be taken into account for add, simple bind, compare, delete, modify, modify DN, and search operations. It will be ignored for abandon, SASL bind, extended, and unbind operations. If any group DNs are provided, then the target entry must not be a member of at least one of those groups (that is, the target entry may be a member of zero or more of those groups, but not all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#not_all_included_target_entry_group_dn DefaultRequestCriteria#not_all_included_target_entry_group_dn}
  */
  readonly notAllIncludedTargetEntryGroupDn?: string[];
  /**
  * Specifies the origin for operations to be included in this Simple Request Criteria. If no values are provided, then the operation origin will not be taken into consideration when determining whether an operation matches this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#operation_origin DefaultRequestCriteria#operation_origin}
  */
  readonly operationOrigin?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `root-dse`: The types of operations that may be matched by this Root DSE Request Criteria.
  *   - `simple`: Specifies the operation type(s) for operations that should be included in this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#operation_type DefaultRequestCriteria#operation_type}
  */
  readonly operationType?: string[];
  /**
  * Specifies the authentication type for bind requests included in this Simple Request Criteria. This will only be taken into account for bind operations and will be ignored for any other type of operation. If no values are provided, then the authentication type will not be considered when determining whether the request should be included in this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#target_bind_type DefaultRequestCriteria#target_bind_type}
  */
  readonly targetBindType?: string[];
  /**
  * Indicates whether operations being processed using a dedicated administrative session worker thread should be included in this Simple Request Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#using_administrative_session_worker_thread DefaultRequestCriteria#using_administrative_session_worker_thread}
  */
  readonly usingAdministrativeSessionWorkerThread?: string;
}
export interface DefaultRequestCriteriaRequiredActions {
}

export function defaultRequestCriteriaRequiredActionsToTerraform(struct?: DefaultRequestCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultRequestCriteriaRequiredActionsToHclTerraform(struct?: DefaultRequestCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultRequestCriteriaRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultRequestCriteriaRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultRequestCriteriaRequiredActions | undefined) {
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

export class DefaultRequestCriteriaRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultRequestCriteriaRequiredActionsOutputReference {
    return new DefaultRequestCriteriaRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria pingdirectory_default_request_criteria}
*/
export class DefaultRequestCriteria extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_request_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultRequestCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultRequestCriteria to import
  * @param importFromId The id of the existing DefaultRequestCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultRequestCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_request_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_request_criteria pingdirectory_default_request_criteria} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultRequestCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultRequestCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_request_criteria',
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
    this._allIncludedRequestControl = config.allIncludedRequestControl;
    this._allIncludedRequestCriteria = config.allIncludedRequestCriteria;
    this._allIncludedTargetEntryFilter = config.allIncludedTargetEntryFilter;
    this._allIncludedTargetEntryGroupDn = config.allIncludedTargetEntryGroupDn;
    this._anyIncludedRequestControl = config.anyIncludedRequestControl;
    this._anyIncludedRequestCriteria = config.anyIncludedRequestCriteria;
    this._anyIncludedTargetEntryFilter = config.anyIncludedTargetEntryFilter;
    this._anyIncludedTargetEntryGroupDn = config.anyIncludedTargetEntryGroupDn;
    this._connectionCriteria = config.connectionCriteria;
    this._description = config.description;
    this._excludedApplicationName = config.excludedApplicationName;
    this._excludedExtendedOperationOid = config.excludedExtendedOperationOid;
    this._excludedTargetAttribute = config.excludedTargetAttribute;
    this._excludedTargetEntryDn = config.excludedTargetEntryDn;
    this._excludedTargetSaslMechanism = config.excludedTargetSaslMechanism;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._includedApplicationName = config.includedApplicationName;
    this._includedExtendedOperationOid = config.includedExtendedOperationOid;
    this._includedSearchScope = config.includedSearchScope;
    this._includedTargetAttribute = config.includedTargetAttribute;
    this._includedTargetEntryDn = config.includedTargetEntryDn;
    this._includedTargetSaslMechanism = config.includedTargetSaslMechanism;
    this._name = config.name;
    this._noneIncludedRequestControl = config.noneIncludedRequestControl;
    this._noneIncludedRequestCriteria = config.noneIncludedRequestCriteria;
    this._noneIncludedTargetEntryFilter = config.noneIncludedTargetEntryFilter;
    this._noneIncludedTargetEntryGroupDn = config.noneIncludedTargetEntryGroupDn;
    this._notAllIncludedRequestControl = config.notAllIncludedRequestControl;
    this._notAllIncludedRequestCriteria = config.notAllIncludedRequestCriteria;
    this._notAllIncludedTargetEntryFilter = config.notAllIncludedTargetEntryFilter;
    this._notAllIncludedTargetEntryGroupDn = config.notAllIncludedTargetEntryGroupDn;
    this._operationOrigin = config.operationOrigin;
    this._operationType = config.operationType;
    this._targetBindType = config.targetBindType;
    this._usingAdministrativeSessionWorkerThread = config.usingAdministrativeSessionWorkerThread;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_request_control - computed: true, optional: true, required: false
  private _allIncludedRequestControl?: string[]; 
  public get allIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_request_control'));
  }
  public set allIncludedRequestControl(value: string[]) {
    this._allIncludedRequestControl = value;
  }
  public resetAllIncludedRequestControl() {
    this._allIncludedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedRequestControlInput() {
    return this._allIncludedRequestControl;
  }

  // all_included_request_criteria - computed: true, optional: true, required: false
  private _allIncludedRequestCriteria?: string[]; 
  public get allIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_request_criteria'));
  }
  public set allIncludedRequestCriteria(value: string[]) {
    this._allIncludedRequestCriteria = value;
  }
  public resetAllIncludedRequestCriteria() {
    this._allIncludedRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedRequestCriteriaInput() {
    return this._allIncludedRequestCriteria;
  }

  // all_included_target_entry_filter - computed: true, optional: true, required: false
  private _allIncludedTargetEntryFilter?: string[]; 
  public get allIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_target_entry_filter'));
  }
  public set allIncludedTargetEntryFilter(value: string[]) {
    this._allIncludedTargetEntryFilter = value;
  }
  public resetAllIncludedTargetEntryFilter() {
    this._allIncludedTargetEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedTargetEntryFilterInput() {
    return this._allIncludedTargetEntryFilter;
  }

  // all_included_target_entry_group_dn - computed: true, optional: true, required: false
  private _allIncludedTargetEntryGroupDn?: string[]; 
  public get allIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_target_entry_group_dn'));
  }
  public set allIncludedTargetEntryGroupDn(value: string[]) {
    this._allIncludedTargetEntryGroupDn = value;
  }
  public resetAllIncludedTargetEntryGroupDn() {
    this._allIncludedTargetEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedTargetEntryGroupDnInput() {
    return this._allIncludedTargetEntryGroupDn;
  }

  // any_included_request_control - computed: true, optional: true, required: false
  private _anyIncludedRequestControl?: string[]; 
  public get anyIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_request_control'));
  }
  public set anyIncludedRequestControl(value: string[]) {
    this._anyIncludedRequestControl = value;
  }
  public resetAnyIncludedRequestControl() {
    this._anyIncludedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedRequestControlInput() {
    return this._anyIncludedRequestControl;
  }

  // any_included_request_criteria - computed: true, optional: true, required: false
  private _anyIncludedRequestCriteria?: string[]; 
  public get anyIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_request_criteria'));
  }
  public set anyIncludedRequestCriteria(value: string[]) {
    this._anyIncludedRequestCriteria = value;
  }
  public resetAnyIncludedRequestCriteria() {
    this._anyIncludedRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedRequestCriteriaInput() {
    return this._anyIncludedRequestCriteria;
  }

  // any_included_target_entry_filter - computed: true, optional: true, required: false
  private _anyIncludedTargetEntryFilter?: string[]; 
  public get anyIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_target_entry_filter'));
  }
  public set anyIncludedTargetEntryFilter(value: string[]) {
    this._anyIncludedTargetEntryFilter = value;
  }
  public resetAnyIncludedTargetEntryFilter() {
    this._anyIncludedTargetEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedTargetEntryFilterInput() {
    return this._anyIncludedTargetEntryFilter;
  }

  // any_included_target_entry_group_dn - computed: true, optional: true, required: false
  private _anyIncludedTargetEntryGroupDn?: string[]; 
  public get anyIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_target_entry_group_dn'));
  }
  public set anyIncludedTargetEntryGroupDn(value: string[]) {
    this._anyIncludedTargetEntryGroupDn = value;
  }
  public resetAnyIncludedTargetEntryGroupDn() {
    this._anyIncludedTargetEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedTargetEntryGroupDnInput() {
    return this._anyIncludedTargetEntryGroupDn;
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

  // excluded_application_name - computed: true, optional: true, required: false
  private _excludedApplicationName?: string[]; 
  public get excludedApplicationName() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_application_name'));
  }
  public set excludedApplicationName(value: string[]) {
    this._excludedApplicationName = value;
  }
  public resetExcludedApplicationName() {
    this._excludedApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedApplicationNameInput() {
    return this._excludedApplicationName;
  }

  // excluded_extended_operation_oid - computed: true, optional: true, required: false
  private _excludedExtendedOperationOid?: string[]; 
  public get excludedExtendedOperationOid() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_extended_operation_oid'));
  }
  public set excludedExtendedOperationOid(value: string[]) {
    this._excludedExtendedOperationOid = value;
  }
  public resetExcludedExtendedOperationOid() {
    this._excludedExtendedOperationOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedExtendedOperationOidInput() {
    return this._excludedExtendedOperationOid;
  }

  // excluded_target_attribute - computed: true, optional: true, required: false
  private _excludedTargetAttribute?: string[]; 
  public get excludedTargetAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_attribute'));
  }
  public set excludedTargetAttribute(value: string[]) {
    this._excludedTargetAttribute = value;
  }
  public resetExcludedTargetAttribute() {
    this._excludedTargetAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTargetAttributeInput() {
    return this._excludedTargetAttribute;
  }

  // excluded_target_entry_dn - computed: true, optional: true, required: false
  private _excludedTargetEntryDn?: string[]; 
  public get excludedTargetEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_entry_dn'));
  }
  public set excludedTargetEntryDn(value: string[]) {
    this._excludedTargetEntryDn = value;
  }
  public resetExcludedTargetEntryDn() {
    this._excludedTargetEntryDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTargetEntryDnInput() {
    return this._excludedTargetEntryDn;
  }

  // excluded_target_sasl_mechanism - computed: true, optional: true, required: false
  private _excludedTargetSaslMechanism?: string[]; 
  public get excludedTargetSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_sasl_mechanism'));
  }
  public set excludedTargetSaslMechanism(value: string[]) {
    this._excludedTargetSaslMechanism = value;
  }
  public resetExcludedTargetSaslMechanism() {
    this._excludedTargetSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTargetSaslMechanismInput() {
    return this._excludedTargetSaslMechanism;
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

  // included_application_name - computed: true, optional: true, required: false
  private _includedApplicationName?: string[]; 
  public get includedApplicationName() {
    return cdktf.Fn.tolist(this.getListAttribute('included_application_name'));
  }
  public set includedApplicationName(value: string[]) {
    this._includedApplicationName = value;
  }
  public resetIncludedApplicationName() {
    this._includedApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedApplicationNameInput() {
    return this._includedApplicationName;
  }

  // included_extended_operation_oid - computed: true, optional: true, required: false
  private _includedExtendedOperationOid?: string[]; 
  public get includedExtendedOperationOid() {
    return cdktf.Fn.tolist(this.getListAttribute('included_extended_operation_oid'));
  }
  public set includedExtendedOperationOid(value: string[]) {
    this._includedExtendedOperationOid = value;
  }
  public resetIncludedExtendedOperationOid() {
    this._includedExtendedOperationOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedExtendedOperationOidInput() {
    return this._includedExtendedOperationOid;
  }

  // included_search_scope - computed: true, optional: true, required: false
  private _includedSearchScope?: string[]; 
  public get includedSearchScope() {
    return cdktf.Fn.tolist(this.getListAttribute('included_search_scope'));
  }
  public set includedSearchScope(value: string[]) {
    this._includedSearchScope = value;
  }
  public resetIncludedSearchScope() {
    this._includedSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedSearchScopeInput() {
    return this._includedSearchScope;
  }

  // included_target_attribute - computed: true, optional: true, required: false
  private _includedTargetAttribute?: string[]; 
  public get includedTargetAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_attribute'));
  }
  public set includedTargetAttribute(value: string[]) {
    this._includedTargetAttribute = value;
  }
  public resetIncludedTargetAttribute() {
    this._includedTargetAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTargetAttributeInput() {
    return this._includedTargetAttribute;
  }

  // included_target_entry_dn - computed: true, optional: true, required: false
  private _includedTargetEntryDn?: string[]; 
  public get includedTargetEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_entry_dn'));
  }
  public set includedTargetEntryDn(value: string[]) {
    this._includedTargetEntryDn = value;
  }
  public resetIncludedTargetEntryDn() {
    this._includedTargetEntryDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTargetEntryDnInput() {
    return this._includedTargetEntryDn;
  }

  // included_target_sasl_mechanism - computed: true, optional: true, required: false
  private _includedTargetSaslMechanism?: string[]; 
  public get includedTargetSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_sasl_mechanism'));
  }
  public set includedTargetSaslMechanism(value: string[]) {
    this._includedTargetSaslMechanism = value;
  }
  public resetIncludedTargetSaslMechanism() {
    this._includedTargetSaslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTargetSaslMechanismInput() {
    return this._includedTargetSaslMechanism;
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

  // none_included_request_control - computed: true, optional: true, required: false
  private _noneIncludedRequestControl?: string[]; 
  public get noneIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_request_control'));
  }
  public set noneIncludedRequestControl(value: string[]) {
    this._noneIncludedRequestControl = value;
  }
  public resetNoneIncludedRequestControl() {
    this._noneIncludedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedRequestControlInput() {
    return this._noneIncludedRequestControl;
  }

  // none_included_request_criteria - computed: true, optional: true, required: false
  private _noneIncludedRequestCriteria?: string[]; 
  public get noneIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_request_criteria'));
  }
  public set noneIncludedRequestCriteria(value: string[]) {
    this._noneIncludedRequestCriteria = value;
  }
  public resetNoneIncludedRequestCriteria() {
    this._noneIncludedRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedRequestCriteriaInput() {
    return this._noneIncludedRequestCriteria;
  }

  // none_included_target_entry_filter - computed: true, optional: true, required: false
  private _noneIncludedTargetEntryFilter?: string[]; 
  public get noneIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_target_entry_filter'));
  }
  public set noneIncludedTargetEntryFilter(value: string[]) {
    this._noneIncludedTargetEntryFilter = value;
  }
  public resetNoneIncludedTargetEntryFilter() {
    this._noneIncludedTargetEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedTargetEntryFilterInput() {
    return this._noneIncludedTargetEntryFilter;
  }

  // none_included_target_entry_group_dn - computed: true, optional: true, required: false
  private _noneIncludedTargetEntryGroupDn?: string[]; 
  public get noneIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_target_entry_group_dn'));
  }
  public set noneIncludedTargetEntryGroupDn(value: string[]) {
    this._noneIncludedTargetEntryGroupDn = value;
  }
  public resetNoneIncludedTargetEntryGroupDn() {
    this._noneIncludedTargetEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedTargetEntryGroupDnInput() {
    return this._noneIncludedTargetEntryGroupDn;
  }

  // not_all_included_request_control - computed: true, optional: true, required: false
  private _notAllIncludedRequestControl?: string[]; 
  public get notAllIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_request_control'));
  }
  public set notAllIncludedRequestControl(value: string[]) {
    this._notAllIncludedRequestControl = value;
  }
  public resetNotAllIncludedRequestControl() {
    this._notAllIncludedRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedRequestControlInput() {
    return this._notAllIncludedRequestControl;
  }

  // not_all_included_request_criteria - computed: true, optional: true, required: false
  private _notAllIncludedRequestCriteria?: string[]; 
  public get notAllIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_request_criteria'));
  }
  public set notAllIncludedRequestCriteria(value: string[]) {
    this._notAllIncludedRequestCriteria = value;
  }
  public resetNotAllIncludedRequestCriteria() {
    this._notAllIncludedRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedRequestCriteriaInput() {
    return this._notAllIncludedRequestCriteria;
  }

  // not_all_included_target_entry_filter - computed: true, optional: true, required: false
  private _notAllIncludedTargetEntryFilter?: string[]; 
  public get notAllIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_target_entry_filter'));
  }
  public set notAllIncludedTargetEntryFilter(value: string[]) {
    this._notAllIncludedTargetEntryFilter = value;
  }
  public resetNotAllIncludedTargetEntryFilter() {
    this._notAllIncludedTargetEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedTargetEntryFilterInput() {
    return this._notAllIncludedTargetEntryFilter;
  }

  // not_all_included_target_entry_group_dn - computed: true, optional: true, required: false
  private _notAllIncludedTargetEntryGroupDn?: string[]; 
  public get notAllIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_target_entry_group_dn'));
  }
  public set notAllIncludedTargetEntryGroupDn(value: string[]) {
    this._notAllIncludedTargetEntryGroupDn = value;
  }
  public resetNotAllIncludedTargetEntryGroupDn() {
    this._notAllIncludedTargetEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedTargetEntryGroupDnInput() {
    return this._notAllIncludedTargetEntryGroupDn;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // operation_origin - computed: true, optional: true, required: false
  private _operationOrigin?: string[]; 
  public get operationOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_origin'));
  }
  public set operationOrigin(value: string[]) {
    this._operationOrigin = value;
  }
  public resetOperationOrigin() {
    this._operationOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationOriginInput() {
    return this._operationOrigin;
  }

  // operation_type - computed: true, optional: true, required: false
  private _operationType?: string[]; 
  public get operationType() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_type'));
  }
  public set operationType(value: string[]) {
    this._operationType = value;
  }
  public resetOperationType() {
    this._operationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultRequestCriteriaRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // target_bind_type - computed: true, optional: true, required: false
  private _targetBindType?: string[]; 
  public get targetBindType() {
    return cdktf.Fn.tolist(this.getListAttribute('target_bind_type'));
  }
  public set targetBindType(value: string[]) {
    this._targetBindType = value;
  }
  public resetTargetBindType() {
    this._targetBindType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBindTypeInput() {
    return this._targetBindType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // using_administrative_session_worker_thread - computed: true, optional: true, required: false
  private _usingAdministrativeSessionWorkerThread?: string; 
  public get usingAdministrativeSessionWorkerThread() {
    return this.getStringAttribute('using_administrative_session_worker_thread');
  }
  public set usingAdministrativeSessionWorkerThread(value: string) {
    this._usingAdministrativeSessionWorkerThread = value;
  }
  public resetUsingAdministrativeSessionWorkerThread() {
    this._usingAdministrativeSessionWorkerThread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingAdministrativeSessionWorkerThreadInput() {
    return this._usingAdministrativeSessionWorkerThread;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_included_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedRequestControl),
      all_included_request_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedRequestCriteria),
      all_included_target_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedTargetEntryFilter),
      all_included_target_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedTargetEntryGroupDn),
      any_included_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedRequestControl),
      any_included_request_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedRequestCriteria),
      any_included_target_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedTargetEntryFilter),
      any_included_target_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedTargetEntryGroupDn),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      description: cdktf.stringToTerraform(this._description),
      excluded_application_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedApplicationName),
      excluded_extended_operation_oid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedExtendedOperationOid),
      excluded_target_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedTargetAttribute),
      excluded_target_entry_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedTargetEntryDn),
      excluded_target_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedTargetSaslMechanism),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      included_application_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedApplicationName),
      included_extended_operation_oid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedExtendedOperationOid),
      included_search_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedSearchScope),
      included_target_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedTargetAttribute),
      included_target_entry_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedTargetEntryDn),
      included_target_sasl_mechanism: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedTargetSaslMechanism),
      name: cdktf.stringToTerraform(this._name),
      none_included_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedRequestControl),
      none_included_request_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedRequestCriteria),
      none_included_target_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedTargetEntryFilter),
      none_included_target_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedTargetEntryGroupDn),
      not_all_included_request_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedRequestControl),
      not_all_included_request_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedRequestCriteria),
      not_all_included_target_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedTargetEntryFilter),
      not_all_included_target_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedTargetEntryGroupDn),
      operation_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationOrigin),
      operation_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationType),
      target_bind_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetBindType),
      using_administrative_session_worker_thread: cdktf.stringToTerraform(this._usingAdministrativeSessionWorkerThread),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_request_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedRequestCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_target_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedTargetEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_target_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedTargetEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_request_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedRequestCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_target_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedTargetEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_target_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedTargetEntryGroupDn),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_application_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedApplicationName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_extended_operation_oid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedExtendedOperationOid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_target_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedTargetAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_target_entry_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedTargetEntryDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_target_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedTargetSaslMechanism),
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
      included_application_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedApplicationName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_extended_operation_oid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedExtendedOperationOid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_search_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedSearchScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_target_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedTargetAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_target_entry_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedTargetEntryDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_target_sasl_mechanism: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedTargetSaslMechanism),
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
      none_included_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_request_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedRequestCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_target_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedTargetEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_target_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedTargetEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_request_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedRequestControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_request_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedRequestCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_target_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedTargetEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_target_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedTargetEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operation_origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationOrigin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operation_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_bind_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetBindType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      using_administrative_session_worker_thread: {
        value: cdktf.stringToHclTerraform(this._usingAdministrativeSessionWorkerThread),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
