// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectStorageObjectsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key to start with when listing objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#key_marker DataOvhCloudProjectStorageObjectsA#key_marker}
  */
  readonly keyMarker?: string;
  /**
  * Limit the number of objects returned (1000 maximum, defaults to 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#limit DataOvhCloudProjectStorageObjectsA#limit}
  */
  readonly limit?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#name DataOvhCloudProjectStorageObjectsA#name}
  */
  readonly name: string;
  /**
  * List objects whose key begins with this prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#prefix DataOvhCloudProjectStorageObjectsA#prefix}
  */
  readonly prefix?: string;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#region_name DataOvhCloudProjectStorageObjectsA#region_name}
  */
  readonly regionName: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#service_name DataOvhCloudProjectStorageObjectsA#service_name}
  */
  readonly serviceName: string;
  /**
  * Version ID to start listing from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#version_id_marker DataOvhCloudProjectStorageObjectsA#version_id_marker}
  */
  readonly versionIdMarker?: string;
  /**
  * List object versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#with_versions DataOvhCloudProjectStorageObjectsA#with_versions}
  */
  readonly withVersions?: boolean | cdktf.IResolvable;
}
export interface DataOvhCloudProjectStorageObjectsObjects {
}

export function dataOvhCloudProjectStorageObjectsObjectsToTerraform(struct?: DataOvhCloudProjectStorageObjectsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhCloudProjectStorageObjectsObjectsToHclTerraform(struct?: DataOvhCloudProjectStorageObjectsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhCloudProjectStorageObjectsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectStorageObjectsObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectStorageObjectsObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // is_delete_marker - computed: true, optional: false, required: false
  public get isDeleteMarker() {
    return this.getBooleanAttribute('is_delete_marker');
  }

  // is_latest - computed: true, optional: false, required: false
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}

export class DataOvhCloudProjectStorageObjectsObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhCloudProjectStorageObjectsObjectsOutputReference {
    return new DataOvhCloudProjectStorageObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects ovh_cloud_project_storage_objects}
*/
export class DataOvhCloudProjectStorageObjectsA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_storage_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectStorageObjectsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectStorageObjectsA to import
  * @param importFromId The id of the existing DataOvhCloudProjectStorageObjectsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectStorageObjectsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_storage_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_storage_objects ovh_cloud_project_storage_objects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectStorageObjectsAConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectStorageObjectsAConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_storage_objects',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyMarker = config.keyMarker;
    this._limit = config.limit;
    this._name = config.name;
    this._prefix = config.prefix;
    this._regionName = config.regionName;
    this._serviceName = config.serviceName;
    this._versionIdMarker = config.versionIdMarker;
    this._withVersions = config.withVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key_marker - computed: false, optional: true, required: false
  private _keyMarker?: string; 
  public get keyMarker() {
    return this.getStringAttribute('key_marker');
  }
  public set keyMarker(value: string) {
    this._keyMarker = value;
  }
  public resetKeyMarker() {
    this._keyMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMarkerInput() {
    return this._keyMarker;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // objects - computed: true, optional: false, required: false
  private _objects = new DataOvhCloudProjectStorageObjectsObjectsList(this, "objects", true);
  public get objects() {
    return this._objects;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // version_id_marker - computed: false, optional: true, required: false
  private _versionIdMarker?: string; 
  public get versionIdMarker() {
    return this.getStringAttribute('version_id_marker');
  }
  public set versionIdMarker(value: string) {
    this._versionIdMarker = value;
  }
  public resetVersionIdMarker() {
    this._versionIdMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdMarkerInput() {
    return this._versionIdMarker;
  }

  // with_versions - computed: false, optional: true, required: false
  private _withVersions?: boolean | cdktf.IResolvable; 
  public get withVersions() {
    return this.getBooleanAttribute('with_versions');
  }
  public set withVersions(value: boolean | cdktf.IResolvable) {
    this._withVersions = value;
  }
  public resetWithVersions() {
    this._withVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withVersionsInput() {
    return this._withVersions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_marker: cdktf.stringToTerraform(this._keyMarker),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.stringToTerraform(this._prefix),
      region_name: cdktf.stringToTerraform(this._regionName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      version_id_marker: cdktf.stringToTerraform(this._versionIdMarker),
      with_versions: cdktf.booleanToTerraform(this._withVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_marker: {
        value: cdktf.stringToHclTerraform(this._keyMarker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id_marker: {
        value: cdktf.stringToHclTerraform(this._versionIdMarker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_versions: {
        value: cdktf.booleanToHclTerraform(this._withVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
