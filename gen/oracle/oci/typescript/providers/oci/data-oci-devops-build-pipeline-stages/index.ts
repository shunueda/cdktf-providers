// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsBuildPipelineStagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#build_pipeline_id DataOciDevopsBuildPipelineStages#build_pipeline_id}
  */
  readonly buildPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#compartment_id DataOciDevopsBuildPipelineStages#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#display_name DataOciDevopsBuildPipelineStages#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#id DataOciDevopsBuildPipelineStages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#state DataOciDevopsBuildPipelineStages#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#filter DataOciDevopsBuildPipelineStages#filter}
  */
  readonly filter?: DataOciDevopsBuildPipelineStagesFilter[] | cdktf.IResolvable;
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems | undefined) {
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
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_runner_type - computed: true, optional: false, required: false
  public get buildRunnerType() {
    return this.getStringAttribute('build_runner_type');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // artifact_name - computed: true, optional: false, required: false
  public get artifactName() {
    return this.getStringAttribute('artifact_name');
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_channel_type - computed: true, optional: false, required: false
  public get networkChannelType() {
    return this.getStringAttribute('network_channel_type');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // wait_duration - computed: true, optional: false, required: false
  public get waitDuration() {
    return this.getStringAttribute('wait_duration');
  }

  // wait_type - computed: true, optional: false, required: false
  public get waitType() {
    return this.getStringAttribute('wait_type');
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_pipeline_id - computed: true, optional: false, required: false
  public get buildPipelineId() {
    return this.getStringAttribute('build_pipeline_id');
  }

  // build_pipeline_stage_predecessor_collection - computed: true, optional: false, required: false
  private _buildPipelineStagePredecessorCollection = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList(this, "build_pipeline_stage_predecessor_collection", false);
  public get buildPipelineStagePredecessorCollection() {
    return this._buildPipelineStagePredecessorCollection;
  }

  // build_pipeline_stage_type - computed: true, optional: false, required: false
  public get buildPipelineStageType() {
    return this.getStringAttribute('build_pipeline_stage_type');
  }

  // build_runner_shape_config - computed: true, optional: false, required: false
  private _buildRunnerShapeConfig = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList(this, "build_runner_shape_config", false);
  public get buildRunnerShapeConfig() {
    return this._buildRunnerShapeConfig;
  }

  // build_source_collection - computed: true, optional: false, required: false
  private _buildSourceCollection = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList(this, "build_source_collection", false);
  public get buildSourceCollection() {
    return this._buildSourceCollection;
  }

  // build_spec_file - computed: true, optional: false, required: false
  public get buildSpecFile() {
    return this.getStringAttribute('build_spec_file');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deliver_artifact_collection - computed: true, optional: false, required: false
  private _deliverArtifactCollection = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList(this, "deliver_artifact_collection", false);
  public get deliverArtifactCollection() {
    return this._deliverArtifactCollection;
  }

  // deploy_pipeline_id - computed: true, optional: false, required: false
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // is_pass_all_parameters_enabled - computed: true, optional: false, required: false
  public get isPassAllParametersEnabled() {
    return this.getBooleanAttribute('is_pass_all_parameters_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // primary_build_source - computed: true, optional: false, required: false
  public get primaryBuildSource() {
    return this.getStringAttribute('primary_build_source');
  }

  // private_access_config - computed: true, optional: false, required: false
  private _privateAccessConfig = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList(this, "private_access_config", false);
  public get privateAccessConfig() {
    return this._privateAccessConfig;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // stage_execution_timeout_in_seconds - computed: true, optional: false, required: false
  public get stageExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('stage_execution_timeout_in_seconds');
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

  // wait_criteria - computed: true, optional: false, required: false
  private _waitCriteria = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList(this, "wait_criteria", false);
  public get waitCriteria() {
    return this._waitCriteria;
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection {
}

export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionToTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference {
    return new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsBuildPipelineStagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#name DataOciDevopsBuildPipelineStages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#regex DataOciDevopsBuildPipelineStages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#values DataOciDevopsBuildPipelineStages#values}
  */
  readonly values: string[];
}

export function dataOciDevopsBuildPipelineStagesFilterToTerraform(struct?: DataOciDevopsBuildPipelineStagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDevopsBuildPipelineStagesFilterToHclTerraform(struct?: DataOciDevopsBuildPipelineStagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDevopsBuildPipelineStagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsBuildPipelineStagesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsBuildPipelineStagesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDevopsBuildPipelineStagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDevopsBuildPipelineStagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDevopsBuildPipelineStagesFilterOutputReference {
    return new DataOciDevopsBuildPipelineStagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages oci_devops_build_pipeline_stages}
*/
export class DataOciDevopsBuildPipelineStages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_build_pipeline_stages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsBuildPipelineStages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsBuildPipelineStages to import
  * @param importFromId The id of the existing DataOciDevopsBuildPipelineStages that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsBuildPipelineStages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_build_pipeline_stages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/devops_build_pipeline_stages oci_devops_build_pipeline_stages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsBuildPipelineStagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsBuildPipelineStagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_build_pipeline_stages',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_pipeline_id - computed: false, optional: true, required: false
  private _buildPipelineId?: string; 
  public get buildPipelineId() {
    return this.getStringAttribute('build_pipeline_id');
  }
  public set buildPipelineId(value: string) {
    this._buildPipelineId = value;
  }
  public resetBuildPipelineId() {
    this._buildPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPipelineIdInput() {
    return this._buildPipelineId;
  }

  // build_pipeline_stage_collection - computed: true, optional: false, required: false
  private _buildPipelineStageCollection = new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList(this, "build_pipeline_stage_collection", false);
  public get buildPipelineStageCollection() {
    return this._buildPipelineStageCollection;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDevopsBuildPipelineStagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDevopsBuildPipelineStagesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_pipeline_id: cdktf.stringToTerraform(this._buildPipelineId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDevopsBuildPipelineStagesFilterToTerraform, true)(this._filter.internalValue),
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
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDevopsBuildPipelineStagesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDevopsBuildPipelineStagesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
