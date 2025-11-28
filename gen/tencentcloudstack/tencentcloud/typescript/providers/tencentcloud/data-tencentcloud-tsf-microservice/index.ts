// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfMicroserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#id DataTencentcloudTsfMicroservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * microservice id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#microservice_id_list DataTencentcloudTsfMicroservice#microservice_id_list}
  */
  readonly microserviceIdList?: string[];
  /**
  * List of service names for search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#microservice_name_list DataTencentcloudTsfMicroservice#microservice_name_list}
  */
  readonly microserviceNameList?: string[];
  /**
  * namespace id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#namespace_id DataTencentcloudTsfMicroservice#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#result_output_file DataTencentcloudTsfMicroservice#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * status filter, online, offline, single_online.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#status DataTencentcloudTsfMicroservice#status}
  */
  readonly status?: string[];
}
export interface DataTencentcloudTsfMicroserviceResultContent {
}

export function dataTencentcloudTsfMicroserviceResultContentToTerraform(struct?: DataTencentcloudTsfMicroserviceResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfMicroserviceResultContentToHclTerraform(struct?: DataTencentcloudTsfMicroserviceResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfMicroserviceResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfMicroserviceResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfMicroserviceResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // critical_instance_count - computed: true, optional: false, required: false
  public get criticalInstanceCount() {
    return this.getNumberAttribute('critical_instance_count');
  }

  // microservice_desc - computed: true, optional: false, required: false
  public get microserviceDesc() {
    return this.getStringAttribute('microservice_desc');
  }

  // microservice_id - computed: true, optional: false, required: false
  public get microserviceId() {
    return this.getStringAttribute('microservice_id');
  }

  // microservice_name - computed: true, optional: false, required: false
  public get microserviceName() {
    return this.getStringAttribute('microservice_name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // run_instance_count - computed: true, optional: false, required: false
  public get runInstanceCount() {
    return this.getNumberAttribute('run_instance_count');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudTsfMicroserviceResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfMicroserviceResultContentOutputReference {
    return new DataTencentcloudTsfMicroserviceResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfMicroserviceResult {
}

export function dataTencentcloudTsfMicroserviceResultToTerraform(struct?: DataTencentcloudTsfMicroserviceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfMicroserviceResultToHclTerraform(struct?: DataTencentcloudTsfMicroserviceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfMicroserviceResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfMicroserviceResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfMicroserviceResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfMicroserviceResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfMicroserviceResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfMicroserviceResultOutputReference {
    return new DataTencentcloudTsfMicroserviceResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice tencentcloud_tsf_microservice}
*/
export class DataTencentcloudTsfMicroservice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_microservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfMicroservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfMicroservice to import
  * @param importFromId The id of the existing DataTencentcloudTsfMicroservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfMicroservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_microservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/tsf_microservice tencentcloud_tsf_microservice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfMicroserviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfMicroserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_microservice',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._microserviceIdList = config.microserviceIdList;
    this._microserviceNameList = config.microserviceNameList;
    this._namespaceId = config.namespaceId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // microservice_id_list - computed: false, optional: true, required: false
  private _microserviceIdList?: string[]; 
  public get microserviceIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('microservice_id_list'));
  }
  public set microserviceIdList(value: string[]) {
    this._microserviceIdList = value;
  }
  public resetMicroserviceIdList() {
    this._microserviceIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceIdListInput() {
    return this._microserviceIdList;
  }

  // microservice_name_list - computed: false, optional: true, required: false
  private _microserviceNameList?: string[]; 
  public get microserviceNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('microservice_name_list'));
  }
  public set microserviceNameList(value: string[]) {
    this._microserviceNameList = value;
  }
  public resetMicroserviceNameList() {
    this._microserviceNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceNameListInput() {
    return this._microserviceNameList;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfMicroserviceResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
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
      id: cdktf.stringToTerraform(this._id),
      microservice_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._microserviceIdList),
      microservice_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._microserviceNameList),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
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
      microservice_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._microserviceIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      microservice_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._microserviceNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
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
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
