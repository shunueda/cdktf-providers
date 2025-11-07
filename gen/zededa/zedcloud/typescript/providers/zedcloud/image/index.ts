// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Datastore Id where image binary is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#datastore_id Image#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * Detailed description of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#description Image#description}
  */
  readonly description?: string;
  /**
  * Image Architecture. The field is required for the most of the image types except: IMAGE_TYPE_DOCKER_COMPOSE_TAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_arch Image#image_arch}
  */
  readonly imageArch?: string;
  /**
  * Image binary format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_format Image#image_format}
  */
  readonly imageFormat: string;
  /**
  * Image relative path w.r.t. Datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_rel_url Image#image_rel_url}
  */
  readonly imageRelUrl?: string;
  /**
  * Image checksum in SHA256 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_sha256 Image#image_sha256}
  */
  readonly imageSha256?: string;
  /**
  * Image size in KBytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_size_bytes Image#image_size_bytes}
  */
  readonly imageSizeBytes?: string;
  /**
  * Image type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_type Image#image_type}
  */
  readonly imageType?: string;
  /**
  * system defined info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#image_version Image#image_version}
  */
  readonly imageVersion?: string;
  /**
  * User defined name of the image, unique across the enterprise. Once image is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * project access list of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#project_access_list Image#project_access_list}
  */
  readonly projectAccessList?: string[];
  /**
  * User defined title of the image. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#title Image#title}
  */
  readonly title: string;
}
export interface ImageRevision {
}

export function imageRevisionToTerraform(struct?: ImageRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageRevisionToHclTerraform(struct?: ImageRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class ImageRevisionList extends cdktf.ComplexList {

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
  public get(index: number): ImageRevisionOutputReference {
    return new ImageRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image zedcloud_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/image zedcloud_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_image',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datastoreId = config.datastoreId;
    this._description = config.description;
    this._imageArch = config.imageArch;
    this._imageFormat = config.imageFormat;
    this._imageRelUrl = config.imageRelUrl;
    this._imageSha256 = config.imageSha256;
    this._imageSizeBytes = config.imageSizeBytes;
    this._imageType = config.imageType;
    this._imageVersion = config.imageVersion;
    this._name = config.name;
    this._projectAccessList = config.projectAccessList;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_id - computed: false, optional: false, required: true
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_arch - computed: false, optional: true, required: false
  private _imageArch?: string; 
  public get imageArch() {
    return this.getStringAttribute('image_arch');
  }
  public set imageArch(value: string) {
    this._imageArch = value;
  }
  public resetImageArch() {
    this._imageArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageArchInput() {
    return this._imageArch;
  }

  // image_error - computed: true, optional: false, required: false
  public get imageError() {
    return this.getStringAttribute('image_error');
  }

  // image_format - computed: false, optional: false, required: true
  private _imageFormat?: string; 
  public get imageFormat() {
    return this.getStringAttribute('image_format');
  }
  public set imageFormat(value: string) {
    this._imageFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFormatInput() {
    return this._imageFormat;
  }

  // image_local - computed: true, optional: false, required: false
  public get imageLocal() {
    return this.getStringAttribute('image_local');
  }

  // image_rel_url - computed: false, optional: true, required: false
  private _imageRelUrl?: string; 
  public get imageRelUrl() {
    return this.getStringAttribute('image_rel_url');
  }
  public set imageRelUrl(value: string) {
    this._imageRelUrl = value;
  }
  public resetImageRelUrl() {
    this._imageRelUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRelUrlInput() {
    return this._imageRelUrl;
  }

  // image_sha256 - computed: false, optional: true, required: false
  private _imageSha256?: string; 
  public get imageSha256() {
    return this.getStringAttribute('image_sha256');
  }
  public set imageSha256(value: string) {
    this._imageSha256 = value;
  }
  public resetImageSha256() {
    this._imageSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSha256Input() {
    return this._imageSha256;
  }

  // image_size_bytes - computed: false, optional: true, required: false
  private _imageSizeBytes?: string; 
  public get imageSizeBytes() {
    return this.getStringAttribute('image_size_bytes');
  }
  public set imageSizeBytes(value: string) {
    this._imageSizeBytes = value;
  }
  public resetImageSizeBytes() {
    this._imageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSizeBytesInput() {
    return this._imageSizeBytes;
  }

  // image_status - computed: true, optional: false, required: false
  public get imageStatus() {
    return this.getStringAttribute('image_status');
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
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

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // project_access_list - computed: false, optional: true, required: false
  private _projectAccessList?: string[]; 
  public get projectAccessList() {
    return this.getListAttribute('project_access_list');
  }
  public set projectAccessList(value: string[]) {
    this._projectAccessList = value;
  }
  public resetProjectAccessList() {
    this._projectAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessListInput() {
    return this._projectAccessList;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new ImageRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      description: cdktf.stringToTerraform(this._description),
      image_arch: cdktf.stringToTerraform(this._imageArch),
      image_format: cdktf.stringToTerraform(this._imageFormat),
      image_rel_url: cdktf.stringToTerraform(this._imageRelUrl),
      image_sha256: cdktf.stringToTerraform(this._imageSha256),
      image_size_bytes: cdktf.stringToTerraform(this._imageSizeBytes),
      image_type: cdktf.stringToTerraform(this._imageType),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      name: cdktf.stringToTerraform(this._name),
      project_access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectAccessList),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_arch: {
        value: cdktf.stringToHclTerraform(this._imageArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_format: {
        value: cdktf.stringToHclTerraform(this._imageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_rel_url: {
        value: cdktf.stringToHclTerraform(this._imageRelUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_sha256: {
        value: cdktf.stringToHclTerraform(this._imageSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_size_bytes: {
        value: cdktf.stringToHclTerraform(this._imageSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_access_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectAccessList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
