// https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DriveConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the drive that will be cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#clone_drive_id Drive#clone_drive_id}
  */
  readonly cloneDriveId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#id Drive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Media representation type. It can be `cdrom` or `disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#media Drive#media}
  */
  readonly media: string;
  /**
  * Human readable name of the drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#name Drive#name}
  */
  readonly name: string;
  /**
  * Size of the drive in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#size Drive#size}
  */
  readonly size: number;
  /**
  * Drive storage type, cannot be changed after drive creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#storage_type Drive#storage_type}
  */
  readonly storageType?: string;
  /**
  * A list of the tags UUIDs to be applied to the drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#tags Drive#tags}
  */
  readonly tags?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#timeouts Drive#timeouts}
  */
  readonly timeouts?: DriveTimeouts;
}
export interface DriveMountedOn {
}

export function driveMountedOnToTerraform(struct?: DriveMountedOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function driveMountedOnToHclTerraform(struct?: DriveMountedOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DriveMountedOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DriveMountedOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriveMountedOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_uri - computed: true, optional: false, required: false
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DriveMountedOnList extends cdktf.ComplexList {

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
  public get(index: number): DriveMountedOnOutputReference {
    return new DriveMountedOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DriveTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#create Drive#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#update Drive#update}
  */
  readonly update?: string;
}

export function driveTimeoutsToTerraform(struct?: DriveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function driveTimeoutsToHclTerraform(struct?: DriveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DriveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DriveTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DriveTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive cloudsigma_drive}
*/
export class Drive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsigma_drive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Drive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Drive to import
  * @param importFromId The id of the existing Drive that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Drive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsigma_drive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs/resources/drive cloudsigma_drive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DriveConfig
  */
  public constructor(scope: Construct, id: string, config: DriveConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsigma_drive',
      terraformGeneratorMetadata: {
        providerName: 'cloudsigma',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloneDriveId = config.cloneDriveId;
    this._id = config.id;
    this._media = config.media;
    this._name = config.name;
    this._size = config.size;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone_drive_id - computed: false, optional: true, required: false
  private _cloneDriveId?: string; 
  public get cloneDriveId() {
    return this.getStringAttribute('clone_drive_id');
  }
  public set cloneDriveId(value: string) {
    this._cloneDriveId = value;
  }
  public resetCloneDriveId() {
    this._cloneDriveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneDriveIdInput() {
    return this._cloneDriveId;
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

  // media - computed: false, optional: false, required: true
  private _media?: string; 
  public get media() {
    return this.getStringAttribute('media');
  }
  public set media(value: string) {
    this._media = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaInput() {
    return this._media;
  }

  // mounted_on - computed: true, optional: false, required: false
  private _mountedOn = new DriveMountedOnList(this, "mounted_on", false);
  public get mountedOn() {
    return this._mountedOn;
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

  // resource_uri - computed: true, optional: false, required: false
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
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

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DriveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DriveTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone_drive_id: cdktf.stringToTerraform(this._cloneDriveId),
      id: cdktf.stringToTerraform(this._id),
      media: cdktf.stringToTerraform(this._media),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeouts: driveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone_drive_id: {
        value: cdktf.stringToHclTerraform(this._cloneDriveId),
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
      media: {
        value: cdktf.stringToHclTerraform(this._media),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: driveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DriveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
