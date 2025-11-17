// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#metadata DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata;
  /**
  * UpgradeConfigSpec defines the desired state of UpgradeConfig and upgrade window and freeze window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#spec DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec;
}
export interface DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#annotations DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#labels DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#name DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#namespace DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired {
  /**
  * Channel used for upgrades
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#channel DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#channel}
  */
  readonly channel?: string;
  /**
  * Image reference used for upgrades
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#image DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Version of openshift release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#version DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredToTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    image: cdktf.stringToTerraform(struct!.image),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredToHclTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._image = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._image = value.image;
      this._version = value.version;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec {
  /**
  * Specify if scaling up an extra node for capacity reservation before upgrade starts is needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#capacity_reservation DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#capacity_reservation}
  */
  readonly capacityReservation?: boolean | cdktf.IResolvable;
  /**
  * Specify the desired OpenShift release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#desired DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#desired}
  */
  readonly desired: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired;
  /**
  * The maximum grace period granted to a node whose drain is blocked by a Pod Disruption Budget, before that drain is forced. Measured in minutes. The minimum accepted value is 0 and in this case it will trigger force drain after the expectedNodeDrainTime lapsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#pdb_force_drain_timeout DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#pdb_force_drain_timeout}
  */
  readonly pdbForceDrainTimeout: number;
  /**
  * Type indicates the ClusterUpgrader implementation to use to perform an upgrade of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#type DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specify the upgrade start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#upgrade_at DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest#upgrade_at}
  */
  readonly upgradeAt: string;
}

export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation: cdktf.booleanToTerraform(struct!.capacityReservation),
    desired: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredToTerraform(struct!.desired),
    pdb_force_drain_timeout: cdktf.numberToTerraform(struct!.pdbForceDrainTimeout),
    type: cdktf.stringToTerraform(struct!.type),
    upgrade_at: cdktf.stringToTerraform(struct!.upgradeAt),
  }
}


export function dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation: {
      value: cdktf.booleanToHclTerraform(struct!.capacityReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    desired: {
      value: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredToHclTerraform(struct!.desired),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired",
    },
    pdb_force_drain_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pdbForceDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_at: {
      value: cdktf.stringToHclTerraform(struct!.upgradeAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservation = this._capacityReservation;
    }
    if (this._desired?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desired = this._desired?.internalValue;
    }
    if (this._pdbForceDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbForceDrainTimeout = this._pdbForceDrainTimeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._upgradeAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeAt = this._upgradeAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservation = undefined;
      this._desired.internalValue = undefined;
      this._pdbForceDrainTimeout = undefined;
      this._type = undefined;
      this._upgradeAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservation = value.capacityReservation;
      this._desired.internalValue = value.desired;
      this._pdbForceDrainTimeout = value.pdbForceDrainTimeout;
      this._type = value.type;
      this._upgradeAt = value.upgradeAt;
    }
  }

  // capacity_reservation - computed: false, optional: true, required: false
  private _capacityReservation?: boolean | cdktf.IResolvable; 
  public get capacityReservation() {
    return this.getBooleanAttribute('capacity_reservation');
  }
  public set capacityReservation(value: boolean | cdktf.IResolvable) {
    this._capacityReservation = value;
  }
  public resetCapacityReservation() {
    this._capacityReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationInput() {
    return this._capacityReservation;
  }

  // desired - computed: false, optional: false, required: true
  private _desired = new DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesiredOutputReference(this, "desired");
  public get desired() {
    return this._desired;
  }
  public putDesired(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecDesired) {
    this._desired.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInput() {
    return this._desired.internalValue;
  }

  // pdb_force_drain_timeout - computed: false, optional: false, required: true
  private _pdbForceDrainTimeout?: number; 
  public get pdbForceDrainTimeout() {
    return this.getNumberAttribute('pdb_force_drain_timeout');
  }
  public set pdbForceDrainTimeout(value: number) {
    this._pdbForceDrainTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbForceDrainTimeoutInput() {
    return this._pdbForceDrainTimeout;
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

  // upgrade_at - computed: false, optional: false, required: true
  private _upgradeAt?: string; 
  public get upgradeAt() {
    return this.getStringAttribute('upgrade_at');
  }
  public set upgradeAt(value: string) {
    this._upgradeAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAtInput() {
    return this._upgradeAt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest k8s_upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest}
*/
export class DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest k8s_upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_upgrade_managed_openshift_io_upgrade_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SUpgradeManagedOpenshiftIoUpgradeConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
