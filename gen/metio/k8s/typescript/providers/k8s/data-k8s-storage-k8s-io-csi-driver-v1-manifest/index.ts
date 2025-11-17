// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStorageK8SIoCsiDriverV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#metadata DataK8SStorageK8SIoCsiDriverV1Manifest#metadata}
  */
  readonly metadata: DataK8SStorageK8SIoCsiDriverV1ManifestMetadata;
  /**
  * CSIDriverSpec is the specification of a CSIDriver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#spec DataK8SStorageK8SIoCsiDriverV1Manifest#spec}
  */
  readonly spec: DataK8SStorageK8SIoCsiDriverV1ManifestSpec;
}
export interface DataK8SStorageK8SIoCsiDriverV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#annotations DataK8SStorageK8SIoCsiDriverV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#labels DataK8SStorageK8SIoCsiDriverV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#name DataK8SStorageK8SIoCsiDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SStorageK8SIoCsiDriverV1ManifestMetadataToTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SStorageK8SIoCsiDriverV1ManifestMetadataToHclTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SStorageK8SIoCsiDriverV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoCsiDriverV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageK8SIoCsiDriverV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests {
  /**
  * audience is the intended audience of the token in 'TokenRequestSpec'. It will default to the audiences of kube apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#audience DataK8SStorageK8SIoCsiDriverV1Manifest#audience}
  */
  readonly audience: string;
  /**
  * expirationSeconds is the duration of validity of the token in 'TokenRequestSpec'. It has the same default value of 'ExpirationSeconds' in 'TokenRequestSpec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#expiration_seconds DataK8SStorageK8SIoCsiDriverV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
}

export function dataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsToTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
  }
}


export function dataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsToHclTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }
}

export class DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsOutputReference {
    return new DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageK8SIoCsiDriverV1ManifestSpec {
  /**
  * attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#attach_required DataK8SStorageK8SIoCsiDriverV1Manifest#attach_required}
  */
  readonly attachRequired?: boolean | cdktf.IResolvable;
  /**
  * fsGroupPolicy defines if the underlying volume supports changing ownership and permission of the volume before being mounted. Refer to the specific FSGroupPolicy values for additional details. This field was immutable in Kubernetes < 1.29 and now is mutable. Defaults to ReadWriteOnceWithFSType, which will examine each volume to determine if Kubernetes should modify ownership and permissions of the volume. With the default policy the defined fsGroup will only be applied if a fstype is defined and the volume's access mode contains ReadWriteOnce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#fs_group_policy DataK8SStorageK8SIoCsiDriverV1Manifest#fs_group_policy}
  */
  readonly fsGroupPolicy?: string;
  /**
  * podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations, if set to true. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeContext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. 'csi.storage.k8s.io/pod.name': pod.Name 'csi.storage.k8s.io/pod.namespace': pod.Namespace 'csi.storage.k8s.io/pod.uid': string(pod.UID) 'csi.storage.k8s.io/ephemeral': 'true' if the volume is an ephemeral inline volume defined by a CSIVolumeSource, otherwise 'false' 'csi.storage.k8s.io/ephemeral' is a new feature in Kubernetes 1.16. It is only required for drivers which support both the 'Persistent' and 'Ephemeral' VolumeLifecycleMode. Other drivers can leave pod info disabled and/or ignore this field. As Kubernetes 1.15 doesn't support this field, drivers can only support one mode when deployed on such a cluster and the deployment determines which mode that is, for example via a command line parameter of the driver. This field was immutable in Kubernetes < 1.29 and now is mutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#pod_info_on_mount DataK8SStorageK8SIoCsiDriverV1Manifest#pod_info_on_mount}
  */
  readonly podInfoOnMount?: boolean | cdktf.IResolvable;
  /**
  * requiresRepublish indicates the CSI driver wants 'NodePublishVolume' being periodically called to reflect any possible change in the mounted volume. This field defaults to false. Note: After a successful initial NodePublishVolume call, subsequent calls to NodePublishVolume should only update the contents of the volume. New mount points will not be seen by a running container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#requires_republish DataK8SStorageK8SIoCsiDriverV1Manifest#requires_republish}
  */
  readonly requiresRepublish?: boolean | cdktf.IResolvable;
  /**
  * seLinuxMount specifies if the CSI driver supports '-o context' mount option. When 'true', the CSI driver must ensure that all volumes provided by this CSI driver can be mounted separately with different '-o context' options. This is typical for storage backends that provide volumes as filesystems on block devices or as independent shared volumes. Kubernetes will call NodeStage / NodePublish with '-o context=xyz' mount option when mounting a ReadWriteOncePod volume used in Pod that has explicitly set SELinux context. In the future, it may be expanded to other volume AccessModes. In any case, Kubernetes will ensure that the volume is mounted only with a single SELinux context. When 'false', Kubernetes won't pass any special SELinux mount options to the driver. This is typical for volumes that represent subdirectories of a bigger shared filesystem. Default is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#se_linux_mount DataK8SStorageK8SIoCsiDriverV1Manifest#se_linux_mount}
  */
  readonly seLinuxMount?: boolean | cdktf.IResolvable;
  /**
  * storageCapacity indicates that the CSI volume driver wants pod scheduling to consider the storage capacity that the driver deployment will report by creating CSIStorageCapacity objects with capacity information, if set to true. The check can be enabled immediately when deploying a driver. In that case, provisioning new volumes with late binding will pause until the driver deployment has published some suitable CSIStorageCapacity object. Alternatively, the driver can be deployed with the field unset or false and it can be flipped later when storage capacity information has been published. This field was immutable in Kubernetes <= 1.22 and now is mutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#storage_capacity DataK8SStorageK8SIoCsiDriverV1Manifest#storage_capacity}
  */
  readonly storageCapacity?: boolean | cdktf.IResolvable;
  /**
  * tokenRequests indicates the CSI driver needs pods' service account tokens it is mounting volume for to do necessary authentication. Kubelet will pass the tokens in VolumeContext in the CSI NodePublishVolume calls. The CSI driver should parse and validate the following VolumeContext: 'csi.storage.k8s.io/serviceAccount.tokens': { '<audience>': { 'token': <token>, 'expirationTimestamp': <expiration timestamp in RFC3339>, }, ... } Note: Audience in each TokenRequest should be different and at most one token is empty string. To receive a new token after expiry, RequiresRepublish can be used to trigger NodePublishVolume periodically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#token_requests DataK8SStorageK8SIoCsiDriverV1Manifest#token_requests}
  */
  readonly tokenRequests?: DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests[] | cdktf.IResolvable;
  /**
  * volumeLifecycleModes defines what kind of volumes this CSI volume driver supports. The default if the list is empty is 'Persistent', which is the usage defined by the CSI specification and implemented in Kubernetes via the usual PV/PVC mechanism. The other mode is 'Ephemeral'. In this mode, volumes are defined inline inside the pod spec with CSIVolumeSource and their lifecycle is tied to the lifecycle of that pod. A driver has to be aware of this because it is only going to get a NodePublishVolume call for such a volume. For more information about implementing this mode, see https://kubernetes-csi.github.io/docs/ephemeral-local-volumes.html A driver can support one or more of these modes and more modes may be added in the future. This field is beta. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#volume_lifecycle_modes DataK8SStorageK8SIoCsiDriverV1Manifest#volume_lifecycle_modes}
  */
  readonly volumeLifecycleModes?: string[];
}

export function dataK8SStorageK8SIoCsiDriverV1ManifestSpecToTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_required: cdktf.booleanToTerraform(struct!.attachRequired),
    fs_group_policy: cdktf.stringToTerraform(struct!.fsGroupPolicy),
    pod_info_on_mount: cdktf.booleanToTerraform(struct!.podInfoOnMount),
    requires_republish: cdktf.booleanToTerraform(struct!.requiresRepublish),
    se_linux_mount: cdktf.booleanToTerraform(struct!.seLinuxMount),
    storage_capacity: cdktf.booleanToTerraform(struct!.storageCapacity),
    token_requests: cdktf.listMapper(dataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsToTerraform, false)(struct!.tokenRequests),
    volume_lifecycle_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeLifecycleModes),
  }
}


export function dataK8SStorageK8SIoCsiDriverV1ManifestSpecToHclTerraform(struct?: DataK8SStorageK8SIoCsiDriverV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_required: {
      value: cdktf.booleanToHclTerraform(struct!.attachRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_group_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_info_on_mount: {
      value: cdktf.booleanToHclTerraform(struct!.podInfoOnMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requires_republish: {
      value: cdktf.booleanToHclTerraform(struct!.requiresRepublish),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    se_linux_mount: {
      value: cdktf.booleanToHclTerraform(struct!.seLinuxMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_capacity: {
      value: cdktf.booleanToHclTerraform(struct!.storageCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_requests: {
      value: cdktf.listMapperHcl(dataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsToHclTerraform, false)(struct!.tokenRequests),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsList",
    },
    volume_lifecycle_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeLifecycleModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoCsiDriverV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoCsiDriverV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachRequired = this._attachRequired;
    }
    if (this._fsGroupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupPolicy = this._fsGroupPolicy;
    }
    if (this._podInfoOnMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.podInfoOnMount = this._podInfoOnMount;
    }
    if (this._requiresRepublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresRepublish = this._requiresRepublish;
    }
    if (this._seLinuxMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxMount = this._seLinuxMount;
    }
    if (this._storageCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacity = this._storageCapacity;
    }
    if (this._tokenRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRequests = this._tokenRequests?.internalValue;
    }
    if (this._volumeLifecycleModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLifecycleModes = this._volumeLifecycleModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoCsiDriverV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachRequired = undefined;
      this._fsGroupPolicy = undefined;
      this._podInfoOnMount = undefined;
      this._requiresRepublish = undefined;
      this._seLinuxMount = undefined;
      this._storageCapacity = undefined;
      this._tokenRequests.internalValue = undefined;
      this._volumeLifecycleModes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachRequired = value.attachRequired;
      this._fsGroupPolicy = value.fsGroupPolicy;
      this._podInfoOnMount = value.podInfoOnMount;
      this._requiresRepublish = value.requiresRepublish;
      this._seLinuxMount = value.seLinuxMount;
      this._storageCapacity = value.storageCapacity;
      this._tokenRequests.internalValue = value.tokenRequests;
      this._volumeLifecycleModes = value.volumeLifecycleModes;
    }
  }

  // attach_required - computed: false, optional: true, required: false
  private _attachRequired?: boolean | cdktf.IResolvable; 
  public get attachRequired() {
    return this.getBooleanAttribute('attach_required');
  }
  public set attachRequired(value: boolean | cdktf.IResolvable) {
    this._attachRequired = value;
  }
  public resetAttachRequired() {
    this._attachRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachRequiredInput() {
    return this._attachRequired;
  }

  // fs_group_policy - computed: false, optional: true, required: false
  private _fsGroupPolicy?: string; 
  public get fsGroupPolicy() {
    return this.getStringAttribute('fs_group_policy');
  }
  public set fsGroupPolicy(value: string) {
    this._fsGroupPolicy = value;
  }
  public resetFsGroupPolicy() {
    this._fsGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupPolicyInput() {
    return this._fsGroupPolicy;
  }

  // pod_info_on_mount - computed: false, optional: true, required: false
  private _podInfoOnMount?: boolean | cdktf.IResolvable; 
  public get podInfoOnMount() {
    return this.getBooleanAttribute('pod_info_on_mount');
  }
  public set podInfoOnMount(value: boolean | cdktf.IResolvable) {
    this._podInfoOnMount = value;
  }
  public resetPodInfoOnMount() {
    this._podInfoOnMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfoOnMountInput() {
    return this._podInfoOnMount;
  }

  // requires_republish - computed: false, optional: true, required: false
  private _requiresRepublish?: boolean | cdktf.IResolvable; 
  public get requiresRepublish() {
    return this.getBooleanAttribute('requires_republish');
  }
  public set requiresRepublish(value: boolean | cdktf.IResolvable) {
    this._requiresRepublish = value;
  }
  public resetRequiresRepublish() {
    this._requiresRepublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresRepublishInput() {
    return this._requiresRepublish;
  }

  // se_linux_mount - computed: false, optional: true, required: false
  private _seLinuxMount?: boolean | cdktf.IResolvable; 
  public get seLinuxMount() {
    return this.getBooleanAttribute('se_linux_mount');
  }
  public set seLinuxMount(value: boolean | cdktf.IResolvable) {
    this._seLinuxMount = value;
  }
  public resetSeLinuxMount() {
    this._seLinuxMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxMountInput() {
    return this._seLinuxMount;
  }

  // storage_capacity - computed: false, optional: true, required: false
  private _storageCapacity?: boolean | cdktf.IResolvable; 
  public get storageCapacity() {
    return this.getBooleanAttribute('storage_capacity');
  }
  public set storageCapacity(value: boolean | cdktf.IResolvable) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }

  // token_requests - computed: false, optional: true, required: false
  private _tokenRequests = new DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequestsList(this, "token_requests", false);
  public get tokenRequests() {
    return this._tokenRequests;
  }
  public putTokenRequests(value: DataK8SStorageK8SIoCsiDriverV1ManifestSpecTokenRequests[] | cdktf.IResolvable) {
    this._tokenRequests.internalValue = value;
  }
  public resetTokenRequests() {
    this._tokenRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRequestsInput() {
    return this._tokenRequests.internalValue;
  }

  // volume_lifecycle_modes - computed: false, optional: true, required: false
  private _volumeLifecycleModes?: string[]; 
  public get volumeLifecycleModes() {
    return this.getListAttribute('volume_lifecycle_modes');
  }
  public set volumeLifecycleModes(value: string[]) {
    this._volumeLifecycleModes = value;
  }
  public resetVolumeLifecycleModes() {
    this._volumeLifecycleModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLifecycleModesInput() {
    return this._volumeLifecycleModes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest k8s_storage_k8s_io_csi_driver_v1_manifest}
*/
export class DataK8SStorageK8SIoCsiDriverV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_storage_k8s_io_csi_driver_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStorageK8SIoCsiDriverV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStorageK8SIoCsiDriverV1Manifest to import
  * @param importFromId The id of the existing DataK8SStorageK8SIoCsiDriverV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStorageK8SIoCsiDriverV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_storage_k8s_io_csi_driver_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storage_k8s_io_csi_driver_v1_manifest k8s_storage_k8s_io_csi_driver_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStorageK8SIoCsiDriverV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStorageK8SIoCsiDriverV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_storage_k8s_io_csi_driver_v1_manifest',
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
  private _metadata = new DataK8SStorageK8SIoCsiDriverV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStorageK8SIoCsiDriverV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SStorageK8SIoCsiDriverV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SStorageK8SIoCsiDriverV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SStorageK8SIoCsiDriverV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SStorageK8SIoCsiDriverV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SStorageK8SIoCsiDriverV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageK8SIoCsiDriverV1ManifestMetadata",
      },
      spec: {
        value: dataK8SStorageK8SIoCsiDriverV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageK8SIoCsiDriverV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
