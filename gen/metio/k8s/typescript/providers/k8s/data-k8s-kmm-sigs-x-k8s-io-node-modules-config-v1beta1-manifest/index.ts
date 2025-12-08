// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#metadata DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata;
  /**
  * NodeModulesConfigSpec describes the desired state of modules on the node More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#spec DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec;
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#annotations DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#labels DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs {
  /**
  * Load is an optional list of arguments to be used when loading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#load DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#load}
  */
  readonly load?: string[];
  /**
  * Unload is an optional list of arguments to be used when unloading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#unload DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#unload}
  */
  readonly unload?: string[];
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.load),
    unload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unload),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.load),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unload),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._unload !== undefined) {
      hasAnyValues = true;
      internalValueResult.unload = this._unload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._load = undefined;
      this._unload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._load = value.load;
      this._unload = value.unload;
    }
  }

  // load - computed: false, optional: true, required: false
  private _load?: string[]; 
  public get load() {
    return this.getListAttribute('load');
  }
  public set load(value: string[]) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // unload - computed: false, optional: true, required: false
  private _unload?: string[]; 
  public get unload() {
    return this.getListAttribute('unload');
  }
  public set unload(value: string[]) {
    this._unload = value;
  }
  public resetUnload() {
    this._unload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unloadInput() {
    return this._unload;
  }
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs {
  /**
  * Load is an optional list of arguments to be used when loading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#load DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#load}
  */
  readonly load?: string[];
  /**
  * Unload is an optional list of arguments to be used when unloading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#unload DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#unload}
  */
  readonly unload?: string[];
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.load),
    unload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unload),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.load),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unload),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._unload !== undefined) {
      hasAnyValues = true;
      internalValueResult.unload = this._unload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._load = undefined;
      this._unload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._load = value.load;
      this._unload = value.unload;
    }
  }

  // load - computed: false, optional: true, required: false
  private _load?: string[]; 
  public get load() {
    return this.getListAttribute('load');
  }
  public set load(value: string[]) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // unload - computed: false, optional: true, required: false
  private _unload?: string[]; 
  public get unload() {
    return this.getListAttribute('unload');
  }
  public set unload(value: string[]) {
    this._unload = value;
  }
  public resetUnload() {
    this._unload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unloadInput() {
    return this._unload;
  }
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe {
  /**
  * Args is an optional list of arguments to be passed to modprobe before the name of the kernel module. The resulting commands will be: 'modprobe ${Args} module_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#args DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#args}
  */
  readonly args?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs;
  /**
  * DirName is the root directory for modules. It adds '-d ${DirName}' to the modprobe command-line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#dir_name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#dir_name}
  */
  readonly dirName?: string;
  /**
  * FirmwarePath is the path of the firmware(s). The firmware(s) will be copied to the host for the kernel to find them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#firmware_path DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#firmware_path}
  */
  readonly firmwarePath?: string;
  /**
  * ModuleName is the name of the Module to be loaded. This field can only be unset if rawArgs is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#module_name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#module_name}
  */
  readonly moduleName?: string;
  /**
  * ModulesLoadingOrder defines the dependency between kernel modules loading, in case it was not created by depmod (independent kernel modules). The list order should be: upmost module, then the module it depends on and so on. Example: if moduleA depends on first loading moduleB, and moduleB depends on first loading moduleC the entry should look: ModulesLoadingOrder: - moduleA - moduleB - moduleC In order to load all 3 modules, moduleA shoud be defined in the ModuleName parameter of this struct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#modules_loading_order DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#modules_loading_order}
  */
  readonly modulesLoadingOrder?: string[];
  /**
  * Parameters is an optional list of kernel module parameters to be provided to modprobe. They should be in the form of key=value and will be separated by spaces in the modprobe command. The resulting loading command will be: 'modprobe module_name ${Parameters}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#parameters DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#parameters}
  */
  readonly parameters?: string[];
  /**
  * If RawArgs are specified, they are passed straight to the modprobe binary; all other properties in this object are ignored. The resulting commands will be: 'modprobe ${RawArgs}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#raw_args DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#raw_args}
  */
  readonly rawArgs?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsToTerraform(struct!.args),
    dir_name: cdktf.stringToTerraform(struct!.dirName),
    firmware_path: cdktf.stringToTerraform(struct!.firmwarePath),
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    modules_loading_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modulesLoadingOrder),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    raw_args: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsToTerraform(struct!.rawArgs),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs",
    },
    dir_name: {
      value: cdktf.stringToHclTerraform(struct!.dirName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware_path: {
      value: cdktf.stringToHclTerraform(struct!.firmwarePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modules_loading_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modulesLoadingOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    raw_args: {
      value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsToHclTerraform(struct!.rawArgs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._dirName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirName = this._dirName;
    }
    if (this._firmwarePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwarePath = this._firmwarePath;
    }
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._modulesLoadingOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesLoadingOrder = this._modulesLoadingOrder;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._rawArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawArgs = this._rawArgs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._dirName = undefined;
      this._firmwarePath = undefined;
      this._moduleName = undefined;
      this._modulesLoadingOrder = undefined;
      this._parameters = undefined;
      this._rawArgs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._dirName = value.dirName;
      this._firmwarePath = value.firmwarePath;
      this._moduleName = value.moduleName;
      this._modulesLoadingOrder = value.modulesLoadingOrder;
      this._parameters = value.parameters;
      this._rawArgs.internalValue = value.rawArgs;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // dir_name - computed: false, optional: true, required: false
  private _dirName?: string; 
  public get dirName() {
    return this.getStringAttribute('dir_name');
  }
  public set dirName(value: string) {
    this._dirName = value;
  }
  public resetDirName() {
    this._dirName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirNameInput() {
    return this._dirName;
  }

  // firmware_path - computed: false, optional: true, required: false
  private _firmwarePath?: string; 
  public get firmwarePath() {
    return this.getStringAttribute('firmware_path');
  }
  public set firmwarePath(value: string) {
    this._firmwarePath = value;
  }
  public resetFirmwarePath() {
    this._firmwarePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwarePathInput() {
    return this._firmwarePath;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // modules_loading_order - computed: false, optional: true, required: false
  private _modulesLoadingOrder?: string[]; 
  public get modulesLoadingOrder() {
    return this.getListAttribute('modules_loading_order');
  }
  public set modulesLoadingOrder(value: string[]) {
    this._modulesLoadingOrder = value;
  }
  public resetModulesLoadingOrder() {
    this._modulesLoadingOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesLoadingOrderInput() {
    return this._modulesLoadingOrder;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // raw_args - computed: false, optional: true, required: false
  private _rawArgs = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgsOutputReference(this, "raw_args");
  public get rawArgs() {
    return this._rawArgs;
  }
  public putRawArgs(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeRawArgs) {
    this._rawArgs.internalValue = value;
  }
  public resetRawArgs() {
    this._rawArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawArgsInput() {
    return this._rawArgs.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#container_image DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#container_image}
  */
  readonly containerImage: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#image_pull_policy DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#in_tree_module_to_remove DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#in_tree_module_to_remove}
  */
  readonly inTreeModuleToRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#in_tree_modules_to_remove DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#in_tree_modules_to_remove}
  */
  readonly inTreeModulesToRemove?: string[];
  /**
  * When InsecurePull is true, the container image can be pulled without TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#insecure_pull DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#insecure_pull}
  */
  readonly insecurePull: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#kernel_version DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#kernel_version}
  */
  readonly kernelVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#modprobe DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#modprobe}
  */
  readonly modprobe: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    in_tree_module_to_remove: cdktf.stringToTerraform(struct!.inTreeModuleToRemove),
    in_tree_modules_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inTreeModulesToRemove),
    insecure_pull: cdktf.booleanToTerraform(struct!.insecurePull),
    kernel_version: cdktf.stringToTerraform(struct!.kernelVersion),
    modprobe: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeToTerraform(struct!.modprobe),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
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
    in_tree_module_to_remove: {
      value: cdktf.stringToHclTerraform(struct!.inTreeModuleToRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_tree_modules_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inTreeModulesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_pull: {
      value: cdktf.booleanToHclTerraform(struct!.insecurePull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kernel_version: {
      value: cdktf.stringToHclTerraform(struct!.kernelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modprobe: {
      value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeToHclTerraform(struct!.modprobe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._inTreeModuleToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModuleToRemove = this._inTreeModuleToRemove;
    }
    if (this._inTreeModulesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModulesToRemove = this._inTreeModulesToRemove;
    }
    if (this._insecurePull !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecurePull = this._insecurePull;
    }
    if (this._kernelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelVersion = this._kernelVersion;
    }
    if (this._modprobe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modprobe = this._modprobe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerImage = undefined;
      this._imagePullPolicy = undefined;
      this._inTreeModuleToRemove = undefined;
      this._inTreeModulesToRemove = undefined;
      this._insecurePull = undefined;
      this._kernelVersion = undefined;
      this._modprobe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerImage = value.containerImage;
      this._imagePullPolicy = value.imagePullPolicy;
      this._inTreeModuleToRemove = value.inTreeModuleToRemove;
      this._inTreeModulesToRemove = value.inTreeModulesToRemove;
      this._insecurePull = value.insecurePull;
      this._kernelVersion = value.kernelVersion;
      this._modprobe.internalValue = value.modprobe;
    }
  }

  // container_image - computed: false, optional: false, required: true
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // image_pull_policy - computed: false, optional: false, required: true
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // in_tree_module_to_remove - computed: false, optional: true, required: false
  private _inTreeModuleToRemove?: string; 
  public get inTreeModuleToRemove() {
    return this.getStringAttribute('in_tree_module_to_remove');
  }
  public set inTreeModuleToRemove(value: string) {
    this._inTreeModuleToRemove = value;
  }
  public resetInTreeModuleToRemove() {
    this._inTreeModuleToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModuleToRemoveInput() {
    return this._inTreeModuleToRemove;
  }

  // in_tree_modules_to_remove - computed: false, optional: true, required: false
  private _inTreeModulesToRemove?: string[]; 
  public get inTreeModulesToRemove() {
    return this.getListAttribute('in_tree_modules_to_remove');
  }
  public set inTreeModulesToRemove(value: string[]) {
    this._inTreeModulesToRemove = value;
  }
  public resetInTreeModulesToRemove() {
    this._inTreeModulesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModulesToRemoveInput() {
    return this._inTreeModulesToRemove;
  }

  // insecure_pull - computed: false, optional: false, required: true
  private _insecurePull?: boolean | cdktf.IResolvable; 
  public get insecurePull() {
    return this.getBooleanAttribute('insecure_pull');
  }
  public set insecurePull(value: boolean | cdktf.IResolvable) {
    this._insecurePull = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insecurePullInput() {
    return this._insecurePull;
  }

  // kernel_version - computed: false, optional: false, required: true
  private _kernelVersion?: string; 
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }
  public set kernelVersion(value: string) {
    this._kernelVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelVersionInput() {
    return this._kernelVersion;
  }

  // modprobe - computed: false, optional: false, required: true
  private _modprobe = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobeOutputReference(this, "modprobe");
  public get modprobe() {
    return this._modprobe;
  }
  public putModprobe(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigModprobe) {
    this._modprobe.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modprobeInput() {
    return this._modprobe.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#config DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#config}
  */
  readonly config: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#image_repo_secret DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#image_repo_secret}
  */
  readonly imageRepoSecret?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#namespace DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#service_account_name DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName: string;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigToTerraform(struct!.config),
    image_repo_secret: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretToTerraform(struct!.imageRepoSecret),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig",
    },
    image_repo_secret: {
      value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretToHclTerraform(struct!.imageRepoSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret",
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
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._imageRepoSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepoSecret = this._imageRepoSecret?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._imageRepoSecret.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._imageRepoSecret.internalValue = value.imageRepoSecret;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // image_repo_secret - computed: false, optional: true, required: false
  private _imageRepoSecret = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecretOutputReference(this, "image_repo_secret");
  public get imageRepoSecret() {
    return this._imageRepoSecret;
  }
  public putImageRepoSecret(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesImageRepoSecret) {
    this._imageRepoSecret.internalValue = value;
  }
  public resetImageRepoSecret() {
    this._imageRepoSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoSecretInput() {
    return this._imageRepoSecret.internalValue;
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

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesOutputReference {
    return new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec {
  /**
  * Modules list the spec of all the modules that need to be executed on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#modules DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest#modules}
  */
  readonly modules?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecToTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modules: cdktf.listMapper(dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesToTerraform, false)(struct!.modules),
  }
}


export function dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modules: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesToHclTerraform, false)(struct!.modules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modules = this._modules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modules.internalValue = value.modules;
    }
  }

  // modules - computed: false, optional: true, required: false
  private _modules = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }
  public putModules(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecModules[] | cdktf.IResolvable) {
    this._modules.internalValue = value;
  }
  public resetModules() {
    this._modules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest k8s_kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest}
*/
export class DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest k8s_kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kmm_sigs_x_k8s_io_node_modules_config_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoNodeModulesConfigV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
