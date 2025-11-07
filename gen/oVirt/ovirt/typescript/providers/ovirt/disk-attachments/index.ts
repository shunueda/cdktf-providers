// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detach unmanaged disks from the VM. This is useful for detaching disks that have been inherited from the template or added manually. The detached disks will not be removed and can be used. To remove the disks instead, use `remove_unmanaged`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#detach_unmanaged DiskAttachments#detach_unmanaged}
  */
  readonly detachUnmanaged?: boolean | cdktf.IResolvable;
  /**
  * Completely remove attached disks that are not listed in this resources. This is useful for removing disks that have been inherited from the template or added manually.
  * 
  * ~> Use with care! This option will delete all disks attached to the current VM that are not managed, not just detach them!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#remove_unmanaged DiskAttachments#remove_unmanaged}
  */
  readonly removeUnmanaged?: boolean | cdktf.IResolvable;
  /**
  * ID of the VM the disks should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#vm_id DiskAttachments#vm_id}
  */
  readonly vmId: string;
  /**
  * attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#attachment DiskAttachments#attachment}
  */
  readonly attachment: DiskAttachmentsAttachment[] | cdktf.IResolvable;
}
export interface DiskAttachmentsAttachment {
  /**
  * Defines whether the disk is active in the virtual machine it is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#active DiskAttachments#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the disk is bootable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#bootable DiskAttachments#bootable}
  */
  readonly bootable?: boolean | cdktf.IResolvable;
  /**
  * ID of the disk to attach. This disk must either be shared or not yet attached to a different VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#disk_id DiskAttachments#disk_id}
  */
  readonly diskId: string;
  /**
  * Type of interface to use for attaching disk. One of: `ide`, `sata`, `spapr_vscsi`, `virtio`, `virtio_scsi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#disk_interface DiskAttachments#disk_interface}
  */
  readonly diskInterface: string;
}

export function diskAttachmentsAttachmentToTerraform(struct?: DiskAttachmentsAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    bootable: cdktf.booleanToTerraform(struct!.bootable),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    disk_interface: cdktf.stringToTerraform(struct!.diskInterface),
  }
}


export function diskAttachmentsAttachmentToHclTerraform(struct?: DiskAttachmentsAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootable: {
      value: cdktf.booleanToHclTerraform(struct!.bootable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_interface: {
      value: cdktf.stringToHclTerraform(struct!.diskInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAttachmentsAttachmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiskAttachmentsAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._bootable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootable = this._bootable;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskInterface = this._diskInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAttachmentsAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._bootable = undefined;
      this._diskId = undefined;
      this._diskInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._bootable = value.bootable;
      this._diskId = value.diskId;
      this._diskInterface = value.diskInterface;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // bootable - computed: false, optional: true, required: false
  private _bootable?: boolean | cdktf.IResolvable; 
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }
  public set bootable(value: boolean | cdktf.IResolvable) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_interface - computed: false, optional: false, required: true
  private _diskInterface?: string; 
  public get diskInterface() {
    return this.getStringAttribute('disk_interface');
  }
  public set diskInterface(value: string) {
    this._diskInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInterfaceInput() {
    return this._diskInterface;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DiskAttachmentsAttachmentList extends cdktf.ComplexList {
  public internalValue? : DiskAttachmentsAttachment[] | cdktf.IResolvable

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
  public get(index: number): DiskAttachmentsAttachmentOutputReference {
    return new DiskAttachmentsAttachmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments ovirt_disk_attachments}
*/
export class DiskAttachments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_disk_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAttachments to import
  * @param importFromId The id of the existing DiskAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_disk_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_attachments ovirt_disk_attachments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DiskAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_disk_attachments',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detachUnmanaged = config.detachUnmanaged;
    this._removeUnmanaged = config.removeUnmanaged;
    this._vmId = config.vmId;
    this._attachment.internalValue = config.attachment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detach_unmanaged - computed: false, optional: true, required: false
  private _detachUnmanaged?: boolean | cdktf.IResolvable; 
  public get detachUnmanaged() {
    return this.getBooleanAttribute('detach_unmanaged');
  }
  public set detachUnmanaged(value: boolean | cdktf.IResolvable) {
    this._detachUnmanaged = value;
  }
  public resetDetachUnmanaged() {
    this._detachUnmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachUnmanagedInput() {
    return this._detachUnmanaged;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // remove_unmanaged - computed: false, optional: true, required: false
  private _removeUnmanaged?: boolean | cdktf.IResolvable; 
  public get removeUnmanaged() {
    return this.getBooleanAttribute('remove_unmanaged');
  }
  public set removeUnmanaged(value: boolean | cdktf.IResolvable) {
    this._removeUnmanaged = value;
  }
  public resetRemoveUnmanaged() {
    this._removeUnmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeUnmanagedInput() {
    return this._removeUnmanaged;
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // attachment - computed: false, optional: false, required: true
  private _attachment = new DiskAttachmentsAttachmentList(this, "attachment", true);
  public get attachment() {
    return this._attachment;
  }
  public putAttachment(value: DiskAttachmentsAttachment[] | cdktf.IResolvable) {
    this._attachment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detach_unmanaged: cdktf.booleanToTerraform(this._detachUnmanaged),
      remove_unmanaged: cdktf.booleanToTerraform(this._removeUnmanaged),
      vm_id: cdktf.stringToTerraform(this._vmId),
      attachment: cdktf.listMapper(diskAttachmentsAttachmentToTerraform, true)(this._attachment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detach_unmanaged: {
        value: cdktf.booleanToHclTerraform(this._detachUnmanaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_unmanaged: {
        value: cdktf.booleanToHclTerraform(this._removeUnmanaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment: {
        value: cdktf.listMapperHcl(diskAttachmentsAttachmentToHclTerraform, true)(this._attachment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DiskAttachmentsAttachmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
