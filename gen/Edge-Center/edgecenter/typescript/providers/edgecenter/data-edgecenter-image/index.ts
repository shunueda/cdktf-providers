// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the image. Either 'id' or 'name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#id DataEdgecenterImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true if need to get the baremetal image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#is_baremetal DataEdgecenterImage#is_baremetal}
  */
  readonly isBaremetal?: boolean | cdktf.IResolvable;
  /**
  * Filtration query opts (only key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#metadata_k DataEdgecenterImage#metadata_k}
  */
  readonly metadataK?: string;
  /**
  * Filtration query opts, for example, {offset = "10", limit = "10"}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#metadata_kv DataEdgecenterImage#metadata_kv}
  */
  readonly metadataKv?: { [key: string]: string };
  /**
  * The name of the image. Use 'os-version', for example 'ubuntu-20.04'. Use only with uniq name. Either 'id' or 'name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#name DataEdgecenterImage#name}
  */
  readonly name?: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#project_id DataEdgecenterImage#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#project_name DataEdgecenterImage#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#region_id DataEdgecenterImage#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#region_name DataEdgecenterImage#region_name}
  */
  readonly regionName?: string;
}
export interface DataEdgecenterImageMetadataReadOnly {
}

export function dataEdgecenterImageMetadataReadOnlyToTerraform(struct?: DataEdgecenterImageMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterImageMetadataReadOnlyToHclTerraform(struct?: DataEdgecenterImageMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterImageMetadataReadOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterImageMetadataReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterImageMetadataReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataEdgecenterImageMetadataReadOnlyList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterImageMetadataReadOnlyOutputReference {
    return new DataEdgecenterImageMetadataReadOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image edgecenter_image}
*/
export class DataEdgecenterImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterImage to import
  * @param importFromId The id of the existing DataEdgecenterImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/image edgecenter_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_image',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4'
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
    this._isBaremetal = config.isBaremetal;
    this._metadataK = config.metadataK;
    this._metadataKv = config.metadataKv;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_baremetal - computed: false, optional: true, required: false
  private _isBaremetal?: boolean | cdktf.IResolvable; 
  public get isBaremetal() {
    return this.getBooleanAttribute('is_baremetal');
  }
  public set isBaremetal(value: boolean | cdktf.IResolvable) {
    this._isBaremetal = value;
  }
  public resetIsBaremetal() {
    this._isBaremetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBaremetalInput() {
    return this._isBaremetal;
  }

  // metadata_k - computed: false, optional: true, required: false
  private _metadataK?: string; 
  public get metadataK() {
    return this.getStringAttribute('metadata_k');
  }
  public set metadataK(value: string) {
    this._metadataK = value;
  }
  public resetMetadataK() {
    this._metadataK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKInput() {
    return this._metadataK;
  }

  // metadata_kv - computed: false, optional: true, required: false
  private _metadataKv?: { [key: string]: string }; 
  public get metadataKv() {
    return this.getStringMapAttribute('metadata_kv');
  }
  public set metadataKv(value: { [key: string]: string }) {
    this._metadataKv = value;
  }
  public resetMetadataKv() {
    this._metadataKv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKvInput() {
    return this._metadataKv;
  }

  // metadata_read_only - computed: true, optional: false, required: false
  private _metadataReadOnly = new DataEdgecenterImageMetadataReadOnlyList(this, "metadata_read_only", false);
  public get metadataReadOnly() {
    return this._metadataReadOnly;
  }

  // min_disk - computed: true, optional: false, required: false
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }

  // min_ram - computed: true, optional: false, required: false
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_distro - computed: true, optional: false, required: false
  public get osDistro() {
    return this.getStringAttribute('os_distro');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_baremetal: cdktf.booleanToTerraform(this._isBaremetal),
      metadata_k: cdktf.stringToTerraform(this._metadataK),
      metadata_kv: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataKv),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
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
      is_baremetal: {
        value: cdktf.booleanToHclTerraform(this._isBaremetal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_k: {
        value: cdktf.stringToHclTerraform(this._metadataK),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_kv: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataKv),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
