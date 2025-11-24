// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata;
  /**
  * TinkerbellTemplateConfigSpec defines the desired state of TinkerbellTemplateConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#command DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#environment DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#image DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#on_failure DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#on_timeout DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#on_timeout}
  */
  readonly onTimeout?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#pid DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#timeout DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#volumes DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onFailure),
    on_timeout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onTimeout),
    pid: cdktf.stringToTerraform(struct!.pid),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    on_failure: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onFailure),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_timeout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onTimeout),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pid: {
      value: cdktf.stringToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._onTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTimeout = this._onTimeout;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._name = undefined;
      this._onFailure = undefined;
      this._onTimeout = undefined;
      this._pid = undefined;
      this._timeout = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._environment = value.environment;
      this._image = value.image;
      this._name = value.name;
      this._onFailure = value.onFailure;
      this._onTimeout = value.onTimeout;
      this._pid = value.pid;
      this._timeout = value.timeout;
      this._volumes = value.volumes;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_timeout - computed: false, optional: true, required: false
  private _onTimeout?: string[]; 
  public get onTimeout() {
    return this.getListAttribute('on_timeout');
  }
  public set onTimeout(value: string[]) {
    this._onTimeout = value;
  }
  public resetOnTimeout() {
    this._onTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTimeoutInput() {
    return this._onTimeout;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: string; 
  public get pid() {
    return this.getStringAttribute('pid');
  }
  public set pid(value: string) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#actions DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#actions}
  */
  readonly actions: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#environment DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#volumes DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#volumes}
  */
  readonly volumes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#worker DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#worker}
  */
  readonly worker: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsToTerraform, false)(struct!.actions),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    name: cdktf.stringToTerraform(struct!.name),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
    worker: cdktf.stringToTerraform(struct!.worker),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsList",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
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
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker: {
      value: cdktf.stringToHclTerraform(struct!.worker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._environment = undefined;
      this._name = undefined;
      this._volumes = undefined;
      this._worker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._environment = value.environment;
      this._name = value.name;
      this._volumes = value.volumes;
      this._worker = value.worker;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // worker - computed: false, optional: false, required: true
  private _worker?: string; 
  public get worker() {
    return this.getStringAttribute('worker');
  }
  public set worker(value: string) {
    this._worker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksOutputReference {
    return new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#global_timeout DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#global_timeout}
  */
  readonly globalTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#tasks DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#tasks}
  */
  readonly tasks: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#version DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_timeout: cdktf.numberToTerraform(struct!.globalTimeout),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    tasks: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksToTerraform, false)(struct!.tasks),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_timeout: {
      value: cdktf.numberToHclTerraform(struct!.globalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    tasks: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksToHclTerraform, false)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksList",
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

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTimeout = this._globalTimeout;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalTimeout = undefined;
      this._id = undefined;
      this._name = undefined;
      this._tasks.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalTimeout = value.globalTimeout;
      this._id = value.id;
      this._name = value.name;
      this._tasks.internalValue = value.tasks;
      this._version = value.version;
    }
  }

  // global_timeout - computed: false, optional: false, required: true
  private _globalTimeout?: number; 
  public get globalTimeout() {
    return this.getNumberAttribute('global_timeout');
  }
  public set globalTimeout(value: number) {
    this._globalTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimeoutInput() {
    return this._globalTimeout;
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

  // tasks - computed: false, optional: false, required: true
  private _tasks = new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
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
export interface DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec {
  /**
  * Template defines a Tinkerbell workflow template with specific tasks and actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#template DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest#template}
  */
  readonly template: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_tinkerbell_template_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellTemplateConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
