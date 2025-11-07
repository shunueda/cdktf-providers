// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MigrationImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * access key for ova
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#access_key MigrationImage#access_key}
  */
  readonly accessKey: string;
  /**
  * Availability Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#az_name MigrationImage#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#id MigrationImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#image_description MigrationImage#image_description}
  */
  readonly imageDescription: string;
  /**
  * Migration Image Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#image_name MigrationImage#image_name}
  */
  readonly imageName: string;
  /**
  * Original Image Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#original_image_id MigrationImage#original_image_id}
  */
  readonly originalImageId: string;
  /**
  * OS User Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#os_user_id MigrationImage#os_user_id}
  */
  readonly osUserId: string;
  /**
  * Os User Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#os_user_password MigrationImage#os_user_password}
  */
  readonly osUserPassword: string;
  /**
  * Ova url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#ova_url MigrationImage#ova_url}
  */
  readonly ovaUrl: string;
  /**
  * secret key for ova
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#secret_key MigrationImage#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#service_zone_id MigrationImage#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#tags MigrationImage#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface MigrationImageProducts {
}

export function migrationImageProductsToTerraform(struct?: MigrationImageProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function migrationImageProductsToHclTerraform(struct?: MigrationImageProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationImageProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrationImageProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationImageProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // product_value - computed: true, optional: false, required: false
  public get productValue() {
    return this.getStringAttribute('product_value');
  }

  // seq - computed: true, optional: false, required: false
  public get seq() {
    return this.getNumberAttribute('seq');
  }
}

export class MigrationImageProductsList extends cdktf.ComplexList {

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
  public get(index: number): MigrationImageProductsOutputReference {
    return new MigrationImageProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image samsungcloudplatform_migration_image}
*/
export class MigrationImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_migration_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MigrationImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MigrationImage to import
  * @param importFromId The id of the existing MigrationImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MigrationImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_migration_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/migration_image samsungcloudplatform_migration_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrationImageConfig
  */
  public constructor(scope: Construct, id: string, config: MigrationImageConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_migration_image',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._azName = config.azName;
    this._id = config.id;
    this._imageDescription = config.imageDescription;
    this._imageName = config.imageName;
    this._originalImageId = config.originalImageId;
    this._osUserId = config.osUserId;
    this._osUserPassword = config.osUserPassword;
    this._ovaUrl = config.ovaUrl;
    this._secretKey = config.secretKey;
    this._serviceZoneId = config.serviceZoneId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // icon - computed: true, optional: false, required: false
  private _icon = new cdktf.StringMap(this, "icon");
  public get icon() {
    return this._icon;
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

  // image_description - computed: false, optional: false, required: true
  private _imageDescription?: string; 
  public get imageDescription() {
    return this.getStringAttribute('image_description');
  }
  public set imageDescription(value: string) {
    this._imageDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDescriptionInput() {
    return this._imageDescription;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_state - computed: true, optional: false, required: false
  public get imageState() {
    return this.getStringAttribute('image_state');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // origin_image_name - computed: true, optional: false, required: false
  public get originImageName() {
    return this.getStringAttribute('origin_image_name');
  }

  // original_image_id - computed: false, optional: false, required: true
  private _originalImageId?: string; 
  public get originalImageId() {
    return this.getStringAttribute('original_image_id');
  }
  public set originalImageId(value: string) {
    this._originalImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalImageIdInput() {
    return this._originalImageId;
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // os_user_id - computed: false, optional: false, required: true
  private _osUserId?: string; 
  public get osUserId() {
    return this.getStringAttribute('os_user_id');
  }
  public set osUserId(value: string) {
    this._osUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osUserIdInput() {
    return this._osUserId;
  }

  // os_user_password - computed: false, optional: false, required: true
  private _osUserPassword?: string; 
  public get osUserPassword() {
    return this.getStringAttribute('os_user_password');
  }
  public set osUserPassword(value: string) {
    this._osUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osUserPasswordInput() {
    return this._osUserPassword;
  }

  // ova_url - computed: false, optional: false, required: true
  private _ovaUrl?: string; 
  public get ovaUrl() {
    return this.getStringAttribute('ova_url');
  }
  public set ovaUrl(value: string) {
    this._ovaUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaUrlInput() {
    return this._ovaUrl;
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // products - computed: true, optional: false, required: false
  private _products = new MigrationImageProductsList(this, "products", false);
  public get products() {
    return this._products;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      az_name: cdktf.stringToTerraform(this._azName),
      id: cdktf.stringToTerraform(this._id),
      image_description: cdktf.stringToTerraform(this._imageDescription),
      image_name: cdktf.stringToTerraform(this._imageName),
      original_image_id: cdktf.stringToTerraform(this._originalImageId),
      os_user_id: cdktf.stringToTerraform(this._osUserId),
      os_user_password: cdktf.stringToTerraform(this._osUserPassword),
      ova_url: cdktf.stringToTerraform(this._ovaUrl),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_name: {
        value: cdktf.stringToHclTerraform(this._azName),
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
      image_description: {
        value: cdktf.stringToHclTerraform(this._imageDescription),
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
      original_image_id: {
        value: cdktf.stringToHclTerraform(this._originalImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_user_id: {
        value: cdktf.stringToHclTerraform(this._osUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_user_password: {
        value: cdktf.stringToHclTerraform(this._osUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ova_url: {
        value: cdktf.stringToHclTerraform(this._ovaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
