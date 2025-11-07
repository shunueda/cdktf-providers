// https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base image to append layers to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#base_image Append#base_image}
  */
  readonly baseImage?: string;
  /**
  * Layers to append to the base image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#layers Append#layers}
  */
  readonly layers: AppendLayers[] | cdktf.IResolvable;
}
export interface AppendLayersFiles {
  /**
  * Content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#contents Append#contents}
  */
  readonly contents?: string;
  /**
  * Path to a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#path Append#path}
  */
  readonly path?: string;
}

export function appendLayersFilesToTerraform(struct?: AppendLayersFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function appendLayersFilesToHclTerraform(struct?: AppendLayersFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppendLayersFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppendLayersFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppendLayersFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class AppendLayersFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppendLayersFiles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppendLayersFilesOutputReference {
    return new AppendLayersFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppendLayers {
  /**
  * Files to add to the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#files Append#files}
  */
  readonly files: { [key: string]: AppendLayersFiles } | cdktf.IResolvable;
}

export function appendLayersToTerraform(struct?: AppendLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.hashMapper(appendLayersFilesToTerraform)(struct!.files),
  }
}


export function appendLayersToHclTerraform(struct?: AppendLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.hashMapperHcl(appendLayersFilesToHclTerraform)(struct!.files),
      isBlock: true,
      type: "map",
      storageClassType: "AppendLayersFilesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppendLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppendLayers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppendLayers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files.internalValue = value.files;
    }
  }

  // files - computed: false, optional: false, required: true
  private _files = new AppendLayersFilesMap(this, "files");
  public get files() {
    return this._files;
  }
  public putFiles(value: { [key: string]: AppendLayersFiles } | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }
}

export class AppendLayersList extends cdktf.ComplexList {
  public internalValue? : AppendLayers[] | cdktf.IResolvable

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
  public get(index: number): AppendLayersOutputReference {
    return new AppendLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append oci_append}
*/
export class Append extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_append";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Append resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Append to import
  * @param importFromId The id of the existing Append that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Append to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_append", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/append oci_append} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppendConfig
  */
  public constructor(scope: Construct, id: string, config: AppendConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_append',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseImage = config.baseImage;
    this._layers.internalValue = config.layers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_image - computed: true, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // layers - computed: false, optional: false, required: true
  private _layers = new AppendLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: AppendLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_image: cdktf.stringToTerraform(this._baseImage),
      layers: cdktf.listMapper(appendLayersToTerraform, false)(this._layers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layers: {
        value: cdktf.listMapperHcl(appendLayersToHclTerraform, false)(this._layers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppendLayersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
