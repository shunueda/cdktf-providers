// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#metadata DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata;
  /**
  * Spec represents a desired deployment configuration of controllers that govern registration and work distribution for attached Klusterlets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#spec DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec;
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#annotations DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#labels DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#name DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates {
  /**
  * Feature is the key of feature gate. e.g. featuregate/Foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature}
  */
  readonly feature: string;
  /**
  * Mode is either Enable, Disable, '' where '' is Disable by default. In Enable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=true'. In Disable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._mode = value.mode;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration {
  /**
  * FeatureGates represents the list of feature gates for addon manager If it is set empty, default feature gates will be used. If it is set, featuregate/Foo is an example of one item in FeatureGates: 1. If featuregate/Foo does not exist, registration-operator will discard it 2. If featuregate/Foo exists and is false by default. It is now possible to set featuregate/Foo=[false|true] 3. If featuregate/Foo exists and is true by default. If a cluster-admin upgrading from 1 to 2 wants to continue having featuregate/Foo=false, he can set featuregate/Foo=false before upgrading. Let's say the cluster-admin wants featuregate/Foo=false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature_gates DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates[] | cdktf.IResolvable;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_gates: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesToTerraform, false)(struct!.featureGates),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesToHclTerraform, false)(struct!.featureGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureGates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureGates.internalValue = value.featureGates;
    }
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGatesList(this, "feature_gates", false);
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationFeatureGates[] | cdktf.IResolvable) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration {
  /**
  * Address represents the address of a webhook-server. It could be in IP format or fqdn format. The Address must be reachable by apiserver of the hub cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#address DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#address}
  */
  readonly address: string;
  /**
  * Port represents the port of a webhook-server. The default value of Port is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#port DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
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
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration {
  /**
  * Address represents the address of a webhook-server. It could be in IP format or fqdn format. The Address must be reachable by apiserver of the hub cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#address DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#address}
  */
  readonly address: string;
  /**
  * Port represents the port of a webhook-server. The default value of Port is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#port DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._port = value.port;
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
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted {
  /**
  * RegistrationWebhookConfiguration represents the customized webhook-server configuration of registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#registration_webhook_configuration DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#registration_webhook_configuration}
  */
  readonly registrationWebhookConfiguration?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration;
  /**
  * WorkWebhookConfiguration represents the customized webhook-server configuration of work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#work_webhook_configuration DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#work_webhook_configuration}
  */
  readonly workWebhookConfiguration?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registration_webhook_configuration: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationToTerraform(struct!.registrationWebhookConfiguration),
    work_webhook_configuration: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationToTerraform(struct!.workWebhookConfiguration),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registration_webhook_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationToHclTerraform(struct!.registrationWebhookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration",
    },
    work_webhook_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationToHclTerraform(struct!.workWebhookConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registrationWebhookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationWebhookConfiguration = this._registrationWebhookConfiguration?.internalValue;
    }
    if (this._workWebhookConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workWebhookConfiguration = this._workWebhookConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registrationWebhookConfiguration.internalValue = undefined;
      this._workWebhookConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registrationWebhookConfiguration.internalValue = value.registrationWebhookConfiguration;
      this._workWebhookConfiguration.internalValue = value.workWebhookConfiguration;
    }
  }

  // registration_webhook_configuration - computed: false, optional: true, required: false
  private _registrationWebhookConfiguration = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfigurationOutputReference(this, "registration_webhook_configuration");
  public get registrationWebhookConfiguration() {
    return this._registrationWebhookConfiguration;
  }
  public putRegistrationWebhookConfiguration(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedRegistrationWebhookConfiguration) {
    this._registrationWebhookConfiguration.internalValue = value;
  }
  public resetRegistrationWebhookConfiguration() {
    this._registrationWebhookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationWebhookConfigurationInput() {
    return this._registrationWebhookConfiguration.internalValue;
  }

  // work_webhook_configuration - computed: false, optional: true, required: false
  private _workWebhookConfiguration = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfigurationOutputReference(this, "work_webhook_configuration");
  public get workWebhookConfiguration() {
    return this._workWebhookConfiguration;
  }
  public putWorkWebhookConfiguration(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedWorkWebhookConfiguration) {
    this._workWebhookConfiguration.internalValue = value;
  }
  public resetWorkWebhookConfiguration() {
    this._workWebhookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workWebhookConfigurationInput() {
    return this._workWebhookConfiguration.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption {
  /**
  * Hosted includes configurations we need for clustermanager in the Hosted mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#hosted DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#hosted}
  */
  readonly hosted?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted;
  /**
  * Mode can be Default or Hosted. In Default mode, the Hub is installed as a whole and all parts of Hub are deployed in the same cluster. In Hosted mode, only crd and configurations are installed on one cluster(defined as hub-cluster). Controllers run in another cluster (defined as management-cluster) and connect to the hub with the kubeconfig in secret of 'external-hub-kubeconfig'(a kubeconfig of hub-cluster with cluster-admin permission). Note: Do not modify the Mode field once it's applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedToTerraform(struct!.hosted),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosted: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedToHclTerraform(struct!.hosted),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosted = this._hosted?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosted.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosted.internalValue = value.hosted;
      this._mode = value.mode;
    }
  }

  // hosted - computed: false, optional: true, required: false
  private _hosted = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHostedOutputReference(this, "hosted");
  public get hosted() {
    return this._hosted;
  }
  public putHosted(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionHosted) {
    this._hosted.internalValue = value;
  }
  public resetHosted() {
    this._hosted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedInput() {
    return this._hosted.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#effect DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#key DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#operator DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#toleration_seconds DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#value DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement {
  /**
  * NodeSelector defines which Nodes the Pods are scheduled on. The default is an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#node_selector DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Tolerations are attached by pods to tolerate any taint that matches the triple <key,value,effect> using the matching operator <operator>. The default is an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#tolerations DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates {
  /**
  * Feature is the key of feature gate. e.g. featuregate/Foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature}
  */
  readonly feature: string;
  /**
  * Mode is either Enable, Disable, '' where '' is Disable by default. In Enable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=true'. In Disable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._mode = value.mode;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration {
  /**
  * AutoApproveUser represents a list of users that can auto approve CSR and accept client. If the credential of the bootstrap-hub-kubeconfig matches to the users, the cluster created by the bootstrap-hub-kubeconfig will be auto-registered into the hub cluster. This takes effect only when ManagedClusterAutoApproval feature gate is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#auto_approve_users DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#auto_approve_users}
  */
  readonly autoApproveUsers?: string[];
  /**
  * FeatureGates represents the list of feature gates for registration If it is set empty, default feature gates will be used. If it is set, featuregate/Foo is an example of one item in FeatureGates: 1. If featuregate/Foo does not exist, registration-operator will discard it 2. If featuregate/Foo exists and is false by default. It is now possible to set featuregate/Foo=[false|true] 3. If featuregate/Foo exists and is true by default. If a cluster-admin upgrading from 1 to 2 wants to continue having featuregate/Foo=false, he can set featuregate/Foo=false before upgrading. Let's say the cluster-admin wants featuregate/Foo=false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature_gates DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_approve_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.autoApproveUsers),
    feature_gates: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesToTerraform, false)(struct!.featureGates),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_approve_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.autoApproveUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    feature_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesToHclTerraform, false)(struct!.featureGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApproveUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproveUsers = this._autoApproveUsers;
    }
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoApproveUsers = undefined;
      this._featureGates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoApproveUsers = value.autoApproveUsers;
      this._featureGates.internalValue = value.featureGates;
    }
  }

  // auto_approve_users - computed: false, optional: true, required: false
  private _autoApproveUsers?: string[]; 
  public get autoApproveUsers() {
    return this.getListAttribute('auto_approve_users');
  }
  public set autoApproveUsers(value: string[]) {
    this._autoApproveUsers = value;
  }
  public resetAutoApproveUsers() {
    this._autoApproveUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveUsersInput() {
    return this._autoApproveUsers;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGatesList(this, "feature_gates", false);
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#name DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#claims DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#limits DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#requests DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement {
  /**
  * ResourceRequirements defines resource requests and limits when Type is ResourceQosClassResourceRequirement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#resource_requirements DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#type DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_requirements: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsToTerraform(struct!.resourceRequirements),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_requirements: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements",
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

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._type = value.type;
    }
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
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
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates {
  /**
  * Feature is the key of feature gate. e.g. featuregate/Foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature}
  */
  readonly feature: string;
  /**
  * Mode is either Enable, Disable, '' where '' is Disable by default. In Enable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=true'. In Disable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._mode = value.mode;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration {
  /**
  * FeatureGates represents the list of feature gates for work If it is set empty, default feature gates will be used. If it is set, featuregate/Foo is an example of one item in FeatureGates: 1. If featuregate/Foo does not exist, registration-operator will discard it 2. If featuregate/Foo exists and is false by default. It is now possible to set featuregate/Foo=[false|true] 3. If featuregate/Foo exists and is true by default. If a cluster-admin upgrading from 1 to 2 wants to continue having featuregate/Foo=false, he can set featuregate/Foo=false before upgrading. Let's say the cluster-admin wants featuregate/Foo=false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#feature_gates DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable;
  /**
  * WorkDriver represents the type of work driver. Possible values are 'kube', 'mqtt', or 'grpc'. If not provided, the default value is 'kube'. If set to non-'kube' drivers, the klusterlet need to use the same driver. and the driver configuration must be provided in a secret named 'work-driver-config' in the namespace where the cluster manager is running, adhering to the following structure: config.yaml: | <driver-config-in-yaml> For detailed driver configuration, please refer to the sdk-go documentation: https://github.com/open-cluster-management-io/sdk-go/blob/main/pkg/cloudevents/README.md#supported-protocols-and-drivers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#work_driver DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#work_driver}
  */
  readonly workDriver?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_gates: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesToTerraform, false)(struct!.featureGates),
    work_driver: cdktf.stringToTerraform(struct!.workDriver),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesToHclTerraform, false)(struct!.featureGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesList",
    },
    work_driver: {
      value: cdktf.stringToHclTerraform(struct!.workDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    if (this._workDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDriver = this._workDriver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureGates.internalValue = undefined;
      this._workDriver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureGates.internalValue = value.featureGates;
      this._workDriver = value.workDriver;
    }
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGatesList(this, "feature_gates", false);
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }

  // work_driver - computed: false, optional: true, required: false
  private _workDriver?: string; 
  public get workDriver() {
    return this.getStringAttribute('work_driver');
  }
  public set workDriver(value: string) {
    this._workDriver = value;
  }
  public resetWorkDriver() {
    this._workDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDriverInput() {
    return this._workDriver;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec {
  /**
  * AddOnManagerConfiguration contains the configuration of addon manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#add_on_manager_configuration DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#add_on_manager_configuration}
  */
  readonly addOnManagerConfiguration?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration;
  /**
  * AddOnManagerImagePullSpec represents the desired image configuration of addon manager controller/webhook installed on hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#add_on_manager_image_pull_spec DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#add_on_manager_image_pull_spec}
  */
  readonly addOnManagerImagePullSpec?: string;
  /**
  * DeployOption contains the options of deploying a cluster-manager Default mode is used if DeployOption is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#deploy_option DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#deploy_option}
  */
  readonly deployOption?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption;
  /**
  * NodePlacement enables explicit control over the scheduling of the deployed pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#node_placement DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#node_placement}
  */
  readonly nodePlacement?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement;
  /**
  * PlacementImagePullSpec represents the desired image configuration of placement controller/webhook installed on hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#placement_image_pull_spec DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#placement_image_pull_spec}
  */
  readonly placementImagePullSpec?: string;
  /**
  * RegistrationConfiguration contains the configuration of registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#registration_configuration DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#registration_configuration}
  */
  readonly registrationConfiguration?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration;
  /**
  * RegistrationImagePullSpec represents the desired image of registration controller/webhook installed on hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#registration_image_pull_spec DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#registration_image_pull_spec}
  */
  readonly registrationImagePullSpec?: string;
  /**
  * ResourceRequirement specify QoS classes of deployments managed by clustermanager. It applies to all the containers in the deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#resource_requirement DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#resource_requirement}
  */
  readonly resourceRequirement?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement;
  /**
  * WorkConfiguration contains the configuration of work
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#work_configuration DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#work_configuration}
  */
  readonly workConfiguration?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration;
  /**
  * WorkImagePullSpec represents the desired image configuration of work controller/webhook installed on hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#work_image_pull_spec DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest#work_image_pull_spec}
  */
  readonly workImagePullSpec?: string;
}

export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_on_manager_configuration: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationToTerraform(struct!.addOnManagerConfiguration),
    add_on_manager_image_pull_spec: cdktf.stringToTerraform(struct!.addOnManagerImagePullSpec),
    deploy_option: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionToTerraform(struct!.deployOption),
    node_placement: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementToTerraform(struct!.nodePlacement),
    placement_image_pull_spec: cdktf.stringToTerraform(struct!.placementImagePullSpec),
    registration_configuration: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationToTerraform(struct!.registrationConfiguration),
    registration_image_pull_spec: cdktf.stringToTerraform(struct!.registrationImagePullSpec),
    resource_requirement: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementToTerraform(struct!.resourceRequirement),
    work_configuration: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationToTerraform(struct!.workConfiguration),
    work_image_pull_spec: cdktf.stringToTerraform(struct!.workImagePullSpec),
  }
}


export function dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_on_manager_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationToHclTerraform(struct!.addOnManagerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration",
    },
    add_on_manager_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.addOnManagerImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_option: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionToHclTerraform(struct!.deployOption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption",
    },
    node_placement: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementToHclTerraform(struct!.nodePlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement",
    },
    placement_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.placementImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationToHclTerraform(struct!.registrationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration",
    },
    registration_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.registrationImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirement: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementToHclTerraform(struct!.resourceRequirement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement",
    },
    work_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationToHclTerraform(struct!.workConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration",
    },
    work_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.workImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addOnManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnManagerConfiguration = this._addOnManagerConfiguration?.internalValue;
    }
    if (this._addOnManagerImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnManagerImagePullSpec = this._addOnManagerImagePullSpec;
    }
    if (this._deployOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOption = this._deployOption?.internalValue;
    }
    if (this._nodePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePlacement = this._nodePlacement?.internalValue;
    }
    if (this._placementImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementImagePullSpec = this._placementImagePullSpec;
    }
    if (this._registrationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationConfiguration = this._registrationConfiguration?.internalValue;
    }
    if (this._registrationImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationImagePullSpec = this._registrationImagePullSpec;
    }
    if (this._resourceRequirement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirement = this._resourceRequirement?.internalValue;
    }
    if (this._workConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workConfiguration = this._workConfiguration?.internalValue;
    }
    if (this._workImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.workImagePullSpec = this._workImagePullSpec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addOnManagerConfiguration.internalValue = undefined;
      this._addOnManagerImagePullSpec = undefined;
      this._deployOption.internalValue = undefined;
      this._nodePlacement.internalValue = undefined;
      this._placementImagePullSpec = undefined;
      this._registrationConfiguration.internalValue = undefined;
      this._registrationImagePullSpec = undefined;
      this._resourceRequirement.internalValue = undefined;
      this._workConfiguration.internalValue = undefined;
      this._workImagePullSpec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addOnManagerConfiguration.internalValue = value.addOnManagerConfiguration;
      this._addOnManagerImagePullSpec = value.addOnManagerImagePullSpec;
      this._deployOption.internalValue = value.deployOption;
      this._nodePlacement.internalValue = value.nodePlacement;
      this._placementImagePullSpec = value.placementImagePullSpec;
      this._registrationConfiguration.internalValue = value.registrationConfiguration;
      this._registrationImagePullSpec = value.registrationImagePullSpec;
      this._resourceRequirement.internalValue = value.resourceRequirement;
      this._workConfiguration.internalValue = value.workConfiguration;
      this._workImagePullSpec = value.workImagePullSpec;
    }
  }

  // add_on_manager_configuration - computed: false, optional: true, required: false
  private _addOnManagerConfiguration = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfigurationOutputReference(this, "add_on_manager_configuration");
  public get addOnManagerConfiguration() {
    return this._addOnManagerConfiguration;
  }
  public putAddOnManagerConfiguration(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecAddOnManagerConfiguration) {
    this._addOnManagerConfiguration.internalValue = value;
  }
  public resetAddOnManagerConfiguration() {
    this._addOnManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnManagerConfigurationInput() {
    return this._addOnManagerConfiguration.internalValue;
  }

  // add_on_manager_image_pull_spec - computed: false, optional: true, required: false
  private _addOnManagerImagePullSpec?: string; 
  public get addOnManagerImagePullSpec() {
    return this.getStringAttribute('add_on_manager_image_pull_spec');
  }
  public set addOnManagerImagePullSpec(value: string) {
    this._addOnManagerImagePullSpec = value;
  }
  public resetAddOnManagerImagePullSpec() {
    this._addOnManagerImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnManagerImagePullSpecInput() {
    return this._addOnManagerImagePullSpec;
  }

  // deploy_option - computed: false, optional: true, required: false
  private _deployOption = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOptionOutputReference(this, "deploy_option");
  public get deployOption() {
    return this._deployOption;
  }
  public putDeployOption(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecDeployOption) {
    this._deployOption.internalValue = value;
  }
  public resetDeployOption() {
    this._deployOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOptionInput() {
    return this._deployOption.internalValue;
  }

  // node_placement - computed: false, optional: true, required: false
  private _nodePlacement = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacementOutputReference(this, "node_placement");
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecNodePlacement) {
    this._nodePlacement.internalValue = value;
  }
  public resetNodePlacement() {
    this._nodePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
  }

  // placement_image_pull_spec - computed: false, optional: true, required: false
  private _placementImagePullSpec?: string; 
  public get placementImagePullSpec() {
    return this.getStringAttribute('placement_image_pull_spec');
  }
  public set placementImagePullSpec(value: string) {
    this._placementImagePullSpec = value;
  }
  public resetPlacementImagePullSpec() {
    this._placementImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementImagePullSpecInput() {
    return this._placementImagePullSpec;
  }

  // registration_configuration - computed: false, optional: true, required: false
  private _registrationConfiguration = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfigurationOutputReference(this, "registration_configuration");
  public get registrationConfiguration() {
    return this._registrationConfiguration;
  }
  public putRegistrationConfiguration(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecRegistrationConfiguration) {
    this._registrationConfiguration.internalValue = value;
  }
  public resetRegistrationConfiguration() {
    this._registrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigurationInput() {
    return this._registrationConfiguration.internalValue;
  }

  // registration_image_pull_spec - computed: false, optional: true, required: false
  private _registrationImagePullSpec?: string; 
  public get registrationImagePullSpec() {
    return this.getStringAttribute('registration_image_pull_spec');
  }
  public set registrationImagePullSpec(value: string) {
    this._registrationImagePullSpec = value;
  }
  public resetRegistrationImagePullSpec() {
    this._registrationImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationImagePullSpecInput() {
    return this._registrationImagePullSpec;
  }

  // resource_requirement - computed: false, optional: true, required: false
  private _resourceRequirement = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirementOutputReference(this, "resource_requirement");
  public get resourceRequirement() {
    return this._resourceRequirement;
  }
  public putResourceRequirement(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecResourceRequirement) {
    this._resourceRequirement.internalValue = value;
  }
  public resetResourceRequirement() {
    this._resourceRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementInput() {
    return this._resourceRequirement.internalValue;
  }

  // work_configuration - computed: false, optional: true, required: false
  private _workConfiguration = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfigurationOutputReference(this, "work_configuration");
  public get workConfiguration() {
    return this._workConfiguration;
  }
  public putWorkConfiguration(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecWorkConfiguration) {
    this._workConfiguration.internalValue = value;
  }
  public resetWorkConfiguration() {
    this._workConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workConfigurationInput() {
    return this._workConfiguration.internalValue;
  }

  // work_image_pull_spec - computed: false, optional: true, required: false
  private _workImagePullSpec?: string; 
  public get workImagePullSpec() {
    return this.getStringAttribute('work_image_pull_spec');
  }
  public set workImagePullSpec(value: string) {
    this._workImagePullSpec = value;
  }
  public resetWorkImagePullSpec() {
    this._workImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workImagePullSpecInput() {
    return this._workImagePullSpec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest k8s_operator_open_cluster_management_io_cluster_manager_v1_manifest}
*/
export class DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_open_cluster_management_io_cluster_manager_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorOpenClusterManagementIoClusterManagerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_open_cluster_management_io_cluster_manager_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_open_cluster_management_io_cluster_manager_v1_manifest k8s_operator_open_cluster_management_io_cluster_manager_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_open_cluster_management_io_cluster_manager_v1_manifest',
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
  private _metadata = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec) {
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
      metadata: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorOpenClusterManagementIoClusterManagerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
