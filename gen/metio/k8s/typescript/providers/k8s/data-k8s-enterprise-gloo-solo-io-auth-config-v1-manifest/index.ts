// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#metadata DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#spec DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec;
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#annotations DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#labels DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_ap_all DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_ap_all}
  */
  readonly readModeApAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_ap_one DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_ap_one}
  */
  readonly readModeApOne?: number;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_mode_ap_all: cdktf.numberToTerraform(struct!.readModeApAll),
    read_mode_ap_one: cdktf.numberToTerraform(struct!.readModeApOne),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_mode_ap_all: {
      value: cdktf.numberToHclTerraform(struct!.readModeApAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_mode_ap_one: {
      value: cdktf.numberToHclTerraform(struct!.readModeApOne),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readModeApAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeApAll = this._readModeApAll;
    }
    if (this._readModeApOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeApOne = this._readModeApOne;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readModeApAll = undefined;
      this._readModeApOne = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readModeApAll = value.readModeApAll;
      this._readModeApOne = value.readModeApOne;
    }
  }

  // read_mode_ap_all - computed: false, optional: true, required: false
  private _readModeApAll?: number; 
  public get readModeApAll() {
    return this.getNumberAttribute('read_mode_ap_all');
  }
  public set readModeApAll(value: number) {
    this._readModeApAll = value;
  }
  public resetReadModeApAll() {
    this._readModeApAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeApAllInput() {
    return this._readModeApAll;
  }

  // read_mode_ap_one - computed: false, optional: true, required: false
  private _readModeApOne?: number; 
  public get readModeApOne() {
    return this.getNumberAttribute('read_mode_ap_one');
  }
  public set readModeApOne(value: number) {
    this._readModeApOne = value;
  }
  public resetReadModeApOne() {
    this._readModeApOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeApOneInput() {
    return this._readModeApOne;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_sc_allow_unavailable DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_sc_allow_unavailable}
  */
  readonly readModeScAllowUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_sc_linearize DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_sc_linearize}
  */
  readonly readModeScLinearize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_sc_replica DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_sc_replica}
  */
  readonly readModeScReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_sc_session DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_sc_session}
  */
  readonly readModeScSession?: number;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_mode_sc_allow_unavailable: cdktf.numberToTerraform(struct!.readModeScAllowUnavailable),
    read_mode_sc_linearize: cdktf.numberToTerraform(struct!.readModeScLinearize),
    read_mode_sc_replica: cdktf.numberToTerraform(struct!.readModeScReplica),
    read_mode_sc_session: cdktf.numberToTerraform(struct!.readModeScSession),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_mode_sc_allow_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.readModeScAllowUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_mode_sc_linearize: {
      value: cdktf.numberToHclTerraform(struct!.readModeScLinearize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_mode_sc_replica: {
      value: cdktf.numberToHclTerraform(struct!.readModeScReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_mode_sc_session: {
      value: cdktf.numberToHclTerraform(struct!.readModeScSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readModeScAllowUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeScAllowUnavailable = this._readModeScAllowUnavailable;
    }
    if (this._readModeScLinearize !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeScLinearize = this._readModeScLinearize;
    }
    if (this._readModeScReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeScReplica = this._readModeScReplica;
    }
    if (this._readModeScSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeScSession = this._readModeScSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readModeScAllowUnavailable = undefined;
      this._readModeScLinearize = undefined;
      this._readModeScReplica = undefined;
      this._readModeScSession = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readModeScAllowUnavailable = value.readModeScAllowUnavailable;
      this._readModeScLinearize = value.readModeScLinearize;
      this._readModeScReplica = value.readModeScReplica;
      this._readModeScSession = value.readModeScSession;
    }
  }

  // read_mode_sc_allow_unavailable - computed: false, optional: true, required: false
  private _readModeScAllowUnavailable?: number; 
  public get readModeScAllowUnavailable() {
    return this.getNumberAttribute('read_mode_sc_allow_unavailable');
  }
  public set readModeScAllowUnavailable(value: number) {
    this._readModeScAllowUnavailable = value;
  }
  public resetReadModeScAllowUnavailable() {
    this._readModeScAllowUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeScAllowUnavailableInput() {
    return this._readModeScAllowUnavailable;
  }

  // read_mode_sc_linearize - computed: false, optional: true, required: false
  private _readModeScLinearize?: number; 
  public get readModeScLinearize() {
    return this.getNumberAttribute('read_mode_sc_linearize');
  }
  public set readModeScLinearize(value: number) {
    this._readModeScLinearize = value;
  }
  public resetReadModeScLinearize() {
    this._readModeScLinearize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeScLinearizeInput() {
    return this._readModeScLinearize;
  }

  // read_mode_sc_replica - computed: false, optional: true, required: false
  private _readModeScReplica?: number; 
  public get readModeScReplica() {
    return this.getNumberAttribute('read_mode_sc_replica');
  }
  public set readModeScReplica(value: number) {
    this._readModeScReplica = value;
  }
  public resetReadModeScReplica() {
    this._readModeScReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeScReplicaInput() {
    return this._readModeScReplica;
  }

  // read_mode_sc_session - computed: false, optional: true, required: false
  private _readModeScSession?: number; 
  public get readModeScSession() {
    return this.getNumberAttribute('read_mode_sc_session');
  }
  public set readModeScSession(value: number) {
    this._readModeScSession = value;
  }
  public resetReadModeScSession() {
    this._readModeScSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeScSessionInput() {
    return this._readModeScSession;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#curve_p256 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#curve_p256}
  */
  readonly curveP256?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#curve_p384 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#curve_p384}
  */
  readonly curveP384?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#curve_p521 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#curve_p521}
  */
  readonly curveP521?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#x25519 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#x25519}
  */
  readonly x25519?: number;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve_p256: cdktf.numberToTerraform(struct!.curveP256),
    curve_p384: cdktf.numberToTerraform(struct!.curveP384),
    curve_p521: cdktf.numberToTerraform(struct!.curveP521),
    x25519: cdktf.numberToTerraform(struct!.x25519),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve_p256: {
      value: cdktf.numberToHclTerraform(struct!.curveP256),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curve_p384: {
      value: cdktf.numberToHclTerraform(struct!.curveP384),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curve_p521: {
      value: cdktf.numberToHclTerraform(struct!.curveP521),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x25519: {
      value: cdktf.numberToHclTerraform(struct!.x25519),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curveP256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveP256 = this._curveP256;
    }
    if (this._curveP384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveP384 = this._curveP384;
    }
    if (this._curveP521 !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveP521 = this._curveP521;
    }
    if (this._x25519 !== undefined) {
      hasAnyValues = true;
      internalValueResult.x25519 = this._x25519;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curveP256 = undefined;
      this._curveP384 = undefined;
      this._curveP521 = undefined;
      this._x25519 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curveP256 = value.curveP256;
      this._curveP384 = value.curveP384;
      this._curveP521 = value.curveP521;
      this._x25519 = value.x25519;
    }
  }

  // curve_p256 - computed: false, optional: true, required: false
  private _curveP256?: number; 
  public get curveP256() {
    return this.getNumberAttribute('curve_p256');
  }
  public set curveP256(value: number) {
    this._curveP256 = value;
  }
  public resetCurveP256() {
    this._curveP256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveP256Input() {
    return this._curveP256;
  }

  // curve_p384 - computed: false, optional: true, required: false
  private _curveP384?: number; 
  public get curveP384() {
    return this.getNumberAttribute('curve_p384');
  }
  public set curveP384(value: number) {
    this._curveP384 = value;
  }
  public resetCurveP384() {
    this._curveP384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveP384Input() {
    return this._curveP384;
  }

  // curve_p521 - computed: false, optional: true, required: false
  private _curveP521?: number; 
  public get curveP521() {
    return this.getNumberAttribute('curve_p521');
  }
  public set curveP521(value: number) {
    this._curveP521 = value;
  }
  public resetCurveP521() {
    this._curveP521 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveP521Input() {
    return this._curveP521;
  }

  // x25519 - computed: false, optional: true, required: false
  private _x25519?: number; 
  public get x25519() {
    return this.getNumberAttribute('x25519');
  }
  public set x25519(value: number) {
    this._x25519 = value;
  }
  public resetX25519() {
    this._x25519 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x25519Input() {
    return this._x25519;
  }
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allow_insecure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#batch_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cert_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cert_path}
  */
  readonly certPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#commit_all DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#commit_all}
  */
  readonly commitAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#commit_master DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#commit_master}
  */
  readonly commitMaster?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#hostname DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_path}
  */
  readonly keyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#label_selector DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#label_selector}
  */
  readonly labelSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#node_tls_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#node_tls_name}
  */
  readonly nodeTlsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#port DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_ap DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_ap}
  */
  readonly readModeAp?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_mode_sc DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_mode_sc}
  */
  readonly readModeSc?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#root_ca_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#root_ca_path}
  */
  readonly rootCaPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#set DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#set}
  */
  readonly set?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_curve_groups DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_curve_groups}
  */
  readonly tlsCurveGroups?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_version DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_version}
  */
  readonly tlsVersion?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    commit_all: cdktf.numberToTerraform(struct!.commitAll),
    commit_master: cdktf.numberToTerraform(struct!.commitMaster),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    label_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelector),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_tls_name: cdktf.stringToTerraform(struct!.nodeTlsName),
    port: cdktf.numberToTerraform(struct!.port),
    read_mode_ap: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApToTerraform(struct!.readModeAp),
    read_mode_sc: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScToTerraform(struct!.readModeSc),
    root_ca_path: cdktf.stringToTerraform(struct!.rootCaPath),
    set: cdktf.stringToTerraform(struct!.set),
    tls_curve_groups: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsToTerraform, false)(struct!.tlsCurveGroups),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_all: {
      value: cdktf.numberToHclTerraform(struct!.commitAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    commit_master: {
      value: cdktf.numberToHclTerraform(struct!.commitMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_tls_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeTlsName),
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
    read_mode_ap: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApToHclTerraform(struct!.readModeAp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp",
    },
    read_mode_sc: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScToHclTerraform(struct!.readModeSc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc",
    },
    root_ca_path: {
      value: cdktf.stringToHclTerraform(struct!.rootCaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set: {
      value: cdktf.stringToHclTerraform(struct!.set),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_curve_groups: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsToHclTerraform, false)(struct!.tlsCurveGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsList",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._commitAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitAll = this._commitAll;
    }
    if (this._commitMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMaster = this._commitMaster;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeTlsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTlsName = this._nodeTlsName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readModeAp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeAp = this._readModeAp?.internalValue;
    }
    if (this._readModeSc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readModeSc = this._readModeSc?.internalValue;
    }
    if (this._rootCaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCaPath = this._rootCaPath;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    if (this._tlsCurveGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCurveGroups = this._tlsCurveGroups?.internalValue;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecure = undefined;
      this._batchSize = undefined;
      this._certPath = undefined;
      this._commitAll = undefined;
      this._commitMaster = undefined;
      this._hostname = undefined;
      this._keyPath = undefined;
      this._labelSelector = undefined;
      this._namespace = undefined;
      this._nodeTlsName = undefined;
      this._port = undefined;
      this._readModeAp.internalValue = undefined;
      this._readModeSc.internalValue = undefined;
      this._rootCaPath = undefined;
      this._set = undefined;
      this._tlsCurveGroups.internalValue = undefined;
      this._tlsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecure = value.allowInsecure;
      this._batchSize = value.batchSize;
      this._certPath = value.certPath;
      this._commitAll = value.commitAll;
      this._commitMaster = value.commitMaster;
      this._hostname = value.hostname;
      this._keyPath = value.keyPath;
      this._labelSelector = value.labelSelector;
      this._namespace = value.namespace;
      this._nodeTlsName = value.nodeTlsName;
      this._port = value.port;
      this._readModeAp.internalValue = value.readModeAp;
      this._readModeSc.internalValue = value.readModeSc;
      this._rootCaPath = value.rootCaPath;
      this._set = value.set;
      this._tlsCurveGroups.internalValue = value.tlsCurveGroups;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // commit_all - computed: false, optional: true, required: false
  private _commitAll?: number; 
  public get commitAll() {
    return this.getNumberAttribute('commit_all');
  }
  public set commitAll(value: number) {
    this._commitAll = value;
  }
  public resetCommitAll() {
    this._commitAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAllInput() {
    return this._commitAll;
  }

  // commit_master - computed: false, optional: true, required: false
  private _commitMaster?: number; 
  public get commitMaster() {
    return this.getNumberAttribute('commit_master');
  }
  public set commitMaster(value: number) {
    this._commitMaster = value;
  }
  public resetCommitMaster() {
    this._commitMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMasterInput() {
    return this._commitMaster;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: { [key: string]: string }; 
  public get labelSelector() {
    return this.getStringMapAttribute('label_selector');
  }
  public set labelSelector(value: { [key: string]: string }) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // node_tls_name - computed: false, optional: true, required: false
  private _nodeTlsName?: string; 
  public get nodeTlsName() {
    return this.getStringAttribute('node_tls_name');
  }
  public set nodeTlsName(value: string) {
    this._nodeTlsName = value;
  }
  public resetNodeTlsName() {
    this._nodeTlsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTlsNameInput() {
    return this._nodeTlsName;
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

  // read_mode_ap - computed: false, optional: true, required: false
  private _readModeAp = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeApOutputReference(this, "read_mode_ap");
  public get readModeAp() {
    return this._readModeAp;
  }
  public putReadModeAp(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeAp) {
    this._readModeAp.internalValue = value;
  }
  public resetReadModeAp() {
    this._readModeAp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeApInput() {
    return this._readModeAp.internalValue;
  }

  // read_mode_sc - computed: false, optional: true, required: false
  private _readModeSc = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeScOutputReference(this, "read_mode_sc");
  public get readModeSc() {
    return this._readModeSc;
  }
  public putReadModeSc(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageReadModeSc) {
    this._readModeSc.internalValue = value;
  }
  public resetReadModeSc() {
    this._readModeSc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readModeScInput() {
    return this._readModeSc.internalValue;
  }

  // root_ca_path - computed: false, optional: true, required: false
  private _rootCaPath?: string; 
  public get rootCaPath() {
    return this.getStringAttribute('root_ca_path');
  }
  public set rootCaPath(value: string) {
    this._rootCaPath = value;
  }
  public resetRootCaPath() {
    this._rootCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaPathInput() {
    return this._rootCaPath;
  }

  // set - computed: false, optional: true, required: false
  private _set?: string; 
  public get set() {
    return this.getStringAttribute('set');
  }
  public set set(value: string) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }

  // tls_curve_groups - computed: false, optional: true, required: false
  private _tlsCurveGroups = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroupsList(this, "tls_curve_groups", false);
  public get tlsCurveGroups() {
    return this._tlsCurveGroups;
  }
  public putTlsCurveGroups(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageTlsCurveGroups[] | cdktf.IResolvable) {
    this._tlsCurveGroups.internalValue = value;
  }
  public resetTlsCurveGroups() {
    this._tlsCurveGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCurveGroupsInput() {
    return this._tlsCurveGroups.internalValue;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#required DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#required DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#api_key_secret_refs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#api_key_secret_refs}
  */
  readonly apiKeySecretRefs?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#label_selector DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#label_selector}
  */
  readonly labelSelector?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_secret_refs: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsToTerraform, false)(struct!.apiKeySecretRefs),
    label_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelector),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_secret_refs: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsToHclTerraform, false)(struct!.apiKeySecretRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsList",
    },
    label_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretRefs = this._apiKeySecretRefs?.internalValue;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeySecretRefs.internalValue = undefined;
      this._labelSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeySecretRefs.internalValue = value.apiKeySecretRefs;
      this._labelSelector = value.labelSelector;
    }
  }

  // api_key_secret_refs - computed: false, optional: true, required: false
  private _apiKeySecretRefs = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefsList(this, "api_key_secret_refs", false);
  public get apiKeySecretRefs() {
    return this._apiKeySecretRefs;
  }
  public putApiKeySecretRefs(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageApiKeySecretRefs[] | cdktf.IResolvable) {
    this._apiKeySecretRefs.internalValue = value;
  }
  public resetApiKeySecretRefs() {
    this._apiKeySecretRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretRefsInput() {
    return this._apiKeySecretRefs.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: { [key: string]: string }; 
  public get labelSelector() {
    return this.getStringMapAttribute('label_selector');
  }
  public set labelSelector(value: { [key: string]: string }) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#aerospike_apikey_storage DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#aerospike_apikey_storage}
  */
  readonly aerospikeApikeyStorage?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#api_key_secret_refs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#api_key_secret_refs}
  */
  readonly apiKeySecretRefs?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#header_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#headers_from_metadata DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#headers_from_metadata}
  */
  readonly headersFromMetadata?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#headers_from_metadata_entry DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#headers_from_metadata_entry}
  */
  readonly headersFromMetadataEntry?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#k8s_secret_apikey_storage DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#k8s_secret_apikey_storage}
  */
  readonly k8SSecretApikeyStorage?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#label_selector DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#label_selector}
  */
  readonly labelSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#skip_metadata_validation DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#skip_metadata_validation}
  */
  readonly skipMetadataValidation?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aerospike_apikey_storage: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageToTerraform(struct!.aerospikeApikeyStorage),
    api_key_secret_refs: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsToTerraform, false)(struct!.apiKeySecretRefs),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    headers_from_metadata: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataToTerraform(struct!.headersFromMetadata),
    headers_from_metadata_entry: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryToTerraform(struct!.headersFromMetadataEntry),
    k8s_secret_apikey_storage: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageToTerraform(struct!.k8SSecretApikeyStorage),
    label_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelector),
    skip_metadata_validation: cdktf.booleanToTerraform(struct!.skipMetadataValidation),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aerospike_apikey_storage: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageToHclTerraform(struct!.aerospikeApikeyStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage",
    },
    api_key_secret_refs: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsToHclTerraform, false)(struct!.apiKeySecretRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsList",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers_from_metadata: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataToHclTerraform(struct!.headersFromMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata",
    },
    headers_from_metadata_entry: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryToHclTerraform(struct!.headersFromMetadataEntry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry",
    },
    k8s_secret_apikey_storage: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageToHclTerraform(struct!.k8SSecretApikeyStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage",
    },
    label_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_metadata_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipMetadataValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aerospikeApikeyStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aerospikeApikeyStorage = this._aerospikeApikeyStorage?.internalValue;
    }
    if (this._apiKeySecretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretRefs = this._apiKeySecretRefs?.internalValue;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headersFromMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFromMetadata = this._headersFromMetadata?.internalValue;
    }
    if (this._headersFromMetadataEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFromMetadataEntry = this._headersFromMetadataEntry?.internalValue;
    }
    if (this._k8SSecretApikeyStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SSecretApikeyStorage = this._k8SSecretApikeyStorage?.internalValue;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._skipMetadataValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMetadataValidation = this._skipMetadataValidation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aerospikeApikeyStorage.internalValue = undefined;
      this._apiKeySecretRefs.internalValue = undefined;
      this._headerName = undefined;
      this._headersFromMetadata.internalValue = undefined;
      this._headersFromMetadataEntry.internalValue = undefined;
      this._k8SSecretApikeyStorage.internalValue = undefined;
      this._labelSelector = undefined;
      this._skipMetadataValidation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aerospikeApikeyStorage.internalValue = value.aerospikeApikeyStorage;
      this._apiKeySecretRefs.internalValue = value.apiKeySecretRefs;
      this._headerName = value.headerName;
      this._headersFromMetadata.internalValue = value.headersFromMetadata;
      this._headersFromMetadataEntry.internalValue = value.headersFromMetadataEntry;
      this._k8SSecretApikeyStorage.internalValue = value.k8SSecretApikeyStorage;
      this._labelSelector = value.labelSelector;
      this._skipMetadataValidation = value.skipMetadataValidation;
    }
  }

  // aerospike_apikey_storage - computed: false, optional: true, required: false
  private _aerospikeApikeyStorage = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorageOutputReference(this, "aerospike_apikey_storage");
  public get aerospikeApikeyStorage() {
    return this._aerospikeApikeyStorage;
  }
  public putAerospikeApikeyStorage(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthAerospikeApikeyStorage) {
    this._aerospikeApikeyStorage.internalValue = value;
  }
  public resetAerospikeApikeyStorage() {
    this._aerospikeApikeyStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aerospikeApikeyStorageInput() {
    return this._aerospikeApikeyStorage.internalValue;
  }

  // api_key_secret_refs - computed: false, optional: true, required: false
  private _apiKeySecretRefs = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefsList(this, "api_key_secret_refs", false);
  public get apiKeySecretRefs() {
    return this._apiKeySecretRefs;
  }
  public putApiKeySecretRefs(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthApiKeySecretRefs[] | cdktf.IResolvable) {
    this._apiKeySecretRefs.internalValue = value;
  }
  public resetApiKeySecretRefs() {
    this._apiKeySecretRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretRefsInput() {
    return this._apiKeySecretRefs.internalValue;
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

  // headers_from_metadata - computed: false, optional: true, required: false
  private _headersFromMetadata = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataOutputReference(this, "headers_from_metadata");
  public get headersFromMetadata() {
    return this._headersFromMetadata;
  }
  public putHeadersFromMetadata(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadata) {
    this._headersFromMetadata.internalValue = value;
  }
  public resetHeadersFromMetadata() {
    this._headersFromMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFromMetadataInput() {
    return this._headersFromMetadata.internalValue;
  }

  // headers_from_metadata_entry - computed: false, optional: true, required: false
  private _headersFromMetadataEntry = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntryOutputReference(this, "headers_from_metadata_entry");
  public get headersFromMetadataEntry() {
    return this._headersFromMetadataEntry;
  }
  public putHeadersFromMetadataEntry(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthHeadersFromMetadataEntry) {
    this._headersFromMetadataEntry.internalValue = value;
  }
  public resetHeadersFromMetadataEntry() {
    this._headersFromMetadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFromMetadataEntryInput() {
    return this._headersFromMetadataEntry.internalValue;
  }

  // k8s_secret_apikey_storage - computed: false, optional: true, required: false
  private _k8SSecretApikeyStorage = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorageOutputReference(this, "k8s_secret_apikey_storage");
  public get k8SSecretApikeyStorage() {
    return this._k8SSecretApikeyStorage;
  }
  public putK8SSecretApikeyStorage(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthK8SSecretApikeyStorage) {
    this._k8SSecretApikeyStorage.internalValue = value;
  }
  public resetK8SSecretApikeyStorage() {
    this._k8SSecretApikeyStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SSecretApikeyStorageInput() {
    return this._k8SSecretApikeyStorage.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: { [key: string]: string }; 
  public get labelSelector() {
    return this.getStringMapAttribute('label_selector');
  }
  public set labelSelector(value: { [key: string]: string }) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // skip_metadata_validation - computed: false, optional: true, required: false
  private _skipMetadataValidation?: boolean | cdktf.IResolvable; 
  public get skipMetadataValidation() {
    return this.getBooleanAttribute('skip_metadata_validation');
  }
  public set skipMetadataValidation(value: boolean | cdktf.IResolvable) {
    this._skipMetadataValidation = value;
  }
  public resetSkipMetadataValidation() {
    this._skipMetadataValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataValidationInput() {
    return this._skipMetadataValidation;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#hashed_password DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#hashed_password}
  */
  readonly hashedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#salt DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#salt}
  */
  readonly salt?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hashed_password: cdktf.stringToTerraform(struct!.hashedPassword),
    salt: cdktf.stringToTerraform(struct!.salt),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hashed_password: {
      value: cdktf.stringToHclTerraform(struct!.hashedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt: {
      value: cdktf.stringToHclTerraform(struct!.salt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashedPassword = this._hashedPassword;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashedPassword = undefined;
      this._salt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashedPassword = value.hashedPassword;
      this._salt = value.salt;
    }
  }

  // hashed_password - computed: false, optional: true, required: false
  private _hashedPassword?: string; 
  public get hashedPassword() {
    return this.getStringAttribute('hashed_password');
  }
  public set hashedPassword(value: string) {
    this._hashedPassword = value;
  }
  public resetHashedPassword() {
    this._hashedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedPasswordInput() {
    return this._hashedPassword;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#users DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#users}
  */
  readonly users?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersToTerraform(struct!.users),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._users.internalValue = value.users;
    }
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#apr DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#apr}
  */
  readonly apr?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#sha1 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#sha1}
  */
  readonly sha1?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apr: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.apr),
    sha1: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sha1),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apr: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.apr),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sha1: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sha1),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apr = this._apr;
    }
    if (this._sha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apr = undefined;
      this._sha1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apr = value.apr;
      this._sha1 = value.sha1;
    }
  }

  // apr - computed: false, optional: true, required: false
  private _apr?: { [key: string]: string }; 
  public get apr() {
    return this.getStringMapAttribute('apr');
  }
  public set apr(value: { [key: string]: string }) {
    this._apr = value;
  }
  public resetApr() {
    this._apr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aprInput() {
    return this._apr;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1?: { [key: string]: string }; 
  public get sha1() {
    return this.getStringMapAttribute('sha1');
  }
  public set sha1(value: { [key: string]: string }) {
    this._sha1 = value;
  }
  public resetSha1() {
    this._sha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#hashed_password DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#hashed_password}
  */
  readonly hashedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#salt DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#salt}
  */
  readonly salt?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hashed_password: cdktf.stringToTerraform(struct!.hashedPassword),
    salt: cdktf.stringToTerraform(struct!.salt),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hashed_password: {
      value: cdktf.stringToHclTerraform(struct!.hashedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt: {
      value: cdktf.stringToHclTerraform(struct!.salt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashedPassword = this._hashedPassword;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashedPassword = undefined;
      this._salt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashedPassword = value.hashedPassword;
      this._salt = value.salt;
    }
  }

  // hashed_password - computed: false, optional: true, required: false
  private _hashedPassword?: string; 
  public get hashedPassword() {
    return this.getStringAttribute('hashed_password');
  }
  public set hashedPassword(value: string) {
    this._hashedPassword = value;
  }
  public resetHashedPassword() {
    this._hashedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedPasswordInput() {
    return this._hashedPassword;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#users DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#users}
  */
  readonly users?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersToTerraform(struct!.users),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._users.internalValue = value.users;
    }
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#apr DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#apr}
  */
  readonly apr?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#encryption DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#encryption}
  */
  readonly encryption?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#realm DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#user_list DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#user_list}
  */
  readonly userList?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apr: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprToTerraform(struct!.apr),
    encryption: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionToTerraform(struct!.encryption),
    realm: cdktf.stringToTerraform(struct!.realm),
    user_list: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructToTerraform(struct!.userList),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apr: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprToHclTerraform(struct!.apr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr",
    },
    encryption: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_list: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructToHclTerraform(struct!.userList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apr = this._apr?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._userList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userList = this._userList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apr.internalValue = undefined;
      this._encryption.internalValue = undefined;
      this._realm = undefined;
      this._userList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apr.internalValue = value.apr;
      this._encryption.internalValue = value.encryption;
      this._realm = value.realm;
      this._userList.internalValue = value.userList;
    }
  }

  // apr - computed: false, optional: true, required: false
  private _apr = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthAprOutputReference(this, "apr");
  public get apr() {
    return this._apr;
  }
  public putApr(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthApr) {
    this._apr.internalValue = value;
  }
  public resetApr() {
    this._apr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aprInput() {
    return this._apr.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // user_list - computed: false, optional: true, required: false
  private _userList = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStructOutputReference(this, "user_list");
  public get userList() {
    return this._userList;
  }
  public putUserList(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthUserListStruct) {
    this._userList.internalValue = value;
  }
  public resetUserList() {
    this._userList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#secret_refs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#secret_refs}
  */
  readonly secretRefs: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs[] | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_refs: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsToTerraform, false)(struct!.secretRefs),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_refs: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsToHclTerraform, false)(struct!.secretRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRefs = this._secretRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRefs.internalValue = value.secretRefs;
    }
  }

  // secret_refs - computed: false, optional: false, required: true
  private _secretRefs = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefsList(this, "secret_refs", false);
  public get secretRefs() {
    return this._secretRefs;
  }
  public putSecretRefs(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsSecretRefs[] | cdktf.IResolvable) {
    this._secretRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefsInput() {
    return this._secretRefs.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#parameters_in_headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#parameters_in_headers}
  */
  readonly parametersInHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#secret_refs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#secret_refs}
  */
  readonly secretRefs: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters_in_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parametersInHeaders),
    secret_refs: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsToTerraform(struct!.secretRefs),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters_in_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parametersInHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_refs: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsToHclTerraform(struct!.secretRefs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parametersInHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.parametersInHeaders = this._parametersInHeaders;
    }
    if (this._secretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRefs = this._secretRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parametersInHeaders = undefined;
      this._secretRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parametersInHeaders = value.parametersInHeaders;
      this._secretRefs.internalValue = value.secretRefs;
    }
  }

  // parameters_in_headers - computed: false, optional: true, required: false
  private _parametersInHeaders?: { [key: string]: string }; 
  public get parametersInHeaders() {
    return this.getStringMapAttribute('parameters_in_headers');
  }
  public set parametersInHeaders(value: { [key: string]: string }) {
    this._parametersInHeaders = value;
  }
  public resetParametersInHeaders() {
    this._parametersInHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInHeadersInput() {
    return this._parametersInHeaders;
  }

  // secret_refs - computed: false, optional: false, required: true
  private _secretRefs = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefsOutputReference(this, "secret_refs");
  public get secretRefs() {
    return this._secretRefs;
  }
  public putSecretRefs(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthSecretRefs) {
    this._secretRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefsInput() {
    return this._secretRefs.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#check_groups_with_service_account DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#check_groups_with_service_account}
  */
  readonly checkGroupsWithServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#credentials_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_groups_with_service_account: cdktf.booleanToTerraform(struct!.checkGroupsWithServiceAccount),
    credentials_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_groups_with_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.checkGroupsWithServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkGroupsWithServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkGroupsWithServiceAccount = this._checkGroupsWithServiceAccount;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkGroupsWithServiceAccount = undefined;
      this._credentialsSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkGroupsWithServiceAccount = value.checkGroupsWithServiceAccount;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
    }
  }

  // check_groups_with_service_account - computed: false, optional: true, required: false
  private _checkGroupsWithServiceAccount?: boolean | cdktf.IResolvable; 
  public get checkGroupsWithServiceAccount() {
    return this.getBooleanAttribute('check_groups_with_service_account');
  }
  public set checkGroupsWithServiceAccount(value: boolean | cdktf.IResolvable) {
    this._checkGroupsWithServiceAccount = value;
  }
  public resetCheckGroupsWithServiceAccount() {
    this._checkGroupsWithServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkGroupsWithServiceAccountInput() {
    return this._checkGroupsWithServiceAccount;
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#initial_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#initial_size}
  */
  readonly initialSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#max_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#max_size}
  */
  readonly maxSize?: number;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_size: cdktf.numberToTerraform(struct!.initialSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_size: {
      value: cdktf.numberToHclTerraform(struct!.initialSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSize = this._initialSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialSize = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialSize = value.initialSize;
      this._maxSize = value.maxSize;
    }
  }

  // initial_size - computed: false, optional: true, required: false
  private _initialSize?: number; 
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }
  public set initialSize(value: number) {
    this._initialSize = value;
  }
  public resetInitialSize() {
    this._initialSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSizeInput() {
    return this._initialSize;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#address DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allowed_groups DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allowed_groups}
  */
  readonly allowedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#disable_group_checking DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#disable_group_checking}
  */
  readonly disableGroupChecking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#group_lookup_settings DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#group_lookup_settings}
  */
  readonly groupLookupSettings?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#membership_attribute_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#membership_attribute_name}
  */
  readonly membershipAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pool DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pool}
  */
  readonly pool?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#search_filter DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#user_dn_template DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#user_dn_template}
  */
  readonly userDnTemplate?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    allowed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedGroups),
    disable_group_checking: cdktf.booleanToTerraform(struct!.disableGroupChecking),
    group_lookup_settings: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsToTerraform(struct!.groupLookupSettings),
    membership_attribute_name: cdktf.stringToTerraform(struct!.membershipAttributeName),
    pool: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolToTerraform(struct!.pool),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    user_dn_template: cdktf.stringToTerraform(struct!.userDnTemplate),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_group_checking: {
      value: cdktf.booleanToHclTerraform(struct!.disableGroupChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_lookup_settings: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsToHclTerraform(struct!.groupLookupSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings",
    },
    membership_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.membershipAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_dn_template: {
      value: cdktf.stringToHclTerraform(struct!.userDnTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._allowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroups = this._allowedGroups;
    }
    if (this._disableGroupChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGroupChecking = this._disableGroupChecking;
    }
    if (this._groupLookupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLookupSettings = this._groupLookupSettings?.internalValue;
    }
    if (this._membershipAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipAttributeName = this._membershipAttributeName;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._userDnTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDnTemplate = this._userDnTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._allowedGroups = undefined;
      this._disableGroupChecking = undefined;
      this._groupLookupSettings.internalValue = undefined;
      this._membershipAttributeName = undefined;
      this._pool.internalValue = undefined;
      this._searchFilter = undefined;
      this._userDnTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._allowedGroups = value.allowedGroups;
      this._disableGroupChecking = value.disableGroupChecking;
      this._groupLookupSettings.internalValue = value.groupLookupSettings;
      this._membershipAttributeName = value.membershipAttributeName;
      this._pool.internalValue = value.pool;
      this._searchFilter = value.searchFilter;
      this._userDnTemplate = value.userDnTemplate;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // allowed_groups - computed: false, optional: true, required: false
  private _allowedGroups?: string[]; 
  public get allowedGroups() {
    return this.getListAttribute('allowed_groups');
  }
  public set allowedGroups(value: string[]) {
    this._allowedGroups = value;
  }
  public resetAllowedGroups() {
    this._allowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsInput() {
    return this._allowedGroups;
  }

  // disable_group_checking - computed: false, optional: true, required: false
  private _disableGroupChecking?: boolean | cdktf.IResolvable; 
  public get disableGroupChecking() {
    return this.getBooleanAttribute('disable_group_checking');
  }
  public set disableGroupChecking(value: boolean | cdktf.IResolvable) {
    this._disableGroupChecking = value;
  }
  public resetDisableGroupChecking() {
    this._disableGroupChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGroupCheckingInput() {
    return this._disableGroupChecking;
  }

  // group_lookup_settings - computed: false, optional: true, required: false
  private _groupLookupSettings = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettingsOutputReference(this, "group_lookup_settings");
  public get groupLookupSettings() {
    return this._groupLookupSettings;
  }
  public putGroupLookupSettings(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapGroupLookupSettings) {
    this._groupLookupSettings.internalValue = value;
  }
  public resetGroupLookupSettings() {
    this._groupLookupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLookupSettingsInput() {
    return this._groupLookupSettings.internalValue;
  }

  // membership_attribute_name - computed: false, optional: true, required: false
  private _membershipAttributeName?: string; 
  public get membershipAttributeName() {
    return this.getStringAttribute('membership_attribute_name');
  }
  public set membershipAttributeName(value: string) {
    this._membershipAttributeName = value;
  }
  public resetMembershipAttributeName() {
    this._membershipAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipAttributeNameInput() {
    return this._membershipAttributeName;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // search_filter - computed: false, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // user_dn_template - computed: false, optional: true, required: false
  private _userDnTemplate?: string; 
  public get userDnTemplate() {
    return this.getStringAttribute('user_dn_template');
  }
  public set userDnTemplate(value: string) {
    this._userDnTemplate = value;
  }
  public resetUserDnTemplate() {
    this._userDnTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnTemplateInput() {
    return this._userDnTemplate;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#app_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#app_url}
  */
  readonly appUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_endpoint_query_params DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_endpoint_query_params}
  */
  readonly authEndpointQueryParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#callback_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#callback_path}
  */
  readonly callbackPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret_ref}
  */
  readonly clientSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#issuer_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#scopes DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#scopes}
  */
  readonly scopes?: string[];
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    auth_endpoint_query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authEndpointQueryParams),
    callback_path: cdktf.stringToTerraform(struct!.callbackPath),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefToTerraform(struct!.clientSecretRef),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_endpoint_query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authEndpointQueryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    callback_path: {
      value: cdktf.stringToHclTerraform(struct!.callbackPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._authEndpointQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpointQueryParams = this._authEndpointQueryParams;
    }
    if (this._callbackPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackPath = this._callbackPath;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appUrl = undefined;
      this._authEndpointQueryParams = undefined;
      this._callbackPath = undefined;
      this._clientId = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._issuerUrl = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appUrl = value.appUrl;
      this._authEndpointQueryParams = value.authEndpointQueryParams;
      this._callbackPath = value.callbackPath;
      this._clientId = value.clientId;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._issuerUrl = value.issuerUrl;
      this._scopes = value.scopes;
    }
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
  }

  // auth_endpoint_query_params - computed: false, optional: true, required: false
  private _authEndpointQueryParams?: { [key: string]: string }; 
  public get authEndpointQueryParams() {
    return this.getStringMapAttribute('auth_endpoint_query_params');
  }
  public set authEndpointQueryParams(value: { [key: string]: string }) {
    this._authEndpointQueryParams = value;
  }
  public resetAuthEndpointQueryParams() {
    this._authEndpointQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointQueryParamsInput() {
    return this._authEndpointQueryParams;
  }

  // callback_path - computed: false, optional: true, required: false
  private _callbackPath?: string; 
  public get callbackPath() {
    return this.getStringAttribute('callback_path');
  }
  public set callbackPath(value: string) {
    this._callbackPath = value;
  }
  public resetCallbackPath() {
    this._callbackPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackPathInput() {
    return this._callbackPath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret_ref}
  */
  readonly clientSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#disable_client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#disable_client_secret}
  */
  readonly disableClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#introspection_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#introspection_url}
  */
  readonly introspectionUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#user_id_attribute_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#user_id_attribute_name}
  */
  readonly userIdAttributeName?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefToTerraform(struct!.clientSecretRef),
    disable_client_secret: cdktf.booleanToTerraform(struct!.disableClientSecret),
    introspection_url: cdktf.stringToTerraform(struct!.introspectionUrl),
    user_id_attribute_name: cdktf.stringToTerraform(struct!.userIdAttributeName),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef",
    },
    disable_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.disableClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspection_url: {
      value: cdktf.stringToHclTerraform(struct!.introspectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.userIdAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._disableClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClientSecret = this._disableClientSecret;
    }
    if (this._introspectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionUrl = this._introspectionUrl;
    }
    if (this._userIdAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdAttributeName = this._userIdAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._disableClientSecret = undefined;
      this._introspectionUrl = undefined;
      this._userIdAttributeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._disableClientSecret = value.disableClientSecret;
      this._introspectionUrl = value.introspectionUrl;
      this._userIdAttributeName = value.userIdAttributeName;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // disable_client_secret - computed: false, optional: true, required: false
  private _disableClientSecret?: boolean | cdktf.IResolvable; 
  public get disableClientSecret() {
    return this.getBooleanAttribute('disable_client_secret');
  }
  public set disableClientSecret(value: boolean | cdktf.IResolvable) {
    this._disableClientSecret = value;
  }
  public resetDisableClientSecret() {
    this._disableClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClientSecretInput() {
    return this._disableClientSecret;
  }

  // introspection_url - computed: false, optional: false, required: true
  private _introspectionUrl?: string; 
  public get introspectionUrl() {
    return this.getStringAttribute('introspection_url');
  }
  public set introspectionUrl(value: string) {
    this._introspectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionUrlInput() {
    return this._introspectionUrl;
  }

  // user_id_attribute_name - computed: false, optional: true, required: false
  private _userIdAttributeName?: string; 
  public get userIdAttributeName() {
    return this.getStringAttribute('user_id_attribute_name');
  }
  public set userIdAttributeName(value: string) {
    this._userIdAttributeName = value;
  }
  public resetUserIdAttributeName() {
    this._userIdAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeNameInput() {
    return this._userIdAttributeName;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#inline_string DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#inline_string}
  */
  readonly inlineString: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_string: cdktf.stringToTerraform(struct!.inlineString),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_string: {
      value: cdktf.stringToHclTerraform(struct!.inlineString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineString !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineString = this._inlineString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlineString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlineString = value.inlineString;
    }
  }

  // inline_string - computed: false, optional: false, required: true
  private _inlineString?: string; 
  public get inlineString() {
    return this.getStringAttribute('inline_string');
  }
  public set inlineString(value: string) {
    this._inlineString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineStringInput() {
    return this._inlineString;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#refresh_interval DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refreshInterval = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refreshInterval = value.refreshInterval;
      this._url = value.url;
    }
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#issuer DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#local_jwks DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#local_jwks}
  */
  readonly localJwks?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#remote_jwks DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#remote_jwks}
  */
  readonly remoteJwks?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    local_jwks: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksToTerraform(struct!.localJwks),
    remote_jwks: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksToTerraform(struct!.remoteJwks),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_jwks: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksToHclTerraform(struct!.localJwks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks",
    },
    remote_jwks: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksToHclTerraform(struct!.remoteJwks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._localJwks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localJwks = this._localJwks?.internalValue;
    }
    if (this._remoteJwks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteJwks = this._remoteJwks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer = undefined;
      this._localJwks.internalValue = undefined;
      this._remoteJwks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer = value.issuer;
      this._localJwks.internalValue = value.localJwks;
      this._remoteJwks.internalValue = value.remoteJwks;
    }
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // local_jwks - computed: false, optional: true, required: false
  private _localJwks = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwksOutputReference(this, "local_jwks");
  public get localJwks() {
    return this._localJwks;
  }
  public putLocalJwks(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtLocalJwks) {
    this._localJwks.internalValue = value;
  }
  public resetLocalJwks() {
    this._localJwks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localJwksInput() {
    return this._localJwks.internalValue;
  }

  // remote_jwks - computed: false, optional: true, required: false
  private _remoteJwks = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwksOutputReference(this, "remote_jwks");
  public get remoteJwks() {
    return this._remoteJwks;
  }
  public putRemoteJwks(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtRemoteJwks) {
    this._remoteJwks.internalValue = value;
  }
  public resetRemoteJwks() {
    this._remoteJwks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteJwksInput() {
    return this._remoteJwks.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#scope DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#scope}
  */
  readonly scope?: string[];
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cache_timeout DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cache_timeout}
  */
  readonly cacheTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#dynamic_metadata_from_claims DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#dynamic_metadata_from_claims}
  */
  readonly dynamicMetadataFromClaims?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#introspection DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#introspection}
  */
  readonly introspection?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#introspection_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#introspection_url}
  */
  readonly introspectionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#jwt DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#jwt}
  */
  readonly jwt?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#required_scopes DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#required_scopes}
  */
  readonly requiredScopes?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#userinfo_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#userinfo_url}
  */
  readonly userinfoUrl?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_timeout: cdktf.stringToTerraform(struct!.cacheTimeout),
    dynamic_metadata_from_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dynamicMetadataFromClaims),
    introspection: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionToTerraform(struct!.introspection),
    introspection_url: cdktf.stringToTerraform(struct!.introspectionUrl),
    jwt: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtToTerraform(struct!.jwt),
    required_scopes: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesToTerraform(struct!.requiredScopes),
    userinfo_url: cdktf.stringToTerraform(struct!.userinfoUrl),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_metadata_from_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dynamicMetadataFromClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    introspection: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionToHclTerraform(struct!.introspection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection",
    },
    introspection_url: {
      value: cdktf.stringToHclTerraform(struct!.introspectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt",
    },
    required_scopes: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesToHclTerraform(struct!.requiredScopes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes",
    },
    userinfo_url: {
      value: cdktf.stringToHclTerraform(struct!.userinfoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimeout = this._cacheTimeout;
    }
    if (this._dynamicMetadataFromClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetadataFromClaims = this._dynamicMetadataFromClaims;
    }
    if (this._introspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspection = this._introspection?.internalValue;
    }
    if (this._introspectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionUrl = this._introspectionUrl;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._requiredScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredScopes = this._requiredScopes?.internalValue;
    }
    if (this._userinfoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoUrl = this._userinfoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheTimeout = undefined;
      this._dynamicMetadataFromClaims = undefined;
      this._introspection.internalValue = undefined;
      this._introspectionUrl = undefined;
      this._jwt.internalValue = undefined;
      this._requiredScopes.internalValue = undefined;
      this._userinfoUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheTimeout = value.cacheTimeout;
      this._dynamicMetadataFromClaims = value.dynamicMetadataFromClaims;
      this._introspection.internalValue = value.introspection;
      this._introspectionUrl = value.introspectionUrl;
      this._jwt.internalValue = value.jwt;
      this._requiredScopes.internalValue = value.requiredScopes;
      this._userinfoUrl = value.userinfoUrl;
    }
  }

  // cache_timeout - computed: false, optional: true, required: false
  private _cacheTimeout?: string; 
  public get cacheTimeout() {
    return this.getStringAttribute('cache_timeout');
  }
  public set cacheTimeout(value: string) {
    this._cacheTimeout = value;
  }
  public resetCacheTimeout() {
    this._cacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInput() {
    return this._cacheTimeout;
  }

  // dynamic_metadata_from_claims - computed: false, optional: true, required: false
  private _dynamicMetadataFromClaims?: { [key: string]: string }; 
  public get dynamicMetadataFromClaims() {
    return this.getStringMapAttribute('dynamic_metadata_from_claims');
  }
  public set dynamicMetadataFromClaims(value: { [key: string]: string }) {
    this._dynamicMetadataFromClaims = value;
  }
  public resetDynamicMetadataFromClaims() {
    this._dynamicMetadataFromClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetadataFromClaimsInput() {
    return this._dynamicMetadataFromClaims;
  }

  // introspection - computed: false, optional: true, required: false
  private _introspection = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospectionOutputReference(this, "introspection");
  public get introspection() {
    return this._introspection;
  }
  public putIntrospection(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationIntrospection) {
    this._introspection.internalValue = value;
  }
  public resetIntrospection() {
    this._introspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionInput() {
    return this._introspection.internalValue;
  }

  // introspection_url - computed: false, optional: true, required: false
  private _introspectionUrl?: string; 
  public get introspectionUrl() {
    return this.getStringAttribute('introspection_url');
  }
  public set introspectionUrl(value: string) {
    this._introspectionUrl = value;
  }
  public resetIntrospectionUrl() {
    this._introspectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionUrlInput() {
    return this._introspectionUrl;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // required_scopes - computed: false, optional: true, required: false
  private _requiredScopes = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopesOutputReference(this, "required_scopes");
  public get requiredScopes() {
    return this._requiredScopes;
  }
  public putRequiredScopes(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationRequiredScopes) {
    this._requiredScopes.internalValue = value;
  }
  public resetRequiredScopes() {
    this._requiredScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredScopesInput() {
    return this._requiredScopes.internalValue;
  }

  // userinfo_url - computed: false, optional: true, required: false
  private _userinfoUrl?: string; 
  public get userinfoUrl() {
    return this.getStringAttribute('userinfo_url');
  }
  public set userinfoUrl(value: string) {
    this._userinfoUrl = value;
  }
  public resetUserinfoUrl() {
    this._userinfoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoUrlInput() {
    return this._userinfoUrl;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyRef.internalValue = value.keyRef;
    }
  }

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allow_refreshing DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allow_refreshing}
  */
  readonly allowRefreshing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_prefix DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#target_domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#target_domain}
  */
  readonly targetDomain?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_refreshing: cdktf.booleanToTerraform(struct!.allowRefreshing),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    target_domain: cdktf.stringToTerraform(struct!.targetDomain),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_refreshing: {
      value: cdktf.booleanToHclTerraform(struct!.allowRefreshing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_domain: {
      value: cdktf.stringToHclTerraform(struct!.targetDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRefreshing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRefreshing = this._allowRefreshing;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._targetDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDomain = this._targetDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRefreshing = undefined;
      this._keyPrefix = undefined;
      this._targetDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRefreshing = value.allowRefreshing;
      this._keyPrefix = value.keyPrefix;
      this._targetDomain = value.targetDomain;
    }
  }

  // allow_refreshing - computed: false, optional: true, required: false
  private _allowRefreshing?: boolean | cdktf.IResolvable; 
  public get allowRefreshing() {
    return this.getBooleanAttribute('allow_refreshing');
  }
  public set allowRefreshing(value: boolean | cdktf.IResolvable) {
    this._allowRefreshing = value;
  }
  public resetAllowRefreshing() {
    this._allowRefreshing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshingInput() {
    return this._allowRefreshing;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // target_domain - computed: false, optional: true, required: false
  private _targetDomain?: string; 
  public get targetDomain() {
    return this.getStringAttribute('target_domain');
  }
  public set targetDomain(value: string) {
    this._targetDomain = value;
  }
  public resetTargetDomain() {
    this._targetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainInput() {
    return this._targetDomain;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#http_only DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#max_age DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#not_secure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#not_secure}
  */
  readonly notSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#same_site DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#same_site}
  */
  readonly sameSite?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    not_secure: cdktf.booleanToTerraform(struct!.notSecure),
    path: cdktf.stringToTerraform(struct!.path),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_secure: {
      value: cdktf.booleanToHclTerraform(struct!.notSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._notSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSecure = this._notSecure;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._notSecure = undefined;
      this._path = undefined;
      this._sameSite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._notSecure = value.notSecure;
      this._path = value.path;
      this._sameSite = value.sameSite;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // not_secure - computed: false, optional: true, required: false
  private _notSecure?: boolean | cdktf.IResolvable; 
  public get notSecure() {
    return this.getBooleanAttribute('not_secure');
  }
  public set notSecure(value: boolean | cdktf.IResolvable) {
    this._notSecure = value;
  }
  public resetNotSecure() {
    this._notSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSecureInput() {
    return this._notSecure;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#db DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#db}
  */
  readonly db?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#host DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pool_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#socket_type DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#socket_type}
  */
  readonly socketType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_cert_mount_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_cert_mount_path}
  */
  readonly tlsCertMountPath?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.numberToTerraform(struct!.db),
    host: cdktf.stringToTerraform(struct!.host),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    socket_type: cdktf.stringToTerraform(struct!.socketType),
    tls_cert_mount_path: cdktf.stringToTerraform(struct!.tlsCertMountPath),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.numberToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_type: {
      value: cdktf.stringToHclTerraform(struct!.socketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._socketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketType = this._socketType;
    }
    if (this._tlsCertMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertMountPath = this._tlsCertMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._host = undefined;
      this._poolSize = undefined;
      this._socketType = undefined;
      this._tlsCertMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._host = value.host;
      this._poolSize = value.poolSize;
      this._socketType = value.socketType;
      this._tlsCertMountPath = value.tlsCertMountPath;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: number; 
  public get db() {
    return this.getNumberAttribute('db');
  }
  public set db(value: number) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // socket_type - computed: false, optional: true, required: false
  private _socketType?: string; 
  public get socketType() {
    return this.getStringAttribute('socket_type');
  }
  public set socketType(value: string) {
    this._socketType = value;
  }
  public resetSocketType() {
    this._socketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTypeInput() {
    return this._socketType;
  }

  // tls_cert_mount_path - computed: false, optional: true, required: false
  private _tlsCertMountPath?: string; 
  public get tlsCertMountPath() {
    return this.getStringAttribute('tls_cert_mount_path');
  }
  public set tlsCertMountPath(value: string) {
    this._tlsCertMountPath = value;
  }
  public resetTlsCertMountPath() {
    this._tlsCertMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertMountPathInput() {
    return this._tlsCertMountPath;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allow_refreshing DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allow_refreshing}
  */
  readonly allowRefreshing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#header_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_prefix DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#options}
  */
  readonly options?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pre_expiry_buffer DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pre_expiry_buffer}
  */
  readonly preExpiryBuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#target_domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#target_domain}
  */
  readonly targetDomain?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_refreshing: cdktf.booleanToTerraform(struct!.allowRefreshing),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsToTerraform(struct!.options),
    pre_expiry_buffer: cdktf.stringToTerraform(struct!.preExpiryBuffer),
    target_domain: cdktf.stringToTerraform(struct!.targetDomain),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_refreshing: {
      value: cdktf.booleanToHclTerraform(struct!.allowRefreshing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions",
    },
    pre_expiry_buffer: {
      value: cdktf.stringToHclTerraform(struct!.preExpiryBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_domain: {
      value: cdktf.stringToHclTerraform(struct!.targetDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRefreshing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRefreshing = this._allowRefreshing;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._preExpiryBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExpiryBuffer = this._preExpiryBuffer;
    }
    if (this._targetDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDomain = this._targetDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRefreshing = undefined;
      this._cookieName = undefined;
      this._headerName = undefined;
      this._keyPrefix = undefined;
      this._options.internalValue = undefined;
      this._preExpiryBuffer = undefined;
      this._targetDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRefreshing = value.allowRefreshing;
      this._cookieName = value.cookieName;
      this._headerName = value.headerName;
      this._keyPrefix = value.keyPrefix;
      this._options.internalValue = value.options;
      this._preExpiryBuffer = value.preExpiryBuffer;
      this._targetDomain = value.targetDomain;
    }
  }

  // allow_refreshing - computed: false, optional: true, required: false
  private _allowRefreshing?: boolean | cdktf.IResolvable; 
  public get allowRefreshing() {
    return this.getBooleanAttribute('allow_refreshing');
  }
  public set allowRefreshing(value: boolean | cdktf.IResolvable) {
    this._allowRefreshing = value;
  }
  public resetAllowRefreshing() {
    this._allowRefreshing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshingInput() {
    return this._allowRefreshing;
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
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

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pre_expiry_buffer - computed: false, optional: true, required: false
  private _preExpiryBuffer?: string; 
  public get preExpiryBuffer() {
    return this.getStringAttribute('pre_expiry_buffer');
  }
  public set preExpiryBuffer(value: string) {
    this._preExpiryBuffer = value;
  }
  public resetPreExpiryBuffer() {
    this._preExpiryBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExpiryBufferInput() {
    return this._preExpiryBuffer;
  }

  // target_domain - computed: false, optional: true, required: false
  private _targetDomain?: string; 
  public get targetDomain() {
    return this.getStringAttribute('target_domain');
  }
  public set targetDomain(value: string) {
    this._targetDomain = value;
  }
  public resetTargetDomain() {
    this._targetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainInput() {
    return this._targetDomain;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cipher_config DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cipher_config}
  */
  readonly cipherConfig?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie}
  */
  readonly cookie?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie_options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie_options}
  */
  readonly cookieOptions?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#fail_on_fetch_failure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#fail_on_fetch_failure}
  */
  readonly failOnFetchFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#redis DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#redis}
  */
  readonly redis?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_config: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigToTerraform(struct!.cipherConfig),
    cookie: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieToTerraform(struct!.cookie),
    cookie_options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsToTerraform(struct!.cookieOptions),
    fail_on_fetch_failure: cdktf.booleanToTerraform(struct!.failOnFetchFailure),
    redis: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisToTerraform(struct!.redis),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_config: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigToHclTerraform(struct!.cipherConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig",
    },
    cookie: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie",
    },
    cookie_options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsToHclTerraform(struct!.cookieOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions",
    },
    fail_on_fetch_failure: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFetchFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redis: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherConfig = this._cipherConfig?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._cookieOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieOptions = this._cookieOptions?.internalValue;
    }
    if (this._failOnFetchFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFetchFailure = this._failOnFetchFailure;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherConfig.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._cookieOptions.internalValue = undefined;
      this._failOnFetchFailure = undefined;
      this._redis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherConfig.internalValue = value.cipherConfig;
      this._cookie.internalValue = value.cookie;
      this._cookieOptions.internalValue = value.cookieOptions;
      this._failOnFetchFailure = value.failOnFetchFailure;
      this._redis.internalValue = value.redis;
    }
  }

  // cipher_config - computed: false, optional: true, required: false
  private _cipherConfig = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfigOutputReference(this, "cipher_config");
  public get cipherConfig() {
    return this._cipherConfig;
  }
  public putCipherConfig(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCipherConfig) {
    this._cipherConfig.internalValue = value;
  }
  public resetCipherConfig() {
    this._cipherConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherConfigInput() {
    return this._cipherConfig.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // cookie_options - computed: false, optional: true, required: false
  private _cookieOptions = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptionsOutputReference(this, "cookie_options");
  public get cookieOptions() {
    return this._cookieOptions;
  }
  public putCookieOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionCookieOptions) {
    this._cookieOptions.internalValue = value;
  }
  public resetCookieOptions() {
    this._cookieOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieOptionsInput() {
    return this._cookieOptions.internalValue;
  }

  // fail_on_fetch_failure - computed: false, optional: true, required: false
  private _failOnFetchFailure?: boolean | cdktf.IResolvable; 
  public get failOnFetchFailure() {
    return this.getBooleanAttribute('fail_on_fetch_failure');
  }
  public set failOnFetchFailure(value: boolean | cdktf.IResolvable) {
    this._failOnFetchFailure = value;
  }
  public resetFailOnFetchFailure() {
    this._failOnFetchFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFetchFailureInput() {
    return this._failOnFetchFailure;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#after_logout_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#after_logout_url}
  */
  readonly afterLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#app_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#app_url}
  */
  readonly appUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_endpoint}
  */
  readonly authEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_endpoint_query_params DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_endpoint_query_params}
  */
  readonly authEndpointQueryParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#callback_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#callback_path}
  */
  readonly callbackPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret_ref}
  */
  readonly clientSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#disable_client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#disable_client_secret}
  */
  readonly disableClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#logout_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#logout_path}
  */
  readonly logoutPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#revocation_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#revocation_endpoint}
  */
  readonly revocationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#scopes DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#session DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#session}
  */
  readonly session?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#token_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#token_endpoint_query_params DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#token_endpoint_query_params}
  */
  readonly tokenEndpointQueryParams?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_logout_url: cdktf.stringToTerraform(struct!.afterLogoutUrl),
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    auth_endpoint_query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authEndpointQueryParams),
    callback_path: cdktf.stringToTerraform(struct!.callbackPath),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefToTerraform(struct!.clientSecretRef),
    disable_client_secret: cdktf.booleanToTerraform(struct!.disableClientSecret),
    logout_path: cdktf.stringToTerraform(struct!.logoutPath),
    revocation_endpoint: cdktf.stringToTerraform(struct!.revocationEndpoint),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    session: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionToTerraform(struct!.session),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_endpoint_query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenEndpointQueryParams),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.afterLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_endpoint_query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authEndpointQueryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    callback_path: {
      value: cdktf.stringToHclTerraform(struct!.callbackPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef",
    },
    disable_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.disableClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_path: {
      value: cdktf.stringToHclTerraform(struct!.logoutPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.revocationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionToHclTerraform(struct!.session),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenEndpointQueryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterLogoutUrl = this._afterLogoutUrl;
    }
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._authEndpointQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpointQueryParams = this._authEndpointQueryParams;
    }
    if (this._callbackPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackPath = this._callbackPath;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._disableClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClientSecret = this._disableClientSecret;
    }
    if (this._logoutPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPath = this._logoutPath;
    }
    if (this._revocationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationEndpoint = this._revocationEndpoint;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._session?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session?.internalValue;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenEndpointQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointQueryParams = this._tokenEndpointQueryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterLogoutUrl = undefined;
      this._appUrl = undefined;
      this._authEndpoint = undefined;
      this._authEndpointQueryParams = undefined;
      this._callbackPath = undefined;
      this._clientId = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._disableClientSecret = undefined;
      this._logoutPath = undefined;
      this._revocationEndpoint = undefined;
      this._scopes = undefined;
      this._session.internalValue = undefined;
      this._tokenEndpoint = undefined;
      this._tokenEndpointQueryParams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterLogoutUrl = value.afterLogoutUrl;
      this._appUrl = value.appUrl;
      this._authEndpoint = value.authEndpoint;
      this._authEndpointQueryParams = value.authEndpointQueryParams;
      this._callbackPath = value.callbackPath;
      this._clientId = value.clientId;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._disableClientSecret = value.disableClientSecret;
      this._logoutPath = value.logoutPath;
      this._revocationEndpoint = value.revocationEndpoint;
      this._scopes = value.scopes;
      this._session.internalValue = value.session;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenEndpointQueryParams = value.tokenEndpointQueryParams;
    }
  }

  // after_logout_url - computed: false, optional: true, required: false
  private _afterLogoutUrl?: string; 
  public get afterLogoutUrl() {
    return this.getStringAttribute('after_logout_url');
  }
  public set afterLogoutUrl(value: string) {
    this._afterLogoutUrl = value;
  }
  public resetAfterLogoutUrl() {
    this._afterLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterLogoutUrlInput() {
    return this._afterLogoutUrl;
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
  }

  // auth_endpoint - computed: false, optional: false, required: true
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // auth_endpoint_query_params - computed: false, optional: true, required: false
  private _authEndpointQueryParams?: { [key: string]: string }; 
  public get authEndpointQueryParams() {
    return this.getStringMapAttribute('auth_endpoint_query_params');
  }
  public set authEndpointQueryParams(value: { [key: string]: string }) {
    this._authEndpointQueryParams = value;
  }
  public resetAuthEndpointQueryParams() {
    this._authEndpointQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointQueryParamsInput() {
    return this._authEndpointQueryParams;
  }

  // callback_path - computed: false, optional: false, required: true
  private _callbackPath?: string; 
  public get callbackPath() {
    return this.getStringAttribute('callback_path');
  }
  public set callbackPath(value: string) {
    this._callbackPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackPathInput() {
    return this._callbackPath;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // disable_client_secret - computed: false, optional: true, required: false
  private _disableClientSecret?: boolean | cdktf.IResolvable; 
  public get disableClientSecret() {
    return this.getBooleanAttribute('disable_client_secret');
  }
  public set disableClientSecret(value: boolean | cdktf.IResolvable) {
    this._disableClientSecret = value;
  }
  public resetDisableClientSecret() {
    this._disableClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClientSecretInput() {
    return this._disableClientSecret;
  }

  // logout_path - computed: false, optional: true, required: false
  private _logoutPath?: string; 
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }
  public set logoutPath(value: string) {
    this._logoutPath = value;
  }
  public resetLogoutPath() {
    this._logoutPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPathInput() {
    return this._logoutPath;
  }

  // revocation_endpoint - computed: false, optional: true, required: false
  private _revocationEndpoint?: string; 
  public get revocationEndpoint() {
    return this.getStringAttribute('revocation_endpoint');
  }
  public set revocationEndpoint(value: string) {
    this._revocationEndpoint = value;
  }
  public resetRevocationEndpoint() {
    this._revocationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationEndpointInput() {
    return this._revocationEndpoint;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // session - computed: false, optional: true, required: false
  private _session = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2SessionOutputReference(this, "session");
  public get session() {
    return this._session;
  }
  public putSession(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2Session) {
    this._session.internalValue = value;
  }
  public resetSession() {
    this._session.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session.internalValue;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_endpoint_query_params - computed: false, optional: true, required: false
  private _tokenEndpointQueryParams?: { [key: string]: string }; 
  public get tokenEndpointQueryParams() {
    return this.getStringMapAttribute('token_endpoint_query_params');
  }
  public set tokenEndpointQueryParams(value: { [key: string]: string }) {
    this._tokenEndpointQueryParams = value;
  }
  public resetTokenEndpointQueryParams() {
    this._tokenEndpointQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointQueryParamsInput() {
    return this._tokenEndpointQueryParams;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#append DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claim DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#header DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#header}
  */
  readonly header?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    claim: cdktf.stringToTerraform(struct!.claim),
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._claim = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._claim = value.claim;
      this._header = value.header;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claims_to_headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claims_to_headers}
  */
  readonly claimsToHeaders?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders[] | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_to_headers: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersToTerraform, false)(struct!.claimsToHeaders),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_to_headers: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersToHclTerraform, false)(struct!.claimsToHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsToHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToHeaders = this._claimsToHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimsToHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimsToHeaders.internalValue = value.claimsToHeaders;
    }
  }

  // claims_to_headers - computed: false, optional: true, required: false
  private _claimsToHeaders = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeadersList(this, "claims_to_headers", false);
  public get claimsToHeaders() {
    return this._claimsToHeaders;
  }
  public putClaimsToHeaders(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenClaimsToHeaders[] | cdktf.IResolvable) {
    this._claimsToHeaders.internalValue = value;
  }
  public resetClaimsToHeaders() {
    this._claimsToHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToHeadersInput() {
    return this._claimsToHeaders.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
    }
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#db DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#db}
  */
  readonly db?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#host DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pool_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#socket_type DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#socket_type}
  */
  readonly socketType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_cert_mount_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_cert_mount_path}
  */
  readonly tlsCertMountPath?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.numberToTerraform(struct!.db),
    host: cdktf.stringToTerraform(struct!.host),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    socket_type: cdktf.stringToTerraform(struct!.socketType),
    tls_cert_mount_path: cdktf.stringToTerraform(struct!.tlsCertMountPath),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.numberToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_type: {
      value: cdktf.stringToHclTerraform(struct!.socketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._socketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketType = this._socketType;
    }
    if (this._tlsCertMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertMountPath = this._tlsCertMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._host = undefined;
      this._poolSize = undefined;
      this._socketType = undefined;
      this._tlsCertMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._host = value.host;
      this._poolSize = value.poolSize;
      this._socketType = value.socketType;
      this._tlsCertMountPath = value.tlsCertMountPath;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: number; 
  public get db() {
    return this.getNumberAttribute('db');
  }
  public set db(value: number) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // socket_type - computed: false, optional: true, required: false
  private _socketType?: string; 
  public get socketType() {
    return this.getStringAttribute('socket_type');
  }
  public set socketType(value: string) {
    this._socketType = value;
  }
  public resetSocketType() {
    this._socketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTypeInput() {
    return this._socketType;
  }

  // tls_cert_mount_path - computed: false, optional: true, required: false
  private _tlsCertMountPath?: string; 
  public get tlsCertMountPath() {
    return this.getStringAttribute('tls_cert_mount_path');
  }
  public set tlsCertMountPath(value: string) {
    this._tlsCertMountPath = value;
  }
  public resetTlsCertMountPath() {
    this._tlsCertMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertMountPathInput() {
    return this._tlsCertMountPath;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claims_caching_options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claims_caching_options}
  */
  readonly claimsCachingOptions?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tenant_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_caching_options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsToTerraform(struct!.claimsCachingOptions),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_caching_options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsToHclTerraform(struct!.claimsCachingOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsCachingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsCachingOptions = this._claimsCachingOptions?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimsCachingOptions.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimsCachingOptions.internalValue = value.claimsCachingOptions;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // claims_caching_options - computed: false, optional: true, required: false
  private _claimsCachingOptions = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptionsOutputReference(this, "claims_caching_options");
  public get claimsCachingOptions() {
    return this._claimsCachingOptions;
  }
  public putClaimsCachingOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClaimsCachingOptions) {
    this._claimsCachingOptions.internalValue = value;
  }
  public resetClaimsCachingOptions() {
    this._claimsCachingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsCachingOptionsInput() {
    return this._claimsCachingOptions.internalValue;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret_ref}
  */
  readonly clientSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#disable_client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#disable_client_secret}
  */
  readonly disableClientSecret?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefToTerraform(struct!.clientSecretRef),
    disable_client_secret: cdktf.booleanToTerraform(struct!.disableClientSecret),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef",
    },
    disable_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.disableClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._disableClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClientSecret = this._disableClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._disableClientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._disableClientSecret = value.disableClientSecret;
    }
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // disable_client_secret - computed: false, optional: true, required: false
  private _disableClientSecret?: boolean | cdktf.IResolvable; 
  public get disableClientSecret() {
    return this.getBooleanAttribute('disable_client_secret');
  }
  public set disableClientSecret(value: boolean | cdktf.IResolvable) {
    this._disableClientSecret = value;
  }
  public resetDisableClientSecret() {
    this._disableClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClientSecretInput() {
    return this._disableClientSecret;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#signing_key_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#signing_key_ref}
  */
  readonly signingKeyRef: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#valid_for DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#valid_for}
  */
  readonly validFor?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signing_key_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefToTerraform(struct!.signingKeyRef),
    valid_for: cdktf.stringToTerraform(struct!.validFor),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signing_key_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefToHclTerraform(struct!.signingKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef",
    },
    valid_for: {
      value: cdktf.stringToHclTerraform(struct!.validFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signingKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKeyRef = this._signingKeyRef?.internalValue;
    }
    if (this._validFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFor = this._validFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signingKeyRef.internalValue = undefined;
      this._validFor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signingKeyRef.internalValue = value.signingKeyRef;
      this._validFor = value.validFor;
    }
  }

  // signing_key_ref - computed: false, optional: false, required: true
  private _signingKeyRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRefOutputReference(this, "signing_key_ref");
  public get signingKeyRef() {
    return this._signingKeyRef;
  }
  public putSigningKeyRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtSigningKeyRef) {
    this._signingKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyRefInput() {
    return this._signingKeyRef.internalValue;
  }

  // valid_for - computed: false, optional: true, required: false
  private _validFor?: string; 
  public get validFor() {
    return this.getStringAttribute('valid_for');
  }
  public set validFor(value: string) {
    this._validFor = value;
  }
  public resetValidFor() {
    this._validFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validForInput() {
    return this._validFor;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#private_key_jwt DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#private_key_jwt}
  */
  readonly privateKeyJwt?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_secret: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretToTerraform(struct!.clientSecret),
    private_key_jwt: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtToTerraform(struct!.privateKeyJwt),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_secret: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret",
    },
    private_key_jwt: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtToHclTerraform(struct!.privateKeyJwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._privateKeyJwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyJwt = this._privateKeyJwt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._privateKeyJwt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientSecret.internalValue = value.clientSecret;
      this._privateKeyJwt.internalValue = value.privateKeyJwt;
    }
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // private_key_jwt - computed: false, optional: true, required: false
  private _privateKeyJwt = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwtOutputReference(this, "private_key_jwt");
  public get privateKeyJwt() {
    return this._privateKeyJwt;
  }
  public putPrivateKeyJwt(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationPrivateKeyJwt) {
    this._privateKeyJwt.internalValue = value;
  }
  public resetPrivateKeyJwt() {
    this._privateKeyJwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyJwtInput() {
    return this._privateKeyJwt.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_methods DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_methods}
  */
  readonly authMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claims DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claims}
  */
  readonly claims?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#end_session_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#end_session_endpoint}
  */
  readonly endSessionEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#id_token_algs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#id_token_algs}
  */
  readonly idTokenAlgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#jwks_uri DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#response_types DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#revocation_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#revocation_endpoint}
  */
  readonly revocationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#scopes DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#subjects DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#subjects}
  */
  readonly subjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#token_endpoint DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authMethods),
    claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claims),
    end_session_endpoint: cdktf.stringToTerraform(struct!.endSessionEndpoint),
    id_token_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idTokenAlgs),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseTypes),
    revocation_endpoint: cdktf.stringToTerraform(struct!.revocationEndpoint),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjects),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_session_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endSessionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_algs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idTokenAlgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    revocation_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.revocationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._authMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethods = this._authMethods;
    }
    if (this._claims !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims;
    }
    if (this._endSessionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSessionEndpoint = this._endSessionEndpoint;
    }
    if (this._idTokenAlgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenAlgs = this._idTokenAlgs;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._responseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypes = this._responseTypes;
    }
    if (this._revocationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationEndpoint = this._revocationEndpoint;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._subjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authEndpoint = undefined;
      this._authMethods = undefined;
      this._claims = undefined;
      this._endSessionEndpoint = undefined;
      this._idTokenAlgs = undefined;
      this._jwksUri = undefined;
      this._responseTypes = undefined;
      this._revocationEndpoint = undefined;
      this._scopes = undefined;
      this._subjects = undefined;
      this._tokenEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authEndpoint = value.authEndpoint;
      this._authMethods = value.authMethods;
      this._claims = value.claims;
      this._endSessionEndpoint = value.endSessionEndpoint;
      this._idTokenAlgs = value.idTokenAlgs;
      this._jwksUri = value.jwksUri;
      this._responseTypes = value.responseTypes;
      this._revocationEndpoint = value.revocationEndpoint;
      this._scopes = value.scopes;
      this._subjects = value.subjects;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // auth_methods - computed: false, optional: true, required: false
  private _authMethods?: string[]; 
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }
  public set authMethods(value: string[]) {
    this._authMethods = value;
  }
  public resetAuthMethods() {
    this._authMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodsInput() {
    return this._authMethods;
  }

  // claims - computed: false, optional: true, required: false
  private _claims?: string[]; 
  public get claims() {
    return this.getListAttribute('claims');
  }
  public set claims(value: string[]) {
    this._claims = value;
  }
  public resetClaims() {
    this._claims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims;
  }

  // end_session_endpoint - computed: false, optional: true, required: false
  private _endSessionEndpoint?: string; 
  public get endSessionEndpoint() {
    return this.getStringAttribute('end_session_endpoint');
  }
  public set endSessionEndpoint(value: string) {
    this._endSessionEndpoint = value;
  }
  public resetEndSessionEndpoint() {
    this._endSessionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSessionEndpointInput() {
    return this._endSessionEndpoint;
  }

  // id_token_algs - computed: false, optional: true, required: false
  private _idTokenAlgs?: string[]; 
  public get idTokenAlgs() {
    return this.getListAttribute('id_token_algs');
  }
  public set idTokenAlgs(value: string[]) {
    this._idTokenAlgs = value;
  }
  public resetIdTokenAlgs() {
    this._idTokenAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenAlgsInput() {
    return this._idTokenAlgs;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // revocation_endpoint - computed: false, optional: true, required: false
  private _revocationEndpoint?: string; 
  public get revocationEndpoint() {
    return this.getStringAttribute('revocation_endpoint');
  }
  public set revocationEndpoint(value: string) {
    this._revocationEndpoint = value;
  }
  public resetRevocationEndpoint() {
    this._revocationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationEndpointInput() {
    return this._revocationEndpoint;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return this.getListAttribute('subjects');
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#method_type DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#method_type}
  */
  readonly methodType?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_type: cdktf.stringToTerraform(struct!.methodType),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method_type: {
      value: cdktf.stringToHclTerraform(struct!.methodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodType = this._methodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methodType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methodType = value.methodType;
    }
  }

  // method_type - computed: false, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#access_token_header DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#access_token_header}
  */
  readonly accessTokenHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#id_token_header DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#id_token_header}
  */
  readonly idTokenHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#use_bearer_schema_for_authorization DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#use_bearer_schema_for_authorization}
  */
  readonly useBearerSchemaForAuthorization?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_header: cdktf.stringToTerraform(struct!.accessTokenHeader),
    id_token_header: cdktf.stringToTerraform(struct!.idTokenHeader),
    use_bearer_schema_for_authorization: cdktf.booleanToTerraform(struct!.useBearerSchemaForAuthorization),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_header: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_header: {
      value: cdktf.stringToHclTerraform(struct!.idTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_bearer_schema_for_authorization: {
      value: cdktf.booleanToHclTerraform(struct!.useBearerSchemaForAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenHeader = this._accessTokenHeader;
    }
    if (this._idTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenHeader = this._idTokenHeader;
    }
    if (this._useBearerSchemaForAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBearerSchemaForAuthorization = this._useBearerSchemaForAuthorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenHeader = undefined;
      this._idTokenHeader = undefined;
      this._useBearerSchemaForAuthorization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenHeader = value.accessTokenHeader;
      this._idTokenHeader = value.idTokenHeader;
      this._useBearerSchemaForAuthorization = value.useBearerSchemaForAuthorization;
    }
  }

  // access_token_header - computed: false, optional: true, required: false
  private _accessTokenHeader?: string; 
  public get accessTokenHeader() {
    return this.getStringAttribute('access_token_header');
  }
  public set accessTokenHeader(value: string) {
    this._accessTokenHeader = value;
  }
  public resetAccessTokenHeader() {
    this._accessTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenHeaderInput() {
    return this._accessTokenHeader;
  }

  // id_token_header - computed: false, optional: true, required: false
  private _idTokenHeader?: string; 
  public get idTokenHeader() {
    return this.getStringAttribute('id_token_header');
  }
  public set idTokenHeader(value: string) {
    this._idTokenHeader = value;
  }
  public resetIdTokenHeader() {
    this._idTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenHeaderInput() {
    return this._idTokenHeader;
  }

  // use_bearer_schema_for_authorization - computed: false, optional: true, required: false
  private _useBearerSchemaForAuthorization?: boolean | cdktf.IResolvable; 
  public get useBearerSchemaForAuthorization() {
    return this.getBooleanAttribute('use_bearer_schema_for_authorization');
  }
  public set useBearerSchemaForAuthorization(value: boolean | cdktf.IResolvable) {
    this._useBearerSchemaForAuthorization = value;
  }
  public resetUseBearerSchemaForAuthorization() {
    this._useBearerSchemaForAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBearerSchemaForAuthorizationInput() {
    return this._useBearerSchemaForAuthorization;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#append DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claim DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#header DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#header}
  */
  readonly header?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    claim: cdktf.stringToTerraform(struct!.claim),
    header: cdktf.stringToTerraform(struct!.header),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._claim = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._claim = value.claim;
      this._header = value.header;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#claims_to_headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#claims_to_headers}
  */
  readonly claimsToHeaders?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders[] | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_to_headers: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersToTerraform, false)(struct!.claimsToHeaders),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_to_headers: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersToHclTerraform, false)(struct!.claimsToHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsToHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToHeaders = this._claimsToHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimsToHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimsToHeaders.internalValue = value.claimsToHeaders;
    }
  }

  // claims_to_headers - computed: false, optional: true, required: false
  private _claimsToHeaders = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeadersList(this, "claims_to_headers", false);
  public get claimsToHeaders() {
    return this._claimsToHeaders;
  }
  public putClaimsToHeaders(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenClaimsToHeaders[] | cdktf.IResolvable) {
    this._claimsToHeaders.internalValue = value;
  }
  public resetClaimsToHeaders() {
    this._claimsToHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToHeadersInput() {
    return this._claimsToHeaders.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#always DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#always}
  */
  readonly always?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#max_idp_req_per_polling_interval DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#max_idp_req_per_polling_interval}
  */
  readonly maxIdpReqPerPollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#never DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#never}
  */
  readonly never?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.always),
    max_idp_req_per_polling_interval: cdktf.numberToTerraform(struct!.maxIdpReqPerPollingInterval),
    never: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.never),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.always),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_idp_req_per_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxIdpReqPerPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    never: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.never),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._maxIdpReqPerPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdpReqPerPollingInterval = this._maxIdpReqPerPollingInterval;
    }
    if (this._never !== undefined) {
      hasAnyValues = true;
      internalValueResult.never = this._never;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
      this._maxIdpReqPerPollingInterval = undefined;
      this._never = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._always = value.always;
      this._maxIdpReqPerPollingInterval = value.maxIdpReqPerPollingInterval;
      this._never = value.never;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: { [key: string]: string }; 
  public get always() {
    return this.getStringMapAttribute('always');
  }
  public set always(value: { [key: string]: string }) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
  }

  // max_idp_req_per_polling_interval - computed: false, optional: true, required: false
  private _maxIdpReqPerPollingInterval?: number; 
  public get maxIdpReqPerPollingInterval() {
    return this.getNumberAttribute('max_idp_req_per_polling_interval');
  }
  public set maxIdpReqPerPollingInterval(value: number) {
    this._maxIdpReqPerPollingInterval = value;
  }
  public resetMaxIdpReqPerPollingInterval() {
    this._maxIdpReqPerPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdpReqPerPollingIntervalInput() {
    return this._maxIdpReqPerPollingInterval;
  }

  // never - computed: false, optional: true, required: false
  private _never?: { [key: string]: string }; 
  public get never() {
    return this.getStringMapAttribute('never');
  }
  public set never(value: { [key: string]: string }) {
    this._never = value;
  }
  public resetNever() {
    this._never = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverInput() {
    return this._never;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyRef.internalValue = value.keyRef;
    }
  }

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allow_refreshing DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allow_refreshing}
  */
  readonly allowRefreshing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_prefix DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#target_domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#target_domain}
  */
  readonly targetDomain?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_refreshing: cdktf.booleanToTerraform(struct!.allowRefreshing),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    target_domain: cdktf.stringToTerraform(struct!.targetDomain),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_refreshing: {
      value: cdktf.booleanToHclTerraform(struct!.allowRefreshing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_domain: {
      value: cdktf.stringToHclTerraform(struct!.targetDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRefreshing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRefreshing = this._allowRefreshing;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._targetDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDomain = this._targetDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRefreshing = undefined;
      this._keyPrefix = undefined;
      this._targetDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRefreshing = value.allowRefreshing;
      this._keyPrefix = value.keyPrefix;
      this._targetDomain = value.targetDomain;
    }
  }

  // allow_refreshing - computed: false, optional: true, required: false
  private _allowRefreshing?: boolean | cdktf.IResolvable; 
  public get allowRefreshing() {
    return this.getBooleanAttribute('allow_refreshing');
  }
  public set allowRefreshing(value: boolean | cdktf.IResolvable) {
    this._allowRefreshing = value;
  }
  public resetAllowRefreshing() {
    this._allowRefreshing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshingInput() {
    return this._allowRefreshing;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // target_domain - computed: false, optional: true, required: false
  private _targetDomain?: string; 
  public get targetDomain() {
    return this.getStringAttribute('target_domain');
  }
  public set targetDomain(value: string) {
    this._targetDomain = value;
  }
  public resetTargetDomain() {
    this._targetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainInput() {
    return this._targetDomain;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#http_only DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#max_age DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#not_secure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#not_secure}
  */
  readonly notSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#same_site DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#same_site}
  */
  readonly sameSite?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    not_secure: cdktf.booleanToTerraform(struct!.notSecure),
    path: cdktf.stringToTerraform(struct!.path),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_secure: {
      value: cdktf.booleanToHclTerraform(struct!.notSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._notSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSecure = this._notSecure;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._httpOnly = undefined;
      this._maxAge = undefined;
      this._notSecure = undefined;
      this._path = undefined;
      this._sameSite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._httpOnly = value.httpOnly;
      this._maxAge = value.maxAge;
      this._notSecure = value.notSecure;
      this._path = value.path;
      this._sameSite = value.sameSite;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // not_secure - computed: false, optional: true, required: false
  private _notSecure?: boolean | cdktf.IResolvable; 
  public get notSecure() {
    return this.getBooleanAttribute('not_secure');
  }
  public set notSecure(value: boolean | cdktf.IResolvable) {
    this._notSecure = value;
  }
  public resetNotSecure() {
    this._notSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSecureInput() {
    return this._notSecure;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#db DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#db}
  */
  readonly db?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#host DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pool_size DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#socket_type DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#socket_type}
  */
  readonly socketType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_cert_mount_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_cert_mount_path}
  */
  readonly tlsCertMountPath?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.numberToTerraform(struct!.db),
    host: cdktf.stringToTerraform(struct!.host),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    socket_type: cdktf.stringToTerraform(struct!.socketType),
    tls_cert_mount_path: cdktf.stringToTerraform(struct!.tlsCertMountPath),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.numberToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_type: {
      value: cdktf.stringToHclTerraform(struct!.socketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._socketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketType = this._socketType;
    }
    if (this._tlsCertMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertMountPath = this._tlsCertMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._host = undefined;
      this._poolSize = undefined;
      this._socketType = undefined;
      this._tlsCertMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._host = value.host;
      this._poolSize = value.poolSize;
      this._socketType = value.socketType;
      this._tlsCertMountPath = value.tlsCertMountPath;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: number; 
  public get db() {
    return this.getNumberAttribute('db');
  }
  public set db(value: number) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // socket_type - computed: false, optional: true, required: false
  private _socketType?: string; 
  public get socketType() {
    return this.getStringAttribute('socket_type');
  }
  public set socketType(value: string) {
    this._socketType = value;
  }
  public resetSocketType() {
    this._socketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTypeInput() {
    return this._socketType;
  }

  // tls_cert_mount_path - computed: false, optional: true, required: false
  private _tlsCertMountPath?: string; 
  public get tlsCertMountPath() {
    return this.getStringAttribute('tls_cert_mount_path');
  }
  public set tlsCertMountPath(value: string) {
    this._tlsCertMountPath = value;
  }
  public resetTlsCertMountPath() {
    this._tlsCertMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertMountPathInput() {
    return this._tlsCertMountPath;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allow_refreshing DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allow_refreshing}
  */
  readonly allowRefreshing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#header_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#key_prefix DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#options}
  */
  readonly options?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pre_expiry_buffer DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pre_expiry_buffer}
  */
  readonly preExpiryBuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#target_domain DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#target_domain}
  */
  readonly targetDomain?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_refreshing: cdktf.booleanToTerraform(struct!.allowRefreshing),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsToTerraform(struct!.options),
    pre_expiry_buffer: cdktf.stringToTerraform(struct!.preExpiryBuffer),
    target_domain: cdktf.stringToTerraform(struct!.targetDomain),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_refreshing: {
      value: cdktf.booleanToHclTerraform(struct!.allowRefreshing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions",
    },
    pre_expiry_buffer: {
      value: cdktf.stringToHclTerraform(struct!.preExpiryBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_domain: {
      value: cdktf.stringToHclTerraform(struct!.targetDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRefreshing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRefreshing = this._allowRefreshing;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._preExpiryBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExpiryBuffer = this._preExpiryBuffer;
    }
    if (this._targetDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDomain = this._targetDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRefreshing = undefined;
      this._cookieName = undefined;
      this._headerName = undefined;
      this._keyPrefix = undefined;
      this._options.internalValue = undefined;
      this._preExpiryBuffer = undefined;
      this._targetDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRefreshing = value.allowRefreshing;
      this._cookieName = value.cookieName;
      this._headerName = value.headerName;
      this._keyPrefix = value.keyPrefix;
      this._options.internalValue = value.options;
      this._preExpiryBuffer = value.preExpiryBuffer;
      this._targetDomain = value.targetDomain;
    }
  }

  // allow_refreshing - computed: false, optional: true, required: false
  private _allowRefreshing?: boolean | cdktf.IResolvable; 
  public get allowRefreshing() {
    return this.getBooleanAttribute('allow_refreshing');
  }
  public set allowRefreshing(value: boolean | cdktf.IResolvable) {
    this._allowRefreshing = value;
  }
  public resetAllowRefreshing() {
    this._allowRefreshing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshingInput() {
    return this._allowRefreshing;
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
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

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pre_expiry_buffer - computed: false, optional: true, required: false
  private _preExpiryBuffer?: string; 
  public get preExpiryBuffer() {
    return this.getStringAttribute('pre_expiry_buffer');
  }
  public set preExpiryBuffer(value: string) {
    this._preExpiryBuffer = value;
  }
  public resetPreExpiryBuffer() {
    this._preExpiryBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExpiryBufferInput() {
    return this._preExpiryBuffer;
  }

  // target_domain - computed: false, optional: true, required: false
  private _targetDomain?: string; 
  public get targetDomain() {
    return this.getStringAttribute('target_domain');
  }
  public set targetDomain(value: string) {
    this._targetDomain = value;
  }
  public resetTargetDomain() {
    this._targetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainInput() {
    return this._targetDomain;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cipher_config DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cipher_config}
  */
  readonly cipherConfig?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie}
  */
  readonly cookie?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#cookie_options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#cookie_options}
  */
  readonly cookieOptions?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#fail_on_fetch_failure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#fail_on_fetch_failure}
  */
  readonly failOnFetchFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#redis DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#redis}
  */
  readonly redis?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_config: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigToTerraform(struct!.cipherConfig),
    cookie: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieToTerraform(struct!.cookie),
    cookie_options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsToTerraform(struct!.cookieOptions),
    fail_on_fetch_failure: cdktf.booleanToTerraform(struct!.failOnFetchFailure),
    redis: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisToTerraform(struct!.redis),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_config: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigToHclTerraform(struct!.cipherConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig",
    },
    cookie: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie",
    },
    cookie_options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsToHclTerraform(struct!.cookieOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions",
    },
    fail_on_fetch_failure: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFetchFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redis: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherConfig = this._cipherConfig?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._cookieOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieOptions = this._cookieOptions?.internalValue;
    }
    if (this._failOnFetchFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFetchFailure = this._failOnFetchFailure;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherConfig.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._cookieOptions.internalValue = undefined;
      this._failOnFetchFailure = undefined;
      this._redis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherConfig.internalValue = value.cipherConfig;
      this._cookie.internalValue = value.cookie;
      this._cookieOptions.internalValue = value.cookieOptions;
      this._failOnFetchFailure = value.failOnFetchFailure;
      this._redis.internalValue = value.redis;
    }
  }

  // cipher_config - computed: false, optional: true, required: false
  private _cipherConfig = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfigOutputReference(this, "cipher_config");
  public get cipherConfig() {
    return this._cipherConfig;
  }
  public putCipherConfig(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCipherConfig) {
    this._cipherConfig.internalValue = value;
  }
  public resetCipherConfig() {
    this._cipherConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherConfigInput() {
    return this._cipherConfig.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // cookie_options - computed: false, optional: true, required: false
  private _cookieOptions = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptionsOutputReference(this, "cookie_options");
  public get cookieOptions() {
    return this._cookieOptions;
  }
  public putCookieOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionCookieOptions) {
    this._cookieOptions.internalValue = value;
  }
  public resetCookieOptions() {
    this._cookieOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieOptionsInput() {
    return this._cookieOptions.internalValue;
  }

  // fail_on_fetch_failure - computed: false, optional: true, required: false
  private _failOnFetchFailure?: boolean | cdktf.IResolvable; 
  public get failOnFetchFailure() {
    return this.getBooleanAttribute('fail_on_fetch_failure');
  }
  public set failOnFetchFailure(value: boolean | cdktf.IResolvable) {
    this._failOnFetchFailure = value;
  }
  public resetFailOnFetchFailure() {
    this._failOnFetchFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFetchFailureInput() {
    return this._failOnFetchFailure;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#access_token DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#access_token}
  */
  readonly accessToken?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#after_logout_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#after_logout_url}
  */
  readonly afterLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#app_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#app_url}
  */
  readonly appUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auth_endpoint_query_params DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auth_endpoint_query_params}
  */
  readonly authEndpointQueryParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#auto_map_from_metadata DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#auto_map_from_metadata}
  */
  readonly autoMapFromMetadata?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#azure DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#azure}
  */
  readonly azure?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#callback_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#callback_path}
  */
  readonly callbackPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_authentication DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_authentication}
  */
  readonly clientAuthentication?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_id DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#client_secret_ref DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#client_secret_ref}
  */
  readonly clientSecretRef?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#default DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#disable_client_secret DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#disable_client_secret}
  */
  readonly disableClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#discovery_override DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#discovery_override}
  */
  readonly discoveryOverride?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#discovery_poll_interval DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#discovery_poll_interval}
  */
  readonly discoveryPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#dynamic_metadata_from_claims DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#dynamic_metadata_from_claims}
  */
  readonly dynamicMetadataFromClaims?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#end_session_properties DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#end_session_properties}
  */
  readonly endSessionProperties?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#front_channel_logout DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#front_channel_logout}
  */
  readonly frontChannelLogout?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#headers}
  */
  readonly headers?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#identity_token DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#identity_token}
  */
  readonly identityToken?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#issuer_url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#jwks_cache_refresh_policy DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#jwks_cache_refresh_policy}
  */
  readonly jwksCacheRefreshPolicy?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#logout_path DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#logout_path}
  */
  readonly logoutPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#parse_callback_path_as_regex DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#parse_callback_path_as_regex}
  */
  readonly parseCallbackPathAsRegex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#scopes DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#session DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#session}
  */
  readonly session?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#session_id_header_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#session_id_header_name}
  */
  readonly sessionIdHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#token_endpoint_query_params DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#token_endpoint_query_params}
  */
  readonly tokenEndpointQueryParams?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenToTerraform(struct!.accessToken),
    after_logout_url: cdktf.stringToTerraform(struct!.afterLogoutUrl),
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    auth_endpoint_query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authEndpointQueryParams),
    auto_map_from_metadata: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataToTerraform(struct!.autoMapFromMetadata),
    azure: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureToTerraform(struct!.azure),
    callback_path: cdktf.stringToTerraform(struct!.callbackPath),
    client_authentication: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationToTerraform(struct!.clientAuthentication),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_ref: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefToTerraform(struct!.clientSecretRef),
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    disable_client_secret: cdktf.booleanToTerraform(struct!.disableClientSecret),
    discovery_override: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideToTerraform(struct!.discoveryOverride),
    discovery_poll_interval: cdktf.stringToTerraform(struct!.discoveryPollInterval),
    dynamic_metadata_from_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dynamicMetadataFromClaims),
    end_session_properties: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesToTerraform(struct!.endSessionProperties),
    front_channel_logout: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutToTerraform(struct!.frontChannelLogout),
    headers: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersToTerraform(struct!.headers),
    identity_token: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenToTerraform(struct!.identityToken),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    jwks_cache_refresh_policy: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyToTerraform(struct!.jwksCacheRefreshPolicy),
    logout_path: cdktf.stringToTerraform(struct!.logoutPath),
    parse_callback_path_as_regex: cdktf.booleanToTerraform(struct!.parseCallbackPathAsRegex),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    session: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionToTerraform(struct!.session),
    session_id_header_name: cdktf.stringToTerraform(struct!.sessionIdHeaderName),
    token_endpoint_query_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenEndpointQueryParams),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken",
    },
    after_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.afterLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_endpoint_query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authEndpointQueryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_map_from_metadata: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataToHclTerraform(struct!.autoMapFromMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata",
    },
    azure: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure",
    },
    callback_path: {
      value: cdktf.stringToHclTerraform(struct!.callbackPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_authentication: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationToHclTerraform(struct!.clientAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_ref: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef",
    },
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.disableClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_override: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideToHclTerraform(struct!.discoveryOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride",
    },
    discovery_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.discoveryPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_metadata_from_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dynamicMetadataFromClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    end_session_properties: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesToHclTerraform(struct!.endSessionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties",
    },
    front_channel_logout: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutToHclTerraform(struct!.frontChannelLogout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout",
    },
    headers: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders",
    },
    identity_token: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenToHclTerraform(struct!.identityToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_cache_refresh_policy: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyToHclTerraform(struct!.jwksCacheRefreshPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy",
    },
    logout_path: {
      value: cdktf.stringToHclTerraform(struct!.logoutPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_callback_path_as_regex: {
      value: cdktf.booleanToHclTerraform(struct!.parseCallbackPathAsRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionToHclTerraform(struct!.session),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession",
    },
    session_id_header_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionIdHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_query_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenEndpointQueryParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    if (this._afterLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterLogoutUrl = this._afterLogoutUrl;
    }
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._authEndpointQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpointQueryParams = this._authEndpointQueryParams;
    }
    if (this._autoMapFromMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMapFromMetadata = this._autoMapFromMetadata?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._callbackPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackPath = this._callbackPath;
    }
    if (this._clientAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._disableClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClientSecret = this._disableClientSecret;
    }
    if (this._discoveryOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryOverride = this._discoveryOverride?.internalValue;
    }
    if (this._discoveryPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPollInterval = this._discoveryPollInterval;
    }
    if (this._dynamicMetadataFromClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetadataFromClaims = this._dynamicMetadataFromClaims;
    }
    if (this._endSessionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSessionProperties = this._endSessionProperties?.internalValue;
    }
    if (this._frontChannelLogout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontChannelLogout = this._frontChannelLogout?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._identityToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityToken = this._identityToken?.internalValue;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._jwksCacheRefreshPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksCacheRefreshPolicy = this._jwksCacheRefreshPolicy?.internalValue;
    }
    if (this._logoutPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPath = this._logoutPath;
    }
    if (this._parseCallbackPathAsRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseCallbackPathAsRegex = this._parseCallbackPathAsRegex;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._session?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session?.internalValue;
    }
    if (this._sessionIdHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdHeaderName = this._sessionIdHeaderName;
    }
    if (this._tokenEndpointQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointQueryParams = this._tokenEndpointQueryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
      this._afterLogoutUrl = undefined;
      this._appUrl = undefined;
      this._authEndpointQueryParams = undefined;
      this._autoMapFromMetadata.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._callbackPath = undefined;
      this._clientAuthentication.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._default = undefined;
      this._disableClientSecret = undefined;
      this._discoveryOverride.internalValue = undefined;
      this._discoveryPollInterval = undefined;
      this._dynamicMetadataFromClaims = undefined;
      this._endSessionProperties.internalValue = undefined;
      this._frontChannelLogout.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._identityToken.internalValue = undefined;
      this._issuerUrl = undefined;
      this._jwksCacheRefreshPolicy.internalValue = undefined;
      this._logoutPath = undefined;
      this._parseCallbackPathAsRegex = undefined;
      this._scopes = undefined;
      this._session.internalValue = undefined;
      this._sessionIdHeaderName = undefined;
      this._tokenEndpointQueryParams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
      this._afterLogoutUrl = value.afterLogoutUrl;
      this._appUrl = value.appUrl;
      this._authEndpointQueryParams = value.authEndpointQueryParams;
      this._autoMapFromMetadata.internalValue = value.autoMapFromMetadata;
      this._azure.internalValue = value.azure;
      this._callbackPath = value.callbackPath;
      this._clientAuthentication.internalValue = value.clientAuthentication;
      this._clientId = value.clientId;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._default = value.default;
      this._disableClientSecret = value.disableClientSecret;
      this._discoveryOverride.internalValue = value.discoveryOverride;
      this._discoveryPollInterval = value.discoveryPollInterval;
      this._dynamicMetadataFromClaims = value.dynamicMetadataFromClaims;
      this._endSessionProperties.internalValue = value.endSessionProperties;
      this._frontChannelLogout.internalValue = value.frontChannelLogout;
      this._headers.internalValue = value.headers;
      this._identityToken.internalValue = value.identityToken;
      this._issuerUrl = value.issuerUrl;
      this._jwksCacheRefreshPolicy.internalValue = value.jwksCacheRefreshPolicy;
      this._logoutPath = value.logoutPath;
      this._parseCallbackPathAsRegex = value.parseCallbackPathAsRegex;
      this._scopes = value.scopes;
      this._session.internalValue = value.session;
      this._sessionIdHeaderName = value.sessionIdHeaderName;
      this._tokenEndpointQueryParams = value.tokenEndpointQueryParams;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // after_logout_url - computed: false, optional: true, required: false
  private _afterLogoutUrl?: string; 
  public get afterLogoutUrl() {
    return this.getStringAttribute('after_logout_url');
  }
  public set afterLogoutUrl(value: string) {
    this._afterLogoutUrl = value;
  }
  public resetAfterLogoutUrl() {
    this._afterLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterLogoutUrlInput() {
    return this._afterLogoutUrl;
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
  }

  // auth_endpoint_query_params - computed: false, optional: true, required: false
  private _authEndpointQueryParams?: { [key: string]: string }; 
  public get authEndpointQueryParams() {
    return this.getStringMapAttribute('auth_endpoint_query_params');
  }
  public set authEndpointQueryParams(value: { [key: string]: string }) {
    this._authEndpointQueryParams = value;
  }
  public resetAuthEndpointQueryParams() {
    this._authEndpointQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointQueryParamsInput() {
    return this._authEndpointQueryParams;
  }

  // auto_map_from_metadata - computed: false, optional: true, required: false
  private _autoMapFromMetadata = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadataOutputReference(this, "auto_map_from_metadata");
  public get autoMapFromMetadata() {
    return this._autoMapFromMetadata;
  }
  public putAutoMapFromMetadata(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAutoMapFromMetadata) {
    this._autoMapFromMetadata.internalValue = value;
  }
  public resetAutoMapFromMetadata() {
    this._autoMapFromMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapFromMetadataInput() {
    return this._autoMapFromMetadata.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // callback_path - computed: false, optional: false, required: true
  private _callbackPath?: string; 
  public get callbackPath() {
    return this.getStringAttribute('callback_path');
  }
  public set callbackPath(value: string) {
    this._callbackPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackPathInput() {
    return this._callbackPath;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientAuthentication) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // disable_client_secret - computed: false, optional: true, required: false
  private _disableClientSecret?: boolean | cdktf.IResolvable; 
  public get disableClientSecret() {
    return this.getBooleanAttribute('disable_client_secret');
  }
  public set disableClientSecret(value: boolean | cdktf.IResolvable) {
    this._disableClientSecret = value;
  }
  public resetDisableClientSecret() {
    this._disableClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClientSecretInput() {
    return this._disableClientSecret;
  }

  // discovery_override - computed: false, optional: true, required: false
  private _discoveryOverride = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverrideOutputReference(this, "discovery_override");
  public get discoveryOverride() {
    return this._discoveryOverride;
  }
  public putDiscoveryOverride(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeDiscoveryOverride) {
    this._discoveryOverride.internalValue = value;
  }
  public resetDiscoveryOverride() {
    this._discoveryOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryOverrideInput() {
    return this._discoveryOverride.internalValue;
  }

  // discovery_poll_interval - computed: false, optional: true, required: false
  private _discoveryPollInterval?: string; 
  public get discoveryPollInterval() {
    return this.getStringAttribute('discovery_poll_interval');
  }
  public set discoveryPollInterval(value: string) {
    this._discoveryPollInterval = value;
  }
  public resetDiscoveryPollInterval() {
    this._discoveryPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPollIntervalInput() {
    return this._discoveryPollInterval;
  }

  // dynamic_metadata_from_claims - computed: false, optional: true, required: false
  private _dynamicMetadataFromClaims?: { [key: string]: string }; 
  public get dynamicMetadataFromClaims() {
    return this.getStringMapAttribute('dynamic_metadata_from_claims');
  }
  public set dynamicMetadataFromClaims(value: { [key: string]: string }) {
    this._dynamicMetadataFromClaims = value;
  }
  public resetDynamicMetadataFromClaims() {
    this._dynamicMetadataFromClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetadataFromClaimsInput() {
    return this._dynamicMetadataFromClaims;
  }

  // end_session_properties - computed: false, optional: true, required: false
  private _endSessionProperties = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionPropertiesOutputReference(this, "end_session_properties");
  public get endSessionProperties() {
    return this._endSessionProperties;
  }
  public putEndSessionProperties(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeEndSessionProperties) {
    this._endSessionProperties.internalValue = value;
  }
  public resetEndSessionProperties() {
    this._endSessionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSessionPropertiesInput() {
    return this._endSessionProperties.internalValue;
  }

  // front_channel_logout - computed: false, optional: true, required: false
  private _frontChannelLogout = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogoutOutputReference(this, "front_channel_logout");
  public get frontChannelLogout() {
    return this._frontChannelLogout;
  }
  public putFrontChannelLogout(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeFrontChannelLogout) {
    this._frontChannelLogout.internalValue = value;
  }
  public resetFrontChannelLogout() {
    this._frontChannelLogout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontChannelLogoutInput() {
    return this._frontChannelLogout.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // identity_token - computed: false, optional: true, required: false
  private _identityToken = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityTokenOutputReference(this, "identity_token");
  public get identityToken() {
    return this._identityToken;
  }
  public putIdentityToken(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeIdentityToken) {
    this._identityToken.internalValue = value;
  }
  public resetIdentityToken() {
    this._identityToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenInput() {
    return this._identityToken.internalValue;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // jwks_cache_refresh_policy - computed: false, optional: true, required: false
  private _jwksCacheRefreshPolicy = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicyOutputReference(this, "jwks_cache_refresh_policy");
  public get jwksCacheRefreshPolicy() {
    return this._jwksCacheRefreshPolicy;
  }
  public putJwksCacheRefreshPolicy(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeJwksCacheRefreshPolicy) {
    this._jwksCacheRefreshPolicy.internalValue = value;
  }
  public resetJwksCacheRefreshPolicy() {
    this._jwksCacheRefreshPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksCacheRefreshPolicyInput() {
    return this._jwksCacheRefreshPolicy.internalValue;
  }

  // logout_path - computed: false, optional: true, required: false
  private _logoutPath?: string; 
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }
  public set logoutPath(value: string) {
    this._logoutPath = value;
  }
  public resetLogoutPath() {
    this._logoutPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPathInput() {
    return this._logoutPath;
  }

  // parse_callback_path_as_regex - computed: false, optional: true, required: false
  private _parseCallbackPathAsRegex?: boolean | cdktf.IResolvable; 
  public get parseCallbackPathAsRegex() {
    return this.getBooleanAttribute('parse_callback_path_as_regex');
  }
  public set parseCallbackPathAsRegex(value: boolean | cdktf.IResolvable) {
    this._parseCallbackPathAsRegex = value;
  }
  public resetParseCallbackPathAsRegex() {
    this._parseCallbackPathAsRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseCallbackPathAsRegexInput() {
    return this._parseCallbackPathAsRegex;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // session - computed: false, optional: true, required: false
  private _session = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSessionOutputReference(this, "session");
  public get session() {
    return this._session;
  }
  public putSession(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeSession) {
    this._session.internalValue = value;
  }
  public resetSession() {
    this._session.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session.internalValue;
  }

  // session_id_header_name - computed: false, optional: true, required: false
  private _sessionIdHeaderName?: string; 
  public get sessionIdHeaderName() {
    return this.getStringAttribute('session_id_header_name');
  }
  public set sessionIdHeaderName(value: string) {
    this._sessionIdHeaderName = value;
  }
  public resetSessionIdHeaderName() {
    this._sessionIdHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdHeaderNameInput() {
    return this._sessionIdHeaderName;
  }

  // token_endpoint_query_params - computed: false, optional: true, required: false
  private _tokenEndpointQueryParams?: { [key: string]: string }; 
  public get tokenEndpointQueryParams() {
    return this.getStringMapAttribute('token_endpoint_query_params');
  }
  public set tokenEndpointQueryParams(value: { [key: string]: string }) {
    this._tokenEndpointQueryParams = value;
  }
  public resetTokenEndpointQueryParams() {
    this._tokenEndpointQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointQueryParamsInput() {
    return this._tokenEndpointQueryParams;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#access_token_validation DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#access_token_validation}
  */
  readonly accessTokenValidation?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#oauth2 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#oidc_authorization_code DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#oidc_authorization_code}
  */
  readonly oidcAuthorizationCode?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2ToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_validation: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationToTerraform(struct!.accessTokenValidation),
    oauth2: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ToTerraform(struct!.oauth2),
    oidc_authorization_code: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeToTerraform(struct!.oidcAuthorizationCode),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2ToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_validation: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationToHclTerraform(struct!.accessTokenValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation",
    },
    oauth2: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2",
    },
    oidc_authorization_code: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeToHclTerraform(struct!.oidcAuthorizationCode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenValidation = this._accessTokenValidation?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._oidcAuthorizationCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcAuthorizationCode = this._oidcAuthorizationCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenValidation.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._oidcAuthorizationCode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenValidation.internalValue = value.accessTokenValidation;
      this._oauth2.internalValue = value.oauth2;
      this._oidcAuthorizationCode.internalValue = value.oidcAuthorizationCode;
    }
  }

  // access_token_validation - computed: false, optional: true, required: false
  private _accessTokenValidation = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidationOutputReference(this, "access_token_validation");
  public get accessTokenValidation() {
    return this._accessTokenValidation;
  }
  public putAccessTokenValidation(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2AccessTokenValidation) {
    this._accessTokenValidation.internalValue = value;
  }
  public resetAccessTokenValidation() {
    this._accessTokenValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidationInput() {
    return this._accessTokenValidation.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2Oauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // oidc_authorization_code - computed: false, optional: true, required: false
  private _oidcAuthorizationCode = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCodeOutputReference(this, "oidc_authorization_code");
  public get oidcAuthorizationCode() {
    return this._oidcAuthorizationCode;
  }
  public putOidcAuthorizationCode(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OidcAuthorizationCode) {
    this._oidcAuthorizationCode.internalValue = value;
  }
  public resetOidcAuthorizationCode() {
    this._oidcAuthorizationCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthorizationCodeInput() {
    return this._oidcAuthorizationCode.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespace DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules | cdktf.IResolvable): any {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules | cdktf.IResolvable | undefined) {
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

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#fast_input_conversion DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#fast_input_conversion}
  */
  readonly fastInputConversion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#return_decision_reason DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#return_decision_reason}
  */
  readonly returnDecisionReason?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_input_conversion: cdktf.booleanToTerraform(struct!.fastInputConversion),
    return_decision_reason: cdktf.booleanToTerraform(struct!.returnDecisionReason),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_input_conversion: {
      value: cdktf.booleanToHclTerraform(struct!.fastInputConversion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_decision_reason: {
      value: cdktf.booleanToHclTerraform(struct!.returnDecisionReason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastInputConversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastInputConversion = this._fastInputConversion;
    }
    if (this._returnDecisionReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnDecisionReason = this._returnDecisionReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fastInputConversion = undefined;
      this._returnDecisionReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fastInputConversion = value.fastInputConversion;
      this._returnDecisionReason = value.returnDecisionReason;
    }
  }

  // fast_input_conversion - computed: false, optional: true, required: false
  private _fastInputConversion?: boolean | cdktf.IResolvable; 
  public get fastInputConversion() {
    return this.getBooleanAttribute('fast_input_conversion');
  }
  public set fastInputConversion(value: boolean | cdktf.IResolvable) {
    this._fastInputConversion = value;
  }
  public resetFastInputConversion() {
    this._fastInputConversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInputConversionInput() {
    return this._fastInputConversion;
  }

  // return_decision_reason - computed: false, optional: true, required: false
  private _returnDecisionReason?: boolean | cdktf.IResolvable; 
  public get returnDecisionReason() {
    return this.getBooleanAttribute('return_decision_reason');
  }
  public set returnDecisionReason(value: boolean | cdktf.IResolvable) {
    this._returnDecisionReason = value;
  }
  public resetReturnDecisionReason() {
    this._returnDecisionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDecisionReasonInput() {
    return this._returnDecisionReason;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#modules DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#modules}
  */
  readonly modules?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#options}
  */
  readonly options?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#query DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#query}
  */
  readonly query: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modules: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesToTerraform, false)(struct!.modules),
    options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsToTerraform(struct!.options),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modules: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesToHclTerraform, false)(struct!.modules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesList",
    },
    options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modules = this._modules?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modules.internalValue = undefined;
      this._options.internalValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modules.internalValue = value.modules;
      this._options.internalValue = value.options;
      this._query = value.query;
    }
  }

  // modules - computed: false, optional: true, required: false
  private _modules = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }
  public putModules(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthModules[] | cdktf.IResolvable) {
    this._modules.internalValue = value;
  }
  public resetModules() {
    this._modules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#fast_input_conversion DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#fast_input_conversion}
  */
  readonly fastInputConversion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#return_decision_reason DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#return_decision_reason}
  */
  readonly returnDecisionReason?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_input_conversion: cdktf.booleanToTerraform(struct!.fastInputConversion),
    return_decision_reason: cdktf.booleanToTerraform(struct!.returnDecisionReason),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_input_conversion: {
      value: cdktf.booleanToHclTerraform(struct!.fastInputConversion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_decision_reason: {
      value: cdktf.booleanToHclTerraform(struct!.returnDecisionReason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastInputConversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastInputConversion = this._fastInputConversion;
    }
    if (this._returnDecisionReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnDecisionReason = this._returnDecisionReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fastInputConversion = undefined;
      this._returnDecisionReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fastInputConversion = value.fastInputConversion;
      this._returnDecisionReason = value.returnDecisionReason;
    }
  }

  // fast_input_conversion - computed: false, optional: true, required: false
  private _fastInputConversion?: boolean | cdktf.IResolvable; 
  public get fastInputConversion() {
    return this.getBooleanAttribute('fast_input_conversion');
  }
  public set fastInputConversion(value: boolean | cdktf.IResolvable) {
    this._fastInputConversion = value;
  }
  public resetFastInputConversion() {
    this._fastInputConversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInputConversionInput() {
    return this._fastInputConversion;
  }

  // return_decision_reason - computed: false, optional: true, required: false
  private _returnDecisionReason?: boolean | cdktf.IResolvable; 
  public get returnDecisionReason() {
    return this.getBooleanAttribute('return_decision_reason');
  }
  public set returnDecisionReason(value: boolean | cdktf.IResolvable) {
    this._returnDecisionReason = value;
  }
  public resetReturnDecisionReason() {
    this._returnDecisionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDecisionReasonInput() {
    return this._returnDecisionReason;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#options DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#options}
  */
  readonly options?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#package DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#rule_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#server_addr DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#server_addr}
  */
  readonly serverAddr?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsToTerraform(struct!.options),
    package: cdktf.stringToTerraform(struct!.package),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    server_addr: cdktf.stringToTerraform(struct!.serverAddr),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions",
    },
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_addr: {
      value: cdktf.stringToHclTerraform(struct!.serverAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._serverAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddr = this._serverAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._package = undefined;
      this._ruleName = undefined;
      this._serverAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._package = value.package;
      this._ruleName = value.ruleName;
      this._serverAddr = value.serverAddr;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // server_addr - computed: false, optional: true, required: false
  private _serverAddr?: string; 
  public get serverAddr() {
    return this.getStringAttribute('server_addr');
  }
  public set serverAddr(value: string) {
    this._serverAddr = value;
  }
  public resetServerAddr() {
    this._serverAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#base_interval DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#base_interval}
  */
  readonly baseInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#max_interval DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#max_interval}
  */
  readonly maxInterval?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.stringToTerraform(struct!.baseInterval),
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.stringToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: string; 
  public get baseInterval() {
    return this.getStringAttribute('base_interval');
  }
  public set baseInterval(value: string) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#num_retries DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#retry_back_off DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#retry_back_off}
  */
  readonly retryBackOff?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_back_off: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffToTerraform(struct!.retryBackOff),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_back_off: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffToHclTerraform(struct!.retryBackOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackOff = this._retryBackOff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numRetries = undefined;
      this._retryBackOff.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numRetries = value.numRetries;
      this._retryBackOff.internalValue = value.retryBackOff;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_back_off - computed: false, optional: true, required: false
  private _retryBackOff = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOffOutputReference(this, "retry_back_off");
  public get retryBackOff() {
    return this._retryBackOff;
  }
  public putRetryBackOff(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyRetryBackOff) {
    this._retryBackOff.internalValue = value;
  }
  public resetRetryBackOff() {
    this._retryBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackOffInput() {
    return this._retryBackOff.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#address DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#connection_timeout DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#retry_policy DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#tls_config DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    connection_timeout: cdktf.stringToTerraform(struct!.connectionTimeout),
    retry_policy: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyToTerraform(struct!.retryPolicy),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_policy: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._connectionTimeout = undefined;
      this._retryPolicy.internalValue = undefined;
      this._tlsConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._connectionTimeout = value.connectionTimeout;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._tlsConfig = value.tlsConfig;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this.getStringAttribute('connection_timeout');
  }
  public set connectionTimeout(value: string) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allowed_headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#headers_to_add DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#headers_to_add}
  */
  readonly headersToAdd?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pass_through_body DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pass_through_body}
  */
  readonly passThroughBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pass_through_filter_metadata DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pass_through_filter_metadata}
  */
  readonly passThroughFilterMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pass_through_state DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pass_through_state}
  */
  readonly passThroughState?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    headers_to_add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headersToAdd),
    pass_through_body: cdktf.booleanToTerraform(struct!.passThroughBody),
    pass_through_filter_metadata: cdktf.booleanToTerraform(struct!.passThroughFilterMetadata),
    pass_through_state: cdktf.booleanToTerraform(struct!.passThroughState),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers_to_add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headersToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pass_through_body: {
      value: cdktf.booleanToHclTerraform(struct!.passThroughBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_through_filter_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.passThroughFilterMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_through_state: {
      value: cdktf.booleanToHclTerraform(struct!.passThroughState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._headersToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAdd = this._headersToAdd;
    }
    if (this._passThroughBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughBody = this._passThroughBody;
    }
    if (this._passThroughFilterMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughFilterMetadata = this._passThroughFilterMetadata;
    }
    if (this._passThroughState !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughState = this._passThroughState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._headersToAdd = undefined;
      this._passThroughBody = undefined;
      this._passThroughFilterMetadata = undefined;
      this._passThroughState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._headersToAdd = value.headersToAdd;
      this._passThroughBody = value.passThroughBody;
      this._passThroughFilterMetadata = value.passThroughFilterMetadata;
      this._passThroughState = value.passThroughState;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // headers_to_add - computed: false, optional: true, required: false
  private _headersToAdd?: { [key: string]: string }; 
  public get headersToAdd() {
    return this.getStringMapAttribute('headers_to_add');
  }
  public set headersToAdd(value: { [key: string]: string }) {
    this._headersToAdd = value;
  }
  public resetHeadersToAdd() {
    this._headersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAddInput() {
    return this._headersToAdd;
  }

  // pass_through_body - computed: false, optional: true, required: false
  private _passThroughBody?: boolean | cdktf.IResolvable; 
  public get passThroughBody() {
    return this.getBooleanAttribute('pass_through_body');
  }
  public set passThroughBody(value: boolean | cdktf.IResolvable) {
    this._passThroughBody = value;
  }
  public resetPassThroughBody() {
    this._passThroughBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughBodyInput() {
    return this._passThroughBody;
  }

  // pass_through_filter_metadata - computed: false, optional: true, required: false
  private _passThroughFilterMetadata?: boolean | cdktf.IResolvable; 
  public get passThroughFilterMetadata() {
    return this.getBooleanAttribute('pass_through_filter_metadata');
  }
  public set passThroughFilterMetadata(value: boolean | cdktf.IResolvable) {
    this._passThroughFilterMetadata = value;
  }
  public resetPassThroughFilterMetadata() {
    this._passThroughFilterMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughFilterMetadataInput() {
    return this._passThroughFilterMetadata;
  }

  // pass_through_state - computed: false, optional: true, required: false
  private _passThroughState?: boolean | cdktf.IResolvable; 
  public get passThroughState() {
    return this.getBooleanAttribute('pass_through_state');
  }
  public set passThroughState(value: boolean | cdktf.IResolvable) {
    this._passThroughState = value;
  }
  public resetPassThroughState() {
    this._passThroughState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughStateInput() {
    return this._passThroughState;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allowed_client_headers_on_denied DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allowed_client_headers_on_denied}
  */
  readonly allowedClientHeadersOnDenied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allowed_upstream_headers DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allowed_upstream_headers}
  */
  readonly allowedUpstreamHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#allowed_upstream_headers_to_overwrite DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#allowed_upstream_headers_to_overwrite}
  */
  readonly allowedUpstreamHeadersToOverwrite?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#read_state_from_response DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#read_state_from_response}
  */
  readonly readStateFromResponse?: boolean | cdktf.IResolvable;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_client_headers_on_denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClientHeadersOnDenied),
    allowed_upstream_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeaders),
    allowed_upstream_headers_to_overwrite: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeadersToOverwrite),
    read_state_from_response: cdktf.booleanToTerraform(struct!.readStateFromResponse),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_client_headers_on_denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClientHeadersOnDenied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers_to_overwrite: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeadersToOverwrite),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_state_from_response: {
      value: cdktf.booleanToHclTerraform(struct!.readStateFromResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClientHeadersOnDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClientHeadersOnDenied = this._allowedClientHeadersOnDenied;
    }
    if (this._allowedUpstreamHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeaders = this._allowedUpstreamHeaders;
    }
    if (this._allowedUpstreamHeadersToOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeadersToOverwrite = this._allowedUpstreamHeadersToOverwrite;
    }
    if (this._readStateFromResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.readStateFromResponse = this._readStateFromResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClientHeadersOnDenied = undefined;
      this._allowedUpstreamHeaders = undefined;
      this._allowedUpstreamHeadersToOverwrite = undefined;
      this._readStateFromResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClientHeadersOnDenied = value.allowedClientHeadersOnDenied;
      this._allowedUpstreamHeaders = value.allowedUpstreamHeaders;
      this._allowedUpstreamHeadersToOverwrite = value.allowedUpstreamHeadersToOverwrite;
      this._readStateFromResponse = value.readStateFromResponse;
    }
  }

  // allowed_client_headers_on_denied - computed: false, optional: true, required: false
  private _allowedClientHeadersOnDenied?: string[]; 
  public get allowedClientHeadersOnDenied() {
    return this.getListAttribute('allowed_client_headers_on_denied');
  }
  public set allowedClientHeadersOnDenied(value: string[]) {
    this._allowedClientHeadersOnDenied = value;
  }
  public resetAllowedClientHeadersOnDenied() {
    this._allowedClientHeadersOnDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientHeadersOnDeniedInput() {
    return this._allowedClientHeadersOnDenied;
  }

  // allowed_upstream_headers - computed: false, optional: true, required: false
  private _allowedUpstreamHeaders?: string[]; 
  public get allowedUpstreamHeaders() {
    return this.getListAttribute('allowed_upstream_headers');
  }
  public set allowedUpstreamHeaders(value: string[]) {
    this._allowedUpstreamHeaders = value;
  }
  public resetAllowedUpstreamHeaders() {
    this._allowedUpstreamHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersInput() {
    return this._allowedUpstreamHeaders;
  }

  // allowed_upstream_headers_to_overwrite - computed: false, optional: true, required: false
  private _allowedUpstreamHeadersToOverwrite?: string[]; 
  public get allowedUpstreamHeadersToOverwrite() {
    return this.getListAttribute('allowed_upstream_headers_to_overwrite');
  }
  public set allowedUpstreamHeadersToOverwrite(value: string[]) {
    this._allowedUpstreamHeadersToOverwrite = value;
  }
  public resetAllowedUpstreamHeadersToOverwrite() {
    this._allowedUpstreamHeadersToOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersToOverwriteInput() {
    return this._allowedUpstreamHeadersToOverwrite;
  }

  // read_state_from_response - computed: false, optional: true, required: false
  private _readStateFromResponse?: boolean | cdktf.IResolvable; 
  public get readStateFromResponse() {
    return this.getBooleanAttribute('read_state_from_response');
  }
  public set readStateFromResponse(value: boolean | cdktf.IResolvable) {
    this._readStateFromResponse = value;
  }
  public resetReadStateFromResponse() {
    this._readStateFromResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readStateFromResponseInput() {
    return this._readStateFromResponse;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#connection_timeout DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#request DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#request}
  */
  readonly request?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#response DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#response}
  */
  readonly response?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#url DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.stringToTerraform(struct!.connectionTimeout),
    request: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestToTerraform(struct!.request),
    response: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseToTerraform(struct!.response),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest",
    },
    response: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionTimeout = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionTimeout = value.connectionTimeout;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
      this._url = value.url;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this.getStringAttribute('connection_timeout');
  }
  public set connectionTimeout(value: string) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#config DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#failure_mode_allow DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#failure_mode_allow}
  */
  readonly failureModeAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#grpc DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#grpc}
  */
  readonly grpc?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#http DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#http}
  */
  readonly http?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    failure_mode_allow: cdktf.booleanToTerraform(struct!.failureModeAllow),
    grpc: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcToTerraform(struct!.grpc),
    http: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpToTerraform(struct!.http),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    failure_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc",
    },
    http: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._failureModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeAllow = this._failureModeAllow;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._failureModeAllow = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._failureModeAllow = value.failureModeAllow;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // failure_mode_allow - computed: false, optional: true, required: false
  private _failureModeAllow?: boolean | cdktf.IResolvable; 
  public get failureModeAllow() {
    return this.getBooleanAttribute('failure_mode_allow');
  }
  public set failureModeAllow(value: boolean | cdktf.IResolvable) {
    this._failureModeAllow = value;
  }
  public resetFailureModeAllow() {
    this._failureModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeAllowInput() {
    return this._failureModeAllow;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#config DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#config}
  */
  readonly config: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#exported_symbol_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#exported_symbol_name}
  */
  readonly exportedSymbolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#plugin_file_name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#plugin_file_name}
  */
  readonly pluginFileName?: string;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    exported_symbol_name: cdktf.stringToTerraform(struct!.exportedSymbolName),
    name: cdktf.stringToTerraform(struct!.name),
    plugin_file_name: cdktf.stringToTerraform(struct!.pluginFileName),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exported_symbol_name: {
      value: cdktf.stringToHclTerraform(struct!.exportedSymbolName),
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
    plugin_file_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._exportedSymbolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportedSymbolName = this._exportedSymbolName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pluginFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginFileName = this._pluginFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._exportedSymbolName = undefined;
      this._name = undefined;
      this._pluginFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._exportedSymbolName = value.exportedSymbolName;
      this._name = value.name;
      this._pluginFileName = value.pluginFileName;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // exported_symbol_name - computed: false, optional: true, required: false
  private _exportedSymbolName?: string; 
  public get exportedSymbolName() {
    return this.getStringAttribute('exported_symbol_name');
  }
  public set exportedSymbolName(value: string) {
    this._exportedSymbolName = value;
  }
  public resetExportedSymbolName() {
    this._exportedSymbolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportedSymbolNameInput() {
    return this._exportedSymbolName;
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

  // plugin_file_name - computed: false, optional: true, required: false
  private _pluginFileName?: string; 
  public get pluginFileName() {
    return this.getStringAttribute('plugin_file_name');
  }
  public set pluginFileName(value: string) {
    this._pluginFileName = value;
  }
  public resetPluginFileName() {
    this._pluginFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginFileNameInput() {
    return this._pluginFileName;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#api_key_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#api_key_auth}
  */
  readonly apiKeyAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#basic_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#hmac_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#hmac_auth}
  */
  readonly hmacAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#jwt DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#jwt}
  */
  readonly jwt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#ldap DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#ldap}
  */
  readonly ldap?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#name DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#oauth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#oauth}
  */
  readonly oauth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#oauth2 DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#opa_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#opa_auth}
  */
  readonly opaAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#opa_server_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#opa_server_auth}
  */
  readonly opaServerAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#pass_through_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#pass_through_auth}
  */
  readonly passThroughAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#plugin_auth DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#plugin_auth}
  */
  readonly pluginAuth?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthToTerraform(struct!.apiKeyAuth),
    basic_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthToTerraform(struct!.basicAuth),
    hmac_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthToTerraform(struct!.hmacAuth),
    jwt: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jwt),
    ldap: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapToTerraform(struct!.ldap),
    name: cdktf.stringToTerraform(struct!.name),
    oauth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthToTerraform(struct!.oauth),
    oauth2: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2ToTerraform(struct!.oauth2),
    opa_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthToTerraform(struct!.opaAuth),
    opa_server_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthToTerraform(struct!.opaServerAuth),
    pass_through_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthToTerraform(struct!.passThroughAuth),
    plugin_auth: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthToTerraform(struct!.pluginAuth),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthToHclTerraform(struct!.apiKeyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth",
    },
    basic_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth",
    },
    hmac_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthToHclTerraform(struct!.hmacAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth",
    },
    jwt: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jwt),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ldap: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth",
    },
    oauth2: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2",
    },
    opa_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthToHclTerraform(struct!.opaAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth",
    },
    opa_server_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthToHclTerraform(struct!.opaServerAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth",
    },
    pass_through_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthToHclTerraform(struct!.passThroughAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth",
    },
    plugin_auth: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthToHclTerraform(struct!.pluginAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuth = this._apiKeyAuth?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._hmacAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacAuth = this._hmacAuth?.internalValue;
    }
    if (this._jwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._opaAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaAuth = this._opaAuth?.internalValue;
    }
    if (this._opaServerAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaServerAuth = this._opaServerAuth?.internalValue;
    }
    if (this._passThroughAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughAuth = this._passThroughAuth?.internalValue;
    }
    if (this._pluginAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginAuth = this._pluginAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._hmacAuth.internalValue = undefined;
      this._jwt = undefined;
      this._ldap.internalValue = undefined;
      this._name = undefined;
      this._oauth.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._opaAuth.internalValue = undefined;
      this._opaServerAuth.internalValue = undefined;
      this._passThroughAuth.internalValue = undefined;
      this._pluginAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = value.apiKeyAuth;
      this._basicAuth.internalValue = value.basicAuth;
      this._hmacAuth.internalValue = value.hmacAuth;
      this._jwt = value.jwt;
      this._ldap.internalValue = value.ldap;
      this._name = value.name;
      this._oauth.internalValue = value.oauth;
      this._oauth2.internalValue = value.oauth2;
      this._opaAuth.internalValue = value.opaAuth;
      this._opaServerAuth.internalValue = value.opaServerAuth;
      this._passThroughAuth.internalValue = value.passThroughAuth;
      this._pluginAuth.internalValue = value.pluginAuth;
    }
  }

  // api_key_auth - computed: false, optional: true, required: false
  private _apiKeyAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuthOutputReference(this, "api_key_auth");
  public get apiKeyAuth() {
    return this._apiKeyAuth;
  }
  public putApiKeyAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsApiKeyAuth) {
    this._apiKeyAuth.internalValue = value;
  }
  public resetApiKeyAuth() {
    this._apiKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthInput() {
    return this._apiKeyAuth.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // hmac_auth - computed: false, optional: true, required: false
  private _hmacAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuthOutputReference(this, "hmac_auth");
  public get hmacAuth() {
    return this._hmacAuth;
  }
  public putHmacAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsHmacAuth) {
    this._hmacAuth.internalValue = value;
  }
  public resetHmacAuth() {
    this._hmacAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAuthInput() {
    return this._hmacAuth.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt?: { [key: string]: string }; 
  public get jwt() {
    return this.getStringMapAttribute('jwt');
  }
  public set jwt(value: { [key: string]: string }) {
    this._jwt = value;
  }
  public resetJwt() {
    this._jwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
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

  // oauth - computed: false, optional: true, required: false
  private _oauth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // opa_auth - computed: false, optional: true, required: false
  private _opaAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuthOutputReference(this, "opa_auth");
  public get opaAuth() {
    return this._opaAuth;
  }
  public putOpaAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaAuth) {
    this._opaAuth.internalValue = value;
  }
  public resetOpaAuth() {
    this._opaAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaAuthInput() {
    return this._opaAuth.internalValue;
  }

  // opa_server_auth - computed: false, optional: true, required: false
  private _opaServerAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuthOutputReference(this, "opa_server_auth");
  public get opaServerAuth() {
    return this._opaServerAuth;
  }
  public putOpaServerAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOpaServerAuth) {
    this._opaServerAuth.internalValue = value;
  }
  public resetOpaServerAuth() {
    this._opaServerAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaServerAuthInput() {
    return this._opaServerAuth.internalValue;
  }

  // pass_through_auth - computed: false, optional: true, required: false
  private _passThroughAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuthOutputReference(this, "pass_through_auth");
  public get passThroughAuth() {
    return this._passThroughAuth;
  }
  public putPassThroughAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPassThroughAuth) {
    this._passThroughAuth.internalValue = value;
  }
  public resetPassThroughAuth() {
    this._passThroughAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughAuthInput() {
    return this._passThroughAuth.internalValue;
  }

  // plugin_auth - computed: false, optional: true, required: false
  private _pluginAuth = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuthOutputReference(this, "plugin_auth");
  public get pluginAuth() {
    return this._pluginAuth;
  }
  public putPluginAuth(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsPluginAuth) {
    this._pluginAuth.internalValue = value;
  }
  public resetPluginAuth() {
    this._pluginAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginAuthInput() {
    return this._pluginAuth.internalValue;
  }
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOutputReference {
    return new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#statuses DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#statuses}
  */
  readonly statuses?: { [key: string]: string };
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.statuses),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.statuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statuses = value.statuses;
    }
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: { [key: string]: string }; 
  public get statuses() {
    return this.getStringMapAttribute('statuses');
  }
  public set statuses(value: { [key: string]: string }) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#boolean_expr DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#boolean_expr}
  */
  readonly booleanExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#configs DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#configs}
  */
  readonly configs: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#fail_on_redirect DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#fail_on_redirect}
  */
  readonly failOnRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#namespaced_statuses DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses;
}

export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecToTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_expr: cdktf.stringToTerraform(struct!.booleanExpr),
    configs: cdktf.listMapper(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsToTerraform, false)(struct!.configs),
    fail_on_redirect: cdktf.booleanToTerraform(struct!.failOnRedirect),
    namespaced_statuses: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
  }
}


export function dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecToHclTerraform(struct?: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_expr: {
      value: cdktf.stringToHclTerraform(struct!.booleanExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configs: {
      value: cdktf.listMapperHcl(dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsList",
    },
    fail_on_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.failOnRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaced_statuses: {
      value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpr = this._booleanExpr;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._failOnRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnRedirect = this._failOnRedirect;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpr = undefined;
      this._configs.internalValue = undefined;
      this._failOnRedirect = undefined;
      this._namespacedStatuses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpr = value.booleanExpr;
      this._configs.internalValue = value.configs;
      this._failOnRedirect = value.failOnRedirect;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
    }
  }

  // boolean_expr - computed: false, optional: true, required: false
  private _booleanExpr?: string; 
  public get booleanExpr() {
    return this.getStringAttribute('boolean_expr');
  }
  public set booleanExpr(value: string) {
    this._booleanExpr = value;
  }
  public resetBooleanExpr() {
    this._booleanExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExprInput() {
    return this._booleanExpr;
  }

  // configs - computed: false, optional: false, required: true
  private _configs = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // fail_on_redirect - computed: false, optional: true, required: false
  private _failOnRedirect?: boolean | cdktf.IResolvable; 
  public get failOnRedirect() {
    return this.getBooleanAttribute('fail_on_redirect');
  }
  public set failOnRedirect(value: boolean | cdktf.IResolvable) {
    this._failOnRedirect = value;
  }
  public resetFailOnRedirect() {
    this._failOnRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnRedirectInput() {
    return this._failOnRedirect;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest k8s_enterprise_gloo_solo_io_auth_config_v1_manifest}
*/
export class DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_enterprise_gloo_solo_io_auth_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEnterpriseGlooSoloIoAuthConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_enterprise_gloo_solo_io_auth_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/enterprise_gloo_solo_io_auth_config_v1_manifest k8s_enterprise_gloo_solo_io_auth_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_enterprise_gloo_solo_io_auth_config_v1_manifest',
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
  private _metadata = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec) {
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
      metadata: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEnterpriseGlooSoloIoAuthConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
