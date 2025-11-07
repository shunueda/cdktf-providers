// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalKindLoadImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * An archive file to load, i.e. vault-1.10.0.tar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image#archive LocalKindLoadImage#archive}
  */
  readonly archive?: string;
  /**
  * The name of the cluster to load the image to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image#cluster_name LocalKindLoadImage#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The name of the docker image to load without the tag, i.e. vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image#image LocalKindLoadImage#image}
  */
  readonly image: string;
  /**
  * The tag of the docker image to load, i.e. 1.10.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image#tag LocalKindLoadImage#tag}
  */
  readonly tag: string;
}
export interface LocalKindLoadImageLoadedImages {
}

export function localKindLoadImageLoadedImagesToTerraform(struct?: LocalKindLoadImageLoadedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function localKindLoadImageLoadedImagesToHclTerraform(struct?: LocalKindLoadImageLoadedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LocalKindLoadImageLoadedImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalKindLoadImageLoadedImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalKindLoadImageLoadedImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getListAttribute('nodes');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image enos_local_kind_load_image}
*/
export class LocalKindLoadImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_local_kind_load_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalKindLoadImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalKindLoadImage to import
  * @param importFromId The id of the existing LocalKindLoadImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalKindLoadImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_local_kind_load_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_load_image enos_local_kind_load_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalKindLoadImageConfig
  */
  public constructor(scope: Construct, id: string, config: LocalKindLoadImageConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_local_kind_load_image',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archive = config.archive;
    this._clusterName = config.clusterName;
    this._image = config.image;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive - computed: false, optional: true, required: false
  private _archive?: string; 
  public get archive() {
    return this.getStringAttribute('archive');
  }
  public set archive(value: string) {
    this._archive = value;
  }
  public resetArchive() {
    this._archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // loaded_images - computed: true, optional: false, required: false
  private _loadedImages = new LocalKindLoadImageLoadedImagesOutputReference(this, "loaded_images");
  public get loadedImages() {
    return this._loadedImages;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive: cdktf.stringToTerraform(this._archive),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      image: cdktf.stringToTerraform(this._image),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive: {
        value: cdktf.stringToHclTerraform(this._archive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
