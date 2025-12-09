// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesAppsImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * App image category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#category DataSamsungcloudplatformKubernetesAppsImages#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#id DataSamsungcloudplatformKubernetesAppsImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * App image id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#image_id DataSamsungcloudplatformKubernetesAppsImages#image_id}
  */
  readonly imageId?: string;
  /**
  * App image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#image_name DataSamsungcloudplatformKubernetesAppsImages#image_name}
  */
  readonly imageName?: string;
  /**
  * Check whether it is carepack or not 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#is_carepack DataSamsungcloudplatformKubernetesAppsImages#is_carepack}
  */
  readonly isCarepack?: string;
  /**
  * Check whether it is new image or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#is_new DataSamsungcloudplatformKubernetesAppsImages#is_new}
  */
  readonly isNew?: string;
  /**
  * Check whether it is recommendation image or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#is_recommended DataSamsungcloudplatformKubernetesAppsImages#is_recommended}
  */
  readonly isRecommended?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#page DataSamsungcloudplatformKubernetesAppsImages#page}
  */
  readonly page?: number;
  /**
  * Price policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#price_policy DataSamsungcloudplatformKubernetesAppsImages#price_policy}
  */
  readonly pricePolicy?: string;
  /**
  * Product group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#product_group_name DataSamsungcloudplatformKubernetesAppsImages#product_group_name}
  */
  readonly productGroupName?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#size DataSamsungcloudplatformKubernetesAppsImages#size}
  */
  readonly size?: number;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#contents DataSamsungcloudplatformKubernetesAppsImages#contents}
  */
  readonly contents?: DataSamsungcloudplatformKubernetesAppsImagesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformKubernetesAppsImagesContents {
}

export function dataSamsungcloudplatformKubernetesAppsImagesContentsToTerraform(struct?: DataSamsungcloudplatformKubernetesAppsImagesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesAppsImagesContentsToHclTerraform(struct?: DataSamsungcloudplatformKubernetesAppsImagesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesAppsImagesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformKubernetesAppsImagesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesAppsImagesContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // base_image - computed: true, optional: false, required: false
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // icon_file - computed: true, optional: false, required: false
  public get iconFile() {
    return this.getStringAttribute('icon_file');
  }

  // icon_file_name - computed: true, optional: false, required: false
  public get iconFileName() {
    return this.getStringAttribute('icon_file_name');
  }

  // image_attr - computed: true, optional: false, required: false
  private _imageAttr = new cdktf.StringMap(this, "image_attr");
  public get imageAttr() {
    return this._imageAttr;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // product_group_attr - computed: true, optional: false, required: false
  private _productGroupAttr = new cdktf.StringMap(this, "product_group_attr");
  public get productGroupAttr() {
    return this._productGroupAttr;
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // product_group_name - computed: true, optional: false, required: false
  public get productGroupName() {
    return this.getStringAttribute('product_group_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataSamsungcloudplatformKubernetesAppsImagesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformKubernetesAppsImagesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformKubernetesAppsImagesContentsOutputReference {
    return new DataSamsungcloudplatformKubernetesAppsImagesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images samsungcloudplatform_kubernetes_apps_images}
*/
export class DataSamsungcloudplatformKubernetesAppsImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_apps_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesAppsImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesAppsImages to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesAppsImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesAppsImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_apps_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_apps_images samsungcloudplatform_kubernetes_apps_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesAppsImagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesAppsImagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_apps_images',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._isCarepack = config.isCarepack;
    this._isNew = config.isNew;
    this._isRecommended = config.isRecommended;
    this._page = config.page;
    this._pricePolicy = config.pricePolicy;
    this._productGroupName = config.productGroupName;
    this._size = config.size;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // is_carepack - computed: false, optional: true, required: false
  private _isCarepack?: string; 
  public get isCarepack() {
    return this.getStringAttribute('is_carepack');
  }
  public set isCarepack(value: string) {
    this._isCarepack = value;
  }
  public resetIsCarepack() {
    this._isCarepack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCarepackInput() {
    return this._isCarepack;
  }

  // is_new - computed: false, optional: true, required: false
  private _isNew?: string; 
  public get isNew() {
    return this.getStringAttribute('is_new');
  }
  public set isNew(value: string) {
    this._isNew = value;
  }
  public resetIsNew() {
    this._isNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewInput() {
    return this._isNew;
  }

  // is_recommended - computed: false, optional: true, required: false
  private _isRecommended?: string; 
  public get isRecommended() {
    return this.getStringAttribute('is_recommended');
  }
  public set isRecommended(value: string) {
    this._isRecommended = value;
  }
  public resetIsRecommended() {
    this._isRecommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecommendedInput() {
    return this._isRecommended;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // price_policy - computed: false, optional: true, required: false
  private _pricePolicy?: string; 
  public get pricePolicy() {
    return this.getStringAttribute('price_policy');
  }
  public set pricePolicy(value: string) {
    this._pricePolicy = value;
  }
  public resetPricePolicy() {
    this._pricePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricePolicyInput() {
    return this._pricePolicy;
  }

  // product_group_name - computed: false, optional: true, required: false
  private _productGroupName?: string; 
  public get productGroupName() {
    return this.getStringAttribute('product_group_name');
  }
  public set productGroupName(value: string) {
    this._productGroupName = value;
  }
  public resetProductGroupName() {
    this._productGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productGroupNameInput() {
    return this._productGroupName;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformKubernetesAppsImagesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformKubernetesAppsImagesContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      is_carepack: cdktf.stringToTerraform(this._isCarepack),
      is_new: cdktf.stringToTerraform(this._isNew),
      is_recommended: cdktf.stringToTerraform(this._isRecommended),
      page: cdktf.numberToTerraform(this._page),
      price_policy: cdktf.stringToTerraform(this._pricePolicy),
      product_group_name: cdktf.stringToTerraform(this._productGroupName),
      size: cdktf.numberToTerraform(this._size),
      contents: cdktf.listMapper(dataSamsungcloudplatformKubernetesAppsImagesContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_carepack: {
        value: cdktf.stringToHclTerraform(this._isCarepack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_new: {
        value: cdktf.stringToHclTerraform(this._isNew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_recommended: {
        value: cdktf.stringToHclTerraform(this._isRecommended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      price_policy: {
        value: cdktf.stringToHclTerraform(this._pricePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_group_name: {
        value: cdktf.stringToHclTerraform(this._productGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformKubernetesAppsImagesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformKubernetesAppsImagesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
