// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusJobConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Oceanus platform job recovery switch 1: on -1: off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#auto_recover OceanusJobConfigA#auto_recover}
  */
  readonly autoRecover?: number;
  /**
  * CLS logset ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#cls_logset_id OceanusJobConfigA#cls_logset_id}
  */
  readonly clsLogsetId?: string;
  /**
  * CLS log topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#cls_topic_id OceanusJobConfigA#cls_topic_id}
  */
  readonly clsTopicId?: string;
  /**
  * COS storage bucket name used by the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#cos_bucket OceanusJobConfigA#cos_bucket}
  */
  readonly cosBucket?: string;
  /**
  * Job default parallelism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#default_parallelism OceanusJobConfigA#default_parallelism}
  */
  readonly defaultParallelism?: number;
  /**
  * Main class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#entrypoint_class OceanusJobConfigA#entrypoint_class}
  */
  readonly entrypointClass?: string;
  /**
  * Whether to enable expert mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#expert_mode_on OceanusJobConfigA#expert_mode_on}
  */
  readonly expertModeOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#id OceanusJobConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#job_id OceanusJobConfigA#job_id}
  */
  readonly jobId: string;
  /**
  * JobManager specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#job_manager_spec OceanusJobConfigA#job_manager_spec}
  */
  readonly jobManagerSpec?: number;
  /**
  * Whether to collect job logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#log_collect OceanusJobConfigA#log_collect}
  */
  readonly logCollect?: boolean | cdktf.IResolvable;
  /**
  * Log collection type 2:CLS; 3:COS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#log_collect_type OceanusJobConfigA#log_collect_type}
  */
  readonly logCollectType?: number;
  /**
  * Log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#log_level OceanusJobConfigA#log_level}
  */
  readonly logLevel?: string;
  /**
  * Main class parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#program_args OceanusJobConfigA#program_args}
  */
  readonly programArgs?: string;
  /**
  * Python version used by the pyflink job at runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#python_version OceanusJobConfigA#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#remark OceanusJobConfigA#remark}
  */
  readonly remark?: string;
  /**
  * TaskManager specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#task_manager_spec OceanusJobConfigA#task_manager_spec}
  */
  readonly taskManagerSpec?: number;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#work_space_id OceanusJobConfigA#work_space_id}
  */
  readonly workSpaceId?: string;
  /**
  * clazz_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#clazz_levels OceanusJobConfigA#clazz_levels}
  */
  readonly clazzLevels?: OceanusJobConfigClazzLevels[] | cdktf.IResolvable;
  /**
  * expert_mode_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#expert_mode_configuration OceanusJobConfigA#expert_mode_configuration}
  */
  readonly expertModeConfiguration?: OceanusJobConfigExpertModeConfiguration;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#properties OceanusJobConfigA#properties}
  */
  readonly properties?: OceanusJobConfigProperties[] | cdktf.IResolvable;
  /**
  * resource_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#resource_refs OceanusJobConfigA#resource_refs}
  */
  readonly resourceRefs?: OceanusJobConfigResourceRefs[] | cdktf.IResolvable;
}
export interface OceanusJobConfigClazzLevels {
  /**
  * Java class full pathNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#clazz OceanusJobConfigA#clazz}
  */
  readonly clazz: string;
  /**
  * Log level TRACE, DEBUG, INFO, WARN, ERRORNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#level OceanusJobConfigA#level}
  */
  readonly level: string;
}

export function oceanusJobConfigClazzLevelsToTerraform(struct?: OceanusJobConfigClazzLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clazz: cdktf.stringToTerraform(struct!.clazz),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function oceanusJobConfigClazzLevelsToHclTerraform(struct?: OceanusJobConfigClazzLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clazz: {
      value: cdktf.stringToHclTerraform(struct!.clazz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigClazzLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigClazzLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clazz !== undefined) {
      hasAnyValues = true;
      internalValueResult.clazz = this._clazz;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigClazzLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clazz = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clazz = value.clazz;
      this._level = value.level;
    }
  }

  // clazz - computed: false, optional: false, required: true
  private _clazz?: string; 
  public get clazz() {
    return this.getStringAttribute('clazz');
  }
  public set clazz(value: string) {
    this._clazz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clazzInput() {
    return this._clazz;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class OceanusJobConfigClazzLevelsList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigClazzLevels[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigClazzLevelsOutputReference {
    return new OceanusJobConfigClazzLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfigurationJobGraphEdges {
  /**
  * Starting node ID of the edgeNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#source OceanusJobConfigA#source}
  */
  readonly source: number;
  /**
  * Target node ID of the edgeNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#target OceanusJobConfigA#target}
  */
  readonly target: number;
}

export function oceanusJobConfigExpertModeConfigurationJobGraphEdgesToTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphEdges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.numberToTerraform(struct!.source),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function oceanusJobConfigExpertModeConfigurationJobGraphEdgesToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphEdges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.numberToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationJobGraphEdgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigExpertModeConfigurationJobGraphEdges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationJobGraphEdges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class OceanusJobConfigExpertModeConfigurationJobGraphEdgesList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigExpertModeConfigurationJobGraphEdges[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigExpertModeConfigurationJobGraphEdgesOutputReference {
    return new OceanusJobConfigExpertModeConfigurationJobGraphEdgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfigurationJobGraphNodes {
  /**
  * Node descriptionNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#description OceanusJobConfigA#description}
  */
  readonly description: string;
  /**
  * Node IDNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#id OceanusJobConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Node nameNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#name OceanusJobConfigA#name}
  */
  readonly name: string;
  /**
  * Node parallelismNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#parallelism OceanusJobConfigA#parallelism}
  */
  readonly parallelism: number;
}

export function oceanusJobConfigExpertModeConfigurationJobGraphNodesToTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
  }
}


export function oceanusJobConfigExpertModeConfigurationJobGraphNodesToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationJobGraphNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigExpertModeConfigurationJobGraphNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationJobGraphNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._parallelism = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._parallelism = value.parallelism;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parallelism - computed: false, optional: false, required: true
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }
}

export class OceanusJobConfigExpertModeConfigurationJobGraphNodesList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigExpertModeConfigurationJobGraphNodes[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigExpertModeConfigurationJobGraphNodesOutputReference {
    return new OceanusJobConfigExpertModeConfigurationJobGraphNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfigurationJobGraph {
  /**
  * edges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#edges OceanusJobConfigA#edges}
  */
  readonly edges?: OceanusJobConfigExpertModeConfigurationJobGraphEdges[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#nodes OceanusJobConfigA#nodes}
  */
  readonly nodes?: OceanusJobConfigExpertModeConfigurationJobGraphNodes[] | cdktf.IResolvable;
}

export function oceanusJobConfigExpertModeConfigurationJobGraphToTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphOutputReference | OceanusJobConfigExpertModeConfigurationJobGraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edges: cdktf.listMapper(oceanusJobConfigExpertModeConfigurationJobGraphEdgesToTerraform, true)(struct!.edges),
    nodes: cdktf.listMapper(oceanusJobConfigExpertModeConfigurationJobGraphNodesToTerraform, true)(struct!.nodes),
  }
}


export function oceanusJobConfigExpertModeConfigurationJobGraphToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationJobGraphOutputReference | OceanusJobConfigExpertModeConfigurationJobGraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edges: {
      value: cdktf.listMapperHcl(oceanusJobConfigExpertModeConfigurationJobGraphEdgesToHclTerraform, true)(struct!.edges),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationJobGraphEdgesList",
    },
    nodes: {
      value: cdktf.listMapperHcl(oceanusJobConfigExpertModeConfigurationJobGraphNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationJobGraphNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationJobGraphOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanusJobConfigExpertModeConfigurationJobGraph | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edges = this._edges?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationJobGraph | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edges.internalValue = undefined;
      this._nodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edges.internalValue = value.edges;
      this._nodes.internalValue = value.nodes;
    }
  }

  // edges - computed: false, optional: true, required: false
  private _edges = new OceanusJobConfigExpertModeConfigurationJobGraphEdgesList(this, "edges", false);
  public get edges() {
    return this._edges;
  }
  public putEdges(value: OceanusJobConfigExpertModeConfigurationJobGraphEdges[] | cdktf.IResolvable) {
    this._edges.internalValue = value;
  }
  public resetEdges() {
    this._edges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgesInput() {
    return this._edges.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new OceanusJobConfigExpertModeConfigurationJobGraphNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: OceanusJobConfigExpertModeConfigurationJobGraphNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}
export interface OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration {
  /**
  * System configuration key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#key OceanusJobConfigA#key}
  */
  readonly key: string;
  /**
  * System configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#value OceanusJobConfigA#value}
  */
  readonly value: string;
}

export function oceanusJobConfigExpertModeConfigurationNodeConfigConfigurationToTerraform(struct?: OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oceanusJobConfigExpertModeConfigurationNodeConfigConfigurationToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationOutputReference {
    return new OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfigurationNodeConfig {
  /**
  * Node IDNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#id OceanusJobConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Node parallelismNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#parallelism OceanusJobConfigA#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Slot sharing groupNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#slot_sharing_group OceanusJobConfigA#slot_sharing_group}
  */
  readonly slotSharingGroup?: string;
  /**
  * State TTL configuration of the node, separated by semicolonsNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#state_ttl OceanusJobConfigA#state_ttl}
  */
  readonly stateTtl?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#configuration OceanusJobConfigA#configuration}
  */
  readonly configuration?: OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration[] | cdktf.IResolvable;
}

export function oceanusJobConfigExpertModeConfigurationNodeConfigToTerraform(struct?: OceanusJobConfigExpertModeConfigurationNodeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    slot_sharing_group: cdktf.stringToTerraform(struct!.slotSharingGroup),
    state_ttl: cdktf.stringToTerraform(struct!.stateTtl),
    configuration: cdktf.listMapper(oceanusJobConfigExpertModeConfigurationNodeConfigConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function oceanusJobConfigExpertModeConfigurationNodeConfigToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationNodeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_sharing_group: {
      value: cdktf.stringToHclTerraform(struct!.slotSharingGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_ttl: {
      value: cdktf.stringToHclTerraform(struct!.stateTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(oceanusJobConfigExpertModeConfigurationNodeConfigConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigExpertModeConfigurationNodeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._slotSharingGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotSharingGroup = this._slotSharingGroup;
    }
    if (this._stateTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTtl = this._stateTtl;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationNodeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._parallelism = undefined;
      this._slotSharingGroup = undefined;
      this._stateTtl = undefined;
      this._configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._parallelism = value.parallelism;
      this._slotSharingGroup = value.slotSharingGroup;
      this._stateTtl = value.stateTtl;
      this._configuration.internalValue = value.configuration;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // slot_sharing_group - computed: false, optional: true, required: false
  private _slotSharingGroup?: string; 
  public get slotSharingGroup() {
    return this.getStringAttribute('slot_sharing_group');
  }
  public set slotSharingGroup(value: string) {
    this._slotSharingGroup = value;
  }
  public resetSlotSharingGroup() {
    this._slotSharingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSharingGroupInput() {
    return this._slotSharingGroup;
  }

  // state_ttl - computed: false, optional: true, required: false
  private _stateTtl?: string; 
  public get stateTtl() {
    return this.getStringAttribute('state_ttl');
  }
  public set stateTtl(value: string) {
    this._stateTtl = value;
  }
  public resetStateTtl() {
    this._stateTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTtlInput() {
    return this._stateTtl;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new OceanusJobConfigExpertModeConfigurationNodeConfigConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: OceanusJobConfigExpertModeConfigurationNodeConfigConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

export class OceanusJobConfigExpertModeConfigurationNodeConfigList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigExpertModeConfigurationNodeConfig[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigExpertModeConfigurationNodeConfigOutputReference {
    return new OceanusJobConfigExpertModeConfigurationNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec {
  /**
  * Applicable CPUNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#cpu OceanusJobConfigA#cpu}
  */
  readonly cpu: number;
  /**
  * Default is b, supporting units are b, kb, mb, gbNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#heap_memory OceanusJobConfigA#heap_memory}
  */
  readonly heapMemory: string;
  /**
  * Default is b, supporting units are b, kb, mb, gbNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#managed_memory OceanusJobConfigA#managed_memory}
  */
  readonly managedMemory?: string;
  /**
  * Default is b, supporting units are b, kb, mb, gbNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#off_heap_memory OceanusJobConfigA#off_heap_memory}
  */
  readonly offHeapMemory?: string;
}

export function oceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecToTerraform(struct?: OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecOutputReference | OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    heap_memory: cdktf.stringToTerraform(struct!.heapMemory),
    managed_memory: cdktf.stringToTerraform(struct!.managedMemory),
    off_heap_memory: cdktf.stringToTerraform(struct!.offHeapMemory),
  }
}


export function oceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecOutputReference | OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_memory: {
      value: cdktf.stringToHclTerraform(struct!.heapMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_memory: {
      value: cdktf.stringToHclTerraform(struct!.managedMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_heap_memory: {
      value: cdktf.stringToHclTerraform(struct!.offHeapMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._heapMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapMemory = this._heapMemory;
    }
    if (this._managedMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemory = this._managedMemory;
    }
    if (this._offHeapMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.offHeapMemory = this._offHeapMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._heapMemory = undefined;
      this._managedMemory = undefined;
      this._offHeapMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._heapMemory = value.heapMemory;
      this._managedMemory = value.managedMemory;
      this._offHeapMemory = value.offHeapMemory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // heap_memory - computed: false, optional: false, required: true
  private _heapMemory?: string; 
  public get heapMemory() {
    return this.getStringAttribute('heap_memory');
  }
  public set heapMemory(value: string) {
    this._heapMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMemoryInput() {
    return this._heapMemory;
  }

  // managed_memory - computed: false, optional: true, required: false
  private _managedMemory?: string; 
  public get managedMemory() {
    return this.getStringAttribute('managed_memory');
  }
  public set managedMemory(value: string) {
    this._managedMemory = value;
  }
  public resetManagedMemory() {
    this._managedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryInput() {
    return this._managedMemory;
  }

  // off_heap_memory - computed: false, optional: true, required: false
  private _offHeapMemory?: string; 
  public get offHeapMemory() {
    return this.getStringAttribute('off_heap_memory');
  }
  public set offHeapMemory(value: string) {
    this._offHeapMemory = value;
  }
  public resetOffHeapMemory() {
    this._offHeapMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offHeapMemoryInput() {
    return this._offHeapMemory;
  }
}
export interface OceanusJobConfigExpertModeConfigurationSlotSharingGroups {
  /**
  * Description of the SlotSharingGroupNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#description OceanusJobConfigA#description}
  */
  readonly description?: string;
  /**
  * Name of the SlotSharingGroupNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#name OceanusJobConfigA#name}
  */
  readonly name: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#spec OceanusJobConfigA#spec}
  */
  readonly spec: OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec;
}

export function oceanusJobConfigExpertModeConfigurationSlotSharingGroupsToTerraform(struct?: OceanusJobConfigExpertModeConfigurationSlotSharingGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    spec: oceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecToTerraform(struct!.spec),
  }
}


export function oceanusJobConfigExpertModeConfigurationSlotSharingGroupsToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationSlotSharingGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: oceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationSlotSharingGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigExpertModeConfigurationSlotSharingGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfigurationSlotSharingGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._spec.internalValue = value.spec;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: OceanusJobConfigExpertModeConfigurationSlotSharingGroupsSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class OceanusJobConfigExpertModeConfigurationSlotSharingGroupsList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigExpertModeConfigurationSlotSharingGroups[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigExpertModeConfigurationSlotSharingGroupsOutputReference {
    return new OceanusJobConfigExpertModeConfigurationSlotSharingGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigExpertModeConfiguration {
  /**
  * job_graph block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#job_graph OceanusJobConfigA#job_graph}
  */
  readonly jobGraph?: OceanusJobConfigExpertModeConfigurationJobGraph;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#node_config OceanusJobConfigA#node_config}
  */
  readonly nodeConfig?: OceanusJobConfigExpertModeConfigurationNodeConfig[] | cdktf.IResolvable;
  /**
  * slot_sharing_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#slot_sharing_groups OceanusJobConfigA#slot_sharing_groups}
  */
  readonly slotSharingGroups?: OceanusJobConfigExpertModeConfigurationSlotSharingGroups[] | cdktf.IResolvable;
}

export function oceanusJobConfigExpertModeConfigurationToTerraform(struct?: OceanusJobConfigExpertModeConfigurationOutputReference | OceanusJobConfigExpertModeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_graph: oceanusJobConfigExpertModeConfigurationJobGraphToTerraform(struct!.jobGraph),
    node_config: cdktf.listMapper(oceanusJobConfigExpertModeConfigurationNodeConfigToTerraform, true)(struct!.nodeConfig),
    slot_sharing_groups: cdktf.listMapper(oceanusJobConfigExpertModeConfigurationSlotSharingGroupsToTerraform, true)(struct!.slotSharingGroups),
  }
}


export function oceanusJobConfigExpertModeConfigurationToHclTerraform(struct?: OceanusJobConfigExpertModeConfigurationOutputReference | OceanusJobConfigExpertModeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_graph: {
      value: oceanusJobConfigExpertModeConfigurationJobGraphToHclTerraform(struct!.jobGraph),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationJobGraphList",
    },
    node_config: {
      value: cdktf.listMapperHcl(oceanusJobConfigExpertModeConfigurationNodeConfigToHclTerraform, true)(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationNodeConfigList",
    },
    slot_sharing_groups: {
      value: cdktf.listMapperHcl(oceanusJobConfigExpertModeConfigurationSlotSharingGroupsToHclTerraform, true)(struct!.slotSharingGroups),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusJobConfigExpertModeConfigurationSlotSharingGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigExpertModeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanusJobConfigExpertModeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobGraph?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGraph = this._jobGraph?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._slotSharingGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotSharingGroups = this._slotSharingGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigExpertModeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobGraph.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._slotSharingGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobGraph.internalValue = value.jobGraph;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._slotSharingGroups.internalValue = value.slotSharingGroups;
    }
  }

  // job_graph - computed: false, optional: true, required: false
  private _jobGraph = new OceanusJobConfigExpertModeConfigurationJobGraphOutputReference(this, "job_graph");
  public get jobGraph() {
    return this._jobGraph;
  }
  public putJobGraph(value: OceanusJobConfigExpertModeConfigurationJobGraph) {
    this._jobGraph.internalValue = value;
  }
  public resetJobGraph() {
    this._jobGraph.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobGraphInput() {
    return this._jobGraph.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new OceanusJobConfigExpertModeConfigurationNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: OceanusJobConfigExpertModeConfigurationNodeConfig[] | cdktf.IResolvable) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // slot_sharing_groups - computed: false, optional: true, required: false
  private _slotSharingGroups = new OceanusJobConfigExpertModeConfigurationSlotSharingGroupsList(this, "slot_sharing_groups", false);
  public get slotSharingGroups() {
    return this._slotSharingGroups;
  }
  public putSlotSharingGroups(value: OceanusJobConfigExpertModeConfigurationSlotSharingGroups[] | cdktf.IResolvable) {
    this._slotSharingGroups.internalValue = value;
  }
  public resetSlotSharingGroups() {
    this._slotSharingGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSharingGroupsInput() {
    return this._slotSharingGroups.internalValue;
  }
}
export interface OceanusJobConfigProperties {
  /**
  * System configuration key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#key OceanusJobConfigA#key}
  */
  readonly key: string;
  /**
  * System configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#value OceanusJobConfigA#value}
  */
  readonly value: string;
}

export function oceanusJobConfigPropertiesToTerraform(struct?: OceanusJobConfigProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oceanusJobConfigPropertiesToHclTerraform(struct?: OceanusJobConfigProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OceanusJobConfigPropertiesList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigProperties[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigPropertiesOutputReference {
    return new OceanusJobConfigPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanusJobConfigResourceRefs {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#resource_id OceanusJobConfigA#resource_id}
  */
  readonly resourceId: string;
  /**
  * Reference resource type, for example, setting the main resource to 1 represents the jar package where the main class is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#type OceanusJobConfigA#type}
  */
  readonly type: number;
  /**
  * Resource version ID, -1 indicates the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#version OceanusJobConfigA#version}
  */
  readonly version: number;
}

export function oceanusJobConfigResourceRefsToTerraform(struct?: OceanusJobConfigResourceRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    type: cdktf.numberToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function oceanusJobConfigResourceRefsToHclTerraform(struct?: OceanusJobConfigResourceRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusJobConfigResourceRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusJobConfigResourceRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusJobConfigResourceRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._type = value.type;
      this._version = value.version;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class OceanusJobConfigResourceRefsList extends cdktf.ComplexList {
  public internalValue? : OceanusJobConfigResourceRefs[] | cdktf.IResolvable

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
  public get(index: number): OceanusJobConfigResourceRefsOutputReference {
    return new OceanusJobConfigResourceRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config tencentcloud_oceanus_job_config}
*/
export class OceanusJobConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_job_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusJobConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusJobConfigA to import
  * @param importFromId The id of the existing OceanusJobConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusJobConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_job_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/oceanus_job_config tencentcloud_oceanus_job_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusJobConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusJobConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_job_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRecover = config.autoRecover;
    this._clsLogsetId = config.clsLogsetId;
    this._clsTopicId = config.clsTopicId;
    this._cosBucket = config.cosBucket;
    this._defaultParallelism = config.defaultParallelism;
    this._entrypointClass = config.entrypointClass;
    this._expertModeOn = config.expertModeOn;
    this._id = config.id;
    this._jobId = config.jobId;
    this._jobManagerSpec = config.jobManagerSpec;
    this._logCollect = config.logCollect;
    this._logCollectType = config.logCollectType;
    this._logLevel = config.logLevel;
    this._programArgs = config.programArgs;
    this._pythonVersion = config.pythonVersion;
    this._remark = config.remark;
    this._taskManagerSpec = config.taskManagerSpec;
    this._workSpaceId = config.workSpaceId;
    this._clazzLevels.internalValue = config.clazzLevels;
    this._expertModeConfiguration.internalValue = config.expertModeConfiguration;
    this._properties.internalValue = config.properties;
    this._resourceRefs.internalValue = config.resourceRefs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recover - computed: false, optional: true, required: false
  private _autoRecover?: number; 
  public get autoRecover() {
    return this.getNumberAttribute('auto_recover');
  }
  public set autoRecover(value: number) {
    this._autoRecover = value;
  }
  public resetAutoRecover() {
    this._autoRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoverInput() {
    return this._autoRecover;
  }

  // cls_logset_id - computed: false, optional: true, required: false
  private _clsLogsetId?: string; 
  public get clsLogsetId() {
    return this.getStringAttribute('cls_logset_id');
  }
  public set clsLogsetId(value: string) {
    this._clsLogsetId = value;
  }
  public resetClsLogsetId() {
    this._clsLogsetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsLogsetIdInput() {
    return this._clsLogsetId;
  }

  // cls_topic_id - computed: false, optional: true, required: false
  private _clsTopicId?: string; 
  public get clsTopicId() {
    return this.getStringAttribute('cls_topic_id');
  }
  public set clsTopicId(value: string) {
    this._clsTopicId = value;
  }
  public resetClsTopicId() {
    this._clsTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsTopicIdInput() {
    return this._clsTopicId;
  }

  // cos_bucket - computed: true, optional: true, required: false
  private _cosBucket?: string; 
  public get cosBucket() {
    return this.getStringAttribute('cos_bucket');
  }
  public set cosBucket(value: string) {
    this._cosBucket = value;
  }
  public resetCosBucket() {
    this._cosBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketInput() {
    return this._cosBucket;
  }

  // default_parallelism - computed: false, optional: true, required: false
  private _defaultParallelism?: number; 
  public get defaultParallelism() {
    return this.getNumberAttribute('default_parallelism');
  }
  public set defaultParallelism(value: number) {
    this._defaultParallelism = value;
  }
  public resetDefaultParallelism() {
    this._defaultParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultParallelismInput() {
    return this._defaultParallelism;
  }

  // entrypoint_class - computed: false, optional: true, required: false
  private _entrypointClass?: string; 
  public get entrypointClass() {
    return this.getStringAttribute('entrypoint_class');
  }
  public set entrypointClass(value: string) {
    this._entrypointClass = value;
  }
  public resetEntrypointClass() {
    this._entrypointClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointClassInput() {
    return this._entrypointClass;
  }

  // expert_mode_on - computed: false, optional: true, required: false
  private _expertModeOn?: boolean | cdktf.IResolvable; 
  public get expertModeOn() {
    return this.getBooleanAttribute('expert_mode_on');
  }
  public set expertModeOn(value: boolean | cdktf.IResolvable) {
    this._expertModeOn = value;
  }
  public resetExpertModeOn() {
    this._expertModeOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertModeOnInput() {
    return this._expertModeOn;
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

  // job_manager_spec - computed: false, optional: true, required: false
  private _jobManagerSpec?: number; 
  public get jobManagerSpec() {
    return this.getNumberAttribute('job_manager_spec');
  }
  public set jobManagerSpec(value: number) {
    this._jobManagerSpec = value;
  }
  public resetJobManagerSpec() {
    this._jobManagerSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobManagerSpecInput() {
    return this._jobManagerSpec;
  }

  // log_collect - computed: false, optional: true, required: false
  private _logCollect?: boolean | cdktf.IResolvable; 
  public get logCollect() {
    return this.getBooleanAttribute('log_collect');
  }
  public set logCollect(value: boolean | cdktf.IResolvable) {
    this._logCollect = value;
  }
  public resetLogCollect() {
    this._logCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectInput() {
    return this._logCollect;
  }

  // log_collect_type - computed: false, optional: true, required: false
  private _logCollectType?: number; 
  public get logCollectType() {
    return this.getNumberAttribute('log_collect_type');
  }
  public set logCollectType(value: number) {
    this._logCollectType = value;
  }
  public resetLogCollectType() {
    this._logCollectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectTypeInput() {
    return this._logCollectType;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // program_args - computed: false, optional: true, required: false
  private _programArgs?: string; 
  public get programArgs() {
    return this.getStringAttribute('program_args');
  }
  public set programArgs(value: string) {
    this._programArgs = value;
  }
  public resetProgramArgs() {
    this._programArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programArgsInput() {
    return this._programArgs;
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // task_manager_spec - computed: false, optional: true, required: false
  private _taskManagerSpec?: number; 
  public get taskManagerSpec() {
    return this.getNumberAttribute('task_manager_spec');
  }
  public set taskManagerSpec(value: number) {
    this._taskManagerSpec = value;
  }
  public resetTaskManagerSpec() {
    this._taskManagerSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskManagerSpecInput() {
    return this._taskManagerSpec;
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

  // clazz_levels - computed: false, optional: true, required: false
  private _clazzLevels = new OceanusJobConfigClazzLevelsList(this, "clazz_levels", false);
  public get clazzLevels() {
    return this._clazzLevels;
  }
  public putClazzLevels(value: OceanusJobConfigClazzLevels[] | cdktf.IResolvable) {
    this._clazzLevels.internalValue = value;
  }
  public resetClazzLevels() {
    this._clazzLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clazzLevelsInput() {
    return this._clazzLevels.internalValue;
  }

  // expert_mode_configuration - computed: false, optional: true, required: false
  private _expertModeConfiguration = new OceanusJobConfigExpertModeConfigurationOutputReference(this, "expert_mode_configuration");
  public get expertModeConfiguration() {
    return this._expertModeConfiguration;
  }
  public putExpertModeConfiguration(value: OceanusJobConfigExpertModeConfiguration) {
    this._expertModeConfiguration.internalValue = value;
  }
  public resetExpertModeConfiguration() {
    this._expertModeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertModeConfigurationInput() {
    return this._expertModeConfiguration.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new OceanusJobConfigPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OceanusJobConfigProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource_refs - computed: false, optional: true, required: false
  private _resourceRefs = new OceanusJobConfigResourceRefsList(this, "resource_refs", false);
  public get resourceRefs() {
    return this._resourceRefs;
  }
  public putResourceRefs(value: OceanusJobConfigResourceRefs[] | cdktf.IResolvable) {
    this._resourceRefs.internalValue = value;
  }
  public resetResourceRefs() {
    this._resourceRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRefsInput() {
    return this._resourceRefs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_recover: cdktf.numberToTerraform(this._autoRecover),
      cls_logset_id: cdktf.stringToTerraform(this._clsLogsetId),
      cls_topic_id: cdktf.stringToTerraform(this._clsTopicId),
      cos_bucket: cdktf.stringToTerraform(this._cosBucket),
      default_parallelism: cdktf.numberToTerraform(this._defaultParallelism),
      entrypoint_class: cdktf.stringToTerraform(this._entrypointClass),
      expert_mode_on: cdktf.booleanToTerraform(this._expertModeOn),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_manager_spec: cdktf.numberToTerraform(this._jobManagerSpec),
      log_collect: cdktf.booleanToTerraform(this._logCollect),
      log_collect_type: cdktf.numberToTerraform(this._logCollectType),
      log_level: cdktf.stringToTerraform(this._logLevel),
      program_args: cdktf.stringToTerraform(this._programArgs),
      python_version: cdktf.stringToTerraform(this._pythonVersion),
      remark: cdktf.stringToTerraform(this._remark),
      task_manager_spec: cdktf.numberToTerraform(this._taskManagerSpec),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
      clazz_levels: cdktf.listMapper(oceanusJobConfigClazzLevelsToTerraform, true)(this._clazzLevels.internalValue),
      expert_mode_configuration: oceanusJobConfigExpertModeConfigurationToTerraform(this._expertModeConfiguration.internalValue),
      properties: cdktf.listMapper(oceanusJobConfigPropertiesToTerraform, true)(this._properties.internalValue),
      resource_refs: cdktf.listMapper(oceanusJobConfigResourceRefsToTerraform, true)(this._resourceRefs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_recover: {
        value: cdktf.numberToHclTerraform(this._autoRecover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cls_logset_id: {
        value: cdktf.stringToHclTerraform(this._clsLogsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_topic_id: {
        value: cdktf.stringToHclTerraform(this._clsTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket: {
        value: cdktf.stringToHclTerraform(this._cosBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_parallelism: {
        value: cdktf.numberToHclTerraform(this._defaultParallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entrypoint_class: {
        value: cdktf.stringToHclTerraform(this._entrypointClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expert_mode_on: {
        value: cdktf.booleanToHclTerraform(this._expertModeOn),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_manager_spec: {
        value: cdktf.numberToHclTerraform(this._jobManagerSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_collect: {
        value: cdktf.booleanToHclTerraform(this._logCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_collect_type: {
        value: cdktf.numberToHclTerraform(this._logCollectType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_args: {
        value: cdktf.stringToHclTerraform(this._programArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      python_version: {
        value: cdktf.stringToHclTerraform(this._pythonVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_manager_spec: {
        value: cdktf.numberToHclTerraform(this._taskManagerSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clazz_levels: {
        value: cdktf.listMapperHcl(oceanusJobConfigClazzLevelsToHclTerraform, true)(this._clazzLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusJobConfigClazzLevelsList",
      },
      expert_mode_configuration: {
        value: oceanusJobConfigExpertModeConfigurationToHclTerraform(this._expertModeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusJobConfigExpertModeConfigurationList",
      },
      properties: {
        value: cdktf.listMapperHcl(oceanusJobConfigPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusJobConfigPropertiesList",
      },
      resource_refs: {
        value: cdktf.listMapperHcl(oceanusJobConfigResourceRefsToHclTerraform, true)(this._resourceRefs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusJobConfigResourceRefsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
