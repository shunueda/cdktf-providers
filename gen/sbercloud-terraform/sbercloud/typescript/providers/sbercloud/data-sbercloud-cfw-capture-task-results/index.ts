// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudCfwCaptureTaskResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the ID of the firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#fw_instance_id DataSbercloudCfwCaptureTaskResults#fw_instance_id}
  */
  readonly fwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#id DataSbercloudCfwCaptureTaskResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the public IP address ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#ip DataSbercloudCfwCaptureTaskResults#ip}
  */
  readonly ip?: string[];
  /**
  * Specifies the region in which to query the resource. If omitted, the provider-level region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#region DataSbercloudCfwCaptureTaskResults#region}
  */
  readonly region?: string;
  /**
  * Specifies the capture task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#task_id DataSbercloudCfwCaptureTaskResults#task_id}
  */
  readonly taskId: string;
  /**
  * Specifies whether to set a public IP address for downloading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#type DataSbercloudCfwCaptureTaskResults#type}
  */
  readonly type?: number;
}
export interface DataSbercloudCfwCaptureTaskResultsFileListStruct {
}

export function dataSbercloudCfwCaptureTaskResultsFileListStructToTerraform(struct?: DataSbercloudCfwCaptureTaskResultsFileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwCaptureTaskResultsFileListStructToHclTerraform(struct?: DataSbercloudCfwCaptureTaskResultsFileListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwCaptureTaskResultsFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwCaptureTaskResultsFileListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwCaptureTaskResultsFileListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataSbercloudCfwCaptureTaskResultsFileListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwCaptureTaskResultsFileListStructOutputReference {
    return new DataSbercloudCfwCaptureTaskResultsFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwCaptureTaskResultsRequestHeader {
}

export function dataSbercloudCfwCaptureTaskResultsRequestHeaderToTerraform(struct?: DataSbercloudCfwCaptureTaskResultsRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwCaptureTaskResultsRequestHeaderToHclTerraform(struct?: DataSbercloudCfwCaptureTaskResultsRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwCaptureTaskResultsRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwCaptureTaskResultsRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwCaptureTaskResultsRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class DataSbercloudCfwCaptureTaskResultsRequestHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwCaptureTaskResultsRequestHeaderOutputReference {
    return new DataSbercloudCfwCaptureTaskResultsRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results sbercloud_cfw_capture_task_results}
*/
export class DataSbercloudCfwCaptureTaskResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cfw_capture_task_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudCfwCaptureTaskResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudCfwCaptureTaskResults to import
  * @param importFromId The id of the existing DataSbercloudCfwCaptureTaskResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudCfwCaptureTaskResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cfw_capture_task_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_capture_task_results sbercloud_cfw_capture_task_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudCfwCaptureTaskResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudCfwCaptureTaskResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cfw_capture_task_results',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._ip = config.ip;
    this._region = config.region;
    this._taskId = config.taskId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // captcha - computed: true, optional: false, required: false
  public get captcha() {
    return this.getStringAttribute('captcha');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getNumberAttribute('expires');
  }

  // file_list - computed: true, optional: false, required: false
  private _fileList = new DataSbercloudCfwCaptureTaskResultsFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }

  // fw_instance_id - computed: false, optional: false, required: true
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_header - computed: true, optional: false, required: false
  private _requestHeader = new DataSbercloudCfwCaptureTaskResultsRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip),
      region: cdktf.stringToTerraform(this._region),
      task_id: cdktf.stringToTerraform(this._taskId),
      type: cdktf.numberToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
