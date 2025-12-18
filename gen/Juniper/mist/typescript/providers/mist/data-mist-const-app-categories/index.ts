// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/const_app_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistConstAppCategoriesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMistConstAppCategoriesConstAppCategoriesFilters {
}

export function dataMistConstAppCategoriesConstAppCategoriesFiltersToTerraform(struct?: DataMistConstAppCategoriesConstAppCategoriesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistConstAppCategoriesConstAppCategoriesFiltersToHclTerraform(struct?: DataMistConstAppCategoriesConstAppCategoriesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistConstAppCategoriesConstAppCategoriesFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistConstAppCategoriesConstAppCategoriesFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistConstAppCategoriesConstAppCategoriesFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // srx - computed: true, optional: false, required: false
  public get srx() {
    return this.getListAttribute('srx');
  }

  // ssr - computed: true, optional: false, required: false
  public get ssr() {
    return this.getListAttribute('ssr');
  }
}
export interface DataMistConstAppCategoriesConstAppCategories {
}

export function dataMistConstAppCategoriesConstAppCategoriesToTerraform(struct?: DataMistConstAppCategoriesConstAppCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistConstAppCategoriesConstAppCategoriesToHclTerraform(struct?: DataMistConstAppCategoriesConstAppCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistConstAppCategoriesConstAppCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistConstAppCategoriesConstAppCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistConstAppCategoriesConstAppCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataMistConstAppCategoriesConstAppCategoriesFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataMistConstAppCategoriesConstAppCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistConstAppCategoriesConstAppCategoriesOutputReference {
    return new DataMistConstAppCategoriesConstAppCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/const_app_categories mist_const_app_categories}
*/
export class DataMistConstAppCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_const_app_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistConstAppCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistConstAppCategories to import
  * @param importFromId The id of the existing DataMistConstAppCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/const_app_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistConstAppCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_const_app_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/const_app_categories mist_const_app_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistConstAppCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMistConstAppCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mist_const_app_categories',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
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

  // const_app_categories - computed: true, optional: false, required: false
  private _constAppCategories = new DataMistConstAppCategoriesConstAppCategoriesList(this, "const_app_categories", true);
  public get constAppCategories() {
    return this._constAppCategories;
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
