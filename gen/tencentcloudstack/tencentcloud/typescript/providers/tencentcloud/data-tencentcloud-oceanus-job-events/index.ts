// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOceanusJobEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter condition:End Unix timestamp (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#end_timestamp DataTencentcloudOceanusJobEvents#end_timestamp}
  */
  readonly endTimestamp: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#id DataTencentcloudOceanusJobEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#job_id DataTencentcloudOceanusJobEvents#job_id}
  */
  readonly jobId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#result_output_file DataTencentcloudOceanusJobEvents#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter condition:Start Unix timestamp (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#start_timestamp DataTencentcloudOceanusJobEvents#start_timestamp}
  */
  readonly startTimestamp: number;
  /**
  * Event types. If not passed, data of all types will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#types DataTencentcloudOceanusJobEvents#types}
  */
  readonly types?: string[];
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#work_space_id DataTencentcloudOceanusJobEvents#work_space_id}
  */
  readonly workSpaceId: string;
}
export interface DataTencentcloudOceanusJobEventsEvents {
}

export function dataTencentcloudOceanusJobEventsEventsToTerraform(struct?: DataTencentcloudOceanusJobEventsEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusJobEventsEventsToHclTerraform(struct?: DataTencentcloudOceanusJobEventsEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusJobEventsEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusJobEventsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusJobEventsEvents | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // running_order_id - computed: true, optional: false, required: false
  public get runningOrderId() {
    return this.getNumberAttribute('running_order_id');
  }

  // solution_link - computed: true, optional: false, required: false
  public get solutionLink() {
    return this.getStringAttribute('solution_link');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudOceanusJobEventsEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusJobEventsEventsOutputReference {
    return new DataTencentcloudOceanusJobEventsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events tencentcloud_oceanus_job_events}
*/
export class DataTencentcloudOceanusJobEvents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_job_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOceanusJobEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOceanusJobEvents to import
  * @param importFromId The id of the existing DataTencentcloudOceanusJobEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOceanusJobEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_job_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/oceanus_job_events tencentcloud_oceanus_job_events} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOceanusJobEventsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOceanusJobEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_job_events',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTimestamp = config.endTimestamp;
    this._id = config.id;
    this._jobId = config.jobId;
    this._resultOutputFile = config.resultOutputFile;
    this._startTimestamp = config.startTimestamp;
    this._types = config.types;
    this._workSpaceId = config.workSpaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_timestamp - computed: false, optional: false, required: true
  private _endTimestamp?: number; 
  public get endTimestamp() {
    return this.getNumberAttribute('end_timestamp');
  }
  public set endTimestamp(value: number) {
    this._endTimestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimestampInput() {
    return this._endTimestamp;
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataTencentcloudOceanusJobEventsEventsList(this, "events", false);
  public get events() {
    return this._events;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // running_order_ids - computed: true, optional: false, required: false
  public get runningOrderIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('running_order_ids')));
  }

  // start_timestamp - computed: false, optional: false, required: true
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // work_space_id - computed: false, optional: false, required: true
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceIdInput() {
    return this._workSpaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_timestamp: cdktf.numberToTerraform(this._endTimestamp),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_timestamp: cdktf.numberToTerraform(this._startTimestamp),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_timestamp: {
        value: cdktf.numberToHclTerraform(this._endTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
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
      start_timestamp: {
        value: cdktf.numberToHclTerraform(this._startTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
