// generated from terraform resource schema

import { CkafkaDatahubTaskSourceResource, 
ckafkaDatahubTaskSourceResourceToTerraform, 
ckafkaDatahubTaskSourceResourceToHclTerraform, 
CkafkaDatahubTaskSourceResourceOutputReference, 
CkafkaDatahubTaskTargetResource, 
ckafkaDatahubTaskTargetResourceToTerraform, 
ckafkaDatahubTaskTargetResourceToHclTerraform, 
CkafkaDatahubTaskTargetResourceOutputReference, 
CkafkaDatahubTaskTransformParam, 
ckafkaDatahubTaskTransformParamToTerraform, 
ckafkaDatahubTaskTransformParamToHclTerraform, 
CkafkaDatahubTaskTransformParamOutputReference, 
CkafkaDatahubTaskTransformsParam, 
ckafkaDatahubTaskTransformsParamToTerraform, 
ckafkaDatahubTaskTransformsParamToHclTerraform, 
CkafkaDatahubTaskTransformsParamOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CkafkaDatahubTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#id CkafkaDatahubTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SchemaId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#schema_id CkafkaDatahubTask#schema_id}
  */
  readonly schemaId?: string;
  /**
  * name of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#task_name CkafkaDatahubTask#task_name}
  */
  readonly taskName: string;
  /**
  * type of the task, SOURCE(data input), SINK(data output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#task_type CkafkaDatahubTask#task_type}
  */
  readonly taskType: string;
  /**
  * source_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#source_resource CkafkaDatahubTask#source_resource}
  */
  readonly sourceResource?: CkafkaDatahubTaskSourceResource;
  /**
  * target_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#target_resource CkafkaDatahubTask#target_resource}
  */
  readonly targetResource?: CkafkaDatahubTaskTargetResource;
  /**
  * transform_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#transform_param CkafkaDatahubTask#transform_param}
  */
  readonly transformParam?: CkafkaDatahubTaskTransformParam;
  /**
  * transforms_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#transforms_param CkafkaDatahubTask#transforms_param}
  */
  readonly transformsParam?: CkafkaDatahubTaskTransformsParam;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task tencentcloud_ckafka_datahub_task}
*/
export class CkafkaDatahubTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_datahub_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaDatahubTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaDatahubTask to import
  * @param importFromId The id of the existing CkafkaDatahubTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaDatahubTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_datahub_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ckafka_datahub_task tencentcloud_ckafka_datahub_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaDatahubTaskConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaDatahubTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_datahub_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._schemaId = config.schemaId;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._sourceResource.internalValue = config.sourceResource;
    this._targetResource.internalValue = config.targetResource;
    this._transformParam.internalValue = config.transformParam;
    this._transformsParam.internalValue = config.transformsParam;
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

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // source_resource - computed: false, optional: true, required: false
  private _sourceResource = new CkafkaDatahubTaskSourceResourceOutputReference(this, "source_resource");
  public get sourceResource() {
    return this._sourceResource;
  }
  public putSourceResource(value: CkafkaDatahubTaskSourceResource) {
    this._sourceResource.internalValue = value;
  }
  public resetSourceResource() {
    this._sourceResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceInput() {
    return this._sourceResource.internalValue;
  }

  // target_resource - computed: false, optional: true, required: false
  private _targetResource = new CkafkaDatahubTaskTargetResourceOutputReference(this, "target_resource");
  public get targetResource() {
    return this._targetResource;
  }
  public putTargetResource(value: CkafkaDatahubTaskTargetResource) {
    this._targetResource.internalValue = value;
  }
  public resetTargetResource() {
    this._targetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource.internalValue;
  }

  // transform_param - computed: false, optional: true, required: false
  private _transformParam = new CkafkaDatahubTaskTransformParamOutputReference(this, "transform_param");
  public get transformParam() {
    return this._transformParam;
  }
  public putTransformParam(value: CkafkaDatahubTaskTransformParam) {
    this._transformParam.internalValue = value;
  }
  public resetTransformParam() {
    this._transformParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformParamInput() {
    return this._transformParam.internalValue;
  }

  // transforms_param - computed: false, optional: true, required: false
  private _transformsParam = new CkafkaDatahubTaskTransformsParamOutputReference(this, "transforms_param");
  public get transformsParam() {
    return this._transformsParam;
  }
  public putTransformsParam(value: CkafkaDatahubTaskTransformsParam) {
    this._transformsParam.internalValue = value;
  }
  public resetTransformsParam() {
    this._transformsParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsParamInput() {
    return this._transformsParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      source_resource: ckafkaDatahubTaskSourceResourceToTerraform(this._sourceResource.internalValue),
      target_resource: ckafkaDatahubTaskTargetResourceToTerraform(this._targetResource.internalValue),
      transform_param: ckafkaDatahubTaskTransformParamToTerraform(this._transformParam.internalValue),
      transforms_param: ckafkaDatahubTaskTransformsParamToTerraform(this._transformsParam.internalValue),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_resource: {
        value: ckafkaDatahubTaskSourceResourceToHclTerraform(this._sourceResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaDatahubTaskSourceResourceList",
      },
      target_resource: {
        value: ckafkaDatahubTaskTargetResourceToHclTerraform(this._targetResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaDatahubTaskTargetResourceList",
      },
      transform_param: {
        value: ckafkaDatahubTaskTransformParamToHclTerraform(this._transformParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaDatahubTaskTransformParamList",
      },
      transforms_param: {
        value: ckafkaDatahubTaskTransformsParamToHclTerraform(this._transformsParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaDatahubTaskTransformsParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
