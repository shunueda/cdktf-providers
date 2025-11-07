// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualFileSystemStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#attached_instances VirtualFileSystemStorage#attached_instances}
  */
  readonly attachedInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#disk_type VirtualFileSystemStorage#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#id VirtualFileSystemStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#label VirtualFileSystemStorage#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#region VirtualFileSystemStorage#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#size_gb VirtualFileSystemStorage#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#tags VirtualFileSystemStorage#tags}
  */
  readonly tags?: string[];
}
export interface VirtualFileSystemStorageAttachments {
}

export function virtualFileSystemStorageAttachmentsToTerraform(struct?: VirtualFileSystemStorageAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualFileSystemStorageAttachmentsToHclTerraform(struct?: VirtualFileSystemStorageAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualFileSystemStorageAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualFileSystemStorageAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualFileSystemStorageAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // mount - computed: true, optional: false, required: false
  public get mount() {
    return this.getNumberAttribute('mount');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VirtualFileSystemStorageAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): VirtualFileSystemStorageAttachmentsOutputReference {
    return new VirtualFileSystemStorageAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage vultr_virtual_file_system_storage}
*/
export class VirtualFileSystemStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_virtual_file_system_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualFileSystemStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualFileSystemStorage to import
  * @param importFromId The id of the existing VirtualFileSystemStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualFileSystemStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_virtual_file_system_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/virtual_file_system_storage vultr_virtual_file_system_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualFileSystemStorageConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualFileSystemStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_virtual_file_system_storage',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachedInstances = config.attachedInstances;
    this._diskType = config.diskType;
    this._id = config.id;
    this._label = config.label;
    this._region = config.region;
    this._sizeGb = config.sizeGb;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_instances - computed: false, optional: true, required: false
  private _attachedInstances?: string[]; 
  public get attachedInstances() {
    return cdktf.Fn.tolist(this.getListAttribute('attached_instances'));
  }
  public set attachedInstances(value: string[]) {
    this._attachedInstances = value;
  }
  public resetAttachedInstances() {
    this._attachedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInstancesInput() {
    return this._attachedInstances;
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new VirtualFileSystemStorageAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // charges - computed: true, optional: false, required: false
  public get charges() {
    return this.getNumberAttribute('charges');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attachedInstances),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      region: cdktf.stringToTerraform(this._region),
      size_gb: cdktf.numberToTerraform(this._sizeGb),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attachedInstances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      size_gb: {
        value: cdktf.numberToHclTerraform(this._sizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
