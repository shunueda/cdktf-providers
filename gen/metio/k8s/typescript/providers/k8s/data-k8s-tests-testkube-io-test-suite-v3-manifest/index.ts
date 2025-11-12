// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestSuiteV3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#metadata DataK8STestsTestkubeIoTestSuiteV3Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata;
  /**
  * TestSuiteSpec defines the desired state of TestSuite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#spec DataK8STestsTestkubeIoTestSuiteV3Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#annotations DataK8STestsTestkubeIoTestSuiteV3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#labels DataK8STestsTestkubeIoTestSuiteV3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#namespace DataK8STestsTestkubeIoTestSuiteV3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#all_previous_steps DataK8STestsTestkubeIoTestSuiteV3Manifest#all_previous_steps}
  */
  readonly allPreviousSteps?: boolean | cdktf.IResolvable;
  /**
  * previous step numbers starting from 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_step_numbers DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_step_numbers}
  */
  readonly previousStepNumbers?: string[];
  /**
  * previous test names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_test_names DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_test_names}
  */
  readonly previousTestNames?: string[];
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_previous_steps: cdktf.booleanToTerraform(struct!.allPreviousSteps),
    previous_step_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousStepNumbers),
    previous_test_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousTestNames),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_previous_steps: {
      value: cdktf.booleanToHclTerraform(struct!.allPreviousSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    previous_step_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousStepNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    previous_test_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousTestNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPreviousSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPreviousSteps = this._allPreviousSteps;
    }
    if (this._previousStepNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousStepNumbers = this._previousStepNumbers;
    }
    if (this._previousTestNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousTestNames = this._previousTestNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPreviousSteps = undefined;
      this._previousStepNumbers = undefined;
      this._previousTestNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPreviousSteps = value.allPreviousSteps;
      this._previousStepNumbers = value.previousStepNumbers;
      this._previousTestNames = value.previousTestNames;
    }
  }

  // all_previous_steps - computed: false, optional: true, required: false
  private _allPreviousSteps?: boolean | cdktf.IResolvable; 
  public get allPreviousSteps() {
    return this.getBooleanAttribute('all_previous_steps');
  }
  public set allPreviousSteps(value: boolean | cdktf.IResolvable) {
    this._allPreviousSteps = value;
  }
  public resetAllPreviousSteps() {
    this._allPreviousSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPreviousStepsInput() {
    return this._allPreviousSteps;
  }

  // previous_step_numbers - computed: false, optional: true, required: false
  private _previousStepNumbers?: string[]; 
  public get previousStepNumbers() {
    return this.getListAttribute('previous_step_numbers');
  }
  public set previousStepNumbers(value: string[]) {
    this._previousStepNumbers = value;
  }
  public resetPreviousStepNumbers() {
    this._previousStepNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousStepNumbersInput() {
    return this._previousStepNumbers;
  }

  // previous_test_names - computed: false, optional: true, required: false
  private _previousTestNames?: string[]; 
  public get previousTestNames() {
    return this.getListAttribute('previous_test_names');
  }
  public set previousTestNames(value: string[]) {
    this._previousTestNames = value;
  }
  public resetPreviousTestNames() {
    this._previousTestNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousTestNamesInput() {
    return this._previousTestNames;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext {
  /**
  * Context value depending from its type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#context DataK8STestsTestkubeIoTestSuiteV3Manifest#context}
  */
  readonly context?: string;
  /**
  * One of possible context types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._type = value.type;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#api_version DataK8STestsTestkubeIoTestSuiteV3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_path DataK8STestsTestkubeIoTestSuiteV3Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#container_name DataK8STestsTestkubeIoTestSuiteV3Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#divisor DataK8STestsTestkubeIoTestSuiteV3Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource DataK8STestsTestkubeIoTestSuiteV3Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value DataK8STestsTestkubeIoTestSuiteV3Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value_from DataK8STestsTestkubeIoTestSuiteV3Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest {
  /**
  * additional executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args DataK8STestsTestkubeIoTestSuiteV3Manifest#args}
  */
  readonly args?: string[];
  /**
  * usage mode for arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args_mode DataK8STestsTestkubeIoTestSuiteV3Manifest#args_mode}
  */
  readonly argsMode?: string;
  /**
  * executor binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#command DataK8STestsTestkubeIoTestSuiteV3Manifest#command}
  */
  readonly command?: string[];
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * cron job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template_reference}
  */
  readonly cronJobTemplateReference?: string;
  /**
  * whether webhooks should be called on execution Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#disable_webhooks DataK8STestsTestkubeIoTestSuiteV3Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * test execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_labels DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#http_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#https_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * negative test will fail the execution if it is a success and it will succeed if it is a failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#negative_test DataK8STestsTestkubeIoTestSuiteV3Manifest#negative_test}
  */
  readonly negativeTest?: boolean | cdktf.IResolvable;
  /**
  * pvc template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template}
  */
  readonly pvcTemplate?: string;
  /**
  * pvc template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template_reference}
  */
  readonly pvcTemplateReference?: string;
  /**
  * RunningContext for test or test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#running_context DataK8STestsTestkubeIoTestSuiteV3Manifest#running_context}
  */
  readonly runningContext?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * scraper template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template_reference}
  */
  readonly scraperTemplateReference?: string;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#sync DataK8STestsTestkubeIoTestSuiteV3Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#variables DataK8STestsTestkubeIoTestSuiteV3Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    args_mode: cdktf.stringToTerraform(struct!.argsMode),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    cron_job_template_reference: cdktf.stringToTerraform(struct!.cronJobTemplateReference),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    negative_test: cdktf.booleanToTerraform(struct!.negativeTest),
    pvc_template: cdktf.stringToTerraform(struct!.pvcTemplate),
    pvc_template_reference: cdktf.stringToTerraform(struct!.pvcTemplateReference),
    running_context: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextToTerraform(struct!.runningContext),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    scraper_template_reference: cdktf.stringToTerraform(struct!.scraperTemplateReference),
    sync: cdktf.booleanToTerraform(struct!.sync),
    variables: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest | cdktf.IResolvable): any {
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
    args_mode: {
      value: cdktf.stringToHclTerraform(struct!.argsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cron_job_template: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_test: {
      value: cdktf.booleanToHclTerraform(struct!.negativeTest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pvc_template: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_context: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextToHclTerraform(struct!.runningContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._argsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsMode = this._argsMode;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._cronJobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplateReference = this._cronJobTemplateReference;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
    }
    if (this._negativeTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTest = this._negativeTest;
    }
    if (this._pvcTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate;
    }
    if (this._pvcTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplateReference = this._pvcTemplateReference;
    }
    if (this._runningContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningContext = this._runningContext?.internalValue;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._scraperTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplateReference = this._scraperTemplateReference;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._argsMode = undefined;
      this._command = undefined;
      this._cronJobTemplate = undefined;
      this._cronJobTemplateReference = undefined;
      this._disableWebhooks = undefined;
      this._executionLabels = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._jobTemplate = undefined;
      this._jobTemplateReference = undefined;
      this._negativeTest = undefined;
      this._pvcTemplate = undefined;
      this._pvcTemplateReference = undefined;
      this._runningContext.internalValue = undefined;
      this._scraperTemplate = undefined;
      this._scraperTemplateReference = undefined;
      this._sync = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._argsMode = value.argsMode;
      this._command = value.command;
      this._cronJobTemplate = value.cronJobTemplate;
      this._cronJobTemplateReference = value.cronJobTemplateReference;
      this._disableWebhooks = value.disableWebhooks;
      this._executionLabels = value.executionLabels;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._jobTemplate = value.jobTemplate;
      this._jobTemplateReference = value.jobTemplateReference;
      this._negativeTest = value.negativeTest;
      this._pvcTemplate = value.pvcTemplate;
      this._pvcTemplateReference = value.pvcTemplateReference;
      this._runningContext.internalValue = value.runningContext;
      this._scraperTemplate = value.scraperTemplate;
      this._scraperTemplateReference = value.scraperTemplateReference;
      this._sync = value.sync;
      this._variables.internalValue = value.variables;
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

  // args_mode - computed: false, optional: true, required: false
  private _argsMode?: string; 
  public get argsMode() {
    return this.getStringAttribute('args_mode');
  }
  public set argsMode(value: string) {
    this._argsMode = value;
  }
  public resetArgsMode() {
    this._argsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsModeInput() {
    return this._argsMode;
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

  // cron_job_template - computed: false, optional: true, required: false
  private _cronJobTemplate?: string; 
  public get cronJobTemplate() {
    return this.getStringAttribute('cron_job_template');
  }
  public set cronJobTemplate(value: string) {
    this._cronJobTemplate = value;
  }
  public resetCronJobTemplate() {
    this._cronJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateInput() {
    return this._cronJobTemplate;
  }

  // cron_job_template_reference - computed: false, optional: true, required: false
  private _cronJobTemplateReference?: string; 
  public get cronJobTemplateReference() {
    return this.getStringAttribute('cron_job_template_reference');
  }
  public set cronJobTemplateReference(value: string) {
    this._cronJobTemplateReference = value;
  }
  public resetCronJobTemplateReference() {
    this._cronJobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateReferenceInput() {
    return this._cronJobTemplateReference;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // execution_labels - computed: false, optional: true, required: false
  private _executionLabels?: { [key: string]: string }; 
  public get executionLabels() {
    return this.getStringMapAttribute('execution_labels');
  }
  public set executionLabels(value: { [key: string]: string }) {
    this._executionLabels = value;
  }
  public resetExecutionLabels() {
    this._executionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLabelsInput() {
    return this._executionLabels;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
  }

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
  }

  // negative_test - computed: false, optional: true, required: false
  private _negativeTest?: boolean | cdktf.IResolvable; 
  public get negativeTest() {
    return this.getBooleanAttribute('negative_test');
  }
  public set negativeTest(value: boolean | cdktf.IResolvable) {
    this._negativeTest = value;
  }
  public resetNegativeTest() {
    this._negativeTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTestInput() {
    return this._negativeTest;
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate?: string; 
  public get pvcTemplate() {
    return this.getStringAttribute('pvc_template');
  }
  public set pvcTemplate(value: string) {
    this._pvcTemplate = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate;
  }

  // pvc_template_reference - computed: false, optional: true, required: false
  private _pvcTemplateReference?: string; 
  public get pvcTemplateReference() {
    return this.getStringAttribute('pvc_template_reference');
  }
  public set pvcTemplateReference(value: string) {
    this._pvcTemplateReference = value;
  }
  public resetPvcTemplateReference() {
    this._pvcTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateReferenceInput() {
    return this._pvcTemplateReference;
  }

  // running_context - computed: false, optional: true, required: false
  private _runningContext = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContextOutputReference(this, "running_context");
  public get runningContext() {
    return this._runningContext;
  }
  public putRunningContext(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestRunningContext) {
    this._runningContext.internalValue = value;
  }
  public resetRunningContext() {
    this._runningContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningContextInput() {
    return this._runningContext.internalValue;
  }

  // scraper_template - computed: false, optional: true, required: false
  private _scraperTemplate?: string; 
  public get scraperTemplate() {
    return this.getStringAttribute('scraper_template');
  }
  public set scraperTemplate(value: string) {
    this._scraperTemplate = value;
  }
  public resetScraperTemplate() {
    this._scraperTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateInput() {
    return this._scraperTemplate;
  }

  // scraper_template_reference - computed: false, optional: true, required: false
  private _scraperTemplateReference?: string; 
  public get scraperTemplateReference() {
    return this.getStringAttribute('scraper_template_reference');
  }
  public set scraperTemplateReference(value: string) {
    this._scraperTemplateReference = value;
  }
  public resetScraperTemplateReference() {
    this._scraperTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateReferenceInput() {
    return this._scraperTemplateReference;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestVariables) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute {
  /**
  * delay duration in time units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#delay DataK8STestsTestkubeIoTestSuiteV3Manifest#delay}
  */
  readonly delay?: string;
  /**
  * TestSuiteStepExecutionRequest contains parameters to be used by the executions. These fields will be passed to the execution when a Test Suite is queued for execution. TestSuiteStepExecutionRequest parameters have the highest priority. They override the values coming from Test Suites, Tests, and Test Executions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_request DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#test DataK8STestsTestkubeIoTestSuiteV3Manifest#test}
  */
  readonly test?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    execution_request: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestToTerraform(struct!.executionRequest),
    test: cdktf.stringToTerraform(struct!.test),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_request: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest",
    },
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._executionRequest.internalValue = undefined;
      this._test = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._executionRequest.internalValue = value.executionRequest;
      this._test = value.test;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter {
  /**
  * options to download artifacts from previous steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#download_artifacts DataK8STestsTestkubeIoTestSuiteV3Manifest#download_artifacts}
  */
  readonly downloadArtifacts?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execute DataK8STestsTestkubeIoTestSuiteV3Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV3Manifest#stop_on_failure}
  */
  readonly stopOnFailure: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_artifacts: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsToTerraform(struct!.downloadArtifacts),
    execute: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteToTerraform, false)(struct!.execute),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_artifacts: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsToHclTerraform(struct!.downloadArtifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts",
    },
    execute: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteToHclTerraform, false)(struct!.execute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteList",
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadArtifacts = this._downloadArtifacts?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = value.downloadArtifacts;
      this._execute.internalValue = value.execute;
      this._stopOnFailure = value.stopOnFailure;
    }
  }

  // download_artifacts - computed: false, optional: true, required: false
  private _downloadArtifacts = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifactsOutputReference(this, "download_artifacts");
  public get downloadArtifacts() {
    return this._downloadArtifacts;
  }
  public putDownloadArtifacts(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterDownloadArtifacts) {
    this._downloadArtifacts.internalValue = value;
  }
  public resetDownloadArtifacts() {
    this._downloadArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadArtifactsInput() {
    return this._downloadArtifacts.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecuteList(this, "execute", false);
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterExecute[] | cdktf.IResolvable) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
  }

  // stop_on_failure - computed: false, optional: false, required: true
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#all_previous_steps DataK8STestsTestkubeIoTestSuiteV3Manifest#all_previous_steps}
  */
  readonly allPreviousSteps?: boolean | cdktf.IResolvable;
  /**
  * previous step numbers starting from 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_step_numbers DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_step_numbers}
  */
  readonly previousStepNumbers?: string[];
  /**
  * previous test names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_test_names DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_test_names}
  */
  readonly previousTestNames?: string[];
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_previous_steps: cdktf.booleanToTerraform(struct!.allPreviousSteps),
    previous_step_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousStepNumbers),
    previous_test_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousTestNames),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_previous_steps: {
      value: cdktf.booleanToHclTerraform(struct!.allPreviousSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    previous_step_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousStepNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    previous_test_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousTestNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPreviousSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPreviousSteps = this._allPreviousSteps;
    }
    if (this._previousStepNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousStepNumbers = this._previousStepNumbers;
    }
    if (this._previousTestNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousTestNames = this._previousTestNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPreviousSteps = undefined;
      this._previousStepNumbers = undefined;
      this._previousTestNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPreviousSteps = value.allPreviousSteps;
      this._previousStepNumbers = value.previousStepNumbers;
      this._previousTestNames = value.previousTestNames;
    }
  }

  // all_previous_steps - computed: false, optional: true, required: false
  private _allPreviousSteps?: boolean | cdktf.IResolvable; 
  public get allPreviousSteps() {
    return this.getBooleanAttribute('all_previous_steps');
  }
  public set allPreviousSteps(value: boolean | cdktf.IResolvable) {
    this._allPreviousSteps = value;
  }
  public resetAllPreviousSteps() {
    this._allPreviousSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPreviousStepsInput() {
    return this._allPreviousSteps;
  }

  // previous_step_numbers - computed: false, optional: true, required: false
  private _previousStepNumbers?: string[]; 
  public get previousStepNumbers() {
    return this.getListAttribute('previous_step_numbers');
  }
  public set previousStepNumbers(value: string[]) {
    this._previousStepNumbers = value;
  }
  public resetPreviousStepNumbers() {
    this._previousStepNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousStepNumbersInput() {
    return this._previousStepNumbers;
  }

  // previous_test_names - computed: false, optional: true, required: false
  private _previousTestNames?: string[]; 
  public get previousTestNames() {
    return this.getListAttribute('previous_test_names');
  }
  public set previousTestNames(value: string[]) {
    this._previousTestNames = value;
  }
  public resetPreviousTestNames() {
    this._previousTestNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousTestNamesInput() {
    return this._previousTestNames;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext {
  /**
  * Context value depending from its type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#context DataK8STestsTestkubeIoTestSuiteV3Manifest#context}
  */
  readonly context?: string;
  /**
  * One of possible context types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._type = value.type;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#api_version DataK8STestsTestkubeIoTestSuiteV3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_path DataK8STestsTestkubeIoTestSuiteV3Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#container_name DataK8STestsTestkubeIoTestSuiteV3Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#divisor DataK8STestsTestkubeIoTestSuiteV3Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource DataK8STestsTestkubeIoTestSuiteV3Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value DataK8STestsTestkubeIoTestSuiteV3Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value_from DataK8STestsTestkubeIoTestSuiteV3Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest {
  /**
  * additional executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args DataK8STestsTestkubeIoTestSuiteV3Manifest#args}
  */
  readonly args?: string[];
  /**
  * usage mode for arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args_mode DataK8STestsTestkubeIoTestSuiteV3Manifest#args_mode}
  */
  readonly argsMode?: string;
  /**
  * executor binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#command DataK8STestsTestkubeIoTestSuiteV3Manifest#command}
  */
  readonly command?: string[];
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * cron job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template_reference}
  */
  readonly cronJobTemplateReference?: string;
  /**
  * whether webhooks should be called on execution Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#disable_webhooks DataK8STestsTestkubeIoTestSuiteV3Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * test execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_labels DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#http_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#https_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * negative test will fail the execution if it is a success and it will succeed if it is a failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#negative_test DataK8STestsTestkubeIoTestSuiteV3Manifest#negative_test}
  */
  readonly negativeTest?: boolean | cdktf.IResolvable;
  /**
  * pvc template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template}
  */
  readonly pvcTemplate?: string;
  /**
  * pvc template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template_reference}
  */
  readonly pvcTemplateReference?: string;
  /**
  * RunningContext for test or test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#running_context DataK8STestsTestkubeIoTestSuiteV3Manifest#running_context}
  */
  readonly runningContext?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * scraper template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template_reference}
  */
  readonly scraperTemplateReference?: string;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#sync DataK8STestsTestkubeIoTestSuiteV3Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#variables DataK8STestsTestkubeIoTestSuiteV3Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    args_mode: cdktf.stringToTerraform(struct!.argsMode),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    cron_job_template_reference: cdktf.stringToTerraform(struct!.cronJobTemplateReference),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    negative_test: cdktf.booleanToTerraform(struct!.negativeTest),
    pvc_template: cdktf.stringToTerraform(struct!.pvcTemplate),
    pvc_template_reference: cdktf.stringToTerraform(struct!.pvcTemplateReference),
    running_context: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextToTerraform(struct!.runningContext),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    scraper_template_reference: cdktf.stringToTerraform(struct!.scraperTemplateReference),
    sync: cdktf.booleanToTerraform(struct!.sync),
    variables: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest | cdktf.IResolvable): any {
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
    args_mode: {
      value: cdktf.stringToHclTerraform(struct!.argsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cron_job_template: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_test: {
      value: cdktf.booleanToHclTerraform(struct!.negativeTest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pvc_template: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_context: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextToHclTerraform(struct!.runningContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._argsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsMode = this._argsMode;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._cronJobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplateReference = this._cronJobTemplateReference;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
    }
    if (this._negativeTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTest = this._negativeTest;
    }
    if (this._pvcTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate;
    }
    if (this._pvcTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplateReference = this._pvcTemplateReference;
    }
    if (this._runningContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningContext = this._runningContext?.internalValue;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._scraperTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplateReference = this._scraperTemplateReference;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._argsMode = undefined;
      this._command = undefined;
      this._cronJobTemplate = undefined;
      this._cronJobTemplateReference = undefined;
      this._disableWebhooks = undefined;
      this._executionLabels = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._jobTemplate = undefined;
      this._jobTemplateReference = undefined;
      this._negativeTest = undefined;
      this._pvcTemplate = undefined;
      this._pvcTemplateReference = undefined;
      this._runningContext.internalValue = undefined;
      this._scraperTemplate = undefined;
      this._scraperTemplateReference = undefined;
      this._sync = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._argsMode = value.argsMode;
      this._command = value.command;
      this._cronJobTemplate = value.cronJobTemplate;
      this._cronJobTemplateReference = value.cronJobTemplateReference;
      this._disableWebhooks = value.disableWebhooks;
      this._executionLabels = value.executionLabels;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._jobTemplate = value.jobTemplate;
      this._jobTemplateReference = value.jobTemplateReference;
      this._negativeTest = value.negativeTest;
      this._pvcTemplate = value.pvcTemplate;
      this._pvcTemplateReference = value.pvcTemplateReference;
      this._runningContext.internalValue = value.runningContext;
      this._scraperTemplate = value.scraperTemplate;
      this._scraperTemplateReference = value.scraperTemplateReference;
      this._sync = value.sync;
      this._variables.internalValue = value.variables;
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

  // args_mode - computed: false, optional: true, required: false
  private _argsMode?: string; 
  public get argsMode() {
    return this.getStringAttribute('args_mode');
  }
  public set argsMode(value: string) {
    this._argsMode = value;
  }
  public resetArgsMode() {
    this._argsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsModeInput() {
    return this._argsMode;
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

  // cron_job_template - computed: false, optional: true, required: false
  private _cronJobTemplate?: string; 
  public get cronJobTemplate() {
    return this.getStringAttribute('cron_job_template');
  }
  public set cronJobTemplate(value: string) {
    this._cronJobTemplate = value;
  }
  public resetCronJobTemplate() {
    this._cronJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateInput() {
    return this._cronJobTemplate;
  }

  // cron_job_template_reference - computed: false, optional: true, required: false
  private _cronJobTemplateReference?: string; 
  public get cronJobTemplateReference() {
    return this.getStringAttribute('cron_job_template_reference');
  }
  public set cronJobTemplateReference(value: string) {
    this._cronJobTemplateReference = value;
  }
  public resetCronJobTemplateReference() {
    this._cronJobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateReferenceInput() {
    return this._cronJobTemplateReference;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // execution_labels - computed: false, optional: true, required: false
  private _executionLabels?: { [key: string]: string }; 
  public get executionLabels() {
    return this.getStringMapAttribute('execution_labels');
  }
  public set executionLabels(value: { [key: string]: string }) {
    this._executionLabels = value;
  }
  public resetExecutionLabels() {
    this._executionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLabelsInput() {
    return this._executionLabels;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
  }

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
  }

  // negative_test - computed: false, optional: true, required: false
  private _negativeTest?: boolean | cdktf.IResolvable; 
  public get negativeTest() {
    return this.getBooleanAttribute('negative_test');
  }
  public set negativeTest(value: boolean | cdktf.IResolvable) {
    this._negativeTest = value;
  }
  public resetNegativeTest() {
    this._negativeTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTestInput() {
    return this._negativeTest;
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate?: string; 
  public get pvcTemplate() {
    return this.getStringAttribute('pvc_template');
  }
  public set pvcTemplate(value: string) {
    this._pvcTemplate = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate;
  }

  // pvc_template_reference - computed: false, optional: true, required: false
  private _pvcTemplateReference?: string; 
  public get pvcTemplateReference() {
    return this.getStringAttribute('pvc_template_reference');
  }
  public set pvcTemplateReference(value: string) {
    this._pvcTemplateReference = value;
  }
  public resetPvcTemplateReference() {
    this._pvcTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateReferenceInput() {
    return this._pvcTemplateReference;
  }

  // running_context - computed: false, optional: true, required: false
  private _runningContext = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContextOutputReference(this, "running_context");
  public get runningContext() {
    return this._runningContext;
  }
  public putRunningContext(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestRunningContext) {
    this._runningContext.internalValue = value;
  }
  public resetRunningContext() {
    this._runningContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningContextInput() {
    return this._runningContext.internalValue;
  }

  // scraper_template - computed: false, optional: true, required: false
  private _scraperTemplate?: string; 
  public get scraperTemplate() {
    return this.getStringAttribute('scraper_template');
  }
  public set scraperTemplate(value: string) {
    this._scraperTemplate = value;
  }
  public resetScraperTemplate() {
    this._scraperTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateInput() {
    return this._scraperTemplate;
  }

  // scraper_template_reference - computed: false, optional: true, required: false
  private _scraperTemplateReference?: string; 
  public get scraperTemplateReference() {
    return this.getStringAttribute('scraper_template_reference');
  }
  public set scraperTemplateReference(value: string) {
    this._scraperTemplateReference = value;
  }
  public resetScraperTemplateReference() {
    this._scraperTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateReferenceInput() {
    return this._scraperTemplateReference;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestVariables) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute {
  /**
  * delay duration in time units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#delay DataK8STestsTestkubeIoTestSuiteV3Manifest#delay}
  */
  readonly delay?: string;
  /**
  * TestSuiteStepExecutionRequest contains parameters to be used by the executions. These fields will be passed to the execution when a Test Suite is queued for execution. TestSuiteStepExecutionRequest parameters have the highest priority. They override the values coming from Test Suites, Tests, and Test Executions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_request DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#test DataK8STestsTestkubeIoTestSuiteV3Manifest#test}
  */
  readonly test?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    execution_request: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestToTerraform(struct!.executionRequest),
    test: cdktf.stringToTerraform(struct!.test),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_request: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest",
    },
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._executionRequest.internalValue = undefined;
      this._test = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._executionRequest.internalValue = value.executionRequest;
      this._test = value.test;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore {
  /**
  * options to download artifacts from previous steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#download_artifacts DataK8STestsTestkubeIoTestSuiteV3Manifest#download_artifacts}
  */
  readonly downloadArtifacts?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execute DataK8STestsTestkubeIoTestSuiteV3Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV3Manifest#stop_on_failure}
  */
  readonly stopOnFailure: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_artifacts: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsToTerraform(struct!.downloadArtifacts),
    execute: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteToTerraform, false)(struct!.execute),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_artifacts: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsToHclTerraform(struct!.downloadArtifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts",
    },
    execute: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteToHclTerraform, false)(struct!.execute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteList",
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadArtifacts = this._downloadArtifacts?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = value.downloadArtifacts;
      this._execute.internalValue = value.execute;
      this._stopOnFailure = value.stopOnFailure;
    }
  }

  // download_artifacts - computed: false, optional: true, required: false
  private _downloadArtifacts = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifactsOutputReference(this, "download_artifacts");
  public get downloadArtifacts() {
    return this._downloadArtifacts;
  }
  public putDownloadArtifacts(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeDownloadArtifacts) {
    this._downloadArtifacts.internalValue = value;
  }
  public resetDownloadArtifacts() {
    this._downloadArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadArtifactsInput() {
    return this._downloadArtifacts.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecuteList(this, "execute", false);
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeExecute[] | cdktf.IResolvable) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
  }

  // stop_on_failure - computed: false, optional: false, required: true
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#api_version DataK8STestsTestkubeIoTestSuiteV3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_path DataK8STestsTestkubeIoTestSuiteV3Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#container_name DataK8STestsTestkubeIoTestSuiteV3Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#divisor DataK8STestsTestkubeIoTestSuiteV3Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource DataK8STestsTestkubeIoTestSuiteV3Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value DataK8STestsTestkubeIoTestSuiteV3Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value_from DataK8STestsTestkubeIoTestSuiteV3Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest {
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template_reference}
  */
  readonly cronJobTemplateReference?: string;
  /**
  * whether webhooks should be called on execution Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#disable_webhooks DataK8STestsTestkubeIoTestSuiteV3Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_labels DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#http_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#https_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * test suite labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#labels DataK8STestsTestkubeIoTestSuiteV3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * test execution custom name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * test kubernetes namespace ('testkube' when not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#namespace DataK8STestsTestkubeIoTestSuiteV3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * pvc template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template}
  */
  readonly pvcTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template_reference}
  */
  readonly pvcTemplateReference?: string;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template_reference}
  */
  readonly scraperTemplateReference?: string;
  /**
  * secret uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#secret_uuid DataK8STestsTestkubeIoTestSuiteV3Manifest#secret_uuid}
  */
  readonly secretUuid?: string;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#sync DataK8STestsTestkubeIoTestSuiteV3Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * timeout for test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#timeout DataK8STestsTestkubeIoTestSuiteV3Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#variables DataK8STestsTestkubeIoTestSuiteV3Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    cron_job_template_reference: cdktf.stringToTerraform(struct!.cronJobTemplateReference),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pvc_template: cdktf.stringToTerraform(struct!.pvcTemplate),
    pvc_template_reference: cdktf.stringToTerraform(struct!.pvcTemplateReference),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    scraper_template_reference: cdktf.stringToTerraform(struct!.scraperTemplateReference),
    secret_uuid: cdktf.stringToTerraform(struct!.secretUuid),
    sync: cdktf.booleanToTerraform(struct!.sync),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    variables: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_job_template: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
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
    pvc_template: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_uuid: {
      value: cdktf.stringToHclTerraform(struct!.secretUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
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
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._cronJobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplateReference = this._cronJobTemplateReference;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
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
    if (this._pvcTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate;
    }
    if (this._pvcTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplateReference = this._pvcTemplateReference;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._scraperTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplateReference = this._scraperTemplateReference;
    }
    if (this._secretUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUuid = this._secretUuid;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronJobTemplate = undefined;
      this._cronJobTemplateReference = undefined;
      this._disableWebhooks = undefined;
      this._executionLabels = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._jobTemplate = undefined;
      this._jobTemplateReference = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pvcTemplate = undefined;
      this._pvcTemplateReference = undefined;
      this._scraperTemplate = undefined;
      this._scraperTemplateReference = undefined;
      this._secretUuid = undefined;
      this._sync = undefined;
      this._timeout = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronJobTemplate = value.cronJobTemplate;
      this._cronJobTemplateReference = value.cronJobTemplateReference;
      this._disableWebhooks = value.disableWebhooks;
      this._executionLabels = value.executionLabels;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._jobTemplate = value.jobTemplate;
      this._jobTemplateReference = value.jobTemplateReference;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pvcTemplate = value.pvcTemplate;
      this._pvcTemplateReference = value.pvcTemplateReference;
      this._scraperTemplate = value.scraperTemplate;
      this._scraperTemplateReference = value.scraperTemplateReference;
      this._secretUuid = value.secretUuid;
      this._sync = value.sync;
      this._timeout = value.timeout;
      this._variables.internalValue = value.variables;
    }
  }

  // cron_job_template - computed: false, optional: true, required: false
  private _cronJobTemplate?: string; 
  public get cronJobTemplate() {
    return this.getStringAttribute('cron_job_template');
  }
  public set cronJobTemplate(value: string) {
    this._cronJobTemplate = value;
  }
  public resetCronJobTemplate() {
    this._cronJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateInput() {
    return this._cronJobTemplate;
  }

  // cron_job_template_reference - computed: false, optional: true, required: false
  private _cronJobTemplateReference?: string; 
  public get cronJobTemplateReference() {
    return this.getStringAttribute('cron_job_template_reference');
  }
  public set cronJobTemplateReference(value: string) {
    this._cronJobTemplateReference = value;
  }
  public resetCronJobTemplateReference() {
    this._cronJobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateReferenceInput() {
    return this._cronJobTemplateReference;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // execution_labels - computed: false, optional: true, required: false
  private _executionLabels?: { [key: string]: string }; 
  public get executionLabels() {
    return this.getStringMapAttribute('execution_labels');
  }
  public set executionLabels(value: { [key: string]: string }) {
    this._executionLabels = value;
  }
  public resetExecutionLabels() {
    this._executionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLabelsInput() {
    return this._executionLabels;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
  }

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
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

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate?: string; 
  public get pvcTemplate() {
    return this.getStringAttribute('pvc_template');
  }
  public set pvcTemplate(value: string) {
    this._pvcTemplate = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate;
  }

  // pvc_template_reference - computed: false, optional: true, required: false
  private _pvcTemplateReference?: string; 
  public get pvcTemplateReference() {
    return this.getStringAttribute('pvc_template_reference');
  }
  public set pvcTemplateReference(value: string) {
    this._pvcTemplateReference = value;
  }
  public resetPvcTemplateReference() {
    this._pvcTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateReferenceInput() {
    return this._pvcTemplateReference;
  }

  // scraper_template - computed: false, optional: true, required: false
  private _scraperTemplate?: string; 
  public get scraperTemplate() {
    return this.getStringAttribute('scraper_template');
  }
  public set scraperTemplate(value: string) {
    this._scraperTemplate = value;
  }
  public resetScraperTemplate() {
    this._scraperTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateInput() {
    return this._scraperTemplate;
  }

  // scraper_template_reference - computed: false, optional: true, required: false
  private _scraperTemplateReference?: string; 
  public get scraperTemplateReference() {
    return this.getStringAttribute('scraper_template_reference');
  }
  public set scraperTemplateReference(value: string) {
    this._scraperTemplateReference = value;
  }
  public resetScraperTemplateReference() {
    this._scraperTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateReferenceInput() {
    return this._scraperTemplateReference;
  }

  // secret_uuid - computed: false, optional: true, required: false
  private _secretUuid?: string; 
  public get secretUuid() {
    return this.getStringAttribute('secret_uuid');
  }
  public set secretUuid(value: string) {
    this._secretUuid = value;
  }
  public resetSecretUuid() {
    this._secretUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUuidInput() {
    return this._secretUuid;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
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

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestVariables) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#all_previous_steps DataK8STestsTestkubeIoTestSuiteV3Manifest#all_previous_steps}
  */
  readonly allPreviousSteps?: boolean | cdktf.IResolvable;
  /**
  * previous step numbers starting from 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_step_numbers DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_step_numbers}
  */
  readonly previousStepNumbers?: string[];
  /**
  * previous test names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#previous_test_names DataK8STestsTestkubeIoTestSuiteV3Manifest#previous_test_names}
  */
  readonly previousTestNames?: string[];
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_previous_steps: cdktf.booleanToTerraform(struct!.allPreviousSteps),
    previous_step_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousStepNumbers),
    previous_test_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previousTestNames),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_previous_steps: {
      value: cdktf.booleanToHclTerraform(struct!.allPreviousSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    previous_step_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousStepNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    previous_test_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previousTestNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPreviousSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPreviousSteps = this._allPreviousSteps;
    }
    if (this._previousStepNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousStepNumbers = this._previousStepNumbers;
    }
    if (this._previousTestNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousTestNames = this._previousTestNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPreviousSteps = undefined;
      this._previousStepNumbers = undefined;
      this._previousTestNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPreviousSteps = value.allPreviousSteps;
      this._previousStepNumbers = value.previousStepNumbers;
      this._previousTestNames = value.previousTestNames;
    }
  }

  // all_previous_steps - computed: false, optional: true, required: false
  private _allPreviousSteps?: boolean | cdktf.IResolvable; 
  public get allPreviousSteps() {
    return this.getBooleanAttribute('all_previous_steps');
  }
  public set allPreviousSteps(value: boolean | cdktf.IResolvable) {
    this._allPreviousSteps = value;
  }
  public resetAllPreviousSteps() {
    this._allPreviousSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPreviousStepsInput() {
    return this._allPreviousSteps;
  }

  // previous_step_numbers - computed: false, optional: true, required: false
  private _previousStepNumbers?: string[]; 
  public get previousStepNumbers() {
    return this.getListAttribute('previous_step_numbers');
  }
  public set previousStepNumbers(value: string[]) {
    this._previousStepNumbers = value;
  }
  public resetPreviousStepNumbers() {
    this._previousStepNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousStepNumbersInput() {
    return this._previousStepNumbers;
  }

  // previous_test_names - computed: false, optional: true, required: false
  private _previousTestNames?: string[]; 
  public get previousTestNames() {
    return this.getListAttribute('previous_test_names');
  }
  public set previousTestNames(value: string[]) {
    this._previousTestNames = value;
  }
  public resetPreviousTestNames() {
    this._previousTestNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousTestNamesInput() {
    return this._previousTestNames;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext {
  /**
  * Context value depending from its type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#context DataK8STestsTestkubeIoTestSuiteV3Manifest#context}
  */
  readonly context?: string;
  /**
  * One of possible context types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._type = value.type;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#api_version DataK8STestsTestkubeIoTestSuiteV3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_path DataK8STestsTestkubeIoTestSuiteV3Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#container_name DataK8STestsTestkubeIoTestSuiteV3Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#divisor DataK8STestsTestkubeIoTestSuiteV3Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource DataK8STestsTestkubeIoTestSuiteV3Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#key DataK8STestsTestkubeIoTestSuiteV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#optional DataK8STestsTestkubeIoTestSuiteV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteV3Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#name DataK8STestsTestkubeIoTestSuiteV3Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#type DataK8STestsTestkubeIoTestSuiteV3Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value DataK8STestsTestkubeIoTestSuiteV3Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#value_from DataK8STestsTestkubeIoTestSuiteV3Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest {
  /**
  * additional executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args DataK8STestsTestkubeIoTestSuiteV3Manifest#args}
  */
  readonly args?: string[];
  /**
  * usage mode for arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#args_mode DataK8STestsTestkubeIoTestSuiteV3Manifest#args_mode}
  */
  readonly argsMode?: string;
  /**
  * executor binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#command DataK8STestsTestkubeIoTestSuiteV3Manifest#command}
  */
  readonly command?: string[];
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * cron job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#cron_job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#cron_job_template_reference}
  */
  readonly cronJobTemplateReference?: string;
  /**
  * whether webhooks should be called on execution Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#disable_webhooks DataK8STestsTestkubeIoTestSuiteV3Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * test execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_labels DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#http_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#https_proxy DataK8STestsTestkubeIoTestSuiteV3Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * job template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#job_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * negative test will fail the execution if it is a success and it will succeed if it is a failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#negative_test DataK8STestsTestkubeIoTestSuiteV3Manifest#negative_test}
  */
  readonly negativeTest?: boolean | cdktf.IResolvable;
  /**
  * pvc template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template}
  */
  readonly pvcTemplate?: string;
  /**
  * pvc template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#pvc_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#pvc_template_reference}
  */
  readonly pvcTemplateReference?: string;
  /**
  * RunningContext for test or test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#running_context DataK8STestsTestkubeIoTestSuiteV3Manifest#running_context}
  */
  readonly runningContext?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * scraper template extensions reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#scraper_template_reference DataK8STestsTestkubeIoTestSuiteV3Manifest#scraper_template_reference}
  */
  readonly scraperTemplateReference?: string;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#sync DataK8STestsTestkubeIoTestSuiteV3Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#variables DataK8STestsTestkubeIoTestSuiteV3Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    args_mode: cdktf.stringToTerraform(struct!.argsMode),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    cron_job_template_reference: cdktf.stringToTerraform(struct!.cronJobTemplateReference),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    negative_test: cdktf.booleanToTerraform(struct!.negativeTest),
    pvc_template: cdktf.stringToTerraform(struct!.pvcTemplate),
    pvc_template_reference: cdktf.stringToTerraform(struct!.pvcTemplateReference),
    running_context: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextToTerraform(struct!.runningContext),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    scraper_template_reference: cdktf.stringToTerraform(struct!.scraperTemplateReference),
    sync: cdktf.booleanToTerraform(struct!.sync),
    variables: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest | cdktf.IResolvable): any {
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
    args_mode: {
      value: cdktf.stringToHclTerraform(struct!.argsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cron_job_template: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_test: {
      value: cdktf.booleanToHclTerraform(struct!.negativeTest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pvc_template: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_context: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextToHclTerraform(struct!.runningContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._argsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsMode = this._argsMode;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._cronJobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplateReference = this._cronJobTemplateReference;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
    }
    if (this._negativeTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTest = this._negativeTest;
    }
    if (this._pvcTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate;
    }
    if (this._pvcTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplateReference = this._pvcTemplateReference;
    }
    if (this._runningContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningContext = this._runningContext?.internalValue;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._scraperTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplateReference = this._scraperTemplateReference;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._argsMode = undefined;
      this._command = undefined;
      this._cronJobTemplate = undefined;
      this._cronJobTemplateReference = undefined;
      this._disableWebhooks = undefined;
      this._executionLabels = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._jobTemplate = undefined;
      this._jobTemplateReference = undefined;
      this._negativeTest = undefined;
      this._pvcTemplate = undefined;
      this._pvcTemplateReference = undefined;
      this._runningContext.internalValue = undefined;
      this._scraperTemplate = undefined;
      this._scraperTemplateReference = undefined;
      this._sync = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._argsMode = value.argsMode;
      this._command = value.command;
      this._cronJobTemplate = value.cronJobTemplate;
      this._cronJobTemplateReference = value.cronJobTemplateReference;
      this._disableWebhooks = value.disableWebhooks;
      this._executionLabels = value.executionLabels;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._jobTemplate = value.jobTemplate;
      this._jobTemplateReference = value.jobTemplateReference;
      this._negativeTest = value.negativeTest;
      this._pvcTemplate = value.pvcTemplate;
      this._pvcTemplateReference = value.pvcTemplateReference;
      this._runningContext.internalValue = value.runningContext;
      this._scraperTemplate = value.scraperTemplate;
      this._scraperTemplateReference = value.scraperTemplateReference;
      this._sync = value.sync;
      this._variables.internalValue = value.variables;
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

  // args_mode - computed: false, optional: true, required: false
  private _argsMode?: string; 
  public get argsMode() {
    return this.getStringAttribute('args_mode');
  }
  public set argsMode(value: string) {
    this._argsMode = value;
  }
  public resetArgsMode() {
    this._argsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsModeInput() {
    return this._argsMode;
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

  // cron_job_template - computed: false, optional: true, required: false
  private _cronJobTemplate?: string; 
  public get cronJobTemplate() {
    return this.getStringAttribute('cron_job_template');
  }
  public set cronJobTemplate(value: string) {
    this._cronJobTemplate = value;
  }
  public resetCronJobTemplate() {
    this._cronJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateInput() {
    return this._cronJobTemplate;
  }

  // cron_job_template_reference - computed: false, optional: true, required: false
  private _cronJobTemplateReference?: string; 
  public get cronJobTemplateReference() {
    return this.getStringAttribute('cron_job_template_reference');
  }
  public set cronJobTemplateReference(value: string) {
    this._cronJobTemplateReference = value;
  }
  public resetCronJobTemplateReference() {
    this._cronJobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateReferenceInput() {
    return this._cronJobTemplateReference;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // execution_labels - computed: false, optional: true, required: false
  private _executionLabels?: { [key: string]: string }; 
  public get executionLabels() {
    return this.getStringMapAttribute('execution_labels');
  }
  public set executionLabels(value: { [key: string]: string }) {
    this._executionLabels = value;
  }
  public resetExecutionLabels() {
    this._executionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLabelsInput() {
    return this._executionLabels;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
  }

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
  }

  // negative_test - computed: false, optional: true, required: false
  private _negativeTest?: boolean | cdktf.IResolvable; 
  public get negativeTest() {
    return this.getBooleanAttribute('negative_test');
  }
  public set negativeTest(value: boolean | cdktf.IResolvable) {
    this._negativeTest = value;
  }
  public resetNegativeTest() {
    this._negativeTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTestInput() {
    return this._negativeTest;
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate?: string; 
  public get pvcTemplate() {
    return this.getStringAttribute('pvc_template');
  }
  public set pvcTemplate(value: string) {
    this._pvcTemplate = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate;
  }

  // pvc_template_reference - computed: false, optional: true, required: false
  private _pvcTemplateReference?: string; 
  public get pvcTemplateReference() {
    return this.getStringAttribute('pvc_template_reference');
  }
  public set pvcTemplateReference(value: string) {
    this._pvcTemplateReference = value;
  }
  public resetPvcTemplateReference() {
    this._pvcTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateReferenceInput() {
    return this._pvcTemplateReference;
  }

  // running_context - computed: false, optional: true, required: false
  private _runningContext = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContextOutputReference(this, "running_context");
  public get runningContext() {
    return this._runningContext;
  }
  public putRunningContext(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestRunningContext) {
    this._runningContext.internalValue = value;
  }
  public resetRunningContext() {
    this._runningContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningContextInput() {
    return this._runningContext.internalValue;
  }

  // scraper_template - computed: false, optional: true, required: false
  private _scraperTemplate?: string; 
  public get scraperTemplate() {
    return this.getStringAttribute('scraper_template');
  }
  public set scraperTemplate(value: string) {
    this._scraperTemplate = value;
  }
  public resetScraperTemplate() {
    this._scraperTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateInput() {
    return this._scraperTemplate;
  }

  // scraper_template_reference - computed: false, optional: true, required: false
  private _scraperTemplateReference?: string; 
  public get scraperTemplateReference() {
    return this.getStringAttribute('scraper_template_reference');
  }
  public set scraperTemplateReference(value: string) {
    this._scraperTemplateReference = value;
  }
  public resetScraperTemplateReference() {
    this._scraperTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateReferenceInput() {
    return this._scraperTemplateReference;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestVariables) {
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
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute {
  /**
  * delay duration in time units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#delay DataK8STestsTestkubeIoTestSuiteV3Manifest#delay}
  */
  readonly delay?: string;
  /**
  * TestSuiteStepExecutionRequest contains parameters to be used by the executions. These fields will be passed to the execution when a Test Suite is queued for execution. TestSuiteStepExecutionRequest parameters have the highest priority. They override the values coming from Test Suites, Tests, and Test Executions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_request DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#test DataK8STestsTestkubeIoTestSuiteV3Manifest#test}
  */
  readonly test?: string;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    execution_request: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestToTerraform(struct!.executionRequest),
    test: cdktf.stringToTerraform(struct!.test),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_request: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest",
    },
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._executionRequest.internalValue = undefined;
      this._test = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._executionRequest.internalValue = value.executionRequest;
      this._test = value.test;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps {
  /**
  * options to download artifacts from previous steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#download_artifacts DataK8STestsTestkubeIoTestSuiteV3Manifest#download_artifacts}
  */
  readonly downloadArtifacts?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execute DataK8STestsTestkubeIoTestSuiteV3Manifest#execute}
  */
  readonly execute?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#stop_on_failure DataK8STestsTestkubeIoTestSuiteV3Manifest#stop_on_failure}
  */
  readonly stopOnFailure: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_artifacts: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsToTerraform(struct!.downloadArtifacts),
    execute: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteToTerraform, false)(struct!.execute),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_artifacts: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsToHclTerraform(struct!.downloadArtifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts",
    },
    execute: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteToHclTerraform, false)(struct!.execute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteList",
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

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadArtifacts = this._downloadArtifacts?.internalValue;
    }
    if (this._execute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute?.internalValue;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = undefined;
      this._execute.internalValue = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadArtifacts.internalValue = value.downloadArtifacts;
      this._execute.internalValue = value.execute;
      this._stopOnFailure = value.stopOnFailure;
    }
  }

  // download_artifacts - computed: false, optional: true, required: false
  private _downloadArtifacts = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifactsOutputReference(this, "download_artifacts");
  public get downloadArtifacts() {
    return this._downloadArtifacts;
  }
  public putDownloadArtifacts(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsDownloadArtifacts) {
    this._downloadArtifacts.internalValue = value;
  }
  public resetDownloadArtifacts() {
    this._downloadArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadArtifactsInput() {
    return this._downloadArtifacts.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecuteList(this, "execute", false);
  public get execute() {
    return this._execute;
  }
  public putExecute(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsExecute[] | cdktf.IResolvable) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
  }

  // stop_on_failure - computed: false, optional: false, required: true
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsOutputReference {
    return new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestSuiteV3ManifestSpec {
  /**
  * After batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#after DataK8STestsTestkubeIoTestSuiteV3Manifest#after}
  */
  readonly after?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter[] | cdktf.IResolvable;
  /**
  * Before batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#before DataK8STestsTestkubeIoTestSuiteV3Manifest#before}
  */
  readonly before?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#description DataK8STestsTestkubeIoTestSuiteV3Manifest#description}
  */
  readonly description?: string;
  /**
  * test suite execution request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#execution_request DataK8STestsTestkubeIoTestSuiteV3Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#repeats DataK8STestsTestkubeIoTestSuiteV3Manifest#repeats}
  */
  readonly repeats?: number;
  /**
  * schedule in cron job format for scheduled test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#schedule DataK8STestsTestkubeIoTestSuiteV3Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#steps DataK8STestsTestkubeIoTestSuiteV3Manifest#steps}
  */
  readonly steps?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps[] | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterToTerraform, false)(struct!.after),
    before: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeToTerraform, false)(struct!.before),
    description: cdktf.stringToTerraform(struct!.description),
    execution_request: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestToTerraform(struct!.executionRequest),
    repeats: cdktf.numberToTerraform(struct!.repeats),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    steps: cdktf.listMapper(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsToTerraform, false)(struct!.steps),
  }
}


export function dataK8STestsTestkubeIoTestSuiteV3ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterToHclTerraform, false)(struct!.after),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterList",
    },
    before: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeToHclTerraform, false)(struct!.before),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_request: {
      value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest",
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
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteV3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteV3ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
      this._description = undefined;
      this._executionRequest.internalValue = undefined;
      this._repeats = undefined;
      this._schedule = undefined;
      this._steps.internalValue = undefined;
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
      this._executionRequest.internalValue = value.executionRequest;
      this._repeats = value.repeats;
      this._schedule = value.schedule;
      this._steps.internalValue = value.steps;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfterList(this, "after", false);
  public get after() {
    return this._after;
  }
  public putAfter(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecAfter[] | cdktf.IResolvable) {
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
  private _before = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBeforeList(this, "before", false);
  public get before() {
    return this._before;
  }
  public putBefore(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecBefore[] | cdktf.IResolvable) {
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

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
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
  private _steps = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpecSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest k8s_tests_testkube_io_test_suite_v3_manifest}
*/
export class DataK8STestsTestkubeIoTestSuiteV3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_suite_v3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestSuiteV3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestSuiteV3Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestSuiteV3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestSuiteV3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_suite_v3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_suite_v3_manifest k8s_tests_testkube_io_test_suite_v3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestSuiteV3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestSuiteV3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_suite_v3_manifest',
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
  private _metadata = new DataK8STestsTestkubeIoTestSuiteV3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestSuiteV3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestSuiteV3ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestSuiteV3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestSuiteV3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestSuiteV3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteV3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
