// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsBuildPipelineStageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}
  */
  readonly buildPipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}
  */
  readonly buildPipelineStageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}
  */
  readonly buildSpecFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}
  */
  readonly deployPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}
  */
  readonly isPassAllParametersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}
  */
  readonly primaryBuildSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}
  */
  readonly stageExecutionTimeoutInSeconds?: number;
  /**
  * build_pipeline_stage_predecessor_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}
  */
  readonly buildPipelineStagePredecessorCollection: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection;
  /**
  * build_runner_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}
  */
  readonly buildRunnerShapeConfig?: DevopsBuildPipelineStageBuildRunnerShapeConfig;
  /**
  * build_source_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}
  */
  readonly buildSourceCollection?: DevopsBuildPipelineStageBuildSourceCollection;
  /**
  * deliver_artifact_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}
  */
  readonly deliverArtifactCollection?: DevopsBuildPipelineStageDeliverArtifactCollection;
  /**
  * private_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}
  */
  readonly privateAccessConfig?: DevopsBuildPipelineStagePrivateAccessConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}
  */
  readonly timeouts?: DevopsBuildPipelineStageTimeouts;
  /**
  * wait_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}
  */
  readonly waitCriteria?: DevopsBuildPipelineStageWaitCriteria;
}
export interface DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsToTerraform(struct?: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsToHclTerraform(struct?: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference {
    return new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}
  */
  readonly items: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems[] | cdktf.IResolvable;
}

export function devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionToTerraform(struct?: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference | DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsToTerraform, true)(struct!.items),
  }
}


export function devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionToHclTerraform(struct?: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference | DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsBuildPipelineStageBuildRunnerShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}
  */
  readonly buildRunnerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}
  */
  readonly ocpus?: number;
}

export function devopsBuildPipelineStageBuildRunnerShapeConfigToTerraform(struct?: DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference | DevopsBuildPipelineStageBuildRunnerShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_runner_type: cdktf.stringToTerraform(struct!.buildRunnerType),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function devopsBuildPipelineStageBuildRunnerShapeConfigToHclTerraform(struct?: DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference | DevopsBuildPipelineStageBuildRunnerShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_runner_type: {
      value: cdktf.stringToHclTerraform(struct!.buildRunnerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStageBuildRunnerShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildRunnerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildRunnerType = this._buildRunnerType;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageBuildRunnerShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildRunnerType = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildRunnerType = value.buildRunnerType;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // build_runner_type - computed: false, optional: false, required: true
  private _buildRunnerType?: string; 
  public get buildRunnerType() {
    return this.getStringAttribute('build_runner_type');
  }
  public set buildRunnerType(value: string) {
    this._buildRunnerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRunnerTypeInput() {
    return this._buildRunnerType;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DevopsBuildPipelineStageBuildSourceCollectionItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}
  */
  readonly connectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}
  */
  readonly repositoryUrl?: string;
}

export function devopsBuildPipelineStageBuildSourceCollectionItemsToTerraform(struct?: DevopsBuildPipelineStageBuildSourceCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    name: cdktf.stringToTerraform(struct!.name),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function devopsBuildPipelineStageBuildSourceCollectionItemsToHclTerraform(struct?: DevopsBuildPipelineStageBuildSourceCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
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
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsBuildPipelineStageBuildSourceCollectionItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageBuildSourceCollectionItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._connectionId = undefined;
      this._connectionType = undefined;
      this._name = undefined;
      this._repositoryId = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._connectionId = value.connectionId;
      this._connectionType = value.connectionType;
      this._name = value.name;
      this._repositoryId = value.repositoryId;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repository_id - computed: true, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class DevopsBuildPipelineStageBuildSourceCollectionItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsBuildPipelineStageBuildSourceCollectionItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference {
    return new DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsBuildPipelineStageBuildSourceCollection {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}
  */
  readonly items?: DevopsBuildPipelineStageBuildSourceCollectionItems[] | cdktf.IResolvable;
}

export function devopsBuildPipelineStageBuildSourceCollectionToTerraform(struct?: DevopsBuildPipelineStageBuildSourceCollectionOutputReference | DevopsBuildPipelineStageBuildSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsBuildPipelineStageBuildSourceCollectionItemsToTerraform, true)(struct!.items),
  }
}


export function devopsBuildPipelineStageBuildSourceCollectionToHclTerraform(struct?: DevopsBuildPipelineStageBuildSourceCollectionOutputReference | DevopsBuildPipelineStageBuildSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsBuildPipelineStageBuildSourceCollectionItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsBuildPipelineStageBuildSourceCollectionItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageBuildSourceCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStageBuildSourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageBuildSourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DevopsBuildPipelineStageBuildSourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsBuildPipelineStageBuildSourceCollectionItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsBuildPipelineStageDeliverArtifactCollectionItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}
  */
  readonly artifactName?: string;
}

export function devopsBuildPipelineStageDeliverArtifactCollectionItemsToTerraform(struct?: DevopsBuildPipelineStageDeliverArtifactCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    artifact_name: cdktf.stringToTerraform(struct!.artifactName),
  }
}


export function devopsBuildPipelineStageDeliverArtifactCollectionItemsToHclTerraform(struct?: DevopsBuildPipelineStageDeliverArtifactCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_name: {
      value: cdktf.stringToHclTerraform(struct!.artifactName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsBuildPipelineStageDeliverArtifactCollectionItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._artifactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactName = this._artifactName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageDeliverArtifactCollectionItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._artifactName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._artifactName = value.artifactName;
    }
  }

  // artifact_id - computed: true, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // artifact_name - computed: true, optional: true, required: false
  private _artifactName?: string; 
  public get artifactName() {
    return this.getStringAttribute('artifact_name');
  }
  public set artifactName(value: string) {
    this._artifactName = value;
  }
  public resetArtifactName() {
    this._artifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactNameInput() {
    return this._artifactName;
  }
}

export class DevopsBuildPipelineStageDeliverArtifactCollectionItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsBuildPipelineStageDeliverArtifactCollectionItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference {
    return new DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsBuildPipelineStageDeliverArtifactCollection {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}
  */
  readonly items?: DevopsBuildPipelineStageDeliverArtifactCollectionItems[] | cdktf.IResolvable;
}

export function devopsBuildPipelineStageDeliverArtifactCollectionToTerraform(struct?: DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference | DevopsBuildPipelineStageDeliverArtifactCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsBuildPipelineStageDeliverArtifactCollectionItemsToTerraform, true)(struct!.items),
  }
}


export function devopsBuildPipelineStageDeliverArtifactCollectionToHclTerraform(struct?: DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference | DevopsBuildPipelineStageDeliverArtifactCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsBuildPipelineStageDeliverArtifactCollectionItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsBuildPipelineStageDeliverArtifactCollectionItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStageDeliverArtifactCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageDeliverArtifactCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DevopsBuildPipelineStageDeliverArtifactCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsBuildPipelineStageDeliverArtifactCollectionItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsBuildPipelineStagePrivateAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}
  */
  readonly networkChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}
  */
  readonly subnetId: string;
}

export function devopsBuildPipelineStagePrivateAccessConfigToTerraform(struct?: DevopsBuildPipelineStagePrivateAccessConfigOutputReference | DevopsBuildPipelineStagePrivateAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_channel_type: cdktf.stringToTerraform(struct!.networkChannelType),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function devopsBuildPipelineStagePrivateAccessConfigToHclTerraform(struct?: DevopsBuildPipelineStagePrivateAccessConfigOutputReference | DevopsBuildPipelineStagePrivateAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_channel_type: {
      value: cdktf.stringToHclTerraform(struct!.networkChannelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStagePrivateAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStagePrivateAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkChannelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChannelType = this._networkChannelType;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStagePrivateAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkChannelType = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkChannelType = value.networkChannelType;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // network_channel_type - computed: false, optional: false, required: true
  private _networkChannelType?: string; 
  public get networkChannelType() {
    return this.getStringAttribute('network_channel_type');
  }
  public set networkChannelType(value: string) {
    this._networkChannelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChannelTypeInput() {
    return this._networkChannelType;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DevopsBuildPipelineStageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}
  */
  readonly update?: string;
}

export function devopsBuildPipelineStageTimeoutsToTerraform(struct?: DevopsBuildPipelineStageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function devopsBuildPipelineStageTimeoutsToHclTerraform(struct?: DevopsBuildPipelineStageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsBuildPipelineStageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DevopsBuildPipelineStageWaitCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}
  */
  readonly waitDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}
  */
  readonly waitType: string;
}

export function devopsBuildPipelineStageWaitCriteriaToTerraform(struct?: DevopsBuildPipelineStageWaitCriteriaOutputReference | DevopsBuildPipelineStageWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wait_duration: cdktf.stringToTerraform(struct!.waitDuration),
    wait_type: cdktf.stringToTerraform(struct!.waitType),
  }
}


export function devopsBuildPipelineStageWaitCriteriaToHclTerraform(struct?: DevopsBuildPipelineStageWaitCriteriaOutputReference | DevopsBuildPipelineStageWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wait_duration: {
      value: cdktf.stringToHclTerraform(struct!.waitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_type: {
      value: cdktf.stringToHclTerraform(struct!.waitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsBuildPipelineStageWaitCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsBuildPipelineStageWaitCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._waitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitDuration = this._waitDuration;
    }
    if (this._waitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitType = this._waitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsBuildPipelineStageWaitCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._waitDuration = undefined;
      this._waitType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._waitDuration = value.waitDuration;
      this._waitType = value.waitType;
    }
  }

  // wait_duration - computed: false, optional: false, required: true
  private _waitDuration?: string; 
  public get waitDuration() {
    return this.getStringAttribute('wait_duration');
  }
  public set waitDuration(value: string) {
    this._waitDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitDurationInput() {
    return this._waitDuration;
  }

  // wait_type - computed: false, optional: false, required: true
  private _waitType?: string; 
  public get waitType() {
    return this.getStringAttribute('wait_type');
  }
  public set waitType(value: string) {
    this._waitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTypeInput() {
    return this._waitType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}
*/
export class DevopsBuildPipelineStage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_build_pipeline_stage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsBuildPipelineStage to import
  * @param importFromId The id of the existing DevopsBuildPipelineStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsBuildPipelineStage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_build_pipeline_stage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_build_pipeline_stage oci_devops_build_pipeline_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsBuildPipelineStageConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsBuildPipelineStageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_build_pipeline_stage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buildPipelineId = config.buildPipelineId;
    this._buildPipelineStageType = config.buildPipelineStageType;
    this._buildSpecFile = config.buildSpecFile;
    this._definedTags = config.definedTags;
    this._deployPipelineId = config.deployPipelineId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._image = config.image;
    this._isPassAllParametersEnabled = config.isPassAllParametersEnabled;
    this._primaryBuildSource = config.primaryBuildSource;
    this._stageExecutionTimeoutInSeconds = config.stageExecutionTimeoutInSeconds;
    this._buildPipelineStagePredecessorCollection.internalValue = config.buildPipelineStagePredecessorCollection;
    this._buildRunnerShapeConfig.internalValue = config.buildRunnerShapeConfig;
    this._buildSourceCollection.internalValue = config.buildSourceCollection;
    this._deliverArtifactCollection.internalValue = config.deliverArtifactCollection;
    this._privateAccessConfig.internalValue = config.privateAccessConfig;
    this._timeouts.internalValue = config.timeouts;
    this._waitCriteria.internalValue = config.waitCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_pipeline_id - computed: false, optional: false, required: true
  private _buildPipelineId?: string; 
  public get buildPipelineId() {
    return this.getStringAttribute('build_pipeline_id');
  }
  public set buildPipelineId(value: string) {
    this._buildPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPipelineIdInput() {
    return this._buildPipelineId;
  }

  // build_pipeline_stage_type - computed: false, optional: false, required: true
  private _buildPipelineStageType?: string; 
  public get buildPipelineStageType() {
    return this.getStringAttribute('build_pipeline_stage_type');
  }
  public set buildPipelineStageType(value: string) {
    this._buildPipelineStageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPipelineStageTypeInput() {
    return this._buildPipelineStageType;
  }

  // build_spec_file - computed: true, optional: true, required: false
  private _buildSpecFile?: string; 
  public get buildSpecFile() {
    return this.getStringAttribute('build_spec_file');
  }
  public set buildSpecFile(value: string) {
    this._buildSpecFile = value;
  }
  public resetBuildSpecFile() {
    this._buildSpecFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecFileInput() {
    return this._buildSpecFile;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_pipeline_id - computed: true, optional: true, required: false
  private _deployPipelineId?: string; 
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }
  public set deployPipelineId(value: string) {
    this._deployPipelineId = value;
  }
  public resetDeployPipelineId() {
    this._deployPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPipelineIdInput() {
    return this._deployPipelineId;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // is_pass_all_parameters_enabled - computed: true, optional: true, required: false
  private _isPassAllParametersEnabled?: boolean | cdktf.IResolvable; 
  public get isPassAllParametersEnabled() {
    return this.getBooleanAttribute('is_pass_all_parameters_enabled');
  }
  public set isPassAllParametersEnabled(value: boolean | cdktf.IResolvable) {
    this._isPassAllParametersEnabled = value;
  }
  public resetIsPassAllParametersEnabled() {
    this._isPassAllParametersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPassAllParametersEnabledInput() {
    return this._isPassAllParametersEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // primary_build_source - computed: true, optional: true, required: false
  private _primaryBuildSource?: string; 
  public get primaryBuildSource() {
    return this.getStringAttribute('primary_build_source');
  }
  public set primaryBuildSource(value: string) {
    this._primaryBuildSource = value;
  }
  public resetPrimaryBuildSource() {
    this._primaryBuildSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBuildSourceInput() {
    return this._primaryBuildSource;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // stage_execution_timeout_in_seconds - computed: true, optional: true, required: false
  private _stageExecutionTimeoutInSeconds?: number; 
  public get stageExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('stage_execution_timeout_in_seconds');
  }
  public set stageExecutionTimeoutInSeconds(value: number) {
    this._stageExecutionTimeoutInSeconds = value;
  }
  public resetStageExecutionTimeoutInSeconds() {
    this._stageExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageExecutionTimeoutInSecondsInput() {
    return this._stageExecutionTimeoutInSeconds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // build_pipeline_stage_predecessor_collection - computed: false, optional: false, required: true
  private _buildPipelineStagePredecessorCollection = new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(this, "build_pipeline_stage_predecessor_collection");
  public get buildPipelineStagePredecessorCollection() {
    return this._buildPipelineStagePredecessorCollection;
  }
  public putBuildPipelineStagePredecessorCollection(value: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection) {
    this._buildPipelineStagePredecessorCollection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPipelineStagePredecessorCollectionInput() {
    return this._buildPipelineStagePredecessorCollection.internalValue;
  }

  // build_runner_shape_config - computed: false, optional: true, required: false
  private _buildRunnerShapeConfig = new DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(this, "build_runner_shape_config");
  public get buildRunnerShapeConfig() {
    return this._buildRunnerShapeConfig;
  }
  public putBuildRunnerShapeConfig(value: DevopsBuildPipelineStageBuildRunnerShapeConfig) {
    this._buildRunnerShapeConfig.internalValue = value;
  }
  public resetBuildRunnerShapeConfig() {
    this._buildRunnerShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRunnerShapeConfigInput() {
    return this._buildRunnerShapeConfig.internalValue;
  }

  // build_source_collection - computed: false, optional: true, required: false
  private _buildSourceCollection = new DevopsBuildPipelineStageBuildSourceCollectionOutputReference(this, "build_source_collection");
  public get buildSourceCollection() {
    return this._buildSourceCollection;
  }
  public putBuildSourceCollection(value: DevopsBuildPipelineStageBuildSourceCollection) {
    this._buildSourceCollection.internalValue = value;
  }
  public resetBuildSourceCollection() {
    this._buildSourceCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSourceCollectionInput() {
    return this._buildSourceCollection.internalValue;
  }

  // deliver_artifact_collection - computed: false, optional: true, required: false
  private _deliverArtifactCollection = new DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(this, "deliver_artifact_collection");
  public get deliverArtifactCollection() {
    return this._deliverArtifactCollection;
  }
  public putDeliverArtifactCollection(value: DevopsBuildPipelineStageDeliverArtifactCollection) {
    this._deliverArtifactCollection.internalValue = value;
  }
  public resetDeliverArtifactCollection() {
    this._deliverArtifactCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverArtifactCollectionInput() {
    return this._deliverArtifactCollection.internalValue;
  }

  // private_access_config - computed: false, optional: true, required: false
  private _privateAccessConfig = new DevopsBuildPipelineStagePrivateAccessConfigOutputReference(this, "private_access_config");
  public get privateAccessConfig() {
    return this._privateAccessConfig;
  }
  public putPrivateAccessConfig(value: DevopsBuildPipelineStagePrivateAccessConfig) {
    this._privateAccessConfig.internalValue = value;
  }
  public resetPrivateAccessConfig() {
    this._privateAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessConfigInput() {
    return this._privateAccessConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsBuildPipelineStageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsBuildPipelineStageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wait_criteria - computed: false, optional: true, required: false
  private _waitCriteria = new DevopsBuildPipelineStageWaitCriteriaOutputReference(this, "wait_criteria");
  public get waitCriteria() {
    return this._waitCriteria;
  }
  public putWaitCriteria(value: DevopsBuildPipelineStageWaitCriteria) {
    this._waitCriteria.internalValue = value;
  }
  public resetWaitCriteria() {
    this._waitCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitCriteriaInput() {
    return this._waitCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_pipeline_id: cdktf.stringToTerraform(this._buildPipelineId),
      build_pipeline_stage_type: cdktf.stringToTerraform(this._buildPipelineStageType),
      build_spec_file: cdktf.stringToTerraform(this._buildSpecFile),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_pipeline_id: cdktf.stringToTerraform(this._deployPipelineId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      is_pass_all_parameters_enabled: cdktf.booleanToTerraform(this._isPassAllParametersEnabled),
      primary_build_source: cdktf.stringToTerraform(this._primaryBuildSource),
      stage_execution_timeout_in_seconds: cdktf.numberToTerraform(this._stageExecutionTimeoutInSeconds),
      build_pipeline_stage_predecessor_collection: devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionToTerraform(this._buildPipelineStagePredecessorCollection.internalValue),
      build_runner_shape_config: devopsBuildPipelineStageBuildRunnerShapeConfigToTerraform(this._buildRunnerShapeConfig.internalValue),
      build_source_collection: devopsBuildPipelineStageBuildSourceCollectionToTerraform(this._buildSourceCollection.internalValue),
      deliver_artifact_collection: devopsBuildPipelineStageDeliverArtifactCollectionToTerraform(this._deliverArtifactCollection.internalValue),
      private_access_config: devopsBuildPipelineStagePrivateAccessConfigToTerraform(this._privateAccessConfig.internalValue),
      timeouts: devopsBuildPipelineStageTimeoutsToTerraform(this._timeouts.internalValue),
      wait_criteria: devopsBuildPipelineStageWaitCriteriaToTerraform(this._waitCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._buildPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_pipeline_stage_type: {
        value: cdktf.stringToHclTerraform(this._buildPipelineStageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_spec_file: {
        value: cdktf.stringToHclTerraform(this._buildSpecFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._deployPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_pass_all_parameters_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPassAllParametersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_build_source: {
        value: cdktf.stringToHclTerraform(this._primaryBuildSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_execution_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._stageExecutionTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      build_pipeline_stage_predecessor_collection: {
        value: devopsBuildPipelineStageBuildPipelineStagePredecessorCollectionToHclTerraform(this._buildPipelineStagePredecessorCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList",
      },
      build_runner_shape_config: {
        value: devopsBuildPipelineStageBuildRunnerShapeConfigToHclTerraform(this._buildRunnerShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStageBuildRunnerShapeConfigList",
      },
      build_source_collection: {
        value: devopsBuildPipelineStageBuildSourceCollectionToHclTerraform(this._buildSourceCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStageBuildSourceCollectionList",
      },
      deliver_artifact_collection: {
        value: devopsBuildPipelineStageDeliverArtifactCollectionToHclTerraform(this._deliverArtifactCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStageDeliverArtifactCollectionList",
      },
      private_access_config: {
        value: devopsBuildPipelineStagePrivateAccessConfigToHclTerraform(this._privateAccessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStagePrivateAccessConfigList",
      },
      timeouts: {
        value: devopsBuildPipelineStageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsBuildPipelineStageTimeouts",
      },
      wait_criteria: {
        value: devopsBuildPipelineStageWaitCriteriaToHclTerraform(this._waitCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsBuildPipelineStageWaitCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
