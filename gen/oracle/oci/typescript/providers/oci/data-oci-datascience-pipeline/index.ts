// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatasciencePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_pipeline#pipeline_id DataOciDatasciencePipeline#pipeline_id}
  */
  readonly pipelineId: string;
}
export interface DataOciDatasciencePipelineConfigurationDetails {
}

export function dataOciDatasciencePipelineConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatasciencePipelineConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails {
}

export function dataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct?: DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsToHclTerraform(struct?: DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_baseline - computed: true, optional: false, required: false
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_in_gbs_parameterized - computed: true, optional: false, required: false
  public get memoryInGbsParameterized() {
    return this.getStringAttribute('memory_in_gbs_parameterized');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // ocpus_parameterized - computed: true, optional: false, required: false
  public get ocpusParameterized() {
    return this.getStringAttribute('ocpus_parameterized');
  }
}

export class DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference {
    return new DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineInfrastructureConfigurationDetails {
}

export function dataOciDatasciencePipelineInfrastructureConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineInfrastructureConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: false, required: false
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // block_storage_size_in_gbs_parameterized - computed: true, optional: false, required: false
  public get blockStorageSizeInGbsParameterized() {
    return this.getStringAttribute('block_storage_size_in_gbs_parameterized');
  }

  // shape_config_details - computed: true, optional: false, required: false
  private _shapeConfigDetails = new DataOciDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsList(this, "shape_config_details", false);
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDatasciencePipelineInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineInfrastructureConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineLogConfigurationDetails {
}

export function dataOciDatasciencePipelineLogConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineLogConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineLogConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineLogConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineLogConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineLogConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineLogConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_auto_log_creation - computed: true, optional: false, required: false
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }

  // enable_logging - computed: true, optional: false, required: false
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DataOciDatasciencePipelineLogConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineLogConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineLogConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepArtifact {
}

export function dataOciDatasciencePipelineStepArtifactToTerraform(struct?: DataOciDatasciencePipelineStepArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepArtifactToHclTerraform(struct?: DataOciDatasciencePipelineStepArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepArtifactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_content_disposition - computed: true, optional: false, required: false
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }

  // artifact_content_length - computed: true, optional: false, required: false
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }

  // artifact_content_md5 - computed: true, optional: false, required: false
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: false
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // pipeline_step_artifact - computed: true, optional: false, required: false
  public get pipelineStepArtifact() {
    return this.getStringAttribute('pipeline_step_artifact');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciDatasciencePipelineStepArtifactList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepArtifactOutputReference {
    return new DataOciDatasciencePipelineStepArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepConfigurationDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getListAttribute('cmd');
  }

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_signature_id - computed: true, optional: false, required: false
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_in_gbs_parameterized - computed: true, optional: false, required: false
  public get memoryInGbsParameterized() {
    return this.getStringAttribute('memory_in_gbs_parameterized');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // ocpus_parameterized - computed: true, optional: false, required: false
  public get ocpusParameterized() {
    return this.getStringAttribute('ocpus_parameterized');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_in_gbs_parameterized - computed: true, optional: false, required: false
  public get memoryInGbsParameterized() {
    return this.getStringAttribute('memory_in_gbs_parameterized');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // ocpus_parameterized - computed: true, optional: false, required: false
  public get ocpusParameterized() {
    return this.getStringAttribute('ocpus_parameterized');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new cdktf.StringMap(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // driver_shape - computed: true, optional: false, required: false
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }

  // driver_shape_config_details - computed: true, optional: false, required: false
  private _driverShapeConfigDetails = new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsDriverShapeConfigDetailsList(this, "driver_shape_config_details", false);
  public get driverShapeConfigDetails() {
    return this._driverShapeConfigDetails;
  }

  // executor_shape - computed: true, optional: false, required: false
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }

  // executor_shape_config_details - computed: true, optional: false, required: false
  private _executorShapeConfigDetails = new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsExecutorShapeConfigDetailsList(this, "executor_shape_config_details", false);
  public get executorShapeConfigDetails() {
    return this._executorShapeConfigDetails;
  }

  // logs_bucket_uri - computed: true, optional: false, required: false
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }

  // num_executors - computed: true, optional: false, required: false
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: false
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_baseline - computed: true, optional: false, required: false
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_in_gbs_parameterized - computed: true, optional: false, required: false
  public get memoryInGbsParameterized() {
    return this.getStringAttribute('memory_in_gbs_parameterized');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // ocpus_parameterized - computed: true, optional: false, required: false
  public get ocpusParameterized() {
    return this.getStringAttribute('ocpus_parameterized');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails {
}

export function dataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: false, required: false
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // block_storage_size_in_gbs_parameterized - computed: true, optional: false, required: false
  public get blockStorageSizeInGbsParameterized() {
    return this.getStringAttribute('block_storage_size_in_gbs_parameterized');
  }

  // shape_config_details - computed: true, optional: false, required: false
  private _shapeConfigDetails = new DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsList(this, "shape_config_details", false);
  public get shapeConfigDetails() {
    return this._shapeConfigDetails;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepParametersOutput {
}

export function dataOciDatasciencePipelineStepDetailsStepParametersOutputToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepParametersOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepParametersOutputToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepParametersOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepParametersOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepParametersOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepParametersOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_file - computed: true, optional: false, required: false
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }

  // output_parameter_type - computed: true, optional: false, required: false
  public get outputParameterType() {
    return this.getStringAttribute('output_parameter_type');
  }

  // parameter_names - computed: true, optional: false, required: false
  public get parameterNames() {
    return this.getListAttribute('parameter_names');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepParametersOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepParametersOutputOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepParametersOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepParameters {
}

export function dataOciDatasciencePipelineStepDetailsStepParametersToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepParametersToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataOciDatasciencePipelineStepDetailsStepParametersOutputList(this, "output", false);
  public get output() {
    return this._output;
  }

  // parameter_type - computed: true, optional: false, required: false
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepParametersOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStruct {
}

export function dataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructToTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // destination_directory_name - computed: true, optional: false, required: false
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructOutputReference {
    return new DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStepDetails {
}

export function dataOciDatasciencePipelineStepDetailsToTerraform(struct?: DataOciDatasciencePipelineStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStepDetailsToHclTerraform(struct?: DataOciDatasciencePipelineStepDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStepDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_artifact_uploaded - computed: true, optional: false, required: false
  public get isArtifactUploaded() {
    return this.getBooleanAttribute('is_artifact_uploaded');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // step_configuration_details - computed: true, optional: false, required: false
  private _stepConfigurationDetails = new DataOciDatasciencePipelineStepDetailsStepConfigurationDetailsList(this, "step_configuration_details", false);
  public get stepConfigurationDetails() {
    return this._stepConfigurationDetails;
  }

  // step_container_configuration_details - computed: true, optional: false, required: false
  private _stepContainerConfigurationDetails = new DataOciDatasciencePipelineStepDetailsStepContainerConfigurationDetailsList(this, "step_container_configuration_details", false);
  public get stepContainerConfigurationDetails() {
    return this._stepContainerConfigurationDetails;
  }

  // step_dataflow_configuration_details - computed: true, optional: false, required: false
  private _stepDataflowConfigurationDetails = new DataOciDatasciencePipelineStepDetailsStepDataflowConfigurationDetailsList(this, "step_dataflow_configuration_details", false);
  public get stepDataflowConfigurationDetails() {
    return this._stepDataflowConfigurationDetails;
  }

  // step_infrastructure_configuration_details - computed: true, optional: false, required: false
  private _stepInfrastructureConfigurationDetails = new DataOciDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsList(this, "step_infrastructure_configuration_details", false);
  public get stepInfrastructureConfigurationDetails() {
    return this._stepInfrastructureConfigurationDetails;
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_parameters - computed: true, optional: false, required: false
  private _stepParameters = new DataOciDatasciencePipelineStepDetailsStepParametersList(this, "step_parameters", false);
  public get stepParameters() {
    return this._stepParameters;
  }

  // step_run_name - computed: true, optional: false, required: false
  public get stepRunName() {
    return this.getStringAttribute('step_run_name');
  }

  // step_storage_mount_configuration_details_list - computed: true, optional: false, required: false
  private _stepStorageMountConfigurationDetailsList = new DataOciDatasciencePipelineStepDetailsStepStorageMountConfigurationDetailsListStructList(this, "step_storage_mount_configuration_details_list", false);
  public get stepStorageMountConfigurationDetailsList() {
    return this._stepStorageMountConfigurationDetailsList;
  }

  // step_type - computed: true, optional: false, required: false
  public get stepType() {
    return this.getStringAttribute('step_type');
  }
}

export class DataOciDatasciencePipelineStepDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStepDetailsOutputReference {
    return new DataOciDatasciencePipelineStepDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineStorageMountConfigurationDetailsListStruct {
}

export function dataOciDatasciencePipelineStorageMountConfigurationDetailsListStructToTerraform(struct?: DataOciDatasciencePipelineStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DataOciDatasciencePipelineStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineStorageMountConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineStorageMountConfigurationDetailsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // destination_directory_name - computed: true, optional: false, required: false
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class DataOciDatasciencePipelineStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineStorageMountConfigurationDetailsListStructOutputReference {
    return new DataOciDatasciencePipelineStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_pipeline oci_datascience_pipeline}
*/
export class DataOciDatasciencePipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatasciencePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatasciencePipeline to import
  * @param importFromId The id of the existing DataOciDatasciencePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatasciencePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_pipeline oci_datascience_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatasciencePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatasciencePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pipelineId = config.pipelineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataOciDatasciencePipelineConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delete_related_pipeline_runs - computed: true, optional: false, required: false
  public get deleteRelatedPipelineRuns() {
    return this.getBooleanAttribute('delete_related_pipeline_runs');
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

  // infrastructure_configuration_details - computed: true, optional: false, required: false
  private _infrastructureConfigurationDetails = new DataOciDatasciencePipelineInfrastructureConfigurationDetailsList(this, "infrastructure_configuration_details", false);
  public get infrastructureConfigurationDetails() {
    return this._infrastructureConfigurationDetails;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_configuration_details - computed: true, optional: false, required: false
  private _logConfigurationDetails = new DataOciDatasciencePipelineLogConfigurationDetailsList(this, "log_configuration_details", false);
  public get logConfigurationDetails() {
    return this._logConfigurationDetails;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // step_artifact - computed: true, optional: false, required: false
  private _stepArtifact = new DataOciDatasciencePipelineStepArtifactList(this, "step_artifact", false);
  public get stepArtifact() {
    return this._stepArtifact;
  }

  // step_details - computed: true, optional: false, required: false
  private _stepDetails = new DataOciDatasciencePipelineStepDetailsList(this, "step_details", false);
  public get stepDetails() {
    return this._stepDetails;
  }

  // storage_mount_configuration_details_list - computed: true, optional: false, required: false
  private _storageMountConfigurationDetailsList = new DataOciDatasciencePipelineStorageMountConfigurationDetailsListStructList(this, "storage_mount_configuration_details_list", false);
  public get storageMountConfigurationDetailsList() {
    return this._storageMountConfigurationDetailsList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
