// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricBillingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Circuit ID of the target cloud router.
  * 		Example: "PF-L3-CUST-2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing#circuit_id DataPacketfabricBilling#circuit_id}
  */
  readonly circuitId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing#id DataPacketfabricBilling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricBillingBillingsBillables {
}

export function dataPacketfabricBillingBillingsBillablesToTerraform(struct?: DataPacketfabricBillingBillingsBillables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricBillingBillingsBillablesToHclTerraform(struct?: DataPacketfabricBillingBillingsBillables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricBillingBillingsBillablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricBillingBillingsBillables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricBillingBillingsBillables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // adjusted_price - computed: true, optional: false, required: false
  public get adjustedPrice() {
    return this.getNumberAttribute('adjusted_price');
  }

  // billable_id - computed: true, optional: false, required: false
  public get billableId() {
    return this.getNumberAttribute('billable_id');
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // price_type - computed: true, optional: false, required: false
  public get priceType() {
    return this.getStringAttribute('price_type');
  }
}

export class DataPacketfabricBillingBillingsBillablesList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricBillingBillingsBillablesOutputReference {
    return new DataPacketfabricBillingBillingsBillablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricBillingBillingsProductDetails {
}

export function dataPacketfabricBillingBillingsProductDetailsToTerraform(struct?: DataPacketfabricBillingBillingsProductDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricBillingBillingsProductDetailsToHclTerraform(struct?: DataPacketfabricBillingBillingsProductDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricBillingBillingsProductDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricBillingBillingsProductDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricBillingBillingsProductDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_date - computed: true, optional: false, required: false
  public get activeDate() {
    return this.getStringAttribute('active_date');
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // translation_id - computed: true, optional: false, required: false
  public get translationId() {
    return this.getNumberAttribute('translation_id');
  }

  // vc_service_class - computed: true, optional: false, required: false
  public get vcServiceClass() {
    return this.getStringAttribute('vc_service_class');
  }

  // vc_type - computed: true, optional: false, required: false
  public get vcType() {
    return this.getStringAttribute('vc_type');
  }
}

export class DataPacketfabricBillingBillingsProductDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricBillingBillingsProductDetailsOutputReference {
    return new DataPacketfabricBillingBillingsProductDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricBillingBillingsTerm {
}

export function dataPacketfabricBillingBillingsTermToTerraform(struct?: DataPacketfabricBillingBillingsTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricBillingBillingsTermToHclTerraform(struct?: DataPacketfabricBillingBillingsTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricBillingBillingsTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricBillingBillingsTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricBillingBillingsTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_end_date - computed: true, optional: false, required: false
  public get commitmentEndDate() {
    return this.getStringAttribute('commitment_end_date');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getNumberAttribute('months');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // termination_date - computed: true, optional: false, required: false
  public get terminationDate() {
    return this.getStringAttribute('termination_date');
  }
}

export class DataPacketfabricBillingBillingsTermList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricBillingBillingsTermOutputReference {
    return new DataPacketfabricBillingBillingsTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricBillingBillings {
}

export function dataPacketfabricBillingBillingsToTerraform(struct?: DataPacketfabricBillingBillings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricBillingBillingsToHclTerraform(struct?: DataPacketfabricBillingBillings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricBillingBillingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricBillingBillings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricBillingBillings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // billables - computed: true, optional: false, required: false
  private _billables = new DataPacketfabricBillingBillingsBillablesList(this, "billables", false);
  public get billables() {
    return this._billables;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }

  // order_type - computed: true, optional: false, required: false
  public get orderType() {
    return this.getStringAttribute('order_type');
  }

  // parent_order - computed: true, optional: false, required: false
  public get parentOrder() {
    return this.getNumberAttribute('parent_order');
  }

  // product_details - computed: true, optional: false, required: false
  private _productDetails = new DataPacketfabricBillingBillingsProductDetailsList(this, "product_details", true);
  public get productDetails() {
    return this._productDetails;
  }

  // term - computed: true, optional: false, required: false
  private _term = new DataPacketfabricBillingBillingsTermList(this, "term", true);
  public get term() {
    return this._term;
  }
}

export class DataPacketfabricBillingBillingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricBillingBillingsOutputReference {
    return new DataPacketfabricBillingBillingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing packetfabric_billing}
*/
export class DataPacketfabricBilling extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_billing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricBilling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricBilling to import
  * @param importFromId The id of the existing DataPacketfabricBilling that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricBilling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_billing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/billing packetfabric_billing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricBillingConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricBillingConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_billing',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitId = config.circuitId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billings - computed: true, optional: false, required: false
  private _billings = new DataPacketfabricBillingBillingsList(this, "billings", false);
  public get billings() {
    return this._billings;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
