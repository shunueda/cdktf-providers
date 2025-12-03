// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOceanusResourceRelatedJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default:0; 1:sort by job version creation time in descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#desc_by_job_config_create_time DataTencentcloudOceanusResourceRelatedJob#desc_by_job_config_create_time}
  */
  readonly descByJobConfigCreateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#id DataTencentcloudOceanusResourceRelatedJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#resource_config_version DataTencentcloudOceanusResourceRelatedJob#resource_config_version}
  */
  readonly resourceConfigVersion?: number;
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#resource_id DataTencentcloudOceanusResourceRelatedJob#resource_id}
  */
  readonly resourceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#result_output_file DataTencentcloudOceanusResourceRelatedJob#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#work_space_id DataTencentcloudOceanusResourceRelatedJob#work_space_id}
  */
  readonly workSpaceId?: string;
}
export interface DataTencentcloudOceanusResourceRelatedJobRefJobInfos {
}

export function dataTencentcloudOceanusResourceRelatedJobRefJobInfosToTerraform(struct?: DataTencentcloudOceanusResourceRelatedJobRefJobInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusResourceRelatedJobRefJobInfosToHclTerraform(struct?: DataTencentcloudOceanusResourceRelatedJobRefJobInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusResourceRelatedJobRefJobInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusResourceRelatedJobRefJobInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusResourceRelatedJobRefJobInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_config_version - computed: true, optional: false, required: false
  public get jobConfigVersion() {
    return this.getNumberAttribute('job_config_version');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }
}

export class DataTencentcloudOceanusResourceRelatedJobRefJobInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusResourceRelatedJobRefJobInfosOutputReference {
    return new DataTencentcloudOceanusResourceRelatedJobRefJobInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job tencentcloud_oceanus_resource_related_job}
*/
export class DataTencentcloudOceanusResourceRelatedJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_resource_related_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOceanusResourceRelatedJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOceanusResourceRelatedJob to import
  * @param importFromId The id of the existing DataTencentcloudOceanusResourceRelatedJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOceanusResourceRelatedJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_resource_related_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/oceanus_resource_related_job tencentcloud_oceanus_resource_related_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOceanusResourceRelatedJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOceanusResourceRelatedJobConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_resource_related_job',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descByJobConfigCreateTime = config.descByJobConfigCreateTime;
    this._id = config.id;
    this._resourceConfigVersion = config.resourceConfigVersion;
    this._resourceId = config.resourceId;
    this._resultOutputFile = config.resultOutputFile;
    this._workSpaceId = config.workSpaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desc_by_job_config_create_time - computed: false, optional: true, required: false
  private _descByJobConfigCreateTime?: number; 
  public get descByJobConfigCreateTime() {
    return this.getNumberAttribute('desc_by_job_config_create_time');
  }
  public set descByJobConfigCreateTime(value: number) {
    this._descByJobConfigCreateTime = value;
  }
  public resetDescByJobConfigCreateTime() {
    this._descByJobConfigCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descByJobConfigCreateTimeInput() {
    return this._descByJobConfigCreateTime;
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

  // ref_job_infos - computed: true, optional: false, required: false
  private _refJobInfos = new DataTencentcloudOceanusResourceRelatedJobRefJobInfosList(this, "ref_job_infos", false);
  public get refJobInfos() {
    return this._refJobInfos;
  }

  // resource_config_version - computed: false, optional: true, required: false
  private _resourceConfigVersion?: number; 
  public get resourceConfigVersion() {
    return this.getNumberAttribute('resource_config_version');
  }
  public set resourceConfigVersion(value: number) {
    this._resourceConfigVersion = value;
  }
  public resetResourceConfigVersion() {
    this._resourceConfigVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigVersionInput() {
    return this._resourceConfigVersion;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // work_space_id - computed: false, optional: true, required: false
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  public resetWorkSpaceId() {
    this._workSpaceId = undefined;
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
      desc_by_job_config_create_time: cdktf.numberToTerraform(this._descByJobConfigCreateTime),
      id: cdktf.stringToTerraform(this._id),
      resource_config_version: cdktf.numberToTerraform(this._resourceConfigVersion),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desc_by_job_config_create_time: {
        value: cdktf.numberToHclTerraform(this._descByJobConfigCreateTime),
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
      resource_config_version: {
        value: cdktf.numberToHclTerraform(this._resourceConfigVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
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
