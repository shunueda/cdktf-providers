// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#metadata DataK8SK8SMariadbComConnectionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata;
  /**
  * ConnectionSpec defines the desired state of Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#spec DataK8SK8SMariadbComConnectionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec;
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#annotations DataK8SK8SMariadbComConnectionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#labels DataK8SK8SMariadbComConnectionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#namespace DataK8SK8SMariadbComConnectionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck {
  /**
  * Interval used to perform health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#interval DataK8SK8SMariadbComConnectionV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * RetryInterval is the interval used to perform health check retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#retry_interval DataK8SK8SMariadbComConnectionV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._retryInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._retryInterval = value.retryInterval;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#namespace DataK8SK8SMariadbComConnectionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * WaitForIt indicates whether the controller using this reference should wait for MariaDB to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#wait_for_it DataK8SK8SMariadbComConnectionV1Alpha1Manifest#wait_for_it}
  */
  readonly waitForIt?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    wait_for_it: cdktf.booleanToTerraform(struct!.waitForIt),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
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
    wait_for_it: {
      value: cdktf.booleanToHclTerraform(struct!.waitForIt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined {
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
    if (this._waitForIt !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIt = this._waitForIt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._waitForIt = undefined;
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
      this._waitForIt = value.waitForIt;
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

  // wait_for_it - computed: false, optional: true, required: false
  private _waitForIt?: boolean | cdktf.IResolvable; 
  public get waitForIt() {
    return this.getBooleanAttribute('wait_for_it');
  }
  public set waitForIt(value: boolean | cdktf.IResolvable) {
    this._waitForIt = value;
  }
  public resetWaitForIt() {
    this._waitForIt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForItInput() {
    return this._waitForIt;
  }
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#namespace DataK8SK8SMariadbComConnectionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#annotations DataK8SK8SMariadbComConnectionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#labels DataK8SK8SMariadbComConnectionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate {
  /**
  * DatabaseKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#database_key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#database_key}
  */
  readonly databaseKey?: string;
  /**
  * Format to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#format DataK8SK8SMariadbComConnectionV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * HostKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#host_key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Key to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Metadata to be added to the Secret object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#metadata DataK8SK8SMariadbComConnectionV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata;
  /**
  * PasswordKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#password_key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * PortKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#port_key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * UsernameKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#username_key DataK8SK8SMariadbComConnectionV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_key: cdktf.stringToTerraform(struct!.databaseKey),
    format: cdktf.stringToTerraform(struct!.format),
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    key: cdktf.stringToTerraform(struct!.key),
    metadata: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataToTerraform(struct!.metadata),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_key: {
      value: cdktf.stringToHclTerraform(struct!.databaseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseKey = this._databaseKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseKey = undefined;
      this._format = undefined;
      this._hostKey = undefined;
      this._key = undefined;
      this._metadata.internalValue = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseKey = value.databaseKey;
      this._format = value.format;
      this._hostKey = value.hostKey;
      this._key = value.key;
      this._metadata.internalValue = value.metadata;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._usernameKey = value.usernameKey;
    }
  }

  // database_key - computed: false, optional: true, required: false
  private _databaseKey?: string; 
  public get databaseKey() {
    return this.getStringAttribute('database_key');
  }
  public set databaseKey(value: string) {
    this._databaseKey = value;
  }
  public resetDatabaseKey() {
    this._databaseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseKeyInput() {
    return this._databaseKey;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec {
  /**
  * Database to use when configuring the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#database DataK8SK8SMariadbComConnectionV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * HealthCheck to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#health_check DataK8SK8SMariadbComConnectionV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck;
  /**
  * Host to connect to. If not provided, it defaults to the MariaDB host or to the MaxScale host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#host DataK8SK8SMariadbComConnectionV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * MariaDBRef is a reference to the MariaDB to connect to. Either MariaDBRef or MaxScaleRef must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#maria_db_ref DataK8SK8SMariadbComConnectionV1Alpha1Manifest#maria_db_ref}
  */
  readonly mariaDbRef?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef;
  /**
  * MaxScaleRef is a reference to the MaxScale to connect to. Either MariaDBRef or MaxScaleRef must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#max_scale_ref DataK8SK8SMariadbComConnectionV1Alpha1Manifest#max_scale_ref}
  */
  readonly maxScaleRef?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef;
  /**
  * Params to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#params DataK8SK8SMariadbComConnectionV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * PasswordSecretKeyRef is a reference to the password to use for configuring the Connection. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#password_secret_key_ref DataK8SK8SMariadbComConnectionV1Alpha1Manifest#password_secret_key_ref}
  */
  readonly passwordSecretKeyRef: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef;
  /**
  * Port to connect to. If not provided, it defaults to the MariaDB port or to the first MaxScale listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#port DataK8SK8SMariadbComConnectionV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * SecretName to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#secret_name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * SecretTemplate to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#secret_template DataK8SK8SMariadbComConnectionV1Alpha1Manifest#secret_template}
  */
  readonly secretTemplate?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate;
  /**
  * ServiceName to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#service_name DataK8SK8SMariadbComConnectionV1Alpha1Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Username to use for configuring the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#username DataK8SK8SMariadbComConnectionV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    health_check: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    host: cdktf.stringToTerraform(struct!.host),
    maria_db_ref: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefToTerraform(struct!.mariaDbRef),
    max_scale_ref: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefToTerraform(struct!.maxScaleRef),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    password_secret_key_ref: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefToTerraform(struct!.passwordSecretKeyRef),
    port: cdktf.numberToTerraform(struct!.port),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_template: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateToTerraform(struct!.secretTemplate),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maria_db_ref: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct!.mariaDbRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef",
    },
    max_scale_ref: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefToHclTerraform(struct!.maxScaleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password_secret_key_ref: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct!.passwordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_template: {
      value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateToHclTerraform(struct!.secretTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mariaDbRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbRef = this._mariaDbRef?.internalValue;
    }
    if (this._maxScaleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleRef = this._maxScaleRef?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._passwordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretKeyRef = this._passwordSecretKeyRef?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTemplate = this._secretTemplate?.internalValue;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._healthCheck.internalValue = undefined;
      this._host = undefined;
      this._mariaDbRef.internalValue = undefined;
      this._maxScaleRef.internalValue = undefined;
      this._params = undefined;
      this._passwordSecretKeyRef.internalValue = undefined;
      this._port = undefined;
      this._secretName = undefined;
      this._secretTemplate.internalValue = undefined;
      this._serviceName = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._healthCheck.internalValue = value.healthCheck;
      this._host = value.host;
      this._mariaDbRef.internalValue = value.mariaDbRef;
      this._maxScaleRef.internalValue = value.maxScaleRef;
      this._params = value.params;
      this._passwordSecretKeyRef.internalValue = value.passwordSecretKeyRef;
      this._port = value.port;
      this._secretName = value.secretName;
      this._secretTemplate.internalValue = value.secretTemplate;
      this._serviceName = value.serviceName;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // maria_db_ref - computed: false, optional: true, required: false
  private _mariaDbRef = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRefOutputReference(this, "maria_db_ref");
  public get mariaDbRef() {
    return this._mariaDbRef;
  }
  public putMariaDbRef(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMariaDbRef) {
    this._mariaDbRef.internalValue = value;
  }
  public resetMariaDbRef() {
    this._mariaDbRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbRefInput() {
    return this._mariaDbRef.internalValue;
  }

  // max_scale_ref - computed: false, optional: true, required: false
  private _maxScaleRef = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRefOutputReference(this, "max_scale_ref");
  public get maxScaleRef() {
    return this._maxScaleRef;
  }
  public putMaxScaleRef(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecMaxScaleRef) {
    this._maxScaleRef.internalValue = value;
  }
  public resetMaxScaleRef() {
    this._maxScaleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleRefInput() {
    return this._maxScaleRef.internalValue;
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

  // password_secret_key_ref - computed: false, optional: false, required: true
  private _passwordSecretKeyRef = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRefOutputReference(this, "password_secret_key_ref");
  public get passwordSecretKeyRef() {
    return this._passwordSecretKeyRef;
  }
  public putPasswordSecretKeyRef(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecPasswordSecretKeyRef) {
    this._passwordSecretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretKeyRefInput() {
    return this._passwordSecretKeyRef.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // secret_template - computed: false, optional: true, required: false
  private _secretTemplate = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplateOutputReference(this, "secret_template");
  public get secretTemplate() {
    return this._secretTemplate;
  }
  public putSecretTemplate(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecSecretTemplate) {
    this._secretTemplate.internalValue = value;
  }
  public resetSecretTemplate() {
    this._secretTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTemplateInput() {
    return this._secretTemplate.internalValue;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest k8s_k8s_mariadb_com_connection_v1alpha1_manifest}
*/
export class DataK8SK8SMariadbComConnectionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_mariadb_com_connection_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SMariadbComConnectionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SMariadbComConnectionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SMariadbComConnectionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SMariadbComConnectionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_mariadb_com_connection_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_mariadb_com_connection_v1alpha1_manifest k8s_k8s_mariadb_com_connection_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SMariadbComConnectionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SMariadbComConnectionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_mariadb_com_connection_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SMariadbComConnectionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComConnectionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
