// https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEcDeploymentTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filters for a deployment template with this id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates#id DataEcDeploymentTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region to select. For Elastic Cloud Enterprise (ECE) installations, use `ece-region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates#region DataEcDeploymentTemplates#region}
  */
  readonly region: string;
  /**
  * Enable to also show deprecated deployment templates. (Set to false by default.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates#show_deprecated DataEcDeploymentTemplates#show_deprecated}
  */
  readonly showDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Filters for deployment templates compatible with this stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates#stack_version DataEcDeploymentTemplates#stack_version}
  */
  readonly stackVersion?: string;
}
export interface DataEcDeploymentTemplatesTemplatesApm {
}

export function dataEcDeploymentTemplatesTemplatesApmToTerraform(struct?: DataEcDeploymentTemplatesTemplatesApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesApmToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesApmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesApm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesApm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchCold {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchColdToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchColdToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchColdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchCold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchCold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchColdAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchCoordinating {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinating): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinating): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchCoordinating | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchCoordinating | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchFrozen {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchFrozenToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchFrozen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchFrozenToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchFrozen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchFrozenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchFrozen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchFrozen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchFrozenAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchHot {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchHotToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchHot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchHotToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchHot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchHotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchHot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchHot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchHotAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchMaster {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchMasterToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMaster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchMasterToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMaster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchMaster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchMaster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchMasterAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchMl {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchMlToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchMlToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchMl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchMlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchMl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchMl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchMlAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscaling {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscalingToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscalingToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // max_size_resource - computed: true, optional: false, required: false
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // min_size_resource - computed: true, optional: false, required: false
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearchWarm {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchWarmToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchWarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchWarmToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearchWarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchWarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearchWarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearchWarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataEcDeploymentTemplatesTemplatesElasticsearchWarmAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesElasticsearch {
}

export function dataEcDeploymentTemplatesTemplatesElasticsearchToTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesElasticsearchToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // cold - computed: true, optional: false, required: false
  private _cold = new DataEcDeploymentTemplatesTemplatesElasticsearchColdOutputReference(this, "cold");
  public get cold() {
    return this._cold;
  }

  // coordinating - computed: true, optional: false, required: false
  private _coordinating = new DataEcDeploymentTemplatesTemplatesElasticsearchCoordinatingOutputReference(this, "coordinating");
  public get coordinating() {
    return this._coordinating;
  }

  // frozen - computed: true, optional: false, required: false
  private _frozen = new DataEcDeploymentTemplatesTemplatesElasticsearchFrozenOutputReference(this, "frozen");
  public get frozen() {
    return this._frozen;
  }

  // hot - computed: true, optional: false, required: false
  private _hot = new DataEcDeploymentTemplatesTemplatesElasticsearchHotOutputReference(this, "hot");
  public get hot() {
    return this._hot;
  }

  // master - computed: true, optional: false, required: false
  private _master = new DataEcDeploymentTemplatesTemplatesElasticsearchMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }

  // ml - computed: true, optional: false, required: false
  private _ml = new DataEcDeploymentTemplatesTemplatesElasticsearchMlOutputReference(this, "ml");
  public get ml() {
    return this._ml;
  }

  // warm - computed: true, optional: false, required: false
  private _warm = new DataEcDeploymentTemplatesTemplatesElasticsearchWarmOutputReference(this, "warm");
  public get warm() {
    return this._warm;
  }
}
export interface DataEcDeploymentTemplatesTemplatesEnterpriseSearch {
}

export function dataEcDeploymentTemplatesTemplatesEnterpriseSearchToTerraform(struct?: DataEcDeploymentTemplatesTemplatesEnterpriseSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesEnterpriseSearchToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesEnterpriseSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesEnterpriseSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesEnterpriseSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesEnterpriseSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesIntegrationsServer {
}

export function dataEcDeploymentTemplatesTemplatesIntegrationsServerToTerraform(struct?: DataEcDeploymentTemplatesTemplatesIntegrationsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesIntegrationsServerToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesIntegrationsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesIntegrationsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesIntegrationsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesIntegrationsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplatesKibana {
}

export function dataEcDeploymentTemplatesTemplatesKibanaToTerraform(struct?: DataEcDeploymentTemplatesTemplatesKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesKibanaToHclTerraform(struct?: DataEcDeploymentTemplatesTemplatesKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesKibanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEcDeploymentTemplatesTemplatesKibana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplatesKibana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_sizes - computed: true, optional: false, required: false
  public get availableSizes() {
    return this.getListAttribute('available_sizes');
  }

  // default_size - computed: true, optional: false, required: false
  public get defaultSize() {
    return this.getStringAttribute('default_size');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_configuration_version - computed: true, optional: false, required: false
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }

  // size_resource - computed: true, optional: false, required: false
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
}
export interface DataEcDeploymentTemplatesTemplates {
}

export function dataEcDeploymentTemplatesTemplatesToTerraform(struct?: DataEcDeploymentTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentTemplatesTemplatesToHclTerraform(struct?: DataEcDeploymentTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentTemplatesTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentTemplatesTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentTemplatesTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm - computed: true, optional: false, required: false
  private _apm = new DataEcDeploymentTemplatesTemplatesApmOutputReference(this, "apm");
  public get apm() {
    return this._apm;
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // elasticsearch - computed: true, optional: false, required: false
  private _elasticsearch = new DataEcDeploymentTemplatesTemplatesElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }

  // enterprise_search - computed: true, optional: false, required: false
  private _enterpriseSearch = new DataEcDeploymentTemplatesTemplatesEnterpriseSearchOutputReference(this, "enterprise_search");
  public get enterpriseSearch() {
    return this._enterpriseSearch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrations_server - computed: true, optional: false, required: false
  private _integrationsServer = new DataEcDeploymentTemplatesTemplatesIntegrationsServerOutputReference(this, "integrations_server");
  public get integrationsServer() {
    return this._integrationsServer;
  }

  // kibana - computed: true, optional: false, required: false
  private _kibana = new DataEcDeploymentTemplatesTemplatesKibanaOutputReference(this, "kibana");
  public get kibana() {
    return this._kibana;
  }

  // min_stack_version - computed: true, optional: false, required: false
  public get minStackVersion() {
    return this.getStringAttribute('min_stack_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataEcDeploymentTemplatesTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataEcDeploymentTemplatesTemplatesOutputReference {
    return new DataEcDeploymentTemplatesTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates ec_deployment_templates}
*/
export class DataEcDeploymentTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEcDeploymentTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEcDeploymentTemplates to import
  * @param importFromId The id of the existing DataEcDeploymentTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEcDeploymentTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.4/docs/data-sources/deployment_templates ec_deployment_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEcDeploymentTemplatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataEcDeploymentTemplatesConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment_templates',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.4',
        providerVersionConstraint: '0.12.4'
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
    this._region = config.region;
    this._showDeprecated = config.showDeprecated;
    this._stackVersion = config.stackVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // show_deprecated - computed: false, optional: true, required: false
  private _showDeprecated?: boolean | cdktf.IResolvable; 
  public get showDeprecated() {
    return this.getBooleanAttribute('show_deprecated');
  }
  public set showDeprecated(value: boolean | cdktf.IResolvable) {
    this._showDeprecated = value;
  }
  public resetShowDeprecated() {
    this._showDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeprecatedInput() {
    return this._showDeprecated;
  }

  // stack_version - computed: false, optional: true, required: false
  private _stackVersion?: string; 
  public get stackVersion() {
    return this.getStringAttribute('stack_version');
  }
  public set stackVersion(value: string) {
    this._stackVersion = value;
  }
  public resetStackVersion() {
    this._stackVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackVersionInput() {
    return this._stackVersion;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new DataEcDeploymentTemplatesTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      show_deprecated: cdktf.booleanToTerraform(this._showDeprecated),
      stack_version: cdktf.stringToTerraform(this._stackVersion),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_deprecated: {
        value: cdktf.booleanToHclTerraform(this._showDeprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_version: {
        value: cdktf.stringToHclTerraform(this._stackVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
