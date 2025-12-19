// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusJobCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#id OceanusJobCopy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the source job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#job_type OceanusJobCopy#job_type}
  */
  readonly jobType?: number;
  /**
  * The serial ID of the job to be copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#source_id OceanusJobCopy#source_id}
  */
  readonly sourceId: string;
  /**
  * The name of the job to be copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#source_name OceanusJobCopy#source_name}
  */
  readonly sourceName?: string;
  /**
  * The cluster serial ID of the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#target_cluster_id OceanusJobCopy#target_cluster_id}
  */
  readonly targetClusterId: string;
  /**
  * The directory ID of the new job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#target_folder_id OceanusJobCopy#target_folder_id}
  */
  readonly targetFolderId?: string;
  /**
  * The name of the new job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#target_name OceanusJobCopy#target_name}
  */
  readonly targetName?: string;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#work_space_id OceanusJobCopy#work_space_id}
  */
  readonly workSpaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy tencentcloud_oceanus_job_copy}
*/
export class OceanusJobCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_job_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusJobCopy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusJobCopy to import
  * @param importFromId The id of the existing OceanusJobCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusJobCopy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_job_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/oceanus_job_copy tencentcloud_oceanus_job_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusJobCopyConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusJobCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_job_copy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._jobType = config.jobType;
    this._sourceId = config.sourceId;
    this._sourceName = config.sourceName;
    this._targetClusterId = config.targetClusterId;
    this._targetFolderId = config.targetFolderId;
    this._targetName = config.targetName;
    this._workSpaceId = config.workSpaceId;
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_type - computed: false, optional: true, required: false
  private _jobType?: number; 
  public get jobType() {
    return this.getNumberAttribute('job_type');
  }
  public set jobType(value: number) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // target_cluster_id - computed: false, optional: false, required: true
  private _targetClusterId?: string; 
  public get targetClusterId() {
    return this.getStringAttribute('target_cluster_id');
  }
  public set targetClusterId(value: string) {
    this._targetClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterIdInput() {
    return this._targetClusterId;
  }

  // target_folder_id - computed: false, optional: true, required: false
  private _targetFolderId?: string; 
  public get targetFolderId() {
    return this.getStringAttribute('target_folder_id');
  }
  public set targetFolderId(value: string) {
    this._targetFolderId = value;
  }
  public resetTargetFolderId() {
    this._targetFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFolderIdInput() {
    return this._targetFolderId;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
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
      id: cdktf.stringToTerraform(this._id),
      job_type: cdktf.numberToTerraform(this._jobType),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_name: cdktf.stringToTerraform(this._sourceName),
      target_cluster_id: cdktf.stringToTerraform(this._targetClusterId),
      target_folder_id: cdktf.stringToTerraform(this._targetFolderId),
      target_name: cdktf.stringToTerraform(this._targetName),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
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
      job_type: {
        value: cdktf.numberToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_cluster_id: {
        value: cdktf.stringToHclTerraform(this._targetClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_folder_id: {
        value: cdktf.stringToHclTerraform(this._targetFolderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
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
