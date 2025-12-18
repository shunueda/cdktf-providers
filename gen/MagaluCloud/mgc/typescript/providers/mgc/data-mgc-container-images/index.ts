// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcContainerImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images#registry_id DataMgcContainerImages#registry_id}
  */
  readonly registryId: string;
  /**
  * Name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images#repository_name DataMgcContainerImages#repository_name}
  */
  readonly repositoryName: string;
}
export interface DataMgcContainerImagesImages {
}

export function dataMgcContainerImagesImagesToTerraform(struct?: DataMgcContainerImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcContainerImagesImagesToHclTerraform(struct?: DataMgcContainerImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcContainerImagesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcContainerImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcContainerImagesImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // pullet_at - computed: true, optional: false, required: false
  public get pulletAt() {
    return this.getStringAttribute('pullet_at');
  }

  // pushed_at - computed: true, optional: false, required: false
  public get pushedAt() {
    return this.getStringAttribute('pushed_at');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataMgcContainerImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcContainerImagesImagesOutputReference {
    return new DataMgcContainerImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images mgc_container_images}
*/
export class DataMgcContainerImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_container_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcContainerImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcContainerImages to import
  * @param importFromId The id of the existing DataMgcContainerImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcContainerImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_container_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/container_images mgc_container_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcContainerImagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcContainerImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_container_images',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._registryId = config.registryId;
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // images - computed: true, optional: false, required: false
  private _images = new DataMgcContainerImagesImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      registry_id: cdktf.stringToTerraform(this._registryId),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_name: {
        value: cdktf.stringToHclTerraform(this._repositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
