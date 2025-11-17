// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#metadata DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata;
  /**
  * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#spec DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec;
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#annotations DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#labels DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#name DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#namespace DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#number DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#number}
  */
  readonly number: number;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsOutputReference {
    return new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch {
  /**
  * Criteria for selecting traffic by their direction. Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#mode DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Criteria for selecting traffic by their destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#ports DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts[] | cdktf.IResolvable;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    ports: cdktf.listMapper(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._ports.internalValue = value.ports;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchOutputReference {
    return new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#match_labels DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#group DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#kind DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#name DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#namespace DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs {
  /**
  * group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#group DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#kind DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#name DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#namespace DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsOutputReference {
    return new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#name DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value for the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#value DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Valid Options: INLINE, HOST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#value_from DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: string;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: cdktf.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom = undefined;
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
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvOutputReference {
    return new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig {
  /**
  * Specifies environment variables to be injected to this VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#env DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv[] | cdktf.IResolvable;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvToTerraform, false)(struct!.env),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec {
  /**
  * Specifies the failure behavior for the plugin due to fatal errors. Valid Options: FAIL_CLOSE, FAIL_OPEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#fail_strategy DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#fail_strategy}
  */
  readonly failStrategy?: string;
  /**
  * The pull behaviour to be applied when fetching Wasm module by either OCI image or 'http/https'. Valid Options: IfNotPresent, Always
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#image_pull_policy DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Credentials to use for OCI image pulling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#image_pull_secret DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Specifies the criteria to determine which traffic is passed to WasmPlugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#match DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable;
  /**
  * Determines where in the filter chain this 'WasmPlugin' is to be injected. Valid Options: AUTHN, AUTHZ, STATS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#phase DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#phase}
  */
  readonly phase?: string;
  /**
  * The configuration that will be passed on to the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#plugin_config DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#plugin_config}
  */
  readonly pluginConfig?: { [key: string]: string };
  /**
  * The plugin name to be used in the Envoy configuration (used to be called 'rootID').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#plugin_name DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * Determines ordering of 'WasmPlugins' in the same 'phase'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#priority DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#selector DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector;
  /**
  * SHA256 checksum that will be used to verify Wasm module or OCI container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#sha256 DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#sha256}
  */
  readonly sha256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#target_ref DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef;
  /**
  * Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#target_refs DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#target_refs}
  */
  readonly targetRefs?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable;
  /**
  * Specifies the type of Wasm Extension to be used. Valid Options: HTTP, NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#type DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * URL of a Wasm module or OCI container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#url DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#verification_key DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#verification_key}
  */
  readonly verificationKey?: string;
  /**
  * Configuration for a Wasm VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#vm_config DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest#vm_config}
  */
  readonly vmConfig?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig;
}

export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_strategy: cdktf.stringToTerraform(struct!.failStrategy),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    match: cdktf.listMapper(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchToTerraform, false)(struct!.match),
    phase: cdktf.stringToTerraform(struct!.phase),
    plugin_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pluginConfig),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    priority: cdktf.numberToTerraform(struct!.priority),
    selector: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    sha256: cdktf.stringToTerraform(struct!.sha256),
    target_ref: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    target_refs: cdktf.listMapper(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    verification_key: cdktf.stringToTerraform(struct!.verificationKey),
    vm_config: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigToTerraform(struct!.vmConfig),
  }
}


export function dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_strategy: {
      value: cdktf.stringToHclTerraform(struct!.failStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchList",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pluginConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selector: {
      value: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_key: {
      value: cdktf.stringToHclTerraform(struct!.verificationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_config: {
      value: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failStrategy = this._failStrategy;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._pluginConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfig = this._pluginConfig;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verificationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationKey = this._verificationKey;
    }
    if (this._vmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConfig = this._vmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failStrategy = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecret = undefined;
      this._match.internalValue = undefined;
      this._phase = undefined;
      this._pluginConfig = undefined;
      this._pluginName = undefined;
      this._priority = undefined;
      this._selector.internalValue = undefined;
      this._sha256 = undefined;
      this._targetRef.internalValue = undefined;
      this._targetRefs.internalValue = undefined;
      this._type = undefined;
      this._url = undefined;
      this._verificationKey = undefined;
      this._vmConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failStrategy = value.failStrategy;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecret = value.imagePullSecret;
      this._match.internalValue = value.match;
      this._phase = value.phase;
      this._pluginConfig = value.pluginConfig;
      this._pluginName = value.pluginName;
      this._priority = value.priority;
      this._selector.internalValue = value.selector;
      this._sha256 = value.sha256;
      this._targetRef.internalValue = value.targetRef;
      this._targetRefs.internalValue = value.targetRefs;
      this._type = value.type;
      this._url = value.url;
      this._verificationKey = value.verificationKey;
      this._vmConfig.internalValue = value.vmConfig;
    }
  }

  // fail_strategy - computed: false, optional: true, required: false
  private _failStrategy?: string; 
  public get failStrategy() {
    return this.getStringAttribute('fail_strategy');
  }
  public set failStrategy(value: string) {
    this._failStrategy = value;
  }
  public resetFailStrategy() {
    this._failStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failStrategyInput() {
    return this._failStrategy;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // plugin_config - computed: false, optional: true, required: false
  private _pluginConfig?: { [key: string]: string }; 
  public get pluginConfig() {
    return this.getStringMapAttribute('plugin_config');
  }
  public set pluginConfig(value: { [key: string]: string }) {
    this._pluginConfig = value;
  }
  public resetPluginConfig() {
    this._pluginConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigInput() {
    return this._pluginConfig;
  }

  // plugin_name - computed: false, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // target_refs - computed: false, optional: true, required: false
  private _targetRefs = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  public resetTargetRefs() {
    this._targetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verification_key - computed: false, optional: true, required: false
  private _verificationKey?: string; 
  public get verificationKey() {
    return this.getStringAttribute('verification_key');
  }
  public set verificationKey(value: string) {
    this._verificationKey = value;
  }
  public resetVerificationKey() {
    this._verificationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationKeyInput() {
    return this._verificationKey;
  }

  // vm_config - computed: false, optional: true, required: false
  private _vmConfig = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecVmConfig) {
    this._vmConfig.internalValue = value;
  }
  public resetVmConfig() {
    this._vmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest k8s_extensions_istio_io_wasm_plugin_v1alpha1_manifest}
*/
export class DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_extensions_istio_io_wasm_plugin_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExtensionsIstioIoWasmPluginV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_extensions_istio_io_wasm_plugin_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/extensions_istio_io_wasm_plugin_v1alpha1_manifest k8s_extensions_istio_io_wasm_plugin_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_extensions_istio_io_wasm_plugin_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExtensionsIstioIoWasmPluginV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
