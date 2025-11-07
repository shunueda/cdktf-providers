// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSearchEntryCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the OID of a control that must be present in search result entries included in this Simple Search Entry Criteria. If any control OIDs are provided, then the entry must contain all of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#all_included_entry_control DefaultSearchEntryCriteria#all_included_entry_control}
  */
  readonly allIncludedEntryControl?: string[];
  /**
  * Specifies a search filter that must match search result entries included in this Simple Search Entry Criteria. Note that this matching will be performed against the entry that is actually returned to the client and may not reflect the complete entry stored in the server. If any filters are provided, then the returned entry must match all of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#all_included_entry_filter DefaultSearchEntryCriteria#all_included_entry_filter}
  */
  readonly allIncludedEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the entry must be a member to be included in this Simple Search Entry Criteria. If any group DNs are provided, then the entry must be a member of all of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#all_included_entry_group_dn DefaultSearchEntryCriteria#all_included_entry_group_dn}
  */
  readonly allIncludedEntryGroupDn?: string[];
  /**
  * Specifies a search entry criteria object that must match the associated search result entry in order to match the aggregate search entry criteria. If one or more all-included search entry criteria objects are provided, then a search result entry must match all of them in order to match the aggregate search entry criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#all_included_search_entry_criteria DefaultSearchEntryCriteria#all_included_search_entry_criteria}
  */
  readonly allIncludedSearchEntryCriteria?: string[];
  /**
  * Specifies the OID of a control that may be present in search result entries included in this Simple Search Entry Criteria. If any control OIDs are provided, then the entry must contain at least one of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#any_included_entry_control DefaultSearchEntryCriteria#any_included_entry_control}
  */
  readonly anyIncludedEntryControl?: string[];
  /**
  * Specifies a search filter that may match search result entries included in this Simple Search Entry Criteria. Note that this matching will be performed against the entry that is actually returned to the client and may not reflect the complete entry stored in the server. If any filters are provided, then the entry must match at least one of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#any_included_entry_filter DefaultSearchEntryCriteria#any_included_entry_filter}
  */
  readonly anyIncludedEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the entry may be a member to be included in this Simple Search Entry Criteria. If any group DNs are provided, then the entry must be a member of at least one of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#any_included_entry_group_dn DefaultSearchEntryCriteria#any_included_entry_group_dn}
  */
  readonly anyIncludedEntryGroupDn?: string[];
  /**
  * Specifies a search entry criteria object that may match the associated search result entry in order to match the aggregate search entry criteria. If one or more any-included search entry criteria objects are provided, then a search result entry must match at least one of them in order to match the aggregate search entry criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#any_included_search_entry_criteria DefaultSearchEntryCriteria#any_included_search_entry_criteria}
  */
  readonly anyIncludedSearchEntryCriteria?: string[];
  /**
  * A description for this Search Entry Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#description DefaultSearchEntryCriteria#description}
  */
  readonly description?: string;
  /**
  * Specifies a base DN below which entries included in this Simple Search Entry Criteria may not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#excluded_entry_base_dn DefaultSearchEntryCriteria#excluded_entry_base_dn}
  */
  readonly excludedEntryBaseDn?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Search Entry Criteria. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#extension_argument DefaultSearchEntryCriteria#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Search Entry Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#extension_class DefaultSearchEntryCriteria#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies a base DN below which entries included in this Simple Search Entry Criteria may exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#included_entry_base_dn DefaultSearchEntryCriteria#included_entry_base_dn}
  */
  readonly includedEntryBaseDn?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#name DefaultSearchEntryCriteria#name}
  */
  readonly name: string;
  /**
  * Specifies the OID of a control that must not be present in search result entries included in this Simple Search Entry Criteria. If any control OIDs are provided, then the entry must not contain any of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#none_included_entry_control DefaultSearchEntryCriteria#none_included_entry_control}
  */
  readonly noneIncludedEntryControl?: string[];
  /**
  * Specifies a search filter that must not match search result entries included in this Simple Search Entry Criteria. Note that this matching will be performed against the entry that is actually returned to the client and may not reflect the complete entry stored in the server. If any filters are provided, then the entry must not match any of those filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#none_included_entry_filter DefaultSearchEntryCriteria#none_included_entry_filter}
  */
  readonly noneIncludedEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the entry must not be a member to be included in this Simple Search Entry Criteria. If any group DNs are provided, then the entry must not be a member of any of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#none_included_entry_group_dn DefaultSearchEntryCriteria#none_included_entry_group_dn}
  */
  readonly noneIncludedEntryGroupDn?: string[];
  /**
  * Specifies a search entry criteria object that must not match the associated search result entry in order to match the aggregate search entry criteria. If one or more none-included search entry criteria objects are provided, then a search result entry must not match any of them in order to match the aggregate search entry criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#none_included_search_entry_criteria DefaultSearchEntryCriteria#none_included_search_entry_criteria}
  */
  readonly noneIncludedSearchEntryCriteria?: string[];
  /**
  * Specifies the OID of a control that should not be present in search result entries included in this Simple Search Entry Criteria. If any control OIDs are provided, then the entry must not contain at least one of those controls (that is, it may contain zero or more of those controls, but not all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#not_all_included_entry_control DefaultSearchEntryCriteria#not_all_included_entry_control}
  */
  readonly notAllIncludedEntryControl?: string[];
  /**
  * Specifies a search filter that should not match search result entries included in this Simple Search Entry Criteria. Note that this matching will be performed against the entry that is actually returned to the client and may not reflect the complete entry stored in the server. If any filters are provided, then the entry must not match at least one of those filters (that is, the entry may match zero or more of those filters, but not of all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#not_all_included_entry_filter DefaultSearchEntryCriteria#not_all_included_entry_filter}
  */
  readonly notAllIncludedEntryFilter?: string[];
  /**
  * Specifies the DN of a group in which the user associated with the entry should not be a member to be included in this Simple Search Entry Criteria. If any group DNs are provided, then the entry must not be a member of at least one of them (that is, the entry may be a member of zero or more of the specified groups, but not of all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#not_all_included_entry_group_dn DefaultSearchEntryCriteria#not_all_included_entry_group_dn}
  */
  readonly notAllIncludedEntryGroupDn?: string[];
  /**
  * Specifies a search entry criteria object that should not match the associated search result entry in order to match the aggregate search entry criteria. If one or more not-all-included search entry criteria objects are provided, then a search result entry must not match all of them (that is, it may match zero or more of them, but it must not match all of them) in order to match the aggregate search entry criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#not_all_included_search_entry_criteria DefaultSearchEntryCriteria#not_all_included_search_entry_criteria}
  */
  readonly notAllIncludedSearchEntryCriteria?: string[];
  /**
  * Specifies a request criteria object that must match the associated request for entries included in this Simple Search Entry Criteria. of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#request_criteria DefaultSearchEntryCriteria#request_criteria}
  */
  readonly requestCriteria?: string;
}
export interface DefaultSearchEntryCriteriaRequiredActions {
}

export function defaultSearchEntryCriteriaRequiredActionsToTerraform(struct?: DefaultSearchEntryCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultSearchEntryCriteriaRequiredActionsToHclTerraform(struct?: DefaultSearchEntryCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultSearchEntryCriteriaRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultSearchEntryCriteriaRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSearchEntryCriteriaRequiredActions | undefined) {
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

export class DefaultSearchEntryCriteriaRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultSearchEntryCriteriaRequiredActionsOutputReference {
    return new DefaultSearchEntryCriteriaRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria pingdirectory_default_search_entry_criteria}
*/
export class DefaultSearchEntryCriteria extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_search_entry_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultSearchEntryCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultSearchEntryCriteria to import
  * @param importFromId The id of the existing DefaultSearchEntryCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultSearchEntryCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_search_entry_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_entry_criteria pingdirectory_default_search_entry_criteria} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSearchEntryCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultSearchEntryCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_search_entry_criteria',
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
    this._allIncludedEntryControl = config.allIncludedEntryControl;
    this._allIncludedEntryFilter = config.allIncludedEntryFilter;
    this._allIncludedEntryGroupDn = config.allIncludedEntryGroupDn;
    this._allIncludedSearchEntryCriteria = config.allIncludedSearchEntryCriteria;
    this._anyIncludedEntryControl = config.anyIncludedEntryControl;
    this._anyIncludedEntryFilter = config.anyIncludedEntryFilter;
    this._anyIncludedEntryGroupDn = config.anyIncludedEntryGroupDn;
    this._anyIncludedSearchEntryCriteria = config.anyIncludedSearchEntryCriteria;
    this._description = config.description;
    this._excludedEntryBaseDn = config.excludedEntryBaseDn;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._includedEntryBaseDn = config.includedEntryBaseDn;
    this._name = config.name;
    this._noneIncludedEntryControl = config.noneIncludedEntryControl;
    this._noneIncludedEntryFilter = config.noneIncludedEntryFilter;
    this._noneIncludedEntryGroupDn = config.noneIncludedEntryGroupDn;
    this._noneIncludedSearchEntryCriteria = config.noneIncludedSearchEntryCriteria;
    this._notAllIncludedEntryControl = config.notAllIncludedEntryControl;
    this._notAllIncludedEntryFilter = config.notAllIncludedEntryFilter;
    this._notAllIncludedEntryGroupDn = config.notAllIncludedEntryGroupDn;
    this._notAllIncludedSearchEntryCriteria = config.notAllIncludedSearchEntryCriteria;
    this._requestCriteria = config.requestCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_entry_control - computed: true, optional: true, required: false
  private _allIncludedEntryControl?: string[]; 
  public get allIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_control'));
  }
  public set allIncludedEntryControl(value: string[]) {
    this._allIncludedEntryControl = value;
  }
  public resetAllIncludedEntryControl() {
    this._allIncludedEntryControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedEntryControlInput() {
    return this._allIncludedEntryControl;
  }

  // all_included_entry_filter - computed: true, optional: true, required: false
  private _allIncludedEntryFilter?: string[]; 
  public get allIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_filter'));
  }
  public set allIncludedEntryFilter(value: string[]) {
    this._allIncludedEntryFilter = value;
  }
  public resetAllIncludedEntryFilter() {
    this._allIncludedEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedEntryFilterInput() {
    return this._allIncludedEntryFilter;
  }

  // all_included_entry_group_dn - computed: true, optional: true, required: false
  private _allIncludedEntryGroupDn?: string[]; 
  public get allIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_group_dn'));
  }
  public set allIncludedEntryGroupDn(value: string[]) {
    this._allIncludedEntryGroupDn = value;
  }
  public resetAllIncludedEntryGroupDn() {
    this._allIncludedEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedEntryGroupDnInput() {
    return this._allIncludedEntryGroupDn;
  }

  // all_included_search_entry_criteria - computed: true, optional: true, required: false
  private _allIncludedSearchEntryCriteria?: string[]; 
  public get allIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_search_entry_criteria'));
  }
  public set allIncludedSearchEntryCriteria(value: string[]) {
    this._allIncludedSearchEntryCriteria = value;
  }
  public resetAllIncludedSearchEntryCriteria() {
    this._allIncludedSearchEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedSearchEntryCriteriaInput() {
    return this._allIncludedSearchEntryCriteria;
  }

  // any_included_entry_control - computed: true, optional: true, required: false
  private _anyIncludedEntryControl?: string[]; 
  public get anyIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_control'));
  }
  public set anyIncludedEntryControl(value: string[]) {
    this._anyIncludedEntryControl = value;
  }
  public resetAnyIncludedEntryControl() {
    this._anyIncludedEntryControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedEntryControlInput() {
    return this._anyIncludedEntryControl;
  }

  // any_included_entry_filter - computed: true, optional: true, required: false
  private _anyIncludedEntryFilter?: string[]; 
  public get anyIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_filter'));
  }
  public set anyIncludedEntryFilter(value: string[]) {
    this._anyIncludedEntryFilter = value;
  }
  public resetAnyIncludedEntryFilter() {
    this._anyIncludedEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedEntryFilterInput() {
    return this._anyIncludedEntryFilter;
  }

  // any_included_entry_group_dn - computed: true, optional: true, required: false
  private _anyIncludedEntryGroupDn?: string[]; 
  public get anyIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_group_dn'));
  }
  public set anyIncludedEntryGroupDn(value: string[]) {
    this._anyIncludedEntryGroupDn = value;
  }
  public resetAnyIncludedEntryGroupDn() {
    this._anyIncludedEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedEntryGroupDnInput() {
    return this._anyIncludedEntryGroupDn;
  }

  // any_included_search_entry_criteria - computed: true, optional: true, required: false
  private _anyIncludedSearchEntryCriteria?: string[]; 
  public get anyIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_search_entry_criteria'));
  }
  public set anyIncludedSearchEntryCriteria(value: string[]) {
    this._anyIncludedSearchEntryCriteria = value;
  }
  public resetAnyIncludedSearchEntryCriteria() {
    this._anyIncludedSearchEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedSearchEntryCriteriaInput() {
    return this._anyIncludedSearchEntryCriteria;
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

  // excluded_entry_base_dn - computed: true, optional: true, required: false
  private _excludedEntryBaseDn?: string[]; 
  public get excludedEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_entry_base_dn'));
  }
  public set excludedEntryBaseDn(value: string[]) {
    this._excludedEntryBaseDn = value;
  }
  public resetExcludedEntryBaseDn() {
    this._excludedEntryBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEntryBaseDnInput() {
    return this._excludedEntryBaseDn;
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

  // included_entry_base_dn - computed: true, optional: true, required: false
  private _includedEntryBaseDn?: string[]; 
  public get includedEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_entry_base_dn'));
  }
  public set includedEntryBaseDn(value: string[]) {
    this._includedEntryBaseDn = value;
  }
  public resetIncludedEntryBaseDn() {
    this._includedEntryBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEntryBaseDnInput() {
    return this._includedEntryBaseDn;
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

  // none_included_entry_control - computed: true, optional: true, required: false
  private _noneIncludedEntryControl?: string[]; 
  public get noneIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_control'));
  }
  public set noneIncludedEntryControl(value: string[]) {
    this._noneIncludedEntryControl = value;
  }
  public resetNoneIncludedEntryControl() {
    this._noneIncludedEntryControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedEntryControlInput() {
    return this._noneIncludedEntryControl;
  }

  // none_included_entry_filter - computed: true, optional: true, required: false
  private _noneIncludedEntryFilter?: string[]; 
  public get noneIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_filter'));
  }
  public set noneIncludedEntryFilter(value: string[]) {
    this._noneIncludedEntryFilter = value;
  }
  public resetNoneIncludedEntryFilter() {
    this._noneIncludedEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedEntryFilterInput() {
    return this._noneIncludedEntryFilter;
  }

  // none_included_entry_group_dn - computed: true, optional: true, required: false
  private _noneIncludedEntryGroupDn?: string[]; 
  public get noneIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_group_dn'));
  }
  public set noneIncludedEntryGroupDn(value: string[]) {
    this._noneIncludedEntryGroupDn = value;
  }
  public resetNoneIncludedEntryGroupDn() {
    this._noneIncludedEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedEntryGroupDnInput() {
    return this._noneIncludedEntryGroupDn;
  }

  // none_included_search_entry_criteria - computed: true, optional: true, required: false
  private _noneIncludedSearchEntryCriteria?: string[]; 
  public get noneIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_search_entry_criteria'));
  }
  public set noneIncludedSearchEntryCriteria(value: string[]) {
    this._noneIncludedSearchEntryCriteria = value;
  }
  public resetNoneIncludedSearchEntryCriteria() {
    this._noneIncludedSearchEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedSearchEntryCriteriaInput() {
    return this._noneIncludedSearchEntryCriteria;
  }

  // not_all_included_entry_control - computed: true, optional: true, required: false
  private _notAllIncludedEntryControl?: string[]; 
  public get notAllIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_control'));
  }
  public set notAllIncludedEntryControl(value: string[]) {
    this._notAllIncludedEntryControl = value;
  }
  public resetNotAllIncludedEntryControl() {
    this._notAllIncludedEntryControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedEntryControlInput() {
    return this._notAllIncludedEntryControl;
  }

  // not_all_included_entry_filter - computed: true, optional: true, required: false
  private _notAllIncludedEntryFilter?: string[]; 
  public get notAllIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_filter'));
  }
  public set notAllIncludedEntryFilter(value: string[]) {
    this._notAllIncludedEntryFilter = value;
  }
  public resetNotAllIncludedEntryFilter() {
    this._notAllIncludedEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedEntryFilterInput() {
    return this._notAllIncludedEntryFilter;
  }

  // not_all_included_entry_group_dn - computed: true, optional: true, required: false
  private _notAllIncludedEntryGroupDn?: string[]; 
  public get notAllIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_group_dn'));
  }
  public set notAllIncludedEntryGroupDn(value: string[]) {
    this._notAllIncludedEntryGroupDn = value;
  }
  public resetNotAllIncludedEntryGroupDn() {
    this._notAllIncludedEntryGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedEntryGroupDnInput() {
    return this._notAllIncludedEntryGroupDn;
  }

  // not_all_included_search_entry_criteria - computed: true, optional: true, required: false
  private _notAllIncludedSearchEntryCriteria?: string[]; 
  public get notAllIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_search_entry_criteria'));
  }
  public set notAllIncludedSearchEntryCriteria(value: string[]) {
    this._notAllIncludedSearchEntryCriteria = value;
  }
  public resetNotAllIncludedSearchEntryCriteria() {
    this._notAllIncludedSearchEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedSearchEntryCriteriaInput() {
    return this._notAllIncludedSearchEntryCriteria;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // request_criteria - computed: true, optional: true, required: false
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
  private _requiredActions = new DefaultSearchEntryCriteriaRequiredActionsList(this, "required_actions", true);
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
      all_included_entry_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedEntryControl),
      all_included_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedEntryFilter),
      all_included_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedEntryGroupDn),
      all_included_search_entry_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedSearchEntryCriteria),
      any_included_entry_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedEntryControl),
      any_included_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedEntryFilter),
      any_included_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedEntryGroupDn),
      any_included_search_entry_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedSearchEntryCriteria),
      description: cdktf.stringToTerraform(this._description),
      excluded_entry_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedEntryBaseDn),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      included_entry_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedEntryBaseDn),
      name: cdktf.stringToTerraform(this._name),
      none_included_entry_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedEntryControl),
      none_included_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedEntryFilter),
      none_included_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedEntryGroupDn),
      none_included_search_entry_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedSearchEntryCriteria),
      not_all_included_entry_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedEntryControl),
      not_all_included_entry_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedEntryFilter),
      not_all_included_entry_group_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedEntryGroupDn),
      not_all_included_search_entry_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedSearchEntryCriteria),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_entry_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedEntryControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_search_entry_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedSearchEntryCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_entry_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedEntryControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_search_entry_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedSearchEntryCriteria),
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
      excluded_entry_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedEntryBaseDn),
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
      included_entry_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedEntryBaseDn),
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
      none_included_entry_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedEntryControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_search_entry_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedSearchEntryCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_entry_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedEntryControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_entry_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedEntryFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_entry_group_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedEntryGroupDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_search_entry_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedSearchEntryCriteria),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
