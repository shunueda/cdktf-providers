// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudBrainIndustrialPidLoopsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#enable_details DataAlicloudBrainIndustrialPidLoops#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#id DataAlicloudBrainIndustrialPidLoops#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#ids DataAlicloudBrainIndustrialPidLoops#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#name_regex DataAlicloudBrainIndustrialPidLoops#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#output_file DataAlicloudBrainIndustrialPidLoops#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#pid_loop_name DataAlicloudBrainIndustrialPidLoops#pid_loop_name}
  */
  readonly pidLoopName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#pid_project_id DataAlicloudBrainIndustrialPidLoops#pid_project_id}
  */
  readonly pidProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#status DataAlicloudBrainIndustrialPidLoops#status}
  */
  readonly status?: string;
}
export interface DataAlicloudBrainIndustrialPidLoopsLoops {
}

export function dataAlicloudBrainIndustrialPidLoopsLoopsToTerraform(struct?: DataAlicloudBrainIndustrialPidLoopsLoops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudBrainIndustrialPidLoopsLoopsToHclTerraform(struct?: DataAlicloudBrainIndustrialPidLoopsLoops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudBrainIndustrialPidLoopsLoopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudBrainIndustrialPidLoopsLoops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudBrainIndustrialPidLoopsLoops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pid_loop_configuration - computed: true, optional: false, required: false
  public get pidLoopConfiguration() {
    return this.getStringAttribute('pid_loop_configuration');
  }

  // pid_loop_dcs_type - computed: true, optional: false, required: false
  public get pidLoopDcsType() {
    return this.getStringAttribute('pid_loop_dcs_type');
  }

  // pid_loop_desc - computed: true, optional: false, required: false
  public get pidLoopDesc() {
    return this.getStringAttribute('pid_loop_desc');
  }

  // pid_loop_id - computed: true, optional: false, required: false
  public get pidLoopId() {
    return this.getStringAttribute('pid_loop_id');
  }

  // pid_loop_is_crucial - computed: true, optional: false, required: false
  public get pidLoopIsCrucial() {
    return this.getBooleanAttribute('pid_loop_is_crucial');
  }

  // pid_loop_name - computed: true, optional: false, required: false
  public get pidLoopName() {
    return this.getStringAttribute('pid_loop_name');
  }

  // pid_loop_type - computed: true, optional: false, required: false
  public get pidLoopType() {
    return this.getStringAttribute('pid_loop_type');
  }

  // pid_project_id - computed: true, optional: false, required: false
  public get pidProjectId() {
    return this.getStringAttribute('pid_project_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudBrainIndustrialPidLoopsLoopsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudBrainIndustrialPidLoopsLoopsOutputReference {
    return new DataAlicloudBrainIndustrialPidLoopsLoopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops alicloud_brain_industrial_pid_loops}
*/
export class DataAlicloudBrainIndustrialPidLoops extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_brain_industrial_pid_loops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudBrainIndustrialPidLoops resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudBrainIndustrialPidLoops to import
  * @param importFromId The id of the existing DataAlicloudBrainIndustrialPidLoops that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudBrainIndustrialPidLoops to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_brain_industrial_pid_loops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/brain_industrial_pid_loops alicloud_brain_industrial_pid_loops} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudBrainIndustrialPidLoopsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudBrainIndustrialPidLoopsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_brain_industrial_pid_loops',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pidLoopName = config.pidLoopName;
    this._pidProjectId = config.pidProjectId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // loops - computed: true, optional: false, required: false
  private _loops = new DataAlicloudBrainIndustrialPidLoopsLoopsList(this, "loops", false);
  public get loops() {
    return this._loops;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // pid_loop_name - computed: false, optional: true, required: false
  private _pidLoopName?: string; 
  public get pidLoopName() {
    return this.getStringAttribute('pid_loop_name');
  }
  public set pidLoopName(value: string) {
    this._pidLoopName = value;
  }
  public resetPidLoopName() {
    this._pidLoopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopNameInput() {
    return this._pidLoopName;
  }

  // pid_project_id - computed: false, optional: false, required: true
  private _pidProjectId?: string; 
  public get pidProjectId() {
    return this.getStringAttribute('pid_project_id');
  }
  public set pidProjectId(value: string) {
    this._pidProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidProjectIdInput() {
    return this._pidProjectId;
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
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      pid_loop_name: cdktf.stringToTerraform(this._pidLoopName),
      pid_project_id: cdktf.stringToTerraform(this._pidProjectId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      pid_loop_name: {
        value: cdktf.stringToHclTerraform(this._pidLoopName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_project_id: {
        value: cdktf.stringToHclTerraform(this._pidProjectId),
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
