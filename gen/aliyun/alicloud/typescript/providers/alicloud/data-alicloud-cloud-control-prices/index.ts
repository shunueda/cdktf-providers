// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudControlPricesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#desire_attributes DataAlicloudCloudControlPrices#desire_attributes}
  */
  readonly desireAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#id DataAlicloudCloudControlPrices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#output_file DataAlicloudCloudControlPrices#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#product DataAlicloudCloudControlPrices#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#resource_code DataAlicloudCloudControlPrices#resource_code}
  */
  readonly resourceCode: string;
}
export interface DataAlicloudCloudControlPricesPricesModuleDetails {
}

export function dataAlicloudCloudControlPricesPricesModuleDetailsToTerraform(struct?: DataAlicloudCloudControlPricesPricesModuleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudControlPricesPricesModuleDetailsToHclTerraform(struct?: DataAlicloudCloudControlPricesPricesModuleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudControlPricesPricesModuleDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudControlPricesPricesModuleDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudControlPricesPricesModuleDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_after_discount - computed: true, optional: false, required: false
  public get costAfterDiscount() {
    return this.getNumberAttribute('cost_after_discount');
  }

  // invoice_discount - computed: true, optional: false, required: false
  public get invoiceDiscount() {
    return this.getNumberAttribute('invoice_discount');
  }

  // module_code - computed: true, optional: false, required: false
  public get moduleCode() {
    return this.getStringAttribute('module_code');
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // original_cost - computed: true, optional: false, required: false
  public get originalCost() {
    return this.getNumberAttribute('original_cost');
  }

  // price_type - computed: true, optional: false, required: false
  public get priceType() {
    return this.getStringAttribute('price_type');
  }
}

export class DataAlicloudCloudControlPricesPricesModuleDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudControlPricesPricesModuleDetailsOutputReference {
    return new DataAlicloudCloudControlPricesPricesModuleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudControlPricesPricesPromotionDetails {
}

export function dataAlicloudCloudControlPricesPricesPromotionDetailsToTerraform(struct?: DataAlicloudCloudControlPricesPricesPromotionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudControlPricesPricesPromotionDetailsToHclTerraform(struct?: DataAlicloudCloudControlPricesPricesPromotionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudControlPricesPricesPromotionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudControlPricesPricesPromotionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudControlPricesPricesPromotionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // promotion_desc - computed: true, optional: false, required: false
  public get promotionDesc() {
    return this.getStringAttribute('promotion_desc');
  }

  // promotion_id - computed: true, optional: false, required: false
  public get promotionId() {
    return this.getNumberAttribute('promotion_id');
  }

  // promotion_name - computed: true, optional: false, required: false
  public get promotionName() {
    return this.getStringAttribute('promotion_name');
  }
}

export class DataAlicloudCloudControlPricesPricesPromotionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudControlPricesPricesPromotionDetailsOutputReference {
    return new DataAlicloudCloudControlPricesPricesPromotionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudControlPricesPrices {
}

export function dataAlicloudCloudControlPricesPricesToTerraform(struct?: DataAlicloudCloudControlPricesPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudControlPricesPricesToHclTerraform(struct?: DataAlicloudCloudControlPricesPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudControlPricesPricesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudControlPricesPrices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudControlPricesPrices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // discount_price - computed: true, optional: false, required: false
  public get discountPrice() {
    return this.getNumberAttribute('discount_price');
  }

  // module_details - computed: true, optional: false, required: false
  private _moduleDetails = new DataAlicloudCloudControlPricesPricesModuleDetailsList(this, "module_details", false);
  public get moduleDetails() {
    return this._moduleDetails;
  }

  // original_price - computed: true, optional: false, required: false
  public get originalPrice() {
    return this.getNumberAttribute('original_price');
  }

  // promotion_details - computed: true, optional: false, required: false
  private _promotionDetails = new DataAlicloudCloudControlPricesPricesPromotionDetailsList(this, "promotion_details", false);
  public get promotionDetails() {
    return this._promotionDetails;
  }

  // trade_price - computed: true, optional: false, required: false
  public get tradePrice() {
    return this.getNumberAttribute('trade_price');
  }
}

export class DataAlicloudCloudControlPricesPricesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudControlPricesPricesOutputReference {
    return new DataAlicloudCloudControlPricesPricesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices alicloud_cloud_control_prices}
*/
export class DataAlicloudCloudControlPrices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_control_prices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudControlPrices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudControlPrices to import
  * @param importFromId The id of the existing DataAlicloudCloudControlPrices that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudControlPrices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_control_prices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_control_prices alicloud_cloud_control_prices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudControlPricesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudControlPricesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_control_prices',
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
    this._desireAttributes = config.desireAttributes;
    this._id = config.id;
    this._outputFile = config.outputFile;
    this._product = config.product;
    this._resourceCode = config.resourceCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desire_attributes - computed: false, optional: true, required: false
  private _desireAttributes?: { [key: string]: string }; 
  public get desireAttributes() {
    return this.getStringMapAttribute('desire_attributes');
  }
  public set desireAttributes(value: { [key: string]: string }) {
    this._desireAttributes = value;
  }
  public resetDesireAttributes() {
    this._desireAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desireAttributesInput() {
    return this._desireAttributes;
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

  // prices - computed: true, optional: false, required: false
  private _prices = new DataAlicloudCloudControlPricesPricesList(this, "prices", false);
  public get prices() {
    return this._prices;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // resource_code - computed: false, optional: false, required: true
  private _resourceCode?: string; 
  public get resourceCode() {
    return this.getStringAttribute('resource_code');
  }
  public set resourceCode(value: string) {
    this._resourceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCodeInput() {
    return this._resourceCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desire_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._desireAttributes),
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product: cdktf.stringToTerraform(this._product),
      resource_code: cdktf.stringToTerraform(this._resourceCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desire_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._desireAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_code: {
        value: cdktf.stringToHclTerraform(this._resourceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
