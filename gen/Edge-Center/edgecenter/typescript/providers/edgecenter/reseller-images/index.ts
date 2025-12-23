// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResellerImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#id ResellerImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the reseller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#reseller_id ResellerImages#reseller_id}
  */
  readonly resellerId: number;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#options ResellerImages#options}
  */
  readonly options: ResellerImagesOptions[] | cdktf.IResolvable;
}
export interface ResellerImagesOptions {
  /**
  * A list of image IDs available for clients of the reseller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#image_ids ResellerImages#image_ids}
  */
  readonly imageIds?: string[];
  /**
  * The ID of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#region_id ResellerImages#region_id}
  */
  readonly regionId: number;
}

export function resellerImagesOptionsToTerraform(struct?: ResellerImagesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imageIds),
    region_id: cdktf.numberToTerraform(struct!.regionId),
  }
}


export function resellerImagesOptionsToHclTerraform(struct?: ResellerImagesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imageIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResellerImagesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResellerImagesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIds = this._imageIds;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResellerImagesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageIds = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageIds = value.imageIds;
      this._regionId = value.regionId;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // image_ids - computed: false, optional: true, required: false
  private _imageIds?: string[]; 
  public get imageIds() {
    return cdktf.Fn.tolist(this.getListAttribute('image_ids'));
  }
  public set imageIds(value: string[]) {
    this._imageIds = value;
  }
  public resetImageIds() {
    this._imageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdsInput() {
    return this._imageIds;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ResellerImagesOptionsList extends cdktf.ComplexList {
  public internalValue? : ResellerImagesOptions[] | cdktf.IResolvable

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
  public get(index: number): ResellerImagesOptionsOutputReference {
    return new ResellerImagesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images edgecenter_reseller_images}
*/
export class ResellerImages extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_reseller_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResellerImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResellerImages to import
  * @param importFromId The id of the existing ResellerImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResellerImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_reseller_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/reseller_images edgecenter_reseller_images} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResellerImagesConfig
  */
  public constructor(scope: Construct, id: string, config: ResellerImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_reseller_images',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.7',
        providerVersionConstraint: '0.10.7'
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
    this._resellerId = config.resellerId;
    this._options.internalValue = config.options;
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

  // reseller_id - computed: false, optional: false, required: true
  private _resellerId?: number; 
  public get resellerId() {
    return this.getNumberAttribute('reseller_id');
  }
  public set resellerId(value: number) {
    this._resellerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resellerIdInput() {
    return this._resellerId;
  }

  // options - computed: false, optional: false, required: true
  private _options = new ResellerImagesOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: ResellerImagesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      reseller_id: cdktf.numberToTerraform(this._resellerId),
      options: cdktf.listMapper(resellerImagesOptionsToTerraform, true)(this._options.internalValue),
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
      reseller_id: {
        value: cdktf.numberToHclTerraform(this._resellerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: cdktf.listMapperHcl(resellerImagesOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResellerImagesOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
