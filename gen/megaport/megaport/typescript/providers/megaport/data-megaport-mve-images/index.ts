// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMegaportMveImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter the MVE Images by ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#id_filter DataMegaportMveImages#id_filter}
  */
  readonly idFilter?: number;
  /**
  * Filter the MVE Images by Product Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#product_code_filter DataMegaportMveImages#product_code_filter}
  */
  readonly productCodeFilter?: string;
  /**
  * Filter the MVE Images by Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#product_filter DataMegaportMveImages#product_filter}
  */
  readonly productFilter?: string;
  /**
  * Filter the MVE Images by Release Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#release_image_filter DataMegaportMveImages#release_image_filter}
  */
  readonly releaseImageFilter?: boolean | cdktf.IResolvable;
  /**
  * Filter the MVE Images by Vendor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#vendor_filter DataMegaportMveImages#vendor_filter}
  */
  readonly vendorFilter?: string;
  /**
  * Filter the MVE Images by Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#version_filter DataMegaportMveImages#version_filter}
  */
  readonly versionFilter?: string;
}
export interface DataMegaportMveImagesMveImages {
}

export function dataMegaportMveImagesMveImagesToTerraform(struct?: DataMegaportMveImagesMveImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMegaportMveImagesMveImagesToHclTerraform(struct?: DataMegaportMveImagesMveImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMegaportMveImagesMveImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMegaportMveImagesMveImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMegaportMveImagesMveImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // release_image - computed: true, optional: false, required: false
  public get releaseImage() {
    return this.getBooleanAttribute('release_image');
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

export class DataMegaportMveImagesMveImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataMegaportMveImagesMveImagesOutputReference {
    return new DataMegaportMveImagesMveImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images megaport_mve_images}
*/
export class DataMegaportMveImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_mve_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMegaportMveImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMegaportMveImages to import
  * @param importFromId The id of the existing DataMegaportMveImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMegaportMveImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_mve_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/mve_images megaport_mve_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMegaportMveImagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMegaportMveImagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'megaport_mve_images',
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
    this._idFilter = config.idFilter;
    this._productCodeFilter = config.productCodeFilter;
    this._productFilter = config.productFilter;
    this._releaseImageFilter = config.releaseImageFilter;
    this._vendorFilter = config.vendorFilter;
    this._versionFilter = config.versionFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id_filter - computed: false, optional: true, required: false
  private _idFilter?: number; 
  public get idFilter() {
    return this.getNumberAttribute('id_filter');
  }
  public set idFilter(value: number) {
    this._idFilter = value;
  }
  public resetIdFilter() {
    this._idFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFilterInput() {
    return this._idFilter;
  }

  // mve_images - computed: true, optional: false, required: false
  private _mveImages = new DataMegaportMveImagesMveImagesList(this, "mve_images", false);
  public get mveImages() {
    return this._mveImages;
  }

  // product_code_filter - computed: false, optional: true, required: false
  private _productCodeFilter?: string; 
  public get productCodeFilter() {
    return this.getStringAttribute('product_code_filter');
  }
  public set productCodeFilter(value: string) {
    this._productCodeFilter = value;
  }
  public resetProductCodeFilter() {
    this._productCodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeFilterInput() {
    return this._productCodeFilter;
  }

  // product_filter - computed: false, optional: true, required: false
  private _productFilter?: string; 
  public get productFilter() {
    return this.getStringAttribute('product_filter');
  }
  public set productFilter(value: string) {
    this._productFilter = value;
  }
  public resetProductFilter() {
    this._productFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFilterInput() {
    return this._productFilter;
  }

  // release_image_filter - computed: false, optional: true, required: false
  private _releaseImageFilter?: boolean | cdktf.IResolvable; 
  public get releaseImageFilter() {
    return this.getBooleanAttribute('release_image_filter');
  }
  public set releaseImageFilter(value: boolean | cdktf.IResolvable) {
    this._releaseImageFilter = value;
  }
  public resetReleaseImageFilter() {
    this._releaseImageFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseImageFilterInput() {
    return this._releaseImageFilter;
  }

  // vendor_filter - computed: false, optional: true, required: false
  private _vendorFilter?: string; 
  public get vendorFilter() {
    return this.getStringAttribute('vendor_filter');
  }
  public set vendorFilter(value: string) {
    this._vendorFilter = value;
  }
  public resetVendorFilter() {
    this._vendorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorFilterInput() {
    return this._vendorFilter;
  }

  // version_filter - computed: false, optional: true, required: false
  private _versionFilter?: string; 
  public get versionFilter() {
    return this.getStringAttribute('version_filter');
  }
  public set versionFilter(value: string) {
    this._versionFilter = value;
  }
  public resetVersionFilter() {
    this._versionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionFilterInput() {
    return this._versionFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id_filter: cdktf.numberToTerraform(this._idFilter),
      product_code_filter: cdktf.stringToTerraform(this._productCodeFilter),
      product_filter: cdktf.stringToTerraform(this._productFilter),
      release_image_filter: cdktf.booleanToTerraform(this._releaseImageFilter),
      vendor_filter: cdktf.stringToTerraform(this._vendorFilter),
      version_filter: cdktf.stringToTerraform(this._versionFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id_filter: {
        value: cdktf.numberToHclTerraform(this._idFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_code_filter: {
        value: cdktf.stringToHclTerraform(this._productCodeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_filter: {
        value: cdktf.stringToHclTerraform(this._productFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_image_filter: {
        value: cdktf.booleanToHclTerraform(this._releaseImageFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor_filter: {
        value: cdktf.stringToHclTerraform(this._vendorFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_filter: {
        value: cdktf.stringToHclTerraform(this._versionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
