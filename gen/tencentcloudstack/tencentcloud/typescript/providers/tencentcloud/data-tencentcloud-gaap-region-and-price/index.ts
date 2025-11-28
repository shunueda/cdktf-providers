// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudGaapRegionAndPriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price#id DataTencentcloudGaapRegionAndPrice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP version. Available values: IPv4, IPv6. Default is IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price#ip_address_version DataTencentcloudGaapRegionAndPrice#ip_address_version}
  */
  readonly ipAddressVersion?: string;
  /**
  * Type of channel package. `Thunder` represents standard channel group, `Accelerator` represents game accelerator channel, and `CrossBorder` represents cross-border channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price#package_type DataTencentcloudGaapRegionAndPrice#package_type}
  */
  readonly packageType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price#result_output_file DataTencentcloudGaapRegionAndPrice#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudGaapRegionAndPriceBandwidthUnitPrice {
}

export function dataTencentcloudGaapRegionAndPriceBandwidthUnitPriceToTerraform(struct?: DataTencentcloudGaapRegionAndPriceBandwidthUnitPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapRegionAndPriceBandwidthUnitPriceToHclTerraform(struct?: DataTencentcloudGaapRegionAndPriceBandwidthUnitPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapRegionAndPriceBandwidthUnitPriceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapRegionAndPriceBandwidthUnitPrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapRegionAndPriceBandwidthUnitPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_range - computed: true, optional: false, required: false
  public get bandwidthRange() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('bandwidth_range')));
  }

  // bandwidth_unit_price - computed: true, optional: false, required: false
  public get bandwidthUnitPrice() {
    return this.getNumberAttribute('bandwidth_unit_price');
  }

  // discount_bandwidth_unit_price - computed: true, optional: false, required: false
  public get discountBandwidthUnitPrice() {
    return this.getNumberAttribute('discount_bandwidth_unit_price');
  }
}

export class DataTencentcloudGaapRegionAndPriceBandwidthUnitPriceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapRegionAndPriceBandwidthUnitPriceOutputReference {
    return new DataTencentcloudGaapRegionAndPriceBandwidthUnitPriceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeature {
}

export function dataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureToTerraform(struct?: DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureToHclTerraform(struct?: DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return cdktf.Fn.tolist(this.getListAttribute('network_type'));
  }
}

export class DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureOutputReference {
    return new DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapRegionAndPriceDestRegionSet {
}

export function dataTencentcloudGaapRegionAndPriceDestRegionSetToTerraform(struct?: DataTencentcloudGaapRegionAndPriceDestRegionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapRegionAndPriceDestRegionSetToHclTerraform(struct?: DataTencentcloudGaapRegionAndPriceDestRegionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapRegionAndPriceDestRegionSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapRegionAndPriceDestRegionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapRegionAndPriceDestRegionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_bitmap - computed: true, optional: false, required: false
  public get featureBitmap() {
    return this.getNumberAttribute('feature_bitmap');
  }

  // idc_type - computed: true, optional: false, required: false
  public get idcType() {
    return this.getStringAttribute('idc_type');
  }

  // region_area - computed: true, optional: false, required: false
  public get regionArea() {
    return this.getStringAttribute('region_area');
  }

  // region_area_name - computed: true, optional: false, required: false
  public get regionAreaName() {
    return this.getStringAttribute('region_area_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // support_feature - computed: true, optional: false, required: false
  private _supportFeature = new DataTencentcloudGaapRegionAndPriceDestRegionSetSupportFeatureList(this, "support_feature", false);
  public get supportFeature() {
    return this._supportFeature;
  }
}

export class DataTencentcloudGaapRegionAndPriceDestRegionSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapRegionAndPriceDestRegionSetOutputReference {
    return new DataTencentcloudGaapRegionAndPriceDestRegionSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price tencentcloud_gaap_region_and_price}
*/
export class DataTencentcloudGaapRegionAndPrice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_region_and_price";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudGaapRegionAndPrice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudGaapRegionAndPrice to import
  * @param importFromId The id of the existing DataTencentcloudGaapRegionAndPrice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudGaapRegionAndPrice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_region_and_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/gaap_region_and_price tencentcloud_gaap_region_and_price} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudGaapRegionAndPriceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudGaapRegionAndPriceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_region_and_price',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipAddressVersion = config.ipAddressVersion;
    this._packageType = config.packageType;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_unit_price - computed: true, optional: false, required: false
  private _bandwidthUnitPrice = new DataTencentcloudGaapRegionAndPriceBandwidthUnitPriceList(this, "bandwidth_unit_price", false);
  public get bandwidthUnitPrice() {
    return this._bandwidthUnitPrice;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // dest_region_set - computed: true, optional: false, required: false
  private _destRegionSet = new DataTencentcloudGaapRegionAndPriceDestRegionSetList(this, "dest_region_set", false);
  public get destRegionSet() {
    return this._destRegionSet;
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

  // ip_address_version - computed: false, optional: true, required: false
  private _ipAddressVersion?: string; 
  public get ipAddressVersion() {
    return this.getStringAttribute('ip_address_version');
  }
  public set ipAddressVersion(value: string) {
    this._ipAddressVersion = value;
  }
  public resetIpAddressVersion() {
    this._ipAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVersionInput() {
    return this._ipAddressVersion;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_address_version: cdktf.stringToTerraform(this._ipAddressVersion),
      package_type: cdktf.stringToTerraform(this._packageType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_version: {
        value: cdktf.stringToHclTerraform(this._ipAddressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
