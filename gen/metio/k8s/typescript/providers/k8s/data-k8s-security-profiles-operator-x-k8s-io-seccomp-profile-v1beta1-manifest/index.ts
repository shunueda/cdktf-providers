// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#metadata DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata;
  /**
  * SeccompProfileSpec defines the desired state of SeccompProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#spec DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec;
}
export interface DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#annotations DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#labels DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#name DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#namespace DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs {
  /**
  * the index for syscall arguments in seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#index DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#index}
  */
  readonly index: number;
  /**
  * the operator for syscall arguments in seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#op DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#op}
  */
  readonly op: string;
  /**
  * the value for syscall arguments in seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#value DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#value}
  */
  readonly value?: number;
  /**
  * the value for syscall arguments in seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#value_two DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#value_two}
  */
  readonly valueTwo?: number;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
    value_two: cdktf.numberToTerraform(struct!.valueTwo),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value_two: {
      value: cdktf.numberToHclTerraform(struct!.valueTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueTwo = this._valueTwo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._op = undefined;
      this._value = undefined;
      this._valueTwo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._op = value.op;
      this._value = value.value;
      this._valueTwo = value.valueTwo;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_two - computed: false, optional: true, required: false
  private _valueTwo?: number; 
  public get valueTwo() {
    return this.getNumberAttribute('value_two');
  }
  public set valueTwo(value: number) {
    this._valueTwo = value;
  }
  public resetValueTwo() {
    this._valueTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTwoInput() {
    return this._valueTwo;
  }
}

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsOutputReference {
    return new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls {
  /**
  * the action for seccomp rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#action DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#action}
  */
  readonly action: string;
  /**
  * the specific syscall in seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#args DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#args}
  */
  readonly args?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs[] | cdktf.IResolvable;
  /**
  * the errno return code to use. Some actions like SCMP_ACT_ERRNO and SCMP_ACT_TRACE allow to specify the errno code to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#errno_ret DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#errno_ret}
  */
  readonly errnoRet?: number;
  /**
  * the names of the syscalls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#names DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#names}
  */
  readonly names: string[];
}

export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    args: cdktf.listMapper(dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsToTerraform, false)(struct!.args),
    errno_ret: cdktf.numberToTerraform(struct!.errnoRet),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsToHclTerraform, false)(struct!.args),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsList",
    },
    errno_ret: {
      value: cdktf.numberToHclTerraform(struct!.errnoRet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._errnoRet !== undefined) {
      hasAnyValues = true;
      internalValueResult.errnoRet = this._errnoRet;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._args.internalValue = undefined;
      this._errnoRet = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._args.internalValue = value.args;
      this._errnoRet = value.errnoRet;
      this._names = value.names;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgsList(this, "args", false);
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsArgs[] | cdktf.IResolvable) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // errno_ret - computed: false, optional: true, required: false
  private _errnoRet?: number; 
  public get errnoRet() {
    return this.getNumberAttribute('errno_ret');
  }
  public set errnoRet(value: number) {
    this._errnoRet = value;
  }
  public resetErrnoRet() {
    this._errnoRet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errnoRetInput() {
    return this._errnoRet;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsOutputReference {
    return new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec {
  /**
  * the architecture used for system calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#architectures DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#architectures}
  */
  readonly architectures?: string[];
  /**
  * BaseProfileName is the name of base profile (in the same namespace) that will be unioned into this profile. Base profiles can be references as remote OCI artifacts as well when prefixed with 'oci://'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#base_profile_name DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#base_profile_name}
  */
  readonly baseProfileName?: string;
  /**
  * the default action for seccomp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#default_action DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#default_action}
  */
  readonly defaultAction: string;
  /**
  * Whether the profile is disabled and should be skipped during reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#disabled DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * list of flags to use with seccomp(2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#flags DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * opaque data to pass to the seccomp agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#listener_metadata DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#listener_metadata}
  */
  readonly listenerMetadata?: string;
  /**
  * path of UNIX domain socket to contact a seccomp agent for SCMP_ACT_NOTIFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#listener_path DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#listener_path}
  */
  readonly listenerPath?: string;
  /**
  * match a syscall in seccomp. While this property is OPTIONAL, some values of defaultAction are not useful without syscalls entries. For example, if defaultAction is SCMP_ACT_KILL and syscalls is empty or unset, the kernel will kill the container process on its first syscall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#syscalls DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest#syscalls}
  */
  readonly syscalls?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls[] | cdktf.IResolvable;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    base_profile_name: cdktf.stringToTerraform(struct!.baseProfileName),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    listener_metadata: cdktf.stringToTerraform(struct!.listenerMetadata),
    listener_path: cdktf.stringToTerraform(struct!.listenerPath),
    syscalls: cdktf.listMapper(dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsToTerraform, false)(struct!.syscalls),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    base_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.baseProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    listener_metadata: {
      value: cdktf.stringToHclTerraform(struct!.listenerMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_path: {
      value: cdktf.stringToHclTerraform(struct!.listenerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syscalls: {
      value: cdktf.listMapperHcl(dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsToHclTerraform, false)(struct!.syscalls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._baseProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProfileName = this._baseProfileName;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._listenerMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerMetadata = this._listenerMetadata;
    }
    if (this._listenerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPath = this._listenerPath;
    }
    if (this._syscalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syscalls = this._syscalls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architectures = undefined;
      this._baseProfileName = undefined;
      this._defaultAction = undefined;
      this._disabled = undefined;
      this._flags = undefined;
      this._listenerMetadata = undefined;
      this._listenerPath = undefined;
      this._syscalls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architectures = value.architectures;
      this._baseProfileName = value.baseProfileName;
      this._defaultAction = value.defaultAction;
      this._disabled = value.disabled;
      this._flags = value.flags;
      this._listenerMetadata = value.listenerMetadata;
      this._listenerPath = value.listenerPath;
      this._syscalls.internalValue = value.syscalls;
    }
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // base_profile_name - computed: false, optional: true, required: false
  private _baseProfileName?: string; 
  public get baseProfileName() {
    return this.getStringAttribute('base_profile_name');
  }
  public set baseProfileName(value: string) {
    this._baseProfileName = value;
  }
  public resetBaseProfileName() {
    this._baseProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProfileNameInput() {
    return this._baseProfileName;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // listener_metadata - computed: false, optional: true, required: false
  private _listenerMetadata?: string; 
  public get listenerMetadata() {
    return this.getStringAttribute('listener_metadata');
  }
  public set listenerMetadata(value: string) {
    this._listenerMetadata = value;
  }
  public resetListenerMetadata() {
    this._listenerMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerMetadataInput() {
    return this._listenerMetadata;
  }

  // listener_path - computed: false, optional: true, required: false
  private _listenerPath?: string; 
  public get listenerPath() {
    return this.getStringAttribute('listener_path');
  }
  public set listenerPath(value: string) {
    this._listenerPath = value;
  }
  public resetListenerPath() {
    this._listenerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPathInput() {
    return this._listenerPath;
  }

  // syscalls - computed: false, optional: true, required: false
  private _syscalls = new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscallsList(this, "syscalls", false);
  public get syscalls() {
    return this._syscalls;
  }
  public putSyscalls(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecSyscalls[] | cdktf.IResolvable) {
    this._syscalls.internalValue = value;
  }
  public resetSyscalls() {
    this._syscalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscallsInput() {
    return this._syscalls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest k8s_security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest}
*/
export class DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest k8s_security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_profiles_operator_x_k8s_io_seccomp_profile_v1beta1_manifest',
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
  private _metadata = new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSeccompProfileV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
