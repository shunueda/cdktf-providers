// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceDiskAConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of public SSH keys that will be automatically appended to the root user's ~/.ssh/authorized_keys file when deploying from an Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#authorized_keys InstanceDiskA#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users ~/.ssh/authorized_keys file automatically when deploying from an Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#authorized_users InstanceDiskA#authorized_users}
  */
  readonly authorizedUsers?: string[];
  /**
  * The filesystem of this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#filesystem InstanceDiskA#filesystem}
  */
  readonly filesystem?: string;
  /**
  * An Image ID to deploy the Linode Disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#image InstanceDiskA#image}
  */
  readonly image?: string;
  /**
  * The Disk;s label is for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#label InstanceDiskA#label}
  */
  readonly label: string;
  /**
  * The ID of the Linode to assign this disk to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#linode_id InstanceDiskA#linode_id}
  */
  readonly linodeId: number;
  /**
  * This sets the root user's password on a newly-created Linode Disk when deploying from an Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#root_pass InstanceDiskA#root_pass}
  */
  readonly rootPass?: string;
  /**
  * The ID of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#size InstanceDiskA#size}
  */
  readonly size: number;
  /**
  * An object containing responses to any User Defined Fields present in the StackScript being deployed to this Disk. Only accepted if 'stackscript_id' is given. The required values depend on the StackScript being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#stackscript_data InstanceDiskA#stackscript_data}
  */
  readonly stackscriptData?: { [key: string]: string };
  /**
  * A StackScript ID that will cause the referenced StackScript to be run during deployment of this Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#stackscript_id InstanceDiskA#stackscript_id}
  */
  readonly stackscriptId?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#timeouts InstanceDiskA#timeouts}
  */
  readonly timeouts?: InstanceDiskTimeouts;
}
export interface InstanceDiskTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#create InstanceDiskA#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#delete InstanceDiskA#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#update InstanceDiskA#update}
  */
  readonly update?: string;
}

export function instanceDiskTimeoutsToTerraform(struct?: InstanceDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function instanceDiskTimeoutsToHclTerraform(struct?: InstanceDiskTimeouts | cdktf.IResolvable): any {
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

export class InstanceDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceDiskTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk linode_instance_disk}
*/
export class InstanceDiskA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_instance_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceDiskA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceDiskA to import
  * @param importFromId The id of the existing InstanceDiskA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceDiskA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_instance_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance_disk linode_instance_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceDiskAConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceDiskAConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_instance_disk',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedKeys = config.authorizedKeys;
    this._authorizedUsers = config.authorizedUsers;
    this._filesystem = config.filesystem;
    this._image = config.image;
    this._label = config.label;
    this._linodeId = config.linodeId;
    this._rootPass = config.rootPass;
    this._size = config.size;
    this._stackscriptData = config.stackscriptData;
    this._stackscriptId = config.stackscriptId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_keys'));
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // authorized_users - computed: false, optional: true, required: false
  private _authorizedUsers?: string[]; 
  public get authorizedUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_users'));
  }
  public set authorizedUsers(value: string[]) {
    this._authorizedUsers = value;
  }
  public resetAuthorizedUsers() {
    this._authorizedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // disk_encryption - computed: true, optional: false, required: false
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }

  // filesystem - computed: true, optional: true, required: false
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  public resetFilesystem() {
    this._filesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // linode_id - computed: false, optional: false, required: true
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // root_pass - computed: false, optional: true, required: false
  private _rootPass?: string; 
  public get rootPass() {
    return this.getStringAttribute('root_pass');
  }
  public set rootPass(value: string) {
    this._rootPass = value;
  }
  public resetRootPass() {
    this._rootPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPassInput() {
    return this._rootPass;
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

  // stackscript_data - computed: false, optional: true, required: false
  private _stackscriptData?: { [key: string]: string }; 
  public get stackscriptData() {
    return this.getStringMapAttribute('stackscript_data');
  }
  public set stackscriptData(value: { [key: string]: string }) {
    this._stackscriptData = value;
  }
  public resetStackscriptData() {
    this._stackscriptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptDataInput() {
    return this._stackscriptData;
  }

  // stackscript_id - computed: false, optional: true, required: false
  private _stackscriptId?: number; 
  public get stackscriptId() {
    return this.getNumberAttribute('stackscript_id');
  }
  public set stackscriptId(value: number) {
    this._stackscriptId = value;
  }
  public resetStackscriptId() {
    this._stackscriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptIdInput() {
    return this._stackscriptId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceDiskTimeouts) {
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
      authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedKeys),
      authorized_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedUsers),
      filesystem: cdktf.stringToTerraform(this._filesystem),
      image: cdktf.stringToTerraform(this._image),
      label: cdktf.stringToTerraform(this._label),
      linode_id: cdktf.numberToTerraform(this._linodeId),
      root_pass: cdktf.stringToTerraform(this._rootPass),
      size: cdktf.numberToTerraform(this._size),
      stackscript_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._stackscriptData),
      stackscript_id: cdktf.numberToTerraform(this._stackscriptId),
      timeouts: instanceDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorized_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filesystem: {
        value: cdktf.stringToHclTerraform(this._filesystem),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_pass: {
        value: cdktf.stringToHclTerraform(this._rootPass),
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
      stackscript_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._stackscriptData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      stackscript_id: {
        value: cdktf.numberToHclTerraform(this._stackscriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: instanceDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
