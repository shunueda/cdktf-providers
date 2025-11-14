// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#defined_tags DevopsDeployment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_pipeline_id DevopsDeployment#deploy_pipeline_id}
  */
  readonly deployPipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}
  */
  readonly deployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deployment_type DevopsDeployment#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#display_name DevopsDeployment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#freeform_tags DevopsDeployment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#id DevopsDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#previous_deployment_id DevopsDeployment#previous_deployment_id}
  */
  readonly previousDeploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#trigger_new_devops_deployment DevopsDeployment#trigger_new_devops_deployment}
  */
  readonly triggerNewDevopsDeployment?: boolean | cdktf.IResolvable;
  /**
  * deploy_artifact_override_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_artifact_override_arguments DevopsDeployment#deploy_artifact_override_arguments}
  */
  readonly deployArtifactOverrideArguments?: DevopsDeploymentDeployArtifactOverrideArguments;
  /**
  * deploy_stage_override_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_stage_override_arguments DevopsDeployment#deploy_stage_override_arguments}
  */
  readonly deployStageOverrideArguments?: DevopsDeploymentDeployStageOverrideArguments;
  /**
  * deployment_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deployment_arguments DevopsDeployment#deployment_arguments}
  */
  readonly deploymentArguments?: DevopsDeploymentDeploymentArguments;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#timeouts DevopsDeployment#timeouts}
  */
  readonly timeouts?: DevopsDeploymentTimeouts;
}
export interface DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems {
}

export function devopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsToTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsToHclTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_stage_id - computed: true, optional: false, required: false
  public get deployStageId() {
    return this.getStringAttribute('deploy_stage_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference {
    return new DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages {
}

export function devopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesToTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesToHclTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference {
    return new DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineArtifactsItems {
}

export function devopsDeploymentDeployPipelineArtifactsItemsToTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineArtifactsItemsToHclTerraform(struct?: DevopsDeploymentDeployPipelineArtifactsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineArtifactsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineArtifactsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineArtifactsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_artifact_id - computed: true, optional: false, required: false
  public get deployArtifactId() {
    return this.getStringAttribute('deploy_artifact_id');
  }

  // deploy_pipeline_stages - computed: true, optional: false, required: false
  private _deployPipelineStages = new DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList(this, "deploy_pipeline_stages", false);
  public get deployPipelineStages() {
    return this._deployPipelineStages;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DevopsDeploymentDeployPipelineArtifactsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineArtifactsItemsOutputReference {
    return new DevopsDeploymentDeployPipelineArtifactsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineArtifacts {
}

export function devopsDeploymentDeployPipelineArtifactsToTerraform(struct?: DevopsDeploymentDeployPipelineArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineArtifactsToHclTerraform(struct?: DevopsDeploymentDeployPipelineArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DevopsDeploymentDeployPipelineArtifactsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DevopsDeploymentDeployPipelineArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineArtifactsOutputReference {
    return new DevopsDeploymentDeployPipelineArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems {
}

export function devopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsToTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsToHclTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_stage_id - computed: true, optional: false, required: false
  public get deployStageId() {
    return this.getStringAttribute('deploy_stage_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference {
    return new DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages {
}

export function devopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesToTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesToHclTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference {
    return new DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineEnvironmentsItems {
}

export function devopsDeploymentDeployPipelineEnvironmentsItemsToTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineEnvironmentsItemsToHclTerraform(struct?: DevopsDeploymentDeployPipelineEnvironmentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineEnvironmentsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineEnvironmentsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_environment_id - computed: true, optional: false, required: false
  public get deployEnvironmentId() {
    return this.getStringAttribute('deploy_environment_id');
  }

  // deploy_pipeline_stages - computed: true, optional: false, required: false
  private _deployPipelineStages = new DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList(this, "deploy_pipeline_stages", false);
  public get deployPipelineStages() {
    return this._deployPipelineStages;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DevopsDeploymentDeployPipelineEnvironmentsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference {
    return new DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployPipelineEnvironments {
}

export function devopsDeploymentDeployPipelineEnvironmentsToTerraform(struct?: DevopsDeploymentDeployPipelineEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeployPipelineEnvironmentsToHclTerraform(struct?: DevopsDeploymentDeployPipelineEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeployPipelineEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployPipelineEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployPipelineEnvironments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DevopsDeploymentDeployPipelineEnvironmentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DevopsDeploymentDeployPipelineEnvironmentsList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeployPipelineEnvironmentsOutputReference {
    return new DevopsDeploymentDeployPipelineEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeploymentExecutionProgress {
}

export function devopsDeploymentDeploymentExecutionProgressToTerraform(struct?: DevopsDeploymentDeploymentExecutionProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsDeploymentDeploymentExecutionProgressToHclTerraform(struct?: DevopsDeploymentDeploymentExecutionProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsDeploymentDeploymentExecutionProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeploymentExecutionProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeploymentExecutionProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_stage_execution_progress - computed: true, optional: false, required: false
  private _deployStageExecutionProgress = new cdktf.StringMap(this, "deploy_stage_execution_progress");
  public get deployStageExecutionProgress() {
    return this._deployStageExecutionProgress;
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DevopsDeploymentDeploymentExecutionProgressList extends cdktf.ComplexList {

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
  public get(index: number): DevopsDeploymentDeploymentExecutionProgressOutputReference {
    return new DevopsDeploymentDeploymentExecutionProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployArtifactOverrideArgumentsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_artifact_id DevopsDeployment#deploy_artifact_id}
  */
  readonly deployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#name DevopsDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#value DevopsDeployment#value}
  */
  readonly value?: string;
}

export function devopsDeploymentDeployArtifactOverrideArgumentsItemsToTerraform(struct?: DevopsDeploymentDeployArtifactOverrideArgumentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_artifact_id: cdktf.stringToTerraform(struct!.deployArtifactId),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function devopsDeploymentDeployArtifactOverrideArgumentsItemsToHclTerraform(struct?: DevopsDeploymentDeployArtifactOverrideArgumentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.deployArtifactId),
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

export class DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployArtifactOverrideArgumentsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployArtifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployArtifactId = this._deployArtifactId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployArtifactOverrideArgumentsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployArtifactId = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployArtifactId = value.deployArtifactId;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // deploy_artifact_id - computed: true, optional: true, required: false
  private _deployArtifactId?: string; 
  public get deployArtifactId() {
    return this.getStringAttribute('deploy_artifact_id');
  }
  public set deployArtifactId(value: string) {
    this._deployArtifactId = value;
  }
  public resetDeployArtifactId() {
    this._deployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactIdInput() {
    return this._deployArtifactId;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DevopsDeploymentDeployArtifactOverrideArgumentsItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeploymentDeployArtifactOverrideArgumentsItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference {
    return new DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployArtifactOverrideArguments {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#items DevopsDeployment#items}
  */
  readonly items?: DevopsDeploymentDeployArtifactOverrideArgumentsItems[] | cdktf.IResolvable;
}

export function devopsDeploymentDeployArtifactOverrideArgumentsToTerraform(struct?: DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference | DevopsDeploymentDeployArtifactOverrideArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeploymentDeployArtifactOverrideArgumentsItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeploymentDeployArtifactOverrideArgumentsToHclTerraform(struct?: DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference | DevopsDeploymentDeployArtifactOverrideArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeploymentDeployArtifactOverrideArgumentsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeploymentDeployArtifactOverrideArgumentsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeploymentDeployArtifactOverrideArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployArtifactOverrideArguments | undefined) {
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
  private _items = new DevopsDeploymentDeployArtifactOverrideArgumentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeploymentDeployArtifactOverrideArgumentsItems[] | cdktf.IResolvable) {
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
export interface DevopsDeploymentDeployStageOverrideArgumentsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}
  */
  readonly deployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#name DevopsDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#value DevopsDeployment#value}
  */
  readonly value?: string;
}

export function devopsDeploymentDeployStageOverrideArgumentsItemsToTerraform(struct?: DevopsDeploymentDeployStageOverrideArgumentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_stage_id: cdktf.stringToTerraform(struct!.deployStageId),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function devopsDeploymentDeployStageOverrideArgumentsItemsToHclTerraform(struct?: DevopsDeploymentDeployStageOverrideArgumentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_stage_id: {
      value: cdktf.stringToHclTerraform(struct!.deployStageId),
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

export class DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeployStageOverrideArgumentsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployStageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployStageId = this._deployStageId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployStageOverrideArgumentsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployStageId = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployStageId = value.deployStageId;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // deploy_stage_id - computed: true, optional: true, required: false
  private _deployStageId?: string; 
  public get deployStageId() {
    return this.getStringAttribute('deploy_stage_id');
  }
  public set deployStageId(value: string) {
    this._deployStageId = value;
  }
  public resetDeployStageId() {
    this._deployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStageIdInput() {
    return this._deployStageId;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DevopsDeploymentDeployStageOverrideArgumentsItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeploymentDeployStageOverrideArgumentsItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference {
    return new DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeployStageOverrideArguments {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#items DevopsDeployment#items}
  */
  readonly items?: DevopsDeploymentDeployStageOverrideArgumentsItems[] | cdktf.IResolvable;
}

export function devopsDeploymentDeployStageOverrideArgumentsToTerraform(struct?: DevopsDeploymentDeployStageOverrideArgumentsOutputReference | DevopsDeploymentDeployStageOverrideArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeploymentDeployStageOverrideArgumentsItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeploymentDeployStageOverrideArgumentsToHclTerraform(struct?: DevopsDeploymentDeployStageOverrideArgumentsOutputReference | DevopsDeploymentDeployStageOverrideArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeploymentDeployStageOverrideArgumentsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeploymentDeployStageOverrideArgumentsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeploymentDeployStageOverrideArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeploymentDeployStageOverrideArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeployStageOverrideArguments | undefined) {
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
  private _items = new DevopsDeploymentDeployStageOverrideArgumentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeploymentDeployStageOverrideArgumentsItems[] | cdktf.IResolvable) {
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
export interface DevopsDeploymentDeploymentArgumentsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#name DevopsDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#value DevopsDeployment#value}
  */
  readonly value?: string;
}

export function devopsDeploymentDeploymentArgumentsItemsToTerraform(struct?: DevopsDeploymentDeploymentArgumentsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function devopsDeploymentDeploymentArgumentsItemsToHclTerraform(struct?: DevopsDeploymentDeploymentArgumentsItems | cdktf.IResolvable): any {
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

export class DevopsDeploymentDeploymentArgumentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeploymentDeploymentArgumentsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeploymentArgumentsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DevopsDeploymentDeploymentArgumentsItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeploymentDeploymentArgumentsItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeploymentDeploymentArgumentsItemsOutputReference {
    return new DevopsDeploymentDeploymentArgumentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeploymentDeploymentArguments {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#items DevopsDeployment#items}
  */
  readonly items?: DevopsDeploymentDeploymentArgumentsItems[] | cdktf.IResolvable;
}

export function devopsDeploymentDeploymentArgumentsToTerraform(struct?: DevopsDeploymentDeploymentArgumentsOutputReference | DevopsDeploymentDeploymentArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeploymentDeploymentArgumentsItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeploymentDeploymentArgumentsToHclTerraform(struct?: DevopsDeploymentDeploymentArgumentsOutputReference | DevopsDeploymentDeploymentArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeploymentDeploymentArgumentsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeploymentDeploymentArgumentsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeploymentDeploymentArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeploymentDeploymentArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeploymentDeploymentArguments | undefined) {
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
  private _items = new DevopsDeploymentDeploymentArgumentsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeploymentDeploymentArgumentsItems[] | cdktf.IResolvable) {
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
export interface DevopsDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#create DevopsDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#delete DevopsDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#update DevopsDeployment#update}
  */
  readonly update?: string;
}

export function devopsDeploymentTimeoutsToTerraform(struct?: DevopsDeploymentTimeouts | cdktf.IResolvable): any {
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


export function devopsDeploymentTimeoutsToHclTerraform(struct?: DevopsDeploymentTimeouts | cdktf.IResolvable): any {
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

export class DevopsDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsDeploymentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DevopsDeploymentTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment oci_devops_deployment}
*/
export class DevopsDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsDeployment to import
  * @param importFromId The id of the existing DevopsDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_deployment oci_devops_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._deployPipelineId = config.deployPipelineId;
    this._deployStageId = config.deployStageId;
    this._deploymentType = config.deploymentType;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._previousDeploymentId = config.previousDeploymentId;
    this._triggerNewDevopsDeployment = config.triggerNewDevopsDeployment;
    this._deployArtifactOverrideArguments.internalValue = config.deployArtifactOverrideArguments;
    this._deployStageOverrideArguments.internalValue = config.deployStageOverrideArguments;
    this._deploymentArguments.internalValue = config.deploymentArguments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // deploy_pipeline_artifacts - computed: true, optional: false, required: false
  private _deployPipelineArtifacts = new DevopsDeploymentDeployPipelineArtifactsList(this, "deploy_pipeline_artifacts", false);
  public get deployPipelineArtifacts() {
    return this._deployPipelineArtifacts;
  }

  // deploy_pipeline_environments - computed: true, optional: false, required: false
  private _deployPipelineEnvironments = new DevopsDeploymentDeployPipelineEnvironmentsList(this, "deploy_pipeline_environments", false);
  public get deployPipelineEnvironments() {
    return this._deployPipelineEnvironments;
  }

  // deploy_pipeline_id - computed: false, optional: false, required: true
  private _deployPipelineId?: string; 
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }
  public set deployPipelineId(value: string) {
    this._deployPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPipelineIdInput() {
    return this._deployPipelineId;
  }

  // deploy_stage_id - computed: true, optional: true, required: false
  private _deployStageId?: string; 
  public get deployStageId() {
    return this.getStringAttribute('deploy_stage_id');
  }
  public set deployStageId(value: string) {
    this._deployStageId = value;
  }
  public resetDeployStageId() {
    this._deployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStageIdInput() {
    return this._deployStageId;
  }

  // deployment_execution_progress - computed: true, optional: false, required: false
  private _deploymentExecutionProgress = new DevopsDeploymentDeploymentExecutionProgressList(this, "deployment_execution_progress", false);
  public get deploymentExecutionProgress() {
    return this._deploymentExecutionProgress;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // previous_deployment_id - computed: true, optional: true, required: false
  private _previousDeploymentId?: string; 
  public get previousDeploymentId() {
    return this.getStringAttribute('previous_deployment_id');
  }
  public set previousDeploymentId(value: string) {
    this._previousDeploymentId = value;
  }
  public resetPreviousDeploymentId() {
    this._previousDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousDeploymentIdInput() {
    return this._previousDeploymentId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // trigger_new_devops_deployment - computed: false, optional: true, required: false
  private _triggerNewDevopsDeployment?: boolean | cdktf.IResolvable; 
  public get triggerNewDevopsDeployment() {
    return this.getBooleanAttribute('trigger_new_devops_deployment');
  }
  public set triggerNewDevopsDeployment(value: boolean | cdktf.IResolvable) {
    this._triggerNewDevopsDeployment = value;
  }
  public resetTriggerNewDevopsDeployment() {
    this._triggerNewDevopsDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNewDevopsDeploymentInput() {
    return this._triggerNewDevopsDeployment;
  }

  // deploy_artifact_override_arguments - computed: false, optional: true, required: false
  private _deployArtifactOverrideArguments = new DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference(this, "deploy_artifact_override_arguments");
  public get deployArtifactOverrideArguments() {
    return this._deployArtifactOverrideArguments;
  }
  public putDeployArtifactOverrideArguments(value: DevopsDeploymentDeployArtifactOverrideArguments) {
    this._deployArtifactOverrideArguments.internalValue = value;
  }
  public resetDeployArtifactOverrideArguments() {
    this._deployArtifactOverrideArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactOverrideArgumentsInput() {
    return this._deployArtifactOverrideArguments.internalValue;
  }

  // deploy_stage_override_arguments - computed: false, optional: true, required: false
  private _deployStageOverrideArguments = new DevopsDeploymentDeployStageOverrideArgumentsOutputReference(this, "deploy_stage_override_arguments");
  public get deployStageOverrideArguments() {
    return this._deployStageOverrideArguments;
  }
  public putDeployStageOverrideArguments(value: DevopsDeploymentDeployStageOverrideArguments) {
    this._deployStageOverrideArguments.internalValue = value;
  }
  public resetDeployStageOverrideArguments() {
    this._deployStageOverrideArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStageOverrideArgumentsInput() {
    return this._deployStageOverrideArguments.internalValue;
  }

  // deployment_arguments - computed: false, optional: true, required: false
  private _deploymentArguments = new DevopsDeploymentDeploymentArgumentsOutputReference(this, "deployment_arguments");
  public get deploymentArguments() {
    return this._deploymentArguments;
  }
  public putDeploymentArguments(value: DevopsDeploymentDeploymentArguments) {
    this._deploymentArguments.internalValue = value;
  }
  public resetDeploymentArguments() {
    this._deploymentArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentArgumentsInput() {
    return this._deploymentArguments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_pipeline_id: cdktf.stringToTerraform(this._deployPipelineId),
      deploy_stage_id: cdktf.stringToTerraform(this._deployStageId),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      previous_deployment_id: cdktf.stringToTerraform(this._previousDeploymentId),
      trigger_new_devops_deployment: cdktf.booleanToTerraform(this._triggerNewDevopsDeployment),
      deploy_artifact_override_arguments: devopsDeploymentDeployArtifactOverrideArgumentsToTerraform(this._deployArtifactOverrideArguments.internalValue),
      deploy_stage_override_arguments: devopsDeploymentDeployStageOverrideArgumentsToTerraform(this._deployStageOverrideArguments.internalValue),
      deployment_arguments: devopsDeploymentDeploymentArgumentsToTerraform(this._deploymentArguments.internalValue),
      timeouts: devopsDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._deployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      previous_deployment_id: {
        value: cdktf.stringToHclTerraform(this._previousDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_new_devops_deployment: {
        value: cdktf.booleanToHclTerraform(this._triggerNewDevopsDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_artifact_override_arguments: {
        value: devopsDeploymentDeployArtifactOverrideArgumentsToHclTerraform(this._deployArtifactOverrideArguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeploymentDeployArtifactOverrideArgumentsList",
      },
      deploy_stage_override_arguments: {
        value: devopsDeploymentDeployStageOverrideArgumentsToHclTerraform(this._deployStageOverrideArguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeploymentDeployStageOverrideArgumentsList",
      },
      deployment_arguments: {
        value: devopsDeploymentDeploymentArgumentsToHclTerraform(this._deploymentArguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeploymentDeploymentArgumentsList",
      },
      timeouts: {
        value: devopsDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
