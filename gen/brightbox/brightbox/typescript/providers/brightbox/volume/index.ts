// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Verbose Description of this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#description Volume#description}
  */
  readonly description?: string;
  /**
  * Is true if the volume is encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#encrypted Volume#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Label given to the filesystem on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#filesystem_label Volume#filesystem_label}
  */
  readonly filesystemLabel?: string;
  /**
  * Format of the filesystem on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#filesystem_type Volume#filesystem_type}
  */
  readonly filesystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#id Volume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image used to create the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#image Volume#image}
  */
  readonly image?: string;
  /**
  * Is true if the image is set as locked and cannot be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#locked Volume#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Human Readable Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#name Volume#name}
  */
  readonly name?: string;
  /**
  * Volume Serial Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#serial Volume#serial}
  */
  readonly serial?: string;
  /**
  * ID of the server this volume is to be mapped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#server Volume#server}
  */
  readonly server?: string;
  /**
  * Disk size in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#size Volume#size}
  */
  readonly size?: number;
  /**
  * ID of the source volume for this image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#source Volume#source}
  */
  readonly source?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#timeouts Volume#timeouts}
  */
  readonly timeouts?: VolumeTimeouts;
}
export interface VolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#create Volume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#delete Volume#delete}
  */
  readonly delete?: string;
}

export function volumeTimeoutsToTerraform(struct?: VolumeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function volumeTimeoutsToHclTerraform(struct?: VolumeTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VolumeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume brightbox_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/volume brightbox_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'brightbox_volume',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._filesystemLabel = config.filesystemLabel;
    this._filesystemType = config.filesystemType;
    this._id = config.id;
    this._image = config.image;
    this._locked = config.locked;
    this._name = config.name;
    this._serial = config.serial;
    this._server = config.server;
    this._size = config.size;
    this._source = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // filesystem_label - computed: false, optional: true, required: false
  private _filesystemLabel?: string; 
  public get filesystemLabel() {
    return this.getStringAttribute('filesystem_label');
  }
  public set filesystemLabel(value: string) {
    this._filesystemLabel = value;
  }
  public resetFilesystemLabel() {
    this._filesystemLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemLabelInput() {
    return this._filesystemLabel;
  }

  // filesystem_type - computed: false, optional: true, required: false
  private _filesystemType?: string; 
  public get filesystemType() {
    return this.getStringAttribute('filesystem_type');
  }
  public set filesystemType(value: string) {
    this._filesystemType = value;
  }
  public resetFilesystemType() {
    this._filesystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemTypeInput() {
    return this._filesystemType;
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

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // name - computed: false, optional: true, required: false
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

  // serial - computed: true, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VolumeTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      filesystem_label: cdktf.stringToTerraform(this._filesystemLabel),
      filesystem_type: cdktf.stringToTerraform(this._filesystemType),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      serial: cdktf.stringToTerraform(this._serial),
      server: cdktf.stringToTerraform(this._server),
      size: cdktf.numberToTerraform(this._size),
      source: cdktf.stringToTerraform(this._source),
      timeouts: volumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filesystem_label: {
        value: cdktf.stringToHclTerraform(this._filesystemLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filesystem_type: {
        value: cdktf.stringToHclTerraform(this._filesystemType),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: volumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
