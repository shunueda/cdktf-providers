// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#metadata DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata;
  /**
  * TaskSpec defines the desired state of Task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#spec DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec;
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#annotations DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#labels DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#name DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#namespace DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#name DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#namespace DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt {
  /**
  * HostScheme determines whether to use http or https for intelAMT calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#host_scheme DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#host_scheme}
  */
  readonly hostScheme?: string;
  /**
  * Port that intelAMT will use for calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#port DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_scheme: cdktf.stringToTerraform(struct!.hostScheme),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_scheme: {
      value: cdktf.stringToHclTerraform(struct!.hostScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostScheme = this._hostScheme;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostScheme = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostScheme = value.hostScheme;
      this._port = value.port;
    }
  }

  // host_scheme - computed: false, optional: true, required: false
  private _hostScheme?: string; 
  public get hostScheme() {
    return this.getStringAttribute('host_scheme');
  }
  public set hostScheme(value: string) {
    this._hostScheme = value;
  }
  public resetHostScheme() {
    this._hostScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSchemeInput() {
    return this._hostScheme;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool {
  /**
  * CipherSuite that ipmitool will use for calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#cipher_suite DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * Port that ipmitool will use for calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#port DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuite = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuite = value.cipherSuite;
      this._port = value.port;
    }
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
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
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish {
  /**
  * Port that redfish will use for calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#port DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental {
  /**
  * CustomRequestPayload must be in json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#custom_request_payload DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#custom_request_payload}
  */
  readonly customRequestPayload?: string;
  /**
  * DotPath is the path to the json object where the bmclib RequestPayload{} struct will be embedded. For example: object.data.body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#dot_path DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#dot_path}
  */
  readonly dotPath?: string;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_payload: cdktf.stringToTerraform(struct!.customRequestPayload),
    dot_path: cdktf.stringToTerraform(struct!.dotPath),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_payload: {
      value: cdktf.stringToHclTerraform(struct!.customRequestPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot_path: {
      value: cdktf.stringToHclTerraform(struct!.dotPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestPayload = this._customRequestPayload;
    }
    if (this._dotPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotPath = this._dotPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestPayload = undefined;
      this._dotPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestPayload = value.customRequestPayload;
      this._dotPath = value.dotPath;
    }
  }

  // custom_request_payload - computed: false, optional: true, required: false
  private _customRequestPayload?: string; 
  public get customRequestPayload() {
    return this.getStringAttribute('custom_request_payload');
  }
  public set customRequestPayload(value: string) {
    this._customRequestPayload = value;
  }
  public resetCustomRequestPayload() {
    this._customRequestPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestPayloadInput() {
    return this._customRequestPayload;
  }

  // dot_path - computed: false, optional: true, required: false
  private _dotPath?: string; 
  public get dotPath() {
    return this.getStringAttribute('dot_path');
  }
  public set dotPath(value: string) {
    this._dotPath = value;
  }
  public resetDotPath() {
    this._dotPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotPathInput() {
    return this._dotPath;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac {
  /**
  * PrefixSigDisabled determines whether the algorithm will be prefixed to the signature. Example: sha256=abc123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#prefix_sig_disabled DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#prefix_sig_disabled}
  */
  readonly prefixSigDisabled?: boolean | cdktf.IResolvable;
  /**
  * Secrets are a map of algorithms to secrets used for signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#secrets DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#secrets}
  */
  readonly secrets?: { [key: string]: string };
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_sig_disabled: cdktf.booleanToTerraform(struct!.prefixSigDisabled),
    secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secrets),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_sig_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.prefixSigDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secrets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixSigDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSigDisabled = this._prefixSigDisabled;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixSigDisabled = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixSigDisabled = value.prefixSigDisabled;
      this._secrets = value.secrets;
    }
  }

  // prefix_sig_disabled - computed: false, optional: true, required: false
  private _prefixSigDisabled?: boolean | cdktf.IResolvable; 
  public get prefixSigDisabled() {
    return this.getBooleanAttribute('prefix_sig_disabled');
  }
  public set prefixSigDisabled(value: boolean | cdktf.IResolvable) {
    this._prefixSigDisabled = value;
  }
  public resetPrefixSigDisabled() {
    this._prefixSigDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSigDisabledInput() {
    return this._prefixSigDisabled;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: string }; 
  public get secrets() {
    return this.getStringMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: string }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest {
  /**
  * HTTPContentType is the content type to use for the rpc request notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#http_content_type DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#http_content_type}
  */
  readonly httpContentType?: string;
  /**
  * HTTPMethod is the HTTP method to use for the rpc request notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#http_method DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#http_method}
  */
  readonly httpMethod?: string;
  /**
  * StaticHeaders are predefined headers that will be added to every request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#static_headers DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#static_headers}
  */
  readonly staticHeaders?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * TimestampFormat is the time format for the timestamp header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#timestamp_format DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * TimestampHeader is the header name that should contain the timestamp. Example: X-BMCLIB-Timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#timestamp_header DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#timestamp_header}
  */
  readonly timestampHeader?: string;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_content_type: cdktf.stringToTerraform(struct!.httpContentType),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    static_headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.staticHeaders),
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    timestamp_header: cdktf.stringToTerraform(struct!.timestampHeader),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_content_type: {
      value: cdktf.stringToHclTerraform(struct!.httpContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_headers: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.staticHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_header: {
      value: cdktf.stringToHclTerraform(struct!.timestampHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpContentType = this._httpContentType;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._staticHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHeaders = this._staticHeaders;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._timestampHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampHeader = this._timestampHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpContentType = undefined;
      this._httpMethod = undefined;
      this._staticHeaders = undefined;
      this._timestampFormat = undefined;
      this._timestampHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpContentType = value.httpContentType;
      this._httpMethod = value.httpMethod;
      this._staticHeaders = value.staticHeaders;
      this._timestampFormat = value.timestampFormat;
      this._timestampHeader = value.timestampHeader;
    }
  }

  // http_content_type - computed: false, optional: true, required: false
  private _httpContentType?: string; 
  public get httpContentType() {
    return this.getStringAttribute('http_content_type');
  }
  public set httpContentType(value: string) {
    this._httpContentType = value;
  }
  public resetHttpContentType() {
    this._httpContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContentTypeInput() {
    return this._httpContentType;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // static_headers - computed: false, optional: true, required: false
  private _staticHeaders?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get staticHeaders() {
    return this.interpolationForAttribute('static_headers');
  }
  public set staticHeaders(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._staticHeaders = value;
  }
  public resetStaticHeaders() {
    this._staticHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHeadersInput() {
    return this._staticHeaders;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // timestamp_header - computed: false, optional: true, required: false
  private _timestampHeader?: string; 
  public get timestampHeader() {
    return this.getStringAttribute('timestamp_header');
  }
  public set timestampHeader(value: string) {
    this._timestampHeader = value;
  }
  public resetTimestampHeader() {
    this._timestampHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampHeaderInput() {
    return this._timestampHeader;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature {
  /**
  * AppendAlgoToHeaderDisabled decides whether to append the algorithm to the signature header or not. Example: X-BMCLIB-Signature becomes X-BMCLIB-Signature-256 When set to true, a header will be added for each algorithm. Example: X-BMCLIB-Signature-256 and X-BMCLIB-Signature-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#append_algo_to_header_disabled DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#append_algo_to_header_disabled}
  */
  readonly appendAlgoToHeaderDisabled?: boolean | cdktf.IResolvable;
  /**
  * HeaderName is the header name that should contain the signature(s). Example: X-BMCLIB-Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#header_name DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#header_name}
  */
  readonly headerName?: string;
  /**
  * IncludedPayloadHeaders are headers whose values will be included in the signature payload. Example: X-BMCLIB-My-Custom-Header All headers will be deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#included_payload_headers DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#included_payload_headers}
  */
  readonly includedPayloadHeaders?: string[];
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_algo_to_header_disabled: cdktf.booleanToTerraform(struct!.appendAlgoToHeaderDisabled),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    included_payload_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPayloadHeaders),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_algo_to_header_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.appendAlgoToHeaderDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    included_payload_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPayloadHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendAlgoToHeaderDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendAlgoToHeaderDisabled = this._appendAlgoToHeaderDisabled;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._includedPayloadHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPayloadHeaders = this._includedPayloadHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendAlgoToHeaderDisabled = undefined;
      this._headerName = undefined;
      this._includedPayloadHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendAlgoToHeaderDisabled = value.appendAlgoToHeaderDisabled;
      this._headerName = value.headerName;
      this._includedPayloadHeaders = value.includedPayloadHeaders;
    }
  }

  // append_algo_to_header_disabled - computed: false, optional: true, required: false
  private _appendAlgoToHeaderDisabled?: boolean | cdktf.IResolvable; 
  public get appendAlgoToHeaderDisabled() {
    return this.getBooleanAttribute('append_algo_to_header_disabled');
  }
  public set appendAlgoToHeaderDisabled(value: boolean | cdktf.IResolvable) {
    this._appendAlgoToHeaderDisabled = value;
  }
  public resetAppendAlgoToHeaderDisabled() {
    this._appendAlgoToHeaderDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendAlgoToHeaderDisabledInput() {
    return this._appendAlgoToHeaderDisabled;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // included_payload_headers - computed: false, optional: true, required: false
  private _includedPayloadHeaders?: string[]; 
  public get includedPayloadHeaders() {
    return this.getListAttribute('included_payload_headers');
  }
  public set includedPayloadHeaders(value: string[]) {
    this._includedPayloadHeaders = value;
  }
  public resetIncludedPayloadHeaders() {
    this._includedPayloadHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPayloadHeadersInput() {
    return this._includedPayloadHeaders;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc {
  /**
  * ConsumerURL is the URL where an rpc consumer/listener is running and to which we will send and receive all notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#consumer_url DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#consumer_url}
  */
  readonly consumerUrl: string;
  /**
  * Experimental options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#experimental DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#experimental}
  */
  readonly experimental?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental;
  /**
  * HMAC is the options used to create a HMAC signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#hmac DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#hmac}
  */
  readonly hmac?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac;
  /**
  * LogNotificationsDisabled determines whether responses from rpc consumer/listeners will be logged or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#log_notifications_disabled DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#log_notifications_disabled}
  */
  readonly logNotificationsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Request is the options used to create the rpc HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#request DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#request}
  */
  readonly request?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest;
  /**
  * Signature is the options used for adding an HMAC signature to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#signature DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#signature}
  */
  readonly signature?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_url: cdktf.stringToTerraform(struct!.consumerUrl),
    experimental: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalToTerraform(struct!.experimental),
    hmac: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacToTerraform(struct!.hmac),
    log_notifications_disabled: cdktf.booleanToTerraform(struct!.logNotificationsDisabled),
    request: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestToTerraform(struct!.request),
    signature: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureToTerraform(struct!.signature),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_url: {
      value: cdktf.stringToHclTerraform(struct!.consumerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experimental: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalToHclTerraform(struct!.experimental),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental",
    },
    hmac: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacToHclTerraform(struct!.hmac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac",
    },
    log_notifications_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.logNotificationsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest",
    },
    signature: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureToHclTerraform(struct!.signature),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerUrl = this._consumerUrl;
    }
    if (this._experimental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimental = this._experimental?.internalValue;
    }
    if (this._hmac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmac = this._hmac?.internalValue;
    }
    if (this._logNotificationsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logNotificationsDisabled = this._logNotificationsDisabled;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._signature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerUrl = undefined;
      this._experimental.internalValue = undefined;
      this._hmac.internalValue = undefined;
      this._logNotificationsDisabled = undefined;
      this._request.internalValue = undefined;
      this._signature.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerUrl = value.consumerUrl;
      this._experimental.internalValue = value.experimental;
      this._hmac.internalValue = value.hmac;
      this._logNotificationsDisabled = value.logNotificationsDisabled;
      this._request.internalValue = value.request;
      this._signature.internalValue = value.signature;
    }
  }

  // consumer_url - computed: false, optional: false, required: true
  private _consumerUrl?: string; 
  public get consumerUrl() {
    return this.getStringAttribute('consumer_url');
  }
  public set consumerUrl(value: string) {
    this._consumerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerUrlInput() {
    return this._consumerUrl;
  }

  // experimental - computed: false, optional: true, required: false
  private _experimental = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimentalOutputReference(this, "experimental");
  public get experimental() {
    return this._experimental;
  }
  public putExperimental(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcExperimental) {
    this._experimental.internalValue = value;
  }
  public resetExperimental() {
    this._experimental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalInput() {
    return this._experimental.internalValue;
  }

  // hmac - computed: false, optional: true, required: false
  private _hmac = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmacOutputReference(this, "hmac");
  public get hmac() {
    return this._hmac;
  }
  public putHmac(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcHmac) {
    this._hmac.internalValue = value;
  }
  public resetHmac() {
    this._hmac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacInput() {
    return this._hmac.internalValue;
  }

  // log_notifications_disabled - computed: false, optional: true, required: false
  private _logNotificationsDisabled?: boolean | cdktf.IResolvable; 
  public get logNotificationsDisabled() {
    return this.getBooleanAttribute('log_notifications_disabled');
  }
  public set logNotificationsDisabled(value: boolean | cdktf.IResolvable) {
    this._logNotificationsDisabled = value;
  }
  public resetLogNotificationsDisabled() {
    this._logNotificationsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNotificationsDisabledInput() {
    return this._logNotificationsDisabled;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions {
  /**
  * IntelAMT contains the options to customize the IntelAMT provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#intel_amt DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#intel_amt}
  */
  readonly intelAmt?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt;
  /**
  * IPMITOOL contains the options to customize the Ipmitool provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#ipmitool DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#ipmitool}
  */
  readonly ipmitool?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool;
  /**
  * Redfish contains the options to customize the Redfish provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#redfish DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#redfish}
  */
  readonly redfish?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish;
  /**
  * RPC contains the options to customize the RPC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#rpc DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#rpc}
  */
  readonly rpc?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intel_amt: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtToTerraform(struct!.intelAmt),
    ipmitool: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolToTerraform(struct!.ipmitool),
    redfish: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishToTerraform(struct!.redfish),
    rpc: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcToTerraform(struct!.rpc),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intel_amt: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtToHclTerraform(struct!.intelAmt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt",
    },
    ipmitool: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolToHclTerraform(struct!.ipmitool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool",
    },
    redfish: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishToHclTerraform(struct!.redfish),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish",
    },
    rpc: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcToHclTerraform(struct!.rpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intelAmt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelAmt = this._intelAmt?.internalValue;
    }
    if (this._ipmitool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmitool = this._ipmitool?.internalValue;
    }
    if (this._redfish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfish = this._redfish?.internalValue;
    }
    if (this._rpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpc = this._rpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intelAmt.internalValue = undefined;
      this._ipmitool.internalValue = undefined;
      this._redfish.internalValue = undefined;
      this._rpc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intelAmt.internalValue = value.intelAmt;
      this._ipmitool.internalValue = value.ipmitool;
      this._redfish.internalValue = value.redfish;
      this._rpc.internalValue = value.rpc;
    }
  }

  // intel_amt - computed: false, optional: true, required: false
  private _intelAmt = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmtOutputReference(this, "intel_amt");
  public get intelAmt() {
    return this._intelAmt;
  }
  public putIntelAmt(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIntelAmt) {
    this._intelAmt.internalValue = value;
  }
  public resetIntelAmt() {
    this._intelAmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelAmtInput() {
    return this._intelAmt.internalValue;
  }

  // ipmitool - computed: false, optional: true, required: false
  private _ipmitool = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitoolOutputReference(this, "ipmitool");
  public get ipmitool() {
    return this._ipmitool;
  }
  public putIpmitool(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsIpmitool) {
    this._ipmitool.internalValue = value;
  }
  public resetIpmitool() {
    this._ipmitool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmitoolInput() {
    return this._ipmitool.internalValue;
  }

  // redfish - computed: false, optional: true, required: false
  private _redfish = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfishOutputReference(this, "redfish");
  public get redfish() {
    return this._redfish;
  }
  public putRedfish(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRedfish) {
    this._redfish.internalValue = value;
  }
  public resetRedfish() {
    this._redfish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishInput() {
    return this._redfish.internalValue;
  }

  // rpc - computed: false, optional: true, required: false
  private _rpc = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpcOutputReference(this, "rpc");
  public get rpc() {
    return this._rpc;
  }
  public putRpc(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsRpc) {
    this._rpc.internalValue = value;
  }
  public resetRpc() {
    this._rpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcInput() {
    return this._rpc.internalValue;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection {
  /**
  * AuthSecretRef is the SecretReference that contains authentication information of the Machine. The Secret must contain username and password keys. This is optional as it is not required when using the RPC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#auth_secret_ref DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#auth_secret_ref}
  */
  readonly authSecretRef?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef;
  /**
  * Host is the host IP address or hostname of the Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#host DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * InsecureTLS specifies trusted TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#insecure_tls DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#insecure_tls}
  */
  readonly insecureTls: boolean | cdktf.IResolvable;
  /**
  * Port is the port number for connecting with the Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#port DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * ProviderOptions contains provider specific options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#provider_options DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#provider_options}
  */
  readonly providerOptions?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_secret_ref: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefToTerraform(struct!.authSecretRef),
    host: cdktf.stringToTerraform(struct!.host),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    port: cdktf.numberToTerraform(struct!.port),
    provider_options: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsToTerraform(struct!.providerOptions),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_secret_ref: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefToHclTerraform(struct!.authSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_options: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsToHclTerraform(struct!.providerOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSecretRef = this._authSecretRef?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._providerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerOptions = this._providerOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authSecretRef.internalValue = undefined;
      this._host = undefined;
      this._insecureTls = undefined;
      this._port = undefined;
      this._providerOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authSecretRef.internalValue = value.authSecretRef;
      this._host = value.host;
      this._insecureTls = value.insecureTls;
      this._port = value.port;
      this._providerOptions.internalValue = value.providerOptions;
    }
  }

  // auth_secret_ref - computed: false, optional: true, required: false
  private _authSecretRef = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRefOutputReference(this, "auth_secret_ref");
  public get authSecretRef() {
    return this._authSecretRef;
  }
  public putAuthSecretRef(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionAuthSecretRef) {
    this._authSecretRef.internalValue = value;
  }
  public resetAuthSecretRef() {
    this._authSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretRefInput() {
    return this._authSecretRef.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_tls - computed: false, optional: false, required: true
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // provider_options - computed: false, optional: true, required: false
  private _providerOptions = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptionsOutputReference(this, "provider_options");
  public get providerOptions() {
    return this._providerOptions;
  }
  public putProviderOptions(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionProviderOptions) {
    this._providerOptions.internalValue = value;
  }
  public resetProviderOptions() {
    this._providerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerOptionsInput() {
    return this._providerOptions.internalValue;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction {
  /**
  * Devices represents the boot devices, in order for setting one time boot. Currently only the first device in the slice is used to set one time boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#device DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#device}
  */
  readonly device: string[];
  /**
  * EFIBoot instructs the machine to use EFI boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#efi_boot DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#efi_boot}
  */
  readonly efiBoot?: boolean | cdktf.IResolvable;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.device),
    efi_boot: cdktf.booleanToTerraform(struct!.efiBoot),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.device),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    efi_boot: {
      value: cdktf.booleanToHclTerraform(struct!.efiBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._efiBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.efiBoot = this._efiBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._efiBoot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._efiBoot = value.efiBoot;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string[]; 
  public get device() {
    return this.getListAttribute('device');
  }
  public set device(value: string[]) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // efi_boot - computed: false, optional: true, required: false
  private _efiBoot?: boolean | cdktf.IResolvable; 
  public get efiBoot() {
    return this.getBooleanAttribute('efi_boot');
  }
  public set efiBoot(value: boolean | cdktf.IResolvable) {
    this._efiBoot = value;
  }
  public resetEfiBoot() {
    this._efiBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiBootInput() {
    return this._efiBoot;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#kind DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * mediaURL represents the URL of the image to be inserted into the virtual media, or empty to eject media.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#media_url DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#media_url}
  */
  readonly mediaUrl?: string;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    media_url: cdktf.stringToTerraform(struct!.mediaUrl),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction | cdktf.IResolvable): any {
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
    media_url: {
      value: cdktf.stringToHclTerraform(struct!.mediaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mediaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaUrl = this._mediaUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._mediaUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._mediaUrl = value.mediaUrl;
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

  // media_url - computed: false, optional: true, required: false
  private _mediaUrl?: string; 
  public get mediaUrl() {
    return this.getStringAttribute('media_url');
  }
  public set mediaUrl(value: string) {
    this._mediaUrl = value;
  }
  public resetMediaUrl() {
    this._mediaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaUrlInput() {
    return this._mediaUrl;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask {
  /**
  * OneTimeBootDeviceAction represents a baseboard management one time set boot device operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#one_time_boot_device_action DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#one_time_boot_device_action}
  */
  readonly oneTimeBootDeviceAction?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction;
  /**
  * PowerAction represents a baseboard management power operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#power_action DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#power_action}
  */
  readonly powerAction?: string;
  /**
  * VirtualMediaAction represents a baseboard management virtual media insert/eject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#virtual_media_action DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#virtual_media_action}
  */
  readonly virtualMediaAction?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_time_boot_device_action: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionToTerraform(struct!.oneTimeBootDeviceAction),
    power_action: cdktf.stringToTerraform(struct!.powerAction),
    virtual_media_action: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionToTerraform(struct!.virtualMediaAction),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_time_boot_device_action: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionToHclTerraform(struct!.oneTimeBootDeviceAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction",
    },
    power_action: {
      value: cdktf.stringToHclTerraform(struct!.powerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_media_action: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionToHclTerraform(struct!.virtualMediaAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneTimeBootDeviceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTimeBootDeviceAction = this._oneTimeBootDeviceAction?.internalValue;
    }
    if (this._powerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerAction = this._powerAction;
    }
    if (this._virtualMediaAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMediaAction = this._virtualMediaAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneTimeBootDeviceAction.internalValue = undefined;
      this._powerAction = undefined;
      this._virtualMediaAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneTimeBootDeviceAction.internalValue = value.oneTimeBootDeviceAction;
      this._powerAction = value.powerAction;
      this._virtualMediaAction.internalValue = value.virtualMediaAction;
    }
  }

  // one_time_boot_device_action - computed: false, optional: true, required: false
  private _oneTimeBootDeviceAction = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceActionOutputReference(this, "one_time_boot_device_action");
  public get oneTimeBootDeviceAction() {
    return this._oneTimeBootDeviceAction;
  }
  public putOneTimeBootDeviceAction(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOneTimeBootDeviceAction) {
    this._oneTimeBootDeviceAction.internalValue = value;
  }
  public resetOneTimeBootDeviceAction() {
    this._oneTimeBootDeviceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeBootDeviceActionInput() {
    return this._oneTimeBootDeviceAction.internalValue;
  }

  // power_action - computed: false, optional: true, required: false
  private _powerAction?: string; 
  public get powerAction() {
    return this.getStringAttribute('power_action');
  }
  public set powerAction(value: string) {
    this._powerAction = value;
  }
  public resetPowerAction() {
    this._powerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerActionInput() {
    return this._powerAction;
  }

  // virtual_media_action - computed: false, optional: true, required: false
  private _virtualMediaAction = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaActionOutputReference(this, "virtual_media_action");
  public get virtualMediaAction() {
    return this._virtualMediaAction;
  }
  public putVirtualMediaAction(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskVirtualMediaAction) {
    this._virtualMediaAction.internalValue = value;
  }
  public resetVirtualMediaAction() {
    this._virtualMediaAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMediaActionInput() {
    return this._virtualMediaAction.internalValue;
  }
}
export interface DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec {
  /**
  * Connection represents the Machine connectivity information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#connection DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#connection}
  */
  readonly connection?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection;
  /**
  * Task defines the specific action to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#task DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest#task}
  */
  readonly task: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask;
}

export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecToTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionToTerraform(struct!.connection),
    task: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskToTerraform(struct!.task),
  }
}


export function dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection",
    },
    task: {
      value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._task.internalValue = value.task;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // task - computed: false, optional: false, required: true
  private _task = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecTask) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest k8s_bmc_tinkerbell_org_task_v1alpha1_manifest}
*/
export class DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_bmc_tinkerbell_org_task_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBmcTinkerbellOrgTaskV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_bmc_tinkerbell_org_task_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_task_v1alpha1_manifest k8s_bmc_tinkerbell_org_task_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_bmc_tinkerbell_org_task_v1alpha1_manifest',
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
  private _metadata = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec) {
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
      metadata: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBmcTinkerbellOrgTaskV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
