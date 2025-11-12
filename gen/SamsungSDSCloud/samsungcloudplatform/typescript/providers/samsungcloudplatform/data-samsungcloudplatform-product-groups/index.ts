// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformProductGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups#id DataSamsungcloudplatformProductGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups#target_product DataSamsungcloudplatformProductGroups#target_product}
  */
  readonly targetProduct?: string;
  /**
  * Target product group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups#target_product_group DataSamsungcloudplatformProductGroups#target_product_group}
  */
  readonly targetProductGroup?: string;
}
export interface DataSamsungcloudplatformProductGroupsContentsProductGroup {
}

export function dataSamsungcloudplatformProductGroupsContentsProductGroupToTerraform(struct?: DataSamsungcloudplatformProductGroupsContentsProductGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProductGroupsContentsProductGroupToHclTerraform(struct?: DataSamsungcloudplatformProductGroupsContentsProductGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProductGroupsContentsProductGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProductGroupsContentsProductGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProductGroupsContentsProductGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // product_group_name - computed: true, optional: false, required: false
  public get productGroupName() {
    return this.getStringAttribute('product_group_name');
  }

  // product_group_sequence - computed: true, optional: false, required: false
  public get productGroupSequence() {
    return this.getStringAttribute('product_group_sequence');
  }

  // product_group_type - computed: true, optional: false, required: false
  public get productGroupType() {
    return this.getStringAttribute('product_group_type');
  }

  // target_product - computed: true, optional: false, required: false
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }

  // target_product_group - computed: true, optional: false, required: false
  public get targetProductGroup() {
    return this.getStringAttribute('target_product_group');
  }
}

export class DataSamsungcloudplatformProductGroupsContentsProductGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProductGroupsContentsProductGroupOutputReference {
    return new DataSamsungcloudplatformProductGroupsContentsProductGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProductGroupsContents {
}

export function dataSamsungcloudplatformProductGroupsContentsToTerraform(struct?: DataSamsungcloudplatformProductGroupsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProductGroupsContentsToHclTerraform(struct?: DataSamsungcloudplatformProductGroupsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProductGroupsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProductGroupsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProductGroupsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_group - computed: true, optional: false, required: false
  private _productGroup = new DataSamsungcloudplatformProductGroupsContentsProductGroupList(this, "product_group", false);
  public get productGroup() {
    return this._productGroup;
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // product_group_name - computed: true, optional: false, required: false
  public get productGroupName() {
    return this.getStringAttribute('product_group_name');
  }

  // product_group_sequence - computed: true, optional: false, required: false
  public get productGroupSequence() {
    return this.getStringAttribute('product_group_sequence');
  }

  // product_group_type - computed: true, optional: false, required: false
  public get productGroupType() {
    return this.getStringAttribute('product_group_type');
  }

  // target_product - computed: true, optional: false, required: false
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }

  // target_product_group - computed: true, optional: false, required: false
  public get targetProductGroup() {
    return this.getStringAttribute('target_product_group');
  }
}

export class DataSamsungcloudplatformProductGroupsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProductGroupsContentsOutputReference {
    return new DataSamsungcloudplatformProductGroupsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups samsungcloudplatform_product_groups}
*/
export class DataSamsungcloudplatformProductGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_product_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformProductGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformProductGroups to import
  * @param importFromId The id of the existing DataSamsungcloudplatformProductGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformProductGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_product_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/product_groups samsungcloudplatform_product_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformProductGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformProductGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_product_groups',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
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
    this._targetProduct = config.targetProduct;
    this._targetProductGroup = config.targetProductGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformProductGroupsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // target_product - computed: false, optional: true, required: false
  private _targetProduct?: string; 
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }
  public set targetProduct(value: string) {
    this._targetProduct = value;
  }
  public resetTargetProduct() {
    this._targetProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProductInput() {
    return this._targetProduct;
  }

  // target_product_group - computed: false, optional: true, required: false
  private _targetProductGroup?: string; 
  public get targetProductGroup() {
    return this.getStringAttribute('target_product_group');
  }
  public set targetProductGroup(value: string) {
    this._targetProductGroup = value;
  }
  public resetTargetProductGroup() {
    this._targetProductGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProductGroupInput() {
    return this._targetProductGroup;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      target_product: cdktf.stringToTerraform(this._targetProduct),
      target_product_group: cdktf.stringToTerraform(this._targetProductGroup),
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
      target_product: {
        value: cdktf.stringToHclTerraform(this._targetProduct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_product_group: {
        value: cdktf.stringToHclTerraform(this._targetProductGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
