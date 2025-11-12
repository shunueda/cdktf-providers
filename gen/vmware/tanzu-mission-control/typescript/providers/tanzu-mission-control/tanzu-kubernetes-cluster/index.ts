// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TanzuKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#id TanzuKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#management_cluster_name TanzuKubernetesCluster#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#name TanzuKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#provisioner_name TanzuKubernetesCluster#provisioner_name}
  */
  readonly provisionerName: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#meta TanzuKubernetesCluster#meta}
  */
  readonly meta?: TanzuKubernetesClusterMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#spec TanzuKubernetesCluster#spec}
  */
  readonly spec?: TanzuKubernetesClusterSpec;
  /**
  * timeout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#timeout_policy TanzuKubernetesCluster#timeout_policy}
  */
  readonly timeoutPolicy?: TanzuKubernetesClusterTimeoutPolicy;
}
export interface TanzuKubernetesClusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#annotations TanzuKubernetesCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#description TanzuKubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#labels TanzuKubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function tanzuKubernetesClusterMetaToTerraform(struct?: TanzuKubernetesClusterMetaOutputReference | TanzuKubernetesClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function tanzuKubernetesClusterMetaToHclTerraform(struct?: TanzuKubernetesClusterMetaOutputReference | TanzuKubernetesClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface TanzuKubernetesClusterSpecTopologyControlPlaneMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#annotations TanzuKubernetesCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#description TanzuKubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#labels TanzuKubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function tanzuKubernetesClusterSpecTopologyControlPlaneMetaToTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference | TanzuKubernetesClusterSpecTopologyControlPlaneMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function tanzuKubernetesClusterSpecTopologyControlPlaneMetaToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference | TanzuKubernetesClusterSpecTopologyControlPlaneMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyControlPlaneMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyControlPlaneMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface TanzuKubernetesClusterSpecTopologyControlPlaneOsImage {
  /**
  * The architecture of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#arch TanzuKubernetesCluster#arch}
  */
  readonly arch: string;
  /**
  * The name of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#name TanzuKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * The version of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#version TanzuKubernetesCluster#version}
  */
  readonly version: string;
}

export function tanzuKubernetesClusterSpecTopologyControlPlaneOsImageToTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference | TanzuKubernetesClusterSpecTopologyControlPlaneOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function tanzuKubernetesClusterSpecTopologyControlPlaneOsImageToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference | TanzuKubernetesClusterSpecTopologyControlPlaneOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyControlPlaneOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyControlPlaneOsImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arch = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arch = value.arch;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface TanzuKubernetesClusterSpecTopologyControlPlane {
  /**
  * Overrides can be used to override cluster level variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#overrides TanzuKubernetesCluster#overrides}
  */
  readonly overrides?: string;
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#replicas TanzuKubernetesCluster#replicas}
  */
  readonly replicas: number;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#meta TanzuKubernetesCluster#meta}
  */
  readonly meta?: TanzuKubernetesClusterSpecTopologyControlPlaneMeta;
  /**
  * os_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#os_image TanzuKubernetesCluster#os_image}
  */
  readonly osImage?: TanzuKubernetesClusterSpecTopologyControlPlaneOsImage;
}

export function tanzuKubernetesClusterSpecTopologyControlPlaneToTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneOutputReference | TanzuKubernetesClusterSpecTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overrides: cdktf.stringToTerraform(struct!.overrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    meta: tanzuKubernetesClusterSpecTopologyControlPlaneMetaToTerraform(struct!.meta),
    os_image: tanzuKubernetesClusterSpecTopologyControlPlaneOsImageToTerraform(struct!.osImage),
  }
}


export function tanzuKubernetesClusterSpecTopologyControlPlaneToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyControlPlaneOutputReference | TanzuKubernetesClusterSpecTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overrides: {
      value: cdktf.stringToHclTerraform(struct!.overrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    meta: {
      value: tanzuKubernetesClusterSpecTopologyControlPlaneMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyControlPlaneMetaList",
    },
    os_image: {
      value: tanzuKubernetesClusterSpecTopologyControlPlaneOsImageToHclTerraform(struct!.osImage),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyControlPlaneOsImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    if (this._osImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImage = this._osImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrides = undefined;
      this._replicas = undefined;
      this._meta.internalValue = undefined;
      this._osImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrides = value.overrides;
      this._replicas = value.replicas;
      this._meta.internalValue = value.meta;
      this._osImage.internalValue = value.osImage;
    }
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: string; 
  public get overrides() {
    return this.getStringAttribute('overrides');
  }
  public set overrides(value: string) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new TanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: TanzuKubernetesClusterSpecTopologyControlPlaneMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // os_image - computed: false, optional: true, required: false
  private _osImage = new TanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference(this, "os_image");
  public get osImage() {
    return this._osImage;
  }
  public putOsImage(value: TanzuKubernetesClusterSpecTopologyControlPlaneOsImage) {
    this._osImage.internalValue = value;
  }
  public resetOsImage() {
    this._osImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageInput() {
    return this._osImage.internalValue;
  }
}
export interface TanzuKubernetesClusterSpecTopologyCoreAddon {
  /**
  * Provider of core add on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#provider TanzuKubernetesCluster#provider}
  */
  readonly provider: string;
  /**
  * Type of core add on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#type TanzuKubernetesCluster#type}
  */
  readonly type: string;
}

export function tanzuKubernetesClusterSpecTopologyCoreAddonToTerraform(struct?: TanzuKubernetesClusterSpecTopologyCoreAddon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tanzuKubernetesClusterSpecTopologyCoreAddonToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyCoreAddon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyCoreAddonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TanzuKubernetesClusterSpecTopologyCoreAddon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyCoreAddon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._type = value.type;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TanzuKubernetesClusterSpecTopologyCoreAddonList extends cdktf.ComplexList {
  public internalValue? : TanzuKubernetesClusterSpecTopologyCoreAddon[] | cdktf.IResolvable

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
  public get(index: number): TanzuKubernetesClusterSpecTopologyCoreAddonOutputReference {
    return new TanzuKubernetesClusterSpecTopologyCoreAddonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TanzuKubernetesClusterSpecTopologyNetwork {
  /**
  * Pod CIDR for Kubernetes pods defaults to 192.168.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#pod_cidr_blocks TanzuKubernetesCluster#pod_cidr_blocks}
  */
  readonly podCidrBlocks?: string[];
  /**
  * Service CIDR for kubernetes services defaults to 10.96.0.0/12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#service_cidr_blocks TanzuKubernetesCluster#service_cidr_blocks}
  */
  readonly serviceCidrBlocks?: string[];
  /**
  * Domain name for services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#service_domain TanzuKubernetesCluster#service_domain}
  */
  readonly serviceDomain?: string;
}

export function tanzuKubernetesClusterSpecTopologyNetworkToTerraform(struct?: TanzuKubernetesClusterSpecTopologyNetworkOutputReference | TanzuKubernetesClusterSpecTopologyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrBlocks),
    service_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceCidrBlocks),
    service_domain: cdktf.stringToTerraform(struct!.serviceDomain),
  }
}


export function tanzuKubernetesClusterSpecTopologyNetworkToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyNetworkOutputReference | TanzuKubernetesClusterSpecTopologyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_domain: {
      value: cdktf.stringToHclTerraform(struct!.serviceDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrBlocks = this._podCidrBlocks;
    }
    if (this._serviceCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidrBlocks = this._serviceCidrBlocks;
    }
    if (this._serviceDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDomain = this._serviceDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podCidrBlocks = undefined;
      this._serviceCidrBlocks = undefined;
      this._serviceDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podCidrBlocks = value.podCidrBlocks;
      this._serviceCidrBlocks = value.serviceCidrBlocks;
      this._serviceDomain = value.serviceDomain;
    }
  }

  // pod_cidr_blocks - computed: false, optional: true, required: false
  private _podCidrBlocks?: string[]; 
  public get podCidrBlocks() {
    return this.getListAttribute('pod_cidr_blocks');
  }
  public set podCidrBlocks(value: string[]) {
    this._podCidrBlocks = value;
  }
  public resetPodCidrBlocks() {
    this._podCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrBlocksInput() {
    return this._podCidrBlocks;
  }

  // service_cidr_blocks - computed: false, optional: true, required: false
  private _serviceCidrBlocks?: string[]; 
  public get serviceCidrBlocks() {
    return this.getListAttribute('service_cidr_blocks');
  }
  public set serviceCidrBlocks(value: string[]) {
    this._serviceCidrBlocks = value;
  }
  public resetServiceCidrBlocks() {
    this._serviceCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrBlocksInput() {
    return this._serviceCidrBlocks;
  }

  // service_domain - computed: false, optional: true, required: false
  private _serviceDomain?: string; 
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }
  public set serviceDomain(value: string) {
    this._serviceDomain = value;
  }
  public resetServiceDomain() {
    this._serviceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainInput() {
    return this._serviceDomain;
  }
}
export interface TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#annotations TanzuKubernetesCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#labels TanzuKubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function tanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference | TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function tanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference | TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage {
  /**
  * The architecture of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#arch TanzuKubernetesCluster#arch}
  */
  readonly arch: string;
  /**
  * The name of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#name TanzuKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * The version of the OS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#version TanzuKubernetesCluster#version}
  */
  readonly version: string;
}

export function tanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference | TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function tanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference | TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arch = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arch = value.arch;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface TanzuKubernetesClusterSpecTopologyNodepoolSpec {
  /**
  * The failure domain the machines will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#failure_domain TanzuKubernetesCluster#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Overrides can be used to override cluster level variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#overrides TanzuKubernetesCluster#overrides}
  */
  readonly overrides?: string;
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#replicas TanzuKubernetesCluster#replicas}
  */
  readonly replicas: number;
  /**
  * The name of the machine deployment class used to create the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#worker_class TanzuKubernetesCluster#worker_class}
  */
  readonly workerClass: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#meta TanzuKubernetesCluster#meta}
  */
  readonly meta?: TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta;
  /**
  * os_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#os_image TanzuKubernetesCluster#os_image}
  */
  readonly osImage?: TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage;
}

export function tanzuKubernetesClusterSpecTopologyNodepoolSpecToTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    overrides: cdktf.stringToTerraform(struct!.overrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    worker_class: cdktf.stringToTerraform(struct!.workerClass),
    meta: tanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToTerraform(struct!.meta),
    os_image: tanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToTerraform(struct!.osImage),
  }
}


export function tanzuKubernetesClusterSpecTopologyNodepoolSpecToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepoolSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: cdktf.stringToHclTerraform(struct!.overrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_class: {
      value: cdktf.stringToHclTerraform(struct!.workerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta: {
      value: tanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyNodepoolSpecMetaList",
    },
    os_image: {
      value: tanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToHclTerraform(struct!.osImage),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TanzuKubernetesClusterSpecTopologyNodepoolSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._workerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerClass = this._workerClass;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    if (this._osImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImage = this._osImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyNodepoolSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureDomain = undefined;
      this._overrides = undefined;
      this._replicas = undefined;
      this._workerClass = undefined;
      this._meta.internalValue = undefined;
      this._osImage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureDomain = value.failureDomain;
      this._overrides = value.overrides;
      this._replicas = value.replicas;
      this._workerClass = value.workerClass;
      this._meta.internalValue = value.meta;
      this._osImage.internalValue = value.osImage;
    }
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: string; 
  public get overrides() {
    return this.getStringAttribute('overrides');
  }
  public set overrides(value: string) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // worker_class - computed: false, optional: false, required: true
  private _workerClass?: string; 
  public get workerClass() {
    return this.getStringAttribute('worker_class');
  }
  public set workerClass(value: string) {
    this._workerClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerClassInput() {
    return this._workerClass;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new TanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: TanzuKubernetesClusterSpecTopologyNodepoolSpecMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // os_image - computed: false, optional: true, required: false
  private _osImage = new TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference(this, "os_image");
  public get osImage() {
    return this._osImage;
  }
  public putOsImage(value: TanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage) {
    this._osImage.internalValue = value;
  }
  public resetOsImage() {
    this._osImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageInput() {
    return this._osImage.internalValue;
  }
}

export class TanzuKubernetesClusterSpecTopologyNodepoolSpecList extends cdktf.ComplexList {
  public internalValue? : TanzuKubernetesClusterSpecTopologyNodepoolSpec[] | cdktf.IResolvable

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
  public get(index: number): TanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference {
    return new TanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TanzuKubernetesClusterSpecTopologyNodepool {
  /**
  * Description of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#description TanzuKubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#name TanzuKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#spec TanzuKubernetesCluster#spec}
  */
  readonly spec: TanzuKubernetesClusterSpecTopologyNodepoolSpec[] | cdktf.IResolvable;
}

export function tanzuKubernetesClusterSpecTopologyNodepoolToTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    spec: cdktf.listMapper(tanzuKubernetesClusterSpecTopologyNodepoolSpecToTerraform, true)(struct!.spec),
  }
}


export function tanzuKubernetesClusterSpecTopologyNodepoolToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyNodepool | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(tanzuKubernetesClusterSpecTopologyNodepoolSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyNodepoolSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyNodepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TanzuKubernetesClusterSpecTopologyNodepool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TanzuKubernetesClusterSpecTopologyNodepool | cdktf.IResolvable | undefined) {
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
  private _spec = new TanzuKubernetesClusterSpecTopologyNodepoolSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: TanzuKubernetesClusterSpecTopologyNodepoolSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class TanzuKubernetesClusterSpecTopologyNodepoolList extends cdktf.ComplexList {
  public internalValue? : TanzuKubernetesClusterSpecTopologyNodepool[] | cdktf.IResolvable

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
  public get(index: number): TanzuKubernetesClusterSpecTopologyNodepoolOutputReference {
    return new TanzuKubernetesClusterSpecTopologyNodepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TanzuKubernetesClusterSpecTopology {
  /**
  * The name of the cluster class for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#cluster_class TanzuKubernetesCluster#cluster_class}
  */
  readonly clusterClass?: string;
  /**
  * Variables configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#cluster_variables TanzuKubernetesCluster#cluster_variables}
  */
  readonly clusterVariables: string;
  /**
  * Kubernetes version of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#version TanzuKubernetesCluster#version}
  */
  readonly version: string;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#control_plane TanzuKubernetesCluster#control_plane}
  */
  readonly controlPlane: TanzuKubernetesClusterSpecTopologyControlPlane;
  /**
  * core_addon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#core_addon TanzuKubernetesCluster#core_addon}
  */
  readonly coreAddon?: TanzuKubernetesClusterSpecTopologyCoreAddon[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#network TanzuKubernetesCluster#network}
  */
  readonly network?: TanzuKubernetesClusterSpecTopologyNetwork;
  /**
  * nodepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#nodepool TanzuKubernetesCluster#nodepool}
  */
  readonly nodepool: TanzuKubernetesClusterSpecTopologyNodepool[] | cdktf.IResolvable;
}

export function tanzuKubernetesClusterSpecTopologyToTerraform(struct?: TanzuKubernetesClusterSpecTopologyOutputReference | TanzuKubernetesClusterSpecTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_class: cdktf.stringToTerraform(struct!.clusterClass),
    cluster_variables: cdktf.stringToTerraform(struct!.clusterVariables),
    version: cdktf.stringToTerraform(struct!.version),
    control_plane: tanzuKubernetesClusterSpecTopologyControlPlaneToTerraform(struct!.controlPlane),
    core_addon: cdktf.listMapper(tanzuKubernetesClusterSpecTopologyCoreAddonToTerraform, true)(struct!.coreAddon),
    network: tanzuKubernetesClusterSpecTopologyNetworkToTerraform(struct!.network),
    nodepool: cdktf.listMapper(tanzuKubernetesClusterSpecTopologyNodepoolToTerraform, true)(struct!.nodepool),
  }
}


export function tanzuKubernetesClusterSpecTopologyToHclTerraform(struct?: TanzuKubernetesClusterSpecTopologyOutputReference | TanzuKubernetesClusterSpecTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_class: {
      value: cdktf.stringToHclTerraform(struct!.clusterClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_variables: {
      value: cdktf.stringToHclTerraform(struct!.clusterVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane: {
      value: tanzuKubernetesClusterSpecTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyControlPlaneList",
    },
    core_addon: {
      value: cdktf.listMapperHcl(tanzuKubernetesClusterSpecTopologyCoreAddonToHclTerraform, true)(struct!.coreAddon),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyCoreAddonList",
    },
    network: {
      value: tanzuKubernetesClusterSpecTopologyNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyNetworkList",
    },
    nodepool: {
      value: cdktf.listMapperHcl(tanzuKubernetesClusterSpecTopologyNodepoolToHclTerraform, true)(struct!.nodepool),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyNodepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpecTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterClass = this._clusterClass;
    }
    if (this._clusterVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVariables = this._clusterVariables;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._coreAddon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreAddon = this._coreAddon?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodepool = this._nodepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpecTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterClass = undefined;
      this._clusterVariables = undefined;
      this._version = undefined;
      this._controlPlane.internalValue = undefined;
      this._coreAddon.internalValue = undefined;
      this._network.internalValue = undefined;
      this._nodepool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterClass = value.clusterClass;
      this._clusterVariables = value.clusterVariables;
      this._version = value.version;
      this._controlPlane.internalValue = value.controlPlane;
      this._coreAddon.internalValue = value.coreAddon;
      this._network.internalValue = value.network;
      this._nodepool.internalValue = value.nodepool;
    }
  }

  // cluster_class - computed: true, optional: true, required: false
  private _clusterClass?: string; 
  public get clusterClass() {
    return this.getStringAttribute('cluster_class');
  }
  public set clusterClass(value: string) {
    this._clusterClass = value;
  }
  public resetClusterClass() {
    this._clusterClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterClassInput() {
    return this._clusterClass;
  }

  // cluster_variables - computed: false, optional: false, required: true
  private _clusterVariables?: string; 
  public get clusterVariables() {
    return this.getStringAttribute('cluster_variables');
  }
  public set clusterVariables(value: string) {
    this._clusterVariables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVariablesInput() {
    return this._clusterVariables;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new TanzuKubernetesClusterSpecTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: TanzuKubernetesClusterSpecTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // core_addon - computed: false, optional: true, required: false
  private _coreAddon = new TanzuKubernetesClusterSpecTopologyCoreAddonList(this, "core_addon", false);
  public get coreAddon() {
    return this._coreAddon;
  }
  public putCoreAddon(value: TanzuKubernetesClusterSpecTopologyCoreAddon[] | cdktf.IResolvable) {
    this._coreAddon.internalValue = value;
  }
  public resetCoreAddon() {
    this._coreAddon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAddonInput() {
    return this._coreAddon.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new TanzuKubernetesClusterSpecTopologyNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: TanzuKubernetesClusterSpecTopologyNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nodepool - computed: false, optional: false, required: true
  private _nodepool = new TanzuKubernetesClusterSpecTopologyNodepoolList(this, "nodepool", false);
  public get nodepool() {
    return this._nodepool;
  }
  public putNodepool(value: TanzuKubernetesClusterSpecTopologyNodepool[] | cdktf.IResolvable) {
    this._nodepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolInput() {
    return this._nodepool.internalValue;
  }
}
export interface TanzuKubernetesClusterSpec {
  /**
  * Name of the cluster group to which this cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#cluster_group_name TanzuKubernetesCluster#cluster_group_name}
  */
  readonly clusterGroupName?: string;
  /**
  * Name of the image registry configuration to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#image_registry TanzuKubernetesCluster#image_registry}
  */
  readonly imageRegistry?: string;
  /**
  * Name of the proxy configuration to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#proxy_name TanzuKubernetesCluster#proxy_name}
  */
  readonly proxyName?: string;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#topology TanzuKubernetesCluster#topology}
  */
  readonly topology: TanzuKubernetesClusterSpecTopology;
}

export function tanzuKubernetesClusterSpecToTerraform(struct?: TanzuKubernetesClusterSpecOutputReference | TanzuKubernetesClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group_name: cdktf.stringToTerraform(struct!.clusterGroupName),
    image_registry: cdktf.stringToTerraform(struct!.imageRegistry),
    proxy_name: cdktf.stringToTerraform(struct!.proxyName),
    topology: tanzuKubernetesClusterSpecTopologyToTerraform(struct!.topology),
  }
}


export function tanzuKubernetesClusterSpecToHclTerraform(struct?: TanzuKubernetesClusterSpecOutputReference | TanzuKubernetesClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_registry: {
      value: cdktf.stringToHclTerraform(struct!.imageRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_name: {
      value: cdktf.stringToHclTerraform(struct!.proxyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: tanzuKubernetesClusterSpecTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "TanzuKubernetesClusterSpecTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupName = this._clusterGroupName;
    }
    if (this._imageRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistry = this._imageRegistry;
    }
    if (this._proxyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyName = this._proxyName;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroupName = undefined;
      this._imageRegistry = undefined;
      this._proxyName = undefined;
      this._topology.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroupName = value.clusterGroupName;
      this._imageRegistry = value.imageRegistry;
      this._proxyName = value.proxyName;
      this._topology.internalValue = value.topology;
    }
  }

  // cluster_group_name - computed: false, optional: true, required: false
  private _clusterGroupName?: string; 
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }
  public set clusterGroupName(value: string) {
    this._clusterGroupName = value;
  }
  public resetClusterGroupName() {
    this._clusterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupNameInput() {
    return this._clusterGroupName;
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry?: string; 
  public get imageRegistry() {
    return this.getStringAttribute('image_registry');
  }
  public set imageRegistry(value: string) {
    this._imageRegistry = value;
  }
  public resetImageRegistry() {
    this._imageRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // proxy_name - computed: false, optional: true, required: false
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  public resetProxyName() {
    this._proxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // tmc_managed - computed: true, optional: false, required: false
  public get tmcManaged() {
    return this.getBooleanAttribute('tmc_managed');
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new TanzuKubernetesClusterSpecTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: TanzuKubernetesClusterSpecTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface TanzuKubernetesClusterTimeoutPolicy {
  /**
  * Fail on timeout if timeout is reached and cluster is not ready. (Default = true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#fail_on_timeout TanzuKubernetesCluster#fail_on_timeout}
  */
  readonly failOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Timeout in minutes for tanzu kubernetes creation process. A value of 0 means that no timeout is set. (Default: 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#timeout TanzuKubernetesCluster#timeout}
  */
  readonly timeout?: number;
  /**
  * Wait for kubeconfig. (Default = true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#wait_for_kubeconfig TanzuKubernetesCluster#wait_for_kubeconfig}
  */
  readonly waitForKubeconfig?: boolean | cdktf.IResolvable;
}

export function tanzuKubernetesClusterTimeoutPolicyToTerraform(struct?: TanzuKubernetesClusterTimeoutPolicyOutputReference | TanzuKubernetesClusterTimeoutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_on_timeout: cdktf.booleanToTerraform(struct!.failOnTimeout),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for_kubeconfig: cdktf.booleanToTerraform(struct!.waitForKubeconfig),
  }
}


export function tanzuKubernetesClusterTimeoutPolicyToHclTerraform(struct?: TanzuKubernetesClusterTimeoutPolicyOutputReference | TanzuKubernetesClusterTimeoutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.failOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_kubeconfig: {
      value: cdktf.booleanToHclTerraform(struct!.waitForKubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TanzuKubernetesClusterTimeoutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TanzuKubernetesClusterTimeoutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnTimeout = this._failOnTimeout;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitForKubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForKubeconfig = this._waitForKubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TanzuKubernetesClusterTimeoutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOnTimeout = undefined;
      this._timeout = undefined;
      this._waitForKubeconfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOnTimeout = value.failOnTimeout;
      this._timeout = value.timeout;
      this._waitForKubeconfig = value.waitForKubeconfig;
    }
  }

  // fail_on_timeout - computed: false, optional: true, required: false
  private _failOnTimeout?: boolean | cdktf.IResolvable; 
  public get failOnTimeout() {
    return this.getBooleanAttribute('fail_on_timeout');
  }
  public set failOnTimeout(value: boolean | cdktf.IResolvable) {
    this._failOnTimeout = value;
  }
  public resetFailOnTimeout() {
    this._failOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnTimeoutInput() {
    return this._failOnTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for_kubeconfig - computed: false, optional: true, required: false
  private _waitForKubeconfig?: boolean | cdktf.IResolvable; 
  public get waitForKubeconfig() {
    return this.getBooleanAttribute('wait_for_kubeconfig');
  }
  public set waitForKubeconfig(value: boolean | cdktf.IResolvable) {
    this._waitForKubeconfig = value;
  }
  public resetWaitForKubeconfig() {
    this._waitForKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForKubeconfigInput() {
    return this._waitForKubeconfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster tanzu-mission-control_tanzu_kubernetes_cluster}
*/
export class TanzuKubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_tanzu_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TanzuKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TanzuKubernetesCluster to import
  * @param importFromId The id of the existing TanzuKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TanzuKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_tanzu_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/tanzu_kubernetes_cluster tanzu-mission-control_tanzu_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TanzuKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: TanzuKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_tanzu_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
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
    this._managementClusterName = config.managementClusterName;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
    this._timeoutPolicy.internalValue = config.timeoutPolicy;
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

  // management_cluster_name - computed: false, optional: false, required: true
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
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

  // provisioner_name - computed: false, optional: false, required: true
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new TanzuKubernetesClusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: TanzuKubernetesClusterMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new TanzuKubernetesClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: TanzuKubernetesClusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeout_policy - computed: false, optional: true, required: false
  private _timeoutPolicy = new TanzuKubernetesClusterTimeoutPolicyOutputReference(this, "timeout_policy");
  public get timeoutPolicy() {
    return this._timeoutPolicy;
  }
  public putTimeoutPolicy(value: TanzuKubernetesClusterTimeoutPolicy) {
    this._timeoutPolicy.internalValue = value;
  }
  public resetTimeoutPolicy() {
    this._timeoutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutPolicyInput() {
    return this._timeoutPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_cluster_name: cdktf.stringToTerraform(this._managementClusterName),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
      meta: tanzuKubernetesClusterMetaToTerraform(this._meta.internalValue),
      spec: tanzuKubernetesClusterSpecToTerraform(this._spec.internalValue),
      timeout_policy: tanzuKubernetesClusterTimeoutPolicyToTerraform(this._timeoutPolicy.internalValue),
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
      management_cluster_name: {
        value: cdktf.stringToHclTerraform(this._managementClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_name: {
        value: cdktf.stringToHclTerraform(this._provisionerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: tanzuKubernetesClusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TanzuKubernetesClusterMetaList",
      },
      spec: {
        value: tanzuKubernetesClusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TanzuKubernetesClusterSpecList",
      },
      timeout_policy: {
        value: tanzuKubernetesClusterTimeoutPolicyToHclTerraform(this._timeoutPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TanzuKubernetesClusterTimeoutPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
