// https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvirtTemplateDiskAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments#id DataOvirtTemplateDiskAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oVirt ID of the template to list the disk attachments for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments#template_id DataOvirtTemplateDiskAttachments#template_id}
  */
  readonly templateId: string;
}
export interface DataOvirtTemplateDiskAttachmentsDiskAttachments {
}

export function dataOvirtTemplateDiskAttachmentsDiskAttachmentsToTerraform(struct?: DataOvirtTemplateDiskAttachmentsDiskAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvirtTemplateDiskAttachmentsDiskAttachmentsToHclTerraform(struct?: DataOvirtTemplateDiskAttachmentsDiskAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvirtTemplateDiskAttachmentsDiskAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvirtTemplateDiskAttachmentsDiskAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvirtTemplateDiskAttachmentsDiskAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_interface - computed: true, optional: false, required: false
  public get diskInterface() {
    return this.getStringAttribute('disk_interface');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOvirtTemplateDiskAttachmentsDiskAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvirtTemplateDiskAttachmentsDiskAttachmentsOutputReference {
    return new DataOvirtTemplateDiskAttachmentsDiskAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments ovirt_template_disk_attachments}
*/
export class DataOvirtTemplateDiskAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_template_disk_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvirtTemplateDiskAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvirtTemplateDiskAttachments to import
  * @param importFromId The id of the existing DataOvirtTemplateDiskAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvirtTemplateDiskAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_template_disk_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/data-sources/template_disk_attachments ovirt_template_disk_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvirtTemplateDiskAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvirtTemplateDiskAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_template_disk_attachments',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.2.0',
        providerVersionConstraint: '2.2.0'
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
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_attachments - computed: true, optional: false, required: false
  private _diskAttachments = new DataOvirtTemplateDiskAttachmentsDiskAttachmentsList(this, "disk_attachments", true);
  public get diskAttachments() {
    return this._diskAttachments;
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
