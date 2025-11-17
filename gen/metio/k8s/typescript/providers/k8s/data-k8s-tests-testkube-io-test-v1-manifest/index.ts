// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#metadata DataK8STestsTestkubeIoTestV1Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestV1ManifestMetadata;
  /**
  * TestSpec defines the desired state of Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#spec DataK8STestsTestkubeIoTestV1Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestV1ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#annotations DataK8STestsTestkubeIoTestV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#labels DataK8STestsTestkubeIoTestV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#name DataK8STestsTestkubeIoTestV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#namespace DataK8STestsTestkubeIoTestV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestV1ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV1ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#duration DataK8STestsTestkubeIoTestV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#name DataK8STestsTestkubeIoTestV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#namespace DataK8STestsTestkubeIoTestV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._stopOnFailure = value.stopOnFailure;
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

  // stop_on_failure - computed: false, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#delay DataK8STestsTestkubeIoTestV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#execute DataK8STestsTestkubeIoTestV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#type DataK8STestsTestkubeIoTestV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecAfterToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute",
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

export class DataK8STestsTestkubeIoTestV1ManifestSpecAfterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay.internalValue = value.delay;
      this._execute.internalValue = value.execute;
      this._type = value.type;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfterDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfterExecute) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
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
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecAfterList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV1ManifestSpecAfter[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV1ManifestSpecAfterOutputReference {
    return new DataK8STestsTestkubeIoTestV1ManifestSpecAfterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#duration DataK8STestsTestkubeIoTestV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#name DataK8STestsTestkubeIoTestV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#namespace DataK8STestsTestkubeIoTestV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._stopOnFailure = value.stopOnFailure;
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

  // stop_on_failure - computed: false, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#delay DataK8STestsTestkubeIoTestV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#execute DataK8STestsTestkubeIoTestV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#type DataK8STestsTestkubeIoTestV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecBeforeToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute",
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

export class DataK8STestsTestkubeIoTestV1ManifestSpecBeforeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay.internalValue = value.delay;
      this._execute.internalValue = value.execute;
      this._type = value.type;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestV1ManifestSpecBeforeExecute) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
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
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecBeforeList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV1ManifestSpecBefore[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV1ManifestSpecBeforeOutputReference {
    return new DataK8STestsTestkubeIoTestV1ManifestSpecBeforeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#duration DataK8STestsTestkubeIoTestV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#name DataK8STestsTestkubeIoTestV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#namespace DataK8STestsTestkubeIoTestV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._stopOnFailure = value.stopOnFailure;
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

  // stop_on_failure - computed: false, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpecSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#delay DataK8STestsTestkubeIoTestV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#execute DataK8STestsTestkubeIoTestV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#type DataK8STestsTestkubeIoTestV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecStepsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute",
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

export class DataK8STestsTestkubeIoTestV1ManifestSpecStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpecSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpecSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay.internalValue = value.delay;
      this._execute.internalValue = value.execute;
      this._type = value.type;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestV1ManifestSpecStepsDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestV1ManifestSpecStepsExecute) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
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
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecStepsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV1ManifestSpecSteps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV1ManifestSpecStepsOutputReference {
    return new DataK8STestsTestkubeIoTestV1ManifestSpecStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV1ManifestSpec {
  /**
  * After steps is list of scripts which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#after DataK8STestsTestkubeIoTestV1Manifest#after}
  */
  readonly after?: DataK8STestsTestkubeIoTestV1ManifestSpecAfter[] | cdktf.IResolvable;
  /**
  * Before steps is list of scripts which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#before DataK8STestsTestkubeIoTestV1Manifest#before}
  */
  readonly before?: DataK8STestsTestkubeIoTestV1ManifestSpecBefore[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#description DataK8STestsTestkubeIoTestV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#repeats DataK8STestsTestkubeIoTestV1Manifest#repeats}
  */
  readonly repeats?: number;
  /**
  * Steps is list of scripts which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#steps DataK8STestsTestkubeIoTestV1Manifest#steps}
  */
  readonly steps?: DataK8STestsTestkubeIoTestV1ManifestSpecSteps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#tags DataK8STestsTestkubeIoTestV1Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8STestsTestkubeIoTestV1ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(dataK8STestsTestkubeIoTestV1ManifestSpecAfterToTerraform, false)(struct!.after),
    before: cdktf.listMapper(dataK8STestsTestkubeIoTestV1ManifestSpecBeforeToTerraform, false)(struct!.before),
    description: cdktf.stringToTerraform(struct!.description),
    repeats: cdktf.numberToTerraform(struct!.repeats),
    steps: cdktf.listMapper(dataK8STestsTestkubeIoTestV1ManifestSpecStepsToTerraform, false)(struct!.steps),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8STestsTestkubeIoTestV1ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV1ManifestSpecAfterToHclTerraform, false)(struct!.after),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecAfterList",
    },
    before: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV1ManifestSpecBeforeToHclTerraform, false)(struct!.before),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecBeforeList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeats: {
      value: cdktf.numberToHclTerraform(struct!.repeats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    steps: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV1ManifestSpecStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpecStepsList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._repeats !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeats = this._repeats;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
      this._description = undefined;
      this._repeats = undefined;
      this._steps.internalValue = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
      this._description = value.description;
      this._repeats = value.repeats;
      this._steps.internalValue = value.steps;
      this._tags = value.tags;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after = new DataK8STestsTestkubeIoTestV1ManifestSpecAfterList(this, "after", false);
  public get after() {
    return this._after;
  }
  public putAfter(value: DataK8STestsTestkubeIoTestV1ManifestSpecAfter[] | cdktf.IResolvable) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: false, optional: true, required: false
  private _before = new DataK8STestsTestkubeIoTestV1ManifestSpecBeforeList(this, "before", false);
  public get before() {
    return this._before;
  }
  public putBefore(value: DataK8STestsTestkubeIoTestV1ManifestSpecBefore[] | cdktf.IResolvable) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
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

  // repeats - computed: false, optional: true, required: false
  private _repeats?: number; 
  public get repeats() {
    return this.getNumberAttribute('repeats');
  }
  public set repeats(value: number) {
    this._repeats = value;
  }
  public resetRepeats() {
    this._repeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsInput() {
    return this._repeats;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new DataK8STestsTestkubeIoTestV1ManifestSpecStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataK8STestsTestkubeIoTestV1ManifestSpecSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest k8s_tests_testkube_io_test_v1_manifest}
*/
export class DataK8STestsTestkubeIoTestV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestV1Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/tests_testkube_io_test_v1_manifest k8s_tests_testkube_io_test_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_v1_manifest',
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
  private _metadata = new DataK8STestsTestkubeIoTestV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestV1ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestV1ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
