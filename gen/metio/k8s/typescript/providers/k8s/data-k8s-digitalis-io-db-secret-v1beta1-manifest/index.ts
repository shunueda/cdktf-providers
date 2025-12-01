// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDigitalisIoDbSecretV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#metadata DataK8SDigitalisIoDbSecretV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata;
  /**
  * DbSecretSpec defines the desired state of DbSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#spec DataK8SDigitalisIoDbSecretV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec;
}
export interface DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#annotations DataK8SDigitalisIoDbSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#labels DataK8SDigitalisIoDbSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#name DataK8SDigitalisIoDbSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#namespace DataK8SDigitalisIoDbSecretV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataToTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout {
  /**
  * Kind is either Deployment, Pod or StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#kind DataK8SDigitalisIoDbSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#name DataK8SDigitalisIoDbSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutToTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutToHclTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
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
}

export class DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutList extends cdktf.ComplexList {
  public internalValue? : DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutOutputReference {
    return new DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault {
  /**
  * Mount is the vault database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#mount DataK8SDigitalisIoDbSecretV1Beta1Manifest#mount}
  */
  readonly mount: string;
  /**
  * Role is the vault role used to connect to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#role DataK8SDigitalisIoDbSecretV1Beta1Manifest#role}
  */
  readonly role: string;
}

export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultToTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: cdktf.stringToTerraform(struct!.mount),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultToHclTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mount = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mount = value.mount;
      this._role = value.role;
    }
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#renew DataK8SDigitalisIoDbSecretV1Beta1Manifest#renew}
  */
  readonly renew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#rollout DataK8SDigitalisIoDbSecretV1Beta1Manifest#rollout}
  */
  readonly rollout?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout[] | cdktf.IResolvable;
  /**
  * Name can override the secret name, defaults to manifests.name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#secret_name DataK8SDigitalisIoDbSecretV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#template DataK8SDigitalisIoDbSecretV1Beta1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#vault DataK8SDigitalisIoDbSecretV1Beta1Manifest#vault}
  */
  readonly vault: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault;
}

export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecToTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    renew: cdktf.booleanToTerraform(struct!.renew),
    rollout: cdktf.listMapper(dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutToTerraform, false)(struct!.rollout),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    vault: dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultToTerraform(struct!.vault),
  }
}


export function dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    renew: {
      value: cdktf.booleanToHclTerraform(struct!.renew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollout: {
      value: cdktf.listMapperHcl(dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutToHclTerraform, false)(struct!.rollout),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vault: {
      value: dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renew !== undefined) {
      hasAnyValues = true;
      internalValueResult.renew = this._renew;
    }
    if (this._rollout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollout = this._rollout?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._renew = undefined;
      this._rollout.internalValue = undefined;
      this._secretName = undefined;
      this._template = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._renew = value.renew;
      this._rollout.internalValue = value.rollout;
      this._secretName = value.secretName;
      this._template = value.template;
      this._vault.internalValue = value.vault;
    }
  }

  // renew - computed: false, optional: true, required: false
  private _renew?: boolean | cdktf.IResolvable; 
  public get renew() {
    return this.getBooleanAttribute('renew');
  }
  public set renew(value: boolean | cdktf.IResolvable) {
    this._renew = value;
  }
  public resetRenew() {
    this._renew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewInput() {
    return this._renew;
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout = new DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRolloutList(this, "rollout", false);
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecRollout[] | cdktf.IResolvable) {
    this._rollout.internalValue = value;
  }
  public resetRollout() {
    this._rollout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vault - computed: false, optional: false, required: true
  private _vault = new DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecVault) {
    this._vault.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest k8s_digitalis_io_db_secret_v1beta1_manifest}
*/
export class DataK8SDigitalisIoDbSecretV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_digitalis_io_db_secret_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDigitalisIoDbSecretV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDigitalisIoDbSecretV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SDigitalisIoDbSecretV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDigitalisIoDbSecretV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_digitalis_io_db_secret_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/digitalis_io_db_secret_v1beta1_manifest k8s_digitalis_io_db_secret_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDigitalisIoDbSecretV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDigitalisIoDbSecretV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_digitalis_io_db_secret_v1beta1_manifest',
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
  private _metadata = new DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDigitalisIoDbSecretV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec) {
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
      metadata: dataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDigitalisIoDbSecretV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDigitalisIoDbSecretV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SDigitalisIoDbSecretV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDigitalisIoDbSecretV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
