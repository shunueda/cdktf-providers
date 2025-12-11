// https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#id FileShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the file share. It must be unique within the project and region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#name FileShare#name}
  */
  readonly name: string;
  /**
  * Project ID, only one of project_id or project_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#project_id FileShare#project_id}
  */
  readonly projectId?: number;
  /**
  * Project name, only one of project_id or project_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#project_name FileShare#project_name}
  */
  readonly projectName?: string;
  /**
  * The protocol used by the file share. Currently, only 'NFS' is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#protocol FileShare#protocol}
  */
  readonly protocol: string;
  /**
  * Region ID, only one of region_id or region_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#region_id FileShare#region_id}
  */
  readonly regionId?: number;
  /**
  * Region name, only one of region_id or region_name should be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#region_name FileShare#region_name}
  */
  readonly regionName?: string;
  /**
  * The size of the file share in GB. It must be a positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#size FileShare#size}
  */
  readonly size: number;
  /**
  * Tags to associate with the file share. Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#tags FileShare#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The type of the file share. Must be one of 'standard' or 'vast'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#type_name FileShare#type_name}
  */
  readonly typeName: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#access FileShare#access}
  */
  readonly access?: FileShareAccess[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#network FileShare#network}
  */
  readonly network?: FileShareNetwork;
  /**
  * share_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#share_settings FileShare#share_settings}
  */
  readonly shareSettings?: FileShareShareSettings;
}
export interface FileShareAccess {
  /**
  * The access mode of the file share (ro/rw).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#access_mode FileShare#access_mode}
  */
  readonly accessMode: string;
  /**
  * The IP address of the file share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#ip_address FileShare#ip_address}
  */
  readonly ipAddress: string;
}

export function fileShareAccessToTerraform(struct?: FileShareAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function fileShareAccessToHclTerraform(struct?: FileShareAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileShareAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileShareAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileShareAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._ipAddress = value.ipAddress;
    }
  }

  // access_mode - computed: false, optional: false, required: true
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class FileShareAccessList extends cdktf.ComplexList {
  public internalValue? : FileShareAccess[] | cdktf.IResolvable

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
  public get(index: number): FileShareAccessOutputReference {
    return new FileShareAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileShareNetwork {
  /**
  * The ID of the network to which the file share will be connected. This is required for 'standard'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#network_id FileShare#network_id}
  */
  readonly networkId?: string;
  /**
  * The ID of the subnet within the network. This is optional and can be used to specify a particular subnet for the file share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#subnet_id FileShare#subnet_id}
  */
  readonly subnetId?: string;
}

export function fileShareNetworkToTerraform(struct?: FileShareNetworkOutputReference | FileShareNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function fileShareNetworkToHclTerraform(struct?: FileShareNetworkOutputReference | FileShareNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileShareNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileShareNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileShareNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
      this._subnetId = value.subnetId;
    }
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface FileShareShareSettings {
  /**
  * Allowed characters in file names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#allowed_characters FileShare#allowed_characters}
  */
  readonly allowedCharacters?: string;
  /**
  * Affects the maximum limit of file path component name length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#path_length FileShare#path_length}
  */
  readonly pathLength?: string;
  /**
  * Indicates if root squash is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#root_squash FileShare#root_squash}
  */
  readonly rootSquash?: boolean | cdktf.IResolvable;
}

export function fileShareShareSettingsToTerraform(struct?: FileShareShareSettingsOutputReference | FileShareShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_characters: cdktf.stringToTerraform(struct!.allowedCharacters),
    path_length: cdktf.stringToTerraform(struct!.pathLength),
    root_squash: cdktf.booleanToTerraform(struct!.rootSquash),
  }
}


export function fileShareShareSettingsToHclTerraform(struct?: FileShareShareSettingsOutputReference | FileShareShareSettings): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileShareShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileShareShareSettings | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileShareShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCharacters = undefined;
      this._pathLength = undefined;
      this._rootSquash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCharacters = value.allowedCharacters;
      this._pathLength = value.pathLength;
      this._rootSquash = value.rootSquash;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share gcore_file_share}
*/
export class FileShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_file_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileShare to import
  * @param importFromId The id of the existing FileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_file_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/resources/file_share gcore_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileShareConfig
  */
  public constructor(scope: Construct, id: string, config: FileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_file_share',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.5',
        providerVersionConstraint: '0.32.5'
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
    this._protocol = config.protocol;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._size = config.size;
    this._tags = config.tags;
    this._typeName = config.typeName;
    this._access.internalValue = config.access;
    this._network.internalValue = config.network;
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

  // creator_task_id - computed: true, optional: false, required: false
  public get creatorTaskId() {
    return this.getStringAttribute('creator_task_id');
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
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

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // access - computed: false, optional: true, required: false
  private _access = new FileShareAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: FileShareAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new FileShareNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: FileShareNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // share_settings - computed: false, optional: true, required: false
  private _shareSettings = new FileShareShareSettingsOutputReference(this, "share_settings");
  public get shareSettings() {
    return this._shareSettings;
  }
  public putShareSettings(value: FileShareShareSettings) {
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
      protocol: cdktf.stringToTerraform(this._protocol),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      size: cdktf.numberToTerraform(this._size),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type_name: cdktf.stringToTerraform(this._typeName),
      access: cdktf.listMapper(fileShareAccessToTerraform, true)(this._access.internalValue),
      network: fileShareNetworkToTerraform(this._network.internalValue),
      share_settings: fileShareShareSettingsToTerraform(this._shareSettings.internalValue),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type_name: {
        value: cdktf.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: cdktf.listMapperHcl(fileShareAccessToHclTerraform, true)(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileShareAccessList",
      },
      network: {
        value: fileShareNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileShareNetworkList",
      },
      share_settings: {
        value: fileShareShareSettingsToHclTerraform(this._shareSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileShareShareSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
