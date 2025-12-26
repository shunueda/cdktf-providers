// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcrTagRetentionExecutionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions#id DataTencentcloudTcrTagRetentionExecutions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions#registry_id DataTencentcloudTcrTagRetentionExecutions#registry_id}
  */
  readonly registryId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions#result_output_file DataTencentcloudTcrTagRetentionExecutions#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * retention id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions#retention_id DataTencentcloudTcrTagRetentionExecutions#retention_id}
  */
  readonly retentionId: number;
}
export interface DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStruct {
}

export function dataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructToTerraform(struct?: DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructToHclTerraform(struct?: DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStruct | undefined) {
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

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getNumberAttribute('execution_id');
  }

  // retention_id - computed: true, optional: false, required: false
  public get retentionId() {
    return this.getNumberAttribute('retention_id');
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

export class DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructOutputReference {
    return new DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions tencentcloud_tcr_tag_retention_executions}
*/
export class DataTencentcloudTcrTagRetentionExecutions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_tag_retention_executions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcrTagRetentionExecutions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcrTagRetentionExecutions to import
  * @param importFromId The id of the existing DataTencentcloudTcrTagRetentionExecutions that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcrTagRetentionExecutions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_tag_retention_executions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/tcr_tag_retention_executions tencentcloud_tcr_tag_retention_executions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcrTagRetentionExecutionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcrTagRetentionExecutionsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_tag_retention_executions',
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
    this._id = config.id;
    this._registryId = config.registryId;
    this._resultOutputFile = config.resultOutputFile;
    this._retentionId = config.retentionId;
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

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
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

  // retention_execution_list - computed: true, optional: false, required: false
  private _retentionExecutionList = new DataTencentcloudTcrTagRetentionExecutionsRetentionExecutionListStructList(this, "retention_execution_list", false);
  public get retentionExecutionList() {
    return this._retentionExecutionList;
  }

  // retention_id - computed: false, optional: false, required: true
  private _retentionId?: number; 
  public get retentionId() {
    return this.getNumberAttribute('retention_id');
  }
  public set retentionId(value: number) {
    this._retentionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIdInput() {
    return this._retentionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      registry_id: cdktf.stringToTerraform(this._registryId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      retention_id: cdktf.numberToTerraform(this._retentionId),
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
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
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
      retention_id: {
        value: cdktf.numberToHclTerraform(this._retentionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
