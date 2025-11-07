// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#id DataGcoreFileShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the file share. It must be unique within the project and region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#name DataGcoreFileShare#name}
  */
  readonly name: string;
  /**
  * Project ID, only one of project_id or project_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#project_id DataGcoreFileShare#project_id}
  */
  readonly projectId?: number;
  /**
  * Project name, only one of project_id or project_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#project_name DataGcoreFileShare#project_name}
  */
  readonly projectName?: string;
  /**
  * Region ID, only one of region_id or region_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#region_id DataGcoreFileShare#region_id}
  */
  readonly regionId?: number;
  /**
  * Region name, only one of region_id or region_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#region_name DataGcoreFileShare#region_name}
  */
  readonly regionName?: string;
  /**
  * share_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#share_settings DataGcoreFileShare#share_settings}
  */
  readonly shareSettings?: DataGcoreFileShareShareSettings;
}
export interface DataGcoreFileShareShareSettings {
  /**
  * Allowed characters in file names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#allowed_characters DataGcoreFileShare#allowed_characters}
  */
  readonly allowedCharacters?: string;
  /**
  * Affects the maximum limit of file path component name length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#path_length DataGcoreFileShare#path_length}
  */
  readonly pathLength?: string;
  /**
  * Indicates if root squash is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#root_squash DataGcoreFileShare#root_squash}
  */
  readonly rootSquash?: boolean | cdktf.IResolvable;
  /**
  * The type of the file share (standard or vast).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#type_name DataGcoreFileShare#type_name}
  */
  readonly typeName?: string;
}

export function dataGcoreFileShareShareSettingsToTerraform(struct?: DataGcoreFileShareShareSettingsOutputReference | DataGcoreFileShareShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_characters: cdktf.stringToTerraform(struct!.allowedCharacters),
    path_length: cdktf.stringToTerraform(struct!.pathLength),
    root_squash: cdktf.booleanToTerraform(struct!.rootSquash),
    type_name: cdktf.stringToTerraform(struct!.typeName),
  }
}


export function dataGcoreFileShareShareSettingsToHclTerraform(struct?: DataGcoreFileShareShareSettingsOutputReference | DataGcoreFileShareShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_characters: {
      value: cdktf.stringToHclTerraform(struct!.allowedCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_length: {
      value: cdktf.stringToHclTerraform(struct!.pathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_squash: {
      value: cdktf.booleanToHclTerraform(struct!.rootSquash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGcoreFileShareShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataGcoreFileShareShareSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCharacters = this._allowedCharacters;
    }
    if (this._pathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathLength = this._pathLength;
    }
    if (this._rootSquash !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSquash = this._rootSquash;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreFileShareShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCharacters = undefined;
      this._pathLength = undefined;
      this._rootSquash = undefined;
      this._typeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCharacters = value.allowedCharacters;
      this._pathLength = value.pathLength;
      this._rootSquash = value.rootSquash;
      this._typeName = value.typeName;
    }
  }

  // allowed_characters - computed: true, optional: true, required: false
  private _allowedCharacters?: string; 
  public get allowedCharacters() {
    return this.getStringAttribute('allowed_characters');
  }
  public set allowedCharacters(value: string) {
    this._allowedCharacters = value;
  }
  public resetAllowedCharacters() {
    this._allowedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCharactersInput() {
    return this._allowedCharacters;
  }

  // path_length - computed: true, optional: true, required: false
  private _pathLength?: string; 
  public get pathLength() {
    return this.getStringAttribute('path_length');
  }
  public set pathLength(value: string) {
    this._pathLength = value;
  }
  public resetPathLength() {
    this._pathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathLengthInput() {
    return this._pathLength;
  }

  // root_squash - computed: true, optional: true, required: false
  private _rootSquash?: boolean | cdktf.IResolvable; 
  public get rootSquash() {
    return this.getBooleanAttribute('root_squash');
  }
  public set rootSquash(value: boolean | cdktf.IResolvable) {
    this._rootSquash = value;
  }
  public resetRootSquash() {
    this._rootSquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashInput() {
    return this._rootSquash;
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share gcore_file_share}
*/
export class DataGcoreFileShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_file_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreFileShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreFileShare to import
  * @param importFromId The id of the existing DataGcoreFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreFileShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_file_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/data-sources/file_share gcore_file_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataGcoreFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_file_share',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
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
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._shareSettings.internalValue = config.shareSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_point - computed: true, optional: false, required: false
  public get connectionPoint() {
    return this.getStringAttribute('connection_point');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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

  // share_network_name - computed: true, optional: false, required: false
  public get shareNetworkName() {
    return this.getStringAttribute('share_network_name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // share_settings - computed: false, optional: true, required: false
  private _shareSettings = new DataGcoreFileShareShareSettingsOutputReference(this, "share_settings");
  public get shareSettings() {
    return this._shareSettings;
  }
  public putShareSettings(value: DataGcoreFileShareShareSettings) {
    this._shareSettings.internalValue = value;
  }
  public resetShareSettings() {
    this._shareSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSettingsInput() {
    return this._shareSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      share_settings: dataGcoreFileShareShareSettingsToTerraform(this._shareSettings.internalValue),
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
      share_settings: {
        value: dataGcoreFileShareShareSettingsToHclTerraform(this._shareSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGcoreFileShareShareSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
