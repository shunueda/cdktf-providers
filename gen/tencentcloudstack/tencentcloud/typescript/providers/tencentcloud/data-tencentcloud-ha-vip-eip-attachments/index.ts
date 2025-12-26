// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudHaVipEipAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Public IP address of EIP to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments#address_ip DataTencentcloudHaVipEipAttachments#address_ip}
  */
  readonly addressIp?: string;
  /**
  * ID of the attached HA VIP to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments#havip_id DataTencentcloudHaVipEipAttachments#havip_id}
  */
  readonly havipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments#id DataTencentcloudHaVipEipAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments#result_output_file DataTencentcloudHaVipEipAttachments#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStruct {
}

export function dataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructToTerraform(struct?: DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructToHclTerraform(struct?: DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_ip - computed: true, optional: false, required: false
  public get addressIp() {
    return this.getStringAttribute('address_ip');
  }

  // havip_id - computed: true, optional: false, required: false
  public get havipId() {
    return this.getStringAttribute('havip_id');
  }
}

export class DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructOutputReference {
    return new DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments tencentcloud_ha_vip_eip_attachments}
*/
export class DataTencentcloudHaVipEipAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ha_vip_eip_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudHaVipEipAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudHaVipEipAttachments to import
  * @param importFromId The id of the existing DataTencentcloudHaVipEipAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudHaVipEipAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ha_vip_eip_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/ha_vip_eip_attachments tencentcloud_ha_vip_eip_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudHaVipEipAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudHaVipEipAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ha_vip_eip_attachments',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIp = config.addressIp;
    this._havipId = config.havipId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip - computed: false, optional: true, required: false
  private _addressIp?: string; 
  public get addressIp() {
    return this.getStringAttribute('address_ip');
  }
  public set addressIp(value: string) {
    this._addressIp = value;
  }
  public resetAddressIp() {
    this._addressIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpInput() {
    return this._addressIp;
  }

  // ha_vip_eip_attachment_list - computed: true, optional: false, required: false
  private _haVipEipAttachmentList = new DataTencentcloudHaVipEipAttachmentsHaVipEipAttachmentListStructList(this, "ha_vip_eip_attachment_list", false);
  public get haVipEipAttachmentList() {
    return this._haVipEipAttachmentList;
  }

  // havip_id - computed: false, optional: false, required: true
  private _havipId?: string; 
  public get havipId() {
    return this.getStringAttribute('havip_id');
  }
  public set havipId(value: string) {
    this._havipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get havipIdInput() {
    return this._havipId;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip: cdktf.stringToTerraform(this._addressIp),
      havip_id: cdktf.stringToTerraform(this._havipId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip: {
        value: cdktf.stringToHclTerraform(this._addressIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      havip_id: {
        value: cdktf.stringToHclTerraform(this._havipId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
