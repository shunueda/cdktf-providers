// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneTdContentCategoriesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataBloxoneTdContentCategoriesResults {
  /**
  * The category code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories#category_code DataBloxoneTdContentCategories#category_code}
  */
  readonly categoryCode?: number;
  /**
  * The name of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories#category_name DataBloxoneTdContentCategories#category_name}
  */
  readonly categoryName?: string;
  /**
  * The functional group name of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories#functional_group DataBloxoneTdContentCategories#functional_group}
  */
  readonly functionalGroup?: string;
}

export function dataBloxoneTdContentCategoriesResultsToTerraform(struct?: DataBloxoneTdContentCategoriesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_code: cdktf.numberToTerraform(struct!.categoryCode),
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    functional_group: cdktf.stringToTerraform(struct!.functionalGroup),
  }
}


export function dataBloxoneTdContentCategoriesResultsToHclTerraform(struct?: DataBloxoneTdContentCategoriesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_code: {
      value: cdktf.numberToHclTerraform(struct!.categoryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    functional_group: {
      value: cdktf.stringToHclTerraform(struct!.functionalGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneTdContentCategoriesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneTdContentCategoriesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryCode = this._categoryCode;
    }
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._functionalGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionalGroup = this._functionalGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneTdContentCategoriesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryCode = undefined;
      this._categoryName = undefined;
      this._functionalGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryCode = value.categoryCode;
      this._categoryName = value.categoryName;
      this._functionalGroup = value.functionalGroup;
    }
  }

  // category_code - computed: true, optional: true, required: false
  private _categoryCode?: number; 
  public get categoryCode() {
    return this.getNumberAttribute('category_code');
  }
  public set categoryCode(value: number) {
    this._categoryCode = value;
  }
  public resetCategoryCode() {
    this._categoryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryCodeInput() {
    return this._categoryCode;
  }

  // category_name - computed: true, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // functional_group - computed: true, optional: true, required: false
  private _functionalGroup?: string; 
  public get functionalGroup() {
    return this.getStringAttribute('functional_group');
  }
  public set functionalGroup(value: string) {
    this._functionalGroup = value;
  }
  public resetFunctionalGroup() {
    this._functionalGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalGroupInput() {
    return this._functionalGroup;
  }
}

export class DataBloxoneTdContentCategoriesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneTdContentCategoriesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneTdContentCategoriesResultsOutputReference {
    return new DataBloxoneTdContentCategoriesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories bloxone_td_content_categories}
*/
export class DataBloxoneTdContentCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_td_content_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneTdContentCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneTdContentCategories to import
  * @param importFromId The id of the existing DataBloxoneTdContentCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneTdContentCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_td_content_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_content_categories bloxone_td_content_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneTdContentCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneTdContentCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_td_content_categories',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneTdContentCategoriesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
