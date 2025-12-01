// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestSuiteV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#metadata DataK8STestsTestkubeIoTestSuiteV1Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata;
  /**
  * TestSuiteSpec defines the desired state of TestSuite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#spec DataK8STestsTestkubeIoTestSuiteV1Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#annotations DataK8STestsTestkubeIoTestSuiteV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#labels DataK8STestsTestkubeIoTestSuiteV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV1ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#duration DataK8STestsTestkubeIoTestSuiteV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter {
  /**
  * TestSuiteStepDelay contains step delay parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#delay DataK8STestsTestkubeIoTestSuiteV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay;
  /**
  * TestSuiteStepExecute defines step to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#execute DataK8STestsTestkubeIoTestSuiteV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#type DataK8STestsTestkubeIoTestSuiteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute",
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter | cdktf.IResolvable | undefined) {
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
  private _delay = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterDelay) {
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
  private _execute = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterExecute) {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#duration DataK8STestsTestkubeIoTestSuiteV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore {
  /**
  * TestSuiteStepDelay contains step delay parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#delay DataK8STestsTestkubeIoTestSuiteV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay;
  /**
  * TestSuiteStepExecute defines step to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#execute DataK8STestsTestkubeIoTestSuiteV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#type DataK8STestsTestkubeIoTestSuiteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute",
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore | cdktf.IResolvable | undefined) {
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
  private _delay = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeDelay) {
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
  private _execute = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeExecute) {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay {
  /**
  * Duration in ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#duration DataK8STestsTestkubeIoTestSuiteV1Manifest#duration}
  */
  readonly duration?: number;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps {
  /**
  * TestSuiteStepDelay contains step delay parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#delay DataK8STestsTestkubeIoTestSuiteV1Manifest#delay}
  */
  readonly delay?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay;
  /**
  * TestSuiteStepExecute defines step to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#execute DataK8STestsTestkubeIoTestSuiteV1Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#type DataK8STestsTestkubeIoTestSuiteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayToTerraform(struct!.delay),
    execute: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteToTerraform(struct!.execute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay",
    },
    execute: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteToHclTerraform(struct!.execute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute",
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps | cdktf.IResolvable | undefined) {
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
  private _delay = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsDelay) {
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
  private _execute = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsExecute) {
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

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#key DataK8STestsTestkubeIoTestSuiteV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#optional DataK8STestsTestkubeIoTestSuiteV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#api_version DataK8STestsTestkubeIoTestSuiteV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#field_path DataK8STestsTestkubeIoTestSuiteV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#container_name DataK8STestsTestkubeIoTestSuiteV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#divisor DataK8STestsTestkubeIoTestSuiteV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#resource DataK8STestsTestkubeIoTestSuiteV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#key DataK8STestsTestkubeIoTestSuiteV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#optional DataK8STestsTestkubeIoTestSuiteV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#field_ref DataK8STestsTestkubeIoTestSuiteV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#name DataK8STestsTestkubeIoTestSuiteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#type DataK8STestsTestkubeIoTestSuiteV1Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#value DataK8STestsTestkubeIoTestSuiteV1Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#value_from DataK8STestsTestkubeIoTestSuiteV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV1ManifestSpec {
  /**
  * After steps is list of tests which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#after DataK8STestsTestkubeIoTestSuiteV1Manifest#after}
  */
  readonly after?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter[] | cdktf.IResolvable;
  /**
  * Before steps is list of tests which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#before DataK8STestsTestkubeIoTestSuiteV1Manifest#before}
  */
  readonly before?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#description DataK8STestsTestkubeIoTestSuiteV1Manifest#description}
  */
  readonly description?: string;
  /**
  * DEPRECATED execution params passed to executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#params DataK8STestsTestkubeIoTestSuiteV1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#repeats DataK8STestsTestkubeIoTestSuiteV1Manifest#repeats}
  */
  readonly repeats?: number;
  /**
  * schedule in cron job format for scheduled test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#schedule DataK8STestsTestkubeIoTestSuiteV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Steps is list of tests which will be sequentially orchestrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#steps DataK8STestsTestkubeIoTestSuiteV1Manifest#steps}
  */
  readonly steps?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps[] | cdktf.IResolvable;
  /**
  * Variables are new params with secrets attached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#variables DataK8STestsTestkubeIoTestSuiteV1Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables;
}

export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterToTerraform, false)(struct!.after),
    before: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeToTerraform, false)(struct!.before),
    description: cdktf.stringToTerraform(struct!.description),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    repeats: cdktf.numberToTerraform(struct!.repeats),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    steps: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsToTerraform, false)(struct!.steps),
    variables: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV1ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterToHclTerraform, false)(struct!.after),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterList",
    },
    before: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeToHclTerraform, false)(struct!.before),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repeats: {
      value: cdktf.numberToHclTerraform(struct!.repeats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsList",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._repeats !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeats = this._repeats;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
      this._description = undefined;
      this._params = undefined;
      this._repeats = undefined;
      this._schedule = undefined;
      this._steps.internalValue = undefined;
      this._variables.internalValue = undefined;
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
      this._params = value.params;
      this._repeats = value.repeats;
      this._schedule = value.schedule;
      this._steps.internalValue = value.steps;
      this._variables.internalValue = value.variables;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfterList(this, "after", false);
  public get after() {
    return this._after;
  }
  public putAfter(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecAfter[] | cdktf.IResolvable) {
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
  private _before = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBeforeList(this, "before", false);
  public get before() {
    return this._before;
  }
  public putBefore(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecBefore[] | cdktf.IResolvable) {
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpecVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest k8s_tests_testkube_io_test_suite_v1_manifest}
*/
export class DataK8STestsTestkubeIoTestSuiteV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_suite_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestSuiteV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestSuiteV1Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestSuiteV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestSuiteV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_suite_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_suite_v1_manifest k8s_tests_testkube_io_test_suite_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestSuiteV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestSuiteV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_suite_v1_manifest',
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
  private _metadata = new DataK8STestsTestkubeIoTestSuiteV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestSuiteV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestSuiteV1ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestSuiteV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestSuiteV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestSuiteV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
