// https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHivelocityProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#first DataHivelocityProduct#first}
  */
  readonly first?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#id DataHivelocityProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#filter DataHivelocityProduct#filter}
  */
  readonly filter?: DataHivelocityProductFilter[] | cdktf.IResolvable;
}
export interface DataHivelocityProductFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#name DataHivelocityProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#values DataHivelocityProduct#values}
  */
  readonly values: string[];
}

export function dataHivelocityProductFilterToTerraform(struct?: DataHivelocityProductFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataHivelocityProductFilterToHclTerraform(struct?: DataHivelocityProductFilter | cdktf.IResolvable): any {
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

export class DataHivelocityProductFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHivelocityProductFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHivelocityProductFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class DataHivelocityProductFilterList extends cdktf.ComplexList {
  public internalValue? : DataHivelocityProductFilter[] | cdktf.IResolvable

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
  public get(index: number): DataHivelocityProductFilterOutputReference {
    return new DataHivelocityProductFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product hivelocity_product}
*/
export class DataHivelocityProduct extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hivelocity_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHivelocityProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHivelocityProduct to import
  * @param importFromId The id of the existing DataHivelocityProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHivelocityProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hivelocity_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/product hivelocity_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHivelocityProductConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHivelocityProductConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hivelocity_product',
      terraformGeneratorMetadata: {
        providerName: 'hivelocity',
        providerVersion: '0.7.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._first = config.first;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annually_location_premium - computed: true, optional: false, required: false
  public get annuallyLocationPremium() {
    return this.getNumberAttribute('annually_location_premium');
  }

  // biennial_location_premium - computed: true, optional: false, required: false
  public get biennialLocationPremium() {
    return this.getNumberAttribute('biennial_location_premium');
  }

  // core - computed: true, optional: false, required: false
  public get core() {
    return this.getBooleanAttribute('core');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // edge - computed: true, optional: false, required: false
  public get edge() {
    return this.getBooleanAttribute('edge');
  }

  // first - computed: false, optional: true, required: false
  private _first?: boolean | cdktf.IResolvable; 
  public get first() {
    return this.getBooleanAttribute('first');
  }
  public set first(value: boolean | cdktf.IResolvable) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // hourly_location_premium - computed: true, optional: false, required: false
  public get hourlyLocationPremium() {
    return this.getNumberAttribute('hourly_location_premium');
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

  // monthly_location_premium - computed: true, optional: false, required: false
  public get monthlyLocationPremium() {
    return this.getNumberAttribute('monthly_location_premium');
  }

  // product_annually_price - computed: true, optional: false, required: false
  public get productAnnuallyPrice() {
    return this.getNumberAttribute('product_annually_price');
  }

  // product_bandwidth - computed: true, optional: false, required: false
  public get productBandwidth() {
    return this.getStringAttribute('product_bandwidth');
  }

  // product_biennial_price - computed: true, optional: false, required: false
  public get productBiennialPrice() {
    return this.getNumberAttribute('product_biennial_price');
  }

  // product_cpu - computed: true, optional: false, required: false
  public get productCpu() {
    return this.getStringAttribute('product_cpu');
  }

  // product_cpu_cores - computed: true, optional: false, required: false
  public get productCpuCores() {
    return this.getStringAttribute('product_cpu_cores');
  }

  // product_disabled_billing_periods - computed: true, optional: false, required: false
  public get productDisabledBillingPeriods() {
    return this.getListAttribute('product_disabled_billing_periods');
  }

  // product_display_price - computed: true, optional: false, required: false
  public get productDisplayPrice() {
    return this.getNumberAttribute('product_display_price');
  }

  // product_drive - computed: true, optional: false, required: false
  public get productDrive() {
    return this.getStringAttribute('product_drive');
  }

  // product_gpu - computed: true, optional: false, required: false
  public get productGpu() {
    return this.getStringAttribute('product_gpu');
  }

  // product_hourly_price - computed: true, optional: false, required: false
  public get productHourlyPrice() {
    return this.getNumberAttribute('product_hourly_price');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_memory - computed: true, optional: false, required: false
  public get productMemory() {
    return this.getStringAttribute('product_memory');
  }

  // product_monthly_price - computed: true, optional: false, required: false
  public get productMonthlyPrice() {
    return this.getNumberAttribute('product_monthly_price');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_on_sale - computed: true, optional: false, required: false
  public get productOnSale() {
    return this.getBooleanAttribute('product_on_sale');
  }

  // product_original_price - computed: true, optional: false, required: false
  public get productOriginalPrice() {
    return this.getNumberAttribute('product_original_price');
  }

  // product_quarterly_price - computed: true, optional: false, required: false
  public get productQuarterlyPrice() {
    return this.getNumberAttribute('product_quarterly_price');
  }

  // product_semi_annually_price - computed: true, optional: false, required: false
  public get productSemiAnnuallyPrice() {
    return this.getNumberAttribute('product_semi_annually_price');
  }

  // product_triennial_price - computed: true, optional: false, required: false
  public get productTriennialPrice() {
    return this.getNumberAttribute('product_triennial_price');
  }

  // quarterly_location_premium - computed: true, optional: false, required: false
  public get quarterlyLocationPremium() {
    return this.getNumberAttribute('quarterly_location_premium');
  }

  // semi_annually_location_premium - computed: true, optional: false, required: false
  public get semiAnnuallyLocationPremium() {
    return this.getNumberAttribute('semi_annually_location_premium');
  }

  // stock - computed: true, optional: false, required: false
  public get stock() {
    return this.getStringAttribute('stock');
  }

  // triennial_location_premium - computed: true, optional: false, required: false
  public get triennialLocationPremium() {
    return this.getNumberAttribute('triennial_location_premium');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataHivelocityProductFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHivelocityProductFilter[] | cdktf.IResolvable) {
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
      first: cdktf.booleanToTerraform(this._first),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataHivelocityProductFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first: {
        value: cdktf.booleanToHclTerraform(this._first),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataHivelocityProductFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHivelocityProductFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
