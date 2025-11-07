// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMegaportLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the location. Using ID is strongly recommended as the most reliable way to identify locations since IDs remain constant, unlike names and site codes which can change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location#id DataMegaportLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the location. Note that location names can change over time, which may lead to non-deterministic behavior. For consistent results, use the location ID instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location#name DataMegaportLocation#name}
  */
  readonly name?: string;
  /**
  * DEPRECATED: The site_code field is no longer available in the v3 locations API and will be removed in a future version. Use the location ID instead. Filtering by site_code is no longer supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location#site_code DataMegaportLocation#site_code}
  */
  readonly siteCode?: string;
}
export interface DataMegaportLocationProductsMveDetails {
}

export function dataMegaportLocationProductsMveDetailsToTerraform(struct?: DataMegaportLocationProductsMveDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMegaportLocationProductsMveDetailsToHclTerraform(struct?: DataMegaportLocationProductsMveDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMegaportLocationProductsMveDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMegaportLocationProductsMveDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMegaportLocationProductsMveDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_mbps - computed: true, optional: false, required: false
  public get bandwidthMbps() {
    return this.getNumberAttribute('bandwidth_mbps');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ram_gb - computed: true, optional: false, required: false
  public get ramGb() {
    return this.getNumberAttribute('ram_gb');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }
}

export class DataMegaportLocationProductsMveDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataMegaportLocationProductsMveDetailsOutputReference {
    return new DataMegaportLocationProductsMveDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMegaportLocationProductsMve {
}

export function dataMegaportLocationProductsMveToTerraform(struct?: DataMegaportLocationProductsMve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMegaportLocationProductsMveToHclTerraform(struct?: DataMegaportLocationProductsMve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMegaportLocationProductsMveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMegaportLocationProductsMve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMegaportLocationProductsMve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataMegaportLocationProductsMveDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_cpu_count - computed: true, optional: false, required: false
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // release_image - computed: true, optional: false, required: false
  public get releaseImage() {
    return this.getBooleanAttribute('release_image');
  }

  // sizes - computed: true, optional: false, required: false
  public get sizes() {
    return this.getListAttribute('sizes');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // vendor_description - computed: true, optional: false, required: false
  public get vendorDescription() {
    return this.getStringAttribute('vendor_description');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataMegaportLocationProductsMveList extends cdktf.ComplexList {

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
  public get(index: number): DataMegaportLocationProductsMveOutputReference {
    return new DataMegaportLocationProductsMveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMegaportLocationProducts {
}

export function dataMegaportLocationProductsToTerraform(struct?: DataMegaportLocationProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMegaportLocationProductsToHclTerraform(struct?: DataMegaportLocationProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMegaportLocationProductsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMegaportLocationProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMegaportLocationProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mcr - computed: true, optional: false, required: false
  public get mcr() {
    return this.getBooleanAttribute('mcr');
  }

  // mcr1 - computed: true, optional: false, required: false
  public get mcr1() {
    return this.getNumberListAttribute('mcr1');
  }

  // mcr2 - computed: true, optional: false, required: false
  public get mcr2() {
    return this.getNumberListAttribute('mcr2');
  }

  // mcr_version - computed: true, optional: false, required: false
  public get mcrVersion() {
    return this.getNumberAttribute('mcr_version');
  }

  // megaport - computed: true, optional: false, required: false
  public get megaport() {
    return this.getNumberListAttribute('megaport');
  }

  // mve - computed: true, optional: false, required: false
  private _mve = new DataMegaportLocationProductsMveList(this, "mve", false);
  public get mve() {
    return this._mve;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location megaport_location}
*/
export class DataMegaportLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMegaportLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMegaportLocation to import
  * @param importFromId The id of the existing DataMegaportLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMegaportLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/location megaport_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMegaportLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMegaportLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'megaport_location',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6'
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
    this._name = config.name;
    this._siteCode = config.siteCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  private _address = new cdktf.StringMap(this, "address");
  public get address() {
    return this._address;
  }

  // campus - computed: true, optional: false, required: false
  public get campus() {
    return this.getStringAttribute('campus');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // live_date - computed: true, optional: false, required: false
  public get liveDate() {
    return this.getStringAttribute('live_date');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // metro - computed: true, optional: false, required: false
  public get metro() {
    return this.getStringAttribute('metro');
  }

  // name - computed: true, optional: true, required: false
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

  // network_region - computed: true, optional: false, required: false
  public get networkRegion() {
    return this.getStringAttribute('network_region');
  }

  // products - computed: true, optional: false, required: false
  private _products = new DataMegaportLocationProductsOutputReference(this, "products");
  public get products() {
    return this._products;
  }

  // site_code - computed: true, optional: true, required: false
  private _siteCode?: string; 
  public get siteCode() {
    return this.getStringAttribute('site_code');
  }
  public set siteCode(value: string) {
    this._siteCode = value;
  }
  public resetSiteCode() {
    this._siteCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCodeInput() {
    return this._siteCode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // v_router_available - computed: true, optional: false, required: false
  public get vRouterAvailable() {
    return this.getBooleanAttribute('v_router_available');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      site_code: cdktf.stringToTerraform(this._siteCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_code: {
        value: cdktf.stringToHclTerraform(this._siteCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
