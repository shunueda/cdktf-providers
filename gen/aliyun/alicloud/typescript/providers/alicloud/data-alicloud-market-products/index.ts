// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudMarketProductsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#category_id DataAlicloudMarketProducts#category_id}
  */
  readonly categoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#id DataAlicloudMarketProducts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#ids DataAlicloudMarketProducts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#name_regex DataAlicloudMarketProducts#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#output_file DataAlicloudMarketProducts#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#product_type DataAlicloudMarketProducts#product_type}
  */
  readonly productType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#search_term DataAlicloudMarketProducts#search_term}
  */
  readonly searchTerm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#sort DataAlicloudMarketProducts#sort}
  */
  readonly sort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#suggested_price DataAlicloudMarketProducts#suggested_price}
  */
  readonly suggestedPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#supplier_id DataAlicloudMarketProducts#supplier_id}
  */
  readonly supplierId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#supplier_name_keyword DataAlicloudMarketProducts#supplier_name_keyword}
  */
  readonly supplierNameKeyword?: string;
}
export interface DataAlicloudMarketProductsProducts {
}

export function dataAlicloudMarketProductsProductsToTerraform(struct?: DataAlicloudMarketProductsProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudMarketProductsProductsToHclTerraform(struct?: DataAlicloudMarketProductsProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudMarketProductsProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudMarketProductsProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudMarketProductsProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getNumberAttribute('category_id');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // delivery_date - computed: true, optional: false, required: false
  public get deliveryDate() {
    return this.getStringAttribute('delivery_date');
  }

  // delivery_way - computed: true, optional: false, required: false
  public get deliveryWay() {
    return this.getStringAttribute('delivery_way');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation_system - computed: true, optional: false, required: false
  public get operationSystem() {
    return this.getStringAttribute('operation_system');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getStringAttribute('score');
  }

  // short_description - computed: true, optional: false, required: false
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }

  // suggested_price - computed: true, optional: false, required: false
  public get suggestedPrice() {
    return this.getStringAttribute('suggested_price');
  }

  // supplier_id - computed: true, optional: false, required: false
  public get supplierId() {
    return this.getNumberAttribute('supplier_id');
  }

  // supplier_name - computed: true, optional: false, required: false
  public get supplierName() {
    return this.getStringAttribute('supplier_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // target_url - computed: true, optional: false, required: false
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }

  // warranty_date - computed: true, optional: false, required: false
  public get warrantyDate() {
    return this.getStringAttribute('warranty_date');
  }
}

export class DataAlicloudMarketProductsProductsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudMarketProductsProductsOutputReference {
    return new DataAlicloudMarketProductsProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products alicloud_market_products}
*/
export class DataAlicloudMarketProducts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_market_products";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudMarketProducts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudMarketProducts to import
  * @param importFromId The id of the existing DataAlicloudMarketProducts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudMarketProducts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_market_products", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/market_products alicloud_market_products} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudMarketProductsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudMarketProductsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_market_products',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryId = config.categoryId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._productType = config.productType;
    this._searchTerm = config.searchTerm;
    this._sort = config.sort;
    this._suggestedPrice = config.suggestedPrice;
    this._supplierId = config.supplierId;
    this._supplierNameKeyword = config.supplierNameKeyword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_id - computed: false, optional: true, required: false
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  public resetCategoryId() {
    this._categoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // products - computed: true, optional: false, required: false
  private _products = new DataAlicloudMarketProductsProductsList(this, "products", false);
  public get products() {
    return this._products;
  }

  // search_term - computed: false, optional: true, required: false
  private _searchTerm?: string; 
  public get searchTerm() {
    return this.getStringAttribute('search_term');
  }
  public set searchTerm(value: string) {
    this._searchTerm = value;
  }
  public resetSearchTerm() {
    this._searchTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTermInput() {
    return this._searchTerm;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // suggested_price - computed: false, optional: true, required: false
  private _suggestedPrice?: number; 
  public get suggestedPrice() {
    return this.getNumberAttribute('suggested_price');
  }
  public set suggestedPrice(value: number) {
    this._suggestedPrice = value;
  }
  public resetSuggestedPrice() {
    this._suggestedPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedPriceInput() {
    return this._suggestedPrice;
  }

  // supplier_id - computed: false, optional: true, required: false
  private _supplierId?: string; 
  public get supplierId() {
    return this.getStringAttribute('supplier_id');
  }
  public set supplierId(value: string) {
    this._supplierId = value;
  }
  public resetSupplierId() {
    this._supplierId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplierIdInput() {
    return this._supplierId;
  }

  // supplier_name_keyword - computed: false, optional: true, required: false
  private _supplierNameKeyword?: string; 
  public get supplierNameKeyword() {
    return this.getStringAttribute('supplier_name_keyword');
  }
  public set supplierNameKeyword(value: string) {
    this._supplierNameKeyword = value;
  }
  public resetSupplierNameKeyword() {
    this._supplierNameKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplierNameKeywordInput() {
    return this._supplierNameKeyword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_id: cdktf.stringToTerraform(this._categoryId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product_type: cdktf.stringToTerraform(this._productType),
      search_term: cdktf.stringToTerraform(this._searchTerm),
      sort: cdktf.stringToTerraform(this._sort),
      suggested_price: cdktf.numberToTerraform(this._suggestedPrice),
      supplier_id: cdktf.stringToTerraform(this._supplierId),
      supplier_name_keyword: cdktf.stringToTerraform(this._supplierNameKeyword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_id: {
        value: cdktf.stringToHclTerraform(this._categoryId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_type: {
        value: cdktf.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_term: {
        value: cdktf.stringToHclTerraform(this._searchTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suggested_price: {
        value: cdktf.numberToHclTerraform(this._suggestedPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      supplier_id: {
        value: cdktf.stringToHclTerraform(this._supplierId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supplier_name_keyword: {
        value: cdktf.stringToHclTerraform(this._supplierNameKeyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
