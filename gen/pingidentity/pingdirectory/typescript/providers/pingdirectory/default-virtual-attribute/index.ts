// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVirtualAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the server should allow creating or altering this virtual attribute definition even if it conflicts with one or more indexes defined in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#allow_index_conflicts DefaultVirtualAttribute#allow_index_conflicts}
  */
  readonly allowIndexConflicts?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to handle requests that request all values for the virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#allow_retrieving_membership DefaultVirtualAttribute#allow_retrieving_membership}
  */
  readonly allowRetrievingMembership?: boolean | cdktf.IResolvable;
  /**
  * Specifies the attribute type for the attribute whose values are to be dynamically assigned by the virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#attribute_type DefaultVirtualAttribute#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * Specifies the base DNs for the branches containing entries that are eligible to use this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#base_dn DefaultVirtualAttribute#base_dn}
  */
  readonly baseDn?: string[];
  /**
  * Indicates whether searches performed by this virtual attribute provider should be exempted from access control restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#bypass_access_control_for_searches DefaultVirtualAttribute#bypass_access_control_for_searches}
  */
  readonly bypassAccessControlForSearches?: boolean | cdktf.IResolvable;
  /**
  * Specifies a set of client connection policies for which this Virtual Attribute should be generated. If this is undefined, then this Virtual Attribute will always be generated. If it is associated with one or more client connection policies, then this Virtual Attribute will be generated only for operations requested by clients assigned to one of those client connection policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#client_connection_policy DefaultVirtualAttribute#client_connection_policy}
  */
  readonly clientConnectionPolicy?: string[];
  /**
  * Specifies the behavior that the server is to exhibit for entries that already contain one or more real values for the associated attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#conflict_behavior DefaultVirtualAttribute#conflict_behavior}
  */
  readonly conflictBehavior?: string;
  /**
  * A description for this Virtual Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#description DefaultVirtualAttribute#description}
  */
  readonly description?: string;
  /**
  * Specifies whether to only include groups in which the user is directly associated with and the membership maybe modified via the group entry. Groups in which the user's membership is derived dynamically or through nested groups will not be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#direct_memberships_only DefaultVirtualAttribute#direct_memberships_only}
  */
  readonly directMembershipsOnly?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Virtual Attribute is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#enabled DefaultVirtualAttribute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether all operational attributes should be excluded from the generated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#exclude_operational_attributes DefaultVirtualAttribute#exclude_operational_attributes}
  */
  readonly excludeOperationalAttributes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the attributes that should be excluded from the checksum calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#excluded_attribute DefaultVirtualAttribute#excluded_attribute}
  */
  readonly excludedAttribute?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Virtual Attribute. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#extension_argument DefaultVirtualAttribute#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Virtual Attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#extension_class DefaultVirtualAttribute#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the search filters to be applied against entries to determine if the virtual attribute is to be generated for those entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#filter DefaultVirtualAttribute#filter}
  */
  readonly filter?: string[];
  /**
  * Specifies the DNs of the groups whose members can be eligible to use this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#group_dn DefaultVirtualAttribute#group_dn}
  */
  readonly groupDn?: string[];
  /**
  * Indicates whether the current time includes millisecond precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#include_milliseconds DefaultVirtualAttribute#include_milliseconds}
  */
  readonly includeMilliseconds?: boolean | cdktf.IResolvable;
  /**
  * A search filter that will be used to identify which groups should be included in the values of the virtual attribute. With no value defined (which is the default behavior), all groups that contain the target user will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#included_group_filter DefaultVirtualAttribute#included_group_filter}
  */
  readonly includedGroupFilter?: string;
  /**
  * An optional set of the names of the attributes to include with joined entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_attribute DefaultVirtualAttribute#join_attribute}
  */
  readonly joinAttribute?: string[];
  /**
  * Specifies how server should determine the base DN for the internal searches used to identify joined entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_base_dn_type DefaultVirtualAttribute#join_base_dn_type}
  */
  readonly joinBaseDnType?: string;
  /**
  * The fixed, administrator-specified base DN for the internal searches used to identify joined entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_custom_base_dn DefaultVirtualAttribute#join_custom_base_dn}
  */
  readonly joinCustomBaseDn?: string;
  /**
  * When the `type` attribute is set to:
  *   - `reverse-dn-join`: The attribute in related entries whose set of values must contain the DN of the search result entry to be joined with that entry.
  *   - `dn-join`: The attribute whose values are the DNs of the entries to be joined with the search result entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_dn_attribute DefaultVirtualAttribute#join_dn_attribute}
  */
  readonly joinDnAttribute?: string;
  /**
  * An optional filter that specifies additional criteria for identifying joined entries. If a join-filter value is specified, then only entries matching that filter (in addition to satisfying the other join criteria) will be joined with the search result entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_filter DefaultVirtualAttribute#join_filter}
  */
  readonly joinFilter?: string;
  /**
  * Indicates whether joined entries will be required to have all values for the source attribute, or only at least one of its values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_match_all DefaultVirtualAttribute#join_match_all}
  */
  readonly joinMatchAll?: boolean | cdktf.IResolvable;
  /**
  * The scope for searches used to identify joined entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_scope DefaultVirtualAttribute#join_scope}
  */
  readonly joinScope?: string;
  /**
  * The maximum number of entries that may be joined with the source entry, which also corresponds to the maximum number of values that the virtual attribute provider will generate for an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_size_limit DefaultVirtualAttribute#join_size_limit}
  */
  readonly joinSizeLimit?: number;
  /**
  * The attribute containing the value(s) in the source entry to use to identify related entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_source_attribute DefaultVirtualAttribute#join_source_attribute}
  */
  readonly joinSourceAttribute?: string;
  /**
  * The attribute in target entries whose value(s) match values of the source attribute in the source entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#join_target_attribute DefaultVirtualAttribute#join_target_attribute}
  */
  readonly joinTargetAttribute?: string;
  /**
  * Specifies the order in which virtual attribute definitions for the same attribute type will be evaluated when generating values for an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#multiple_virtual_attribute_evaluation_order_index DefaultVirtualAttribute#multiple_virtual_attribute_evaluation_order_index}
  */
  readonly multipleVirtualAttributeEvaluationOrderIndex?: number;
  /**
  * Specifies the behavior that will be exhibited for cases in which multiple virtual attribute definitions apply to the same multivalued attribute type. This will be ignored for single-valued attribute types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#multiple_virtual_attribute_merge_behavior DefaultVirtualAttribute#multiple_virtual_attribute_merge_behavior}
  */
  readonly multipleVirtualAttributeMergeBehavior?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#name DefaultVirtualAttribute#name}
  */
  readonly name: string;
  /**
  * The base DN that will be used when searching for references to the target entry. If no reference search base DN is specified, the default behavior will be to search below all public naming contexts configured in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#reference_search_base_dn DefaultVirtualAttribute#reference_search_base_dn}
  */
  readonly referenceSearchBaseDn?: string[];
  /**
  * The name or OID of an attribute type whose values will be searched for references to the target entry. The attribute type must be defined in the server schema, must have a syntax of either "distinguished name" or "name and optional UID", and must be indexed for equality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#referenced_by_attribute DefaultVirtualAttribute#referenced_by_attribute}
  */
  readonly referencedByAttribute?: string[];
  /**
  * Indicates whether attributes of this type must be explicitly included by name in the list of requested attributes. Note that this will only apply to virtual attributes which are associated with an attribute type that is operational. It will be ignored for virtual attributes associated with a non-operational attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#require_explicit_request_by_name DefaultVirtualAttribute#require_explicit_request_by_name}
  */
  readonly requireExplicitRequestByName?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to return current time in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#return_utc_time DefaultVirtualAttribute#return_utc_time}
  */
  readonly returnUtcTime?: boolean | cdktf.IResolvable;
  /**
  * Search filters that include Is Member Of Virtual Attribute searches on dynamic groups can be updated to include the dynamic group filter in the search filter itself. This can allow the backend to more efficiently process the search filter by using attribute indexes sooner in the search processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#rewrite_search_filters DefaultVirtualAttribute#rewrite_search_filters}
  */
  readonly rewriteSearchFilters?: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Virtual Attribute. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#script_argument DefaultVirtualAttribute#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Virtual Attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#script_class DefaultVirtualAttribute#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Specifies the name or OID of the attribute which contains the sequence number from which unique identifiers are generated. The attribute should have Integer syntax or a String syntax permitting integer values. If this property is modified then the filter property should be updated accordingly so that only entries containing the sequence number attribute are eligible to have a value generated for this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#sequence_number_attribute DefaultVirtualAttribute#sequence_number_attribute}
  */
  readonly sequenceNumberAttribute?: string;
  /**
  * Specifies the source attribute containing the values to use for this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#source_attribute DefaultVirtualAttribute#source_attribute}
  */
  readonly sourceAttribute?: string;
  /**
  * Specifies the attribute containing the DN of another entry from which to obtain the source attribute providing the values for this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#source_entry_dn_attribute DefaultVirtualAttribute#source_entry_dn_attribute}
  */
  readonly sourceEntryDnAttribute?: string;
  /**
  * Specifies a DN map that will be used to identify the entry from which to obtain the source attribute providing the values for this virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#source_entry_dn_map DefaultVirtualAttribute#source_entry_dn_map}
  */
  readonly sourceEntryDnMap?: string;
  /**
  * Specifies the values to be included in the virtual attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#value DefaultVirtualAttribute#value}
  */
  readonly value?: string[];
  /**
  * Specifies a pattern for constructing the virtual attribute value using fixed text and attribute values from the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#value_pattern DefaultVirtualAttribute#value_pattern}
  */
  readonly valuePattern?: string[];
}
export interface DefaultVirtualAttributeRequiredActions {
}

export function defaultVirtualAttributeRequiredActionsToTerraform(struct?: DefaultVirtualAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultVirtualAttributeRequiredActionsToHclTerraform(struct?: DefaultVirtualAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultVirtualAttributeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultVirtualAttributeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultVirtualAttributeRequiredActions | undefined) {
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

export class DefaultVirtualAttributeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultVirtualAttributeRequiredActionsOutputReference {
    return new DefaultVirtualAttributeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute pingdirectory_default_virtual_attribute}
*/
export class DefaultVirtualAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_virtual_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVirtualAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVirtualAttribute to import
  * @param importFromId The id of the existing DefaultVirtualAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVirtualAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_virtual_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_virtual_attribute pingdirectory_default_virtual_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVirtualAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultVirtualAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_virtual_attribute',
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
    this._allowIndexConflicts = config.allowIndexConflicts;
    this._allowRetrievingMembership = config.allowRetrievingMembership;
    this._attributeType = config.attributeType;
    this._baseDn = config.baseDn;
    this._bypassAccessControlForSearches = config.bypassAccessControlForSearches;
    this._clientConnectionPolicy = config.clientConnectionPolicy;
    this._conflictBehavior = config.conflictBehavior;
    this._description = config.description;
    this._directMembershipsOnly = config.directMembershipsOnly;
    this._enabled = config.enabled;
    this._excludeOperationalAttributes = config.excludeOperationalAttributes;
    this._excludedAttribute = config.excludedAttribute;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._filter = config.filter;
    this._groupDn = config.groupDn;
    this._includeMilliseconds = config.includeMilliseconds;
    this._includedGroupFilter = config.includedGroupFilter;
    this._joinAttribute = config.joinAttribute;
    this._joinBaseDnType = config.joinBaseDnType;
    this._joinCustomBaseDn = config.joinCustomBaseDn;
    this._joinDnAttribute = config.joinDnAttribute;
    this._joinFilter = config.joinFilter;
    this._joinMatchAll = config.joinMatchAll;
    this._joinScope = config.joinScope;
    this._joinSizeLimit = config.joinSizeLimit;
    this._joinSourceAttribute = config.joinSourceAttribute;
    this._joinTargetAttribute = config.joinTargetAttribute;
    this._multipleVirtualAttributeEvaluationOrderIndex = config.multipleVirtualAttributeEvaluationOrderIndex;
    this._multipleVirtualAttributeMergeBehavior = config.multipleVirtualAttributeMergeBehavior;
    this._name = config.name;
    this._referenceSearchBaseDn = config.referenceSearchBaseDn;
    this._referencedByAttribute = config.referencedByAttribute;
    this._requireExplicitRequestByName = config.requireExplicitRequestByName;
    this._returnUtcTime = config.returnUtcTime;
    this._rewriteSearchFilters = config.rewriteSearchFilters;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._sequenceNumberAttribute = config.sequenceNumberAttribute;
    this._sourceAttribute = config.sourceAttribute;
    this._sourceEntryDnAttribute = config.sourceEntryDnAttribute;
    this._sourceEntryDnMap = config.sourceEntryDnMap;
    this._value = config.value;
    this._valuePattern = config.valuePattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_index_conflicts - computed: true, optional: true, required: false
  private _allowIndexConflicts?: boolean | cdktf.IResolvable; 
  public get allowIndexConflicts() {
    return this.getBooleanAttribute('allow_index_conflicts');
  }
  public set allowIndexConflicts(value: boolean | cdktf.IResolvable) {
    this._allowIndexConflicts = value;
  }
  public resetAllowIndexConflicts() {
    this._allowIndexConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIndexConflictsInput() {
    return this._allowIndexConflicts;
  }

  // allow_retrieving_membership - computed: true, optional: true, required: false
  private _allowRetrievingMembership?: boolean | cdktf.IResolvable; 
  public get allowRetrievingMembership() {
    return this.getBooleanAttribute('allow_retrieving_membership');
  }
  public set allowRetrievingMembership(value: boolean | cdktf.IResolvable) {
    this._allowRetrievingMembership = value;
  }
  public resetAllowRetrievingMembership() {
    this._allowRetrievingMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRetrievingMembershipInput() {
    return this._allowRetrievingMembership;
  }

  // attribute_type - computed: true, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string[]; 
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }
  public set baseDn(value: string[]) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bypass_access_control_for_searches - computed: true, optional: true, required: false
  private _bypassAccessControlForSearches?: boolean | cdktf.IResolvable; 
  public get bypassAccessControlForSearches() {
    return this.getBooleanAttribute('bypass_access_control_for_searches');
  }
  public set bypassAccessControlForSearches(value: boolean | cdktf.IResolvable) {
    this._bypassAccessControlForSearches = value;
  }
  public resetBypassAccessControlForSearches() {
    this._bypassAccessControlForSearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAccessControlForSearchesInput() {
    return this._bypassAccessControlForSearches;
  }

  // client_connection_policy - computed: true, optional: true, required: false
  private _clientConnectionPolicy?: string[]; 
  public get clientConnectionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('client_connection_policy'));
  }
  public set clientConnectionPolicy(value: string[]) {
    this._clientConnectionPolicy = value;
  }
  public resetClientConnectionPolicy() {
    this._clientConnectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectionPolicyInput() {
    return this._clientConnectionPolicy;
  }

  // conflict_behavior - computed: true, optional: true, required: false
  private _conflictBehavior?: string; 
  public get conflictBehavior() {
    return this.getStringAttribute('conflict_behavior');
  }
  public set conflictBehavior(value: string) {
    this._conflictBehavior = value;
  }
  public resetConflictBehavior() {
    this._conflictBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictBehaviorInput() {
    return this._conflictBehavior;
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

  // direct_memberships_only - computed: true, optional: true, required: false
  private _directMembershipsOnly?: boolean | cdktf.IResolvable; 
  public get directMembershipsOnly() {
    return this.getBooleanAttribute('direct_memberships_only');
  }
  public set directMembershipsOnly(value: boolean | cdktf.IResolvable) {
    this._directMembershipsOnly = value;
  }
  public resetDirectMembershipsOnly() {
    this._directMembershipsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directMembershipsOnlyInput() {
    return this._directMembershipsOnly;
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

  // exclude_operational_attributes - computed: true, optional: true, required: false
  private _excludeOperationalAttributes?: boolean | cdktf.IResolvable; 
  public get excludeOperationalAttributes() {
    return this.getBooleanAttribute('exclude_operational_attributes');
  }
  public set excludeOperationalAttributes(value: boolean | cdktf.IResolvable) {
    this._excludeOperationalAttributes = value;
  }
  public resetExcludeOperationalAttributes() {
    this._excludeOperationalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOperationalAttributesInput() {
    return this._excludeOperationalAttributes;
  }

  // excluded_attribute - computed: true, optional: true, required: false
  private _excludedAttribute?: string[]; 
  public get excludedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_attribute'));
  }
  public set excludedAttribute(value: string[]) {
    this._excludedAttribute = value;
  }
  public resetExcludedAttribute() {
    this._excludedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAttributeInput() {
    return this._excludedAttribute;
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

  // filter - computed: true, optional: true, required: false
  private _filter?: string[]; 
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // group_dn - computed: true, optional: true, required: false
  private _groupDn?: string[]; 
  public get groupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('group_dn'));
  }
  public set groupDn(value: string[]) {
    this._groupDn = value;
  }
  public resetGroupDn() {
    this._groupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnInput() {
    return this._groupDn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_milliseconds - computed: true, optional: true, required: false
  private _includeMilliseconds?: boolean | cdktf.IResolvable; 
  public get includeMilliseconds() {
    return this.getBooleanAttribute('include_milliseconds');
  }
  public set includeMilliseconds(value: boolean | cdktf.IResolvable) {
    this._includeMilliseconds = value;
  }
  public resetIncludeMilliseconds() {
    this._includeMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMillisecondsInput() {
    return this._includeMilliseconds;
  }

  // included_group_filter - computed: true, optional: true, required: false
  private _includedGroupFilter?: string; 
  public get includedGroupFilter() {
    return this.getStringAttribute('included_group_filter');
  }
  public set includedGroupFilter(value: string) {
    this._includedGroupFilter = value;
  }
  public resetIncludedGroupFilter() {
    this._includedGroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGroupFilterInput() {
    return this._includedGroupFilter;
  }

  // join_attribute - computed: true, optional: true, required: false
  private _joinAttribute?: string[]; 
  public get joinAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('join_attribute'));
  }
  public set joinAttribute(value: string[]) {
    this._joinAttribute = value;
  }
  public resetJoinAttribute() {
    this._joinAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinAttributeInput() {
    return this._joinAttribute;
  }

  // join_base_dn_type - computed: true, optional: true, required: false
  private _joinBaseDnType?: string; 
  public get joinBaseDnType() {
    return this.getStringAttribute('join_base_dn_type');
  }
  public set joinBaseDnType(value: string) {
    this._joinBaseDnType = value;
  }
  public resetJoinBaseDnType() {
    this._joinBaseDnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinBaseDnTypeInput() {
    return this._joinBaseDnType;
  }

  // join_custom_base_dn - computed: true, optional: true, required: false
  private _joinCustomBaseDn?: string; 
  public get joinCustomBaseDn() {
    return this.getStringAttribute('join_custom_base_dn');
  }
  public set joinCustomBaseDn(value: string) {
    this._joinCustomBaseDn = value;
  }
  public resetJoinCustomBaseDn() {
    this._joinCustomBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinCustomBaseDnInput() {
    return this._joinCustomBaseDn;
  }

  // join_dn_attribute - computed: true, optional: true, required: false
  private _joinDnAttribute?: string; 
  public get joinDnAttribute() {
    return this.getStringAttribute('join_dn_attribute');
  }
  public set joinDnAttribute(value: string) {
    this._joinDnAttribute = value;
  }
  public resetJoinDnAttribute() {
    this._joinDnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDnAttributeInput() {
    return this._joinDnAttribute;
  }

  // join_filter - computed: true, optional: true, required: false
  private _joinFilter?: string; 
  public get joinFilter() {
    return this.getStringAttribute('join_filter');
  }
  public set joinFilter(value: string) {
    this._joinFilter = value;
  }
  public resetJoinFilter() {
    this._joinFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinFilterInput() {
    return this._joinFilter;
  }

  // join_match_all - computed: true, optional: true, required: false
  private _joinMatchAll?: boolean | cdktf.IResolvable; 
  public get joinMatchAll() {
    return this.getBooleanAttribute('join_match_all');
  }
  public set joinMatchAll(value: boolean | cdktf.IResolvable) {
    this._joinMatchAll = value;
  }
  public resetJoinMatchAll() {
    this._joinMatchAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinMatchAllInput() {
    return this._joinMatchAll;
  }

  // join_scope - computed: true, optional: true, required: false
  private _joinScope?: string; 
  public get joinScope() {
    return this.getStringAttribute('join_scope');
  }
  public set joinScope(value: string) {
    this._joinScope = value;
  }
  public resetJoinScope() {
    this._joinScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinScopeInput() {
    return this._joinScope;
  }

  // join_size_limit - computed: true, optional: true, required: false
  private _joinSizeLimit?: number; 
  public get joinSizeLimit() {
    return this.getNumberAttribute('join_size_limit');
  }
  public set joinSizeLimit(value: number) {
    this._joinSizeLimit = value;
  }
  public resetJoinSizeLimit() {
    this._joinSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSizeLimitInput() {
    return this._joinSizeLimit;
  }

  // join_source_attribute - computed: true, optional: true, required: false
  private _joinSourceAttribute?: string; 
  public get joinSourceAttribute() {
    return this.getStringAttribute('join_source_attribute');
  }
  public set joinSourceAttribute(value: string) {
    this._joinSourceAttribute = value;
  }
  public resetJoinSourceAttribute() {
    this._joinSourceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSourceAttributeInput() {
    return this._joinSourceAttribute;
  }

  // join_target_attribute - computed: true, optional: true, required: false
  private _joinTargetAttribute?: string; 
  public get joinTargetAttribute() {
    return this.getStringAttribute('join_target_attribute');
  }
  public set joinTargetAttribute(value: string) {
    this._joinTargetAttribute = value;
  }
  public resetJoinTargetAttribute() {
    this._joinTargetAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinTargetAttributeInput() {
    return this._joinTargetAttribute;
  }

  // multiple_virtual_attribute_evaluation_order_index - computed: true, optional: true, required: false
  private _multipleVirtualAttributeEvaluationOrderIndex?: number; 
  public get multipleVirtualAttributeEvaluationOrderIndex() {
    return this.getNumberAttribute('multiple_virtual_attribute_evaluation_order_index');
  }
  public set multipleVirtualAttributeEvaluationOrderIndex(value: number) {
    this._multipleVirtualAttributeEvaluationOrderIndex = value;
  }
  public resetMultipleVirtualAttributeEvaluationOrderIndex() {
    this._multipleVirtualAttributeEvaluationOrderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleVirtualAttributeEvaluationOrderIndexInput() {
    return this._multipleVirtualAttributeEvaluationOrderIndex;
  }

  // multiple_virtual_attribute_merge_behavior - computed: true, optional: true, required: false
  private _multipleVirtualAttributeMergeBehavior?: string; 
  public get multipleVirtualAttributeMergeBehavior() {
    return this.getStringAttribute('multiple_virtual_attribute_merge_behavior');
  }
  public set multipleVirtualAttributeMergeBehavior(value: string) {
    this._multipleVirtualAttributeMergeBehavior = value;
  }
  public resetMultipleVirtualAttributeMergeBehavior() {
    this._multipleVirtualAttributeMergeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleVirtualAttributeMergeBehaviorInput() {
    return this._multipleVirtualAttributeMergeBehavior;
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

  // reference_search_base_dn - computed: true, optional: true, required: false
  private _referenceSearchBaseDn?: string[]; 
  public get referenceSearchBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('reference_search_base_dn'));
  }
  public set referenceSearchBaseDn(value: string[]) {
    this._referenceSearchBaseDn = value;
  }
  public resetReferenceSearchBaseDn() {
    this._referenceSearchBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSearchBaseDnInput() {
    return this._referenceSearchBaseDn;
  }

  // referenced_by_attribute - computed: true, optional: true, required: false
  private _referencedByAttribute?: string[]; 
  public get referencedByAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('referenced_by_attribute'));
  }
  public set referencedByAttribute(value: string[]) {
    this._referencedByAttribute = value;
  }
  public resetReferencedByAttribute() {
    this._referencedByAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedByAttributeInput() {
    return this._referencedByAttribute;
  }

  // require_explicit_request_by_name - computed: true, optional: true, required: false
  private _requireExplicitRequestByName?: boolean | cdktf.IResolvable; 
  public get requireExplicitRequestByName() {
    return this.getBooleanAttribute('require_explicit_request_by_name');
  }
  public set requireExplicitRequestByName(value: boolean | cdktf.IResolvable) {
    this._requireExplicitRequestByName = value;
  }
  public resetRequireExplicitRequestByName() {
    this._requireExplicitRequestByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireExplicitRequestByNameInput() {
    return this._requireExplicitRequestByName;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultVirtualAttributeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // return_utc_time - computed: true, optional: true, required: false
  private _returnUtcTime?: boolean | cdktf.IResolvable; 
  public get returnUtcTime() {
    return this.getBooleanAttribute('return_utc_time');
  }
  public set returnUtcTime(value: boolean | cdktf.IResolvable) {
    this._returnUtcTime = value;
  }
  public resetReturnUtcTime() {
    this._returnUtcTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnUtcTimeInput() {
    return this._returnUtcTime;
  }

  // rewrite_search_filters - computed: true, optional: true, required: false
  private _rewriteSearchFilters?: string; 
  public get rewriteSearchFilters() {
    return this.getStringAttribute('rewrite_search_filters');
  }
  public set rewriteSearchFilters(value: string) {
    this._rewriteSearchFilters = value;
  }
  public resetRewriteSearchFilters() {
    this._rewriteSearchFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteSearchFiltersInput() {
    return this._rewriteSearchFilters;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // sequence_number_attribute - computed: true, optional: true, required: false
  private _sequenceNumberAttribute?: string; 
  public get sequenceNumberAttribute() {
    return this.getStringAttribute('sequence_number_attribute');
  }
  public set sequenceNumberAttribute(value: string) {
    this._sequenceNumberAttribute = value;
  }
  public resetSequenceNumberAttribute() {
    this._sequenceNumberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberAttributeInput() {
    return this._sequenceNumberAttribute;
  }

  // source_attribute - computed: true, optional: true, required: false
  private _sourceAttribute?: string; 
  public get sourceAttribute() {
    return this.getStringAttribute('source_attribute');
  }
  public set sourceAttribute(value: string) {
    this._sourceAttribute = value;
  }
  public resetSourceAttribute() {
    this._sourceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAttributeInput() {
    return this._sourceAttribute;
  }

  // source_entry_dn_attribute - computed: true, optional: true, required: false
  private _sourceEntryDnAttribute?: string; 
  public get sourceEntryDnAttribute() {
    return this.getStringAttribute('source_entry_dn_attribute');
  }
  public set sourceEntryDnAttribute(value: string) {
    this._sourceEntryDnAttribute = value;
  }
  public resetSourceEntryDnAttribute() {
    this._sourceEntryDnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryDnAttributeInput() {
    return this._sourceEntryDnAttribute;
  }

  // source_entry_dn_map - computed: true, optional: true, required: false
  private _sourceEntryDnMap?: string; 
  public get sourceEntryDnMap() {
    return this.getStringAttribute('source_entry_dn_map');
  }
  public set sourceEntryDnMap(value: string) {
    this._sourceEntryDnMap = value;
  }
  public resetSourceEntryDnMap() {
    this._sourceEntryDnMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryDnMapInput() {
    return this._sourceEntryDnMap;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_pattern - computed: true, optional: true, required: false
  private _valuePattern?: string[]; 
  public get valuePattern() {
    return cdktf.Fn.tolist(this.getListAttribute('value_pattern'));
  }
  public set valuePattern(value: string[]) {
    this._valuePattern = value;
  }
  public resetValuePattern() {
    this._valuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_index_conflicts: cdktf.booleanToTerraform(this._allowIndexConflicts),
      allow_retrieving_membership: cdktf.booleanToTerraform(this._allowRetrievingMembership),
      attribute_type: cdktf.stringToTerraform(this._attributeType),
      base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseDn),
      bypass_access_control_for_searches: cdktf.booleanToTerraform(this._bypassAccessControlForSearches),
      client_connection_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientConnectionPolicy),
      conflict_behavior: cdktf.stringToTerraform(this._conflictBehavior),
      description: cdktf.stringToTerraform(this._description),
      direct_memberships_only: cdktf.booleanToTerraform(this._directMembershipsOnly),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_operational_attributes: cdktf.booleanToTerraform(this._excludeOperationalAttributes),
      excluded_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedAttribute),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filter),
      group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupDn),
      include_milliseconds: cdktf.booleanToTerraform(this._includeMilliseconds),
      included_group_filter: cdktf.stringToTerraform(this._includedGroupFilter),
      join_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._joinAttribute),
      join_base_dn_type: cdktf.stringToTerraform(this._joinBaseDnType),
      join_custom_base_dn: cdktf.stringToTerraform(this._joinCustomBaseDn),
      join_dn_attribute: cdktf.stringToTerraform(this._joinDnAttribute),
      join_filter: cdktf.stringToTerraform(this._joinFilter),
      join_match_all: cdktf.booleanToTerraform(this._joinMatchAll),
      join_scope: cdktf.stringToTerraform(this._joinScope),
      join_size_limit: cdktf.numberToTerraform(this._joinSizeLimit),
      join_source_attribute: cdktf.stringToTerraform(this._joinSourceAttribute),
      join_target_attribute: cdktf.stringToTerraform(this._joinTargetAttribute),
      multiple_virtual_attribute_evaluation_order_index: cdktf.numberToTerraform(this._multipleVirtualAttributeEvaluationOrderIndex),
      multiple_virtual_attribute_merge_behavior: cdktf.stringToTerraform(this._multipleVirtualAttributeMergeBehavior),
      name: cdktf.stringToTerraform(this._name),
      reference_search_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referenceSearchBaseDn),
      referenced_by_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referencedByAttribute),
      require_explicit_request_by_name: cdktf.booleanToTerraform(this._requireExplicitRequestByName),
      return_utc_time: cdktf.booleanToTerraform(this._returnUtcTime),
      rewrite_search_filters: cdktf.stringToTerraform(this._rewriteSearchFilters),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      sequence_number_attribute: cdktf.stringToTerraform(this._sequenceNumberAttribute),
      source_attribute: cdktf.stringToTerraform(this._sourceAttribute),
      source_entry_dn_attribute: cdktf.stringToTerraform(this._sourceEntryDnAttribute),
      source_entry_dn_map: cdktf.stringToTerraform(this._sourceEntryDnMap),
      value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._value),
      value_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valuePattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_index_conflicts: {
        value: cdktf.booleanToHclTerraform(this._allowIndexConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_retrieving_membership: {
        value: cdktf.booleanToHclTerraform(this._allowRetrievingMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_type: {
        value: cdktf.stringToHclTerraform(this._attributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_access_control_for_searches: {
        value: cdktf.booleanToHclTerraform(this._bypassAccessControlForSearches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_connection_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientConnectionPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      conflict_behavior: {
        value: cdktf.stringToHclTerraform(this._conflictBehavior),
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
      direct_memberships_only: {
        value: cdktf.booleanToHclTerraform(this._directMembershipsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_operational_attributes: {
        value: cdktf.booleanToHclTerraform(this._excludeOperationalAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedAttribute),
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
      filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_milliseconds: {
        value: cdktf.booleanToHclTerraform(this._includeMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      included_group_filter: {
        value: cdktf.stringToHclTerraform(this._includedGroupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._joinAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      join_base_dn_type: {
        value: cdktf.stringToHclTerraform(this._joinBaseDnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_custom_base_dn: {
        value: cdktf.stringToHclTerraform(this._joinCustomBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_dn_attribute: {
        value: cdktf.stringToHclTerraform(this._joinDnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_filter: {
        value: cdktf.stringToHclTerraform(this._joinFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_match_all: {
        value: cdktf.booleanToHclTerraform(this._joinMatchAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      join_scope: {
        value: cdktf.stringToHclTerraform(this._joinScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_size_limit: {
        value: cdktf.numberToHclTerraform(this._joinSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      join_source_attribute: {
        value: cdktf.stringToHclTerraform(this._joinSourceAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_target_attribute: {
        value: cdktf.stringToHclTerraform(this._joinTargetAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_virtual_attribute_evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._multipleVirtualAttributeEvaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_virtual_attribute_merge_behavior: {
        value: cdktf.stringToHclTerraform(this._multipleVirtualAttributeMergeBehavior),
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
      reference_search_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referenceSearchBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      referenced_by_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referencedByAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      require_explicit_request_by_name: {
        value: cdktf.booleanToHclTerraform(this._requireExplicitRequestByName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_utc_time: {
        value: cdktf.booleanToHclTerraform(this._returnUtcTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite_search_filters: {
        value: cdktf.stringToHclTerraform(this._rewriteSearchFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number_attribute: {
        value: cdktf.stringToHclTerraform(this._sequenceNumberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_attribute: {
        value: cdktf.stringToHclTerraform(this._sourceAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_entry_dn_attribute: {
        value: cdktf.stringToHclTerraform(this._sourceEntryDnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_entry_dn_map: {
        value: cdktf.stringToHclTerraform(this._sourceEntryDnMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._value),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      value_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valuePattern),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
