// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsCategoriesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_display_text DataOciLogAnalyticsLogAnalyticsCategoriesList#category_display_text}
  */
  readonly categoryDisplayText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_type DataOciLogAnalyticsLogAnalyticsCategoriesList#category_type}
  */
  readonly categoryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#id DataOciLogAnalyticsLogAnalyticsCategoriesList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#name DataOciLogAnalyticsLogAnalyticsCategoriesList#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#namespace DataOciLogAnalyticsLogAnalyticsCategoriesList#namespace}
  */
  readonly namespace: string;
}
export interface DataOciLogAnalyticsLogAnalyticsCategoriesListItems {
}

export function dataOciLogAnalyticsLogAnalyticsCategoriesListItemsToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsCategoriesListItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsCategoriesListItemsToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsCategoriesListItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsCategoriesListItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsCategoriesListItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list oci_log_analytics_log_analytics_categories_list}
*/
export class DataOciLogAnalyticsLogAnalyticsCategoriesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_categories_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsCategoriesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsCategoriesList to import
  * @param importFromId The id of the existing DataOciLogAnalyticsLogAnalyticsCategoriesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsCategoriesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_categories_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_categories_list oci_log_analytics_log_analytics_categories_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsCategoriesListConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsCategoriesListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_categories_list',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryDisplayText = config.categoryDisplayText;
    this._categoryType = config.categoryType;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_display_text - computed: false, optional: true, required: false
  private _categoryDisplayText?: string; 
  public get categoryDisplayText() {
    return this.getStringAttribute('category_display_text');
  }
  public set categoryDisplayText(value: string) {
    this._categoryDisplayText = value;
  }
  public resetCategoryDisplayText() {
    this._categoryDisplayText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryDisplayTextInput() {
    return this._categoryDisplayText;
  }

  // category_type - computed: false, optional: true, required: false
  private _categoryType?: string; 
  public get categoryType() {
    return this.getStringAttribute('category_type');
  }
  public set categoryType(value: string) {
    this._categoryType = value;
  }
  public resetCategoryType() {
    this._categoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryTypeInput() {
    return this._categoryType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_display_text: cdktf.stringToTerraform(this._categoryDisplayText),
      category_type: cdktf.stringToTerraform(this._categoryType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_display_text: {
        value: cdktf.stringToHclTerraform(this._categoryDisplayText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category_type: {
        value: cdktf.stringToHclTerraform(this._categoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
