// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosMiscRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#filters DataNiosMiscRuleset#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#max_results DataNiosMiscRuleset#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#paging DataNiosMiscRuleset#paging}
  */
  readonly paging?: number;
}
export interface DataNiosMiscRulesetResultNxdomainRules {
  /**
  * The action to perform when a domain name matches the pattern defined in this Ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#action DataNiosMiscRuleset#action}
  */
  readonly action?: string;
  /**
  * The pattern that is used to match the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#pattern DataNiosMiscRuleset#pattern}
  */
  readonly pattern?: string;
}

export function dataNiosMiscRulesetResultNxdomainRulesToTerraform(struct?: DataNiosMiscRulesetResultNxdomainRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataNiosMiscRulesetResultNxdomainRulesToHclTerraform(struct?: DataNiosMiscRulesetResultNxdomainRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosMiscRulesetResultNxdomainRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNiosMiscRulesetResultNxdomainRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosMiscRulesetResultNxdomainRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._pattern = value.pattern;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataNiosMiscRulesetResultNxdomainRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosMiscRulesetResultNxdomainRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosMiscRulesetResultNxdomainRulesOutputReference {
    return new DataNiosMiscRulesetResultNxdomainRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosMiscRulesetResult {
  /**
  * Descriptive comment about the Ruleset object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#comment DataNiosMiscRuleset#comment}
  */
  readonly comment?: string;
  /**
  * The flag that indicates if the Ruleset object is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#disabled DataNiosMiscRuleset#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this Ruleset object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#name DataNiosMiscRuleset#name}
  */
  readonly name: string;
  /**
  * The list of Rules assigned to this Ruleset object. Rules can be set only when the Ruleset type is set to "NXDOMAIN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#nxdomain_rules DataNiosMiscRuleset#nxdomain_rules}
  */
  readonly nxdomainRules?: DataNiosMiscRulesetResultNxdomainRules[] | cdktf.IResolvable;
  /**
  * The type of this Ruleset object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#type DataNiosMiscRuleset#type}
  */
  readonly type: string;
}

export function dataNiosMiscRulesetResultToTerraform(struct?: DataNiosMiscRulesetResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    nxdomain_rules: cdktf.listMapper(dataNiosMiscRulesetResultNxdomainRulesToTerraform, false)(struct!.nxdomainRules),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosMiscRulesetResultToHclTerraform(struct?: DataNiosMiscRulesetResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nxdomain_rules: {
      value: cdktf.listMapperHcl(dataNiosMiscRulesetResultNxdomainRulesToHclTerraform, false)(struct!.nxdomainRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosMiscRulesetResultNxdomainRulesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosMiscRulesetResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosMiscRulesetResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nxdomainRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomainRules = this._nxdomainRules?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosMiscRulesetResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._nxdomainRules.internalValue = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._disabled = value.disabled;
      this._name = value.name;
      this._nxdomainRules.internalValue = value.nxdomainRules;
      this._type = value.type;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // name - computed: true, optional: false, required: true
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

  // nxdomain_rules - computed: true, optional: true, required: false
  private _nxdomainRules = new DataNiosMiscRulesetResultNxdomainRulesList(this, "nxdomain_rules", false);
  public get nxdomainRules() {
    return this._nxdomainRules;
  }
  public putNxdomainRules(value: DataNiosMiscRulesetResultNxdomainRules[] | cdktf.IResolvable) {
    this._nxdomainRules.internalValue = value;
  }
  public resetNxdomainRules() {
    this._nxdomainRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainRulesInput() {
    return this._nxdomainRules.internalValue;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: true
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
}

export class DataNiosMiscRulesetResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosMiscRulesetResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosMiscRulesetResultOutputReference {
    return new DataNiosMiscRulesetResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset nios_misc_ruleset}
*/
export class DataNiosMiscRuleset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_misc_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosMiscRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosMiscRuleset to import
  * @param importFromId The id of the existing DataNiosMiscRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosMiscRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_misc_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_ruleset nios_misc_ruleset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosMiscRulesetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosMiscRulesetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_misc_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosMiscRulesetResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
