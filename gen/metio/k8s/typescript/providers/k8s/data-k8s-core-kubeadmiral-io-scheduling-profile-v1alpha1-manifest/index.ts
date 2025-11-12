// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
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
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig {
  /**
  * Args defines the arguments passed to the plugins at the time of initialization. Args can have arbitrary structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#args DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Name defines the name of plugin being configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter {
  /**
  * Disabled specifies default plugins that should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#disabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#disabled}
  */
  readonly disabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled[] | cdktf.IResolvable;
  /**
  * Enabled specifies plugins that should be enabled in addition to the default plugins. Enabled plugins are called in the order specified here, after default plugins. If they need to be invoked before default plugins, default plugins must be disabled and re-enabled here in desired order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#enabled}
  */
  readonly enabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledToTerraform, false)(struct!.enabled),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledToHclTerraform, false)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledList",
    },
    enabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledToHclTerraform, false)(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterDisabled[] | cdktf.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterEnabled[] | cdktf.IResolvable) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore {
  /**
  * Disabled specifies default plugins that should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#disabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#disabled}
  */
  readonly disabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled[] | cdktf.IResolvable;
  /**
  * Enabled specifies plugins that should be enabled in addition to the default plugins. Enabled plugins are called in the order specified here, after default plugins. If they need to be invoked before default plugins, default plugins must be disabled and re-enabled here in desired order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#enabled}
  */
  readonly enabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledToTerraform, false)(struct!.enabled),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledToHclTerraform, false)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledList",
    },
    enabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledToHclTerraform, false)(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreDisabled[] | cdktf.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreEnabled[] | cdktf.IResolvable) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled {
  /**
  * Name defines the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type defines the type of the plugin. Type should be omitted when referencing in-tree plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#type DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Weight defines the weight of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#wait DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#wait}
  */
  readonly wait?: number;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._wait = value.wait;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledOutputReference {
    return new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect {
  /**
  * Disabled specifies default plugins that should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#disabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#disabled}
  */
  readonly disabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled[] | cdktf.IResolvable;
  /**
  * Enabled specifies plugins that should be enabled in addition to the default plugins. Enabled plugins are called in the order specified here, after default plugins. If they need to be invoked before default plugins, default plugins must be disabled and re-enabled here in desired order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#enabled DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#enabled}
  */
  readonly enabled?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledToTerraform, false)(struct!.enabled),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledToHclTerraform, false)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledList",
    },
    enabled: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledToHclTerraform, false)(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectDisabled[] | cdktf.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectEnabled[] | cdktf.IResolvable) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins {
  /**
  * Filter is the list of plugins that should be invoked during the filter phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#filter DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter;
  /**
  * Score is the list of plugins that should be invoked during the score phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#score DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#score}
  */
  readonly score?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore;
  /**
  * Select is the list of plugins that should be invoked during the select phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#select DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#select}
  */
  readonly select?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterToTerraform(struct!.filter),
    score: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreToTerraform(struct!.score),
    select: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectToTerraform(struct!.select),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter",
    },
    score: {
      value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreToHclTerraform(struct!.score),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore",
    },
    select: {
      value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._score?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
      this._score.internalValue = undefined;
      this._select.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
      this._score.internalValue = value.score;
      this._select.internalValue = value.select;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // score - computed: false, optional: true, required: false
  private _score = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScoreOutputReference(this, "score");
  public get score() {
    return this._score;
  }
  public putScore(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsScore) {
    this._score.internalValue = value;
  }
  public resetScore() {
    this._score.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec {
  /**
  * PluginConfig is an optional set of custom plugin arguments for each plugin. Omitting config args for a plugin is equivalent to using the default config for that plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#plugin_config DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#plugin_config}
  */
  readonly pluginConfig?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig[] | cdktf.IResolvable;
  /**
  * Plugins specify the set of plugins that should be enabled or disabled. Enabled plugins are the ones that should be enabled in addition to the default plugins. Disabled plugins are any of the default plugins that should be disabled. When no enabled or disabled plugin is specified for an extension point, default plugins for that extension point will be used if there is any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#plugins DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest#plugins}
  */
  readonly plugins?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins;
}

export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_config: cdktf.listMapper(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigToTerraform, false)(struct!.pluginConfig),
    plugins: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsToTerraform(struct!.plugins),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_config: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigToHclTerraform, false)(struct!.pluginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigList",
    },
    plugins: {
      value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsToHclTerraform(struct!.plugins),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfig = this._pluginConfig?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pluginConfig.internalValue = undefined;
      this._plugins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pluginConfig.internalValue = value.pluginConfig;
      this._plugins.internalValue = value.plugins;
    }
  }

  // plugin_config - computed: false, optional: true, required: false
  private _pluginConfig = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfigList(this, "plugin_config", false);
  public get pluginConfig() {
    return this._pluginConfig;
  }
  public putPluginConfig(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginConfig[] | cdktf.IResolvable) {
    this._pluginConfig.internalValue = value;
  }
  public resetPluginConfig() {
    this._pluginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigInput() {
    return this._pluginConfig.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPluginsOutputReference(this, "plugins");
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecPlugins) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest k8s_core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest k8s_core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_scheduling_profile_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoSchedulingProfileV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
