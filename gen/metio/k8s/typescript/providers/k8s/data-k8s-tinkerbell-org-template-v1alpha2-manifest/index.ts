// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STinkerbellOrgTemplateV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#metadata DataK8STinkerbellOrgTemplateV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#spec DataK8STinkerbellOrgTemplateV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec;
}
export interface DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#annotations DataK8STinkerbellOrgTemplateV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#labels DataK8STinkerbellOrgTemplateV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#name DataK8STinkerbellOrgTemplateV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#namespace DataK8STinkerbellOrgTemplateV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataToTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces {
  /**
  * Network defines the network namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#network DataK8STinkerbellOrgTemplateV1Alpha2Manifest#network}
  */
  readonly network?: string;
  /**
  * PID defines the PID namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#pid DataK8STinkerbellOrgTemplateV1Alpha2Manifest#pid}
  */
  readonly pid?: number;
}

export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesToTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    pid: cdktf.numberToTerraform(struct!.pid),
  }
}


export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesToHclTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.numberToHclTerraform(struct!.pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._pid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._pid = value.pid;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }
}
export interface DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions {
  /**
  * Args are a set of arguments to be passed to the command executed by the container on launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#args DataK8STinkerbellOrgTemplateV1Alpha2Manifest#args}
  */
  readonly args?: string[];
  /**
  * Cmd defines the command to use when launching the image. It overrides the default command of the action. It must be a unix path to an executable program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#cmd DataK8STinkerbellOrgTemplateV1Alpha2Manifest#cmd}
  */
  readonly cmd?: string;
  /**
  * Env defines environment variables used when launching the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#env DataK8STinkerbellOrgTemplateV1Alpha2Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Image is an OCI image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#image DataK8STinkerbellOrgTemplateV1Alpha2Manifest#image}
  */
  readonly image: string;
  /**
  * Name is a name for the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#name DataK8STinkerbellOrgTemplateV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the Linux namespaces this container should execute in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#namespaces DataK8STinkerbellOrgTemplateV1Alpha2Manifest#namespaces}
  */
  readonly namespaces?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces;
  /**
  * Volumes defines the volumes to mount into the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#volumes DataK8STinkerbellOrgTemplateV1Alpha2Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsToTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    namespaces: dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesToTerraform(struct!.namespaces),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsToHclTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
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
    namespaces: {
      value: dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces",
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

export class DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._cmd = undefined;
      this._env = undefined;
      this._image = undefined;
      this._name = undefined;
      this._namespaces.internalValue = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._cmd = value.cmd;
      this._env = value.env;
      this._image = value.image;
      this._name = value.name;
      this._namespaces.internalValue = value.namespaces;
      this._volumes = value.volumes;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
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

export class DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsOutputReference {
    return new DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec {
  /**
  * Actions defines the set of actions to be run on a target machine. Actions are run sequentially in the order they are specified. At least 1 action must be specified. Names of actions must be unique within a Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#actions DataK8STinkerbellOrgTemplateV1Alpha2Manifest#actions}
  */
  readonly actions?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions[] | cdktf.IResolvable;
  /**
  * Env defines environment variables to be available in all actions. If an action specifies the same environment variable it will take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#env DataK8STinkerbellOrgTemplateV1Alpha2Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Volumes to be mounted on all actions. If an action specifies the same volume it will take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#volumes DataK8STinkerbellOrgTemplateV1Alpha2Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecToTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsToTerraform, false)(struct!.actions),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._env = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._env = value.env;
      this._volumes = value.volumes;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest k8s_tinkerbell_org_template_v1alpha2_manifest}
*/
export class DataK8STinkerbellOrgTemplateV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tinkerbell_org_template_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STinkerbellOrgTemplateV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STinkerbellOrgTemplateV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8STinkerbellOrgTemplateV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STinkerbellOrgTemplateV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tinkerbell_org_template_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tinkerbell_org_template_v1alpha2_manifest k8s_tinkerbell_org_template_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STinkerbellOrgTemplateV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STinkerbellOrgTemplateV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tinkerbell_org_template_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec) {
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
      metadata: dataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgTemplateV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8STinkerbellOrgTemplateV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgTemplateV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
