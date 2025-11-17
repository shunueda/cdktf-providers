import * as cdktf from 'cdktf';
import { DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRef,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRef,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzure,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2ToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2ToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2OutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFrom,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromList,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcs,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocal,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRef,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRest,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecArchive,
dataK8SK8UpIoScheduleV1ManifestSpecArchiveToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecArchiveToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecArchiveOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecBackend,
dataK8SK8UpIoScheduleV1ManifestSpecBackendToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecBackendToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecBackendOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecBackup,
dataK8SK8UpIoScheduleV1ManifestSpecBackupToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecBackupToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecBackupOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecCheck,
dataK8SK8UpIoScheduleV1ManifestSpecCheckToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecCheckToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecCheckOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRef,
dataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefOutputReference,
DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContext,
dataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextToTerraform,
dataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextToHclTerraform,
DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextOutputReference } from './structs0'
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#access_key_id_secret_ref DataK8SK8UpIoScheduleV1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#bucket DataK8SK8UpIoScheduleV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#endpoint DataK8SK8UpIoScheduleV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_access_key_secret_ref DataK8SK8UpIoScheduleV1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3ToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secret_access_key_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3ToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: true, required: false
  private _accessKeyIdSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3AccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  public resetAccessKeyIdSecretRef() {
    this._accessKeyIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3SecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#container DataK8SK8UpIoScheduleV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._path = value.path;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#ca_cert DataK8SK8UpIoScheduleV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_cert DataK8SK8UpIoScheduleV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_key DataK8SK8UpIoScheduleV1Manifest#client_key}
  */
  readonly clientKey?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_path DataK8SK8UpIoScheduleV1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_propagation DataK8SK8UpIoScheduleV1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path DataK8SK8UpIoScheduleV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path_expr DataK8SK8UpIoScheduleV1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#azure DataK8SK8UpIoScheduleV1Manifest#azure}
  */
  readonly azure?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#b2 DataK8SK8UpIoScheduleV1Manifest#b2}
  */
  readonly b2?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2;
  /**
  * EnvFrom adds all environment variables from a an external source to the Restic job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#env_from DataK8SK8UpIoScheduleV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gcs DataK8SK8UpIoScheduleV1Manifest#gcs}
  */
  readonly gcs?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#local DataK8SK8UpIoScheduleV1Manifest#local}
  */
  readonly local?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocal;
  /**
  * RepoPasswordSecretRef references a secret key to look up the restic repository password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#repo_password_secret_ref DataK8SK8UpIoScheduleV1Manifest#repo_password_secret_ref}
  */
  readonly repoPasswordSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#rest DataK8SK8UpIoScheduleV1Manifest#rest}
  */
  readonly rest?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#s3 DataK8SK8UpIoScheduleV1Manifest#s3}
  */
  readonly s3?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#swift DataK8SK8UpIoScheduleV1Manifest#swift}
  */
  readonly swift?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#tls_options DataK8SK8UpIoScheduleV1Manifest#tls_options}
  */
  readonly tlsOptions?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#volume_mounts DataK8SK8UpIoScheduleV1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureToTerraform(struct!.azure),
    b2: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2ToTerraform(struct!.b2),
    env_from: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromToTerraform, false)(struct!.envFrom),
    gcs: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsToTerraform(struct!.gcs),
    local: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalToTerraform(struct!.local),
    repo_password_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefToTerraform(struct!.repoPasswordSecretRef),
    rest: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestToTerraform(struct!.rest),
    s3: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3ToTerraform(struct!.s3),
    swift: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftToTerraform(struct!.swift),
    tls_options: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsToTerraform(struct!.tlsOptions),
    volume_mounts: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzure",
    },
    b2: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2ToHclTerraform(struct!.b2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromList",
    },
    gcs: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcs",
    },
    local: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocal",
    },
    repo_password_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefToHclTerraform(struct!.repoPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRef",
    },
    rest: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRest",
    },
    s3: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3",
    },
    swift: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftToHclTerraform(struct!.swift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift",
    },
    tls_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsToHclTerraform(struct!.tlsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._b2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.b2 = this._b2?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._repoPasswordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoPasswordSecretRef = this._repoPasswordSecretRef?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._swift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swift = this._swift?.internalValue;
    }
    if (this._tlsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsOptions = this._tlsOptions?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._b2.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._local.internalValue = undefined;
      this._repoPasswordSecretRef.internalValue = undefined;
      this._rest.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._swift.internalValue = undefined;
      this._tlsOptions.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._b2.internalValue = value.b2;
      this._envFrom.internalValue = value.envFrom;
      this._gcs.internalValue = value.gcs;
      this._local.internalValue = value.local;
      this._repoPasswordSecretRef.internalValue = value.repoPasswordSecretRef;
      this._rest.internalValue = value.rest;
      this._s3.internalValue = value.s3;
      this._swift.internalValue = value.swift;
      this._tlsOptions.internalValue = value.tlsOptions;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // b2 - computed: false, optional: true, required: false
  private _b2 = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2OutputReference(this, "b2");
  public get b2() {
    return this._b2;
  }
  public putB2(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendB2) {
    this._b2.internalValue = value;
  }
  public resetB2() {
    this._b2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get b2Input() {
    return this._b2.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // repo_password_secret_ref - computed: false, optional: true, required: false
  private _repoPasswordSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRefOutputReference(this, "repo_password_secret_ref");
  public get repoPasswordSecretRef() {
    return this._repoPasswordSecretRef;
  }
  public putRepoPasswordSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRepoPasswordSecretRef) {
    this._repoPasswordSecretRef.internalValue = value;
  }
  public resetRepoPasswordSecretRef() {
    this._repoPasswordSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoPasswordSecretRefInput() {
    return this._repoPasswordSecretRef.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // swift - computed: false, optional: true, required: false
  private _swift = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwiftOutputReference(this, "swift");
  public get swift() {
    return this._swift;
  }
  public putSwift(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendSwift) {
    this._swift.internalValue = value;
  }
  public resetSwift() {
    this._swift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftInput() {
    return this._swift.internalValue;
  }

  // tls_options - computed: false, optional: true, required: false
  private _tlsOptions = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptionsOutputReference(this, "tls_options");
  public get tlsOptions() {
    return this._tlsOptions;
  }
  public putTlsOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendTlsOptions) {
    this._tlsOptions.internalValue = value;
  }
  public resetTlsOptions() {
    this._tlsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionsInput() {
    return this._tlsOptions.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#level DataK8SK8UpIoScheduleV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#role DataK8SK8UpIoScheduleV1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#type DataK8SK8UpIoScheduleV1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#user DataK8SK8UpIoScheduleV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#localhost_profile DataK8SK8UpIoScheduleV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#type DataK8SK8UpIoScheduleV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#value DataK8SK8UpIoScheduleV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gmsa_credential_spec DataK8SK8UpIoScheduleV1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gmsa_credential_spec_name DataK8SK8UpIoScheduleV1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#host_process DataK8SK8UpIoScheduleV1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_user_name DataK8SK8UpIoScheduleV1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#fs_group DataK8SK8UpIoScheduleV1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#fs_group_change_policy DataK8SK8UpIoScheduleV1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_group DataK8SK8UpIoScheduleV1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_non_root DataK8SK8UpIoScheduleV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_user DataK8SK8UpIoScheduleV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#se_linux_options DataK8SK8UpIoScheduleV1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#seccomp_profile DataK8SK8UpIoScheduleV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#supplemental_groups DataK8SK8UpIoScheduleV1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sysctls DataK8SK8UpIoScheduleV1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#windows_options DataK8SK8UpIoScheduleV1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claims DataK8SK8UpIoScheduleV1Manifest#claims}
  */
  readonly claims?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#limits DataK8SK8UpIoScheduleV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#requests DataK8SK8UpIoScheduleV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsList",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention {
  /**
  * Hostnames is a filter on what hostnames the policy should be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#hostnames DataK8SK8UpIoScheduleV1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_daily DataK8SK8UpIoScheduleV1Manifest#keep_daily}
  */
  readonly keepDaily?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_hourly DataK8SK8UpIoScheduleV1Manifest#keep_hourly}
  */
  readonly keepHourly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_last DataK8SK8UpIoScheduleV1Manifest#keep_last}
  */
  readonly keepLast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_monthly DataK8SK8UpIoScheduleV1Manifest#keep_monthly}
  */
  readonly keepMonthly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_tags DataK8SK8UpIoScheduleV1Manifest#keep_tags}
  */
  readonly keepTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_weekly DataK8SK8UpIoScheduleV1Manifest#keep_weekly}
  */
  readonly keepWeekly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_yearly DataK8SK8UpIoScheduleV1Manifest#keep_yearly}
  */
  readonly keepYearly?: number;
  /**
  * Tags is a filter on what tags the policy should be applied DO NOT CONFUSE THIS WITH KeepTags OR YOU'LL have a bad time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#tags DataK8SK8UpIoScheduleV1Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    keep_daily: cdktf.numberToTerraform(struct!.keepDaily),
    keep_hourly: cdktf.numberToTerraform(struct!.keepHourly),
    keep_last: cdktf.numberToTerraform(struct!.keepLast),
    keep_monthly: cdktf.numberToTerraform(struct!.keepMonthly),
    keep_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keepTags),
    keep_weekly: cdktf.numberToTerraform(struct!.keepWeekly),
    keep_yearly: cdktf.numberToTerraform(struct!.keepYearly),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keep_daily: {
      value: cdktf.numberToHclTerraform(struct!.keepDaily),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_hourly: {
      value: cdktf.numberToHclTerraform(struct!.keepHourly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_last: {
      value: cdktf.numberToHclTerraform(struct!.keepLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_monthly: {
      value: cdktf.numberToHclTerraform(struct!.keepMonthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keepTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keep_weekly: {
      value: cdktf.numberToHclTerraform(struct!.keepWeekly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_yearly: {
      value: cdktf.numberToHclTerraform(struct!.keepYearly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._keepDaily !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDaily = this._keepDaily;
    }
    if (this._keepHourly !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHourly = this._keepHourly;
    }
    if (this._keepLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLast = this._keepLast;
    }
    if (this._keepMonthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepMonthly = this._keepMonthly;
    }
    if (this._keepTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTags = this._keepTags;
    }
    if (this._keepWeekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepWeekly = this._keepWeekly;
    }
    if (this._keepYearly !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepYearly = this._keepYearly;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._keepDaily = undefined;
      this._keepHourly = undefined;
      this._keepLast = undefined;
      this._keepMonthly = undefined;
      this._keepTags = undefined;
      this._keepWeekly = undefined;
      this._keepYearly = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._keepDaily = value.keepDaily;
      this._keepHourly = value.keepHourly;
      this._keepLast = value.keepLast;
      this._keepMonthly = value.keepMonthly;
      this._keepTags = value.keepTags;
      this._keepWeekly = value.keepWeekly;
      this._keepYearly = value.keepYearly;
      this._tags = value.tags;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // keep_daily - computed: false, optional: true, required: false
  private _keepDaily?: number; 
  public get keepDaily() {
    return this.getNumberAttribute('keep_daily');
  }
  public set keepDaily(value: number) {
    this._keepDaily = value;
  }
  public resetKeepDaily() {
    this._keepDaily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDailyInput() {
    return this._keepDaily;
  }

  // keep_hourly - computed: false, optional: true, required: false
  private _keepHourly?: number; 
  public get keepHourly() {
    return this.getNumberAttribute('keep_hourly');
  }
  public set keepHourly(value: number) {
    this._keepHourly = value;
  }
  public resetKeepHourly() {
    this._keepHourly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHourlyInput() {
    return this._keepHourly;
  }

  // keep_last - computed: false, optional: true, required: false
  private _keepLast?: number; 
  public get keepLast() {
    return this.getNumberAttribute('keep_last');
  }
  public set keepLast(value: number) {
    this._keepLast = value;
  }
  public resetKeepLast() {
    this._keepLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLastInput() {
    return this._keepLast;
  }

  // keep_monthly - computed: false, optional: true, required: false
  private _keepMonthly?: number; 
  public get keepMonthly() {
    return this.getNumberAttribute('keep_monthly');
  }
  public set keepMonthly(value: number) {
    this._keepMonthly = value;
  }
  public resetKeepMonthly() {
    this._keepMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMonthlyInput() {
    return this._keepMonthly;
  }

  // keep_tags - computed: false, optional: true, required: false
  private _keepTags?: string[]; 
  public get keepTags() {
    return this.getListAttribute('keep_tags');
  }
  public set keepTags(value: string[]) {
    this._keepTags = value;
  }
  public resetKeepTags() {
    this._keepTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTagsInput() {
    return this._keepTags;
  }

  // keep_weekly - computed: false, optional: true, required: false
  private _keepWeekly?: number; 
  public get keepWeekly() {
    return this.getNumberAttribute('keep_weekly');
  }
  public set keepWeekly(value: number) {
    this._keepWeekly = value;
  }
  public resetKeepWeekly() {
    this._keepWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepWeeklyInput() {
    return this._keepWeekly;
  }

  // keep_yearly - computed: false, optional: true, required: false
  private _keepYearly?: number; 
  public get keepYearly() {
    return this.getNumberAttribute('keep_yearly');
  }
  public set keepYearly(value: number) {
    this._keepYearly = value;
  }
  public resetKeepYearly() {
    this._keepYearly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepYearlyInput() {
    return this._keepYearly;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mode DataK8SK8UpIoScheduleV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#default_mode DataK8SK8UpIoScheduleV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#items DataK8SK8UpIoScheduleV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsList",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claim_name DataK8SK8UpIoScheduleV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mode DataK8SK8UpIoScheduleV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#default_mode DataK8SK8UpIoScheduleV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#items DataK8SK8UpIoScheduleV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_name DataK8SK8UpIoScheduleV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes {
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#config_map DataK8SK8UpIoScheduleV1Manifest#config_map}
  */
  readonly configMap?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#persistent_volume_claim DataK8SK8UpIoScheduleV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret DataK8SK8UpIoScheduleV1Manifest#secret}
  */
  readonly secret?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapToTerraform(struct!.configMap),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._name = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecPrune {
  /**
  * ActiveDeadlineSeconds specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it. Value must be positive integer if given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#active_deadline_seconds DataK8SK8UpIoScheduleV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Backend contains the restic repo where the job should backup to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#backend DataK8SK8UpIoScheduleV1Manifest#backend}
  */
  readonly backend?: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#concurrent_runs_allowed DataK8SK8UpIoScheduleV1Manifest#concurrent_runs_allowed}
  */
  readonly concurrentRunsAllowed?: boolean | cdktf.IResolvable;
  /**
  * FailedJobsHistoryLimit amount of failed jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#failed_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#failed_jobs_history_limit}
  */
  readonly failedJobsHistoryLimit?: number;
  /**
  * KeepJobs amount of jobs to keep for later analysis. Deprecated: Use FailedJobsHistoryLimit and SuccessfulJobsHistoryLimit respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_jobs DataK8SK8UpIoScheduleV1Manifest#keep_jobs}
  */
  readonly keepJobs?: number;
  /**
  * PodConfigRef describes the pod spec with wich this action shall be executed. It takes precedence over the Resources or PodSecurityContext field. It does not allow changing the image or the command of the resulting pod. This is for advanced use-cases only. Please only set this if you know what you're doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_config_ref DataK8SK8UpIoScheduleV1Manifest#pod_config_ref}
  */
  readonly podConfigRef?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef;
  /**
  * PodSecurityContext describes the security context with which this action shall be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_security_context DataK8SK8UpIoScheduleV1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext;
  /**
  * Resources describes the compute resource requirements (cpu, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#resources DataK8SK8UpIoScheduleV1Manifest#resources}
  */
  readonly resources?: DataK8SK8UpIoScheduleV1ManifestSpecPruneResources;
  /**
  * Retention sets how many backups should be kept after a forget and prune
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#retention DataK8SK8UpIoScheduleV1Manifest#retention}
  */
  readonly retention?: DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention;
  /**
  * ScheduleDefinition is the actual cron-type expression that defines the interval of the actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#schedule DataK8SK8UpIoScheduleV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * SuccessfulJobsHistoryLimit amount of successful jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#successful_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#successful_jobs_history_limit}
  */
  readonly successfulJobsHistoryLimit?: number;
  /**
  * Volumes List of volumes that can be mounted by containers belonging to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#volumes DataK8SK8UpIoScheduleV1Manifest#volumes}
  */
  readonly volumes?: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecPruneToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    backend: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendToTerraform(struct!.backend),
    concurrent_runs_allowed: cdktf.booleanToTerraform(struct!.concurrentRunsAllowed),
    failed_jobs_history_limit: cdktf.numberToTerraform(struct!.failedJobsHistoryLimit),
    keep_jobs: cdktf.numberToTerraform(struct!.keepJobs),
    pod_config_ref: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefToTerraform(struct!.podConfigRef),
    pod_security_context: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextToTerraform(struct!.podSecurityContext),
    resources: dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesToTerraform(struct!.resources),
    retention: dataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionToTerraform(struct!.retention),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    successful_jobs_history_limit: cdktf.numberToTerraform(struct!.successfulJobsHistoryLimit),
    volumes: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecPruneToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecPrune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend",
    },
    concurrent_runs_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.concurrentRunsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_jobs: {
      value: cdktf.numberToHclTerraform(struct!.keepJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_config_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefToHclTerraform(struct!.podConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef",
    },
    pod_security_context: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext",
    },
    resources: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneResources",
    },
    retention: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecPruneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecPrune | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._concurrentRunsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentRunsAllowed = this._concurrentRunsAllowed;
    }
    if (this._failedJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedJobsHistoryLimit = this._failedJobsHistoryLimit;
    }
    if (this._keepJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepJobs = this._keepJobs;
    }
    if (this._podConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podConfigRef = this._podConfigRef?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._successfulJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulJobsHistoryLimit = this._successfulJobsHistoryLimit;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecPrune | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._backend.internalValue = undefined;
      this._concurrentRunsAllowed = undefined;
      this._failedJobsHistoryLimit = undefined;
      this._keepJobs = undefined;
      this._podConfigRef.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._retention.internalValue = undefined;
      this._schedule = undefined;
      this._successfulJobsHistoryLimit = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._backend.internalValue = value.backend;
      this._concurrentRunsAllowed = value.concurrentRunsAllowed;
      this._failedJobsHistoryLimit = value.failedJobsHistoryLimit;
      this._keepJobs = value.keepJobs;
      this._podConfigRef.internalValue = value.podConfigRef;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._resources.internalValue = value.resources;
      this._retention.internalValue = value.retention;
      this._schedule = value.schedule;
      this._successfulJobsHistoryLimit = value.successfulJobsHistoryLimit;
      this._volumes.internalValue = value.volumes;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SK8UpIoScheduleV1ManifestSpecPruneBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // concurrent_runs_allowed - computed: false, optional: true, required: false
  private _concurrentRunsAllowed?: boolean | cdktf.IResolvable; 
  public get concurrentRunsAllowed() {
    return this.getBooleanAttribute('concurrent_runs_allowed');
  }
  public set concurrentRunsAllowed(value: boolean | cdktf.IResolvable) {
    this._concurrentRunsAllowed = value;
  }
  public resetConcurrentRunsAllowed() {
    this._concurrentRunsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentRunsAllowedInput() {
    return this._concurrentRunsAllowed;
  }

  // failed_jobs_history_limit - computed: false, optional: true, required: false
  private _failedJobsHistoryLimit?: number; 
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }
  public set failedJobsHistoryLimit(value: number) {
    this._failedJobsHistoryLimit = value;
  }
  public resetFailedJobsHistoryLimit() {
    this._failedJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedJobsHistoryLimitInput() {
    return this._failedJobsHistoryLimit;
  }

  // keep_jobs - computed: false, optional: true, required: false
  private _keepJobs?: number; 
  public get keepJobs() {
    return this.getNumberAttribute('keep_jobs');
  }
  public set keepJobs(value: number) {
    this._keepJobs = value;
  }
  public resetKeepJobs() {
    this._keepJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobsInput() {
    return this._keepJobs;
  }

  // pod_config_ref - computed: false, optional: true, required: false
  private _podConfigRef = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRefOutputReference(this, "pod_config_ref");
  public get podConfigRef() {
    return this._podConfigRef;
  }
  public putPodConfigRef(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodConfigRef) {
    this._podConfigRef.internalValue = value;
  }
  public resetPodConfigRef() {
    this._podConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podConfigRefInput() {
    return this._podConfigRef.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8UpIoScheduleV1ManifestSpecPrunePodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8UpIoScheduleV1ManifestSpecPruneResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SK8UpIoScheduleV1ManifestSpecPruneRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
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

  // successful_jobs_history_limit - computed: false, optional: true, required: false
  private _successfulJobsHistoryLimit?: number; 
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }
  public set successfulJobsHistoryLimit(value: number) {
    this._successfulJobsHistoryLimit = value;
  }
  public resetSuccessfulJobsHistoryLimit() {
    this._successfulJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulJobsHistoryLimitInput() {
    return this._successfulJobsHistoryLimit;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SK8UpIoScheduleV1ManifestSpecPruneVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claims DataK8SK8UpIoScheduleV1Manifest#claims}
  */
  readonly claims?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#limits DataK8SK8UpIoScheduleV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#requests DataK8SK8UpIoScheduleV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsList",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateClaims[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#account_key_secret_ref DataK8SK8UpIoScheduleV1Manifest#account_key_secret_ref}
  */
  readonly accountKeySecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#account_name_secret_ref DataK8SK8UpIoScheduleV1Manifest#account_name_secret_ref}
  */
  readonly accountNameSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#container DataK8SK8UpIoScheduleV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefToTerraform(struct!.accountKeySecretRef),
    account_name_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefToTerraform(struct!.accountNameSecretRef),
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefToHclTerraform(struct!.accountKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef",
    },
    account_name_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefToHclTerraform(struct!.accountNameSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecretRef = this._accountKeySecretRef?.internalValue;
    }
    if (this._accountNameSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNameSecretRef = this._accountNameSecretRef?.internalValue;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKeySecretRef.internalValue = undefined;
      this._accountNameSecretRef.internalValue = undefined;
      this._container = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKeySecretRef.internalValue = value.accountKeySecretRef;
      this._accountNameSecretRef.internalValue = value.accountNameSecretRef;
      this._container = value.container;
      this._path = value.path;
    }
  }

  // account_key_secret_ref - computed: false, optional: true, required: false
  private _accountKeySecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRefOutputReference(this, "account_key_secret_ref");
  public get accountKeySecretRef() {
    return this._accountKeySecretRef;
  }
  public putAccountKeySecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountKeySecretRef) {
    this._accountKeySecretRef.internalValue = value;
  }
  public resetAccountKeySecretRef() {
    this._accountKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretRefInput() {
    return this._accountKeySecretRef.internalValue;
  }

  // account_name_secret_ref - computed: false, optional: true, required: false
  private _accountNameSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRefOutputReference(this, "account_name_secret_ref");
  public get accountNameSecretRef() {
    return this._accountNameSecretRef;
  }
  public putAccountNameSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureAccountNameSecretRef) {
    this._accountNameSecretRef.internalValue = value;
  }
  public resetAccountNameSecretRef() {
    this._accountNameSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameSecretRefInput() {
    return this._accountNameSecretRef.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#account_id_secret_ref DataK8SK8UpIoScheduleV1Manifest#account_id_secret_ref}
  */
  readonly accountIdSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#account_key_secret_ref DataK8SK8UpIoScheduleV1Manifest#account_key_secret_ref}
  */
  readonly accountKeySecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#bucket DataK8SK8UpIoScheduleV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2ToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefToTerraform(struct!.accountIdSecretRef),
    account_key_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefToTerraform(struct!.accountKeySecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2ToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefToHclTerraform(struct!.accountIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef",
    },
    account_key_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefToHclTerraform(struct!.accountKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdSecretRef = this._accountIdSecretRef?.internalValue;
    }
    if (this._accountKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecretRef = this._accountKeySecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdSecretRef.internalValue = undefined;
      this._accountKeySecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdSecretRef.internalValue = value.accountIdSecretRef;
      this._accountKeySecretRef.internalValue = value.accountKeySecretRef;
      this._bucket = value.bucket;
      this._path = value.path;
    }
  }

  // account_id_secret_ref - computed: false, optional: true, required: false
  private _accountIdSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRefOutputReference(this, "account_id_secret_ref");
  public get accountIdSecretRef() {
    return this._accountIdSecretRef;
  }
  public putAccountIdSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountIdSecretRef) {
    this._accountIdSecretRef.internalValue = value;
  }
  public resetAccountIdSecretRef() {
    this._accountIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdSecretRefInput() {
    return this._accountIdSecretRef.internalValue;
  }

  // account_key_secret_ref - computed: false, optional: true, required: false
  private _accountKeySecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRefOutputReference(this, "account_key_secret_ref");
  public get accountKeySecretRef() {
    return this._accountKeySecretRef;
  }
  public putAccountKeySecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2AccountKeySecretRef) {
    this._accountKeySecretRef.internalValue = value;
  }
  public resetAccountKeySecretRef() {
    this._accountKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretRefInput() {
    return this._accountKeySecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom {
  /**
  * The ConfigMap to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#config_map_ref DataK8SK8UpIoScheduleV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef;
  /**
  * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#prefix DataK8SK8UpIoScheduleV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The Secret to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_ref DataK8SK8UpIoScheduleV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#access_token_secret_ref DataK8SK8UpIoScheduleV1Manifest#access_token_secret_ref}
  */
  readonly accessTokenSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#bucket DataK8SK8UpIoScheduleV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#project_id_secret_ref DataK8SK8UpIoScheduleV1Manifest#project_id_secret_ref}
  */
  readonly projectIdSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefToTerraform(struct!.accessTokenSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    project_id_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefToTerraform(struct!.projectIdSecretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefToHclTerraform(struct!.accessTokenSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefToHclTerraform(struct!.projectIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSecretRef = this._accessTokenSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._projectIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdSecretRef = this._projectIdSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._projectIdSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenSecretRef.internalValue = value.accessTokenSecretRef;
      this._bucket = value.bucket;
      this._projectIdSecretRef.internalValue = value.projectIdSecretRef;
    }
  }

  // access_token_secret_ref - computed: false, optional: true, required: false
  private _accessTokenSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRefOutputReference(this, "access_token_secret_ref");
  public get accessTokenSecretRef() {
    return this._accessTokenSecretRef;
  }
  public putAccessTokenSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsAccessTokenSecretRef) {
    this._accessTokenSecretRef.internalValue = value;
  }
  public resetAccessTokenSecretRef() {
    this._accessTokenSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSecretRefInput() {
    return this._accessTokenSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // project_id_secret_ref - computed: false, optional: true, required: false
  private _projectIdSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRefOutputReference(this, "project_id_secret_ref");
  public get projectIdSecretRef() {
    return this._projectIdSecretRef;
  }
  public putProjectIdSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsProjectIdSecretRef) {
    this._projectIdSecretRef.internalValue = value;
  }
  public resetProjectIdSecretRef() {
    this._projectIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdSecretRefInput() {
    return this._projectIdSecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_path DataK8SK8UpIoScheduleV1Manifest#mount_path}
  */
  readonly mountPath?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#password_secret_reg DataK8SK8UpIoScheduleV1Manifest#password_secret_reg}
  */
  readonly passwordSecretReg?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#url DataK8SK8UpIoScheduleV1Manifest#url}
  */
  readonly url?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#user_secret_ref DataK8SK8UpIoScheduleV1Manifest#user_secret_ref}
  */
  readonly userSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_secret_reg: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegToTerraform(struct!.passwordSecretReg),
    url: cdktf.stringToTerraform(struct!.url),
    user_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefToTerraform(struct!.userSecretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_secret_reg: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegToHclTerraform(struct!.passwordSecretReg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefToHclTerraform(struct!.userSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordSecretReg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretReg = this._passwordSecretReg?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSecretRef = this._userSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordSecretReg.internalValue = undefined;
      this._url = undefined;
      this._userSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordSecretReg.internalValue = value.passwordSecretReg;
      this._url = value.url;
      this._userSecretRef.internalValue = value.userSecretRef;
    }
  }

  // password_secret_reg - computed: false, optional: true, required: false
  private _passwordSecretReg = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretRegOutputReference(this, "password_secret_reg");
  public get passwordSecretReg() {
    return this._passwordSecretReg;
  }
  public putPasswordSecretReg(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestPasswordSecretReg) {
    this._passwordSecretReg.internalValue = value;
  }
  public resetPasswordSecretReg() {
    this._passwordSecretReg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRegInput() {
    return this._passwordSecretReg.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_secret_ref - computed: false, optional: true, required: false
  private _userSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRefOutputReference(this, "user_secret_ref");
  public get userSecretRef() {
    return this._userSecretRef;
  }
  public putUserSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestUserSecretRef) {
    this._userSecretRef.internalValue = value;
  }
  public resetUserSecretRef() {
    this._userSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSecretRefInput() {
    return this._userSecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#access_key_id_secret_ref DataK8SK8UpIoScheduleV1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#bucket DataK8SK8UpIoScheduleV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#endpoint DataK8SK8UpIoScheduleV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_access_key_secret_ref DataK8SK8UpIoScheduleV1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3ToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secret_access_key_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3ToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: true, required: false
  private _accessKeyIdSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3AccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  public resetAccessKeyIdSecretRef() {
    this._accessKeyIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3SecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#container DataK8SK8UpIoScheduleV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._path = value.path;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#ca_cert DataK8SK8UpIoScheduleV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_cert DataK8SK8UpIoScheduleV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_key DataK8SK8UpIoScheduleV1Manifest#client_key}
  */
  readonly clientKey?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_path DataK8SK8UpIoScheduleV1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_propagation DataK8SK8UpIoScheduleV1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path DataK8SK8UpIoScheduleV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path_expr DataK8SK8UpIoScheduleV1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#azure DataK8SK8UpIoScheduleV1Manifest#azure}
  */
  readonly azure?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#b2 DataK8SK8UpIoScheduleV1Manifest#b2}
  */
  readonly b2?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2;
  /**
  * EnvFrom adds all environment variables from a an external source to the Restic job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#env_from DataK8SK8UpIoScheduleV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gcs DataK8SK8UpIoScheduleV1Manifest#gcs}
  */
  readonly gcs?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#local DataK8SK8UpIoScheduleV1Manifest#local}
  */
  readonly local?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal;
  /**
  * RepoPasswordSecretRef references a secret key to look up the restic repository password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#repo_password_secret_ref DataK8SK8UpIoScheduleV1Manifest#repo_password_secret_ref}
  */
  readonly repoPasswordSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#rest DataK8SK8UpIoScheduleV1Manifest#rest}
  */
  readonly rest?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#s3 DataK8SK8UpIoScheduleV1Manifest#s3}
  */
  readonly s3?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#swift DataK8SK8UpIoScheduleV1Manifest#swift}
  */
  readonly swift?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#tls_options DataK8SK8UpIoScheduleV1Manifest#tls_options}
  */
  readonly tlsOptions?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#volume_mounts DataK8SK8UpIoScheduleV1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureToTerraform(struct!.azure),
    b2: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2ToTerraform(struct!.b2),
    env_from: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromToTerraform, false)(struct!.envFrom),
    gcs: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsToTerraform(struct!.gcs),
    local: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalToTerraform(struct!.local),
    repo_password_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefToTerraform(struct!.repoPasswordSecretRef),
    rest: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestToTerraform(struct!.rest),
    s3: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3ToTerraform(struct!.s3),
    swift: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftToTerraform(struct!.swift),
    tls_options: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsToTerraform(struct!.tlsOptions),
    volume_mounts: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure",
    },
    b2: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2ToHclTerraform(struct!.b2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromList",
    },
    gcs: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs",
    },
    local: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal",
    },
    repo_password_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefToHclTerraform(struct!.repoPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef",
    },
    rest: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest",
    },
    s3: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3",
    },
    swift: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftToHclTerraform(struct!.swift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift",
    },
    tls_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsToHclTerraform(struct!.tlsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._b2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.b2 = this._b2?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._repoPasswordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoPasswordSecretRef = this._repoPasswordSecretRef?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._swift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swift = this._swift?.internalValue;
    }
    if (this._tlsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsOptions = this._tlsOptions?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._b2.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._local.internalValue = undefined;
      this._repoPasswordSecretRef.internalValue = undefined;
      this._rest.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._swift.internalValue = undefined;
      this._tlsOptions.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._b2.internalValue = value.b2;
      this._envFrom.internalValue = value.envFrom;
      this._gcs.internalValue = value.gcs;
      this._local.internalValue = value.local;
      this._repoPasswordSecretRef.internalValue = value.repoPasswordSecretRef;
      this._rest.internalValue = value.rest;
      this._s3.internalValue = value.s3;
      this._swift.internalValue = value.swift;
      this._tlsOptions.internalValue = value.tlsOptions;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // b2 - computed: false, optional: true, required: false
  private _b2 = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2OutputReference(this, "b2");
  public get b2() {
    return this._b2;
  }
  public putB2(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendB2) {
    this._b2.internalValue = value;
  }
  public resetB2() {
    this._b2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get b2Input() {
    return this._b2.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // repo_password_secret_ref - computed: false, optional: true, required: false
  private _repoPasswordSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRefOutputReference(this, "repo_password_secret_ref");
  public get repoPasswordSecretRef() {
    return this._repoPasswordSecretRef;
  }
  public putRepoPasswordSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRepoPasswordSecretRef) {
    this._repoPasswordSecretRef.internalValue = value;
  }
  public resetRepoPasswordSecretRef() {
    this._repoPasswordSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoPasswordSecretRefInput() {
    return this._repoPasswordSecretRef.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // swift - computed: false, optional: true, required: false
  private _swift = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwiftOutputReference(this, "swift");
  public get swift() {
    return this._swift;
  }
  public putSwift(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendSwift) {
    this._swift.internalValue = value;
  }
  public resetSwift() {
    this._swift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftInput() {
    return this._swift.internalValue;
  }

  // tls_options - computed: false, optional: true, required: false
  private _tlsOptions = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptionsOutputReference(this, "tls_options");
  public get tlsOptions() {
    return this._tlsOptions;
  }
  public putTlsOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendTlsOptions) {
    this._tlsOptions.internalValue = value;
  }
  public resetTlsOptions() {
    this._tlsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionsInput() {
    return this._tlsOptions.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#level DataK8SK8UpIoScheduleV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#role DataK8SK8UpIoScheduleV1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#type DataK8SK8UpIoScheduleV1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#user DataK8SK8UpIoScheduleV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#localhost_profile DataK8SK8UpIoScheduleV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#type DataK8SK8UpIoScheduleV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#value DataK8SK8UpIoScheduleV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gmsa_credential_spec DataK8SK8UpIoScheduleV1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#gmsa_credential_spec_name DataK8SK8UpIoScheduleV1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#host_process DataK8SK8UpIoScheduleV1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_user_name DataK8SK8UpIoScheduleV1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#fs_group DataK8SK8UpIoScheduleV1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#fs_group_change_policy DataK8SK8UpIoScheduleV1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_group DataK8SK8UpIoScheduleV1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_non_root DataK8SK8UpIoScheduleV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#run_as_user DataK8SK8UpIoScheduleV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#se_linux_options DataK8SK8UpIoScheduleV1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#seccomp_profile DataK8SK8UpIoScheduleV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#supplemental_groups DataK8SK8UpIoScheduleV1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sysctls DataK8SK8UpIoScheduleV1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#windows_options DataK8SK8UpIoScheduleV1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claims DataK8SK8UpIoScheduleV1Manifest#claims}
  */
  readonly claims?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#limits DataK8SK8UpIoScheduleV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#requests DataK8SK8UpIoScheduleV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsList",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claim_name DataK8SK8UpIoScheduleV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#access_key_id_secret_ref DataK8SK8UpIoScheduleV1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#bucket DataK8SK8UpIoScheduleV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#endpoint DataK8SK8UpIoScheduleV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_access_key_secret_ref DataK8SK8UpIoScheduleV1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3ToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secret_access_key_secret_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3ToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: true, required: false
  private _accessKeyIdSecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3AccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  public resetAccessKeyIdSecretRef() {
    this._accessKeyIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3SecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#ca_cert DataK8SK8UpIoScheduleV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_cert DataK8SK8UpIoScheduleV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#client_key DataK8SK8UpIoScheduleV1Manifest#client_key}
  */
  readonly clientKey?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_path DataK8SK8UpIoScheduleV1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mount_propagation DataK8SK8UpIoScheduleV1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path DataK8SK8UpIoScheduleV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#sub_path_expr DataK8SK8UpIoScheduleV1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#folder DataK8SK8UpIoScheduleV1Manifest#folder}
  */
  readonly folder?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#s3 DataK8SK8UpIoScheduleV1Manifest#s3}
  */
  readonly s3?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#tls_options DataK8SK8UpIoScheduleV1Manifest#tls_options}
  */
  readonly tlsOptions?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#volume_mounts DataK8SK8UpIoScheduleV1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderToTerraform(struct!.folder),
    s3: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3ToTerraform(struct!.s3),
    tls_options: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsToTerraform(struct!.tlsOptions),
    volume_mounts: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderToHclTerraform(struct!.folder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder",
    },
    s3: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3",
    },
    tls_options: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsToHclTerraform(struct!.tlsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._tlsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsOptions = this._tlsOptions?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folder.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._tlsOptions.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folder.internalValue = value.folder;
      this._s3.internalValue = value.s3;
      this._tlsOptions.internalValue = value.tlsOptions;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // folder - computed: false, optional: true, required: false
  private _folder = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolderOutputReference(this, "folder");
  public get folder() {
    return this._folder;
  }
  public putFolder(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodFolder) {
    this._folder.internalValue = value;
  }
  public resetFolder() {
    this._folder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // tls_options - computed: false, optional: true, required: false
  private _tlsOptions = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptionsOutputReference(this, "tls_options");
  public get tlsOptions() {
    return this._tlsOptions;
  }
  public putTlsOptions(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodTlsOptions) {
    this._tlsOptions.internalValue = value;
  }
  public resetTlsOptions() {
    this._tlsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionsInput() {
    return this._tlsOptions.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mode DataK8SK8UpIoScheduleV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#default_mode DataK8SK8UpIoScheduleV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#items DataK8SK8UpIoScheduleV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsList",
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#claim_name DataK8SK8UpIoScheduleV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#read_only DataK8SK8UpIoScheduleV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#key DataK8SK8UpIoScheduleV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#mode DataK8SK8UpIoScheduleV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#path DataK8SK8UpIoScheduleV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#default_mode DataK8SK8UpIoScheduleV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#items DataK8SK8UpIoScheduleV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#optional DataK8SK8UpIoScheduleV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret_name DataK8SK8UpIoScheduleV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes {
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#config_map DataK8SK8UpIoScheduleV1Manifest#config_map}
  */
  readonly configMap?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#name DataK8SK8UpIoScheduleV1Manifest#name}
  */
  readonly name: string;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#persistent_volume_claim DataK8SK8UpIoScheduleV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#secret DataK8SK8UpIoScheduleV1Manifest#secret}
  */
  readonly secret?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapToTerraform(struct!.configMap),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._name = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesOutputReference {
    return new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpecRestore {
  /**
  * ActiveDeadlineSeconds specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it. Value must be positive integer if given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#active_deadline_seconds DataK8SK8UpIoScheduleV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Backend contains the restic repo where the job should backup to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#backend DataK8SK8UpIoScheduleV1Manifest#backend}
  */
  readonly backend?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#concurrent_runs_allowed DataK8SK8UpIoScheduleV1Manifest#concurrent_runs_allowed}
  */
  readonly concurrentRunsAllowed?: boolean | cdktf.IResolvable;
  /**
  * FailedJobsHistoryLimit amount of failed jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#failed_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#failed_jobs_history_limit}
  */
  readonly failedJobsHistoryLimit?: number;
  /**
  * KeepJobs amount of jobs to keep for later analysis. Deprecated: Use FailedJobsHistoryLimit and SuccessfulJobsHistoryLimit respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_jobs DataK8SK8UpIoScheduleV1Manifest#keep_jobs}
  */
  readonly keepJobs?: number;
  /**
  * PodConfigRef describes the pod spec with wich this action shall be executed. It takes precedence over the Resources or PodSecurityContext field. It does not allow changing the image or the command of the resulting pod. This is for advanced use-cases only. Please only set this if you know what you're doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_config_ref DataK8SK8UpIoScheduleV1Manifest#pod_config_ref}
  */
  readonly podConfigRef?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef;
  /**
  * PodSecurityContext describes the security context with which this action shall be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_security_context DataK8SK8UpIoScheduleV1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext;
  /**
  * Resources describes the compute resource requirements (cpu, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#resources DataK8SK8UpIoScheduleV1Manifest#resources}
  */
  readonly resources?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#restore_filter DataK8SK8UpIoScheduleV1Manifest#restore_filter}
  */
  readonly restoreFilter?: string;
  /**
  * RestoreMethod contains how and where the restore should happen all the settings are mutual exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#restore_method DataK8SK8UpIoScheduleV1Manifest#restore_method}
  */
  readonly restoreMethod?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod;
  /**
  * ScheduleDefinition is the actual cron-type expression that defines the interval of the actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#schedule DataK8SK8UpIoScheduleV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#snapshot DataK8SK8UpIoScheduleV1Manifest#snapshot}
  */
  readonly snapshot?: string;
  /**
  * SuccessfulJobsHistoryLimit amount of successful jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#successful_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#successful_jobs_history_limit}
  */
  readonly successfulJobsHistoryLimit?: number;
  /**
  * Tags is a list of arbitrary tags that get added to the backup via Restic's tagging system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#tags DataK8SK8UpIoScheduleV1Manifest#tags}
  */
  readonly tags?: string[];
  /**
  * Volumes List of volumes that can be mounted by containers belonging to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#volumes DataK8SK8UpIoScheduleV1Manifest#volumes}
  */
  readonly volumes?: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    backend: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendToTerraform(struct!.backend),
    concurrent_runs_allowed: cdktf.booleanToTerraform(struct!.concurrentRunsAllowed),
    failed_jobs_history_limit: cdktf.numberToTerraform(struct!.failedJobsHistoryLimit),
    keep_jobs: cdktf.numberToTerraform(struct!.keepJobs),
    pod_config_ref: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefToTerraform(struct!.podConfigRef),
    pod_security_context: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextToTerraform(struct!.podSecurityContext),
    resources: dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesToTerraform(struct!.resources),
    restore_filter: cdktf.stringToTerraform(struct!.restoreFilter),
    restore_method: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodToTerraform(struct!.restoreMethod),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    snapshot: cdktf.stringToTerraform(struct!.snapshot),
    successful_jobs_history_limit: cdktf.numberToTerraform(struct!.successfulJobsHistoryLimit),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    volumes: cdktf.listMapper(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecRestoreToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpecRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend",
    },
    concurrent_runs_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.concurrentRunsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_jobs: {
      value: cdktf.numberToHclTerraform(struct!.keepJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_config_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefToHclTerraform(struct!.podConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef",
    },
    pod_security_context: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext",
    },
    resources: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources",
    },
    restore_filter: {
      value: cdktf.stringToHclTerraform(struct!.restoreFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_method: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodToHclTerraform(struct!.restoreMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.stringToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpecRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._concurrentRunsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentRunsAllowed = this._concurrentRunsAllowed;
    }
    if (this._failedJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedJobsHistoryLimit = this._failedJobsHistoryLimit;
    }
    if (this._keepJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepJobs = this._keepJobs;
    }
    if (this._podConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podConfigRef = this._podConfigRef?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restoreFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreFilter = this._restoreFilter;
    }
    if (this._restoreMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreMethod = this._restoreMethod?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._successfulJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulJobsHistoryLimit = this._successfulJobsHistoryLimit;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpecRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._backend.internalValue = undefined;
      this._concurrentRunsAllowed = undefined;
      this._failedJobsHistoryLimit = undefined;
      this._keepJobs = undefined;
      this._podConfigRef.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._restoreFilter = undefined;
      this._restoreMethod.internalValue = undefined;
      this._schedule = undefined;
      this._snapshot = undefined;
      this._successfulJobsHistoryLimit = undefined;
      this._tags = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._backend.internalValue = value.backend;
      this._concurrentRunsAllowed = value.concurrentRunsAllowed;
      this._failedJobsHistoryLimit = value.failedJobsHistoryLimit;
      this._keepJobs = value.keepJobs;
      this._podConfigRef.internalValue = value.podConfigRef;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._resources.internalValue = value.resources;
      this._restoreFilter = value.restoreFilter;
      this._restoreMethod.internalValue = value.restoreMethod;
      this._schedule = value.schedule;
      this._snapshot = value.snapshot;
      this._successfulJobsHistoryLimit = value.successfulJobsHistoryLimit;
      this._tags = value.tags;
      this._volumes.internalValue = value.volumes;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // concurrent_runs_allowed - computed: false, optional: true, required: false
  private _concurrentRunsAllowed?: boolean | cdktf.IResolvable; 
  public get concurrentRunsAllowed() {
    return this.getBooleanAttribute('concurrent_runs_allowed');
  }
  public set concurrentRunsAllowed(value: boolean | cdktf.IResolvable) {
    this._concurrentRunsAllowed = value;
  }
  public resetConcurrentRunsAllowed() {
    this._concurrentRunsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentRunsAllowedInput() {
    return this._concurrentRunsAllowed;
  }

  // failed_jobs_history_limit - computed: false, optional: true, required: false
  private _failedJobsHistoryLimit?: number; 
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }
  public set failedJobsHistoryLimit(value: number) {
    this._failedJobsHistoryLimit = value;
  }
  public resetFailedJobsHistoryLimit() {
    this._failedJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedJobsHistoryLimitInput() {
    return this._failedJobsHistoryLimit;
  }

  // keep_jobs - computed: false, optional: true, required: false
  private _keepJobs?: number; 
  public get keepJobs() {
    return this.getNumberAttribute('keep_jobs');
  }
  public set keepJobs(value: number) {
    this._keepJobs = value;
  }
  public resetKeepJobs() {
    this._keepJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobsInput() {
    return this._keepJobs;
  }

  // pod_config_ref - computed: false, optional: true, required: false
  private _podConfigRef = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRefOutputReference(this, "pod_config_ref");
  public get podConfigRef() {
    return this._podConfigRef;
  }
  public putPodConfigRef(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodConfigRef) {
    this._podConfigRef.internalValue = value;
  }
  public resetPodConfigRef() {
    this._podConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podConfigRefInput() {
    return this._podConfigRef.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8UpIoScheduleV1ManifestSpecRestorePodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restore_filter - computed: false, optional: true, required: false
  private _restoreFilter?: string; 
  public get restoreFilter() {
    return this.getStringAttribute('restore_filter');
  }
  public set restoreFilter(value: string) {
    this._restoreFilter = value;
  }
  public resetRestoreFilter() {
    this._restoreFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFilterInput() {
    return this._restoreFilter;
  }

  // restore_method - computed: false, optional: true, required: false
  private _restoreMethod = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethodOutputReference(this, "restore_method");
  public get restoreMethod() {
    return this._restoreMethod;
  }
  public putRestoreMethod(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreRestoreMethod) {
    this._restoreMethod.internalValue = value;
  }
  public resetRestoreMethod() {
    this._restoreMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreMethodInput() {
    return this._restoreMethod.internalValue;
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

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // successful_jobs_history_limit - computed: false, optional: true, required: false
  private _successfulJobsHistoryLimit?: number; 
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }
  public set successfulJobsHistoryLimit(value: number) {
    this._successfulJobsHistoryLimit = value;
  }
  public resetSuccessfulJobsHistoryLimit() {
    this._successfulJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulJobsHistoryLimitInput() {
    return this._successfulJobsHistoryLimit;
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

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SK8UpIoScheduleV1ManifestSpecRestoreVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SK8UpIoScheduleV1ManifestSpec {
  /**
  * ArchiveSchedule manages schedules for the archival service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#archive DataK8SK8UpIoScheduleV1Manifest#archive}
  */
  readonly archive?: DataK8SK8UpIoScheduleV1ManifestSpecArchive;
  /**
  * Backend allows configuring several backend implementations. It is expected that users only configure one storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#backend DataK8SK8UpIoScheduleV1Manifest#backend}
  */
  readonly backend?: DataK8SK8UpIoScheduleV1ManifestSpecBackend;
  /**
  * BackupSchedule manages schedules for the backup service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#backup DataK8SK8UpIoScheduleV1Manifest#backup}
  */
  readonly backup?: DataK8SK8UpIoScheduleV1ManifestSpecBackup;
  /**
  * CheckSchedule manages the schedules for the checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#check DataK8SK8UpIoScheduleV1Manifest#check}
  */
  readonly check?: DataK8SK8UpIoScheduleV1ManifestSpecCheck;
  /**
  * FailedJobsHistoryLimit amount of failed jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#failed_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#failed_jobs_history_limit}
  */
  readonly failedJobsHistoryLimit?: number;
  /**
  * KeepJobs amount of jobs to keep for later analysis. Deprecated: Use FailedJobsHistoryLimit and SuccessfulJobsHistoryLimit respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#keep_jobs DataK8SK8UpIoScheduleV1Manifest#keep_jobs}
  */
  readonly keepJobs?: number;
  /**
  * PodConfigRef will apply the given template to all job definitions in this Schedule. It can be overriden for specific jobs if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_config_ref DataK8SK8UpIoScheduleV1Manifest#pod_config_ref}
  */
  readonly podConfigRef?: DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRef;
  /**
  * PodSecurityContext describes the security context with which actions (such as backups) shall be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#pod_security_context DataK8SK8UpIoScheduleV1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContext;
  /**
  * PruneSchedule manages the schedules for the prunes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#prune DataK8SK8UpIoScheduleV1Manifest#prune}
  */
  readonly prune?: DataK8SK8UpIoScheduleV1ManifestSpecPrune;
  /**
  * ResourceRequirementsTemplate describes the compute resource requirements (cpu, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#resource_requirements_template DataK8SK8UpIoScheduleV1Manifest#resource_requirements_template}
  */
  readonly resourceRequirementsTemplate?: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate;
  /**
  * RestoreSchedule manages schedules for the restore service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#restore DataK8SK8UpIoScheduleV1Manifest#restore}
  */
  readonly restore?: DataK8SK8UpIoScheduleV1ManifestSpecRestore;
  /**
  * SuccessfulJobsHistoryLimit amount of successful jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/k8up_io_schedule_v1_manifest#successful_jobs_history_limit DataK8SK8UpIoScheduleV1Manifest#successful_jobs_history_limit}
  */
  readonly successfulJobsHistoryLimit?: number;
}

export function dataK8SK8UpIoScheduleV1ManifestSpecToTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive: dataK8SK8UpIoScheduleV1ManifestSpecArchiveToTerraform(struct!.archive),
    backend: dataK8SK8UpIoScheduleV1ManifestSpecBackendToTerraform(struct!.backend),
    backup: dataK8SK8UpIoScheduleV1ManifestSpecBackupToTerraform(struct!.backup),
    check: dataK8SK8UpIoScheduleV1ManifestSpecCheckToTerraform(struct!.check),
    failed_jobs_history_limit: cdktf.numberToTerraform(struct!.failedJobsHistoryLimit),
    keep_jobs: cdktf.numberToTerraform(struct!.keepJobs),
    pod_config_ref: dataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefToTerraform(struct!.podConfigRef),
    pod_security_context: dataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    prune: dataK8SK8UpIoScheduleV1ManifestSpecPruneToTerraform(struct!.prune),
    resource_requirements_template: dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateToTerraform(struct!.resourceRequirementsTemplate),
    restore: dataK8SK8UpIoScheduleV1ManifestSpecRestoreToTerraform(struct!.restore),
    successful_jobs_history_limit: cdktf.numberToTerraform(struct!.successfulJobsHistoryLimit),
  }
}


export function dataK8SK8UpIoScheduleV1ManifestSpecToHclTerraform(struct?: DataK8SK8UpIoScheduleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecArchive",
    },
    backend: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecBackend",
    },
    backup: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecBackup",
    },
    check: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecCheckToHclTerraform(struct!.check),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecCheck",
    },
    failed_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_jobs: {
      value: cdktf.numberToHclTerraform(struct!.keepJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_config_ref: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefToHclTerraform(struct!.podConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRef",
    },
    pod_security_context: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContext",
    },
    prune: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecPruneToHclTerraform(struct!.prune),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecPrune",
    },
    resource_requirements_template: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateToHclTerraform(struct!.resourceRequirementsTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate",
    },
    restore: {
      value: dataK8SK8UpIoScheduleV1ManifestSpecRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoScheduleV1ManifestSpecRestore",
    },
    successful_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoScheduleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoScheduleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._check?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check?.internalValue;
    }
    if (this._failedJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedJobsHistoryLimit = this._failedJobsHistoryLimit;
    }
    if (this._keepJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepJobs = this._keepJobs;
    }
    if (this._podConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podConfigRef = this._podConfigRef?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._prune?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune?.internalValue;
    }
    if (this._resourceRequirementsTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirementsTemplate = this._resourceRequirementsTemplate?.internalValue;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    if (this._successfulJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulJobsHistoryLimit = this._successfulJobsHistoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoScheduleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archive.internalValue = undefined;
      this._backend.internalValue = undefined;
      this._backup.internalValue = undefined;
      this._check.internalValue = undefined;
      this._failedJobsHistoryLimit = undefined;
      this._keepJobs = undefined;
      this._podConfigRef.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._prune.internalValue = undefined;
      this._resourceRequirementsTemplate.internalValue = undefined;
      this._restore.internalValue = undefined;
      this._successfulJobsHistoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archive.internalValue = value.archive;
      this._backend.internalValue = value.backend;
      this._backup.internalValue = value.backup;
      this._check.internalValue = value.check;
      this._failedJobsHistoryLimit = value.failedJobsHistoryLimit;
      this._keepJobs = value.keepJobs;
      this._podConfigRef.internalValue = value.podConfigRef;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._prune.internalValue = value.prune;
      this._resourceRequirementsTemplate.internalValue = value.resourceRequirementsTemplate;
      this._restore.internalValue = value.restore;
      this._successfulJobsHistoryLimit = value.successfulJobsHistoryLimit;
    }
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new DataK8SK8UpIoScheduleV1ManifestSpecArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: DataK8SK8UpIoScheduleV1ManifestSpecArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SK8UpIoScheduleV1ManifestSpecBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8UpIoScheduleV1ManifestSpecBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SK8UpIoScheduleV1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SK8UpIoScheduleV1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // check - computed: false, optional: true, required: false
  private _check = new DataK8SK8UpIoScheduleV1ManifestSpecCheckOutputReference(this, "check");
  public get check() {
    return this._check;
  }
  public putCheck(value: DataK8SK8UpIoScheduleV1ManifestSpecCheck) {
    this._check.internalValue = value;
  }
  public resetCheck() {
    this._check.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check.internalValue;
  }

  // failed_jobs_history_limit - computed: false, optional: true, required: false
  private _failedJobsHistoryLimit?: number; 
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }
  public set failedJobsHistoryLimit(value: number) {
    this._failedJobsHistoryLimit = value;
  }
  public resetFailedJobsHistoryLimit() {
    this._failedJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedJobsHistoryLimitInput() {
    return this._failedJobsHistoryLimit;
  }

  // keep_jobs - computed: false, optional: true, required: false
  private _keepJobs?: number; 
  public get keepJobs() {
    return this.getNumberAttribute('keep_jobs');
  }
  public set keepJobs(value: number) {
    this._keepJobs = value;
  }
  public resetKeepJobs() {
    this._keepJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobsInput() {
    return this._keepJobs;
  }

  // pod_config_ref - computed: false, optional: true, required: false
  private _podConfigRef = new DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRefOutputReference(this, "pod_config_ref");
  public get podConfigRef() {
    return this._podConfigRef;
  }
  public putPodConfigRef(value: DataK8SK8UpIoScheduleV1ManifestSpecPodConfigRef) {
    this._podConfigRef.internalValue = value;
  }
  public resetPodConfigRef() {
    this._podConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podConfigRefInput() {
    return this._podConfigRef.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8UpIoScheduleV1ManifestSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // prune - computed: false, optional: true, required: false
  private _prune = new DataK8SK8UpIoScheduleV1ManifestSpecPruneOutputReference(this, "prune");
  public get prune() {
    return this._prune;
  }
  public putPrune(value: DataK8SK8UpIoScheduleV1ManifestSpecPrune) {
    this._prune.internalValue = value;
  }
  public resetPrune() {
    this._prune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune.internalValue;
  }

  // resource_requirements_template - computed: false, optional: true, required: false
  private _resourceRequirementsTemplate = new DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplateOutputReference(this, "resource_requirements_template");
  public get resourceRequirementsTemplate() {
    return this._resourceRequirementsTemplate;
  }
  public putResourceRequirementsTemplate(value: DataK8SK8UpIoScheduleV1ManifestSpecResourceRequirementsTemplate) {
    this._resourceRequirementsTemplate.internalValue = value;
  }
  public resetResourceRequirementsTemplate() {
    this._resourceRequirementsTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsTemplateInput() {
    return this._resourceRequirementsTemplate.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataK8SK8UpIoScheduleV1ManifestSpecRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataK8SK8UpIoScheduleV1ManifestSpecRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // successful_jobs_history_limit - computed: false, optional: true, required: false
  private _successfulJobsHistoryLimit?: number; 
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }
  public set successfulJobsHistoryLimit(value: number) {
    this._successfulJobsHistoryLimit = value;
  }
  public resetSuccessfulJobsHistoryLimit() {
    this._successfulJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulJobsHistoryLimitInput() {
    return this._successfulJobsHistoryLimit;
  }
}
