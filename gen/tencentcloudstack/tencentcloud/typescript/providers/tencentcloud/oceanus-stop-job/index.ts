// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusStopJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#id OceanusStopJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#work_space_id OceanusStopJob#work_space_id}
  */
  readonly workSpaceId?: string;
  /**
  * stop_job_descriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#stop_job_descriptions OceanusStopJob#stop_job_descriptions}
  */
  readonly stopJobDescriptions: OceanusStopJobStopJobDescriptions[] | cdktf.IResolvable;
}
export interface OceanusStopJobStopJobDescriptions {
  /**
  * Job Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#job_id OceanusStopJob#job_id}
  */
  readonly jobId: string;
  /**
  * Stop type,1 stopped 2 paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#stop_type OceanusStopJob#stop_type}
  */
  readonly stopType: number;
}

export function oceanusStopJobStopJobDescriptionsToTerraform(struct?: OceanusStopJobStopJobDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.stringToTerraform(struct!.jobId),
    stop_type: cdktf.numberToTerraform(struct!.stopType),
  }
}


export function oceanusStopJobStopJobDescriptionsToHclTerraform(struct?: OceanusStopJobStopJobDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_id: {
      value: cdktf.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_type: {
      value: cdktf.numberToHclTerraform(struct!.stopType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusStopJobStopJobDescriptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OceanusStopJobStopJobDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._stopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopType = this._stopType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusStopJobStopJobDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._stopType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._stopType = value.stopType;
    }
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

  // stop_type - computed: false, optional: false, required: true
  private _stopType?: number; 
  public get stopType() {
    return this.getNumberAttribute('stop_type');
  }
  public set stopType(value: number) {
    this._stopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTypeInput() {
    return this._stopType;
  }
}

export class OceanusStopJobStopJobDescriptionsList extends cdktf.ComplexList {
  public internalValue? : OceanusStopJobStopJobDescriptions[] | cdktf.IResolvable

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
  public get(index: number): OceanusStopJobStopJobDescriptionsOutputReference {
    return new OceanusStopJobStopJobDescriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job tencentcloud_oceanus_stop_job}
*/
export class OceanusStopJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_stop_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusStopJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusStopJob to import
  * @param importFromId The id of the existing OceanusStopJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusStopJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_stop_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/oceanus_stop_job tencentcloud_oceanus_stop_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusStopJobConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusStopJobConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_stop_job',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._workSpaceId = config.workSpaceId;
    this._stopJobDescriptions.internalValue = config.stopJobDescriptions;
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

  // stop_job_descriptions - computed: false, optional: false, required: true
  private _stopJobDescriptions = new OceanusStopJobStopJobDescriptionsList(this, "stop_job_descriptions", false);
  public get stopJobDescriptions() {
    return this._stopJobDescriptions;
  }
  public putStopJobDescriptions(value: OceanusStopJobStopJobDescriptions[] | cdktf.IResolvable) {
    this._stopJobDescriptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopJobDescriptionsInput() {
    return this._stopJobDescriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
      stop_job_descriptions: cdktf.listMapper(oceanusStopJobStopJobDescriptionsToTerraform, true)(this._stopJobDescriptions.internalValue),
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
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_job_descriptions: {
        value: cdktf.listMapperHcl(oceanusStopJobStopJobDescriptionsToHclTerraform, true)(this._stopJobDescriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusStopJobStopJobDescriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
