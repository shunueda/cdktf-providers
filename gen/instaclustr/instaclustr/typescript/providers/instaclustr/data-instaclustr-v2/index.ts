// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#id DataInstaclustrV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cloud_provider_node_sizes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#cloud_provider_node_sizes DataInstaclustrV2#cloud_provider_node_sizes}
  */
  readonly cloudProviderNodeSizes?: DataInstaclustrV2CloudProviderNodeSizes[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#filter DataInstaclustrV2#filter}
  */
  readonly filter?: DataInstaclustrV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrV2CloudProviderNodeSizes {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#cloud_provider DataInstaclustrV2#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Cloud provider documentation of the virtual machine instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#document DataInstaclustrV2#document}
  */
  readonly document?: string;
  /**
  * List of node size names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#node_sizes DataInstaclustrV2#node_sizes}
  */
  readonly nodeSizes?: string[];
}

export function dataInstaclustrV2CloudProviderNodeSizesToTerraform(struct?: DataInstaclustrV2CloudProviderNodeSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    document: cdktf.stringToTerraform(struct!.document),
    node_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeSizes),
  }
}


export function dataInstaclustrV2CloudProviderNodeSizesToHclTerraform(struct?: DataInstaclustrV2CloudProviderNodeSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document: {
      value: cdktf.stringToHclTerraform(struct!.document),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrV2CloudProviderNodeSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrV2CloudProviderNodeSizes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._document !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document;
    }
    if (this._nodeSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSizes = this._nodeSizes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrV2CloudProviderNodeSizes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._document = undefined;
      this._nodeSizes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._document = value.document;
      this._nodeSizes = value.nodeSizes;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // document - computed: true, optional: true, required: false
  private _document?: string; 
  public get document() {
    return this.getStringAttribute('document');
  }
  public set document(value: string) {
    this._document = value;
  }
  public resetDocument() {
    this._document = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
  }

  // node_sizes - computed: true, optional: true, required: false
  private _nodeSizes?: string[]; 
  public get nodeSizes() {
    return this.getListAttribute('node_sizes');
  }
  public set nodeSizes(value: string[]) {
    this._nodeSizes = value;
  }
  public resetNodeSizes() {
    this._nodeSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizesInput() {
    return this._nodeSizes;
  }
}

export class DataInstaclustrV2CloudProviderNodeSizesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrV2CloudProviderNodeSizes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrV2CloudProviderNodeSizesOutputReference {
    return new DataInstaclustrV2CloudProviderNodeSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#name DataInstaclustrV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#values DataInstaclustrV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrV2FilterToTerraform(struct?: DataInstaclustrV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrV2FilterToHclTerraform(struct?: DataInstaclustrV2Filter | cdktf.IResolvable): any {
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

export class DataInstaclustrV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrV2Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrV2Filter | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrV2FilterOutputReference {
    return new DataInstaclustrV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2 instaclustr_v2}
*/
export class DataInstaclustrV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrV2 to import
  * @param importFromId The id of the existing DataInstaclustrV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/v2 instaclustr_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.37',
        providerVersionConstraint: '2.1.37'
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
    this._cloudProviderNodeSizes.internalValue = config.cloudProviderNodeSizes;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cloud_provider_node_sizes - computed: false, optional: true, required: false
  private _cloudProviderNodeSizes = new DataInstaclustrV2CloudProviderNodeSizesList(this, "cloud_provider_node_sizes", false);
  public get cloudProviderNodeSizes() {
    return this._cloudProviderNodeSizes;
  }
  public putCloudProviderNodeSizes(value: DataInstaclustrV2CloudProviderNodeSizes[] | cdktf.IResolvable) {
    this._cloudProviderNodeSizes.internalValue = value;
  }
  public resetCloudProviderNodeSizes() {
    this._cloudProviderNodeSizes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNodeSizesInput() {
    return this._cloudProviderNodeSizes.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrV2Filter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      cloud_provider_node_sizes: cdktf.listMapper(dataInstaclustrV2CloudProviderNodeSizesToTerraform, true)(this._cloudProviderNodeSizes.internalValue),
      filter: cdktf.listMapper(dataInstaclustrV2FilterToTerraform, true)(this._filter.internalValue),
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
      cloud_provider_node_sizes: {
        value: cdktf.listMapperHcl(dataInstaclustrV2CloudProviderNodeSizesToHclTerraform, true)(this._cloudProviderNodeSizes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrV2CloudProviderNodeSizesList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
