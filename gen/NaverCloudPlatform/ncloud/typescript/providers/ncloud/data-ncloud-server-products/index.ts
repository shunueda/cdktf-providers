// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudServerProductsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#exclusion_product_code DataNcloudServerProducts#exclusion_product_code}
  */
  readonly exclusionProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#id DataNcloudServerProducts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#output_file DataNcloudServerProducts#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#product_code DataNcloudServerProducts#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#server_image_product_code DataNcloudServerProducts#server_image_product_code}
  */
  readonly serverImageProductCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#zone DataNcloudServerProducts#zone}
  */
  readonly zone?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#filter DataNcloudServerProducts#filter}
  */
  readonly filter?: DataNcloudServerProductsFilter[] | cdktf.IResolvable;
}
export interface DataNcloudServerProductsServerProducts {
}

export function dataNcloudServerProductsServerProductsToTerraform(struct?: DataNcloudServerProductsServerProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudServerProductsServerProductsToHclTerraform(struct?: DataNcloudServerProductsServerProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudServerProductsServerProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudServerProductsServerProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudServerProductsServerProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_block_storage_size - computed: true, optional: false, required: false
  public get baseBlockStorageSize() {
    return this.getStringAttribute('base_block_storage_size');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // generation_code - computed: true, optional: false, required: false
  public get generationCode() {
    return this.getStringAttribute('generation_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infra_resource_type - computed: true, optional: false, required: false
  public get infraResourceType() {
    return this.getStringAttribute('infra_resource_type');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // product_description - computed: true, optional: false, required: false
  public get productDescription() {
    return this.getStringAttribute('product_description');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // server_image_product_code - computed: true, optional: false, required: false
  public get serverImageProductCode() {
    return this.getStringAttribute('server_image_product_code');
  }
}

export class DataNcloudServerProductsServerProductsList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudServerProductsServerProductsOutputReference {
    return new DataNcloudServerProductsServerProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudServerProductsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#name DataNcloudServerProducts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#regex DataNcloudServerProducts#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#values DataNcloudServerProducts#values}
  */
  readonly values: string[];
}

export function dataNcloudServerProductsFilterToTerraform(struct?: DataNcloudServerProductsFilter | cdktf.IResolvable): any {
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


export function dataNcloudServerProductsFilterToHclTerraform(struct?: DataNcloudServerProductsFilter | cdktf.IResolvable): any {
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

export class DataNcloudServerProductsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudServerProductsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNcloudServerProductsFilter | cdktf.IResolvable | undefined) {
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

export class DataNcloudServerProductsFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudServerProductsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudServerProductsFilterOutputReference {
    return new DataNcloudServerProductsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products ncloud_server_products}
*/
export class DataNcloudServerProducts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_server_products";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudServerProducts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudServerProducts to import
  * @param importFromId The id of the existing DataNcloudServerProducts that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudServerProducts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_server_products", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/server_products ncloud_server_products} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudServerProductsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNcloudServerProductsConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_server_products',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exclusionProductCode = config.exclusionProductCode;
    this._id = config.id;
    this._outputFile = config.outputFile;
    this._productCode = config.productCode;
    this._serverImageProductCode = config.serverImageProductCode;
    this._zone = config.zone;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclusion_product_code - computed: false, optional: true, required: false
  private _exclusionProductCode?: string; 
  public get exclusionProductCode() {
    return this.getStringAttribute('exclusion_product_code');
  }
  public set exclusionProductCode(value: string) {
    this._exclusionProductCode = value;
  }
  public resetExclusionProductCode() {
    this._exclusionProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionProductCodeInput() {
    return this._exclusionProductCode;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // product_code - computed: true, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // server_image_product_code - computed: false, optional: false, required: true
  private _serverImageProductCode?: string; 
  public get serverImageProductCode() {
    return this.getStringAttribute('server_image_product_code');
  }
  public set serverImageProductCode(value: string) {
    this._serverImageProductCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageProductCodeInput() {
    return this._serverImageProductCode;
  }

  // server_products - computed: true, optional: false, required: false
  private _serverProducts = new DataNcloudServerProductsServerProductsList(this, "server_products", false);
  public get serverProducts() {
    return this._serverProducts;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudServerProductsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudServerProductsFilter[] | cdktf.IResolvable) {
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
      exclusion_product_code: cdktf.stringToTerraform(this._exclusionProductCode),
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product_code: cdktf.stringToTerraform(this._productCode),
      server_image_product_code: cdktf.stringToTerraform(this._serverImageProductCode),
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dataNcloudServerProductsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclusion_product_code: {
        value: cdktf.stringToHclTerraform(this._exclusionProductCode),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_image_product_code: {
        value: cdktf.stringToHclTerraform(this._serverImageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudServerProductsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudServerProductsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
