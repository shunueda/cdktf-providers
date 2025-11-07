// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSearchReferenceCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the OID of a control that must be present in search result references included in this Simple Search Reference Criteria. If any control OIDs are provided, then the reference must contain all of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#all_included_reference_control DefaultSearchReferenceCriteria#all_included_reference_control}
  */
  readonly allIncludedReferenceControl?: string[];
  /**
  * Specifies a search reference criteria object that must match the associated search result reference in order to match the aggregate search reference criteria. If one or more all-included search reference criteria objects are provided, then a search result reference must match all of them in order to match the aggregate search reference criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#all_included_search_reference_criteria DefaultSearchReferenceCriteria#all_included_search_reference_criteria}
  */
  readonly allIncludedSearchReferenceCriteria?: string[];
  /**
  * Specifies the OID of a control that may be present in search result references included in this Simple Search Reference Criteria. If any control OIDs are provided, then the reference must contain at least one of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#any_included_reference_control DefaultSearchReferenceCriteria#any_included_reference_control}
  */
  readonly anyIncludedReferenceControl?: string[];
  /**
  * Specifies a search reference criteria object that may match the associated search result reference in order to match the aggregate search reference criteria. If one or more any-included search reference criteria objects are provided, then a search result reference must match at least one of them in order to match the aggregate search reference criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#any_included_search_reference_criteria DefaultSearchReferenceCriteria#any_included_search_reference_criteria}
  */
  readonly anyIncludedSearchReferenceCriteria?: string[];
  /**
  * A description for this Search Reference Criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#description DefaultSearchReferenceCriteria#description}
  */
  readonly description?: string;
  /**
  * The set of arguments used to customize the behavior for the Third Party Search Reference Criteria. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#extension_argument DefaultSearchReferenceCriteria#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Search Reference Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#extension_class DefaultSearchReferenceCriteria#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#name DefaultSearchReferenceCriteria#name}
  */
  readonly name: string;
  /**
  * Specifies the OID of a control that must not be present in search result references included in this Simple Search Reference Criteria. If any control OIDs are provided, then the reference must not contain any of those controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#none_included_reference_control DefaultSearchReferenceCriteria#none_included_reference_control}
  */
  readonly noneIncludedReferenceControl?: string[];
  /**
  * Specifies a search reference criteria object that must not match the associated search result reference in order to match the aggregate search reference criteria. If one or more none-included search reference criteria objects are provided, then a search result reference must not match any of them in order to match the aggregate search reference criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#none_included_search_reference_criteria DefaultSearchReferenceCriteria#none_included_search_reference_criteria}
  */
  readonly noneIncludedSearchReferenceCriteria?: string[];
  /**
  * Specifies the OID of a control that should not be present in search result references included in this Simple Search Reference Criteria. If any control OIDs are provided, then the reference must not contain at least one of those controls (that is, it may contain zero or more of those controls, but not all of them).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#not_all_included_reference_control DefaultSearchReferenceCriteria#not_all_included_reference_control}
  */
  readonly notAllIncludedReferenceControl?: string[];
  /**
  * Specifies a search reference criteria object that should not match the associated search result reference in order to match the aggregate search reference criteria. If one or more not-all-included search reference criteria objects are provided, then a search result reference must not match all of them (that is, it may match zero or more of them, but it must not match all of them) in order to match the aggregate search reference criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#not_all_included_search_reference_criteria DefaultSearchReferenceCriteria#not_all_included_search_reference_criteria}
  */
  readonly notAllIncludedSearchReferenceCriteria?: string[];
  /**
  * Specifies a request criteria object that must match the associated request for references included in this Simple Search Reference Criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#request_criteria DefaultSearchReferenceCriteria#request_criteria}
  */
  readonly requestCriteria?: string;
}
export interface DefaultSearchReferenceCriteriaRequiredActions {
}

export function defaultSearchReferenceCriteriaRequiredActionsToTerraform(struct?: DefaultSearchReferenceCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultSearchReferenceCriteriaRequiredActionsToHclTerraform(struct?: DefaultSearchReferenceCriteriaRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultSearchReferenceCriteriaRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultSearchReferenceCriteriaRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSearchReferenceCriteriaRequiredActions | undefined) {
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

export class DefaultSearchReferenceCriteriaRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultSearchReferenceCriteriaRequiredActionsOutputReference {
    return new DefaultSearchReferenceCriteriaRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria pingdirectory_default_search_reference_criteria}
*/
export class DefaultSearchReferenceCriteria extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_search_reference_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultSearchReferenceCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultSearchReferenceCriteria to import
  * @param importFromId The id of the existing DefaultSearchReferenceCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultSearchReferenceCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_search_reference_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_search_reference_criteria pingdirectory_default_search_reference_criteria} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSearchReferenceCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultSearchReferenceCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_search_reference_criteria',
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
    this._allIncludedReferenceControl = config.allIncludedReferenceControl;
    this._allIncludedSearchReferenceCriteria = config.allIncludedSearchReferenceCriteria;
    this._anyIncludedReferenceControl = config.anyIncludedReferenceControl;
    this._anyIncludedSearchReferenceCriteria = config.anyIncludedSearchReferenceCriteria;
    this._description = config.description;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._name = config.name;
    this._noneIncludedReferenceControl = config.noneIncludedReferenceControl;
    this._noneIncludedSearchReferenceCriteria = config.noneIncludedSearchReferenceCriteria;
    this._notAllIncludedReferenceControl = config.notAllIncludedReferenceControl;
    this._notAllIncludedSearchReferenceCriteria = config.notAllIncludedSearchReferenceCriteria;
    this._requestCriteria = config.requestCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_reference_control - computed: true, optional: true, required: false
  private _allIncludedReferenceControl?: string[]; 
  public get allIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_reference_control'));
  }
  public set allIncludedReferenceControl(value: string[]) {
    this._allIncludedReferenceControl = value;
  }
  public resetAllIncludedReferenceControl() {
    this._allIncludedReferenceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedReferenceControlInput() {
    return this._allIncludedReferenceControl;
  }

  // all_included_search_reference_criteria - computed: true, optional: true, required: false
  private _allIncludedSearchReferenceCriteria?: string[]; 
  public get allIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_search_reference_criteria'));
  }
  public set allIncludedSearchReferenceCriteria(value: string[]) {
    this._allIncludedSearchReferenceCriteria = value;
  }
  public resetAllIncludedSearchReferenceCriteria() {
    this._allIncludedSearchReferenceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedSearchReferenceCriteriaInput() {
    return this._allIncludedSearchReferenceCriteria;
  }

  // any_included_reference_control - computed: true, optional: true, required: false
  private _anyIncludedReferenceControl?: string[]; 
  public get anyIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_reference_control'));
  }
  public set anyIncludedReferenceControl(value: string[]) {
    this._anyIncludedReferenceControl = value;
  }
  public resetAnyIncludedReferenceControl() {
    this._anyIncludedReferenceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedReferenceControlInput() {
    return this._anyIncludedReferenceControl;
  }

  // any_included_search_reference_criteria - computed: true, optional: true, required: false
  private _anyIncludedSearchReferenceCriteria?: string[]; 
  public get anyIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_search_reference_criteria'));
  }
  public set anyIncludedSearchReferenceCriteria(value: string[]) {
    this._anyIncludedSearchReferenceCriteria = value;
  }
  public resetAnyIncludedSearchReferenceCriteria() {
    this._anyIncludedSearchReferenceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedSearchReferenceCriteriaInput() {
    return this._anyIncludedSearchReferenceCriteria;
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

  // none_included_reference_control - computed: true, optional: true, required: false
  private _noneIncludedReferenceControl?: string[]; 
  public get noneIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_reference_control'));
  }
  public set noneIncludedReferenceControl(value: string[]) {
    this._noneIncludedReferenceControl = value;
  }
  public resetNoneIncludedReferenceControl() {
    this._noneIncludedReferenceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedReferenceControlInput() {
    return this._noneIncludedReferenceControl;
  }

  // none_included_search_reference_criteria - computed: true, optional: true, required: false
  private _noneIncludedSearchReferenceCriteria?: string[]; 
  public get noneIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_search_reference_criteria'));
  }
  public set noneIncludedSearchReferenceCriteria(value: string[]) {
    this._noneIncludedSearchReferenceCriteria = value;
  }
  public resetNoneIncludedSearchReferenceCriteria() {
    this._noneIncludedSearchReferenceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneIncludedSearchReferenceCriteriaInput() {
    return this._noneIncludedSearchReferenceCriteria;
  }

  // not_all_included_reference_control - computed: true, optional: true, required: false
  private _notAllIncludedReferenceControl?: string[]; 
  public get notAllIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_reference_control'));
  }
  public set notAllIncludedReferenceControl(value: string[]) {
    this._notAllIncludedReferenceControl = value;
  }
  public resetNotAllIncludedReferenceControl() {
    this._notAllIncludedReferenceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedReferenceControlInput() {
    return this._notAllIncludedReferenceControl;
  }

  // not_all_included_search_reference_criteria - computed: true, optional: true, required: false
  private _notAllIncludedSearchReferenceCriteria?: string[]; 
  public get notAllIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_search_reference_criteria'));
  }
  public set notAllIncludedSearchReferenceCriteria(value: string[]) {
    this._notAllIncludedSearchReferenceCriteria = value;
  }
  public resetNotAllIncludedSearchReferenceCriteria() {
    this._notAllIncludedSearchReferenceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAllIncludedSearchReferenceCriteriaInput() {
    return this._notAllIncludedSearchReferenceCriteria;
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
  private _requiredActions = new DefaultSearchReferenceCriteriaRequiredActionsList(this, "required_actions", true);
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
      all_included_reference_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedReferenceControl),
      all_included_search_reference_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedSearchReferenceCriteria),
      any_included_reference_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedReferenceControl),
      any_included_search_reference_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedSearchReferenceCriteria),
      description: cdktf.stringToTerraform(this._description),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      name: cdktf.stringToTerraform(this._name),
      none_included_reference_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedReferenceControl),
      none_included_search_reference_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noneIncludedSearchReferenceCriteria),
      not_all_included_reference_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedReferenceControl),
      not_all_included_search_reference_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notAllIncludedSearchReferenceCriteria),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_reference_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedReferenceControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      all_included_search_reference_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedSearchReferenceCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_reference_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedReferenceControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_search_reference_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedSearchReferenceCriteria),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      none_included_reference_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedReferenceControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      none_included_search_reference_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noneIncludedSearchReferenceCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_reference_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedReferenceControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      not_all_included_search_reference_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notAllIncludedSearchReferenceCriteria),
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
