// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudScfAsyncEventManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#function_name DataTencentcloudScfAsyncEventManagement#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#id DataTencentcloudScfAsyncEventManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter (event invocation request ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#invoke_request_id DataTencentcloudScfAsyncEventManagement#invoke_request_id}
  */
  readonly invokeRequestId?: string;
  /**
  * Filter (invocation type list), Values: CMQ, CKAFKA_TRIGGER, APIGW, COS, TRIGGER_TIMER, MPS_TRIGGER, CLS_TRIGGER, OTHERS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#invoke_type DataTencentcloudScfAsyncEventManagement#invoke_type}
  */
  readonly invokeType?: string[];
  /**
  * Function namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#namespace DataTencentcloudScfAsyncEventManagement#namespace}
  */
  readonly namespace?: string;
  /**
  * Valid values: ASC, DESC. Default value: DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#order DataTencentcloudScfAsyncEventManagement#order}
  */
  readonly order?: string;
  /**
  * Valid values: StartTime, EndTime. Default value: StartTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#orderby DataTencentcloudScfAsyncEventManagement#orderby}
  */
  readonly orderby?: string;
  /**
  * Filter (function version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#qualifier DataTencentcloudScfAsyncEventManagement#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#result_output_file DataTencentcloudScfAsyncEventManagement#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter (event status list), Values: RUNNING, FINISHED, ABORTED, FAILED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#status DataTencentcloudScfAsyncEventManagement#status}
  */
  readonly status?: string[];
}
export interface DataTencentcloudScfAsyncEventManagementEventListStruct {
}

export function dataTencentcloudScfAsyncEventManagementEventListStructToTerraform(struct?: DataTencentcloudScfAsyncEventManagementEventListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudScfAsyncEventManagementEventListStructToHclTerraform(struct?: DataTencentcloudScfAsyncEventManagementEventListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudScfAsyncEventManagementEventListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudScfAsyncEventManagementEventListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudScfAsyncEventManagementEventListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // invoke_request_id - computed: true, optional: false, required: false
  public get invokeRequestId() {
    return this.getStringAttribute('invoke_request_id');
  }

  // invoke_type - computed: true, optional: false, required: false
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudScfAsyncEventManagementEventListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudScfAsyncEventManagementEventListStructOutputReference {
    return new DataTencentcloudScfAsyncEventManagementEventListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management tencentcloud_scf_async_event_management}
*/
export class DataTencentcloudScfAsyncEventManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_async_event_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudScfAsyncEventManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudScfAsyncEventManagement to import
  * @param importFromId The id of the existing DataTencentcloudScfAsyncEventManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudScfAsyncEventManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_async_event_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/scf_async_event_management tencentcloud_scf_async_event_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudScfAsyncEventManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudScfAsyncEventManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_async_event_management',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._id = config.id;
    this._invokeRequestId = config.invokeRequestId;
    this._invokeType = config.invokeType;
    this._namespace = config.namespace;
    this._order = config.order;
    this._orderby = config.orderby;
    this._qualifier = config.qualifier;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_list - computed: true, optional: false, required: false
  private _eventList = new DataTencentcloudScfAsyncEventManagementEventListStructList(this, "event_list", false);
  public get eventList() {
    return this._eventList;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // invoke_request_id - computed: false, optional: true, required: false
  private _invokeRequestId?: string; 
  public get invokeRequestId() {
    return this.getStringAttribute('invoke_request_id');
  }
  public set invokeRequestId(value: string) {
    this._invokeRequestId = value;
  }
  public resetInvokeRequestId() {
    this._invokeRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeRequestIdInput() {
    return this._invokeRequestId;
  }

  // invoke_type - computed: false, optional: true, required: false
  private _invokeType?: string[]; 
  public get invokeType() {
    return cdktf.Fn.tolist(this.getListAttribute('invoke_type'));
  }
  public set invokeType(value: string[]) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // orderby - computed: false, optional: true, required: false
  private _orderby?: string; 
  public get orderby() {
    return this.getStringAttribute('orderby');
  }
  public set orderby(value: string) {
    this._orderby = value;
  }
  public resetOrderby() {
    this._orderby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderbyInput() {
    return this._orderby;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
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
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      invoke_request_id: cdktf.stringToTerraform(this._invokeRequestId),
      invoke_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invokeType),
      namespace: cdktf.stringToTerraform(this._namespace),
      order: cdktf.stringToTerraform(this._order),
      orderby: cdktf.stringToTerraform(this._orderby),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      invoke_request_id: {
        value: cdktf.stringToHclTerraform(this._invokeRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoke_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invokeType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orderby: {
        value: cdktf.stringToHclTerraform(this._orderby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
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
