// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenInstanceAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#child_instance_region_id DataAlicloudCenInstanceAttachments#child_instance_region_id}
  */
  readonly childInstanceRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#child_instance_type DataAlicloudCenInstanceAttachments#child_instance_type}
  */
  readonly childInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#id DataAlicloudCenInstanceAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#instance_id DataAlicloudCenInstanceAttachments#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#output_file DataAlicloudCenInstanceAttachments#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#status DataAlicloudCenInstanceAttachments#status}
  */
  readonly status?: string;
}
export interface DataAlicloudCenInstanceAttachmentsAttachments {
}

export function dataAlicloudCenInstanceAttachmentsAttachmentsToTerraform(struct?: DataAlicloudCenInstanceAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenInstanceAttachmentsAttachmentsToHclTerraform(struct?: DataAlicloudCenInstanceAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenInstanceAttachmentsAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCenInstanceAttachmentsAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenInstanceAttachmentsAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_instance_attach_time - computed: true, optional: false, required: false
  public get childInstanceAttachTime() {
    return this.getStringAttribute('child_instance_attach_time');
  }

  // child_instance_id - computed: true, optional: false, required: false
  public get childInstanceId() {
    return this.getStringAttribute('child_instance_id');
  }

  // child_instance_owner_id - computed: true, optional: false, required: false
  public get childInstanceOwnerId() {
    return this.getNumberAttribute('child_instance_owner_id');
  }

  // child_instance_region_id - computed: true, optional: false, required: false
  public get childInstanceRegionId() {
    return this.getStringAttribute('child_instance_region_id');
  }

  // child_instance_type - computed: true, optional: false, required: false
  public get childInstanceType() {
    return this.getStringAttribute('child_instance_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudCenInstanceAttachmentsAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenInstanceAttachmentsAttachmentsOutputReference {
    return new DataAlicloudCenInstanceAttachmentsAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments alicloud_cen_instance_attachments}
*/
export class DataAlicloudCenInstanceAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_instance_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenInstanceAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenInstanceAttachments to import
  * @param importFromId The id of the existing DataAlicloudCenInstanceAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenInstanceAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_instance_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_instance_attachments alicloud_cen_instance_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenInstanceAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenInstanceAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_instance_attachments',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childInstanceRegionId = config.childInstanceRegionId;
    this._childInstanceType = config.childInstanceType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataAlicloudCenInstanceAttachmentsAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // child_instance_region_id - computed: false, optional: true, required: false
  private _childInstanceRegionId?: string; 
  public get childInstanceRegionId() {
    return this.getStringAttribute('child_instance_region_id');
  }
  public set childInstanceRegionId(value: string) {
    this._childInstanceRegionId = value;
  }
  public resetChildInstanceRegionId() {
    this._childInstanceRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceRegionIdInput() {
    return this._childInstanceRegionId;
  }

  // child_instance_type - computed: false, optional: true, required: false
  private _childInstanceType?: string; 
  public get childInstanceType() {
    return this.getStringAttribute('child_instance_type');
  }
  public set childInstanceType(value: string) {
    this._childInstanceType = value;
  }
  public resetChildInstanceType() {
    this._childInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceTypeInput() {
    return this._childInstanceType;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_instance_region_id: cdktf.stringToTerraform(this._childInstanceRegionId),
      child_instance_type: cdktf.stringToTerraform(this._childInstanceType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_type: {
        value: cdktf.stringToHclTerraform(this._childInstanceType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
