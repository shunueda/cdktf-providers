// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstorageContainerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}
  */
  readonly containerRead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}
  */
  readonly containerSyncKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}
  */
  readonly containerSyncTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}
  */
  readonly containerWrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}
  */
  readonly storagePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}
  */
  readonly versioning?: boolean | cdktf.IResolvable;
  /**
  * versioning_legacy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#versioning_legacy ObjectstorageContainerV1#versioning_legacy}
  */
  readonly versioningLegacy?: ObjectstorageContainerV1VersioningLegacy;
}
export interface ObjectstorageContainerV1VersioningLegacy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}
  */
  readonly type: string;
}

export function objectstorageContainerV1VersioningLegacyToTerraform(struct?: ObjectstorageContainerV1VersioningLegacyOutputReference | ObjectstorageContainerV1VersioningLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectstorageContainerV1VersioningLegacyToHclTerraform(struct?: ObjectstorageContainerV1VersioningLegacyOutputReference | ObjectstorageContainerV1VersioningLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageContainerV1VersioningLegacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectstorageContainerV1VersioningLegacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageContainerV1VersioningLegacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._type = value.type;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1 nhncloud_objectstorage_container_v1}
*/
export class ObjectstorageContainerV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_objectstorage_container_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstorageContainerV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstorageContainerV1 to import
  * @param importFromId The id of the existing ObjectstorageContainerV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstorageContainerV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_objectstorage_container_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/objectstorage_container_v1 nhncloud_objectstorage_container_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstorageContainerV1Config
  */
  public constructor(scope: Construct, id: string, config: ObjectstorageContainerV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_objectstorage_container_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRead = config.containerRead;
    this._containerSyncKey = config.containerSyncKey;
    this._containerSyncTo = config.containerSyncTo;
    this._containerWrite = config.containerWrite;
    this._contentType = config.contentType;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._storagePolicy = config.storagePolicy;
    this._versioning = config.versioning;
    this._versioningLegacy.internalValue = config.versioningLegacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_read - computed: false, optional: true, required: false
  private _containerRead?: string; 
  public get containerRead() {
    return this.getStringAttribute('container_read');
  }
  public set containerRead(value: string) {
    this._containerRead = value;
  }
  public resetContainerRead() {
    this._containerRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerReadInput() {
    return this._containerRead;
  }

  // container_sync_key - computed: false, optional: true, required: false
  private _containerSyncKey?: string; 
  public get containerSyncKey() {
    return this.getStringAttribute('container_sync_key');
  }
  public set containerSyncKey(value: string) {
    this._containerSyncKey = value;
  }
  public resetContainerSyncKey() {
    this._containerSyncKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSyncKeyInput() {
    return this._containerSyncKey;
  }

  // container_sync_to - computed: false, optional: true, required: false
  private _containerSyncTo?: string; 
  public get containerSyncTo() {
    return this.getStringAttribute('container_sync_to');
  }
  public set containerSyncTo(value: string) {
    this._containerSyncTo = value;
  }
  public resetContainerSyncTo() {
    this._containerSyncTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSyncToInput() {
    return this._containerSyncTo;
  }

  // container_write - computed: false, optional: true, required: false
  private _containerWrite?: string; 
  public get containerWrite() {
    return this.getStringAttribute('container_write');
  }
  public set containerWrite(value: string) {
    this._containerWrite = value;
  }
  public resetContainerWrite() {
    this._containerWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerWriteInput() {
    return this._containerWrite;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_policy - computed: true, optional: true, required: false
  private _storagePolicy?: string; 
  public get storagePolicy() {
    return this.getStringAttribute('storage_policy');
  }
  public set storagePolicy(value: string) {
    this._storagePolicy = value;
  }
  public resetStoragePolicy() {
    this._storagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyInput() {
    return this._storagePolicy;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: boolean | cdktf.IResolvable; 
  public get versioning() {
    return this.getBooleanAttribute('versioning');
  }
  public set versioning(value: boolean | cdktf.IResolvable) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning;
  }

  // versioning_legacy - computed: false, optional: true, required: false
  private _versioningLegacy = new ObjectstorageContainerV1VersioningLegacyOutputReference(this, "versioning_legacy");
  public get versioningLegacy() {
    return this._versioningLegacy;
  }
  public putVersioningLegacy(value: ObjectstorageContainerV1VersioningLegacy) {
    this._versioningLegacy.internalValue = value;
  }
  public resetVersioningLegacy() {
    this._versioningLegacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningLegacyInput() {
    return this._versioningLegacy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_read: cdktf.stringToTerraform(this._containerRead),
      container_sync_key: cdktf.stringToTerraform(this._containerSyncKey),
      container_sync_to: cdktf.stringToTerraform(this._containerSyncTo),
      container_write: cdktf.stringToTerraform(this._containerWrite),
      content_type: cdktf.stringToTerraform(this._contentType),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      storage_policy: cdktf.stringToTerraform(this._storagePolicy),
      versioning: cdktf.booleanToTerraform(this._versioning),
      versioning_legacy: objectstorageContainerV1VersioningLegacyToTerraform(this._versioningLegacy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_read: {
        value: cdktf.stringToHclTerraform(this._containerRead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_sync_key: {
        value: cdktf.stringToHclTerraform(this._containerSyncKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_sync_to: {
        value: cdktf.stringToHclTerraform(this._containerSyncTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_write: {
        value: cdktf.stringToHclTerraform(this._containerWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_policy: {
        value: cdktf.stringToHclTerraform(this._storagePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versioning: {
        value: cdktf.booleanToHclTerraform(this._versioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      versioning_legacy: {
        value: objectstorageContainerV1VersioningLegacyToHclTerraform(this._versioningLegacy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectstorageContainerV1VersioningLegacyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
