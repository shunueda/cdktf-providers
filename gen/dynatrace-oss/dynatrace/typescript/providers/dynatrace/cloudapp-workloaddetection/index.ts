// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudappWorkloaddetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#id CloudappWorkloaddetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cloud_foundry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#cloud_foundry CloudappWorkloaddetection#cloud_foundry}
  */
  readonly cloudFoundry: CloudappWorkloaddetectionCloudFoundry;
  /**
  * docker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#docker CloudappWorkloaddetection#docker}
  */
  readonly docker: CloudappWorkloaddetectionDocker;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#kubernetes CloudappWorkloaddetection#kubernetes}
  */
  readonly kubernetes: CloudappWorkloaddetectionKubernetes;
  /**
  * serverless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#serverless CloudappWorkloaddetection#serverless}
  */
  readonly serverless?: CloudappWorkloaddetectionServerless;
}
export interface CloudappWorkloaddetectionCloudFoundry {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#enabled CloudappWorkloaddetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudappWorkloaddetectionCloudFoundryToTerraform(struct?: CloudappWorkloaddetectionCloudFoundryOutputReference | CloudappWorkloaddetectionCloudFoundry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudappWorkloaddetectionCloudFoundryToHclTerraform(struct?: CloudappWorkloaddetectionCloudFoundryOutputReference | CloudappWorkloaddetectionCloudFoundry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionCloudFoundryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionCloudFoundry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionCloudFoundry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudappWorkloaddetectionDocker {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#enabled CloudappWorkloaddetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudappWorkloaddetectionDockerToTerraform(struct?: CloudappWorkloaddetectionDockerOutputReference | CloudappWorkloaddetectionDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudappWorkloaddetectionDockerToHclTerraform(struct?: CloudappWorkloaddetectionDockerOutputReference | CloudappWorkloaddetectionDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionDocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles {
  /**
  * E.g. "cloud-credential-operator-" for "cloud-credential-operator-5ff6dbff57-gszgq"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inc_basepod CloudappWorkloaddetection#inc_basepod}
  */
  readonly incBasepod: boolean | cdktf.IResolvable;
  /**
  * Container name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inc_container CloudappWorkloaddetection#inc_container}
  */
  readonly incContainer: boolean | cdktf.IResolvable;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inc_namespace CloudappWorkloaddetection#inc_namespace}
  */
  readonly incNamespace: boolean | cdktf.IResolvable;
  /**
  * If Product is enabled and has no value, it defaults to Base pod name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inc_product CloudappWorkloaddetection#inc_product}
  */
  readonly incProduct: boolean | cdktf.IResolvable;
  /**
  * Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inc_stage CloudappWorkloaddetection#inc_stage}
  */
  readonly incStage: boolean | cdktf.IResolvable;
}

export function cloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesToTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesOutputReference | CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inc_basepod: cdktf.booleanToTerraform(struct!.incBasepod),
    inc_container: cdktf.booleanToTerraform(struct!.incContainer),
    inc_namespace: cdktf.booleanToTerraform(struct!.incNamespace),
    inc_product: cdktf.booleanToTerraform(struct!.incProduct),
    inc_stage: cdktf.booleanToTerraform(struct!.incStage),
  }
}


export function cloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesToHclTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesOutputReference | CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inc_basepod: {
      value: cdktf.booleanToHclTerraform(struct!.incBasepod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inc_container: {
      value: cdktf.booleanToHclTerraform(struct!.incContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inc_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.incNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inc_product: {
      value: cdktf.booleanToHclTerraform(struct!.incProduct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inc_stage: {
      value: cdktf.booleanToHclTerraform(struct!.incStage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incBasepod !== undefined) {
      hasAnyValues = true;
      internalValueResult.incBasepod = this._incBasepod;
    }
    if (this._incContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.incContainer = this._incContainer;
    }
    if (this._incNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.incNamespace = this._incNamespace;
    }
    if (this._incProduct !== undefined) {
      hasAnyValues = true;
      internalValueResult.incProduct = this._incProduct;
    }
    if (this._incStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.incStage = this._incStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incBasepod = undefined;
      this._incContainer = undefined;
      this._incNamespace = undefined;
      this._incProduct = undefined;
      this._incStage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incBasepod = value.incBasepod;
      this._incContainer = value.incContainer;
      this._incNamespace = value.incNamespace;
      this._incProduct = value.incProduct;
      this._incStage = value.incStage;
    }
  }

  // inc_basepod - computed: false, optional: false, required: true
  private _incBasepod?: boolean | cdktf.IResolvable; 
  public get incBasepod() {
    return this.getBooleanAttribute('inc_basepod');
  }
  public set incBasepod(value: boolean | cdktf.IResolvable) {
    this._incBasepod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incBasepodInput() {
    return this._incBasepod;
  }

  // inc_container - computed: false, optional: false, required: true
  private _incContainer?: boolean | cdktf.IResolvable; 
  public get incContainer() {
    return this.getBooleanAttribute('inc_container');
  }
  public set incContainer(value: boolean | cdktf.IResolvable) {
    this._incContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incContainerInput() {
    return this._incContainer;
  }

  // inc_namespace - computed: false, optional: false, required: true
  private _incNamespace?: boolean | cdktf.IResolvable; 
  public get incNamespace() {
    return this.getBooleanAttribute('inc_namespace');
  }
  public set incNamespace(value: boolean | cdktf.IResolvable) {
    this._incNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incNamespaceInput() {
    return this._incNamespace;
  }

  // inc_product - computed: false, optional: false, required: true
  private _incProduct?: boolean | cdktf.IResolvable; 
  public get incProduct() {
    return this.getBooleanAttribute('inc_product');
  }
  public set incProduct(value: boolean | cdktf.IResolvable) {
    this._incProduct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incProductInput() {
    return this._incProduct;
  }

  // inc_stage - computed: false, optional: false, required: true
  private _incStage?: boolean | cdktf.IResolvable; 
  public get incStage() {
    return this.getBooleanAttribute('inc_stage');
  }
  public set incStage(value: boolean | cdktf.IResolvable) {
    this._incStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incStageInput() {
    return this._incStage;
  }
}
export interface CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter {
  /**
  * Possible Values: `CONTAINS`, `ENDS`, `EQUALS`, `EXISTS`, `NOT_CONTAINS`, `NOT_ENDS`, `NOT_EQUALS`, `NOT_STARTS`, `STARTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#match_operator CloudappWorkloaddetection#match_operator}
  */
  readonly matchOperator: string;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#namespace CloudappWorkloaddetection#namespace}
  */
  readonly namespace?: string;
}

export function cloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterToTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterOutputReference | CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function cloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterToHclTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterOutputReference | CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchOperator = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchOperator = value.matchOperator;
      this._namespace = value.namespace;
    }
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface CloudappWorkloaddetectionKubernetesFiltersFilter {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#enabled CloudappWorkloaddetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * inclusion_toggles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#inclusion_toggles CloudappWorkloaddetection#inclusion_toggles}
  */
  readonly inclusionToggles: CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles;
  /**
  * match_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#match_filter CloudappWorkloaddetection#match_filter}
  */
  readonly matchFilter: CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter;
}

export function cloudappWorkloaddetectionKubernetesFiltersFilterToTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inclusion_toggles: cloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesToTerraform(struct!.inclusionToggles),
    match_filter: cloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterToTerraform(struct!.matchFilter),
  }
}


export function cloudappWorkloaddetectionKubernetesFiltersFilterToHclTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inclusion_toggles: {
      value: cloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesToHclTerraform(struct!.inclusionToggles),
      isBlock: true,
      type: "list",
      storageClassType: "CloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesList",
    },
    match_filter: {
      value: cloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterToHclTerraform(struct!.matchFilter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionKubernetesFiltersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudappWorkloaddetectionKubernetesFiltersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inclusionToggles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionToggles = this._inclusionToggles?.internalValue;
    }
    if (this._matchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFilter = this._matchFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionKubernetesFiltersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._inclusionToggles.internalValue = undefined;
      this._matchFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._inclusionToggles.internalValue = value.inclusionToggles;
      this._matchFilter.internalValue = value.matchFilter;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // inclusion_toggles - computed: false, optional: false, required: true
  private _inclusionToggles = new CloudappWorkloaddetectionKubernetesFiltersFilterInclusionTogglesOutputReference(this, "inclusion_toggles");
  public get inclusionToggles() {
    return this._inclusionToggles;
  }
  public putInclusionToggles(value: CloudappWorkloaddetectionKubernetesFiltersFilterInclusionToggles) {
    this._inclusionToggles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionTogglesInput() {
    return this._inclusionToggles.internalValue;
  }

  // match_filter - computed: false, optional: false, required: true
  private _matchFilter = new CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilterOutputReference(this, "match_filter");
  public get matchFilter() {
    return this._matchFilter;
  }
  public putMatchFilter(value: CloudappWorkloaddetectionKubernetesFiltersFilterMatchFilter) {
    this._matchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFilterInput() {
    return this._matchFilter.internalValue;
  }
}

export class CloudappWorkloaddetectionKubernetesFiltersFilterList extends cdktf.ComplexList {
  public internalValue? : CloudappWorkloaddetectionKubernetesFiltersFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudappWorkloaddetectionKubernetesFiltersFilterOutputReference {
    return new CloudappWorkloaddetectionKubernetesFiltersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudappWorkloaddetectionKubernetesFilters {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#filter CloudappWorkloaddetection#filter}
  */
  readonly filter: CloudappWorkloaddetectionKubernetesFiltersFilter[] | cdktf.IResolvable;
}

export function cloudappWorkloaddetectionKubernetesFiltersToTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersOutputReference | CloudappWorkloaddetectionKubernetesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(cloudappWorkloaddetectionKubernetesFiltersFilterToTerraform, true)(struct!.filter),
  }
}


export function cloudappWorkloaddetectionKubernetesFiltersToHclTerraform(struct?: CloudappWorkloaddetectionKubernetesFiltersOutputReference | CloudappWorkloaddetectionKubernetesFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(cloudappWorkloaddetectionKubernetesFiltersFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudappWorkloaddetectionKubernetesFiltersFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionKubernetesFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionKubernetesFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionKubernetesFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CloudappWorkloaddetectionKubernetesFiltersFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CloudappWorkloaddetectionKubernetesFiltersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface CloudappWorkloaddetectionKubernetes {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#enabled CloudappWorkloaddetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#filters CloudappWorkloaddetection#filters}
  */
  readonly filters?: CloudappWorkloaddetectionKubernetesFilters;
}

export function cloudappWorkloaddetectionKubernetesToTerraform(struct?: CloudappWorkloaddetectionKubernetesOutputReference | CloudappWorkloaddetectionKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filters: cloudappWorkloaddetectionKubernetesFiltersToTerraform(struct!.filters),
  }
}


export function cloudappWorkloaddetectionKubernetesToHclTerraform(struct?: CloudappWorkloaddetectionKubernetesOutputReference | CloudappWorkloaddetectionKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cloudappWorkloaddetectionKubernetesFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "CloudappWorkloaddetectionKubernetesFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._filters.internalValue = value.filters;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new CloudappWorkloaddetectionKubernetesFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: CloudappWorkloaddetectionKubernetesFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface CloudappWorkloaddetectionServerless {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#enabled CloudappWorkloaddetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudappWorkloaddetectionServerlessToTerraform(struct?: CloudappWorkloaddetectionServerlessOutputReference | CloudappWorkloaddetectionServerless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudappWorkloaddetectionServerlessToHclTerraform(struct?: CloudappWorkloaddetectionServerlessOutputReference | CloudappWorkloaddetectionServerless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudappWorkloaddetectionServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudappWorkloaddetectionServerless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudappWorkloaddetectionServerless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection dynatrace_cloudapp_workloaddetection}
*/
export class CloudappWorkloaddetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_cloudapp_workloaddetection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudappWorkloaddetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudappWorkloaddetection to import
  * @param importFromId The id of the existing CloudappWorkloaddetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudappWorkloaddetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_cloudapp_workloaddetection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/cloudapp_workloaddetection dynatrace_cloudapp_workloaddetection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudappWorkloaddetectionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudappWorkloaddetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_cloudapp_workloaddetection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._cloudFoundry.internalValue = config.cloudFoundry;
    this._docker.internalValue = config.docker;
    this._kubernetes.internalValue = config.kubernetes;
    this._serverless.internalValue = config.serverless;
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

  // cloud_foundry - computed: false, optional: false, required: true
  private _cloudFoundry = new CloudappWorkloaddetectionCloudFoundryOutputReference(this, "cloud_foundry");
  public get cloudFoundry() {
    return this._cloudFoundry;
  }
  public putCloudFoundry(value: CloudappWorkloaddetectionCloudFoundry) {
    this._cloudFoundry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFoundryInput() {
    return this._cloudFoundry.internalValue;
  }

  // docker - computed: false, optional: false, required: true
  private _docker = new CloudappWorkloaddetectionDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: CloudappWorkloaddetectionDocker) {
    this._docker.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // kubernetes - computed: false, optional: false, required: true
  private _kubernetes = new CloudappWorkloaddetectionKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: CloudappWorkloaddetectionKubernetes) {
    this._kubernetes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless = new CloudappWorkloaddetectionServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: CloudappWorkloaddetectionServerless) {
    this._serverless.internalValue = value;
  }
  public resetServerless() {
    this._serverless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      cloud_foundry: cloudappWorkloaddetectionCloudFoundryToTerraform(this._cloudFoundry.internalValue),
      docker: cloudappWorkloaddetectionDockerToTerraform(this._docker.internalValue),
      kubernetes: cloudappWorkloaddetectionKubernetesToTerraform(this._kubernetes.internalValue),
      serverless: cloudappWorkloaddetectionServerlessToTerraform(this._serverless.internalValue),
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
      cloud_foundry: {
        value: cloudappWorkloaddetectionCloudFoundryToHclTerraform(this._cloudFoundry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudappWorkloaddetectionCloudFoundryList",
      },
      docker: {
        value: cloudappWorkloaddetectionDockerToHclTerraform(this._docker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudappWorkloaddetectionDockerList",
      },
      kubernetes: {
        value: cloudappWorkloaddetectionKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudappWorkloaddetectionKubernetesList",
      },
      serverless: {
        value: cloudappWorkloaddetectionServerlessToHclTerraform(this._serverless.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudappWorkloaddetectionServerlessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
