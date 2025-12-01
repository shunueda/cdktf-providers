// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata;
  /**
  * VSphereClusterSpec defines the desired state of VSphereCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk {
  /**
  * SCSIControllerType defines SCSI controller to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#scsi_controller_type DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#scsi_controller_type}
  */
  readonly scsiControllerType?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scsi_controller_type: cdktf.stringToTerraform(struct!.scsiControllerType),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scsi_controller_type: {
      value: cdktf.stringToHclTerraform(struct!.scsiControllerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scsiControllerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiControllerType = this._scsiControllerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scsiControllerType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scsiControllerType = value.scsiControllerType;
    }
  }

  // scsi_controller_type - computed: false, optional: true, required: false
  private _scsiControllerType?: string; 
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
  public set scsiControllerType(value: string) {
    this._scsiControllerType = value;
  }
  public resetScsiControllerType() {
    this._scsiControllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerTypeInput() {
    return this._scsiControllerType;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal {
  /**
  * APIBindPort configures the vSphere cloud controller manager API port. Defaults to 43001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#api_bind_port DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#api_bind_port}
  */
  readonly apiBindPort?: string;
  /**
  * APIDisable disables the vSphere cloud controller manager API. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#api_disable DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#api_disable}
  */
  readonly apiDisable?: boolean | cdktf.IResolvable;
  /**
  * CAFile Specifies the path to a CA certificate in PEM format. If not configured, the system's CA certificates will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#ca_file DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Datacenters is a CSV string of the datacenters in which VMs are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#datacenters DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#datacenters}
  */
  readonly datacenters?: string;
  /**
  * Insecure is a flag that disables TLS peer verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#insecure DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password is the password used to access a vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#password DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#password}
  */
  readonly password?: string;
  /**
  * Port is the port on which the vSphere endpoint is listening. Defaults to 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#port DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#port}
  */
  readonly port?: string;
  /**
  * RoundTripperCount specifies the SOAP round tripper count (retries = RoundTripper - 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#round_tripper_count DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#round_tripper_count}
  */
  readonly roundTripperCount?: number;
  /**
  * SecretName is the name of the Kubernetes secret in which the vSphere credentials are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#secret_name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * SecretNamespace is the namespace for SecretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#secret_namespace DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * SecretsDirectory is a directory in which secrets may be found. This may used in the event that: 1. It is not desirable to use the K8s API to watch changes to secrets 2. The cloud controller manager is not running in a K8s environment, such as DC/OS. For example, the container storage interface (CSI) is container orcehstrator (CO) agnostic, and should support non-K8s COs. Defaults to /etc/cloud/credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#secrets_directory DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#secrets_directory}
  */
  readonly secretsDirectory?: string;
  /**
  * ServiceAccount is the Kubernetes service account used to launch the cloud controller manager. Defaults to cloud-controller-manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#service_account DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Thumbprint is the cryptographic thumbprint of the vSphere endpoint's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Username is the username used to access a vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#username DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_bind_port: cdktf.stringToTerraform(struct!.apiBindPort),
    api_disable: cdktf.booleanToTerraform(struct!.apiDisable),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    round_tripper_count: cdktf.numberToTerraform(struct!.roundTripperCount),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    secrets_directory: cdktf.stringToTerraform(struct!.secretsDirectory),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_bind_port: {
      value: cdktf.stringToHclTerraform(struct!.apiBindPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_disable: {
      value: cdktf.booleanToHclTerraform(struct!.apiDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    round_tripper_count: {
      value: cdktf.numberToHclTerraform(struct!.roundTripperCount),
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
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_directory: {
      value: cdktf.stringToHclTerraform(struct!.secretsDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiBindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiBindPort = this._apiBindPort;
    }
    if (this._apiDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDisable = this._apiDisable;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._roundTripperCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundTripperCount = this._roundTripperCount;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._secretsDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsDirectory = this._secretsDirectory;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiBindPort = undefined;
      this._apiDisable = undefined;
      this._caFile = undefined;
      this._datacenters = undefined;
      this._insecure = undefined;
      this._password = undefined;
      this._port = undefined;
      this._roundTripperCount = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._secretsDirectory = undefined;
      this._serviceAccount = undefined;
      this._thumbprint = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiBindPort = value.apiBindPort;
      this._apiDisable = value.apiDisable;
      this._caFile = value.caFile;
      this._datacenters = value.datacenters;
      this._insecure = value.insecure;
      this._password = value.password;
      this._port = value.port;
      this._roundTripperCount = value.roundTripperCount;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._secretsDirectory = value.secretsDirectory;
      this._serviceAccount = value.serviceAccount;
      this._thumbprint = value.thumbprint;
      this._username = value.username;
    }
  }

  // api_bind_port - computed: false, optional: true, required: false
  private _apiBindPort?: string; 
  public get apiBindPort() {
    return this.getStringAttribute('api_bind_port');
  }
  public set apiBindPort(value: string) {
    this._apiBindPort = value;
  }
  public resetApiBindPort() {
    this._apiBindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBindPortInput() {
    return this._apiBindPort;
  }

  // api_disable - computed: false, optional: true, required: false
  private _apiDisable?: boolean | cdktf.IResolvable; 
  public get apiDisable() {
    return this.getBooleanAttribute('api_disable');
  }
  public set apiDisable(value: boolean | cdktf.IResolvable) {
    this._apiDisable = value;
  }
  public resetApiDisable() {
    this._apiDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDisableInput() {
    return this._apiDisable;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // round_tripper_count - computed: false, optional: true, required: false
  private _roundTripperCount?: number; 
  public get roundTripperCount() {
    return this.getNumberAttribute('round_tripper_count');
  }
  public set roundTripperCount(value: number) {
    this._roundTripperCount = value;
  }
  public resetRoundTripperCount() {
    this._roundTripperCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripperCountInput() {
    return this._roundTripperCount;
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

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // secrets_directory - computed: false, optional: true, required: false
  private _secretsDirectory?: string; 
  public get secretsDirectory() {
    return this.getStringAttribute('secrets_directory');
  }
  public set secretsDirectory(value: string) {
    this._secretsDirectory = value;
  }
  public resetSecretsDirectory() {
    this._secretsDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsDirectoryInput() {
    return this._secretsDirectory;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels {
  /**
  * Region is the region in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#region DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#region}
  */
  readonly region?: string;
  /**
  * Zone is the zone in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#zone DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._zone = value.zone;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork {
  /**
  * Name is the name of the network to which VMs are connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#controller_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#controller_image}
  */
  readonly controllerImage?: string;
  /**
  * ExtraArgs passes through extra arguments to the cloud provider. The arguments here are passed to the cloud provider daemonset specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#extra_args DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_image: cdktf.stringToTerraform(struct!.controllerImage),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_image: {
      value: cdktf.stringToHclTerraform(struct!.controllerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerImage = this._controllerImage;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerImage = undefined;
      this._extraArgs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerImage = value.controllerImage;
      this._extraArgs = value.extraArgs;
    }
  }

  // controller_image - computed: false, optional: true, required: false
  private _controllerImage?: string; 
  public get controllerImage() {
    return this.getStringAttribute('controller_image');
  }
  public set controllerImage(value: string) {
    this._controllerImage = value;
  }
  public resetControllerImage() {
    this._controllerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerImageInput() {
    return this._controllerImage;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#attacher_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#attacher_image}
  */
  readonly attacherImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#controller_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#controller_image}
  */
  readonly controllerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#liveness_probe_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#liveness_probe_image}
  */
  readonly livenessProbeImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#metadata_syncer_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#metadata_syncer_image}
  */
  readonly metadataSyncerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#node_driver_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#node_driver_image}
  */
  readonly nodeDriverImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#provisioner_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#provisioner_image}
  */
  readonly provisionerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#registrar_image DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#registrar_image}
  */
  readonly registrarImage?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attacher_image: cdktf.stringToTerraform(struct!.attacherImage),
    controller_image: cdktf.stringToTerraform(struct!.controllerImage),
    liveness_probe_image: cdktf.stringToTerraform(struct!.livenessProbeImage),
    metadata_syncer_image: cdktf.stringToTerraform(struct!.metadataSyncerImage),
    node_driver_image: cdktf.stringToTerraform(struct!.nodeDriverImage),
    provisioner_image: cdktf.stringToTerraform(struct!.provisionerImage),
    registrar_image: cdktf.stringToTerraform(struct!.registrarImage),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attacher_image: {
      value: cdktf.stringToHclTerraform(struct!.attacherImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_image: {
      value: cdktf.stringToHclTerraform(struct!.controllerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe_image: {
      value: cdktf.stringToHclTerraform(struct!.livenessProbeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_syncer_image: {
      value: cdktf.stringToHclTerraform(struct!.metadataSyncerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_driver_image: {
      value: cdktf.stringToHclTerraform(struct!.nodeDriverImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_image: {
      value: cdktf.stringToHclTerraform(struct!.provisionerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registrar_image: {
      value: cdktf.stringToHclTerraform(struct!.registrarImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attacherImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.attacherImage = this._attacherImage;
    }
    if (this._controllerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerImage = this._controllerImage;
    }
    if (this._livenessProbeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeImage = this._livenessProbeImage;
    }
    if (this._metadataSyncerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSyncerImage = this._metadataSyncerImage;
    }
    if (this._nodeDriverImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDriverImage = this._nodeDriverImage;
    }
    if (this._provisionerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerImage = this._provisionerImage;
    }
    if (this._registrarImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrarImage = this._registrarImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attacherImage = undefined;
      this._controllerImage = undefined;
      this._livenessProbeImage = undefined;
      this._metadataSyncerImage = undefined;
      this._nodeDriverImage = undefined;
      this._provisionerImage = undefined;
      this._registrarImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attacherImage = value.attacherImage;
      this._controllerImage = value.controllerImage;
      this._livenessProbeImage = value.livenessProbeImage;
      this._metadataSyncerImage = value.metadataSyncerImage;
      this._nodeDriverImage = value.nodeDriverImage;
      this._provisionerImage = value.provisionerImage;
      this._registrarImage = value.registrarImage;
    }
  }

  // attacher_image - computed: false, optional: true, required: false
  private _attacherImage?: string; 
  public get attacherImage() {
    return this.getStringAttribute('attacher_image');
  }
  public set attacherImage(value: string) {
    this._attacherImage = value;
  }
  public resetAttacherImage() {
    this._attacherImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attacherImageInput() {
    return this._attacherImage;
  }

  // controller_image - computed: false, optional: true, required: false
  private _controllerImage?: string; 
  public get controllerImage() {
    return this.getStringAttribute('controller_image');
  }
  public set controllerImage(value: string) {
    this._controllerImage = value;
  }
  public resetControllerImage() {
    this._controllerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerImageInput() {
    return this._controllerImage;
  }

  // liveness_probe_image - computed: false, optional: true, required: false
  private _livenessProbeImage?: string; 
  public get livenessProbeImage() {
    return this.getStringAttribute('liveness_probe_image');
  }
  public set livenessProbeImage(value: string) {
    this._livenessProbeImage = value;
  }
  public resetLivenessProbeImage() {
    this._livenessProbeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeImageInput() {
    return this._livenessProbeImage;
  }

  // metadata_syncer_image - computed: false, optional: true, required: false
  private _metadataSyncerImage?: string; 
  public get metadataSyncerImage() {
    return this.getStringAttribute('metadata_syncer_image');
  }
  public set metadataSyncerImage(value: string) {
    this._metadataSyncerImage = value;
  }
  public resetMetadataSyncerImage() {
    this._metadataSyncerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSyncerImageInput() {
    return this._metadataSyncerImage;
  }

  // node_driver_image - computed: false, optional: true, required: false
  private _nodeDriverImage?: string; 
  public get nodeDriverImage() {
    return this.getStringAttribute('node_driver_image');
  }
  public set nodeDriverImage(value: string) {
    this._nodeDriverImage = value;
  }
  public resetNodeDriverImage() {
    this._nodeDriverImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDriverImageInput() {
    return this._nodeDriverImage;
  }

  // provisioner_image - computed: false, optional: true, required: false
  private _provisionerImage?: string; 
  public get provisionerImage() {
    return this.getStringAttribute('provisioner_image');
  }
  public set provisionerImage(value: string) {
    this._provisionerImage = value;
  }
  public resetProvisionerImage() {
    this._provisionerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerImageInput() {
    return this._provisionerImage;
  }

  // registrar_image - computed: false, optional: true, required: false
  private _registrarImage?: string; 
  public get registrarImage() {
    return this.getStringAttribute('registrar_image');
  }
  public set registrarImage(value: string) {
    this._registrarImage = value;
  }
  public resetRegistrarImage() {
    this._registrarImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrarImageInput() {
    return this._registrarImage;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#cloud DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#cloud}
  */
  readonly cloud?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#storage DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#storage}
  */
  readonly storage?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudToTerraform(struct!.cloud),
    storage: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageToTerraform(struct!.storage),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud",
    },
    storage: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud.internalValue = value.cloud;
      this._storage.internalValue = value.storage;
    }
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter {
  /**
  * Datacenters is a CSV string of the datacenters in which VMs are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#datacenters DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#datacenters}
  */
  readonly datacenters?: string;
  /**
  * Password is the password used to access a vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#password DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#password}
  */
  readonly password?: string;
  /**
  * Port is the port on which the vSphere endpoint is listening. Defaults to 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#port DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#port}
  */
  readonly port?: string;
  /**
  * RoundTripperCount specifies the SOAP round tripper count (retries = RoundTripper - 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#round_tripper_count DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#round_tripper_count}
  */
  readonly roundTripperCount?: number;
  /**
  * Thumbprint is the cryptographic thumbprint of the vSphere endpoint's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Username is the username used to access a vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#username DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    round_tripper_count: cdktf.numberToTerraform(struct!.roundTripperCount),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    round_tripper_count: {
      value: cdktf.numberToHclTerraform(struct!.roundTripperCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._roundTripperCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundTripperCount = this._roundTripperCount;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._password = undefined;
      this._port = undefined;
      this._roundTripperCount = undefined;
      this._thumbprint = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._password = value.password;
      this._port = value.port;
      this._roundTripperCount = value.roundTripperCount;
      this._thumbprint = value.thumbprint;
      this._username = value.username;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // round_tripper_count - computed: false, optional: true, required: false
  private _roundTripperCount?: number; 
  public get roundTripperCount() {
    return this.getNumberAttribute('round_tripper_count');
  }
  public set roundTripperCount(value: number) {
    this._roundTripperCount = value;
  }
  public resetRoundTripperCount() {
    this._roundTripperCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripperCountInput() {
    return this._roundTripperCount;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace {
  /**
  * Datacenter is the datacenter in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#datacenter DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Datastore is the datastore in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#datastore DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#datastore}
  */
  readonly datastore?: string;
  /**
  * Folder is the folder in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#folder DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#folder}
  */
  readonly folder?: string;
  /**
  * ResourcePool is the resource pool in which VMs are created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#resource_pool DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Server is the IP address or FQDN of the vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._folder = undefined;
      this._resourcePool = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._folder = value.folder;
      this._resourcePool = value.resourcePool;
      this._server = value.server;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration {
  /**
  * Disk is the vSphere cloud provider's disk configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#disk DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#disk}
  */
  readonly disk?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk;
  /**
  * Global is the vSphere cloud provider's global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#global DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#global}
  */
  readonly global?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal;
  /**
  * Labels is the vSphere cloud provider's zone and region configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#labels}
  */
  readonly labels?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels;
  /**
  * Network is the vSphere cloud provider's network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#network DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#network}
  */
  readonly network?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork;
  /**
  * CPIProviderConfig contains extra information used to configure the vSphere cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#provider_config DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#provider_config}
  */
  readonly providerConfig?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig;
  /**
  * VCenter is a list of vCenter configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#virtual_center DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#virtual_center}
  */
  readonly virtualCenter?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter;
  /**
  * Workspace is the vSphere cloud provider's workspace configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#workspace DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#workspace}
  */
  readonly workspace?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskToTerraform(struct!.disk),
    global: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalToTerraform(struct!.global),
    labels: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsToTerraform(struct!.labels),
    network: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkToTerraform(struct!.network),
    provider_config: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigToTerraform(struct!.providerConfig),
    virtual_center: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterToTerraform(struct!.virtualCenter),
    workspace: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskToHclTerraform(struct!.disk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk",
    },
    global: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal",
    },
    labels: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsToHclTerraform(struct!.labels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork",
    },
    provider_config: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig",
    },
    virtual_center: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterToHclTerraform(struct!.virtualCenter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter",
    },
    workspace: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    if (this._virtualCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCenter = this._virtualCenter?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._global.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._network.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._virtualCenter.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._global.internalValue = value.global;
      this._labels.internalValue = value.labels;
      this._network.internalValue = value.network;
      this._providerConfig.internalValue = value.providerConfig;
      this._virtualCenter.internalValue = value.virtualCenter;
      this._workspace.internalValue = value.workspace;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // virtual_center - computed: false, optional: true, required: false
  private _virtualCenter = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenterOutputReference(this, "virtual_center");
  public get virtualCenter() {
    return this._virtualCenter;
  }
  public putVirtualCenter(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationVirtualCenter) {
    this._virtualCenter.internalValue = value;
  }
  public resetVirtualCenter() {
    this._virtualCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCenterInput() {
    return this._virtualCenter.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#host DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#port DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef {
  /**
  * Kind of the identity. Can either be VSphereClusterIdentity or Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#api_version DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#field_path DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#resource_version DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#uid DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef | cdktf.IResolvable | undefined {
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
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec {
  /**
  * CloudProviderConfiguration holds the cluster-wide configuration for the vSphere cloud provider. Deprecated: will be removed in v1alpha4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#cloud_provider_configuration DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#cloud_provider_configuration}
  */
  readonly cloudProviderConfiguration?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration;
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint;
  /**
  * IdentityRef is a reference to either a Secret or VSphereClusterIdentity that contains the identity to use when reconciling the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#identity_ref DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#identity_ref}
  */
  readonly identityRef?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef;
  /**
  * Insecure is a flag that controls whether to validate the vSphere server's certificate. Deprecated: will be removed in v1alpha4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#insecure DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * LoadBalancerRef may be used to enable a control plane load balancer for this cluster. When a LoadBalancerRef is provided, the VSphereCluster.Status.Ready field will not be true until the referenced resource is Status.Ready and has a non-empty Status.Address value. Deprecated: will be removed in v1alpha4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#load_balancer_ref DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#load_balancer_ref}
  */
  readonly loadBalancerRef?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef;
  /**
  * Server is the address of the vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#server}
  */
  readonly server?: string;
  /**
  * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate When provided, Insecure should not be set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest#thumbprint}
  */
  readonly thumbprint?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_configuration: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationToTerraform(struct!.cloudProviderConfiguration),
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    identity_ref: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefToTerraform(struct!.identityRef),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    load_balancer_ref: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefToTerraform(struct!.loadBalancerRef),
    server: cdktf.stringToTerraform(struct!.server),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_configuration: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationToHclTerraform(struct!.cloudProviderConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration",
    },
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint",
    },
    identity_ref: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefToHclTerraform(struct!.identityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_ref: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefToHclTerraform(struct!.loadBalancerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderConfiguration = this._cloudProviderConfiguration?.internalValue;
    }
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._identityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityRef = this._identityRef?.internalValue;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._loadBalancerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerRef = this._loadBalancerRef?.internalValue;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProviderConfiguration.internalValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._identityRef.internalValue = undefined;
      this._insecure = undefined;
      this._loadBalancerRef.internalValue = undefined;
      this._server = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProviderConfiguration.internalValue = value.cloudProviderConfiguration;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._identityRef.internalValue = value.identityRef;
      this._insecure = value.insecure;
      this._loadBalancerRef.internalValue = value.loadBalancerRef;
      this._server = value.server;
      this._thumbprint = value.thumbprint;
    }
  }

  // cloud_provider_configuration - computed: false, optional: true, required: false
  private _cloudProviderConfiguration = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfigurationOutputReference(this, "cloud_provider_configuration");
  public get cloudProviderConfiguration() {
    return this._cloudProviderConfiguration;
  }
  public putCloudProviderConfiguration(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecCloudProviderConfiguration) {
    this._cloudProviderConfiguration.internalValue = value;
  }
  public resetCloudProviderConfiguration() {
    this._cloudProviderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderConfigurationInput() {
    return this._cloudProviderConfiguration.internalValue;
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // identity_ref - computed: false, optional: true, required: false
  private _identityRef = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRefOutputReference(this, "identity_ref");
  public get identityRef() {
    return this._identityRef;
  }
  public putIdentityRef(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecIdentityRef) {
    this._identityRef.internalValue = value;
  }
  public resetIdentityRef() {
    this._identityRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRefInput() {
    return this._identityRef.internalValue;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // load_balancer_ref - computed: false, optional: true, required: false
  private _loadBalancerRef = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRefOutputReference(this, "load_balancer_ref");
  public get loadBalancerRef() {
    return this._loadBalancerRef;
  }
  public putLoadBalancerRef(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecLoadBalancerRef) {
    this._loadBalancerRef.internalValue = value;
  }
  public resetLoadBalancerRef() {
    this._loadBalancerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerRefInput() {
    return this._loadBalancerRef.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1alpha3_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
