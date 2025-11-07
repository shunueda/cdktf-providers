// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneTdAccessCodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#filters DataBloxoneTdAccessCodes#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#tag_filters DataBloxoneTdAccessCodes#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneTdAccessCodesResultsRules {
  /**
  * The action to be used in the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#action DataBloxoneTdAccessCodes#action}
  */
  readonly action?: string;
  /**
  * The data to be used in the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#data DataBloxoneTdAccessCodes#data}
  */
  readonly data?: string;
  /**
  * The brief description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#description DataBloxoneTdAccessCodes#description}
  */
  readonly description?: string;
  /**
  * The name of the redirect to be used in the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#redirect_name DataBloxoneTdAccessCodes#redirect_name}
  */
  readonly redirectName?: string;
  /**
  * The type of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#type DataBloxoneTdAccessCodes#type}
  */
  readonly type?: string;
}

export function dataBloxoneTdAccessCodesResultsRulesToTerraform(struct?: DataBloxoneTdAccessCodesResultsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    data: cdktf.stringToTerraform(struct!.data),
    description: cdktf.stringToTerraform(struct!.description),
    redirect_name: cdktf.stringToTerraform(struct!.redirectName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneTdAccessCodesResultsRulesToHclTerraform(struct?: DataBloxoneTdAccessCodesResultsRules): any {
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
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_name: {
      value: cdktf.stringToHclTerraform(struct!.redirectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataBloxoneTdAccessCodesResultsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneTdAccessCodesResultsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._redirectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectName = this._redirectName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneTdAccessCodesResultsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._data = undefined;
      this._description = undefined;
      this._redirectName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._data = value.data;
      this._description = value.description;
      this._redirectName = value.redirectName;
      this._type = value.type;
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

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // redirect_name - computed: true, optional: true, required: false
  private _redirectName?: string; 
  public get redirectName() {
    return this.getStringAttribute('redirect_name');
  }
  public set redirectName(value: string) {
    this._redirectName = value;
  }
  public resetRedirectName() {
    this._redirectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectNameInput() {
    return this._redirectName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneTdAccessCodesResultsRulesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneTdAccessCodesResultsRules[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneTdAccessCodesResultsRulesOutputReference {
    return new DataBloxoneTdAccessCodesResultsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneTdAccessCodesResults {
  /**
  * The time when the Bypass Code object was activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#activation DataBloxoneTdAccessCodes#activation}
  */
  readonly activation: string;
  /**
  * The brief description for an access code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#description DataBloxoneTdAccessCodes#description}
  */
  readonly description?: string;
  /**
  * The time when the Bypass Code object expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#expiration DataBloxoneTdAccessCodes#expiration}
  */
  readonly expiration: string;
  /**
  * The name of Bypass Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#name DataBloxoneTdAccessCodes#name}
  */
  readonly name: string;
  /**
  * The list of selected security rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#rules DataBloxoneTdAccessCodes#rules}
  */
  readonly rules: DataBloxoneTdAccessCodesResultsRules[] | cdktf.IResolvable;
}

export function dataBloxoneTdAccessCodesResultsToTerraform(struct?: DataBloxoneTdAccessCodesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation: cdktf.stringToTerraform(struct!.activation),
    description: cdktf.stringToTerraform(struct!.description),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(dataBloxoneTdAccessCodesResultsRulesToTerraform, false)(struct!.rules),
  }
}


export function dataBloxoneTdAccessCodesResultsToHclTerraform(struct?: DataBloxoneTdAccessCodesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation: {
      value: cdktf.stringToHclTerraform(struct!.activation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataBloxoneTdAccessCodesResultsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneTdAccessCodesResultsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneTdAccessCodesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneTdAccessCodesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activation !== undefined) {
      hasAnyValues = true;
      internalValueResult.activation = this._activation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneTdAccessCodesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activation = undefined;
      this._description = undefined;
      this._expiration = undefined;
      this._name = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activation = value.activation;
      this._description = value.description;
      this._expiration = value.expiration;
      this._name = value.name;
      this._rules.internalValue = value.rules;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // activation - computed: true, optional: false, required: true
  private _activation?: string; 
  public get activation() {
    return this.getStringAttribute('activation');
  }
  public set activation(value: string) {
    this._activation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationInput() {
    return this._activation;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // expiration - computed: true, optional: false, required: true
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return this.getNumberListAttribute('policy_ids');
  }

  // rules - computed: true, optional: false, required: true
  private _rules = new DataBloxoneTdAccessCodesResultsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataBloxoneTdAccessCodesResultsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }
}

export class DataBloxoneTdAccessCodesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneTdAccessCodesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneTdAccessCodesResultsOutputReference {
    return new DataBloxoneTdAccessCodesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes bloxone_td_access_codes}
*/
export class DataBloxoneTdAccessCodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_td_access_codes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneTdAccessCodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneTdAccessCodes to import
  * @param importFromId The id of the existing DataBloxoneTdAccessCodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneTdAccessCodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_td_access_codes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_access_codes bloxone_td_access_codes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneTdAccessCodesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneTdAccessCodesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_td_access_codes',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
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
    this._tagFilters = config.tagFilters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneTdAccessCodesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
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
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
