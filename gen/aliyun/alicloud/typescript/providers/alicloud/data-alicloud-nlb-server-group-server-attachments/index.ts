// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudNlbServerGroupServerAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#id DataAlicloudNlbServerGroupServerAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#ids DataAlicloudNlbServerGroupServerAttachments#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#output_file DataAlicloudNlbServerGroupServerAttachments#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#server_group_id DataAlicloudNlbServerGroupServerAttachments#server_group_id}
  */
  readonly serverGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#server_ids DataAlicloudNlbServerGroupServerAttachments#server_ids}
  */
  readonly serverIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#server_ips DataAlicloudNlbServerGroupServerAttachments#server_ips}
  */
  readonly serverIps?: string[];
}
export interface DataAlicloudNlbServerGroupServerAttachmentsAttachments {
}

export function dataAlicloudNlbServerGroupServerAttachmentsAttachmentsToTerraform(struct?: DataAlicloudNlbServerGroupServerAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudNlbServerGroupServerAttachmentsAttachmentsToHclTerraform(struct?: DataAlicloudNlbServerGroupServerAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudNlbServerGroupServerAttachmentsAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudNlbServerGroupServerAttachmentsAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudNlbServerGroupServerAttachmentsAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_group_id - computed: true, optional: false, required: false
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // server_ip - computed: true, optional: false, required: false
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudNlbServerGroupServerAttachmentsAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudNlbServerGroupServerAttachmentsAttachmentsOutputReference {
    return new DataAlicloudNlbServerGroupServerAttachmentsAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments alicloud_nlb_server_group_server_attachments}
*/
export class DataAlicloudNlbServerGroupServerAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nlb_server_group_server_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudNlbServerGroupServerAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudNlbServerGroupServerAttachments to import
  * @param importFromId The id of the existing DataAlicloudNlbServerGroupServerAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudNlbServerGroupServerAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nlb_server_group_server_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/nlb_server_group_server_attachments alicloud_nlb_server_group_server_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudNlbServerGroupServerAttachmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudNlbServerGroupServerAttachmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nlb_server_group_server_attachments',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._serverGroupId = config.serverGroupId;
    this._serverIds = config.serverIds;
    this._serverIps = config.serverIps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataAlicloudNlbServerGroupServerAttachmentsAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // server_group_id - computed: false, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // server_ids - computed: false, optional: true, required: false
  private _serverIds?: string[]; 
  public get serverIds() {
    return this.getListAttribute('server_ids');
  }
  public set serverIds(value: string[]) {
    this._serverIds = value;
  }
  public resetServerIds() {
    this._serverIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdsInput() {
    return this._serverIds;
  }

  // server_ips - computed: false, optional: true, required: false
  private _serverIps?: string[]; 
  public get serverIps() {
    return this.getListAttribute('server_ips');
  }
  public set serverIps(value: string[]) {
    this._serverIps = value;
  }
  public resetServerIps() {
    this._serverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpsInput() {
    return this._serverIps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverIds),
      server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverIps),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
