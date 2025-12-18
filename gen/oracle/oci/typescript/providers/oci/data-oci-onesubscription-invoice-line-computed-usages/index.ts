// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnesubscriptionInvoiceLineComputedUsagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}
  */
  readonly invoiceLineId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}
  */
  readonly filter?: DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[] | cdktf.IResolvable;
}
export interface DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct {
}

export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductToTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductToHclTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference {
    return new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct {
}

export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductToTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductToHclTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing_category - computed: true, optional: false, required: false
  public get billingCategory() {
    return this.getStringAttribute('billing_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // ucm_rate_card_part_type - computed: true, optional: false, required: false
  public get ucmRateCardPartType() {
    return this.getStringAttribute('ucm_rate_card_part_type');
  }

  // unit_of_measure - computed: true, optional: false, required: false
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference {
    return new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages {
}

export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesToTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesToHclTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_rounded - computed: true, optional: false, required: false
  public get costRounded() {
    return this.getNumberAttribute('cost_rounded');
  }

  // net_unit_price - computed: true, optional: false, required: false
  public get netUnitPrice() {
    return this.getNumberAttribute('net_unit_price');
  }

  // parent_product - computed: true, optional: false, required: false
  private _parentProduct = new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList(this, "parent_product", false);
  public get parentProduct() {
    return this._parentProduct;
  }

  // product - computed: true, optional: false, required: false
  private _product = new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList(this, "product", false);
  public get product() {
    return this._product;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // time_metered_on - computed: true, optional: false, required: false
  public get timeMeteredOn() {
    return this.getStringAttribute('time_metered_on');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference {
    return new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOnesubscriptionInvoiceLineComputedUsagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}
  */
  readonly values: string[];
}

export function dataOciOnesubscriptionInvoiceLineComputedUsagesFilterToTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOnesubscriptionInvoiceLineComputedUsagesFilterToHclTerraform(struct?: DataOciOnesubscriptionInvoiceLineComputedUsagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOnesubscriptionInvoiceLineComputedUsagesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOnesubscriptionInvoiceLineComputedUsagesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference {
    return new DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages}
*/
export class DataOciOnesubscriptionInvoiceLineComputedUsages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_onesubscription_invoice_line_computed_usages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnesubscriptionInvoiceLineComputedUsages to import
  * @param importFromId The id of the existing DataOciOnesubscriptionInvoiceLineComputedUsages that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnesubscriptionInvoiceLineComputedUsages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_onesubscription_invoice_line_computed_usages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnesubscriptionInvoiceLineComputedUsagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnesubscriptionInvoiceLineComputedUsagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_onesubscription_invoice_line_computed_usages',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._fields = config.fields;
    this._id = config.id;
    this._invoiceLineId = config.invoiceLineId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // invoice_line_id - computed: false, optional: false, required: true
  private _invoiceLineId?: string; 
  public get invoiceLineId() {
    return this.getStringAttribute('invoice_line_id');
  }
  public set invoiceLineId(value: string) {
    this._invoiceLineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceLineIdInput() {
    return this._invoiceLineId;
  }

  // invoiceline_computed_usages - computed: true, optional: false, required: false
  private _invoicelineComputedUsages = new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList(this, "invoiceline_computed_usages", false);
  public get invoicelineComputedUsages() {
    return this._invoicelineComputedUsages;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      invoice_line_id: cdktf.stringToTerraform(this._invoiceLineId),
      filter: cdktf.listMapper(dataOciOnesubscriptionInvoiceLineComputedUsagesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoice_line_id: {
        value: cdktf.stringToHclTerraform(this._invoiceLineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOnesubscriptionInvoiceLineComputedUsagesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
